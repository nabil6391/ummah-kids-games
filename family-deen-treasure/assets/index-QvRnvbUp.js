(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const sc=()=>matchMedia("(prefers-reduced-motion: reduce)").matches,sh=n=>String(n??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),ee={red:"#ea5d50",gold:"#f6cf5c",green:"#71cf6d",blue:"#6f95e6",teal:"#5fbfb0",purple:"#a98ae0",orange:"#f3a04c",pink:"#f08cb0",sand:"#e9d6a8",paper:"#fffaf0",skin:"#e0a878",skin2:"#c68a5e",wood:"#c98a4d",sky:"#bfe0f5"},wn=(n,e,t)=>`<ellipse cx="${n}" cy="${t}" rx="1.7" ry="2.4" fill="currentColor" stroke="none"/><ellipse cx="${e}" cy="${t}" rx="1.7" ry="2.4" fill="currentColor" stroke="none"/>`,vr={fire:`<path d="M32 6c3 8 12 12 12 24a12 12 0 0 1-24 0c0-6 3-9 5-12 0 5 2 7 4 8 0-8-1-14 3-20z" fill="${ee.orange}"/><path d="M32 22c2 4 6 6 6 11a6 6 0 0 1-12 0c0-4 3-6 6-11z" fill="${ee.gold}" stroke="none"/><path d="M14 56h36" /><path d="M18 50l28 6M46 50l-28 6" stroke-width="4"/>`,moon:'<path d="M40 8a22 22 0 1 0 16 36A18 18 0 0 1 40 8z" fill="#fff2a8"/><circle cx="50" cy="16" r="2" fill="currentColor" stroke="none"/><circle cx="58" cy="30" r="1.6" fill="currentColor" stroke="none"/>',star:`<path d="M32 6l7.5 16 17.5 2-13 12 3.5 17L32 44l-15.5 9 3.5-17-13-12 17.5-2z" fill="${ee.gold}"/>`,book:`<path d="M8 14q22-6 24 4v36q-2-8-24-4z" fill="${ee.paper}"/><path d="M56 14q-22-6-24 4v36q2-8 24-4z" fill="${ee.paper}"/><path d="M14 24l12 2M14 32l12 2M38 26l12-2M38 34l12-2" stroke-width="2.4"/>`,quran:`<path d="M10 42l22 10 22-10v-8l-22 10-22-10z" fill="${ee.wood}"/><path d="M12 30q20-8 20 2v18q0-8-20-2z" fill="${ee.green}"/><path d="M52 30q-20-8-20 2v18q0-8 20-2z" fill="${ee.green}"/><path d="M18 36l8 1M18 42l8 1M38 37l8-1M38 43l8-1" stroke="#fff" stroke-width="2.4"/><path d="M32 12v6M24 16l3 4M40 16l-3 4" stroke-width="2.6"/>`,scroll:`<path d="M16 14h32v34H16z" fill="${ee.paper}"/><rect x="10" y="10" width="44" height="8" rx="4" fill="${ee.sand}"/><rect x="10" y="46" width="44" height="8" rx="4" fill="${ee.sand}"/><path d="M24 26h16M24 34h12" stroke-width="2.6"/>`,map:`<path d="M8 16l16-6 16 6 16-6v38l-16 6-16-6-16 6z" fill="${ee.sand}"/><path d="M24 10v38M40 16v38" stroke-width="2.4"/><path d="M14 36q6-10 14-4t12-8" stroke="${ee.red}" stroke-dasharray="4 3" stroke-width="2.6"/><path d="M44 24l6 6M50 24l-6 6" stroke="${ee.red}" stroke-width="3"/>`,chest:`<rect x="8" y="26" width="48" height="28" rx="4" fill="${ee.wood}"/><path d="M8 30a24 14 0 0 1 48 0z" fill="${ee.red}"/><rect x="26" y="26" width="12" height="12" rx="2" fill="${ee.gold}"/><path d="M8 30h48" />`,key:`<circle cx="22" cy="24" r="12" fill="${ee.gold}"/><circle cx="22" cy="24" r="4" fill="${ee.paper}"/><path d="M32 30l20 20M46 44l6-6M40 50l6-6" stroke-width="5" stroke="currentColor"/><path d="M32 30l20 20M46 44l6-6M40 50l6-6" stroke="${ee.gold}" stroke-width="2"/>`,lock:`<rect x="14" y="28" width="36" height="28" rx="6" fill="${ee.gold}"/><path d="M20 28v-8a12 12 0 0 1 24 0v8" fill="none" stroke-width="5"/><circle cx="32" cy="40" r="4" fill="currentColor" stroke="none"/><path d="M32 42v8" stroke-width="3.5"/>`,unlock:`<rect x="14" y="28" width="36" height="28" rx="6" fill="${ee.green}"/><path d="M20 28v-8a12 12 0 0 1 24 0" fill="none" stroke-width="5"/><circle cx="32" cy="40" r="4" fill="currentColor" stroke="none"/><path d="M32 42v8" stroke-width="3.5"/>`,house:`<path d="M6 32L32 8l26 24" fill="none" stroke-width="4"/><path d="M12 30v26h40V30" fill="${ee.paper}"/><path d="M12 30L32 12l20 18z" fill="${ee.red}"/><rect x="26" y="38" width="12" height="18" rx="2" fill="${ee.wood}"/><rect x="42" y="36" width="8" height="8" fill="${ee.sky}"/>`,door:`<rect x="16" y="8" width="32" height="50" rx="14" fill="${ee.wood}"/><rect x="22" y="14" width="20" height="38" rx="8" fill="none" stroke-width="2.4"/><circle cx="40" cy="36" r="3" fill="${ee.gold}"/><path d="M8 58h48" stroke-width="3.5"/>`,magnifier:`<circle cx="26" cy="26" r="16" fill="#dfe8ff"/><circle cx="26" cy="26" r="9" fill="none" stroke="#fff" stroke-width="3"/><path d="M38 38l16 16" stroke-width="8"/><path d="M38 38l16 16" stroke="${ee.red}" stroke-width="3.5"/>`,badge:`<path d="M20 36l-6 22 18-8 18 8-6-22" fill="${ee.red}"/><circle cx="32" cy="24" r="18" fill="${ee.gold}"/><path d="M32 13l3.5 7 8 1-6 5.5 1.5 8-7-4-7 4 1.5-8-6-5.5 8-1z" fill="${ee.paper}" stroke-width="2.2"/>`,tick:`<path d="M12 34l14 14 26-30" fill="none" stroke-width="11"/><path d="M12 34l14 14 26-30" fill="none" stroke="${ee.green}" stroke-width="5"/>`,hand:`<path d="M22 30V14a4 4 0 0 1 8 0v14l2-18a4 4 0 0 1 8 0v18l2-10a4 4 0 0 1 8 0v18c0 12-8 20-18 20S14 50 14 38v-6a4 4 0 0 1 8 0z" fill="${ee.skin}"/>`,talk:`<path d="M8 12h30a6 6 0 0 1 6 6v14a6 6 0 0 1-6 6H24l-10 8v-8H8a6 6 0 0 1-6-6V18a6 6 0 0 1 6-6z" fill="${ee.blue}" transform="translate(4 0)"/><path d="M34 30h22a5 5 0 0 1 5 5v12a5 5 0 0 1-5 5h-4v7l-9-7H34a5 5 0 0 1-5-5V35a5 5 0 0 1 5-5z" fill="${ee.gold}"/><path d="M16 22h16M16 28h10" stroke="#fff" stroke-width="2.6"/>`,ear:`<path d="M20 26a14 14 0 0 1 28 0c0 10-8 10-10 18-1 6-5 10-10 10-4 0-7-3-7-7" fill="${ee.skin}"/><path d="M30 28a5 5 0 0 1 10 0c0 5-5 5-6 10" fill="none" stroke-width="2.6"/>`,eye:`<path d="M4 32q28-26 56 0Q32 58 4 32z" fill="#fff"/><circle cx="32" cy="32" r="9" fill="${ee.teal}"/><circle cx="32" cy="32" r="4" fill="currentColor" stroke="none"/><circle cx="36" cy="28" r="1.8" fill="#fff" stroke="none"/>`,heart:`<path d="M32 56S6 40 6 22a13 13 0 0 1 26-4 13 13 0 0 1 26 4c0 18-26 34-26 34z" fill="${ee.pink}"/><ellipse cx="20" cy="20" rx="4" ry="2.5" fill="#fff" stroke="none" transform="rotate(-30 20 20)"/>`,people:`<circle cx="20" cy="22" r="9" fill="${ee.skin2}"/><path d="M4 56c0-12 7-18 16-18s16 6 16 18z" fill="${ee.blue}"/><circle cx="44" cy="20" r="11" fill="${ee.skin}"/><path d="M26 56c0-13 8-20 18-20s18 7 18 20z" fill="${ee.green}"/>${wn(17,23,22)}${wn(40,48,20)}`,child:`<path d="M18 20a14 14 0 0 1 28 0v10H18z" fill="${ee.purple}"/><circle cx="32" cy="24" r="12" fill="${ee.skin}"/><path d="M12 58c0-12 9-20 20-20s20 8 20 20z" fill="${ee.teal}"/>${wn(27.5,36.5,24)}<path d="M28 30q4 3 8 0" fill="none" stroke-width="2.2"/>`,grownup:`<path d="M14 58c0-14 8-22 18-22s18 8 18 22z" fill="${ee.blue}"/><circle cx="32" cy="20" r="13" fill="${ee.skin2}"/><path d="M19 18a13 13 0 0 1 26 0v6q-13-6-26 0z" fill="${ee.paper}"/>${wn(27,37,22)}<path d="M27 28q5 4 10 0" fill="none" stroke-width="2.2"/>`,family:`<circle cx="18" cy="18" r="9" fill="${ee.skin2}"/><path d="M4 50c0-12 6-18 14-18s14 6 14 18z" fill="${ee.blue}"/><circle cx="46" cy="18" r="9" fill="${ee.skin}"/><path d="M32 50c0-12 6-18 14-18s14 6 14 18z" fill="${ee.pink}"/><circle cx="32" cy="36" r="7" fill="${ee.skin}"/><path d="M22 60c0-9 4-14 10-14s10 5 10 14z" fill="${ee.gold}"/>${wn(15.5,20.5,18)}${wn(43.5,48.5,18)}${wn(30,34,36)}`,chalk:`<rect x="6" y="10" width="52" height="38" rx="3" fill="${ee.wood}"/><rect x="11" y="15" width="42" height="28" fill="#3f6b58"/><path d="M18 24h14M18 32h22M18 38h10" stroke="#fff" stroke-width="2.4"/><path d="M20 48v10M44 48v10" stroke-width="3.5"/>`,camel:`<path d="M14 56V40q-6-8 2-16 6-6 14-4 6-10 14-8 6 2 8 8 4 2 4 8v8l-6 2v18" fill="${ee.sand}"/><path d="M12 24q6-10 20-8" fill="none" stroke-width="2.4"/><path d="M26 40v16M40 40v16" stroke-width="3"/><circle cx="50" cy="26" r="1.8" fill="currentColor" stroke="none"/>`,dua:`<path d="M20 58V34q-10-2-12-14l6-10q6 0 8 8l4 8v32z" fill="${ee.skin}"/><path d="M44 58V34q10-2 12-14l-6-10q-6 0-8 8l-4 8v32z" fill="${ee.skin}"/><path d="M26 44h12" stroke-width="2"/>`,mosque:`<path d="M10 58V34h44v24z" fill="${ee.paper}"/><path d="M14 34a18 14 0 0 1 36 0z" fill="${ee.teal}"/><path d="M32 12v8" stroke-width="3"/><circle cx="32" cy="11" r="2.2" fill="${ee.gold}"/><rect x="26" y="42" width="12" height="16" rx="6" fill="${ee.wood}"/><path d="M6 58V22l4-6 4 6v36M50 58V22l4-6 4 6v36" fill="${ee.paper}"/>`,compass:`<circle cx="32" cy="32" r="24" fill="${ee.sand}"/><circle cx="32" cy="32" r="18" fill="${ee.paper}"/><path d="M32 14l6 18-6 18-6-18z" fill="${ee.red}"/><path d="M32 32l-6-0 6 18 6-18z" fill="#fff" stroke="none"/><circle cx="32" cy="32" r="3" fill="currentColor" stroke="none"/>`,puzzle:`<path d="M12 14h16a6 6 0 1 1 12 0h12v16a6 6 0 1 0 0 12v16H36a6 6 0 1 1-12 0H12V42a6 6 0 1 1 0-12z" fill="${ee.purple}"/>`,lantern:`<path d="M22 20h20l4 28H18z" fill="#fff2a8"/><rect x="20" y="12" width="24" height="8" rx="3" fill="${ee.wood}"/><path d="M32 12V6M18 48h28l-4 8H22z" fill="${ee.wood}"/><path d="M32 28c2 3 4 5 4 8a4 4 0 0 1-8 0c0-3 2-5 4-8z" fill="${ee.orange}" stroke-width="2"/>`,gem:`<path d="M16 12h32l10 14-26 30L6 26z" fill="${ee.teal}"/><path d="M6 26h52M16 12l10 14 6-14 6 14 10-14M26 26l6 30 6-30" fill="none" stroke-width="2.4"/>`,sound:'<path d="M8 24h10l14-12v40L18 40H8z" fill="#fff"/><path d="M40 22a14 14 0 0 1 0 20M46 14a24 24 0 0 1 0 36" fill="none" stroke-width="4.5"/>',mute:`<path d="M8 24h10l14-12v40L18 40H8z" fill="#fff"/><path d="M40 24l16 16M56 24L40 40" stroke-width="6"/><path d="M40 24l16 16M56 24L40 40" stroke="${ee.red}" stroke-width="2.8"/>`,help:`<circle cx="32" cy="32" r="24" fill="${ee.blue}"/><path d="M24 26a8 8 0 1 1 12 7c-3 2-4 3-4 7" fill="none" stroke="#fff" stroke-width="5"/><circle cx="32" cy="47" r="3.2" fill="#fff" stroke="none"/>`,home:`<path d="M8 30L32 10l24 20" fill="none" stroke-width="4"/><path d="M14 28v26h36V28" fill="${ee.paper}"/><rect x="26" y="38" width="12" height="16" rx="2" fill="${ee.wood}"/>`,pause:'<rect x="14" y="12" width="12" height="40" rx="3" fill="#fff"/><rect x="38" y="12" width="12" height="40" rx="3" fill="#fff"/>',play:'<path d="M18 10l34 22-34 22z" fill="#fff"/>',back:'<path d="M38 12L16 32l22 20" fill="none" stroke-width="9"/><path d="M38 12L16 32l22 20" fill="none" stroke="#fff" stroke-width="4"/>',pencil:`<path d="M12 52l4-14 28-28 10 10-28 28z" fill="${ee.gold}"/><path d="M40 14l10 10" /><path d="M16 38l10 10" /><path d="M12 52l4-14 10 10z" fill="${ee.skin}"/>`,dice:`<rect x="10" y="10" width="44" height="44" rx="9" fill="#fff"/><circle cx="22" cy="22" r="4" fill="currentColor" stroke="none"/><circle cx="42" cy="22" r="4" fill="currentColor" stroke="none"/><circle cx="32" cy="32" r="4" fill="${ee.red}" stroke="none"/><circle cx="22" cy="42" r="4" fill="currentColor" stroke="none"/><circle cx="42" cy="42" r="4" fill="currentColor" stroke="none"/>`,mic:`<rect x="22" y="6" width="20" height="32" rx="10" fill="${ee.red}"/><path d="M14 30a18 18 0 0 0 36 0M32 48v10M22 58h20" fill="none" stroke-width="4"/>`,palette:`<path d="M32 8a24 24 0 1 0 8 46c4-2 2-6 0-8s-2-6 4-6h4a8 8 0 0 0 8-8A24 24 0 0 0 32 8z" fill="${ee.paper}"/><circle cx="20" cy="26" r="4" fill="${ee.red}" stroke="none"/><circle cx="30" cy="18" r="4" fill="${ee.gold}" stroke="none"/><circle cx="42" cy="20" r="4" fill="${ee.green}" stroke="none"/><circle cx="18" cy="38" r="4" fill="${ee.blue}" stroke="none"/>`,mask:`<path d="M10 14q22 10 44 0v20a22 22 0 0 1-44 0z" fill="${ee.purple}"/><path d="M20 28q4-4 8 0M36 28q4-4 8 0" fill="none" stroke-width="3"/><path d="M24 42q8 6 16 0" fill="none" stroke-width="3"/>`,question:`<circle cx="32" cy="32" r="24" fill="${ee.gold}"/><path d="M24 26a8 8 0 1 1 12 7c-3 2-4 3-4 7" fill="none" stroke-width="5"/><circle cx="32" cy="47" r="3.2" fill="currentColor" stroke="none"/>`,ban:`<circle cx="32" cy="32" r="24" fill="#fff"/><circle cx="32" cy="32" r="16" fill="none" stroke="${ee.red}" stroke-width="6"/><path d="M21 21l22 22" stroke="${ee.red}" stroke-width="6"/>`,sun:`<circle cx="32" cy="32" r="14" fill="${ee.gold}"/><path d="M32 6v8M32 50v8M6 32h8M50 32h8M13 13l6 6M45 45l6 6M13 51l6-6M45 19l6-6" stroke-width="4"/>`,cloud:'<path d="M18 48a10 10 0 0 1-2-20 14 14 0 0 1 27-4 10 10 0 0 1 5 24z" fill="#fff"/>',water:'<path d="M32 6c8 12 16 20 16 32a16 16 0 0 1-32 0C16 26 24 18 32 6z" fill="#78c4dc"/><ellipse cx="25" cy="38" rx="3" ry="6" fill="#e9f7fb" stroke="none"/>',brick:`<rect x="6" y="14" width="24" height="12" fill="${ee.wood}"/><rect x="34" y="14" width="24" height="12" fill="${ee.orange}"/><rect x="18" y="30" width="26" height="12" fill="${ee.orange}"/><rect x="6" y="30" width="8" height="12" fill="${ee.wood}"/><rect x="48" y="30" width="10" height="12" fill="${ee.wood}"/><rect x="6" y="46" width="24" height="12" fill="${ee.orange}"/><rect x="34" y="46" width="24" height="12" fill="${ee.wood}"/>`,bee:`<ellipse cx="32" cy="36" rx="16" ry="12" fill="${ee.gold}"/><path d="M26 25v22M34 25v22M42 28v16" stroke-width="3.5"/><ellipse cx="22" cy="20" rx="10" ry="6" fill="#fff" transform="rotate(-25 22 20)"/><ellipse cx="42" cy="20" rx="10" ry="6" fill="#fff" transform="rotate(25 42 20)"/><circle cx="14" cy="36" r="6" fill="${ee.gold}"/><circle cx="12" cy="35" r="1.6" fill="currentColor" stroke="none"/>`,leaf:`<path d="M12 52C12 26 30 10 54 10c0 26-16 44-42 42z" fill="${ee.green}"/><path d="M14 50L46 18" fill="none" stroke-width="2.8"/>`,school:`<path d="M8 58V28l24-14 24 14v30z" fill="${ee.paper}"/><path d="M8 28l24-14 24 14" fill="none" stroke-width="4"/><rect x="26" y="40" width="12" height="18" rx="2" fill="${ee.wood}"/><circle cx="32" cy="30" r="5" fill="${ee.gold}"/><path d="M32 8v8" stroke-width="3"/><path d="M32 8h10l-10 5z" fill="${ee.red}"/>`,friends:`<circle cx="22" cy="22" r="10" fill="${ee.skin}"/><circle cx="44" cy="24" r="9" fill="${ee.skin2}"/><path d="M6 56c0-12 7-18 16-18s16 6 16 18z" fill="${ee.green}"/><path d="M30 56c0-11 6-16 14-16s14 5 14 16z" fill="${ee.orange}"/>${wn(19,25,22)}${wn(41.5,46.5,24)}<path d="M19 28q3 2 6 0M41 29q3 2 6 0" fill="none" stroke-width="2"/>`,money:`<ellipse cx="32" cy="40" rx="22" ry="10" fill="${ee.gold}"/><ellipse cx="32" cy="32" rx="22" ry="10" fill="${ee.gold}"/><ellipse cx="32" cy="24" rx="22" ry="10" fill="#fff2a8"/><ellipse cx="32" cy="24" rx="12" ry="5" fill="none" stroke-width="2.2"/>`,phone:`<rect x="18" y="6" width="28" height="52" rx="6" fill="#fff"/><rect x="22" y="12" width="20" height="36" rx="2" fill="${ee.sky}"/><circle cx="32" cy="53" r="2.2" fill="currentColor" stroke="none"/>`,sparkle:`<path d="M26 6l5 15 15 5-15 5-5 15-5-15-15-5 15-5z" fill="${ee.gold}"/><path d="M48 34l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#fff"/>`,crystal:`<path d="M20 48l12-40 12 40z" fill="${ee.purple}"/><path d="M14 56h36l-6-8H20z" fill="${ee.blue}"/><path d="M32 8v40" stroke-width="2"/>`,seedling:`<path d="M12 56q20-6 40 0z" fill="${ee.wood}"/><path d="M32 52V30" stroke-width="4"/><path d="M32 36q-2-14-16-14 2 14 16 14z" fill="${ee.green}"/><path d="M32 30q2-14 16-14-2 14-16 14z" fill="#b4de94"/>`,rehal:`<path d="M8 48l24-16 24 16-24 10z" fill="${ee.wood}"/><path d="M14 30q18-8 18 0v14q0-8-18 0z" fill="${ee.paper}"/><path d="M50 30q-18-8-18 0v14q0-8 18 0z" fill="${ee.paper}"/>`,juz:`<path d="M12 10h36a4 4 0 0 1 4 4v38a4 4 0 0 1-4 4H12z" fill="${ee.teal}"/><path d="M12 10v46M20 10v46" stroke-width="2.4"/><rect x="28" y="22" width="18" height="12" rx="2" fill="${ee.paper}"/>`,flag:`<path d="M16 58V8" stroke-width="5"/><path d="M18 10h30l-6 12 6 12H18z" fill="${ee.red}"/>`,stop:`<path d="M20 8h24l16 16v24L44 60H20L4 44V20z" fill="${ee.red}"/><path d="M20 32h24" stroke="#fff" stroke-width="6"/>`,shield:`<path d="M32 6l22 8v18c0 14-10 22-22 28C20 54 10 46 10 32V14z" fill="${ee.blue}"/><path d="M22 32l7 7 13-14" fill="none" stroke="#fff" stroke-width="5"/>`,trophy:`<path d="M18 8h28v14a14 14 0 0 1-28 0z" fill="${ee.gold}"/><path d="M18 14H8a10 10 0 0 0 10 10M46 14h10a10 10 0 0 1-10 10" fill="none" stroke-width="3.5"/><path d="M28 36h8v8h-8z" fill="${ee.gold}"/><rect x="18" y="44" width="28" height="10" rx="3" fill="${ee.wood}"/>`,hourglass:`<path d="M16 8h32l-12 24 12 24H16l12-24z" fill="#fff"/><path d="M22 14h20l-10 14zM24 52h16l-8-10z" fill="${ee.sand}" stroke="none"/><path d="M12 8h40M12 56h40" stroke-width="4"/>`},Nr=new Map;function vt(n,e=""){const t=n+"|"+e;return Nr.has(t)||Nr.set(t,`<span class="dk-ico ${e}" data-ic="${n}"><svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">${vr[n]||vr.star}</svg></span>`),Nr.get(t)}const rh=n=>n in vr,ah=n=>n?n.startsWith("data:")||n.startsWith("blob:")||n.startsWith("/")||n.startsWith("http")?`<img src="${n}" alt="" ${n.startsWith("data:image/svg")?'class="contain"':""}>`:rh(n)?vt(n):`<span class="glyph">${n}</span>`:"";function Fo(n){const e=n.tag?`<span class="tag ${n.tagKind||""}">${n.tag}</span>`:"",t=n.pips?`<span class="dkpips">${Array.from({length:n.pips[1]},(r,a)=>`<i class="${a<n.pips[0]?"on":""}"></i>`).join("")}</span>`:"",i=n.meta||t?`<div class="meta">${t}${n.meta||""}</div>`:"",s=`${n.attr?`${n.attr}="${sh(n.id)}"`:""} ${n.data||""} style="--i:${n.i||0}${n.colorHex?`;--c:${n.colorHex}`:""}${n.darkHex?`;--cd:${n.darkHex}`:""}" ${n.locked?"disabled":""}`;return`<button class="dkcard ${n.color||""} ${n.locked?"locked":""} ${n.done?"done":""} ${n.cls||""}" ${s}>
    ${e}<span class="pic ${n.tall?"tall":""}">${ah(n.locked&&!n.keepPic?"lock":n.pic)}</span>
    <h3>${n.title}</h3>${n.sub?`<span class="sub">${n.sub}</span>`:""}${i}</button>`}const ko=n=>`<div class="dksteps">${n.map((e,t)=>`<div class="dkstep" style="--i:${t}">${vt(e.icon||"hand")}${e.title?`<b>${e.title}</b>`:""}<p>${e.text}</p></div>`).join("")}</div>`,oh=(n,e,t="",i=0)=>`<span class="dkchip ${t}" style="--i:${i}">${n?vt(n):""}${e}</span>`,lh=n=>`<div class="dkstats">${n.map((e,t)=>oh(e[0],e[1],e[2]||"",t)).join("")}</div>`;function ch(n,{tone:e="",glow:t=!1,sparkles:i=0}={}){const s=i?`<span class="sparkles">${Array.from({length:i},(r,a)=>`<i style="--i:${a};left:${8+a*37%84}%;top:${10+a*53%55}%"></i>`).join("")}</span>`:"";return`<div class="dkhero ${e?"dk-"+e:""}">${s}${t?'<span class="glow"></span>':""}${n.map((r,a)=>r.src?`<img src="${r.src}" alt="" class="${r.cls||""}" style="--i:${a}">`:vt(r.icon,r.cls||"").replace("style=","").replace('class="dk-ico',`style="--i:${a}" class="dk-ico`)).join("")}</div>`}function hh(n){n&&([...n.children].forEach((e,t)=>e.style.setProperty("--i",t)),n.classList.add("dkstagger"))}const rc=()=>{let n=document.getElementById("dkfx");return n||(n=document.createElement("div"),n.id="dkfx",document.body.appendChild(n)),n},Oo=["#f6cf5c","#ea5d50","#71cf6d","#6f95e6","#f08cb0","#5fbfb0","#fff"];function uh(n,e,{n:t=28,spread:i=180,up:s=130}={}){if(sc())return;const r=rc();for(let a=0;a<t;a++){const o=document.createElement("i");o.className="dkconf";const l=-Math.PI/2+(Math.random()-.5)*2.2,c=i*(.4+Math.random()*.6);o.style.cssText=`left:${n}px;top:${e}px;background:${Oo[a%Oo.length]};--dx:${Math.cos(l)*c}px;--dy:${Math.sin(l)*c*.5+s}px;--rot:${(Math.random()-.5)*900}deg;--kt:${.9+Math.random()*.7}s;transform:rotate(${Math.random()*360}deg)`,r.appendChild(o),setTimeout(()=>o.remove(),1700)}}function dh(n,e,t=6){if(!sc())for(let i=0;i<t;i++){const s=document.createElement("i");s.className="dkstar",s.innerHTML=`<svg viewBox="0 0 64 64" fill="none" stroke="#6b2f1a" stroke-width="3" stroke-linejoin="round">${vr.star}</svg>`,s.style.cssText=`left:${n}px;top:${e}px;--dx:${(Math.random()-.5)*140}px;--dy:${-40-Math.random()*80}px;--kt:${.7+Math.random()*.5}s`,rc().appendChild(s),setTimeout(()=>s.remove(),1300)}}function fh(n,e=!1){var r;const t=(r=n==null?void 0:n.getBoundingClientRect)==null?void 0:r.call(n);if(!t)return;const i=t.left+t.width/2,s=t.top+t.height/2;uh(i,s,{n:e?44:20,spread:e?280:150}),e&&dh(i,s,8)}const _r="#4a2c1a",ph='<filter id="boil" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="1"/><feDisplacementMap in="SourceGraphic" scale="3.5" xChannelSelector="R" yChannelSelector="G"/></filter>',br=(n,e,t)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n} ${e}" width="${n}" height="${e}"><defs>${ph}</defs>
<g filter="url(#boil)" fill="none" stroke="${_r}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">${t}</g></svg>`,wr=(n,e,t=1)=>`
  <ellipse cx="${n-10*t}" cy="${e+.5}" rx="${3.1*t}" ry="${4.3*t}" fill="#2a1a10" stroke="none"/>
  <ellipse cx="${n+14*t}" cy="${e-.5}" rx="${2.9*t}" ry="${4*t}" fill="#2a1a10" stroke="none"/>
  <ellipse cx="${n-20*t}" cy="${e+16*t}" rx="${7*t}" ry="${4*t}" fill="#f4a6b8" stroke="none" opacity=".85"/>
  <ellipse cx="${n+24*t}" cy="${e+14*t}" rx="${6*t}" ry="${3.6*t}" fill="#f4a6b8" stroke="none" opacity=".85"/>
  <path d="M${n-2*t} ${e+17*t} Q${n+6*t} ${e+25*t} ${n+14*t} ${e+16*t}" stroke-width="3"/>`,Ar=(n,e,t,i,s)=>{const r=(a,o)=>s?`<path d="M${a} ${n-22} L${o} ${n-2}" stroke-width="14"/><path d="M${a} ${n-22} L${o} ${n-2}" stroke="${s}" stroke-width="7"/>`:"";return`<g class="poseA">${r(e,e-1)}${r(t,t+1)}<ellipse cx="${e-3}" cy="${n+3}" rx="13" ry="7" fill="${i}"/><ellipse cx="${t+5}" cy="${n+3}" rx="13" ry="7" fill="${i}"/></g>
  <g class="poseB">${r(e+2,e-12)}${r(t-2,t+13)}<ellipse cx="${e-15}" cy="${n+1}" rx="13" ry="7" fill="${i}"/><ellipse cx="${t+18}" cy="${n-1}" rx="13" ry="7" fill="${i}"/></g>`},ai=(n,e,t,i,s)=>`<path d="M${n} ${e} L${t} ${i}" stroke-width="13"/><path d="M${n} ${e} L${t} ${i}" stroke="${s}" stroke-width="6"/>
  <circle cx="${t}" cy="${i}" r="6.5" fill="#fff0" stroke-width="0"/>`,oi=(n,e,t)=>`<circle cx="${n}" cy="${e}" r="7" fill="${t}" stroke-width="3"/>`,xa=(()=>{const n="#e0a878",e="#f2a6b5";return br(200,240,`
  ${Ar(222,86,116,"#8a5a3a",null)}
  <path d="M72 124 Q100 114 128 124 L146 212 Q100 224 56 212 Z" fill="${e}"/>
  <path d="M62 196 Q100 208 142 196" stroke-width="3"/>
  <circle cx="84" cy="172" r="3" fill="${_r}" stroke="none"/><circle cx="118" cy="168" r="3" fill="${_r}" stroke="none"/>
  ${ai(76,140,56,172,e)}${oi(56,174,n)}
  ${ai(128,138,152,158,e)}${oi(152,160,n)}
  <path d="M156 156 L166 142" stroke-width="7"/>
  <circle cx="174" cy="130" r="15" fill="#d8f0f6"/><path d="M168 124 Q172 120 178 121" stroke="#fff" stroke-width="3"/>
  <path d="M100 20 C144 20 160 50 158 84 C157 106 150 122 138 136 Q100 150 62 136 C48 120 42 104 42 84 C42 48 60 20 100 20 Z" fill="#8fc7e8"/>
  <path d="M68 128 Q100 140 132 128" stroke-width="3"/>
  <ellipse cx="106" cy="84" rx="36" ry="38" fill="${n}"/>
  <path d="M70 76 Q104 34 142 72" stroke-width="3"/>
  ${wr(104,84)}`)})(),ya=(()=>{const n="#c68a5e",e="#f6d36b";return br(200,240,`
  ${Ar(222,88,116,"#5b3520","#6d8fc9")}
  <path d="M74 122 Q102 114 130 122 L138 198 Q102 206 66 198 Z" fill="${e}"/>
  <path d="M102 124 L102 150" stroke-width="3"/><circle cx="102" cy="160" r="2.5" fill="${_r}" stroke="none"/>
  ${ai(78,138,58,166,e)}${oi(58,168,n)}
  <g><rect x="44" y="150" width="14" height="40" rx="6" fill="#fbf3dc" transform="rotate(-25 51 170)"/><path d="M40 166 L60 158" stroke="#c9483e" stroke-width="3"/></g>
  ${ai(128,136,150,160,e)}${oi(150,162,n)}
  <circle cx="60" cy="84" r="9" fill="${n}"/>
  <circle cx="102" cy="80" r="42" fill="${n}"/>
  <path d="M60 70 Q64 44 82 38" stroke-width="8"/><path d="M60 70 Q64 44 82 38" stroke="#3a2a22" stroke-width="3"/>
  <path d="M60 60 Q102 22 144 58 L144 64 Q102 50 60 66 Z" fill="#fbf7ee"/>
  <path d="M72 52 L76 58 M88 44 L90 51 M104 41 L104 48 M120 44 L118 51 M134 51 L130 57" stroke-width="2.5"/>
  ${wr(104,84)}`)})(),xr=(()=>{const n="#d79a6b",e="#8f7bd6",t="#e7b6c8";return br(200,300,`
  ${Ar(284,86,116,"#6b3f2a",null)}
  <path d="M70 126 Q100 116 130 126 L150 274 Q100 288 50 274 Z" fill="${e}"/>
  <path d="M100 150 L100 270" stroke-width="3"/>
  ${ai(74,144,60,200,e)}${oi(60,204,n)}
  ${ai(128,142,146,196,e)}${oi(146,200,n)}
  <path d="M100 26 C140 26 154 52 152 82 C151 102 146 118 138 132 Q100 150 62 132 C52 118 48 102 48 82 C48 52 60 26 100 26 Z" fill="${t}"/>
  <path d="M60 126 Q100 142 140 126 L144 150 Q100 166 56 150 Z" fill="${t}"/>
  <ellipse cx="104" cy="84" rx="31" ry="34" fill="${n}"/>
  <path d="M73 76 Q104 40 136 74" stroke-width="3"/>
  ${wr(102,84,.85)}`)})(),yr=(()=>{const n="#b07650",e="#bfd8ee",t="#6fb8a8";return br(200,300,`
  ${Ar(284,86,116,"#5b3520",null)}
  <path d="M68 124 Q100 114 132 124 L144 276 Q100 288 56 276 Z" fill="${e}"/>
  <path d="M70 126 Q84 120 92 122 L90 230 Q78 232 66 228 Z" fill="${t}"/>
  <path d="M130 126 Q116 120 108 122 L110 230 Q122 232 134 228 Z" fill="${t}"/>
  ${ai(72,142,58,198,e)}${oi(58,202,n)}
  ${ai(130,140,148,194,e)}${oi(148,198,n)}
  <circle cx="66" cy="86" r="8" fill="${n}"/>
  <circle cx="102" cy="82" r="36" fill="${n}"/>
  <path d="M68 92 Q70 126 102 128 Q134 126 136 92 Q128 110 102 112 Q76 110 68 92 Z" fill="#3a2a22"/>
  <path d="M66 62 Q102 28 138 60 L138 66 Q102 54 66 68 Z" fill="#fbf7ee"/>
  ${wr(102,80,.85)}`)})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fo="170",mh=0,zo=1,gh=2,ac=1,vh=2,In=3,li=0,Yt=1,yt=2,ni=0,ji=1,Ma=2,Bo=3,Ho=4,_h=5,xi=100,xh=101,yh=102,Mh=103,Sh=104,bh=200,wh=201,Ah=202,Eh=203,Sa=204,ba=205,Th=206,Ch=207,Rh=208,Ph=209,Lh=210,Ih=211,Dh=212,Uh=213,Nh=214,wa=0,Aa=1,Ea=2,ts=3,Ta=4,Ca=5,Ra=6,Pa=7,oc=0,Fh=1,kh=2,ii=0,Oh=1,zh=2,Bh=3,Hh=4,Gh=5,Vh=6,Wh=7,lc=300,ns=301,is=302,La=303,Ia=304,Er=306,Es=1e3,Si=1001,Da=1002,It=1003,$h=1004,Os=1005,vn=1006,Fr=1007,bi=1008,zn=1009,cc=1010,hc=1011,Ts=1012,po=1013,Ei=1014,Dn=1015,Ti=1016,mo=1017,go=1018,ss=1020,uc=35902,dc=1021,fc=1022,ln=1023,pc=1024,mc=1025,Ki=1026,rs=1027,Tr=1028,vo=1029,gc=1030,_o=1031,xo=1033,ur=33776,dr=33777,fr=33778,pr=33779,Ua=35840,Na=35841,Fa=35842,ka=35843,Oa=36196,za=37492,Ba=37496,Ha=37808,Ga=37809,Va=37810,Wa=37811,$a=37812,Xa=37813,qa=37814,Ya=37815,Za=37816,Ja=37817,ja=37818,Ka=37819,Qa=37820,eo=37821,mr=36492,to=36494,no=36495,vc=36283,io=36284,so=36285,ro=36286,Xh=3200,qh=3201,_c=0,Yh=1,ti="",qt="srgb",os="srgb-linear",Cr="linear",lt="srgb",Li=7680,Go=519,Zh=512,Jh=513,jh=514,xc=515,Kh=516,Qh=517,eu=518,tu=519,Vo=35044,Wo="300 es",Un=2e3,Mr=2001;class ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $o=1234567;const Ss=Math.PI/180,Cs=180/Math.PI;function Ri(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function yo(n,e){return(n%e+e)%e}function nu(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function iu(n,e,t){return n!==e?(t-n)/(e-n):0}function bs(n,e,t){return(1-t)*n+t*e}function su(n,e,t,i){return bs(n,e,1-Math.exp(-t*i))}function ru(n,e=1){return e-Math.abs(yo(n,e*2)-e)}function au(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ou(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function lu(n,e){return n+Math.floor(Math.random()*(e-n+1))}function cu(n,e){return n+Math.random()*(e-n)}function hu(n){return n*(.5-Math.random())}function uu(n){n!==void 0&&($o=n);let e=$o+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function du(n){return n*Ss}function fu(n){return n*Cs}function pu(n){return(n&n-1)===0&&n!==0}function mu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function gu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vu(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),f=a((e-i)/2),d=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*u,l*f,o*c);break;case"YZY":n.set(l*f,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*f,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*d,o*c);break;case"YXY":n.set(l*d,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const _u={DEG2RAD:Ss,RAD2DEG:Cs,generateUUID:Ri,clamp:Rt,euclideanModulo:yo,mapLinear:nu,inverseLerp:iu,lerp:bs,damp:su,pingpong:ru,smoothstep:au,smootherstep:ou,randInt:lu,randFloat:cu,randFloatSpread:hu,seededRandom:uu,degToRad:du,radToDeg:fu,isPowerOfTwo:pu,ceilPowerOfTwo:mu,floorPowerOfTwo:gu,setQuaternionFromProperEuler:vu,normalize:Ht,denormalize:Yi};class ge{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,i,s,r,a,o,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],v=s[0],m=s[3],p=s[6],w=s[1],b=s[4],_=s[7],D=s[2],C=s[5],T=s[8];return r[0]=a*v+o*w+l*D,r[3]=a*m+o*b+l*C,r[6]=a*p+o*_+l*T,r[1]=c*v+h*w+u*D,r[4]=c*m+h*b+u*C,r[7]=c*p+h*_+u*T,r[2]=f*v+d*w+g*D,r[5]=f*m+d*b+g*C,r[8]=f*p+d*_+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=t*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(kr.makeScale(e,t)),this}rotate(e){return this.premultiply(kr.makeRotation(-e)),this}translate(e,t){return this.premultiply(kr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kr=new Je;function yc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Sr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xu(){const n=Sr("canvas");return n.style.display="block",n}const Xo={};function xs(n){n in Xo||(Xo[n]=!0,console.warn(n))}function yu(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Mu(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Su(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const nt={enabled:!0,workingColorSpace:os,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===lt&&(n.r=Fn(n.r),n.g=Fn(n.g),n.b=Fn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===lt&&(n.r=Qi(n.r),n.g=Qi(n.g),n.b=Qi(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ti?Cr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Fn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const qo=[.64,.33,.3,.6,.15,.06],Yo=[.2126,.7152,.0722],Zo=[.3127,.329],Jo=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jo=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);nt.define({[os]:{primaries:qo,whitePoint:Zo,transfer:Cr,toXYZ:Jo,fromXYZ:jo,luminanceCoefficients:Yo,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:qo,whitePoint:Zo,transfer:lt,toXYZ:Jo,fromXYZ:jo,luminanceCoefficients:Yo,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}});let Ii;class bu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ii===void 0&&(Ii=Sr("canvas")),Ii.width=e.width,Ii.height=e.height;const i=Ii.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Fn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Fn(t[i]/255)*255):t[i]=Fn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wu=0;class Mc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=Ri(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Or(s[a].image)):r.push(Or(s[a]))}else r=Or(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Or(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Au=0;class kt extends ls{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=Si,s=Si,r=vn,a=bi,o=ln,l=zn,c=kt.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=Ri(),this.name="",this.source=new Mc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Es:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case Da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Es:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case Da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=lc;kt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,i=0,s=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,_=(d+1)/2,D=(p+1)/2,C=(h+f)/4,T=(u+v)/4,I=(g+m)/4;return b>_&&b>D?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=C/i,r=T/i):_>D?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=C/s,r=I/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=T/r,s=I/r),this.set(i,s,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-v)/w,this.z=(f-h)/w,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Eu extends ls{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new kt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Mc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends Eu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Sc extends kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tu extends kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ci{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const f=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||c!==d||h!==g){let m=1-o;const p=l*f+c*d+h*g+u*v,w=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const D=Math.sqrt(b),C=Math.atan2(D,p*w);m=Math.sin(m*C)/D,o=Math.sin(o*C)/D}const _=o*w;if(l=l*m+f*_,c=c*m+d*_,h=h*m+g*_,u=u*m+v*_,m===1-o){const D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>u){const d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-i-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ko.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ko.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zr.copy(this).projectOnVector(e),this.sub(zr)}reflect(e){return this.sub(zr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zr=new N,Ko=new ci;class Ds{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,tn):tn.fromBufferAttribute(r,a),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zs.copy(i.boundingBox)),zs.applyMatrix4(e.matrixWorld),this.union(zs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),Bs.subVectors(this.max,fs),Di.subVectors(e.a,fs),Ui.subVectors(e.b,fs),Ni.subVectors(e.c,fs),qn.subVectors(Ui,Di),Yn.subVectors(Ni,Ui),hi.subVectors(Di,Ni);let t=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-hi.z,hi.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,hi.z,0,-hi.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-hi.y,hi.x,0];return!Br(t,Di,Ui,Ni,Bs)||(t=[1,0,0,0,1,0,0,0,1],!Br(t,Di,Ui,Ni,Bs))?!1:(Hs.crossVectors(qn,Yn),t=[Hs.x,Hs.y,Hs.z],Br(t,Di,Ui,Ni,Bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const An=[new N,new N,new N,new N,new N,new N,new N,new N],tn=new N,zs=new Ds,Di=new N,Ui=new N,Ni=new N,qn=new N,Yn=new N,hi=new N,fs=new N,Bs=new N,Hs=new N,ui=new N;function Br(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ui.fromArray(n,r);const o=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),h=i.dot(ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Cu=new Ds,ps=new N,Hr=new N;class Mo{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Cu.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ps.subVectors(e,this.center);const t=ps.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ps,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ps.copy(e.center).add(Hr)),this.expandByPoint(ps.copy(e.center).sub(Hr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new N,Gr=new N,Gs=new N,Zn=new N,Vr=new N,Vs=new N,Wr=new N;class Ru{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Gr.copy(e).add(t).multiplyScalar(.5),Gs.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub(Gr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Gs),o=Zn.dot(this.direction),l=-Zn.dot(Gs),c=Zn.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Gr).addScaledVector(Gs,f),d}intersectSphere(e,t){En.subVectors(e.center,this.origin);const i=En.dot(this.direction),s=En.dot(En)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,i,s,r){Vr.subVectors(t,e),Vs.subVectors(i,e),Wr.crossVectors(Vr,Vs);let a=this.direction.dot(Wr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zn.subVectors(this.origin,e);const l=o*this.direction.dot(Vs.crossVectors(Zn,Vs));if(l<0)return null;const c=o*this.direction.dot(Vr.cross(Zn));if(c<0||l+c>a)return null;const h=-o*Zn.dot(Wr);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,i,s,r,a,o,l,c,h,u,f,d,g,v,m){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,f,d,g,v,m)}set(e,t,i,s,r,a,o,l,c,h,u,f,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Fi.setFromMatrixColumn(e,0).length(),r=1/Fi.setFromMatrixColumn(e,1).length(),a=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,d=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,g=c*h,v=c*u;t[0]=f+v*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,g=c*h,v=c*u;t[0]=f-v*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,d=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pu,e,Lu)}lookAt(e,t,i){const s=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),Jn.crossVectors(i,Jt),Jn.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),Jn.crossVectors(i,Jt)),Jn.normalize(),Ws.crossVectors(Jt,Jn),s[0]=Jn.x,s[4]=Ws.x,s[8]=Jt.x,s[1]=Jn.y,s[5]=Ws.y,s[9]=Jt.y,s[2]=Jn.z,s[6]=Ws.z,s[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],w=i[3],b=i[7],_=i[11],D=i[15],C=s[0],T=s[4],I=s[8],S=s[12],y=s[1],R=s[5],B=s[9],H=s[13],Y=s[2],te=s[6],W=s[10],re=s[14],X=s[3],ye=s[7],we=s[11],Re=s[15];return r[0]=a*C+o*y+l*Y+c*X,r[4]=a*T+o*R+l*te+c*ye,r[8]=a*I+o*B+l*W+c*we,r[12]=a*S+o*H+l*re+c*Re,r[1]=h*C+u*y+f*Y+d*X,r[5]=h*T+u*R+f*te+d*ye,r[9]=h*I+u*B+f*W+d*we,r[13]=h*S+u*H+f*re+d*Re,r[2]=g*C+v*y+m*Y+p*X,r[6]=g*T+v*R+m*te+p*ye,r[10]=g*I+v*B+m*W+p*we,r[14]=g*S+v*H+m*re+p*Re,r[3]=w*C+b*y+_*Y+D*X,r[7]=w*T+b*R+_*te+D*ye,r[11]=w*I+b*B+_*W+D*we,r[15]=w*S+b*H+_*re+D*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*f+i*c*f+s*o*d-i*l*d)+v*(+t*l*d-t*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+m*(+t*c*u-t*o*d-r*a*u+i*a*d+r*o*h-i*c*h)+p*(-s*o*h-t*l*u+t*o*f+s*a*u-i*a*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],w=u*m*c-v*f*c+v*l*d-o*m*d-u*l*p+o*f*p,b=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,_=h*v*c-g*u*c+g*o*d-a*v*d-h*o*p+a*u*p,D=g*u*l-h*v*l-g*o*f+a*v*f+h*o*m-a*u*m,C=t*w+i*b+s*_+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=w*T,e[1]=(v*f*r-u*m*r-v*s*d+i*m*d+u*s*p-i*f*p)*T,e[2]=(o*m*r-v*l*r+v*s*c-i*m*c-o*s*p+i*l*p)*T,e[3]=(u*l*r-o*f*r-u*s*c+i*f*c+o*s*d-i*l*d)*T,e[4]=b*T,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*T,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*T,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*d+t*l*d)*T,e[8]=_*T,e[9]=(g*u*r-h*v*r-g*i*d+t*v*d+h*i*p-t*u*p)*T,e[10]=(a*v*r-g*o*r+g*i*c-t*v*c-a*i*p+t*o*p)*T,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*d-t*o*d)*T,e[12]=D*T,e[13]=(h*v*s-g*u*s+g*i*f-t*v*f-h*i*m+t*u*m)*T,e[14]=(g*o*s-a*v*s-g*i*l+t*v*l+a*i*m-t*o*m)*T,e[15]=(a*u*s-h*o*s+h*i*l-t*u*l-a*i*f+t*o*f)*T,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,v=a*h,m=a*u,p=o*u,w=l*c,b=l*h,_=l*u,D=i.x,C=i.y,T=i.z;return s[0]=(1-(v+p))*D,s[1]=(d+_)*D,s[2]=(g-b)*D,s[3]=0,s[4]=(d-_)*C,s[5]=(1-(f+p))*C,s[6]=(m+w)*C,s[7]=0,s[8]=(g+b)*T,s[9]=(m-w)*T,s[10]=(1-(f+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Fi.set(s[0],s[1],s[2]).length();const a=Fi.set(s[4],s[5],s[6]).length(),o=Fi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],nn.copy(this);const c=1/r,h=1/a,u=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,t.setFromRotationMatrix(nn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Un){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s);let d,g;if(o===Un)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Mr)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Un){const l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(a-r),f=(t+e)*c,d=(i+s)*h;let g,v;if(o===Un)g=(a+r)*u,v=-2*u;else if(o===Mr)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Fi=new N,nn=new gt,Pu=new N(0,0,0),Lu=new N(1,1,1),Jn=new N,Ws=new N,Jt=new N,Qo=new gt,el=new ci;class xn{constructor(e=0,t=0,i=0,s=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return el.setFromEuler(this),this.setFromQuaternion(el,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class bc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Iu=0;const tl=new N,ki=new ci,Tn=new gt,$s=new N,ms=new N,Du=new N,Uu=new ci,nl=new N(1,0,0),il=new N(0,1,0),sl=new N(0,0,1),rl={type:"added"},Nu={type:"removed"},Oi={type:"childadded",child:null},$r={type:"childremoved",child:null};class Dt extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new N,t=new xn,i=new ci,s=new N(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new Je}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(nl,e)}rotateY(e){return this.rotateOnAxis(il,e)}rotateZ(e){return this.rotateOnAxis(sl,e)}translateOnAxis(e,t){return tl.copy(e).applyQuaternion(this.quaternion),this.position.add(tl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nl,e)}translateY(e){return this.translateOnAxis(il,e)}translateZ(e){return this.translateOnAxis(sl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$s.copy(e):$s.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(ms,$s,this.up):Tn.lookAt($s,ms,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(Tn),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rl),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nu),$r.child=e,this.dispatchEvent($r),$r.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rl),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,Du),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Uu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Dt.DEFAULT_UP=new N(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new N,Cn=new N,Xr=new N,Rn=new N,zi=new N,Bi=new N,al=new N,qr=new N,Yr=new N,Zr=new N,Jr=new Mt,jr=new Mt,Kr=new Mt;class on{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),sn.subVectors(e,t),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){sn.subVectors(s,t),Cn.subVectors(i,t),Xr.subVectors(e,t);const a=sn.dot(sn),o=sn.dot(Cn),l=sn.dot(Xr),c=Cn.dot(Cn),h=Cn.dot(Xr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Rn.x),l.addScaledVector(a,Rn.y),l.addScaledVector(o,Rn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Jr.setScalar(0),jr.setScalar(0),Kr.setScalar(0),Jr.fromBufferAttribute(e,t),jr.fromBufferAttribute(e,i),Kr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Jr,r.x),a.addScaledVector(jr,r.y),a.addScaledVector(Kr,r.z),a}static isFrontFacing(e,t,i,s){return sn.subVectors(i,t),Cn.subVectors(e,t),sn.cross(Cn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),sn.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return on.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;zi.subVectors(s,i),Bi.subVectors(r,i),qr.subVectors(e,i);const l=zi.dot(qr),c=Bi.dot(qr);if(l<=0&&c<=0)return t.copy(i);Yr.subVectors(e,s);const h=zi.dot(Yr),u=Bi.dot(Yr);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(zi,a);Zr.subVectors(e,r);const d=zi.dot(Zr),g=Bi.dot(Zr);if(g>=0&&d<=g)return t.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Bi,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return al.subVectors(r,s),o=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(al,o);const p=1/(m+v+f);return a=v*p,o=f*p,t.copy(i).addScaledVector(zi,a).addScaledVector(Bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function Qr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=yo(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Qr(a,r,e+1/3),this.g=Qr(a,r,e),this.b=Qr(a,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=qt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const i=wc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}copyLinearToSRGB(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return nt.fromWorkingColorSpace(Nt.copy(this),e),Math.round(Rt(Nt.r*255,0,255))*65536+Math.round(Rt(Nt.g*255,0,255))*256+Math.round(Rt(Nt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Nt.copy(this),t);const i=Nt.r,s=Nt.g,r=Nt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=qt){nt.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,s=Nt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(Xs);const i=bs(jn.h,Xs.h,t),s=bs(jn.s,Xs.s,t),r=bs(jn.l,Xs.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new tt;tt.NAMES=wc;let Fu=0;class Us extends ls{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Ri(),this.name="",this.blending=ji,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sa,this.blendDst=ba,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Go,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(i.blending=this.blending),this.side!==li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sa&&(i.blendSrc=this.blendSrc),this.blendDst!==ba&&(i.blendDst=this.blendDst),this.blendEquation!==xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Go&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ft extends Us{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new N,qs=new ge;class hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vo,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)qs.fromBufferAttribute(this,t),qs.applyMatrix3(e),this.setXY(t,qs.x,qs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Yi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),s=Ht(s,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vo&&(e.usage=this.usage),e}}class Ac extends hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ec extends hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class at extends hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ku=0;const Qt=new gt,ea=new Dt,Hi=new N,jt=new Ds,gs=new Ds,Ct=new N;class Ot extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yc(e)?Ec:Ac)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,i){return Qt.makeTranslation(e,t,i),this.applyMatrix4(Qt),this}scale(e,t,i){return Qt.makeScale(e,t,i),this.applyMatrix4(Qt),this}lookAt(e){return ea.lookAt(e),ea.updateMatrix(),this.applyMatrix4(ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new at(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(jt.min,gs.min),jt.expandByPoint(Ct),Ct.addVectors(jt.max,gs.max),jt.expandByPoint(Ct)):(jt.expandByPoint(gs.min),jt.expandByPoint(gs.max))}jt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ct));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ct.fromBufferAttribute(o,c),l&&(Hi.fromBufferAttribute(e,c),Ct.add(Hi)),s=Math.max(s,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<i.count;I++)o[I]=new N,l[I]=new N;const c=new N,h=new N,u=new N,f=new ge,d=new ge,g=new ge,v=new N,m=new N;function p(I,S,y){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,y),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(R),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(R),o[I].add(v),o[S].add(v),o[y].add(v),l[I].add(m),l[S].add(m),l[y].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let I=0,S=w.length;I<S;++I){const y=w[I],R=y.start,B=y.count;for(let H=R,Y=R+B;H<Y;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const b=new N,_=new N,D=new N,C=new N;function T(I){D.fromBufferAttribute(s,I),C.copy(D);const S=o[I];b.copy(S),b.sub(D.multiplyScalar(D.dot(S))).normalize(),_.crossVectors(C,S);const R=_.dot(l[I])<0?-1:1;a.setXYZW(I,b.x,b.y,b.z,R)}for(let I=0,S=w.length;I<S;++I){const y=w[I],R=y.start,B=y.count;for(let H=R,Y=R+B;H<Y;H+=3)T(e.getX(H+0)),T(e.getX(H+1)),T(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new hn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ol=new gt,di=new Ru,Ys=new Mo,ll=new N,Zs=new N,Js=new N,js=new N,ta=new N,Ks=new N,cl=new N,Qs=new N;class ht extends Dt{constructor(e=new Ot,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ks.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(ta.fromBufferAttribute(u,e),a?Ks.addScaledVector(ta,h):Ks.addScaledVector(ta.sub(t),h))}t.add(Ks)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ys.copy(i.boundingSphere),Ys.applyMatrix4(r),di.copy(e.ray).recast(e.near),!(Ys.containsPoint(di.origin)===!1&&(di.intersectSphere(Ys,ll)===null||di.origin.distanceToSquared(ll)>(e.far-e.near)**2))&&(ol.copy(r).invert(),di.copy(e.ray).applyMatrix4(ol),!(i.boundingBox!==null&&di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],w=Math.max(m.start,d.start),b=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=w,D=b;_<D;_+=3){const C=o.getX(_),T=o.getX(_+1),I=o.getX(_+2);s=er(this,p,e,i,c,h,u,C,T,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const w=o.getX(m),b=o.getX(m+1),_=o.getX(m+2);s=er(this,a,e,i,c,h,u,w,b,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],w=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=w,D=b;_<D;_+=3){const C=_,T=_+1,I=_+2;s=er(this,p,e,i,c,h,u,C,T,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const w=m,b=m+1,_=m+2;s=er(this,a,e,i,c,h,u,w,b,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Ou(n,e,t,i,s,r,a,o){let l;if(e.side===Yt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===li,o),l===null)return null;Qs.copy(o),Qs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Qs);return c<t.near||c>t.far?null:{distance:c,point:Qs.clone(),object:n}}function er(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Zs),n.getVertexPosition(l,Js),n.getVertexPosition(c,js);const h=Ou(n,e,t,i,Zs,Js,js,cl);if(h){const u=new N;on.getBarycoord(cl,Zs,Js,js,u),s&&(h.uv=on.getInterpolatedAttribute(s,o,l,c,u,new ge)),r&&(h.uv1=on.getInterpolatedAttribute(r,o,l,c,u,new ge)),a&&(h.normal=on.getInterpolatedAttribute(a,o,l,c,u,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new N,materialIndex:0};on.getNormal(Zs,Js,js,f.normal),h.face=f,h.barycoord=u}return h}class Vn extends Ot{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(u,2));function g(v,m,p,w,b,_,D,C,T,I,S){const y=_/T,R=D/I,B=_/2,H=D/2,Y=C/2,te=T+1,W=I+1;let re=0,X=0;const ye=new N;for(let we=0;we<W;we++){const Re=we*R-H;for(let le=0;le<te;le++){const ve=le*y-B;ye[v]=ve*w,ye[m]=Re*b,ye[p]=Y,c.push(ye.x,ye.y,ye.z),ye[v]=0,ye[m]=0,ye[p]=C>0?1:-1,h.push(ye.x,ye.y,ye.z),u.push(le/T),u.push(1-we/I),re+=1}}for(let we=0;we<I;we++)for(let Re=0;Re<T;Re++){const le=f+Re+te*we,ve=f+Re+te*(we+1),G=f+(Re+1)+te*(we+1),ne=f+(Re+1)+te*we;l.push(le,ve,ne),l.push(ve,G,ne),X+=6}o.addGroup(d,X,S),d+=X,f+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function as(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Gt(n){const e={};for(let t=0;t<n.length;t++){const i=as(n[t]);for(const s in i)e[s]=i[s]}return e}function zu(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Tc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Bu={clone:as,merge:Gt};var Hu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends Us{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hu,this.fragmentShader=Gu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=as(e.uniforms),this.uniformsGroups=zu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Cc extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new N,hl=new ge,ul=new ge;class an extends Cc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,hl,ul),t.subVectors(ul,hl)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ss*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gi=-90,Vi=1;class Vu extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(Gi,Vi,e,t);s.layers=this.layers,this.add(s);const r=new an(Gi,Vi,e,t);r.layers=this.layers,this.add(r);const a=new an(Gi,Vi,e,t);a.layers=this.layers,this.add(a);const o=new an(Gi,Vi,e,t);o.layers=this.layers,this.add(o);const l=new an(Gi,Vi,e,t);l.layers=this.layers,this.add(l);const c=new an(Gi,Vi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Rc extends kt{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ns,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wu extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Rc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vn(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:as(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:ni});r.uniforms.tEquirect.value=t;const a=new ht(s,r),o=t.minFilter;return t.minFilter===bi&&(t.minFilter=vn),new Vu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const na=new N,$u=new N,Xu=new Je;class gi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=na.subVectors(i,t).cross($u.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(na),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Xu.getNormalMatrix(e),s=this.coplanarPoint(na).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new Mo,tr=new N;class So{constructor(e=new gi,t=new gi,i=new gi,s=new gi,r=new gi,a=new gi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],v=s[10],m=s[11],p=s[12],w=s[13],b=s[14],_=s[15];if(i[0].setComponents(l-r,f-c,m-d,_-p).normalize(),i[1].setComponents(l+r,f+c,m+d,_+p).normalize(),i[2].setComponents(l+a,f+h,m+g,_+w).normalize(),i[3].setComponents(l-a,f-h,m-g,_-w).normalize(),i[4].setComponents(l-o,f-u,m-v,_-b).normalize(),t===Un)i[5].setComponents(l+o,f+u,m+v,_+b).normalize();else if(t===Mr)i[5].setComponents(o,u,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(tr.x=s.normal.x>0?e.max.x:e.min.x,tr.y=s.normal.y>0?e.max.y:e.min.y,tr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(tr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pc(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function qu(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class si extends Ot{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const w=p*f-a;for(let b=0;b<c;b++){const _=b*u-r;g.push(_,-w,0),v.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){const b=w+c*p,_=w+c*(p+1),D=w+1+c*(p+1),C=w+1+c*p;d.push(b,_,C),d.push(_,D,C)}this.setIndex(d),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(v,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zu=`#ifdef USE_ALPHAHASH
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
#endif`,Ju=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ju=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ku=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ed=`#ifdef USE_AOMAP
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
#endif`,td=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nd=`#ifdef USE_BATCHING
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
#endif`,id=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ad=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,od=`#ifdef USE_IRIDESCENCE
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
#endif`,ld=`#ifdef USE_BUMPMAP
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
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vd=`#define PI 3.141592653589793
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
} // validated`,_d=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xd=`vec3 transformedNormal = objectNormal;
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
#endif`,yd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ad=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ed=`#ifdef USE_ENVMAP
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
#endif`,Td=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cd=`#ifdef USE_ENVMAP
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
#endif`,Rd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
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
#endif`,Ld=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Id=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nd=`#ifdef USE_GRADIENTMAP
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
}`,Fd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zd=`uniform bool receiveShadow;
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
#endif`,Bd=`#ifdef USE_ENVMAP
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
#endif`,Hd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$d=`PhysicalMaterial material;
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
#endif`,Xd=`struct PhysicalMaterial {
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
}`,qd=`
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
#endif`,Yd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ef=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sf=`#if defined( USE_POINTS_UV )
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
#endif`,rf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,af=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,of=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hf=`#ifdef USE_MORPHTARGETS
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
#endif`,uf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,df=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ff=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vf=`#ifdef USE_NORMALMAP
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
#endif`,_f=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ef=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,If=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Df=`float getShadowMask() {
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
}`,Uf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nf=`#ifdef USE_SKINNING
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
#endif`,Ff=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kf=`#ifdef USE_SKINNING
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
#endif`,Of=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gf=`#ifdef USE_TRANSMISSION
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
#endif`,Vf=`#ifdef USE_TRANSMISSION
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
#endif`,Wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zf=`uniform sampler2D t2D;
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
}`,Jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ep=`#include <common>
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
}`,tp=`#if DEPTH_PACKING == 3200
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
}`,np=`#define DISTANCE
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
}`,ip=`#define DISTANCE
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
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`uniform float scale;
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
}`,op=`uniform vec3 diffuse;
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
}`,lp=`#include <common>
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
}`,cp=`uniform vec3 diffuse;
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
}`,hp=`#define LAMBERT
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
}`,up=`#define LAMBERT
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
}`,dp=`#define MATCAP
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
}`,fp=`#define MATCAP
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
}`,pp=`#define NORMAL
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
}`,mp=`#define NORMAL
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
}`,gp=`#define PHONG
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
}`,vp=`#define PHONG
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
}`,_p=`#define STANDARD
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
}`,xp=`#define STANDARD
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
}`,yp=`#define TOON
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
}`,Mp=`#define TOON
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
}`,Sp=`uniform float size;
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
}`,bp=`uniform vec3 diffuse;
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
}`,wp=`#include <common>
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
}`,Ap=`uniform vec3 color;
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
}`,Ep=`uniform float rotation;
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
}`,Tp=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Yu,alphahash_pars_fragment:Zu,alphamap_fragment:Ju,alphamap_pars_fragment:ju,alphatest_fragment:Ku,alphatest_pars_fragment:Qu,aomap_fragment:ed,aomap_pars_fragment:td,batching_pars_vertex:nd,batching_vertex:id,begin_vertex:sd,beginnormal_vertex:rd,bsdfs:ad,iridescence_fragment:od,bumpmap_pars_fragment:ld,clipping_planes_fragment:cd,clipping_planes_pars_fragment:hd,clipping_planes_pars_vertex:ud,clipping_planes_vertex:dd,color_fragment:fd,color_pars_fragment:pd,color_pars_vertex:md,color_vertex:gd,common:vd,cube_uv_reflection_fragment:_d,defaultnormal_vertex:xd,displacementmap_pars_vertex:yd,displacementmap_vertex:Md,emissivemap_fragment:Sd,emissivemap_pars_fragment:bd,colorspace_fragment:wd,colorspace_pars_fragment:Ad,envmap_fragment:Ed,envmap_common_pars_fragment:Td,envmap_pars_fragment:Cd,envmap_pars_vertex:Rd,envmap_physical_pars_fragment:Bd,envmap_vertex:Pd,fog_vertex:Ld,fog_pars_vertex:Id,fog_fragment:Dd,fog_pars_fragment:Ud,gradientmap_pars_fragment:Nd,lightmap_pars_fragment:Fd,lights_lambert_fragment:kd,lights_lambert_pars_fragment:Od,lights_pars_begin:zd,lights_toon_fragment:Hd,lights_toon_pars_fragment:Gd,lights_phong_fragment:Vd,lights_phong_pars_fragment:Wd,lights_physical_fragment:$d,lights_physical_pars_fragment:Xd,lights_fragment_begin:qd,lights_fragment_maps:Yd,lights_fragment_end:Zd,logdepthbuf_fragment:Jd,logdepthbuf_pars_fragment:jd,logdepthbuf_pars_vertex:Kd,logdepthbuf_vertex:Qd,map_fragment:ef,map_pars_fragment:tf,map_particle_fragment:nf,map_particle_pars_fragment:sf,metalnessmap_fragment:rf,metalnessmap_pars_fragment:af,morphinstance_vertex:of,morphcolor_vertex:lf,morphnormal_vertex:cf,morphtarget_pars_vertex:hf,morphtarget_vertex:uf,normal_fragment_begin:df,normal_fragment_maps:ff,normal_pars_fragment:pf,normal_pars_vertex:mf,normal_vertex:gf,normalmap_pars_fragment:vf,clearcoat_normal_fragment_begin:_f,clearcoat_normal_fragment_maps:xf,clearcoat_pars_fragment:yf,iridescence_pars_fragment:Mf,opaque_fragment:Sf,packing:bf,premultiplied_alpha_fragment:wf,project_vertex:Af,dithering_fragment:Ef,dithering_pars_fragment:Tf,roughnessmap_fragment:Cf,roughnessmap_pars_fragment:Rf,shadowmap_pars_fragment:Pf,shadowmap_pars_vertex:Lf,shadowmap_vertex:If,shadowmask_pars_fragment:Df,skinbase_vertex:Uf,skinning_pars_vertex:Nf,skinning_vertex:Ff,skinnormal_vertex:kf,specularmap_fragment:Of,specularmap_pars_fragment:zf,tonemapping_fragment:Bf,tonemapping_pars_fragment:Hf,transmission_fragment:Gf,transmission_pars_fragment:Vf,uv_pars_fragment:Wf,uv_pars_vertex:$f,uv_vertex:Xf,worldpos_vertex:qf,background_vert:Yf,background_frag:Zf,backgroundCube_vert:Jf,backgroundCube_frag:jf,cube_vert:Kf,cube_frag:Qf,depth_vert:ep,depth_frag:tp,distanceRGBA_vert:np,distanceRGBA_frag:ip,equirect_vert:sp,equirect_frag:rp,linedashed_vert:ap,linedashed_frag:op,meshbasic_vert:lp,meshbasic_frag:cp,meshlambert_vert:hp,meshlambert_frag:up,meshmatcap_vert:dp,meshmatcap_frag:fp,meshnormal_vert:pp,meshnormal_frag:mp,meshphong_vert:gp,meshphong_frag:vp,meshphysical_vert:_p,meshphysical_frag:xp,meshtoon_vert:yp,meshtoon_frag:Mp,points_vert:Sp,points_frag:bp,shadow_vert:wp,shadow_frag:Ap,sprite_vert:Ep,sprite_frag:Tp},Ee={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},gn={basic:{uniforms:Gt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Gt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new tt(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Gt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Gt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Gt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new tt(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Gt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Gt([Ee.points,Ee.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Gt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Gt([Ee.common,Ee.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Gt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Gt([Ee.sprite,Ee.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Gt([Ee.common,Ee.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Gt([Ee.lights,Ee.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};gn.physical={uniforms:Gt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const nr={r:0,b:0,g:0},pi=new xn,Cp=new gt;function Rp(n,e,t,i,s,r,a){const o=new tt(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?t:e).get(b)),b}function v(w){let b=!1;const _=g(w);_===null?p(o,l):_&&_.isColor&&(p(_,1),b=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,b){const _=g(b);_&&(_.isCubeTexture||_.mapping===Er)?(h===void 0&&(h=new ht(new Vn(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:as(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),pi.copy(b.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Cp.makeRotationFromEuler(pi)),h.material.toneMapped=nt.getTransfer(_.colorSpace)!==lt,(u!==_||f!==_.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ht(new si(2,2),new un({name:"BackgroundMaterial",uniforms:as(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=nt.getTransfer(_.colorSpace)!==lt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,d=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,b){w.getRGB(nr,Tc(n)),i.buffers.color.setClear(nr.r,nr.g,nr.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(w,b=1){o.set(w),l=b,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(o,l)},render:v,addToRenderList:m}}function Pp(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(y,R,B,H,Y){let te=!1;const W=u(H,B,R);r!==W&&(r=W,c(r.object)),te=d(y,H,B,Y),te&&g(y,H,B,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,_(y,R,B,H),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,R,B){const H=B.wireframe===!0;let Y=i[y.id];Y===void 0&&(Y={},i[y.id]=Y);let te=Y[R.id];te===void 0&&(te={},Y[R.id]=te);let W=te[H];return W===void 0&&(W=f(l()),te[H]=W),W}function f(y){const R=[],B=[],H=[];for(let Y=0;Y<t;Y++)R[Y]=0,B[Y]=0,H[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:H,object:y,attributes:{},index:null}}function d(y,R,B,H){const Y=r.attributes,te=R.attributes;let W=0;const re=B.getAttributes();for(const X in re)if(re[X].location>=0){const we=Y[X];let Re=te[X];if(Re===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(Re=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(Re=y.instanceColor)),we===void 0||we.attribute!==Re||Re&&we.data!==Re.data)return!0;W++}return r.attributesNum!==W||r.index!==H}function g(y,R,B,H){const Y={},te=R.attributes;let W=0;const re=B.getAttributes();for(const X in re)if(re[X].location>=0){let we=te[X];we===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(we=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(we=y.instanceColor));const Re={};Re.attribute=we,we&&we.data&&(Re.data=we.data),Y[X]=Re,W++}r.attributes=Y,r.attributesNum=W,r.index=H}function v(){const y=r.newAttributes;for(let R=0,B=y.length;R<B;R++)y[R]=0}function m(y){p(y,0)}function p(y,R){const B=r.newAttributes,H=r.enabledAttributes,Y=r.attributeDivisors;B[y]=1,H[y]===0&&(n.enableVertexAttribArray(y),H[y]=1),Y[y]!==R&&(n.vertexAttribDivisor(y,R),Y[y]=R)}function w(){const y=r.newAttributes,R=r.enabledAttributes;for(let B=0,H=R.length;B<H;B++)R[B]!==y[B]&&(n.disableVertexAttribArray(B),R[B]=0)}function b(y,R,B,H,Y,te,W){W===!0?n.vertexAttribIPointer(y,R,B,Y,te):n.vertexAttribPointer(y,R,B,H,Y,te)}function _(y,R,B,H){v();const Y=H.attributes,te=B.getAttributes(),W=R.defaultAttributeValues;for(const re in te){const X=te[re];if(X.location>=0){let ye=Y[re];if(ye===void 0&&(re==="instanceMatrix"&&y.instanceMatrix&&(ye=y.instanceMatrix),re==="instanceColor"&&y.instanceColor&&(ye=y.instanceColor)),ye!==void 0){const we=ye.normalized,Re=ye.itemSize,le=e.get(ye);if(le===void 0)continue;const ve=le.buffer,G=le.type,ne=le.bytesPerElement,de=G===n.INT||G===n.UNSIGNED_INT||ye.gpuType===po;if(ye.isInterleavedBufferAttribute){const Z=ye.data,Pe=Z.stride,Ve=ye.offset;if(Z.isInstancedInterleavedBuffer){for(let Be=0;Be<X.locationSize;Be++)p(X.location+Be,Z.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Be=0;Be<X.locationSize;Be++)m(X.location+Be);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let Be=0;Be<X.locationSize;Be++)b(X.location+Be,Re/X.locationSize,G,we,Pe*ne,(Ve+Re/X.locationSize*Be)*ne,de)}else{if(ye.isInstancedBufferAttribute){for(let Z=0;Z<X.locationSize;Z++)p(X.location+Z,ye.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Z=0;Z<X.locationSize;Z++)m(X.location+Z);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let Z=0;Z<X.locationSize;Z++)b(X.location+Z,Re/X.locationSize,G,we,Re*ne,Re/X.locationSize*Z*ne,de)}}else if(W!==void 0){const we=W[re];if(we!==void 0)switch(we.length){case 2:n.vertexAttrib2fv(X.location,we);break;case 3:n.vertexAttrib3fv(X.location,we);break;case 4:n.vertexAttrib4fv(X.location,we);break;default:n.vertexAttrib1fv(X.location,we)}}}}w()}function D(){I();for(const y in i){const R=i[y];for(const B in R){const H=R[B];for(const Y in H)h(H[Y].object),delete H[Y];delete R[B]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const R=i[y.id];for(const B in R){const H=R[B];for(const Y in H)h(H[Y].object),delete H[Y];delete R[B]}delete i[y.id]}function T(y){for(const R in i){const B=i[R];if(B[y.id]===void 0)continue;const H=B[y.id];for(const Y in H)h(H[Y].object),delete H[Y];delete B[y.id]}}function I(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function Lp(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,i,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ip(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==ln&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const I=T===Ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==zn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Dn&&!I)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:D,maxSamples:C}}function Dp(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new gi,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const w=r?0:i,b=w*4;let _=p.clippingState||null;l.value=_,_=h(g,f,b,d);for(let D=0;D!==b;++D)_[D]=t[D];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,_=d;b!==v;++b,_+=4)a.copy(u[b]).applyMatrix4(w,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Up(n){let e=new WeakMap;function t(a,o){return o===La?a.mapping=ns:o===Ia&&(a.mapping=is),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===La||o===Ia)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Wu(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Rs extends Cc{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zi=4,dl=[.125,.215,.35,.446,.526,.582],yi=20,ia=new Rs,fl=new tt;let sa=null,ra=0,aa=0,oa=!1;const vi=(1+Math.sqrt(5))/2,Wi=1/vi,pl=[new N(-vi,Wi,0),new N(vi,Wi,0),new N(-Wi,0,vi),new N(Wi,0,vi),new N(0,vi,-Wi),new N(0,vi,Wi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class ml{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){sa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sa,ra,aa),this._renderer.xr.enabled=oa,e.scissorTest=!1,ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ns||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Ti,format:ln,colorSpace:os,depthBuffer:!1},s=gl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gl(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Np(r)),this._blurMaterial=Fp(r,e,t)}return s}_compileMaterial(e){const t=new ht(this._lodPlanes[0],e);this._renderer.compile(t,ia)}_sceneToCubeUV(e,t,i,s){const o=new an(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(fl),h.toneMapping=ii,h.autoClear=!1;const d=new Ft({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),g=new ht(new Vn,d);let v=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(fl),v=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):w===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const b=this._cubeSize;ir(s,w*b,p>2?b:0,b,b),h.setRenderTarget(s),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ns||e.mapping===is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_l()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ht(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ir(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ia)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=pl[(s-r-1)%pl.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ht(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*yi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):yi;m>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yi}`);const p=[];let w=0;for(let T=0;T<yi;++T){const I=T/v,S=Math.exp(-I*I/2);p.push(S),T===0?w+=S:T<m&&(w+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;const _=this._sizeLods[s],D=3*_*(s>b-Zi?s-b+Zi:0),C=4*(this._cubeSize-_);ir(t,D,C,3*_,2*_),l.setRenderTarget(t),l.render(u,ia)}}function Np(n){const e=[],t=[],i=[];let s=n;const r=n-Zi+1+dl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Zi?l=dl[a-n+Zi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,w=new Float32Array(v*g*d),b=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let C=0;C<d;C++){const T=C%3*2/3-1,I=C>2?0:-1,S=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];w.set(S,v*g*C),b.set(f,m*g*C);const y=[C,C,C,C,C,C];_.set(y,p*g*C)}const D=new Ot;D.setAttribute("position",new hn(w,v)),D.setAttribute("uv",new hn(b,m)),D.setAttribute("faceIndex",new hn(_,p)),e.push(D),s>Zi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function gl(n,e,t){const i=new Bn(n,e,t);return i.texture.mapping=Er,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ir(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Fp(n,e,t){const i=new Float32Array(yi),s=new N(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bo(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function vl(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bo(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function _l(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function bo(){return`

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
	`}function kp(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===La||l===Ia,h=l===ns||l===is;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new ml(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new ml(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Op(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&xs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function zp(n,e,t,i){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const w=d.array;v=d.version;for(let b=0,_=w.length;b<_;b+=3){const D=w[b+0],C=w[b+1],T=w[b+2];f.push(D,C,C,T,T,D)}}else if(g!==void 0){const w=g.array;v=g.version;for(let b=0,_=w.length/3-1;b<_;b+=3){const D=b+0,C=b+1,T=b+2;f.push(D,C,C,T,T,D)}}else return;const m=new(yc(f)?Ec:Ac)(f,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Bp(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*a),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*a,g),t.update(d,i,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function u(f,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,v,0,g);let p=0;for(let w=0;w<g;w++)p+=d[w]*v[w];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Hp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Gp(n,e,t){const i=new WeakMap,s=new Mt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let y=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let D=o.attributes.position.count*_,C=1;D>e.maxTextureSize&&(C=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const T=new Float32Array(D*C*4*u),I=new Sc(T,D,C,u);I.type=Dn,I.needsUpdate=!0;const S=_*4;for(let R=0;R<u;R++){const B=p[R],H=w[R],Y=b[R],te=D*C*4*R;for(let W=0;W<B.count;W++){const re=W*S;g===!0&&(s.fromBufferAttribute(B,W),T[te+re+0]=s.x,T[te+re+1]=s.y,T[te+re+2]=s.z,T[te+re+3]=0),v===!0&&(s.fromBufferAttribute(H,W),T[te+re+4]=s.x,T[te+re+5]=s.y,T[te+re+6]=s.z,T[te+re+7]=0),m===!0&&(s.fromBufferAttribute(Y,W),T[te+re+8]=s.x,T[te+re+9]=s.y,T[te+re+10]=s.z,T[te+re+11]=Y.itemSize===4?s.w:1)}}f={count:u,texture:I,size:new ge(D,C)},i.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Vp(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Lc extends kt{constructor(e,t,i,s,r,a,o,l,c,h=Ki){if(h!==Ki&&h!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ki&&(i=Ei),i===void 0&&h===rs&&(i=ss),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:It,this.minFilter=l!==void 0?l:It,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ic=new kt,xl=new Lc(1,1),Dc=new Sc,Uc=new Tu,Nc=new Rc,yl=[],Ml=[],Sl=new Float32Array(16),bl=new Float32Array(9),wl=new Float32Array(4);function cs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=yl[s];if(r===void 0&&(r=new Float32Array(s),yl[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Rr(n,e){let t=Ml[e];t===void 0&&(t=new Int32Array(e),Ml[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Wp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $p(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function Xp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function qp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function Yp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;wl.set(i),n.uniformMatrix2fv(this.addr,!1,wl),Tt(t,i)}}function Zp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;bl.set(i),n.uniformMatrix3fv(this.addr,!1,bl),Tt(t,i)}}function Jp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;Sl.set(i),n.uniformMatrix4fv(this.addr,!1,Sl),Tt(t,i)}}function jp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Kp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function Qp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function em(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function tm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function nm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function im(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function sm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function rm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(xl.compareFunction=xc,r=xl):r=Ic,t.setTexture2D(e||r,s)}function am(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Uc,s)}function om(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Nc,s)}function lm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Dc,s)}function cm(n){switch(n){case 5126:return Wp;case 35664:return $p;case 35665:return Xp;case 35666:return qp;case 35674:return Yp;case 35675:return Zp;case 35676:return Jp;case 5124:case 35670:return jp;case 35667:case 35671:return Kp;case 35668:case 35672:return Qp;case 35669:case 35673:return em;case 5125:return tm;case 36294:return nm;case 36295:return im;case 36296:return sm;case 35678:case 36198:case 36298:case 36306:case 35682:return rm;case 35679:case 36299:case 36307:return am;case 35680:case 36300:case 36308:case 36293:return om;case 36289:case 36303:case 36311:case 36292:return lm}}function hm(n,e){n.uniform1fv(this.addr,e)}function um(n,e){const t=cs(e,this.size,2);n.uniform2fv(this.addr,t)}function dm(n,e){const t=cs(e,this.size,3);n.uniform3fv(this.addr,t)}function fm(n,e){const t=cs(e,this.size,4);n.uniform4fv(this.addr,t)}function pm(n,e){const t=cs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function mm(n,e){const t=cs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function gm(n,e){const t=cs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function vm(n,e){n.uniform1iv(this.addr,e)}function _m(n,e){n.uniform2iv(this.addr,e)}function xm(n,e){n.uniform3iv(this.addr,e)}function ym(n,e){n.uniform4iv(this.addr,e)}function Mm(n,e){n.uniform1uiv(this.addr,e)}function Sm(n,e){n.uniform2uiv(this.addr,e)}function bm(n,e){n.uniform3uiv(this.addr,e)}function wm(n,e){n.uniform4uiv(this.addr,e)}function Am(n,e,t){const i=this.cache,s=e.length,r=Rr(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Ic,r[a])}function Em(n,e,t){const i=this.cache,s=e.length,r=Rr(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Uc,r[a])}function Tm(n,e,t){const i=this.cache,s=e.length,r=Rr(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Nc,r[a])}function Cm(n,e,t){const i=this.cache,s=e.length,r=Rr(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Dc,r[a])}function Rm(n){switch(n){case 5126:return hm;case 35664:return um;case 35665:return dm;case 35666:return fm;case 35674:return pm;case 35675:return mm;case 35676:return gm;case 5124:case 35670:return vm;case 35667:case 35671:return _m;case 35668:case 35672:return xm;case 35669:case 35673:return ym;case 5125:return Mm;case 36294:return Sm;case 36295:return bm;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return Tm;case 36289:case 36303:case 36311:case 36292:return Cm}}class Pm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=cm(t.type)}}class Lm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rm(t.type)}}class Im{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const la=/(\w+)(\])?(\[|\.)?/g;function Al(n,e){n.seq.push(e),n.map[e.id]=e}function Dm(n,e,t){const i=n.name,s=i.length;for(la.lastIndex=0;;){const r=la.exec(i),a=la.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Al(t,c===void 0?new Pm(o,n,e):new Lm(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Im(o),Al(t,u)),t=u}}}class gr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Dm(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function El(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Um=37297;let Nm=0;function Fm(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Tl=new Je;function km(n){nt._getMatrix(Tl,nt.workingColorSpace,n);const e=`mat3( ${Tl.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case Cr:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Cl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Fm(n.getShaderSource(e),a)}else return s}function Om(n,e){const t=km(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function zm(n,e){let t;switch(e){case Oh:t="Linear";break;case zh:t="Reinhard";break;case Bh:t="Cineon";break;case Hh:t="ACESFilmic";break;case Vh:t="AgX";break;case Wh:t="Neutral";break;case Gh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sr=new N;function Bm(){nt.getLuminanceCoefficients(sr);const n=sr.x.toFixed(4),e=sr.y.toFixed(4),t=sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ys).join(`
`)}function Gm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Vm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ys(n){return n!==""}function Rl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(n){return n.replace(Wm,Xm)}const $m=new Map;function Xm(n,e){let t=je[e];if(t===void 0){const i=$m.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ao(t)}const qm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ll(n){return n.replace(qm,Ym)}function Ym(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Il(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Zm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ac?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===vh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function Jm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ns:case is:e="ENVMAP_TYPE_CUBE";break;case Er:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case is:e="ENVMAP_MODE_REFRACTION";break}return e}function Km(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case oc:e="ENVMAP_BLENDING_MULTIPLY";break;case Fh:e="ENVMAP_BLENDING_MIX";break;case kh:e="ENVMAP_BLENDING_ADD";break}return e}function Qm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function e0(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Zm(t),c=Jm(t),h=jm(t),u=Km(t),f=Qm(t),d=Hm(t),g=Gm(r),v=s.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ys).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ys).join(`
`),p.length>0&&(p+=`
`)):(m=[Il(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),p=[Il(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?je.tonemapping_pars_fragment:"",t.toneMapping!==ii?zm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Om("linearToOutputTexel",t.outputColorSpace),Bm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ys).join(`
`)),a=ao(a),a=Rl(a,t),a=Pl(a,t),o=ao(o),o=Rl(o,t),o=Pl(o,t),a=Ll(a),o=Ll(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Wo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=w+m+a,_=w+p+o,D=El(s,s.VERTEX_SHADER,b),C=El(s,s.FRAGMENT_SHADER,_);s.attachShader(v,D),s.attachShader(v,C),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(R){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(v).trim(),H=s.getShaderInfoLog(D).trim(),Y=s.getShaderInfoLog(C).trim();let te=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,D,C);else{const re=Cl(s,D,"vertex"),X=Cl(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+re+`
`+X)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(H===""||Y==="")&&(W=!1);W&&(R.diagnostics={runnable:te,programLog:B,vertexShader:{log:H,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(D),s.deleteShader(C),I=new gr(s,v),S=Vm(s,v)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,Um)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=C,this}let t0=0;class n0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new i0(e),t.set(e,i)),i}}class i0{constructor(e){this.id=t0++,this.code=e,this.usedTimes=0}}function s0(n,e,t,i,s,r,a){const o=new bc,l=new n0,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,R,B,H){const Y=B.fog,te=H.geometry,W=S.isMeshStandardMaterial?B.environment:null,re=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),X=re&&re.mapping===Er?re.image.height:null,ye=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const we=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Re=we!==void 0?we.length:0;let le=0;te.morphAttributes.position!==void 0&&(le=1),te.morphAttributes.normal!==void 0&&(le=2),te.morphAttributes.color!==void 0&&(le=3);let ve,G,ne,de;if(ye){const Me=gn[ye];ve=Me.vertexShader,G=Me.fragmentShader}else ve=S.vertexShader,G=S.fragmentShader,l.update(S),ne=l.getVertexShaderID(S),de=l.getFragmentShaderID(S);const Z=n.getRenderTarget(),Pe=n.state.buffers.depth.getReversed(),Ve=H.isInstancedMesh===!0,Be=H.isBatchedMesh===!0,J=!!S.map,L=!!S.matcap,k=!!re,A=!!S.aoMap,ae=!!S.lightMap,j=!!S.bumpMap,fe=!!S.normalMap,pe=!!S.displacementMap,ce=!!S.emissiveMap,Ce=!!S.metalnessMap,E=!!S.roughnessMap,x=S.anisotropy>0,V=S.clearcoat>0,ie=S.dispersion>0,he=S.iridescence>0,se=S.sheen>0,Ne=S.transmission>0,Ae=x&&!!S.anisotropyMap,Ie=V&&!!S.clearcoatMap,Ke=V&&!!S.clearcoatNormalMap,me=V&&!!S.clearcoatRoughnessMap,Ue=he&&!!S.iridescenceMap,Fe=he&&!!S.iridescenceThicknessMap,$e=se&&!!S.sheenColorMap,De=se&&!!S.sheenRoughnessMap,Ye=!!S.specularMap,Xe=!!S.specularColorMap,ot=!!S.specularIntensityMap,F=Ne&&!!S.transmissionMap,Te=Ne&&!!S.thicknessMap,K=!!S.gradientMap,oe=!!S.alphaMap,P=S.alphaTest>0,U=!!S.alphaHash,Q=!!S.extensions;let _e=ii;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(_e=n.toneMapping);const Se={shaderID:ye,shaderType:S.type,shaderName:S.name,vertexShader:ve,fragmentShader:G,defines:S.defines,customVertexShaderID:ne,customFragmentShaderID:de,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Be,batchingColor:Be&&H._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&H.instanceColor!==null,instancingMorph:Ve&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:os,alphaToCoverage:!!S.alphaToCoverage,map:J,matcap:L,envMap:k,envMapMode:k&&re.mapping,envMapCubeUVHeight:X,aoMap:A,lightMap:ae,bumpMap:j,normalMap:fe,displacementMap:f&&pe,emissiveMap:ce,normalMapObjectSpace:fe&&S.normalMapType===Yh,normalMapTangentSpace:fe&&S.normalMapType===_c,metalnessMap:Ce,roughnessMap:E,anisotropy:x,anisotropyMap:Ae,clearcoat:V,clearcoatMap:Ie,clearcoatNormalMap:Ke,clearcoatRoughnessMap:me,dispersion:ie,iridescence:he,iridescenceMap:Ue,iridescenceThicknessMap:Fe,sheen:se,sheenColorMap:$e,sheenRoughnessMap:De,specularMap:Ye,specularColorMap:Xe,specularIntensityMap:ot,transmission:Ne,transmissionMap:F,thicknessMap:Te,gradientMap:K,opaque:S.transparent===!1&&S.blending===ji&&S.alphaToCoverage===!1,alphaMap:oe,alphaTest:P,alphaHash:U,combine:S.combine,mapUv:J&&v(S.map.channel),aoMapUv:A&&v(S.aoMap.channel),lightMapUv:ae&&v(S.lightMap.channel),bumpMapUv:j&&v(S.bumpMap.channel),normalMapUv:fe&&v(S.normalMap.channel),displacementMapUv:pe&&v(S.displacementMap.channel),emissiveMapUv:ce&&v(S.emissiveMap.channel),metalnessMapUv:Ce&&v(S.metalnessMap.channel),roughnessMapUv:E&&v(S.roughnessMap.channel),anisotropyMapUv:Ae&&v(S.anisotropyMap.channel),clearcoatMapUv:Ie&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:De&&v(S.sheenRoughnessMap.channel),specularMapUv:Ye&&v(S.specularMap.channel),specularColorMapUv:Xe&&v(S.specularColorMap.channel),specularIntensityMapUv:ot&&v(S.specularIntensityMap.channel),transmissionMapUv:F&&v(S.transmissionMap.channel),thicknessMapUv:Te&&v(S.thicknessMap.channel),alphaMapUv:oe&&v(S.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(fe||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!te.attributes.uv&&(J||oe),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pe,skinning:H.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:le,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:_e,decodeVideoTexture:J&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===lt,decodeVideoTextureEmissive:ce&&S.emissiveMap.isVideoTexture===!0&&nt.getTransfer(S.emissiveMap.colorSpace)===lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===yt,flipSided:S.side===Yt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Q&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Q&&S.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)y.push(R),y.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(w(y,S),b(y,S),y.push(n.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function w(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function b(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function _(S){const y=g[S.type];let R;if(y){const B=gn[y];R=Bu.clone(B.uniforms)}else R=S.uniforms;return R}function D(S,y){let R;for(let B=0,H=h.length;B<H;B++){const Y=h[B];if(Y.cacheKey===y){R=Y,++R.usedTimes;break}}return R===void 0&&(R=new e0(n,y,S,r),h.push(R)),R}function C(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function T(S){l.remove(S)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:D,releaseProgram:C,releaseShaderCache:T,programs:h,dispose:I}}function r0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function a0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Dl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ul(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,f,d,g,v,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function o(u,f,d,g,v,m){const p=a(u,f,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,g,v,m){const p=a(u,f,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||a0),i.length>1&&i.sort(f||Dl),s.length>1&&s.sort(f||Dl)}function h(){for(let u=e,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function o0(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Ul,n.set(i,[a])):s>=r.length?(a=new Ul,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function l0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new tt};break;case"SpotLight":t={position:new N,direction:new N,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function c0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let h0=0;function u0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function d0(n){const e=new l0,t=c0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const s=new N,r=new gt,a=new gt;function o(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,w=0,b=0,_=0,D=0,C=0,T=0;c.sort(u0);for(let S=0,y=c.length;S<y;S++){const R=c[S],B=R.color,H=R.intensity,Y=R.distance,te=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=B.r*H,u+=B.g*H,f+=B.b*H;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],H);T++}else if(R.isDirectionalLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const re=R.shadow,X=t.get(R);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,i.directionalShadow[d]=X,i.directionalShadowMap[d]=te,i.directionalShadowMatrix[d]=R.shadow.matrix,w++}i.directional[d]=W,d++}else if(R.isSpotLight){const W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(B).multiplyScalar(H),W.distance=Y,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[v]=W;const re=R.shadow;if(R.map&&(i.spotLightMap[D]=R.map,D++,re.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[v]=re.matrix,R.castShadow){const X=t.get(R);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,i.spotShadow[v]=X,i.spotShadowMap[v]=te,_++}v++}else if(R.isRectAreaLight){const W=e.get(R);W.color.copy(B).multiplyScalar(H),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=W,m++}else if(R.isPointLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const re=R.shadow,X=t.get(R);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,X.shadowCameraNear=re.camera.near,X.shadowCameraFar=re.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=te,i.pointShadowMatrix[g]=R.shadow.matrix,b++}i.point[g]=W,g++}else if(R.isHemisphereLight){const W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(H),W.groundColor.copy(R.groundColor).multiplyScalar(H),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const I=i.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==w||I.numPointShadows!==b||I.numSpotShadows!==_||I.numSpotMaps!==D||I.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=_+D-C,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,I.directionalLength=d,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=w,I.numPointShadows=b,I.numSpotShadows=_,I.numSpotMaps=D,I.numLightProbes=T,i.version=h0++)}function l(c,h){let u=0,f=0,d=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const b=c[p];if(b.isDirectionalLight){const _=i.directional[u];_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(b.isSpotLight){const _=i.spot[d];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const _=i.point[f];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Nl(n){const e=new d0(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function f0(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Nl(n),e.set(s,[o])):r>=a.length?(o=new Nl(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class p0 extends Us{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class m0 extends Us{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const g0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v0=`uniform sampler2D shadow_pass;
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
}`;function _0(n,e,t){let i=new So;const s=new ge,r=new ge,a=new Mt,o=new p0({depthPacking:qh}),l=new m0,c={},h=t.maxTextureSize,u={[li]:Yt,[Yt]:li,[yt]:yt},f=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:g0,fragmentShader:v0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ot;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ht(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let p=this.type;this.render=function(C,T,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=n.getRenderTarget(),y=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),B=n.state;B.setBlending(ni),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=p!==In&&this.type===In,Y=p===In&&this.type!==In;for(let te=0,W=C.length;te<W;te++){const re=C[te],X=re.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const ye=X.getFrameExtents();if(s.multiply(ye),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ye.x),s.x=r.x*ye.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ye.y),s.y=r.y*ye.y,X.mapSize.y=r.y)),X.map===null||H===!0||Y===!0){const Re=this.type!==In?{minFilter:It,magFilter:It}:{};X.map!==null&&X.map.dispose(),X.map=new Bn(s.x,s.y,Re),X.map.texture.name=re.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const we=X.getViewportCount();for(let Re=0;Re<we;Re++){const le=X.getViewport(Re);a.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),B.viewport(a),X.updateMatrices(re,Re),i=X.getFrustum(),_(T,I,X.camera,re,this.type)}X.isPointLightShadow!==!0&&this.type===In&&w(X,I),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,y,R)};function w(C,T){const I=e.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Bn(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(T,null,I,f,v,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(T,null,I,d,v,null)}function b(C,T,I,S){let y=null;const R=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)y=R;else if(y=I.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=y.uuid,H=T.uuid;let Y=c[B];Y===void 0&&(Y={},c[B]=Y);let te=Y[H];te===void 0&&(te=y.clone(),Y[H]=te,T.addEventListener("dispose",D)),y=te}if(y.visible=T.visible,y.wireframe=T.wireframe,S===In?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=n.properties.get(y);B.light=I}return y}function _(C,T,I,S,y){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===In)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const H=e.update(C),Y=C.material;if(Array.isArray(Y)){const te=H.groups;for(let W=0,re=te.length;W<re;W++){const X=te[W],ye=Y[X.materialIndex];if(ye&&ye.visible){const we=b(C,ye,S,y);C.onBeforeShadow(n,C,T,I,H,we,X),n.renderBufferDirect(I,null,H,we,C,X),C.onAfterShadow(n,C,T,I,H,we,X)}}}else if(Y.visible){const te=b(C,Y,S,y);C.onBeforeShadow(n,C,T,I,H,te,null),n.renderBufferDirect(I,null,H,te,C,null),C.onAfterShadow(n,C,T,I,H,te,null)}}const B=C.children;for(let H=0,Y=B.length;H<Y;H++)_(B[H],T,I,S,y)}function D(C){C.target.removeEventListener("dispose",D);for(const I in c){const S=c[I],y=C.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const x0={[wa]:Aa,[Ea]:Ra,[Ta]:Pa,[ts]:Ca,[Aa]:wa,[Ra]:Ea,[Pa]:Ta,[Ca]:ts};function y0(n,e){function t(){let F=!1;const Te=new Mt;let K=null;const oe=new Mt(0,0,0,0);return{setMask:function(P){K!==P&&!F&&(n.colorMask(P,P,P,P),K=P)},setLocked:function(P){F=P},setClear:function(P,U,Q,_e,Se){Se===!0&&(P*=_e,U*=_e,Q*=_e),Te.set(P,U,Q,_e),oe.equals(Te)===!1&&(n.clearColor(P,U,Q,_e),oe.copy(Te))},reset:function(){F=!1,K=null,oe.set(-1,0,0,0)}}}function i(){let F=!1,Te=!1,K=null,oe=null,P=null;return{setReversed:function(U){if(Te!==U){const Q=e.get("EXT_clip_control");Te?Q.clipControlEXT(Q.LOWER_LEFT_EXT,Q.ZERO_TO_ONE_EXT):Q.clipControlEXT(Q.LOWER_LEFT_EXT,Q.NEGATIVE_ONE_TO_ONE_EXT);const _e=P;P=null,this.setClear(_e)}Te=U},getReversed:function(){return Te},setTest:function(U){U?Z(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(U){K!==U&&!F&&(n.depthMask(U),K=U)},setFunc:function(U){if(Te&&(U=x0[U]),oe!==U){switch(U){case wa:n.depthFunc(n.NEVER);break;case Aa:n.depthFunc(n.ALWAYS);break;case Ea:n.depthFunc(n.LESS);break;case ts:n.depthFunc(n.LEQUAL);break;case Ta:n.depthFunc(n.EQUAL);break;case Ca:n.depthFunc(n.GEQUAL);break;case Ra:n.depthFunc(n.GREATER);break;case Pa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=U}},setLocked:function(U){F=U},setClear:function(U){P!==U&&(Te&&(U=1-U),n.clearDepth(U),P=U)},reset:function(){F=!1,K=null,oe=null,P=null,Te=!1}}}function s(){let F=!1,Te=null,K=null,oe=null,P=null,U=null,Q=null,_e=null,Se=null;return{setTest:function(Me){F||(Me?Z(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(Me){Te!==Me&&!F&&(n.stencilMask(Me),Te=Me)},setFunc:function(Me,ue,be){(K!==Me||oe!==ue||P!==be)&&(n.stencilFunc(Me,ue,be),K=Me,oe=ue,P=be)},setOp:function(Me,ue,be){(U!==Me||Q!==ue||_e!==be)&&(n.stencilOp(Me,ue,be),U=Me,Q=ue,_e=be)},setLocked:function(Me){F=Me},setClear:function(Me){Se!==Me&&(n.clearStencil(Me),Se=Me)},reset:function(){F=!1,Te=null,K=null,oe=null,P=null,U=null,Q=null,_e=null,Se=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,w=null,b=null,_=null,D=null,C=null,T=new tt(0,0,0),I=0,S=!1,y=null,R=null,B=null,H=null,Y=null;const te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,re=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=re>=1):X.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=re>=2);let ye=null,we={};const Re=n.getParameter(n.SCISSOR_BOX),le=n.getParameter(n.VIEWPORT),ve=new Mt().fromArray(Re),G=new Mt().fromArray(le);function ne(F,Te,K,oe){const P=new Uint8Array(4),U=n.createTexture();n.bindTexture(F,U),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Q=0;Q<K;Q++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,P):n.texImage2D(Te+Q,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,P);return U}const de={};de[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),a.setFunc(ts),j(!1),fe(zo),Z(n.CULL_FACE),A(ni);function Z(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function Pe(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function Ve(F,Te){return u[F]!==Te?(n.bindFramebuffer(F,Te),u[F]=Te,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Te),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function Be(F,Te){let K=d,oe=!1;if(F){K=f.get(Te),K===void 0&&(K=[],f.set(Te,K));const P=F.textures;if(K.length!==P.length||K[0]!==n.COLOR_ATTACHMENT0){for(let U=0,Q=P.length;U<Q;U++)K[U]=n.COLOR_ATTACHMENT0+U;K.length=P.length,oe=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,oe=!0);oe&&n.drawBuffers(K)}function J(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const L={[xi]:n.FUNC_ADD,[xh]:n.FUNC_SUBTRACT,[yh]:n.FUNC_REVERSE_SUBTRACT};L[Mh]=n.MIN,L[Sh]=n.MAX;const k={[bh]:n.ZERO,[wh]:n.ONE,[Ah]:n.SRC_COLOR,[Sa]:n.SRC_ALPHA,[Lh]:n.SRC_ALPHA_SATURATE,[Rh]:n.DST_COLOR,[Th]:n.DST_ALPHA,[Eh]:n.ONE_MINUS_SRC_COLOR,[ba]:n.ONE_MINUS_SRC_ALPHA,[Ph]:n.ONE_MINUS_DST_COLOR,[Ch]:n.ONE_MINUS_DST_ALPHA,[Ih]:n.CONSTANT_COLOR,[Dh]:n.ONE_MINUS_CONSTANT_COLOR,[Uh]:n.CONSTANT_ALPHA,[Nh]:n.ONE_MINUS_CONSTANT_ALPHA};function A(F,Te,K,oe,P,U,Q,_e,Se,Me){if(F===ni){v===!0&&(Pe(n.BLEND),v=!1);return}if(v===!1&&(Z(n.BLEND),v=!0),F!==_h){if(F!==m||Me!==S){if((p!==xi||_!==xi)&&(n.blendEquation(n.FUNC_ADD),p=xi,_=xi),Me)switch(F){case ji:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ma:n.blendFunc(n.ONE,n.ONE);break;case Bo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ho:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ma:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Bo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ho:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,b=null,D=null,C=null,T.set(0,0,0),I=0,m=F,S=Me}return}P=P||Te,U=U||K,Q=Q||oe,(Te!==p||P!==_)&&(n.blendEquationSeparate(L[Te],L[P]),p=Te,_=P),(K!==w||oe!==b||U!==D||Q!==C)&&(n.blendFuncSeparate(k[K],k[oe],k[U],k[Q]),w=K,b=oe,D=U,C=Q),(_e.equals(T)===!1||Se!==I)&&(n.blendColor(_e.r,_e.g,_e.b,Se),T.copy(_e),I=Se),m=F,S=!1}function ae(F,Te){F.side===yt?Pe(n.CULL_FACE):Z(n.CULL_FACE);let K=F.side===Yt;Te&&(K=!K),j(K),F.blending===ji&&F.transparent===!1?A(ni):A(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const oe=F.stencilWrite;o.setTest(oe),oe&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ce(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(F){y!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),y=F)}function fe(F){F!==mh?(Z(n.CULL_FACE),F!==R&&(F===zo?n.cullFace(n.BACK):F===gh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),R=F}function pe(F){F!==B&&(W&&n.lineWidth(F),B=F)}function ce(F,Te,K){F?(Z(n.POLYGON_OFFSET_FILL),(H!==Te||Y!==K)&&(n.polygonOffset(Te,K),H=Te,Y=K)):Pe(n.POLYGON_OFFSET_FILL)}function Ce(F){F?Z(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function E(F){F===void 0&&(F=n.TEXTURE0+te-1),ye!==F&&(n.activeTexture(F),ye=F)}function x(F,Te,K){K===void 0&&(ye===null?K=n.TEXTURE0+te-1:K=ye);let oe=we[K];oe===void 0&&(oe={type:void 0,texture:void 0},we[K]=oe),(oe.type!==F||oe.texture!==Te)&&(ye!==K&&(n.activeTexture(K),ye=K),n.bindTexture(F,Te||de[F]),oe.type=F,oe.texture=Te)}function V(){const F=we[ye];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ie(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ke(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $e(F){ve.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),ve.copy(F))}function De(F){G.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),G.copy(F))}function Ye(F,Te){let K=c.get(Te);K===void 0&&(K=new WeakMap,c.set(Te,K));let oe=K.get(F);oe===void 0&&(oe=n.getUniformBlockIndex(Te,F.name),K.set(F,oe))}function Xe(F,Te){const oe=c.get(Te).get(F);l.get(Te)!==oe&&(n.uniformBlockBinding(Te,oe,F.__bindingPointIndex),l.set(Te,oe))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ye=null,we={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,w=null,b=null,_=null,D=null,C=null,T=new tt(0,0,0),I=0,S=!1,y=null,R=null,B=null,H=null,Y=null,ve.set(0,0,n.canvas.width,n.canvas.height),G.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:Pe,bindFramebuffer:Ve,drawBuffers:Be,useProgram:J,setBlending:A,setMaterial:ae,setFlipSided:j,setCullFace:fe,setLineWidth:pe,setPolygonOffset:ce,setScissorTest:Ce,activeTexture:E,bindTexture:x,unbindTexture:V,compressedTexImage2D:ie,compressedTexImage3D:he,texImage2D:Ue,texImage3D:Fe,updateUBOMapping:Ye,uniformBlockBinding:Xe,texStorage2D:Ke,texStorage3D:me,texSubImage2D:se,texSubImage3D:Ne,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ie,scissor:$e,viewport:De,reset:ot}}function Fl(n,e,t,i){const s=M0(i);switch(t){case dc:return n*e;case pc:return n*e;case mc:return n*e*2;case Tr:return n*e/s.components*s.byteLength;case vo:return n*e/s.components*s.byteLength;case gc:return n*e*2/s.components*s.byteLength;case _o:return n*e*2/s.components*s.byteLength;case fc:return n*e*3/s.components*s.byteLength;case ln:return n*e*4/s.components*s.byteLength;case xo:return n*e*4/s.components*s.byteLength;case ur:case dr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fr:case pr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Na:case ka:return Math.max(n,16)*Math.max(e,8)/4;case Ua:case Fa:return Math.max(n,8)*Math.max(e,8)/2;case Oa:case za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Va:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case $a:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case qa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Za:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ja:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ka:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Qa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case eo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case mr:case to:case no:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vc:case io:return Math.ceil(n/4)*Math.ceil(e/4)*8;case so:case ro:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function M0(n){switch(n){case zn:case cc:return{byteLength:1,components:1};case Ts:case hc:case Ti:return{byteLength:2,components:1};case mo:case go:return{byteLength:2,components:4};case Ei:case po:case Dn:return{byteLength:4,components:1};case uc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function S0(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return d?new OffscreenCanvas(E,x):Sr("canvas")}function v(E,x,V){let ie=1;const he=Ce(E);if((he.width>V||he.height>V)&&(ie=V/Math.max(he.width,he.height)),ie<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const se=Math.floor(ie*he.width),Ne=Math.floor(ie*he.height);u===void 0&&(u=g(se,Ne));const Ae=x?g(se,Ne):u;return Ae.width=se,Ae.height=Ne,Ae.getContext("2d").drawImage(E,0,0,se,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+se+"x"+Ne+")."),Ae}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(E,x,V,ie,he=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let se=x;if(x===n.RED&&(V===n.FLOAT&&(se=n.R32F),V===n.HALF_FLOAT&&(se=n.R16F),V===n.UNSIGNED_BYTE&&(se=n.R8)),x===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(se=n.R8UI),V===n.UNSIGNED_SHORT&&(se=n.R16UI),V===n.UNSIGNED_INT&&(se=n.R32UI),V===n.BYTE&&(se=n.R8I),V===n.SHORT&&(se=n.R16I),V===n.INT&&(se=n.R32I)),x===n.RG&&(V===n.FLOAT&&(se=n.RG32F),V===n.HALF_FLOAT&&(se=n.RG16F),V===n.UNSIGNED_BYTE&&(se=n.RG8)),x===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(se=n.RG8UI),V===n.UNSIGNED_SHORT&&(se=n.RG16UI),V===n.UNSIGNED_INT&&(se=n.RG32UI),V===n.BYTE&&(se=n.RG8I),V===n.SHORT&&(se=n.RG16I),V===n.INT&&(se=n.RG32I)),x===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(se=n.RGB8UI),V===n.UNSIGNED_SHORT&&(se=n.RGB16UI),V===n.UNSIGNED_INT&&(se=n.RGB32UI),V===n.BYTE&&(se=n.RGB8I),V===n.SHORT&&(se=n.RGB16I),V===n.INT&&(se=n.RGB32I)),x===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(se=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(se=n.RGBA16UI),V===n.UNSIGNED_INT&&(se=n.RGBA32UI),V===n.BYTE&&(se=n.RGBA8I),V===n.SHORT&&(se=n.RGBA16I),V===n.INT&&(se=n.RGBA32I)),x===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(se=n.RGB9_E5),x===n.RGBA){const Ne=he?Cr:nt.getTransfer(ie);V===n.FLOAT&&(se=n.RGBA32F),V===n.HALF_FLOAT&&(se=n.RGBA16F),V===n.UNSIGNED_BYTE&&(se=Ne===lt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function _(E,x){let V;return E?x===null||x===Ei||x===ss?V=n.DEPTH24_STENCIL8:x===Dn?V=n.DEPTH32F_STENCIL8:x===Ts&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ei||x===ss?V=n.DEPTH_COMPONENT24:x===Dn?V=n.DEPTH_COMPONENT32F:x===Ts&&(V=n.DEPTH_COMPONENT16),V}function D(E,x){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==It&&E.minFilter!==vn?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function C(E){const x=E.target;x.removeEventListener("dispose",C),I(x),x.isVideoTexture&&h.delete(x)}function T(E){const x=E.target;x.removeEventListener("dispose",T),y(x)}function I(E){const x=i.get(E);if(x.__webglInit===void 0)return;const V=E.source,ie=f.get(V);if(ie){const he=ie[x.__cacheKey];he.usedTimes--,he.usedTimes===0&&S(E),Object.keys(ie).length===0&&f.delete(V)}i.remove(E)}function S(E){const x=i.get(E);n.deleteTexture(x.__webglTexture);const V=E.source,ie=f.get(V);delete ie[x.__cacheKey],a.memory.textures--}function y(E){const x=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(x.__webglFramebuffer[ie]))for(let he=0;he<x.__webglFramebuffer[ie].length;he++)n.deleteFramebuffer(x.__webglFramebuffer[ie][he]);else n.deleteFramebuffer(x.__webglFramebuffer[ie]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[ie])}else{if(Array.isArray(x.__webglFramebuffer))for(let ie=0;ie<x.__webglFramebuffer.length;ie++)n.deleteFramebuffer(x.__webglFramebuffer[ie]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ie=0;ie<x.__webglColorRenderbuffer.length;ie++)x.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[ie]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const V=E.textures;for(let ie=0,he=V.length;ie<he;ie++){const se=i.get(V[ie]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(V[ie])}i.remove(E)}let R=0;function B(){R=0}function H(){const E=R;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),R+=1,E}function Y(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function te(E,x){const V=i.get(E);if(E.isVideoTexture&&pe(E),E.isRenderTargetTexture===!1&&E.version>0&&V.__version!==E.version){const ie=E.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(V,E,x);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+x)}function W(E,x){const V=i.get(E);if(E.version>0&&V.__version!==E.version){G(V,E,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+x)}function re(E,x){const V=i.get(E);if(E.version>0&&V.__version!==E.version){G(V,E,x);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+x)}function X(E,x){const V=i.get(E);if(E.version>0&&V.__version!==E.version){ne(V,E,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+x)}const ye={[Es]:n.REPEAT,[Si]:n.CLAMP_TO_EDGE,[Da]:n.MIRRORED_REPEAT},we={[It]:n.NEAREST,[$h]:n.NEAREST_MIPMAP_NEAREST,[Os]:n.NEAREST_MIPMAP_LINEAR,[vn]:n.LINEAR,[Fr]:n.LINEAR_MIPMAP_NEAREST,[bi]:n.LINEAR_MIPMAP_LINEAR},Re={[Zh]:n.NEVER,[tu]:n.ALWAYS,[Jh]:n.LESS,[xc]:n.LEQUAL,[jh]:n.EQUAL,[eu]:n.GEQUAL,[Kh]:n.GREATER,[Qh]:n.NOTEQUAL};function le(E,x){if(x.type===Dn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===vn||x.magFilter===Fr||x.magFilter===Os||x.magFilter===bi||x.minFilter===vn||x.minFilter===Fr||x.minFilter===Os||x.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ye[x.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ye[x.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ye[x.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,we[x.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,we[x.minFilter]),x.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Re[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===It||x.minFilter!==Os&&x.minFilter!==bi||x.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ve(E,x){let V=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",C));const ie=x.source;let he=f.get(ie);he===void 0&&(he={},f.set(ie,he));const se=Y(x);if(se!==E.__cacheKey){he[se]===void 0&&(he[se]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),he[se].usedTimes++;const Ne=he[E.__cacheKey];Ne!==void 0&&(he[E.__cacheKey].usedTimes--,Ne.usedTimes===0&&S(x)),E.__cacheKey=se,E.__webglTexture=he[se].texture}return V}function G(E,x,V){let ie=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ie=n.TEXTURE_3D);const he=ve(E,x),se=x.source;t.bindTexture(ie,E.__webglTexture,n.TEXTURE0+V);const Ne=i.get(se);if(se.version!==Ne.__version||he===!0){t.activeTexture(n.TEXTURE0+V);const Ae=nt.getPrimaries(nt.workingColorSpace),Ie=x.colorSpace===ti?null:nt.getPrimaries(x.colorSpace),Ke=x.colorSpace===ti||Ae===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let me=v(x.image,!1,s.maxTextureSize);me=ce(x,me);const Ue=r.convert(x.format,x.colorSpace),Fe=r.convert(x.type);let $e=b(x.internalFormat,Ue,Fe,x.colorSpace,x.isVideoTexture);le(ie,x);let De;const Ye=x.mipmaps,Xe=x.isVideoTexture!==!0,ot=Ne.__version===void 0||he===!0,F=se.dataReady,Te=D(x,me);if(x.isDepthTexture)$e=_(x.format===rs,x.type),ot&&(Xe?t.texStorage2D(n.TEXTURE_2D,1,$e,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,$e,me.width,me.height,0,Ue,Fe,null));else if(x.isDataTexture)if(Ye.length>0){Xe&&ot&&t.texStorage2D(n.TEXTURE_2D,Te,$e,Ye[0].width,Ye[0].height);for(let K=0,oe=Ye.length;K<oe;K++)De=Ye[K],Xe?F&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,De.width,De.height,Ue,Fe,De.data):t.texImage2D(n.TEXTURE_2D,K,$e,De.width,De.height,0,Ue,Fe,De.data);x.generateMipmaps=!1}else Xe?(ot&&t.texStorage2D(n.TEXTURE_2D,Te,$e,me.width,me.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me.width,me.height,Ue,Fe,me.data)):t.texImage2D(n.TEXTURE_2D,0,$e,me.width,me.height,0,Ue,Fe,me.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Xe&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,$e,Ye[0].width,Ye[0].height,me.depth);for(let K=0,oe=Ye.length;K<oe;K++)if(De=Ye[K],x.format!==ln)if(Ue!==null)if(Xe){if(F)if(x.layerUpdates.size>0){const P=Fl(De.width,De.height,x.format,x.type);for(const U of x.layerUpdates){const Q=De.data.subarray(U*P/De.data.BYTES_PER_ELEMENT,(U+1)*P/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,U,De.width,De.height,1,Ue,Q)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,De.width,De.height,me.depth,Ue,De.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,$e,De.width,De.height,me.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,De.width,De.height,me.depth,Ue,Fe,De.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,$e,De.width,De.height,me.depth,0,Ue,Fe,De.data)}else{Xe&&ot&&t.texStorage2D(n.TEXTURE_2D,Te,$e,Ye[0].width,Ye[0].height);for(let K=0,oe=Ye.length;K<oe;K++)De=Ye[K],x.format!==ln?Ue!==null?Xe?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,De.width,De.height,Ue,De.data):t.compressedTexImage2D(n.TEXTURE_2D,K,$e,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?F&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,De.width,De.height,Ue,Fe,De.data):t.texImage2D(n.TEXTURE_2D,K,$e,De.width,De.height,0,Ue,Fe,De.data)}else if(x.isDataArrayTexture)if(Xe){if(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,$e,me.width,me.height,me.depth),F)if(x.layerUpdates.size>0){const K=Fl(me.width,me.height,x.format,x.type);for(const oe of x.layerUpdates){const P=me.data.subarray(oe*K/me.data.BYTES_PER_ELEMENT,(oe+1)*K/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,me.width,me.height,1,Ue,Fe,P)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ue,Fe,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,$e,me.width,me.height,me.depth,0,Ue,Fe,me.data);else if(x.isData3DTexture)Xe?(ot&&t.texStorage3D(n.TEXTURE_3D,Te,$e,me.width,me.height,me.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ue,Fe,me.data)):t.texImage3D(n.TEXTURE_3D,0,$e,me.width,me.height,me.depth,0,Ue,Fe,me.data);else if(x.isFramebufferTexture){if(ot)if(Xe)t.texStorage2D(n.TEXTURE_2D,Te,$e,me.width,me.height);else{let K=me.width,oe=me.height;for(let P=0;P<Te;P++)t.texImage2D(n.TEXTURE_2D,P,$e,K,oe,0,Ue,Fe,null),K>>=1,oe>>=1}}else if(Ye.length>0){if(Xe&&ot){const K=Ce(Ye[0]);t.texStorage2D(n.TEXTURE_2D,Te,$e,K.width,K.height)}for(let K=0,oe=Ye.length;K<oe;K++)De=Ye[K],Xe?F&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,Ue,Fe,De):t.texImage2D(n.TEXTURE_2D,K,$e,Ue,Fe,De);x.generateMipmaps=!1}else if(Xe){if(ot){const K=Ce(me);t.texStorage2D(n.TEXTURE_2D,Te,$e,K.width,K.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ue,Fe,me)}else t.texImage2D(n.TEXTURE_2D,0,$e,Ue,Fe,me);m(x)&&p(ie),Ne.__version=se.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function ne(E,x,V){if(x.image.length!==6)return;const ie=ve(E,x),he=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+V);const se=i.get(he);if(he.version!==se.__version||ie===!0){t.activeTexture(n.TEXTURE0+V);const Ne=nt.getPrimaries(nt.workingColorSpace),Ae=x.colorSpace===ti?null:nt.getPrimaries(x.colorSpace),Ie=x.colorSpace===ti||Ne===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Ke=x.isCompressedTexture||x.image[0].isCompressedTexture,me=x.image[0]&&x.image[0].isDataTexture,Ue=[];for(let oe=0;oe<6;oe++)!Ke&&!me?Ue[oe]=v(x.image[oe],!0,s.maxCubemapSize):Ue[oe]=me?x.image[oe].image:x.image[oe],Ue[oe]=ce(x,Ue[oe]);const Fe=Ue[0],$e=r.convert(x.format,x.colorSpace),De=r.convert(x.type),Ye=b(x.internalFormat,$e,De,x.colorSpace),Xe=x.isVideoTexture!==!0,ot=se.__version===void 0||ie===!0,F=he.dataReady;let Te=D(x,Fe);le(n.TEXTURE_CUBE_MAP,x);let K;if(Ke){Xe&&ot&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Ye,Fe.width,Fe.height);for(let oe=0;oe<6;oe++){K=Ue[oe].mipmaps;for(let P=0;P<K.length;P++){const U=K[P];x.format!==ln?$e!==null?Xe?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P,0,0,U.width,U.height,$e,U.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P,Ye,U.width,U.height,0,U.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P,0,0,U.width,U.height,$e,De,U.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P,Ye,U.width,U.height,0,$e,De,U.data)}}}else{if(K=x.mipmaps,Xe&&ot){K.length>0&&Te++;const oe=Ce(Ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Ye,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(me){Xe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ue[oe].width,Ue[oe].height,$e,De,Ue[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ye,Ue[oe].width,Ue[oe].height,0,$e,De,Ue[oe].data);for(let P=0;P<K.length;P++){const Q=K[P].image[oe].image;Xe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P+1,0,0,Q.width,Q.height,$e,De,Q.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P+1,Ye,Q.width,Q.height,0,$e,De,Q.data)}}else{Xe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,$e,De,Ue[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ye,$e,De,Ue[oe]);for(let P=0;P<K.length;P++){const U=K[P];Xe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P+1,0,0,$e,De,U.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P+1,Ye,$e,De,U.image[oe])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),se.__version=he.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function de(E,x,V,ie,he,se){const Ne=r.convert(V.format,V.colorSpace),Ae=r.convert(V.type),Ie=b(V.internalFormat,Ne,Ae,V.colorSpace),Ke=i.get(x),me=i.get(V);if(me.__renderTarget=x,!Ke.__hasExternalTextures){const Ue=Math.max(1,x.width>>se),Fe=Math.max(1,x.height>>se);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,se,Ie,Ue,Fe,x.depth,0,Ne,Ae,null):t.texImage2D(he,se,Ie,Ue,Fe,0,Ne,Ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),fe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,he,me.__webglTexture,0,j(x)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,he,me.__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Z(E,x,V){if(n.bindRenderbuffer(n.RENDERBUFFER,E),x.depthBuffer){const ie=x.depthTexture,he=ie&&ie.isDepthTexture?ie.type:null,se=_(x.stencilBuffer,he),Ne=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=j(x);fe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,se,x.width,x.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,se,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,se,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ne,n.RENDERBUFFER,E)}else{const ie=x.textures;for(let he=0;he<ie.length;he++){const se=ie[he],Ne=r.convert(se.format,se.colorSpace),Ae=r.convert(se.type),Ie=b(se.internalFormat,Ne,Ae,se.colorSpace),Ke=j(x);V&&fe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,Ie,x.width,x.height):fe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ke,Ie,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ie,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=i.get(x.depthTexture);ie.__renderTarget=x,(!ie.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),te(x.depthTexture,0);const he=ie.__webglTexture,se=j(x);if(x.depthTexture.format===Ki)fe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,he,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,he,0);else if(x.depthTexture.format===rs)fe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,he,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function Ve(E){const x=i.get(E),V=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const ie=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ie){const he=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ie.removeEventListener("dispose",he)};ie.addEventListener("dispose",he),x.__depthDisposeCallback=he}x.__boundDepthTexture=ie}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Pe(x.__webglFramebuffer,E)}else if(V){x.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[ie]),x.__webglDepthbuffer[ie]===void 0)x.__webglDepthbuffer[ie]=n.createRenderbuffer(),Z(x.__webglDepthbuffer[ie],E,!1);else{const he=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer[ie];n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,se)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Z(x.__webglDepthbuffer,E,!1);else{const ie=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,he)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(E,x,V){const ie=i.get(E);x!==void 0&&de(ie.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Ve(E)}function J(E){const x=E.texture,V=i.get(E),ie=i.get(x);E.addEventListener("dispose",T);const he=E.textures,se=E.isWebGLCubeRenderTarget===!0,Ne=he.length>1;if(Ne||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=x.version,a.memory.textures++),se){V.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[Ae]=[];for(let Ie=0;Ie<x.mipmaps.length;Ie++)V.__webglFramebuffer[Ae][Ie]=n.createFramebuffer()}else V.__webglFramebuffer[Ae]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let Ae=0;Ae<x.mipmaps.length;Ae++)V.__webglFramebuffer[Ae]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Ne)for(let Ae=0,Ie=he.length;Ae<Ie;Ae++){const Ke=i.get(he[Ae]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&fe(E)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Ae=0;Ae<he.length;Ae++){const Ie=he[Ae];V.__webglColorRenderbuffer[Ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[Ae]);const Ke=r.convert(Ie.format,Ie.colorSpace),me=r.convert(Ie.type),Ue=b(Ie.internalFormat,Ke,me,Ie.colorSpace,E.isXRRenderTarget===!0),Fe=j(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Ue,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,V.__webglColorRenderbuffer[Ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Z(V.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),le(n.TEXTURE_CUBE_MAP,x);for(let Ae=0;Ae<6;Ae++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ie=0;Ie<x.mipmaps.length;Ie++)de(V.__webglFramebuffer[Ae][Ie],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie);else de(V.__webglFramebuffer[Ae],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let Ae=0,Ie=he.length;Ae<Ie;Ae++){const Ke=he[Ae],me=i.get(Ke);t.bindTexture(n.TEXTURE_2D,me.__webglTexture),le(n.TEXTURE_2D,Ke),de(V.__webglFramebuffer,E,Ke,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,0),m(Ke)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let Ae=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Ae=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ie.__webglTexture),le(Ae,x),x.mipmaps&&x.mipmaps.length>0)for(let Ie=0;Ie<x.mipmaps.length;Ie++)de(V.__webglFramebuffer[Ie],E,x,n.COLOR_ATTACHMENT0,Ae,Ie);else de(V.__webglFramebuffer,E,x,n.COLOR_ATTACHMENT0,Ae,0);m(x)&&p(Ae),t.unbindTexture()}E.depthBuffer&&Ve(E)}function L(E){const x=E.textures;for(let V=0,ie=x.length;V<ie;V++){const he=x[V];if(m(he)){const se=w(E),Ne=i.get(he).__webglTexture;t.bindTexture(se,Ne),p(se),t.unbindTexture()}}}const k=[],A=[];function ae(E){if(E.samples>0){if(fe(E)===!1){const x=E.textures,V=E.width,ie=E.height;let he=n.COLOR_BUFFER_BIT;const se=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ne=i.get(E),Ae=x.length>1;if(Ae)for(let Ie=0;Ie<x.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Ie=0;Ie<x.length;Ie++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),Ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ie]);const Ke=i.get(x[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ke,0)}n.blitFramebuffer(0,0,V,ie,0,0,V,ie,he,n.NEAREST),l===!0&&(k.length=0,A.length=0,k.push(n.COLOR_ATTACHMENT0+Ie),E.depthBuffer&&E.resolveDepthBuffer===!1&&(k.push(se),A.push(se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,A)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,k))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ae)for(let Ie=0;Ie<x.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ie]);const Ke=i.get(x[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,Ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const x=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function j(E){return Math.min(s.maxSamples,E.samples)}function fe(E){const x=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function pe(E){const x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function ce(E,x){const V=E.colorSpace,ie=E.format,he=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||V!==os&&V!==ti&&(nt.getTransfer(V)===lt?(ie!==ln||he!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),x}function Ce(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=te,this.setTexture2DArray=W,this.setTexture3D=re,this.setTextureCube=X,this.rebindTextures=Be,this.setupRenderTarget=J,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=de,this.useMultisampledRTT=fe}function b0(n,e){function t(i,s=ti){let r;const a=nt.getTransfer(s);if(i===zn)return n.UNSIGNED_BYTE;if(i===mo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===go)return n.UNSIGNED_SHORT_5_5_5_1;if(i===uc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cc)return n.BYTE;if(i===hc)return n.SHORT;if(i===Ts)return n.UNSIGNED_SHORT;if(i===po)return n.INT;if(i===Ei)return n.UNSIGNED_INT;if(i===Dn)return n.FLOAT;if(i===Ti)return n.HALF_FLOAT;if(i===dc)return n.ALPHA;if(i===fc)return n.RGB;if(i===ln)return n.RGBA;if(i===pc)return n.LUMINANCE;if(i===mc)return n.LUMINANCE_ALPHA;if(i===Ki)return n.DEPTH_COMPONENT;if(i===rs)return n.DEPTH_STENCIL;if(i===Tr)return n.RED;if(i===vo)return n.RED_INTEGER;if(i===gc)return n.RG;if(i===_o)return n.RG_INTEGER;if(i===xo)return n.RGBA_INTEGER;if(i===ur||i===dr||i===fr||i===pr)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ua||i===Na||i===Fa||i===ka)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Oa||i===za||i===Ba)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Oa||i===za)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ba)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ha||i===Ga||i===Va||i===Wa||i===$a||i===Xa||i===qa||i===Ya||i===Za||i===Ja||i===ja||i===Ka||i===Qa||i===eo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ha)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ga)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Va)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wa)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$a)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xa)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qa)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ya)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Za)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ja)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ja)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ka)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qa)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===eo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mr||i===to||i===no)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===mr)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===to)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===no)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vc||i===io||i===so||i===ro)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===mr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===io)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===so)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ro)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ss?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class w0 extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class cn extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const A0={type:"move"};class ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(A0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new cn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const E0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T0=`
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

}`;class C0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new kt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new un({vertexShader:E0,fragmentShader:T0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new si(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class R0 extends ls{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const v=new C0,m=t.getContextAttributes();let p=null,w=null;const b=[],_=[],D=new ge;let C=null;const T=new an;T.viewport=new Mt;const I=new an;I.viewport=new Mt;const S=[T,I],y=new w0;let R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ne=b[G];return ne===void 0&&(ne=new ca,b[G]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(G){let ne=b[G];return ne===void 0&&(ne=new ca,b[G]=ne),ne.getGripSpace()},this.getHand=function(G){let ne=b[G];return ne===void 0&&(ne=new ca,b[G]=ne),ne.getHandSpace()};function H(G){const ne=_.indexOf(G.inputSource);if(ne===-1)return;const de=b[ne];de!==void 0&&(de.update(G.inputSource,G.frame,c||a),de.dispatchEvent({type:G.type,data:G.inputSource}))}function Y(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",te);for(let G=0;G<b.length;G++){const ne=_[G];ne!==null&&(_[G]=null,b[G].disconnect(ne))}R=null,B=null,v.reset(),e.setRenderTarget(p),d=null,f=null,u=null,s=null,w=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",te),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new Bn(d.framebufferWidth,d.framebufferHeight,{format:ln,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,de=null,Z=null;m.depth&&(Z=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?rs:Ki,de=m.stencil?ss:Ei);const Pe={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Pe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new Bn(f.textureWidth,f.textureHeight,{format:ln,type:zn,depthTexture:new Lc(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ve.setContext(s),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function te(G){for(let ne=0;ne<G.removed.length;ne++){const de=G.removed[ne],Z=_.indexOf(de);Z>=0&&(_[Z]=null,b[Z].disconnect(de))}for(let ne=0;ne<G.added.length;ne++){const de=G.added[ne];let Z=_.indexOf(de);if(Z===-1){for(let Ve=0;Ve<b.length;Ve++)if(Ve>=_.length){_.push(de),Z=Ve;break}else if(_[Ve]===null){_[Ve]=de,Z=Ve;break}if(Z===-1)break}const Pe=b[Z];Pe&&Pe.connect(de)}}const W=new N,re=new N;function X(G,ne,de){W.setFromMatrixPosition(ne.matrixWorld),re.setFromMatrixPosition(de.matrixWorld);const Z=W.distanceTo(re),Pe=ne.projectionMatrix.elements,Ve=de.projectionMatrix.elements,Be=Pe[14]/(Pe[10]-1),J=Pe[14]/(Pe[10]+1),L=(Pe[9]+1)/Pe[5],k=(Pe[9]-1)/Pe[5],A=(Pe[8]-1)/Pe[0],ae=(Ve[8]+1)/Ve[0],j=Be*A,fe=Be*ae,pe=Z/(-A+ae),ce=pe*-A;if(ne.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ce),G.translateZ(pe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Pe[10]===-1)G.projectionMatrix.copy(ne.projectionMatrix),G.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Ce=Be+pe,E=J+pe,x=j-ce,V=fe+(Z-ce),ie=L*J/E*Ce,he=k*J/E*Ce;G.projectionMatrix.makePerspective(x,V,ie,he,Ce,E),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function ye(G,ne){ne===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ne.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let ne=G.near,de=G.far;v.texture!==null&&(v.depthNear>0&&(ne=v.depthNear),v.depthFar>0&&(de=v.depthFar)),y.near=I.near=T.near=ne,y.far=I.far=T.far=de,(R!==y.near||B!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,B=y.far),T.layers.mask=G.layers.mask|2,I.layers.mask=G.layers.mask|4,y.layers.mask=T.layers.mask|I.layers.mask;const Z=G.parent,Pe=y.cameras;ye(y,Z);for(let Ve=0;Ve<Pe.length;Ve++)ye(Pe[Ve],Z);Pe.length===2?X(y,T,I):y.projectionMatrix.copy(T.projectionMatrix),we(G,y,Z)};function we(G,ne,de){de===null?G.matrix.copy(ne.matrixWorld):(G.matrix.copy(de.matrixWorld),G.matrix.invert(),G.matrix.multiply(ne.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ne.projectionMatrix),G.projectionMatrixInverse.copy(ne.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Cs*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let Re=null;function le(G,ne){if(h=ne.getViewerPose(c||a),g=ne,h!==null){const de=h.views;d!==null&&(e.setRenderTargetFramebuffer(w,d.framebuffer),e.setRenderTarget(w));let Z=!1;de.length!==y.cameras.length&&(y.cameras.length=0,Z=!0);for(let Ve=0;Ve<de.length;Ve++){const Be=de[Ve];let J=null;if(d!==null)J=d.getViewport(Be);else{const k=u.getViewSubImage(f,Be);J=k.viewport,Ve===0&&(e.setRenderTargetTextures(w,k.colorTexture,f.ignoreDepthValues?void 0:k.depthStencilTexture),e.setRenderTarget(w))}let L=S[Ve];L===void 0&&(L=new an,L.layers.enable(Ve),L.viewport=new Mt,S[Ve]=L),L.matrix.fromArray(Be.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Be.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(J.x,J.y,J.width,J.height),Ve===0&&(y.matrix.copy(L.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Z===!0&&y.cameras.push(L)}const Pe=s.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Ve=u.getDepthInformation(de[0]);Ve&&Ve.isValid&&Ve.texture&&v.init(e,Ve,s.renderState)}}for(let de=0;de<b.length;de++){const Z=_[de],Pe=b[de];Z!==null&&Pe!==void 0&&Pe.update(Z,ne,c||a)}Re&&Re(G,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const ve=new Pc;ve.setAnimationLoop(le),this.setAnimationLoop=function(G){Re=G},this.dispose=function(){}}}const mi=new xn,P0=new gt;function L0(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Tc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,b,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),b=w.envMap,_=w.envMapRotation;b&&(m.envMap.value=b,mi.copy(_),mi.x*=-1,mi.y*=-1,mi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),m.envMapRotation.value.setFromMatrix4(P0.makeRotationFromEuler(mi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function I0(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const _=b.program;i.uniformBlockBinding(w,_)}function c(w,b){let _=s[w.id];_===void 0&&(g(w),_=h(w),s[w.id]=_,w.addEventListener("dispose",m));const D=b.program;i.updateUBOMapping(w,D);const C=e.render.frame;r[w.id]!==C&&(f(w),r[w.id]=C)}function h(w){const b=u();w.__bindingPointIndex=b;const _=n.createBuffer(),D=w.__size,C=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,D,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,_),_}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const b=s[w.id],_=w.uniforms,D=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let C=0,T=_.length;C<T;C++){const I=Array.isArray(_[C])?_[C]:[_[C]];for(let S=0,y=I.length;S<y;S++){const R=I[S];if(d(R,C,S,D)===!0){const B=R.__offset,H=Array.isArray(R.value)?R.value:[R.value];let Y=0;for(let te=0;te<H.length;te++){const W=H[te],re=v(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,B+Y,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,Y),Y+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(w,b,_,D){const C=w.value,T=b+"_"+_;if(D[T]===void 0)return typeof C=="number"||typeof C=="boolean"?D[T]=C:D[T]=C.clone(),!0;{const I=D[T];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return D[T]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function g(w){const b=w.uniforms;let _=0;const D=16;for(let T=0,I=b.length;T<I;T++){const S=Array.isArray(b[T])?b[T]:[b[T]];for(let y=0,R=S.length;y<R;y++){const B=S[y],H=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,te=H.length;Y<te;Y++){const W=H[Y],re=v(W),X=_%D,ye=X%re.boundary,we=X+ye;_+=ye,we!==0&&D-we<re.storage&&(_+=D-we),B.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=re.storage}}}const C=_%D;return C>0&&(_+=D-C),w.__size=_,w.__cache={},this}function v(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){const b=w.target;b.removeEventListener("dispose",m);const _=a.indexOf(b.__bindingPointIndex);a.splice(_,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const w in s)n.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class D0{constructor(e={}){const{canvas:t=xu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qt,this.toneMapping=ii,this.toneMappingExposure=1;const _=this;let D=!1,C=0,T=0,I=null,S=-1,y=null;const R=new Mt,B=new Mt;let H=null;const Y=new tt(0);let te=0,W=t.width,re=t.height,X=1,ye=null,we=null;const Re=new Mt(0,0,W,re),le=new Mt(0,0,W,re);let ve=!1;const G=new So;let ne=!1,de=!1;const Z=new gt,Pe=new gt,Ve=new N,Be=new Mt,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let L=!1;function k(){return I===null?X:1}let A=i;function ae(M,O){return t.getContext(M,O)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fo}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",U,!1),A===null){const O="webgl2";if(A=ae(O,M),A===null)throw ae(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let j,fe,pe,ce,Ce,E,x,V,ie,he,se,Ne,Ae,Ie,Ke,me,Ue,Fe,$e,De,Ye,Xe,ot,F;function Te(){j=new Op(A),j.init(),Xe=new b0(A,j),fe=new Ip(A,j,e,Xe),pe=new y0(A,j),fe.reverseDepthBuffer&&f&&pe.buffers.depth.setReversed(!0),ce=new Hp(A),Ce=new r0,E=new S0(A,j,pe,Ce,fe,Xe,ce),x=new Up(_),V=new kp(_),ie=new qu(A),ot=new Pp(A,ie),he=new zp(A,ie,ce,ot),se=new Vp(A,he,ie,ce),$e=new Gp(A,fe,E),me=new Dp(Ce),Ne=new s0(_,x,V,j,fe,ot,me),Ae=new L0(_,Ce),Ie=new o0,Ke=new f0(j),Fe=new Rp(_,x,V,pe,se,d,l),Ue=new _0(_,se,fe),F=new I0(A,ce,fe,pe),De=new Lp(A,j,ce),Ye=new Bp(A,j,ce),ce.programs=Ne.programs,_.capabilities=fe,_.extensions=j,_.properties=Ce,_.renderLists=Ie,_.shadowMap=Ue,_.state=pe,_.info=ce}Te();const K=new R0(_,A);this.xr=K,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const M=j.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=j.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(M){M!==void 0&&(X=M,this.setSize(W,re,!1))},this.getSize=function(M){return M.set(W,re)},this.setSize=function(M,O,$=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,re=O,t.width=Math.floor(M*X),t.height=Math.floor(O*X),$===!0&&(t.style.width=M+"px",t.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(W*X,re*X).floor()},this.setDrawingBufferSize=function(M,O,$){W=M,re=O,X=$,t.width=Math.floor(M*$),t.height=Math.floor(O*$),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(Re)},this.setViewport=function(M,O,$,q){M.isVector4?Re.set(M.x,M.y,M.z,M.w):Re.set(M,O,$,q),pe.viewport(R.copy(Re).multiplyScalar(X).round())},this.getScissor=function(M){return M.copy(le)},this.setScissor=function(M,O,$,q){M.isVector4?le.set(M.x,M.y,M.z,M.w):le.set(M,O,$,q),pe.scissor(B.copy(le).multiplyScalar(X).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(M){pe.setScissorTest(ve=M)},this.setOpaqueSort=function(M){ye=M},this.setTransparentSort=function(M){we=M},this.getClearColor=function(M){return M.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(M=!0,O=!0,$=!0){let q=0;if(M){let z=!1;if(I!==null){const xe=I.texture.format;z=xe===xo||xe===_o||xe===vo}if(z){const xe=I.texture.type,Le=xe===zn||xe===Ei||xe===Ts||xe===ss||xe===mo||xe===go,ke=Fe.getClearColor(),Oe=Fe.getClearAlpha(),qe=ke.r,Ze=ke.g,ze=ke.b;Le?(g[0]=qe,g[1]=Ze,g[2]=ze,g[3]=Oe,A.clearBufferuiv(A.COLOR,0,g)):(v[0]=qe,v[1]=Ze,v[2]=ze,v[3]=Oe,A.clearBufferiv(A.COLOR,0,v))}else q|=A.COLOR_BUFFER_BIT}O&&(q|=A.DEPTH_BUFFER_BIT),$&&(q|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",U,!1),Ie.dispose(),Ke.dispose(),Ce.dispose(),x.dispose(),V.dispose(),se.dispose(),ot.dispose(),F.dispose(),Ne.dispose(),K.dispose(),K.removeEventListener("sessionstart",dt),K.removeEventListener("sessionend",zt),St.stop()};function oe(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const M=ce.autoReset,O=Ue.enabled,$=Ue.autoUpdate,q=Ue.needsUpdate,z=Ue.type;Te(),ce.autoReset=M,Ue.enabled=O,Ue.autoUpdate=$,Ue.needsUpdate=q,Ue.type=z}function U(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Q(M){const O=M.target;O.removeEventListener("dispose",Q),_e(O)}function _e(M){Se(M),Ce.remove(M)}function Se(M){const O=Ce.get(M).programs;O!==void 0&&(O.forEach(function($){Ne.releaseProgram($)}),M.isShaderMaterial&&Ne.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,$,q,z,xe){O===null&&(O=J);const Le=z.isMesh&&z.matrixWorld.determinant()<0,ke=th(M,O,$,q,z);pe.setMaterial(q,Le);let Oe=$.index,qe=1;if(q.wireframe===!0){if(Oe=he.getWireframeAttribute($),Oe===void 0)return;qe=2}const Ze=$.drawRange,ze=$.attributes.position;let it=Ze.start*qe,ut=(Ze.start+Ze.count)*qe;xe!==null&&(it=Math.max(it,xe.start*qe),ut=Math.min(ut,(xe.start+xe.count)*qe)),Oe!==null?(it=Math.max(it,0),ut=Math.min(ut,Oe.count)):ze!=null&&(it=Math.max(it,0),ut=Math.min(ut,ze.count));const ft=ut-it;if(ft<0||ft===1/0)return;ot.setup(z,q,ke,$,Oe);let $t,st=De;if(Oe!==null&&($t=ie.get(Oe),st=Ye,st.setIndex($t)),z.isMesh)q.wireframe===!0?(pe.setLineWidth(q.wireframeLinewidth*k()),st.setMode(A.LINES)):st.setMode(A.TRIANGLES);else if(z.isLine){let He=q.linewidth;He===void 0&&(He=1),pe.setLineWidth(He*k()),z.isLineSegments?st.setMode(A.LINES):z.isLineLoop?st.setMode(A.LINE_LOOP):st.setMode(A.LINE_STRIP)}else z.isPoints?st.setMode(A.POINTS):z.isSprite&&st.setMode(A.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)st.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))st.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const He=z._multiDrawStarts,bn=z._multiDrawCounts,rt=z._multiDrawCount,en=Oe?ie.get(Oe).bytesPerElement:1,Pi=Ce.get(q).currentProgram.getUniforms();for(let Zt=0;Zt<rt;Zt++)Pi.setValue(A,"_gl_DrawID",Zt),st.render(He[Zt]/en,bn[Zt])}else if(z.isInstancedMesh)st.renderInstances(it,ft,z.count);else if($.isInstancedBufferGeometry){const He=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,bn=Math.min($.instanceCount,He);st.renderInstances(it,ft,bn)}else st.render(it,ft)};function Me(M,O,$){M.transparent===!0&&M.side===yt&&M.forceSinglePass===!1?(M.side=Yt,M.needsUpdate=!0,ks(M,O,$),M.side=li,M.needsUpdate=!0,ks(M,O,$),M.side=yt):ks(M,O,$)}this.compile=function(M,O,$=null){$===null&&($=M),p=Ke.get($),p.init(O),b.push(p),$.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),M!==$&&M.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const q=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const xe=z.material;if(xe)if(Array.isArray(xe))for(let Le=0;Le<xe.length;Le++){const ke=xe[Le];Me(ke,$,z),q.add(ke)}else Me(xe,$,z),q.add(xe)}),b.pop(),p=null,q},this.compileAsync=function(M,O,$=null){const q=this.compile(M,O,$);return new Promise(z=>{function xe(){if(q.forEach(function(Le){Ce.get(Le).currentProgram.isReady()&&q.delete(Le)}),q.size===0){z(M);return}setTimeout(xe,10)}j.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let ue=null;function be(M){ue&&ue(M)}function dt(){St.stop()}function zt(){St.start()}const St=new Pc;St.setAnimationLoop(be),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(M){ue=M,K.setAnimationLoop(M),M===null?St.stop():St.start()},K.addEventListener("sessionstart",dt),K.addEventListener("sessionend",zt),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(O),O=K.getCamera()),M.isScene===!0&&M.onBeforeRender(_,M,O,I),p=Ke.get(M,b.length),p.init(O),b.push(p),Pe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),G.setFromProjectionMatrix(Pe),de=this.localClippingEnabled,ne=me.init(this.clippingPlanes,de),m=Ie.get(M,w.length),m.init(),w.push(m),K.enabled===!0&&K.isPresenting===!0){const xe=_.xr.getDepthSensingMesh();xe!==null&&Mn(xe,O,-1/0,_.sortObjects)}Mn(M,O,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ye,we),L=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,L&&Fe.addToRenderList(m,M),this.info.render.frame++,ne===!0&&me.beginShadows();const $=p.state.shadowsArray;Ue.render($,M,O),ne===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,z=m.transmissive;if(p.setupLights(),O.isArrayCamera){const xe=O.cameras;if(z.length>0)for(let Le=0,ke=xe.length;Le<ke;Le++){const Oe=xe[Le];Sn(q,z,M,Oe)}L&&Fe.render(M);for(let Le=0,ke=xe.length;Le<ke;Le++){const Oe=xe[Le];dn(m,M,Oe,Oe.viewport)}}else z.length>0&&Sn(q,z,M,O),L&&Fe.render(M),dn(m,M,O);I!==null&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),M.isScene===!0&&M.onAfterRender(_,M,O),ot.resetDefaultState(),S=-1,y=null,b.pop(),b.length>0?(p=b[b.length-1],ne===!0&&me.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Mn(M,O,$,q){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||G.intersectsSprite(M)){q&&Be.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Pe);const Le=se.update(M),ke=M.material;ke.visible&&m.push(M,Le,ke,$,Be.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||G.intersectsObject(M))){const Le=se.update(M),ke=M.material;if(q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Be.copy(M.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Be.copy(Le.boundingSphere.center)),Be.applyMatrix4(M.matrixWorld).applyMatrix4(Pe)),Array.isArray(ke)){const Oe=Le.groups;for(let qe=0,Ze=Oe.length;qe<Ze;qe++){const ze=Oe[qe],it=ke[ze.materialIndex];it&&it.visible&&m.push(M,Le,it,$,Be.z,ze)}}else ke.visible&&m.push(M,Le,ke,$,Be.z,null)}}const xe=M.children;for(let Le=0,ke=xe.length;Le<ke;Le++)Mn(xe[Le],O,$,q)}function dn(M,O,$,q){const z=M.opaque,xe=M.transmissive,Le=M.transparent;p.setupLightsView($),ne===!0&&me.setGlobalState(_.clippingPlanes,$),q&&pe.viewport(R.copy(q)),z.length>0&&Fs(z,O,$),xe.length>0&&Fs(xe,O,$),Le.length>0&&Fs(Le,O,$),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Sn(M,O,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Bn(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?Ti:zn,minFilter:bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const xe=p.state.transmissionRenderTarget[q.id],Le=q.viewport||R;xe.setSize(Le.z,Le.w);const ke=_.getRenderTarget();_.setRenderTarget(xe),_.getClearColor(Y),te=_.getClearAlpha(),te<1&&_.setClearColor(16777215,.5),_.clear(),L&&Fe.render($);const Oe=_.toneMapping;_.toneMapping=ii;const qe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),ne===!0&&me.setGlobalState(_.clippingPlanes,q),Fs(M,$,q),E.updateMultisampleRenderTarget(xe),E.updateRenderTargetMipmap(xe),j.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let ze=0,it=O.length;ze<it;ze++){const ut=O[ze],ft=ut.object,$t=ut.geometry,st=ut.material,He=ut.group;if(st.side===yt&&ft.layers.test(q.layers)){const bn=st.side;st.side=Yt,st.needsUpdate=!0,Io(ft,$,q,$t,st,He),st.side=bn,st.needsUpdate=!0,Ze=!0}}Ze===!0&&(E.updateMultisampleRenderTarget(xe),E.updateRenderTargetMipmap(xe))}_.setRenderTarget(ke),_.setClearColor(Y,te),qe!==void 0&&(q.viewport=qe),_.toneMapping=Oe}function Fs(M,O,$){const q=O.isScene===!0?O.overrideMaterial:null;for(let z=0,xe=M.length;z<xe;z++){const Le=M[z],ke=Le.object,Oe=Le.geometry,qe=q===null?Le.material:q,Ze=Le.group;ke.layers.test($.layers)&&Io(ke,O,$,Oe,qe,Ze)}}function Io(M,O,$,q,z,xe){M.onBeforeRender(_,O,$,q,z,xe),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(_,O,$,q,M,xe),z.transparent===!0&&z.side===yt&&z.forceSinglePass===!1?(z.side=Yt,z.needsUpdate=!0,_.renderBufferDirect($,O,q,z,M,xe),z.side=li,z.needsUpdate=!0,_.renderBufferDirect($,O,q,z,M,xe),z.side=yt):_.renderBufferDirect($,O,q,z,M,xe),M.onAfterRender(_,O,$,q,z,xe)}function ks(M,O,$){O.isScene!==!0&&(O=J);const q=Ce.get(M),z=p.state.lights,xe=p.state.shadowsArray,Le=z.state.version,ke=Ne.getParameters(M,z.state,xe,O,$),Oe=Ne.getProgramCacheKey(ke);let qe=q.programs;q.environment=M.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(M.isMeshStandardMaterial?V:x).get(M.envMap||q.environment),q.envMapRotation=q.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,qe===void 0&&(M.addEventListener("dispose",Q),qe=new Map,q.programs=qe);let Ze=qe.get(Oe);if(Ze!==void 0){if(q.currentProgram===Ze&&q.lightsStateVersion===Le)return Uo(M,ke),Ze}else ke.uniforms=Ne.getUniforms(M),M.onBeforeCompile(ke,_),Ze=Ne.acquireProgram(ke,Oe),qe.set(Oe,Ze),q.uniforms=ke.uniforms;const ze=q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ze.clippingPlanes=me.uniform),Uo(M,ke),q.needsLights=ih(M),q.lightsStateVersion=Le,q.needsLights&&(ze.ambientLightColor.value=z.state.ambient,ze.lightProbe.value=z.state.probe,ze.directionalLights.value=z.state.directional,ze.directionalLightShadows.value=z.state.directionalShadow,ze.spotLights.value=z.state.spot,ze.spotLightShadows.value=z.state.spotShadow,ze.rectAreaLights.value=z.state.rectArea,ze.ltc_1.value=z.state.rectAreaLTC1,ze.ltc_2.value=z.state.rectAreaLTC2,ze.pointLights.value=z.state.point,ze.pointLightShadows.value=z.state.pointShadow,ze.hemisphereLights.value=z.state.hemi,ze.directionalShadowMap.value=z.state.directionalShadowMap,ze.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ze.spotShadowMap.value=z.state.spotShadowMap,ze.spotLightMatrix.value=z.state.spotLightMatrix,ze.spotLightMap.value=z.state.spotLightMap,ze.pointShadowMap.value=z.state.pointShadowMap,ze.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Ze,q.uniformsList=null,Ze}function Do(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=gr.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function Uo(M,O){const $=Ce.get(M);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function th(M,O,$,q,z){O.isScene!==!0&&(O=J),E.resetTextureUnits();const xe=O.fog,Le=q.isMeshStandardMaterial?O.environment:null,ke=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:os,Oe=(q.isMeshStandardMaterial?V:x).get(q.envMap||Le),qe=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ze=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),ze=!!$.morphAttributes.position,it=!!$.morphAttributes.normal,ut=!!$.morphAttributes.color;let ft=ii;q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ft=_.toneMapping);const $t=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,st=$t!==void 0?$t.length:0,He=Ce.get(q),bn=p.state.lights;if(ne===!0&&(de===!0||M!==y)){const Kt=M===y&&q.id===S;me.setState(q,M,Kt)}let rt=!1;q.version===He.__version?(He.needsLights&&He.lightsStateVersion!==bn.state.version||He.outputColorSpace!==ke||z.isBatchedMesh&&He.batching===!1||!z.isBatchedMesh&&He.batching===!0||z.isBatchedMesh&&He.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&He.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&He.instancing===!1||!z.isInstancedMesh&&He.instancing===!0||z.isSkinnedMesh&&He.skinning===!1||!z.isSkinnedMesh&&He.skinning===!0||z.isInstancedMesh&&He.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&He.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&He.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&He.instancingMorph===!1&&z.morphTexture!==null||He.envMap!==Oe||q.fog===!0&&He.fog!==xe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==me.numPlanes||He.numIntersection!==me.numIntersection)||He.vertexAlphas!==qe||He.vertexTangents!==Ze||He.morphTargets!==ze||He.morphNormals!==it||He.morphColors!==ut||He.toneMapping!==ft||He.morphTargetsCount!==st)&&(rt=!0):(rt=!0,He.__version=q.version);let en=He.currentProgram;rt===!0&&(en=ks(q,O,z));let Pi=!1,Zt=!1,us=!1;const pt=en.getUniforms(),fn=He.uniforms;if(pe.useProgram(en.program)&&(Pi=!0,Zt=!0,us=!0),q.id!==S&&(S=q.id,Zt=!0),Pi||y!==M){pe.buffers.depth.getReversed()?(Z.copy(M.projectionMatrix),Mu(Z),Su(Z),pt.setValue(A,"projectionMatrix",Z)):pt.setValue(A,"projectionMatrix",M.projectionMatrix),pt.setValue(A,"viewMatrix",M.matrixWorldInverse);const $n=pt.map.cameraPosition;$n!==void 0&&$n.setValue(A,Ve.setFromMatrixPosition(M.matrixWorld)),fe.logarithmicDepthBuffer&&pt.setValue(A,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&pt.setValue(A,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,Zt=!0,us=!0)}if(z.isSkinnedMesh){pt.setOptional(A,z,"bindMatrix"),pt.setOptional(A,z,"bindMatrixInverse");const Kt=z.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),pt.setValue(A,"boneTexture",Kt.boneTexture,E))}z.isBatchedMesh&&(pt.setOptional(A,z,"batchingTexture"),pt.setValue(A,"batchingTexture",z._matricesTexture,E),pt.setOptional(A,z,"batchingIdTexture"),pt.setValue(A,"batchingIdTexture",z._indirectTexture,E),pt.setOptional(A,z,"batchingColorTexture"),z._colorsTexture!==null&&pt.setValue(A,"batchingColorTexture",z._colorsTexture,E));const ds=$.morphAttributes;if((ds.position!==void 0||ds.normal!==void 0||ds.color!==void 0)&&$e.update(z,$,en),(Zt||He.receiveShadow!==z.receiveShadow)&&(He.receiveShadow=z.receiveShadow,pt.setValue(A,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(fn.envMap.value=Oe,fn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(fn.envMapIntensity.value=O.environmentIntensity),Zt&&(pt.setValue(A,"toneMappingExposure",_.toneMappingExposure),He.needsLights&&nh(fn,us),xe&&q.fog===!0&&Ae.refreshFogUniforms(fn,xe),Ae.refreshMaterialUniforms(fn,q,X,re,p.state.transmissionRenderTarget[M.id]),gr.upload(A,Do(He),fn,E)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(gr.upload(A,Do(He),fn,E),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&pt.setValue(A,"center",z.center),pt.setValue(A,"modelViewMatrix",z.modelViewMatrix),pt.setValue(A,"normalMatrix",z.normalMatrix),pt.setValue(A,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Kt=q.uniformsGroups;for(let $n=0,Xn=Kt.length;$n<Xn;$n++){const No=Kt[$n];F.update(No,en),F.bind(No,en)}}return en}function nh(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function ih(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,O,$){Ce.get(M.texture).__webglTexture=O,Ce.get(M.depthTexture).__webglTexture=$;const q=Ce.get(M);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=$===void 0,q.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,O){const $=Ce.get(M);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,$=0){I=M,C=O,T=$;let q=!0,z=null,xe=!1,Le=!1;if(M){const Oe=Ce.get(M);if(Oe.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(A.FRAMEBUFFER,null),q=!1;else if(Oe.__webglFramebuffer===void 0)E.setupRenderTarget(M);else if(Oe.__hasExternalTextures)E.rebindTextures(M,Ce.get(M.texture).__webglTexture,Ce.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const ze=M.depthTexture;if(Oe.__boundDepthTexture!==ze){if(ze!==null&&Ce.has(ze)&&(M.width!==ze.image.width||M.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(M)}}const qe=M.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Le=!0);const Ze=Ce.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ze[O])?z=Ze[O][$]:z=Ze[O],xe=!0):M.samples>0&&E.useMultisampledRTT(M)===!1?z=Ce.get(M).__webglMultisampledFramebuffer:Array.isArray(Ze)?z=Ze[$]:z=Ze,R.copy(M.viewport),B.copy(M.scissor),H=M.scissorTest}else R.copy(Re).multiplyScalar(X).floor(),B.copy(le).multiplyScalar(X).floor(),H=ve;if(pe.bindFramebuffer(A.FRAMEBUFFER,z)&&q&&pe.drawBuffers(M,z),pe.viewport(R),pe.scissor(B),pe.setScissorTest(H),xe){const Oe=Ce.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+O,Oe.__webglTexture,$)}else if(Le){const Oe=Ce.get(M.texture),qe=O||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Oe.__webglTexture,$||0,qe)}S=-1},this.readRenderTargetPixels=function(M,O,$,q,z,xe,Le){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Ce.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Le!==void 0&&(ke=ke[Le]),ke){pe.bindFramebuffer(A.FRAMEBUFFER,ke);try{const Oe=M.texture,qe=Oe.format,Ze=Oe.type;if(!fe.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-q&&$>=0&&$<=M.height-z&&A.readPixels(O,$,q,z,Xe.convert(qe),Xe.convert(Ze),xe)}finally{const Oe=I!==null?Ce.get(I).__webglFramebuffer:null;pe.bindFramebuffer(A.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(M,O,$,q,z,xe,Le){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=Ce.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Le!==void 0&&(ke=ke[Le]),ke){const Oe=M.texture,qe=Oe.format,Ze=Oe.type;if(!fe.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=M.width-q&&$>=0&&$<=M.height-z){pe.bindFramebuffer(A.FRAMEBUFFER,ke);const ze=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,ze),A.bufferData(A.PIXEL_PACK_BUFFER,xe.byteLength,A.STREAM_READ),A.readPixels(O,$,q,z,Xe.convert(qe),Xe.convert(Ze),0);const it=I!==null?Ce.get(I).__webglFramebuffer:null;pe.bindFramebuffer(A.FRAMEBUFFER,it);const ut=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await yu(A,ut,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,ze),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,xe),A.deleteBuffer(ze),A.deleteSync(ut),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,O=null,$=0){M.isTexture!==!0&&(xs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,M=arguments[1]);const q=Math.pow(2,-$),z=Math.floor(M.image.width*q),xe=Math.floor(M.image.height*q),Le=O!==null?O.x:0,ke=O!==null?O.y:0;E.setTexture2D(M,0),A.copyTexSubImage2D(A.TEXTURE_2D,$,0,0,Le,ke,z,xe),pe.unbindTexture()},this.copyTextureToTexture=function(M,O,$=null,q=null,z=0){M.isTexture!==!0&&(xs("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,M=arguments[1],O=arguments[2],z=arguments[3]||0,$=null);let xe,Le,ke,Oe,qe,Ze,ze,it,ut;const ft=M.isCompressedTexture?M.mipmaps[z]:M.image;$!==null?(xe=$.max.x-$.min.x,Le=$.max.y-$.min.y,ke=$.isBox3?$.max.z-$.min.z:1,Oe=$.min.x,qe=$.min.y,Ze=$.isBox3?$.min.z:0):(xe=ft.width,Le=ft.height,ke=ft.depth||1,Oe=0,qe=0,Ze=0),q!==null?(ze=q.x,it=q.y,ut=q.z):(ze=0,it=0,ut=0);const $t=Xe.convert(O.format),st=Xe.convert(O.type);let He;O.isData3DTexture?(E.setTexture3D(O,0),He=A.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(E.setTexture2DArray(O,0),He=A.TEXTURE_2D_ARRAY):(E.setTexture2D(O,0),He=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,O.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,O.unpackAlignment);const bn=A.getParameter(A.UNPACK_ROW_LENGTH),rt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),en=A.getParameter(A.UNPACK_SKIP_PIXELS),Pi=A.getParameter(A.UNPACK_SKIP_ROWS),Zt=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ft.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ft.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Oe),A.pixelStorei(A.UNPACK_SKIP_ROWS,qe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ze);const us=M.isDataArrayTexture||M.isData3DTexture,pt=O.isDataArrayTexture||O.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const fn=Ce.get(M),ds=Ce.get(O),Kt=Ce.get(fn.__renderTarget),$n=Ce.get(ds.__renderTarget);pe.bindFramebuffer(A.READ_FRAMEBUFFER,Kt.__webglFramebuffer),pe.bindFramebuffer(A.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let Xn=0;Xn<ke;Xn++)us&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ce.get(M).__webglTexture,z,Ze+Xn),M.isDepthTexture?(pt&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ce.get(O).__webglTexture,z,ut+Xn),A.blitFramebuffer(Oe,qe,xe,Le,ze,it,xe,Le,A.DEPTH_BUFFER_BIT,A.NEAREST)):pt?A.copyTexSubImage3D(He,z,ze,it,ut+Xn,Oe,qe,xe,Le):A.copyTexSubImage2D(He,z,ze,it,ut+Xn,Oe,qe,xe,Le);pe.bindFramebuffer(A.READ_FRAMEBUFFER,null),pe.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else pt?M.isDataTexture||M.isData3DTexture?A.texSubImage3D(He,z,ze,it,ut,xe,Le,ke,$t,st,ft.data):O.isCompressedArrayTexture?A.compressedTexSubImage3D(He,z,ze,it,ut,xe,Le,ke,$t,ft.data):A.texSubImage3D(He,z,ze,it,ut,xe,Le,ke,$t,st,ft):M.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,z,ze,it,xe,Le,$t,st,ft.data):M.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,z,ze,it,ft.width,ft.height,$t,ft.data):A.texSubImage2D(A.TEXTURE_2D,z,ze,it,xe,Le,$t,st,ft);A.pixelStorei(A.UNPACK_ROW_LENGTH,bn),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,rt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,en),A.pixelStorei(A.UNPACK_SKIP_ROWS,Pi),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Zt),z===0&&O.generateMipmaps&&A.generateMipmap(He),pe.unbindTexture()},this.copyTextureToTexture3D=function(M,O,$=null,q=null,z=0){return M.isTexture!==!0&&(xs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,q=arguments[1]||null,M=arguments[2],O=arguments[3],z=arguments[4]||0),xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,O,$,q,z)},this.initRenderTarget=function(M){Ce.get(M).__webglFramebuffer===void 0&&E.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),pe.unbindTexture()},this.resetState=function(){C=0,T=0,I=null,pe.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}class Fc extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class kc extends kt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=It,h=It,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class U0 extends kt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const h=i[s],f=i[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ge:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new N,s=[],r=[],a=[],o=new N,l=new gt;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new N)}r[0]=new N,a[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Rt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Rt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class wo extends yn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ge){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class N0 extends wo{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ao(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const rr=new N,ha=new Ao,ua=new Ao,da=new Ao;class F0 extends yn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new N){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(rr.subVectors(s[0],s[1]).add(s[0]),c=rr);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(rr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=rr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ha.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,m),ua.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,m),da.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(ha.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ua.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),da.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(ha.calc(l),ua.calc(l),da.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function kl(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function k0(n,e){const t=1-n;return t*t*e}function O0(n,e){return 2*(1-n)*n*e}function z0(n,e){return n*n*e}function ws(n,e,t,i){return k0(n,e)+O0(n,t)+z0(n,i)}function B0(n,e){const t=1-n;return t*t*t*e}function H0(n,e){const t=1-n;return 3*t*t*n*e}function G0(n,e){return 3*(1-n)*n*n*e}function V0(n,e){return n*n*n*e}function As(n,e,t,i,s){return B0(n,e)+H0(n,t)+G0(n,i)+V0(n,s)}class Oc extends yn{constructor(e=new ge,t=new ge,i=new ge,s=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ge){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(As(e,s.x,r.x,a.x,o.x),As(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class W0 extends yn{constructor(e=new N,t=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new N){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(As(e,s.x,r.x,a.x,o.x),As(e,s.y,r.y,a.y,o.y),As(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zc extends yn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $0 extends yn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bc extends yn{constructor(e=new ge,t=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ge){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(ws(e,s.x,r.x,a.x),ws(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class X0 extends yn{constructor(e=new N,t=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new N){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(ws(e,s.x,r.x,a.x),ws(e,s.y,r.y,a.y),ws(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hc extends yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(kl(o,l.x,c.x,h.x,u.x),kl(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ge().fromArray(s))}return this}}var oo=Object.freeze({__proto__:null,ArcCurve:N0,CatmullRomCurve3:F0,CubicBezierCurve:Oc,CubicBezierCurve3:W0,EllipseCurve:wo,LineCurve:zc,LineCurve3:$0,QuadraticBezierCurve:Bc,QuadraticBezierCurve3:X0,SplineCurve:Hc});class q0 extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new oo[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new oo[s.type]().fromJSON(s))}return this}}class lo extends q0{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new zc(this.currentPoint.clone(),new ge(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Bc(this.currentPoint.clone(),new ge(e,t),new ge(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){const o=new Oc(this.currentPoint.clone(),new ge(e,t),new ge(i,s),new ge(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Hc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){const c=new wo(e,t,i,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Eo extends Ot{constructor(e=[new ge(0,-.5),new ge(.5,0),new ge(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Rt(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,u=new N,f=new ge,d=new N,g=new N,v=new N;let m=0,p=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:m=e[w+1].x-e[w].x,p=e[w+1].y-e[w].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[w+1].x-e[w].x,p=e[w+1].y-e[w].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(g)}for(let w=0;w<=t;w++){const b=i+w*h*s,_=Math.sin(b),D=Math.cos(b);for(let C=0;C<=e.length-1;C++){u.x=e[C].x*_,u.y=e[C].y,u.z=e[C].x*D,a.push(u.x,u.y,u.z),f.x=w/t,f.y=C/(e.length-1),o.push(f.x,f.y);const T=l[3*C+0]*_,I=l[3*C+1],S=l[3*C+0]*D;c.push(T,I,S)}}for(let w=0;w<t;w++)for(let b=0;b<e.length-1;b++){const _=b+w*e.length,D=_,C=_+e.length,T=_+e.length+1,I=_+1;r.push(D,C,I),r.push(T,I,C)}this.setIndex(r),this.setAttribute("position",new at(a,3)),this.setAttribute("uv",new at(o,2)),this.setAttribute("normal",new at(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.points,e.segments,e.phiStart,e.phiLength)}}class Pr extends Ot{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new N,h=new ge;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=i+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(o,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Hn extends Ot{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const v=[],m=i/2;let p=0;w(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(f,3)),this.setAttribute("uv",new at(d,2));function w(){const _=new N,D=new N;let C=0;const T=(t-e)/i;for(let I=0;I<=r;I++){const S=[],y=I/r,R=y*(t-e)+e;for(let B=0;B<=s;B++){const H=B/s,Y=H*l+o,te=Math.sin(Y),W=Math.cos(Y);D.x=R*te,D.y=-y*i+m,D.z=R*W,u.push(D.x,D.y,D.z),_.set(te,T,W).normalize(),f.push(_.x,_.y,_.z),d.push(H,1-y),S.push(g++)}v.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){const y=v[S][I],R=v[S+1][I],B=v[S+1][I+1],H=v[S][I+1];(e>0||S!==0)&&(h.push(y,R,H),C+=3),(t>0||S!==r-1)&&(h.push(R,B,H),C+=3)}c.addGroup(p,C,0),p+=C}function b(_){const D=g,C=new ge,T=new N;let I=0;const S=_===!0?e:t,y=_===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const R=g;for(let B=0;B<=s;B++){const Y=B/s*l+o,te=Math.cos(Y),W=Math.sin(Y);T.x=S*W,T.y=m*y,T.z=S*te,u.push(T.x,T.y,T.z),f.push(0,y,0),C.x=te*.5+.5,C.y=W*.5*y+.5,d.push(C.x,C.y),g++}for(let B=0;B<s;B++){const H=D+B,Y=R+B;_===!0?h.push(Y,Y+1,H):h.push(Y+1,Y,H),I+=3}c.addGroup(p,I,_===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hs extends Hn{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new hs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ns extends lo{constructor(e){super(e),this.uuid=Ri(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new lo().fromJSON(s))}return this}}const Y0={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Gc(n,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,d;if(i&&(r=Q0(n,e,r,t)),n.length>80*t){o=c=n[0],l=h=n[1];for(let g=t;g<s;g+=t)u=n[g],f=n[g+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Ps(r,a,t,o,l,d,0),a}};function Gc(n,e,t,i,s){let r,a;if(s===hg(n,e,t,i)>0)for(r=e;r<t;r+=i)a=Ol(r,n[r],n[r+1],a);else for(r=t-i;r>=e;r-=i)a=Ol(r,n[r],n[r+1],a);return a&&Lr(a,a.next)&&(Is(a),a=a.next),a}function Ci(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Lr(t,t.next)||_t(t.prev,t,t.next)===0)){if(Is(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ps(n,e,t,i,s,r,a){if(!n)return;!a&&r&&sg(n,i,s,r);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?J0(n,i,s,r):Z0(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Is(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=j0(Ci(n),e,t),Ps(n,e,t,i,s,r,2)):a===2&&K0(n,e,t,i,s,r):Ps(Ci(n),e,t,i,s,r,1);break}}}function Z0(n){const e=n.prev,t=n,i=n.next;if(_t(e,t,i)>=0)return!1;const s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Ji(s,o,r,l,a,c,g.x,g.y)&&_t(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function J0(n,e,t,i){const s=n.prev,r=n,a=n.next;if(_t(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,v=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=co(d,g,e,t,i),w=co(v,m,e,t,i);let b=n.prevZ,_=n.nextZ;for(;b&&b.z>=p&&_&&_.z<=w;){if(b.x>=d&&b.x<=v&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Ji(o,h,l,u,c,f,b.x,b.y)&&_t(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Ji(o,h,l,u,c,f,_.x,_.y)&&_t(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=p;){if(b.x>=d&&b.x<=v&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Ji(o,h,l,u,c,f,b.x,b.y)&&_t(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=w;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Ji(o,h,l,u,c,f,_.x,_.y)&&_t(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function j0(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!Lr(s,r)&&Vc(s,i,i.next,r)&&Ls(s,r)&&Ls(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Is(i),Is(i.next),i=n=r),i=i.next}while(i!==n);return Ci(i)}function K0(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&og(a,o)){let l=Wc(a,o);a=Ci(a,a.next),l=Ci(l,l.next),Ps(a,e,t,i,s,r,0),Ps(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Q0(n,e,t,i){const s=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=Gc(n,o,l,i,!1),c===c.next&&(c.steiner=!0),s.push(ag(c));for(s.sort(eg),r=0;r<s.length;r++)t=tg(s[r],t);return t}function eg(n,e){return n.x-e.x}function tg(n,e){const t=ng(n,e);if(!t)return e;const i=Wc(t,n);return Ci(i,i.next),Ci(t,t.next)}function ng(n,e){let t=e,i=-1/0,s;const r=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ji(a<c?r:i,a,l,c,a<c?i:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Ls(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&ig(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function ig(n,e){return _t(n.prev,n,e.prev)<0&&_t(e.next,n,n.next)<0}function sg(n,e,t,i){let s=n;do s.z===0&&(s.z=co(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,rg(s)}function rg(n){let e,t,i,s,r,a,o,l,c=1;do{for(t=n,n=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(a>1);return n}function co(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function ag(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ji(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function og(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!lg(n,e)&&(Ls(n,e)&&Ls(e,n)&&cg(n,e)&&(_t(n.prev,n,e.prev)||_t(n,e.prev,e))||Lr(n,e)&&_t(n.prev,n,n.next)>0&&_t(e.prev,e,e.next)>0)}function _t(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Lr(n,e){return n.x===e.x&&n.y===e.y}function Vc(n,e,t,i){const s=or(_t(n,e,t)),r=or(_t(n,e,i)),a=or(_t(t,i,n)),o=or(_t(t,i,e));return!!(s!==r&&a!==o||s===0&&ar(n,t,e)||r===0&&ar(n,i,e)||a===0&&ar(t,n,i)||o===0&&ar(t,e,i))}function ar(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function or(n){return n>0?1:n<0?-1:0}function lg(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Vc(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ls(n,e){return _t(n.prev,n,n.next)<0?_t(n,e,n.next)>=0&&_t(n,n.prev,e)>=0:_t(n,e,n.prev)<0||_t(n,n.next,e)<0}function cg(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Wc(n,e){const t=new ho(n.i,n.x,n.y),i=new ho(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Ol(n,e,t,i){const s=new ho(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Is(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ho(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function hg(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class ri{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return ri.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];zl(e),Bl(i,e);let a=e.length;t.forEach(zl);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Bl(i,t[l]);const o=Y0.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function zl(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Bl(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class To extends Ot{constructor(e=new Ns([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new at(s,3)),this.setAttribute("uv",new at(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:ug;let b,_=!1,D,C,T,I;p&&(b=p.getSpacedPoints(h),_=!0,f=!1,D=p.computeFrenetFrames(h,!1),C=new N,T=new N,I=new N),f||(m=0,d=0,g=0,v=0);const S=o.extractPoints(c);let y=S.shape;const R=S.holes;if(!ri.isClockWise(y)){y=y.reverse();for(let L=0,k=R.length;L<k;L++){const A=R[L];ri.isClockWise(A)&&(R[L]=A.reverse())}}const H=ri.triangulateShape(y,R),Y=y;for(let L=0,k=R.length;L<k;L++){const A=R[L];y=y.concat(A)}function te(L,k,A){return k||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(k,A)}const W=y.length,re=H.length;function X(L,k,A){let ae,j,fe;const pe=L.x-k.x,ce=L.y-k.y,Ce=A.x-L.x,E=A.y-L.y,x=pe*pe+ce*ce,V=pe*E-ce*Ce;if(Math.abs(V)>Number.EPSILON){const ie=Math.sqrt(x),he=Math.sqrt(Ce*Ce+E*E),se=k.x-ce/ie,Ne=k.y+pe/ie,Ae=A.x-E/he,Ie=A.y+Ce/he,Ke=((Ae-se)*E-(Ie-Ne)*Ce)/(pe*E-ce*Ce);ae=se+pe*Ke-L.x,j=Ne+ce*Ke-L.y;const me=ae*ae+j*j;if(me<=2)return new ge(ae,j);fe=Math.sqrt(me/2)}else{let ie=!1;pe>Number.EPSILON?Ce>Number.EPSILON&&(ie=!0):pe<-Number.EPSILON?Ce<-Number.EPSILON&&(ie=!0):Math.sign(ce)===Math.sign(E)&&(ie=!0),ie?(ae=-ce,j=pe,fe=Math.sqrt(x)):(ae=pe,j=ce,fe=Math.sqrt(x/2))}return new ge(ae/fe,j/fe)}const ye=[];for(let L=0,k=Y.length,A=k-1,ae=L+1;L<k;L++,A++,ae++)A===k&&(A=0),ae===k&&(ae=0),ye[L]=X(Y[L],Y[A],Y[ae]);const we=[];let Re,le=ye.concat();for(let L=0,k=R.length;L<k;L++){const A=R[L];Re=[];for(let ae=0,j=A.length,fe=j-1,pe=ae+1;ae<j;ae++,fe++,pe++)fe===j&&(fe=0),pe===j&&(pe=0),Re[ae]=X(A[ae],A[fe],A[pe]);we.push(Re),le=le.concat(Re)}for(let L=0;L<m;L++){const k=L/m,A=d*Math.cos(k*Math.PI/2),ae=g*Math.sin(k*Math.PI/2)+v;for(let j=0,fe=Y.length;j<fe;j++){const pe=te(Y[j],ye[j],ae);Z(pe.x,pe.y,-A)}for(let j=0,fe=R.length;j<fe;j++){const pe=R[j];Re=we[j];for(let ce=0,Ce=pe.length;ce<Ce;ce++){const E=te(pe[ce],Re[ce],ae);Z(E.x,E.y,-A)}}}const ve=g+v;for(let L=0;L<W;L++){const k=f?te(y[L],le[L],ve):y[L];_?(T.copy(D.normals[0]).multiplyScalar(k.x),C.copy(D.binormals[0]).multiplyScalar(k.y),I.copy(b[0]).add(T).add(C),Z(I.x,I.y,I.z)):Z(k.x,k.y,0)}for(let L=1;L<=h;L++)for(let k=0;k<W;k++){const A=f?te(y[k],le[k],ve):y[k];_?(T.copy(D.normals[L]).multiplyScalar(A.x),C.copy(D.binormals[L]).multiplyScalar(A.y),I.copy(b[L]).add(T).add(C),Z(I.x,I.y,I.z)):Z(A.x,A.y,u/h*L)}for(let L=m-1;L>=0;L--){const k=L/m,A=d*Math.cos(k*Math.PI/2),ae=g*Math.sin(k*Math.PI/2)+v;for(let j=0,fe=Y.length;j<fe;j++){const pe=te(Y[j],ye[j],ae);Z(pe.x,pe.y,u+A)}for(let j=0,fe=R.length;j<fe;j++){const pe=R[j];Re=we[j];for(let ce=0,Ce=pe.length;ce<Ce;ce++){const E=te(pe[ce],Re[ce],ae);_?Z(E.x,E.y+b[h-1].y,b[h-1].x+A):Z(E.x,E.y,u+A)}}}G(),ne();function G(){const L=s.length/3;if(f){let k=0,A=W*k;for(let ae=0;ae<re;ae++){const j=H[ae];Pe(j[2]+A,j[1]+A,j[0]+A)}k=h+m*2,A=W*k;for(let ae=0;ae<re;ae++){const j=H[ae];Pe(j[0]+A,j[1]+A,j[2]+A)}}else{for(let k=0;k<re;k++){const A=H[k];Pe(A[2],A[1],A[0])}for(let k=0;k<re;k++){const A=H[k];Pe(A[0]+W*h,A[1]+W*h,A[2]+W*h)}}i.addGroup(L,s.length/3-L,0)}function ne(){const L=s.length/3;let k=0;de(Y,k),k+=Y.length;for(let A=0,ae=R.length;A<ae;A++){const j=R[A];de(j,k),k+=j.length}i.addGroup(L,s.length/3-L,1)}function de(L,k){let A=L.length;for(;--A>=0;){const ae=A;let j=A-1;j<0&&(j=L.length-1);for(let fe=0,pe=h+m*2;fe<pe;fe++){const ce=W*fe,Ce=W*(fe+1),E=k+ae+ce,x=k+j+ce,V=k+j+Ce,ie=k+ae+Ce;Ve(E,x,V,ie)}}}function Z(L,k,A){l.push(L),l.push(k),l.push(A)}function Pe(L,k,A){Be(L),Be(k),Be(A);const ae=s.length/3,j=w.generateTopUV(i,s,ae-3,ae-2,ae-1);J(j[0]),J(j[1]),J(j[2])}function Ve(L,k,A,ae){Be(L),Be(k),Be(ae),Be(k),Be(A),Be(ae);const j=s.length/3,fe=w.generateSideWallUV(i,s,j-6,j-3,j-2,j-1);J(fe[0]),J(fe[1]),J(fe[3]),J(fe[1]),J(fe[2]),J(fe[3])}function Be(L){s.push(l[L*3+0]),s.push(l[L*3+1]),s.push(l[L*3+2])}function J(L){r.push(L.x),r.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return dg(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];i.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new oo[s.type]().fromJSON(s)),new To(i,e.options)}}const ug={generateTopUV:function(n,e,t,i,s){const r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ge(r,a),new ge(o,l),new ge(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ge(a,1-l),new ge(c,1-u),new ge(f,1-g),new ge(v,1-p)]:[new ge(o,1-l),new ge(h,1-u),new ge(d,1-g),new ge(m,1-p)]}};function dg(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ir extends Ot{constructor(e=new Ns([new ge(0,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new at(s,3)),this.setAttribute("normal",new at(r,3)),this.setAttribute("uv",new at(a,2));function c(h){const u=s.length/3,f=h.extractPoints(t);let d=f.shape;const g=f.holes;ri.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const w=g[m];ri.isClockWise(w)===!0&&(g[m]=w.reverse())}const v=ri.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const w=g[m];d=d.concat(w)}for(let m=0,p=d.length;m<p;m++){const w=d[m];s.push(w.x,w.y,0),r.push(0,0,1),a.push(w.x,w.y)}for(let m=0,p=v.length;m<p;m++){const w=v[m],b=w[0]+u,_=w[1]+u,D=w[2]+u;i.push(b,_,D),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return fg(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];i.push(a)}return new Ir(i,e.curveSegments)}}function fg(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class Gn extends Ot{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new N,f=new N,d=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const w=[],b=p/i;let _=0;p===0&&a===0?_=.5/t:p===i&&l===Math.PI&&(_=-.5/t);for(let D=0;D<=t;D++){const C=D/t;u.x=-e*Math.cos(s+C*r)*Math.sin(a+b*o),u.y=e*Math.cos(a+b*o),u.z=e*Math.sin(s+C*r)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(C+_,1-b),w.push(c++)}h.push(w)}for(let p=0;p<i;p++)for(let w=0;w<t;w++){const b=h[p][w+1],_=h[p][w],D=h[p+1][w],C=h[p+1][w+1];(p!==0||a>0)&&d.push(b,_,C),(p!==i-1||l<Math.PI)&&d.push(_,D,C)}this.setIndex(d),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(v,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Co extends Ot{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new N,u=new N,f=new N;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const v=g/s*r,m=d/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const v=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,w=(s+1)*d+g;a.push(v,m,w),a.push(m,p,w)}this.setIndex(a),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class pg extends Us{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new tt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_c,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class $c extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class mg extends $c{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const fa=new gt,Hl=new N,Gl=new N;class gg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new So,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Hl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hl),Gl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gl),t.updateMatrixWorld(),fa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vg extends gg{constructor(){super(new Rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _g extends $c{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new vg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fo);const Xc="#5b3520",xt={grass:"#9dd190",grassLight:"#a9d99b",grassDark:"#93c886",grassTick:"#78b66f",grassEdge:"#5f9a5a",sand:"#ecd7a6",sandEdge:"#d6ba84",water:"#78c4dc",waterDeep:"#61b4d2",waterInk:"#3d86a6",foam:"#f3f6ea",trunk:"#e2a574",leaf:"#83c47b",leafLight:"#b4de94"};function mt(n){let e=(Math.imul(n|0,2654435761)^2654435769)>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>>17,e^=e<<5,e>>>=0,e/4294967296)}function Wn(n,e){const t=document.createElement("canvas");return t.width=Math.round(n),t.height=Math.round(e),[t,t.getContext("2d")]}function xg(n,e,{amp:t=1.5,step:i=5,closed:s=!1}={}){const r=[],a=n.length,o=s?a:a-1,l=e()*6.28,c=e()*6.28;let h=0;for(let u=0;u<o;u++){const[f,d]=n[u],[g,v]=n[(u+1)%a],m=Math.hypot(g-f,v-d)||1,p=-(v-d)/m,w=(g-f)/m,b=Math.max(1,Math.ceil(m/i));for(let _=0;_<b;_++){const D=_/b,C=t*(Math.sin(h*.045+l)*.65+Math.sin(h*.17+c)*.35);r.push([f+(g-f)*D+p*C,d+(v-d)*D+w*C]),h+=m/b}}return s||r.push(n[a-1].slice()),r}function ct(n,e,t,{w:i=3,color:s=Xc,closed:r=!1,amp:a=1.3}={}){const o=xg(e,t,{amp:a,closed:r});r&&o.push(o[0]);const l=t()*6.28,c=.12+t()*.14;n.strokeStyle=s,n.lineCap="round",n.lineJoin="round";for(let h=0;h<o.length-1;h++)n.lineWidth=i*(.7+.55*(.5+.5*Math.sin(h*c+l))),n.beginPath(),n.moveTo(o[h][0],o[h][1]),n.lineTo(o[h+1][0],o[h+1][1]),n.stroke()}function qc(n,e){n.beginPath(),n.moveTo(e[0][0],e[0][1]);for(const t of e)n.lineTo(t[0],t[1]);n.closePath()}function Vt(n,e,t){n.fillStyle=t,qc(n,e),n.fill()}function pa(n,e,t){n.save(),qc(n,e),n.clip(),t(),n.restore()}function mn(n,e,t,i,s,{n:r=40,lump:a=.08}={}){const o=2+Math.floor(s()*3),l=s()*6.28,c=5+Math.floor(s()*3),h=s()*6.28,u=[];for(let f=0;f<r;f++){const d=f/r*Math.PI*2,g=1+a*(Math.sin(d*o+l)*.6+Math.sin(d*c+h)*.4);u.push([n+Math.cos(d)*t*g,e+Math.sin(d)*i*g])}return u}function yg(n,e=10){const t=[];for(let i=0;i<n.length-1;i++){const s=n[Math.max(0,i-1)],r=n[i],a=n[i+1],o=n[Math.min(n.length-1,i+2)];for(let l=0;l<e;l++){const c=l/e,h=c*c,u=h*c,f=d=>.5*(2*r[d]+(-s[d]+a[d])*c+(2*s[d]-5*r[d]+4*a[d]-o[d])*h+(-s[d]+3*r[d]-3*a[d]+o[d])*u);t.push([f(0),f(1)])}}return t.push(n[n.length-1].slice()),t}function Mg(){const[n,e]=Wn(128,64),t=e.createRadialGradient(64,32,4,64,32,62);return t.addColorStop(0,"rgba(50,95,55,.42)"),t.addColorStop(.7,"rgba(50,95,55,.3)"),t.addColorStop(1,"rgba(50,95,55,0)"),e.setTransform(1,0,0,.5,0,16),e.fillStyle=t,e.beginPath(),e.arc(64,32,62,0,Math.PI*2),e.fill(),n}function Sg(n,e="#ffd24a"){const[t,i]=Wn(80,80),s=mt(20+n),r=[];for(let a=0;a<10;a++){const o=-Math.PI/2+a*Math.PI/5,l=a%2?14:32;r.push([40+Math.cos(o)*l,42+Math.sin(o)*l])}return Vt(i,r,e),ct(i,r,s,{w:3.4,closed:!0,amp:.6}),t}const bg=(n,e,t)=>{let i=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){const[a,o]=t[s],[l,c]=t[r];o>e!=c>e&&n<(l-a)*(e-o)/(c-o)+a&&(i=!i)}return i};function wg({W:n,H:e,ppu:t,outline:i,grassPts:s,regions:r,trail:a,pond:o,camp:l}){const[c,h]=Wn(n*t,e*t),u=mt(11),f=mt(12),d=(le,ve)=>[(le+n/2)*t,(ve+e/2)*t],g=()=>[-n/2+u()*n,-e/2+u()*e],[v,m,p,,w]=r;h.fillStyle=xt.sand,h.fillRect(0,0,c.width,c.height),ct(h,i.map(le=>d(le[0]*.985,le[1]*.985)),f,{w:10,closed:!0,color:"#e0c792",amp:2});for(let le=0;le<260;le++){const[ve,G]=d(...g());ct(h,[[ve,G],[ve+6,G-1]],f,{w:1.8,color:xt.sandEdge,amp:0})}const b=s.map(le=>d(...le));Vt(h,b,xt.grass),pa(h,b,()=>{for(let le=0;le<46;le++){const[ve,G]=d(...g());Vt(h,mn(ve,G,(1+u()*2.6)*t,(.6+u()*1.4)*t,u,{lump:.22}),u()<.5?xt.grassLight:xt.grassDark)}}),ct(h,b,f,{w:3.4,closed:!0,color:xt.grassEdge});const _=(le,ve,G,ne,de,Z)=>{const Pe=mn(...d(le.x,le.z),ve*t,G*t,mt(Z),{n:60,lump:.1});return Vt(h,Pe,ne),ct(h,Pe,f,{w:3,closed:!0,color:de}),Pe},D=_(v,v.r*.95,v.r*.85,"#d9cdb0","#a8946a",21);pa(h,D,()=>{for(let le=0;le<40;le++){const ve=d(v.x,v.z)[0]+(u()-.5)*v.r*2*t,G=d(v.x,v.z)[1]+(u()-.5)*v.r*2*t,ne=3+u()*6,de=mn(ve,G,ne*1.3,ne,f,{n:12,lump:.1});Vt(h,de,"#c9bb98"),ct(h,de,f,{w:1.6,closed:!0,amp:.3})}}),_(m,m.r,m.r*.85,"#f0dcae",xt.sandEdge,22);const[C,T]=d(o.x,o.z),I=o.rx*t,S=o.rz*t,y=mn(C,T,I+.35*t,S+.32*t,mt(5),{n:60,lump:.1});Vt(h,y,xt.foam),ct(h,y,f,{w:3,color:xt.grassEdge,closed:!0});const R=mn(C,T,I,S,mt(5),{n:60,lump:.1});Vt(h,R,xt.water),Vt(h,mn(C+6,T+3,I*.65,S*.6,mt(5),{n:50,lump:.1}),xt.waterDeep),ct(h,R,f,{w:2.8,color:xt.waterInk,closed:!0});for(let le=0;le<5;le++){const ve=C+(u()-.5)*I,G=T+(u()-.5)*S;ct(h,[[ve-8,G+2],[ve-3,G-2],[ve+3,G+1],[ve+8,G-3]],f,{w:2.2,color:"#e9f7fb",amp:0})}const B=_(p,p.r*.95,p.r*.8,"#eadfc4","#a8844f",23);pa(h,B,()=>{const[le,ve]=d(p.x,p.z),G=.9*t;for(let ne=-5;ne<=5;ne++){ct(h,[[le-4*t,ve+ne*G],[le+4*t,ve+ne*G+(u()-.5)*4]],f,{w:1.8,color:"#c4ab7c",amp:1});for(let de=-5;de<=5;de++){const Z=le+de*G*1.4+ne%2*G*.7;ct(h,[[Z,ve+ne*G],[Z,ve+(ne+1)*G]],f,{w:1.6,color:"#c4ab7c",amp:.5})}}}),_({x:l[0],z:l[1]},2.2,1.6,"#efd9a8",xt.sandEdge,24),_(w,2.2,1.8,"#efd9a8",xt.sandEdge,25);const H=yg(a,16),Y=[H[0]];for(let le=1;le<H.length;le++){const[ve,G]=H[le-1],[ne,de]=H[le],Z=Math.max(1,Math.ceil(Math.hypot(ne-ve,de-G)/.08));for(let Pe=1;Pe<=Z;Pe++)Y.push([ve+(ne-ve)*Pe/Z,G+(de-G)*Pe/Z])}let te=0;for(let le=1;le<Y.length;le++){const[ve,G]=Y[le-1],[ne,de]=Y[le],Z=Math.hypot(ne-ve,de-G),Pe=((ne-o.x)/(o.rx+.5))**2+((de-o.z)/(o.rz+.5))**2<1;te+=Z,te%.6<.32&&!Pe&&(h.strokeStyle="#d0473f",h.lineWidth=6,h.lineCap="round",h.beginPath(),h.moveTo(...d(ve,G)),h.lineTo(...d(ne,de)),h.stroke())}const[W,re]=d(w.x,w.z+.9),X=.55*t;for(const[le,ve]of[[[-X,-X*.7],[X,X*.7]],[[X,-X*.7],[-X,X*.7]]])ct(h,[[W+le[0],re+le[1]],[W+ve[0],re+ve[1]]],f,{w:15,amp:.4}),ct(h,[[W+le[0],re+le[1]],[W+ve[0],re+ve[1]]],f,{w:9,color:"#e0484f",amp:.4});const ye=(le,ve,G)=>r.some(ne=>Math.hypot(le-ne.x,ve-ne.z)<ne.r+G)||Math.hypot(le-l[0],ve-l[1])<2.4+G,we=(le,ve,G)=>bg(le,ve,s)&&!ye(le,ve,G)&&!a.some(()=>!1),Re=(le,ve,G)=>{for(let ne=0;ne<le;ne++){const de=g();we(de[0],de[1],ve)&&G(...d(...de))}};return Re(1400,.1,(le,ve)=>{const G=.15*t,ne=-1.15+(u()-.5)*.4,de=Math.cos(ne)*G,Z=Math.sin(ne)*G;ct(h,[[le,ve],[le+de,ve+Z]],f,{w:2,color:xt.grassTick,amp:0}),u()<.6&&ct(h,[[le+5,ve+1],[le+5+de,ve+1+Z]],f,{w:2,color:xt.grassTick,amp:0})}),Re(80,.3,(le,ve)=>{for(let G=-1;G<=1;G++){const ne=G*.5+(u()-.5)*.3,de=(.22+u()*.14)*t;ct(h,[[le+G*4,ve],[le+G*4+Math.sin(ne)*de*.8,ve-Math.cos(ne)*de*.6],[le+G*4+Math.sin(ne)*de,ve-Math.cos(ne)*de]],f,{w:2.4,color:xt.grassEdge,amp:.3})}}),Re(22,.6,(le,ve)=>{const G=3+Math.floor(u()*4),ne=u()<.5?"#fffdf6":"#f7c6d9";for(let de=0;de<G;de++){const Z=le+(u()-.5)*1.2*t,Pe=ve+(u()-.5)*.7*t;for(let Ve=0;Ve<5;Ve++){const Be=Ve/5*6.28,J=mn(Z+Math.cos(Be)*5,Pe+Math.sin(Be)*4,4.2,3.6,f,{n:10});Vt(h,J,ne),ct(h,J,f,{w:1.3,color:"#9a7a58",closed:!0,amp:.2})}h.fillStyle="#f5c84c",h.beginPath(),h.arc(Z,Pe,2.6,0,7),h.fill()}}),c}function Ag(n){const[e,t]=Wn(256,256),i=mt(70),s=mt(71+n*5);t.fillStyle="#7cc6dc",t.fillRect(0,0,256,256);for(let r=0;r<7;r++)Vt(t,mn(i()*256,i()*256,30+i()*30,12+i()*12,i,{lump:.2}),"#70bdd6");for(let r=0;r<9;r++){const a=14+i()*228,o=14+i()*228;ct(t,[[a-11,o+2],[a-4,o-3],[a+3,o+1],[a+11,o-3]],s,{w:2.6,color:"#e6f6fa",amp:.8})}return e}function Eg(n,e,t=96){const i=n*e,[s,r]=Wn(i,t),a=mt(41),o=mt(42);r.fillStyle="#e3c48e",r.fillRect(0,0,i,t),r.fillStyle="#cfa872",r.fillRect(0,t*.62,i,t);for(let c=0;c<18;c++){const h=a()*i,u=16+a()*(t-30);ct(r,[[h,u],[h+18+a()*30,u+(a()-.5)*5]],o,{w:2,color:"#b88f5a",amp:1})}const l=[[0,0],[i,0]];for(let c=i;c>=0;c-=12)l.push([c,8+5*Math.abs(Math.sin(c*.13))+a()*3]);return Vt(r,l,xt.sand),ct(r,l.slice(2),o,{w:3,amp:.6}),s}function Tg(){const[n,e]=Wn(512,256),t=mt(93),i=mt(94);e.fillStyle="#e6cf9e",e.fillRect(0,0,512,256);for(let s=0,r=0;r<256;s++,r+=42)for(let a=s%2?0:-40;a<512;a+=96+i()*10){const o=[[a+4,r+4],[a+90,r+4],[a+90,r+39],[a+4,r+39]];Vt(e,o,i()<.35?"#efdcb2":"#e6cf9e"),ct(e,o,t,{w:2,closed:!0,color:"#a8844f",amp:.6})}return n}function Cg(n,e,t=8){const[i,s]=Wn(256,128),r=mt(8);for(let a=0;a<t;a++)s.fillStyle=a%2?n:e,s.fillRect(a*256/t,0,256/t,128);for(let a=1;a<t;a++)ct(s,[[a*256/t,0],[a*256/t,128]],r,{w:2,amp:.5});return i}function Rg(n){const[e,t]=Wn(110,90),i=mt(30+n*3),s=[[24,22],[86,22],[86,68],[24,68]];Vt(t,s,"#fbf3dc"),ct(t,s,i,{w:3,closed:!0,amp:.5});for(const r of[34,44,54])ct(t,[[34,r],[76,r]],i,{w:2,color:"#b58d5b",amp:.4});for(const r of[20,90]){const a=mn(r,45,8,27,i,{n:18,lump:.03});Vt(t,a,"#ecd9ae"),ct(t,a,i,{w:3,closed:!0,amp:.4})}return e}function Pg(n){const[e,t]=Wn(96,110),i=mt(50+n*7),s=mn(48,50,36,38,mt(51),{n:30,lump:.06});return Vt(t,s,"#fbf3dc"),ct(t,s,i,{w:3.6,closed:!0,amp:.6}),ct(t,[[34,38],[38,26],[52,22],[62,30],[60,42],[49,50],[48,60]],i,{w:7,color:"#c9483e",amp:.5}),t.fillStyle="#c9483e",t.beginPath(),t.arc(48,74,5,0,7),t.fill(),e}function Lg(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Ot;let c=0;for(let h=0;h<n.length;++h){const u=n[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0;const u=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Vl(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let v=0;v<a[h].length;++v)d.push(a[h][v][f]);const g=Vl(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Vl(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new hn(a,t,i);let l=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){const v=h.getComponent(f,g);o.setComponent(f+u,g,v)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Yc(n,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count;let a=0;const o=Object.keys(n.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let w=0,b=o.length;w<b;w++){const _=o[w],D=n.attributes[_];l[_]=new D.constructor(new D.array.constructor(D.count*D.itemSize),D.itemSize,D.normalized);const C=n.morphAttributes[_];C&&(c[_]||(c[_]=[]),C.forEach((T,I)=>{const S=new T.array.constructor(T.count*T.itemSize);c[_][I]=new T.constructor(S,T.itemSize,T.normalized)}))}const d=e*.5,g=Math.log10(1/e),v=Math.pow(10,g),m=d*v;for(let w=0;w<r;w++){const b=i?i.getX(w):w;let _="";for(let D=0,C=o.length;D<C;D++){const T=o[D],I=n.getAttribute(T),S=I.itemSize;for(let y=0;y<S;y++)_+=`${~~(I[u[y]](b)*v+m)},`}if(_ in t)h.push(t[_]);else{for(let D=0,C=o.length;D<C;D++){const T=o[D],I=n.getAttribute(T),S=n.morphAttributes[T],y=I.itemSize,R=l[T],B=c[T];for(let H=0;H<y;H++){const Y=u[H],te=f[H];if(R[te](a,I[Y](b)),S)for(let W=0,re=S.length;W<re;W++)B[W][te](a,S[W][Y](b))}}t[_]=a,h.push(a),a++}}const p=n.clone();for(const w in n.attributes){const b=l[w];if(p.setAttribute(w,new b.constructor(b.array.slice(0,a*b.itemSize),b.itemSize,b.normalized)),w in c)for(let _=0;_<c[w].length;_++){const D=c[w][_];p.morphAttributes[w][_]=new D.constructor(D.array.slice(0,a*D.itemSize),D.itemSize,D.normalized)}}return p.setIndex(h),p}const Ig=(()=>{const n=new kc(new Uint8Array([120,255]),2,1,Tr);return n.minFilter=n.magFilter=It,n.needsUpdate=!0,n})(),Dg=(()=>{const n=new kc(new Uint8Array([205,255]),2,1,Tr);return n.minFilter=n.magFilter=It,n.needsUpdate=!0,n})(),ma=new Map;function Wt(n,e={}){const t=n+JSON.stringify(e,(i,s)=>s&&s.isTexture?s.uuid:s);return ma.has(t)||ma.set(t,new pg({color:n,gradientMap:Ig,...e})),ma.get(t)}const Dr=(n,e={})=>Wt(n,{gradientMap:Dg,...e});function wi(n,e=!1){const t=new U0(n);return t.colorSpace=qt,t.anisotropy=8,e&&(t.wrapS=t.wrapT=Es),t}const Ug=new N(0,1,0),Ng=new gt,Zc=new ci,Ro=new N,Nn=new N;function _n(n,e,t=Zc.identity(),i=Ro.set(1,1,1)){return n.clone().applyMatrix4(Ng.compose(e,t,i))}function Fg(n){return n=n.index?n.toNonIndexed():n,n.attributes.uv||n.setAttribute("uv",new at(new Float32Array(n.attributes.position.count*2),2)),n}function kn(n,e){return new ht(Lg(n.map(Fg)),e)}const On=Math.PI*2,We={box:(n,e,t)=>new Vn(n,e,t),cyl:(n,e,t,i=10,s=!1)=>new Hn(n,e,t,i,1,s),sph:(n,e=12,t=9)=>new Gn(n,e,t),hemi:(n,e=14)=>new Gn(n,e,8,0,On,0,Math.PI/2),cone:(n,e,t=8)=>new hs(n,e,t),tor:(n,e,t=On,i=16)=>new Co(n,e,8,i,t),lathe:(n,e=16)=>new Eo(n.map(([t,i])=>new ge(t,i)),e),extrude:(n,e,t=[])=>{const i=new Ns(n.map(([r,a])=>new ge(r,a)));for(const r of t)i.holes.push(new lo(r.map(([a,o])=>new ge(a,o))));const s=new To(i,{depth:e,bevelEnabled:!1,curveSegments:12});return s.translate(0,0,-e/2),s}},kg=n=>typeof n=="number"?[n,n,n]:n;function Ge(n,e,{p:t=[0,0,0],r:i=[0,0,0],s=1,map:r,side:a,glow:o,basic:l,pale:c,flat:h}={}){const u={};r&&(u.map=r),a&&(u.side=a),h&&(u.flatShading=!0),o&&(u.emissive=o,u.emissiveIntensity=.55);const f=l?new Ft({color:e,map:r,side:a}):c?Dr(e,u):Wt(e,u),d=new ht(n,f);return d.position.set(...t),d.rotation.set(...i),d.scale.set(...kg(s)),d}function At(...n){const e=new cn;return e.add(...n.flat().filter(Boolean)),e}let Og,Wl;const Ur=()=>Og||(Og=wi(Tg(),!0));function zg(n,e,t,i){const s=3+Math.floor(t()*3),r=new Gn(1,12,8);for(let a=0;a<s;a++){const o=a/s*On+t(),l=a===0?0:e*.55,c=e*(a===0?1:.62+t()*.2);i.push(_n(r,Nn.set(n.x+Math.cos(o)*l,n.y+(a===0?e*.12:0),n.z+Math.sin(o)*l),Zc.identity(),Ro.set(c,c*.5,c)))}}function lr(n){const e=mt(n),t=new cn,i=3.2+e()*.8,s=.5+e()*.5,r=6,a=[];let o=new N;for(let d=0;d<r;d++){const g=d/r,v=(d+1)/r,m=i/r,p=new N(s*g*g,g*i,0),w=new N(s*v*v,v*i,0),b=w.clone().sub(p).normalize(),_=new Hn(.13-v*.04,.16-g*.04,m*1.02,7);a.push(_n(_,p.clone().add(w).multiplyScalar(.5),new ci().setFromUnitVectors(Ug,b))),o=w}const l=[],c=new Gn(1,10,6,0,On,0,Math.PI/2),h=7;for(let d=0;d<h;d++){const g=c.clone().scale(.95,.16,.3).translate(.85,0,0).rotateZ(-.5-e()*.25).rotateY(d/h*On+e()*.4).translate(o.x,o.y,o.z);l.push(g)}const u=new Gn(.13,8,6),f=[0,2.1,4.2].map(d=>_n(u,Nn.set(o.x+Math.cos(d)*.16,o.y-.15,Math.sin(d)*.16)));return t.add(kn(a,Wt(xt.trunk)),kn(l,Wt(xt.leaf,{side:yt})),kn(f,Wt("#9a6a3a"))),t.rotation.y=e()*On,t}function $l(n,e=xt.leaf){const t=mt(n),i=[];return zg(new N(0,.3,0),.55,t,i),kn(i,Wt(e))}function $i(n,e,t="#d8c6a2"){const i=mt(n);let s=new Gn(.6,10,8);s.deleteAttribute("uv"),s.deleteAttribute("normal"),s=Yc(s);const r=s.attributes.position;for(let o=0;o<r.count;o++){let l=r.getY(o);l<0&&(l*=.35);const c=1+(i()-.5)*.2;r.setXYZ(o,r.getX(o)*1.15*c,(l+.2)*1.2*c,r.getZ(o)*c)}s.computeVertexNormals();const a=new ht(s,Wt(t,{flatShading:!0}));return a.scale.setScalar(e),a.rotation.y=i()*On,a}function Xl(n){const e=mt(n),t=[],i=4+Math.floor(e()*2),s=new hs(.1,.7,5);s.translate(0,.35,0);for(let r=0;r<i;r++){const a=r/i*On+e(),o=.25+e()*.35,l=new ci().setFromEuler(new xn(Math.sin(a)*o,0,-Math.cos(a)*o));t.push(_n(s,Nn.set(Math.cos(a)*.08,0,Math.sin(a)*.08),l,Ro.set(1,.7+e()*.6,1)))}return kn(t,Wt(xt.leafLight))}function vs(n,e,t,i,s=0){const r=mt(i);let a=new hs(n,e,t,4);a.deleteAttribute("uv"),a.deleteAttribute("normal"),a=Yc(a);const o=a.attributes.position;for(let l=0;l<o.count;l++){const c=o.getY(l),h=(c+e/2)/e;if(h>.98)continue;const u=1+(r()-.5)*.22;o.setXYZ(l,o.getX(l)*u,c+(h>.02?(r()-.5)*.18:0),o.getZ(l)*u)}return a.translate(0,e/2+s,0),a.computeVertexNormals(),a}function Bg(){const n="#b9acd8",e="#f7f4fb",t=new cn,i=[vs(2.7,5.4,7,3),_n(vs(1.7,3.3,6,4),Nn.set(-1.9,0,.7)),_n(vs(1.5,2.6,6,5),Nn.set(1.8,0,.9))];t.add(kn(i,Wt(n,{flatShading:!0})));const s=[_n(vs(.98,1.75,7,6),Nn.set(0,3.72,0)),_n(vs(.55,1.05,6,7),Nn.set(-1.9,2.28,.7))];t.add(kn(s,Dr(e,{flatShading:!0})));const r=new ht(new Pr(.62,16,0,Math.PI),new Ft({color:"#3d2c46"}));r.position.set(.25,.02,2.02),r.rotation.x=-.42;const a=Ge(We.tor(.66,.14,Math.PI,12),"#a597c9",{p:[.25,.02,2.04],r:[-.42,0,0]}),o=Ge(We.cyl(.03,.03,.9,5),"#8a5d33",{p:[0,5.7,0]}),l=Ge(We.extrude([[0,0],[.55,-.14],[0,-.3]],.03),"#e0484f",{p:[.02,6.1,0]});return l.userData.wave=!0,t.add(r,a,o,l),t}function ql(){Wl||(Wl=wi(Cg("#f3ead6","#e8584e"),!0));const n=new cn,e=new ht(new hs(1.1,1.5,6,1),Wt("#ffffff",{map:Wl,flatShading:!0}));e.position.y=.75;const t=new ht(new Pr(.34,10,0,Math.PI),new Ft({color:"#5b3520"}));t.position.set(0,.02,.95),t.rotation.x=-.6;const i=Ge(We.cyl(.03,.03,.4,5),"#8a5d33",{p:[0,1.65,0]});return n.add(e,t,i),n}function Hg(n=1){const e=Ge(We.sph(1,16,10),"#efd9a6",{s:[1.6*n,.45*n,1.1*n],pale:!0});return e.position.y=-.05,e}function Yl(n="#d98a58"){return At(Ge(We.lathe([[0,0],[.18,.02],[.26,.2],[.22,.42],[.1,.5],[.12,.58],[0,.58]],12),n))}function Gg(){const n=We.lathe([[.55,0],[.62,0],[.62,.55],[.48,.55],[.48,.1]],16);return At(Ge(n,"#e6cf9e",{map:Ur()}),Ge(We.cyl(.48,.48,.02,16),"#61b4d2",{p:[0,.4,0],basic:!0}),Ge(We.cyl(.04,.04,1.3,5),"#8a5d33",{p:[-.56,.65,0]}),Ge(We.cyl(.04,.04,1.3,5),"#8a5d33",{p:[.56,.65,0]}),Ge(We.cone(.85,.5,4),"#c9483e",{p:[0,1.45,0],r:[0,Math.PI/4,0],flat:!0}))}function cr(n=2.2,e=!1){const t=At(Ge(We.box(.62,.18,.62),"#efdcb2",{p:[0,.09,0]}),Ge(We.cyl(.21,.24,n,10),"#f1e2bf",{p:[0,n/2+.18,0]}));return e?t.add(Ge(We.cyl(.21,.21,.55,10),"#f1e2bf",{p:[.55,.21,.35],r:[Math.PI/2,.6,0]})):t.add(Ge(We.box(.6,.18,.6),"#efdcb2",{p:[0,n+.27,0]})),t}function Vg(){const s=[],r=[[-.6,0],[.6,0],[.6,1.4]];for(let u=1;u<16;u++){const f=u/16*Math.PI;r.push([Math.cos(f)*.6,2.5-1.1+Math.sin(f)*.6])}r.push([-.6,2.5-1.1]),s.push(r.reverse());const a=[[-2.2/2,0],[2.2/2,0],[2.2/2,2.5],[-2.2/2,2.5]],o=We.extrude(a,.45,s),l=Ur(),c=new ht(o,Wt("#ffffff",{map:l})),h=o.attributes.uv;for(let u=0;u<h.count;u++)h.setXY(u,h.getX(u)*.5,h.getY(u)*.5);return At(c,Ge(We.box(2.2+.2,.2,.45+.15),"#efdcb2",{p:[0,2.5+.1,0]}))}function Wg(n=2.4,e=1.2){const t=new Vn(n,e,.4),i=t.attributes.uv;for(let r=0;r<i.count;r++)i.setXY(r,i.getX(r)*n/2.4,i.getY(r)*e/1.2);const s=new ht(t,Wt("#ffffff",{map:Ur()}));return s.position.y=e/2,At(s,Ge(We.box(n+.1,.12,.5),"#efdcb2",{p:[0,e+.06,0]}))}function $g(){const n=new Vn(1.8,1.4,1.8),e=new ht(n,Wt("#ffffff",{map:Ur()}));return e.position.y=.7,At(e,Ge(We.box(1.95,.14,1.95),"#efdcb2",{p:[0,1.47,0]}),Ge(We.hemi(.78,16),"#8fc7e8",{p:[0,1.54,0]}),Ge(We.cyl(.05,.05,.3,5),"#f5cf5f",{p:[0,2.45,0]}),Ge(We.sph(.09,8,6),"#f5cf5f",{p:[0,2.62,0]}),Ge(We.extrude([[-.28,0],[.28,0],[.28,.6],[0,.85],[-.28,.6]],.06),"#8a5d33",{p:[0,0,.91]}))}function Xg(){return At(Ge(We.box(1.6,.16,.5),"#efdcb2",{p:[0,.08,.5]}),Ge(We.box(1.6,.32,.5),"#e6cf9e",{p:[0,.16,0]}),Ge(We.box(1.6,.48,.5),"#efdcb2",{p:[0,.24,-.5]}))}function qg(n=4){const e=[],t=[],i=new Vn(.34,.1,1.3),s=new Hn(.07,.07,1.1,6);for(let r=0;r<n/.38;r++)e.push(_n(i,Nn.set(r*.38,.1,0)));for(let r=0;r<=n;r+=1.3)for(const a of[-.62,.62])t.push(_n(s,Nn.set(r,-.25,a)));return At(kn(e,Wt("#c98f55")),kn(t,Wt("#a8754a")))}function Yg(){const n=We.extrude([[-1.1,.45],[1.25,.5],[.85,0],[-.8,0]],.8),e=new ht(new Ir(new Ns([new ge(-.05,0),new ge(1,0),new ge(-.05,1.7)])),Dr("#fbf3dc",{side:yt}));return e.position.set(.05,.62,.02),At(Ge(n,"#e8584e"),Ge(We.box(2.1,.06,.78),"#c98f55",{p:[.05,.42,0]}),Ge(We.cyl(.04,.05,2.1,6),"#8a5d33",{p:[0,1.4,0]}),Ge(We.extrude([[0,0],[.4,-.1],[0,-.22]],.02),"#f5cf5f",{p:[.02,2.4,0]}),e)}function Zg(){const n=[];for(let e=0;e<4;e++)n.push(Ge(We.cyl(.52-(e+1)*.06,.52-e*.06,.7,12),e%2?"#e8584e":"#fbf3dc",{p:[0,.35+e*.7,0]}));return At(Ge(We.cyl(.7,.8,.3,12),"#d8c6a2",{p:[0,.15-.2,0]}),...n.map(e=>(e.position.y+=.1,e)),Ge(We.cyl(.42,.42,.1,12),"#5b3520",{p:[0,2.95,0]}),Ge(We.cyl(.3,.3,.5,12),"#fff3a6",{p:[0,3.25,0],basic:!0}),Ge(We.cone(.45,.55,12),"#e8584e",{p:[0,3.78,0]}))}function Jg(){return At(Ge(We.sph(.22,10,8),"#f5a65b",{s:[1.4,.9,.6]}),Ge(We.cone(.18,.3,4),"#f5a65b",{p:[-.38,0,0],r:[0,0,Math.PI/2],s:[1,1,.3]}))}function Zl(n=1){return At(Ge(We.box(.7*n,.7*n,.7*n),"#c98f55",{p:[0,.35*n,0]}),Ge(We.box(.74*n,.1*n,.74*n),"#dba46a",{p:[0,.55*n,0]}))}function jg(){const n=[];for(let e=0;e<=8;e++)n.push([.26+Math.sin(e/8*Math.PI)*.06,e/8*.75]);return n.push([0,.75]),At(Ge(We.lathe(n,14),"#c98a4d"),Ge(We.cyl(.33,.33,.06,14,!0),"#b3aec6",{p:[0,.18,0],side:yt}),Ge(We.cyl(.33,.33,.06,14,!0),"#b3aec6",{p:[0,.57,0],side:yt}))}function Kg(){const n=We.lathe([[0,0],[.35,.05],[.45,.3],[.44,.36]],12);return n.scale(1,1,2.4),At(Ge(n,"#c98a4d",{side:yt}),Ge(We.box(.8,.06,.22),"#a8754a",{p:[0,.28,0]}),Ge(We.cyl(.03,.03,1.4,5),"#8a5d33",{p:[.2,.34,.1],r:[Math.PI/2,0,.3]}))}function Qg(){const n=We.extrude([[-.5,-.17],[.45,-.17],[.62,0],[.45,.17],[-.5,.17]],.06);return At(Ge(We.cyl(.05,.06,1.3,6),"#a8754a",{p:[0,.65,0]}),Ge(n,"#e8c58f",{p:[.1,1.05,0]}),Ge(n,"#e8c58f",{p:[-.1,.72,0],r:[0,Math.PI,0]}))}function ev(){const n=[0,1.1,2.2].map(i=>Ge(We.cyl(.06,.06,.6,6),"#8a5d33",{p:[0,.08,0],r:[Math.PI/2,i,0]})),e=Ge(We.cone(.16,.42,6),"#f5a64b",{p:[0,.3,0],basic:!0});e.userData.flicker=!0;const t=[];for(let i=0;i<7;i++){const s=i/7*On;t.push(Ge(We.sph(.09,6,5),"#d8c6a2",{p:[Math.cos(s)*.4,.05,Math.sin(s)*.4]}))}return At(...n,e,...t)}function tv(){const i="#f5cf5f",s=At(Ge(We.box(1.3,.7,.85),"#c98a4d",{p:[0,.35,0]}),...[-.42,.42].map(h=>Ge(We.box(.12,.72,.89),i,{p:[h,.35,0]})),Ge(We.box(.26,.26,.06),i,{p:[0,.6,.45499999999999996]})),r=Ge(We.box(1.3-.1,.02,.85-.1),"#fff3a6",{p:[0,.7-.02,0],basic:!0}),a=new Hn(.85/2,.85/2,1.3,14,1,!1,0,Math.PI);a.rotateZ(Math.PI/2),a.rotateX(Math.PI/2);const o=At(Ge(a,"#b77c45",{p:[0,0,.85/2]}),...[-.42,.42].map(h=>Ge(new Hn(.85/2+.02,.85/2+.02,.12,14,1,!1,0,Math.PI).rotateZ(Math.PI/2).rotateX(Math.PI/2),i,{p:[h,0,.85/2]}))),l=new cn;l.position.set(0,.7,-.85/2),l.add(o);const c=At(s,r,l);return c.userData.lid=l,c.userData.glow=r,c}const nv=new Gn(1,14,10);function iv(n){return new ht(nv,Dr(n))}const sv=new un({side:yt,vertexShader:`
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
    }`}),rv=new un({side:yt,uniforms:{map:{value:null}},vertexShader:`
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
    }`}),Xi=new un({uniforms:{tColor:{value:null},tND:{value:null},texel:{value:new ge},seed:{value:0},lineW:{value:1.3},ink:{value:new tt(Xc)}},depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
    }`});function av(n){const e=new Bn(1,1,{samples:4,type:Ti}),t=new Bn(1,1,{type:Ti,minFilter:It,magFilter:It}),i=new ht(new si(2,2),Xi),s=new Fc;s.add(i);const r=new Rs(-1,1,1,-1,0,1),a=new ge,o=[];function l(){n.getDrawingBufferSize(a),e.setSize(a.x,a.y),t.setSize(a.x,a.y),Xi.uniforms.texel.value.set(1/a.x,1/a.y),Xi.uniforms.lineW.value=1.25*n.getPixelRatio()}function c(h,u,f){n.getDrawingBufferSize(a),(a.x!==e.width||a.y!==e.height)&&l(),n.setRenderTarget(e),n.render(h,u);const d=h.background;h.background=null,h.traverse(v=>{if(!(!v.isMesh||!v.visible)){if(v.userData.noInk){v.visible=!1,o.push([v,null]);return}o.push([v,v.material]),v.userData.sprite?(v.material=rv,v.onBeforeRender=lv):v.material=sv}});const g=n.getClearAlpha();n.getClearColor(Jl),n.setClearColor(0,0),n.setRenderTarget(t),n.render(h,u),n.setClearColor(Jl,g);for(const[v,m]of o)m?(v.material=m,v.onBeforeRender=ov):v.visible=!0;o.length=0,h.background=d,Xi.uniforms.tColor.value=e.texture,Xi.uniforms.tND.value=t.texture,Xi.uniforms.seed.value=f,n.setRenderTarget(null),n.render(s,r)}return{render:c,setSize:l}}const Jl=new tt,ov=()=>{};function lv(n,e,t,i,s){s.uniforms.map.value=this.userData.colorMap(),s.uniformsNeedUpdate=!0}const qi={a:14,b:10},Bt=[-8.6,6.1],Pt=[{id:"mountain",name:"Mystery Mountain",icon:"⛰️",x:-8,z:-3.2,r:3.6,top:6.5},{id:"oasis",name:"The Oasis",icon:"🌴",x:0,z:-5.6,r:3.5,top:4},{id:"city",name:"Ancient City",icon:"🏛️",x:8,z:-3.4,r:3.6,top:3.2},{id:"sea",name:"The Sea",icon:"🌊",x:9.6,z:4.8,r:3.8,top:4},{id:"treasure",name:"Treasure Hill",icon:"🗝️",x:0,z:1.8,r:3,top:3}],cv={x:1.2,z:-5.9,rx:1.5,rz:.95},uo=_u.degToRad(56),jl=1/Math.cos(uo),hv=7,Po=3;async function uv(n,e,t){const i=new Image;i.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n),await i.decode();const s=document.createElement("canvas");return s.width=e,s.height=t,s.getContext("2d").drawImage(i,0,0,e,t),s}function Qn(n,e,t,i){return Promise.all(Array.from({length:Po},(s,r)=>{let a=n.replace(/seed="\d+"/,`seed="${r*17+3}"`);return i&&(a=a.replace("</svg>",`<style>.pose${i==="A"?"B":"A"}{display:none}</style></svg>`)),uv(a,e,t).then(o=>wi(o))}))}const hr=n=>Array.from({length:Po},(e,t)=>wi(n(t))),Kl=n=>1+2.7*(n-1)**3+1.7*(n-1)**2,Ql=n=>n<.5?2*n*n:1-(-2*n+2)**2/2;function dv(n,e,t,i,s){const r=[],a=[],o=[];let l=0;for(let h=0;h<=n.length;h++){const[u,f]=n[h%n.length];if(h){const[d,g]=n[h-1];l+=Math.hypot(u-d,f-g)}if(r.push(u,e,f,u,t,f),a.push(l/s,1,l/s,0),h){const d=(h-1)*2;o.push(d,d+1,d+2,d+1,d+3,d+2)}}const c=new Ot;return c.setAttribute("position",new at(r,3)),c.setAttribute("uv",new at(a,2)),c.setIndex(o),c.computeVertexNormals(),new ht(c,new Ft({map:i,side:yt}))}function ga(n,e,t,i){const s=new Ir(new Ns(n.map(([a,o])=>new ge(a,-o))));if(i){const a=s.attributes.position,o=s.attributes.uv;for(let l=0;l<a.count;l++)o.setXY(l,(a.getX(l)-i.minX)/(i.maxX-i.minX),1-(-a.getY(l)-i.minZ)/(i.maxZ-i.minZ))}const r=new ht(s,t);return r.rotation.x=-Math.PI/2,r.position.y=e,r}async function fv(n){const e=new Fc,t=new Rs(-1,1,1,-1,.1,300),i=av(n),s=[],r=[],a=[],o=[],l=[],c=[];e.background=new tt("#7cc6dc"),e.add(new mg(16777215,15985368,1.9));const h=new _g(16777215,1.3);h.position.set(-9,6,4),e.add(h);const u=[];for(let P=0;P<120;P++){const U=P/120*Math.PI*2,Q=Math.cos(U),_e=Math.sin(U),Se=1+.018*Math.sin(U*7+1)+.012*Math.sin(U*13);u.push([qi.a*Se*Math.sign(Q)*Math.abs(Q)**(1/3),qi.b*Se*Math.sign(_e)*Math.abs(_e)**(1/3)])}const f=mt(5),d=u.map(([P,U],Q)=>{const _e=.84+.025*Math.sin(Q*.4)+(f()-.5)*.01;return[P*_e,U*_e]}),g=P=>u.map(([U,Q])=>[U*P,Q*P]),v=(P,U,Q=0)=>(Math.abs(P)/(qi.a-Q))**6+(Math.abs(U)/(qi.b-Q))**6<1,m=hr(Ag).map(P=>(P.wrapS=P.wrapT=Es,P.repeat.set(40,40),P)),p=new Ft({map:m[0]});s.push({mat:p,frames:m});const w=new ht(new si(320,320),p);w.rotation.x=-Math.PI/2,w.position.y=-.55,e.add(w),e.add(ga(g(1.16),-.53,new Ft({color:"#9ad8e6"}))),e.add(ga(g(1.045),-.52,new Ft({color:"#f3f6ea"})));const b=[Bt,...Pt.map(P=>[P.x,P.z])],_=wi(wg({W:30,H:22,ppu:44,outline:u,grassPts:d,regions:Pt,trail:b,pond:cv,camp:Bt}));_.anisotropy=n.capabilities.getMaxAnisotropy(),e.add(ga(u,0,new Ft({map:_}),{minX:-15,maxX:15,minZ:-11,maxZ:11})),e.add(dv(u,0,-.9,wi(Eg(6,60),!0),6));const D=new Ft({map:wi(Mg()),transparent:!0,depthWrite:!1}),C=new si(1,1).rotateX(-Math.PI/2);function T(P,U,Q,_e,Se=_e*.5,Me=0){const ue=new ht(C,D);return ue.position.set(U,Me+.015,Q),ue.scale.set(_e,1,Se),ue.renderOrder=1,ue.userData.noInk=!0,P.add(ue),ue}const I=(P,U,Q,_e,{s:Se=1,sy:Me=Se,rot:ue=0,sh:be=0,y:dt=0}={})=>(U.position.x=Q,U.position.z=_e,U.position.y+=dt,U.scale.multiply(new N(Se,Me,Se)),U.rotation.y+=ue,P.add(U),be&&T(P,Q,_e+.1,be,be*.5,dt),U),S=new cn;e.add(S),I(S,ql(),Bt[0]-1.1,Bt[1]-.7,{rot:.4,sh:2.4}),I(S,ev(),Bt[0]+.5,Bt[1]+.4,{sh:1}),I(S,Kg(),-11.1,7.6,{rot:.9,sh:1.6}),I(S,Qg(),Bt[0]+2.1,Bt[1]-1.1,{rot:-.3,sh:.8}),[[-12,2],[-11.3,-6.5],[-4.2,-8.6],[4.6,-8.7],[12.2,-5.6],[12.6,-.4],[4.6,7.9],[-4.4,8.4],[-13,-1.8],[5.8,1]].forEach(([P,U],Q)=>{const _e=I(S,lr(100+Q*7),P,U,{s:.95,sy:1.25,sh:1.5});a.push({m:_e,k:Q})}),[[-4,4.5],[4.5,-.5],[-3.6,-1.8],[3.8,5.8],[-12,4.4],[2.6,-1.8],[-1.8,6.2],[6,7.5]].forEach(([P,U],Q)=>I(S,$l(300+Q,Q%3?"#83c47b":"#93c886"),P,U,{s:1+Q%3*.2,sh:1.2})),[[-5.2,1.6,.9],[4.2,2.8,.7],[-2.6,-2.8,.6],[12.4,-7,1],[-13.3,5,.8],[1.3,8.9,.8]].forEach(([P,U,Q],_e)=>I(S,$i(500+_e,Q),P,U,{sh:1.5*Q}));{const P=mt(900);let U=0;for(let Q=0;Q<400&&U<30;Q++){const _e=(P()-.5)*24,Se=(P()-.5)*16;!v(_e,Se,2.4)||Pt.some(Me=>Math.hypot(Me.x-_e,Me.z-Se)<Me.r+.6)||Math.hypot(_e-Bt[0],Se-Bt[1])<2.8||(I(S,Xl(3e3+U),_e,Se,{s:.8+P()*.5,rot:P()*6}),U++)}}const R=Pt.map(P=>({...P,g:new cn,items:[],fog:[],revealed:!1,q:null})),B=(P,U,Q,_e,Se={})=>{const Me=I(P.g,U,P.x+Q,P.z+_e,Se);return P.items.push({m:Me,s:Me.scale.clone()}),Me};let H,Y,te;{const[P,U,Q,_e,Se]=R;B(P,Bg(),0,-.5,{sh:5}),B(P,$i(601,.9,"#c9bde0"),2.4,1.3,{sh:1.4}),B(P,$i(602,.6,"#c9bde0"),-2.5,1.6,{sh:1}),B(P,$l(603,"#5c9d5f"),-2.9,-.2,{sh:1}),B(P,Xl(604),1.2,2.4),[[3.1,.9],[-.9,-2],[3.2,-1.7],[-2.7,-.9]].forEach(([Me,ue],be)=>a.push({m:B(U,lr(700+be*3),Me,ue,{s:1,sy:1.2,sh:1.5}),k:be+3})),B(U,ql(),-1.9,.9,{rot:-.3,sh:2.2}),B(U,Gg(),-.3,2.1,{sh:1.4}),B(U,Yl(),-3,1.9,{sh:.5}),B(U,Yl("#e8b06a"),-2.7,2.3,{s:.8,sh:.4}),B(U,Hg(.8),2.4,2.2),B(Q,Vg(),0,-.8,{sh:2.6}),B(Q,Xg(),0,.5),B(Q,cr(2.2),-2.2,-1.2,{sh:.8}),B(Q,cr(2.2),2.2,-1.2,{sh:.8}),B(Q,cr(1.1,!0),-2.4,1.2,{sh:.8}),B(Q,cr(1.6,!0),2.4,1.3,{sh:.8}),B(Q,$g(),1.8,-2.7,{sh:2.4}),B(Q,Wg(2.2,1.1),-1.7,-2.6,{sh:2.2}),B(_e,qg(4.2),2.8,.6,{y:-.12}),te=B(_e,Yg(),5.2,2.9,{rot:-.25,y:-.45}),B(_e,Zg(),1.6,-2.2,{sh:1.6}),B(_e,Zl(),1.4,1.2,{rot:.4,sh:.9}),B(_e,jg(),.6,1.8,{sh:.7}),B(_e,Zl(.8),1.9,1.9,{rot:1,sh:.8}),B(_e,$i(801,.8),5.6,-1.4,{y:-.4}),B(_e,$i(802,.6),6.5,-.7,{y:-.4}),Y=B(_e,Jg(),6.2,-2.6,{y:-.6}),H=B(Se,tv(),0,.8,{rot:0,sh:1.8}),B(Se,lr(901),-2.1,-.9,{sy:1.2,sh:1.5}),B(Se,lr(902),2.2,-.6,{sy:1.2,sh:1.5});for(let Me=0;Me<9;Me++){const ue=Me/9*Math.PI*2;B(Se,$i(910+Me,.28),Math.cos(ue)*1.6,.8+Math.sin(ue)*1.15)}}for(const P of R)e.add(P.g);e.traverse(P=>{P.userData.wave&&l.push(P),P.userData.flicker&&c.push(P)});function W(P,U,Q,_e,Se,Me,ue){const be=ue||new Ft({map:P[0],alphaTest:.5,alphaToCoverage:!0,side:yt});ue||s.push({mat:be,frames:P});const dt=new si(U,Q*jl);dt.translate(0,Q*jl/2,0);const zt=new ht(dt,be);return zt.position.set(_e,Se,Me),zt.userData.sprite=!0,zt.userData.colorMap=()=>be.map,e.add(zt),r.push(zt),zt}const re=hr(Pg);for(const P of R){const U=mt(1200+P.x*7+P.z*13),Q=24,_e=12;for(let Se=0;Se<Q;Se++){const Me=Se>=_e,ue=Me?(Se-_e)/(Q-_e)*Math.PI*2+U()*.3:U()*Math.PI*2,be=Me?P.r*(.82+U()*.12):Math.sqrt(U())*P.r*.62,dt=(Me?.72:.95)+U()*.4,zt=(1-be/P.r)*(P.top*.32)+.25,St=iv(U()<.3?"#efe2c6":"#f7eedb");St.position.set(P.x+Math.cos(ue)*be,zt,P.z+Math.sin(ue)*be*.85),St.scale.set(dt,dt*.62,dt),St.userData.base=St.position.clone(),St.userData.s=dt,St.userData.k=U()*6,e.add(St),P.fog.push(St)}P.q=W(re,.9,1,P.x,P.top*.32+1.3,P.z)}const[X,ye,we,Re,le,ve,G,ne]=await Promise.all([Qn(xa,200,240,"A"),Qn(xa,200,240,"B"),Qn(ya,200,240,"A"),Qn(ya,200,240,"B"),Qn(xr,200,300,"A"),Qn(xr,200,300,"B"),Qn(yr,200,300,"A"),Qn(yr,200,300,"B")]),de=[{id:"baba",A:G,B:ne,w:1.25,h:1.9,off:[-.95,-.35]},{id:"mama",A:le,B:ve,w:1.25,h:1.9,off:[.95,-.4]},{id:"girl",A:X,B:ye,w:1.05,h:1.26,off:[-.35,.45]},{id:"boy",A:we,B:Re,w:1.05,h:1.26,off:[.55,.5]}].map(P=>(P.mat=new Ft({map:P.A[0],alphaTest:.5,alphaToCoverage:!0,side:yt}),P.mesh=W(null,P.w,P.h,0,0,0,P.mat),P.shadow=T(e,0,0,.9),P.icon=P.A[0].image,P)),Z={x:Bt[0],z:Bt[1],facing:1,walking:!1,walkT:0};function Pe(P){for(const U of de){const Q=U.id==="girl"||U.id==="boy"||P==="both"||P==="Baba"&&U.id==="baba"||P==="Mama"&&U.id==="mama";U.mesh.visible=Q,U.shadow.visible=Q}}Pe("both");const Ve=[[-7.2,.4],[-2.6,-3.3],[7.2,.1],[7.6,6.8],[-2.6,4.4]],Be=hr(P=>Sg(P)),J=hr(Rg),L=new Ft({map:Be[0],alphaTest:.5,side:yt}),k=new Ft({map:J[0],alphaTest:.5,side:yt});s.push({mat:L,frames:Be},{mat:k,frames:J});const A=[];function ae(P,U,Q,_e=8,Se=2.4){for(let Me=0;Me<_e;Me++){const ue=Me/_e*Math.PI*2+Math.random(),be=W(null,.4,.4,P,U,Q,L);A.push({m:be,vx:Math.cos(ue)*Se,vz:Math.sin(ue)*Se*.6,vy:3+Math.random()*2,g:9,t:0,life:.9})}}function j(P,U,Q,_e=6){for(let Se=0;Se<_e;Se++){const Me=W(null,.75,.6,P,U,Q,Se%2?k:L);A.push({m:Me,vx:(Math.random()-.5)*.9,vz:(Math.random()-.5)*.4,vy:1.8+Se*.25,g:0,t:-Se*.25,life:2.4})}}const fe=new ht(new Hn(.9,.5,5,16,1,!0),new Ft({color:"#fff3a6",transparent:!0,opacity:0,depthWrite:!1,side:yt,blending:Ma}));fe.userData.noInk=!0,fe.position.set(Pt[4].x,3.1,Pt[4].z+.8),fe.visible=!1,e.add(fe);function pe(P,U,Q=0){return new Promise(_e=>o.push({t:-Q,dur:P,fn:U,resolve:_e}))}const ce={yaw:0,yawT:0,zoom:1,zoomT:1,tx:0,tz:.8,ttx:0,ttz:.8,aspect:1.6,W:1,H:1,insetX:0,insetY:0,iX:0,iY:0};function Ce(){return ce.aspect>=1?Math.max(9.4,15.6/ce.aspect):Math.max(9.4,10.5/ce.aspect)}function E(P){const U=P===void 0?1:1-Math.exp(-P*3.2);ce.yaw+=(ce.yawT-ce.yaw)*(P===void 0?1:1-Math.exp(-P*6)),ce.zoom+=(ce.zoomT-ce.zoom)*U,ce.tx+=(ce.ttx-ce.tx)*U,ce.tz+=(ce.ttz-ce.tz)*U,ce.iX+=(ce.insetX-ce.iX)*U,ce.iY+=(ce.insetY-ce.iY)*U;const Q=Ce()*ce.zoom,_e=Q*ce.aspect;Object.assign(t,{left:-_e,right:_e,top:Q,bottom:-Q}),t.setViewOffset(ce.W,ce.H,ce.iX/2,ce.iY/2,ce.W,ce.H),t.updateProjectionMatrix();const Se=60,Me=Math.cos(uo);t.position.set(ce.tx+Math.sin(ce.yaw)*Me*Se,Math.sin(uo)*Se,ce.tz+Math.cos(ce.yaw)*Me*Se),t.lookAt(ce.tx,0,ce.tz)}function x(P,U){ce.aspect=P/U,ce.W=P,ce.H=U,E()}function V(P,U=.6){if(P==null){ce.ttx=0,ce.ttz=.8,ce.zoomT=1;return}const Q=Pt[P];ce.ttx=Q.x,ce.ttz=Q.z+.4,ce.zoomT=U}const ie=(P,U)=>{ce.insetX=P,ce.insetY=U},he=P=>{ce.yawT+=P*(Math.PI/4)};function se(P,U){P.revealed=U,P.g.visible=U;for(const Q of P.items)Q.m.scale.copy(Q.s);for(const Q of P.fog)Q.visible=!U,Q.position.copy(Q.userData.base),Q.scale.set(Q.userData.s,Q.userData.s*.62,Q.userData.s);P.q.visible=!U}let Ne=0;function Ae(P,{chestOpened:U=!1}={}){R.forEach((Se,Me)=>se(Se,Me<P));const[Q,_e]=P>0?Ve[P-1]:Bt;Z.x=Q,Z.z=_e,Z.walking=!1,Ne=U?1:0,Ie(),fe.visible=U,fe.material.opacity=U?.35:0}function Ie(){H.userData.lid.rotation.x=-1.95*Ne,H.userData.glow.visible=Ne>.05}function Ke(P){const[U,Q]=P<0?Bt:Ve[P],_e=Z.x,Se=Z.z,Me=Math.hypot(U-_e,Q-Se);return Me<.1?Promise.resolve():(Z.walking=!0,pe(Math.min(2.6,.5+Me/6),ue=>{const be=Ql(ue);Z.x=_e+(U-_e)*be,Z.z=Se+(Q-Se)*be,ue>=1&&(Z.walking=!1)}))}async function me(P){const U=R[P];if(U.revealed)return;V(P,P===0?.7:.62),await Ke(P),U.revealed=!0,U.q.visible=!1,ae(U.x,U.top*.6,U.z,12,3.4);const Q=Promise.all(U.fog.map(Se=>{const Me=Se.userData.base,ue=Me.x-U.x,be=Me.z-U.z,dt=Math.hypot(ue,be)||1,zt=Se.userData.s,St=dt/U.r*.35;return pe(1.1,Mn=>{const dn=Ql(Mn);Se.position.set(Me.x+ue/dt*dn*3.2,Me.y+dn*1.8,Me.z+be/dt*dn*2.4);const Sn=Math.max(.001,zt*(1+dn*.3)*(1-dn));Se.scale.set(Sn,Sn*.62,Sn),Mn>=1&&(Se.visible=!1)},St)}));U.g.visible=!0;for(const Se of U.items)Se.m.scale.setScalar(.001);const _e=Promise.all(U.items.map((Se,Me)=>pe(.5,ue=>{const be=Math.max(.001,Kl(ue));Se.m.scale.set(Se.s.x*be,Se.s.y*be,Se.s.z*be)},.3+Me*.05)));await Promise.all([Q,_e]),ae(U.x,1,U.z+1,8)}async function Ue(){const P=R[4];V(4,.5),await pe(.6,()=>{}),await pe(.9,U=>{Ne=Kl(U),Ie()}),fe.visible=!0,pe(.8,U=>{fe.material.opacity=.35*U}),ae(P.x,1.2,P.z+.8,14,3),j(P.x,1,P.z+.8,8),await pe(1.6,()=>{})}let Fe=0,$e=-1,De=0;const Ye=new N,Xe=new N;function ot(P){Fe+=P;const U=Math.max(0,Math.floor(Fe*hv))%Po;if(U!==$e){$e=U,De=U*7.31;for(const ue of s)ue.mat.map=ue.frames[U]}for(let ue=o.length-1;ue>=0;ue--){const be=o[ue];if(be.t+=P,be.t<0)continue;const dt=Math.min(1,be.t/be.dur);be.fn(dt),dt>=1&&(o.splice(ue,1),be.resolve())}Ye.set(Math.cos(ce.yaw),0,-Math.sin(ce.yaw));const Q=Z.px??Z.x,_e=Z.pz??Z.z,Se=(Z.x-Q)*Ye.x+(Z.z-_e)*Ye.z;Math.abs(Se)>.002&&(Z.facing=Math.sign(Se)),Z.px=Z.x,Z.pz=Z.z,Z.walking?Z.walkT+=P:Z.walkT=0;const Me=Z.walking&&Math.floor(Z.walkT*8)%2===1;de.forEach((ue,be)=>{const dt=ue.off[0]*Ye.x-ue.off[1]*Ye.z*0,zt=ue.off[1]+ue.off[0]*Ye.z,St=Z.x+dt,Mn=Z.z+zt,dn=Z.walking?Math.abs(Math.sin(Z.walkT*16+be))*.07:0,Sn=Z.walking?1:1+Math.sin(Fe*3+be)*.018;ue.mat.map=(Me?ue.B:ue.A)[U],ue.mesh.position.set(St,dn,Mn),ue.mesh.scale.set(Z.facing/Sn,Sn,1),ue.shadow.position.set(St,.015,Mn),ue.shadow.scale.set(ue.w*.8,1,ue.w*.4)});for(const ue of a)ue.m.rotation.z=Math.sin(Fe*1.3+ue.k)*.015;for(const ue of l)ue.rotation.y=Math.sin(Fe*4)*.25;for(const ue of c)ue.scale.set(1+Math.sin(Fe*17)*.1,1+Math.sin(Fe*13)*.18,1);for(const ue of R)if(!ue.revealed){for(const be of ue.fog)be.visible&&(be.position.y=be.userData.base.y+Math.sin(Fe*.9+be.userData.k)*.06);ue.q.position.y=ue.top*.32+1.3+Math.sin(Fe*2.2+ue.x)*.15}if(R[3].revealed){te.position.y=-.45+Math.sin(Fe*1.6)*.05,te.rotation.z=Math.sin(Fe*1.2)*.04;const ue=Fe%4/1.1;Y.visible=ue<1,ue<1&&(Y.position.y=-.6+Math.sin(ue*Math.PI)*1.3,Y.position.x=Pt[3].x+6.2+ue*1.2,Y.rotation.z=.9-ue*1.8)}fe.visible&&(fe.rotation.y=Fe*.3);for(let ue=A.length-1;ue>=0;ue--){const be=A[ue];if(be.t+=P,be.t<0){be.m.visible=!1;continue}be.m.visible=!0,be.vy-=be.g*P,be.m.position.x+=be.vx*P,be.m.position.z+=be.vz*P,be.m.position.y=Math.max(0,be.m.position.y+be.vy*P),be.m.scale.setScalar(Math.max(.001,be.g?1-be.t/be.life:Math.min(1,be.t*3)*(1-Math.max(0,be.t-be.life+.5)*2))),be.t>be.life&&(e.remove(be.m),r.splice(r.indexOf(be.m),1),A.splice(ue,1))}for(const ue of r)ue.rotation.y=ce.yaw;E(P)}const F=()=>i.render(e,t,De);function Te(P,U,Q){return Xe.set(P,U,Q).project(t),[(Xe.x+1)/2*ce.W,(1-Xe.y)/2*ce.H,Xe.z]}const K=new Rs(-1,1,1,-1,.1,300);function oe(P){const U=n.domElement.width/n.domElement.height;let Q=qi.a+1.2,_e=qi.b+1.2;Q/_e<U?Q=_e*U:_e=Q/U,Object.assign(K,{left:-Q,right:Q,top:_e,bottom:-_e}),K.updateProjectionMatrix(),K.position.set(0,100,0),K.up.set(0,0,-1),K.lookAt(0,0,0);const Se=r.map(ue=>ue.visible);for(const ue of r)ue.visible=!1;i.render(e,K,De),P.width=n.domElement.width,P.height=n.domElement.height,P.getContext("2d").drawImage(n.domElement,0,0),r.forEach((ue,be)=>{ue.visible=Se[be]}),i.render(e,t,De);const Me=(ue,be)=>{const dt=new N(ue,0,be).project(K);return[(dt.x+1)*50,(1-dt.y)*50]};return{regions:Pt.map(ue=>Me(ue.x,ue.z)),family:Me(Z.x,Z.z),camp:Me(...Bt)}}return E(),{scene:e,camera:t,update:ot,render:F,resize:x,focus:V,setInset:ie,rotate:he,reveal:me,openChest:Ue,walkTo:Ke,setProgress:Ae,setFamily:Pe,project:Te,snapshotMap:oe,regions:R,family:Z,familyIcons:Object.fromEntries(de.map(P=>[P.id,P.icon])),busy:()=>o.length>0}}const Mi=[{id:"surah",title:"Surah Hunt",emoji:"📜",colour:"#f5cf5f",sub:"Five short surahs near the end of the mushaf",intro:"An old treasure map was found tucked inside a book on our shelf! Its five clues point to five short surahs near the end of the Qur'an, in Juz 30. Get your mushaf (or the Al Quran app) and find them together.",finale:"You found five surahs. The treasure is not gold: it is what you now know and carry in your hearts.",reflect:["Which surah was your favourite, and why?","Which of these surahs can we recite together from memory?"],clues:[{title:"The Giant Animal",riddle:`High on Mystery Mountain, a note is pinned to a rock: "I am a surah named after the biggest animal on land. A huge army brought it to attack the Ka'bah, but Allah protected His House."`,think:"Before you search, guess: what is the biggest animal on land?",find:"Find the surah named after this giant animal. It is one of the short surahs near the end of the mushaf (Juz 30).",parentTip:"Read the clue aloud slowly. Let {C} turn the pages. The last pages of the mushaf hold the short surahs.",discuss:'Ask {C}: "What did you find? Read me the name at the top of the surah." Point at the surah heading together.',asks:[{type:"surah",prompt:"Which surah did you find?",answer:105,hints:[`The surah's name means "The Elephant". Look in the last few pages of the mushaf.`,"It is Surah Al-Fil (الفيل), number 105, in Juz 30. It comes just before Surah Quraysh (106)."]},{type:"choice",prompt:'The surah is called Al-Fil. What does "Fil" mean?',options:["Elephant 🐘","Fish 🐟","Bird 🐦","Camel 🐪"],answer:0,hints:["Think of the riddle: the biggest animal on land.",'"Al-Fil" means "The Elephant".']},{type:"number",prompt:"Count the ayat of Surah Al-Fil together. How many are there?",answer:5,hints:["Each ayah ends with a small round number marker. Count the markers.","Surah Al-Fil has 5 ayat."]}],learn:{name:"Surah Al-Fil · 105",arabic:{text:"أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَٰبِ ٱلْفِيلِ",ref:"Al-Fil 105:1",meaning:'"Have you not seen how your Lord dealt with the companions of the elephant?"'},meaning:'Al-Fil means "The Elephant". It is Surah 105 and has 5 ayat.',story:"Shortly before the Prophet Muhammad ﷺ was born, a ruler named Abraha (his name comes from the history books, not the Qur'an) marched on Makkah with a great army and elephants to destroy the Ka'bah. Allah sent birds in flocks (ṭayran abābīl) that struck the army with stones of baked clay, and He made them like eaten straw (105:3–5). Historians call that year the Year of the Elephant, and most say the Prophet ﷺ was born in it.",why:"No army is too big for Allah. He protected His House with small birds. When we feel small, we remember that Allah is the One who protects."},talk:["Why do you think Allah used small birds against a giant army?","When have you felt small or scared? Who can we ask for help?"],apply:"Tonight before sleeping, ask Allah in your own words to protect your family.",fact:{icon:"🐘",text:"Al-Fil (105): Allah protected the Ka'bah from an army with elephants, using flocks of birds."}},{title:"The Travellers",riddle:'At the Oasis, travellers left a message by the well: "Turn one page on from the elephant. There you will meet a tribe whose caravans travelled in winter and in summer."',think:"Guess: why might people go on long journeys in winter and in summer?",find:"Find the surah that comes right after Al-Fil. It is named after a famous tribe of Makkah.",parentTip:"Keep your finger on Al-Fil and let {C} find what comes next.",discuss:'Ask {C}: "Is this surah long or short? Which words can you spot?" Read ayah 2 together, the one about winter and summer.',asks:[{type:"surah",prompt:"Which surah did you find?",answer:106,hints:["It is the very next surah after Al-Fil (105).","It is Surah Quraysh (قريش), number 106."]},{type:"choice",prompt:"Which two seasons does this surah mention?",options:["Winter and summer ❄️☀️","Spring and autumn 🌸🍂","Rainy and dry 🌧️🌵"],answer:0,hints:["Look at ayah 2.","Ayah 2 mentions the journeys of winter and summer."]}],learn:{name:"Surah Quraysh · 106",arabic:{text:"لِإِيلَٰفِ قُرَيْشٍ",ref:"Quraysh 106:1",meaning:'"For the accustomed security of the Quraysh."'},meaning:"Quraysh was the tribe of Makkah and the tribe of the Prophet Muhammad ﷺ. Surah 106 has 4 ayat.",story:'Quraysh were traders whose caravans travelled in winter and in summer (106:2). Many scholars of tafsir explain that the winter journey went south towards Yemen and the summer journey went north towards Sham (Syria). Allah tells them to worship the Lord of this House, "who has fed them against hunger and made them safe from fear" (106:3–4).',why:"Food and safety are gifts from Allah. We thank Him by worshipping Him."},talk:["What food did Allah give us today? Let's name three things!","What makes you feel safe at home?"],apply:'At your next meal, say "Bismillah" before and "Alhamdulillah" after, and name one thing you are thankful for.',fact:{icon:"🐪",text:"Quraysh (106): Allah fed Quraysh against hunger and kept them safe from fear."}},{title:"The Surah of Time",riddle:'Carved on a broken column in the Ancient City: "By time! Every person is in loss, except for some. Find the surah that swears by time."',think:'Guess: what does it mean to "lose" time?',find:"Find the surah named after time. It has only 3 ayat and is in Juz 30.",parentTip:"This surah is often recited in salah. {C} may know it already! Ask before you search.",discuss:'Ask {C}: "Can you read ayah 3 with me? Who is NOT in loss?" Count the four things on your fingers.',asks:[{type:"surah",prompt:"Which surah did you find?",answer:103,hints:["Its name is also the name of the afternoon prayer.","It is Surah Al-'Asr (العصر), number 103, two surahs before Al-Fil."]},{type:"choice",prompt:"Read ayah 3. Who is NOT in loss?",options:["Those who believe, do good, and remind each other of truth and patience","Those who have the most toys","Those who never make any mistakes"],answer:0,hints:['Ayah 3 begins with "except those who…".',"Those who believe, do righteous deeds, and advise each other to truth and to patience."]}],learn:{name:"Surah Al-'Asr · 103",arabic:{text:"وَٱلْعَصْرِ",ref:"Al-'Asr 103:1",meaning:'"By time!"'},meaning:`Al-'Asr means "Time". It is also the name of the afternoon prayer. Surah 103 has just 3 ayat.`,story:"Allah swears by time, then says every human being is in loss, except those who (1) believe, (2) do righteous deeds, (3) advise each other to the truth and (4) advise each other to patience. Imam ash-Shafi'i is reported to have said that if people reflected on this surah alone, it would be enough for them.",why:"Time is like treasure that slips through our fingers. We make it count by believing, doing good and helping each other stay on the right path."},talk:["What is one good thing we did with our time today?","How can we remind each other to be patient, in a kind way?"],apply:'This week, pick a "reminder buddy" in the family and gently remind each other of one good habit.',fact:{icon:"⏳",text:"Al-'Asr (103): people are in loss, except those who believe, do good, and advise each other to truth and patience."}},{title:"The River of Abundance",riddle:`A bottle washed up by the Sea. The note inside says: "Find the shortest surah in the Qur'an. Its name means abundance, and it is also the name of a river in Jannah."`,think:"Guess: what might a river in Jannah be like?",find:`Find the shortest surah in the Qur'an: 3 short ayat, and its name means "abundance".`,parentTip:"Several surahs have 3 ayat, but this one has the fewest words. It sits between Al-Ma'un and Al-Kafirun.",discuss:'Ask {C}: "Read ayah 2 with me. What two things does Allah tell the Prophet ﷺ to do?"',asks:[{type:"surah",prompt:"Which surah did you find?",answer:108,hints:["It is only a line or two long, near the end of the mushaf.","It is Surah Al-Kawthar (الكوثر), number 108."]},{type:"choice",prompt:"In ayah 2, what does Allah tell the Prophet ﷺ to do?",options:["Pray, and offer a sacrifice","Sleep, and eat","Run, and swim"],answer:0,hints:['Ayah 2: "fa-ṣalli li-rabbika wanḥar".',"Pray to your Lord, and sacrifice."]}],learn:{name:"Surah Al-Kawthar · 108",arabic:{text:"إِنَّآ أَعْطَيْنَٰكَ ٱلْكَوْثَرَ",ref:"Al-Kawthar 108:1",meaning:'"Indeed, We have granted you al-Kawthar."'},meaning:`Al-Kawthar means "abundance": lots and lots of good. Surah 108 is the shortest surah in the Qur'an.`,story:"In a hadith in Sahih Muslim, the Prophet ﷺ explained that al-Kawthar is a river that his Lord promised him, full of goodness. When people mocked the Prophet ﷺ, Allah comforted him: it is his enemy who is cut off from good (108:3).",why:"Allah gives more than we can count. We say thank you by praying and by giving for His sake."},talk:["If you could describe a river in Jannah, what would it look like?",'What is one big blessing, one "abundance", in our family?'],apply:"Give something this week (a toy, some food, or your time) to thank Allah for His blessings.",fact:{icon:"🌊",text:"Al-Kawthar (108): the shortest surah. Al-Kawthar is a river promised to the Prophet ﷺ."}},{title:"The Heart of the Treasure",riddle:`At Treasure Hill, the last clue is written in gold: "I am a short surah that tells you who Allah is. The Prophet ﷺ said I am equal to a third of the Qur'an."`,think:"Guess: which surah do you think it is? You might already know it by heart!",find:"Find the surah of sincerity: 4 ayat that describe Allah. It is very near the end of the mushaf.",parentTip:"Most children know this surah by heart. Let {C} recite it before you open the page.",discuss:'Recite the surah together, then ask {C}: "What does this surah tell us about Allah?"',asks:[{type:"surah",prompt:"Which surah did you find?",answer:112,hints:['It begins with "Qul huwa Allahu ahad".',"It is Surah Al-Ikhlas (الإخلاص), number 112, three surahs from the end."]},{type:"choice",prompt:'Ayah 1 says "Qul huwa Allahu Ahad". What does "Ahad" mean?',options:["One, the only One","Big","Old","Far away"],answer:0,hints:["It is the first number.",'"Ahad" means One.']}],learn:{name:"Surah Al-Ikhlas · 112",arabic:{text:"قُلْ هُوَ ٱللَّهُ أَحَدٌ",ref:"Al-Ikhlas 112:1",meaning:'"Say: He is Allah, [who is] One."'},meaning:'Al-Ikhlas means "sincerity", or pure faith. Surah 112 has 4 ayat.',story:"It teaches that Allah is One. Allah is As-Samad, the One everything depends on while He needs no one. He has no children and was not born, and nothing is like Him. The Prophet ﷺ said this surah is equal to a third of the Qur'an (Sahih al-Bukhari).",why:"Knowing who Allah is, is the greatest treasure of all. That is why it is one of the first surahs we learn."},talk:["What does it mean that nothing is like Allah?","Shall we recite Al-Ikhlas together right now?"],apply:"The Prophet ﷺ used to recite Al-Ikhlas, Al-Falaq and An-Nas before sleeping (Sahih al-Bukhari). Try it together tonight.",fact:{icon:"💎",text:"Al-Ikhlas (112): Allah is One and nothing is like Him. It is equal to a third of the Qur'an."}}]},{id:"prophets",title:"Prophet Hunt",emoji:"🌟",colour:"#8fc7e8",sub:"Yunus, Ibrahim, Yusuf and Nuh عليهم السلام",intro:`This map follows the stories of prophets in the Qur'an. We never draw prophets: we meet them only through Allah's words. When you hear a prophet's name, say "عليه السلام", "peace be upon him".`,finale:"Every prophet trusted Allah: in the dark, in the fire, in the well and on the Ark. That trust is the treasure.",reflect:["Which prophet's story touched you most tonight?","Which dua or lesson will we use this week?"],clues:[{title:"Named After a Prophet",riddle:'A carving on Mystery Mountain says: "Find the surah named after the prophet who was swallowed by a big fish. It begins in Juz 11."',think:"Guess: which prophet was swallowed by a big fish?",find:"Find the surah named after this prophet. It begins in Juz 11, in the first half of the mushaf.",parentTip:"This is a long surah, so the juz marks help. Show {C} how the juz number is printed at the top of the page or in the margin.",discuss:'Ask {C}: "What do you already know about Yunus عليه السلام?" Then go to ayah 98 together.',asks:[{type:"surah",prompt:"Which surah did you find?",answer:10,hints:["The surah has the same name as the prophet: Yunus.","It is Surah Yunus (يونس), number 10. It begins in Juz 11."]},{type:"choice",prompt:"Go to ayah 98 of Surah Yunus. What happened when the people of Yunus believed?",options:["Allah removed the punishment from them","They sailed away on a ship","They built a tall tower"],answer:0,hints:['Ayah 98 mentions "the people of Yunus". Read what happened "when they believed".',"When they believed, Allah removed the punishment of disgrace from them."]}],learn:{name:"Surah Yunus · 10",meaning:'Surah Yunus is Surah 10 with 109 ayat. Yunus عليه السلام is also called Dhun-Nun, "the one of the fish" (Al-Anbiya 21:87).',story:"Yunus عليه السلام was sent to call his people to Allah. Ayah 98 tells us something special: when his people believed, Allah removed the punishment of disgrace from them and let them enjoy life for a time. The Qur'an singles them out as a whole town whose belief benefited them.",why:"It is never too late to turn back to Allah. When people sincerely turn to Him, He is Most Merciful."},talk:["Why do you think Allah forgave the whole town?","Is there something we would like to say sorry to Allah for?"],apply:`Say "Astaghfirullah" (I ask Allah's forgiveness) three times together tonight.`,fact:{icon:"🐟",text:"Yunus (Surah 10): when the people of Yunus عليه السلام believed, Allah removed the punishment from them (10:98)."}},{title:"The Prayer in the Darkness",riddle:'Beside the Oasis pool, a scroll says: "In the darkness, inside the fish, a prophet called out to Allah. Find his words in Surah 21, ayah 87."',think:"Guess: if you were in the dark and needed help, what would you say to Allah?",find:'Find Surah 21. Its name means "The Prophets". Then find ayah 87.',parentTip:"Surah 21 begins Juz 17. When you reach ayah 87, read the dua slowly in Arabic and let {C} repeat each part.",discuss:'Read ayah 87 together, then ask {C}: "Why do you think he said sorry to Allah, right there in the dark?"',asks:[{type:"surah",prompt:"Which surah is number 21?",answer:21,hints:['Its name means "The Prophets". It begins Juz 17.',"It is Surah Al-Anbiya' (الأنبياء), number 21."]},{type:"choice",prompt:'His dua begins "Lā ilāha illā anta". What does that mean?',options:["There is no god except You","Allah is the Greatest","Thank you, Allah"],answer:0,hints:['"Lā ilāha" means "there is no god". "Anta" means "You".','It means "There is no god except You".']},{type:"choice",prompt:"Now read ayah 88. What did Allah do?",options:["He answered him and saved him from distress","He sent him a boat","He made the sea dry"],answer:0,hints:['Ayah 88 begins "So We responded to him…".','Allah answered him and saved him from the distress. "And thus do We save the believers."']}],learn:{name:"The dua of Yunus عليه السلام · Al-Anbiya 21:87",arabic:{text:"لَّآ إِلَٰهَ إِلَّآ أَنتَ سُبْحَٰنَكَ إِنِّى كُنتُ مِنَ ٱلظَّٰلِمِينَ",ref:"Al-Anbiya 21:87",translit:"Lā ilāha illā anta, subḥānaka, innī kuntu mina ẓ-ẓālimīn",meaning:'"There is no god except You. Glory be to You! Indeed, I have been of the wrongdoers."'},meaning:'The dua has three parts. (1) "There is no god except You": only Allah can help. (2) "Subḥānaka": You are perfect and far above any fault. (3) "I have been of the wrongdoers": I admit my mistake.',story:'Why he said it: Yunus عليه السلام left his people in anger (21:87). He boarded a laden ship, lots were drawn, and he was cast into the sea, where a great fish swallowed him (37:140–142). "Within the darknesses" he called out this dua (21:87). What happened next: Allah answered him and saved him from distress (21:88). He was cast onto open land, unwell, and Allah made a gourd plant grow over him (37:145–146). Then he was sent to a hundred thousand people or more, and they believed (37:147–148).',why:'When Muslims use it: when they feel worried, stuck or sad, or after a mistake. The Prophet Muhammad ﷺ said that no Muslim makes this dua of Dhun-Nun for anything without Allah answering him (reported by at-Tirmidhi). Allah says: "And thus do We save the believers" (21:88).'},talk:['Have you ever felt "in the dark", stuck or sad? What helped?',"Yunus عليه السلام admitted his mistake. Why is saying sorry brave?","Let's learn the dua: repeat after {P}, one part at a time."],apply:"Learn the dua this week. Say it together whenever someone in the family feels worried.",fact:{icon:"🕯️",text:'The dua of Yunus عليه السلام (21:87): "Lā ilāha illā anta, subḥānaka, innī kuntu mina ẓ-ẓālimīn". Say it in times of distress.'}},{title:"The Fire That Stayed Cool",riddle:`Written over the Ancient City gate: "Find the surah named after the prophet whose people threw him into a fire, and Allah kept him safe. He and his son raised the Ka'bah."`,think:"Guess: can fire ever stop burning?",find:"Find the surah named after this prophet. It begins in Juz 13.",parentTip:"After finding the surah, the second question sends you back to Surah 21, ayah 69, near the dua you found before.",discuss:'Ask {C}: "What do you know about Ibrahim عليه السلام? Why were his people angry with him?"',asks:[{type:"surah",prompt:"Which surah did you find?",answer:14,hints:["The surah has the same name as the prophet: Ibrahim.","It is Surah Ibrahim (إبراهيم), number 14, in Juz 13."]},{type:"choice",prompt:"Now open Surah Al-Anbiya, ayah 69. What did Allah tell the fire to be?",options:["Coolness and safety","Hotter and bigger","Blue and green"],answer:0,hints:['Look for "Yā nāru", which means "O fire".','Allah said: "O fire, be coolness and safety upon Ibrahim."']}],learn:{name:"Surah Ibrahim · 14",arabic:{text:"قُلْنَا يَٰنَارُ كُونِى بَرْدًا وَسَلَٰمًا عَلَىٰٓ إِبْرَٰهِيمَ",ref:"Al-Anbiya 21:69",meaning:'"We said: O fire, be coolness and safety upon Ibrahim."'},meaning:"Surah Ibrahim is Surah 14 with 52 ayat. Allah took Ibrahim عليه السلام as a close friend, khalīl (An-Nisa 4:125).",story:"Ibrahim عليه السلام called his people to worship Allah alone, not idols. They threw him into a fire, but Allah commanded the fire to be cool and safe for him (21:68–70). Later, he and his son Isma'il عليهما السلام raised the foundations of the Ka'bah (Al-Baqarah 2:127).",why:"Fire burns only because Allah lets it. Everything obeys Allah, and Allah looks after those who trust Him."},talk:["What did Ibrahim عليه السلام do that took courage?","What does it mean to trust Allah?"],apply:`When something feels scary, say together: "Ḥasbunallāhu wa ni'mal-wakīl", "Allah is enough for us, and He is the best to rely on" (Aal-'Imran 3:173).`,fact:{icon:"🔥",text:'Ibrahim عليه السلام (Surah 14): Allah told the fire, "Be coolness and safety" (21:69).'}},{title:"The Best of Stories",riddle:'A message in a bottle at the Sea: "Find the surah Allah calls the best of stories. It is about a prophet whose brothers threw him into a well, and who later forgave them."',think:"Guess: how would you feel if your brothers or sisters were unkind to you?",find:"Find the surah named after this prophet. It is two surahs after Yunus.",parentTip:"The number question needs careful reading of ayah 4. Let {C} point to the number word in the translation.",discuss:'Ask {C}: "What did Yusuf عليه السلام dream about? Who did he tell?"',asks:[{type:"surah",prompt:"Which surah did you find?",answer:12,hints:["Yunus is 10. Count two surahs on.","It is Surah Yusuf (يوسف), number 12."]},{type:"number",prompt:"In ayah 4, Yusuf عليه السلام tells his father a dream. How many stars did he see?",answer:11,hints:["He saw stars, the sun and the moon. Count only the stars.","He saw eleven stars (12:4)."]}],learn:{name:"Surah Yusuf · 12",arabic:{text:"لَا تَثْرِيبَ عَلَيْكُمُ ٱلْيَوْمَ",ref:"Yusuf 12:92",meaning:'"No blame will there be upon you today."'},meaning:'Surah Yusuf is Surah 12 with 111 ayat. Allah says: "We relate to you the best of stories" (12:3).',story:"As a boy, Yusuf عليه السلام dreamed of eleven stars, the sun and the moon bowing to him (12:4). His jealous brothers threw him into a well. He was sold, tested and put in prison, but he stayed patient and truthful, and Allah raised him to a high position in Egypt. When his brothers finally came to him, he forgave them (12:92).",why:`Patience and forgiveness win in the end. His father Ya'qub عليه السلام said: "So patience is most fitting", ṣabrun jamīl (12:18).`},talk:["How do you think Yusuf عليه السلام felt in the well?","Is it easy to forgive? Who can we forgive this week?"],apply:'If someone in the family upsets you this week, try saying "No blame on you today", like Yusuf عليه السلام.',fact:{icon:"⭐",text:'Yusuf عليه السلام (Surah 12): he forgave his brothers: "No blame will there be upon you today" (12:92).'}},{title:"The Ark Builder",riddle:'The golden clue on Treasure Hill: "Find the surah named after the prophet who built the Ark and called his people to Allah for 950 years."',think:"Guess: which prophet built a huge boat called the Ark?",find:"Find the surah named after the prophet of the Ark. It is in Juz 29.",parentTip:"Juz 29 begins with Surah Al-Mulk (67). From there, count forward.",discuss:'Read ayat 10–12 together and ask {C}: "What good things come when we ask Allah for forgiveness?"',asks:[{type:"surah",prompt:"Which surah did you find?",answer:71,hints:["The surah has the same name as the prophet: Nuh.","It is Surah Nuh (نوح), number 71, in Juz 29."]},{type:"choice",prompt:"In ayah 10, what did he tell his people to ask Allah for?",options:["Forgiveness","Gold","A bigger boat"],answer:0,hints:['Ayah 10 begins "Istaghfirū rabbakum…".','He told them: "Ask forgiveness of your Lord."']}],learn:{name:"Surah Nuh · 71",arabic:{text:"ٱسْتَغْفِرُوا۟ رَبَّكُمْ إِنَّهُۥ كَانَ غَفَّارًا",ref:"Nuh 71:10",meaning:'"Ask forgiveness of your Lord. Indeed, He is ever a Perpetual Forgiver."'},meaning:"Surah Nuh is Surah 71 with 28 ayat.",story:`Nuh عليه السلام called his people night and day (71:5). He stayed among them "a thousand years minus fifty", which is 950 years (Al-'Ankabut 29:14). He told them that if they asked forgiveness, Allah would send rain and give them wealth, children, gardens and rivers (71:10–12). Most refused, and Allah saved Nuh and those with him in the Ark (29:15).`,why:"Istighfār (asking forgiveness) brings blessings. And Nuh عليه السلام shows us patience: he never gave up."},talk:["950 years! What does being patient mean to you?","Which blessings did Nuh عليه السلام say come with istighfār?"],apply:'Make "Astaghfirullah" part of your bedtime routine this week.',fact:{icon:"🚢",text:'Nuh عليه السلام (Surah 71): "Ask forgiveness of your Lord. He is ever Forgiving" (71:10).'}}]},{id:"arabic",title:"Arabic Hunt",emoji:"ر",colour:"#f2a6b5",sub:"Hunt the word رَحْمَة (mercy)",intro:"This map hunts for one Arabic word: رَحْمَة, raḥmah, which means mercy. It grows from three root letters: ر ح م (r, ḥ, m). Find it hiding in the Qur'an!",finale:"You found raḥmah again and again: ٱلرَّحْمَٰنِ · رَحْمَةً · رَحْمَتِى · رَحْمَةِ. Allah's mercy runs through the whole Qur'an.",reflect:["Where did we see mercy today, at home or outside?","How can our family be a little more merciful this week?"],clues:[{title:"The First Page",riddle:'On top of Mystery Mountain: "Open the very first surah. In its first ayah, find the names of Allah that grow from the letters ر ح م."',think:'Guess: which names of Allah might mean "merciful"?',find:"Open the first surah of the Qur'an and look closely at ayah 1.",parentTip:"Show {C} the three letters ر ح م written on paper. Then hunt for them in the ayah, letter by letter.",discuss:'Point to each word of ayah 1 together. Ask {C}: "Which words have ر, then ح, then م?"',asks:[{type:"surah",prompt:"Which is the very first surah?",answer:1,hints:["It is on the very first page, and we recite it in every rak'ah.","It is Surah Al-Fatihah (الفاتحة), number 1."]},{type:"choice",arabic:!0,prompt:"Which words in ayah 1 are built from ر ح م?",options:["ٱلرَّحْمَٰنِ  and  ٱلرَّحِيمِ","بِسْمِ  only","none of them"],answer:0,hints:["Look at the last two words of the ayah.","Ar-Raḥmān and Ar-Raḥīm both contain ر ح م."]}],learn:{name:"Bismillah · Al-Fatihah 1:1",arabic:{text:"بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",ref:"Al-Fatihah 1:1",translit:"Bismillāhi r-Raḥmāni r-Raḥīm",meaning:'"In the name of Allah, the Entirely Merciful, the Especially Merciful."'},meaning:"Ar-Raḥmān and Ar-Raḥīm are two names of Allah. Both come from raḥmah, mercy.",story:"Many scholars explain that Ar-Raḥmān points to Allah's vast mercy that covers all of creation, and Ar-Raḥīm to His special mercy for the believers. We say Bismillah before eating, reading and starting good things, so each time we say it, we remember Allah's mercy twice!",why:"Right at the start, the Qur'an teaches us that Allah is merciful."},talk:["When did you feel Allah's mercy today?","What things do we start with Bismillah?"],apply:"Say Bismillah out loud before three things tomorrow.",fact:{icon:"ر",text:"Bismillah (1:1): Ar-Raḥmān and Ar-Raḥīm both come from raḥmah, mercy."}},{title:"The Missing Bismillah",riddle:'A puzzle at the Oasis: "113 surahs begin with Bismillah. Only ONE does not. Which one?"',think:"Guess: is it near the beginning, the middle or the end of the Qur'an?",find:"Look at the beginnings of the surahs. Find the one surah that starts without Bismillah. (It begins in Juz 10.)",parentTip:"In a mushaf, Bismillah is printed above each surah title. Page through Juz 10 together looking for the heading with no Bismillah.",discuss:`Ask {C}: "Why do you think we say Allah's name before we start things?"`,asks:[{type:"surah",prompt:"Which surah has no Bismillah at its start?",answer:9,hints:["It comes straight after Surah Al-Anfal (8).","It is Surah At-Tawbah (التوبة), number 9."]},{type:"choice",prompt:"One surah has Bismillah twice: at its start, and in ayah 30, inside a letter from Sulayman عليه السلام. Which surah? (Hint: it's named after a tiny insect.)",options:["An-Naml, The Ant (27)","Al-Baqarah, The Cow (2)","Al-Fil, The Elephant (105)"],answer:0,hints:["The tiny insect is the ant.","It is Surah An-Naml (27). Ayah 30 contains Bismillah."]}],learn:{name:"Surah At-Tawbah · 9 and Surah An-Naml · 27",meaning:'Surah At-Tawbah (9), "The Repentance", is the only surah that does not begin with Bismillah. Surah An-Naml (27) has Bismillah twice: at its start and in ayah 30, in the letter of Sulayman عليه السلام to the Queen of Sheba (27:29–31). So Bismillah still appears 114 times.',story:"Scholars give reasons for the missing Bismillah. One is that At-Tawbah opens with a stern declaration to those who broke their treaties. Another is that it is closely connected to the surah before it, Al-Anfal.",why:"The Qur'an has been preserved exactly as it was revealed, down to details like this."},talk:["Why do you think we start good things with Allah's name?","What was the letter of Sulayman عليه السلام about? Read 27:29–31 together."],apply:"Before your next homework or drawing, say Bismillah together.",fact:{icon:"📜",text:"At-Tawbah (9) is the only surah without Bismillah at its start. An-Naml (27) has it twice."}},{title:"A Mercy to the Worlds",riddle:'On the Ancient City wall, one word is carved: رَحْمَة. Beneath it: "Find me in Surah Al-Anbiya, ayah 107. I describe the Prophet Muhammad ﷺ."',think:'Guess: who might be called "a mercy"?',find:"Find Surah Al-Anbiya (21), ayah 107. Look for the word رَحْمَةً.",parentTip:"In the mushaf the word ends with a double fatha: رَحْمَةً (raḥmatan). Let {C} match the shape with a finger.",discuss:'Put your finger on رَحْمَةً together. Ask {C}: "Can you read the word after it with me?"',asks:[{type:"surah",prompt:"Which surah is Al-Anbiya?",answer:21,hints:['Its name means "The Prophets".',"Al-Anbiya' is Surah 21."]},{type:"choice",arabic:!0,prompt:"Point to رَحْمَةً in ayah 107. Which word comes right after it?",options:["لِّلْعَٰلَمِينَ","إِلَّآ","أَرْسَلْنَٰكَ"],answer:0,hints:["It is the very last word of the ayah.",'لِّلْعَٰلَمِينَ (lil-ʿālamīn), "to the worlds".']},{type:"choice",prompt:"So the Prophet ﷺ was sent as a mercy to…?",options:["All the worlds, all of creation","Only his family","Only the people of Makkah"],answer:0,hints:['"Al-ʿālamīn" means the worlds.',"He ﷺ was sent as a mercy to the worlds."]}],learn:{name:"Al-Anbiya 21:107",arabic:{text:"وَمَآ أَرْسَلْنَٰكَ إِلَّا رَحْمَةً لِّلْعَٰلَمِينَ",ref:"Al-Anbiya 21:107",translit:"Wa mā arsalnāka illā raḥmatan lil-ʿālamīn",meaning:'"And We have not sent you (O Muhammad) except as a mercy to the worlds."'},meaning:"Raḥmah means mercy: kindness, care and gentleness. The Prophet ﷺ was sent as a mercy for people, animals and all creation.",story:'The Prophet ﷺ was gentle with children, kind to animals and forgiving to people who hurt him. He ﷺ said: "Those who are merciful, the Most Merciful will have mercy on them. Be merciful to those on the earth, and the One above the heavens will have mercy on you." (Abu Dawud and at-Tirmidhi)',why:"Following the Prophet ﷺ means being merciful too."},talk:["How was the Prophet ﷺ a mercy to children and animals?","How can each of us show raḥmah tomorrow?"],apply:'Do one "raḥmah deed" tomorrow: help, share, or be gentle with someone (or with an animal).',fact:{icon:"🌍",text:"Al-Anbiya 21:107: the Prophet ﷺ was sent as raḥmatan lil-ʿālamīn, a mercy to the worlds."}},{title:"Mercy Bigger Than the Sea",riddle:`The waves by the Sea whisper: "Allah's mercy is bigger than the ocean. Find Surah Al-A'raf, ayah 156. What does His mercy cover?"`,think:"Guess: what is the biggest thing you can think of?",find:`Find Surah Al-A'raf ("The Heights") with the surah list helper, then find ayah 156.`,parentTip:"Al-A'raf begins in Juz 8, and ayah 156 is in Juz 9. Look for وَرَحْمَتِى in the middle of the ayah.",discuss:'Ask {C}: "Can you find رَحْمَتِى? It is our word with a little extra at the end. It means MY mercy."',asks:[{type:"surah",prompt:"Which surah is Al-A'raf?",answer:7,hints:["It is one of the long surahs near the start of the mushaf, just after Al-An'am.","Al-A'raf is Surah 7."]},{type:"choice",prompt:'In ayah 156, Allah says: "My mercy encompasses…"',options:["All things","Only the sea","Only the mountains"],answer:0,hints:[`Find the words كُلَّ شَىْءٍ (kulla shay'), "every thing".`,'"My mercy encompasses all things."']}],learn:{name:"Al-A'raf 7:156",arabic:{text:"وَرَحْمَتِى وَسِعَتْ كُلَّ شَىْءٍ",ref:"Al-A'raf 7:156",meaning:'"…and My mercy encompasses all things."'},meaning:`Al-A'raf is Surah 7 with 206 ayat. رَحْمَتِى (raḥmatī) means "My mercy": our word رحمة with "my" added.`,story:"The Prophet ﷺ said that Allah made mercy in a hundred parts. He sent one part down to the earth, and because of that one part, creatures are merciful to each other, so that even a horse lifts its hoof away from its young, afraid of hurting it. Allah kept ninety-nine parts with Himself. (Sahih al-Bukhari and Sahih Muslim)",why:"If one part of mercy fills the world with love, imagine the ninety-nine parts with Allah! We never give up hope."},talk:["Where do we see mercy in animals?","How do parents show mercy to their children?"],apply:"Look for mercy in nature this week (a bird feeding its chicks, a cat with its kittens) and tell each other.",fact:{icon:"🐎",text:`Al-A'raf 7:156: "My mercy encompasses all things." Allah kept 99 parts of mercy with Him.`}},{title:"Never Lose Hope",riddle:`The golden clue on Treasure Hill: "Find Surah Az-Zumar, ayah 53. It tells us the one thing we must never do about Allah's mercy."`,think:"Guess: what should we never, ever do?",find:'Find Surah Az-Zumar ("The Groups"). It begins in Juz 23, and ayah 53 is in Juz 24.',parentTip:'Look for رَّحْمَةِ ٱللَّهِ (raḥmatillāh), "the mercy of Allah". It is our word again!',discuss:'Read the translation of ayah 53 slowly to {C}. Ask: "How does this ayah make you feel?"',asks:[{type:"surah",prompt:"Which surah is Az-Zumar?",answer:39,hints:["It comes a little after Ya-Sin (36).","Az-Zumar is Surah 39."]},{type:"choice",prompt:"What does ayah 53 tell us never to do?",options:["Never lose hope in Allah's mercy","Never eat sweets","Never ask questions"],answer:0,hints:['Look for "lā taqnaṭū", "do not despair".','"Do not despair of the mercy of Allah."']}],learn:{name:"Az-Zumar 39:53",arabic:{text:"لَا تَقْنَطُوا۟ مِن رَّحْمَةِ ٱللَّهِ",ref:"Az-Zumar 39:53",meaning:'"Do not despair of the mercy of Allah."'},meaning:'Az-Zumar is Surah 39 with 75 ayat. Here we meet رَحْمَةِ ٱللَّهِ, raḥmatillāh, "the mercy of Allah".',story:'Allah calls: "O My servants who have wronged themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, He is the Forgiving, the Merciful." The next ayah tells us to turn back to Him (39:54). Whatever mistake we make, we can always turn back to Allah.',why:"This is one of the most hopeful ayat in the Qur'an. Allah's door is always open."},talk:["How does it feel to know Allah forgives when we turn back to Him?","In our family, how can we forgive each other like that?"],apply:'Make a family "fresh start" promise: when someone says sorry, we forgive quickly.',fact:{icon:"💛",text:'Az-Zumar 39:53: "Do not despair of the mercy of Allah." He forgives those who turn back to Him.'}}]},{id:"animals",title:"Animal Hunt",emoji:"🐝",colour:"#b4de94",sub:"The ant, the bee, the cow, the spider and the camel",intro:"Five creatures are hiding in the Qur'an: some have whole surahs named after them! Each one has a lesson for us. Find them together.",finale:"From the tiny ant to the tall camel, every creature points to its Creator. SubḥānAllāh!",reflect:["Which creature's lesson was your favourite?","Which animal will you look at differently now?"],clues:[{title:"The Talking Ant",riddle:'An ant trail leads up Mystery Mountain: "Find the surah named after a tiny insect who warned her friends to hurry home before an army marched by."',think:"Guess: which tiny insect lives in big groups underground?",find:"Find the surah named after the ant. It begins in Juz 19.",parentTip:`The ant's words are in ayah 18. Read it in a small "ant voice" together!`,discuss:'Ask {C}: "What did the ant do? Was she brave?"',asks:[{type:"surah",prompt:"Which surah did you find?",answer:27,hints:['"An-Naml" means "The Ant". It begins in Juz 19.',"It is Surah An-Naml (النمل), number 27."]},{type:"choice",prompt:"Read ayah 18. What did the ant tell the other ants?",options:["Enter your homes so you are not crushed","Climb the tallest tree","Hide all the food"],answer:0,hints:['She said "udkhulū", which means "enter".','She said: "O ants, enter your dwellings so you are not crushed."']}],learn:{name:"Surah An-Naml · 27",arabic:{text:"يَٰٓأَيُّهَا ٱلنَّمْلُ ٱدْخُلُوا۟ مَسَٰكِنَكُمْ",ref:"An-Naml 27:18",meaning:'"O ants, enter your dwellings…"'},meaning:'An-Naml means "The Ant". Surah 27 has 93 ayat.',story:"Sulayman عليه السلام and his army came to the valley of the ants. One ant called out to warn the others to go into their homes, so they would not be crushed without the army noticing. Sulayman عليه السلام heard her, smiled, and thanked Allah for His blessings (27:18–19).",why:"The ant cared for her community. And Sulayman عليه السلام, a mighty king, answered with a smile and with thankfulness."},talk:["How did the ant show she cared?","How can we look after the smallest creatures?"],apply:"Be careful around ants and bugs this week, and watch where you step!",fact:{icon:"🐜",text:"An-Naml 27:18–19: an ant warned the others, and Sulayman عليه السلام smiled and thanked Allah."}},{title:"The Busy Bee",riddle:'A buzzing among the Oasis flowers: "Find the surah named after an insect that makes something sweet. Allah taught it where to build its homes."',think:"Guess: which insect makes something sweet?",find:"Find the surah named after the bee. It begins in Juz 14.",parentTip:"The bee ayat are 68 and 69. If you have honey at home, bring it to the table!",discuss:'Read ayat 68–69 together. Ask {C}: "Where does the bee build its homes?"',asks:[{type:"surah",prompt:"Which surah did you find?",answer:16,hints:['"An-Nahl" means "The Bee". It begins in Juz 14.',"It is Surah An-Nahl (النحل), number 16."]},{type:"choice",prompt:"Read ayah 69. What is in the drink that comes from bees?",options:["Healing for people","Salt","Nothing special"],answer:0,hints:[`Look for the word "shifā'".`,'"In it is healing for people."']}],learn:{name:"Surah An-Nahl · 16",arabic:{text:"فِيهِ شِفَآءٌ لِّلنَّاسِ",ref:"An-Nahl 16:69",meaning:'"…in it is healing for people."'},meaning:'An-Nahl means "The Bee". Surah 16 has 128 ayat.',story:"Allah inspired the bee to build homes in the mountains, in the trees and in what people build (16:68), then to eat from all the fruits and follow the ways of her Lord. From its belly comes a drink of many colours, honey, with healing for people (16:69).",why:`Tiny bees follow Allah's guidance perfectly. Ayah 69 ends: "Indeed in that is a sign for a people who give thought."`},talk:["What colours of honey have you seen?","What else in nature follows Allah's plan?"],apply:'Taste some honey together, say "Alhamdulillah", and talk about the bees who made it.',fact:{icon:"🐝",text:"An-Nahl 16:68–69: Allah inspired the bee, and honey has healing for people."}},{title:"The Longest Surah",riddle:'In the Ancient City, a stone tablet reads: "I am the longest surah of all, and I am named after a cow. What number is my very last ayah?"',think:"Guess: how many ayat might the longest surah have? 50? 100? More?",find:"Find the longest surah in the Qur'an, right after Al-Fatihah. Then turn to its last ayah.",parentTip:"The last ayah is at the end of the surah, about 48 pages in. It's fine to jump to where Surah 3 begins and look just before it.",discuss:'Ask {C}: "Why do you think this surah is named after a cow?" Then read 2:67 together.',asks:[{type:"surah",prompt:"Which surah did you find?",answer:2,hints:["It is the second surah.","It is Surah Al-Baqarah (البقرة), number 2."]},{type:"number",prompt:"What is the number of its very last ayah?",answer:286,hints:["Look at the page just before Surah Aal-'Imran begins.","The last ayah of Al-Baqarah is 286."]}],learn:{name:"Surah Al-Baqarah · 2",meaning:'Al-Baqarah means "The Cow". Surah 2 is the longest surah, with 286 ayat. It contains Āyat al-Kursī (2:255).',story:'Musa عليه السلام told his people: "Allah commands you to slaughter a cow" (2:67). Instead of simply obeying, they kept asking more questions (what age? what colour? what kind?) and made it harder for themselves (2:68–71).',why:"When Allah asks something of us, the best way is to obey simply and willingly, without making excuses."},talk:["Why do you think they kept asking questions?","What is one good thing we can do straight away, without delaying?"],apply:"Learn Āyat al-Kursī (2:255) together, a little each night.",fact:{icon:"🐄",text:"Al-Baqarah (2): the longest surah, with 286 ayat. Its cow story teaches us to obey Allah simply."}},{title:"The Weakest House",riddle:`A web glistens on a boat's mast by the Sea: "Find the surah named after an eight-legged creature. What does Allah say about its house?"`,think:"Guess: is a spider's web strong or weak?",find:"Find the surah named after the spider (it begins in Juz 20), then ayah 41.",parentTip:"A spider's silk is strong for its size, but its house protects nothing from wind or rain. That is the point of the example.",discuss:'Ask {C}: "What happens to a web in the wind? What do people rely on instead of Allah?"',asks:[{type:"surah",prompt:"Which surah did you find?",answer:29,hints:[`"Al-'Ankabut" means "The Spider". It begins in Juz 20.`,"It is Surah Al-'Ankabut (العنكبوت), number 29."]},{type:"choice",prompt:"What does ayah 41 say about the spider's house?",options:["It is the weakest of houses","It is the strongest house","It is made of gold"],answer:0,hints:['Look for "awhana l-buyūt", "the weakest of houses".','"The weakest of houses is the house of the spider."']}],learn:{name:"Surah Al-'Ankabut · 29",arabic:{text:"وَإِنَّ أَوْهَنَ ٱلْبُيُوتِ لَبَيْتُ ٱلْعَنكَبُوتِ",ref:"Al-'Ankabut 29:41",meaning:'"And indeed, the weakest of houses is the house of the spider."'},meaning:`Al-'Ankabut means "The Spider". Surah 29 has 69 ayat.`,story:"Allah gives an example: those who take protectors other than Allah are like a spider that builds itself a house, and the weakest of houses is the spider's house, if only they knew (29:41).",why:"Real safety comes from Allah. We take sensible steps (seatbelts, locks, doctors), and we put our trust in Allah."},talk:["What would happen to a spider web in a strong wind?","What makes us truly safe?"],apply:`When leaving the house this week, say "Bismillāh, tawakkaltu 'alallāh" (In the name of Allah, I rely on Allah), from a dua the Prophet ﷺ taught (Abu Dawud, at-Tirmidhi).`,fact:{icon:"🕸️",text:"Al-'Ankabut 29:41: the weakest house is the spider's. Real protection is with Allah."}},{title:"Look at the Camel",riddle:'The last clue on Treasure Hill: "Allah asks: Do they not look at this animal, and how it was created? Find it in Surah Al-Ghashiyah, ayah 17."',think:"Guess: which animal can walk for days across the desert?",find:"Find Surah Al-Ghashiyah (Juz 30), then ayah 17.",parentTip:`Al-Ghashiyah is often recited in Jumu'ah prayer. Ayat 17–20 make a lovely "look around you" list.`,discuss:'Read ayat 17–20 together. Ask {C}: "What four things does Allah ask us to look at?"',asks:[{type:"surah",prompt:"Which surah is Al-Ghashiyah?",answer:88,hints:["It is in Juz 30, just after Al-A'la (87).","Al-Ghashiyah is Surah 88."]},{type:"choice",prompt:"Which animal does ayah 17 ask us to look at?",options:["The camel 🐪","The lion 🦁","The whale 🐋"],answer:0,hints:['Look for "al-ibil".','"Al-ibil" means camels.']},{type:"choice",prompt:"Ayat 18–20 name three more things to look at. Which ones?",options:["The sky, the mountains and the earth","The cars, the shops and the phones","The stars, the fish and the rain"],answer:0,hints:["One is raised up, one is set firmly, one is spread out.","The sky, the mountains and the earth."]}],learn:{name:"Surah Al-Ghashiyah · 88",arabic:{text:"أَفَلَا يَنظُرُونَ إِلَى ٱلْإِبِلِ كَيْفَ خُلِقَتْ",ref:"Al-Ghashiyah 88:17",meaning:'"Then do they not look at the camels, how they are created?"'},meaning:'Al-Ghashiyah is Surah 88 with 26 ayat. Its name means "The Overwhelming Event".',story:"Allah invites us to look: at the camels and how they were created, at the sky and how it was raised, at the mountains and how they were set firm, and at the earth and how it was spread out (88:17–20).",why:"Thinking about creation helps us know and love our Creator."},talk:["What is amazing about camels? (Think: the desert, water, long eyelashes!)","Look outside together: what do you see that Allah made?"],apply:'Go on a "look and think" walk. Find three things Allah created and say "SubḥānAllāh" for each.',fact:{icon:"🐪",text:'Al-Ghashiyah 88:17: "Do they not look at the camels, how they are created?"'}}]}],pv=[{id:"nature",title:"Nature Hunt",emoji:"🌿",colour:"#9dd190",sub:"Rain, stars, mountains and seas"},{id:"akhlaq",title:"Akhlaq Hunt",emoji:"💛",colour:"#f3c99b",sub:"Honesty, kindness and good manners"}],mv=[[1,"Al-Fatihah","الفاتحة","The Opening",7],[2,"Al-Baqarah","البقرة","The Cow",286],[3,"Aal-'Imran","آل عمران","The Family of Imran",200],[4,"An-Nisa","النساء","The Women",176],[5,"Al-Ma'idah","المائدة","The Table Spread",120],[6,"Al-An'am","الأنعام","The Cattle",165],[7,"Al-A'raf","الأعراف","The Heights",206],[8,"Al-Anfal","الأنفال","The Spoils",75],[9,"At-Tawbah","التوبة","The Repentance",129],[10,"Yunus","يونس","Yunus (Jonah)",109],[11,"Hud","هود","Hud",123],[12,"Yusuf","يوسف","Yusuf (Joseph)",111],[13,"Ar-Ra'd","الرعد","The Thunder",43],[14,"Ibrahim","إبراهيم","Ibrahim (Abraham)",52],[15,"Al-Hijr","الحجر","The Rocky Tract",99],[16,"An-Nahl","النحل","The Bee",128],[17,"Al-Isra'","الإسراء","The Night Journey",111],[18,"Al-Kahf","الكهف","The Cave",110],[19,"Maryam","مريم","Maryam (Mary)",98],[20,"Ta-Ha","طه","Ta-Ha",135],[21,"Al-Anbiya'","الأنبياء","The Prophets",112],[22,"Al-Hajj","الحج","The Pilgrimage",78],[23,"Al-Mu'minun","المؤمنون","The Believers",118],[24,"An-Nur","النور","The Light",64],[25,"Al-Furqan","الفرقان","The Criterion",77],[26,"Ash-Shu'ara'","الشعراء","The Poets",227],[27,"An-Naml","النمل","The Ant",93],[28,"Al-Qasas","القصص","The Stories",88],[29,"Al-'Ankabut","العنكبوت","The Spider",69],[30,"Ar-Rum","الروم","The Romans",60],[31,"Luqman","لقمان","Luqman",34],[32,"As-Sajdah","السجدة","The Prostration",30],[33,"Al-Ahzab","الأحزاب","The Allied Forces",73],[34,"Saba'","سبأ","Sheba",54],[35,"Fatir","فاطر","The Originator",45],[36,"Ya-Sin","يس","Ya-Sin",83],[37,"As-Saffat","الصافات","Those Lined Up in Rows",182],[38,"Sad","ص","Sad",88],[39,"Az-Zumar","الزمر","The Groups",75],[40,"Ghafir","غافر","The Forgiver",85],[41,"Fussilat","فصلت","Explained in Detail",54],[42,"Ash-Shura","الشورى","The Consultation",53],[43,"Az-Zukhruf","الزخرف","The Gold Ornaments",89],[44,"Ad-Dukhan","الدخان","The Smoke",59],[45,"Al-Jathiyah","الجاثية","The Kneeling",37],[46,"Al-Ahqaf","الأحقاف","The Sand Dunes",35],[47,"Muhammad","محمد","Muhammad ﷺ",38],[48,"Al-Fath","الفتح","The Victory",29],[49,"Al-Hujurat","الحجرات","The Private Rooms",18],[50,"Qaf","ق","Qaf",45],[51,"Adh-Dhariyat","الذاريات","The Scattering Winds",60],[52,"At-Tur","الطور","The Mount",49],[53,"An-Najm","النجم","The Star",62],[54,"Al-Qamar","القمر","The Moon",55],[55,"Ar-Rahman","الرحمن","The Most Merciful",78],[56,"Al-Waqi'ah","الواقعة","The Inevitable Event",96],[57,"Al-Hadid","الحديد","The Iron",29],[58,"Al-Mujadilah","المجادلة","The Pleading Woman",22],[59,"Al-Hashr","الحشر","The Gathering",24],[60,"Al-Mumtahanah","الممتحنة","The Woman Examined",13],[61,"As-Saff","الصف","The Ranks",14],[62,"Al-Jumu'ah","الجمعة","Friday",11],[63,"Al-Munafiqun","المنافقون","The Hypocrites",11],[64,"At-Taghabun","التغابن","Mutual Loss and Gain",18],[65,"At-Talaq","الطلاق","Divorce",12],[66,"At-Tahrim","التحريم","The Prohibition",12],[67,"Al-Mulk","الملك","The Dominion",30],[68,"Al-Qalam","القلم","The Pen",52],[69,"Al-Haqqah","الحاقة","The Inevitable Reality",52],[70,"Al-Ma'arij","المعارج","The Ascending Stairways",44],[71,"Nuh","نوح","Nuh (Noah)",28],[72,"Al-Jinn","الجن","The Jinn",28],[73,"Al-Muzzammil","المزمل","The Wrapped One",20],[74,"Al-Muddaththir","المدثر","The Cloaked One",56],[75,"Al-Qiyamah","القيامة","The Resurrection",40],[76,"Al-Insan","الإنسان","Mankind",31],[77,"Al-Mursalat","المرسلات","Those Sent Forth",50],[78,"An-Naba'","النبأ","The Great News",40],[79,"An-Nazi'at","النازعات","Those Who Pull Out",46],[80,"'Abasa","عبس","He Frowned",42],[81,"At-Takwir","التكوير","The Folding Up",29],[82,"Al-Infitar","الانفطار","The Splitting Open",19],[83,"Al-Mutaffifin","المطففين","Those Who Give Short Measure",36],[84,"Al-Inshiqaq","الانشقاق","The Splitting Apart",25],[85,"Al-Buruj","البروج","The Great Stars",22],[86,"At-Tariq","الطارق","The Night Visitor",17],[87,"Al-A'la","الأعلى","The Most High",19],[88,"Al-Ghashiyah","الغاشية","The Overwhelming Event",26],[89,"Al-Fajr","الفجر","The Dawn",30],[90,"Al-Balad","البلد","The City",20],[91,"Ash-Shams","الشمس","The Sun",15],[92,"Al-Layl","الليل","The Night",21],[93,"Ad-Duha","الضحى","The Morning Light",11],[94,"Ash-Sharh","الشرح","The Opening Up",8],[95,"At-Tin","التين","The Fig",8],[96,"Al-'Alaq","العلق","The Clinging Clot",19],[97,"Al-Qadr","القدر","The Night of Decree",5],[98,"Al-Bayyinah","البينة","The Clear Proof",8],[99,"Az-Zalzalah","الزلزلة","The Earthquake",8],[100,"Al-'Adiyat","العاديات","The Running Horses",11],[101,"Al-Qari'ah","القارعة","The Striking Hour",11],[102,"At-Takathur","التكاثر","Competing for More",8],[103,"Al-'Asr","العصر","Time",3],[104,"Al-Humazah","الهمزة","The Slanderer",9],[105,"Al-Fil","الفيل","The Elephant",5],[106,"Quraysh","قريش","Quraysh",4],[107,"Al-Ma'un","الماعون","Small Kindnesses",7],[108,"Al-Kawthar","الكوثر","Abundance",3],[109,"Al-Kafirun","الكافرون","The Disbelievers",6],[110,"An-Nasr","النصر","The Help",3],[111,"Al-Masad","المسد","The Palm Fibre",5],[112,"Al-Ikhlas","الإخلاص","Sincerity",4],[113,"Al-Falaq","الفلق","The Daybreak",5],[114,"An-Nas","الناس","Mankind",6]],gv=n=>{if(n<=2)return 1;const e=[[3,3],[4,4],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,11],[12,12],[13,13],[14,13],[15,14],[16,14],[17,15],[18,15],[19,16],[20,16],[21,17],[22,17],[23,18],[24,18],[25,18],[26,19],[27,19],[28,20],[29,20],[30,21],[31,21],[32,21],[33,21],[34,22],[35,22],[36,22],[37,23],[38,23],[39,23],[40,24],[41,24],[42,25],[43,25],[44,25],[45,25],[46,26],[47,26],[48,26],[49,26],[50,26],[51,26]];for(const[t,i]of e)if(t===n)return i;return n<=57?27:n<=66?28:n<=77?29:30},es=mv.map(([n,e,t,i,s])=>({n,name:e,ar:t,meaning:i,ayat:s,juz:gv(n)})),va=n=>es[n-1],ec=n=>n.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/['’`ʿʾ\-\s]/g,"").replace(/^(adh|ash|aal|al|an|ar|as|at|az|ad)/,"");function tc(n){if(n=(n||"").trim(),!n)return es;if(/^\d+$/.test(n)){const i=+n;return es.filter(s=>String(s.n).startsWith(n)).sort((s,r)=>s.n===i?-1:r.n===i?1:s.n-r.n)}const e=ec(n),t=n.toLowerCase();return es.filter(i=>e&&ec(i.name).includes(e)||i.name.toLowerCase().includes(t)||i.meaning.toLowerCase().includes(t)||i.ar.includes(n))}const Lo="familyDeen.treasure.v1",nc={child:"",grownup:"both",talks:0,openAll:!1,muted:!1,hunts:{},facts:{}},Jc=()=>({clue:0,step:"intro",ask:0,done:!1,talks:0,hints:0});function jc(){try{const n=JSON.parse(localStorage.getItem(Lo)||"null");if(n)return{...nc,...n,hunts:{...n.hunts||{}},facts:{...n.facts||{}}}}catch{}return structuredClone(nc)}function vv(n){try{localStorage.setItem(Lo,JSON.stringify(n))}catch{}}function _v(){try{localStorage.removeItem(Lo)}catch{}}let Lt,Ai,Kc=!1;function xv(){if(!Lt)try{Lt=new(window.AudioContext||window.webkitAudioContext),Ai=Lt.createGain(),Ai.gain.value=Kc?0:.4,Ai.connect(Lt.destination)}catch{Lt=null}}function ic(n){Kc=n,Ai&&(Ai.gain.value=n?0:.4)}function Pn(n,e,{type:t="triangle",vol:i=.5,slide:s=1,delay:r=0}={}){if(!Lt)return;const a=Lt.currentTime+r,o=Lt.createOscillator(),l=Lt.createGain();o.type=t,o.frequency.setValueAtTime(n,a),o.frequency.exponentialRampToValueAtTime(n*s,a+e),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(i,a+.012),l.gain.exponentialRampToValueAtTime(1e-4,a+e),o.connect(l).connect(Ai),o.start(a),o.stop(a+e+.02)}function _a(n,{vol:e=.2,cutoff:t=1200,type:i="lowpass",delay:s=0}={}){if(!Lt)return;const r=Lt.currentTime+s,a=Math.ceil(Lt.sampleRate*n),o=Lt.createBuffer(1,a,Lt.sampleRate),l=o.getChannelData(0);for(let f=0;f<a;f++)l[f]=(Math.random()*2-1)*(1-f/a);const c=Lt.createBufferSource(),h=Lt.createBiquadFilter(),u=Lt.createGain();c.buffer=o,h.type=i,h.frequency.value=t,u.gain.value=e,c.connect(h).connect(u).connect(Ai),c.start(r)}const Ln={tap:()=>Pn(700,.06,{vol:.18}),page:()=>_a(.25,{vol:.25,cutoff:2600,type:"bandpass"}),right:()=>[660,880,1175].forEach((n,e)=>Pn(n,.18,{delay:e*.08,vol:.35})),hmm:()=>{Pn(392,.16,{vol:.25,slide:.94}),Pn(349,.2,{delay:.14,vol:.2,slide:.94})},talk:()=>{Pn(523,.14,{vol:.3}),Pn(784,.2,{delay:.1,vol:.3})},whoosh:()=>_a(1.1,{vol:.35,cutoff:900}),piece:()=>{_a(.3,{vol:.2,cutoff:3e3,type:"bandpass"}),Pn(1047,.2,{delay:.25,vol:.3}),Pn(1568,.25,{delay:.35,vol:.25})},chest:()=>[523,659,784,1047,1319].forEach((n,e)=>Pn(n,.3,{delay:e*.12,vol:.35}))},et=n=>document.getElementById(n),Qc=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);let Qe=jc(),_s=1;const eh=()=>Qe.grownup==="both"?"Baba or Mama":Qe.grownup,_i=()=>Qe.grownup==="both"?"Baba / Mama":Qe.grownup,Ms=()=>Qe.child.trim()?Qc(Qe.child.trim()):"your child",pn=n=>String(n).replace(/[\u0600-\u06FF\uFDF0-\uFDFF][\u0600-\u06FF\uFDF0-\uFDFF\u0750-\u077F\s]*[\u0600-\u06FF\uFDF0-\uFDFF]|[\u0600-\u06FF\uFDF0-\uFDFF]/g,e=>`<bdi class="arx">${e}</bdi>`),rn=n=>pn(String(n).replaceAll("{P}",eh()).replaceAll("{C}",Ms())),ei=(n,e=`👤 For ${_i()}`,t="")=>`<div class="parent ${t}"><header>${e}</header>${n}</div>`,yv=n=>Mi.find(e=>e.id===n),wt=n=>{var e;return(e=Qe.hunts)[n]||(e[n]=Jc())},Mv=n=>Qe.openAll||n===0||wt(Mi[n-1].id).done,Xt=()=>vv(Qe);async function Sv(){const n=new D0({canvas:et("scene"),antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.outputColorSpace=qt;const e=await fv(n);ic(Qe.muted),et("muteBtn").innerHTML=vt(Qe.muted?"mute":"sound"),et("muteBtn").classList.add("dk-iconbtn");function t(){n.setSize(window.innerWidth,window.innerHeight,!1),e.resize(window.innerWidth,window.innerHeight),v()}window.addEventListener("resize",t);let i=null,s=null,r=0,a=0,o="",l=!1;const c=et("panel"),h=et("overlay");function u(J){c.innerHTML=J,c.classList.remove("hidden"),c.scrollTop=0,requestAnimationFrame(v)}function f(){c.classList.add("hidden"),v()}function d(J,L=""){h.className="screen "+L,h.innerHTML=J,h.scrollTop=0}function g(){h.className="screen hidden",h.innerHTML=""}function v(){if(c.classList.contains("hidden"))return e.setInset(0,0);const J=c.getBoundingClientRect();window.innerWidth<760||window.innerHeight>window.innerWidth?e.setInset(0,Math.min(J.height,window.innerHeight*.58)):e.setInset(window.innerWidth-J.left,0)}function m(){Qe.talks++,i&&wt(i.id).talks++,Xt(),Ln.talk(),et("talkCount").textContent=Qe.talks;const J=et("huntPill");J.classList.remove("bump"),J.offsetWidth,J.classList.add("bump")}function p(){f(),et("hud").classList.add("hidden"),i=null,e.focus(null),e.setProgress(0);const J=Qe.grownup,L=k=>"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(k);d(`<div class="frame center title">
      <div class="logo"><span class="fam">${vt("house")} Family Deen</span></div>
      ${ch([{src:L(xr),cls:"bob"},{src:L(xa),cls:"sm bob"},{icon:"chest",cls:"main"},{src:L(ya),cls:"sm bob"},{src:L(yr),cls:"bob"}],{tone:"sea",glow:!0,sparkles:5})}
      <div class="logo"><h1>Quran <em>Treasure</em> Hunt</h1><p>A treasure map whose clues are solved in the real Qur'an</p></div>
      ${ei(ko([{icon:"moon",title:"Sit together",text:"for 10–20 minutes, after Maghrib or at bedtime."},{icon:"rehal",title:"Mushaf ready",text:"Have your mushaf or the Al Quran app ready. The game does <b>not</b> contain the answers: you find them together in the Qur'an."},{icon:"eye",title:"Look up!",text:"When the screen says <b>Look up!</b>, put it down and talk. Those conversations are the real progress."}]),`${vt("grownup")} For Baba / Mama: how this works`)}
      <label class="field">Child's name (optional)<input type="text" id="childName" maxlength="20" placeholder="e.g. Maryam" value="${Qc(Qe.child)}" /></label>
      <div class="field">Who is guiding tonight?<div class="dkavs" id="grownSeg">
        ${[["Baba","blue",L(yr)],["Mama","pink",L(xr)],["both","green","people"]].map(([k,A,ae],j)=>`<button data-act="grown" data-k="${k}" class="dkav ${A} ${J===k?"on":""}" style="--i:${j}"><span class="face">${ae.startsWith("data:")?`<img src="${ae}" alt="">`:vt(ae)}</span><span>${k==="both"?"Both of us":k}</span></button>`).join("")}</div></div>
      <div class="actions"><button class="btn go" data-act="begin">${vt(Object.keys(Qe.hunts).length?"play":"map")} ${Object.keys(Qe.hunts).length?"Continue the adventure →":"Open the treasure maps →"}</button></div>
    </div>`,"title-bg")}function w(){f(),et("hud").classList.add("hidden"),i=null,e.focus(null);const J=Mi.map((k,A)=>{const ae=wt(k.id),j=Mv(A),fe=ae.done?5:ae.clue+(["next","treasure"].includes(ae.step)?1:0),pe=j?ae.done?`${vt("key")} Treasure found! Tap to see it`:fe||ae.step!=="intro"?`${fe} of 5 map pieces · tap to continue`:`${vt("sparkle")} New map · tap to start`:`Finish the ${Mi[A-1].title} first`;return Fo({attr:"data-act",id:j?"hunt":"lockedHunt",data:`data-id="${k.id}"`,colorHex:k.colour,i:A,locked:!j,keepPic:!0,done:ae.done,pic:`<span class="glyph ${k.id==="arabic"?"em-ar":""}">${k.emoji}</span>`,title:k.title,sub:pn(k.sub),tag:ae.done?`${vt("tick")} Done`:fe?`${fe}/5`:"",tagKind:ae.done?"done":"now",pips:j?[fe,5]:null,meta:pe})}).concat(pv.map((k,A)=>Fo({colorHex:k.colour,i:Mi.length+A,locked:!0,keepPic:!0,pic:`<span class="glyph">${k.emoji}</span>`,title:k.title,sub:k.sub,meta:`${vt("lock")} Coming soon`}))).join(""),L=Object.keys(Qe.facts).length;d(`<div class="frame" style="width:min(58rem,95vw)">
      <div class="ribbon">${vt("map")} Choose a treasure map</div>
      ${lh([["talk",`<b>${Qe.talks}</b> conversation${Qe.talks===1?"":"s"} had`,"blue"],["chest",`<b>${L}</b> treasure${L===1?"":"s"} of knowledge`,"gold"]])}
      <div class="dkcards narrow board">${J}</div>
      <div class="row">
        <button class="btn gold" data-act="chest">${vt("chest")} Our treasure chest</button>
        <button class="btn parentish" data-act="guide">${vt("grownup")} Parent guide</button>
        <button class="btn" data-act="title">${vt("pencil")} Names</button>
      </div></div>`)}function b(J){i=yv(J);const L=wt(J);g(),et("hud").classList.remove("hidden"),et("huntEmoji").textContent=i.emoji,et("huntName").textContent=i.title,et("talkCount").textContent=Qe.talks,e.setFamily(Qe.grownup);const k=L.done?5:L.clue+(["next","treasure"].includes(L.step)?1:0);return e.setProgress(k,{chestOpened:L.done||L.step==="treasure"}),D(),L.done||L.step==="treasure"?Re(!1):L.step==="intro"?C():L.step==="next"?we():L.step==="learn"?re():L.step==="ask"?B():T()}const _=()=>i.clues[wt(i.id).clue];function D(){const J=wt(i.id),L=J.done?5:J.clue+(["next","treasure"].includes(J.step)?1:0);et("pieces").innerHTML=Pt.map((k,A)=>`<span class="piece ${A<L?"got":A===L?"next":""}" id="piece${A}" title="${k.name}">${A<L?k.icon:"?"}</span>`).join("")}function C(){f(),e.focus(null),d(`<div class="frame center">
      <div class="ribbon">${i.emoji} ${i.title}</div>
      <div class="chest-title"><div class="big">🗺️</div></div>
      <p class="riddle" style="text-align:left">${rn(i.intro)}</p>
      <p>Five clues. Five hidden places on the island, covered in fog. Each clue you solve in the Qur'an clears the fog and gives you a map piece. At the end, the treasure chest opens!</p>
      ${ei(`<p>You are the guide: read each clue aloud, let ${Ms()} hold the mushaf or turn the pages, and help with the searching. Hint cards are for you, and they come in two sizes: small first, then bigger.</p>`)}
      <div class="actions"><button class="btn go" data-act="startClue">Read the first clue →</button></div></div>`)}function T(){g();const J=wt(i.id),L=_(),k=Pt[J.clue];J.step="clue",Xt(),e.focus(J.clue,.72),D(),u(`<div class="card">
      <div class="ribbon">Clue ${J.clue+1} of 5 · ${k.name}</div>
      <h2>${k.icon} ${L.title}</h2>
      <p class="riddle">${rn(L.riddle)}</p>
      <div class="think">🤔 <b>Think first:</b> ${rn(L.think)}</div>
      <div class="quran"><span>📖</span>Open your Qur'an (or the Al Quran app)</div>
      ${ei(`<p>${rn(L.parentTip)}</p>`)}
      <div class="actions"><button class="btn go" data-act="search">Let's search! 🔍</button></div></div>`)}const I=`<svg class="rehal" viewBox="0 0 220 130" aria-hidden="true"><g fill="none" stroke="#5b3520" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M40 120 L180 50 M180 120 L40 50" stroke="#c98a4d" stroke-width="9"/><path d="M40 120 L180 50 M180 120 L40 50"/>
    <path d="M30 58 Q70 34 110 50 L110 92 Q70 76 30 100 Z" fill="#4f8a6b"/><path d="M190 58 Q150 34 110 50 L110 92 Q150 76 190 100 Z" fill="#4f8a6b"/>
    <path d="M40 60 Q72 42 104 54 M116 54 Q148 42 180 60" stroke="#f5cf5f" stroke-width="3"/></g></svg>`;function S(){const J=_();Ln.page(),d(`<div class="frame center">
      <div class="ribbon">🔍 Search the Qur'an</div>${I}
      <h2>Screen down. Qur'an open!</h2>
      <p class="find">${rn(J.find)}</p>
      <p style="color:var(--ink-soft)">Take your time. Turn the pages together and read the headings out loud.</p>
      <div class="row" style="margin:.6rem 0"><button class="btn small" data-act="surahs">📖 Surah list helper</button><button class="btn small parentish" data-act="hint">💡 Hint for ${_i()}</button></div>
      <div class="actions"><button class="btn go" data-act="found">We found it! →</button><button class="link" data-act="backToClue">← back to the clue</button></div></div>`,"search-bg")}function y(){const J=_();d(`<div class="frame center lookup">
      <div class="eyes">👀</div><h2>Look up! Talk together</h2>
      <p>${Ms()==="your child"?"Look":Ms()+", look"} at ${eh()}, not at the screen.</p>
      ${ei(`<p>${rn(J.discuss)}</p>`,`👤 For ${_i()}`,"big")}
      <div class="actions"><button class="btn go" data-act="talkedDiscuss">We talked ✓</button><button class="link" data-act="skipDiscuss">Skip for now</button></div></div>`,"lookup-bg")}function R(){const J=wt(i.id);J.step="ask",J.ask=0,Xt(),g(),B()}function B(){g();const J=wt(i.id),L=_();s=L.asks[J.ask],r=0,a=0,o="",e.focus(J.clue,.72);let k="";s.type==="surah"?k=`<input type="search" id="askSearch" placeholder="Type a surah name or number…" autocomplete="off" /><div class="surah-list" id="askList">${H(es,"pick")}</div>`:s.type==="choice"?k=`<div class="choices">${s.options.map((ae,j)=>`<button class="choice ${s.arabic?"ar":""}" data-act="choose" data-i="${j}">${ae}</button>`).join("")}</div>`:k=`<div class="numshow" id="numShow">&nbsp;</div><div class="numpad">${[1,2,3,4,5,6,7,8,9].map(ae=>`<button data-act="num" data-n="${ae}">${ae}</button>`).join("")}<button data-act="num" data-n="del" aria-label="delete">⌫</button><button data-act="num" data-n="0">0</button><button class="ok" data-act="num" data-n="ok">✓</button></div>`,u(`<div class="card">
      <div class="ribbon">Clue ${J.clue+1} · question ${J.ask+1} of ${L.asks.length}</div>
      <p class="prompt">${rn(s.prompt)}</p>${k}
      <div id="feedback"></div>
      <div class="actions"><button class="btn small parentish" id="hintBtn" data-act="hint">💡 Stuck? Hint for ${_i()}</button></div></div>`);const A=et("askSearch");A&&A.addEventListener("input",()=>{et("askList").innerHTML=H(tc(A.value),"pick")})}const H=(J,L)=>J.map(k=>`<button class="srow" data-act="${L}" data-n="${k.n}"><b>${k.n}</b><span class="nm">${k.name}</span><span class="ar">${k.ar}</span><i>${k.meaning} · Juz ${k.juz} · ${k.ayat} ayat</i></button>`).join("")||'<p style="padding:.6rem">No surah matches. Try another spelling or the number.</p>';function Y(J,L=!1){const k=et("feedback");k&&(k.innerHTML=`<div class="feedback ${L?"good":""}">${J}</div>`)}function te(J){var A,ae,j;if(!s)return;if(J===s.answer){Ln.right();const fe=wt(i.id),pe=_(),ce=s.type==="surah"?`✨ Yes! Surah ${va(J).n} · ${va(J).name}`:s.type==="number"?`✨ Yes! ${J}`:"✨ Yes, that's it!";return Y(ce,!0),c.querySelectorAll("[data-act=choose],[data-act=pick],[data-act=num]").forEach(Ce=>{Ce.disabled=!0}),(A=c.querySelector(`[data-act=choose][data-i="${J}"]`))==null||A.classList.add("right"),s=null,setTimeout(()=>{fe.ask+1<pe.asks.length?(fe.ask++,Xt(),B()):(fe.step="learn",Xt(),re())},1100/_s),!0}r++,Ln.hmm();let k=["Not this one. Look again together! 🔍","Hmm, keep looking. You're getting closer! 🌱","Good try! A hint for "+_i()+" might help. 💡"][Math.min(r-1,2)];return s.type==="surah"&&(k=`That's Surah ${J} · ${va(J).name}. ${k}`),Y(k),s.type==="choice"&&((ae=c.querySelector(`[data-act=choose][data-i="${J}"]`))==null||ae.classList.add("dim")),r>=1&&((j=et("hintBtn"))==null||j.classList.add("pulse")),r>=2&&a===0&&W(),!1}function W(){const J=!!s,L=_(),k=wt(i.id),A=J?s.hints:L.asks[0].hints;a=Math.min(2,a+1),k.hints++,Xt();const ae=A.slice(0,a).map((j,fe)=>`<p><span class="hint-level">${fe?"Bigger hint":"Small hint"}:</span> ${rn(j)}</p>`).join("");d(`<div class="frame center">
      <div class="ribbon">💡 Hint card</div>
      ${ei(`${ae}<p style="font-size:.95rem;opacity:.85">Try guiding ${Ms()} with a question first, like "What do you see at the top of this page?"</p>`)}
      <div class="actions">${a<2?'<button class="btn parentish" data-act="hint">We need a bigger hint</button>':""}<button class="btn go" data-act="closeHint">Back to searching</button></div></div>`,h.classList.contains("search-bg")?"search-bg":""),h.dataset.from=J?"ask":"search"}function re(){g();const J=wt(i.id),L=_(),k=L.learn;e.focus(J.clue,.72);const A=k.arabic?`<div class="ayah"><span class="ar">${k.arabic.text}</span>${k.arabic.translit?`<span class="tr">${k.arabic.translit}</span>`:""}<span class="mn">${k.arabic.meaning}</span><span class="ref">${k.arabic.ref}</span></div>`:"";u(`<div class="card">
      <div class="ribbon">📚 Learn the context</div>
      <div class="found"><div class="big">✨</div><span class="kicker">You found it!</span><h2>${pn(k.name)}</h2></div>
      ${A}
      <div class="sec"><h3>📜 What it means</h3><p>${pn(k.meaning)}</p></div>
      <div class="sec"><h3>📖 The story</h3><p>${pn(k.story)}</p></div>
      <div class="sec"><h3>💎 Why it matters</h3><p>${pn(k.why)}</p></div>
      ${ei(`<ul>${L.talk.map(ae=>`<li>${rn(ae)}</li>`).join("")}</ul>`,`👤 For ${_i()}: talk together`)}
      <div class="apply"><b>🌱 Try it this week:</b> ${rn(L.apply)}</div>
      <div class="actions"><button class="btn go" data-act="talkedLearn">We talked ✓ · reveal the map!</button><button class="link" data-act="revealOnly">Reveal without talking</button></div></div>`)}async function X(){if(l)return;l=!0;const J=wt(i.id),L=J.clue,k=_();return f(),g(),Qe.facts[`${i.id}:${L}`]=!0,Xt(),setTimeout(()=>Ln.whoosh(),700/_s),await e.reveal(L),await ye(L),J.step=L===4?"treasure":"next",Xt(),D(),l=!1,L===4?(Ln.chest(),await e.openChest(),J.done=!0,Xt(),Re(!0)):we(),k}function ye(J){const L=Pt[J],[k,A]=e.project(L.x,1.5,L.z),ae=et("piece"+J).getBoundingClientRect(),j=document.createElement("div");j.className="flypiece",j.textContent=L.icon,et("flyLayer").appendChild(j);const fe=j.offsetWidth;return Ln.piece(),j.animate([{transform:`translate(${k-fe/2}px, ${A-fe/2}px) scale(0.3) rotate(-20deg)`,opacity:0},{transform:`translate(${k-fe/2}px, ${A-fe*1.6}px) scale(1.3) rotate(8deg)`,opacity:1,offset:.35},{transform:`translate(${ae.left+ae.width/2-fe/2}px, ${ae.top+ae.height/2-fe/2}px) scale(${ae.width/fe}) rotate(0deg)`,opacity:1}],{duration:1300/_s,easing:"cubic-bezier(.45,.05,.4,1)"}).finished.then(()=>j.remove())}function we(){const J=wt(i.id),L=J.clue,k=Pt[L],A=i.clues[L];e.focus(null),u(`<div class="card center">
      <div class="ribbon">🧩 Map piece ${L+1} of 5!</div>
      <div class="found"><div class="big">${k.icon}</div><h2>${k.name} is revealed!</h2></div>
      <div class="facts"><div class="fact"><span class="ic">${A.fact.icon}</span><p>${pn(A.fact.text)}</p></div></div>
      <p>This fact is now in your treasure chest. ${4-L} more ${4-L===1?"piece":"pieces"} to find.</p>
      <div class="actions"><button class="btn go" data-act="nextClue">Next clue →</button><button class="btn small" data-act="home">🌙 Stop for tonight (saved)</button></div></div>`)}function Re(J){g(),e.focus(4,.55);const L=wt(i.id);u(`<div class="card">
      <div class="ribbon">${vt("key")} Treasure found!</div>
      <div class="chest-title"><div class="big dkpopin" id="treasureBig">${vt("chest","huge")}${vt("sparkle","big")}</div><h2>The treasure is… knowledge!</h2><p>${pn(i.finale)}</p></div>
      <div class="facts">${i.clues.map((k,A)=>`<div class="fact" style="animation-delay:${J?A*.15:0}s"><span class="ic">${k.fact.icon}</span><p>${pn(k.fact.text)}</p></div>`).join("")}</div>
      <p style="text-align:center"><span class="stat">💬 ${L.talks} conversation${L.talks===1?"":"s"} on this map</span> <span class="stat">💡 ${L.hints} hint${L.hints===1?"":"s"}</span></p>
      ${ei(`<ul>${i.reflect.map(k=>`<li>${rn(k)}</li>`).join("")}</ul>`,`👤 For ${_i()}: family reflection`)}
      <div class="actions"><button class="btn go" data-act="talkedFinal" id="finalTalk">We talked ✓</button>
      <button class="btn gold" data-act="home">${vt("map")} Back to the maps</button><button class="link" data-act="replay">↺ Play this map again</button></div></div>`),J&&setTimeout(()=>fh(et("treasureBig"),!0),350),hh(c.querySelector(".facts"))}function le(){const J=Mi.map(L=>{const k=L.clues.map((ae,j)=>[ae,Qe.facts[`${L.id}:${j}`]]),A=k.filter(ae=>ae[1]).length;return`<h3>${L.emoji} ${L.title} · ${A} / 5</h3><div class="facts">${k.map(([ae,j])=>j?`<div class="fact"><span class="ic">${ae.fact.icon}</span><p>${pn(ae.fact.text)}</p></div>`:'<div class="fact locked"><span class="ic">?</span><p>Still hidden in the fog…</p></div>').join("")}</div>`}).join("");d(`<div class="frame"><div class="ribbon">${vt("chest")} Our treasure chest</div>
      <div class="chest-title"><p>Everything our family has learned together. 💬 <b>${Qe.talks}</b> conversations so far.</p></div>${J}
      <div class="actions"><button class="btn gold" data-act="maps">Back</button></div></div>`)}function ve(){d(`<div class="frame guide"><div class="ribbon">👤 Parent guide</div>
      ${ei("<p><b>You are the teacher; the game is the treasure map.</b> It gives clues and context, but the answers live in the Qur'an, which you open together.</p>","👤 For Baba / Mama")}
      <h3>Each clue goes like this</h3>
      ${ko([{icon:"scroll",title:"Clue",text:'read the riddle aloud. Ask the "Think first" question and let your child guess.'},{icon:"rehal",title:"Search",text:"screen down, mushaf open. Use the Surah list helper to find your way (names, numbers, juz, ayah counts)."},{icon:"eye",title:"Look up",text:'the screen stops and you talk. Tap "We talked ✓" only when you really did.'},{icon:"hand",title:"Answer",text:'tap the surah, number or choice. Wrong answers just say "look again". Hints come to you first, in two sizes.'},{icon:"talk",title:"Learn &amp; talk",text:"meaning, story and why it matters, then questions for you to ask and a small thing to try this week."},{icon:"puzzle",title:"Reveal",text:"the fog clears and a map piece flies in. After five, the chest opens."}])}
      <h3>Good to know</h3>
      <ul><li>One map takes about 15–20 minutes. You can stop after any clue ("Stop for tonight"); progress is saved on this device.</li>
      <li>Handle the mushaf with respect: keep it on a stand, a table or your lap, never on the floor. Many families make wudu before holding it; the Al Quran app works too.</li>
      <li>Progress is counted in <b>conversations had</b>, not points or time.</li>
      <li>Prophets are never drawn. Their stories are told in words, with عليه السلام, and ﷺ after the name of the Prophet Muhammad.</li>
      <li>Every citation is listed in CONTENT_REVIEW.md for checking with your local scholar.</li></ul>
      <div class="row" style="margin-top:1rem"><button class="btn gold" data-act="maps">Back</button>
      <button class="btn small parentish" data-act="openAll">${Qe.openAll?"🔒 Unlock maps in order again":"🔓 Open all maps now"}</button>
      <button class="btn small" data-act="reset">Start everything fresh</button></div></div>`)}function G(){d(`<div class="frame" style="width:min(62rem,95vw)"><div class="ribbon">🗺️ ${i.title}: our map</div>
      <div class="mapview"><canvas id="mapCanvas"></canvas><div id="mapPins"></div></div>
      <div class="actions"><button class="btn gold" data-act="closeOverlay">Back</button></div></div>`);const J=e.snapshotMap(et("mapCanvas")),L=wt(i.id),k=L.done?5:L.clue+(["next","treasure"].includes(L.step)?1:0);et("mapPins").innerHTML=Pt.map((A,ae)=>`<span class="rlabel pinlbl ${ae<k?"":"fog"}" style="left:${J.regions[ae][0]}%;top:${J.regions[ae][1]-9}%">${ae<k?A.icon+" "+A.name:"❓ ???"}</span>`).join("")+`<span class="rlabel pinlbl" style="left:${J.camp[0]}%;top:${J.camp[1]+7}%">⛺ Camp</span>`}function ne(){et("surahModal").classList.remove("hidden"),et("surahSearch").value="",et("surahList").innerHTML=H(es,"noop")}et("surahSearch").addEventListener("input",J=>{et("surahList").innerHTML=H(tc(J.target.value),"noop")}),window.addEventListener("keydown",J=>{(s==null?void 0:s.type)==="number"&&!c.classList.contains("hidden")&&h.classList.contains("hidden")&&(/^\d$/.test(J.key)?de("num",{dataset:{n:J.key}}):J.key==="Backspace"?de("num",{dataset:{n:"del"}}):J.key==="Enter"&&de("num",{dataset:{n:"ok"}}))});function de(J,L){var A,ae;const k=i?wt(i.id):null;switch(J){case"grown":Qe.grownup=L.dataset.k,document.querySelectorAll("#grownSeg button").forEach(j=>j.classList.toggle("on",j===L));break;case"begin":Qe.child=(((A=et("childName"))==null?void 0:A.value)||"").trim(),Xt(),w();break;case"title":p();break;case"maps":w();break;case"hunt":b(L.dataset.id);break;case"lockedHunt":(ae=L.animate)==null||ae.call(L,[{transform:"translateX(-5px)"},{transform:"translateX(5px)"},{transform:"none"}],300),Ln.hmm();break;case"chest":le();break;case"guide":ve();break;case"openAll":Qe.openAll=!Qe.openAll,Xt(),ve();break;case"reset":confirm("Start everything fresh? This clears all maps and conversations on this device.")&&(_v(),Qe=jc(),p());break;case"startClue":T();break;case"search":S();break;case"backToClue":g();break;case"found":y();break;case"talkedDiscuss":m(),R();break;case"skipDiscuss":R();break;case"pick":te(+L.dataset.n);break;case"choose":L.classList.contains("dim")||te(+L.dataset.i);break;case"num":{const j=L.dataset.n;j==="del"?o=o.slice(0,-1):j==="ok"?o&&(te(+o)||(o="")):o.length<4&&(o+=j),et("numShow")&&(et("numShow").innerHTML=o||"&nbsp;");break}case"hint":W();break;case"closeHint":h.dataset.from==="search"?S():g();break;case"talkedLearn":m(),X();break;case"revealOnly":X();break;case"nextClue":k.clue++,k.step="clue",k.ask=0,Xt(),T();break;case"talkedFinal":m(),L.disabled=!0,L.textContent="Talked ✓ · جزاكم الله خيرا";break;case"replay":Qe.hunts[i.id]={...Jc(),talks:0},Xt(),b(i.id);break;case"home":w();break;case"surahs":ne();break;case"closeSurahs":et("surahModal").classList.add("hidden");break;case"map":G();break;case"closeOverlay":g();break;case"mute":Qe.muted=!Qe.muted,ic(Qe.muted),et("muteBtn").innerHTML=vt(Qe.muted?"mute":"sound"),et("muteBtn").classList.add("dk-iconbtn"),Xt();break;case"rotL":e.rotate(-1);break;case"rotR":e.rotate(1);break;default:return}["pick","choose","num"].includes(J)||Ln.tap()}document.addEventListener("click",J=>{xv();const L=J.target.closest("[data-act]");L&&!L.disabled&&de(L.dataset.act,L)});const Z=Pt.map(J=>{const L=document.createElement("span");return L.className="rlabel",et("labels").appendChild(L),L});function Pe(){const J=!!i&&et("overlay").classList.contains("hidden"),L=i?wt(i.id):null,k=L?L.done?5:L.clue+(["next","treasure"].includes(L.step)?1:0):0;Pt.forEach((A,ae)=>{const j=Z[ae];if(!J){j.style.display="none";return}const[fe,pe]=e.project(A.x,ae<k?A.top+.4:A.top*.32+2.6,A.z);j.style.display="",j.style.left=fe+"px",j.style.top=pe+"px";const ce=ae===k&&L.step!=="next"&&!l,Ce="rlabel "+(ae<k?"":ce?"target":"fog"),E=ae<k?`${A.icon} ${A.name}`:ce?"🔍 The clue leads here":"❓ ???";j.className!==Ce&&(j.className=Ce),j.textContent!==E&&(j.textContent=E)})}let Ve=performance.now();function Be(J){const L=Math.max(0,Math.min(.1,(J-Ve)/1e3))*_s;Ve=J,e.update(L),e.render(),Pe(),requestAnimationFrame(Be)}t(),requestAnimationFrame(Be),Qe.child||Object.keys(Qe.hunts).length?w():p(),window.game={ready:!0,world:e,HUNTS:Mi,REGIONS:Pt,get state(){return Qe},get hunt(){return i==null?void 0:i.id},get step(){return i?wt(i.id):null},get ask(){return s},setSpeed:J=>{_s=J},answer:te,busy:()=>l||e.busy()}}Sv();
