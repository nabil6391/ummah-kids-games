(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Tc=()=>matchMedia("(prefers-reduced-motion: reduce)").matches,Ih=n=>String(n??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),ee={red:"#ea5d50",gold:"#f6cf5c",green:"#71cf6d",blue:"#6f95e6",teal:"#5fbfb0",purple:"#a98ae0",orange:"#f3a04c",pink:"#f08cb0",sand:"#e9d6a8",paper:"#fffaf0",skin:"#e0a878",skin2:"#c68a5e",wood:"#c98a4d",sky:"#bfe0f5"},yn=(n,e,t)=>`<ellipse cx="${n}" cy="${t}" rx="1.7" ry="2.4" fill="currentColor" stroke="none"/><ellipse cx="${e}" cy="${t}" rx="1.7" ry="2.4" fill="currentColor" stroke="none"/>`,Ms={fire:`<path d="M32 6c3 8 12 12 12 24a12 12 0 0 1-24 0c0-6 3-9 5-12 0 5 2 7 4 8 0-8-1-14 3-20z" fill="${ee.orange}"/><path d="M32 22c2 4 6 6 6 11a6 6 0 0 1-12 0c0-4 3-6 6-11z" fill="${ee.gold}" stroke="none"/><path d="M14 56h36" /><path d="M18 50l28 6M46 50l-28 6" stroke-width="4"/>`,moon:'<path d="M40 8a22 22 0 1 0 16 36A18 18 0 0 1 40 8z" fill="#fff2a8"/><circle cx="50" cy="16" r="2" fill="currentColor" stroke="none"/><circle cx="58" cy="30" r="1.6" fill="currentColor" stroke="none"/>',star:`<path d="M32 6l7.5 16 17.5 2-13 12 3.5 17L32 44l-15.5 9 3.5-17-13-12 17.5-2z" fill="${ee.gold}"/>`,book:`<path d="M8 14q22-6 24 4v36q-2-8-24-4z" fill="${ee.paper}"/><path d="M56 14q-22-6-24 4v36q2-8 24-4z" fill="${ee.paper}"/><path d="M14 24l12 2M14 32l12 2M38 26l12-2M38 34l12-2" stroke-width="2.4"/>`,quran:`<path d="M10 42l22 10 22-10v-8l-22 10-22-10z" fill="${ee.wood}"/><path d="M12 30q20-8 20 2v18q0-8-20-2z" fill="${ee.green}"/><path d="M52 30q-20-8-20 2v18q0-8 20-2z" fill="${ee.green}"/><path d="M18 36l8 1M18 42l8 1M38 37l8-1M38 43l8-1" stroke="#fff" stroke-width="2.4"/><path d="M32 12v6M24 16l3 4M40 16l-3 4" stroke-width="2.6"/>`,scroll:`<path d="M16 14h32v34H16z" fill="${ee.paper}"/><rect x="10" y="10" width="44" height="8" rx="4" fill="${ee.sand}"/><rect x="10" y="46" width="44" height="8" rx="4" fill="${ee.sand}"/><path d="M24 26h16M24 34h12" stroke-width="2.6"/>`,map:`<path d="M8 16l16-6 16 6 16-6v38l-16 6-16-6-16 6z" fill="${ee.sand}"/><path d="M24 10v38M40 16v38" stroke-width="2.4"/><path d="M14 36q6-10 14-4t12-8" stroke="${ee.red}" stroke-dasharray="4 3" stroke-width="2.6"/><path d="M44 24l6 6M50 24l-6 6" stroke="${ee.red}" stroke-width="3"/>`,chest:`<rect x="8" y="26" width="48" height="28" rx="4" fill="${ee.wood}"/><path d="M8 30a24 14 0 0 1 48 0z" fill="${ee.red}"/><rect x="26" y="26" width="12" height="12" rx="2" fill="${ee.gold}"/><path d="M8 30h48" />`,key:`<circle cx="22" cy="24" r="12" fill="${ee.gold}"/><circle cx="22" cy="24" r="4" fill="${ee.paper}"/><path d="M32 30l20 20M46 44l6-6M40 50l6-6" stroke-width="5" stroke="currentColor"/><path d="M32 30l20 20M46 44l6-6M40 50l6-6" stroke="${ee.gold}" stroke-width="2"/>`,lock:`<rect x="14" y="28" width="36" height="28" rx="6" fill="${ee.gold}"/><path d="M20 28v-8a12 12 0 0 1 24 0v8" fill="none" stroke-width="5"/><circle cx="32" cy="40" r="4" fill="currentColor" stroke="none"/><path d="M32 42v8" stroke-width="3.5"/>`,unlock:`<rect x="14" y="28" width="36" height="28" rx="6" fill="${ee.green}"/><path d="M20 28v-8a12 12 0 0 1 24 0" fill="none" stroke-width="5"/><circle cx="32" cy="40" r="4" fill="currentColor" stroke="none"/><path d="M32 42v8" stroke-width="3.5"/>`,house:`<path d="M6 32L32 8l26 24" fill="none" stroke-width="4"/><path d="M12 30v26h40V30" fill="${ee.paper}"/><path d="M12 30L32 12l20 18z" fill="${ee.red}"/><rect x="26" y="38" width="12" height="18" rx="2" fill="${ee.wood}"/><rect x="42" y="36" width="8" height="8" fill="${ee.sky}"/>`,door:`<rect x="16" y="8" width="32" height="50" rx="14" fill="${ee.wood}"/><rect x="22" y="14" width="20" height="38" rx="8" fill="none" stroke-width="2.4"/><circle cx="40" cy="36" r="3" fill="${ee.gold}"/><path d="M8 58h48" stroke-width="3.5"/>`,magnifier:`<circle cx="26" cy="26" r="16" fill="#dfe8ff"/><circle cx="26" cy="26" r="9" fill="none" stroke="#fff" stroke-width="3"/><path d="M38 38l16 16" stroke-width="8"/><path d="M38 38l16 16" stroke="${ee.red}" stroke-width="3.5"/>`,badge:`<path d="M20 36l-6 22 18-8 18 8-6-22" fill="${ee.red}"/><circle cx="32" cy="24" r="18" fill="${ee.gold}"/><path d="M32 13l3.5 7 8 1-6 5.5 1.5 8-7-4-7 4 1.5-8-6-5.5 8-1z" fill="${ee.paper}" stroke-width="2.2"/>`,tick:`<path d="M12 34l14 14 26-30" fill="none" stroke-width="11"/><path d="M12 34l14 14 26-30" fill="none" stroke="${ee.green}" stroke-width="5"/>`,hand:`<path d="M22 30V14a4 4 0 0 1 8 0v14l2-18a4 4 0 0 1 8 0v18l2-10a4 4 0 0 1 8 0v18c0 12-8 20-18 20S14 50 14 38v-6a4 4 0 0 1 8 0z" fill="${ee.skin}"/>`,talk:`<path d="M8 12h30a6 6 0 0 1 6 6v14a6 6 0 0 1-6 6H24l-10 8v-8H8a6 6 0 0 1-6-6V18a6 6 0 0 1 6-6z" fill="${ee.blue}" transform="translate(4 0)"/><path d="M34 30h22a5 5 0 0 1 5 5v12a5 5 0 0 1-5 5h-4v7l-9-7H34a5 5 0 0 1-5-5V35a5 5 0 0 1 5-5z" fill="${ee.gold}"/><path d="M16 22h16M16 28h10" stroke="#fff" stroke-width="2.6"/>`,ear:`<path d="M20 26a14 14 0 0 1 28 0c0 10-8 10-10 18-1 6-5 10-10 10-4 0-7-3-7-7" fill="${ee.skin}"/><path d="M30 28a5 5 0 0 1 10 0c0 5-5 5-6 10" fill="none" stroke-width="2.6"/>`,eye:`<path d="M4 32q28-26 56 0Q32 58 4 32z" fill="#fff"/><circle cx="32" cy="32" r="9" fill="${ee.teal}"/><circle cx="32" cy="32" r="4" fill="currentColor" stroke="none"/><circle cx="36" cy="28" r="1.8" fill="#fff" stroke="none"/>`,heart:`<path d="M32 56S6 40 6 22a13 13 0 0 1 26-4 13 13 0 0 1 26 4c0 18-26 34-26 34z" fill="${ee.pink}"/><ellipse cx="20" cy="20" rx="4" ry="2.5" fill="#fff" stroke="none" transform="rotate(-30 20 20)"/>`,people:`<circle cx="20" cy="22" r="9" fill="${ee.skin2}"/><path d="M4 56c0-12 7-18 16-18s16 6 16 18z" fill="${ee.blue}"/><circle cx="44" cy="20" r="11" fill="${ee.skin}"/><path d="M26 56c0-13 8-20 18-20s18 7 18 20z" fill="${ee.green}"/>${yn(17,23,22)}${yn(40,48,20)}`,child:`<path d="M18 20a14 14 0 0 1 28 0v10H18z" fill="${ee.purple}"/><circle cx="32" cy="24" r="12" fill="${ee.skin}"/><path d="M12 58c0-12 9-20 20-20s20 8 20 20z" fill="${ee.teal}"/>${yn(27.5,36.5,24)}<path d="M28 30q4 3 8 0" fill="none" stroke-width="2.2"/>`,grownup:`<path d="M14 58c0-14 8-22 18-22s18 8 18 22z" fill="${ee.blue}"/><circle cx="32" cy="20" r="13" fill="${ee.skin2}"/><path d="M19 18a13 13 0 0 1 26 0v6q-13-6-26 0z" fill="${ee.paper}"/>${yn(27,37,22)}<path d="M27 28q5 4 10 0" fill="none" stroke-width="2.2"/>`,family:`<circle cx="18" cy="18" r="9" fill="${ee.skin2}"/><path d="M4 50c0-12 6-18 14-18s14 6 14 18z" fill="${ee.blue}"/><circle cx="46" cy="18" r="9" fill="${ee.skin}"/><path d="M32 50c0-12 6-18 14-18s14 6 14 18z" fill="${ee.pink}"/><circle cx="32" cy="36" r="7" fill="${ee.skin}"/><path d="M22 60c0-9 4-14 10-14s10 5 10 14z" fill="${ee.gold}"/>${yn(15.5,20.5,18)}${yn(43.5,48.5,18)}${yn(30,34,36)}`,chalk:`<rect x="6" y="10" width="52" height="38" rx="3" fill="${ee.wood}"/><rect x="11" y="15" width="42" height="28" fill="#3f6b58"/><path d="M18 24h14M18 32h22M18 38h10" stroke="#fff" stroke-width="2.4"/><path d="M20 48v10M44 48v10" stroke-width="3.5"/>`,camel:`<path d="M14 56V40q-6-8 2-16 6-6 14-4 6-10 14-8 6 2 8 8 4 2 4 8v8l-6 2v18" fill="${ee.sand}"/><path d="M12 24q6-10 20-8" fill="none" stroke-width="2.4"/><path d="M26 40v16M40 40v16" stroke-width="3"/><circle cx="50" cy="26" r="1.8" fill="currentColor" stroke="none"/>`,dua:`<path d="M20 58V34q-10-2-12-14l6-10q6 0 8 8l4 8v32z" fill="${ee.skin}"/><path d="M44 58V34q10-2 12-14l-6-10q-6 0-8 8l-4 8v32z" fill="${ee.skin}"/><path d="M26 44h12" stroke-width="2"/>`,mosque:`<path d="M10 58V34h44v24z" fill="${ee.paper}"/><path d="M14 34a18 14 0 0 1 36 0z" fill="${ee.teal}"/><path d="M32 12v8" stroke-width="3"/><circle cx="32" cy="11" r="2.2" fill="${ee.gold}"/><rect x="26" y="42" width="12" height="16" rx="6" fill="${ee.wood}"/><path d="M6 58V22l4-6 4 6v36M50 58V22l4-6 4 6v36" fill="${ee.paper}"/>`,compass:`<circle cx="32" cy="32" r="24" fill="${ee.sand}"/><circle cx="32" cy="32" r="18" fill="${ee.paper}"/><path d="M32 14l6 18-6 18-6-18z" fill="${ee.red}"/><path d="M32 32l-6-0 6 18 6-18z" fill="#fff" stroke="none"/><circle cx="32" cy="32" r="3" fill="currentColor" stroke="none"/>`,puzzle:`<path d="M12 14h16a6 6 0 1 1 12 0h12v16a6 6 0 1 0 0 12v16H36a6 6 0 1 1-12 0H12V42a6 6 0 1 1 0-12z" fill="${ee.purple}"/>`,lantern:`<path d="M22 20h20l4 28H18z" fill="#fff2a8"/><rect x="20" y="12" width="24" height="8" rx="3" fill="${ee.wood}"/><path d="M32 12V6M18 48h28l-4 8H22z" fill="${ee.wood}"/><path d="M32 28c2 3 4 5 4 8a4 4 0 0 1-8 0c0-3 2-5 4-8z" fill="${ee.orange}" stroke-width="2"/>`,gem:`<path d="M16 12h32l10 14-26 30L6 26z" fill="${ee.teal}"/><path d="M6 26h52M16 12l10 14 6-14 6 14 10-14M26 26l6 30 6-30" fill="none" stroke-width="2.4"/>`,sound:'<path d="M8 24h10l14-12v40L18 40H8z" fill="#fff"/><path d="M40 22a14 14 0 0 1 0 20M46 14a24 24 0 0 1 0 36" fill="none" stroke-width="4.5"/>',mute:`<path d="M8 24h10l14-12v40L18 40H8z" fill="#fff"/><path d="M40 24l16 16M56 24L40 40" stroke-width="6"/><path d="M40 24l16 16M56 24L40 40" stroke="${ee.red}" stroke-width="2.8"/>`,help:`<circle cx="32" cy="32" r="24" fill="${ee.blue}"/><path d="M24 26a8 8 0 1 1 12 7c-3 2-4 3-4 7" fill="none" stroke="#fff" stroke-width="5"/><circle cx="32" cy="47" r="3.2" fill="#fff" stroke="none"/>`,home:`<path d="M8 30L32 10l24 20" fill="none" stroke-width="4"/><path d="M14 28v26h36V28" fill="${ee.paper}"/><rect x="26" y="38" width="12" height="16" rx="2" fill="${ee.wood}"/>`,pause:'<rect x="14" y="12" width="12" height="40" rx="3" fill="#fff"/><rect x="38" y="12" width="12" height="40" rx="3" fill="#fff"/>',play:'<path d="M18 10l34 22-34 22z" fill="#fff"/>',back:'<path d="M38 12L16 32l22 20" fill="none" stroke-width="9"/><path d="M38 12L16 32l22 20" fill="none" stroke="#fff" stroke-width="4"/>',pencil:`<path d="M12 52l4-14 28-28 10 10-28 28z" fill="${ee.gold}"/><path d="M40 14l10 10" /><path d="M16 38l10 10" /><path d="M12 52l4-14 10 10z" fill="${ee.skin}"/>`,dice:`<rect x="10" y="10" width="44" height="44" rx="9" fill="#fff"/><circle cx="22" cy="22" r="4" fill="currentColor" stroke="none"/><circle cx="42" cy="22" r="4" fill="currentColor" stroke="none"/><circle cx="32" cy="32" r="4" fill="${ee.red}" stroke="none"/><circle cx="22" cy="42" r="4" fill="currentColor" stroke="none"/><circle cx="42" cy="42" r="4" fill="currentColor" stroke="none"/>`,mic:`<rect x="22" y="6" width="20" height="32" rx="10" fill="${ee.red}"/><path d="M14 30a18 18 0 0 0 36 0M32 48v10M22 58h20" fill="none" stroke-width="4"/>`,palette:`<path d="M32 8a24 24 0 1 0 8 46c4-2 2-6 0-8s-2-6 4-6h4a8 8 0 0 0 8-8A24 24 0 0 0 32 8z" fill="${ee.paper}"/><circle cx="20" cy="26" r="4" fill="${ee.red}" stroke="none"/><circle cx="30" cy="18" r="4" fill="${ee.gold}" stroke="none"/><circle cx="42" cy="20" r="4" fill="${ee.green}" stroke="none"/><circle cx="18" cy="38" r="4" fill="${ee.blue}" stroke="none"/>`,mask:`<path d="M10 14q22 10 44 0v20a22 22 0 0 1-44 0z" fill="${ee.purple}"/><path d="M20 28q4-4 8 0M36 28q4-4 8 0" fill="none" stroke-width="3"/><path d="M24 42q8 6 16 0" fill="none" stroke-width="3"/>`,question:`<circle cx="32" cy="32" r="24" fill="${ee.gold}"/><path d="M24 26a8 8 0 1 1 12 7c-3 2-4 3-4 7" fill="none" stroke-width="5"/><circle cx="32" cy="47" r="3.2" fill="currentColor" stroke="none"/>`,ban:`<circle cx="32" cy="32" r="24" fill="#fff"/><circle cx="32" cy="32" r="16" fill="none" stroke="${ee.red}" stroke-width="6"/><path d="M21 21l22 22" stroke="${ee.red}" stroke-width="6"/>`,sun:`<circle cx="32" cy="32" r="14" fill="${ee.gold}"/><path d="M32 6v8M32 50v8M6 32h8M50 32h8M13 13l6 6M45 45l6 6M13 51l6-6M45 19l6-6" stroke-width="4"/>`,cloud:'<path d="M18 48a10 10 0 0 1-2-20 14 14 0 0 1 27-4 10 10 0 0 1 5 24z" fill="#fff"/>',water:'<path d="M32 6c8 12 16 20 16 32a16 16 0 0 1-32 0C16 26 24 18 32 6z" fill="#78c4dc"/><ellipse cx="25" cy="38" rx="3" ry="6" fill="#e9f7fb" stroke="none"/>',brick:`<rect x="6" y="14" width="24" height="12" fill="${ee.wood}"/><rect x="34" y="14" width="24" height="12" fill="${ee.orange}"/><rect x="18" y="30" width="26" height="12" fill="${ee.orange}"/><rect x="6" y="30" width="8" height="12" fill="${ee.wood}"/><rect x="48" y="30" width="10" height="12" fill="${ee.wood}"/><rect x="6" y="46" width="24" height="12" fill="${ee.orange}"/><rect x="34" y="46" width="24" height="12" fill="${ee.wood}"/>`,bee:`<ellipse cx="32" cy="36" rx="16" ry="12" fill="${ee.gold}"/><path d="M26 25v22M34 25v22M42 28v16" stroke-width="3.5"/><ellipse cx="22" cy="20" rx="10" ry="6" fill="#fff" transform="rotate(-25 22 20)"/><ellipse cx="42" cy="20" rx="10" ry="6" fill="#fff" transform="rotate(25 42 20)"/><circle cx="14" cy="36" r="6" fill="${ee.gold}"/><circle cx="12" cy="35" r="1.6" fill="currentColor" stroke="none"/>`,leaf:`<path d="M12 52C12 26 30 10 54 10c0 26-16 44-42 42z" fill="${ee.green}"/><path d="M14 50L46 18" fill="none" stroke-width="2.8"/>`,school:`<path d="M8 58V28l24-14 24 14v30z" fill="${ee.paper}"/><path d="M8 28l24-14 24 14" fill="none" stroke-width="4"/><rect x="26" y="40" width="12" height="18" rx="2" fill="${ee.wood}"/><circle cx="32" cy="30" r="5" fill="${ee.gold}"/><path d="M32 8v8" stroke-width="3"/><path d="M32 8h10l-10 5z" fill="${ee.red}"/>`,friends:`<circle cx="22" cy="22" r="10" fill="${ee.skin}"/><circle cx="44" cy="24" r="9" fill="${ee.skin2}"/><path d="M6 56c0-12 7-18 16-18s16 6 16 18z" fill="${ee.green}"/><path d="M30 56c0-11 6-16 14-16s14 5 14 16z" fill="${ee.orange}"/>${yn(19,25,22)}${yn(41.5,46.5,24)}<path d="M19 28q3 2 6 0M41 29q3 2 6 0" fill="none" stroke-width="2"/>`,money:`<ellipse cx="32" cy="40" rx="22" ry="10" fill="${ee.gold}"/><ellipse cx="32" cy="32" rx="22" ry="10" fill="${ee.gold}"/><ellipse cx="32" cy="24" rx="22" ry="10" fill="#fff2a8"/><ellipse cx="32" cy="24" rx="12" ry="5" fill="none" stroke-width="2.2"/>`,phone:`<rect x="18" y="6" width="28" height="52" rx="6" fill="#fff"/><rect x="22" y="12" width="20" height="36" rx="2" fill="${ee.sky}"/><circle cx="32" cy="53" r="2.2" fill="currentColor" stroke="none"/>`,sparkle:`<path d="M26 6l5 15 15 5-15 5-5 15-5-15-15-5 15-5z" fill="${ee.gold}"/><path d="M48 34l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#fff"/>`,crystal:`<path d="M20 48l12-40 12 40z" fill="${ee.purple}"/><path d="M14 56h36l-6-8H20z" fill="${ee.blue}"/><path d="M32 8v40" stroke-width="2"/>`,seedling:`<path d="M12 56q20-6 40 0z" fill="${ee.wood}"/><path d="M32 52V30" stroke-width="4"/><path d="M32 36q-2-14-16-14 2 14 16 14z" fill="${ee.green}"/><path d="M32 30q2-14 16-14-2 14-16 14z" fill="#b4de94"/>`,rehal:`<path d="M8 48l24-16 24 16-24 10z" fill="${ee.wood}"/><path d="M14 30q18-8 18 0v14q0-8-18 0z" fill="${ee.paper}"/><path d="M50 30q-18-8-18 0v14q0-8 18 0z" fill="${ee.paper}"/>`,juz:`<path d="M12 10h36a4 4 0 0 1 4 4v38a4 4 0 0 1-4 4H12z" fill="${ee.teal}"/><path d="M12 10v46M20 10v46" stroke-width="2.4"/><rect x="28" y="22" width="18" height="12" rx="2" fill="${ee.paper}"/>`,flag:`<path d="M16 58V8" stroke-width="5"/><path d="M18 10h30l-6 12 6 12H18z" fill="${ee.red}"/>`,stop:`<path d="M20 8h24l16 16v24L44 60H20L4 44V20z" fill="${ee.red}"/><path d="M20 32h24" stroke="#fff" stroke-width="6"/>`,shield:`<path d="M32 6l22 8v18c0 14-10 22-22 28C20 54 10 46 10 32V14z" fill="${ee.blue}"/><path d="M22 32l7 7 13-14" fill="none" stroke="#fff" stroke-width="5"/>`,trophy:`<path d="M18 8h28v14a14 14 0 0 1-28 0z" fill="${ee.gold}"/><path d="M18 14H8a10 10 0 0 0 10 10M46 14h10a10 10 0 0 1-10 10" fill="none" stroke-width="3.5"/><path d="M28 36h8v8h-8z" fill="${ee.gold}"/><rect x="18" y="44" width="28" height="10" rx="3" fill="${ee.wood}"/>`,hourglass:`<path d="M16 8h32l-12 24 12 24H16l12-24z" fill="#fff"/><path d="M22 14h20l-10 14zM24 52h16l-8-10z" fill="${ee.sand}" stroke="none"/><path d="M12 8h40M12 56h40" stroke-width="4"/>`},zs=new Map;function St(n,e=""){const t=n+"|"+e;return zs.has(t)||zs.set(t,`<span class="dk-ico ${e}" data-ic="${n}"><svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">${Ms[n]||Ms.star}</svg></span>`),zs.get(t)}const Dh=n=>n in Ms;function Uh(n){for(const[e,t]of Object.entries(n)){const i=document.getElementById(e);i&&(i.classList.add("dk-iconbtn"),i.innerHTML=St(t))}}const Nh=n=>n?n.startsWith("data:")||n.startsWith("blob:")||n.startsWith("/")||n.startsWith("http")?`<img src="${n}" alt="" ${n.startsWith("data:image/svg")?'class="contain"':""}>`:Dh(n)?St(n):`<span class="glyph">${n}</span>`:"",Fh=(n,e="data-act")=>`<div class="dkavs">${n.map((t,i)=>`<button class="dkav ${t.color||""} ${t.on?"on":""}" style="--i:${i}" ${t.attr||e}="${Ih(t.id)}"><span class="face">${Nh(t.pic)}</span><span>${t.label}</span>${t.sub?`<small>${t.sub}</small>`:""}</button>`).join("")}</div>`,kh=(n,e,t="",i=0)=>`<span class="dkchip ${t}" style="--i:${i}">${n?St(n):""}${e}</span>`,tl=n=>`<div class="dkstats">${n.map((e,t)=>kh(e[0],e[1],e[2]||"",t)).join("")}</div>`;function Oh(n,{tone:e="",glow:t=!1,sparkles:i=0}={}){const r=i?`<span class="sparkles">${Array.from({length:i},(s,a)=>`<i style="--i:${a};left:${8+a*37%84}%;top:${10+a*53%55}%"></i>`).join("")}</span>`:"";return`<div class="dkhero ${e?"dk-"+e:""}">${r}${t?'<span class="glow"></span>':""}${n.map((s,a)=>s.src?`<img src="${s.src}" alt="" class="${s.cls||""}" style="--i:${a}">`:St(s.icon,s.cls||"").replace("style=","").replace('class="dk-ico',`style="--i:${a}" class="dk-ico`)).join("")}</div>`}function Bh(n){n&&([...n.children].forEach((e,t)=>e.style.setProperty("--i",t)),n.classList.add("dkstagger"))}const Ac=()=>{let n=document.getElementById("dkfx");return n||(n=document.createElement("div"),n.id="dkfx",document.body.appendChild(n)),n},nl=["#f6cf5c","#ea5d50","#71cf6d","#6f95e6","#f08cb0","#5fbfb0","#fff"];function zh(n,e,{n:t=28,spread:i=180,up:r=130}={}){if(Tc())return;const s=Ac();for(let a=0;a<t;a++){const o=document.createElement("i");o.className="dkconf";const l=-Math.PI/2+(Math.random()-.5)*2.2,c=i*(.4+Math.random()*.6);o.style.cssText=`left:${n}px;top:${e}px;background:${nl[a%nl.length]};--dx:${Math.cos(l)*c}px;--dy:${Math.sin(l)*c*.5+r}px;--rot:${(Math.random()-.5)*900}deg;--kt:${.9+Math.random()*.7}s;transform:rotate(${Math.random()*360}deg)`,s.appendChild(o),setTimeout(()=>o.remove(),1700)}}function Hh(n,e,t=6){if(!Tc())for(let i=0;i<t;i++){const r=document.createElement("i");r.className="dkstar",r.innerHTML=`<svg viewBox="0 0 64 64" fill="none" stroke="#6b2f1a" stroke-width="3" stroke-linejoin="round">${Ms.star}</svg>`,r.style.cssText=`left:${n}px;top:${e}px;--dx:${(Math.random()-.5)*140}px;--dy:${-40-Math.random()*80}px;--kt:${.7+Math.random()*.5}s`,Ac().appendChild(r),setTimeout(()=>r.remove(),1300)}}function il(n,e=!1){var s;const t=(s=n==null?void 0:n.getBoundingClientRect)==null?void 0:s.call(n);if(!t)return;const i=t.left+t.width/2,r=t.top+t.height/2;zh(i,r,{n:e?44:20,spread:e?280:150}),e&&Hh(i,r,8)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const So="170",Vh=0,rl=1,Gh=2,Rc=1,Wh=2,An=3,Qn=0,Vt=1,Ct=2,Zn=0,qi=1,Ra=2,sl=3,al=4,$h=5,hi=100,Xh=101,qh=102,Yh=103,Zh=104,Jh=200,jh=201,Kh=202,Qh=203,Ca=204,Pa=205,eu=206,tu=207,nu=208,iu=209,ru=210,su=211,au=212,ou=213,lu=214,La=0,Ia=1,Da=2,Ji=3,Ua=4,Na=5,Fa=6,ka=7,Cc=0,cu=1,hu=2,Jn=0,uu=1,fu=2,du=3,pu=4,mu=5,gu=6,vu=7,Pc=300,ji=301,Ki=302,Oa=303,Ba=304,Cs=306,Ss=1e3,fi=1001,za=1002,Pt=1003,_u=1004,Fr=1005,gn=1006,Hs=1007,di=1008,Dn=1009,Lc=1010,Ic=1011,Ar=1012,bo=1013,mi=1014,Rn=1015,gi=1016,wo=1017,Eo=1018,Qi=1020,Dc=35902,Uc=1021,Nc=1022,on=1023,Fc=1024,kc=1025,Yi=1026,er=1027,Ps=1028,To=1029,Oc=1030,Ao=1031,Ro=1033,ms=33776,gs=33777,vs=33778,_s=33779,Ha=35840,Va=35841,Ga=35842,Wa=35843,$a=36196,Xa=37492,qa=37496,Ya=37808,Za=37809,Ja=37810,ja=37811,Ka=37812,Qa=37813,eo=37814,to=37815,no=37816,io=37817,ro=37818,so=37819,ao=37820,oo=37821,xs=36492,lo=36494,co=36495,Bc=36283,ho=36284,uo=36285,fo=36286,xu=3200,yu=3201,zc=0,Mu=1,qn="",zt="srgb",ir="srgb-linear",Ls="linear",lt="srgb",wi=7680,ol=519,Su=512,bu=513,wu=514,Hc=515,Eu=516,Tu=517,Au=518,Ru=519,ll=35044,cl="300 es",Cn=2e3,bs=2001;class rr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hl=1234567;const Sr=Math.PI/180,Rr=180/Math.PI;function yi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function Co(n,e){return(n%e+e)%e}function Cu(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Pu(n,e,t){return n!==e?(t-n)/(e-n):0}function br(n,e,t){return(1-t)*n+t*e}function Lu(n,e,t,i){return br(n,e,1-Math.exp(-t*i))}function Iu(n,e=1){return e-Math.abs(Co(n,e*2)-e)}function Du(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Uu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Nu(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Fu(n,e){return n+Math.random()*(e-n)}function ku(n){return n*(.5-Math.random())}function Ou(n){n!==void 0&&(hl=n);let e=hl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bu(n){return n*Sr}function zu(n){return n*Rr}function Hu(n){return(n&n-1)===0&&n!==0}function Vu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Gu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Wu(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),f=a((e-i)/2),d=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*h,l*u,l*f,o*c);break;case"YZY":n.set(l*f,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*f,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*d,o*c);break;case"YXY":n.set(l*d,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Gi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const $u={DEG2RAD:Sr,RAD2DEG:Rr,generateUUID:yi,clamp:Rt,euclideanModulo:Co,mapLinear:Cu,inverseLerp:Pu,lerp:br,damp:Lu,pingpong:Iu,smoothstep:Du,smootherstep:Uu,randInt:Nu,randFloat:Fu,randFloatSpread:ku,seededRandom:Ou,degToRad:Bu,radToDeg:zu,isPowerOfTwo:Hu,ceilPowerOfTwo:Vu,floorPowerOfTwo:Gu,setQuaternionFromProperEuler:Wu,normalize:kt,denormalize:Gi};class ve{constructor(e=0,t=0){ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,r,s,a,o,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],S=r[1],x=r[4],v=r[7],L=r[2],A=r[5],T=r[8];return s[0]=a*_+o*S+l*L,s[3]=a*m+o*x+l*A,s[6]=a*p+o*v+l*T,s[1]=c*_+h*S+u*L,s[4]=c*m+h*x+u*A,s[7]=c*p+h*v+u*T,s[2]=f*_+d*S+g*L,s[5]=f*m+d*x+g*A,s[8]=f*p+d*v+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*s,d=c*s-a*l,g=t*u+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*c-h*i)*_,e[2]=(o*i-r*a)*_,e[3]=f*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Vs.makeScale(e,t)),this}rotate(e){return this.premultiply(Vs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vs=new Ze;function Vc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ws(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xu(){const n=ws("canvas");return n.style.display="block",n}const ul={};function _r(n){n in ul||(ul[n]=!0,console.warn(n))}function qu(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Yu(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Zu(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qe={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===lt&&(n.r=Ln(n.r),n.g=Ln(n.g),n.b=Ln(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===lt&&(n.r=Zi(n.r),n.g=Zi(n.g),n.b=Zi(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===qn?Ls:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ln(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const fl=[.64,.33,.3,.6,.15,.06],dl=[.2126,.7152,.0722],pl=[.3127,.329],ml=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gl=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe.define({[ir]:{primaries:fl,whitePoint:pl,transfer:Ls,toXYZ:ml,fromXYZ:gl,luminanceCoefficients:dl,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:fl,whitePoint:pl,transfer:lt,toXYZ:ml,fromXYZ:gl,luminanceCoefficients:dl,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}});let Ei;class Ju{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ei===void 0&&(Ei=ws("canvas")),Ei.width=e.width,Ei.height=e.height;const i=Ei.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ws("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ln(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ln(t[i]/255)*255):t[i]=Ln(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ju=0;class Gc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Gs(r[a].image)):s.push(Gs(r[a]))}else s=Gs(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Gs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ju.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ku=0;class Ft extends rr{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=fi,r=fi,s=gn,a=di,o=on,l=Dn,c=Ft.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=yi(),this.name="",this.source=new Gc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ss:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ss:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Pc;Ft.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(d+1)/2,L=(p+1)/2,A=(h+f)/4,T=(u+_)/4,C=(g+m)/4;return x>v&&x>L?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=T/i):v>L?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=A/r,s=C/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=T/s,r=C/s),this.set(i,r,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qu extends rr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ft(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends Qu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Wc extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ef extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3];const f=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-o;const p=l*f+c*d+h*g+u*_,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const L=Math.sqrt(x),A=Math.atan2(L,p*S);m=Math.sin(m*A)/L,o=Math.sin(o*A)/L}const v=o*S;if(l=l*m+f*v,c=c*m+d*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),f=l(i/2),d=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>u){const d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-i-u);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ws.copy(this).projectOnVector(e),this.sub(Ws)}reflect(e){return this.sub(Ws.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ws=new D,vl=new Mi;class sr{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qt):Qt.fromBufferAttribute(s,a),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kr.copy(i.boundingBox)),kr.applyMatrix4(e.matrixWorld),this.union(kr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),Or.subVectors(this.max,cr),Ti.subVectors(e.a,cr),Ai.subVectors(e.b,cr),Ri.subVectors(e.c,cr),On.subVectors(Ai,Ti),Bn.subVectors(Ri,Ai),ti.subVectors(Ti,Ri);let t=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-ti.z,ti.y,On.z,0,-On.x,Bn.z,0,-Bn.x,ti.z,0,-ti.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-ti.y,ti.x,0];return!$s(t,Ti,Ai,Ri,Or)||(t=[1,0,0,0,1,0,0,0,1],!$s(t,Ti,Ai,Ri,Or))?!1:(Br.crossVectors(On,Bn),t=[Br.x,Br.y,Br.z],$s(t,Ti,Ai,Ri,Or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mn=[new D,new D,new D,new D,new D,new D,new D,new D],Qt=new D,kr=new sr,Ti=new D,Ai=new D,Ri=new D,On=new D,Bn=new D,ti=new D,cr=new D,Or=new D,Br=new D,ni=new D;function $s(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ni.fromArray(n,s);const o=r.x*Math.abs(ni.x)+r.y*Math.abs(ni.y)+r.z*Math.abs(ni.z),l=e.dot(ni),c=t.dot(ni),h=i.dot(ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const tf=new sr,hr=new D,Xs=new D;class Po{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):tf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);const t=hr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(hr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(Xs)),this.expandByPoint(hr.copy(e.center).sub(Xs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new D,qs=new D,zr=new D,zn=new D,Ys=new D,Hr=new D,Zs=new D;class nf{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){qs.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(qs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(zr),o=zn.dot(this.direction),l=-zn.dot(zr),c=zn.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(qs).addScaledVector(zr,f),d}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const i=Sn.dot(this.direction),r=Sn.dot(Sn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,i,r,s){Ys.subVectors(t,e),Hr.subVectors(i,e),Zs.crossVectors(Ys,Hr);let a=this.direction.dot(Zs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,e);const l=o*this.direction.dot(Hr.crossVectors(zn,Hr));if(l<0)return null;const c=o*this.direction.dot(Ys.cross(zn));if(c<0||l+c>a)return null;const h=-o*zn.dot(Zs);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,i,r,s,a,o,l,c,h,u,f,d,g,_,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,u,f,d,g,_,m)}set(e,t,i,r,s,a,o,l,c,h,u,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ci.setFromMatrixColumn(e,0).length(),s=1/Ci.setFromMatrixColumn(e,1).length(),a=1/Ci.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=a*h,d=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,d=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rf,e,sf)}lookAt(e,t,i){const r=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Hn.crossVectors(i,Wt),Hn.lengthSq()===0&&(Math.abs(i.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Hn.crossVectors(i,Wt)),Hn.normalize(),Vr.crossVectors(Wt,Hn),r[0]=Hn.x,r[4]=Vr.x,r[8]=Wt.x,r[1]=Hn.y,r[5]=Vr.y,r[9]=Wt.y,r[2]=Hn.z,r[6]=Vr.z,r[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],S=i[3],x=i[7],v=i[11],L=i[15],A=r[0],T=r[4],C=r[8],w=r[12],y=r[1],P=r[5],q=r[9],z=r[13],j=r[2],ne=r[6],J=r[10],se=r[14],G=r[3],Me=r[7],be=r[11],Ue=r[15];return s[0]=a*A+o*y+l*j+c*G,s[4]=a*T+o*P+l*ne+c*Me,s[8]=a*C+o*q+l*J+c*be,s[12]=a*w+o*z+l*se+c*Ue,s[1]=h*A+u*y+f*j+d*G,s[5]=h*T+u*P+f*ne+d*Me,s[9]=h*C+u*q+f*J+d*be,s[13]=h*w+u*z+f*se+d*Ue,s[2]=g*A+_*y+m*j+p*G,s[6]=g*T+_*P+m*ne+p*Me,s[10]=g*C+_*q+m*J+p*be,s[14]=g*w+_*z+m*se+p*Ue,s[3]=S*A+x*y+v*j+L*G,s[7]=S*T+x*P+v*ne+L*Me,s[11]=S*C+x*q+v*J+L*be,s[15]=S*w+x*z+v*se+L*Ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*u-r*c*u-s*o*f+i*c*f+r*o*d-i*l*d)+_*(+t*l*d-t*c*f+s*a*f-r*a*d+r*c*h-s*l*h)+m*(+t*c*u-t*o*d-s*a*u+i*a*d+s*o*h-i*c*h)+p*(-r*o*h-t*l*u+t*o*f+r*a*u-i*a*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=u*m*c-_*f*c+_*l*d-o*m*d-u*l*p+o*f*p,x=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,v=h*_*c-g*u*c+g*o*d-a*_*d-h*o*p+a*u*p,L=g*u*l-h*_*l-g*o*f+a*_*f+h*o*m-a*u*m,A=t*S+i*x+r*v+s*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=S*T,e[1]=(_*f*s-u*m*s-_*r*d+i*m*d+u*r*p-i*f*p)*T,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*p+i*l*p)*T,e[3]=(u*l*s-o*f*s-u*r*c+i*f*c+o*r*d-i*l*d)*T,e[4]=x*T,e[5]=(h*m*s-g*f*s+g*r*d-t*m*d-h*r*p+t*f*p)*T,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*T,e[7]=(a*f*s-h*l*s+h*r*c-t*f*c-a*r*d+t*l*d)*T,e[8]=v*T,e[9]=(g*u*s-h*_*s-g*i*d+t*_*d+h*i*p-t*u*p)*T,e[10]=(a*_*s-g*o*s+g*i*c-t*_*c-a*i*p+t*o*p)*T,e[11]=(h*o*s-a*u*s-h*i*c+t*u*c+a*i*d-t*o*d)*T,e[12]=L*T,e[13]=(h*_*r-g*u*r+g*i*f-t*_*f-h*i*m+t*u*m)*T,e[14]=(g*o*r-a*_*r-g*i*l+t*_*l+a*i*m-t*o*m)*T,e[15]=(a*u*r-h*o*r+h*i*l-t*u*l-a*i*f+t*o*f)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,f=s*c,d=s*h,g=s*u,_=a*h,m=a*u,p=o*u,S=l*c,x=l*h,v=l*u,L=i.x,A=i.y,T=i.z;return r[0]=(1-(_+p))*L,r[1]=(d+v)*L,r[2]=(g-x)*L,r[3]=0,r[4]=(d-v)*A,r[5]=(1-(f+p))*A,r[6]=(m+S)*A,r[7]=0,r[8]=(g+x)*T,r[9]=(m-S)*T,r[10]=(1-(f+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ci.set(r[0],r[1],r[2]).length();const a=Ci.set(r[4],r[5],r[6]).length(),o=Ci.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],en.copy(this);const c=1/s,h=1/a,u=1/o;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=u,en.elements[9]*=u,en.elements[10]*=u,t.setFromRotationMatrix(en),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Cn){const l=this.elements,c=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r);let d,g;if(o===Cn)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===bs)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Cn){const l=this.elements,c=1/(t-e),h=1/(i-r),u=1/(a-s),f=(t+e)*c,d=(i+r)*h;let g,_;if(o===Cn)g=(a+s)*u,_=-2*u;else if(o===bs)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ci=new D,en=new pt,rf=new D(0,0,0),sf=new D(1,1,1),Hn=new D,Vr=new D,Wt=new D,_l=new pt,xl=new Mi;class Nn{constructor(e=0,t=0,i=0,r=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _l.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_l,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xl.setFromEuler(this),this.setFromQuaternion(xl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class $c{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let af=0;const yl=new D,Pi=new Mi,bn=new pt,Gr=new D,ur=new D,of=new D,lf=new Mi,Ml=new D(1,0,0),Sl=new D(0,1,0),bl=new D(0,0,1),wl={type:"added"},cf={type:"removed"},Li={type:"childadded",child:null},Js={type:"childremoved",child:null};class Lt extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new D,t=new Nn,i=new Mi,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ze}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(Ml,e)}rotateY(e){return this.rotateOnAxis(Sl,e)}rotateZ(e){return this.rotateOnAxis(bl,e)}translateOnAxis(e,t){return yl.copy(e).applyQuaternion(this.quaternion),this.position.add(yl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ml,e)}translateY(e){return this.translateOnAxis(Sl,e)}translateZ(e){return this.translateOnAxis(bl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Gr.copy(e):Gr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(ur,Gr,this.up):bn.lookAt(Gr,ur,this.up),this.quaternion.setFromRotationMatrix(bn),r&&(bn.extractRotation(r.matrixWorld),Pi.setFromRotationMatrix(bn),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wl),Li.child=e,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cf),Js.child=e,this.dispatchEvent(Js),Js.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wl),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,of),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,lf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new D(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new D,wn=new D,js=new D,En=new D,Ii=new D,Di=new D,El=new D,Ks=new D,Qs=new D,ea=new D,ta=new ht,na=new ht,ia=new ht;class an{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),tn.subVectors(e,t),r.cross(tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){tn.subVectors(r,t),wn.subVectors(i,t),js.subVectors(e,t);const a=tn.dot(tn),o=tn.dot(wn),l=tn.dot(js),c=wn.dot(wn),h=wn.dot(js),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,En.x),l.addScaledVector(a,En.y),l.addScaledVector(o,En.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return ta.setScalar(0),na.setScalar(0),ia.setScalar(0),ta.fromBufferAttribute(e,t),na.fromBufferAttribute(e,i),ia.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ta,s.x),a.addScaledVector(na,s.y),a.addScaledVector(ia,s.z),a}static isFrontFacing(e,t,i,r){return tn.subVectors(i,t),wn.subVectors(e,t),tn.cross(wn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),tn.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return an.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ii.subVectors(r,i),Di.subVectors(s,i),Ks.subVectors(e,i);const l=Ii.dot(Ks),c=Di.dot(Ks);if(l<=0&&c<=0)return t.copy(i);Qs.subVectors(e,r);const h=Ii.dot(Qs),u=Di.dot(Qs);if(h>=0&&u<=h)return t.copy(r);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Ii,a);ea.subVectors(e,s);const d=Ii.dot(ea),g=Di.dot(ea);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Di,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return El.subVectors(s,r),o=(u-h)/(u-h+(d-g)),t.copy(r).addScaledVector(El,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(i).addScaledVector(Ii,a).addScaledVector(Di,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function ra(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=Co(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ra(a,s,e+1/3),this.g=ra(a,s,e),this.b=ra(a,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=zt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const i=Xc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ln(e.r),this.g=Ln(e.g),this.b=Ln(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return Qe.fromWorkingColorSpace(Nt.copy(this),e),Math.round(Rt(Nt.r*255,0,255))*65536+Math.round(Rt(Nt.g*255,0,255))*256+Math.round(Rt(Nt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Nt.copy(this),t);const i=Nt.r,r=Nt.g,s=Nt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=zt){Qe.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,r=Nt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(Wr);const i=br(Vn.h,Wr.h,t),r=br(Vn.s,Wr.s,t),s=br(Vn.l,Wr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Ke;Ke.NAMES=Xc;let hf=0;class Dr extends rr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=yi(),this.name="",this.blending=qi,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Pa,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ol,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(i.blending=this.blending),this.side!==Qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ca&&(i.blendSrc=this.blendSrc),this.blendDst!==Pa&&(i.blendDst=this.blendDst),this.blendEquation!==hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ol&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zt extends Dr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new D,$r=new ve;class ln{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ll,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$r.fromBufferAttribute(this,t),$r.applyMatrix3(e),this.setXY(t,$r.x,$r.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),r=kt(r,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ll&&(e.usage=this.usage),e}}class qc extends ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Yc extends ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class et extends ln{constructor(e,t,i){super(new Float32Array(e),t,i)}}let uf=0;const Yt=new pt,sa=new Lt,Ui=new D,$t=new sr,fr=new sr,Et=new D;class It extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vc(e)?Yc:qc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,i){return Yt.makeTranslation(e,t,i),this.applyMatrix4(Yt),this}scale(e,t,i){return Yt.makeScale(e,t,i),this.applyMatrix4(Yt),this}lookAt(e){return sa.lookAt(e),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new et(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors($t.min,fr.min),$t.expandByPoint(Et),Et.addVectors($t.max,fr.max),$t.expandByPoint(Et)):($t.expandByPoint(fr.min),$t.expandByPoint(fr.max))}$t.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Et.fromBufferAttribute(o,c),l&&(Ui.fromBufferAttribute(e,c),Et.add(Ui)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new D,l[C]=new D;const c=new D,h=new D,u=new D,f=new ve,d=new ve,g=new ve,_=new D,m=new D;function p(C,w,y){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,y),f.fromBufferAttribute(s,C),d.fromBufferAttribute(s,w),g.fromBufferAttribute(s,y),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),o[C].add(_),o[w].add(_),o[y].add(_),l[C].add(m),l[w].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let C=0,w=S.length;C<w;++C){const y=S[C],P=y.start,q=y.count;for(let z=P,j=P+q;z<j;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new D,v=new D,L=new D,A=new D;function T(C){L.fromBufferAttribute(r,C),A.copy(L);const w=o[C];x.copy(w),x.sub(L.multiplyScalar(L.dot(w))).normalize(),v.crossVectors(A,w);const P=v.dot(l[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,P)}for(let C=0,w=S.length;C<w;++C){const y=S[C],P=y.start,q=y.count;for(let z=P,j=P+q;z<j;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new ln(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new It,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tl=new pt,ii=new nf,Xr=new Po,Al=new D,qr=new D,Yr=new D,Zr=new D,aa=new D,Jr=new D,Rl=new D,jr=new D;class xt extends Lt{constructor(e=new It,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Jr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(aa.fromBufferAttribute(u,e),a?Jr.addScaledVector(aa,h):Jr.addScaledVector(aa.sub(t),h))}t.add(Jr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(s),ii.copy(e.ray).recast(e.near),!(Xr.containsPoint(ii.origin)===!1&&(ii.intersectSphere(Xr,Al)===null||ii.origin.distanceToSquared(Al)>(e.far-e.near)**2))&&(Tl.copy(s).invert(),ii.copy(e.ray).applyMatrix4(Tl),!(i.boundingBox!==null&&ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ii)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,L=x;v<L;v+=3){const A=o.getX(v),T=o.getX(v+1),C=o.getX(v+2);r=Kr(this,p,e,i,c,h,u,A,T,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);r=Kr(this,a,e,i,c,h,u,S,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,L=x;v<L;v+=3){const A=v,T=v+1,C=v+2;r=Kr(this,p,e,i,c,h,u,A,T,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=m,x=m+1,v=m+2;r=Kr(this,a,e,i,c,h,u,S,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function ff(n,e,t,i,r,s,a,o){let l;if(e.side===Vt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Qn,o),l===null)return null;jr.copy(o),jr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(jr);return c<t.near||c>t.far?null:{distance:c,point:jr.clone(),object:n}}function Kr(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,qr),n.getVertexPosition(l,Yr),n.getVertexPosition(c,Zr);const h=ff(n,e,t,i,qr,Yr,Zr,Rl);if(h){const u=new D;an.getBarycoord(Rl,qr,Yr,Zr,u),r&&(h.uv=an.getInterpolatedAttribute(r,o,l,c,u,new ve)),s&&(h.uv1=an.getInterpolatedAttribute(s,o,l,c,u,new ve)),a&&(h.normal=an.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new D,materialIndex:0};an.getNormal(qr,Yr,Zr,f.normal),h.face=f,h.barycoord=u}return h}class Si extends It{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(u,2));function g(_,m,p,S,x,v,L,A,T,C,w){const y=v/T,P=L/C,q=v/2,z=L/2,j=A/2,ne=T+1,J=C+1;let se=0,G=0;const Me=new D;for(let be=0;be<J;be++){const Ue=be*P-z;for(let Ge=0;Ge<ne;Ge++){const H=Ge*y-q;Me[_]=H*S,Me[m]=Ue*x,Me[p]=j,c.push(Me.x,Me.y,Me.z),Me[_]=0,Me[m]=0,Me[p]=A>0?1:-1,h.push(Me.x,Me.y,Me.z),u.push(Ge/T),u.push(1-be/C),se+=1}}for(let be=0;be<C;be++)for(let Ue=0;Ue<T;Ue++){const Ge=f+Ue+ne*be,H=f+Ue+ne*(be+1),I=f+(Ue+1)+ne*(be+1),V=f+(Ue+1)+ne*be;l.push(Ge,H,V),l.push(H,I,V),G+=6}o.addGroup(d,G,w),d+=G,f+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ot(n){const e={};for(let t=0;t<n.length;t++){const i=tr(n[t]);for(const r in i)e[r]=i[r]}return e}function df(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const pf={clone:tr,merge:Ot};var mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends Dr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mf,this.fragmentShader=gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=df(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Jc extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Cn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new D,Cl=new ve,Pl=new ve;class Jt extends Jc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,t){return this.getViewBounds(e,Cl,Pl),t.subVectors(Pl,Cl)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ni=-90,Fi=1;class vf extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jt(Ni,Fi,e,t);r.layers=this.layers,this.add(r);const s=new Jt(Ni,Fi,e,t);s.layers=this.layers,this.add(s);const a=new Jt(Ni,Fi,e,t);a.layers=this.layers,this.add(a);const o=new Jt(Ni,Fi,e,t);o.layers=this.layers,this.add(o);const l=new Jt(Ni,Fi,e,t);l.layers=this.layers,this.add(l);const c=new Jt(Ni,Fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Cn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===bs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class jc extends Ft{constructor(e,t,i,r,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ji,super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _f extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new jc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Si(5,5,5),s=new cn({name:"CubemapFromEquirect",uniforms:tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:Zn});s.uniforms.tEquirect.value=t;const a=new xt(r,s),o=t.minFilter;return t.minFilter===di&&(t.minFilter=gn),new vf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const oa=new D,xf=new D,yf=new Ze;class li{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=oa.subVectors(i,t).cross(xf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(oa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||yf.getNormalMatrix(e),r=this.coplanarPoint(oa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new Po,Qr=new D;class Lo{constructor(e=new li,t=new li,i=new li,r=new li,s=new li,a=new li){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Cn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],f=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],S=r[13],x=r[14],v=r[15];if(i[0].setComponents(l-s,f-c,m-d,v-p).normalize(),i[1].setComponents(l+s,f+c,m+d,v+p).normalize(),i[2].setComponents(l+a,f+h,m+g,v+S).normalize(),i[3].setComponents(l-a,f-h,m-g,v-S).normalize(),i[4].setComponents(l-o,f-u,m-_,v-x).normalize(),t===Cn)i[5].setComponents(l+o,f+u,m+_,v+x).normalize();else if(t===bs)i[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Qr.x=r.normal.x>0?e.max.x:e.min.x,Qr.y=r.normal.y>0?e.max.y:e.min.y,Qr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kc(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Mf(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class In extends It{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const S=p*f-a;for(let x=0;x<c;x++){const v=x*u-s;g.push(v,-S,0),_.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const x=S+c*p,v=S+c*(p+1),L=S+1+c*(p+1),A=S+1+c*p;d.push(x,v,A),d.push(v,L,A)}this.setIndex(d),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new In(e.width,e.height,e.widthSegments,e.heightSegments)}}var Sf=`#ifdef USE_ALPHAHASH
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
#endif`,qf=`vec3 transformedNormal = objectNormal;
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
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
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
#endif`,qd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yd=`#ifdef USE_IRIDESCENCEMAP
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
}`,qp=`#define TOON
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
}`,Yp=`#define TOON
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
}`,Je={alphahash_fragment:Sf,alphahash_pars_fragment:bf,alphamap_fragment:wf,alphamap_pars_fragment:Ef,alphatest_fragment:Tf,alphatest_pars_fragment:Af,aomap_fragment:Rf,aomap_pars_fragment:Cf,batching_pars_vertex:Pf,batching_vertex:Lf,begin_vertex:If,beginnormal_vertex:Df,bsdfs:Uf,iridescence_fragment:Nf,bumpmap_pars_fragment:Ff,clipping_planes_fragment:kf,clipping_planes_pars_fragment:Of,clipping_planes_pars_vertex:Bf,clipping_planes_vertex:zf,color_fragment:Hf,color_pars_fragment:Vf,color_pars_vertex:Gf,color_vertex:Wf,common:$f,cube_uv_reflection_fragment:Xf,defaultnormal_vertex:qf,displacementmap_pars_vertex:Yf,displacementmap_vertex:Zf,emissivemap_fragment:Jf,emissivemap_pars_fragment:jf,colorspace_fragment:Kf,colorspace_pars_fragment:Qf,envmap_fragment:ed,envmap_common_pars_fragment:td,envmap_pars_fragment:nd,envmap_pars_vertex:id,envmap_physical_pars_fragment:pd,envmap_vertex:rd,fog_vertex:sd,fog_pars_vertex:ad,fog_fragment:od,fog_pars_fragment:ld,gradientmap_pars_fragment:cd,lightmap_pars_fragment:hd,lights_lambert_fragment:ud,lights_lambert_pars_fragment:fd,lights_pars_begin:dd,lights_toon_fragment:md,lights_toon_pars_fragment:gd,lights_phong_fragment:vd,lights_phong_pars_fragment:_d,lights_physical_fragment:xd,lights_physical_pars_fragment:yd,lights_fragment_begin:Md,lights_fragment_maps:Sd,lights_fragment_end:bd,logdepthbuf_fragment:wd,logdepthbuf_pars_fragment:Ed,logdepthbuf_pars_vertex:Td,logdepthbuf_vertex:Ad,map_fragment:Rd,map_pars_fragment:Cd,map_particle_fragment:Pd,map_particle_pars_fragment:Ld,metalnessmap_fragment:Id,metalnessmap_pars_fragment:Dd,morphinstance_vertex:Ud,morphcolor_vertex:Nd,morphnormal_vertex:Fd,morphtarget_pars_vertex:kd,morphtarget_vertex:Od,normal_fragment_begin:Bd,normal_fragment_maps:zd,normal_pars_fragment:Hd,normal_pars_vertex:Vd,normal_vertex:Gd,normalmap_pars_fragment:Wd,clearcoat_normal_fragment_begin:$d,clearcoat_normal_fragment_maps:Xd,clearcoat_pars_fragment:qd,iridescence_pars_fragment:Yd,opaque_fragment:Zd,packing:Jd,premultiplied_alpha_fragment:jd,project_vertex:Kd,dithering_fragment:Qd,dithering_pars_fragment:ep,roughnessmap_fragment:tp,roughnessmap_pars_fragment:np,shadowmap_pars_fragment:ip,shadowmap_pars_vertex:rp,shadowmap_vertex:sp,shadowmask_pars_fragment:ap,skinbase_vertex:op,skinning_pars_vertex:lp,skinning_vertex:cp,skinnormal_vertex:hp,specularmap_fragment:up,specularmap_pars_fragment:fp,tonemapping_fragment:dp,tonemapping_pars_fragment:pp,transmission_fragment:mp,transmission_pars_fragment:gp,uv_pars_fragment:vp,uv_pars_vertex:_p,uv_vertex:xp,worldpos_vertex:yp,background_vert:Mp,background_frag:Sp,backgroundCube_vert:bp,backgroundCube_frag:wp,cube_vert:Ep,cube_frag:Tp,depth_vert:Ap,depth_frag:Rp,distanceRGBA_vert:Cp,distanceRGBA_frag:Pp,equirect_vert:Lp,equirect_frag:Ip,linedashed_vert:Dp,linedashed_frag:Up,meshbasic_vert:Np,meshbasic_frag:Fp,meshlambert_vert:kp,meshlambert_frag:Op,meshmatcap_vert:Bp,meshmatcap_frag:zp,meshnormal_vert:Hp,meshnormal_frag:Vp,meshphong_vert:Gp,meshphong_frag:Wp,meshphysical_vert:$p,meshphysical_frag:Xp,meshtoon_vert:qp,meshtoon_frag:Yp,points_vert:Zp,points_frag:Jp,shadow_vert:jp,shadow_frag:Kp,sprite_vert:Qp,sprite_frag:em},we={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},mn={basic:{uniforms:Ot([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Ot([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Ot([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Ot([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Ot([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Ot([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Ot([we.points,we.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Ot([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Ot([we.common,we.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Ot([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Ot([we.sprite,we.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Ot([we.common,we.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Ot([we.lights,we.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};mn.physical={uniforms:Ot([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const es={r:0,b:0,g:0},si=new Nn,tm=new pt;function nm(n,e,t,i,r,s,a){const o=new Ke(0);let l=s===!0?0:1,c,h,u=null,f=0,d=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function _(S){let x=!1;const v=g(S);v===null?p(o,l):v&&v.isColor&&(p(v,1),x=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===Cs)?(h===void 0&&(h=new xt(new Si(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:tr(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),si.copy(x.backgroundRotation),si.x*=-1,si.y*=-1,si.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tm.makeRotationFromEuler(si)),h.material.toneMapped=Qe.getTransfer(v.colorSpace)!==lt,(u!==v||f!==v.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new xt(new In(2,2),new cn({name:"BackgroundMaterial",uniforms:tr(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(v.colorSpace)!==lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,x){S.getRGB(es,Zc(n)),i.buffers.color.setClear(es.r,es.g,es.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(S,x=1){o.set(S),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:_,addToRenderList:m}}function im(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(y,P,q,z,j){let ne=!1;const J=u(z,q,P);s!==J&&(s=J,c(s.object)),ne=d(y,z,q,j),ne&&g(y,z,q,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(ne||a)&&(a=!1,v(y,P,q,z),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,P,q){const z=q.wireframe===!0;let j=i[y.id];j===void 0&&(j={},i[y.id]=j);let ne=j[P.id];ne===void 0&&(ne={},j[P.id]=ne);let J=ne[z];return J===void 0&&(J=f(l()),ne[z]=J),J}function f(y){const P=[],q=[],z=[];for(let j=0;j<t;j++)P[j]=0,q[j]=0,z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:q,attributeDivisors:z,object:y,attributes:{},index:null}}function d(y,P,q,z){const j=s.attributes,ne=P.attributes;let J=0;const se=q.getAttributes();for(const G in se)if(se[G].location>=0){const be=j[G];let Ue=ne[G];if(Ue===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(Ue=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(Ue=y.instanceColor)),be===void 0||be.attribute!==Ue||Ue&&be.data!==Ue.data)return!0;J++}return s.attributesNum!==J||s.index!==z}function g(y,P,q,z){const j={},ne=P.attributes;let J=0;const se=q.getAttributes();for(const G in se)if(se[G].location>=0){let be=ne[G];be===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(be=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(be=y.instanceColor));const Ue={};Ue.attribute=be,be&&be.data&&(Ue.data=be.data),j[G]=Ue,J++}s.attributes=j,s.attributesNum=J,s.index=z}function _(){const y=s.newAttributes;for(let P=0,q=y.length;P<q;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){const q=s.newAttributes,z=s.enabledAttributes,j=s.attributeDivisors;q[y]=1,z[y]===0&&(n.enableVertexAttribArray(y),z[y]=1),j[y]!==P&&(n.vertexAttribDivisor(y,P),j[y]=P)}function S(){const y=s.newAttributes,P=s.enabledAttributes;for(let q=0,z=P.length;q<z;q++)P[q]!==y[q]&&(n.disableVertexAttribArray(q),P[q]=0)}function x(y,P,q,z,j,ne,J){J===!0?n.vertexAttribIPointer(y,P,q,j,ne):n.vertexAttribPointer(y,P,q,z,j,ne)}function v(y,P,q,z){_();const j=z.attributes,ne=q.getAttributes(),J=P.defaultAttributeValues;for(const se in ne){const G=ne[se];if(G.location>=0){let Me=j[se];if(Me===void 0&&(se==="instanceMatrix"&&y.instanceMatrix&&(Me=y.instanceMatrix),se==="instanceColor"&&y.instanceColor&&(Me=y.instanceColor)),Me!==void 0){const be=Me.normalized,Ue=Me.itemSize,Ge=e.get(Me);if(Ge===void 0)continue;const H=Ge.buffer,I=Ge.type,V=Ge.bytesPerElement,$=I===n.INT||I===n.UNSIGNED_INT||Me.gpuType===bo;if(Me.isInterleavedBufferAttribute){const K=Me.data,re=K.stride,ue=Me.offset;if(K.isInstancedInterleavedBuffer){for(let Ee=0;Ee<G.locationSize;Ee++)p(G.location+Ee,K.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Ee=0;Ee<G.locationSize;Ee++)m(G.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,H);for(let Ee=0;Ee<G.locationSize;Ee++)x(G.location+Ee,Ue/G.locationSize,I,be,re*V,(ue+Ue/G.locationSize*Ee)*V,$)}else{if(Me.isInstancedBufferAttribute){for(let K=0;K<G.locationSize;K++)p(G.location+K,Me.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let K=0;K<G.locationSize;K++)m(G.location+K);n.bindBuffer(n.ARRAY_BUFFER,H);for(let K=0;K<G.locationSize;K++)x(G.location+K,Ue/G.locationSize,I,be,Ue*V,Ue/G.locationSize*K*V,$)}}else if(J!==void 0){const be=J[se];if(be!==void 0)switch(be.length){case 2:n.vertexAttrib2fv(G.location,be);break;case 3:n.vertexAttrib3fv(G.location,be);break;case 4:n.vertexAttrib4fv(G.location,be);break;default:n.vertexAttrib1fv(G.location,be)}}}}S()}function L(){C();for(const y in i){const P=i[y];for(const q in P){const z=P[q];for(const j in z)h(z[j].object),delete z[j];delete P[q]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const P=i[y.id];for(const q in P){const z=P[q];for(const j in z)h(z[j].object),delete z[j];delete P[q]}delete i[y.id]}function T(y){for(const P in i){const q=i[P];if(q[y.id]===void 0)continue;const z=q[y.id];for(const j in z)h(z[j].object),delete z[j];delete q[y.id]}}function C(){w(),a=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function rm(n,e,t){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,i,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function sm(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==on&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Dn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Rn&&!C)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:L,maxSamples:A}}function am(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new li,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||r;return r=f,i=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const S=s?0:i,x=S*4;let v=p.clippingState||null;l.value=v,v=h(g,f,x,d);for(let L=0;L!==x;++L)v[L]=t[L];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==_;++x,v+=4)a.copy(u[x]).applyMatrix4(S,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function om(n){let e=new WeakMap;function t(a,o){return o===Oa?a.mapping=ji:o===Ba&&(a.mapping=Ki),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Oa||o===Ba)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new _f(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Is extends Jc{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $i=4,Ll=[.125,.215,.35,.446,.526,.582],ui=20,la=new Is,Il=new Ke;let ca=null,ha=0,ua=0,fa=!1;const ci=(1+Math.sqrt(5))/2,ki=1/ci,Dl=[new D(-ci,ki,0),new D(ci,ki,0),new D(-ki,0,ci),new D(ki,0,ci),new D(0,ci,-ki),new D(0,ci,ki),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Ul{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ca=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ca,ha,ua),this._renderer.xr.enabled=fa,e.scissorTest=!1,ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ji||e.mapping===Ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ca=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:gi,format:on,colorSpace:ir,depthBuffer:!1},r=Nl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lm(s)),this._blurMaterial=cm(s,e,t)}return r}_compileMaterial(e){const t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,la)}_sceneToCubeUV(e,t,i,r){const o=new Jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Il),h.toneMapping=Jn,h.autoClear=!1;const d=new Zt({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),g=new xt(new Si,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Il),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;ts(r,S*x,p>2?x:0,x,x),h.setRenderTarget(r),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ji||e.mapping===Ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new xt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ts(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,la)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Dl[(r-s-1)%Dl.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new xt(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ui-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):ui;m>ui&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);const p=[];let S=0;for(let T=0;T<ui;++T){const C=T/_,w=Math.exp(-C*C/2);p.push(w),T===0?S+=w:T<m&&(S+=2*w)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const v=this._sizeLods[r],L=3*v*(r>x-$i?r-x+$i:0),A=4*(this._cubeSize-v);ts(t,L,A,3*v,2*v),l.setRenderTarget(t),l.render(u,la)}}function lm(n){const e=[],t=[],i=[];let r=n;const s=n-$i+1+Ll.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-$i?l=Ll[a-n+$i-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),x=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let A=0;A<d;A++){const T=A%3*2/3-1,C=A>2?0:-1,w=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];S.set(w,_*g*A),x.set(f,m*g*A);const y=[A,A,A,A,A,A];v.set(y,p*g*A)}const L=new It;L.setAttribute("position",new ln(S,_)),L.setAttribute("uv",new ln(x,m)),L.setAttribute("faceIndex",new ln(v,p)),e.push(L),r>$i&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Nl(n,e,t){const i=new Un(n,e,t);return i.texture.mapping=Cs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ts(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function cm(n,e,t){const i=new Float32Array(ui),r=new D(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Io(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Fl(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Io(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function kl(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Io(){return`

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
	`}function hm(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Oa||l===Ba,h=l===ji||l===Ki;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Ul(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&r(d)?(t===null&&(t=new Ul(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function um(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&_r("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function fm(n,e,t,i){const r={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",a),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let x=0,v=S.length;x<v;x+=3){const L=S[x+0],A=S[x+1],T=S[x+2];f.push(L,A,A,T,T,L)}}else if(g!==void 0){const S=g.array;_=g.version;for(let x=0,v=S.length/3-1;x<v;x+=3){const L=x+0,A=x+1,T=x+2;f.push(L,A,A,T,T,L)}}else return;const m=new(Vc(f)?Yc:qc)(f,1);m.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function dm(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*a),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,f*a,g),t.update(d,i,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function u(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*_[S];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function pm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function mm(n,e,t){const i=new WeakMap,r=new ht;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let y=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let L=o.attributes.position.count*v,A=1;L>e.maxTextureSize&&(A=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const T=new Float32Array(L*A*4*u),C=new Wc(T,L,A,u);C.type=Rn,C.needsUpdate=!0;const w=v*4;for(let P=0;P<u;P++){const q=p[P],z=S[P],j=x[P],ne=L*A*4*P;for(let J=0;J<q.count;J++){const se=J*w;g===!0&&(r.fromBufferAttribute(q,J),T[ne+se+0]=r.x,T[ne+se+1]=r.y,T[ne+se+2]=r.z,T[ne+se+3]=0),_===!0&&(r.fromBufferAttribute(z,J),T[ne+se+4]=r.x,T[ne+se+5]=r.y,T[ne+se+6]=r.z,T[ne+se+7]=0),m===!0&&(r.fromBufferAttribute(j,J),T[ne+se+8]=r.x,T[ne+se+9]=r.y,T[ne+se+10]=r.z,T[ne+se+11]=j.itemSize===4?r.w:1)}}f={count:u,texture:C,size:new ve(L,A)},i.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function gm(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Qc extends Ft{constructor(e,t,i,r,s,a,o,l,c,h=Yi){if(h!==Yi&&h!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Yi&&(i=mi),i===void 0&&h===er&&(i=Qi),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const eh=new Ft,Ol=new Qc(1,1),th=new Wc,nh=new ef,ih=new jc,Bl=[],zl=[],Hl=new Float32Array(16),Vl=new Float32Array(9),Gl=new Float32Array(4);function ar(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Bl[r];if(s===void 0&&(s=new Float32Array(r),Bl[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ds(n,e){let t=zl[e];t===void 0&&(t=new Int32Array(e),zl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function vm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _m(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function xm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function ym(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function Mm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,i))return;Gl.set(i),n.uniformMatrix2fv(this.addr,!1,Gl),wt(t,i)}}function Sm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,i))return;Vl.set(i),n.uniformMatrix3fv(this.addr,!1,Vl),wt(t,i)}}function bm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,i))return;Hl.set(i),n.uniformMatrix4fv(this.addr,!1,Hl),wt(t,i)}}function wm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Em(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function Tm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function Am(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function Rm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Cm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function Pm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function Lm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function Im(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ol.compareFunction=Hc,s=Ol):s=eh,t.setTexture2D(e||s,r)}function Dm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||nh,r)}function Um(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ih,r)}function Nm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||th,r)}function Fm(n){switch(n){case 5126:return vm;case 35664:return _m;case 35665:return xm;case 35666:return ym;case 35674:return Mm;case 35675:return Sm;case 35676:return bm;case 5124:case 35670:return wm;case 35667:case 35671:return Em;case 35668:case 35672:return Tm;case 35669:case 35673:return Am;case 5125:return Rm;case 36294:return Cm;case 36295:return Pm;case 36296:return Lm;case 35678:case 36198:case 36298:case 36306:case 35682:return Im;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Um;case 36289:case 36303:case 36311:case 36292:return Nm}}function km(n,e){n.uniform1fv(this.addr,e)}function Om(n,e){const t=ar(e,this.size,2);n.uniform2fv(this.addr,t)}function Bm(n,e){const t=ar(e,this.size,3);n.uniform3fv(this.addr,t)}function zm(n,e){const t=ar(e,this.size,4);n.uniform4fv(this.addr,t)}function Hm(n,e){const t=ar(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Vm(n,e){const t=ar(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Gm(n,e){const t=ar(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Wm(n,e){n.uniform1iv(this.addr,e)}function $m(n,e){n.uniform2iv(this.addr,e)}function Xm(n,e){n.uniform3iv(this.addr,e)}function qm(n,e){n.uniform4iv(this.addr,e)}function Ym(n,e){n.uniform1uiv(this.addr,e)}function Zm(n,e){n.uniform2uiv(this.addr,e)}function Jm(n,e){n.uniform3uiv(this.addr,e)}function jm(n,e){n.uniform4uiv(this.addr,e)}function Km(n,e,t){const i=this.cache,r=e.length,s=Ds(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||eh,s[a])}function Qm(n,e,t){const i=this.cache,r=e.length,s=Ds(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||nh,s[a])}function e0(n,e,t){const i=this.cache,r=e.length,s=Ds(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ih,s[a])}function t0(n,e,t){const i=this.cache,r=e.length,s=Ds(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||th,s[a])}function n0(n){switch(n){case 5126:return km;case 35664:return Om;case 35665:return Bm;case 35666:return zm;case 35674:return Hm;case 35675:return Vm;case 35676:return Gm;case 5124:case 35670:return Wm;case 35667:case 35671:return $m;case 35668:case 35672:return Xm;case 35669:case 35673:return qm;case 5125:return Ym;case 36294:return Zm;case 36295:return Jm;case 36296:return jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return Qm;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return t0}}class i0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Fm(t.type)}}class r0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=n0(t.type)}}class s0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const da=/(\w+)(\])?(\[|\.)?/g;function Wl(n,e){n.seq.push(e),n.map[e.id]=e}function a0(n,e,t){const i=n.name,r=i.length;for(da.lastIndex=0;;){const s=da.exec(i),a=da.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Wl(t,c===void 0?new i0(o,n,e):new r0(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new s0(o),Wl(t,u)),t=u}}}class ys{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);a0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function $l(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const o0=37297;let l0=0;function c0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Xl=new Ze;function h0(n){Qe._getMatrix(Xl,Qe.workingColorSpace,n);const e=`mat3( ${Xl.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case Ls:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ql(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+c0(n.getShaderSource(e),a)}else return r}function u0(n,e){const t=h0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function f0(n,e){let t;switch(e){case uu:t="Linear";break;case fu:t="Reinhard";break;case du:t="Cineon";break;case pu:t="ACESFilmic";break;case gu:t="AgX";break;case vu:t="Neutral";break;case mu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ns=new D;function d0(){Qe.getLuminanceCoefficients(ns);const n=ns.x.toFixed(4),e=ns.y.toFixed(4),t=ns.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function m0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function g0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function xr(n){return n!==""}function Yl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const v0=/^[ \t]*#include +<([\w\d./]+)>/gm;function po(n){return n.replace(v0,x0)}const _0=new Map;function x0(n,e){let t=Je[e];if(t===void 0){const i=_0.get(e);if(i!==void 0)t=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return po(t)}const y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jl(n){return n.replace(y0,M0)}function M0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jl(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function S0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Rc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Wh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===An&&(e="SHADOWMAP_TYPE_VSM"),e}function b0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ji:case Ki:e="ENVMAP_TYPE_CUBE";break;case Cs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function w0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ki:e="ENVMAP_MODE_REFRACTION";break}return e}function E0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Cc:e="ENVMAP_BLENDING_MULTIPLY";break;case cu:e="ENVMAP_BLENDING_MIX";break;case hu:e="ENVMAP_BLENDING_ADD";break}return e}function T0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function A0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=S0(t),c=b0(t),h=w0(t),u=E0(t),f=T0(t),d=p0(t),g=m0(s),_=r.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xr).join(`
`),p.length>0&&(p+=`
`)):(m=[jl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),p=[jl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?Je.tonemapping_pars_fragment:"",t.toneMapping!==Jn?f0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,u0("linearToOutputTexel",t.outputColorSpace),d0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),a=po(a),a=Yl(a,t),a=Zl(a,t),o=po(o),o=Yl(o,t),o=Zl(o,t),a=Jl(a),o=Jl(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=S+m+a,v=S+p+o,L=$l(r,r.VERTEX_SHADER,x),A=$l(r,r.FRAGMENT_SHADER,v);r.attachShader(_,L),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(P){if(n.debug.checkShaderErrors){const q=r.getProgramInfoLog(_).trim(),z=r.getShaderInfoLog(L).trim(),j=r.getShaderInfoLog(A).trim();let ne=!0,J=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,L,A);else{const se=ql(r,L,"vertex"),G=ql(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+q+`
`+se+`
`+G)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(z===""||j==="")&&(J=!1);J&&(P.diagnostics={runnable:ne,programLog:q,vertexShader:{log:z,prefix:m},fragmentShader:{log:j,prefix:p}})}r.deleteShader(L),r.deleteShader(A),C=new ys(r,_),w=g0(r,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,o0)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=l0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=A,this}let R0=0;class C0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new P0(e),t.set(e,i)),i}}class P0{constructor(e){this.id=R0++,this.code=e,this.usedTimes=0}}function L0(n,e,t,i,r,s,a){const o=new $c,l=new C0,c=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,y,P,q,z){const j=q.fog,ne=z.geometry,J=w.isMeshStandardMaterial?q.environment:null,se=(w.isMeshStandardMaterial?t:e).get(w.envMap||J),G=se&&se.mapping===Cs?se.image.height:null,Me=g[w.type];w.precision!==null&&(d=r.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const be=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Ue=be!==void 0?be.length:0;let Ge=0;ne.morphAttributes.position!==void 0&&(Ge=1),ne.morphAttributes.normal!==void 0&&(Ge=2),ne.morphAttributes.color!==void 0&&(Ge=3);let H,I,V,$;if(Me){const ot=mn[Me];H=ot.vertexShader,I=ot.fragmentShader}else H=w.vertexShader,I=w.fragmentShader,l.update(w),V=l.getVertexShaderID(w),$=l.getFragmentShaderID(w);const K=n.getRenderTarget(),re=n.state.buffers.depth.getReversed(),ue=z.isInstancedMesh===!0,Ee=z.isBatchedMesh===!0,ge=!!w.map,Q=!!w.matcap,ae=!!se,R=!!w.aoMap,Se=!!w.lightMap,pe=!!w.bumpMap,Te=!!w.normalMap,_e=!!w.displacementMap,Ae=!!w.emissiveMap,Re=!!w.metalnessMap,E=!!w.roughnessMap,M=w.anisotropy>0,W=w.clearcoat>0,ie=w.dispersion>0,U=w.iridescence>0,F=w.sheen>0,X=w.transmission>0,k=M&&!!w.anisotropyMap,oe=W&&!!w.clearcoatMap,Fe=W&&!!w.clearcoatNormalMap,le=W&&!!w.clearcoatRoughnessMap,ye=U&&!!w.iridescenceMap,ke=U&&!!w.iridescenceThicknessMap,Ve=F&&!!w.sheenColorMap,me=F&&!!w.sheenRoughnessMap,je=!!w.specularMap,$e=!!w.specularColorMap,at=!!w.specularIntensityMap,N=X&&!!w.transmissionMap,Ce=X&&!!w.thicknessMap,te=!!w.gradientMap,ce=!!w.alphaMap,De=w.alphaTest>0,Le=!!w.alphaHash,qe=!!w.extensions;let gt=Jn;w.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(gt=n.toneMapping);const Dt={shaderID:Me,shaderType:w.type,shaderName:w.name,vertexShader:H,fragmentShader:I,defines:w.defines,customVertexShaderID:V,customFragmentShaderID:$,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Ee,batchingColor:Ee&&z._colorsTexture!==null,instancing:ue,instancingColor:ue&&z.instanceColor!==null,instancingMorph:ue&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ir,alphaToCoverage:!!w.alphaToCoverage,map:ge,matcap:Q,envMap:ae,envMapMode:ae&&se.mapping,envMapCubeUVHeight:G,aoMap:R,lightMap:Se,bumpMap:pe,normalMap:Te,displacementMap:f&&_e,emissiveMap:Ae,normalMapObjectSpace:Te&&w.normalMapType===Mu,normalMapTangentSpace:Te&&w.normalMapType===zc,metalnessMap:Re,roughnessMap:E,anisotropy:M,anisotropyMap:k,clearcoat:W,clearcoatMap:oe,clearcoatNormalMap:Fe,clearcoatRoughnessMap:le,dispersion:ie,iridescence:U,iridescenceMap:ye,iridescenceThicknessMap:ke,sheen:F,sheenColorMap:Ve,sheenRoughnessMap:me,specularMap:je,specularColorMap:$e,specularIntensityMap:at,transmission:X,transmissionMap:N,thicknessMap:Ce,gradientMap:te,opaque:w.transparent===!1&&w.blending===qi&&w.alphaToCoverage===!1,alphaMap:ce,alphaTest:De,alphaHash:Le,combine:w.combine,mapUv:ge&&_(w.map.channel),aoMapUv:R&&_(w.aoMap.channel),lightMapUv:Se&&_(w.lightMap.channel),bumpMapUv:pe&&_(w.bumpMap.channel),normalMapUv:Te&&_(w.normalMap.channel),displacementMapUv:_e&&_(w.displacementMap.channel),emissiveMapUv:Ae&&_(w.emissiveMap.channel),metalnessMapUv:Re&&_(w.metalnessMap.channel),roughnessMapUv:E&&_(w.roughnessMap.channel),anisotropyMapUv:k&&_(w.anisotropyMap.channel),clearcoatMapUv:oe&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(w.sheenRoughnessMap.channel),specularMapUv:je&&_(w.specularMap.channel),specularColorMapUv:$e&&_(w.specularColorMap.channel),specularIntensityMapUv:at&&_(w.specularIntensityMap.channel),transmissionMapUv:N&&_(w.transmissionMap.channel),thicknessMapUv:Ce&&_(w.thicknessMap.channel),alphaMapUv:ce&&_(w.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Te||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!ne.attributes.uv&&(ge||ce),fog:!!j,useFog:w.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:re,skinning:z.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:Ge,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:gt,decodeVideoTexture:ge&&w.map.isVideoTexture===!0&&Qe.getTransfer(w.map.colorSpace)===lt,decodeVideoTextureEmissive:Ae&&w.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(w.emissiveMap.colorSpace)===lt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ct,flipSided:w.side===Vt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:qe&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&w.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function p(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)y.push(P),y.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(S(y,w),x(y,w),y.push(n.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function S(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function x(w,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),w.push(o.mask)}function v(w){const y=g[w.type];let P;if(y){const q=mn[y];P=pf.clone(q.uniforms)}else P=w.uniforms;return P}function L(w,y){let P;for(let q=0,z=h.length;q<z;q++){const j=h[q];if(j.cacheKey===y){P=j,++P.usedTimes;break}}return P===void 0&&(P=new A0(n,y,w,s),h.push(P)),P}function A(w){if(--w.usedTimes===0){const y=h.indexOf(w);h[y]=h[h.length-1],h.pop(),w.destroy()}}function T(w){l.remove(w)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:L,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:C}}function I0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function D0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Kl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ql(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u,f,d,g,_,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||D0),i.length>1&&i.sort(f||Kl),r.length>1&&r.sort(f||Kl)}function h(){for(let u=e,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function U0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Ql,n.set(i,[a])):r>=s.length?(a=new Ql,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function N0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ke};break;case"SpotLight":t={position:new D,direction:new D,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function F0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let k0=0;function O0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function B0(n){const e=new N0,t=F0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new pt,a=new pt;function o(c){let h=0,u=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,S=0,x=0,v=0,L=0,A=0,T=0;c.sort(O0);for(let w=0,y=c.length;w<y;w++){const P=c[w],q=P.color,z=P.intensity,j=P.distance,ne=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=q.r*z,u+=q.g*z,f+=q.b*z;else if(P.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(P.sh.coefficients[J],z);T++}else if(P.isDirectionalLight){const J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const se=P.shadow,G=t.get(P);G.shadowIntensity=se.intensity,G.shadowBias=se.bias,G.shadowNormalBias=se.normalBias,G.shadowRadius=se.radius,G.shadowMapSize=se.mapSize,i.directionalShadow[d]=G,i.directionalShadowMap[d]=ne,i.directionalShadowMatrix[d]=P.shadow.matrix,S++}i.directional[d]=J,d++}else if(P.isSpotLight){const J=e.get(P);J.position.setFromMatrixPosition(P.matrixWorld),J.color.copy(q).multiplyScalar(z),J.distance=j,J.coneCos=Math.cos(P.angle),J.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),J.decay=P.decay,i.spot[_]=J;const se=P.shadow;if(P.map&&(i.spotLightMap[L]=P.map,L++,se.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[_]=se.matrix,P.castShadow){const G=t.get(P);G.shadowIntensity=se.intensity,G.shadowBias=se.bias,G.shadowNormalBias=se.normalBias,G.shadowRadius=se.radius,G.shadowMapSize=se.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=ne,v++}_++}else if(P.isRectAreaLight){const J=e.get(P);J.color.copy(q).multiplyScalar(z),J.halfWidth.set(P.width*.5,0,0),J.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=J,m++}else if(P.isPointLight){const J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),J.distance=P.distance,J.decay=P.decay,P.castShadow){const se=P.shadow,G=t.get(P);G.shadowIntensity=se.intensity,G.shadowBias=se.bias,G.shadowNormalBias=se.normalBias,G.shadowRadius=se.radius,G.shadowMapSize=se.mapSize,G.shadowCameraNear=se.camera.near,G.shadowCameraFar=se.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=ne,i.pointShadowMatrix[g]=P.shadow.matrix,x++}i.point[g]=J,g++}else if(P.isHemisphereLight){const J=e.get(P);J.skyColor.copy(P.color).multiplyScalar(z),J.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[p]=J,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==S||C.numPointShadows!==x||C.numSpotShadows!==v||C.numSpotMaps!==L||C.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+L-A,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=S,C.numPointShadows=x,C.numSpotShadows=v,C.numSpotMaps=L,C.numLightProbes=T,i.version=k0++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const x=c[p];if(x.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function ec(n){const e=new B0(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function z0(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ec(n),e.set(r,[o])):s>=a.length?(o=new ec(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class H0 extends Dr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class V0 extends Dr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const G0=`void main() {
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
}`;function $0(n,e,t){let i=new Lo;const r=new ve,s=new ve,a=new ht,o=new H0({depthPacking:yu}),l=new V0,c={},h=t.maxTextureSize,u={[Qn]:Vt,[Vt]:Qn,[Ct]:Ct},f=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:G0,fragmentShader:W0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new It;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new xt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rc;let p=this.type;this.render=function(A,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=n.getRenderTarget(),y=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),q=n.state;q.setBlending(Zn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const z=p!==An&&this.type===An,j=p===An&&this.type!==An;for(let ne=0,J=A.length;ne<J;ne++){const se=A[ne],G=se.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const Me=G.getFrameExtents();if(r.multiply(Me),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Me.x),r.x=s.x*Me.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Me.y),r.y=s.y*Me.y,G.mapSize.y=s.y)),G.map===null||z===!0||j===!0){const Ue=this.type!==An?{minFilter:Pt,magFilter:Pt}:{};G.map!==null&&G.map.dispose(),G.map=new Un(r.x,r.y,Ue),G.map.texture.name=se.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const be=G.getViewportCount();for(let Ue=0;Ue<be;Ue++){const Ge=G.getViewport(Ue);a.set(s.x*Ge.x,s.y*Ge.y,s.x*Ge.z,s.y*Ge.w),q.viewport(a),G.updateMatrices(se,Ue),i=G.getFrustum(),v(T,C,G.camera,se,this.type)}G.isPointLightShadow!==!0&&this.type===An&&S(G,C),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,y,P)};function S(A,T){const C=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Un(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,C,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,C,d,_,null)}function x(A,T,C,w){let y=null;const P=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)y=P;else if(y=C.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const q=y.uuid,z=T.uuid;let j=c[q];j===void 0&&(j={},c[q]=j);let ne=j[z];ne===void 0&&(ne=y.clone(),j[z]=ne,T.addEventListener("dispose",L)),y=ne}if(y.visible=T.visible,y.wireframe=T.wireframe,w===An?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const q=n.properties.get(y);q.light=C}return y}function v(A,T,C,w,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===An)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const z=e.update(A),j=A.material;if(Array.isArray(j)){const ne=z.groups;for(let J=0,se=ne.length;J<se;J++){const G=ne[J],Me=j[G.materialIndex];if(Me&&Me.visible){const be=x(A,Me,w,y);A.onBeforeShadow(n,A,T,C,z,be,G),n.renderBufferDirect(C,null,z,be,A,G),A.onAfterShadow(n,A,T,C,z,be,G)}}}else if(j.visible){const ne=x(A,j,w,y);A.onBeforeShadow(n,A,T,C,z,ne,null),n.renderBufferDirect(C,null,z,ne,A,null),A.onAfterShadow(n,A,T,C,z,ne,null)}}const q=A.children;for(let z=0,j=q.length;z<j;z++)v(q[z],T,C,w,y)}function L(A){A.target.removeEventListener("dispose",L);for(const C in c){const w=c[C],y=A.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}const X0={[La]:Ia,[Da]:Fa,[Ua]:ka,[Ji]:Na,[Ia]:La,[Fa]:Da,[ka]:Ua,[Na]:Ji};function q0(n,e){function t(){let N=!1;const Ce=new ht;let te=null;const ce=new ht(0,0,0,0);return{setMask:function(De){te!==De&&!N&&(n.colorMask(De,De,De,De),te=De)},setLocked:function(De){N=De},setClear:function(De,Le,qe,gt,Dt){Dt===!0&&(De*=gt,Le*=gt,qe*=gt),Ce.set(De,Le,qe,gt),ce.equals(Ce)===!1&&(n.clearColor(De,Le,qe,gt),ce.copy(Ce))},reset:function(){N=!1,te=null,ce.set(-1,0,0,0)}}}function i(){let N=!1,Ce=!1,te=null,ce=null,De=null;return{setReversed:function(Le){if(Ce!==Le){const qe=e.get("EXT_clip_control");Ce?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT);const gt=De;De=null,this.setClear(gt)}Ce=Le},getReversed:function(){return Ce},setTest:function(Le){Le?K(n.DEPTH_TEST):re(n.DEPTH_TEST)},setMask:function(Le){te!==Le&&!N&&(n.depthMask(Le),te=Le)},setFunc:function(Le){if(Ce&&(Le=X0[Le]),ce!==Le){switch(Le){case La:n.depthFunc(n.NEVER);break;case Ia:n.depthFunc(n.ALWAYS);break;case Da:n.depthFunc(n.LESS);break;case Ji:n.depthFunc(n.LEQUAL);break;case Ua:n.depthFunc(n.EQUAL);break;case Na:n.depthFunc(n.GEQUAL);break;case Fa:n.depthFunc(n.GREATER);break;case ka:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=Le}},setLocked:function(Le){N=Le},setClear:function(Le){De!==Le&&(Ce&&(Le=1-Le),n.clearDepth(Le),De=Le)},reset:function(){N=!1,te=null,ce=null,De=null,Ce=!1}}}function r(){let N=!1,Ce=null,te=null,ce=null,De=null,Le=null,qe=null,gt=null,Dt=null;return{setTest:function(ot){N||(ot?K(n.STENCIL_TEST):re(n.STENCIL_TEST))},setMask:function(ot){Ce!==ot&&!N&&(n.stencilMask(ot),Ce=ot)},setFunc:function(ot,jt,_n){(te!==ot||ce!==jt||De!==_n)&&(n.stencilFunc(ot,jt,_n),te=ot,ce=jt,De=_n)},setOp:function(ot,jt,_n){(Le!==ot||qe!==jt||gt!==_n)&&(n.stencilOp(ot,jt,_n),Le=ot,qe=jt,gt=_n)},setLocked:function(ot){N=ot},setClear:function(ot){Dt!==ot&&(n.clearStencil(ot),Dt=ot)},reset:function(){N=!1,Ce=null,te=null,ce=null,De=null,Le=null,qe=null,gt=null,Dt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,x=null,v=null,L=null,A=null,T=new Ke(0,0,0),C=0,w=!1,y=null,P=null,q=null,z=null,j=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,se=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(G)[1]),J=se>=1):G.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),J=se>=2);let Me=null,be={};const Ue=n.getParameter(n.SCISSOR_BOX),Ge=n.getParameter(n.VIEWPORT),H=new ht().fromArray(Ue),I=new ht().fromArray(Ge);function V(N,Ce,te,ce){const De=new Uint8Array(4),Le=n.createTexture();n.bindTexture(N,Le),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<te;qe++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(Ce+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return Le}const $={};$[n.TEXTURE_2D]=V(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=V(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=V(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=V(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(n.DEPTH_TEST),a.setFunc(Ji),pe(!1),Te(rl),K(n.CULL_FACE),R(Zn);function K(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function re(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function ue(N,Ce){return u[N]!==Ce?(n.bindFramebuffer(N,Ce),u[N]=Ce,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Ce),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ee(N,Ce){let te=d,ce=!1;if(N){te=f.get(Ce),te===void 0&&(te=[],f.set(Ce,te));const De=N.textures;if(te.length!==De.length||te[0]!==n.COLOR_ATTACHMENT0){for(let Le=0,qe=De.length;Le<qe;Le++)te[Le]=n.COLOR_ATTACHMENT0+Le;te.length=De.length,ce=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,ce=!0);ce&&n.drawBuffers(te)}function ge(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const Q={[hi]:n.FUNC_ADD,[Xh]:n.FUNC_SUBTRACT,[qh]:n.FUNC_REVERSE_SUBTRACT};Q[Yh]=n.MIN,Q[Zh]=n.MAX;const ae={[Jh]:n.ZERO,[jh]:n.ONE,[Kh]:n.SRC_COLOR,[Ca]:n.SRC_ALPHA,[ru]:n.SRC_ALPHA_SATURATE,[nu]:n.DST_COLOR,[eu]:n.DST_ALPHA,[Qh]:n.ONE_MINUS_SRC_COLOR,[Pa]:n.ONE_MINUS_SRC_ALPHA,[iu]:n.ONE_MINUS_DST_COLOR,[tu]:n.ONE_MINUS_DST_ALPHA,[su]:n.CONSTANT_COLOR,[au]:n.ONE_MINUS_CONSTANT_COLOR,[ou]:n.CONSTANT_ALPHA,[lu]:n.ONE_MINUS_CONSTANT_ALPHA};function R(N,Ce,te,ce,De,Le,qe,gt,Dt,ot){if(N===Zn){_===!0&&(re(n.BLEND),_=!1);return}if(_===!1&&(K(n.BLEND),_=!0),N!==$h){if(N!==m||ot!==w){if((p!==hi||v!==hi)&&(n.blendEquation(n.FUNC_ADD),p=hi,v=hi),ot)switch(N){case qi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ra:n.blendFunc(n.ONE,n.ONE);break;case sl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case al:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case qi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ra:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case sl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case al:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,x=null,L=null,A=null,T.set(0,0,0),C=0,m=N,w=ot}return}De=De||Ce,Le=Le||te,qe=qe||ce,(Ce!==p||De!==v)&&(n.blendEquationSeparate(Q[Ce],Q[De]),p=Ce,v=De),(te!==S||ce!==x||Le!==L||qe!==A)&&(n.blendFuncSeparate(ae[te],ae[ce],ae[Le],ae[qe]),S=te,x=ce,L=Le,A=qe),(gt.equals(T)===!1||Dt!==C)&&(n.blendColor(gt.r,gt.g,gt.b,Dt),T.copy(gt),C=Dt),m=N,w=!1}function Se(N,Ce){N.side===Ct?re(n.CULL_FACE):K(n.CULL_FACE);let te=N.side===Vt;Ce&&(te=!te),pe(te),N.blending===qi&&N.transparent===!1?R(Zn):R(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const ce=N.stencilWrite;o.setTest(ce),ce&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ae(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):re(n.SAMPLE_ALPHA_TO_COVERAGE)}function pe(N){y!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),y=N)}function Te(N){N!==Vh?(K(n.CULL_FACE),N!==P&&(N===rl?n.cullFace(n.BACK):N===Gh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):re(n.CULL_FACE),P=N}function _e(N){N!==q&&(J&&n.lineWidth(N),q=N)}function Ae(N,Ce,te){N?(K(n.POLYGON_OFFSET_FILL),(z!==Ce||j!==te)&&(n.polygonOffset(Ce,te),z=Ce,j=te)):re(n.POLYGON_OFFSET_FILL)}function Re(N){N?K(n.SCISSOR_TEST):re(n.SCISSOR_TEST)}function E(N){N===void 0&&(N=n.TEXTURE0+ne-1),Me!==N&&(n.activeTexture(N),Me=N)}function M(N,Ce,te){te===void 0&&(Me===null?te=n.TEXTURE0+ne-1:te=Me);let ce=be[te];ce===void 0&&(ce={type:void 0,texture:void 0},be[te]=ce),(ce.type!==N||ce.texture!==Ce)&&(Me!==te&&(n.activeTexture(te),Me=te),n.bindTexture(N,Ce||$[N]),ce.type=N,ce.texture=Ce)}function W(){const N=be[Me];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ie(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function U(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function F(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function X(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function k(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ve(N){H.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),H.copy(N))}function me(N){I.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),I.copy(N))}function je(N,Ce){let te=c.get(Ce);te===void 0&&(te=new WeakMap,c.set(Ce,te));let ce=te.get(N);ce===void 0&&(ce=n.getUniformBlockIndex(Ce,N.name),te.set(N,ce))}function $e(N,Ce){const ce=c.get(Ce).get(N);l.get(Ce)!==ce&&(n.uniformBlockBinding(Ce,ce,N.__bindingPointIndex),l.set(Ce,ce))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Me=null,be={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,x=null,v=null,L=null,A=null,T=new Ke(0,0,0),C=0,w=!1,y=null,P=null,q=null,z=null,j=null,H.set(0,0,n.canvas.width,n.canvas.height),I.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:K,disable:re,bindFramebuffer:ue,drawBuffers:Ee,useProgram:ge,setBlending:R,setMaterial:Se,setFlipSided:pe,setCullFace:Te,setLineWidth:_e,setPolygonOffset:Ae,setScissorTest:Re,activeTexture:E,bindTexture:M,unbindTexture:W,compressedTexImage2D:ie,compressedTexImage3D:U,texImage2D:ye,texImage3D:ke,updateUBOMapping:je,uniformBlockBinding:$e,texStorage2D:Fe,texStorage3D:le,texSubImage2D:F,texSubImage3D:X,compressedTexSubImage2D:k,compressedTexSubImage3D:oe,scissor:Ve,viewport:me,reset:at}}function tc(n,e,t,i){const r=Y0(i);switch(t){case Uc:return n*e;case Fc:return n*e;case kc:return n*e*2;case Ps:return n*e/r.components*r.byteLength;case To:return n*e/r.components*r.byteLength;case Oc:return n*e*2/r.components*r.byteLength;case Ao:return n*e*2/r.components*r.byteLength;case Nc:return n*e*3/r.components*r.byteLength;case on:return n*e*4/r.components*r.byteLength;case Ro:return n*e*4/r.components*r.byteLength;case ms:case gs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vs:case _s:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Va:case Wa:return Math.max(n,16)*Math.max(e,8)/4;case Ha:case Ga:return Math.max(n,8)*Math.max(e,8)/2;case $a:case Xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Za:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ja:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case eo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case to:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case no:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case io:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ro:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case so:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ao:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case oo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case xs:case lo:case co:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Bc:case ho:return Math.ceil(n/4)*Math.ceil(e/4)*8;case uo:case fo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Y0(n){switch(n){case Dn:case Lc:return{byteLength:1,components:1};case Ar:case Ic:case gi:return{byteLength:2,components:1};case wo:case Eo:return{byteLength:2,components:4};case mi:case bo:case Rn:return{byteLength:4,components:1};case Dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Z0(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,M){return d?new OffscreenCanvas(E,M):ws("canvas")}function _(E,M,W){let ie=1;const U=Re(E);if((U.width>W||U.height>W)&&(ie=W/Math.max(U.width,U.height)),ie<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const F=Math.floor(ie*U.width),X=Math.floor(ie*U.height);u===void 0&&(u=g(F,X));const k=M?g(F,X):u;return k.width=F,k.height=X,k.getContext("2d").drawImage(E,0,0,F,X),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+F+"x"+X+")."),k}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(E,M,W,ie,U=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let F=M;if(M===n.RED&&(W===n.FLOAT&&(F=n.R32F),W===n.HALF_FLOAT&&(F=n.R16F),W===n.UNSIGNED_BYTE&&(F=n.R8)),M===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(F=n.R8UI),W===n.UNSIGNED_SHORT&&(F=n.R16UI),W===n.UNSIGNED_INT&&(F=n.R32UI),W===n.BYTE&&(F=n.R8I),W===n.SHORT&&(F=n.R16I),W===n.INT&&(F=n.R32I)),M===n.RG&&(W===n.FLOAT&&(F=n.RG32F),W===n.HALF_FLOAT&&(F=n.RG16F),W===n.UNSIGNED_BYTE&&(F=n.RG8)),M===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(F=n.RG8UI),W===n.UNSIGNED_SHORT&&(F=n.RG16UI),W===n.UNSIGNED_INT&&(F=n.RG32UI),W===n.BYTE&&(F=n.RG8I),W===n.SHORT&&(F=n.RG16I),W===n.INT&&(F=n.RG32I)),M===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(F=n.RGB8UI),W===n.UNSIGNED_SHORT&&(F=n.RGB16UI),W===n.UNSIGNED_INT&&(F=n.RGB32UI),W===n.BYTE&&(F=n.RGB8I),W===n.SHORT&&(F=n.RGB16I),W===n.INT&&(F=n.RGB32I)),M===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(F=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(F=n.RGBA16UI),W===n.UNSIGNED_INT&&(F=n.RGBA32UI),W===n.BYTE&&(F=n.RGBA8I),W===n.SHORT&&(F=n.RGBA16I),W===n.INT&&(F=n.RGBA32I)),M===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&(F=n.RGB9_E5),M===n.RGBA){const X=U?Ls:Qe.getTransfer(ie);W===n.FLOAT&&(F=n.RGBA32F),W===n.HALF_FLOAT&&(F=n.RGBA16F),W===n.UNSIGNED_BYTE&&(F=X===lt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(F=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(F=n.RGB5_A1)}return(F===n.R16F||F===n.R32F||F===n.RG16F||F===n.RG32F||F===n.RGBA16F||F===n.RGBA32F)&&e.get("EXT_color_buffer_float"),F}function v(E,M){let W;return E?M===null||M===mi||M===Qi?W=n.DEPTH24_STENCIL8:M===Rn?W=n.DEPTH32F_STENCIL8:M===Ar&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===mi||M===Qi?W=n.DEPTH_COMPONENT24:M===Rn?W=n.DEPTH_COMPONENT32F:M===Ar&&(W=n.DEPTH_COMPONENT16),W}function L(E,M){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Pt&&E.minFilter!==gn?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function A(E){const M=E.target;M.removeEventListener("dispose",A),C(M),M.isVideoTexture&&h.delete(M)}function T(E){const M=E.target;M.removeEventListener("dispose",T),y(M)}function C(E){const M=i.get(E);if(M.__webglInit===void 0)return;const W=E.source,ie=f.get(W);if(ie){const U=ie[M.__cacheKey];U.usedTimes--,U.usedTimes===0&&w(E),Object.keys(ie).length===0&&f.delete(W)}i.remove(E)}function w(E){const M=i.get(E);n.deleteTexture(M.__webglTexture);const W=E.source,ie=f.get(W);delete ie[M.__cacheKey],a.memory.textures--}function y(E){const M=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(M.__webglFramebuffer[ie]))for(let U=0;U<M.__webglFramebuffer[ie].length;U++)n.deleteFramebuffer(M.__webglFramebuffer[ie][U]);else n.deleteFramebuffer(M.__webglFramebuffer[ie]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[ie])}else{if(Array.isArray(M.__webglFramebuffer))for(let ie=0;ie<M.__webglFramebuffer.length;ie++)n.deleteFramebuffer(M.__webglFramebuffer[ie]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ie=0;ie<M.__webglColorRenderbuffer.length;ie++)M.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[ie]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=E.textures;for(let ie=0,U=W.length;ie<U;ie++){const F=i.get(W[ie]);F.__webglTexture&&(n.deleteTexture(F.__webglTexture),a.memory.textures--),i.remove(W[ie])}i.remove(E)}let P=0;function q(){P=0}function z(){const E=P;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),P+=1,E}function j(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function ne(E,M){const W=i.get(E);if(E.isVideoTexture&&_e(E),E.isRenderTargetTexture===!1&&E.version>0&&W.__version!==E.version){const ie=E.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{I(W,E,M);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+M)}function J(E,M){const W=i.get(E);if(E.version>0&&W.__version!==E.version){I(W,E,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+M)}function se(E,M){const W=i.get(E);if(E.version>0&&W.__version!==E.version){I(W,E,M);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+M)}function G(E,M){const W=i.get(E);if(E.version>0&&W.__version!==E.version){V(W,E,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+M)}const Me={[Ss]:n.REPEAT,[fi]:n.CLAMP_TO_EDGE,[za]:n.MIRRORED_REPEAT},be={[Pt]:n.NEAREST,[_u]:n.NEAREST_MIPMAP_NEAREST,[Fr]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[Hs]:n.LINEAR_MIPMAP_NEAREST,[di]:n.LINEAR_MIPMAP_LINEAR},Ue={[Su]:n.NEVER,[Ru]:n.ALWAYS,[bu]:n.LESS,[Hc]:n.LEQUAL,[wu]:n.EQUAL,[Au]:n.GEQUAL,[Eu]:n.GREATER,[Tu]:n.NOTEQUAL};function Ge(E,M){if(M.type===Rn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===gn||M.magFilter===Hs||M.magFilter===Fr||M.magFilter===di||M.minFilter===gn||M.minFilter===Hs||M.minFilter===Fr||M.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Me[M.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Me[M.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Me[M.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,be[M.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,be[M.minFilter]),M.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pt||M.minFilter!==Fr&&M.minFilter!==di||M.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function H(E,M){let W=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",A));const ie=M.source;let U=f.get(ie);U===void 0&&(U={},f.set(ie,U));const F=j(M);if(F!==E.__cacheKey){U[F]===void 0&&(U[F]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,W=!0),U[F].usedTimes++;const X=U[E.__cacheKey];X!==void 0&&(U[E.__cacheKey].usedTimes--,X.usedTimes===0&&w(M)),E.__cacheKey=F,E.__webglTexture=U[F].texture}return W}function I(E,M,W){let ie=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ie=n.TEXTURE_3D);const U=H(E,M),F=M.source;t.bindTexture(ie,E.__webglTexture,n.TEXTURE0+W);const X=i.get(F);if(F.version!==X.__version||U===!0){t.activeTexture(n.TEXTURE0+W);const k=Qe.getPrimaries(Qe.workingColorSpace),oe=M.colorSpace===qn?null:Qe.getPrimaries(M.colorSpace),Fe=M.colorSpace===qn||k===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let le=_(M.image,!1,r.maxTextureSize);le=Ae(M,le);const ye=s.convert(M.format,M.colorSpace),ke=s.convert(M.type);let Ve=x(M.internalFormat,ye,ke,M.colorSpace,M.isVideoTexture);Ge(ie,M);let me;const je=M.mipmaps,$e=M.isVideoTexture!==!0,at=X.__version===void 0||U===!0,N=F.dataReady,Ce=L(M,le);if(M.isDepthTexture)Ve=v(M.format===er,M.type),at&&($e?t.texStorage2D(n.TEXTURE_2D,1,Ve,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Ve,le.width,le.height,0,ye,ke,null));else if(M.isDataTexture)if(je.length>0){$e&&at&&t.texStorage2D(n.TEXTURE_2D,Ce,Ve,je[0].width,je[0].height);for(let te=0,ce=je.length;te<ce;te++)me=je[te],$e?N&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,me.width,me.height,ye,ke,me.data):t.texImage2D(n.TEXTURE_2D,te,Ve,me.width,me.height,0,ye,ke,me.data);M.generateMipmaps=!1}else $e?(at&&t.texStorage2D(n.TEXTURE_2D,Ce,Ve,le.width,le.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,ye,ke,le.data)):t.texImage2D(n.TEXTURE_2D,0,Ve,le.width,le.height,0,ye,ke,le.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$e&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Ve,je[0].width,je[0].height,le.depth);for(let te=0,ce=je.length;te<ce;te++)if(me=je[te],M.format!==on)if(ye!==null)if($e){if(N)if(M.layerUpdates.size>0){const De=tc(me.width,me.height,M.format,M.type);for(const Le of M.layerUpdates){const qe=me.data.subarray(Le*De/me.data.BYTES_PER_ELEMENT,(Le+1)*De/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,Le,me.width,me.height,1,ye,qe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,me.width,me.height,le.depth,ye,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Ve,me.width,me.height,le.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,me.width,me.height,le.depth,ye,ke,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Ve,me.width,me.height,le.depth,0,ye,ke,me.data)}else{$e&&at&&t.texStorage2D(n.TEXTURE_2D,Ce,Ve,je[0].width,je[0].height);for(let te=0,ce=je.length;te<ce;te++)me=je[te],M.format!==on?ye!==null?$e?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,me.width,me.height,ye,me.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Ve,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?N&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,me.width,me.height,ye,ke,me.data):t.texImage2D(n.TEXTURE_2D,te,Ve,me.width,me.height,0,ye,ke,me.data)}else if(M.isDataArrayTexture)if($e){if(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Ve,le.width,le.height,le.depth),N)if(M.layerUpdates.size>0){const te=tc(le.width,le.height,M.format,M.type);for(const ce of M.layerUpdates){const De=le.data.subarray(ce*te/le.data.BYTES_PER_ELEMENT,(ce+1)*te/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,le.width,le.height,1,ye,ke,De)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ye,ke,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,le.width,le.height,le.depth,0,ye,ke,le.data);else if(M.isData3DTexture)$e?(at&&t.texStorage3D(n.TEXTURE_3D,Ce,Ve,le.width,le.height,le.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ye,ke,le.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,le.width,le.height,le.depth,0,ye,ke,le.data);else if(M.isFramebufferTexture){if(at)if($e)t.texStorage2D(n.TEXTURE_2D,Ce,Ve,le.width,le.height);else{let te=le.width,ce=le.height;for(let De=0;De<Ce;De++)t.texImage2D(n.TEXTURE_2D,De,Ve,te,ce,0,ye,ke,null),te>>=1,ce>>=1}}else if(je.length>0){if($e&&at){const te=Re(je[0]);t.texStorage2D(n.TEXTURE_2D,Ce,Ve,te.width,te.height)}for(let te=0,ce=je.length;te<ce;te++)me=je[te],$e?N&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ye,ke,me):t.texImage2D(n.TEXTURE_2D,te,Ve,ye,ke,me);M.generateMipmaps=!1}else if($e){if(at){const te=Re(le);t.texStorage2D(n.TEXTURE_2D,Ce,Ve,te.width,te.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,ke,le)}else t.texImage2D(n.TEXTURE_2D,0,Ve,ye,ke,le);m(M)&&p(ie),X.__version=F.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function V(E,M,W){if(M.image.length!==6)return;const ie=H(E,M),U=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+W);const F=i.get(U);if(U.version!==F.__version||ie===!0){t.activeTexture(n.TEXTURE0+W);const X=Qe.getPrimaries(Qe.workingColorSpace),k=M.colorSpace===qn?null:Qe.getPrimaries(M.colorSpace),oe=M.colorSpace===qn||X===k?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Fe=M.isCompressedTexture||M.image[0].isCompressedTexture,le=M.image[0]&&M.image[0].isDataTexture,ye=[];for(let ce=0;ce<6;ce++)!Fe&&!le?ye[ce]=_(M.image[ce],!0,r.maxCubemapSize):ye[ce]=le?M.image[ce].image:M.image[ce],ye[ce]=Ae(M,ye[ce]);const ke=ye[0],Ve=s.convert(M.format,M.colorSpace),me=s.convert(M.type),je=x(M.internalFormat,Ve,me,M.colorSpace),$e=M.isVideoTexture!==!0,at=F.__version===void 0||ie===!0,N=U.dataReady;let Ce=L(M,ke);Ge(n.TEXTURE_CUBE_MAP,M);let te;if(Fe){$e&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,je,ke.width,ke.height);for(let ce=0;ce<6;ce++){te=ye[ce].mipmaps;for(let De=0;De<te.length;De++){const Le=te[De];M.format!==on?Ve!==null?$e?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De,0,0,Le.width,Le.height,Ve,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De,je,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De,0,0,Le.width,Le.height,Ve,me,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De,je,Le.width,Le.height,0,Ve,me,Le.data)}}}else{if(te=M.mipmaps,$e&&at){te.length>0&&Ce++;const ce=Re(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,je,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(le){$e?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ye[ce].width,ye[ce].height,Ve,me,ye[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,je,ye[ce].width,ye[ce].height,0,Ve,me,ye[ce].data);for(let De=0;De<te.length;De++){const qe=te[De].image[ce].image;$e?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De+1,0,0,qe.width,qe.height,Ve,me,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De+1,je,qe.width,qe.height,0,Ve,me,qe.data)}}else{$e?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ve,me,ye[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,je,Ve,me,ye[ce]);for(let De=0;De<te.length;De++){const Le=te[De];$e?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De+1,0,0,Ve,me,Le.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De+1,je,Ve,me,Le.image[ce])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),F.__version=U.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function $(E,M,W,ie,U,F){const X=s.convert(W.format,W.colorSpace),k=s.convert(W.type),oe=x(W.internalFormat,X,k,W.colorSpace),Fe=i.get(M),le=i.get(W);if(le.__renderTarget=M,!Fe.__hasExternalTextures){const ye=Math.max(1,M.width>>F),ke=Math.max(1,M.height>>F);U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?t.texImage3D(U,F,oe,ye,ke,M.depth,0,X,k,null):t.texImage2D(U,F,oe,ye,ke,0,X,k,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Te(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,U,le.__webglTexture,0,pe(M)):(U===n.TEXTURE_2D||U>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,U,le.__webglTexture,F),t.bindFramebuffer(n.FRAMEBUFFER,null)}function K(E,M,W){if(n.bindRenderbuffer(n.RENDERBUFFER,E),M.depthBuffer){const ie=M.depthTexture,U=ie&&ie.isDepthTexture?ie.type:null,F=v(M.stencilBuffer,U),X=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=pe(M);Te(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,k,F,M.width,M.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,k,F,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,F,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,E)}else{const ie=M.textures;for(let U=0;U<ie.length;U++){const F=ie[U],X=s.convert(F.format,F.colorSpace),k=s.convert(F.type),oe=x(F.internalFormat,X,k,F.colorSpace),Fe=pe(M);W&&Te(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,oe,M.width,M.height):Te(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,oe,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,oe,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function re(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=i.get(M.depthTexture);ie.__renderTarget=M,(!ie.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ne(M.depthTexture,0);const U=ie.__webglTexture,F=pe(M);if(M.depthTexture.format===Yi)Te(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,U,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,U,0);else if(M.depthTexture.format===er)Te(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,U,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,U,0);else throw new Error("Unknown depthTexture format")}function ue(E){const M=i.get(E),W=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){const ie=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ie){const U=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ie.removeEventListener("dispose",U)};ie.addEventListener("dispose",U),M.__depthDisposeCallback=U}M.__boundDepthTexture=ie}if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");re(M.__webglFramebuffer,E)}else if(W){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]===void 0)M.__webglDepthbuffer[ie]=n.createRenderbuffer(),K(M.__webglDepthbuffer[ie],E,!1);else{const U=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,F=M.__webglDepthbuffer[ie];n.bindRenderbuffer(n.RENDERBUFFER,F),n.framebufferRenderbuffer(n.FRAMEBUFFER,U,n.RENDERBUFFER,F)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),K(M.__webglDepthbuffer,E,!1);else{const ie=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,U=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,U),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,U)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(E,M,W){const ie=i.get(E);M!==void 0&&$(ie.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&ue(E)}function ge(E){const M=E.texture,W=i.get(E),ie=i.get(M);E.addEventListener("dispose",T);const U=E.textures,F=E.isWebGLCubeRenderTarget===!0,X=U.length>1;if(X||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=M.version,a.memory.textures++),F){W.__webglFramebuffer=[];for(let k=0;k<6;k++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[k]=[];for(let oe=0;oe<M.mipmaps.length;oe++)W.__webglFramebuffer[k][oe]=n.createFramebuffer()}else W.__webglFramebuffer[k]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let k=0;k<M.mipmaps.length;k++)W.__webglFramebuffer[k]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(X)for(let k=0,oe=U.length;k<oe;k++){const Fe=i.get(U[k]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Te(E)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let k=0;k<U.length;k++){const oe=U[k];W.__webglColorRenderbuffer[k]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[k]);const Fe=s.convert(oe.format,oe.colorSpace),le=s.convert(oe.type),ye=x(oe.internalFormat,Fe,le,oe.colorSpace,E.isXRRenderTarget===!0),ke=pe(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,ye,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+k,n.RENDERBUFFER,W.__webglColorRenderbuffer[k])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),K(W.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(F){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,M);for(let k=0;k<6;k++)if(M.mipmaps&&M.mipmaps.length>0)for(let oe=0;oe<M.mipmaps.length;oe++)$(W.__webglFramebuffer[k][oe],E,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+k,oe);else $(W.__webglFramebuffer[k],E,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(X){for(let k=0,oe=U.length;k<oe;k++){const Fe=U[k],le=i.get(Fe);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),Ge(n.TEXTURE_2D,Fe),$(W.__webglFramebuffer,E,Fe,n.COLOR_ATTACHMENT0+k,n.TEXTURE_2D,0),m(Fe)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let k=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(k=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(k,ie.__webglTexture),Ge(k,M),M.mipmaps&&M.mipmaps.length>0)for(let oe=0;oe<M.mipmaps.length;oe++)$(W.__webglFramebuffer[oe],E,M,n.COLOR_ATTACHMENT0,k,oe);else $(W.__webglFramebuffer,E,M,n.COLOR_ATTACHMENT0,k,0);m(M)&&p(k),t.unbindTexture()}E.depthBuffer&&ue(E)}function Q(E){const M=E.textures;for(let W=0,ie=M.length;W<ie;W++){const U=M[W];if(m(U)){const F=S(E),X=i.get(U).__webglTexture;t.bindTexture(F,X),p(F),t.unbindTexture()}}}const ae=[],R=[];function Se(E){if(E.samples>0){if(Te(E)===!1){const M=E.textures,W=E.width,ie=E.height;let U=n.COLOR_BUFFER_BIT;const F=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=i.get(E),k=M.length>1;if(k)for(let oe=0;oe<M.length;oe++)t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,X.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,X.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,X.__webglFramebuffer);for(let oe=0;oe<M.length;oe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(U|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(U|=n.STENCIL_BUFFER_BIT)),k){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,X.__webglColorRenderbuffer[oe]);const Fe=i.get(M[oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Fe,0)}n.blitFramebuffer(0,0,W,ie,0,0,W,ie,U,n.NEAREST),l===!0&&(ae.length=0,R.length=0,ae.push(n.COLOR_ATTACHMENT0+oe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ae.push(F),R.push(F),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,R)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ae))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),k)for(let oe=0;oe<M.length;oe++){t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,X.__webglColorRenderbuffer[oe]);const Fe=i.get(M[oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,X.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,X.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const M=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function pe(E){return Math.min(r.maxSamples,E.samples)}function Te(E){const M=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function _e(E){const M=a.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function Ae(E,M){const W=E.colorSpace,ie=E.format,U=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||W!==ir&&W!==qn&&(Qe.getTransfer(W)===lt?(ie!==on||U!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}function Re(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=q,this.setTexture2D=ne,this.setTexture2DArray=J,this.setTexture3D=se,this.setTextureCube=G,this.rebindTextures=Ee,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Te}function J0(n,e){function t(i,r=qn){let s;const a=Qe.getTransfer(r);if(i===Dn)return n.UNSIGNED_BYTE;if(i===wo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Eo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Dc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Lc)return n.BYTE;if(i===Ic)return n.SHORT;if(i===Ar)return n.UNSIGNED_SHORT;if(i===bo)return n.INT;if(i===mi)return n.UNSIGNED_INT;if(i===Rn)return n.FLOAT;if(i===gi)return n.HALF_FLOAT;if(i===Uc)return n.ALPHA;if(i===Nc)return n.RGB;if(i===on)return n.RGBA;if(i===Fc)return n.LUMINANCE;if(i===kc)return n.LUMINANCE_ALPHA;if(i===Yi)return n.DEPTH_COMPONENT;if(i===er)return n.DEPTH_STENCIL;if(i===Ps)return n.RED;if(i===To)return n.RED_INTEGER;if(i===Oc)return n.RG;if(i===Ao)return n.RG_INTEGER;if(i===Ro)return n.RGBA_INTEGER;if(i===ms||i===gs||i===vs||i===_s)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ms)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ms)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_s)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ha||i===Va||i===Ga||i===Wa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ha)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Va)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ga)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$a||i===Xa||i===qa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===$a||i===Xa)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===qa)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ya||i===Za||i===Ja||i===ja||i===Ka||i===Qa||i===eo||i===to||i===no||i===io||i===ro||i===so||i===ao||i===oo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ya)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Za)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ja)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ja)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ka)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qa)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===eo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===to)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===no)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===io)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ro)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===so)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ao)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xs||i===lo||i===co)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===xs)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===co)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bc||i===ho||i===uo||i===fo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===xs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ho)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class j0 extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ht extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K0={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(K0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ht;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Q0=`
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

}`;class tg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ft,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new cn({vertexShader:Q0,fragmentShader:eg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new In(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ng extends rr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const _=new tg,m=t.getContextAttributes();let p=null,S=null;const x=[],v=[],L=new ve;let A=null;const T=new Jt;T.viewport=new ht;const C=new Jt;C.viewport=new ht;const w=[T,C],y=new j0;let P=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let V=x[I];return V===void 0&&(V=new pa,x[I]=V),V.getTargetRaySpace()},this.getControllerGrip=function(I){let V=x[I];return V===void 0&&(V=new pa,x[I]=V),V.getGripSpace()},this.getHand=function(I){let V=x[I];return V===void 0&&(V=new pa,x[I]=V),V.getHandSpace()};function z(I){const V=v.indexOf(I.inputSource);if(V===-1)return;const $=x[V];$!==void 0&&($.update(I.inputSource,I.frame,c||a),$.dispatchEvent({type:I.type,data:I.inputSource}))}function j(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",ne);for(let I=0;I<x.length;I++){const V=v[I];V!==null&&(v[I]=null,x[I].disconnect(V))}P=null,q=null,_.reset(),e.setRenderTarget(p),d=null,f=null,u=null,r=null,S=null,H.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",j),r.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const V={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,V),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Un(d.framebufferWidth,d.framebufferHeight,{format:on,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let V=null,$=null,K=null;m.depth&&(K=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=m.stencil?er:Yi,$=m.stencil?Qi:mi);const re={colorFormat:t.RGBA8,depthFormat:K,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(re),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Un(f.textureWidth,f.textureHeight,{format:on,type:Dn,depthTexture:new Qc(f.textureWidth,f.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),H.setContext(r),H.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ne(I){for(let V=0;V<I.removed.length;V++){const $=I.removed[V],K=v.indexOf($);K>=0&&(v[K]=null,x[K].disconnect($))}for(let V=0;V<I.added.length;V++){const $=I.added[V];let K=v.indexOf($);if(K===-1){for(let ue=0;ue<x.length;ue++)if(ue>=v.length){v.push($),K=ue;break}else if(v[ue]===null){v[ue]=$,K=ue;break}if(K===-1)break}const re=x[K];re&&re.connect($)}}const J=new D,se=new D;function G(I,V,$){J.setFromMatrixPosition(V.matrixWorld),se.setFromMatrixPosition($.matrixWorld);const K=J.distanceTo(se),re=V.projectionMatrix.elements,ue=$.projectionMatrix.elements,Ee=re[14]/(re[10]-1),ge=re[14]/(re[10]+1),Q=(re[9]+1)/re[5],ae=(re[9]-1)/re[5],R=(re[8]-1)/re[0],Se=(ue[8]+1)/ue[0],pe=Ee*R,Te=Ee*Se,_e=K/(-R+Se),Ae=_e*-R;if(V.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Ae),I.translateZ(_e),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),re[10]===-1)I.projectionMatrix.copy(V.projectionMatrix),I.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const Re=Ee+_e,E=ge+_e,M=pe-Ae,W=Te+(K-Ae),ie=Q*ge/E*Re,U=ae*ge/E*Re;I.projectionMatrix.makePerspective(M,W,ie,U,Re,E),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function Me(I,V){V===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(V.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;let V=I.near,$=I.far;_.texture!==null&&(_.depthNear>0&&(V=_.depthNear),_.depthFar>0&&($=_.depthFar)),y.near=C.near=T.near=V,y.far=C.far=T.far=$,(P!==y.near||q!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,q=y.far),T.layers.mask=I.layers.mask|2,C.layers.mask=I.layers.mask|4,y.layers.mask=T.layers.mask|C.layers.mask;const K=I.parent,re=y.cameras;Me(y,K);for(let ue=0;ue<re.length;ue++)Me(re[ue],K);re.length===2?G(y,T,C):y.projectionMatrix.copy(T.projectionMatrix),be(I,y,K)};function be(I,V,$){$===null?I.matrix.copy(V.matrixWorld):(I.matrix.copy($.matrixWorld),I.matrix.invert(),I.matrix.multiply(V.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(V.projectionMatrix),I.projectionMatrixInverse.copy(V.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Rr*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(I){l=I,f!==null&&(f.fixedFoveation=I),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=I)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let Ue=null;function Ge(I,V){if(h=V.getViewerPose(c||a),g=V,h!==null){const $=h.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let K=!1;$.length!==y.cameras.length&&(y.cameras.length=0,K=!0);for(let ue=0;ue<$.length;ue++){const Ee=$[ue];let ge=null;if(d!==null)ge=d.getViewport(Ee);else{const ae=u.getViewSubImage(f,Ee);ge=ae.viewport,ue===0&&(e.setRenderTargetTextures(S,ae.colorTexture,f.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(S))}let Q=w[ue];Q===void 0&&(Q=new Jt,Q.layers.enable(ue),Q.viewport=new ht,w[ue]=Q),Q.matrix.fromArray(Ee.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Ee.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ge.x,ge.y,ge.width,ge.height),ue===0&&(y.matrix.copy(Q.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),K===!0&&y.cameras.push(Q)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")){const ue=u.getDepthInformation($[0]);ue&&ue.isValid&&ue.texture&&_.init(e,ue,r.renderState)}}for(let $=0;$<x.length;$++){const K=v[$],re=x[$];K!==null&&re!==void 0&&re.update(K,V,c||a)}Ue&&Ue(I,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),g=null}const H=new Kc;H.setAnimationLoop(Ge),this.setAnimationLoop=function(I){Ue=I},this.dispose=function(){}}}const ai=new Nn,ig=new pt;function rg(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Zc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),x=S.envMap,v=S.envMapRotation;x&&(m.envMap.value=x,ai.copy(v),ai.x*=-1,ai.y*=-1,ai.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),m.envMapRotation.value.setFromMatrix4(ig.makeRotationFromEuler(ai)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sg(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){const v=x.program;i.uniformBlockBinding(S,v)}function c(S,x){let v=r[S.id];v===void 0&&(g(S),v=h(S),r[S.id]=v,S.addEventListener("dispose",m));const L=x.program;i.updateUBOMapping(S,L);const A=e.render.frame;s[S.id]!==A&&(f(S),s[S.id]=A)}function h(S){const x=u();S.__bindingPointIndex=x;const v=n.createBuffer(),L=S.__size,A=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,L,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,v),v}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const x=r[S.id],v=S.uniforms,L=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,T=v.length;A<T;A++){const C=Array.isArray(v[A])?v[A]:[v[A]];for(let w=0,y=C.length;w<y;w++){const P=C[w];if(d(P,A,w,L)===!0){const q=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let j=0;for(let ne=0;ne<z.length;ne++){const J=z[ne],se=_(J);typeof J=="number"||typeof J=="boolean"?(P.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,q+j,P.__data)):J.isMatrix3?(P.__data[0]=J.elements[0],P.__data[1]=J.elements[1],P.__data[2]=J.elements[2],P.__data[3]=0,P.__data[4]=J.elements[3],P.__data[5]=J.elements[4],P.__data[6]=J.elements[5],P.__data[7]=0,P.__data[8]=J.elements[6],P.__data[9]=J.elements[7],P.__data[10]=J.elements[8],P.__data[11]=0):(J.toArray(P.__data,j),j+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,x,v,L){const A=S.value,T=x+"_"+v;if(L[T]===void 0)return typeof A=="number"||typeof A=="boolean"?L[T]=A:L[T]=A.clone(),!0;{const C=L[T];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return L[T]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(S){const x=S.uniforms;let v=0;const L=16;for(let T=0,C=x.length;T<C;T++){const w=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,P=w.length;y<P;y++){const q=w[y],z=Array.isArray(q.value)?q.value:[q.value];for(let j=0,ne=z.length;j<ne;j++){const J=z[j],se=_(J),G=v%L,Me=G%se.boundary,be=G+Me;v+=Me,be!==0&&L-be<se.storage&&(v+=L-be),q.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=v,v+=se.storage}}}const A=v%L;return A>0&&(v+=L-A),S.__size=v,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class ag{constructor(e={}){const{canvas:t=Xu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this.toneMapping=Jn,this.toneMappingExposure=1;const v=this;let L=!1,A=0,T=0,C=null,w=-1,y=null;const P=new ht,q=new ht;let z=null;const j=new Ke(0);let ne=0,J=t.width,se=t.height,G=1,Me=null,be=null;const Ue=new ht(0,0,J,se),Ge=new ht(0,0,J,se);let H=!1;const I=new Lo;let V=!1,$=!1;const K=new pt,re=new pt,ue=new D,Ee=new ht,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function ae(){return C===null?G:1}let R=i;function Se(b,O){return t.getContext(b,O)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${So}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Le,!1),R===null){const O="webgl2";if(R=Se(O,b),R===null)throw Se(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let pe,Te,_e,Ae,Re,E,M,W,ie,U,F,X,k,oe,Fe,le,ye,ke,Ve,me,je,$e,at,N;function Ce(){pe=new um(R),pe.init(),$e=new J0(R,pe),Te=new sm(R,pe,e,$e),_e=new q0(R,pe),Te.reverseDepthBuffer&&f&&_e.buffers.depth.setReversed(!0),Ae=new pm(R),Re=new I0,E=new Z0(R,pe,_e,Re,Te,$e,Ae),M=new om(v),W=new hm(v),ie=new Mf(R),at=new im(R,ie),U=new fm(R,ie,Ae,at),F=new gm(R,U,ie,Ae),Ve=new mm(R,Te,E),le=new am(Re),X=new L0(v,M,W,pe,Te,at,le),k=new rg(v,Re),oe=new U0,Fe=new z0(pe),ke=new nm(v,M,W,_e,F,d,l),ye=new $0(v,F,Te),N=new sg(R,Ae,Te,_e),me=new rm(R,pe,Ae),je=new dm(R,pe,Ae),Ae.programs=X.programs,v.capabilities=Te,v.extensions=pe,v.properties=Re,v.renderLists=oe,v.shadowMap=ye,v.state=_e,v.info=Ae}Ce();const te=new ng(v,R);this.xr=te,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const b=pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(J,se,!1))},this.getSize=function(b){return b.set(J,se)},this.setSize=function(b,O,Y=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=b,se=O,t.width=Math.floor(b*G),t.height=Math.floor(O*G),Y===!0&&(t.style.width=b+"px",t.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(J*G,se*G).floor()},this.setDrawingBufferSize=function(b,O,Y){J=b,se=O,G=Y,t.width=Math.floor(b*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(Ue)},this.setViewport=function(b,O,Y,Z){b.isVector4?Ue.set(b.x,b.y,b.z,b.w):Ue.set(b,O,Y,Z),_e.viewport(P.copy(Ue).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(Ge)},this.setScissor=function(b,O,Y,Z){b.isVector4?Ge.set(b.x,b.y,b.z,b.w):Ge.set(b,O,Y,Z),_e.scissor(q.copy(Ge).multiplyScalar(G).round())},this.getScissorTest=function(){return H},this.setScissorTest=function(b){_e.setScissorTest(H=b)},this.setOpaqueSort=function(b){Me=b},this.setTransparentSort=function(b){be=b},this.getClearColor=function(b){return b.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(b=!0,O=!0,Y=!0){let Z=0;if(b){let B=!1;if(C!==null){const xe=C.texture.format;B=xe===Ro||xe===Ao||xe===To}if(B){const xe=C.texture.type,Ie=xe===Dn||xe===mi||xe===Ar||xe===Qi||xe===wo||xe===Eo,Oe=ke.getClearColor(),Be=ke.getClearAlpha(),We=Oe.r,Ye=Oe.g,ze=Oe.b;Ie?(g[0]=We,g[1]=Ye,g[2]=ze,g[3]=Be,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=We,_[1]=Ye,_[2]=ze,_[3]=Be,R.clearBufferiv(R.COLOR,0,_))}else Z|=R.COLOR_BUFFER_BIT}O&&(Z|=R.DEPTH_BUFFER_BIT),Y&&(Z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),oe.dispose(),Fe.dispose(),Re.dispose(),M.dispose(),W.dispose(),F.dispose(),at.dispose(),N.dispose(),X.dispose(),te.dispose(),te.removeEventListener("sessionstart",qo),te.removeEventListener("sessionend",Yo),ei.stop()};function ce(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const b=Ae.autoReset,O=ye.enabled,Y=ye.autoUpdate,Z=ye.needsUpdate,B=ye.type;Ce(),Ae.autoReset=b,ye.enabled=O,ye.autoUpdate=Y,ye.needsUpdate=Z,ye.type=B}function Le(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function qe(b){const O=b.target;O.removeEventListener("dispose",qe),gt(O)}function gt(b){Dt(b),Re.remove(b)}function Dt(b){const O=Re.get(b).programs;O!==void 0&&(O.forEach(function(Y){X.releaseProgram(Y)}),b.isShaderMaterial&&X.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,Y,Z,B,xe){O===null&&(O=ge);const Ie=B.isMesh&&B.matrixWorld.determinant()<0,Oe=Ch(b,O,Y,Z,B);_e.setMaterial(Z,Ie);let Be=Y.index,We=1;if(Z.wireframe===!0){if(Be=U.getWireframeAttribute(Y),Be===void 0)return;We=2}const Ye=Y.drawRange,ze=Y.attributes.position;let nt=Ye.start*We,ut=(Ye.start+Ye.count)*We;xe!==null&&(nt=Math.max(nt,xe.start*We),ut=Math.min(ut,(xe.start+xe.count)*We)),Be!==null?(nt=Math.max(nt,0),ut=Math.min(ut,Be.count)):ze!=null&&(nt=Math.max(nt,0),ut=Math.min(ut,ze.count));const ft=ut-nt;if(ft<0||ft===1/0)return;at.setup(B,Z,Oe,Y,Be);let Bt,it=me;if(Be!==null&&(Bt=ie.get(Be),it=je,it.setIndex(Bt)),B.isMesh)Z.wireframe===!0?(_e.setLineWidth(Z.wireframeLinewidth*ae()),it.setMode(R.LINES)):it.setMode(R.TRIANGLES);else if(B.isLine){let He=Z.linewidth;He===void 0&&(He=1),_e.setLineWidth(He*ae()),B.isLineSegments?it.setMode(R.LINES):B.isLineLoop?it.setMode(R.LINE_LOOP):it.setMode(R.LINE_STRIP)}else B.isPoints?it.setMode(R.POINTS):B.isSprite&&it.setMode(R.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)it.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(pe.get("WEBGL_multi_draw"))it.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const He=B._multiDrawStarts,xn=B._multiDrawCounts,rt=B._multiDrawCount,Kt=Be?ie.get(Be).bytesPerElement:1,bi=Re.get(Z).currentProgram.getUniforms();for(let Gt=0;Gt<rt;Gt++)bi.setValue(R,"_gl_DrawID",Gt),it.render(He[Gt]/Kt,xn[Gt])}else if(B.isInstancedMesh)it.renderInstances(nt,ft,B.count);else if(Y.isInstancedBufferGeometry){const He=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,xn=Math.min(Y.instanceCount,He);it.renderInstances(nt,ft,xn)}else it.render(nt,ft)};function ot(b,O,Y){b.transparent===!0&&b.side===Ct&&b.forceSinglePass===!1?(b.side=Vt,b.needsUpdate=!0,Nr(b,O,Y),b.side=Qn,b.needsUpdate=!0,Nr(b,O,Y),b.side=Ct):Nr(b,O,Y)}this.compile=function(b,O,Y=null){Y===null&&(Y=b),p=Fe.get(Y),p.init(O),x.push(p),Y.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),b!==Y&&b.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const Z=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const xe=B.material;if(xe)if(Array.isArray(xe))for(let Ie=0;Ie<xe.length;Ie++){const Oe=xe[Ie];ot(Oe,Y,B),Z.add(Oe)}else ot(xe,Y,B),Z.add(xe)}),x.pop(),p=null,Z},this.compileAsync=function(b,O,Y=null){const Z=this.compile(b,O,Y);return new Promise(B=>{function xe(){if(Z.forEach(function(Ie){Re.get(Ie).currentProgram.isReady()&&Z.delete(Ie)}),Z.size===0){B(b);return}setTimeout(xe,10)}pe.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let jt=null;function _n(b){jt&&jt(b)}function qo(){ei.stop()}function Yo(){ei.start()}const ei=new Kc;ei.setAnimationLoop(_n),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(b){jt=b,te.setAnimationLoop(b),b===null?ei.stop():ei.start()},te.addEventListener("sessionstart",qo),te.addEventListener("sessionend",Yo),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(O),O=te.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,O,C),p=Fe.get(b,x.length),p.init(O),x.push(p),re.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),I.setFromProjectionMatrix(re),$=this.localClippingEnabled,V=le.init(this.clippingPlanes,$),m=oe.get(b,S.length),m.init(),S.push(m),te.enabled===!0&&te.isPresenting===!0){const xe=v.xr.getDepthSensingMesh();xe!==null&&Bs(xe,O,-1/0,v.sortObjects)}Bs(b,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(Me,be),Q=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Q&&ke.addToRenderList(m,b),this.info.render.frame++,V===!0&&le.beginShadows();const Y=p.state.shadowsArray;ye.render(Y,b,O),V===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,B=m.transmissive;if(p.setupLights(),O.isArrayCamera){const xe=O.cameras;if(B.length>0)for(let Ie=0,Oe=xe.length;Ie<Oe;Ie++){const Be=xe[Ie];Jo(Z,B,b,Be)}Q&&ke.render(b);for(let Ie=0,Oe=xe.length;Ie<Oe;Ie++){const Be=xe[Ie];Zo(m,b,Be,Be.viewport)}}else B.length>0&&Jo(Z,B,b,O),Q&&ke.render(b),Zo(m,b,O);C!==null&&(E.updateMultisampleRenderTarget(C),E.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(v,b,O),at.resetDefaultState(),w=-1,y=null,x.pop(),x.length>0?(p=x[x.length-1],V===!0&&le.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Bs(b,O,Y,Z){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||I.intersectsSprite(b)){Z&&Ee.setFromMatrixPosition(b.matrixWorld).applyMatrix4(re);const Ie=F.update(b),Oe=b.material;Oe.visible&&m.push(b,Ie,Oe,Y,Ee.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||I.intersectsObject(b))){const Ie=F.update(b),Oe=b.material;if(Z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ee.copy(b.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Ee.copy(Ie.boundingSphere.center)),Ee.applyMatrix4(b.matrixWorld).applyMatrix4(re)),Array.isArray(Oe)){const Be=Ie.groups;for(let We=0,Ye=Be.length;We<Ye;We++){const ze=Be[We],nt=Oe[ze.materialIndex];nt&&nt.visible&&m.push(b,Ie,nt,Y,Ee.z,ze)}}else Oe.visible&&m.push(b,Ie,Oe,Y,Ee.z,null)}}const xe=b.children;for(let Ie=0,Oe=xe.length;Ie<Oe;Ie++)Bs(xe[Ie],O,Y,Z)}function Zo(b,O,Y,Z){const B=b.opaque,xe=b.transmissive,Ie=b.transparent;p.setupLightsView(Y),V===!0&&le.setGlobalState(v.clippingPlanes,Y),Z&&_e.viewport(P.copy(Z)),B.length>0&&Ur(B,O,Y),xe.length>0&&Ur(xe,O,Y),Ie.length>0&&Ur(Ie,O,Y),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Jo(b,O,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new Un(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float")?gi:Dn,minFilter:di,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const xe=p.state.transmissionRenderTarget[Z.id],Ie=Z.viewport||P;xe.setSize(Ie.z,Ie.w);const Oe=v.getRenderTarget();v.setRenderTarget(xe),v.getClearColor(j),ne=v.getClearAlpha(),ne<1&&v.setClearColor(16777215,.5),v.clear(),Q&&ke.render(Y);const Be=v.toneMapping;v.toneMapping=Jn;const We=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),V===!0&&le.setGlobalState(v.clippingPlanes,Z),Ur(b,Y,Z),E.updateMultisampleRenderTarget(xe),E.updateRenderTargetMipmap(xe),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let ze=0,nt=O.length;ze<nt;ze++){const ut=O[ze],ft=ut.object,Bt=ut.geometry,it=ut.material,He=ut.group;if(it.side===Ct&&ft.layers.test(Z.layers)){const xn=it.side;it.side=Vt,it.needsUpdate=!0,jo(ft,Y,Z,Bt,it,He),it.side=xn,it.needsUpdate=!0,Ye=!0}}Ye===!0&&(E.updateMultisampleRenderTarget(xe),E.updateRenderTargetMipmap(xe))}v.setRenderTarget(Oe),v.setClearColor(j,ne),We!==void 0&&(Z.viewport=We),v.toneMapping=Be}function Ur(b,O,Y){const Z=O.isScene===!0?O.overrideMaterial:null;for(let B=0,xe=b.length;B<xe;B++){const Ie=b[B],Oe=Ie.object,Be=Ie.geometry,We=Z===null?Ie.material:Z,Ye=Ie.group;Oe.layers.test(Y.layers)&&jo(Oe,O,Y,Be,We,Ye)}}function jo(b,O,Y,Z,B,xe){b.onBeforeRender(v,O,Y,Z,B,xe),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(v,O,Y,Z,b,xe),B.transparent===!0&&B.side===Ct&&B.forceSinglePass===!1?(B.side=Vt,B.needsUpdate=!0,v.renderBufferDirect(Y,O,Z,B,b,xe),B.side=Qn,B.needsUpdate=!0,v.renderBufferDirect(Y,O,Z,B,b,xe),B.side=Ct):v.renderBufferDirect(Y,O,Z,B,b,xe),b.onAfterRender(v,O,Y,Z,B,xe)}function Nr(b,O,Y){O.isScene!==!0&&(O=ge);const Z=Re.get(b),B=p.state.lights,xe=p.state.shadowsArray,Ie=B.state.version,Oe=X.getParameters(b,B.state,xe,O,Y),Be=X.getProgramCacheKey(Oe);let We=Z.programs;Z.environment=b.isMeshStandardMaterial?O.environment:null,Z.fog=O.fog,Z.envMap=(b.isMeshStandardMaterial?W:M).get(b.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,We===void 0&&(b.addEventListener("dispose",qe),We=new Map,Z.programs=We);let Ye=We.get(Be);if(Ye!==void 0){if(Z.currentProgram===Ye&&Z.lightsStateVersion===Ie)return Qo(b,Oe),Ye}else Oe.uniforms=X.getUniforms(b),b.onBeforeCompile(Oe,v),Ye=X.acquireProgram(Oe,Be),We.set(Be,Ye),Z.uniforms=Oe.uniforms;const ze=Z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ze.clippingPlanes=le.uniform),Qo(b,Oe),Z.needsLights=Lh(b),Z.lightsStateVersion=Ie,Z.needsLights&&(ze.ambientLightColor.value=B.state.ambient,ze.lightProbe.value=B.state.probe,ze.directionalLights.value=B.state.directional,ze.directionalLightShadows.value=B.state.directionalShadow,ze.spotLights.value=B.state.spot,ze.spotLightShadows.value=B.state.spotShadow,ze.rectAreaLights.value=B.state.rectArea,ze.ltc_1.value=B.state.rectAreaLTC1,ze.ltc_2.value=B.state.rectAreaLTC2,ze.pointLights.value=B.state.point,ze.pointLightShadows.value=B.state.pointShadow,ze.hemisphereLights.value=B.state.hemi,ze.directionalShadowMap.value=B.state.directionalShadowMap,ze.directionalShadowMatrix.value=B.state.directionalShadowMatrix,ze.spotShadowMap.value=B.state.spotShadowMap,ze.spotLightMatrix.value=B.state.spotLightMatrix,ze.spotLightMap.value=B.state.spotLightMap,ze.pointShadowMap.value=B.state.pointShadowMap,ze.pointShadowMatrix.value=B.state.pointShadowMatrix),Z.currentProgram=Ye,Z.uniformsList=null,Ye}function Ko(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=ys.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Qo(b,O){const Y=Re.get(b);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function Ch(b,O,Y,Z,B){O.isScene!==!0&&(O=ge),E.resetTextureUnits();const xe=O.fog,Ie=Z.isMeshStandardMaterial?O.environment:null,Oe=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ir,Be=(Z.isMeshStandardMaterial?W:M).get(Z.envMap||Ie),We=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ye=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),ze=!!Y.morphAttributes.position,nt=!!Y.morphAttributes.normal,ut=!!Y.morphAttributes.color;let ft=Jn;Z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ft=v.toneMapping);const Bt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,it=Bt!==void 0?Bt.length:0,He=Re.get(Z),xn=p.state.lights;if(V===!0&&($===!0||b!==y)){const qt=b===y&&Z.id===w;le.setState(Z,b,qt)}let rt=!1;Z.version===He.__version?(He.needsLights&&He.lightsStateVersion!==xn.state.version||He.outputColorSpace!==Oe||B.isBatchedMesh&&He.batching===!1||!B.isBatchedMesh&&He.batching===!0||B.isBatchedMesh&&He.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&He.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&He.instancing===!1||!B.isInstancedMesh&&He.instancing===!0||B.isSkinnedMesh&&He.skinning===!1||!B.isSkinnedMesh&&He.skinning===!0||B.isInstancedMesh&&He.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&He.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&He.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&He.instancingMorph===!1&&B.morphTexture!==null||He.envMap!==Be||Z.fog===!0&&He.fog!==xe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==le.numPlanes||He.numIntersection!==le.numIntersection)||He.vertexAlphas!==We||He.vertexTangents!==Ye||He.morphTargets!==ze||He.morphNormals!==nt||He.morphColors!==ut||He.toneMapping!==ft||He.morphTargetsCount!==it)&&(rt=!0):(rt=!0,He.__version=Z.version);let Kt=He.currentProgram;rt===!0&&(Kt=Nr(Z,O,B));let bi=!1,Gt=!1,or=!1;const dt=Kt.getUniforms(),hn=He.uniforms;if(_e.useProgram(Kt.program)&&(bi=!0,Gt=!0,or=!0),Z.id!==w&&(w=Z.id,Gt=!0),bi||y!==b){_e.buffers.depth.getReversed()?(K.copy(b.projectionMatrix),Yu(K),Zu(K),dt.setValue(R,"projectionMatrix",K)):dt.setValue(R,"projectionMatrix",b.projectionMatrix),dt.setValue(R,"viewMatrix",b.matrixWorldInverse);const Fn=dt.map.cameraPosition;Fn!==void 0&&Fn.setValue(R,ue.setFromMatrixPosition(b.matrixWorld)),Te.logarithmicDepthBuffer&&dt.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&dt.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Gt=!0,or=!0)}if(B.isSkinnedMesh){dt.setOptional(R,B,"bindMatrix"),dt.setOptional(R,B,"bindMatrixInverse");const qt=B.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),dt.setValue(R,"boneTexture",qt.boneTexture,E))}B.isBatchedMesh&&(dt.setOptional(R,B,"batchingTexture"),dt.setValue(R,"batchingTexture",B._matricesTexture,E),dt.setOptional(R,B,"batchingIdTexture"),dt.setValue(R,"batchingIdTexture",B._indirectTexture,E),dt.setOptional(R,B,"batchingColorTexture"),B._colorsTexture!==null&&dt.setValue(R,"batchingColorTexture",B._colorsTexture,E));const lr=Y.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0)&&Ve.update(B,Y,Kt),(Gt||He.receiveShadow!==B.receiveShadow)&&(He.receiveShadow=B.receiveShadow,dt.setValue(R,"receiveShadow",B.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(hn.envMap.value=Be,hn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&O.environment!==null&&(hn.envMapIntensity.value=O.environmentIntensity),Gt&&(dt.setValue(R,"toneMappingExposure",v.toneMappingExposure),He.needsLights&&Ph(hn,or),xe&&Z.fog===!0&&k.refreshFogUniforms(hn,xe),k.refreshMaterialUniforms(hn,Z,G,se,p.state.transmissionRenderTarget[b.id]),ys.upload(R,Ko(He),hn,E)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ys.upload(R,Ko(He),hn,E),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&dt.setValue(R,"center",B.center),dt.setValue(R,"modelViewMatrix",B.modelViewMatrix),dt.setValue(R,"normalMatrix",B.normalMatrix),dt.setValue(R,"modelMatrix",B.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const qt=Z.uniformsGroups;for(let Fn=0,kn=qt.length;Fn<kn;Fn++){const el=qt[Fn];N.update(el,Kt),N.bind(el,Kt)}}return Kt}function Ph(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Lh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,O,Y){Re.get(b.texture).__webglTexture=O,Re.get(b.depthTexture).__webglTexture=Y;const Z=Re.get(b);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=Y===void 0,Z.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){const Y=Re.get(b);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,Y=0){C=b,A=O,T=Y;let Z=!0,B=null,xe=!1,Ie=!1;if(b){const Be=Re.get(b);if(Be.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(R.FRAMEBUFFER,null),Z=!1;else if(Be.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(Be.__hasExternalTextures)E.rebindTextures(b,Re.get(b.texture).__webglTexture,Re.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ze=b.depthTexture;if(Be.__boundDepthTexture!==ze){if(ze!==null&&Re.has(ze)&&(b.width!==ze.image.width||b.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}const We=b.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ie=!0);const Ye=Re.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ye[O])?B=Ye[O][Y]:B=Ye[O],xe=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?B=Re.get(b).__webglMultisampledFramebuffer:Array.isArray(Ye)?B=Ye[Y]:B=Ye,P.copy(b.viewport),q.copy(b.scissor),z=b.scissorTest}else P.copy(Ue).multiplyScalar(G).floor(),q.copy(Ge).multiplyScalar(G).floor(),z=H;if(_e.bindFramebuffer(R.FRAMEBUFFER,B)&&Z&&_e.drawBuffers(b,B),_e.viewport(P),_e.scissor(q),_e.setScissorTest(z),xe){const Be=Re.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+O,Be.__webglTexture,Y)}else if(Ie){const Be=Re.get(b.texture),We=O||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Be.__webglTexture,Y||0,We)}w=-1},this.readRenderTargetPixels=function(b,O,Y,Z,B,xe,Ie){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Re.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe){_e.bindFramebuffer(R.FRAMEBUFFER,Oe);try{const Be=b.texture,We=Be.format,Ye=Be.type;if(!Te.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-Z&&Y>=0&&Y<=b.height-B&&R.readPixels(O,Y,Z,B,$e.convert(We),$e.convert(Ye),xe)}finally{const Be=C!==null?Re.get(C).__webglFramebuffer:null;_e.bindFramebuffer(R.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(b,O,Y,Z,B,xe,Ie){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Re.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe){const Be=b.texture,We=Be.format,Ye=Be.type;if(!Te.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-Z&&Y>=0&&Y<=b.height-B){_e.bindFramebuffer(R.FRAMEBUFFER,Oe);const ze=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ze),R.bufferData(R.PIXEL_PACK_BUFFER,xe.byteLength,R.STREAM_READ),R.readPixels(O,Y,Z,B,$e.convert(We),$e.convert(Ye),0);const nt=C!==null?Re.get(C).__webglFramebuffer:null;_e.bindFramebuffer(R.FRAMEBUFFER,nt);const ut=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await qu(R,ut,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ze),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,xe),R.deleteBuffer(ze),R.deleteSync(ut),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,Y=0){b.isTexture!==!0&&(_r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);const Z=Math.pow(2,-Y),B=Math.floor(b.image.width*Z),xe=Math.floor(b.image.height*Z),Ie=O!==null?O.x:0,Oe=O!==null?O.y:0;E.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,Y,0,0,Ie,Oe,B,xe),_e.unbindTexture()},this.copyTextureToTexture=function(b,O,Y=null,Z=null,B=0){b.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,b=arguments[1],O=arguments[2],B=arguments[3]||0,Y=null);let xe,Ie,Oe,Be,We,Ye,ze,nt,ut;const ft=b.isCompressedTexture?b.mipmaps[B]:b.image;Y!==null?(xe=Y.max.x-Y.min.x,Ie=Y.max.y-Y.min.y,Oe=Y.isBox3?Y.max.z-Y.min.z:1,Be=Y.min.x,We=Y.min.y,Ye=Y.isBox3?Y.min.z:0):(xe=ft.width,Ie=ft.height,Oe=ft.depth||1,Be=0,We=0,Ye=0),Z!==null?(ze=Z.x,nt=Z.y,ut=Z.z):(ze=0,nt=0,ut=0);const Bt=$e.convert(O.format),it=$e.convert(O.type);let He;O.isData3DTexture?(E.setTexture3D(O,0),He=R.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(E.setTexture2DArray(O,0),He=R.TEXTURE_2D_ARRAY):(E.setTexture2D(O,0),He=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,O.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,O.unpackAlignment);const xn=R.getParameter(R.UNPACK_ROW_LENGTH),rt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Kt=R.getParameter(R.UNPACK_SKIP_PIXELS),bi=R.getParameter(R.UNPACK_SKIP_ROWS),Gt=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ft.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ft.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Be),R.pixelStorei(R.UNPACK_SKIP_ROWS,We),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ye);const or=b.isDataArrayTexture||b.isData3DTexture,dt=O.isDataArrayTexture||O.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const hn=Re.get(b),lr=Re.get(O),qt=Re.get(hn.__renderTarget),Fn=Re.get(lr.__renderTarget);_e.bindFramebuffer(R.READ_FRAMEBUFFER,qt.__webglFramebuffer),_e.bindFramebuffer(R.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let kn=0;kn<Oe;kn++)or&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Re.get(b).__webglTexture,B,Ye+kn),b.isDepthTexture?(dt&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Re.get(O).__webglTexture,B,ut+kn),R.blitFramebuffer(Be,We,xe,Ie,ze,nt,xe,Ie,R.DEPTH_BUFFER_BIT,R.NEAREST)):dt?R.copyTexSubImage3D(He,B,ze,nt,ut+kn,Be,We,xe,Ie):R.copyTexSubImage2D(He,B,ze,nt,ut+kn,Be,We,xe,Ie);_e.bindFramebuffer(R.READ_FRAMEBUFFER,null),_e.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else dt?b.isDataTexture||b.isData3DTexture?R.texSubImage3D(He,B,ze,nt,ut,xe,Ie,Oe,Bt,it,ft.data):O.isCompressedArrayTexture?R.compressedTexSubImage3D(He,B,ze,nt,ut,xe,Ie,Oe,Bt,ft.data):R.texSubImage3D(He,B,ze,nt,ut,xe,Ie,Oe,Bt,it,ft):b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,B,ze,nt,xe,Ie,Bt,it,ft.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,B,ze,nt,ft.width,ft.height,Bt,ft.data):R.texSubImage2D(R.TEXTURE_2D,B,ze,nt,xe,Ie,Bt,it,ft);R.pixelStorei(R.UNPACK_ROW_LENGTH,xn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,rt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Kt),R.pixelStorei(R.UNPACK_SKIP_ROWS,bi),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Gt),B===0&&O.generateMipmaps&&R.generateMipmap(He),_e.unbindTexture()},this.copyTextureToTexture3D=function(b,O,Y=null,Z=null,B=0){return b.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,Z=arguments[1]||null,b=arguments[2],O=arguments[3],B=arguments[4]||0),_r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,O,Y,Z,B)},this.initRenderTarget=function(b){Re.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),_e.unbindTexture()},this.resetState=function(){A=0,T=0,C=null,_e.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}class rh extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class sh extends Ft{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Pt,h=Pt,u,f){super(null,a,o,l,c,h,r,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class og extends Ft{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const h=i[r],f=i[r+1]-h,d=(a-h)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ve:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new D,r=[],s=[],a=[],o=new D,l=new pt;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new D)}s[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Rt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Rt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Do extends vn{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ve){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class lg extends Do{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Uo(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let f=(a-s)/c-(o-s)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,r(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return n+e*s+t*a+i*o}}}const is=new D,ma=new Uo,ga=new Uo,va=new Uo;class ah extends vn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new D){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(is.subVectors(r[0],r[1]).add(r[0]),c=is);const u=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(is.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=is),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ma.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),ga.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),va.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ma.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ga.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),va.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(ma.calc(l),ga.calc(l),va.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function nc(n,e,t,i,r){const s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}function cg(n,e){const t=1-n;return t*t*e}function hg(n,e){return 2*(1-n)*n*e}function ug(n,e){return n*n*e}function wr(n,e,t,i){return cg(n,e)+hg(n,t)+ug(n,i)}function fg(n,e){const t=1-n;return t*t*t*e}function dg(n,e){const t=1-n;return 3*t*t*n*e}function pg(n,e){return 3*(1-n)*n*n*e}function mg(n,e){return n*n*n*e}function Er(n,e,t,i,r){return fg(n,e)+dg(n,t)+pg(n,i)+mg(n,r)}class oh extends vn{constructor(e=new ve,t=new ve,i=new ve,r=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ve){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Er(e,r.x,s.x,a.x,o.x),Er(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gg extends vn{constructor(e=new D,t=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new D){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Er(e,r.x,s.x,a.x,o.x),Er(e,r.y,s.y,a.y,o.y),Er(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lh extends vn{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vg extends vn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ch extends vn{constructor(e=new ve,t=new ve,i=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ve){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(wr(e,r.x,s.x,a.x),wr(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hh extends vn{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(wr(e,r.x,s.x,a.x),wr(e,r.y,s.y,a.y),wr(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uh extends vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){const i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return i.set(nc(o,l.x,c.x,h.x,u.x),nc(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ve().fromArray(r))}return this}}var Es=Object.freeze({__proto__:null,ArcCurve:lg,CatmullRomCurve3:ah,CubicBezierCurve:oh,CubicBezierCurve3:gg,EllipseCurve:Do,LineCurve:lh,LineCurve3:vg,QuadraticBezierCurve:ch,QuadraticBezierCurve3:hh,SplineCurve:uh});class _g extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Es[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Es[r.type]().fromJSON(r))}return this}}class ic extends _g{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new lh(this.currentPoint.clone(),new ve(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new ch(this.currentPoint.clone(),new ve(e,t),new ve(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){const o=new oh(this.currentPoint.clone(),new ve(e,t),new ve(i,r),new ve(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new uh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){const c=new Do(e,t,i,r,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class No extends It{constructor(e=[new ve(0,-.5),new ve(.5,0),new ve(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Rt(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/t,u=new D,f=new ve,d=new D,g=new D,_=new D;let m=0,p=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let S=0;S<=t;S++){const x=i+S*h*r,v=Math.sin(x),L=Math.cos(x);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*v,u.y=e[A].y,u.z=e[A].x*L,a.push(u.x,u.y,u.z),f.x=S/t,f.y=A/(e.length-1),o.push(f.x,f.y);const T=l[3*A+0]*v,C=l[3*A+1],w=l[3*A+0]*L;c.push(T,C,w)}}for(let S=0;S<t;S++)for(let x=0;x<e.length-1;x++){const v=x+S*e.length,L=v,A=v+e.length,T=v+e.length+1,C=v+1;s.push(L,A,C),s.push(T,C,A)}this.setIndex(s),this.setAttribute("position",new et(a,3)),this.setAttribute("uv",new et(o,2)),this.setAttribute("normal",new et(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.points,e.segments,e.phiStart,e.phiLength)}}class vi extends It{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=i/2;let p=0;S(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(d,2));function S(){const v=new D,L=new D;let A=0;const T=(t-e)/i;for(let C=0;C<=s;C++){const w=[],y=C/s,P=y*(t-e)+e;for(let q=0;q<=r;q++){const z=q/r,j=z*l+o,ne=Math.sin(j),J=Math.cos(j);L.x=P*ne,L.y=-y*i+m,L.z=P*J,u.push(L.x,L.y,L.z),v.set(ne,T,J).normalize(),f.push(v.x,v.y,v.z),d.push(z,1-y),w.push(g++)}_.push(w)}for(let C=0;C<r;C++)for(let w=0;w<s;w++){const y=_[w][C],P=_[w+1][C],q=_[w+1][C+1],z=_[w][C+1];(e>0||w!==0)&&(h.push(y,P,z),A+=3),(t>0||w!==s-1)&&(h.push(P,q,z),A+=3)}c.addGroup(p,A,0),p+=A}function x(v){const L=g,A=new ve,T=new D;let C=0;const w=v===!0?e:t,y=v===!0?1:-1;for(let q=1;q<=r;q++)u.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const P=g;for(let q=0;q<=r;q++){const j=q/r*l+o,ne=Math.cos(j),J=Math.sin(j);T.x=w*J,T.y=m*y,T.z=w*ne,u.push(T.x,T.y,T.z),f.push(0,y,0),A.x=ne*.5+.5,A.y=J*.5*y+.5,d.push(A.x,A.y),g++}for(let q=0;q<r;q++){const z=L+q,j=P+q;v===!0?h.push(j,j+1,z):h.push(j+1,j,z),C+=3}c.addGroup(p,C,v===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Us extends vi{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Us(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ns extends It{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),h(),this.setAttribute("position",new et(s,3)),this.setAttribute("normal",new et(s.slice(),3)),this.setAttribute("uv",new et(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const x=new D,v=new D,L=new D;for(let A=0;A<t.length;A+=3)d(t[A+0],x),d(t[A+1],v),d(t[A+2],L),l(x,v,L,S)}function l(S,x,v,L){const A=L+1,T=[];for(let C=0;C<=A;C++){T[C]=[];const w=S.clone().lerp(v,C/A),y=x.clone().lerp(v,C/A),P=A-C;for(let q=0;q<=P;q++)q===0&&C===A?T[C][q]=w:T[C][q]=w.clone().lerp(y,q/P)}for(let C=0;C<A;C++)for(let w=0;w<2*(A-C)-1;w++){const y=Math.floor(w/2);w%2===0?(f(T[C][y+1]),f(T[C+1][y]),f(T[C][y])):(f(T[C][y+1]),f(T[C+1][y+1]),f(T[C+1][y]))}}function c(S){const x=new D;for(let v=0;v<s.length;v+=3)x.x=s[v+0],x.y=s[v+1],x.z=s[v+2],x.normalize().multiplyScalar(S),s[v+0]=x.x,s[v+1]=x.y,s[v+2]=x.z}function h(){const S=new D;for(let x=0;x<s.length;x+=3){S.x=s[x+0],S.y=s[x+1],S.z=s[x+2];const v=m(S)/2/Math.PI+.5,L=p(S)/Math.PI+.5;a.push(v,1-L)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){const x=a[S+0],v=a[S+2],L=a[S+4],A=Math.max(x,v,L),T=Math.min(x,v,L);A>.9&&T<.1&&(x<.2&&(a[S+0]+=1),v<.2&&(a[S+2]+=1),L<.2&&(a[S+4]+=1))}}function f(S){s.push(S.x,S.y,S.z)}function d(S,x){const v=S*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function g(){const S=new D,x=new D,v=new D,L=new D,A=new ve,T=new ve,C=new ve;for(let w=0,y=0;w<s.length;w+=9,y+=6){S.set(s[w+0],s[w+1],s[w+2]),x.set(s[w+3],s[w+4],s[w+5]),v.set(s[w+6],s[w+7],s[w+8]),A.set(a[y+0],a[y+1]),T.set(a[y+2],a[y+3]),C.set(a[y+4],a[y+5]),L.copy(S).add(x).add(v).divideScalar(3);const P=m(L);_(A,y+0,S,P),_(T,y+2,x,P),_(C,y+4,v,P)}}function _(S,x,v,L){L<0&&S.x===1&&(a[x]=S.x-1),v.x===0&&v.z===0&&(a[x]=L/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.vertices,e.indices,e.radius,e.details)}}class Fs extends ic{constructor(e){super(e),this.uuid=yi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new ic().fromJSON(r))}return this}}const xg={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=fh(n,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,f,d;if(i&&(s=wg(n,e,s,t)),n.length>80*t){o=c=n[0],l=h=n[1];for(let g=t;g<r;g+=t)u=n[g],f=n[g+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Cr(s,a,t,o,l,d,0),a}};function fh(n,e,t,i,r){let s,a;if(r===Ng(n,e,t,i)>0)for(s=e;s<t;s+=i)a=rc(s,n[s],n[s+1],a);else for(s=t-i;s>=e;s-=i)a=rc(s,n[s],n[s+1],a);return a&&ks(a,a.next)&&(Lr(a),a=a.next),a}function _i(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ks(t,t.next)||mt(t.prev,t,t.next)===0)){if(Lr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Cr(n,e,t,i,r,s,a){if(!n)return;!a&&s&&Cg(n,i,r,s);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?Mg(n,i,r,s):yg(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Lr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Sg(_i(n),e,t),Cr(n,e,t,i,r,s,2)):a===2&&bg(n,e,t,i,r,s):Cr(_i(n),e,t,i,r,s,1);break}}}function yg(n){const e=n.prev,t=n,i=n.next;if(mt(e,t,i)>=0)return!1;const r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=r<s?r<a?r:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,f=r>s?r>a?r:a:s>a?s:a,d=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Xi(r,o,s,l,a,c,g.x,g.y)&&mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Mg(n,e,t,i){const r=n.prev,s=n,a=n.next;if(mt(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=mo(d,g,e,t,i),S=mo(_,m,e,t,i);let x=n.prevZ,v=n.nextZ;for(;x&&x.z>=p&&v&&v.z<=S;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&Xi(o,h,l,u,c,f,x.x,x.y)&&mt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&Xi(o,h,l,u,c,f,v.x,v.y)&&mt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&Xi(o,h,l,u,c,f,x.x,x.y)&&mt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=S;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&Xi(o,h,l,u,c,f,v.x,v.y)&&mt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Sg(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!ks(r,s)&&dh(r,i,i.next,s)&&Pr(r,s)&&Pr(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Lr(i),Lr(i.next),i=n=s),i=i.next}while(i!==n);return _i(i)}function bg(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ig(a,o)){let l=ph(a,o);a=_i(a,a.next),l=_i(l,l.next),Cr(a,e,t,i,r,s,0),Cr(l,e,t,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function wg(n,e,t,i){const r=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*i,l=s<a-1?e[s+1]*i:n.length,c=fh(n,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(Lg(c));for(r.sort(Eg),s=0;s<r.length;s++)t=Tg(r[s],t);return t}function Eg(n,e){return n.x-e.x}function Tg(n,e){const t=Ag(n,e);if(!t)return e;const i=ph(t,n);return _i(i,i.next),_i(t,t.next)}function Ag(n,e){let t=e,i=-1/0,r;const s=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>i&&(i=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let h=1/0,u;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Xi(a<c?s:i,a,l,c,a<c?i:s,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(s-t.x),Pr(t,n)&&(u<h||u===h&&(t.x>r.x||t.x===r.x&&Rg(r,t)))&&(r=t,h=u)),t=t.next;while(t!==o);return r}function Rg(n,e){return mt(n.prev,n,e.prev)<0&&mt(e.next,n,n.next)<0}function Cg(n,e,t,i){let r=n;do r.z===0&&(r.z=mo(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Pg(r)}function Pg(n){let e,t,i,r,s,a,o,l,c=1;do{for(t=n,n=null,s=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,o--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(a>1);return n}function mo(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Lg(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Xi(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function Ig(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Dg(n,e)&&(Pr(n,e)&&Pr(e,n)&&Ug(n,e)&&(mt(n.prev,n,e.prev)||mt(n,e.prev,e))||ks(n,e)&&mt(n.prev,n,n.next)>0&&mt(e.prev,e,e.next)>0)}function mt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ks(n,e){return n.x===e.x&&n.y===e.y}function dh(n,e,t,i){const r=ss(mt(n,e,t)),s=ss(mt(n,e,i)),a=ss(mt(t,i,n)),o=ss(mt(t,i,e));return!!(r!==s&&a!==o||r===0&&rs(n,t,e)||s===0&&rs(n,i,e)||a===0&&rs(t,n,i)||o===0&&rs(t,e,i))}function rs(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ss(n){return n>0?1:n<0?-1:0}function Dg(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&dh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Pr(n,e){return mt(n.prev,n,n.next)<0?mt(n,e,n.next)>=0&&mt(n,n.prev,e)>=0:mt(n,e,n.prev)<0||mt(n,n.next,e)<0}function Ug(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function ph(n,e){const t=new go(n.i,n.x,n.y),i=new go(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function rc(n,e,t,i){const r=new go(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Lr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function go(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ng(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class jn{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return jn.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];sc(e),ac(i,e);let a=e.length;t.forEach(sc);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,ac(i,t[l]);const o=xg.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function sc(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function ac(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Fo extends It{constructor(e=new Fs([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new et(r,3)),this.setAttribute("uv",new et(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Fg;let x,v=!1,L,A,T,C;p&&(x=p.getSpacedPoints(h),v=!0,f=!1,L=p.computeFrenetFrames(h,!1),A=new D,T=new D,C=new D),f||(m=0,d=0,g=0,_=0);const w=o.extractPoints(c);let y=w.shape;const P=w.holes;if(!jn.isClockWise(y)){y=y.reverse();for(let Q=0,ae=P.length;Q<ae;Q++){const R=P[Q];jn.isClockWise(R)&&(P[Q]=R.reverse())}}const z=jn.triangulateShape(y,P),j=y;for(let Q=0,ae=P.length;Q<ae;Q++){const R=P[Q];y=y.concat(R)}function ne(Q,ae,R){return ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ae,R)}const J=y.length,se=z.length;function G(Q,ae,R){let Se,pe,Te;const _e=Q.x-ae.x,Ae=Q.y-ae.y,Re=R.x-Q.x,E=R.y-Q.y,M=_e*_e+Ae*Ae,W=_e*E-Ae*Re;if(Math.abs(W)>Number.EPSILON){const ie=Math.sqrt(M),U=Math.sqrt(Re*Re+E*E),F=ae.x-Ae/ie,X=ae.y+_e/ie,k=R.x-E/U,oe=R.y+Re/U,Fe=((k-F)*E-(oe-X)*Re)/(_e*E-Ae*Re);Se=F+_e*Fe-Q.x,pe=X+Ae*Fe-Q.y;const le=Se*Se+pe*pe;if(le<=2)return new ve(Se,pe);Te=Math.sqrt(le/2)}else{let ie=!1;_e>Number.EPSILON?Re>Number.EPSILON&&(ie=!0):_e<-Number.EPSILON?Re<-Number.EPSILON&&(ie=!0):Math.sign(Ae)===Math.sign(E)&&(ie=!0),ie?(Se=-Ae,pe=_e,Te=Math.sqrt(M)):(Se=_e,pe=Ae,Te=Math.sqrt(M/2))}return new ve(Se/Te,pe/Te)}const Me=[];for(let Q=0,ae=j.length,R=ae-1,Se=Q+1;Q<ae;Q++,R++,Se++)R===ae&&(R=0),Se===ae&&(Se=0),Me[Q]=G(j[Q],j[R],j[Se]);const be=[];let Ue,Ge=Me.concat();for(let Q=0,ae=P.length;Q<ae;Q++){const R=P[Q];Ue=[];for(let Se=0,pe=R.length,Te=pe-1,_e=Se+1;Se<pe;Se++,Te++,_e++)Te===pe&&(Te=0),_e===pe&&(_e=0),Ue[Se]=G(R[Se],R[Te],R[_e]);be.push(Ue),Ge=Ge.concat(Ue)}for(let Q=0;Q<m;Q++){const ae=Q/m,R=d*Math.cos(ae*Math.PI/2),Se=g*Math.sin(ae*Math.PI/2)+_;for(let pe=0,Te=j.length;pe<Te;pe++){const _e=ne(j[pe],Me[pe],Se);K(_e.x,_e.y,-R)}for(let pe=0,Te=P.length;pe<Te;pe++){const _e=P[pe];Ue=be[pe];for(let Ae=0,Re=_e.length;Ae<Re;Ae++){const E=ne(_e[Ae],Ue[Ae],Se);K(E.x,E.y,-R)}}}const H=g+_;for(let Q=0;Q<J;Q++){const ae=f?ne(y[Q],Ge[Q],H):y[Q];v?(T.copy(L.normals[0]).multiplyScalar(ae.x),A.copy(L.binormals[0]).multiplyScalar(ae.y),C.copy(x[0]).add(T).add(A),K(C.x,C.y,C.z)):K(ae.x,ae.y,0)}for(let Q=1;Q<=h;Q++)for(let ae=0;ae<J;ae++){const R=f?ne(y[ae],Ge[ae],H):y[ae];v?(T.copy(L.normals[Q]).multiplyScalar(R.x),A.copy(L.binormals[Q]).multiplyScalar(R.y),C.copy(x[Q]).add(T).add(A),K(C.x,C.y,C.z)):K(R.x,R.y,u/h*Q)}for(let Q=m-1;Q>=0;Q--){const ae=Q/m,R=d*Math.cos(ae*Math.PI/2),Se=g*Math.sin(ae*Math.PI/2)+_;for(let pe=0,Te=j.length;pe<Te;pe++){const _e=ne(j[pe],Me[pe],Se);K(_e.x,_e.y,u+R)}for(let pe=0,Te=P.length;pe<Te;pe++){const _e=P[pe];Ue=be[pe];for(let Ae=0,Re=_e.length;Ae<Re;Ae++){const E=ne(_e[Ae],Ue[Ae],Se);v?K(E.x,E.y+x[h-1].y,x[h-1].x+R):K(E.x,E.y,u+R)}}}I(),V();function I(){const Q=r.length/3;if(f){let ae=0,R=J*ae;for(let Se=0;Se<se;Se++){const pe=z[Se];re(pe[2]+R,pe[1]+R,pe[0]+R)}ae=h+m*2,R=J*ae;for(let Se=0;Se<se;Se++){const pe=z[Se];re(pe[0]+R,pe[1]+R,pe[2]+R)}}else{for(let ae=0;ae<se;ae++){const R=z[ae];re(R[2],R[1],R[0])}for(let ae=0;ae<se;ae++){const R=z[ae];re(R[0]+J*h,R[1]+J*h,R[2]+J*h)}}i.addGroup(Q,r.length/3-Q,0)}function V(){const Q=r.length/3;let ae=0;$(j,ae),ae+=j.length;for(let R=0,Se=P.length;R<Se;R++){const pe=P[R];$(pe,ae),ae+=pe.length}i.addGroup(Q,r.length/3-Q,1)}function $(Q,ae){let R=Q.length;for(;--R>=0;){const Se=R;let pe=R-1;pe<0&&(pe=Q.length-1);for(let Te=0,_e=h+m*2;Te<_e;Te++){const Ae=J*Te,Re=J*(Te+1),E=ae+Se+Ae,M=ae+pe+Ae,W=ae+pe+Re,ie=ae+Se+Re;ue(E,M,W,ie)}}}function K(Q,ae,R){l.push(Q),l.push(ae),l.push(R)}function re(Q,ae,R){Ee(Q),Ee(ae),Ee(R);const Se=r.length/3,pe=S.generateTopUV(i,r,Se-3,Se-2,Se-1);ge(pe[0]),ge(pe[1]),ge(pe[2])}function ue(Q,ae,R,Se){Ee(Q),Ee(ae),Ee(Se),Ee(ae),Ee(R),Ee(Se);const pe=r.length/3,Te=S.generateSideWallUV(i,r,pe-6,pe-3,pe-2,pe-1);ge(Te[0]),ge(Te[1]),ge(Te[3]),ge(Te[1]),ge(Te[2]),ge(Te[3])}function Ee(Q){r.push(l[Q*3+0]),r.push(l[Q*3+1]),r.push(l[Q*3+2])}function ge(Q){s.push(Q.x),s.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return kg(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Es[r.type]().fromJSON(r)),new Fo(i,e.options)}}const Fg={generateTopUV:function(n,e,t,i,r){const s=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],h=e[r*3+1];return[new ve(s,a),new ve(o,l),new ve(c,h)]},generateSideWallUV:function(n,e,t,i,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[r*3],d=e[r*3+1],g=e[r*3+2],_=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ve(a,1-l),new ve(c,1-u),new ve(f,1-g),new ve(_,1-p)]:[new ve(o,1-l),new ve(h,1-u),new ve(d,1-g),new ve(m,1-p)]}};function kg(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ko extends Ns{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ko(e.radius,e.detail)}}class Oo extends Ns{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Oo(e.radius,e.detail)}}class Bo extends It{constructor(e=new Fs([new ve(0,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(s,3)),this.setAttribute("uv",new et(a,2));function c(h){const u=r.length/3,f=h.extractPoints(t);let d=f.shape;const g=f.holes;jn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const S=g[m];jn.isClockWise(S)===!0&&(g[m]=S.reverse())}const _=jn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const S=g[m];d=d.concat(S)}for(let m=0,p=d.length;m<p;m++){const S=d[m];r.push(S.x,S.y,0),s.push(0,0,1),a.push(S.x,S.y)}for(let m=0,p=_.length;m<p;m++){const S=_[m],x=S[0]+u,v=S[1]+u,L=S[2]+u;i.push(x,v,L),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Og(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];i.push(a)}return new Bo(i,e.curveSegments)}}function Og(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class xi extends It{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new D,f=new D,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const S=[],x=p/i;let v=0;p===0&&a===0?v=.5/t:p===i&&l===Math.PI&&(v=-.5/t);for(let L=0;L<=t;L++){const A=L/t;u.x=-e*Math.cos(r+A*s)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(r+A*s)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(A+v,1-x),S.push(c++)}h.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){const x=h[p][S+1],v=h[p][S],L=h[p+1][S],A=h[p+1][S+1];(p!==0||a>0)&&d.push(x,v,A),(p!==i-1||l<Math.PI)&&d.push(v,L,A)}this.setIndex(d),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zo extends It{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],h=new D,u=new D,f=new D;for(let d=0;d<=i;d++)for(let g=0;g<=r;g++){const _=g/r*s,m=d/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=r;g++){const _=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,S=(r+1)*d+g;a.push(_,m,S),a.push(m,p,S)}this.setIndex(a),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ho extends It{constructor(e=new hh(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,l=new D,c=new ve;let h=new D;const u=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(d,2));function _(){for(let x=0;x<t;x++)m(x);m(s===!1?t:0),S(),p()}function m(x){h=e.getPointAt(x/t,h);const v=a.normals[x],L=a.binormals[x];for(let A=0;A<=r;A++){const T=A/r*Math.PI*2,C=Math.sin(T),w=-Math.cos(T);l.x=w*v.x+C*L.x,l.y=w*v.y+C*L.y,l.z=w*v.z+C*L.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=t;x++)for(let v=1;v<=r;v++){const L=(r+1)*(x-1)+(v-1),A=(r+1)*x+(v-1),T=(r+1)*x+v,C=(r+1)*(x-1)+v;g.push(L,A,C),g.push(A,T,C)}}function S(){for(let x=0;x<=t;x++)for(let v=0;v<=r;v++)c.x=x/t,c.y=v/r,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ho(new Es[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Bg extends Dr{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Ke(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Vo extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class zg extends Vo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const _a=new pt,oc=new D,lc=new D;class mh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lo,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;oc.setFromMatrixPosition(e.matrixWorld),t.position.copy(oc),lc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lc),t.updateMatrixWorld(),_a.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_a),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const cc=new pt,dr=new D,xa=new D;class Hg extends mh{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),dr.setFromMatrixPosition(e.matrixWorld),i.position.copy(dr),xa.copy(i.position),xa.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(xa),i.updateMatrixWorld(),r.makeTranslation(-dr.x,-dr.y,-dr.z),cc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cc)}}class Vg extends Vo{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Hg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Gg extends mh{constructor(){super(new Is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wg extends Vo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Gg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:So}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=So);const pn="#5b3520",Ts={trunk:"#e2a574",leaf:"#83c47b",fir:"#8ccf87"};function ct(n){let e=(Math.imul(n|0,2654435761)^2654435769)>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>>17,e^=e<<5,e>>>=0,e/4294967296)}function Tt(n,e){const t=document.createElement("canvas");return t.width=Math.round(n),t.height=Math.round(e),[t,t.getContext("2d")]}function $g(n,e,{amp:t=1.5,step:i=5,closed:r=!1}={}){const s=[],a=n.length,o=r?a:a-1,l=e()*6.28,c=e()*6.28;let h=0;for(let u=0;u<o;u++){const[f,d]=n[u],[g,_]=n[(u+1)%a],m=Math.hypot(g-f,_-d)||1,p=-(_-d)/m,S=(g-f)/m,x=Math.max(1,Math.ceil(m/i));for(let v=0;v<x;v++){const L=v/x,A=t*(Math.sin(h*.045+l)*.65+Math.sin(h*.17+c)*.35);s.push([f+(g-f)*L+p*A,d+(_-d)*L+S*A]),h+=m/x}}return r||s.push(n[a-1].slice()),s}function st(n,e,t,{w:i=3,color:r=pn,closed:s=!1,amp:a=1.3}={}){const o=$g(e,t,{amp:a,closed:s});s&&o.push(o[0]);const l=t()*6.28,c=.12+t()*.14;n.strokeStyle=r,n.lineCap="round",n.lineJoin="round";for(let h=0;h<o.length-1;h++)n.lineWidth=i*(.7+.55*(.5+.5*Math.sin(h*c+l))),n.beginPath(),n.moveTo(o[h][0],o[h][1]),n.lineTo(o[h+1][0],o[h+1][1]),n.stroke()}function gh(n,e){n.beginPath(),n.moveTo(e[0][0],e[0][1]);for(const t of e)n.lineTo(t[0],t[1]);n.closePath()}function Mt(n,e,t){n.fillStyle=t,gh(n,e),n.fill()}function vh(n,e,t){n.save(),gh(n,e),n.clip(),t(),n.restore()}function _t(n,e,t,i,r,{n:s=40,lump:a=.08}={}){const o=2+Math.floor(r()*3),l=r()*6.28,c=5+Math.floor(r()*3),h=r()*6.28,u=[];for(let f=0;f<s;f++){const d=f/s*Math.PI*2,g=1+a*(Math.sin(d*o+l)*.6+Math.sin(d*c+h)*.4);u.push([n+Math.cos(d)*t*g,e+Math.sin(d)*i*g])}return u}function Xg(n,e,t,i,r){const s=[];for(let a=0;a<r;a++){const o=Math.PI+a/r*Math.PI,l=Math.PI+(a+1)/r*Math.PI,c=n+Math.cos(o)*t,h=e+Math.sin(o)*i,u=n+Math.cos(l)*t,f=e+Math.sin(l)*i,d=(c+u)/2,g=(h+f)/2,_=Math.hypot(u-c,f-h)/2,m=Math.atan2(h-g,c-d),p=Math.atan2(g-e,d-n),S=Math.cos(m+Math.PI/2-p)>0?1:-1;for(let x=0;x<8;x++){const v=m+S*(x/8)*Math.PI;s.push([d+Math.cos(v)*_,g+Math.sin(v)*_*1.05])}}for(let a=0;a<=10;a++){const o=a/10*Math.PI;s.push([n+Math.cos(o)*t,e+Math.sin(o)*i*.45])}return s}function qg(){const[n,e]=Tt(128,64),t=e.createRadialGradient(64,32,4,64,32,62);return t.addColorStop(0,"rgba(50,95,55,.42)"),t.addColorStop(.7,"rgba(50,95,55,.3)"),t.addColorStop(1,"rgba(50,95,55,0)"),e.setTransform(1,0,0,.5,0,16),e.fillStyle=t,e.beginPath(),e.arc(64,32,62,0,Math.PI*2),e.fill(),n}const Yg=new cn({side:Ct,vertexShader:`
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
    }`}),Zg=new cn({side:Ct,uniforms:{map:{value:null}},vertexShader:`
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
    }`}),Oi=new cn({uniforms:{tColor:{value:null},tND:{value:null},texel:{value:new ve},seed:{value:0},lineW:{value:1.3},ink:{value:new Ke(pn)}},depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
    }`});function Jg(n){const e=new Un(1,1,{samples:4,type:gi}),t=new Un(1,1,{type:gi,minFilter:Pt,magFilter:Pt}),i=new xt(new In(2,2),Oi),r=new rh;r.add(i);const s=new Is(-1,1,1,-1,0,1),a=new ve,o=[];function l(){n.getDrawingBufferSize(a),e.setSize(a.x,a.y),t.setSize(a.x,a.y),Oi.uniforms.texel.value.set(1/a.x,1/a.y),Oi.uniforms.lineW.value=1.25*n.getPixelRatio()}function c(h,u,f){n.getDrawingBufferSize(a),(a.x!==e.width||a.y!==e.height)&&l(),n.setRenderTarget(e),n.render(h,u);const d=h.background;h.background=null,h.traverse(_=>{if(!(!_.isMesh||!_.visible)){if(_.userData.noInk){_.visible=!1,o.push([_,null]);return}o.push([_,_.material]),_.userData.sprite?(_.material=Zg,_.onBeforeRender=Kg):_.material=Yg}});const g=n.getClearAlpha();n.getClearColor(hc),n.setClearColor(0,0),n.setRenderTarget(t),n.render(h,u),n.setClearColor(hc,g);for(const[_,m]of o)m?(_.material=m,_.onBeforeRender=jg):_.visible=!0;o.length=0,h.background=d,Oi.uniforms.tColor.value=e.texture,Oi.uniforms.tND.value=t.texture,Oi.uniforms.seed.value=f,n.setRenderTarget(null),n.render(r,s)}return{render:c,setSize:l}}const hc=new Ke,jg=()=>{};function Kg(n,e,t,i,r){r.uniforms.map.value=this.userData.colorMap(),r.uniformsNeedUpdate=!0}function Qg(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,l=new It;let c=0;for(let h=0;h<n.length;++h){const u=n[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0;const u=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(const h in s){const u=uc(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<a[h].length;++_)d.push(a[h][_][f]);const g=uc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function uc(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){const h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const a=new e(s),o=new ln(a,t,i);let l=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){const _=h.getComponent(f,g);o.setComponent(f+u,g,_)}}else a.set(h.array,l);l+=h.count*t}return r!==void 0&&(o.gpuType=r),o}function ev(n,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},i=n.getIndex(),r=n.getAttribute("position"),s=i?i.count:r.count;let a=0;const o=Object.keys(n.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let S=0,x=o.length;S<x;S++){const v=o[S],L=n.attributes[v];l[v]=new L.constructor(new L.array.constructor(L.count*L.itemSize),L.itemSize,L.normalized);const A=n.morphAttributes[v];A&&(c[v]||(c[v]=[]),A.forEach((T,C)=>{const w=new T.array.constructor(T.count*T.itemSize);c[v][C]=new T.constructor(w,T.itemSize,T.normalized)}))}const d=e*.5,g=Math.log10(1/e),_=Math.pow(10,g),m=d*_;for(let S=0;S<s;S++){const x=i?i.getX(S):S;let v="";for(let L=0,A=o.length;L<A;L++){const T=o[L],C=n.getAttribute(T),w=C.itemSize;for(let y=0;y<w;y++)v+=`${~~(C[u[y]](x)*_+m)},`}if(v in t)h.push(t[v]);else{for(let L=0,A=o.length;L<A;L++){const T=o[L],C=n.getAttribute(T),w=n.morphAttributes[T],y=C.itemSize,P=l[T],q=c[T];for(let z=0;z<y;z++){const j=u[z],ne=f[z];if(P[ne](a,C[j](x)),w)for(let J=0,se=w.length;J<se;J++)q[J][ne](a,w[J][j](x))}}t[v]=a,h.push(a),a++}}const p=n.clone();for(const S in n.attributes){const x=l[S];if(p.setAttribute(S,new x.constructor(x.array.slice(0,a*x.itemSize),x.itemSize,x.normalized)),S in c)for(let v=0;v<c[S].length;v++){const L=c[S][v];p.morphAttributes[S][v]=new L.constructor(L.array.slice(0,a*L.itemSize),L.itemSize,L.normalized)}}return p.setIndex(h),p}const tv=(()=>{const n=new sh(new Uint8Array([120,255]),2,1,Ps);return n.minFilter=n.magFilter=Pt,n.needsUpdate=!0,n})(),ya=new Map;function nr(n,e={}){const t=n+JSON.stringify(e,(i,r)=>r&&r.isTexture?r.uuid:r);return ya.has(t)||ya.set(t,new Bg({color:n,gradientMap:tv,...e})),ya.get(t)}function Pn(n,e=!1){const t=new og(n);return t.colorSpace=zt,t.anisotropy=8,e&&(t.wrapS=t.wrapT=Ss),t}const _h=new D(0,1,0),nv=new pt,Go=new Mi,xh=new D,yh=new D;function Wo(n,e,t=Go.identity(),i=xh.set(1,1,1)){return n.clone().applyMatrix4(nv.compose(e,t,i))}function iv(n){return n.attributes.uv||n.setAttribute("uv",new et(new Float32Array(n.attributes.position.count*2),2)),n}function vo(n,e){return new xt(Qg(n.map(iv)),e)}const rv=new xi(1,12,8);function fc(n,e,t,i){const r=3+Math.floor(t()*3);for(let s=0;s<r;s++){const a=s/r*Math.PI*2+t(),o=s===0?0:e*.55,l=e*(s===0?1:.62+t()*.2);i.push(Wo(rv,yh.set(n.x+Math.cos(a)*o,n.y+(s===0?e*.12:0),n.z+Math.sin(a)*o),Go.identity(),xh.set(l,l*.46,l)))}}function _o(n){const e=ct(n),t=4+e()*.9,i=(e()-.5)*.5,r=new Ht,s=new vi(.06,.2,t,8,12);s.translate(0,t/2,0);const a=s.attributes.position;for(let h=0;h<a.count;h++){const u=a.getY(h)/t,f=u<.1?1+(.1-u)*7:1;a.setXYZ(h,a.getX(h)*f+i*u*u,a.getY(h),a.getZ(h)*f)}s.computeVertexNormals();const o=[s],l=[],c=6+Math.floor(e()*3);for(let h=0;h<c;h++){const u=.3+h/(c-1)*.62,f=h*2.4+e()*.6,d=.35+(1-u)*.95,g=new D(i*u*u,u*t,0),_=new D(Math.cos(f)*.8,.6,Math.sin(f)*.8).normalize(),m=new vi(.025,.05,d,5);o.push(Wo(m,g.clone().addScaledVector(_,d/2),new Mi().setFromUnitVectors(_h,_))),fc(g.clone().addScaledVector(_,d),.28+(1-u)*.2,e,l)}return fc(new D(i,t+.05,0),.26,e,l),r.add(vo(o,nr(Ts.trunk)),vo(l,nr(Ts.leaf))),r}function xo(n){const e=ct(n),t=new Ht,i=4+Math.floor(e()*2),r=new vi(.1,.16,1.2,7);r.translate(0,.6,0);const s=[];for(let a=0;a<i;a++){const o=a/(i-1),l=1.05-.62*o,c=1.25-.3*o,h=.9+o*2.3,u=new Us(l,c,10,1,!0),f=u.attributes.position;for(let d=0;d<f.count;d++){if(f.getY(d)>-c/2+.01)continue;const g=Math.atan2(f.getZ(d),f.getX(d)),_=Math.round(g/(Math.PI*2/10))%2===0,m=_?1.08:.8;f.setXYZ(d,f.getX(d)*m,f.getY(d)+(_?-.14:.06),f.getZ(d)*m)}u.computeVertexNormals(),s.push(Wo(u,yh.set(0,h+c/2,0),Go.setFromAxisAngle(_h,e()*6)))}return t.add(new xt(r,nr(Ts.trunk)),vo(s,nr(Ts.fir,{side:Ct}))),t}function Yn(n,e){const t=ct(n);let i=new xi(.6,14,10);i.deleteAttribute("uv"),i.deleteAttribute("normal"),i=ev(i);const r=i.attributes.position;for(let a=0;a<r.count;a++){let o=r.getY(a);o<0&&(o*=.35);const l=1+(t()-.5)*.14;r.setXYZ(a,r.getX(a)*1.15*l,(o+.2)*1.3*l,r.getZ(a)*l)}i.computeVertexNormals();const s=new xt(i,nr("#d8c6a2"));return s.scale.setScalar(e),s.rotation.y=t()*6.28,s}const dc={night:{g:["#1b2152","#2d3478","#51479a"],cloud:"#3d3f86",cloudShade:"#34367a",cloudInk:"#8d86d8",stars:90,moon:!0},deep:{g:["#0d1233","#152050","#1f2f68"],cloud:null,stars:30},dusk:{g:["#3a3c8c","#9a6fb6","#f2a88a"],cloud:"#c98bb8",cloudShade:"#b77aa8",cloudInk:"#6d5aa8",stars:18},day:{g:["#7fb2e8","#a9cdef","#f3dcb4"],cloud:"#f6eef8",cloudShade:"#e2d6ee",cloudInk:"#7a78b8",stars:0},storm:{g:["#3c3f5e","#5a5d80","#7c7f9a"],cloud:"#6b6d8c",cloudShade:"#585a78",cloudInk:"#2e3050",stars:0}};function sv(n,e=1024,t=640){const i=dc[n]||dc.night,[r,s]=Tt(e,t),a=ct(61),o=ct(62+n.length),l=s.createLinearGradient(0,0,0,t);l.addColorStop(0,i.g[0]),l.addColorStop(.55,i.g[1]),l.addColorStop(1,i.g[2]),s.fillStyle=l,s.fillRect(0,0,e,t);for(let c=0;c<i.stars;c++){const h=o()*e,u=o()*t*.8,f=o()<.15;if(s.fillStyle=f?"#fff6c8":"rgba(255,248,220,.8)",f){const d=[];for(let g=0;g<8;g++){const _=g*Math.PI/4,m=g%2?2:6.5;d.push([h+Math.cos(_)*m,u+Math.sin(_)*m])}Mt(s,d,"#fff6c8")}else s.beginPath(),s.arc(h,u,1+o()*1.4,0,7),s.fill()}if(i.moon){const c=e*.82,h=t*.18,u=_t(c,h,38,38,a,{n:40,lump:.02});Mt(s,u,"#fff3c4"),Mt(s,_t(c+18,h-10,34,34,ct(3),{n:40,lump:.02}),i.g[0]),st(s,u.slice(8,34),a,{w:2.4,color:"#d9c88a"})}if(i.cloud)for(let c=0;c<6;c++){const h=o()*e,u=60+o()*(t-160),f=60+o()*90,d=f*.32,g=3+Math.floor(o()*3),_=Xg(h,u,f,d,g);Mt(s,_,i.cloud),vh(s,_,()=>Mt(s,_t(h,u+d*.55,f*1.1,d*.45,a),i.cloudShade)),st(s,_,a,{w:2.6,closed:!0,color:i.cloudInk})}return r}const Mh={camp:{base:"#4f7a6e",light:"#5b8878",dark:"#45695f",tick:"#3d6056",wall:["#7a5a48","#5f4538"]},hill:{base:"#9dd190",light:"#a9d99b",dark:"#93c886",tick:"#78b66f",wall:["#c28c5a","#a8754a"]},hillNight:{base:"#4d7466",light:"#588274",dark:"#43675b",tick:"#3a5c51",wall:["#7a5a48","#5f4538"]},desert:{base:"#ecd7a6",light:"#f3e2b8",dark:"#e0c893",tick:"#cdb18a",wall:["#d6a76a","#b98a55"]},stone:{base:"#e4e0f0",light:"#ece8f6",dark:"#d6d0e8",tick:"#b0a8cc",wall:["#c9c3e0","#a79fc6"],slabs:!0},sea:{base:"#78c4dc",light:"#8ccfe4",dark:"#61b4d2",tick:"#e9f7fb",wall:["#4f9fc0","#3d86a6"],water:!0},storm:{base:"#5a8fa8",light:"#6a9db4",dark:"#4c7f98",tick:"#d8e8f0",wall:["#3f7390","#2f5c78"],water:!0},seabed:{base:"#27466e",light:"#2f5280",dark:"#213c60",tick:"#3f6a94",wall:["#1d3456","#162a48"]},beach:{base:"#ecd7a6",light:"#f3e2b8",dark:"#e0c893",tick:"#cdb18a",wall:["#d6a76a","#b98a55"],shore:!0}};function Sh(n,e=16,t=40,i=1){const r=Mh[n],[s,a]=Tt(e*t,e*t),o=ct(11+i),l=ct(12+i),c=s.width;a.fillStyle=r.base,a.fillRect(0,0,c,c);for(let h=0;h<40;h++)Mt(a,_t(o()*c,o()*c,(1+o()*2.4)*t,(.6+o()*1.2)*t,o,{lump:.22}),o()<.5?r.light:r.dark);if(r.slabs){for(let h=t*.5;h<c;h+=t*1.6)st(a,[[0,h],[c,h+(o()-.5)*8]],l,{w:2.6,color:"#8b80ad"});for(let h=t*.5,u=0;h<c;h+=t*1.6,u++)for(let f=u%2*t;f<c;f+=t*2.2)st(a,[[f,h],[f+(o()-.5)*6,h+t*1.6]],l,{w:2.2,color:"#8b80ad"})}else if(r.water)for(let h=0;h<70;h++){const u=o()*c,f=o()*c;st(a,[[u-12,f+3],[u-4,f-4],[u+4,f+2],[u+12,f-4]],l,{w:2.6,color:r.tick,amp:0})}else for(let h=0;h<700;h++){const u=o()*c,f=o()*c,d=.15*t,g=-1.15+(o()-.5)*.4;st(a,[[u,f],[u+Math.cos(g)*d,f+Math.sin(g)*d]],l,{w:2,color:r.tick,amp:0})}if(r.shore){const h=[];for(let f=0;f<=c;f+=12)h.push([f,c*.42+Math.sin(f*.02)*18+o()*4]);const u=[[0,0],[c,0],...h.slice().reverse()];Mt(a,u,"#78c4dc"),vh(a,u,()=>{for(let f=0;f<40;f++){const d=o()*c,g=o()*c*.4;st(a,[[d-10,g+2],[d-3,g-3],[d+3,g+1],[d+10,g-3]],l,{w:2.4,color:"#e9f7fb",amp:0})}}),st(a,h.map(([f,d])=>[f,d+6]),l,{w:7,color:"#f3f6ea"}),st(a,h,l,{w:3,color:"#3d86a6"})}return s}function av(n,e=80){const t=Mh[n],i=8*e,r=256,[s,a]=Tt(i,r),o=ct(41),l=ct(42);a.fillStyle=t.wall[0],a.fillRect(0,0,i,r),a.fillStyle=t.wall[1],a.fillRect(0,r*.7,i,r);for(let h=0;h<40;h++){const u=o()*i,f=30+o()*(r-48);st(a,[[u,f],[u+20+o()*40,f+(o()-.5)*6]],l,{w:2.2,color:t.wall[1],amp:1})}const c=[[0,0],[i,0]];for(let h=i;h>=0;h-=12)c.push([h,12+7*Math.abs(Math.sin(h*.13))+o()*3]);return Mt(a,c,t.dark),st(a,c.slice(2),l,{w:3.4,amp:.6}),st(a,[[0,r-3],[i,r-3]],l,{w:5,amp:1}),s}function ov(n="255,170,90"){const[e,t]=Tt(128,128),i=t.createRadialGradient(64,64,2,64,64,62);return i.addColorStop(0,`rgba(${n},.75)`),i.addColorStop(.5,`rgba(${n},.3)`),i.addColorStop(1,`rgba(${n},0)`),t.fillStyle=i,t.fillRect(0,0,128,128),e}function pc(n,e="dots"){const[t,i]=Tt(120,110),r=ct(90+n*7),s=_t(60,44,46,32,ct(5),{n:30,lump:.05});if(e==="think")for(const[a,o,l]of[[34,88,7],[22,100,4.5]]){const c=_t(a,o,l,l,r,{n:12});Mt(i,c,"#fff8ea"),st(i,c,r,{w:2.4,closed:!0,amp:.3})}else{const a=[[42,66],[32,96],[64,70]];Mt(i,a,"#fff8ea"),st(i,a,r,{w:3,amp:.4})}if(Mt(i,s,"#fff8ea"),st(i,s,r,{w:3.4,closed:!0,amp:.6}),i.fillStyle=pn,e==="think")i.font="bold 44px sans-serif",i.textAlign="center",i.fillText("?",60,60);else for(const a of[-18,0,18])i.beginPath(),i.arc(60+a,46,5,0,7),i.fill();return t}function lv(n,e="#ffd24a"){const[t,i]=Tt(64,64),r=ct(20+n),s=[];for(let a=0;a<8;a++){const o=-Math.PI/2+a*Math.PI/4,l=a%2?9:26;s.push([32+Math.cos(o)*l,32+Math.sin(o)*l])}return Mt(i,s,e),st(i,s,r,{w:2.6,closed:!0,amp:.4}),t}function cv(n,e=!0){const[t,i]=Tt(160,160),r=ct(n.length*13+5);ct(n.length*7);const s=_t(80,80,70,70,r,{n:50,lump:.03});Mt(i,s,e?"#f6f0e3":"#9aa0c8");const a=(c,h,u=3.2)=>{Mt(i,c,h),st(i,c,r,{w:u,closed:!0,amp:.5})},o=(c,h=pn,u=3)=>st(i,c,r,{w:u,color:h,amp:.4}),l=(c,h,u,f,d)=>{const g=[];for(let _=0;_<10;_++){const m=-Math.PI/2+_*Math.PI/5,p=_%2?f:u;g.push([c+Math.cos(m)*p,h+Math.sin(m)*p])}a(g,d)};switch(n){case"tree":o([[80,120],[80,80]],"#8a5d33",9),o([[80,120],[80,80]],pn,3),a(_t(80,66,34,26,r),"#83c47b"),a(_t(62,80,18,14,r),"#5c9d5f"),a(_t(98,80,18,14,r),"#5c9d5f"),a(_t(70,60,5,5,r,{n:10}),"#e2475d",2),a(_t(92,68,5,5,r,{n:10}),"#e2475d",2);break;case"ark":a([[30,92],[130,92],[114,118],[46,118]],"#c98a4d"),a([[56,70],[104,70],[104,92],[56,92]],"#e2a574"),a([[50,72],[80,54],[110,72]],"#b77c45"),o([[24,128],[40,122],[56,128],[72,122],[88,128],[104,122],[120,128],[136,122]],"#3d86a6",4);break;case"star":l(80,78,42,18,"#f5cf5f"),a(_t(116,42,9,9,r,{n:12}),"#fff3c4",2);break;case"well":a([[44,88],[116,88],[112,124],[48,124]],"#c9c3e0"),o([[46,104],[114,104]],"#7a6d98",2.4),o([[80,88],[80,124]],"#7a6d98",2.4),o([[50,88],[50,46]],pn,5),o([[110,88],[110,46]],pn,5),a([[40,50],[80,28],[120,50]],"#e8584e"),o([[80,50],[80,80]],pn,2),a([[72,78],[88,78],[86,90],[74,90]],"#c98a4d",2.4);break;case"waves":a([[20,120],[60,60],[66,120]],"#78c4dc"),a([[140,120],[100,60],[94,120]],"#78c4dc"),a([[66,120],[94,120],[90,128],[70,128]],"#ecd7a6",2.4),o([[40,90],[48,82]],"#e9f7fb"),o([[118,90],[110,82]],"#e9f7fb");break;case"whale":a(_t(76,90,48,28,r),"#6f9fd8"),a([[118,86],[140,66],[136,86],[146,100]],"#6f9fd8"),a(_t(76,100,36,12,r),"#c9ddf3",2.4),a(_t(56,84,4,4,r,{n:10}),pn,1),o([[70,60],[66,44]],"#78c4dc",3),o([[74,60],[82,44]],"#78c4dc",3),o([[20,128],[40,122],[60,128],[80,122],[100,128],[120,122],[140,128]],"#3d86a6",4);break;case"palm":o([[82,128],[76,96],[80,62]],"#c4814f",10),o([[82,128],[76,96],[80,62]],pn,3);for(const c of[-2.6,-2,-1.2,-.5])a([[80,60],[80+Math.cos(c)*44,60+Math.sin(c)*26+18],[80+Math.cos(c)*20,60+Math.sin(c)*10+10]],"#83c47b",2.6);a(_t(72,70,6,6,r,{n:10}),"#a8754a",2),a(_t(86,72,6,6,r,{n:10}),"#a8754a",2);break;case"book":a([[34,66],[80,76],[80,122],[34,112]],"#fff8ea"),a([[126,66],[80,76],[80,122],[126,112]],"#fff8ea"),a([[34,112],[80,122],[126,112],[126,118],[80,128],[34,118]],"#5c9d5f",2.4);for(let c=0;c<3;c++)o([[42,82+c*10],[72,88+c*10]],"#b58d5b",2),o([[88,88+c*10],[118,82+c*10]],"#b58d5b",2);l(80,44,12,5,"#f5cf5f");break;case"moon":a([[20,120],[60,92],[100,104],[140,84],[140,130],[20,130]],"#ecd7a6"),i.setLineDash([4,8]),o([[30,118],[60,104],[96,112],[130,96]],"#b58d5b",3),i.setLineDash([]);{const c=_t(96,50,24,24,r,{n:30,lump:.02});Mt(i,c,"#fff3c4"),Mt(i,_t(108,42,22,22,ct(4),{n:30,lump:.02}),e?"#f6f0e3":"#9aa0c8")}break}return st(i,s,r,{w:4.5,closed:!0,amp:.6}),t}const Kn=Math.PI*2,fe={box:(n,e,t)=>new Si(n,e,t),cyl:(n,e,t,i=10,r=!1)=>new vi(n,e,t,i,1,r),sph:(n,e=12,t=9)=>new xi(n,e,t),hemi:(n,e=14)=>new xi(n,e,8,0,Kn,0,Math.PI/2),cone:(n,e,t=8)=>new Us(n,e,t),tor:(n,e,t=Kn,i=16)=>new zo(n,e,8,i,t),oct:n=>new Oo(n),ico:(n,e=0)=>new ko(n,e),plane:(n,e)=>new In(n,e),lathe:(n,e=16)=>new No(n.map(([t,i])=>new ve(t,i)),e),tube:(n,e,t=40)=>new Ho(new ah(n.map(i=>new D(...i))),t,e,8),extrude:(n,e)=>{const t=new Fo(new Fs(n.map(([i,r])=>new ve(i,r))),{depth:e,bevelEnabled:!1});return t.translate(0,0,-e/2),t}},hv=n=>typeof n=="number"?[n,n,n]:n,uv=(()=>{const n=new sh(new Uint8Array([205,255]),2,1,Ps);return n.minFilter=n.magFilter=Pt,n.needsUpdate=!0,n})();function he(n,e,{p:t=[0,0,0],r:i=[0,0,0],s:r=1,map:s,side:a,glow:o,basic:l,soft:c}={}){const h={};c&&(h.gradientMap=uv),s&&(h.map=s),a&&(h.side=a),o&&(h.emissive=o,h.emissiveIntensity=.55);const u=l?new Zt({color:e,map:s,side:a}):nr(e,h),f=new xt(n,u);return f.position.set(...t),f.rotation.set(...i),f.scale.set(...hv(r)),f}function tt(...n){const e=new Ht;return e.add(...n.flat().filter(Boolean)),e}const Xt=(n,e)=>Array.from({length:n},(t,i)=>e(i/n*Kn,i)),Ma=new Map,un=(n,e)=>(Ma.has(n)||Ma.set(n,Pn(e(),!0)),Ma.get(n)),bh={chevrons:()=>un("chev",()=>{const[n,e]=Tt(256,256),t=ct(5);e.fillStyle="#c7c0e6",e.fillRect(0,0,256,256);for(let i=-40;i<300;i+=64){const r=[[30,i+40],[128,i],[226,i+40],[226,i+64],[128,i+24],[30,i+64]];Mt(e,r,"#8f84c2"),st(e,r,t,{w:3,closed:!0,color:"#4b3f7a"})}return n}),stripes:(n="#5aa0e6",e="#ffd24a")=>un("str"+n+e,()=>{const[t,i]=Tt(256,256),r=ct(6);for(let s=0;s<8;s++)i.fillStyle=s%2?n:e,i.fillRect(s*32,0,32,256);for(let s=1;s<8;s++)st(i,[[s*32,0],[s*32,256]],r,{w:2.5});return t}),swirl:()=>un("swirl",()=>{const[n,e]=Tt(256,256),t=ct(7);e.fillStyle="#d24cf0",e.fillRect(0,0,256,256);const i=[];for(let r=0;r<22;r+=.25)i.push([128+Math.cos(r)*r*5.2,128+Math.sin(r)*r*5.2]);return st(e,i,t,{w:9,color:"#f3a6ff",amp:1}),n}),arrow:()=>un("arrow",()=>{const[n,e]=Tt(256,128),t=ct(8);e.fillStyle="#e8c58f",e.fillRect(0,0,256,128);const i=[[40,52],[160,52],[160,30],[215,64],[160,98],[160,76],[40,76]];Mt(e,i,"#e8584e"),st(e,i,t,{w:3.5,closed:!0});for(let r=0;r<3;r++)st(e,[[10,20+r*40],[60,22+r*40]],t,{w:1.6,color:"#b58d5b"});return n}),rings:()=>un("rings",()=>{const[n,e]=Tt(128,128),t=ct(9);e.fillStyle="#f1c792",e.fillRect(0,0,128,128);for(const i of[14,28,42,56])st(e,_t(64,64,i,i,t,{n:28,lump:.05}),t,{w:2.2,closed:!0,color:"#b07a45"});return n}),bricks:(n,e,t)=>un("br"+n,()=>{const[i,r]=Tt(512,256),s=ct(91),a=ct(92);r.fillStyle=e,r.fillRect(0,0,512,256);for(let o=0,l=0;l<256;o++,l+=42)for(let c=o%2?0:-40;c<512;c+=96+a()*10){const h=[[c+4,l+4],[c+90,l+4],[c+90,l+39],[c+4,l+39]];Mt(r,h,a()<.35?n:e),st(r,h,s,{w:2,closed:!0,color:t,amp:.6})}return i}),strata:(n,e,t)=>un("strata"+n,()=>{const[i,r]=Tt(256,256),s=ct(33),a=ct(34);for(let o=0;o<256;o+=32)r.fillStyle=o/32%2?n:e,r.fillRect(0,o,256,32);for(let o=32;o<256;o+=32)st(r,[[0,o+(a()-.5)*6],[256,o+(a()-.5)*6]],s,{w:2.4,color:t,amp:2});for(let o=0;o<14;o++){const l=a()*256,c=a()*256;st(r,[[l,c],[l+4,c+18]],s,{w:2,color:t,amp:0})}return i}),star:(n,e)=>un("star"+n+e,()=>{const[t,i]=Tt(256,256),r=ct(10);i.fillStyle=n,i.fillRect(0,0,256,256);const s=[];for(let a=0;a<10;a++){const o=-Math.PI/2+a*Math.PI/5,l=a%2?40:90;s.push([128+Math.cos(o)*l,134+Math.sin(o)*l])}return Mt(i,s,e),st(i,s,r,{w:5,closed:!0}),t}),corrugated:(n,e)=>un("corr"+n,()=>{const[t,i]=Tt(256,128),r=ct(12);i.fillStyle=n,i.fillRect(0,0,256,128);for(let s=8;s<256;s+=16)st(i,[[s,0],[s,128]],r,{w:2,color:e,amp:.4});return t}),dots:(n,e)=>un("dots"+n,()=>{const[t,i]=Tt(128,128),r=ct(13);i.fillStyle=n,i.fillRect(0,0,128,128);for(let s=0;s<9;s++)i.fillStyle=e,i.beginPath(),i.arc(r()*128,r()*128,6+r()*6,0,Kn),i.fill();return t})},fv=Ct;function pr(n=.5,e=.22,t=.14,i="#f5cf5f",r=5){const s=[];for(let o=0;o<r*2;o++){const l=Math.PI/2+o*Math.PI/r,c=o%2?e:n;s.push([Math.cos(l)*c,Math.sin(l)*c])}const a=tt(he(fe.extrude(s,t),i,{basic:!0}));return a.userData.spinY=.6,a}function Sa(n=.9,e="#fff3c4"){const t=[],s=.8*n,a=.4*n;for(let o=0;o<=28;o++){const l=.863+o/28*(Kn-1.726);t.push([Math.cos(l)*n,Math.sin(l)*n])}for(let o=0;o<=24;o++){const l=Kn-1.25-o/24*(Kn-2.5);t.push([a+Math.cos(l)*s,Math.sin(l)*s])}return tt(he(fe.extrude(t,.18),e,{basic:!0,r:[0,0,.5]}))}function mr(n=.8){return tt(he(fe.sph(n,18,12),"#ffd24a",{basic:!0}),Xt(10,e=>he(fe.cone(.14,.42,4),"#ffb84a",{basic:!0,p:[Math.cos(e)*(n+.28),Math.sin(e)*(n+.28),0],r:[0,0,e-Math.PI/2]})))}function Bi(n=1,e="#f6eef8"){return tt(he(fe.sph(.7),e,{soft:!0,s:[1.3*n,.7*n,.8*n]}),he(fe.sph(.55),e,{soft:!0,p:[-.8*n,-.1*n,0],s:[n,.65*n,.7*n]}),he(fe.sph(.5),e,{soft:!0,p:[.85*n,-.12*n,0],s:[n,.6*n,.7*n]}),he(fe.sph(.45),e,{soft:!0,p:[.2*n,.4*n,0],s:[n,.8*n,.7*n]}))}function zi(n=3,e=2,t="#a9b98a",i=!1){const r=fe.cone(e,n,9);r.translate(0,n/2,0);const s=r.attributes.position;for(let a=0;a<s.count;a++)if(s.getY(a)>.05&&s.getY(a)<n-.05){const o=1+Math.sin(a*1.7)*.08;s.setXYZ(a,s.getX(a)*o,s.getY(a),s.getZ(a)*o)}return r.computeVertexNormals(),tt(he(r,t),i?he(fe.cone(e*.3,n*.3,9),"#f6f0e3",{p:[0,n*.86,0]}):null)}function gr(n,e="#e8cf95"){return tt(he(fe.sph(1,14,8),e,{s:[n,n*.28,n*.6]}))}function vr(n=0,e=2.6){const t=[];for(let a=0;a<6;a++)t.push(he(fe.cyl(.11,.13,e/6+.02,7),"#c4814f",{p:[Math.sin(a*.5+n)*.08*a,e/12+a*e/6,0]}));const i=[Math.sin(2.5+n)*.4,e],r=Xt(6,(a,o)=>{const l=new Ht;l.position.set(i[0],i[1],0),l.rotation.y=a+n;const c=he(fe.sph(1,10,6,0),"#83c47b",{s:[.95,.1,.26],p:[.8,-.18,0],r:[0,0,-.35-o%2*.15]});return l.add(c),l}),s=he(fe.sph(.14,8,6),"#a8754a",{p:[i[0],e-.2,.1]});return tt(t,r,s)}function ba(n=0){return tt(he(fe.cyl(.12,.18,1.1,7),"#c4814f",{p:[0,.55,0]}),he(fe.sph(.7),"#9fb27a",{p:[0,1.4,0],s:[1,.75,1]}),he(fe.sph(.5),"#8fa66a",{p:[-.5,1.2,.2],s:[1,.75,1]}),he(fe.sph(.5),"#8fa66a",{p:[.5,1.25,-.1+n*.01],s:[1,.75,1]}))}function wh(n="#f0b3d6"){return tt(he(fe.cyl(.02,.02,.35,5),"#5c9d5f",{p:[0,.17,0]}),Xt(5,e=>he(fe.sph(.07,6,5),n,{p:[Math.cos(e)*.08,.36,Math.sin(e)*.08],s:[1,.5,1]})),he(fe.sph(.05,6,5),"#f5c84c",{p:[0,.38,0]}))}function Wi(n=1.4,e=1.2,t=1.1,i="#f4ead3",r=!1,s=!1){return tt(he(fe.box(n,t,e),i,{p:[0,t/2,0]}),he(fe.box(n+.12,.1,e+.12),"#dcc9a3",{p:[0,t+.05,0]}),s?he(fe.hemi(Math.min(n,e)*.38),"#f6f0e3",{p:[0,t+.1,0]}):null,he(fe.box(.34,.6,.05),"#b77c45",{p:[-n*.2,.3,e/2+.01]}),he(fe.box(.3,.3,.05),r?"#ffd78a":"#9fc8e8",{basic:r,p:[n*.22,t*.6,e/2+.01]}))}function Eh(){const n=fe.extrude([[-1.1,0],[1.1,0],[0,1.5]],2);return tt(he(n,"#ffffff",{map:bh.stripes("#e8a07a","#f3dcb4"),p:[0,0,0]}),he(fe.box(.5,.9,.05),"#6b3e2a",{p:[0,.45,1.01]}))}function Ir(n=1.6,e=.18){return tt(he(fe.cyl(e,e,n,9),"#b77c45",{r:[0,0,Math.PI/2],p:[0,e,0]}),he(fe.cyl(e*.8,e*.8,.02,9),"#f1c792",{r:[0,0,Math.PI/2],p:[n/2+.01,e,0]}))}function As(n="#e3cf9f"){return tt(he(fe.sph(.32,10,8),n,{s:[1,1.1,.9],p:[0,.3,0]}),he(fe.cyl(.06,.12,.16,7),n,{p:[0,.68,0]}),he(fe.tor(.08,.025),"#b77c45",{r:[Math.PI/2,0,0],p:[0,.62,0]}))}function mc(n=.6){return tt(he(fe.box(n,n,n),"#c98f55",{p:[0,n/2,0]}),he(fe.box(n*1.02,n*.18,n*1.02),"#dba46a",{p:[0,n*.8,0]}))}function gc(n=2.4,e="#e9c98a"){const t=fe.cone(n,n*.9,4);return t.translate(0,n*.45,0),tt(he(t,e,{r:[0,Math.PI/4,0]}))}function dv(n=2.4,e="#e4e0f0"){return tt(he(fe.box(.6,.2,.6),e,{p:[0,.1,0]}),he(fe.cyl(.2,.22,n-.4,10),e,{p:[0,n/2,0]}),he(fe.box(.6,.2,.6),e,{p:[0,n-.1,0]}))}function vc(n=1.2,e="#b3aec6"){return tt(he(fe.box(.6*n,.2*n,.5*n),"#8f89a8",{p:[0,.1*n,0]}),he(fe.cyl(.24*n,.3*n,.6*n,6),e,{p:[0,.5*n,0]}),he(fe.oct(.24*n),e,{p:[0,.98*n,0],s:[1,1.1,1]}))}function pv(n=0,e="#b3aec6"){return tt(Xt(4,(t,i)=>he(i%2?fe.oct(.14):fe.box(.22,.14,.18),e,{p:[Math.cos(t+n)*.28,.08,Math.sin(t+n)*.22],r:[n+i,i*.7,.3*i]})))}function mv(){return tt(he(fe.cyl(.75,.8,.7,16,!0),"#ffffff",{map:bh.bricks("#d3cde9","#c2bbdc","#7a6d98"),side:fv,p:[0,.35,0]}),he(fe.tor(.77,.07,Kn,20),"#c9c3e0",{r:[Math.PI/2,0,0],p:[0,.7,0]}),he(fe.cyl(.72,.72,.02,16),"#1d2350",{basic:!0,p:[0,.4,0]}),he(fe.cyl(.06,.06,1.3,6),"#b77c45",{p:[-.72,1.05,0]}),he(fe.cyl(.06,.06,1.3,6),"#b77c45",{p:[.72,1.05,0]}),he(fe.cyl(.05,.05,1.6,6),"#c98a4d",{r:[0,0,Math.PI/2],p:[0,1.5,0]}),he(fe.extrude([[-1,0],[1,0],[0,.55]],.9),"#e8584e",{p:[0,1.66,0]}))}function gv(){return tt(he(fe.cyl(.14,.11,.22,10),"#c98a4d",{p:[0,.11,0]}),he(fe.tor(.12,.015,Math.PI),"#6b3e2a",{p:[0,.22,0]}))}function vv(n=1){return tt(he(fe.cyl(.015,.015,n,4),"#f1c792",{p:[0,-n/2,0]}))}function oi(n="#d8a86a",e=!1){const t=r=>he(fe.cyl(.07,.06,.8,6),n,{p:[r,.4,0]}),i=tt(he(fe.sph(.5,12,9),n,{s:[1.3,.7,.7],p:[0,1,0]}),he(fe.sph(.3,10,8),n,{p:[.05,1.38,0]}),he(fe.cyl(.12,.15,.7,7),n,{p:[.7,1.3,0],r:[0,0,-.6]}),he(fe.sph(.18,10,8),n,{s:[1.5,.9,.9],p:[.98,1.62,0]}),he(fe.sph(.035,6,5),"#2a1a10",{basic:!0,p:[1.02,1.7,.13]}),he(fe.sph(.035,6,5),"#2a1a10",{basic:!0,p:[1.02,1.7,-.13]}),[t(.4),t(-.4)].flatMap(r=>{const s=r.clone();return s.position.z=.18,r.position.z=-.18,[r,s]}),e?[he(fe.box(.36,.3,.8),"#e8584e",{p:[-.3,1.34,0]}),As("#e3cf9f")]:he(fe.box(.5,.06,.62),"#e8584e",{p:[-.25,1.36,0]}));if(e){const r=i.children[i.children.length-1];r.position.set(.25,1.1,0),r.scale.setScalar(.7)}return i}function as(){return tt(Xt(6,n=>he(fe.sph(.2,8,6),"#f6f0e3",{soft:!0,p:[Math.cos(n)*.18,.46+Math.sin(n*2)*.04,Math.sin(n)*.14]})),he(fe.sph(.26,10,8),"#f6f0e3",{soft:!0,p:[0,.48,0]}),he(fe.sph(.13,8,6),"#5b4a4a",{p:[.32,.56,0],s:[1.2,1,.9]}),Xt(4,(n,e)=>he(fe.cyl(.04,.04,.3,5),"#5b4a4a",{p:[e<2?.14:-.14,.15,e%2?.1:-.1]})))}function wa(n="#f5cf5f"){return tt(he(fe.sph(.16,10,8),n,{p:[0,.2,0],s:[1.2,1,1]}),he(fe.sph(.1,8,6),n,{p:[.16,.34,0]}),he(fe.cone(.04,.12,5),"#e8904a",{p:[.3,.33,0],r:[0,0,-Math.PI/2]}))}function _c(n="#6f9fd8",e="#c9ddf3"){const t=new Ht;t.add(he(fe.cone(.4,1.2,8),n,{r:[0,0,Math.PI/2],p:[-.5,0,0],s:[1,1,.5]})),t.add(he(fe.sph(.45,10,6),n,{s:[.4,.2,1.2],p:[-1.1,.15,0],r:[0,0,.5]})),t.position.set(-1.8,.1,0),t.name="tail";const i=tt(he(fe.sph(1,20,14),n,{s:[2,1.05,1.1]}),he(fe.sph(.95,16,10),e,{s:[1.8,.5,.95],p:[.1,-.55,0]}),he(fe.sph(.12,8,6),"#2a1a10",{basic:!0,p:[1.35,.15,.62]}),he(fe.sph(.12,8,6),"#2a1a10",{basic:!0,p:[1.35,.15,-.62]}),he(fe.sph(.35,8,6),n,{s:[1,.2,.6],p:[.3,-.5,.95],r:[.6,0,0]}),t);return i.userData.tail=t,i}function yo(n,e,t){const i=[[-n/2-.25,e],[-n/2+.35,0],[n/2-.35,0],[n/2+.3,e]];return fe.extrude(i,t)}function _v(n=2.6,e="#f6f0e3"){return tt(he(yo(n,.55,.9),"#c98a4d"),he(fe.box(n*.95,.06,.92),"#8a5d33",{p:[0,.56,0]}),he(fe.cyl(.05,.05,2.1,6),"#8a5d33",{p:[0,1.6,0]}),he(fe.box(.06,1.3,1.2),e,{soft:!0,p:[.05,1.75,0],r:[0,Math.PI/2,0],s:[1,1,1]}),he(fe.box(.26,.26,.26),"#dba46a",{p:[-.8,.72,.15]}),he(fe.box(.26,.26,.26),"#dba46a",{p:[.75,.72,-.1]}),As("#e3cf9f").translateX(-.4).translateY(.5))}function os(n=!0){return n?tt(he(yo(4.2,1.1,1.7),"#c98a4d"),he(fe.box(4.2,.08,1.72),"#8a5d33",{p:[0,.8,0]}),he(fe.box(2.2,.9,1.3),"#e2a574",{p:[0,1.55,0]}),he(fe.extrude([[-1.25,0],[1.25,0],[0,.6]],1.4),"#b77c45",{p:[0,2,0]}),Xt(3,(e,t)=>he(fe.box(.26,.26,.05),"#ffd78a",{basic:!0,p:[-.7+t*.7,1.6,.66]}))):tt(he(yo(4,.55,1.6),"#c98a4d"),Xt(7,(e,t)=>he(fe.box(.12,.9,.12),"#b77c45",{p:[-1.6+t*.53,.95,.78]})),Xt(7,(e,t)=>he(fe.box(.12,.9,.12),"#b77c45",{p:[-1.6+t*.53,.95,-.78]})),he(fe.box(3.4,.1,.1),"#b77c45",{p:[0,1.4,.78]}))}function ls(n=1,e="#61b4d2"){return tt(he(fe.sph(.6,12,8),e,{s:[1.4*n,.55*n,.7*n],p:[0,.05*n,0]}),he(fe.sph(.22,8,6),"#f3f6ea",{soft:!0,s:[1.6*n,.5*n,.9*n],p:[.2*n,.34*n,0]}))}function xv(){const n=Xt(9,(e,t)=>he(fe.sph(.5,10,6),t%2?"#5c9d5f":"#83c47b",{s:[1,.12,.8],p:[Math.cos(e)*(.5+t%3*.25),1.05+t%3*.12,Math.sin(e)*.5],r:[.2*Math.sin(e),e,.2]}));return tt(he(fe.cyl(.05,.07,1.1,6),"#7a9c4a",{p:[-.6,.55,0]}),he(fe.cyl(.05,.07,1.1,6),"#7a9c4a",{p:[.6,.55,.2]}),he(fe.box(1.4,.05,.05),"#7a9c4a",{p:[0,1.05,.1]}),n,he(fe.sph(.16,8,6),"#d8e07a",{s:[1,1.4,1],p:[.3,.75,.3]}),he(fe.sph(.14,8,6),"#d8e07a",{s:[1,1.4,1],p:[-.3,.8,-.2]}))}function yv(n=2){return tt(he(fe.tube([[0,0,0],[.15,n*.3,0],[-.12,n*.65,0],[.1,n,0]],.06,16),"#4f9a7a"))}function yr(n=1,e=!1){const t=e?["#bfe8f5","#e9f7fb","#9fd8c8"]:["#f07a3a","#ffb84a","#ffe38a"],i=tt(Xt(5,(r,s)=>he(fe.cone(.28*n,.9*n,7),t[0],{basic:!0,p:[Math.cos(r)*.28*n,.45*n,Math.sin(r)*.28*n],s:[1,.8+s%3*.25,1]})),he(fe.cone(.4*n,1.4*n,8),t[1],{basic:!0,p:[0,.7*n,0]}),he(fe.cone(.2*n,.8*n,7),t[2],{basic:!0,p:[0,.5*n,.18*n]}));return i.userData.flicker=!0,i}function Mv(){return tt(Xt(8,(n,e)=>{const t=Yn(40+e,.32);return t.position.set(Math.cos(n)*.72,0,Math.sin(n)*.72),t}),Xt(3,n=>{const e=Ir(1.1,.1);return e.rotation.y=n,e}),yr(.75))}function xc(n=60,e=5,t=5){const i=new Ht,r=new Zt({color:"#cfe4f5",transparent:!0,opacity:.8}),s=new Si(.025,.35,.025);for(let a=0;a<n;a++){const o=new xt(s,r);o.userData.noInk=!0,o.position.set((Math.random()-.5)*e*2,Math.random()*t,(Math.random()-.5)*e*1.4),i.add(o)}return i.userData.rain=t,i}const Sv={"nuh-build":{ground:"hill",mood:{before:"day",after:"storm"},build(n){n(zi(2.6,2.2,"#a9c98a"),-3.6,-3.4),n(zi(2,1.8,"#b7d49a"),3.8,-3.6),n(_o(11),-4.6,.8,{s:[.8,1.2,.8]}),n(xo(12),4.6,.2,{s:[.8,1.2,.8]}),n(os(!1),0,-.6,{show:"before"});for(let t=0;t<4;t++)n(Ir(1.4,.09),2.6,2.2-t*.02,{y:t*.17,ry:.3,show:"before"});n(os(!0),0,-.8,{show:"after"}),[[as,-1.6,2.2],[as,-1,2.5],[oi,1.4,2.6,.55],[oi,2.4,2.9,.55],[wa,-2.6,1.6],[wa,-2.2,1.9]].forEach(([t,i,r,s=1],a)=>n(t(),i,r,{s,ry:.3,show:"after",delay:.15*a})),n(Bi(1.4,"#8d8fa8"),-2,-3,{y:4.4,show:"after"}),n(Bi(1.1,"#8d8fa8"),2.4,-2.6,{y:4.8,show:"after"}),n(mr(.6),3.4,-3,{y:4.6,show:"before"})}},"nuh-flood":{ground:{before:"storm",after:"sea"},mood:{before:"storm",after:"day"},build(n){n(os(!0),0,0,{y:.1,show:"before",rock:1});for(let e=0;e<9;e++)n(ls(1.6+e%3*.4,"#4c7f98"),-4.5+e%5*2.2,-2.5+Math.floor(e/5)*4.6,{bob:1,show:"before"});n(Bi(1.6,"#6b6d8c"),-2.4,-2.6,{y:4.6,show:"before"}),n(Bi(1.3,"#6b6d8c"),2.6,-2.2,{y:5,show:"before"}),n(xc(90,5,5),0,0,{show:"before"}),n(zi(2.4,2.8,"#a9c98a"),0,-1.2,{show:"after"}),n(os(!0),0,-1.3,{y:2.2,s:.7,show:"after",rz:.06}),n(mr(.7),3.6,-3,{y:5,show:"after"});for(let e=0;e<4;e++)n(ls(.8,"#61b4d2"),-4+e*2.7,3,{bob:1,show:"after"});n(wa("#f6f0e3"),-2.8,1.5,{y:2.8,show:"after",bob:1})}},"ibrahim-sky":{ground:"hillNight",mood:{before:"night",after:"dusk"},build(n){n(zi(2.2,1.8,"#6f9a86"),-3.4,-3.6),n(zi(2.8,2.1,"#7aa892"),3,-3.8),n(Wi(1.3,1.1,1,"#d8cbb0",!0,!0),-1.6,-.6),n(Wi(1.1,1,.9,"#cbbfa6",!0),.2,-1.4),n(vr(1,2.2),2.2,.4),n(ba(2),-3.6,1.2),n(pr(.5,.2),.6,-2.6,{y:4.2,show:"before",bob:1}),n(pr(.4,.16),-2.6,-2.4,{y:2.2,show:"after"}),n(Sa(.8),0,-2.8,{y:4.2,show:"after"}),n(mr(.75),2.8,-2.6,{y:2.6,show:"after"})}},"ibrahim-idols":{ground:"stone",mood:{before:"day",after:"day"},build(n){for(let e=0;e<5;e++)n(dv(2.8),-4+e*2,-3.4);n(vc(2.1),0,-1.4),[[-2.6,-.8],[-1.4,.4],[1.4,.4],[2.6,-.8]].forEach(([e,t],i)=>{n(vc(1.1),e,t,{show:"before"}),n(pv(i),e,t,{show:"after"})}),n(mc(.5),3.8,2),n(As(),-3.8,2)}},"ibrahim-fire":{ground:"desert",mood:{before:"dusk",after:"night"},build(n){n(gr(1.7),-3.8,-3.6),n(gr(1.9),3.6,-3.8);for(let e=0;e<10;e++)n(Ir(1.8,.14),Math.cos(e)*.8,Math.sin(e)*.6,{y:e%3*.16,ry:e*.63});n(yr(2.2),0,0,{y:.3,show:"before"}),n(yr(1.1),-1.3,.8,{show:"before"}),n(yr(1.2),1.3,.6,{show:"before"}),n(yr(2,!0),0,0,{y:.3,show:"after"});for(let e=0;e<12;e++){const t=e/12*Math.PI*2;n(wh(e%2?"#f0b3d6":"#fffdf6"),Math.cos(t)*2.4,Math.sin(t)*1.8,{s:1.6,show:"after",delay:e*.05})}}},"yusuf-dream":{ground:"hillNight",mood:{before:"night",after:"night"},build(n){n(zi(2.4,1.9,"#6f9a86"),-3.6,-3.8),n(Wi(1.8,1.4,1.2,"#e2d4b6",!0),-.6,-.8),n(Eh(),2.6,-1.2,{s:.7,ry:-.4}),n(ba(1),-3.2,.8),n(ba(2),3.6,1.4,{s:.8}),n(as(),1.2,2,{ry:.5}),n(as(),2,2.4,{ry:-.3});for(let e=0;e<11;e++){const t=Math.PI*(.1+e/10*.8);n(pr(.28,.12),-Math.cos(t)*4.2,-2.8,{y:3.2+Math.sin(t)*1.6,bow:1,bob:1})}n(mr(.6),-1.1,-3,{y:5.8,bow:1}),n(Sa(.55),1.1,-3,{y:5.8,bow:1})}},"yusuf-well":{ground:"desert",mood:{before:"day",after:"day"},build(n){n(gr(1.9),-3.6,-3.8),n(gr(1.7),3.6,-3.6),n(gr(1.2),4.3,1.8),n(mv(),0,-.4),n(Yn(3,.8),-2.8,1.4),n(Yn(4,.6),2.6,-1.6),n(vr(2,2.4),-3.8,-.6),n(gv(),0,-.4,{y:1,show:"after"}),n(vv(.45),0,-.4,{y:1.5,show:"after"}),n(oi("#d8a86a",!0),2.4,1.4,{ry:Math.PI,s:.8,show:"after",delay:.1}),n(oi("#c99a5e",!0),3.9,.4,{ry:Math.PI,s:.8,show:"after",delay:.3}),n(oi("#e0b27a"),-2.2,2.4,{ry:.2,s:.8,show:"after",delay:.5}),n(mc(.45),1.2,2.6,{show:"after",delay:.6})}},"yusuf-egypt":{ground:"desert",mood:{before:"day",after:"dusk"},build(n){n(gc(2.2),-3.4,-3.6),n(gc(1.6),-1,-4.2),n(Wi(2.4,1.6,1.6,"#f4ead3",!1,!0),1.6,-1.8);for(let e=0;e<5;e++)n(As(),.2+e*.6,-.4+e%2*.3);n(vr(1,2.6),4,-.6),n(vr(3,2.2),-4,.8),n(oi("#d8a86a",!0),-1.8,1.8,{ry:.3,s:.8}),n(oi("#c99a5e",!0),-3,2.4,{ry:.3,s:.8,show:"after"});for(let e=0;e<11;e++){const t=Math.PI*(.1+e/10*.8);n(pr(.24,.1),-Math.cos(t)*4,-3,{y:3.8+Math.sin(t)*1.2,show:"after",delay:e*.06,bob:1})}n(mr(.5),-.9,-3.2,{y:5.8,show:"after"}),n(Sa(.5),.9,-3.2,{y:5.8,show:"after"})}},"yunus-ship":{ground:"storm",mood:{before:"storm",after:"storm"},build(n){n(_v(2.6),0,0,{y:.1,rock:1});for(let e=0;e<9;e++)n(ls(1.5+e%3*.4,"#4c7f98"),-4.5+e%5*2.2,-2.5+Math.floor(e/5)*4.6,{bob:1});n(Bi(1.6,"#6b6d8c"),-2.4,-2.6,{y:4.6}),n(Bi(1.3,"#6b6d8c"),2.6,-2.2,{y:5}),n(xc(80,5,5),0,0),n(_c("#7fa8e0","#d3e3f6"),-2.2,2.2,{y:.1,ry:.4,show:"after",bob:1})}},"yunus-whale":{ground:"seabed",mood:{before:"deep",after:"night"},build(n){n(_c("#6f9fd8","#c9ddf3"),0,-.4,{y:1.6,ry:.15,bob:1,swim:1});for(let e=0;e<8;e++)n(yv(1.4+e%3*.6),-4.4+e*1.25,-2.8+e%2*5,{sway:1});n(Yn(7,.9),-3.4,1.2),n(Yn(8,.7),3.2,2);for(let e=0;e<9;e++)n(pr(.18,.08,.06,"#fff3c4"),(e-4)*.5,-.4,{y:2.8+e*.35,show:"after",delay:e*.08,rise:1})}},"yunus-shore":{ground:"beach",mood:{before:"day",after:"dusk"},build(n){for(let e=0;e<4;e++)n(ls(.9,"#61b4d2"),-4+e*2.6,-3.4,{bob:1});n(Yn(5,.7),3.4,1.2),n(vr(4,2.2),4,-.4),n(xv(),-.4,.8,{s:1.4,show:"after"}),[[-3.8,2.4],[-2.6,2.9],[-3.4,3.6]].forEach(([e,t],i)=>n(Wi(1,.9,.8,"#f4ead3",!0,i===1),e,t,{show:"after",delay:.3+i*.15}))}}},bv="#4a2c1a",wv=`<defs><filter id="boil" x="-5%" y="-5%" width="110%" height="110%">
  <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="1"/>
  <feDisplacementMap in="SourceGraphic" scale="3.5" xChannelSelector="R" yChannelSelector="G"/></filter></defs>`,cs=(n,e)=>`<path d="${n}" stroke-width="15"/><path d="${n}" stroke="${e}" stroke-width="8"/>`,hs=(n,e,t)=>`<circle cx="${n}" cy="${e}" r="7.5" fill="${t}" stroke-width="3.5"/>`;function Th(n,e,t=1){const i=r=>`<ellipse cx="${n+(r+1)*t}" cy="${e+.5}" rx="${3.1*t}" ry="${4.3*t}" fill="#2a1a10" stroke="none"/>`;return`${i(-13)}${i(13)}
    <ellipse cx="${n-23*t}" cy="${e+15*t}" rx="${7*t}" ry="${4*t}" fill="#f4a6b8" stroke="none" opacity=".85"/>
    <ellipse cx="${n+23*t}" cy="${e+15*t}" rx="${7*t}" ry="${4*t}" fill="#f4a6b8" stroke="none" opacity=".85"/>
    <path d="M${n-7*t} ${e+17*t} Q${n} ${e+24*t} ${n+7*t} ${e+17*t}" stroke-width="3"/>`}function us({skin:n,top:e,legs:t,sleeve:i=e,feet:r="#f7efe0"}){return`
    <path d="M36 204 Q100 176 164 204 Q170 230 100 232 Q30 230 36 204 Z" fill="${t}"/>
    <ellipse cx="62" cy="224" rx="13" ry="7" fill="${r}"/>
    <ellipse cx="138" cy="224" rx="13" ry="7" fill="${r}"/>
    <path d="M60 136 Q100 120 140 136 L152 206 Q100 216 48 206 Z" fill="${e}"/>
    <g class="poseA">${cs("M64 144 Q56 176 86 194",i)}${cs("M136 144 Q144 176 114 194",i)}${hs(90,195,n)}${hs(110,195,n)}</g>
    <g class="poseB">${cs("M64 144 Q56 176 86 194",i)}${hs(90,195,n)}${cs("M136 144 Q160 132 164 104",i)}
      <path d="M164 104 L162 88 M164 104 L172 92 M164 104 L154 94"/>${hs(164,104,n)}</g>`}function yc({skin:n,scarf:e,scarfDark:t,cy:i=86}){return`
    <path d="M56 128 Q100 150 144 128 L150 150 Q100 170 50 150 Z" fill="${e}"/>
    <path d="M50 ${i+6} Q46 ${i-52} 100 ${i-54} Q154 ${i-52} 150 ${i+6} Q152 ${i+44} 124 ${i+54} L76 ${i+54} Q48 ${i+44} 50 ${i+6} Z" fill="${e}"/>
    <path d="M66 ${i-30} Q100 ${i-46} 134 ${i-30}" stroke="${t}" stroke-width="3"/>
    <ellipse cx="100" cy="${i+6}" rx="32" ry="36" fill="${n}"/>
    ${Th(100,i+2)}`}function Mc({skin:n,kufi:e,band:t,hair:i,beard:r,cy:s=86}){return`
    <circle cx="61" cy="${s+4}" r="9" fill="${n}"/><circle cx="139" cy="${s+4}" r="9" fill="${n}"/>
    <path d="M60 ${s} Q58 ${s-44} 100 ${s-46} Q142 ${s-44} 140 ${s} Q142 ${s+44} 100 ${s+46} Q58 ${s+44} 60 ${s} Z" fill="${n}"/>
    <path d="M62 ${s-14} Q62 ${s-32} 70 ${s-30} L130 ${s-30} Q138 ${s-32} 138 ${s-14} Q134 ${s-22} 128 ${s-22} L72 ${s-22} Q66 ${s-22} 62 ${s-14} Z" fill="${i}"/>
    ${r?`<path d="M64 ${s+8} Q66 ${s+50} 100 ${s+54} Q134 ${s+50} 136 ${s+8} Q126 ${s+30} 100 ${s+30} Q74 ${s+30} 64 ${s+8} Z" fill="${r}"/>`:""}
    <path d="M62 ${s-26} Q60 ${s-58} 100 ${s-60} Q140 ${s-58} 138 ${s-26} Z" fill="${e}"/>
    <path d="M62 ${s-30} L138 ${s-30}" stroke="${t}" stroke-width="7"/>
    <path d="M62 ${s-26} L138 ${s-26}"/>
    ${Th(100,s+2)}`}function fs(n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="200" height="240">${wv}
  <g filter="url(#boil)" fill="none" stroke="${bv}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">${n}</g></svg>`}const Wn={baba:fs(us({skin:"#c68a5e",top:"#e9e2cf",legs:"#b9b2a0",feet:"#8a5d33"})+Mc({skin:"#c68a5e",kufi:"#ffffff",band:"#7fb7c9",hair:"#3b2a1e",beard:"#3b2a1e"})),mama:fs(us({skin:"#e0a878",top:"#8f7bd6",legs:"#6e5cb8",feet:"#f7efe0"})+yc({skin:"#e0a878",scarf:"#f0b3d6",scarfDark:"#d58ab5"})),girl:fs(us({skin:"#b07650",top:"#f5cf5f",legs:"#7fb7c9",feet:"#f7efe0"})+yc({skin:"#b07650",scarf:"#78c4dc",scarfDark:"#4f9fbd"})),boy:fs(us({skin:"#d79a6b",top:"#83c47b",legs:"#5d6e9e",feet:"#f7efe0"})+Mc({skin:"#d79a6b",kufi:"#f3e3b5",band:"#e8584e",hair:"#4a2c1a"}))},Ev=7,$o=3,Mo=$u.degToRad(30),Ea=1/Math.cos(Mo),Sc=100,bc={night:{sky:10134783,ground:3814998,hemi:1.55,sun:13160703,sunI:.8},camp:{sky:9411312,ground:3814998,hemi:1.35,sun:12109055,sunI:.55},deep:{sky:9083112,ground:3160168,hemi:1.5,sun:11583743,sunI:.6},dusk:{sky:16769232,ground:8018552,hemi:1.8,sun:16763040,sunI:1.1},day:{sky:16777215,ground:15985368,hemi:1.9,sun:16777215,sunI:1.3},storm:{sky:13159648,ground:5263466,hemi:1.6,sun:14212336,sunI:.6}};async function Tv(n,e,t){const i=new Image;i.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n),await i.decode();const r=document.createElement("canvas");return r.width=e,r.height=t,r.getContext("2d").drawImage(i,0,0,e,t),r}function $n(n,e,t,i){return Promise.all(Array.from({length:$o},(r,s)=>{let a=n.replace(/seed="\d+"/,`seed="${s*17+3}"`);return a=a.replace("</svg>",`<style>.pose${i==="A"?"B":"A"}{display:none}</style></svg>`),Tv(a,e,t).then(o=>Pn(o))}))}const Ta=n=>Array.from({length:$o},(e,t)=>Pn(n(t)));function wc(n,e=6.2,t=1.6){const i=new Ht,r=72,s=[];for(let v=0;v<r;v++){const L=v/r*Math.PI*2,A=1+.025*Math.sin(L*5+1)+.015*Math.sin(L*11);s.push([Math.cos(L)*e*A,Math.sin(L)*e*A*.82])}const a=Pn(Sh(n,2*e+1,40,n.length)),o=new Fs(s.map(([v,L])=>new ve(v,-L))),l=new Bo(o),c=l.attributes.position,h=l.attributes.uv,u=2*e+1;for(let v=0;v<c.count;v++)h.setXY(v,(c.getX(v)+u/2)/u,(c.getY(v)+u/2)/u);const f=new xt(l,new Zt({map:a}));f.rotation.x=-Math.PI/2;const d=[],g=[],_=[];let m=0;for(let v=0;v<=r;v++){const[L,A]=s[v%r];if(v){const[T,C]=s[v-1];m+=Math.hypot(L-T,A-C)}if(d.push(L,0,A,L,-t,A),g.push(m/8,1,m/8,0),v){const T=(v-1)*2;_.push(T,T+1,T+2,T+1,T+3,T+2)}}const p=new It;p.setAttribute("position",new et(d,3)),p.setAttribute("uv",new et(g,2)),p.setIndex(_),p.computeVertexNormals();const S=Pn(av(n),!0),x=new xt(p,new Zt({map:S,side:Ct}));return i.add(f,x),i.userData={top:f,wall:x,R:e},i}async function Av(n){const e=new rh,t=new Is(-1,1,1,-1,.1,400),i=Jg(n),r=[],s=[],a={},o=U=>a[U]||(a[U]=Pn(sv(U))),l=new zg(16777215,15985368,1.9),c=new Wg(16777215,1.3);c.position.set(-9,8,6),e.add(l,c,c.target);function h(U){const F=bc[U]||bc.night;l.color.set(F.sky),l.groundColor.set(F.ground),l.intensity=F.hemi,c.color.set(F.sun),c.intensity=F.sunI,e.background=o(U==="camp"?"night":U)}const u=new Zt({map:Pn(qg()),transparent:!0,depthWrite:!1}),f=new In(1,1).rotateX(-Math.PI/2);function d(U,F,X,k,oe=k*.5){const Fe=new xt(f,u);return Fe.position.set(F,.02,X),Fe.scale.set(k,1,oe),Fe.renderOrder=1,Fe.userData.noInk=!0,U.add(Fe),Fe}function g(U,F,X,k,oe,Fe,le,ye){const ke=ye||new Zt({map:F[0],alphaTest:.5,alphaToCoverage:!0,side:Ct});ye||r.push({mat:ke,frames:F});const Ve=new In(X,k*Ea);Ve.translate(0,k*Ea/2,0);const me=new xt(Ve,ke);return me.position.set(oe,Fe,le),me.userData.sprite=!0,me.userData.colorMap=()=>ke.map,U.add(me),s.push(me),me}const _=new Ht;e.add(_),_.add(wc("camp",6.4,1.8));const m=Mv();_.add(m);const p=new Vg(16754784,9,9,1.2);p.position.set(0,1.2,.2),_.add(p);const S=new xt(new In(5.5,4.4).rotateX(-Math.PI/2),new Zt({map:Pn(ov()),transparent:!0,depthWrite:!1,blending:Ra}));S.position.y=.03,S.userData.noInk=!0,S.renderOrder=2,_.add(S);{const U=(X,k,oe,Fe=0,le=1)=>(X.position.set(k,0,oe),X.rotation.y=Fe,typeof le=="number"?X.scale.setScalar(le):X.scale.set(...le),_.add(X),X);U(Eh(),-3.6,-2.6,.35,.8),d(_,-3.6,-2.4,3.2),U(_o(101),3.9,-2.8,0,[.9,1.3,.9]),d(_,3.9,-2.8,1.6),U(xo(102),5,-.6,0,[.8,1.1,.8]),d(_,5,-.6,1.8),U(xo(103),-5.1,-.2,0,[.75,1,.75]),d(_,-5.1,-.2,1.6),U(_o(104),1.2,-4,0,[.8,1.2,.8]),U(Yn(9,.7),-4.3,2.4),U(Yn(10,.5),4.2,2.6),U(Ir(2,.17),-1.7,-1.35,.5),U(Ir(2,.17),1.7,-1.35,-.5);const F=Wi(.3,.3,.4,"#f5cf5f",!0);U(F,2.9,1.6,.4,.8);for(let X=0;X<10;X++){const k=X*2.4;U(wh(X%2?"#fffdf6":"#c9b5ee"),Math.cos(k)*(3.2+X%3*.7),1.6+Math.sin(k)*1.4,0,1.2)}}const x=300,v=360,[L,A,T,C,w,y,P,q]=await Promise.all([$n(Wn.baba,x,v,"A"),$n(Wn.baba,x,v,"B"),$n(Wn.mama,x,v,"A"),$n(Wn.mama,x,v,"B"),$n(Wn.girl,x,v,"A"),$n(Wn.girl,x,v,"B"),$n(Wn.boy,x,v,"A"),$n(Wn.boy,x,v,"B")]),z={};function j(U,F,X,k,oe,Fe,le,ye){const ke=new Zt({map:F[0],alphaTest:.5,alphaToCoverage:!0,side:Ct}),Ve=g(_,null,k,oe,Fe,0,le,ke);d(_,Fe,le+.05,k*.9),z[U]={m:Ve,mat:ke,A:F,B:X,talk:!1,face:ye,x:Fe,z:le,h:oe}}j("baba",L,A,1.35,1.62,-2.2,-1.2,1),j("mama",T,C,1.3,1.56,-.75,-1.75,1),j("girl",w,y,1.05,1.26,.8,-1.75,-1),j("boy",P,q,1.05,1.26,2.2,-1.2,-1),z.baba.m.position.y=z.mama.m.position.y=.12,z.girl.m.position.y=z.boy.m.position.y=.12;const ne=g(_,Ta(U=>pc(U,"dots")),.8,.62,0,0,0),J=g(_,Ta(U=>pc(U,"think")),.8,.62,0,0,0);ne.visible=J.visible=!1;const se=new Ht;se.position.x=Sc,e.add(se);let G=null;function Me(U){G&&(se.remove(G.root),G=null);const F=Sv[U],X=new Ht;se.add(X);const k=typeof F.ground=="string"?{before:F.ground,after:F.ground}:F.ground,oe=wc(k.before);X.add(oe);const Fe={[k.before]:oe.userData.top.material.map},le=[];F.build((ye,ke,Ve,me={})=>{ye.position.set(ke,me.y||0,Ve),me.ry&&(ye.rotation.y=me.ry),me.rz&&(ye.rotation.z=me.rz);const je=me.s==null?[1,1,1]:typeof me.s=="number"?[me.s,me.s,me.s]:me.s;ye.scale.set(...je),X.add(ye);let $e=null;if(!me.y&&!ye.userData.rain){const at=new sr().setFromObject(ye),N=Math.max(.6,(at.max.x-at.min.x)*.9);N<5&&($e=d(X,ke,Ve+.05,N))}return le.push({obj:ye,sh:$e,show:me.show,base:je,y:me.y||0,x:ke,z:Ve,delay:me.delay||0,bob:me.bob,rock:me.rock,bow:me.bow,sway:me.sway,rise:me.rise,swim:me.swim,k:le.length,t:1,vis:!0}),ye}),G={key:U,def:F,root:X,items:le,isle:oe,grounds:k,tops:Fe,state:null},be("before",!0)}function be(U,F=!1){var k;if(!G)return;G.state=U,G.stateT=0;const X=G.grounds[U];(k=G.tops)[X]||(k[X]=Pn(Sh(X,2*6.2+1,40,X.length))),G.isle.userData.top.material.map=G.tops[X];for(const oe of G.items){const Fe=!oe.show||oe.show===U;Fe===oe.vis&&!F||(oe.vis=Fe,oe.t=F?1:0)}Ge(0),V==="stage"&&h(G.def.mood[U])}const Ue=U=>1+2.7*(U-1)**3+1.7*(U-1)**2;function Ge(U){for(const F of G.items){F.t=Math.min(1,F.t+U/(F.vis?.55:.3));let X;if(F.vis){const oe=Math.max(0,Math.min(1,(F.t*.55-F.delay)/.55+(F.t>=1?1:0)));X=F.t>=1?1:Ue(oe)}else X=1-F.t;const k=Math.max(1e-4,X);F.obj.visible=k>.001,F.obj.scale.set(F.base[0]*k,F.base[1]*k,F.base[2]*k),F.sh&&(F.sh.visible=F.obj.visible&&F.vis)}}const H={aspect:1.6,W:1280,H:800,inset:{right:0,bottom:0},zoom:1},I={camp:{x:0,y:.7,z:-.6,needW:4.4,needH:2.7},stage:{x:Sc,y:1.9,z:-.8,needW:6.6,needH:4.9}};let V="camp";function $(){const U=I[V],F=Math.max(.3,(H.W-H.inset.right)/H.W),X=Math.max(.3,(H.H-H.inset.bottom)/H.H),k=Math.max(U.needH/X,U.needW/(H.aspect*F))*H.zoom,oe=k*H.aspect,Fe=(1-F)*oe,le=-(1-X)*k;Object.assign(t,{left:-oe+Fe,right:oe+Fe,top:k+le,bottom:-k+le}),t.updateProjectionMatrix();const ye=80,ke=new D(U.x,U.y,U.z);t.position.set(ke.x,ke.y+Math.sin(Mo)*ye,ke.z+Math.cos(Mo)*ye),t.lookAt(ke)}function K(U,F){H.W=U,H.H=F,H.aspect=U/F,$()}function re(U){H.inset=U,$()}function ue(U,F,X="before"){V=U,_.visible=U==="camp",se.visible=U==="stage",U==="stage"?((!G||G.key!==F)&&Me(F),G.state!==X&&be(X),h(G.def.mood[G.state])):h("camp"),$()}let Ee=[];function ge(U,F="baba"){for(const k of Object.values(z))k.talk=!1;Ee=U==="parent"?F==="both"?["baba","mama"]:[F]:U==="child"?["girl","boy"]:U==="all"?["baba","mama","girl","boy"]:[];for(const k of Ee)z[k].talk=!0;ne.visible=U==="parent"||U==="all",J.visible=U==="child";const X=U==="parent"?Ee[0]:U==="child"?"girl":U==="all"?"mama":null;if(X){const k=z[X],oe=U==="child"?J:ne;oe.userData.anchor=k}}const Q=[],ae=Ta(U=>lv(U)),R=new Zt({map:ae[0],alphaTest:.5,side:Ct});r.push({mat:R,frames:ae});const Se=new Zt({color:"#ffc46a"}),pe=new xi(.04,5,4),Te=[];function _e(U=10){const F=V==="camp"?_:se,X=V==="camp"?1.2:2;for(let k=0;k<U;k++){const oe=k/U*Math.PI*2+Math.random(),Fe=g(F,null,.36,.36,0,X,0,R);Q.push({m:Fe,parent:F,vx:Math.cos(oe)*2.6,vz:Math.sin(oe)*1.2,vy:3+Math.random()*1.6,t:0})}}let Ae=0,Re=-1,E=0,M=0;function W(U){U=Math.max(0,U),Ae+=U;const F=Math.max(0,Math.floor(Ae*Ev))%$o;if(F!==Re){Re=F,E=F*7.31;for(const X of r)X.mat.map=X.frames[F]}if(_.visible){m.children[m.children.length-1].scale.set(1+Math.sin(Ae*13)*.05,1+Math.sin(Ae*9.3)*.1+Math.sin(Ae*21)*.04,1),p.intensity=9+Math.sin(Ae*11)*1.2+Math.sin(Ae*17)*.8,S.material.opacity=.85+Math.sin(Ae*11)*.1;for(const k of Object.values(z)){const oe=k.talk&&Math.floor(Ae*2.2+k.x)%2===0;k.mat.map=(k.talk?k.B:k.A)[F];const Fe=1+Math.sin(Ae*3+k.x)*.018+(oe?Math.abs(Math.sin(Ae*9))*.02:0);k.m.scale.set(k.face/Fe,Fe,1)}for(const k of[ne,J])if(k.visible&&k.userData.anchor){const oe=k.userData.anchor;k.position.set(oe.x+.55,oe.h*Ea*.95+.2+Math.sin(Ae*4)*.05,oe.z+.1)}if(M-=U,M<=0){M=.18;const k=new xt(pe,Se);k.userData.noInk=!0,k.position.set((Math.random()-.5)*.5,.9,(Math.random()-.5)*.4),_.add(k),Te.push({e:k,t:0,vx:(Math.random()-.5)*.4})}}for(let X=Te.length-1;X>=0;X--){const k=Te[X];k.t+=U,k.e.position.y+=U*1.1,k.e.position.x+=Math.sin(Ae*3+X)*U*.3+k.vx*U,k.e.scale.setScalar(Math.max(.01,1-k.t/2)),k.t>2&&(_.remove(k.e),Te.splice(X,1))}if(se.visible&&G){Ge(U);for(const X of G.items){const k=X.obj;if(k.userData.flicker&&(k.scale.y=X.base[1]*(X.vis?1:0)*(1+Math.sin(Ae*11+X.k)*.08)||k.scale.y),X.bob&&(k.position.y=X.y+Math.sin(Ae*1.6+X.k)*.12),X.rock&&(k.rotation.z=Math.sin(Ae*1.4)*.12,k.position.y=X.y+Math.sin(Ae*2)*.1),X.sway&&(k.rotation.z=Math.sin(Ae*1.2+X.k)*.12),X.swim&&k.userData.tail&&(k.userData.tail.rotation.y=Math.sin(Ae*2)*.3),X.rise&&X.vis&&(k.position.y=X.y+(Ae*.5+X.k*.13)%2),X.bow){const oe=G.state==="after"?1:0;X.bowK=(X.bowK||0)+(oe-(X.bowK||0))*Math.min(1,U*2),k.rotation.z=X.bowK*.35,k.position.y=X.y-X.bowK*.6+Math.sin(Ae*1.6+X.k)*.08}if(k.userData.spinY&&(k.rotation.y=Math.sin(Ae*k.userData.spinY+X.k)*.5),k.userData.rain)for(const oe of k.children)oe.position.y-=U*7,oe.position.y<0&&(oe.position.y+=k.userData.rain)}}for(let X=Q.length-1;X>=0;X--){const k=Q[X];k.t+=U,k.vy-=8*U,k.m.position.x+=k.vx*U,k.m.position.z+=k.vz*U,k.m.position.y=Math.max(0,k.m.position.y+k.vy*U),k.m.scale.setScalar(Math.max(.001,1-k.t/1)),k.t>1&&(k.parent.remove(k.m),s.splice(s.indexOf(k.m),1),Q.splice(X,1))}}const ie=()=>i.render(e,t,E);return ue("camp"),{scene:e,camera:t,resize:K,setInset:re,go:ue,update:W,render:ie,setStageState:be,setTalk:ge,burst:_e,get place(){return V},get stageKey(){return G==null?void 0:G.key},get stageState(){return G==null?void 0:G.state},familyIcon:U=>z[U].A[0].image}}const sn="عليه السلام",Rv="ﷺ",Cv=[{e:"😨",t:"Scared"},{e:"😢",t:"Sad"},{e:"😌",t:"Calm"},{e:"🦁",t:"Brave"},{e:"🤲",t:"Trusting Allah"},{e:"😲",t:"Surprised"},{e:"😟",t:"Worried"},{e:"😊",t:"Hopeful"}],ds=[{id:"adam",name:"Adam",honor:sn,label:"The First People",icon:"tree"},{id:"nuh",name:"Nuh",honor:sn,label:"The Great Ship",icon:"ark",story:"nuh"},{id:"ibrahim",name:"Ibrahim",honor:sn,label:"The Stars and the Fire",icon:"star",story:"ibrahim"},{id:"yusuf",name:"Yusuf",honor:sn,label:"The Well",icon:"well",story:"yusuf"},{id:"musa",name:"Musa",honor:sn,label:"The Parted Sea",icon:"waves"},{id:"yunus",name:"Yunus",honor:sn,label:"The Whale",icon:"whale",story:"yunus"},{id:"isa",name:"Isa",honor:sn,label:"The Palm Tree",icon:"palm"},{id:"muhammad",name:"Muhammad",honor:Rv,label:"The First Revelation",icon:"book"},{id:"hijrah",name:"The Hijrah",honor:"",label:"The Journey to Madinah",icon:"moon"}],nn={nuh:{id:"nuh",name:"Nuh",honor:sn,title:"Nuh and the Great Ship",icon:"ark",blurb:"A huge ship built on dry land, and waves as big as mountains.",chapters:[{title:"A Ship on Dry Land",scene:"nuh-build",read:["Long, long ago lived the prophet Nuh {honor}. For a very, very long time (nine hundred and fifty years!) he called his people to worship Allah alone. He called them in the day and in the night, loudly and quietly. But only a few people believed.","Then Allah told Nuh to build a ship. A huge ship, right there on dry land, far away from the sea! Every time the chiefs of his people walked past, they laughed at him. But Nuh kept on building, plank by plank."],question:"Why would anyone build a ship on dry land? What do you think is coming?",parent:{ask:"What is a ship for? If Allah told Nuh to build one far from the sea, what might be about to happen?",hints:["Look at the sky in the picture. What could come from up there?","How do you keep going when people laugh at you?"],answer:"A great flood was coming. Allah told Nuh to load a pair of every kind of animal, and the believers, onto the ship."},predict:[{type:"order",prompt:"Put these in the order you think they will happen:",cards:[{e:"🔨",t:"Nuh finishes the ship"},{e:"🐑",t:"Animals come aboard in pairs"},{e:"🌧️",t:"Rain pours and the water rises"},{e:"⛰️",t:"The ship finds a place to rest"}]}],reveal:["Nuh finished the ship. Then Allah told him to bring on board a pair of every kind of animal, his family, and the people who believed.","Two by two, the animals came. Then the sky opened with pouring rain, and water burst up out of the ground. Slowly, the great ship began to float."],ayat:[{ref:"Hud 11:38",text:'And he constructed the ship, and whenever an assembly of the eminent of his people passed by him, they ridiculed him. He said, "If you ridicule us, then we will ridicule you just as you ridicule."'}],explain:"Nuh {honor} obeyed Allah even when it looked strange to everyone else, and even when people made fun of him. He trusted that Allah knew what was coming.",reflect:{q:"Nuh kept doing what was right even when people laughed. Is there something good you keep doing, even when it is hard?",tip:"Share one of your own: a good habit you keep even when nobody sees.",apply:"Pick one good habit together (like saying Bismillah before eating) and keep it up all week."}},{title:"Waves like Mountains",scene:"nuh-flood",read:['The rain poured and the water rose everywhere. The ship sailed on through waves as big as mountains. Nuh called out to his son, who had stayed behind: "O my son, come aboard with us!" But his son said, "I will climb a mountain. It will keep me safe from the water." Then a wave came between them.',"Inside the ship, the believers and the animals were safe, rocking on the huge waves. Days passed, and everyone waited. How would the flood end?"],question:"The ship is sailing on huge waves. What do you think happens next?",parent:{ask:"What do you do when you have to wait a long time for something? Who were the people on the ship trusting?",hints:["Could a mountain protect anyone from Allah's command?","Who can make the rain stop?"],answer:"Allah commanded the earth to swallow its water and the sky to stop. The water went down, and the ship came to rest on a mountain called Al-Judi.",note:"The part about Nuh's son is sad (he was among those who drowned). You can keep it simple: only Allah's mercy can save us, not a mountain."},predict:[{type:"emotion",prompt:"How do you think the people inside the ship felt?"},{type:"choose",prompt:"What do you think happens next?",options:[{e:"☀️",t:"The water goes down"},{e:"🚢",t:"They sail forever"},{e:"🏝️",t:"They find a new island"}]}],reveal:['Then Allah said: "O earth, swallow your water, and O sky, hold back your rain!" The rain stopped. The water went down, down, down.',"The ship came to rest on a mountain called Al-Judi. Nuh, the believers and all the animals stepped out onto dry land, safe and grateful, with peace and blessings from Allah."],ayat:[{ref:"Hud 11:44",text:'And it was said, "O earth, swallow your water, and O sky, withhold [your rain]." And the water subsided, and the matter was accomplished, and the ship came to rest on the [mountain of] Judiyy. And it was said, "Away with the wrongdoing people."'}],explain:"Everything obeys Allah: the sky, the earth and the water. The people on the ship were saved because they believed and obeyed.",reflect:{q:"Nuh and the believers were so grateful to reach dry land. What are three things you are grateful to Allah for today?",tip:"Take turns: one thing each, until you both have three.",apply:'Say "Alhamdulillah" out loud for three things before bed each night this week.'}}]},ibrahim:{id:"ibrahim",name:"Ibrahim",honor:sn,title:"Ibrahim and the Stars",icon:"star",blurb:"A night of stars, a hall of stone statues, and a fire that obeyed Allah.",chapters:[{title:"Who Made the Sky?",scene:"ibrahim-sky",read:["Long ago lived a young man named Ibrahim {honor}. His people made statues out of stone and wood and bowed down to them. Some of them also worshipped the stars, the moon and the sun.",'Ibrahim wanted to show his people the truth. One night the sky grew dark and a bright star appeared. Ibrahim said to his people, "Is this my Lord?" The night went on... and slowly, the star began to sink behind the hills.'],question:"The star is disappearing! What do you think Ibrahim said?",parent:{ask:"What happens to the stars when morning comes? Could something that goes away be the One who looks after us all the time?",hints:["Does Allah ever go away or fall asleep?","Who made the stars in the first place?"],answer:'When the star set, he said, "I do not like things that disappear." The same happened with the moon and then the sun. Each one set, so none of them could be God.',note:'Many scholars explain that Ibrahim {honor} said "Is this my Lord?" to reason with his people step by step. He never really believed the star was God.'},predict:[{type:"choose",prompt:"What do you think Ibrahim said?",options:[{e:"⭐",t:'"Come back, star!"'},{e:"🤔",t:`"Something that goes away can't be my Lord."`},{e:"🌙",t:`"Let's wait for the moon."`}]}],reveal:['When the star set, Ibrahim said, "I do not like things that disappear." Then the moon rose, big and bright. But the moon set too. Then the sun rose, the biggest and brightest of all. But in the evening, the sun set as well.',"Ibrahim told his people: the stars, the moon and the sun all come and go. They are not God. Allah made them all, and Allah never disappears."],ayat:[{ref:"Al-An'am 6:76",text:'So when the night covered him [with darkness], he saw a star. He said, "This is my lord." But when it set, he said, "I like not those that disappear."'},{ref:"Al-An'am 6:79",text:"Indeed, I have turned my face toward He who created the heavens and the earth, inclining toward truth, and I am not of those who associate others with Allah."}],explain:"The things Allah created are beautiful, but they change, set and go away. Allah, who made them, is always there.",reflect:{q:"Allah never sleeps and never disappears. He is always with us. When do you like to talk to Allah?",tip:'In Ayat al-Kursi Allah tells us: "Neither drowsiness overtakes Him nor sleep" (Al-Baqarah 2:255).',apply:'Tonight, look out of the window at the sky together and say "SubhanAllah" for something you can see.'}},{title:"The Stone Statues",scene:"ibrahim-idols",read:['Ibrahim {honor} spoke to his people gently. "What are these statues you keep bowing to?" he asked. They said, "We found our fathers worshipping them." Ibrahim said, "Then you and your fathers have been clearly wrong."','One day, the people went out of town. Ibrahim went to the statues and broke them into pieces, all except the biggest one. When the people came back, they gasped! "Who did this to our gods?" They brought Ibrahim in front of everyone and asked, "Was it you who did this, O Ibrahim?"'],question:"Everyone is looking at Ibrahim. What do you think he answered?",parent:{ask:"If the statues were really gods, what should they be able to do? Could they protect themselves? Could they talk?",hints:["Can a stone hear you or answer you?","What would be a clever way to make the people think?"],answer:'He pointed at the biggest statue and said, "Rather, this biggest one did it. So ask them, if they can speak!" The people knew statues cannot speak.',note:"Good to add: Ibrahim {honor} was a prophet guided by Allah. We never break other people's things. We share the truth with kind, clever words, like Ibrahim did."},predict:[{type:"say",prompt:"If you were Ibrahim, what would you say to the people? Say it out loud to {parent}!"}],reveal:['Ibrahim said, "Rather, this biggest one did it! So ask them, if they can speak."',"The people went quiet. They looked at each other. They knew the statues could not speak, could not hear, and could not even protect themselves. For a moment they knew they had been wrong. But their pride was too big, and they turned against Ibrahim."],ayat:[{ref:"Al-Anbiya 21:63",text:'He said, "Rather, this - the largest of them - did it, so ask them, if they should [be able to] speak."'},{ref:"Al-Anbiya 21:66",text:'He said, "Then do you worship instead of Allah that which does not benefit you at all or harm you?"'}],explain:"Ibrahim {honor} helped his people use their minds: something that cannot speak, hear or help itself cannot help us. Only Allah can.",reflect:{q:"Ibrahim was brave enough to say the truth even when everyone else did something different. When is it hard to be different from your friends?",tip:"Tell a story from your own childhood when you had to be brave and different.",apply:`Practise a kind, brave sentence together for when friends do something wrong: "I don't think that's okay."`}},{title:"The Great Fire",scene:"ibrahim-fire",read:['The people were very angry. "Burn him, and help your gods!" they shouted. They gathered wood and built an enormous fire, so hot that nobody could go near it. Then they threw Ibrahim {honor} into the flames.',`But Ibrahim trusted Allah completely. He said: "Hasbunallahu wa ni'mal wakeel." Allah is enough for us, and He is the best One to trust.`],question:"Ibrahim is in the middle of the fire! What do you think happens next?",parent:{ask:"Who made fire hot? If Allah made fire hot, could Allah also tell it to be cool?",hints:["Everything in the world obeys Allah, even fire.","What did Ibrahim say just before?"],answer:'Allah commanded the fire: "Be coolness and safety for Ibrahim." The fire could not hurt him, and he came out safe.'},predict:[{type:"emotion",prompt:"How do you think Ibrahim felt in his heart?"},{type:"choose",prompt:"What do you think happens next?",options:[{e:"🌧️",t:"Rain puts the fire out"},{e:"❄️",t:"The fire turns cool"},{e:"🏃",t:"He runs away"}]}],reveal:['Allah said: "O fire, be coolness and safety for Ibrahim." And the fire obeyed!',"The flames could not hurt Ibrahim at all. He was safe in the middle of the fire, and the people could not believe their eyes. The ones who wanted to hurt him were the real losers that day."],ayat:[{ref:"Al-Anbiya 21:69",ar:"يَا نَارُ كُونِي بَرْدًا وَسَلَامًا عَلَىٰ إِبْرَاهِيمَ",text:'We [i.e., Allah] said, "O fire, be coolness and safety upon Ibrahim."'}],hadith:{text:`"Hasbunallahu wa ni'mal wakeel" (Allah is sufficient for us, and He is the best Disposer of affairs) was said by Ibrahim when he was thrown into the fire, and it was said by Muhammad ﷺ when people told him an army had gathered against him.`,src:"Ibn 'Abbas, Sahih al-Bukhari 4563"},explain:"Fire burns only because Allah lets it. When Allah commanded it to be cool, it became cool. Ibrahim {honor} knew Allah was enough for him.",reflect:{q:"When you feel scared, what can you say to remember that Allah is with you?",tip:`Teach the words slowly: "Hasbunallahu wa ni'mal wakeel". Say them together a few times.`,apply:`Say "Hasbunallahu wa ni'mal wakeel" together before sleeping tonight.`}}]},yusuf:{id:"yusuf",name:"Yusuf",honor:sn,title:"Yusuf and the Well",icon:"well",blurb:"A special dream, a deep well, and the most beautiful forgiveness.",chapters:[{title:"The Special Dream",scene:"yusuf-dream",read:["Yusuf {honor} was a kind and gentle boy. He lived with his father, the prophet Ya'qub {honor}, and his eleven brothers. His father loved him very much, and his older brothers were jealous.",'One morning Yusuf woke up with wonderful news. "Father! In my dream I saw eleven stars, and the sun, and the moon, and they were all bowing down to me!" His father listened carefully. He knew this dream was special...'],question:"What do you think Yusuf's father told him?",parent:{ask:"If you had a special surprise, and you knew someone might feel jealous, what would you do?",hints:["How were the older brothers feeling about Yusuf?","Is it always wise to tell everybody everything?"],answer:"Ya'qub told Yusuf not to tell his brothers about the dream, in case they made a plan against him."},predict:[{type:"choose",prompt:"What do you think his father said?",options:[{e:"🤫",t:'"Keep it a secret."'},{e:"📣",t:'"Tell everyone!"'},{e:"🎁",t:'"Share it with your brothers."'}]}],reveal:[`Ya'qub said, "My son, don't tell your brothers about your dream, or they may make a plan against you."`,"He also told Yusuf that Allah had chosen him and would teach him how to understand dreams. So Yusuf kept the secret. But the brothers' jealousy kept growing..."],ayat:[{ref:"Yusuf 12:4",text:'When Yusuf said to his father, "O my father, indeed I have seen [in a dream] eleven stars and the sun and the moon; I saw them prostrating to me."'},{ref:"Yusuf 12:5",text:'He said, "O my son, do not relate your vision to your brothers or they will contrive against you a plan. Indeed Satan, to man, is a manifest enemy."'}],explain:"Ya'qub {honor} was a wise, loving father. He protected his son by teaching him that some good news is better kept private.",reflect:{q:"Jealousy is a feeling that grows if we feed it. Have you ever felt jealous? What helps it go away?",tip:'The Prophet ﷺ said: "None of you truly believes until he loves for his brother what he loves for himself." (Sahih al-Bukhari 13, Sahih Muslim 45)',apply:`When a brother, sister or friend gets something nice this week, practise saying "MashaAllah, I'm happy for you!"`}},{title:"Down in the Well",scene:"yusuf-well",read:[`The brothers made a plan. "Father, let Yusuf come out with us tomorrow to play. We will look after him." Ya'qub was worried, but he let him go.`,`Far from home, the brothers put Yusuf down into a deep, dark well and left him there. That night they came home crying, with Yusuf's shirt stained with fake blood. "A wolf ate him!" they said. Their father did not believe them. He said, "Patience is most fitting, and Allah is the One whose help I seek."`],question:"Yusuf is all alone at the bottom of the well. What do you think happens next?",parent:{ask:"Yusuf's father chose to be patient. What does patience look like when something is really, really hard?",hints:["Who could still see Yusuf, even at the bottom of the well?","Who might come to a well in the desert?"],answer:"A caravan of travellers came to the well for water. When they let down their bucket, they found Yusuf and took him with them to Egypt."},predict:[{type:"emotion",prompt:"How do you think Yusuf feels at the bottom of the well?"},{type:"choose",prompt:"What do you think happens next?",options:[{e:"🐫",t:"Someone finds him"},{e:"🧗",t:"He climbs out"},{e:"🤲",t:"He waits and makes dua"}]}],reveal:['A caravan of travellers came by on their camels. They were thirsty, so they sent a man to fetch water from the well. He let down his bucket... and he shouted, "Good news! Here is a boy!"',"The travellers took Yusuf with them, all the way to Egypt. There he grew up in the house of an important man. Allah was looking after Yusuf the whole time."],ayat:[{ref:"Yusuf 12:19",text:'And there came a company of travelers; then they sent their water drawer, and he let down his bucket. He said, "Good news! Here is a boy."'},{ref:"Yusuf 12:18",text:"...So patience is most fitting. And Allah is the one sought for help against that which you describe."}],explain:"Even at the bottom of a dark well, Yusuf {honor} was not forgotten. Allah was planning something good for him that no one could see yet.",reflect:{q:"When something really hard happens, like losing something or being left out, what can we do while we wait for it to get better?",tip:"Talk about sabr: staying calm, not giving up, and asking Allah for help.",apply:'Next time something goes wrong, say "Sabrun jameel" (beautiful patience) and take three slow breaths.'}},{title:"No Blame Today",scene:"yusuf-egypt",read:["Many years passed. Yusuf {honor} grew up in Egypt and went through many hard tests, but he always stayed honest and patient. In the end, the king put him in charge of all the food stores of the land. Yusuf saved grain during seven good years, so that when seven hungry years came, people would have food.",`The hungry years reached Yusuf's old home too, and his brothers came all the way to Egypt to ask for food. They did not recognise him, but Yusuf knew them straight away. Later, he told them: "I am Yusuf!" The brothers were shocked and ashamed. The boy they had thrown into the well was now in charge of all of Egypt's food.`],question:"Yusuf could do anything to the brothers who hurt him. What do you think he did?",parent:{ask:"Has someone ever hurt you? How did you want to answer them? What would make Allah happy?",hints:["Remember how patient Yusuf was all those years.","Is getting even the same as being strong?"],answer:'He forgave them completely: "No blame will there be upon you today. Allah will forgive you."',note:"At the end of the story the family bows to Yusuf, which is the meaning of his dream. In that time bowing was a sign of respect; in Islam we bow and prostrate only to Allah."},predict:[{type:"choose",prompt:"What do you think Yusuf did?",options:[{e:"😠",t:"Punished them"},{e:"🤗",t:"Forgave them"},{e:"🙅",t:"Sent them away with no food"}]}],reveal:['Yusuf said: "No blame will there be upon you today. Allah will forgive you, and He is the most merciful of the merciful." He did not shout. He did not take revenge. He forgave them.',"He even gave them his shirt to take home to their father. Then the whole family came to Egypt and they were together again. Yusuf's eleven brothers, his father and his mother bowed in respect, just like the eleven stars, the sun and the moon in his dream!"],ayat:[{ref:"Yusuf 12:92",ar:"لَا تَثْرِيبَ عَلَيْكُمُ الْيَوْمَ ۖ يَغْفِرُ اللَّهُ لَكُمْ ۖ وَهُوَ أَرْحَمُ الرَّاحِمِينَ",text:'He said, "No blame will there be upon you today. Allah will forgive you; and He is the most merciful of the merciful."'}],explain:"Yusuf {honor} had every reason to be angry, but he chose forgiveness. Forgiving is a sign of a strong, beautiful heart.",reflect:{q:"Is there someone we need to forgive, or say sorry to? How does it feel when someone forgives you?",tip:"Maybe start by saying sorry for something small yourself. Children learn it from watching us.",apply:'This week, when someone says sorry, answer like Yusuf: "No blame on you today!"'}}]},yunus:{id:"yunus",name:"Yunus",honor:sn,title:"Yunus and the Whale",icon:"whale",blurb:"A stormy sea, a dua in the darkness, and a second chance.",chapters:[{title:"The Stormy Sea",scene:"yunus-ship",read:["Allah sent the prophet Yunus {honor} to a big city full of people. Yunus told them to worship Allah alone and to be good. But they would not listen. Yunus became upset and angry with them, and he left the city.","Yunus went down to the sea and got onto a ship that was full of people and heavy loads. The ship sailed out. Then the wind began to howl, and the waves grew as big as hills. The ship rocked and creaked. It was too heavy. It might sink!"],question:"The ship is too heavy and the sea is wild! What do you think happens next?",parent:{ask:"If a ship is too heavy, what could the people on it do? How do you think Yunus was feeling?",hints:["Look at the sea in the picture. Is anything under the water?","Yunus left in anger. Was that the best choice?"],answer:"The people drew lots to choose who would leave the ship. It fell on Yunus. He went into the sea, and by Allah's command a huge fish swallowed him."},predict:[{type:"choose",prompt:"What do you think happens next?",options:[{e:"🏊",t:"Everyone swims to shore"},{e:"🎲",t:"They pick someone to leave the ship"},{e:"🐋",t:"A giant sea creature comes"}]}],reveal:["The people on the ship drew lots, like picking a name out of a hat, to decide who must leave the ship. The lot fell on Yunus.","So Yunus went into the stormy sea... and a huge fish opened its mouth and swallowed him whole! But Yunus was still alive. Allah was looking after him, even there."],ayat:[{ref:"As-Saffat 37:139-142",text:"And indeed, Yunus was among the messengers. [Mention] when he ran away to the laden ship. And he drew lots and was among the losers. Then the fish swallowed him, while he was blameworthy."}],explain:"Yunus {honor} left his people in anger instead of waiting patiently. Even prophets are tested, and even then Allah looked after him.",reflect:{q:"Yunus felt angry and left. What do you do when you feel really, really angry? What could help?",tip:'A man asked the Prophet ﷺ for advice, and he said: "Do not become angry," repeating it several times. (Sahih al-Bukhari 6116)',apply:'Make an "angry plan" together: when I feel angry I will stop, breathe slowly, and ask for help.'}},{title:"In the Darkness",scene:"yunus-whale",read:["Inside the whale it was dark. Very, very dark. It was dark from the night, dark from the deep sea, and dark inside the whale. Yunus {honor} could not see anything at all. Nobody knew where he was... except Allah.","In the quiet dark, Yunus thought about everything that had happened. He realised he should not have left his people in anger. And he knew exactly what to do."],question:"Yunus is in the dark, deep under the sea. What do you think he did?",parent:{ask:"When you've made a mistake, what is the best thing to do? Who can hear us anywhere, even inside a whale?",hints:["Can Allah hear a whisper at the bottom of the sea?","What do we say when we know we were wrong?"],answer:'He called out to Allah: "There is no god except You. Glory be to You. Indeed, I have been of the wrongdoers." Allah answered him and saved him.'},predict:[{type:"say",prompt:"If you were in the dark like Yunus, what would you say to Allah? Whisper it to {parent}."}],reveal:['From the darkness, Yunus called out to Allah: "La ilaha illa anta, subhanaka, inni kuntu minaz-zalimeen." There is no god except You. You are perfect. I was wrong.',"He did not make excuses. He said sorry to Allah, and Allah heard him, even from inside a whale at the bottom of the sea. Allah answered his dua and saved him."],ayat:[{ref:"Al-Anbiya 21:87",ar:"لَا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",text:'And [mention] the man of the fish, when he went off in anger and thought that We would not decree [anything] upon him. And he called out within the darknesses, "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers."'},{ref:"Al-Anbiya 21:88",text:"So We responded to him and saved him from the distress. And thus do We save the believers."}],explain:"Allah hears us everywhere. When we are honest that we made a mistake and turn back to Him, He answers, just as He answered Yunus {honor}.",reflect:{q:`Saying "I was wrong" can be really hard! When was the last time you said sorry? Let's learn Yunus's dua together.`,tip:'Say the dua slowly, one part at a time: "La ilaha illa anta" · "subhanaka" · "inni kuntu minaz-zalimeen".',apply:"Learn the dua of Yunus together and say it three times before sleeping tonight."}},{title:"Home Again",scene:"yunus-shore",read:["By Allah's command, the whale swam to the shore and put Yunus {honor} out onto the open sand. Yunus was weak and ill after so long inside the whale.","The sun was hot. There was no shade and nobody around to help. Yunus lay on the beach, far from home..."],question:"Yunus is weak and alone on the beach. What do you think happens next?",parent:{ask:"How does Allah look after us when we are weak or poorly? What or who does He send to help us?",hints:["What gives shade on a hot day?","Do you think Yunus went back to his people?"],answer:"Allah made a gourd plant grow over him. Then Allah sent him back to his people, a hundred thousand or more, and this time they believed!"},predict:[{type:"order",prompt:"Put these in the order you think they will happen:",cards:[{e:"🌿",t:"A plant grows over him"},{e:"💪",t:"Yunus gets strong again"},{e:"🚶",t:"He goes back to his people"},{e:"🏘️",t:"The people believe"}]}],reveal:["Allah made a gourd plant grow over Yunus, with big green leaves to shade him from the hot sun. Slowly, Yunus grew strong again.","Then Allah sent him back to his people, a hundred thousand of them or more. And this time something wonderful happened: the people believed! They turned to Allah, and Allah let them enjoy their lives for a time."],ayat:[{ref:"As-Saffat 37:145-148",text:"But We threw him onto the open shore while he was ill. And We caused to grow over him a gourd vine. And We sent him to [his people of] a hundred thousand or more. And they believed, so We gave them enjoyment [of life] for a time."}],explain:"Allah gave Yunus {honor} a second chance, and his people a second chance too. Turning back to Allah always opens a door.",reflect:{q:"Yunus got a second chance. Has anyone ever given you a second chance? Who could we give one to?",tip:"Share a time someone gave you a second chance, and how it felt.",apply:"Give someone a second chance this week, and tell each other about it at dinner."}}]}},ps=["nuh","ibrahim","yusuf","yunus"],Xo="family-deen-stories-v1",Aa=()=>({settings:{parent:"baba",child:"",narration:!1,muted:!1,setup:!1},progress:{},current:null,talks:0,journal:[],newlyFinished:null,nights:[],applied:{}});function Ah(){try{const n=JSON.parse(localStorage.getItem(Xo)||"null");if(!n)return Aa();const e=Aa();return{...e,...n,settings:{...e.settings,...n.settings||{}}}}catch{return Aa()}}function Pv(n){try{localStorage.setItem(Xo,JSON.stringify(n))}catch{}}function Lv(){try{localStorage.removeItem(Xo)}catch{}}let At,pi,Os=!1;function Hi(){if(At){At.state==="suspended"&&At.resume();return}const n=window.AudioContext||window.webkitAudioContext;n&&(At=new n,pi=At.createGain(),pi.gain.value=Os?0:.4,pi.connect(At.destination))}function Rh(n){Os=n,pi&&(pi.gain.value=n?0:.4)}function Tn(n,e,{type:t="triangle",vol:i=.5,slide:r=1,delay:s=0}={}){if(!At||Os)return;const a=At.currentTime+s,o=At.createOscillator(),l=At.createGain();o.type=t,o.frequency.setValueAtTime(n,a),o.frequency.exponentialRampToValueAtTime(n*r,a+e),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(i,a+.012),l.gain.exponentialRampToValueAtTime(1e-4,a+e),o.connect(l).connect(pi),o.start(a),o.stop(a+e+.02)}function Ec(n,{vol:e=.3,cutoff:t=2e3,type:i="lowpass",delay:r=0}={}){if(!At||Os)return;const s=At.currentTime+r,a=Math.floor(At.sampleRate*n),o=At.createBuffer(1,a,At.sampleRate),l=o.getChannelData(0);for(let f=0;f<a;f++)l[f]=(Math.random()*2-1)*(1-f/a)**2;const c=At.createBufferSource(),h=At.createBiquadFilter(),u=At.createGain();c.buffer=o,h.type=i,h.frequency.value=t,u.gain.value=e,c.connect(h).connect(u).connect(pi),c.start(s)}const vt={tap:()=>Tn(700,.06,{vol:.2}),page:()=>Ec(.22,{vol:.25,cutoff:3e3,type:"bandpass"}),pick:()=>{Tn(520,.1,{vol:.3}),Tn(780,.12,{delay:.06,vol:.3})},stop:()=>{Tn(440,.18,{type:"sine",vol:.35}),Tn(330,.26,{type:"sine",delay:.14,vol:.3})},talk:()=>{Tn(392,.16,{type:"sine",vol:.3}),Tn(523,.22,{type:"sine",delay:.1,vol:.3})},reveal:()=>[784,988,1175,1568].forEach((n,e)=>Tn(n,.5,{type:"sine",delay:e*.09,vol:.18})),done:()=>[523,659,784,1047].forEach((n,e)=>Tn(n,.24,{delay:e*.1,vol:.35})),crackle:()=>{for(let n=0;n<3;n++)Ec(.03,{vol:.08+Math.random()*.06,cutoff:1500+Math.random()*2500,type:"highpass",delay:Math.random()*.4})}},Rs=typeof window<"u"?window.speechSynthesis:null,Tr=!!(Rs&&window.SpeechSynthesisUtterance);function Vi(n){if(!Tr)return;Mr();const e=n.replace(/عليه السلام/g,"alayhis salaam").replace(/ﷺ/g,"sallallahu alayhi wa sallam").replace(/[؀-ۿݐ-ݿﭐ-﷿ﹰ-﻿]+/g," ").replace(/<[^>]+>/g,""),t=new SpeechSynthesisUtterance(e);t.rate=.9,t.pitch=1.05;const i=Rs.getVoices().find(r=>/en[-_](GB|US)/i.test(r.lang));i&&(t.voice=i),Rs.speak(t)}function Mr(){Tr&&Rs.cancel()}const Ne=n=>document.getElementById(n),Xe=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);let Pe=Ah();Rh(Pe.settings.muted);const dn=()=>({baba:"Baba",mama:"Mama",both:"Baba & Mama"})[Pe.settings.parent]||"Baba",rn=()=>Pe.settings.child.trim()||"Little star";function Xn(n,e){return Xe(n).replace(/\{parent\}/g,dn()).replace(/\{child\}/g,Xe(rn())).replace(/\{honor\}/g,e?`<span class="honor">${e.honor}</span>`:"").replace(/ﷺ/g,'<span class="honor">ﷺ</span>')}const fn=n=>n.replace(/<[^>]+>/g,"");function Iv(n){const e=n.read.map((t,i)=>`read:${i}`);return e.push("stop","cover","parent","handback"),n.predict.forEach((t,i)=>e.push(`predict:${i}`)),e.push("great","reveal","ayah","reflect","done"),e}function Dv(n){const e=n.split(":")[0];return e==="read"||e==="stop"?{place:"stage",state:"before",talk:null}:e==="reveal"||e==="ayah"?{place:"stage",state:"after",talk:null}:e==="parent"||e==="cover"?{place:"camp",talk:"parent"}:e==="predict"||e==="handback"||e==="great"?{place:"camp",talk:"child"}:e==="reflect"||e==="done"?{place:"camp",talk:"all"}:{place:"camp",talk:null}}const de={story:null,ch:0,steps:[],i:0,answers:[],orderPick:[]};async function Uv(){const n=new ag({canvas:Ne("scene"),antialias:!0,alpha:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.outputColorSpace=zt;const e=await Av(n);function t(){const H=Ne("panel");if(!Ne("titleScreen").classList.contains("hidden")){const $=document.querySelector(".title-card").getBoundingClientRect();return e.setInset({right:0,bottom:Math.max(0,innerHeight-$.top-20)})}if(H.classList.contains("hidden"))return e.setInset({right:0,bottom:0});const I=H.getBoundingClientRect(),V=innerWidth/innerHeight<1;e.setInset(V?{right:0,bottom:innerHeight-I.top+6}:{right:innerWidth-I.left+6,bottom:0})}function i(){n.setSize(innerWidth,innerHeight,!1),e.resize(innerWidth,innerHeight),document.body.classList.toggle("portrait",innerWidth/innerHeight<1),t()}addEventListener("resize",i),i(),new ResizeObserver(t).observe(Ne("panel"));const r=()=>Pv(Pe),s=(H,I=!0)=>Ne(H).classList.toggle("hidden",!I);function a(){Ne("talkCount").textContent=Pe.talks,Ne("voiceBtn").classList.toggle("off",!Pe.settings.narration),Ne("voiceBtn").style.display=Tr?"":"none",Ne("muteBtn").innerHTML=St(Pe.settings.muted?"mute":"sound")}function o(H){H.classList.remove("bump"),H.offsetWidth,H.classList.add("bump")}function l(H,I){var V;Pe.talks++,Pe.journal.push({t:Date.now(),story:(V=de.story)==null?void 0:V.id,ch:de.ch,kind:H,text:I}),h(),r(),a(),o(Ne("talkPill")),vt.talk()}const c=()=>{const H=new Date;return`${H.getFullYear()}-${H.getMonth()+1}-${H.getDate()}`};function h(){const H=c();Pe.nights.includes(H)||Pe.nights.push(H)}function u(H,I,V){const $=V+" → ",K=[...Pe.journal].reverse().find(re=>re.kind==="predict"&&re.story===H.id&&re.ch===I&&re.text.startsWith($));return K?K.text.slice($.length).replace(/^Feeling: /,""):null}let f=!1;function d(H){return f?(H(),Promise.resolve()):(f=!0,Ne("fade").classList.add("on"),new Promise(I=>setTimeout(()=>{H(),Ne("fade").classList.remove("on"),f=!1,I()},260)))}const g={},_=(H,I)=>{var V;return g[V=H+I]||(g[V]=cv(H,I).toDataURL())};function m(){for(const H of["titleScreen","setupScreen","trailScreen","journalScreen","cover"])s(H,!1)}function p(){Mr(),m(),s("panel",!1),s("hud",!1),s("titleScreen"),e.go("camp"),e.setTalk(null),t();const H=Pe.current&&nn[Pe.current.story];Ne("titleHero").outerHTML=Oh([{src:_("ark",!0),cls:"bob"},{src:_("star",!0),cls:"bob"},{icon:"fire",cls:"main"},{src:_("well",!0),cls:"bob"},{src:_("whale",!0),cls:"bob"}],{tone:"night",glow:!0,sparkles:7}).replace('class="dkhero','id="titleHero" class="dkhero'),Ne("startBtn").innerHTML=`${St("scroll")} Open the Story Trail`,Ne("continueBtn").classList.toggle("hidden",!H),H&&(Ne("continueBtn").innerHTML=`${St("play")} Continue: ${H.name} <span class="honor">${H.honor}</span> · Chapter ${Pe.current.ch+1}`),t()}function S(){m(),s("setupScreen"),Ne("parentSeg").innerHTML=Fh([{id:"baba",label:"Baba",pic:"grownup",color:"blue",sub:"tells the story"},{id:"mama",label:"Mama",pic:"grownup",color:"pink",sub:"tells the story"},{id:"both",label:"Both",pic:"people",color:"green",sub:"take turns"}],"data-v").replace(/^<div class="dkavs">|<\/div>$/g,""),document.querySelectorAll("#parentSeg button").forEach(H=>H.classList.toggle("on",H.dataset.v===Pe.settings.parent)),Ne("childName").value=Pe.settings.child,Ne("voiceChk").checked=Pe.settings.narration,Ne("voiceChk").parentElement.style.display=Tr?"":"none"}Ne("parentSeg").addEventListener("click",H=>{const I=H.target.closest("button");I&&(Pe.settings.parent=I.dataset.v,vt.tap(),document.querySelectorAll("#parentSeg button").forEach(V=>V.classList.toggle("on",V===I)))}),Ne("setupDone").innerHTML=`${St("fire")} Light the fire`,Ne("setupDone").addEventListener("click",()=>{Pe.settings.child=Ne("childName").value.trim(),Pe.settings.narration=Ne("voiceChk").checked,Pe.settings.setup=!0,r(),a(),vt.pick(),de.story?(m(),s("hud"),j()):x()});function x(){Mr(),m(),s("panel",!1),s("hud"),s("trailScreen"),s("storyPop",!1),e.go("camp"),e.setTalk(null),t();const H=ps.filter(ge=>{var Q;return(Q=Pe.progress[ge])==null?void 0:Q.finished}).length;Ne("trailStats").innerHTML=tl([["talk",`<b>${Pe.talks}</b> conversations had`,"blue"],["scroll",`<b>${H}</b> of ${ps.length} stories told`,"gold"],["moon",`<b>${Pe.nights.length}</b> night${Pe.nights.length===1?"":"s"} by the fire`,"pink"]]),Ne("surpriseBtn").innerHTML=`${St("dice")} Surprise us`;const I=ds.length,V=innerWidth/innerHeight<1,[$,K]=V?[420,1e3]:[1e3,420],re=ds.map((ge,Q)=>V?[Q%2?300:120,95+Q*790/(I-1)]:[70+Q*860/(I-1),Q%2?290:130]);let ue=`M${re[0][0]} ${re[0][1]}`;for(let ge=1;ge<I;ge++){const[Q,ae]=re[ge-1],[R,Se]=re[ge];ue+=V?` C ${Q} ${ae+45}, ${R} ${Se-45}, ${R} ${Se}`:` C ${Q+55} ${ae}, ${R-55} ${Se}, ${R} ${Se}`}Ne("trailSvg").setAttribute("viewBox",`0 0 ${$} ${K}`),Ne("trailPath").setAttribute("d",ue),Ne("trailNodes").innerHTML=ds.map((ge,Q)=>{var Re,E;const ae=ge.story&&nn[ge.story],R=ae&&((Re=Pe.progress[ge.story])==null?void 0:Re.finished),Se=Pe.newlyFinished===ge.story,pe=ae?R?"done":"open":"locked",Te=ae?((E=Pe.progress[ae.id])==null?void 0:E.done)||[]:[],_e=ae?Te.filter(Boolean).length:0,Ae=ae&&!R&&_e?`<span class="tpips">${ae.chapters.map((M,W)=>`<i class="${Te[W]?"lit":""}"></i>`).join("")}</span>`:"";return`<button class="tnode ${pe} ${Se?"fresh":""}" data-id="${ge.id}" style="left:${re[Q][0]/$*100}%;top:${re[Q][1]/K*100}%">
        <img src="${_(ge.icon,!!ae)}" alt="" />
        <b>${Xe(ge.name)} ${ge.honor?`<span class="honor">${ge.honor}</span>`:""}</b>
        <small>${ae?R?"★ told":_e?`chapter ${_e} of ${ae.chapters.length}`:Xe(ge.label):"coming soon"}</small>${Ae}</button>`}).join("");const Ee=Ne("trailNodes").querySelector(".tnode.fresh");Ee&&setTimeout(()=>il(Ee.querySelector("img"),!0),500),Pe.newlyFinished=null,r()}Ne("trailNodes").addEventListener("click",H=>{const I=H.target.closest(".tnode");if(!I)return;vt.tap();const V=ds.find(re=>re.id===I.dataset.id),$=V.story&&nn[V.story],K=Ne("storyPop");if(!$)K.innerHTML=`<h3>${Xe(V.name)} ${V.honor?`<span class="honor">${V.honor}</span>`:""}</h3><p>${Xe(V.label)}.<br>This story is coming soon, in sha Allah.</p><button class="chunky" data-act="close">OK</button>`;else{const re=Pe.progress[$.id]||{done:[]},ue=$.chapters.findIndex((Ee,ge)=>!re.done[ge]);K.innerHTML=`<img src="${_($.icon,!0)}" alt="" class="pop-badge"/><h3>${Xn($.title.replace($.name,$.name+" {honor}"),$)}</h3><p>${Xe($.blurb)}</p>
        <ol class="chlist">${$.chapters.map((Ee,ge)=>`<li class="${re.done[ge]?"ticked":""}"><button data-act="ch" data-ch="${ge}">${re.done[ge]?"✓":ge+1}. ${Xe(Ee.title)}</button></li>`).join("")}</ol>
        <button class="chunky gold" data-act="ch" data-ch="${ue<0?0:ue}">${St(ue<0?"star":"play")} ${ue<0?"Tell it again":ue===0?"Start the story":`Continue: Chapter ${ue+1}`}</button>
        <button class="link" data-act="close">Not tonight</button>`}K.dataset.story=($==null?void 0:$.id)||"",s("storyPop")}),Ne("storyPop").addEventListener("click",H=>{const I=H.target.closest("button");if(I){if(I.dataset.act==="close"){s("storyPop",!1);return}I.dataset.act==="ch"&&L(Ne("storyPop").dataset.story,+I.dataset.ch)}}),Ne("surpriseBtn").addEventListener("click",()=>{vt.pick();const H=ps.flatMap(ue=>nn[ue].chapters.map((Ee,ge)=>({id:ue,ch:ge}))),I=H.filter(({id:ue,ch:Ee})=>{var ge;return!((ge=Pe.progress[ue])!=null&&ge.done[Ee])}),V=I.length?I:H,$=V[Math.floor(Math.random()*V.length)],K=nn[$.id],re=Ne("storyPop");re.innerHTML=`<img src="${_(K.icon,!0)}" alt="" class="pop-badge"/><h3>${St("dice")} The dice picked…</h3>
      <p><b>${Xe(K.name)} <span class="honor">${K.honor}</span></b> · Chapter ${$.ch+1}: ${Xe(K.chapters[$.ch].title)}</p>
      <p class="tiny">${I.length?"A chapter you have not told yet.":"Every story is told, so any chapter is fair game. Tell it again!"}</p>
      <button class="chunky gold" data-act="ch" data-ch="${$.ch}">${St("play")} Tell this one</button>
      <button class="link" data-act="close">Not tonight</button>`,re.dataset.story=K.id,s("storyPop")});function v(){m(),s("journalScreen");const H=Pe.journal.filter($=>$.kind==="predict").length;Ne("journalStats").innerHTML=tl([["talk",`<b>${Pe.talks}</b> conversations`,"blue"],["crystal",`<b>${H}</b> predictions`,"pink"],["moon",`<b>${Pe.nights.length}</b> nights`,"gold"]]);const I=ps.flatMap($=>nn[$].chapters.map((K,re)=>({id:$,ch:re,c:K})).filter(({ch:K})=>{var re;return(re=Pe.progress[$])==null?void 0:re.done[K]}));I.sort(($,K)=>(Pe.applied[`${$.id}:${$.ch}`]?1:0)-(Pe.applied[`${K.id}:${K.ch}`]?1:0)),Ne("weekList").innerHTML=I.length?`<h3 class="week-h">${St("seedling")} Try it this week</h3><div class="week">${I.map(({id:$,ch:K,c:re})=>{const ue=!!Pe.applied[`${$}:${K}`];return`<button class="wrow ${ue?"on":""}" data-key="${$}:${K}"><span class="wtick">${ue?St("tick"):""}</span><div><b>${Xe(nn[$].name)} · ${Xe(re.title)}</b><p>${Xn(re.reflect.apply,nn[$])}</p></div></button>`}).join("")}</div>`:"";const V=Pe.journal.slice(-40).reverse();Ne("journalList").innerHTML=V.length?V.map($=>{var Ee;const K=nn[$.story],re=new Date($.t).toLocaleDateString(void 0,{day:"numeric",month:"short"});return`<div class="jrow"><span class="jic">${St({predict:"crystal",talk:"talk",reflect:"seedling"}[$.kind]||"star","big")}</span><div><b>${K?Xe(K.name)+" · "+Xe(((Ee=K.chapters[$.ch])==null?void 0:Ee.title)||""):""}</b><p>${Xe($.text)}</p></div><small>${re}</small></div>`}).join(""):'<p class="hint">Your conversations and predictions will appear here.</p>',Bh(Ne("journalList"))}Ne("weekList").addEventListener("click",H=>{const I=H.target.closest(".wrow");if(!I)return;const V=I.dataset.key,$=!Pe.applied[V];$?Pe.applied[V]=!0:delete Pe.applied[V],r(),vt.pick(),I.classList.toggle("on",$),I.querySelector(".wtick").innerHTML=$?St("tick"):"",$&&il(I.querySelector(".wtick"))}),Ne("journalBtn").innerHTML=`${St("book")} Family Journal`,Uh({trailBtn:"scroll",voiceBtn:"talk",muteBtn:"sound"}),Ne("journalBtn").addEventListener("click",()=>{vt.tap(),v()}),Ne("journalClose").addEventListener("click",()=>{vt.tap(),x()}),Ne("trailClose").addEventListener("click",()=>{vt.tap(),p()}),Ne("trailBtn").addEventListener("click",()=>{vt.tap(),x()}),Ne("startBtn").addEventListener("click",()=>{Hi(),vt.tap(),Pe.settings.setup?x():S()}),Ne("continueBtn").addEventListener("click",()=>{Hi(),vt.tap(),A()}),Ne("setupBtn").addEventListener("click",()=>{Hi(),vt.tap(),S()}),Ne("voiceBtn").addEventListener("click",()=>{Pe.settings.narration=!Pe.settings.narration,Pe.settings.narration||Mr(),r(),a(),de.story&&!Ne("panel").classList.contains("hidden")&&j()}),Ne("muteBtn").addEventListener("click",()=>{Pe.settings.muted=!Pe.settings.muted,Rh(Pe.settings.muted),r(),a()}),addEventListener("pointerdown",Hi,{once:!0});function L(H,I,V=0){de.story=nn[H],de.ch=I,de.steps=Iv(de.story.chapters[I]),de.i=Math.min(V,de.steps.length-1),de.answers=[],de.orderPick=[],m(),s("hud"),T(de.i,!0)}function A(){const H=Pe.current;H&&nn[H.story]?L(H.story,H.ch,H.step):x()}function T(H,I=!1){de.i=H,de.lock=!1;const V=de.steps[H];Pe.current=V==="done"?null:{story:de.story.id,ch:de.ch,step:H},r(),Mr();const $=Dv(V),K=I||e.place!==$.place||$.place==="stage"&&e.stageKey!==de.story.chapters[de.ch].scene,re=()=>{$.place==="stage"?e.go("stage",de.story.chapters[de.ch].scene,$.state):e.go("camp"),e.setTalk($.talk,Pe.settings.parent),j(),V==="reveal"&&(vt.reveal(),e.burst(12))};K?d(re):($.place==="stage"&&e.stageState!==$.state&&e.setStageState($.state),re())}const C=()=>{vt.page(),T(Math.min(de.i+1,de.steps.length-1))},w=()=>{vt.tap();let H=de.i-1;for(;H>0&&["cover","handback","great"].includes(de.steps[H]);)H--;T(Math.max(0,H))};function y(H=""){const I=de.story,V=I.chapters.length,$=de.steps.map((K,re)=>`<i class="${re<de.i?"past":re===de.i?"now":""}"></i>`).join("");return`<div class="phead"><span><b>${Xe(I.name)} <span class="honor">${I.honor}</span></b> · Chapter ${de.ch+1} of ${V}: ${Xe(I.chapters[de.ch].title)}</span>${H}</div><div class="pdots">${$}</div>`}const P=()=>de.i>0?'<button class="link back" data-act="back">‹ Back</button>':'<button class="link back" data-act="trail">‹ Story Trail</button>',q=H=>Pe.settings.narration&&Tr?`<button class="speak" data-act="speak" data-text="${Xe(fn(H))}">🔊 Read it to us</button>`:"";function z(H){const I=Ne("panel");I.innerHTML=H,s("panel"),I.scrollTop=0,requestAnimationFrame(t)}function j(){const H=de.story,I=H.chapters[de.ch],V=de.steps[de.i],[$,K]=V.split(":"),re=ue=>Xn(ue,H);if(s("cover",!1),$==="read"){const ue=+K,Ee=ue===I.read.length-1,ge=re(I.read[ue]);z(`${y()}<div class="card read"><div class="ribbon">📖 ${dn()}, read this aloud</div>
        ${ue===0?`<h2 class="chtitle">${Xe(I.title)}</h2>`:""}
        <p class="story">${ge}</p>${q(ge)}
        <div class="pages">Page ${ue+1} of ${I.read.length}</div></div>
        <div class="actions">${P()}<button class="chunky" data-act="next">${Ee?"Stop the story here ✋":"Turn the page →"}</button></div>`),Pe.settings.narration&&Vi(fn(ge))}else if($==="stop")vt.stop(),z(`${y()}<div class="card child"><div class="ribbon gold">✋ The story stops here!</div>
        <p class="big">${re(I.question)}</p>
        <p class="look">👀 ${Xe(rn())}, look at ${dn()}. What do <i>you</i> think?</p></div>
        <div class="actions">${P()}<button class="chunky" data-act="next">👤 ${dn()}'s turn</button></div>`),Pe.settings.narration&&Vi(fn(re(I.question)));else if($==="cover")ne("🙈","Grown-ups only for a moment!",`${Xe(rn())}, cover your eyes. ${dn()} has a secret card to read.`,"I'm the grown-up, show me");else if($==="parent"){const ue=I.parent;z(`${y()}<div class="card parent"><div class="ptag">👤 For ${dn()} only</div>
        <p class="warn">Don't tell the answer yet! Ask:</p>
        <p class="ask">"${re(ue.ask)}"</p>
        <p class="sub">If they're stuck, try:</p><ul>${ue.hints.map(Ee=>`<li>${re(Ee)}</li>`).join("")}</ul>
        ${ue.note?`<p class="note">💡 ${re(ue.note)}</p>`:""}
        <details><summary>🔑 What really happens (just for you)</summary><p>${re(ue.answer)}</p></details></div>
        <div class="actions">${P()}<button class="link" data-act="next">Skip the talk</button><button class="chunky mint" data-act="talked">✅ We talked about it</button></div>`)}else if($==="handback")ne("👉",`Pass it back to ${Xe(rn())}!`,`Now it's ${Xe(rn())}'s turn to guess what happens next.`,"I'm ready! 🙋");else if($==="predict")J(I.predict[+K],+K);else if($==="great"){vt.pick();const ue=de.answers.filter(Boolean);z(`${y()}<div class="card child"><div class="ribbon gold">🌟 Great thinking, ${Xe(rn())}!</div>
        ${ue.length?`<p class="sub">You thought:</p><ul class="said">${ue.map(Ee=>`<li>${Xe(Ee)}</li>`).join("")}</ul>`:""}
        <p class="big">Let's find out what really happened…</p></div>
        <div class="actions">${P()}<button class="chunky gold" data-act="next">✨ Let's find out!</button></div>`)}else if($==="reveal"){const ue=I.reveal.map(re).join('</p><p class="story">');z(`${y()}<div class="card read reveal"><div class="ribbon gold">✨ What happened</div>
        <p class="story">${ue}</p>${q(ue)}<p class="pages">📖 ${dn()}, read this aloud</p></div>
        <div class="actions">${P()}<button class="chunky" data-act="next">What does Allah tell us? →</button></div>`),Pe.settings.narration&&Vi(fn(ue))}else if($==="ayah")z(`${y()}<div class="card ayah"><div class="ribbon dusk">🌙 What Allah tells us</div>
        ${I.ayat.map(ue=>`<blockquote>${ue.ar?`<p class="ar" lang="ar" dir="rtl">${ue.ar}</p>`:""}<p>${Xe(ue.text)}</p><cite>Qur'an · ${Xe(ue.ref)}</cite></blockquote>`).join("")}
        ${I.hadith?`<div class="hadith"><b>From the Prophet <span class="honor">ﷺ</span>'s time</b><p>${re(I.hadith.text)}</p><cite>${Xe(I.hadith.src)}</cite></div>`:""}
        <div class="explain"><span>👤 For ${dn()}: how to explain it</span><p>${re(I.explain)}</p></div></div>
        <div class="actions">${P()}<button class="chunky" data-act="next">Let's talk about it →</button></div>`);else if($==="reflect"){const ue=I.reflect;z(`${y()}<div class="card parent talk"><div class="ptag">💬 Talk together: ${dn()} &amp; ${Xe(rn())}</div>
        <p class="ask">${re(ue.q)}</p>
        <p class="note">👤 For ${dn()}: ${re(ue.tip)}</p>
        <div class="apply"><b>🌱 Try it this week</b><p>${re(ue.apply)}</p></div></div>
        <div class="actions">${P()}<button class="link" data-act="next">Save it for tomorrow</button><button class="chunky mint" data-act="reflected">✅ We talked about it</button></div>`),Pe.settings.narration&&Vi(fn(re(ue.q)))}else $==="done"&&Me()}function ne(H,I,V,$){s("panel",!1),t(),Ne("coverEmoji").textContent=H,Ne("coverTitle").innerHTML=I,Ne("coverText").innerHTML=V,Ne("coverBtn").innerHTML=$,s("cover")}Ne("coverBtn").addEventListener("click",()=>{s("cover",!1),C()});function J(H,I){const V=de.story,$=ge=>Xn(ge,V);let K="";const re=H.type==="choose"||H.type==="emotion"?u(V,de.ch,fn($(H.prompt))):null,ue=ge=>re&&ge===re?'<small class="lasttag">last time</small>':"",Ee=re?`<p class="tiny again">${St("hourglass")} Last time ${Xe(rn())} said <b>${Xe(re)}</b>. Same again, or something new?</p>`:"";H.type==="choose"?K=`<div class="opts">${H.options.map((ge,Q)=>`<button class="opt ${ge.t===re?"last":""}" data-act="opt" data-v="${Xe(ge.t)}"><span>${ge.e}</span>${Xe(ge.t)}${ue(ge.t)}</button>`).join("")}
        <button class="opt other" data-act="opt" data-v="Something else (said out loud)"><span>💭</span>Something else! (say it out loud)</button></div>${Ee}`:H.type==="say"?K='<div class="mic">🗣️</div><button class="chunky gold wide" data-act="said">I said it!</button>':H.type==="emotion"?K=`<div class="feels">${Cv.map(ge=>`<button class="feel ${ge.t===re?"last":""}" data-act="feel" data-v="${Xe(ge.t)}"><span>${ge.e}</span>${Xe(ge.t)}${ue(ge.t)}</button>`).join("")}</div><p class="tiny">There are no wrong feelings.</p>${Ee}`:H.type==="order"&&(K=`<div class="order">${se(H.cards.length).map(Q=>{const ae=H.cards[Q],R=de.orderPick.indexOf(Q);return`<button class="ocard ${R>=0?"picked":""}" data-act="ord" data-i="${Q}"><em>${R>=0?R+1:""}</em><span>${ae.e}</span>${Xe(ae.t)}</button>`}).join("")}</div>
        <p class="tiny">Tap the cards in the order you think. ${de.orderPick.length?'<button class="link inline" data-act="ordreset">Start again</button>':""}</p>
        ${de.orderPick.length===H.cards.length?`<button class="chunky gold wide" data-act="orddone">That's my order!</button>`:""}`),z(`${y()}<div class="card child"><div class="ribbon gold">🔮 ${Xe(rn())}'s guess</div>
      <p class="big">${$(H.prompt)}</p>${K}</div>
      <div class="actions">${P()}</div>`),Pe.settings.narration&&I===0&&Vi(fn($(H.prompt)))}function se(H){const I=(de.story.id.length*7+de.ch*3)%5,V=[...Array(H).keys()];return H===4?[[2,0,3,1],[1,3,0,2],[3,1,2,0],[2,3,1,0],[1,0,3,2]][I]:V.reverse()}function G(H){const I=de.story.chapters[de.ch].predict[+de.steps[de.i].split(":")[1]];de.answers[+de.steps[de.i].split(":")[1]]=H,Pe.journal.push({t:Date.now(),story:de.story.id,ch:de.ch,kind:"predict",text:`${fn(Xn(I.prompt,de.story))} → ${H}`}),r(),vt.pick(),de.lock=!0;const V=document.querySelector("#panel .card");V==null||V.classList.add("yay"),setTimeout(C,450)}function Me(){var ae,R;const H=de.story,I=(ae=Pe.progress)[R=H.id]||(ae[R]={done:[],finished:!1}),V=!I.done[de.ch];I.done[de.ch]=!0;const $=H.chapters.every((Se,pe)=>I.done[pe]),K=$&&!I.finished;K&&(I.finished=!0,Pe.newlyFinished=H.id),Pe.current=de.ch+1<H.chapters.length?{story:H.id,ch:de.ch+1,step:0}:null,h(),r();const re=Se=>Xn(Se,H),ue=`<p class="nights">${St("moon")} Night <b>${Pe.nights.length}</b> by the fire</p>`;vt.done(),e.burst(16);const Ee=H.chapters.map((Se,pe)=>`<span class="lantern ${I.done[pe]?"lit":""}" title="${Xe(Se.title)}">🏮</span>`).join(""),ge=de.ch+1<H.chapters.length,Q=Pe.journal.filter(Se=>Se.story===H.id&&Se.kind==="predict").slice(-6);z(`${y()}<div class="card read done"><div class="ribbon gold">🌙 Chapter ${de.ch+1} complete!</div>
      <div class="lanterns">${Ee}</div>
      ${$?`<div class="added"><img src="${_(H.icon,!0)}" alt=""/><p><b>${Xe(H.name)} <span class="honor">${H.honor}</span>'s story ${K?"is added to":"is on"} your Story Trail!</b></p></div>
        ${Q.length?`<p class="sub">${Xe(rn())}'s guesses in this story:</p><ul class="said">${Q.map(Se=>`<li>${Xe(Se.text)}</li>`).join("")}</ul>`:""}
        <p class="note">🌱 Tomorrow, ask ${Xe(rn())} to tell <i>you</i> the story, or tell it to someone else in the family.</p>${ue}`:`<p>You've had <b>${Pe.talks}</b> conversations by the fire so far. ${V?"MashaAllah!":""}</p>${ue}
        <p class="note">🌱 "${re(H.chapters[de.ch].reflect.apply)}" is now on your <b>Try it this week</b> list in the Family Journal.</p>
        <p class="note">This is a good place to stop for tonight. Your place is saved 🔖</p>`}</div>
      <div class="actions">${ge?`<button class="link" data-act="home">Stop for tonight</button><button class="chunky" data-act="nextch">Next: ${Xe(H.chapters[de.ch+1].title)} →</button>`:'<button class="chunky gold" data-act="trail">📜 See the Story Trail</button>'}</div>`)}Ne("panel").addEventListener("click",H=>{const I=H.target.closest("[data-act]");if(!I||de.lock)return;Hi();const V=I.dataset.act;if(V==="next")C();else if(V==="back")w();else if(V==="trail")x();else if(V==="home")p();else if(V==="speak")Vi(I.dataset.text);else if(V==="talked")l("talk",fn(Xn(de.story.chapters[de.ch].parent.ask,de.story))),C();else if(V==="reflected")l("reflect",fn(Xn(de.story.chapters[de.ch].reflect.q,de.story))),C();else if(V==="opt")I.classList.add("chosen"),G(I.dataset.v);else if(V==="feel")I.classList.add("chosen"),G(`Feeling: ${I.dataset.v}`);else if(V==="said")G("said it out loud");else if(V==="ord"){const $=+I.dataset.i;de.orderPick.includes($)||(de.orderPick.push($),vt.tap()),J(de.story.chapters[de.ch].predict[+de.steps[de.i].split(":")[1]])}else if(V==="ordreset")de.orderPick=[],J(de.story.chapters[de.ch].predict[+de.steps[de.i].split(":")[1]]);else if(V==="orddone"){const $=de.story.chapters[de.ch].predict[+de.steps[de.i].split(":")[1]],K=de.orderPick.map(re=>$.cards[re].t).join(" → ");de.orderPick=[],G(K)}else V==="nextch"&&L(de.story.id,de.ch+1)}),addEventListener("keydown",H=>{if(H.key==="ArrowRight"&&de.story&&!Ne("panel").classList.contains("hidden")){const I=Ne("panel").querySelector('.actions .chunky[data-act="next"]');I&&I.click()}if(H.key==="ArrowLeft"&&de.story&&!Ne("panel").classList.contains("hidden")){const I=Ne("panel").querySelector('.actions [data-act="back"]');I&&I.click()}});let be=performance.now(),Ue=2;function Ge(H){const I=Math.max(0,Math.min(.05,(H-be)/1e3));be=H,e.update(I),e.place==="camp"&&(Ue-=I,Ue<0&&(Ue=1.5+Math.random()*2.5,vt.crackle())),e.render(),requestAnimationFrame(Ge)}requestAnimationFrame(Ge),a(),p(),Pe.settings.setup||(Ne("startBtn").textContent="Begin by the fire"),window.game={ready:!0,world:e,get state(){var H;return{i:de.story?de.story.id+de.ch+":"+de.i:null,step:de.steps[de.i],story:(H=de.story)==null?void 0:H.id,ch:de.ch,talks:Pe.talks,save:Pe}},start:(H,I=0)=>{Hi(),Pe.settings.setup=!0,L(H,I)},next:C,openTrail:x,openJournal:v,toTitle:p,reset:()=>{Lv(),Pe=Ah(),a(),p()}}}Uv();
