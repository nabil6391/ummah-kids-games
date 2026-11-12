(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Ms=()=>matchMedia("(prefers-reduced-motion: reduce)").matches,qc=n=>String(n??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),V={red:"#ea5d50",gold:"#f6cf5c",green:"#71cf6d",blue:"#6f95e6",teal:"#5fbfb0",purple:"#a98ae0",orange:"#f3a04c",pink:"#f08cb0",sand:"#e9d6a8",paper:"#fffaf0",skin:"#e0a878",skin2:"#c68a5e",wood:"#c98a4d",sky:"#bfe0f5"},Rn=(n,e,t)=>`<ellipse cx="${n}" cy="${t}" rx="1.7" ry="2.4" fill="currentColor" stroke="none"/><ellipse cx="${e}" cy="${t}" rx="1.7" ry="2.4" fill="currentColor" stroke="none"/>`,gs={fire:`<path d="M32 6c3 8 12 12 12 24a12 12 0 0 1-24 0c0-6 3-9 5-12 0 5 2 7 4 8 0-8-1-14 3-20z" fill="${V.orange}"/><path d="M32 22c2 4 6 6 6 11a6 6 0 0 1-12 0c0-4 3-6 6-11z" fill="${V.gold}" stroke="none"/><path d="M14 56h36" /><path d="M18 50l28 6M46 50l-28 6" stroke-width="4"/>`,moon:'<path d="M40 8a22 22 0 1 0 16 36A18 18 0 0 1 40 8z" fill="#fff2a8"/><circle cx="50" cy="16" r="2" fill="currentColor" stroke="none"/><circle cx="58" cy="30" r="1.6" fill="currentColor" stroke="none"/>',star:`<path d="M32 6l7.5 16 17.5 2-13 12 3.5 17L32 44l-15.5 9 3.5-17-13-12 17.5-2z" fill="${V.gold}"/>`,book:`<path d="M8 14q22-6 24 4v36q-2-8-24-4z" fill="${V.paper}"/><path d="M56 14q-22-6-24 4v36q2-8 24-4z" fill="${V.paper}"/><path d="M14 24l12 2M14 32l12 2M38 26l12-2M38 34l12-2" stroke-width="2.4"/>`,quran:`<path d="M10 42l22 10 22-10v-8l-22 10-22-10z" fill="${V.wood}"/><path d="M12 30q20-8 20 2v18q0-8-20-2z" fill="${V.green}"/><path d="M52 30q-20-8-20 2v18q0-8 20-2z" fill="${V.green}"/><path d="M18 36l8 1M18 42l8 1M38 37l8-1M38 43l8-1" stroke="#fff" stroke-width="2.4"/><path d="M32 12v6M24 16l3 4M40 16l-3 4" stroke-width="2.6"/>`,scroll:`<path d="M16 14h32v34H16z" fill="${V.paper}"/><rect x="10" y="10" width="44" height="8" rx="4" fill="${V.sand}"/><rect x="10" y="46" width="44" height="8" rx="4" fill="${V.sand}"/><path d="M24 26h16M24 34h12" stroke-width="2.6"/>`,map:`<path d="M8 16l16-6 16 6 16-6v38l-16 6-16-6-16 6z" fill="${V.sand}"/><path d="M24 10v38M40 16v38" stroke-width="2.4"/><path d="M14 36q6-10 14-4t12-8" stroke="${V.red}" stroke-dasharray="4 3" stroke-width="2.6"/><path d="M44 24l6 6M50 24l-6 6" stroke="${V.red}" stroke-width="3"/>`,chest:`<rect x="8" y="26" width="48" height="28" rx="4" fill="${V.wood}"/><path d="M8 30a24 14 0 0 1 48 0z" fill="${V.red}"/><rect x="26" y="26" width="12" height="12" rx="2" fill="${V.gold}"/><path d="M8 30h48" />`,key:`<circle cx="22" cy="24" r="12" fill="${V.gold}"/><circle cx="22" cy="24" r="4" fill="${V.paper}"/><path d="M32 30l20 20M46 44l6-6M40 50l6-6" stroke-width="5" stroke="currentColor"/><path d="M32 30l20 20M46 44l6-6M40 50l6-6" stroke="${V.gold}" stroke-width="2"/>`,lock:`<rect x="14" y="28" width="36" height="28" rx="6" fill="${V.gold}"/><path d="M20 28v-8a12 12 0 0 1 24 0v8" fill="none" stroke-width="5"/><circle cx="32" cy="40" r="4" fill="currentColor" stroke="none"/><path d="M32 42v8" stroke-width="3.5"/>`,unlock:`<rect x="14" y="28" width="36" height="28" rx="6" fill="${V.green}"/><path d="M20 28v-8a12 12 0 0 1 24 0" fill="none" stroke-width="5"/><circle cx="32" cy="40" r="4" fill="currentColor" stroke="none"/><path d="M32 42v8" stroke-width="3.5"/>`,house:`<path d="M6 32L32 8l26 24" fill="none" stroke-width="4"/><path d="M12 30v26h40V30" fill="${V.paper}"/><path d="M12 30L32 12l20 18z" fill="${V.red}"/><rect x="26" y="38" width="12" height="18" rx="2" fill="${V.wood}"/><rect x="42" y="36" width="8" height="8" fill="${V.sky}"/>`,door:`<rect x="16" y="8" width="32" height="50" rx="14" fill="${V.wood}"/><rect x="22" y="14" width="20" height="38" rx="8" fill="none" stroke-width="2.4"/><circle cx="40" cy="36" r="3" fill="${V.gold}"/><path d="M8 58h48" stroke-width="3.5"/>`,magnifier:`<circle cx="26" cy="26" r="16" fill="#dfe8ff"/><circle cx="26" cy="26" r="9" fill="none" stroke="#fff" stroke-width="3"/><path d="M38 38l16 16" stroke-width="8"/><path d="M38 38l16 16" stroke="${V.red}" stroke-width="3.5"/>`,badge:`<path d="M20 36l-6 22 18-8 18 8-6-22" fill="${V.red}"/><circle cx="32" cy="24" r="18" fill="${V.gold}"/><path d="M32 13l3.5 7 8 1-6 5.5 1.5 8-7-4-7 4 1.5-8-6-5.5 8-1z" fill="${V.paper}" stroke-width="2.2"/>`,tick:`<path d="M12 34l14 14 26-30" fill="none" stroke-width="11"/><path d="M12 34l14 14 26-30" fill="none" stroke="${V.green}" stroke-width="5"/>`,hand:`<path d="M22 30V14a4 4 0 0 1 8 0v14l2-18a4 4 0 0 1 8 0v18l2-10a4 4 0 0 1 8 0v18c0 12-8 20-18 20S14 50 14 38v-6a4 4 0 0 1 8 0z" fill="${V.skin}"/>`,talk:`<path d="M8 12h30a6 6 0 0 1 6 6v14a6 6 0 0 1-6 6H24l-10 8v-8H8a6 6 0 0 1-6-6V18a6 6 0 0 1 6-6z" fill="${V.blue}" transform="translate(4 0)"/><path d="M34 30h22a5 5 0 0 1 5 5v12a5 5 0 0 1-5 5h-4v7l-9-7H34a5 5 0 0 1-5-5V35a5 5 0 0 1 5-5z" fill="${V.gold}"/><path d="M16 22h16M16 28h10" stroke="#fff" stroke-width="2.6"/>`,ear:`<path d="M20 26a14 14 0 0 1 28 0c0 10-8 10-10 18-1 6-5 10-10 10-4 0-7-3-7-7" fill="${V.skin}"/><path d="M30 28a5 5 0 0 1 10 0c0 5-5 5-6 10" fill="none" stroke-width="2.6"/>`,eye:`<path d="M4 32q28-26 56 0Q32 58 4 32z" fill="#fff"/><circle cx="32" cy="32" r="9" fill="${V.teal}"/><circle cx="32" cy="32" r="4" fill="currentColor" stroke="none"/><circle cx="36" cy="28" r="1.8" fill="#fff" stroke="none"/>`,heart:`<path d="M32 56S6 40 6 22a13 13 0 0 1 26-4 13 13 0 0 1 26 4c0 18-26 34-26 34z" fill="${V.pink}"/><ellipse cx="20" cy="20" rx="4" ry="2.5" fill="#fff" stroke="none" transform="rotate(-30 20 20)"/>`,people:`<circle cx="20" cy="22" r="9" fill="${V.skin2}"/><path d="M4 56c0-12 7-18 16-18s16 6 16 18z" fill="${V.blue}"/><circle cx="44" cy="20" r="11" fill="${V.skin}"/><path d="M26 56c0-13 8-20 18-20s18 7 18 20z" fill="${V.green}"/>${Rn(17,23,22)}${Rn(40,48,20)}`,child:`<path d="M18 20a14 14 0 0 1 28 0v10H18z" fill="${V.purple}"/><circle cx="32" cy="24" r="12" fill="${V.skin}"/><path d="M12 58c0-12 9-20 20-20s20 8 20 20z" fill="${V.teal}"/>${Rn(27.5,36.5,24)}<path d="M28 30q4 3 8 0" fill="none" stroke-width="2.2"/>`,grownup:`<path d="M14 58c0-14 8-22 18-22s18 8 18 22z" fill="${V.blue}"/><circle cx="32" cy="20" r="13" fill="${V.skin2}"/><path d="M19 18a13 13 0 0 1 26 0v6q-13-6-26 0z" fill="${V.paper}"/>${Rn(27,37,22)}<path d="M27 28q5 4 10 0" fill="none" stroke-width="2.2"/>`,family:`<circle cx="18" cy="18" r="9" fill="${V.skin2}"/><path d="M4 50c0-12 6-18 14-18s14 6 14 18z" fill="${V.blue}"/><circle cx="46" cy="18" r="9" fill="${V.skin}"/><path d="M32 50c0-12 6-18 14-18s14 6 14 18z" fill="${V.pink}"/><circle cx="32" cy="36" r="7" fill="${V.skin}"/><path d="M22 60c0-9 4-14 10-14s10 5 10 14z" fill="${V.gold}"/>${Rn(15.5,20.5,18)}${Rn(43.5,48.5,18)}${Rn(30,34,36)}`,chalk:`<rect x="6" y="10" width="52" height="38" rx="3" fill="${V.wood}"/><rect x="11" y="15" width="42" height="28" fill="#3f6b58"/><path d="M18 24h14M18 32h22M18 38h10" stroke="#fff" stroke-width="2.4"/><path d="M20 48v10M44 48v10" stroke-width="3.5"/>`,camel:`<path d="M14 56V40q-6-8 2-16 6-6 14-4 6-10 14-8 6 2 8 8 4 2 4 8v8l-6 2v18" fill="${V.sand}"/><path d="M12 24q6-10 20-8" fill="none" stroke-width="2.4"/><path d="M26 40v16M40 40v16" stroke-width="3"/><circle cx="50" cy="26" r="1.8" fill="currentColor" stroke="none"/>`,dua:`<path d="M20 58V34q-10-2-12-14l6-10q6 0 8 8l4 8v32z" fill="${V.skin}"/><path d="M44 58V34q10-2 12-14l-6-10q-6 0-8 8l-4 8v32z" fill="${V.skin}"/><path d="M26 44h12" stroke-width="2"/>`,mosque:`<path d="M10 58V34h44v24z" fill="${V.paper}"/><path d="M14 34a18 14 0 0 1 36 0z" fill="${V.teal}"/><path d="M32 12v8" stroke-width="3"/><circle cx="32" cy="11" r="2.2" fill="${V.gold}"/><rect x="26" y="42" width="12" height="16" rx="6" fill="${V.wood}"/><path d="M6 58V22l4-6 4 6v36M50 58V22l4-6 4 6v36" fill="${V.paper}"/>`,compass:`<circle cx="32" cy="32" r="24" fill="${V.sand}"/><circle cx="32" cy="32" r="18" fill="${V.paper}"/><path d="M32 14l6 18-6 18-6-18z" fill="${V.red}"/><path d="M32 32l-6-0 6 18 6-18z" fill="#fff" stroke="none"/><circle cx="32" cy="32" r="3" fill="currentColor" stroke="none"/>`,puzzle:`<path d="M12 14h16a6 6 0 1 1 12 0h12v16a6 6 0 1 0 0 12v16H36a6 6 0 1 1-12 0H12V42a6 6 0 1 1 0-12z" fill="${V.purple}"/>`,lantern:`<path d="M22 20h20l4 28H18z" fill="#fff2a8"/><rect x="20" y="12" width="24" height="8" rx="3" fill="${V.wood}"/><path d="M32 12V6M18 48h28l-4 8H22z" fill="${V.wood}"/><path d="M32 28c2 3 4 5 4 8a4 4 0 0 1-8 0c0-3 2-5 4-8z" fill="${V.orange}" stroke-width="2"/>`,gem:`<path d="M16 12h32l10 14-26 30L6 26z" fill="${V.teal}"/><path d="M6 26h52M16 12l10 14 6-14 6 14 10-14M26 26l6 30 6-30" fill="none" stroke-width="2.4"/>`,sound:'<path d="M8 24h10l14-12v40L18 40H8z" fill="#fff"/><path d="M40 22a14 14 0 0 1 0 20M46 14a24 24 0 0 1 0 36" fill="none" stroke-width="4.5"/>',mute:`<path d="M8 24h10l14-12v40L18 40H8z" fill="#fff"/><path d="M40 24l16 16M56 24L40 40" stroke-width="6"/><path d="M40 24l16 16M56 24L40 40" stroke="${V.red}" stroke-width="2.8"/>`,help:`<circle cx="32" cy="32" r="24" fill="${V.blue}"/><path d="M24 26a8 8 0 1 1 12 7c-3 2-4 3-4 7" fill="none" stroke="#fff" stroke-width="5"/><circle cx="32" cy="47" r="3.2" fill="#fff" stroke="none"/>`,home:`<path d="M8 30L32 10l24 20" fill="none" stroke-width="4"/><path d="M14 28v26h36V28" fill="${V.paper}"/><rect x="26" y="38" width="12" height="16" rx="2" fill="${V.wood}"/>`,pause:'<rect x="14" y="12" width="12" height="40" rx="3" fill="#fff"/><rect x="38" y="12" width="12" height="40" rx="3" fill="#fff"/>',play:'<path d="M18 10l34 22-34 22z" fill="#fff"/>',back:'<path d="M38 12L16 32l22 20" fill="none" stroke-width="9"/><path d="M38 12L16 32l22 20" fill="none" stroke="#fff" stroke-width="4"/>',pencil:`<path d="M12 52l4-14 28-28 10 10-28 28z" fill="${V.gold}"/><path d="M40 14l10 10" /><path d="M16 38l10 10" /><path d="M12 52l4-14 10 10z" fill="${V.skin}"/>`,dice:`<rect x="10" y="10" width="44" height="44" rx="9" fill="#fff"/><circle cx="22" cy="22" r="4" fill="currentColor" stroke="none"/><circle cx="42" cy="22" r="4" fill="currentColor" stroke="none"/><circle cx="32" cy="32" r="4" fill="${V.red}" stroke="none"/><circle cx="22" cy="42" r="4" fill="currentColor" stroke="none"/><circle cx="42" cy="42" r="4" fill="currentColor" stroke="none"/>`,mic:`<rect x="22" y="6" width="20" height="32" rx="10" fill="${V.red}"/><path d="M14 30a18 18 0 0 0 36 0M32 48v10M22 58h20" fill="none" stroke-width="4"/>`,palette:`<path d="M32 8a24 24 0 1 0 8 46c4-2 2-6 0-8s-2-6 4-6h4a8 8 0 0 0 8-8A24 24 0 0 0 32 8z" fill="${V.paper}"/><circle cx="20" cy="26" r="4" fill="${V.red}" stroke="none"/><circle cx="30" cy="18" r="4" fill="${V.gold}" stroke="none"/><circle cx="42" cy="20" r="4" fill="${V.green}" stroke="none"/><circle cx="18" cy="38" r="4" fill="${V.blue}" stroke="none"/>`,mask:`<path d="M10 14q22 10 44 0v20a22 22 0 0 1-44 0z" fill="${V.purple}"/><path d="M20 28q4-4 8 0M36 28q4-4 8 0" fill="none" stroke-width="3"/><path d="M24 42q8 6 16 0" fill="none" stroke-width="3"/>`,question:`<circle cx="32" cy="32" r="24" fill="${V.gold}"/><path d="M24 26a8 8 0 1 1 12 7c-3 2-4 3-4 7" fill="none" stroke-width="5"/><circle cx="32" cy="47" r="3.2" fill="currentColor" stroke="none"/>`,ban:`<circle cx="32" cy="32" r="24" fill="#fff"/><circle cx="32" cy="32" r="16" fill="none" stroke="${V.red}" stroke-width="6"/><path d="M21 21l22 22" stroke="${V.red}" stroke-width="6"/>`,sun:`<circle cx="32" cy="32" r="14" fill="${V.gold}"/><path d="M32 6v8M32 50v8M6 32h8M50 32h8M13 13l6 6M45 45l6 6M13 51l6-6M45 19l6-6" stroke-width="4"/>`,cloud:'<path d="M18 48a10 10 0 0 1-2-20 14 14 0 0 1 27-4 10 10 0 0 1 5 24z" fill="#fff"/>',water:'<path d="M32 6c8 12 16 20 16 32a16 16 0 0 1-32 0C16 26 24 18 32 6z" fill="#78c4dc"/><ellipse cx="25" cy="38" rx="3" ry="6" fill="#e9f7fb" stroke="none"/>',brick:`<rect x="6" y="14" width="24" height="12" fill="${V.wood}"/><rect x="34" y="14" width="24" height="12" fill="${V.orange}"/><rect x="18" y="30" width="26" height="12" fill="${V.orange}"/><rect x="6" y="30" width="8" height="12" fill="${V.wood}"/><rect x="48" y="30" width="10" height="12" fill="${V.wood}"/><rect x="6" y="46" width="24" height="12" fill="${V.orange}"/><rect x="34" y="46" width="24" height="12" fill="${V.wood}"/>`,bee:`<ellipse cx="32" cy="36" rx="16" ry="12" fill="${V.gold}"/><path d="M26 25v22M34 25v22M42 28v16" stroke-width="3.5"/><ellipse cx="22" cy="20" rx="10" ry="6" fill="#fff" transform="rotate(-25 22 20)"/><ellipse cx="42" cy="20" rx="10" ry="6" fill="#fff" transform="rotate(25 42 20)"/><circle cx="14" cy="36" r="6" fill="${V.gold}"/><circle cx="12" cy="35" r="1.6" fill="currentColor" stroke="none"/>`,leaf:`<path d="M12 52C12 26 30 10 54 10c0 26-16 44-42 42z" fill="${V.green}"/><path d="M14 50L46 18" fill="none" stroke-width="2.8"/>`,school:`<path d="M8 58V28l24-14 24 14v30z" fill="${V.paper}"/><path d="M8 28l24-14 24 14" fill="none" stroke-width="4"/><rect x="26" y="40" width="12" height="18" rx="2" fill="${V.wood}"/><circle cx="32" cy="30" r="5" fill="${V.gold}"/><path d="M32 8v8" stroke-width="3"/><path d="M32 8h10l-10 5z" fill="${V.red}"/>`,friends:`<circle cx="22" cy="22" r="10" fill="${V.skin}"/><circle cx="44" cy="24" r="9" fill="${V.skin2}"/><path d="M6 56c0-12 7-18 16-18s16 6 16 18z" fill="${V.green}"/><path d="M30 56c0-11 6-16 14-16s14 5 14 16z" fill="${V.orange}"/>${Rn(19,25,22)}${Rn(41.5,46.5,24)}<path d="M19 28q3 2 6 0M41 29q3 2 6 0" fill="none" stroke-width="2"/>`,money:`<ellipse cx="32" cy="40" rx="22" ry="10" fill="${V.gold}"/><ellipse cx="32" cy="32" rx="22" ry="10" fill="${V.gold}"/><ellipse cx="32" cy="24" rx="22" ry="10" fill="#fff2a8"/><ellipse cx="32" cy="24" rx="12" ry="5" fill="none" stroke-width="2.2"/>`,phone:`<rect x="18" y="6" width="28" height="52" rx="6" fill="#fff"/><rect x="22" y="12" width="20" height="36" rx="2" fill="${V.sky}"/><circle cx="32" cy="53" r="2.2" fill="currentColor" stroke="none"/>`,sparkle:`<path d="M26 6l5 15 15 5-15 5-5 15-5-15-15-5 15-5z" fill="${V.gold}"/><path d="M48 34l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#fff"/>`,crystal:`<path d="M20 48l12-40 12 40z" fill="${V.purple}"/><path d="M14 56h36l-6-8H20z" fill="${V.blue}"/><path d="M32 8v40" stroke-width="2"/>`,seedling:`<path d="M12 56q20-6 40 0z" fill="${V.wood}"/><path d="M32 52V30" stroke-width="4"/><path d="M32 36q-2-14-16-14 2 14 16 14z" fill="${V.green}"/><path d="M32 30q2-14 16-14-2 14-16 14z" fill="#b4de94"/>`,rehal:`<path d="M8 48l24-16 24 16-24 10z" fill="${V.wood}"/><path d="M14 30q18-8 18 0v14q0-8-18 0z" fill="${V.paper}"/><path d="M50 30q-18-8-18 0v14q0-8 18 0z" fill="${V.paper}"/>`,juz:`<path d="M12 10h36a4 4 0 0 1 4 4v38a4 4 0 0 1-4 4H12z" fill="${V.teal}"/><path d="M12 10v46M20 10v46" stroke-width="2.4"/><rect x="28" y="22" width="18" height="12" rx="2" fill="${V.paper}"/>`,flag:`<path d="M16 58V8" stroke-width="5"/><path d="M18 10h30l-6 12 6 12H18z" fill="${V.red}"/>`,stop:`<path d="M20 8h24l16 16v24L44 60H20L4 44V20z" fill="${V.red}"/><path d="M20 32h24" stroke="#fff" stroke-width="6"/>`,shield:`<path d="M32 6l22 8v18c0 14-10 22-22 28C20 54 10 46 10 32V14z" fill="${V.blue}"/><path d="M22 32l7 7 13-14" fill="none" stroke="#fff" stroke-width="5"/>`,trophy:`<path d="M18 8h28v14a14 14 0 0 1-28 0z" fill="${V.gold}"/><path d="M18 14H8a10 10 0 0 0 10 10M46 14h10a10 10 0 0 1-10 10" fill="none" stroke-width="3.5"/><path d="M28 36h8v8h-8z" fill="${V.gold}"/><rect x="18" y="44" width="28" height="10" rx="3" fill="${V.wood}"/>`,hourglass:`<path d="M16 8h32l-12 24 12 24H16l12-24z" fill="#fff"/><path d="M22 14h20l-10 14zM24 52h16l-8-10z" fill="${V.sand}" stroke="none"/><path d="M12 8h40M12 56h40" stroke-width="4"/>`},Rs=new Map;function Lt(n,e=""){const t=n+"|"+e;return Rs.has(t)||Rs.set(t,`<span class="dk-ico ${e}" data-ic="${n}"><svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">${gs[n]||gs.star}</svg></span>`),Rs.get(t)}const Yc=n=>n in gs;function jc(n){for(const[e,t]of Object.entries(n)){const i=document.getElementById(e);i&&(i.classList.add("dk-iconbtn"),i.innerHTML=Lt(t))}}const Zl=n=>n?n.startsWith("data:")||n.startsWith("blob:")||n.startsWith("/")||n.startsWith("http")?`<img src="${n}" alt="" ${n.startsWith("data:image/svg")?'class="contain"':""}>`:Yc(n)?Lt(n):`<span class="glyph">${n}</span>`:"";function Lo(n){const e=n.tag?`<span class="tag ${n.tagKind||""}">${n.tag}</span>`:"",t=n.pips?`<span class="dkpips">${Array.from({length:n.pips[1]},(s,a)=>`<i class="${a<n.pips[0]?"on":""}"></i>`).join("")}</span>`:"",i=n.meta||t?`<div class="meta">${t}${n.meta||""}</div>`:"",r=`${n.attr?`${n.attr}="${qc(n.id)}"`:""} ${n.data||""} style="--i:${n.i||0}${n.colorHex?`;--c:${n.colorHex}`:""}${n.darkHex?`;--cd:${n.darkHex}`:""}" ${n.locked?"disabled":""}`;return`<button class="dkcard ${n.color||""} ${n.locked?"locked":""} ${n.done?"done":""} ${n.cls||""}" ${r}>
    ${e}<span class="pic ${n.tall?"tall":""}">${Zl(n.locked&&!n.keepPic?"lock":n.pic)}</span>
    <h3>${n.title}</h3>${n.sub?`<span class="sub">${n.sub}</span>`:""}${i}</button>`}const Zc=n=>`<div class="dksteps">${n.map((e,t)=>`<div class="dkstep" style="--i:${t}">${Lt(e.icon||"hand")}${e.title?`<b>${e.title}</b>`:""}<p>${e.text}</p></div>`).join("")}</div>`,Kl=(n,e,t="",i=0)=>`<span class="dkchip ${t}" style="--i:${i}">${n?Lt(n):""}${e}</span>`,Kc=n=>`<div class="dkstats">${n.map((e,t)=>Kl(e[0],e[1],e[2]||"",t)).join("")}</div>`;function Jc(n,{tone:e="",glow:t=!1,sparkles:i=0}={}){const r=i?`<span class="sparkles">${Array.from({length:i},(s,a)=>`<i style="--i:${a};left:${8+a*37%84}%;top:${10+a*53%55}%"></i>`).join("")}</span>`:"";return`<div class="dkhero ${e?"dk-"+e:""}">${r}${t?'<span class="glow"></span>':""}${n.map((s,a)=>s.src?`<img src="${s.src}" alt="" class="${s.cls||""}" style="--i:${a}">`:Lt(s.icon,s.cls||"").replace("style=","").replace('class="dk-ico',`style="--i:${a}" class="dk-ico`)).join("")}</div>`}const Jl=()=>{let n=document.getElementById("dkfx");return n||(n=document.createElement("div"),n.id="dkfx",document.body.appendChild(n)),n},Io=["#f6cf5c","#ea5d50","#71cf6d","#6f95e6","#f08cb0","#5fbfb0","#fff"];function Qc(n,e,{n:t=28,spread:i=180,up:r=130}={}){if(Ms())return;const s=Jl();for(let a=0;a<t;a++){const o=document.createElement("i");o.className="dkconf";const l=-Math.PI/2+(Math.random()-.5)*2.2,c=i*(.4+Math.random()*.6);o.style.cssText=`left:${n}px;top:${e}px;background:${Io[a%Io.length]};--dx:${Math.cos(l)*c}px;--dy:${Math.sin(l)*c*.5+r}px;--rot:${(Math.random()-.5)*900}deg;--kt:${.9+Math.random()*.7}s;transform:rotate(${Math.random()*360}deg)`,s.appendChild(o),setTimeout(()=>o.remove(),1700)}}function Ql(n,e,t=6){if(!Ms())for(let i=0;i<t;i++){const r=document.createElement("i");r.className="dkstar",r.innerHTML=`<svg viewBox="0 0 64 64" fill="none" stroke="#6b2f1a" stroke-width="3" stroke-linejoin="round">${gs.star}</svg>`,r.style.cssText=`left:${n}px;top:${e}px;--dx:${(Math.random()-.5)*140}px;--dy:${-40-Math.random()*80}px;--kt:${.7+Math.random()*.5}s`,Jl().appendChild(r),setTimeout(()=>r.remove(),1300)}}function eh(n,e=!1){const t=n?.getBoundingClientRect?.();if(!t)return;const i=t.left+t.width/2,r=t.top+t.height/2;Qc(i,r,{n:e?44:20,spread:e?280:150}),e&&Ql(i,r,8)}function th(n,e,{from:t=0,dur:i=800,fmt:r=s=>Math.round(s).toLocaleString("en-US")}={}){if(!n)return;if(Ms()||i<=0){n.textContent=r(e);return}const s=performance.now(),a=o=>{const l=Math.min(1,(o-s)/i),c=1-Math.pow(1-l,3);n.textContent=r(t+(e-t)*c),l<1&&requestAnimationFrame(a)};requestAnimationFrame(a)}function nh(n){const e=n.stars!=null?`<div class="stars">${[0,1,2].map(i=>Lt("star")).join("")}</div>`:"",t=n.count!=null?`<div class="count">${Lt(n.countIcon||"talk")}<b class="dkcount" data-to="${n.count}">0</b><span>${n.countLabel||""}</span></div>`:"";return`<div class="dkreward" data-stars="${n.stars??""}">${n.medal?`<div class="medal">${Zl(n.medal)}</div>`:""}${n.title?`<h2>${n.title}</h2>`:""}${e}${t}${n.text?`<p>${n.text}</p>`:""}${n.chips?`<div class="chips">${n.chips.map((i,r)=>Kl(i[0],i[1],i[2]||"",r)).join("")}</div>`:""}</div>`}function ih(n=document){const e=n.querySelector?.(".dkreward")||n;if(!e)return;const t=+e.dataset.stars||0,i=[...e.querySelectorAll(".stars .dk-ico")],r=Ms();i.forEach((s,a)=>{a<t&&setTimeout(()=>{if(s.classList.add("lit"),!r){const o=s.getBoundingClientRect();Ql(o.left+o.width/2,o.top+o.height/2,3)}},r?0:350+a*260)}),e.querySelectorAll(".dkcount").forEach(s=>setTimeout(()=>th(s,+s.dataset.to),r?0:200)),setTimeout(()=>eh(e.querySelector(".medal")||e,!0),r?0:120)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ja="170",rh=0,Do=1,sh=2,ec=1,ah=2,Nn=3,ai=0,Yt=1,Xt=2,ri=0,Yi=1,Uo=2,No=3,Fo=4,oh=5,Mi=100,lh=101,ch=102,hh=103,dh=104,uh=200,fh=201,ph=202,mh=203,ca=204,ha=205,gh=206,_h=207,vh=208,xh=209,Mh=210,yh=211,Sh=212,bh=213,Eh=214,da=0,ua=1,fa=2,Qi=3,pa=4,ma=5,ga=6,_a=7,tc=0,wh=1,Th=2,si=0,Ah=1,Rh=2,Ch=3,Ph=4,Lh=5,Ih=6,Dh=7,nc=300,er=301,tr=302,va=303,xa=304,ys=306,_s=1e3,Si=1001,Ma=1002,Ft=1003,Uh=1004,Br=1005,yn=1006,Cs=1007,bi=1008,Vn=1009,ic=1010,rc=1011,Ar=1012,Qa=1013,wi=1014,kn=1015,Ti=1016,eo=1017,to=1018,nr=1020,sc=35902,ac=1021,oc=1022,fn=1023,lc=1024,cc=1025,ji=1026,ir=1027,no=1028,io=1029,hc=1030,ro=1031,so=1033,ls=33776,cs=33777,hs=33778,ds=33779,ya=35840,Sa=35841,ba=35842,Ea=35843,wa=36196,Ta=37492,Aa=37496,Ra=37808,Ca=37809,Pa=37810,La=37811,Ia=37812,Da=37813,Ua=37814,Na=37815,Fa=37816,ka=37817,Oa=37818,Ba=37819,za=37820,Ha=37821,us=36492,Ga=36494,Va=36495,dc=36283,$a=36284,Wa=36285,Xa=36286,Nh=3200,Fh=3201,uc=0,kh=1,ii="",Wt="srgb",or="srgb-linear",Ss="linear",at="srgb",Ci=7680,ko=519,Oh=512,Bh=513,zh=514,fc=515,Hh=516,Gh=517,Vh=518,$h=519,Oo=35044,Bo="300 es",On=2e3,vs=2001;class lr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zo=1234567;const Sr=Math.PI/180,Rr=180/Math.PI;function cr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function Ht(n,e,t){return Math.max(e,Math.min(t,n))}function ao(n,e){return(n%e+e)%e}function Wh(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Xh(n,e,t){return n!==e?(t-n)/(e-n):0}function br(n,e,t){return(1-t)*n+t*e}function qh(n,e,t,i){return br(n,e,1-Math.exp(-t*i))}function Yh(n,e=1){return e-Math.abs(ao(n,e*2)-e)}function jh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Zh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Kh(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Jh(n,e){return n+Math.random()*(e-n)}function Qh(n){return n*(.5-Math.random())}function ed(n){n!==void 0&&(zo=n);let e=zo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function td(n){return n*Sr}function nd(n){return n*Rr}function id(n){return(n&n-1)===0&&n!==0}function rd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function sd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ad(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*h,l*f,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*f,o*c);break;case"ZXZ":n.set(l*f,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Wi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const od={DEG2RAD:Sr,RAD2DEG:Rr,generateUUID:cr,clamp:Ht,euclideanModulo:ao,mapLinear:Wh,inverseLerp:Xh,lerp:br,damp:qh,pingpong:Yh,smoothstep:jh,smootherstep:Zh,randInt:Kh,randFloat:Jh,randFloatSpread:Qh,seededRandom:ed,degToRad:td,radToDeg:nd,isPowerOfTwo:id,ceilPowerOfTwo:rd,floorPowerOfTwo:sd,setQuaternionFromProperEuler:ad,normalize:Ot,denormalize:Wi};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,i,r,s,a,o,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],p=i[5],g=i[8],v=r[0],m=r[3],u=r[6],S=r[1],w=r[4],M=r[7],C=r[2],T=r[5],A=r[8];return s[0]=a*v+o*S+l*C,s[3]=a*m+o*w+l*T,s[6]=a*u+o*M+l*A,s[1]=c*v+h*S+f*C,s[4]=c*m+h*w+f*T,s[7]=c*u+h*M+f*A,s[2]=d*v+p*S+g*C,s[5]=d*m+p*w+g*T,s[8]=d*u+p*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*s,p=c*s-a*l,g=t*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-h*i)*v,e[2]=(o*i-r*a)*v,e[3]=d*v,e[4]=(h*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ps.makeScale(e,t)),this}rotate(e){return this.premultiply(Ps.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ps.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ps=new Be;function pc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ld(){const n=xs("canvas");return n.style.display="block",n}const Ho={};function vr(n){n in Ho||(Ho[n]=!0,console.warn(n))}function cd(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function hd(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function dd(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ke={enabled:!0,workingColorSpace:or,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===at&&(n.r=Hn(n.r),n.g=Hn(n.g),n.b=Hn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===at&&(n.r=Zi(n.r),n.g=Zi(n.g),n.b=Zi(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ii?Ss:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Hn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Go=[.64,.33,.3,.6,.15,.06],Vo=[.2126,.7152,.0722],$o=[.3127,.329],Wo=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xo=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke.define({[or]:{primaries:Go,whitePoint:$o,transfer:Ss,toXYZ:Wo,fromXYZ:Xo,luminanceCoefficients:Vo,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:Go,whitePoint:$o,transfer:at,toXYZ:Wo,fromXYZ:Xo,luminanceCoefficients:Vo,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}});let Pi;class ud{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pi===void 0&&(Pi=xs("canvas")),Pi.width=e.width,Pi.height=e.height;const i=Pi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Pi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Hn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hn(t[i]/255)*255):t[i]=Hn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fd=0;class mc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=cr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ls(r[a].image)):s.push(Ls(r[a]))}else s=Ls(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ls(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ud.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pd=0;class kt extends lr{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=Si,r=Si,s=yn,a=bi,o=fn,l=Vn,c=kt.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=cr(),this.name="",this.source=new mc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _s:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case Ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _s:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case Ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=nc;kt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,i=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,M=(p+1)/2,C=(u+1)/2,T=(h+d)/4,A=(f+v)/4,R=(g+m)/4;return w>M&&w>C?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=T/i,s=A/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=R/s),this.set(i,r,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-v)/S,this.z=(d-h)/S,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class md extends lr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends md{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class gc extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gd extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ci{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3];const d=s[a+0],p=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==d||c!==p||h!==g){let m=1-o;const u=l*d+c*p+h*g+f*v,S=u>=0?1:-1,w=1-u*u;if(w>Number.EPSILON){const C=Math.sqrt(w),T=Math.atan2(C,u*S);m=Math.sin(m*T)/C,o=Math.sin(o*T)/C}const M=o*S;if(l=l*m+d*M,c=c*m+p*M,h=h*m+g*M,f=f*m+v*M,m===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=C,c*=C,h*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*f+l*p-c*d,e[t+1]=l*g+h*d+c*f-o*p,e[t+2]=c*g+h*p+o*d-l*f,e[t+3]=h*g-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),f=o(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*f+c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f-d*p*g;break;case"YXZ":this._x=d*h*f+c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f+d*p*g;break;case"ZXY":this._x=d*h*f-c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f-d*p*g;break;case"ZYX":this._x=d*h*f-c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f+d*p*g;break;case"YZX":this._x=d*h*f+c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f-d*p*g;break;case"XZY":this._x=d*h*f-c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*h,this.y=i+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Is.copy(this).projectOnVector(e),this.sub(Is)}reflect(e){return this.sub(Is.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Is=new U,qo=new ci;class Lr{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(s,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zr.copy(i.boundingBox)),zr.applyMatrix4(e.matrixWorld),this.union(zr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),Hr.subVectors(this.max,fr),Li.subVectors(e.a,fr),Ii.subVectors(e.b,fr),Di.subVectors(e.c,fr),jn.subVectors(Ii,Li),Zn.subVectors(Di,Ii),ui.subVectors(Li,Di);let t=[0,-jn.z,jn.y,0,-Zn.z,Zn.y,0,-ui.z,ui.y,jn.z,0,-jn.x,Zn.z,0,-Zn.x,ui.z,0,-ui.x,-jn.y,jn.x,0,-Zn.y,Zn.x,0,-ui.y,ui.x,0];return!Ds(t,Li,Ii,Di,Hr)||(t=[1,0,0,0,1,0,0,0,1],!Ds(t,Li,Ii,Di,Hr))?!1:(Gr.crossVectors(jn,Zn),t=[Gr.x,Gr.y,Gr.z],Ds(t,Li,Ii,Di,Hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Cn=[new U,new U,new U,new U,new U,new U,new U,new U],ln=new U,zr=new Lr,Li=new U,Ii=new U,Di=new U,jn=new U,Zn=new U,ui=new U,fr=new U,Hr=new U,Gr=new U,fi=new U;function Ds(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){fi.fromArray(n,s);const o=r.x*Math.abs(fi.x)+r.y*Math.abs(fi.y)+r.z*Math.abs(fi.z),l=e.dot(fi),c=t.dot(fi),h=i.dot(fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const _d=new Lr,pr=new U,Us=new U;class oo{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_d.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);const t=pr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(pr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Us.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(Us)),this.expandByPoint(pr.copy(e.center).sub(Us))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new U,Ns=new U,Vr=new U,Kn=new U,Fs=new U,$r=new U,ks=new U;class _c{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ns.copy(e).add(t).multiplyScalar(.5),Vr.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(Ns);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Vr),o=Kn.dot(this.direction),l=-Kn.dot(Vr),c=Kn.lengthSq(),h=Math.abs(1-a*a);let f,d,p,g;if(h>0)if(f=a*l-o,d=a*o-l,g=s*h,f>=0)if(d>=-g)if(d<=g){const v=1/h;f*=v,d*=v,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ns).addScaledVector(Vr,d),p}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const i=Pn.dot(this.direction),r=Pn.dot(Pn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,i,r,s){Fs.subVectors(t,e),$r.subVectors(i,e),ks.crossVectors(Fs,$r);let a=this.direction.dot(ks),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kn.subVectors(this.origin,e);const l=o*this.direction.dot($r.crossVectors(Kn,$r));if(l<0)return null;const c=o*this.direction.dot(Fs.cross(Kn));if(c<0||l+c>a)return null;const h=-o*Kn.dot(ks);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,r,s,a,o,l,c,h,f,d,p,g,v,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,f,d,p,g,v,m)}set(e,t,i,r,s,a,o,l,c,h,f,d,p,g,v,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=g,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ui.setFromMatrixColumn(e,0).length(),s=1/Ui.setFromMatrixColumn(e,1).length(),a=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*h,p=a*f,g=o*h,v=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*f,g=c*h,v=c*f;t[0]=d+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*f,g=c*h,v=c*f;t[0]=d-v*o,t[4]=-a*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*f,g=o*h,v=o*f;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*f,t[8]=g*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*f+g,t[10]=d-v*f}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+v,t[5]=a*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*h,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vd,e,xd)}lookAt(e,t,i){const r=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Jn.crossVectors(i,Zt),Jn.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Jn.crossVectors(i,Zt)),Jn.normalize(),Wr.crossVectors(Zt,Jn),r[0]=Jn.x,r[4]=Wr.x,r[8]=Zt.x,r[1]=Jn.y,r[5]=Wr.y,r[9]=Zt.y,r[2]=Jn.z,r[6]=Wr.z,r[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],u=i[14],S=i[3],w=i[7],M=i[11],C=i[15],T=r[0],A=r[4],R=r[8],b=r[12],y=r[1],P=r[5],z=r[9],k=r[13],$=r[2],ee=r[6],H=r[10],ie=r[14],W=r[3],de=r[7],_e=r[11],Se=r[15];return s[0]=a*T+o*y+l*$+c*W,s[4]=a*A+o*P+l*ee+c*de,s[8]=a*R+o*z+l*H+c*_e,s[12]=a*b+o*k+l*ie+c*Se,s[1]=h*T+f*y+d*$+p*W,s[5]=h*A+f*P+d*ee+p*de,s[9]=h*R+f*z+d*H+p*_e,s[13]=h*b+f*k+d*ie+p*Se,s[2]=g*T+v*y+m*$+u*W,s[6]=g*A+v*P+m*ee+u*de,s[10]=g*R+v*z+m*H+u*_e,s[14]=g*b+v*k+m*ie+u*Se,s[3]=S*T+w*y+M*$+C*W,s[7]=S*A+w*P+M*ee+C*de,s[11]=S*R+w*z+M*H+C*_e,s[15]=S*b+w*k+M*ie+C*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],u=e[15];return g*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*p-i*l*p)+v*(+t*l*p-t*c*d+s*a*d-r*a*p+r*c*h-s*l*h)+m*(+t*c*f-t*o*p-s*a*f+i*a*p+s*o*h-i*c*h)+u*(-r*o*h-t*l*f+t*o*d+r*a*f-i*a*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],u=e[15],S=f*m*c-v*d*c+v*l*p-o*m*p-f*l*u+o*d*u,w=g*d*c-h*m*c-g*l*p+a*m*p+h*l*u-a*d*u,M=h*v*c-g*f*c+g*o*p-a*v*p-h*o*u+a*f*u,C=g*f*l-h*v*l-g*o*d+a*v*d+h*o*m-a*f*m,T=t*S+i*w+r*M+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=S*A,e[1]=(v*d*s-f*m*s-v*r*p+i*m*p+f*r*u-i*d*u)*A,e[2]=(o*m*s-v*l*s+v*r*c-i*m*c-o*r*u+i*l*u)*A,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*p-i*l*p)*A,e[4]=w*A,e[5]=(h*m*s-g*d*s+g*r*p-t*m*p-h*r*u+t*d*u)*A,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*u-t*l*u)*A,e[7]=(a*d*s-h*l*s+h*r*c-t*d*c-a*r*p+t*l*p)*A,e[8]=M*A,e[9]=(g*f*s-h*v*s-g*i*p+t*v*p+h*i*u-t*f*u)*A,e[10]=(a*v*s-g*o*s+g*i*c-t*v*c-a*i*u+t*o*u)*A,e[11]=(h*o*s-a*f*s-h*i*c+t*f*c+a*i*p-t*o*p)*A,e[12]=C*A,e[13]=(h*v*r-g*f*r+g*i*d-t*v*d-h*i*m+t*f*m)*A,e[14]=(g*o*r-a*v*r-g*i*l+t*v*l+a*i*m-t*o*m)*A,e[15]=(a*f*r-h*o*r+h*i*l-t*f*l-a*i*d+t*o*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,f=o+o,d=s*c,p=s*h,g=s*f,v=a*h,m=a*f,u=o*f,S=l*c,w=l*h,M=l*f,C=i.x,T=i.y,A=i.z;return r[0]=(1-(v+u))*C,r[1]=(p+M)*C,r[2]=(g-w)*C,r[3]=0,r[4]=(p-M)*T,r[5]=(1-(d+u))*T,r[6]=(m+S)*T,r[7]=0,r[8]=(g+w)*A,r[9]=(m-S)*A,r[10]=(1-(d+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ui.set(r[0],r[1],r[2]).length();const a=Ui.set(r[4],r[5],r[6]).length(),o=Ui.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],cn.copy(this);const c=1/s,h=1/a,f=1/o;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=f,cn.elements[9]*=f,cn.elements[10]*=f,t.setFromRotationMatrix(cn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=On){const l=this.elements,c=2*s/(t-e),h=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let p,g;if(o===On)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===vs)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=On){const l=this.elements,c=1/(t-e),h=1/(i-r),f=1/(a-s),d=(t+e)*c,p=(i+r)*h;let g,v;if(o===On)g=(a+s)*f,v=-2*f;else if(o===vs)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ui=new U,cn=new mt,vd=new U(0,0,0),xd=new U(1,1,1),Jn=new U,Wr=new U,Zt=new U,Yo=new mt,jo=new ci;class bn{constructor(e=0,t=0,i=0,r=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Yo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jo.setFromEuler(this),this.setFromQuaternion(jo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class lo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Md=0;const Zo=new U,Ni=new ci,Ln=new mt,Xr=new U,mr=new U,yd=new U,Sd=new ci,Ko=new U(1,0,0),Jo=new U(0,1,0),Qo=new U(0,0,1),el={type:"added"},bd={type:"removed"},Fi={type:"childadded",child:null},Os={type:"childremoved",child:null};class It extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new U,t=new bn,i=new ci,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Be}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.premultiply(Ni),this}rotateX(e){return this.rotateOnAxis(Ko,e)}rotateY(e){return this.rotateOnAxis(Jo,e)}rotateZ(e){return this.rotateOnAxis(Qo,e)}translateOnAxis(e,t){return Zo.copy(e).applyQuaternion(this.quaternion),this.position.add(Zo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ko,e)}translateY(e){return this.translateOnAxis(Jo,e)}translateZ(e){return this.translateOnAxis(Qo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Xr.copy(e):Xr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(mr,Xr,this.up):Ln.lookAt(Xr,mr,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),Ni.setFromRotationMatrix(Ln),this.quaternion.premultiply(Ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(el),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bd),Os.child=e,this.dispatchEvent(Os),Os.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(el),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,yd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,Sd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}It.DEFAULT_UP=new U(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new U,In=new U,Bs=new U,Dn=new U,ki=new U,Oi=new U,tl=new U,zs=new U,Hs=new U,Gs=new U,Vs=new Mt,$s=new Mt,Ws=new Mt;class un{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),hn.subVectors(e,t),r.cross(hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){hn.subVectors(r,t),In.subVectors(i,t),Bs.subVectors(e,t);const a=hn.dot(hn),o=hn.dot(In),l=hn.dot(Bs),c=In.dot(In),h=In.dot(Bs),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Vs.setScalar(0),$s.setScalar(0),Ws.setScalar(0),Vs.fromBufferAttribute(e,t),$s.fromBufferAttribute(e,i),Ws.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Vs,s.x),a.addScaledVector($s,s.y),a.addScaledVector(Ws,s.z),a}static isFrontFacing(e,t,i,r){return hn.subVectors(i,t),In.subVectors(e,t),hn.cross(In).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),hn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return un.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ki.subVectors(r,i),Oi.subVectors(s,i),zs.subVectors(e,i);const l=ki.dot(zs),c=Oi.dot(zs);if(l<=0&&c<=0)return t.copy(i);Hs.subVectors(e,r);const h=ki.dot(Hs),f=Oi.dot(Hs);if(h>=0&&f<=h)return t.copy(r);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(ki,a);Gs.subVectors(e,s);const p=ki.dot(Gs),g=Oi.dot(Gs);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Oi,o);const m=h*g-p*f;if(m<=0&&f-h>=0&&p-g>=0)return tl.subVectors(s,r),o=(f-h)/(f-h+(p-g)),t.copy(r).addScaledVector(tl,o);const u=1/(m+v+d);return a=v*u,o=d*u,t.copy(i).addScaledVector(ki,a).addScaledVector(Oi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},qr={h:0,s:0,l:0};function Xs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=ao(e,1),t=Ht(t,0,1),i=Ht(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Xs(a,s,e+1/3),this.g=Xs(a,s,e),this.b=Xs(a,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,t=Wt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const i=vc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return Ke.fromWorkingColorSpace(Nt.copy(this),e),Math.round(Ht(Nt.r*255,0,255))*65536+Math.round(Ht(Nt.g*255,0,255))*256+Math.round(Ht(Nt.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Nt.copy(this),t);const i=Nt.r,r=Nt.g,s=Nt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Wt){Ke.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,r=Nt.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(qr);const i=br(Qn.h,qr.h,t),r=br(Qn.s,qr.s,t),s=br(Qn.l,qr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Ye;Ye.NAMES=vc;let Ed=0;class Ir extends lr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=cr(),this.name="",this.blending=Yi,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ca,this.blendDst=ha,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ko,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(i.blending=this.blending),this.side!==ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ca&&(i.blendSrc=this.blendSrc),this.blendDst!==ha&&(i.blendDst=this.blendDst),this.blendEquation!==Mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ko&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zt extends Ir{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new U,Yr=new $e;class mn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Oo,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Yr.fromBufferAttribute(this,t),Yr.applyMatrix3(e),this.setXY(t,Yr.x,Yr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oo&&(e.usage=this.usage),e}}class xc extends mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Mc extends mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Et extends mn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let wd=0;const tn=new mt,qs=new It,Bi=new U,Kt=new Lr,gr=new Lr,Ct=new U;class sn extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pc(e)?Mc:xc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,i){return tn.makeTranslation(e,t,i),this.applyMatrix4(tn),this}scale(e,t,i){return tn.makeScale(e,t,i),this.applyMatrix4(tn),this}lookAt(e){return qs.lookAt(e),qs.updateMatrix(),this.applyMatrix4(qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Et(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];gr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(Kt.min,gr.min),Kt.expandByPoint(Ct),Ct.addVectors(Kt.max,gr.max),Kt.expandByPoint(Ct)):(Kt.expandByPoint(gr.min),Kt.expandByPoint(gr.max))}Kt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ct.fromBufferAttribute(o,c),l&&(Bi.fromBufferAttribute(e,c),Ct.add(Bi)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new U,l[R]=new U;const c=new U,h=new U,f=new U,d=new $e,p=new $e,g=new $e,v=new U,m=new U;function u(R,b,y){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,b),f.fromBufferAttribute(i,y),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,y),h.sub(c),f.sub(c),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[R].add(v),o[b].add(v),o[y].add(v),l[R].add(m),l[b].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let R=0,b=S.length;R<b;++R){const y=S[R],P=y.start,z=y.count;for(let k=P,$=P+z;k<$;k+=3)u(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const w=new U,M=new U,C=new U,T=new U;function A(R){C.fromBufferAttribute(r,R),T.copy(C);const b=o[R];w.copy(b),w.sub(C.multiplyScalar(C.dot(b))).normalize(),M.crossVectors(T,b);const P=M.dot(l[R])<0?-1:1;a.setXYZW(R,w.x,w.y,w.z,P)}for(let R=0,b=S.length;R<b;++R){const y=S[R],P=y.start,z=y.count;for(let k=P,$=P+z;k<$;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,h=new U,f=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let u=0;u<h;u++)d[g++]=c[p++]}return new mn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nl=new mt,pi=new _c,jr=new oo,il=new U,Zr=new U,Kr=new U,Jr=new U,Ys=new U,Qr=new U,rl=new U,es=new U;class ot extends It{constructor(e=new sn,t=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Qr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(Ys.fromBufferAttribute(f,e),a?Qr.addScaledVector(Ys,h):Qr.addScaledVector(Ys.sub(t),h))}t.add(Qr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere),jr.applyMatrix4(s),pi.copy(e.ray).recast(e.near),!(jr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(jr,il)===null||pi.origin.distanceToSquared(il)>(e.far-e.near)**2))&&(nl.copy(s).invert(),pi.copy(e.ray).applyMatrix4(nl),!(i.boundingBox!==null&&pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,pi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],u=a[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,C=w;M<C;M+=3){const T=o.getX(M),A=o.getX(M+1),R=o.getX(M+2);r=ts(this,u,e,i,c,h,f,T,A,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){const S=o.getX(m),w=o.getX(m+1),M=o.getX(m+2);r=ts(this,a,e,i,c,h,f,S,w,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],u=a[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,C=w;M<C;M+=3){const T=M,A=M+1,R=M+2;r=ts(this,u,e,i,c,h,f,T,A,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){const S=m,w=m+1,M=m+2;r=ts(this,a,e,i,c,h,f,S,w,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Td(n,e,t,i,r,s,a,o){let l;if(e.side===Yt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ai,o),l===null)return null;es.copy(o),es.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(es);return c<t.near||c>t.far?null:{distance:c,point:es.clone(),object:n}}function ts(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Zr),n.getVertexPosition(l,Kr),n.getVertexPosition(c,Jr);const h=Td(n,e,t,i,Zr,Kr,Jr,rl);if(h){const f=new U;un.getBarycoord(rl,Zr,Kr,Jr,f),r&&(h.uv=un.getInterpolatedAttribute(r,o,l,c,f,new $e)),s&&(h.uv1=un.getInterpolatedAttribute(s,o,l,c,f,new $e)),a&&(h.normal=un.getInterpolatedAttribute(a,o,l,c,f,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};un.getNormal(Zr,Kr,Jr,d.normal),h.face=d,h.barycoord=f}return h}class hi extends sn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(f,2));function g(v,m,u,S,w,M,C,T,A,R,b){const y=M/A,P=C/R,z=M/2,k=C/2,$=T/2,ee=A+1,H=R+1;let ie=0,W=0;const de=new U;for(let _e=0;_e<H;_e++){const Se=_e*P-k;for(let ze=0;ze<ee;ze++){const Qe=ze*y-z;de[v]=Qe*S,de[m]=Se*w,de[u]=$,c.push(de.x,de.y,de.z),de[v]=0,de[m]=0,de[u]=T>0?1:-1,h.push(de.x,de.y,de.z),f.push(ze/A),f.push(1-_e/R),ie+=1}}for(let _e=0;_e<R;_e++)for(let Se=0;Se<A;Se++){const ze=d+Se+ee*_e,Qe=d+Se+ee*(_e+1),j=d+(Se+1)+ee*(_e+1),se=d+(Se+1)+ee*_e;l.push(ze,Qe,se),l.push(Qe,j,se),W+=6}o.addGroup(p,W,b),p+=W,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Bt(n){const e={};for(let t=0;t<n.length;t++){const i=rr(n[t]);for(const r in i)e[r]=i[r]}return e}function Ad(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function yc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Rd={clone:rr,merge:Bt};var Cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends Ir{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cd,this.fragmentShader=Pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=Ad(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Sc extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=On}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new U,sl=new $e,al=new $e;class dn extends Sc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ei.x,ei.y).multiplyScalar(-e/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ei.x,ei.y).multiplyScalar(-e/ei.z)}getViewSize(e,t){return this.getViewBounds(e,sl,al),t.subVectors(al,sl)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zi=-90,Hi=1;class Ld extends It{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(zi,Hi,e,t);r.layers=this.layers,this.add(r);const s=new dn(zi,Hi,e,t);s.layers=this.layers,this.add(s);const a=new dn(zi,Hi,e,t);a.layers=this.layers,this.add(a);const o=new dn(zi,Hi,e,t);o.layers=this.layers,this.add(o);const l=new dn(zi,Hi,e,t);l.layers=this.layers,this.add(l);const c=new dn(zi,Hi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===On)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class bc extends kt{constructor(e,t,i,r,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:er,super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Id extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new bc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hi(5,5,5),s=new gn({name:"CubemapFromEquirect",uniforms:rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:ri});s.uniforms.tEquirect.value=t;const a=new ot(r,s),o=t.minFilter;return t.minFilter===bi&&(t.minFilter=yn),new Ld(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const js=new U,Dd=new U,Ud=new Be;class ti{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=js.subVectors(i,t).cross(Dd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(js),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ud.getNormalMatrix(e),r=this.coplanarPoint(js).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new oo,ns=new U;class co{constructor(e=new ti,t=new ti,i=new ti,r=new ti,s=new ti,a=new ti){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=On){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],f=r[6],d=r[7],p=r[8],g=r[9],v=r[10],m=r[11],u=r[12],S=r[13],w=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,m-p,M-u).normalize(),i[1].setComponents(l+s,d+c,m+p,M+u).normalize(),i[2].setComponents(l+a,d+h,m+g,M+S).normalize(),i[3].setComponents(l-a,d-h,m-g,M-S).normalize(),i[4].setComponents(l-o,d-f,m-v,M-w).normalize(),t===On)i[5].setComponents(l+o,d+f,m+v,M+w).normalize();else if(t===vs)i[5].setComponents(o,f,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ns.x=r.normal.x>0?e.max.x:e.min.x,ns.y=r.normal.y>0?e.max.y:e.min.y,ns.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ns)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ec(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Nd(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const v=f[p];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class qt extends sn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,f=e/o,d=t/l,p=[],g=[],v=[],m=[];for(let u=0;u<h;u++){const S=u*d-a;for(let w=0;w<c;w++){const M=w*f-s;g.push(M,-S,0),v.push(0,0,1),m.push(w/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let S=0;S<o;S++){const w=S+c*u,M=S+c*(u+1),C=S+1+c*(u+1),T=S+1+c*u;p.push(w,M,T),p.push(M,C,T)}this.setIndex(p),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qt(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kd=`#ifdef USE_ALPHAHASH
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
#endif`,Od=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gd=`#ifdef USE_AOMAP
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
#endif`,Vd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$d=`#ifdef USE_BATCHING
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
#endif`,Wd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jd=`#ifdef USE_IRIDESCENCE
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
#endif`,Zd=`#ifdef USE_BUMPMAP
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
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
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
#endif`,su=`#define PI 3.141592653589793
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
} // validated`,au=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ou=`vec3 transformedNormal = objectNormal;
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
#endif`,lu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,du=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uu="gl_FragColor = linearToOutputTexel( gl_FragColor );",fu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pu=`#ifdef USE_ENVMAP
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
#endif`,mu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gu=`#ifdef USE_ENVMAP
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
#endif`,_u=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vu=`#ifdef USE_ENVMAP
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
#endif`,xu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Su=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bu=`#ifdef USE_GRADIENTMAP
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
}`,Eu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Au=`uniform bool receiveShadow;
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
#endif`,Ru=`#ifdef USE_ENVMAP
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
#endif`,Cu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Du=`PhysicalMaterial material;
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
#endif`,Uu=`struct PhysicalMaterial {
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
}`,Nu=`
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
#endif`,Fu=`#if defined( RE_IndirectDiffuse )
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
#endif`,ku=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ou=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$u=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wu=`#if defined( USE_POINTS_UV )
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
#endif`,Xu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ju=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ku=`#ifdef USE_MORPHTARGETS
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
#endif`,Ju=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ef=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sf=`#ifdef USE_NORMALMAP
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
#endif`,af=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,of=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,df=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ff=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_f=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yf=`float getShadowMask() {
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
}`,Sf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bf=`#ifdef USE_SKINNING
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
#endif`,Ef=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wf=`#ifdef USE_SKINNING
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
#endif`,Tf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Af=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pf=`#ifdef USE_TRANSMISSION
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
#endif`,Lf=`#ifdef USE_TRANSMISSION
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
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ff=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kf=`uniform sampler2D t2D;
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
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gf=`#include <common>
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
}`,Vf=`#if DEPTH_PACKING == 3200
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
}`,$f=`#define DISTANCE
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
}`,Wf=`#define DISTANCE
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
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yf=`uniform float scale;
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
}`,jf=`uniform vec3 diffuse;
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
}`,Zf=`#include <common>
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
}`,Kf=`uniform vec3 diffuse;
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
}`,Jf=`#define LAMBERT
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
}`,Qf=`#define LAMBERT
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
}`,ep=`#define MATCAP
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
}`,tp=`#define MATCAP
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
}`,np=`#define NORMAL
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
}`,ip=`#define NORMAL
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
}`,rp=`#define PHONG
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
}`,sp=`#define PHONG
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
}`,ap=`#define STANDARD
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
}`,op=`#define STANDARD
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
}`,lp=`#define TOON
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
}`,cp=`#define TOON
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
}`,hp=`uniform float size;
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
}`,dp=`uniform vec3 diffuse;
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
}`,up=`#include <common>
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
}`,fp=`uniform vec3 color;
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
}`,pp=`uniform float rotation;
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
}`,mp=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Fd,alphahash_pars_fragment:kd,alphamap_fragment:Od,alphamap_pars_fragment:Bd,alphatest_fragment:zd,alphatest_pars_fragment:Hd,aomap_fragment:Gd,aomap_pars_fragment:Vd,batching_pars_vertex:$d,batching_vertex:Wd,begin_vertex:Xd,beginnormal_vertex:qd,bsdfs:Yd,iridescence_fragment:jd,bumpmap_pars_fragment:Zd,clipping_planes_fragment:Kd,clipping_planes_pars_fragment:Jd,clipping_planes_pars_vertex:Qd,clipping_planes_vertex:eu,color_fragment:tu,color_pars_fragment:nu,color_pars_vertex:iu,color_vertex:ru,common:su,cube_uv_reflection_fragment:au,defaultnormal_vertex:ou,displacementmap_pars_vertex:lu,displacementmap_vertex:cu,emissivemap_fragment:hu,emissivemap_pars_fragment:du,colorspace_fragment:uu,colorspace_pars_fragment:fu,envmap_fragment:pu,envmap_common_pars_fragment:mu,envmap_pars_fragment:gu,envmap_pars_vertex:_u,envmap_physical_pars_fragment:Ru,envmap_vertex:vu,fog_vertex:xu,fog_pars_vertex:Mu,fog_fragment:yu,fog_pars_fragment:Su,gradientmap_pars_fragment:bu,lightmap_pars_fragment:Eu,lights_lambert_fragment:wu,lights_lambert_pars_fragment:Tu,lights_pars_begin:Au,lights_toon_fragment:Cu,lights_toon_pars_fragment:Pu,lights_phong_fragment:Lu,lights_phong_pars_fragment:Iu,lights_physical_fragment:Du,lights_physical_pars_fragment:Uu,lights_fragment_begin:Nu,lights_fragment_maps:Fu,lights_fragment_end:ku,logdepthbuf_fragment:Ou,logdepthbuf_pars_fragment:Bu,logdepthbuf_pars_vertex:zu,logdepthbuf_vertex:Hu,map_fragment:Gu,map_pars_fragment:Vu,map_particle_fragment:$u,map_particle_pars_fragment:Wu,metalnessmap_fragment:Xu,metalnessmap_pars_fragment:qu,morphinstance_vertex:Yu,morphcolor_vertex:ju,morphnormal_vertex:Zu,morphtarget_pars_vertex:Ku,morphtarget_vertex:Ju,normal_fragment_begin:Qu,normal_fragment_maps:ef,normal_pars_fragment:tf,normal_pars_vertex:nf,normal_vertex:rf,normalmap_pars_fragment:sf,clearcoat_normal_fragment_begin:af,clearcoat_normal_fragment_maps:of,clearcoat_pars_fragment:lf,iridescence_pars_fragment:cf,opaque_fragment:hf,packing:df,premultiplied_alpha_fragment:uf,project_vertex:ff,dithering_fragment:pf,dithering_pars_fragment:mf,roughnessmap_fragment:gf,roughnessmap_pars_fragment:_f,shadowmap_pars_fragment:vf,shadowmap_pars_vertex:xf,shadowmap_vertex:Mf,shadowmask_pars_fragment:yf,skinbase_vertex:Sf,skinning_pars_vertex:bf,skinning_vertex:Ef,skinnormal_vertex:wf,specularmap_fragment:Tf,specularmap_pars_fragment:Af,tonemapping_fragment:Rf,tonemapping_pars_fragment:Cf,transmission_fragment:Pf,transmission_pars_fragment:Lf,uv_pars_fragment:If,uv_pars_vertex:Df,uv_vertex:Uf,worldpos_vertex:Nf,background_vert:Ff,background_frag:kf,backgroundCube_vert:Of,backgroundCube_frag:Bf,cube_vert:zf,cube_frag:Hf,depth_vert:Gf,depth_frag:Vf,distanceRGBA_vert:$f,distanceRGBA_frag:Wf,equirect_vert:Xf,equirect_frag:qf,linedashed_vert:Yf,linedashed_frag:jf,meshbasic_vert:Zf,meshbasic_frag:Kf,meshlambert_vert:Jf,meshlambert_frag:Qf,meshmatcap_vert:ep,meshmatcap_frag:tp,meshnormal_vert:np,meshnormal_frag:ip,meshphong_vert:rp,meshphong_frag:sp,meshphysical_vert:ap,meshphysical_frag:op,meshtoon_vert:lp,meshtoon_frag:cp,points_vert:hp,points_frag:dp,shadow_vert:up,shadow_frag:fp,sprite_vert:pp,sprite_frag:mp},ce={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},xn={basic:{uniforms:Bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Bt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Bt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Bt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Bt([ce.points,ce.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Bt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Bt([ce.common,ce.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Bt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Bt([ce.sprite,ce.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Bt([ce.common,ce.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Bt([ce.lights,ce.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};xn.physical={uniforms:Bt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const is={r:0,b:0,g:0},gi=new bn,gp=new mt;function _p(n,e,t,i,r,s,a){const o=new Ye(0);let l=s===!0?0:1,c,h,f=null,d=0,p=null;function g(S){let w=S.isScene===!0?S.background:null;return w&&w.isTexture&&(w=(S.backgroundBlurriness>0?t:e).get(w)),w}function v(S){let w=!1;const M=g(S);M===null?u(o,l):M&&M.isColor&&(u(M,1),w=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,w){const M=g(w);M&&(M.isCubeTexture||M.mapping===ys)?(h===void 0&&(h=new ot(new hi(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:rr(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),gi.copy(w.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(gp.makeRotationFromEuler(gi)),h.material.toneMapped=Ke.getTransfer(M.colorSpace)!==at,(f!==M||d!==M.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,f=M,d=M.version,p=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ot(new qt(2,2),new gn({name:"BackgroundMaterial",uniforms:rr(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(M.colorSpace)!==at,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=M,d=M.version,p=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function u(S,w){S.getRGB(is,yc(n)),i.buffers.color.setClear(is.r,is.g,is.b,w,a)}return{getClearColor:function(){return o},setClearColor:function(S,w=1){o.set(S),l=w,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,u(o,l)},render:v,addToRenderList:m}}function vp(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(y,P,z,k,$){let ee=!1;const H=f(k,z,P);s!==H&&(s=H,c(s.object)),ee=p(y,k,z,$),ee&&g(y,k,z,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,M(y,P,z,k),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function f(y,P,z){const k=z.wireframe===!0;let $=i[y.id];$===void 0&&($={},i[y.id]=$);let ee=$[P.id];ee===void 0&&(ee={},$[P.id]=ee);let H=ee[k];return H===void 0&&(H=d(l()),ee[k]=H),H}function d(y){const P=[],z=[],k=[];for(let $=0;$<t;$++)P[$]=0,z[$]=0,k[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:k,object:y,attributes:{},index:null}}function p(y,P,z,k){const $=s.attributes,ee=P.attributes;let H=0;const ie=z.getAttributes();for(const W in ie)if(ie[W].location>=0){const _e=$[W];let Se=ee[W];if(Se===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(Se=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(Se=y.instanceColor)),_e===void 0||_e.attribute!==Se||Se&&_e.data!==Se.data)return!0;H++}return s.attributesNum!==H||s.index!==k}function g(y,P,z,k){const $={},ee=P.attributes;let H=0;const ie=z.getAttributes();for(const W in ie)if(ie[W].location>=0){let _e=ee[W];_e===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor));const Se={};Se.attribute=_e,_e&&_e.data&&(Se.data=_e.data),$[W]=Se,H++}s.attributes=$,s.attributesNum=H,s.index=k}function v(){const y=s.newAttributes;for(let P=0,z=y.length;P<z;P++)y[P]=0}function m(y){u(y,0)}function u(y,P){const z=s.newAttributes,k=s.enabledAttributes,$=s.attributeDivisors;z[y]=1,k[y]===0&&(n.enableVertexAttribArray(y),k[y]=1),$[y]!==P&&(n.vertexAttribDivisor(y,P),$[y]=P)}function S(){const y=s.newAttributes,P=s.enabledAttributes;for(let z=0,k=P.length;z<k;z++)P[z]!==y[z]&&(n.disableVertexAttribArray(z),P[z]=0)}function w(y,P,z,k,$,ee,H){H===!0?n.vertexAttribIPointer(y,P,z,$,ee):n.vertexAttribPointer(y,P,z,k,$,ee)}function M(y,P,z,k){v();const $=k.attributes,ee=z.getAttributes(),H=P.defaultAttributeValues;for(const ie in ee){const W=ee[ie];if(W.location>=0){let de=$[ie];if(de===void 0&&(ie==="instanceMatrix"&&y.instanceMatrix&&(de=y.instanceMatrix),ie==="instanceColor"&&y.instanceColor&&(de=y.instanceColor)),de!==void 0){const _e=de.normalized,Se=de.itemSize,ze=e.get(de);if(ze===void 0)continue;const Qe=ze.buffer,j=ze.type,se=ze.bytesPerElement,ye=j===n.INT||j===n.UNSIGNED_INT||de.gpuType===Qa;if(de.isInterleavedBufferAttribute){const le=de.data,Pe=le.stride,Ne=de.offset;if(le.isInstancedInterleavedBuffer){for(let Ve=0;Ve<W.locationSize;Ve++)u(W.location+Ve,le.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ve=0;Ve<W.locationSize;Ve++)m(W.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let Ve=0;Ve<W.locationSize;Ve++)w(W.location+Ve,Se/W.locationSize,j,_e,Pe*se,(Ne+Se/W.locationSize*Ve)*se,ye)}else{if(de.isInstancedBufferAttribute){for(let le=0;le<W.locationSize;le++)u(W.location+le,de.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let le=0;le<W.locationSize;le++)m(W.location+le);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let le=0;le<W.locationSize;le++)w(W.location+le,Se/W.locationSize,j,_e,Se*se,Se/W.locationSize*le*se,ye)}}else if(H!==void 0){const _e=H[ie];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(W.location,_e);break;case 3:n.vertexAttrib3fv(W.location,_e);break;case 4:n.vertexAttrib4fv(W.location,_e);break;default:n.vertexAttrib1fv(W.location,_e)}}}}S()}function C(){R();for(const y in i){const P=i[y];for(const z in P){const k=P[z];for(const $ in k)h(k[$].object),delete k[$];delete P[z]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;const P=i[y.id];for(const z in P){const k=P[z];for(const $ in k)h(k[$].object),delete k[$];delete P[z]}delete i[y.id]}function A(y){for(const P in i){const z=i[P];if(z[y.id]===void 0)continue;const k=z[y.id];for(const $ in k)h(k[$].object),delete k[$];delete z[y.id]}}function R(){b(),a=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function xp(n,e,t){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,f){f!==0&&(n.drawArraysInstanced(i,c,h,f),t.update(h,i,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];t.update(p,i,1)}function l(c,h,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v]*d[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Mp(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==fn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const R=A===Ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Vn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==kn&&!R)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:C,maxSamples:T}}function yp(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ti,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,u=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const S=s?0:i,w=S*4;let M=u.clippingState||null;l.value=M,M=h(g,d,w,p);for(let C=0;C!==w;++C)M[C]=t[C];u.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const u=p+v*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<u)&&(m=new Float32Array(u));for(let w=0,M=p;w!==v;++w,M+=4)a.copy(f[w]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Sp(n){let e=new WeakMap;function t(a,o){return o===va?a.mapping=er:o===xa&&(a.mapping=tr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===va||o===xa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Id(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class bs extends Sc{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qi=4,ol=[.125,.215,.35,.446,.526,.582],yi=20,Zs=new bs,ll=new Ye;let Ks=null,Js=0,Qs=0,ea=!1;const xi=(1+Math.sqrt(5))/2,Gi=1/xi,cl=[new U(-xi,Gi,0),new U(xi,Gi,0),new U(-Gi,0,xi),new U(Gi,0,xi),new U(0,xi,-Gi),new U(0,xi,Gi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class hl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ks=this._renderer.getRenderTarget(),Js=this._renderer.getActiveCubeFace(),Qs=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ks,Js,Qs),this._renderer.xr.enabled=ea,e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ks=this._renderer.getRenderTarget(),Js=this._renderer.getActiveCubeFace(),Qs=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Ti,format:fn,colorSpace:or,depthBuffer:!1},r=dl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bp(s)),this._blurMaterial=Ep(s,e,t)}return r}_compileMaterial(e){const t=new ot(this._lodPlanes[0],e);this._renderer.compile(t,Zs)}_sceneToCubeUV(e,t,i,r){const o=new dn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(ll),h.toneMapping=si,h.autoClear=!1;const p=new zt({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),g=new ot(new hi,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(ll),v=!0);for(let u=0;u<6;u++){const S=u%3;S===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):S===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const w=this._cubeSize;rs(r,S*w,u>2?w:0,w,w),h.setRenderTarget(r),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===er||e.mapping===tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ul());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ot(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;rs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Zs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=cl[(r-s-1)%cl.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new ot(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*yi-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):yi;m>yi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yi}`);const u=[];let S=0;for(let A=0;A<yi;++A){const R=A/v,b=Math.exp(-R*R/2);u.push(b),A===0?S+=b:A<m&&(S+=2*b)}for(let A=0;A<u.length;A++)u[A]=u[A]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-i;const M=this._sizeLods[r],C=3*M*(r>w-qi?r-w+qi:0),T=4*(this._cubeSize-M);rs(t,C,T,3*M,2*M),l.setRenderTarget(t),l.render(f,Zs)}}function bp(n){const e=[],t=[],i=[];let r=n;const s=n-qi+1+ol.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-qi?l=ol[a-n+qi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,v=3,m=2,u=1,S=new Float32Array(v*g*p),w=new Float32Array(m*g*p),M=new Float32Array(u*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,R=T>2?0:-1,b=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];S.set(b,v*g*T),w.set(d,m*g*T);const y=[T,T,T,T,T,T];M.set(y,u*g*T)}const C=new sn;C.setAttribute("position",new mn(S,v)),C.setAttribute("uv",new mn(w,m)),C.setAttribute("faceIndex",new mn(M,u)),e.push(C),r>qi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function dl(n,e,t){const i=new $n(n,e,t);return i.texture.mapping=ys,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ep(n,e,t){const i=new Float32Array(yi),r=new U(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ho(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function ul(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ho(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function fl(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function ho(){return`

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
	`}function wp(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===va||l===xa,h=l===er||l===tr;if(c||h){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new hl(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new hl(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Tp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&vr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ap(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,u=v.length;m<u;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const v=p[g];for(let m=0,u=v.length;m<u;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const S=p.array;v=p.version;for(let w=0,M=S.length;w<M;w+=3){const C=S[w+0],T=S[w+1],A=S[w+2];d.push(C,T,T,A,A,C)}}else if(g!==void 0){const S=g.array;v=g.version;for(let w=0,M=S.length/3-1;w<M;w+=3){const C=w+0,T=w+1,A=w+2;d.push(C,T,T,A,A,C)}}else return;const m=new(pc(d)?Mc:xc)(d,1);m.version=v;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function h(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Rp(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*a),t.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,d*a,g),t.update(p,i,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];t.update(m,i,1)}function f(d,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/a,p[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,v,0,g);let u=0;for(let S=0;S<g;S++)u+=p[S]*v[S];t.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Cp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Pp(n,e,t){const i=new WeakMap,r=new Mt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let b=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let w=0;p===!0&&(w=1),g===!0&&(w=2),v===!0&&(w=3);let M=o.attributes.position.count*w,C=1;M>e.maxTextureSize&&(C=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const T=new Float32Array(M*C*4*f),A=new gc(T,M,C,f);A.type=kn,A.needsUpdate=!0;const R=w*4;for(let y=0;y<f;y++){const P=m[y],z=u[y],k=S[y],$=M*C*4*y;for(let ee=0;ee<P.count;ee++){const H=ee*R;p===!0&&(r.fromBufferAttribute(P,ee),T[$+H+0]=r.x,T[$+H+1]=r.y,T[$+H+2]=r.z,T[$+H+3]=0),g===!0&&(r.fromBufferAttribute(z,ee),T[$+H+4]=r.x,T[$+H+5]=r.y,T[$+H+6]=r.z,T[$+H+7]=0),v===!0&&(r.fromBufferAttribute(k,ee),T[$+H+8]=r.x,T[$+H+9]=r.y,T[$+H+10]=r.z,T[$+H+11]=k.itemSize===4?r.w:1)}}d={count:f,texture:A,size:new $e(M,C)},i.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Lp(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class wc extends kt{constructor(e,t,i,r,s,a,o,l,c,h=ji){if(h!==ji&&h!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ji&&(i=wi),i===void 0&&h===ir&&(i=nr),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Tc=new kt,pl=new wc(1,1),Ac=new gc,Rc=new gd,Cc=new bc,ml=[],gl=[],_l=new Float32Array(16),vl=new Float32Array(9),xl=new Float32Array(4);function hr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ml[r];if(s===void 0&&(s=new Float32Array(r),ml[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Es(n,e){let t=gl[e];t===void 0&&(t=new Int32Array(e),gl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ip(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Dp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function Up(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function Np(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function Fp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,i))return;xl.set(i),n.uniformMatrix2fv(this.addr,!1,xl),Rt(t,i)}}function kp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,i))return;vl.set(i),n.uniformMatrix3fv(this.addr,!1,vl),Rt(t,i)}}function Op(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,i))return;_l.set(i),n.uniformMatrix4fv(this.addr,!1,_l),Rt(t,i)}}function Bp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function zp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function Hp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function Gp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function Vp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $p(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function Wp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function Xp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function qp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(pl.compareFunction=fc,s=pl):s=Tc,t.setTexture2D(e||s,r)}function Yp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Rc,r)}function jp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Cc,r)}function Zp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ac,r)}function Kp(n){switch(n){case 5126:return Ip;case 35664:return Dp;case 35665:return Up;case 35666:return Np;case 35674:return Fp;case 35675:return kp;case 35676:return Op;case 5124:case 35670:return Bp;case 35667:case 35671:return zp;case 35668:case 35672:return Hp;case 35669:case 35673:return Gp;case 5125:return Vp;case 36294:return $p;case 36295:return Wp;case 36296:return Xp;case 35678:case 36198:case 36298:case 36306:case 35682:return qp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return Zp}}function Jp(n,e){n.uniform1fv(this.addr,e)}function Qp(n,e){const t=hr(e,this.size,2);n.uniform2fv(this.addr,t)}function em(n,e){const t=hr(e,this.size,3);n.uniform3fv(this.addr,t)}function tm(n,e){const t=hr(e,this.size,4);n.uniform4fv(this.addr,t)}function nm(n,e){const t=hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function im(n,e){const t=hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function rm(n,e){const t=hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function sm(n,e){n.uniform1iv(this.addr,e)}function am(n,e){n.uniform2iv(this.addr,e)}function om(n,e){n.uniform3iv(this.addr,e)}function lm(n,e){n.uniform4iv(this.addr,e)}function cm(n,e){n.uniform1uiv(this.addr,e)}function hm(n,e){n.uniform2uiv(this.addr,e)}function dm(n,e){n.uniform3uiv(this.addr,e)}function um(n,e){n.uniform4uiv(this.addr,e)}function fm(n,e,t){const i=this.cache,r=e.length,s=Es(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Tc,s[a])}function pm(n,e,t){const i=this.cache,r=e.length,s=Es(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Rc,s[a])}function mm(n,e,t){const i=this.cache,r=e.length,s=Es(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Cc,s[a])}function gm(n,e,t){const i=this.cache,r=e.length,s=Es(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ac,s[a])}function _m(n){switch(n){case 5126:return Jp;case 35664:return Qp;case 35665:return em;case 35666:return tm;case 35674:return nm;case 35675:return im;case 35676:return rm;case 5124:case 35670:return sm;case 35667:case 35671:return am;case 35668:case 35672:return om;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return hm;case 36295:return dm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}class vm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Kp(t.type)}}class xm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_m(t.type)}}class Mm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ta=/(\w+)(\])?(\[|\.)?/g;function Ml(n,e){n.seq.push(e),n.map[e.id]=e}function ym(n,e,t){const i=n.name,r=i.length;for(ta.lastIndex=0;;){const s=ta.exec(i),a=ta.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ml(t,c===void 0?new vm(o,n,e):new xm(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Mm(o),Ml(t,f)),t=f}}}class fs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);ym(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function yl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Sm=37297;let bm=0;function Em(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Sl=new Be;function wm(n){Ke._getMatrix(Sl,Ke.workingColorSpace,n);const e=`mat3( ${Sl.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case Ss:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function bl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Em(n.getShaderSource(e),a)}else return r}function Tm(n,e){const t=wm(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Am(n,e){let t;switch(e){case Ah:t="Linear";break;case Rh:t="Reinhard";break;case Ch:t="Cineon";break;case Ph:t="ACESFilmic";break;case Ih:t="AgX";break;case Dh:t="Neutral";break;case Lh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ss=new U;function Rm(){Ke.getLuminanceCoefficients(ss);const n=ss.x.toFixed(4),e=ss.y.toFixed(4),t=ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function Pm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Lm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function xr(n){return n!==""}function El(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Im=/^[ \t]*#include +<([\w\d./]+)>/gm;function qa(n){return n.replace(Im,Um)}const Dm=new Map;function Um(n,e){let t=Ge[e];if(t===void 0){const i=Dm.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return qa(t)}const Nm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tl(n){return n.replace(Nm,Fm)}function Fm(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Al(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function km(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ec?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ah?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function Om(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case er:case tr:e="ENVMAP_TYPE_CUBE";break;case ys:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case tr:e="ENVMAP_MODE_REFRACTION";break}return e}function zm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case tc:e="ENVMAP_BLENDING_MULTIPLY";break;case wh:e="ENVMAP_BLENDING_MIX";break;case Th:e="ENVMAP_BLENDING_ADD";break}return e}function Hm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Gm(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=km(t),c=Om(t),h=Bm(t),f=zm(t),d=Hm(t),p=Cm(t),g=Pm(s),v=r.createProgram();let m,u,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xr).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xr).join(`
`),u.length>0&&(u+=`
`)):(m=[Al(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),u=[Al(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?Ge.tonemapping_pars_fragment:"",t.toneMapping!==si?Am("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Tm("linearToOutputTexel",t.outputColorSpace),Rm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),a=qa(a),a=El(a,t),a=wl(a,t),o=qa(o),o=El(o,t),o=wl(o,t),a=Tl(a),o=Tl(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===Bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const w=S+m+a,M=S+u+o,C=yl(r,r.VERTEX_SHADER,w),T=yl(r,r.FRAGMENT_SHADER,M);r.attachShader(v,C),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(P){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(v).trim(),k=r.getShaderInfoLog(C).trim(),$=r.getShaderInfoLog(T).trim();let ee=!0,H=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,C,T);else{const ie=bl(r,C,"vertex"),W=bl(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+ie+`
`+W)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||$==="")&&(H=!1);H&&(P.diagnostics={runnable:ee,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:$,prefix:u}})}r.deleteShader(C),r.deleteShader(T),R=new fs(r,v),b=Lm(r,v)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,Sm)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=T,this}let Vm=0;class $m{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Wm(e),t.set(e,i)),i}}class Wm{constructor(e){this.id=Vm++,this.code=e,this.usedTimes=0}}function Xm(n,e,t,i,r,s,a){const o=new lo,l=new $m,c=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,P,z,k){const $=z.fog,ee=k.geometry,H=b.isMeshStandardMaterial?z.environment:null,ie=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),W=ie&&ie.mapping===ys?ie.image.height:null,de=g[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const _e=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Se=_e!==void 0?_e.length:0;let ze=0;ee.morphAttributes.position!==void 0&&(ze=1),ee.morphAttributes.normal!==void 0&&(ze=2),ee.morphAttributes.color!==void 0&&(ze=3);let Qe,j,se,ye;if(de){const nt=xn[de];Qe=nt.vertexShader,j=nt.fragmentShader}else Qe=b.vertexShader,j=b.fragmentShader,l.update(b),se=l.getVertexShaderID(b),ye=l.getFragmentShaderID(b);const le=n.getRenderTarget(),Pe=n.state.buffers.depth.getReversed(),Ne=k.isInstancedMesh===!0,Ve=k.isBatchedMesh===!0,lt=!!b.map,We=!!b.matcap,gt=!!ie,N=!!b.aoMap,ne=!!b.lightMap,G=!!b.bumpMap,J=!!b.normalMap,Z=!!b.displacementMap,oe=!!b.emissiveMap,q=!!b.metalnessMap,x=!!b.roughnessMap,_=b.anisotropy>0,F=b.clearcoat>0,Y=b.dispersion>0,te=b.iridescence>0,K=b.sheen>0,Ae=b.transmission>0,fe=_&&!!b.anisotropyMap,ve=F&&!!b.clearcoatMap,je=F&&!!b.clearcoatNormalMap,re=F&&!!b.clearcoatRoughnessMap,xe=te&&!!b.iridescenceMap,Ie=te&&!!b.iridescenceThicknessMap,Ue=K&&!!b.sheenColorMap,Me=K&&!!b.sheenRoughnessMap,qe=!!b.specularMap,He=!!b.specularColorMap,ct=!!b.specularIntensityMap,L=Ae&&!!b.transmissionMap,ue=Ae&&!!b.thicknessMap,X=!!b.gradientMap,Q=!!b.alphaMap,ge=b.alphaTest>0,pe=!!b.alphaHash,ke=!!b.extensions;let vt=si;b.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(vt=n.toneMapping);const Dt={shaderID:de,shaderType:b.type,shaderName:b.name,vertexShader:Qe,fragmentShader:j,defines:b.defines,customVertexShaderID:se,customFragmentShaderID:ye,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ve,batchingColor:Ve&&k._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&k.instanceColor!==null,instancingMorph:Ne&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:or,alphaToCoverage:!!b.alphaToCoverage,map:lt,matcap:We,envMap:gt,envMapMode:gt&&ie.mapping,envMapCubeUVHeight:W,aoMap:N,lightMap:ne,bumpMap:G,normalMap:J,displacementMap:d&&Z,emissiveMap:oe,normalMapObjectSpace:J&&b.normalMapType===kh,normalMapTangentSpace:J&&b.normalMapType===uc,metalnessMap:q,roughnessMap:x,anisotropy:_,anisotropyMap:fe,clearcoat:F,clearcoatMap:ve,clearcoatNormalMap:je,clearcoatRoughnessMap:re,dispersion:Y,iridescence:te,iridescenceMap:xe,iridescenceThicknessMap:Ie,sheen:K,sheenColorMap:Ue,sheenRoughnessMap:Me,specularMap:qe,specularColorMap:He,specularIntensityMap:ct,transmission:Ae,transmissionMap:L,thicknessMap:ue,gradientMap:X,opaque:b.transparent===!1&&b.blending===Yi&&b.alphaToCoverage===!1,alphaMap:Q,alphaTest:ge,alphaHash:pe,combine:b.combine,mapUv:lt&&v(b.map.channel),aoMapUv:N&&v(b.aoMap.channel),lightMapUv:ne&&v(b.lightMap.channel),bumpMapUv:G&&v(b.bumpMap.channel),normalMapUv:J&&v(b.normalMap.channel),displacementMapUv:Z&&v(b.displacementMap.channel),emissiveMapUv:oe&&v(b.emissiveMap.channel),metalnessMapUv:q&&v(b.metalnessMap.channel),roughnessMapUv:x&&v(b.roughnessMap.channel),anisotropyMapUv:fe&&v(b.anisotropyMap.channel),clearcoatMapUv:ve&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:je&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(b.sheenRoughnessMap.channel),specularMapUv:qe&&v(b.specularMap.channel),specularColorMapUv:He&&v(b.specularColorMap.channel),specularIntensityMapUv:ct&&v(b.specularIntensityMap.channel),transmissionMapUv:L&&v(b.transmissionMap.channel),thicknessMapUv:ue&&v(b.thicknessMap.channel),alphaMapUv:Q&&v(b.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(J||_),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!ee.attributes.uv&&(lt||Q),fog:!!$,useFog:b.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Pe,skinning:k.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:ze,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:vt,decodeVideoTexture:lt&&b.map.isVideoTexture===!0&&Ke.getTransfer(b.map.colorSpace)===at,decodeVideoTextureEmissive:oe&&b.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(b.emissiveMap.colorSpace)===at,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Xt,flipSided:b.side===Yt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ke&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&b.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function u(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)y.push(P),y.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(S(y,b),w(y,b),y.push(n.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function S(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function w(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),b.push(o.mask)}function M(b){const y=g[b.type];let P;if(y){const z=xn[y];P=Rd.clone(z.uniforms)}else P=b.uniforms;return P}function C(b,y){let P;for(let z=0,k=h.length;z<k;z++){const $=h[z];if($.cacheKey===y){P=$,++P.usedTimes;break}}return P===void 0&&(P=new Gm(n,y,b,s),h.push(P)),P}function T(b){if(--b.usedTimes===0){const y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function A(b){l.remove(b)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:R}}function qm(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Ym(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Rl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Cl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,p,g,v,m){let u=n[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},n[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=p,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=v,u.group=m),e++,u}function o(f,d,p,g,v,m){const u=a(f,d,p,g,v,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):t.push(u)}function l(f,d,p,g,v,m){const u=a(f,d,p,g,v,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):t.unshift(u)}function c(f,d){t.length>1&&t.sort(f||Ym),i.length>1&&i.sort(d||Rl),r.length>1&&r.sort(d||Rl)}function h(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function jm(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Cl,n.set(i,[a])):r>=s.length?(a=new Cl,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Zm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ye};break;case"SpotLight":t={position:new U,direction:new U,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function Km(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Jm=0;function Qm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function e0(n){const e=new Zm,t=Km(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new mt,a=new mt;function o(c){let h=0,f=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,g=0,v=0,m=0,u=0,S=0,w=0,M=0,C=0,T=0,A=0;c.sort(Qm);for(let b=0,y=c.length;b<y;b++){const P=c[b],z=P.color,k=P.intensity,$=P.distance,ee=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*k,f+=z.g*k,d+=z.b*k;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],k);A++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ie=P.shadow,W=t.get(P);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=ee,i.directionalShadowMatrix[p]=P.shadow.matrix,S++}i.directional[p]=H,p++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(z).multiplyScalar(k),H.distance=$,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[v]=H;const ie=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,ie.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[v]=ie.matrix,P.castShadow){const W=t.get(P);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=ee,M++}v++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(z).multiplyScalar(k),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=H,m++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const ie=P.shadow,W=t.get(P);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,W.shadowCameraNear=ie.camera.near,W.shadowCameraFar=ie.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=ee,i.pointShadowMatrix[g]=P.shadow.matrix,w++}i.point[g]=H,g++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(k),H.groundColor.copy(P.groundColor).multiplyScalar(k),i.hemi[u]=H,u++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==u||R.numDirectionalShadows!==S||R.numPointShadows!==w||R.numSpotShadows!==M||R.numSpotMaps!==C||R.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=M+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,R.directionalLength=p,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=u,R.numDirectionalShadows=S,R.numPointShadows=w,R.numSpotShadows=M,R.numSpotMaps=C,R.numLightProbes=A,i.version=Jm++)}function l(c,h){let f=0,d=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let u=0,S=c.length;u<S;u++){const w=c[u];if(w.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(w.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(w.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Pl(n){const e=new e0(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function t0(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Pl(n),e.set(r,[o])):s>=a.length?(o=new Pl(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class n0 extends Ir{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class i0 extends Ir{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const r0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s0=`uniform sampler2D shadow_pass;
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
}`;function a0(n,e,t){let i=new co;const r=new $e,s=new $e,a=new Mt,o=new n0({depthPacking:Fh}),l=new i0,c={},h=t.maxTextureSize,f={[ai]:Yt,[Yt]:ai,[Xt]:Xt},d=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:r0,fragmentShader:s0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new sn;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ot(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ec;let u=this.type;this.render=function(T,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const b=n.getRenderTarget(),y=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),z=n.state;z.setBlending(ri),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=u!==Nn&&this.type===Nn,$=u===Nn&&this.type!==Nn;for(let ee=0,H=T.length;ee<H;ee++){const ie=T[ee],W=ie.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const de=W.getFrameExtents();if(r.multiply(de),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/de.x),r.x=s.x*de.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/de.y),r.y=s.y*de.y,W.mapSize.y=s.y)),W.map===null||k===!0||$===!0){const Se=this.type!==Nn?{minFilter:Ft,magFilter:Ft}:{};W.map!==null&&W.map.dispose(),W.map=new $n(r.x,r.y,Se),W.map.texture.name=ie.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const _e=W.getViewportCount();for(let Se=0;Se<_e;Se++){const ze=W.getViewport(Se);a.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),z.viewport(a),W.updateMatrices(ie,Se),i=W.getFrustum(),M(A,R,W.camera,ie,this.type)}W.isPointLightShadow!==!0&&this.type===Nn&&S(W,R),W.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(b,y,P)};function S(T,A){const R=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $n(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,R,d,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,R,p,v,null)}function w(T,A,R,b){let y=null;const P=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)y=P;else if(y=R.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=y.uuid,k=A.uuid;let $=c[z];$===void 0&&($={},c[z]=$);let ee=$[k];ee===void 0&&(ee=y.clone(),$[k]=ee,A.addEventListener("dispose",C)),y=ee}if(y.visible=A.visible,y.wireframe=A.wireframe,b===Nn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:f[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=n.properties.get(y);z.light=R}return y}function M(T,A,R,b,y){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Nn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const k=e.update(T),$=T.material;if(Array.isArray($)){const ee=k.groups;for(let H=0,ie=ee.length;H<ie;H++){const W=ee[H],de=$[W.materialIndex];if(de&&de.visible){const _e=w(T,de,b,y);T.onBeforeShadow(n,T,A,R,k,_e,W),n.renderBufferDirect(R,null,k,_e,T,W),T.onAfterShadow(n,T,A,R,k,_e,W)}}}else if($.visible){const ee=w(T,$,b,y);T.onBeforeShadow(n,T,A,R,k,ee,null),n.renderBufferDirect(R,null,k,ee,T,null),T.onAfterShadow(n,T,A,R,k,ee,null)}}const z=T.children;for(let k=0,$=z.length;k<$;k++)M(z[k],A,R,b,y)}function C(T){T.target.removeEventListener("dispose",C);for(const R in c){const b=c[R],y=T.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const o0={[da]:ua,[fa]:ga,[pa]:_a,[Qi]:ma,[ua]:da,[ga]:fa,[_a]:pa,[ma]:Qi};function l0(n,e){function t(){let L=!1;const ue=new Mt;let X=null;const Q=new Mt(0,0,0,0);return{setMask:function(ge){X!==ge&&!L&&(n.colorMask(ge,ge,ge,ge),X=ge)},setLocked:function(ge){L=ge},setClear:function(ge,pe,ke,vt,Dt){Dt===!0&&(ge*=vt,pe*=vt,ke*=vt),ue.set(ge,pe,ke,vt),Q.equals(ue)===!1&&(n.clearColor(ge,pe,ke,vt),Q.copy(ue))},reset:function(){L=!1,X=null,Q.set(-1,0,0,0)}}}function i(){let L=!1,ue=!1,X=null,Q=null,ge=null;return{setReversed:function(pe){if(ue!==pe){const ke=e.get("EXT_clip_control");ue?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);const vt=ge;ge=null,this.setClear(vt)}ue=pe},getReversed:function(){return ue},setTest:function(pe){pe?le(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(pe){X!==pe&&!L&&(n.depthMask(pe),X=pe)},setFunc:function(pe){if(ue&&(pe=o0[pe]),Q!==pe){switch(pe){case da:n.depthFunc(n.NEVER);break;case ua:n.depthFunc(n.ALWAYS);break;case fa:n.depthFunc(n.LESS);break;case Qi:n.depthFunc(n.LEQUAL);break;case pa:n.depthFunc(n.EQUAL);break;case ma:n.depthFunc(n.GEQUAL);break;case ga:n.depthFunc(n.GREATER);break;case _a:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=pe}},setLocked:function(pe){L=pe},setClear:function(pe){ge!==pe&&(ue&&(pe=1-pe),n.clearDepth(pe),ge=pe)},reset:function(){L=!1,X=null,Q=null,ge=null,ue=!1}}}function r(){let L=!1,ue=null,X=null,Q=null,ge=null,pe=null,ke=null,vt=null,Dt=null;return{setTest:function(nt){L||(nt?le(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(nt){ue!==nt&&!L&&(n.stencilMask(nt),ue=nt)},setFunc:function(nt,an,Tn){(X!==nt||Q!==an||ge!==Tn)&&(n.stencilFunc(nt,an,Tn),X=nt,Q=an,ge=Tn)},setOp:function(nt,an,Tn){(pe!==nt||ke!==an||vt!==Tn)&&(n.stencilOp(nt,an,Tn),pe=nt,ke=an,vt=Tn)},setLocked:function(nt){L=nt},setClear:function(nt){Dt!==nt&&(n.clearStencil(nt),Dt=nt)},reset:function(){L=!1,ue=null,X=null,Q=null,ge=null,pe=null,ke=null,vt=null,Dt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,p=[],g=null,v=!1,m=null,u=null,S=null,w=null,M=null,C=null,T=null,A=new Ye(0,0,0),R=0,b=!1,y=null,P=null,z=null,k=null,$=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,ie=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=ie>=1):W.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=ie>=2);let de=null,_e={};const Se=n.getParameter(n.SCISSOR_BOX),ze=n.getParameter(n.VIEWPORT),Qe=new Mt().fromArray(Se),j=new Mt().fromArray(ze);function se(L,ue,X,Q){const ge=new Uint8Array(4),pe=n.createTexture();n.bindTexture(L,pe),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<X;ke++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(ue+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return pe}const ye={};ye[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(n.DEPTH_TEST),a.setFunc(Qi),G(!1),J(Do),le(n.CULL_FACE),N(ri);function le(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function Pe(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Ne(L,ue){return f[L]!==ue?(n.bindFramebuffer(L,ue),f[L]=ue,L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ue),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ve(L,ue){let X=p,Q=!1;if(L){X=d.get(ue),X===void 0&&(X=[],d.set(ue,X));const ge=L.textures;if(X.length!==ge.length||X[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,ke=ge.length;pe<ke;pe++)X[pe]=n.COLOR_ATTACHMENT0+pe;X.length=ge.length,Q=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,Q=!0);Q&&n.drawBuffers(X)}function lt(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const We={[Mi]:n.FUNC_ADD,[lh]:n.FUNC_SUBTRACT,[ch]:n.FUNC_REVERSE_SUBTRACT};We[hh]=n.MIN,We[dh]=n.MAX;const gt={[uh]:n.ZERO,[fh]:n.ONE,[ph]:n.SRC_COLOR,[ca]:n.SRC_ALPHA,[Mh]:n.SRC_ALPHA_SATURATE,[vh]:n.DST_COLOR,[gh]:n.DST_ALPHA,[mh]:n.ONE_MINUS_SRC_COLOR,[ha]:n.ONE_MINUS_SRC_ALPHA,[xh]:n.ONE_MINUS_DST_COLOR,[_h]:n.ONE_MINUS_DST_ALPHA,[yh]:n.CONSTANT_COLOR,[Sh]:n.ONE_MINUS_CONSTANT_COLOR,[bh]:n.CONSTANT_ALPHA,[Eh]:n.ONE_MINUS_CONSTANT_ALPHA};function N(L,ue,X,Q,ge,pe,ke,vt,Dt,nt){if(L===ri){v===!0&&(Pe(n.BLEND),v=!1);return}if(v===!1&&(le(n.BLEND),v=!0),L!==oh){if(L!==m||nt!==b){if((u!==Mi||M!==Mi)&&(n.blendEquation(n.FUNC_ADD),u=Mi,M=Mi),nt)switch(L){case Yi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uo:n.blendFunc(n.ONE,n.ONE);break;case No:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Yi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case No:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,w=null,C=null,T=null,A.set(0,0,0),R=0,m=L,b=nt}return}ge=ge||ue,pe=pe||X,ke=ke||Q,(ue!==u||ge!==M)&&(n.blendEquationSeparate(We[ue],We[ge]),u=ue,M=ge),(X!==S||Q!==w||pe!==C||ke!==T)&&(n.blendFuncSeparate(gt[X],gt[Q],gt[pe],gt[ke]),S=X,w=Q,C=pe,T=ke),(vt.equals(A)===!1||Dt!==R)&&(n.blendColor(vt.r,vt.g,vt.b,Dt),A.copy(vt),R=Dt),m=L,b=!1}function ne(L,ue){L.side===Xt?Pe(n.CULL_FACE):le(n.CULL_FACE);let X=L.side===Yt;ue&&(X=!X),G(X),L.blending===Yi&&L.transparent===!1?N(ri):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const Q=L.stencilWrite;o.setTest(Q),Q&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),oe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function G(L){y!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),y=L)}function J(L){L!==rh?(le(n.CULL_FACE),L!==P&&(L===Do?n.cullFace(n.BACK):L===sh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),P=L}function Z(L){L!==z&&(H&&n.lineWidth(L),z=L)}function oe(L,ue,X){L?(le(n.POLYGON_OFFSET_FILL),(k!==ue||$!==X)&&(n.polygonOffset(ue,X),k=ue,$=X)):Pe(n.POLYGON_OFFSET_FILL)}function q(L){L?le(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function x(L){L===void 0&&(L=n.TEXTURE0+ee-1),de!==L&&(n.activeTexture(L),de=L)}function _(L,ue,X){X===void 0&&(de===null?X=n.TEXTURE0+ee-1:X=de);let Q=_e[X];Q===void 0&&(Q={type:void 0,texture:void 0},_e[X]=Q),(Q.type!==L||Q.texture!==ue)&&(de!==X&&(n.activeTexture(X),de=X),n.bindTexture(L,ue||ye[L]),Q.type=L,Q.texture=ue)}function F(){const L=_e[de];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function je(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(L){Qe.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Qe.copy(L))}function Me(L){j.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),j.copy(L))}function qe(L,ue){let X=c.get(ue);X===void 0&&(X=new WeakMap,c.set(ue,X));let Q=X.get(L);Q===void 0&&(Q=n.getUniformBlockIndex(ue,L.name),X.set(L,Q))}function He(L,ue){const Q=c.get(ue).get(L);l.get(ue)!==Q&&(n.uniformBlockBinding(ue,Q,L.__bindingPointIndex),l.set(ue,Q))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},de=null,_e={},f={},d=new WeakMap,p=[],g=null,v=!1,m=null,u=null,S=null,w=null,M=null,C=null,T=null,A=new Ye(0,0,0),R=0,b=!1,y=null,P=null,z=null,k=null,$=null,Qe.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:le,disable:Pe,bindFramebuffer:Ne,drawBuffers:Ve,useProgram:lt,setBlending:N,setMaterial:ne,setFlipSided:G,setCullFace:J,setLineWidth:Z,setPolygonOffset:oe,setScissorTest:q,activeTexture:x,bindTexture:_,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:te,texImage2D:xe,texImage3D:Ie,updateUBOMapping:qe,uniformBlockBinding:He,texStorage2D:je,texStorage3D:re,texSubImage2D:K,texSubImage3D:Ae,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:Ue,viewport:Me,reset:ct}}function Ll(n,e,t,i){const r=c0(i);switch(t){case ac:return n*e;case lc:return n*e;case cc:return n*e*2;case no:return n*e/r.components*r.byteLength;case io:return n*e/r.components*r.byteLength;case hc:return n*e*2/r.components*r.byteLength;case ro:return n*e*2/r.components*r.byteLength;case oc:return n*e*3/r.components*r.byteLength;case fn:return n*e*4/r.components*r.byteLength;case so:return n*e*4/r.components*r.byteLength;case ls:case cs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case hs:case ds:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sa:case Ea:return Math.max(n,16)*Math.max(e,8)/4;case ya:case ba:return Math.max(n,8)*Math.max(e,8)/2;case wa:case Ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case La:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Da:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Na:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Fa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ka:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ba:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case za:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ha:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case us:case Ga:case Va:return Math.ceil(n/4)*Math.ceil(e/4)*16;case dc:case $a:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Wa:case Xa:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function c0(n){switch(n){case Vn:case ic:return{byteLength:1,components:1};case Ar:case rc:case Ti:return{byteLength:2,components:1};case eo:case to:return{byteLength:2,components:4};case wi:case Qa:case kn:return{byteLength:4,components:1};case sc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function h0(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,h=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,_){return p?new OffscreenCanvas(x,_):xs("canvas")}function v(x,_,F){let Y=1;const te=q(x);if((te.width>F||te.height>F)&&(Y=F/Math.max(te.width,te.height)),Y<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const K=Math.floor(Y*te.width),Ae=Math.floor(Y*te.height);f===void 0&&(f=g(K,Ae));const fe=_?g(K,Ae):f;return fe.width=K,fe.height=Ae,fe.getContext("2d").drawImage(x,0,0,K,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+K+"x"+Ae+")."),fe}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),x;return x}function m(x){return x.generateMipmaps}function u(x){n.generateMipmap(x)}function S(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(x,_,F,Y,te=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let K=_;if(_===n.RED&&(F===n.FLOAT&&(K=n.R32F),F===n.HALF_FLOAT&&(K=n.R16F),F===n.UNSIGNED_BYTE&&(K=n.R8)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.R8UI),F===n.UNSIGNED_SHORT&&(K=n.R16UI),F===n.UNSIGNED_INT&&(K=n.R32UI),F===n.BYTE&&(K=n.R8I),F===n.SHORT&&(K=n.R16I),F===n.INT&&(K=n.R32I)),_===n.RG&&(F===n.FLOAT&&(K=n.RG32F),F===n.HALF_FLOAT&&(K=n.RG16F),F===n.UNSIGNED_BYTE&&(K=n.RG8)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.RG8UI),F===n.UNSIGNED_SHORT&&(K=n.RG16UI),F===n.UNSIGNED_INT&&(K=n.RG32UI),F===n.BYTE&&(K=n.RG8I),F===n.SHORT&&(K=n.RG16I),F===n.INT&&(K=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.RGB8UI),F===n.UNSIGNED_SHORT&&(K=n.RGB16UI),F===n.UNSIGNED_INT&&(K=n.RGB32UI),F===n.BYTE&&(K=n.RGB8I),F===n.SHORT&&(K=n.RGB16I),F===n.INT&&(K=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),F===n.UNSIGNED_INT&&(K=n.RGBA32UI),F===n.BYTE&&(K=n.RGBA8I),F===n.SHORT&&(K=n.RGBA16I),F===n.INT&&(K=n.RGBA32I)),_===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),_===n.RGBA){const Ae=te?Ss:Ke.getTransfer(Y);F===n.FLOAT&&(K=n.RGBA32F),F===n.HALF_FLOAT&&(K=n.RGBA16F),F===n.UNSIGNED_BYTE&&(K=Ae===at?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function M(x,_){let F;return x?_===null||_===wi||_===nr?F=n.DEPTH24_STENCIL8:_===kn?F=n.DEPTH32F_STENCIL8:_===Ar&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===wi||_===nr?F=n.DEPTH_COMPONENT24:_===kn?F=n.DEPTH_COMPONENT32F:_===Ar&&(F=n.DEPTH_COMPONENT16),F}function C(x,_){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==Ft&&x.minFilter!==yn?Math.log2(Math.max(_.width,_.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?_.mipmaps.length:1}function T(x){const _=x.target;_.removeEventListener("dispose",T),R(_),_.isVideoTexture&&h.delete(_)}function A(x){const _=x.target;_.removeEventListener("dispose",A),y(_)}function R(x){const _=i.get(x);if(_.__webglInit===void 0)return;const F=x.source,Y=d.get(F);if(Y){const te=Y[_.__cacheKey];te.usedTimes--,te.usedTimes===0&&b(x),Object.keys(Y).length===0&&d.delete(F)}i.remove(x)}function b(x){const _=i.get(x);n.deleteTexture(_.__webglTexture);const F=x.source,Y=d.get(F);delete Y[_.__cacheKey],a.memory.textures--}function y(x){const _=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let te=0;te<_.__webglFramebuffer[Y].length;te++)n.deleteFramebuffer(_.__webglFramebuffer[Y][te]);else n.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)n.deleteFramebuffer(_.__webglFramebuffer[Y]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=x.textures;for(let Y=0,te=F.length;Y<te;Y++){const K=i.get(F[Y]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(F[Y])}i.remove(x)}let P=0;function z(){P=0}function k(){const x=P;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),P+=1,x}function $(x){const _=[];return _.push(x.wrapS),_.push(x.wrapT),_.push(x.wrapR||0),_.push(x.magFilter),_.push(x.minFilter),_.push(x.anisotropy),_.push(x.internalFormat),_.push(x.format),_.push(x.type),_.push(x.generateMipmaps),_.push(x.premultiplyAlpha),_.push(x.flipY),_.push(x.unpackAlignment),_.push(x.colorSpace),_.join()}function ee(x,_){const F=i.get(x);if(x.isVideoTexture&&Z(x),x.isRenderTargetTexture===!1&&x.version>0&&F.__version!==x.version){const Y=x.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(F,x,_);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function H(x,_){const F=i.get(x);if(x.version>0&&F.__version!==x.version){j(F,x,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function ie(x,_){const F=i.get(x);if(x.version>0&&F.__version!==x.version){j(F,x,_);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function W(x,_){const F=i.get(x);if(x.version>0&&F.__version!==x.version){se(F,x,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}const de={[_s]:n.REPEAT,[Si]:n.CLAMP_TO_EDGE,[Ma]:n.MIRRORED_REPEAT},_e={[Ft]:n.NEAREST,[Uh]:n.NEAREST_MIPMAP_NEAREST,[Br]:n.NEAREST_MIPMAP_LINEAR,[yn]:n.LINEAR,[Cs]:n.LINEAR_MIPMAP_NEAREST,[bi]:n.LINEAR_MIPMAP_LINEAR},Se={[Oh]:n.NEVER,[$h]:n.ALWAYS,[Bh]:n.LESS,[fc]:n.LEQUAL,[zh]:n.EQUAL,[Vh]:n.GEQUAL,[Hh]:n.GREATER,[Gh]:n.NOTEQUAL};function ze(x,_){if(_.type===kn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===yn||_.magFilter===Cs||_.magFilter===Br||_.magFilter===bi||_.minFilter===yn||_.minFilter===Cs||_.minFilter===Br||_.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,de[_.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,de[_.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,de[_.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,_e[_.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,_e[_.minFilter]),_.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,Se[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ft||_.minFilter!==Br&&_.minFilter!==bi||_.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Qe(x,_){let F=!1;x.__webglInit===void 0&&(x.__webglInit=!0,_.addEventListener("dispose",T));const Y=_.source;let te=d.get(Y);te===void 0&&(te={},d.set(Y,te));const K=$(_);if(K!==x.__cacheKey){te[K]===void 0&&(te[K]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),te[K].usedTimes++;const Ae=te[x.__cacheKey];Ae!==void 0&&(te[x.__cacheKey].usedTimes--,Ae.usedTimes===0&&b(_)),x.__cacheKey=K,x.__webglTexture=te[K].texture}return F}function j(x,_,F){let Y=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=n.TEXTURE_3D);const te=Qe(x,_),K=_.source;t.bindTexture(Y,x.__webglTexture,n.TEXTURE0+F);const Ae=i.get(K);if(K.version!==Ae.__version||te===!0){t.activeTexture(n.TEXTURE0+F);const fe=Ke.getPrimaries(Ke.workingColorSpace),ve=_.colorSpace===ii?null:Ke.getPrimaries(_.colorSpace),je=_.colorSpace===ii||fe===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let re=v(_.image,!1,r.maxTextureSize);re=oe(_,re);const xe=s.convert(_.format,_.colorSpace),Ie=s.convert(_.type);let Ue=w(_.internalFormat,xe,Ie,_.colorSpace,_.isVideoTexture);ze(Y,_);let Me;const qe=_.mipmaps,He=_.isVideoTexture!==!0,ct=Ae.__version===void 0||te===!0,L=K.dataReady,ue=C(_,re);if(_.isDepthTexture)Ue=M(_.format===ir,_.type),ct&&(He?t.texStorage2D(n.TEXTURE_2D,1,Ue,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Ue,re.width,re.height,0,xe,Ie,null));else if(_.isDataTexture)if(qe.length>0){He&&ct&&t.texStorage2D(n.TEXTURE_2D,ue,Ue,qe[0].width,qe[0].height);for(let X=0,Q=qe.length;X<Q;X++)Me=qe[X],He?L&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,Me.width,Me.height,xe,Ie,Me.data):t.texImage2D(n.TEXTURE_2D,X,Ue,Me.width,Me.height,0,xe,Ie,Me.data);_.generateMipmaps=!1}else He?(ct&&t.texStorage2D(n.TEXTURE_2D,ue,Ue,re.width,re.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,xe,Ie,re.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,re.width,re.height,0,xe,Ie,re.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){He&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Ue,qe[0].width,qe[0].height,re.depth);for(let X=0,Q=qe.length;X<Q;X++)if(Me=qe[X],_.format!==fn)if(xe!==null)if(He){if(L)if(_.layerUpdates.size>0){const ge=Ll(Me.width,Me.height,_.format,_.type);for(const pe of _.layerUpdates){const ke=Me.data.subarray(pe*ge/Me.data.BYTES_PER_ELEMENT,(pe+1)*ge/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,pe,Me.width,Me.height,1,xe,ke)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Me.width,Me.height,re.depth,xe,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Ue,Me.width,Me.height,re.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Me.width,Me.height,re.depth,xe,Ie,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,Ue,Me.width,Me.height,re.depth,0,xe,Ie,Me.data)}else{He&&ct&&t.texStorage2D(n.TEXTURE_2D,ue,Ue,qe[0].width,qe[0].height);for(let X=0,Q=qe.length;X<Q;X++)Me=qe[X],_.format!==fn?xe!==null?He?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,Me.width,Me.height,xe,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,X,Ue,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?L&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,Me.width,Me.height,xe,Ie,Me.data):t.texImage2D(n.TEXTURE_2D,X,Ue,Me.width,Me.height,0,xe,Ie,Me.data)}else if(_.isDataArrayTexture)if(He){if(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Ue,re.width,re.height,re.depth),L)if(_.layerUpdates.size>0){const X=Ll(re.width,re.height,_.format,_.type);for(const Q of _.layerUpdates){const ge=re.data.subarray(Q*X/re.data.BYTES_PER_ELEMENT,(Q+1)*X/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,xe,Ie,ge)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,xe,Ie,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,re.width,re.height,re.depth,0,xe,Ie,re.data);else if(_.isData3DTexture)He?(ct&&t.texStorage3D(n.TEXTURE_3D,ue,Ue,re.width,re.height,re.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,xe,Ie,re.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,re.width,re.height,re.depth,0,xe,Ie,re.data);else if(_.isFramebufferTexture){if(ct)if(He)t.texStorage2D(n.TEXTURE_2D,ue,Ue,re.width,re.height);else{let X=re.width,Q=re.height;for(let ge=0;ge<ue;ge++)t.texImage2D(n.TEXTURE_2D,ge,Ue,X,Q,0,xe,Ie,null),X>>=1,Q>>=1}}else if(qe.length>0){if(He&&ct){const X=q(qe[0]);t.texStorage2D(n.TEXTURE_2D,ue,Ue,X.width,X.height)}for(let X=0,Q=qe.length;X<Q;X++)Me=qe[X],He?L&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,xe,Ie,Me):t.texImage2D(n.TEXTURE_2D,X,Ue,xe,Ie,Me);_.generateMipmaps=!1}else if(He){if(ct){const X=q(re);t.texStorage2D(n.TEXTURE_2D,ue,Ue,X.width,X.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Ie,re)}else t.texImage2D(n.TEXTURE_2D,0,Ue,xe,Ie,re);m(_)&&u(Y),Ae.__version=K.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function se(x,_,F){if(_.image.length!==6)return;const Y=Qe(x,_),te=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+F);const K=i.get(te);if(te.version!==K.__version||Y===!0){t.activeTexture(n.TEXTURE0+F);const Ae=Ke.getPrimaries(Ke.workingColorSpace),fe=_.colorSpace===ii?null:Ke.getPrimaries(_.colorSpace),ve=_.colorSpace===ii||Ae===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const je=_.isCompressedTexture||_.image[0].isCompressedTexture,re=_.image[0]&&_.image[0].isDataTexture,xe=[];for(let Q=0;Q<6;Q++)!je&&!re?xe[Q]=v(_.image[Q],!0,r.maxCubemapSize):xe[Q]=re?_.image[Q].image:_.image[Q],xe[Q]=oe(_,xe[Q]);const Ie=xe[0],Ue=s.convert(_.format,_.colorSpace),Me=s.convert(_.type),qe=w(_.internalFormat,Ue,Me,_.colorSpace),He=_.isVideoTexture!==!0,ct=K.__version===void 0||Y===!0,L=te.dataReady;let ue=C(_,Ie);ze(n.TEXTURE_CUBE_MAP,_);let X;if(je){He&&ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,qe,Ie.width,Ie.height);for(let Q=0;Q<6;Q++){X=xe[Q].mipmaps;for(let ge=0;ge<X.length;ge++){const pe=X[ge];_.format!==fn?Ue!==null?He?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,0,0,pe.width,pe.height,Ue,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,qe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,0,0,pe.width,pe.height,Ue,Me,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,qe,pe.width,pe.height,0,Ue,Me,pe.data)}}}else{if(X=_.mipmaps,He&&ct){X.length>0&&ue++;const Q=q(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,qe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){He?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,xe[Q].width,xe[Q].height,Ue,Me,xe[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,qe,xe[Q].width,xe[Q].height,0,Ue,Me,xe[Q].data);for(let ge=0;ge<X.length;ge++){const ke=X[ge].image[Q].image;He?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,0,0,ke.width,ke.height,Ue,Me,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,qe,ke.width,ke.height,0,Ue,Me,ke.data)}}else{He?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ue,Me,xe[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,qe,Ue,Me,xe[Q]);for(let ge=0;ge<X.length;ge++){const pe=X[ge];He?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,0,0,Ue,Me,pe.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,qe,Ue,Me,pe.image[Q])}}}m(_)&&u(n.TEXTURE_CUBE_MAP),K.__version=te.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function ye(x,_,F,Y,te,K){const Ae=s.convert(F.format,F.colorSpace),fe=s.convert(F.type),ve=w(F.internalFormat,Ae,fe,F.colorSpace),je=i.get(_),re=i.get(F);if(re.__renderTarget=_,!je.__hasExternalTextures){const xe=Math.max(1,_.width>>K),Ie=Math.max(1,_.height>>K);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,K,ve,xe,Ie,_.depth,0,Ae,fe,null):t.texImage2D(te,K,ve,xe,Ie,0,Ae,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),J(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,te,re.__webglTexture,0,G(_)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,te,re.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(x,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,x),_.depthBuffer){const Y=_.depthTexture,te=Y&&Y.isDepthTexture?Y.type:null,K=M(_.stencilBuffer,te),Ae=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=G(_);J(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,K,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,K,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,K,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,x)}else{const Y=_.textures;for(let te=0;te<Y.length;te++){const K=Y[te],Ae=s.convert(K.format,K.colorSpace),fe=s.convert(K.type),ve=w(K.internalFormat,Ae,fe,K.colorSpace),je=G(_);F&&J(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,je,ve,_.width,_.height):J(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,je,ve,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ve,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(x,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(_.depthTexture);Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ee(_.depthTexture,0);const te=Y.__webglTexture,K=G(_);if(_.depthTexture.format===ji)J(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(_.depthTexture.format===ir)J(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ne(x){const _=i.get(x),F=x.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==x.depthTexture){const Y=x.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const te=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",te)};Y.addEventListener("dispose",te),_.__depthDisposeCallback=te}_.__boundDepthTexture=Y}if(x.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Pe(_.__webglFramebuffer,x)}else if(F){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=n.createRenderbuffer(),le(_.__webglDepthbuffer[Y],x,!1);else{const te=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,K)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),le(_.__webglDepthbuffer,x,!1);else{const Y=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(x,_,F){const Y=i.get(x);_!==void 0&&ye(Y.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Ne(x)}function lt(x){const _=x.texture,F=i.get(x),Y=i.get(_);x.addEventListener("dispose",A);const te=x.textures,K=x.isWebGLCubeRenderTarget===!0,Ae=te.length>1;if(Ae||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=_.version,a.memory.textures++),K){F.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[fe]=[];for(let ve=0;ve<_.mipmaps.length;ve++)F.__webglFramebuffer[fe][ve]=n.createFramebuffer()}else F.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let fe=0;fe<_.mipmaps.length;fe++)F.__webglFramebuffer[fe]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let fe=0,ve=te.length;fe<ve;fe++){const je=i.get(te[fe]);je.__webglTexture===void 0&&(je.__webglTexture=n.createTexture(),a.memory.textures++)}if(x.samples>0&&J(x)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let fe=0;fe<te.length;fe++){const ve=te[fe];F.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[fe]);const je=s.convert(ve.format,ve.colorSpace),re=s.convert(ve.type),xe=w(ve.internalFormat,je,re,ve.colorSpace,x.isXRRenderTarget===!0),Ie=G(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,xe,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,F.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),le(F.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),ze(n.TEXTURE_CUBE_MAP,_);for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0)for(let ve=0;ve<_.mipmaps.length;ve++)ye(F.__webglFramebuffer[fe][ve],x,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else ye(F.__webglFramebuffer[fe],x,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(_)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let fe=0,ve=te.length;fe<ve;fe++){const je=te[fe],re=i.get(je);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),ze(n.TEXTURE_2D,je),ye(F.__webglFramebuffer,x,je,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),m(je)&&u(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(fe=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,Y.__webglTexture),ze(fe,_),_.mipmaps&&_.mipmaps.length>0)for(let ve=0;ve<_.mipmaps.length;ve++)ye(F.__webglFramebuffer[ve],x,_,n.COLOR_ATTACHMENT0,fe,ve);else ye(F.__webglFramebuffer,x,_,n.COLOR_ATTACHMENT0,fe,0);m(_)&&u(fe),t.unbindTexture()}x.depthBuffer&&Ne(x)}function We(x){const _=x.textures;for(let F=0,Y=_.length;F<Y;F++){const te=_[F];if(m(te)){const K=S(x),Ae=i.get(te).__webglTexture;t.bindTexture(K,Ae),u(K),t.unbindTexture()}}}const gt=[],N=[];function ne(x){if(x.samples>0){if(J(x)===!1){const _=x.textures,F=x.width,Y=x.height;let te=n.COLOR_BUFFER_BIT;const K=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(x),fe=_.length>1;if(fe)for(let ve=0;ve<_.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ve=0;ve<_.length;ve++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[ve]);const je=i.get(_[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,je,0)}n.blitFramebuffer(0,0,F,Y,0,0,F,Y,te,n.NEAREST),l===!0&&(gt.length=0,N.length=0,gt.push(n.COLOR_ATTACHMENT0+ve),x.depthBuffer&&x.resolveDepthBuffer===!1&&(gt.push(K),N.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<_.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[ve]);const je=i.get(_[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const _=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function G(x){return Math.min(r.maxSamples,x.samples)}function J(x){const _=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Z(x){const _=a.render.frame;h.get(x)!==_&&(h.set(x,_),x.update())}function oe(x,_){const F=x.colorSpace,Y=x.format,te=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||F!==or&&F!==ii&&(Ke.getTransfer(F)===at?(Y!==fn||te!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function q(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=ee,this.setTexture2DArray=H,this.setTexture3D=ie,this.setTextureCube=W,this.rebindTextures=Ve,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=J}function d0(n,e){function t(i,r=ii){let s;const a=Ke.getTransfer(r);if(i===Vn)return n.UNSIGNED_BYTE;if(i===eo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===to)return n.UNSIGNED_SHORT_5_5_5_1;if(i===sc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ic)return n.BYTE;if(i===rc)return n.SHORT;if(i===Ar)return n.UNSIGNED_SHORT;if(i===Qa)return n.INT;if(i===wi)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===Ti)return n.HALF_FLOAT;if(i===ac)return n.ALPHA;if(i===oc)return n.RGB;if(i===fn)return n.RGBA;if(i===lc)return n.LUMINANCE;if(i===cc)return n.LUMINANCE_ALPHA;if(i===ji)return n.DEPTH_COMPONENT;if(i===ir)return n.DEPTH_STENCIL;if(i===no)return n.RED;if(i===io)return n.RED_INTEGER;if(i===hc)return n.RG;if(i===ro)return n.RG_INTEGER;if(i===so)return n.RGBA_INTEGER;if(i===ls||i===cs||i===hs||i===ds)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ls)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ls)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ds)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ya||i===Sa||i===ba||i===Ea)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ya)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ba)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ea)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wa||i===Ta||i===Aa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===wa||i===Ta)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Aa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ra||i===Ca||i===Pa||i===La||i===Ia||i===Da||i===Ua||i===Na||i===Fa||i===ka||i===Oa||i===Ba||i===za||i===Ha)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ra)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ca)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===La)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ia)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Da)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ua)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Na)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ka)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ba)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===za)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ha)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===us||i===Ga||i===Va)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===us)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ga)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Va)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dc||i===$a||i===Wa||i===Xa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===us)return s.COMPRESSED_RED_RGTC1_EXT;if(i===$a)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===nr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class u0 extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bn extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f0={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(f0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Bn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const p0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m0=`
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

}`;class g0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new kt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new gn({vertexShader:p0,fragmentShader:m0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new qt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _0 extends lr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,g=null;const v=new g0,m=t.getContextAttributes();let u=null,S=null;const w=[],M=[],C=new $e;let T=null;const A=new dn;A.viewport=new Mt;const R=new dn;R.viewport=new Mt;const b=[A,R],y=new u0;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let se=w[j];return se===void 0&&(se=new na,w[j]=se),se.getTargetRaySpace()},this.getControllerGrip=function(j){let se=w[j];return se===void 0&&(se=new na,w[j]=se),se.getGripSpace()},this.getHand=function(j){let se=w[j];return se===void 0&&(se=new na,w[j]=se),se.getHandSpace()};function k(j){const se=M.indexOf(j.inputSource);if(se===-1)return;const ye=w[se];ye!==void 0&&(ye.update(j.inputSource,j.frame,c||a),ye.dispatchEvent({type:j.type,data:j.inputSource}))}function $(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",ee);for(let j=0;j<w.length;j++){const se=M[j];se!==null&&(M[j]=null,w[j].disconnect(se))}P=null,z=null,v.reset(),e.setRenderTarget(u),p=null,d=null,f=null,r=null,S=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",$),r.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new $n(p.framebufferWidth,p.framebufferHeight,{format:fn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,ye=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?ir:ji,ye=m.stencil?nr:wi);const Pe={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new $n(d.textureWidth,d.textureHeight,{format:fn,type:Vn,depthTexture:new wc(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Qe.setContext(r),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ee(j){for(let se=0;se<j.removed.length;se++){const ye=j.removed[se],le=M.indexOf(ye);le>=0&&(M[le]=null,w[le].disconnect(ye))}for(let se=0;se<j.added.length;se++){const ye=j.added[se];let le=M.indexOf(ye);if(le===-1){for(let Ne=0;Ne<w.length;Ne++)if(Ne>=M.length){M.push(ye),le=Ne;break}else if(M[Ne]===null){M[Ne]=ye,le=Ne;break}if(le===-1)break}const Pe=w[le];Pe&&Pe.connect(ye)}}const H=new U,ie=new U;function W(j,se,ye){H.setFromMatrixPosition(se.matrixWorld),ie.setFromMatrixPosition(ye.matrixWorld);const le=H.distanceTo(ie),Pe=se.projectionMatrix.elements,Ne=ye.projectionMatrix.elements,Ve=Pe[14]/(Pe[10]-1),lt=Pe[14]/(Pe[10]+1),We=(Pe[9]+1)/Pe[5],gt=(Pe[9]-1)/Pe[5],N=(Pe[8]-1)/Pe[0],ne=(Ne[8]+1)/Ne[0],G=Ve*N,J=Ve*ne,Z=le/(-N+ne),oe=Z*-N;if(se.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(oe),j.translateZ(Z),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Pe[10]===-1)j.projectionMatrix.copy(se.projectionMatrix),j.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const q=Ve+Z,x=lt+Z,_=G-oe,F=J+(le-oe),Y=We*lt/x*q,te=gt*lt/x*q;j.projectionMatrix.makePerspective(_,F,Y,te,q,x),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function de(j,se){se===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(se.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let se=j.near,ye=j.far;v.texture!==null&&(v.depthNear>0&&(se=v.depthNear),v.depthFar>0&&(ye=v.depthFar)),y.near=R.near=A.near=se,y.far=R.far=A.far=ye,(P!==y.near||z!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,z=y.far),A.layers.mask=j.layers.mask|2,R.layers.mask=j.layers.mask|4,y.layers.mask=A.layers.mask|R.layers.mask;const le=j.parent,Pe=y.cameras;de(y,le);for(let Ne=0;Ne<Pe.length;Ne++)de(Pe[Ne],le);Pe.length===2?W(y,A,R):y.projectionMatrix.copy(A.projectionMatrix),_e(j,y,le)};function _e(j,se,ye){ye===null?j.matrix.copy(se.matrixWorld):(j.matrix.copy(ye.matrixWorld),j.matrix.invert(),j.matrix.multiply(se.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(se.projectionMatrix),j.projectionMatrixInverse.copy(se.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Rr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let Se=null;function ze(j,se){if(h=se.getViewerPose(c||a),g=se,h!==null){const ye=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let le=!1;ye.length!==y.cameras.length&&(y.cameras.length=0,le=!0);for(let Ne=0;Ne<ye.length;Ne++){const Ve=ye[Ne];let lt=null;if(p!==null)lt=p.getViewport(Ve);else{const gt=f.getViewSubImage(d,Ve);lt=gt.viewport,Ne===0&&(e.setRenderTargetTextures(S,gt.colorTexture,d.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(S))}let We=b[Ne];We===void 0&&(We=new dn,We.layers.enable(Ne),We.viewport=new Mt,b[Ne]=We),We.matrix.fromArray(Ve.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ve.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(lt.x,lt.y,lt.width,lt.height),Ne===0&&(y.matrix.copy(We.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),le===!0&&y.cameras.push(We)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Ne=f.getDepthInformation(ye[0]);Ne&&Ne.isValid&&Ne.texture&&v.init(e,Ne,r.renderState)}}for(let ye=0;ye<w.length;ye++){const le=M[ye],Pe=w[ye];le!==null&&Pe!==void 0&&Pe.update(le,se,c||a)}Se&&Se(j,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}const Qe=new Ec;Qe.setAnimationLoop(ze),this.setAnimationLoop=function(j){Se=j},this.dispose=function(){}}}const _i=new bn,v0=new mt;function x0(n,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,yc(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,S,w,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),v(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,S,w):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Yt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Yt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const S=e.get(u),w=S.envMap,M=S.envMapRotation;w&&(m.envMap.value=w,_i.copy(M),_i.x*=-1,_i.y*=-1,_i.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),m.envMapRotation.value.setFromMatrix4(v0.makeRotationFromEuler(_i)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,S,w){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*S,m.scale.value=w*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,S){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Yt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const S=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function M0(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){const M=w.program;i.uniformBlockBinding(S,M)}function c(S,w){let M=r[S.id];M===void 0&&(g(S),M=h(S),r[S.id]=M,S.addEventListener("dispose",m));const C=w.program;i.updateUBOMapping(S,C);const T=e.render.frame;s[S.id]!==T&&(d(S),s[S.id]=T)}function h(S){const w=f();S.__bindingPointIndex=w;const M=n.createBuffer(),C=S.__size,T=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,M),M}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const w=r[S.id],M=S.uniforms,C=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let T=0,A=M.length;T<A;T++){const R=Array.isArray(M[T])?M[T]:[M[T]];for(let b=0,y=R.length;b<y;b++){const P=R[b];if(p(P,T,b,C)===!0){const z=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let $=0;for(let ee=0;ee<k.length;ee++){const H=k[ee],ie=v(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,z+$,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,$),$+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,w,M,C){const T=S.value,A=w+"_"+M;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const R=C[A];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return C[A]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(S){const w=S.uniforms;let M=0;const C=16;for(let A=0,R=w.length;A<R;A++){const b=Array.isArray(w[A])?w[A]:[w[A]];for(let y=0,P=b.length;y<P;y++){const z=b[y],k=Array.isArray(z.value)?z.value:[z.value];for(let $=0,ee=k.length;$<ee;$++){const H=k[$],ie=v(H),W=M%C,de=W%ie.boundary,_e=W+de;M+=de,_e!==0&&C-_e<ie.storage&&(M+=C-_e),z.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=ie.storage}}}const T=M%C;return T>0&&(M+=C-T),S.__size=M,S.__cache={},this}function v(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),w}function m(S){const w=S.target;w.removeEventListener("dispose",m);const M=a.indexOf(w.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function u(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class y0{constructor(e={}){const{canvas:t=ld(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,u=null;const S=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this.toneMapping=si,this.toneMappingExposure=1;const M=this;let C=!1,T=0,A=0,R=null,b=-1,y=null;const P=new Mt,z=new Mt;let k=null;const $=new Ye(0);let ee=0,H=t.width,ie=t.height,W=1,de=null,_e=null;const Se=new Mt(0,0,H,ie),ze=new Mt(0,0,H,ie);let Qe=!1;const j=new co;let se=!1,ye=!1;const le=new mt,Pe=new mt,Ne=new U,Ve=new Mt,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function gt(){return R===null?W:1}let N=i;function ne(E,I){return t.getContext(E,I)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ja}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",pe,!1),N===null){const I="webgl2";if(N=ne(I,E),N===null)throw ne(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let G,J,Z,oe,q,x,_,F,Y,te,K,Ae,fe,ve,je,re,xe,Ie,Ue,Me,qe,He,ct,L;function ue(){G=new Tp(N),G.init(),He=new d0(N,G),J=new Mp(N,G,e,He),Z=new l0(N,G),J.reverseDepthBuffer&&d&&Z.buffers.depth.setReversed(!0),oe=new Cp(N),q=new qm,x=new h0(N,G,Z,q,J,He,oe),_=new Sp(M),F=new wp(M),Y=new Nd(N),ct=new vp(N,Y),te=new Ap(N,Y,oe,ct),K=new Lp(N,te,Y,oe),Ue=new Pp(N,J,x),re=new yp(q),Ae=new Xm(M,_,F,G,J,ct,re),fe=new x0(M,q),ve=new jm,je=new t0(G),Ie=new _p(M,_,F,Z,K,p,l),xe=new a0(M,K,J),L=new M0(N,oe,J,Z),Me=new xp(N,G,oe),qe=new Rp(N,G,oe),oe.programs=Ae.programs,M.capabilities=J,M.extensions=G,M.properties=q,M.renderLists=ve,M.shadowMap=xe,M.state=Z,M.info=oe}ue();const X=new _0(M,N);this.xr=X,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=G.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=G.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(H,ie,!1))},this.getSize=function(E){return E.set(H,ie)},this.setSize=function(E,I,O=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,ie=I,t.width=Math.floor(E*W),t.height=Math.floor(I*W),O===!0&&(t.style.width=E+"px",t.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(H*W,ie*W).floor()},this.setDrawingBufferSize=function(E,I,O){H=E,ie=I,W=O,t.width=Math.floor(E*O),t.height=Math.floor(I*O),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(Se)},this.setViewport=function(E,I,O,B){E.isVector4?Se.set(E.x,E.y,E.z,E.w):Se.set(E,I,O,B),Z.viewport(P.copy(Se).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(ze)},this.setScissor=function(E,I,O,B){E.isVector4?ze.set(E.x,E.y,E.z,E.w):ze.set(E,I,O,B),Z.scissor(z.copy(ze).multiplyScalar(W).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(E){Z.setScissorTest(Qe=E)},this.setOpaqueSort=function(E){de=E},this.setTransparentSort=function(E){_e=E},this.getClearColor=function(E){return E.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(E=!0,I=!0,O=!0){let B=0;if(E){let D=!1;if(R!==null){const ae=R.texture.format;D=ae===so||ae===ro||ae===io}if(D){const ae=R.texture.type,me=ae===Vn||ae===wi||ae===Ar||ae===nr||ae===eo||ae===to,be=Ie.getClearColor(),Ee=Ie.getClearAlpha(),Fe=be.r,Oe=be.g,we=be.b;me?(g[0]=Fe,g[1]=Oe,g[2]=we,g[3]=Ee,N.clearBufferuiv(N.COLOR,0,g)):(v[0]=Fe,v[1]=Oe,v[2]=we,v[3]=Ee,N.clearBufferiv(N.COLOR,0,v))}else B|=N.COLOR_BUFFER_BIT}I&&(B|=N.DEPTH_BUFFER_BIT),O&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ve.dispose(),je.dispose(),q.dispose(),_.dispose(),F.dispose(),K.dispose(),ct.dispose(),L.dispose(),Ae.dispose(),X.dispose(),X.removeEventListener("sessionstart",bo),X.removeEventListener("sessionend",Eo),di.stop()};function Q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=oe.autoReset,I=xe.enabled,O=xe.autoUpdate,B=xe.needsUpdate,D=xe.type;ue(),oe.autoReset=E,xe.enabled=I,xe.autoUpdate=O,xe.needsUpdate=B,xe.type=D}function pe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ke(E){const I=E.target;I.removeEventListener("dispose",ke),vt(I)}function vt(E){Dt(E),q.remove(E)}function Dt(E){const I=q.get(E).programs;I!==void 0&&(I.forEach(function(O){Ae.releaseProgram(O)}),E.isShaderMaterial&&Ae.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,O,B,D,ae){I===null&&(I=lt);const me=D.isMesh&&D.matrixWorld.determinant()<0,be=$c(E,I,O,B,D);Z.setMaterial(B,me);let Ee=O.index,Fe=1;if(B.wireframe===!0){if(Ee=te.getWireframeAttribute(O),Ee===void 0)return;Fe=2}const Oe=O.drawRange,we=O.attributes.position;let Je=Oe.start*Fe,ht=(Oe.start+Oe.count)*Fe;ae!==null&&(Je=Math.max(Je,ae.start*Fe),ht=Math.min(ht,(ae.start+ae.count)*Fe)),Ee!==null?(Je=Math.max(Je,0),ht=Math.min(ht,Ee.count)):we!=null&&(Je=Math.max(Je,0),ht=Math.min(ht,we.count));const ut=ht-Je;if(ut<0||ut===1/0)return;ct.setup(D,B,be,O,Ee);let Vt,et=Me;if(Ee!==null&&(Vt=Y.get(Ee),et=qe,et.setIndex(Vt)),D.isMesh)B.wireframe===!0?(Z.setLineWidth(B.wireframeLinewidth*gt()),et.setMode(N.LINES)):et.setMode(N.TRIANGLES);else if(D.isLine){let Re=B.linewidth;Re===void 0&&(Re=1),Z.setLineWidth(Re*gt()),D.isLineSegments?et.setMode(N.LINES):D.isLineLoop?et.setMode(N.LINE_LOOP):et.setMode(N.LINE_STRIP)}else D.isPoints?et.setMode(N.POINTS):D.isSprite&&et.setMode(N.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)et.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(G.get("WEBGL_multi_draw"))et.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const Re=D._multiDrawStarts,An=D._multiDrawCounts,tt=D._multiDrawCount,on=Ee?Y.get(Ee).bytesPerElement:1,Ri=q.get(B).currentProgram.getUniforms();for(let jt=0;jt<tt;jt++)Ri.setValue(N,"_gl_DrawID",jt),et.render(Re[jt]/on,An[jt])}else if(D.isInstancedMesh)et.renderInstances(Je,ut,D.count);else if(O.isInstancedBufferGeometry){const Re=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,An=Math.min(O.instanceCount,Re);et.renderInstances(Je,ut,An)}else et.render(Je,ut)};function nt(E,I,O){E.transparent===!0&&E.side===Xt&&E.forceSinglePass===!1?(E.side=Yt,E.needsUpdate=!0,Or(E,I,O),E.side=ai,E.needsUpdate=!0,Or(E,I,O),E.side=Xt):Or(E,I,O)}this.compile=function(E,I,O=null){O===null&&(O=E),u=je.get(O),u.init(I),w.push(u),O.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(u.pushLight(D),D.castShadow&&u.pushShadow(D))}),E!==O&&E.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(u.pushLight(D),D.castShadow&&u.pushShadow(D))}),u.setupLights();const B=new Set;return E.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const ae=D.material;if(ae)if(Array.isArray(ae))for(let me=0;me<ae.length;me++){const be=ae[me];nt(be,O,D),B.add(be)}else nt(ae,O,D),B.add(ae)}),w.pop(),u=null,B},this.compileAsync=function(E,I,O=null){const B=this.compile(E,I,O);return new Promise(D=>{function ae(){if(B.forEach(function(me){q.get(me).currentProgram.isReady()&&B.delete(me)}),B.size===0){D(E);return}setTimeout(ae,10)}G.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let an=null;function Tn(E){an&&an(E)}function bo(){di.stop()}function Eo(){di.start()}const di=new Ec;di.setAnimationLoop(Tn),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(E){an=E,X.setAnimationLoop(E),E===null?di.stop():di.start()},X.addEventListener("sessionstart",bo),X.addEventListener("sessionend",Eo),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(I),I=X.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,I,R),u=je.get(E,w.length),u.init(I),w.push(u),Pe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),j.setFromProjectionMatrix(Pe),ye=this.localClippingEnabled,se=re.init(this.clippingPlanes,ye),m=ve.get(E,S.length),m.init(),S.push(m),X.enabled===!0&&X.isPresenting===!0){const ae=M.xr.getDepthSensingMesh();ae!==null&&As(ae,I,-1/0,M.sortObjects)}As(E,I,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(de,_e),We=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,We&&Ie.addToRenderList(m,E),this.info.render.frame++,se===!0&&re.beginShadows();const O=u.state.shadowsArray;xe.render(O,E,I),se===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,D=m.transmissive;if(u.setupLights(),I.isArrayCamera){const ae=I.cameras;if(D.length>0)for(let me=0,be=ae.length;me<be;me++){const Ee=ae[me];To(B,D,E,Ee)}We&&Ie.render(E);for(let me=0,be=ae.length;me<be;me++){const Ee=ae[me];wo(m,E,Ee,Ee.viewport)}}else D.length>0&&To(B,D,E,I),We&&Ie.render(E),wo(m,E,I);R!==null&&(x.updateMultisampleRenderTarget(R),x.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(M,E,I),ct.resetDefaultState(),b=-1,y=null,w.pop(),w.length>0?(u=w[w.length-1],se===!0&&re.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function As(E,I,O,B){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)O=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){B&&Ve.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Pe);const me=K.update(E),be=E.material;be.visible&&m.push(E,me,be,O,Ve.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||j.intersectsObject(E))){const me=K.update(E),be=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ve.copy(E.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ve.copy(me.boundingSphere.center)),Ve.applyMatrix4(E.matrixWorld).applyMatrix4(Pe)),Array.isArray(be)){const Ee=me.groups;for(let Fe=0,Oe=Ee.length;Fe<Oe;Fe++){const we=Ee[Fe],Je=be[we.materialIndex];Je&&Je.visible&&m.push(E,me,Je,O,Ve.z,we)}}else be.visible&&m.push(E,me,be,O,Ve.z,null)}}const ae=E.children;for(let me=0,be=ae.length;me<be;me++)As(ae[me],I,O,B)}function wo(E,I,O,B){const D=E.opaque,ae=E.transmissive,me=E.transparent;u.setupLightsView(O),se===!0&&re.setGlobalState(M.clippingPlanes,O),B&&Z.viewport(P.copy(B)),D.length>0&&kr(D,I,O),ae.length>0&&kr(ae,I,O),me.length>0&&kr(me,I,O),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function To(E,I,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[B.id]===void 0&&(u.state.transmissionRenderTarget[B.id]=new $n(1,1,{generateMipmaps:!0,type:G.has("EXT_color_buffer_half_float")||G.has("EXT_color_buffer_float")?Ti:Vn,minFilter:bi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ae=u.state.transmissionRenderTarget[B.id],me=B.viewport||P;ae.setSize(me.z,me.w);const be=M.getRenderTarget();M.setRenderTarget(ae),M.getClearColor($),ee=M.getClearAlpha(),ee<1&&M.setClearColor(16777215,.5),M.clear(),We&&Ie.render(O);const Ee=M.toneMapping;M.toneMapping=si;const Fe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),u.setupLightsView(B),se===!0&&re.setGlobalState(M.clippingPlanes,B),kr(E,O,B),x.updateMultisampleRenderTarget(ae),x.updateRenderTargetMipmap(ae),G.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let we=0,Je=I.length;we<Je;we++){const ht=I[we],ut=ht.object,Vt=ht.geometry,et=ht.material,Re=ht.group;if(et.side===Xt&&ut.layers.test(B.layers)){const An=et.side;et.side=Yt,et.needsUpdate=!0,Ao(ut,O,B,Vt,et,Re),et.side=An,et.needsUpdate=!0,Oe=!0}}Oe===!0&&(x.updateMultisampleRenderTarget(ae),x.updateRenderTargetMipmap(ae))}M.setRenderTarget(be),M.setClearColor($,ee),Fe!==void 0&&(B.viewport=Fe),M.toneMapping=Ee}function kr(E,I,O){const B=I.isScene===!0?I.overrideMaterial:null;for(let D=0,ae=E.length;D<ae;D++){const me=E[D],be=me.object,Ee=me.geometry,Fe=B===null?me.material:B,Oe=me.group;be.layers.test(O.layers)&&Ao(be,I,O,Ee,Fe,Oe)}}function Ao(E,I,O,B,D,ae){E.onBeforeRender(M,I,O,B,D,ae),E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),D.onBeforeRender(M,I,O,B,E,ae),D.transparent===!0&&D.side===Xt&&D.forceSinglePass===!1?(D.side=Yt,D.needsUpdate=!0,M.renderBufferDirect(O,I,B,D,E,ae),D.side=ai,D.needsUpdate=!0,M.renderBufferDirect(O,I,B,D,E,ae),D.side=Xt):M.renderBufferDirect(O,I,B,D,E,ae),E.onAfterRender(M,I,O,B,D,ae)}function Or(E,I,O){I.isScene!==!0&&(I=lt);const B=q.get(E),D=u.state.lights,ae=u.state.shadowsArray,me=D.state.version,be=Ae.getParameters(E,D.state,ae,I,O),Ee=Ae.getProgramCacheKey(be);let Fe=B.programs;B.environment=E.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(E.isMeshStandardMaterial?F:_).get(E.envMap||B.environment),B.envMapRotation=B.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Fe===void 0&&(E.addEventListener("dispose",ke),Fe=new Map,B.programs=Fe);let Oe=Fe.get(Ee);if(Oe!==void 0){if(B.currentProgram===Oe&&B.lightsStateVersion===me)return Co(E,be),Oe}else be.uniforms=Ae.getUniforms(E),E.onBeforeCompile(be,M),Oe=Ae.acquireProgram(be,Ee),Fe.set(Ee,Oe),B.uniforms=be.uniforms;const we=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(we.clippingPlanes=re.uniform),Co(E,be),B.needsLights=Xc(E),B.lightsStateVersion=me,B.needsLights&&(we.ambientLightColor.value=D.state.ambient,we.lightProbe.value=D.state.probe,we.directionalLights.value=D.state.directional,we.directionalLightShadows.value=D.state.directionalShadow,we.spotLights.value=D.state.spot,we.spotLightShadows.value=D.state.spotShadow,we.rectAreaLights.value=D.state.rectArea,we.ltc_1.value=D.state.rectAreaLTC1,we.ltc_2.value=D.state.rectAreaLTC2,we.pointLights.value=D.state.point,we.pointLightShadows.value=D.state.pointShadow,we.hemisphereLights.value=D.state.hemi,we.directionalShadowMap.value=D.state.directionalShadowMap,we.directionalShadowMatrix.value=D.state.directionalShadowMatrix,we.spotShadowMap.value=D.state.spotShadowMap,we.spotLightMatrix.value=D.state.spotLightMatrix,we.spotLightMap.value=D.state.spotLightMap,we.pointShadowMap.value=D.state.pointShadowMap,we.pointShadowMatrix.value=D.state.pointShadowMatrix),B.currentProgram=Oe,B.uniformsList=null,Oe}function Ro(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=fs.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function Co(E,I){const O=q.get(E);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.batchingColor=I.batchingColor,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.instancingMorph=I.instancingMorph,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function $c(E,I,O,B,D){I.isScene!==!0&&(I=lt),x.resetTextureUnits();const ae=I.fog,me=B.isMeshStandardMaterial?I.environment:null,be=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:or,Ee=(B.isMeshStandardMaterial?F:_).get(B.envMap||me),Fe=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Oe=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),we=!!O.morphAttributes.position,Je=!!O.morphAttributes.normal,ht=!!O.morphAttributes.color;let ut=si;B.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ut=M.toneMapping);const Vt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,et=Vt!==void 0?Vt.length:0,Re=q.get(B),An=u.state.lights;if(se===!0&&(ye===!0||E!==y)){const en=E===y&&B.id===b;re.setState(B,E,en)}let tt=!1;B.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==An.state.version||Re.outputColorSpace!==be||D.isBatchedMesh&&Re.batching===!1||!D.isBatchedMesh&&Re.batching===!0||D.isBatchedMesh&&Re.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Re.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Re.instancing===!1||!D.isInstancedMesh&&Re.instancing===!0||D.isSkinnedMesh&&Re.skinning===!1||!D.isSkinnedMesh&&Re.skinning===!0||D.isInstancedMesh&&Re.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Re.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Re.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Re.instancingMorph===!1&&D.morphTexture!==null||Re.envMap!==Ee||B.fog===!0&&Re.fog!==ae||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==re.numPlanes||Re.numIntersection!==re.numIntersection)||Re.vertexAlphas!==Fe||Re.vertexTangents!==Oe||Re.morphTargets!==we||Re.morphNormals!==Je||Re.morphColors!==ht||Re.toneMapping!==ut||Re.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Re.__version=B.version);let on=Re.currentProgram;tt===!0&&(on=Or(B,I,D));let Ri=!1,jt=!1,dr=!1;const ft=on.getUniforms(),_n=Re.uniforms;if(Z.useProgram(on.program)&&(Ri=!0,jt=!0,dr=!0),B.id!==b&&(b=B.id,jt=!0),Ri||y!==E){Z.buffers.depth.getReversed()?(le.copy(E.projectionMatrix),hd(le),dd(le),ft.setValue(N,"projectionMatrix",le)):ft.setValue(N,"projectionMatrix",E.projectionMatrix),ft.setValue(N,"viewMatrix",E.matrixWorldInverse);const qn=ft.map.cameraPosition;qn!==void 0&&qn.setValue(N,Ne.setFromMatrixPosition(E.matrixWorld)),J.logarithmicDepthBuffer&&ft.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ft.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,jt=!0,dr=!0)}if(D.isSkinnedMesh){ft.setOptional(N,D,"bindMatrix"),ft.setOptional(N,D,"bindMatrixInverse");const en=D.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),ft.setValue(N,"boneTexture",en.boneTexture,x))}D.isBatchedMesh&&(ft.setOptional(N,D,"batchingTexture"),ft.setValue(N,"batchingTexture",D._matricesTexture,x),ft.setOptional(N,D,"batchingIdTexture"),ft.setValue(N,"batchingIdTexture",D._indirectTexture,x),ft.setOptional(N,D,"batchingColorTexture"),D._colorsTexture!==null&&ft.setValue(N,"batchingColorTexture",D._colorsTexture,x));const ur=O.morphAttributes;if((ur.position!==void 0||ur.normal!==void 0||ur.color!==void 0)&&Ue.update(D,O,on),(jt||Re.receiveShadow!==D.receiveShadow)&&(Re.receiveShadow=D.receiveShadow,ft.setValue(N,"receiveShadow",D.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(_n.envMap.value=Ee,_n.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(_n.envMapIntensity.value=I.environmentIntensity),jt&&(ft.setValue(N,"toneMappingExposure",M.toneMappingExposure),Re.needsLights&&Wc(_n,dr),ae&&B.fog===!0&&fe.refreshFogUniforms(_n,ae),fe.refreshMaterialUniforms(_n,B,W,ie,u.state.transmissionRenderTarget[E.id]),fs.upload(N,Ro(Re),_n,x)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(fs.upload(N,Ro(Re),_n,x),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ft.setValue(N,"center",D.center),ft.setValue(N,"modelViewMatrix",D.modelViewMatrix),ft.setValue(N,"normalMatrix",D.normalMatrix),ft.setValue(N,"modelMatrix",D.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const en=B.uniformsGroups;for(let qn=0,Yn=en.length;qn<Yn;qn++){const Po=en[qn];L.update(Po,on),L.bind(Po,on)}}return on}function Wc(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function Xc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,I,O){q.get(E.texture).__webglTexture=I,q.get(E.depthTexture).__webglTexture=O;const B=q.get(E);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||G.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,I){const O=q.get(E);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,O=0){R=E,T=I,A=O;let B=!0,D=null,ae=!1,me=!1;if(E){const Ee=q.get(E);if(Ee.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(N.FRAMEBUFFER,null),B=!1;else if(Ee.__webglFramebuffer===void 0)x.setupRenderTarget(E);else if(Ee.__hasExternalTextures)x.rebindTextures(E,q.get(E.texture).__webglTexture,q.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const we=E.depthTexture;if(Ee.__boundDepthTexture!==we){if(we!==null&&q.has(we)&&(E.width!==we.image.width||E.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(E)}}const Fe=E.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(me=!0);const Oe=q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Oe[I])?D=Oe[I][O]:D=Oe[I],ae=!0):E.samples>0&&x.useMultisampledRTT(E)===!1?D=q.get(E).__webglMultisampledFramebuffer:Array.isArray(Oe)?D=Oe[O]:D=Oe,P.copy(E.viewport),z.copy(E.scissor),k=E.scissorTest}else P.copy(Se).multiplyScalar(W).floor(),z.copy(ze).multiplyScalar(W).floor(),k=Qe;if(Z.bindFramebuffer(N.FRAMEBUFFER,D)&&B&&Z.drawBuffers(E,D),Z.viewport(P),Z.scissor(z),Z.setScissorTest(k),ae){const Ee=q.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ee.__webglTexture,O)}else if(me){const Ee=q.get(E.texture),Fe=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ee.__webglTexture,O||0,Fe)}b=-1},this.readRenderTargetPixels=function(E,I,O,B,D,ae,me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(be=be[me]),be){Z.bindFramebuffer(N.FRAMEBUFFER,be);try{const Ee=E.texture,Fe=Ee.format,Oe=Ee.type;if(!J.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-B&&O>=0&&O<=E.height-D&&N.readPixels(I,O,B,D,He.convert(Fe),He.convert(Oe),ae)}finally{const Ee=R!==null?q.get(R).__webglFramebuffer:null;Z.bindFramebuffer(N.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(E,I,O,B,D,ae,me){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(be=be[me]),be){const Ee=E.texture,Fe=Ee.format,Oe=Ee.type;if(!J.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=E.width-B&&O>=0&&O<=E.height-D){Z.bindFramebuffer(N.FRAMEBUFFER,be);const we=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,we),N.bufferData(N.PIXEL_PACK_BUFFER,ae.byteLength,N.STREAM_READ),N.readPixels(I,O,B,D,He.convert(Fe),He.convert(Oe),0);const Je=R!==null?q.get(R).__webglFramebuffer:null;Z.bindFramebuffer(N.FRAMEBUFFER,Je);const ht=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await cd(N,ht,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,we),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ae),N.deleteBuffer(we),N.deleteSync(ht),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,I=null,O=0){E.isTexture!==!0&&(vr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,E=arguments[1]);const B=Math.pow(2,-O),D=Math.floor(E.image.width*B),ae=Math.floor(E.image.height*B),me=I!==null?I.x:0,be=I!==null?I.y:0;x.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,O,0,0,me,be,D,ae),Z.unbindTexture()},this.copyTextureToTexture=function(E,I,O=null,B=null,D=0){E.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1],I=arguments[2],D=arguments[3]||0,O=null);let ae,me,be,Ee,Fe,Oe,we,Je,ht;const ut=E.isCompressedTexture?E.mipmaps[D]:E.image;O!==null?(ae=O.max.x-O.min.x,me=O.max.y-O.min.y,be=O.isBox3?O.max.z-O.min.z:1,Ee=O.min.x,Fe=O.min.y,Oe=O.isBox3?O.min.z:0):(ae=ut.width,me=ut.height,be=ut.depth||1,Ee=0,Fe=0,Oe=0),B!==null?(we=B.x,Je=B.y,ht=B.z):(we=0,Je=0,ht=0);const Vt=He.convert(I.format),et=He.convert(I.type);let Re;I.isData3DTexture?(x.setTexture3D(I,0),Re=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(x.setTexture2DArray(I,0),Re=N.TEXTURE_2D_ARRAY):(x.setTexture2D(I,0),Re=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const An=N.getParameter(N.UNPACK_ROW_LENGTH),tt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),on=N.getParameter(N.UNPACK_SKIP_PIXELS),Ri=N.getParameter(N.UNPACK_SKIP_ROWS),jt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ut.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ut.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ee),N.pixelStorei(N.UNPACK_SKIP_ROWS,Fe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Oe);const dr=E.isDataArrayTexture||E.isData3DTexture,ft=I.isDataArrayTexture||I.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const _n=q.get(E),ur=q.get(I),en=q.get(_n.__renderTarget),qn=q.get(ur.__renderTarget);Z.bindFramebuffer(N.READ_FRAMEBUFFER,en.__webglFramebuffer),Z.bindFramebuffer(N.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Yn=0;Yn<be;Yn++)dr&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,q.get(E).__webglTexture,D,Oe+Yn),E.isDepthTexture?(ft&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,q.get(I).__webglTexture,D,ht+Yn),N.blitFramebuffer(Ee,Fe,ae,me,we,Je,ae,me,N.DEPTH_BUFFER_BIT,N.NEAREST)):ft?N.copyTexSubImage3D(Re,D,we,Je,ht+Yn,Ee,Fe,ae,me):N.copyTexSubImage2D(Re,D,we,Je,ht+Yn,Ee,Fe,ae,me);Z.bindFramebuffer(N.READ_FRAMEBUFFER,null),Z.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ft?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Re,D,we,Je,ht,ae,me,be,Vt,et,ut.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(Re,D,we,Je,ht,ae,me,be,Vt,ut.data):N.texSubImage3D(Re,D,we,Je,ht,ae,me,be,Vt,et,ut):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,D,we,Je,ae,me,Vt,et,ut.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,D,we,Je,ut.width,ut.height,Vt,ut.data):N.texSubImage2D(N.TEXTURE_2D,D,we,Je,ae,me,Vt,et,ut);N.pixelStorei(N.UNPACK_ROW_LENGTH,An),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,tt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,on),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ri),N.pixelStorei(N.UNPACK_SKIP_IMAGES,jt),D===0&&I.generateMipmaps&&N.generateMipmap(Re),Z.unbindTexture()},this.copyTextureToTexture3D=function(E,I,O=null,B=null,D=0){return E.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,E=arguments[2],I=arguments[3],D=arguments[4]||0),vr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,I,O,B,D)},this.initRenderTarget=function(E){q.get(E).__webglFramebuffer===void 0&&x.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?x.setTextureCube(E,0):E.isData3DTexture?x.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?x.setTexture2DArray(E,0):x.setTexture2D(E,0),Z.unbindTexture()},this.resetState=function(){T=0,A=0,R=null,Z.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}class Pc extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class S0 extends kt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Ft,h=Ft,f,d){super(null,a,o,l,c,h,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class b0 extends kt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class oi extends sn{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],d=[],p=[];let g=0;const v=[],m=i/2;let u=0;S(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Et(f,3)),this.setAttribute("normal",new Et(d,3)),this.setAttribute("uv",new Et(p,2));function S(){const M=new U,C=new U;let T=0;const A=(t-e)/i;for(let R=0;R<=s;R++){const b=[],y=R/s,P=y*(t-e)+e;for(let z=0;z<=r;z++){const k=z/r,$=k*l+o,ee=Math.sin($),H=Math.cos($);C.x=P*ee,C.y=-y*i+m,C.z=P*H,f.push(C.x,C.y,C.z),M.set(ee,A,H).normalize(),d.push(M.x,M.y,M.z),p.push(k,1-y),b.push(g++)}v.push(b)}for(let R=0;R<r;R++)for(let b=0;b<s;b++){const y=v[b][R],P=v[b+1][R],z=v[b+1][R+1],k=v[b][R+1];(e>0||b!==0)&&(h.push(y,P,k),T+=3),(t>0||b!==s-1)&&(h.push(P,z,k),T+=3)}c.addGroup(u,T,0),u+=T}function w(M){const C=g,T=new $e,A=new U;let R=0;const b=M===!0?e:t,y=M===!0?1:-1;for(let z=1;z<=r;z++)f.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),g++;const P=g;for(let z=0;z<=r;z++){const $=z/r*l+o,ee=Math.cos($),H=Math.sin($);A.x=b*H,A.y=m*y,A.z=b*ee,f.push(A.x,A.y,A.z),d.push(0,y,0),T.x=ee*.5+.5,T.y=H*.5*y+.5,p.push(T.x,T.y),g++}for(let z=0;z<r;z++){const k=C+z,$=P+z;M===!0?h.push($,$+1,k):h.push($+1,$,k),R+=3}c.addGroup(u,R,M===!0?1:2),u+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dr extends oi{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Dr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class uo extends sn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),h(),this.setAttribute("position",new Et(s,3)),this.setAttribute("normal",new Et(s.slice(),3)),this.setAttribute("uv",new Et(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const w=new U,M=new U,C=new U;for(let T=0;T<t.length;T+=3)p(t[T+0],w),p(t[T+1],M),p(t[T+2],C),l(w,M,C,S)}function l(S,w,M,C){const T=C+1,A=[];for(let R=0;R<=T;R++){A[R]=[];const b=S.clone().lerp(M,R/T),y=w.clone().lerp(M,R/T),P=T-R;for(let z=0;z<=P;z++)z===0&&R===T?A[R][z]=b:A[R][z]=b.clone().lerp(y,z/P)}for(let R=0;R<T;R++)for(let b=0;b<2*(T-R)-1;b++){const y=Math.floor(b/2);b%2===0?(d(A[R][y+1]),d(A[R+1][y]),d(A[R][y])):(d(A[R][y+1]),d(A[R+1][y+1]),d(A[R+1][y]))}}function c(S){const w=new U;for(let M=0;M<s.length;M+=3)w.x=s[M+0],w.y=s[M+1],w.z=s[M+2],w.normalize().multiplyScalar(S),s[M+0]=w.x,s[M+1]=w.y,s[M+2]=w.z}function h(){const S=new U;for(let w=0;w<s.length;w+=3){S.x=s[w+0],S.y=s[w+1],S.z=s[w+2];const M=m(S)/2/Math.PI+.5,C=u(S)/Math.PI+.5;a.push(M,1-C)}g(),f()}function f(){for(let S=0;S<a.length;S+=6){const w=a[S+0],M=a[S+2],C=a[S+4],T=Math.max(w,M,C),A=Math.min(w,M,C);T>.9&&A<.1&&(w<.2&&(a[S+0]+=1),M<.2&&(a[S+2]+=1),C<.2&&(a[S+4]+=1))}}function d(S){s.push(S.x,S.y,S.z)}function p(S,w){const M=S*3;w.x=e[M+0],w.y=e[M+1],w.z=e[M+2]}function g(){const S=new U,w=new U,M=new U,C=new U,T=new $e,A=new $e,R=new $e;for(let b=0,y=0;b<s.length;b+=9,y+=6){S.set(s[b+0],s[b+1],s[b+2]),w.set(s[b+3],s[b+4],s[b+5]),M.set(s[b+6],s[b+7],s[b+8]),T.set(a[y+0],a[y+1]),A.set(a[y+2],a[y+3]),R.set(a[y+4],a[y+5]),C.copy(S).add(w).add(M).divideScalar(3);const P=m(C);v(T,y+0,S,P),v(A,y+2,w,P),v(R,y+4,M,P)}}function v(S,w,M,C){C<0&&S.x===1&&(a[w]=S.x-1),M.x===0&&M.z===0&&(a[w]=C/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function u(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.vertices,e.indices,e.radius,e.details)}}class Ur extends sn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new U,d=new U,p=[],g=[],v=[],m=[];for(let u=0;u<=i;u++){const S=[],w=u/i;let M=0;u===0&&a===0?M=.5/t:u===i&&l===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){const T=C/t;f.x=-e*Math.cos(r+T*s)*Math.sin(a+w*o),f.y=e*Math.cos(a+w*o),f.z=e*Math.sin(r+T*s)*Math.sin(a+w*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(T+M,1-w),S.push(c++)}h.push(S)}for(let u=0;u<i;u++)for(let S=0;S<t;S++){const w=h[u][S+1],M=h[u][S],C=h[u+1][S],T=h[u+1][S+1];(u!==0||a>0)&&p.push(w,M,T),(u!==i-1||l<Math.PI)&&p.push(M,C,T)}this.setIndex(p),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fo extends uo{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fo(e.radius,e.detail)}}class po extends sn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],h=new U,f=new U,d=new U;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const v=g/r*s,m=p/i*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const v=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,u=(r+1)*(p-1)+g,S=(r+1)*p+g;a.push(v,m,S),a.push(m,u,S)}this.setIndex(a),this.setAttribute("position",new Et(o,3)),this.setAttribute("normal",new Et(l,3)),this.setAttribute("uv",new Et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class E0 extends Ir{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Ye(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Lc extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class w0 extends Lc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ia=new mt,Il=new U,Dl=new U;class T0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new co,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Il.setFromMatrixPosition(e.matrixWorld),t.position.copy(Il),Dl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dl),t.updateMatrixWorld(),ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ia),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class A0 extends T0{constructor(){super(new bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class R0 extends Lc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new A0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ul=new mt;class C0{constructor(e,t,i=0,r=1/0){this.ray=new _c(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new lo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ul.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ul),this}intersectObject(e,t=!0,i=[]){return Ya(e,this,i,t),i.sort(Nl),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ya(e[r],this,i,t);return i.sort(Nl),i}}function Nl(n,e){return n.distance-e.distance}function Ya(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Ya(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ja}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ja);const Wn="#5b3520",rn={grass:"#9dd190",grassLight:"#a9d99b",grassDark:"#93c886",grassTick:"#78b66f",grassEdge:"#5f9a5a",sand:"#ecd7a6",trunk:"#e2a574",leaf:"#83c47b",leafLight:"#b4de94",fir:"#8ccf87"};function dt(n){let e=(Math.imul(n|0,2654435761)^2654435769)>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>>17,e^=e<<5,e>>>=0,e/4294967296)}function Pt(n,e){const t=document.createElement("canvas");return t.width=Math.round(n),t.height=Math.round(e),[t,t.getContext("2d")]}function P0(n,e,{amp:t=1.5,step:i=5,closed:r=!1}={}){const s=[],a=n.length,o=r?a:a-1,l=e()*6.28,c=e()*6.28;let h=0;for(let f=0;f<o;f++){const[d,p]=n[f],[g,v]=n[(f+1)%a],m=Math.hypot(g-d,v-p)||1,u=-(v-p)/m,S=(g-d)/m,w=Math.max(1,Math.ceil(m/i));for(let M=0;M<w;M++){const C=M/w,T=t*(Math.sin(h*.045+l)*.65+Math.sin(h*.17+c)*.35);s.push([d+(g-d)*C+u*T,p+(v-p)*C+S*T]),h+=m/w}}return r||s.push(n[a-1].slice()),s}function Le(n,e,t,{w:i=3,color:r=Wn,closed:s=!1,amp:a=1.3}={}){const o=P0(e,t,{amp:a,closed:s});s&&o.push(o[0]);const l=t()*6.28,c=.12+t()*.14;n.strokeStyle=r,n.lineCap="round",n.lineJoin="round";for(let h=0;h<o.length-1;h++)n.lineWidth=i*(.7+.55*(.5+.5*Math.sin(h*c+l))),n.beginPath(),n.moveTo(o[h][0],o[h][1]),n.lineTo(o[h+1][0],o[h+1][1]),n.stroke()}function Ic(n,e){n.beginPath(),n.moveTo(e[0][0],e[0][1]);for(const t of e)n.lineTo(t[0],t[1]);n.closePath()}function Tt(n,e,t){n.fillStyle=t,Ic(n,e),n.fill()}function L0(n,e,t){n.save(),Ic(n,e),n.clip(),t(),n.restore()}function En(n,e,t,i,r,{n:s=40,lump:a=.08}={}){const o=2+Math.floor(r()*3),l=r()*6.28,c=5+Math.floor(r()*3),h=r()*6.28,f=[];for(let d=0;d<s;d++){const p=d/s*Math.PI*2,g=1+a*(Math.sin(p*o+l)*.6+Math.sin(p*c+h)*.4);f.push([n+Math.cos(p)*t*g,e+Math.sin(p)*i*g])}return f}function I0(n,e,t,i,r){const s=[];for(let a=0;a<r;a++){const o=Math.PI+a/r*Math.PI,l=Math.PI+(a+1)/r*Math.PI,c=n+Math.cos(o)*t,h=e+Math.sin(o)*i,f=n+Math.cos(l)*t,d=e+Math.sin(l)*i,p=(c+f)/2,g=(h+d)/2,v=Math.hypot(f-c,d-h)/2,m=Math.atan2(h-g,c-p),u=Math.atan2(g-e,p-n),S=Math.cos(m+Math.PI/2-u)>0?1:-1;for(let w=0;w<8;w++){const M=m+S*(w/8)*Math.PI;s.push([p+Math.cos(M)*v,g+Math.sin(M)*v*1.05])}}for(let a=0;a<=10;a++){const o=a/10*Math.PI;s.push([n+Math.cos(o)*t,e+Math.sin(o)*i*.45])}return s}function D0(n,e=10){const t=[];for(let i=0;i<n.length-1;i++){const r=n[Math.max(0,i-1)],s=n[i],a=n[i+1],o=n[Math.min(n.length-1,i+2)];for(let l=0;l<e;l++){const c=l/e,h=c*c,f=h*c,d=p=>.5*(2*s[p]+(-r[p]+a[p])*c+(2*r[p]-5*s[p]+4*a[p]-o[p])*h+(-r[p]+3*s[p]-3*a[p]+o[p])*f);t.push([d(0),d(1)])}}return t.push(n[n.length-1].slice()),t}function U0(n,e,t,i=.1){const r=[],s=[],a=t()*6.28;return n.forEach(([o,l],c)=>{const h=n[Math.max(0,c-1)],f=n[Math.min(n.length-1,c+1)],d=Math.hypot(f[0]-h[0],f[1]-h[1])||1,p=-(f[1]-h[1])/d,g=(f[0]-h[0])/d,v=e*(1+i*Math.sin(c*.31+a)),m=e*(1+i*Math.sin(c*.23+a*2));r.push([o+p*v,l+g*v]),s.push([o-p*m,l-g*m])}),[r,s]}function N0(){const[n,e]=Pt(128,64),t=e.createRadialGradient(64,32,4,64,32,62);return t.addColorStop(0,"rgba(50,95,55,.42)"),t.addColorStop(.7,"rgba(50,95,55,.3)"),t.addColorStop(1,"rgba(50,95,55,0)"),e.setTransform(1,0,0,.5,0,16),e.fillStyle=t,e.beginPath(),e.arc(64,32,62,0,Math.PI*2),e.fill(),n}function F0(n,e="#ffd24a"){const[t,i]=Pt(80,80),r=dt(20+n),s=[];for(let a=0;a<10;a++){const o=-Math.PI/2+a*Math.PI/5,l=a%2?14:32;s.push([40+Math.cos(o)*l,42+Math.sin(o)*l])}return Tt(i,s,e),Le(i,s,r,{w:3.4,closed:!0,amp:.6}),t}function k0(n=1024,e=640){const[t,i]=Pt(n,e),r=dt(61),s=dt(62),a=i.createLinearGradient(0,0,0,e);a.addColorStop(0,"#7f8fe0"),a.addColorStop(.6,"#a7a6ee"),a.addColorStop(1,"#c9b5ee"),i.fillStyle=a,i.fillRect(0,0,n,e);for(let o=0;o<7;o++){const l=s()*n,c=60+s()*(e-120),h=60+s()*90,f=h*.32,d=3+Math.floor(s()*3),p=I0(l,c,h,f,d);Tt(i,p,"#e7c4ee"),L0(i,p,()=>Tt(i,En(l,c+f*.55,h*1.1,f*.45,r),"#d7aee6")),Le(i,p,r,{w:2.6,closed:!0,color:"#6d5aa8"})}return t}function O0(){const[n,e]=Pt(256,256),t=dt(71),i=dt(72);e.fillStyle="#c98f55",e.fillRect(0,0,256,256);for(let a=1;a<4;a++)Le(e,[[20,a*64+(i()-.5)*4],[236,a*64+(i()-.5)*4]],t,{w:2.4,color:"#8a5a30"});for(const a of[0,1])Tt(e,a?[[20,20],[52,20],[236,204],[236,236],[204,236],[20,52]]:[[204,20],[236,20],[236,52],[52,236],[20,236],[20,204]],"#dba46a");Le(e,[[36,36],[220,220]],t,{w:2.6}),Le(e,[[220,36],[36,220]],t,{w:2.6});const r=[[4,4],[252,4],[252,252],[4,252]],s=[[22,22],[234,22],[234,234],[22,234]];return e.strokeStyle="#dba46a",e.lineWidth=34,e.strokeRect(17,17,222,222),Le(e,r,t,{w:4,closed:!0}),Le(e,s,t,{w:3,closed:!0}),n}function B0(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,l=new sn;let c=0;for(let h=0;h<n.length;++h){const f=n[h];let d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(f.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(f.morphAttributes[p])}if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0;const f=[];for(let d=0;d<n.length;++d){const p=n[d].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+h);h+=n[d].attributes.position.count}l.setIndex(f)}for(const h in s){const f=Fl(s[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in a){const f=a[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<f;++d){const p=[];for(let v=0;v<a[h].length;++v)p.push(a[h][v][d]);const g=Fl(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Fl(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){const h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const a=new e(s),o=new mn(a,t,i);let l=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute){const f=l/t;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<t;g++){const v=h.getComponent(d,g);o.setComponent(d+f,g,v)}}else a.set(h.array,l);l+=h.count*t}return r!==void 0&&(o.gpuType=r),o}function z0(n,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},i=n.getIndex(),r=n.getAttribute("position"),s=i?i.count:r.count;let a=0;const o=Object.keys(n.attributes),l={},c={},h=[],f=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let S=0,w=o.length;S<w;S++){const M=o[S],C=n.attributes[M];l[M]=new C.constructor(new C.array.constructor(C.count*C.itemSize),C.itemSize,C.normalized);const T=n.morphAttributes[M];T&&(c[M]||(c[M]=[]),T.forEach((A,R)=>{const b=new A.array.constructor(A.count*A.itemSize);c[M][R]=new A.constructor(b,A.itemSize,A.normalized)}))}const p=e*.5,g=Math.log10(1/e),v=Math.pow(10,g),m=p*v;for(let S=0;S<s;S++){const w=i?i.getX(S):S;let M="";for(let C=0,T=o.length;C<T;C++){const A=o[C],R=n.getAttribute(A),b=R.itemSize;for(let y=0;y<b;y++)M+=`${~~(R[f[y]](w)*v+m)},`}if(M in t)h.push(t[M]);else{for(let C=0,T=o.length;C<T;C++){const A=o[C],R=n.getAttribute(A),b=n.morphAttributes[A],y=R.itemSize,P=l[A],z=c[A];for(let k=0;k<y;k++){const $=f[k],ee=d[k];if(P[ee](a,R[$](w)),b)for(let H=0,ie=b.length;H<ie;H++)z[H][ee](a,b[H][$](w))}}t[M]=a,h.push(a),a++}}const u=n.clone();for(const S in n.attributes){const w=l[S];if(u.setAttribute(S,new w.constructor(w.array.slice(0,a*w.itemSize),w.itemSize,w.normalized)),S in c)for(let M=0;M<c[S].length;M++){const C=c[S][M];u.morphAttributes[S][M]=new C.constructor(C.array.slice(0,a*C.itemSize),C.itemSize,C.normalized)}}return u.setIndex(h),u}const H0=(()=>{const n=new S0(new Uint8Array([120,255]),2,1,no);return n.minFilter=n.magFilter=Ft,n.needsUpdate=!0,n})(),ra=new Map;function Qt(n,e={}){const t=n+JSON.stringify(e,(i,r)=>r&&r.isTexture?r.uuid:r);return ra.has(t)||ra.set(t,new E0({color:n,gradientMap:H0,...e})),ra.get(t)}function Gt(n,e=!1){const t=new b0(n);return t.colorSpace=Wt,t.anisotropy=8,e&&(t.wrapS=t.wrapT=_s),t}const Dc=new U(0,1,0),G0=new mt,mo=new ci,go=new U,Cr=new U;function wn(n,e,t=mo.identity(),i=go.set(1,1,1)){return n.clone().applyMatrix4(G0.compose(e,t,i))}function V0(n){return n.attributes.uv||n.setAttribute("uv",new Et(new Float32Array(n.attributes.position.count*2),2)),n}function Xn(n,e){return new ot(B0(n.map(V0)),e)}const $0=new Ur(1,12,8);function kl(n,e,t,i){const r=3+Math.floor(t()*3);for(let s=0;s<r;s++){const a=s/r*Math.PI*2+t(),o=s===0?0:e*.55,l=e*(s===0?1:.62+t()*.2);i.push(wn($0,Cr.set(n.x+Math.cos(a)*o,n.y+(s===0?e*.12:0),n.z+Math.sin(a)*o),mo.identity(),go.set(l,l*.46,l)))}}function W0(n){const e=dt(n),t=4+e()*.9,i=(e()-.5)*.5,r=new Bn,s=new oi(.06,.2,t,8,12);s.translate(0,t/2,0);const a=s.attributes.position;for(let h=0;h<a.count;h++){const f=a.getY(h)/t,d=f<.1?1+(.1-f)*7:1;a.setXYZ(h,a.getX(h)*d+i*f*f,a.getY(h),a.getZ(h)*d)}s.computeVertexNormals();const o=[s],l=[],c=6+Math.floor(e()*3);for(let h=0;h<c;h++){const f=.3+h/(c-1)*.62,d=h*2.4+e()*.6,p=.35+(1-f)*.95,g=new U(i*f*f,f*t,0),v=new U(Math.cos(d)*.8,.6,Math.sin(d)*.8).normalize(),m=new oi(.025,.05,p,5);o.push(wn(m,g.clone().addScaledVector(v,p/2),new ci().setFromUnitVectors(Dc,v))),kl(g.clone().addScaledVector(v,p),.28+(1-f)*.2,e,l)}return kl(new U(i,t+.05,0),.26,e,l),r.add(Xn(o,Qt(rn.trunk)),Xn(l,Qt(rn.leaf))),r}function X0(n){const e=dt(n),t=new Bn,i=4+Math.floor(e()*2),r=new oi(.1,.16,1.2,7);r.translate(0,.6,0);const s=[];for(let a=0;a<i;a++){const o=a/(i-1),l=1.05-.62*o,c=1.25-.3*o,h=.9+o*2.3,f=new Dr(l,c,10,1,!0),d=f.attributes.position;for(let p=0;p<d.count;p++){if(d.getY(p)>-c/2+.01)continue;const g=Math.atan2(d.getZ(p),d.getX(p)),v=Math.round(g/(Math.PI*2/10))%2===0,m=v?1.08:.8;d.setXYZ(p,d.getX(p)*m,d.getY(p)+(v?-.14:.06),d.getZ(p)*m)}f.computeVertexNormals(),s.push(wn(f,Cr.set(0,h+c/2,0),mo.setFromAxisAngle(Dc,e()*6)))}return t.add(new ot(r,Qt(rn.trunk)),Xn(s,Qt(rn.fir,{side:Xt}))),t}function q0(n,e){const t=dt(n);let i=new Ur(.6,14,10);i.deleteAttribute("uv"),i.deleteAttribute("normal"),i=z0(i);const r=i.attributes.position;for(let a=0;a<r.count;a++){let o=r.getY(a);o<0&&(o*=.35);const l=1+(t()-.5)*.14;r.setXYZ(a,r.getX(a)*1.15*l,(o+.2)*1.3*l,r.getZ(a)*l)}i.computeVertexNormals();const s=new ot(i,Qt("#d8c6a2"));return s.scale.setScalar(e),s.rotation.y=t()*6.28,s}function Y0(n){const e=dt(n),t=[],i=4+Math.floor(e()*2),r=new Dr(.11,.75,5);r.translate(0,.37,0);for(let s=0;s<i;s++){const a=s/i*Math.PI*2+e(),o=.25+e()*.35,l=new ci().setFromEuler(new bn(Math.sin(a)*o,0,-Math.cos(a)*o));t.push(wn(r,Cr.set(Math.cos(a)*.08,0,Math.sin(a)*.08),l,go.set(1,.7+e()*.6,1)))}return Xn(t,Qt(rn.leafLight))}let Ol;function j0(n=1){Ol||=Gt(O0());const e=new ot(new hi(.9*n,.9*n,.9*n),Qt("#ffffff",{map:Ol}));return e.position.y=.45*n,e}function Z0(n,e,t,i){const r=new Bn,s=Math.hypot(t-n,i-e),a=Math.max(2,Math.round(s/.9)+1),o=new oi(.06,.075,.85,6);o.translate(0,.42,0);const l=[];for(let f=0;f<a;f++)l.push(wn(o,Cr.set(s*(f/(a-1))-s/2,0,0)));const c=new hi(s,.08,.05),h=[.35,.65].map(f=>wn(c,Cr.set(0,f,.07)));return r.add(Xn(l.concat(h),Qt("#b77c45"))),r.position.set((n+t)/2,0,(e+i)/2),r.rotation.y=-Math.atan2(i-e,t-n),r}const K0=new gn({side:Xt,vertexShader:`
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
    }`}),J0=new gn({side:Xt,uniforms:{map:{value:null}},vertexShader:`
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
    }`}),Vi=new gn({uniforms:{tColor:{value:null},tND:{value:null},texel:{value:new $e},seed:{value:0},lineW:{value:1.3},ink:{value:new Ye(Wn)}},depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
    }`});function Q0(n){const e=new $n(1,1,{samples:4,type:Ti}),t=new $n(1,1,{type:Ti,minFilter:Ft,magFilter:Ft}),i=new ot(new qt(2,2),Vi),r=new Pc;r.add(i);const s=new bs(-1,1,1,-1,0,1),a=new $e,o=[];function l(){n.getDrawingBufferSize(a),e.setSize(a.x,a.y),t.setSize(a.x,a.y),Vi.uniforms.texel.value.set(1/a.x,1/a.y),Vi.uniforms.lineW.value=1.25*n.getPixelRatio()}function c(h,f,d){n.getDrawingBufferSize(a),(a.x!==e.width||a.y!==e.height)&&l(),n.setRenderTarget(e),n.render(h,f);const p=h.background;h.background=null,h.traverse(v=>{if(!(!v.isMesh||!v.visible)){if(v.userData.noInk){v.visible=!1,o.push([v,null]);return}o.push([v,v.material]),v.userData.sprite?(v.material=J0,v.onBeforeRender=tg):v.material=K0}});const g=n.getClearAlpha();n.getClearColor(Bl),n.setClearColor(0,0),n.setRenderTarget(t),n.render(h,f),n.setClearColor(Bl,g);for(const[v,m]of o)m?(v.material=m,v.onBeforeRender=eg):v.visible=!0;o.length=0,h.background=p,Vi.uniforms.tColor.value=e.texture,Vi.uniforms.tND.value=t.texture,Vi.uniforms.seed.value=d,n.setRenderTarget(null),n.render(r,s)}return{render:c,setSize:l}}const Bl=new Ye,eg=()=>{};function tg(n,e,t,i,r){r.uniforms.map.value=this.userData.colorMap(),r.uniformsNeedUpdate=!0}const Uc="#4a2c1a";function zl(n,e,t,i){const r=t*.2,s=e+t*.05,a=t*.1,o=[n-r+a,n+r*1.9+a].map(p=>`
    <ellipse cx="${p+1}" cy="${s+.5}" rx="${t*.08}" ry="${t*.11}" fill="${Uc}" stroke="none"/>`).join(""),l=`<ellipse cx="${n-r-t*.1+a}" cy="${e+t*.38}" rx="${t*.13}" ry="${t*.08}" fill="#ff8fa3" opacity=".6" stroke="none"/>
    <ellipse cx="${n+r*2.2+a+t*.1}" cy="${e+t*.38}" rx="${t*.13}" ry="${t*.08}" fill="#ff8fa3" opacity=".6" stroke="none"/>`,c=n+a+t*.18,h=e+t*.45,f=t*.2,d={happy:`<path d="M${c-f} ${h} Q${c} ${h+t*.2} ${c+f} ${h}" stroke-width="3.5"/>`,sad:`<path d="M${c-f} ${h+t*.1} Q${c} ${h-t*.06} ${c+f} ${h+t*.1}" stroke-width="3.5"/>
          <path d="M${n-r+a-t*.16} ${s-t*.3} L${n-r+a+t*.1} ${s-t*.36}" stroke-width="3"/>
          <path d="M${n+r*1.9+a+t*.16} ${s-t*.3} L${n+r*1.9+a-t*.1} ${s-t*.36}" stroke-width="3"/>`,worried:`<path d="M${c-f} ${h+4} Q${c-f/2} ${h} ${c} ${h+4} Q${c+f/2} ${h+8} ${c+f} ${h+3}" stroke-width="3.2"/>`}[i]||"";return o+l+d}function as(n,e,t,i,r){const s=`M${t} ${i} l${(t-n)*.25} -8 M${t} ${i} l${(t-n)*.3} 2 M${t} ${i} l${(t-n)*.12} 9`;return`<path d="M${n} ${e} L${t} ${i}" stroke-width="15"/><path d="M${n} ${e} L${t} ${i}" stroke="${r}" stroke-width="7"/>
    <path d="${s}" stroke-width="3.5"/>`}function Jt(n,{mood:e="happy",pose:t="A"}={}){const{kind:i,skin:r,top:s,cover:a,hair:o="#3a2416",prop:l}=n,c=i==="woman"||i==="man",h=i==="toddler",f=i==="girl"||i==="woman",d=100,p=c?36:h?46:43,g=c?52:h?104:80,v=g+p-4,m=226,u=f?218:c?176:h?196:182,S=c?30:h?26:28,w=f?c?50:44:c?36:h?32:34,M=i==="man"?"#6b6f8f":i==="boy"?"#5f7fb8":"#6f8fc8",C=t==="B";let T="";if(f){const R=C?-10:0,b=C?10:0;T+=`<ellipse cx="${d-18+R}" cy="${m}" rx="15" ry="7.5" fill="#f7efe0"/><ellipse cx="${d+22+b}" cy="${m}" rx="15" ry="7.5" fill="#f7efe0"/>`}else{const R=C?[[d-12,d-26],[d+12,d+26]]:[[d-13,d-14],[d+13,d+14]];for(const[b,y]of R)T+=`<path d="M${b} ${u-4} L${y} ${m-6}" stroke-width="19"/><path d="M${b} ${u-4} L${y} ${m-6}" stroke="${M}" stroke-width="11"/>`;for(const[,b]of R)T+=`<ellipse cx="${b+4}" cy="${m}" rx="14" ry="7" fill="#f7efe0"/>`}T+=`<path d="M${d-S} ${v+6} Q${d-S} ${v} ${d-S+8} ${v} L${d+S-8} ${v}
        Q${d+S} ${v} ${d+S} ${v+6} L${d+w} ${u-6} Q${d+w} ${u} ${d+w-8} ${u}
        L${d-w+8} ${u} Q${d-w} ${u} ${d-w} ${u-6} Z" fill="${s}"/>`,f?T+=`<path d="M${d-w+14} ${u-14} Q${d} ${u-8} ${d+w-14} ${u-14}" stroke-width="2.6" opacity=".6"/>`:T+=`<path d="M${d-8} ${v+2} L${d} ${v+14} L${d+8} ${v+2}" stroke-width="3"/>`;const A=v+14;if(l==="magnifier"){T+=as(d-S+4,A,d-S-20,A+36,s),T+=as(d+S-4,A,d+S+22,A+14,s);const R=d+S+26,b=A+8;T+=`<path d="M${R} ${b} L${R+14} ${b-22}" stroke-width="9"/><path d="M${R} ${b} L${R+14} ${b-22}" stroke="#c98a4d" stroke-width="4"/>
          <circle cx="${R+24}" cy="${b-40}" r="19" fill="#d9f1f8" stroke-width="6"/><circle cx="${R+24}" cy="${b-40}" r="19" fill="none" stroke="#f5cf5f" stroke-width="2.5"/>
          <path d="M${R+14} ${b-48} Q${R+18} ${b-54} ${R+26} ${b-54}" stroke="#fff" stroke-width="3.5"/>`}else T+=as(d-S+4,A,d-S-18,A+40,s),T+=as(d+S-4,A,d+S+18,A+40,s);if(f){const R=p+11;T+=`<path d="M${d-R} ${g+4} A${R} ${R} 0 0 1 ${d+R} ${g+4} L${d+R+6} ${g+p+22} Q${d} ${g+p+38} ${d-R-6} ${g+p+22} Z" fill="${a}"/>`,T+=`<ellipse cx="${d+5}" cy="${g+6}" rx="${p*.76}" ry="${p*.82}" fill="${r}"/>`,T+=`<path d="M${d-p*.55} ${g-p*.45} Q${d+5} ${g-p*.95} ${d+p*.7} ${g-p*.4}" stroke-width="2.4" opacity=".55"/>`,T+=zl(d+3,g+4,p*.86,e)}else T+=`<ellipse cx="${d-p*.92}" cy="${g+6}" rx="${p*.16}" ry="${p*.22}" fill="${r}"/>`,T+=`<circle cx="${d}" cy="${g}" r="${p}" fill="${r}"/>`,i==="man"&&(T+=`<path d="M${d-p*.8} ${g+p*.2} Q${d-p*.7} ${g+p*1.15} ${d+8} ${g+p*1.08} Q${d+p*.95} ${g+p*.95} ${d+p*.9} ${g+p*.25} Q${d+p*.4} ${g+p*.72} ${d+4} ${g+p*.72} Q${d-p*.4} ${g+p*.72} ${d-p*.8} ${g+p*.2} Z" fill="${o}"/>`),T+=`<path d="M${d-p*.98} ${g-p*.05} Q${d-p} ${g-p*1.08} ${d+p*.1} ${g-p*1.02} Q${d+p*.95} ${g-p*.95} ${d+p*.98} ${g-p*.2} Q${d+p*.4} ${g-p*.62} ${d-p*.3} ${g-p*.5} Q${d-p*.7} ${g-p*.4} ${d-p*.98} ${g-p*.05} Z" fill="${o}"/>`,a&&(T+=`<path d="M${d-p*.84} ${g-p*.5} Q${d-p*.8} ${g-p*1.22} ${d} ${g-p*1.22} Q${d+p*.8} ${g-p*1.22} ${d+p*.84} ${g-p*.5} Z" fill="${a}"/>
      <path d="M${d-p*.82} ${g-p*.66} Q${d} ${g-p*.78} ${d+p*.82} ${g-p*.66}" stroke-width="2.6"/>
      <path d="M${d-p*.3} ${g-p*1.02} l6 6 l6 -6 l6 6" stroke-width="2.4"/>`),T+=zl(d,g,p,e);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="200" height="240">
  <defs><filter id="boil" x="-5%" y="-5%" width="110%" height="110%">
    <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="1"/>
    <feDisplacementMap in="SourceGraphic" scale="3.5" xChannelSelector="R" yChannelSelector="G"/></filter></defs>
  <g filter="url(#boil)" fill="none" stroke="${Uc}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">${T}</g></svg>`}const li=n=>"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n),_t=44;function Hl(n,e,{kind:t="planks",rug:i}={}){const[r,s]=Pt(n*_t,e*_t),a=dt(t==="planks"?5:9),o=dt(6);if(t==="planks"){s.fillStyle="#e8c08c",s.fillRect(0,0,r.width,r.height);const l=.6*_t;for(let c=0,h=0;c<r.height;c+=l,h++){for(let f=-(h%3)*60;f<r.width;f+=150+a()*90)Tt(s,[[f+3,c+3],[f+150,c+3],[f+150,c+l-3],[f+3,c+l-3]],a()<.4?"#efc995":"#e4b983"),Le(s,[[f,c+2],[f,c+l-2]],o,{w:2,color:"#b98a55",amp:.3});Le(s,[[0,c],[r.width,c]],o,{w:2.2,color:"#b98a55",amp:.8});for(let f=0;f<5;f++){const d=a()*r.width,p=c+l*(.3+a()*.4);Le(s,[[d,p],[d+18+a()*20,p+(a()-.5)*3]],o,{w:1.4,color:"#caa06b",amp:0})}}}else{s.fillStyle="#f1e2c6",s.fillRect(0,0,r.width,r.height);const l=1*_t;for(let c=0;c<r.height;c+=l)for(let h=0;h<r.width;h+=l)Tt(s,[[h+3,c+3],[h+l-3,c+3],[h+l-3,c+l-3],[h+3,c+l-3]],a()<.5?"#f4e7cf":"#ecdab9");for(let c=0;c<=r.height;c+=l)Le(s,[[0,c],[r.width,c]],o,{w:2,color:"#c9ad85",amp:.6});for(let c=0;c<=r.width;c+=l)Le(s,[[c,0],[c,r.height]],o,{w:2,color:"#c9ad85",amp:.6})}if(i){const[l,c,h,f,d,p]=i,g=(M,C)=>[(M+n/2)*_t,(C+e/2)*_t],[v,m]=g(l,c),u=[[v-h*_t,m-f*_t],[v+h*_t,m-f*_t],[v+h*_t,m+f*_t],[v-h*_t,m+f*_t]];Tt(s,u,d),Le(s,u,o,{w:3,closed:!0});const S=u.map(([M,C])=>[v+(M-v)*.8,m+(C-m)*.74]);s.setLineDash([10,8]),Le(s,S,o,{w:2.6,closed:!0,color:p,amp:.4}),s.setLineDash([]);const w=[];for(let M=0;M<16;M++){const C=M/16*Math.PI*2,T=(M%2?.36:.62)*Math.min(h,f)*_t*.8;w.push([v+Math.cos(C)*T,m+Math.sin(C)*T])}Tt(s,w,p),Le(s,w,o,{w:2,closed:!0,amp:.3});for(let M=0;M<26;M++){const C=u[0][0]+M/25*(u[1][0]-u[0][0]);Le(s,[[C,u[0][1]],[C,u[0][1]-8]],o,{w:1.8,amp:0}),Le(s,[[C,u[2][1]],[C,u[2][1]+8]],o,{w:1.8,amp:0})}}return r}function ng(n,e){const[t,i]=Pt(n*_t,e*_t),r=dt(21),s=dt(22),a=(h,f)=>[(h+n/2)*_t,(f+e/2)*_t];i.fillStyle=rn.grass,i.fillRect(0,0,t.width,t.height);for(let h=0;h<30;h++)Tt(i,En(r()*t.width,r()*t.height,(1+r()*2)*_t,(.5+r())*_t,r,{lump:.2}),r()<.5?rn.grassLight:rn.grassDark);const o=D0([[-7,4],[-3,2.8],[0,3.2],[3,2.4],[7,3]].map(h=>a(...h)),14),[l,c]=U0(o,.9*_t,r,.08);Tt(i,l.concat(c.slice().reverse()),rn.sand),Le(i,l,s,{w:3,color:rn.grassEdge}),Le(i,c,s,{w:3,color:rn.grassEdge});for(let h=0;h<4;h++){const[f,d]=a(-1+h*.8,-.6),p=.7*_t;Le(i,[[f,d],[f+p,d],[f+p,d+p],[f,d+p]],s,{w:2.6,closed:!0,color:"#fffaf0",amp:.6})}for(let h=0;h<700;h++){const f=r()*t.width,d=r()*t.height;d>a(0,1.9)[1]&&d<a(0,4.2)[1]||Le(i,[[f,d],[f+3,d-6]],s,{w:2,color:rn.grassTick,amp:0})}for(let h=0;h<14;h++){const f=r()*t.width,d=r()*t.height*.4;for(let p=0;p<5;p++){const g=p/5*6.28,v=En(f+Math.cos(g)*5,d+Math.sin(g)*4,4,3.4,s,{n:10});Tt(i,v,"#fffdf6"),Le(i,v,s,{w:1.2,color:"#9a7a58",closed:!0,amp:.2})}i.fillStyle="#f5c84c",i.beginPath(),i.arc(f,d,2.5,0,7),i.fill()}return t}function Gl(n,e,{plaster:t="#f4ead3",wains:i="#a8d0c4",band:r="#e8584e"}={}){const[s,a]=Pt(n*48,e*48),o=dt(31),l=dt(32),c=s.width,h=s.height;a.fillStyle=t,a.fillRect(0,0,c,h);for(let d=0;d<16;d++)Tt(a,En(o()*c,o()*h*.6,40+o()*60,20+o()*30,o,{lump:.2}),"rgba(255,255,255,.35)");const f=h-.9*48;a.fillStyle=i,a.fillRect(0,f,c,h-f);for(let d=30;d<c;d+=58)Le(a,[[d,f+8],[d,h-6]],l,{w:2,color:"rgba(60,90,80,.45)",amp:.4});Le(a,[[0,f],[c,f]],l,{w:3.4}),a.fillStyle=r,a.fillRect(0,10,c,16),Le(a,[[0,10],[c,10]],l,{w:2.2}),Le(a,[[0,26],[c,26]],l,{w:2.2});for(let d=20;d<c;d+=40)a.fillStyle="#f5cf5f",a.beginPath(),a.arc(d,18,4,0,7),a.fill();return s}function ig(n,e){const[t,i]=Pt(n*48,e*48),r=dt(41),s=dt(42);i.fillStyle="#e7b79a",i.fillRect(0,0,t.width,t.height);const a=22;for(let o=0,l=0;l<t.height;o++,l+=a)for(let c=o%2?-24:0;c<t.width;c+=50){const h=[[c+3,l+3],[c+47,l+3],[c+47,l+a-2],[c+3,l+a-2]];Tt(i,h,r()<.3?"#efc4a8":"#e2ad8e"),Le(i,h,s,{w:1.6,closed:!0,color:"#a86e52",amp:.4})}return t}function rg(n){const[e,t]=Pt(512,256),i=dt(51);t.fillStyle="#4f7a64",t.fillRect(0,0,512,256);for(let r=0;r<8;r++)Tt(t,En(i()*512,i()*256,60,30,i,{lump:.2}),"rgba(255,255,255,.05)");return t.fillStyle="#f5f1e3",t.font='600 34px Fredoka, "Comic Sans MS", sans-serif',t.textAlign="center",n.forEach((r,s)=>t.fillText(r,256,70+s*52)),Le(t,[[4,4],[508,4],[508,252],[4,252]],i,{w:10,closed:!0,color:"#c98a4d"}),e}function Vl(n=!1){const[e,t]=Pt(200,240),i=dt(61),r=t.createLinearGradient(0,0,0,240);return r.addColorStop(0,n?"#3d4a8a":"#9fc9ef"),r.addColorStop(1,n?"#7a6fb0":"#d8ecf7"),t.fillStyle=r,t.fillRect(0,0,200,240),Tt(t,En(70,90,40,14,i),"#fffaf0"),Tt(t,En(140,150,30,10,i),"#fffaf0"),Le(t,[[100,0],[100,240]],i,{w:12,color:"#fffaf0",amp:0}),Le(t,[[0,120],[200,120]],i,{w:12,color:"#fffaf0",amp:0}),Le(t,[[4,4],[196,4],[196,236],[4,236]],i,{w:12,closed:!0,color:"#fffaf0",amp:0}),Le(t,[[10,10],[190,10],[190,230],[10,230]],i,{w:3,closed:!0,amp:.5}),e}function sa(){const[n,e]=Pt(160,300),t=dt(71);e.fillStyle="#c98f55",e.fillRect(0,0,160,300);for(const[i,r]of[[24,130],[160,280]])Le(e,[[22,i],[138,i],[138,r],[22,r]],t,{w:3,closed:!0,color:"#8a5a30"});return e.fillStyle="#f5cf5f",e.beginPath(),e.arc(130,150,8,0,7),e.fill(),Le(e,[[3,3],[157,3],[157,297],[3,297]],t,{w:4,closed:!0}),n}function aa(n){const[e,t]=Pt(200,260),i=dt(81+n.length);if(t.fillStyle="#fffaf0",t.fillRect(0,0,200,260),t.fillStyle=Wn,t.textAlign="center",n==="abc"){const r=["#e8584e","#6fcfb7","#f5cf5f","#8a6cc8"];"ABCD".split("").forEach((s,a)=>{t.fillStyle=r[a],t.font="700 64px Fredoka, sans-serif",t.fillText(s,55+a%2*90,100+Math.floor(a/2)*110)})}else if(n==="times")t.font="700 30px Fredoka, sans-serif",t.fillText("TIMES",100,46),t.font="600 26px Fredoka, sans-serif",["8 × 6 = 48","8 × 7 = 56","8 × 8 = 64","8 × 9 = 72"].forEach((r,s)=>t.fillText(r,100,96+s*42));else if(n==="kind"){t.font="700 32px Fredoka, sans-serif",t.fillStyle="#e8584e",t.fillText("BE",100,80),t.fillText("KIND",100,124);const r=[];for(let s=0;s<40;s++){const a=s/40*Math.PI*2;r.push([100+16*Math.sin(a)**3*3,190-(13*Math.cos(a)-5*Math.cos(2*a)-2*Math.cos(3*a)-Math.cos(4*a))*3])}Tt(t,r,"#f0b3d6"),Le(t,r,i,{w:3,closed:!0})}else n==="frame"&&(t.fillStyle="#cfe6c4",t.fillRect(0,0,200,260),Tt(t,[[20,220],[70,110],[110,180],[140,130],[185,220]],"#83c47b"),t.fillStyle="#f5cf5f",t.beginPath(),t.arc(150,60,24,0,7),t.fill());return Le(t,[[4,4],[196,4],[196,256],[4,256]],i,{w:n==="frame"?14:5,closed:!0,color:n==="frame"?"#c98a4d":Wn}),e}function sg(){const[n,e]=Pt(120,400),t=dt(91);e.fillStyle="#fff3c9",e.fillRect(0,0,120,400);const i=r=>390-r/170*380;for(let r=0;r<=170;r+=10)Le(e,[[0,i(r)],[r%50?22:40,i(r)]],t,{w:2,amp:0});e.fillStyle=Wn,e.font="600 20px Fredoka, sans-serif";for(const r of[50,100,150])e.fillText(String(r),46,i(r)+7);return Le(e,[[10,i(95)],[110,i(95)]],t,{w:5,color:"#e8584e",amp:.4}),e.fillStyle="#e8584e",e.font="700 22px Fredoka, sans-serif",e.fillText("Adam",58,i(95)-10),Le(e,[[4,4],[116,4],[116,396],[4,396]],t,{w:4,closed:!0}),n}function ag(){const[n,e]=Pt(256,128),t=dt(101);for(let i=0;i<6;i++){const r=24+i*40,s=i%2?44:84,a=En(r,s,15,9,t,{n:18,lump:.08});Tt(e,a,"rgba(120,80,45,.75)");for(let o=0;o<4;o++)e.fillStyle="rgba(80,50,25,.9)",e.beginPath(),e.arc(r-8+o*5.5,s+(o%2?-3:3),2.2,0,7),e.fill()}return n}function og(){const[n,e]=Pt(256,180);return e.fillStyle="#2f3a78",e.fillRect(0,0,256,180),e.fillStyle="#fffaf0",e.fillRect(14,14,228,40),e.fillStyle=Wn,e.font="600 17px Fredoka, sans-serif",e.fillText("Mama: Imran, dinner is ready!",22,40),e.fillStyle="#f5cf5f",e.beginPath(),e.arc(128,116,38,0,7),e.fill(),e.fillStyle=Wn,e.font="700 30px Fredoka, sans-serif",e.textAlign="center",e.fillText("😆",128,128),n}function lg(){const[n,e]=Pt(200,150),t=dt(121);e.fillStyle="#fffaf0",e.fillRect(0,0,200,150),Le(e,En(60,70,34,34,t,{n:24}),t,{w:3,closed:!0}),Le(e,[[46,62],[52,62]],t,{w:3,amp:0}),Le(e,[[70,62],[76,62]],t,{w:3,amp:0}),Le(e,En(62,86,10,7,t,{n:12}),t,{w:3,closed:!0});for(const[i,r]of[[98,60],[104,76],[96,90]])Le(e,[[i,r],[i+14,r-2]],t,{w:2.5,color:"#3d86a6",amp:0});return e.fillStyle="#e8584e",e.font="700 22px Fredoka, sans-serif",e.textAlign="center",e.fillText("SNEEZY",150,60),e.fillText("NADIA",150,88),Le(e,[[3,3],[197,3],[197,147],[3,147]],t,{w:3,closed:!0}),n}function cg(n=0){const[e,t]=Pt(160,200),i=dt(131+n);return t.fillStyle="#fffaf0",t.fillRect(0,0,160,200),t.fillStyle=Wn,t.font="600 19px Fredoka, sans-serif",["6 × 8 = 48","7 × 8 = 54","9 × 8 = 72"].forEach((r,s)=>t.fillText(r,18,42+s*40)),Le(t,[[14,150],[120,150]],i,{w:3,color:"#e8584e",amp:.5}),t.fillText("4 × 8 = 30",18,158),Le(t,[[3,3],[157,3],[157,197],[3,197]],i,{w:3,closed:!0}),e}function hg(){const[n,e]=Pt(256,160),t=dt(141);return e.fillStyle="#fffaf0",e.fillRect(0,0,256,160),Le(e,[[128,6],[128,154]],t,{w:3,amp:.3}),e.fillStyle=Wn,e.font="600 15px Fredoka, sans-serif",["Play new","game till","late!! 🎮"].forEach((i,r)=>e.fillText(i,14,42+r*26)),["Maths hw:","do it","TOMORROW","morning"].forEach((i,r)=>e.fillText(i,140,36+r*26)),Le(e,[[3,3],[253,3],[253,157],[3,157]],t,{w:3.4,closed:!0}),n}const ja=od.degToRad(56),_r=1/Math.cos(ja),vi=.42,dg=7,_o=3,ug=3.8,yt={W:13,D:9},vn=yt.W/2,wt=yt.D/2,Un=3;async function fg(n,e,t){const i=new Image;i.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n),await i.decode();const r=document.createElement("canvas");return r.width=e,r.height=t,r.getContext("2d").drawImage(i,0,0,e,t),r}const oa=new Map;function os(n){if(oa.has(n))return oa.get(n);const e=Promise.all(Array.from({length:_o},(t,i)=>fg(n.replace(/seed="\d+"/,`seed="${i*17+3}"`),300,360).then(r=>Gt(r))));return oa.set(n,e),e}const pg=n=>Array.from({length:_o},(e,t)=>Gt(n(t))),Te={box:(n,e,t)=>new hi(n,e,t),cyl:(n,e,t,i=12)=>new oi(n,e,t,i),sph:(n,e=14,t=10)=>new Ur(n,e,t),cone:(n,e,t=8)=>new Dr(n,e,t)};function Ce(n,e,[t,i,r]=[0,0,0],{r:s,s:a}={}){const o=new ot(n,typeof e=="string"?Qt(e):e);return o.position.set(t,i,r),s&&o.rotation.set(...s),a&&o.scale.set(...a),o}function pt(...n){const e=new Bn;return n.forEach(t=>e.add(t)),e}const mg=(n,e={})=>new zt({map:Gt(n),...e});function Er(n="#f3c99b"){const e=[];for(const t of[-1,1])for(const i of[-1,1])e.push(wn(Te.cyl(.04,.04,.72,6),new U(t*.48,.36,i*.28)));return pt(Ce(Te.box(1.1,.08,.7),n,[0,.74,0]),Xn(e,Qt("#b3aec6")))}function $l(n="#6fcfb7"){const e=[];for(const t of[-1,1])for(const i of[-1,1])e.push(wn(Te.cyl(.03,.03,.42,6),new U(t*.19,.21,i*.19)));return pt(Ce(Te.box(.46,.06,.46),n,[0,.44,0]),Ce(Te.box(.46,.42,.06),n,[0,.68,-.21]),Xn(e,Qt("#b3aec6")))}function Wl(n=1.6,e=1.5){const t=pt(Ce(Te.box(n,e,.4),"#c98f55",[0,e/2,0])),i=["#e8584e","#6f9fd8","#f5cf5f","#83c47b","#b9a7ea","#f5a25a"];for(let r=0;r<3;r++){const s=.14+r*(e/3);t.add(Ce(Te.box(n-.1,.05,.36),"#dba46a",[0,s-.04,.03]));for(let a=0,o=-n/2+.12;o<n/2-.15;a++){const l=.09+(a*7+r)%3*.03,c=.26+(a*5+r)%4*.03;t.add(Ce(Te.box(l,c,.26),i[(a+r*2)%i.length],[o+l/2,s+c/2,.06])),o+=l+.02}}return t}function la(n=1){const e=[];for(let i=0;i<5;i++){const r=i*1.26;e.push(wn(Te.sph(.22),new U(Math.cos(r)*.14,.62+i%2*.1,Math.sin(r)*.14),void 0,new U(1,.6,1)))}const t=pt(Ce(Te.cyl(.2,.15,.4,10),"#e2a574",[0,.2,0]),Xn(e,Qt("#83c47b")));return t.scale.setScalar(n),t}function Xl(n="#e8847a",e=2.2){return pt(Ce(Te.box(e,.42,.9),n,[0,.21,0]),Ce(Te.box(e,.6,.25),n,[0,.7,-.33]),Ce(Te.box(.24,.62,.9),n,[-e/2+.12,.31,0]),Ce(Te.box(.24,.62,.9),n,[e/2-.12,.31,0]),Ce(Te.box(e*.42,.14,.62),"#f3b0a6",[-e*.22,.49,.08]),Ce(Te.box(e*.42,.14,.62),"#f3b0a6",[e*.22,.49,.08]))}function gg(){const n=[-.8,.8].map(e=>wn(Te.box(.1,.44,.44),new U(e,.22,0)));return pt(Ce(Te.box(2,.08,.5),"#dba46a",[0,.47,0]),Ce(Te.box(2,.34,.07),"#c98a4d",[0,.78,-.24]),Xn(n,Qt("#b3aec6")))}function _g(){const n=pt();for(const t of[-.35,.35])n.add(Ce(Te.cyl(.05,.05,1.6,6),"#e8584e",[t,.8,-.6]));n.add(Ce(Te.box(.8,.08,.5),"#f5cf5f",[0,1.5,-.6]));const e=Ce(Te.box(.7,.07,2),"#6fcfb7",[0,.8,.3]);e.rotation.x=.8,n.add(e);for(let t=0;t<4;t++)n.add(Ce(Te.box(.7,.05,.08),"#b3aec6",[0,.35+t*.35,-.95]));return n}function vg(){const n=pt(Ce(Te.cyl(.42,.36,.2,14),"#c98a4d",[0,.1,0]),Ce(Te.cyl(.36,.36,.05,14),"#f0b3d6",[0,.2,0]));n.add(Ce(Te.sph(.24),"#f5a25a",[0,.3,0],{s:[1.2,.6,1]})),n.add(Ce(Te.sph(.14),"#f5a25a",[.2,.34,.08]));for(const t of[0,.14])n.add(Ce(Te.cone(.05,.1,5),"#f5a25a",[.24,.47,t]));const e=Ce(Te.cyl(.04,.04,.4,6),"#f5a25a",[-.18,.28,.2]);return e.rotation.set(Math.PI/2,0,.7),n.add(e),n}function ql(n,e,t,{ink:i=!1}={}){const r=new ot(new qt(e,t).rotateX(-Math.PI/2),new zt({map:Gt(n),transparent:!0,depthWrite:!1}));return r.position.y=.02,r.renderOrder=1,i||(r.userData.noInk=!0),r}function xg(n){switch(n.type){case"bag":return pt(Ce(Te.box(.5,.55,.26),n.color,[0,.28,0]),Ce(Te.box(.52,.22,.28),"#f5cf5f",[0,.48,.01]));case"bottle":return pt(Ce(Te.cyl(.11,.11,.42),n.color,[0,.21,0]),Ce(Te.cyl(.07,.07,.1),"#fffaf0",[0,.47,0]));case"envelope":return pt(Ce(Te.box(.5,.03,.32),"#78c4dc",[0,.02,0],{r:[0,.4,0]}));case"footprints":{const e=ql(ag(),2.8,1.4);return e.rotation.y=n.rot||0,pt(e)}case"tablet":{const e=new ot(new qt(.62,.44).rotateX(-Math.PI/2),new zt({map:Gt(og())}));e.position.y=.93;const t=j0(1);return pt(t,Ce(Te.box(.68,.04,.5),"#3d4057",[0,.91,0]),e)}case"doodle":{const e=new ot(new qt(.62,.46).rotateX(-Math.PI/2),new zt({map:Gt(lg())}));return e.position.y=.52,e.rotation.y=.15,pt(e)}case"ball":return pt(Ce(Te.sph(.22),"#fffaf0",[0,.22,0]),Ce(Te.sph(.08,6,4),"#5b3520",[.12,.34,.08]));case"softball":return pt(Ce(Te.sph(.17),"#f0b3d6",[0,.17,0]),Ce(new po(.17,.015,6,20),"#e8584e",[0,.17,0],{r:[.4,0,0]}));case"shards":{const e=pt();return[[0,0,.18],[.3,.12,.13],[-.28,.1,.12],[.1,-.22,.1],[-.1,.28,.09]].forEach(([t,i,r],s)=>e.add(Ce(new fo(r),s%2?"#78c4dc":"#b5e0ee",[t,r*.4,i],{r:[s,s*2,.3]}))),e.add(Ce(Te.sph(.07,8,6),"#f0b3d6",[.42,.06,-.05]),Ce(Te.sph(.07,8,6),"#f5cf5f",[-.4,.06,-.1])),e.add(ql(Mg(),1.4,.8)),e}case"blocks":{const e=pt(),t=["#e8584e","#6f9fd8","#f5cf5f","#83c47b","#b9a7ea","#f5a25a"];for(let i=0;i<6;i++)e.add(Ce(Te.box(.26,.24,.26),t[i],[Math.sin(i*1.7)*.04,.12+i*.245,Math.cos(i*1.3)*.03],{r:[0,i*.3,0]}));for(let i=0;i<3;i++)e.add(Ce(Te.box(.24,.22,.24),t[(i+3)%6],[.45+i*.1,.11,.2-i*.3],{r:[0,i,0]}));return e}case"chart":{const e=new ot(Te.box(.42,1.75,.04),mg(sg()));return e.position.set(0,.9,0),pt(e)}case"catbasket":return vg();case"sheets":{const e=pt(Er("#e2a574"));return[-.26,.26].forEach((t,i)=>{const r=new ot(new qt(.4,.5).rotateX(-Math.PI/2),new zt({map:Gt(cg(i))}));r.position.set(t,.79,0),r.rotation.y=i?-.12:.1,e.add(r)}),e}case"planner":{const e=new ot(new qt(.62,.4).rotateX(-Math.PI/2),new zt({map:Gt(hg())}));return e.position.y=.82,pt(Er(),Ce(Te.box(.66,.04,.44),"#8a6cc8",[0,.8,0]),e)}}return pt()}function Mg(){const n=document.createElement("canvas");n.width=256,n.height=150;const e=n.getContext("2d");return e.fillStyle="rgba(120,196,220,.45)",e.beginPath(),e.ellipse(128,75,110,55,0,0,7),e.fill(),n}async function yg(n){const e=new Pc,t=new bs(-1,1,1,-1,.1,300),i=Q0(n),r=Gt(k0());e.background=r;const s=1024/640;e.add(new w0(16777215,15985368,1.9));const a=new R0(16777215,1.3);a.position.set(-9,6,4),e.add(a);const o=new zt({map:Gt(N0()),transparent:!0,depthWrite:!1}),l=new qt(1,1).rotateX(-Math.PI/2),c=pg(ne=>F0(ne)),h=new zt({map:c[0],alphaTest:.5,side:Xt});let f=null,d=[],p=[],g={},v=[],m=[];const u={x:0,z:3.2,facing:1,walkT:0,moving:!1,target:null,resolve:null},S={aspect:1.6,zoom:1,zoomT:1,focus:null,pan:new $e,fit:null};function w(ne,G,J,Z,oe=Z*.5){const q=new ot(l,o);return q.position.set(G,.018,J),q.scale.set(Z,1,oe),q.renderOrder=1,q.userData.noInk=!0,ne.add(q),q}function M(ne,G,J,Z,oe){const q=new zt({map:ne[0],alphaTest:.5,alphaToCoverage:!0,side:Xt});d.push({mat:q,frames:ne});const x=new qt(G,J*_r);x.translate(0,J*_r/2,0);const _=new ot(x,q);return _.position.set(Z,0,oe),_.userData.sprite=!0,_.userData.colorMap=()=>q.map,f.add(_),p.push(_),_}const C=1.3,T=ne=>(ne==="woman"||ne==="man"?[1.3,1.56]:ne==="toddler"?[.92,1.1]:[1.2,1.44]).map(G=>G*C);function A(ne,G,J,Z){return new ot(Te.box(ne,G,J),new zt({map:Gt(Z)}))}function R(ne,G,J,Z,oe,q){const x=new ot(Te.box(J,Z,.1),new zt({map:Gt(G)}));return x.position.set(oe,q,-wt+.05),ne.add(x),x}function b(ne,G,J,Z,oe,q){const x=new ot(Te.box(J,Z,.1),new zt({map:Gt(G)}));return x.rotation.y=Math.PI/2,x.position.set(-vn+.05,q,oe),ne.add(x),x}function y(ne){const G=pt();G.add(Ce(Te.box(yt.W+.4,.7,yt.D+.4),ne==="yard"?"#c28c5a":"#dba46a",[0,-.35,0]));const J=ne==="yard"?ng(yt.W,yt.D):ne==="home"?Hl(yt.W,yt.D,{kind:"tiles",rug:[.8,1.5,3.2,1.9,"#b9a7ea","#f5cf5f"]}):Hl(yt.W,yt.D,{rug:[-4.6,-2.6,1.6,1.3,"#6fcfb7","#f5cf5f"]}),Z=Gt(J);Z.anisotropy=n.capabilities.getMaxAnisotropy();const oe=new ot(new qt(yt.W,yt.D).rotateX(-Math.PI/2),new zt({map:Z}));if(oe.position.y=.001,oe.name="floor",G.add(oe),ne==="yard"){const q=A(yt.W,1.2,.35,ig(yt.W,1.2));q.position.set(0,.6,-wt-.17),G.add(q),G.add(Ce(Te.box(yt.W+.1,.1,.45),"#e4e0f0",[0,1.25,-wt-.17])),G.add(Z0(-vn+.1,-wt+.3,-vn+.1,wt-.3))}else{const q=ne==="home"?{plaster:"#f6e7d8",wains:"#e8b8a8",band:"#6f9fd8"}:{},x=A(yt.W+.3,Un,.3,Gl(yt.W,Un,q));x.position.set(.15,Un/2,-wt-.15),G.add(x);const _=A(yt.D,Un,.3,Gl(yt.D,Un,q));_.rotation.y=Math.PI/2,_.position.set(-vn-.15,Un/2,0),G.add(_),G.add(Ce(Te.box(yt.W+.3,.14,.4),"#dba46a",[.15,Un+.07,-wt-.15])),G.add(Ce(Te.box(.4,.14,yt.D+.3),"#dba46a",[-vn-.15,Un+.07,-.15]))}return G}function P(ne,G,J){const Z=(oe,q,x,_=0,F=0)=>(oe.position.x=q,oe.position.z=x,oe.rotation.y=_,G.add(oe),F&&w(G,q,x,F),oe);if(ne==="classroom"){const oe=J?.id==="homework"?["Maths: 8 times table","7 × 8 = ?","Hand in homework!"]:["Class trip: TOMORROW!","Bring RM20","Recess 10:00"];R(G,rg(oe),3.2,1.6,1.3,1.75),R(G,aa(J?.id==="homework"?"times":"abc"),.9,1.15,-1.3,1.9),R(G,sa(),1,2.1,5.2,1.05),b(G,Vl(),1.3,1.5,-1.8,1.7),b(G,sa(),1,2.1,1.2,1.05),b(G,aa("kind"),.8,1,3.3,1.8),Z(Wl(1.7,1.5),-4.8,-wt+.25),Z(Er("#e2a574"),J?.id==="homework"?99:-2,-3.4,0,1.4),[[.3,-1.6],[3.4,-1.8],[.3,1]].forEach(([q,x])=>{Z(Er(),q,x,0,1.3),Z($l(),q,x+.55,Math.PI,0)}),J?.id!=="homework"&&Z(Er(),4.6,1.2,0,1.3),Z($l("#f5a25a"),4.6,1.75,Math.PI),Z(la(1),-5.9,3.6,0,.7),Z(la(.8),-5.9,2.6,0,.6)}else if(ne==="yard"){const oe=W0(1201);oe.scale.set(1,1.55,1),Z(oe,-5.2,-3.6,0,1.6);const q=X0(2207);q.scale.set(.9,1.4,.9),Z(q,5.6,-3.4,0,1.8),Z(gg(),.6,1.5,0,2.2),Z(_g(),-3,-3,.3,1.6),Z(q0(505,.8),5.6,.3,0,1.2);for(const[x,_,F]of[[-2,-4,1],[1.4,-4,1],[3.5,-3.9,.9],[-5.8,1.8,.8],[5.9,3.8,1]]){const Y=Y0(3e3+x*10);Y.scale.setScalar(F),Z(Y,x,_)}}else if(ne==="home"){R(G,Vl(!0),1.4,1.5,-3.4,1.8),R(G,aa("frame"),.9,.7,4.4,2),b(G,sa(),1,2.1,2.2,1.05),G.add(Ce(Te.box(1.8,.08,.4),"#c98a4d",[-.9,1.55,-wt+.2]));for(const oe of[-1.6,-.2])G.add(Ce(Te.box(.06,.24,.3),"#a8754a",[oe,1.43,-wt+.18]));G.add(Ce(Te.box(.14,.34,.24),"#6f9fd8",[-1.45,1.76,-wt+.2]),Ce(Te.box(.14,.3,.24),"#e8584e",[-1.28,1.74,-wt+.2])),G.add(Ce(Te.cyl(.12,.12,.02,12),"#fffaf0",[-.7,1.6,-wt+.2])),Z(Xl(),-3.2,-3.7,0,2.6),Z(Xl("#8fc9a8",1.2),5,-2.9,-.5,1.6),Z(pt(Ce(Te.box(1.3,.08,.8),"#c98f55",[0,.45,0]),...[[-1,-1],[1,-1],[-1,1],[1,1]].map(([oe,q])=>Ce(Te.cyl(.05,.05,.42,6),"#a8754a",[oe*.55,.21,q*.32]))),-1.8,.9,0,1.5),Z(la(1.2),5.8,3.6,0,.8),Z(Wl(1.2,1.1),1.2,-wt+.25)}}async function z(ne,G,J){f&&e.remove(f),f=new Bn,e.add(f),d=[],p=[],g={},v=[],m=[],f.add(y(ne)),P(ne,f,G);for(const x of G?.props||[]){const _=xg(x);_.position.set(x.x,0,x.z),f.add(_),["footprints","chart","shards"].includes(x.type)||w(f,x.x,x.z,x.type==="sheets"||x.type==="planner"?1.3:.8);const F=G.hotspots.find(Y=>Y.prop===x.type);F&&(_.traverse(Y=>{Y.userData.hot=F.id}),v.push({id:F.id,x:x.x,z:x.z,y:x.type==="chart"?1.9:x.type==="tablet"?1.2:x.type==="sheets"||x.type==="planner"?1.1:.7,obj:_}))}const Z=G?.cast||[];await Promise.all(Z.map(async x=>{const[_,F]=T(x.look.kind),Y=await os(Jt(x.look,{mood:x.mood||"happy"})),te=M(Y,_,F,x.x,x.z);te.userData.hot=x.id,g[x.id]={...x,m:te,w:_,h:F,mood:x.mood||"happy",boil:d[d.length-1],sh:w(f,x.x,x.z,_*.8)},v.push({id:x.id,x:x.x,z:x.z,y:F*_r+.15,person:!0,obj:te})}));const[oe,q]=await Promise.all([os(Jt(J,{pose:"A"})),os(Jt(J,{pose:"B"}))]);u.frames=[oe,q],Object.assign(u,{x:0,z:3.4,facing:1,moving:!1,target:null}),u.mat=null,u.m=M(oe,1.2*C,1.44*C,u.x,u.z),u.mat=u.m.material,d.pop(),u.sh=w(f,u.x,u.z,1.2),S.focus=null,S.zoomT=1,W()}async function k(ne,G){const J=g[ne];!J||J.mood===G||(J.mood=G,J.boil.frames=await os(Jt(J.look,{mood:G})))}function $(ne,G="happy"){return Jt(ne,{mood:G})}const ee=[];for(const ne of[-vn,vn])for(const G of[-wt,wt])for(const J of[-.7,Un])ee.push(new U(ne,J,G));const H=new U;function ie(ne){const J=Math.cos(ja);t.position.set(ne.x+Math.sin(vi)*J*60,ne.y+Math.sin(ja)*60,ne.z+Math.cos(vi)*J*60),t.lookAt(ne),t.updateMatrixWorld()}function W(){ie(new U(0,0,0));let ne=1/0,G=-1/0,J=1/0,Z=-1/0;for(const F of ee)H.copy(F).applyMatrix4(t.matrixWorldInverse),ne=Math.min(ne,H.x),G=Math.max(G,H.x),J=Math.min(J,H.y),Z=Math.max(Z,H.y);const oe=G-ne,q=Z-J;let x=Math.max(q*.5*1.16,oe*.5*1.04/S.aspect),_=!1;S.aspect<.85&&(x=Math.max(q*.5*1.3,oe*.5*.84/S.aspect),_=!0),S.fit={cx:(ne+G)/2,cy:(J+Z)/2-q*.02,halfH:x,halfW:oe/2,portraitMode:_}}function de(ne){const G=ne?1-Math.exp(-ne*4):1;S.zoom+=(S.zoomT-S.zoom)*G;const J=S.fit,Z=J.halfH*S.zoom,oe=Z*S.aspect;let q=0,x=0;const _=S.focus||(J.portraitMode?{x:u.x,z:u.z}:null);_&&(ie(new U(0,0,0)),H.set(_.x,.7,_.z).applyMatrix4(t.matrixWorldInverse),q=Math.max(-Math.max(0,J.halfW-oe*.9),Math.min(Math.max(0,J.halfW-oe*.9),H.x-J.cx)),x=S.focus?Math.max(-J.halfH*.4,Math.min(J.halfH*.4,H.y-J.cy))*(1-S.zoom)*2.2:0),S.pan.x+=(q-S.pan.x)*G,S.pan.y+=(x-S.pan.y)*G,ie(new U(0,0,0));const F=J.cx+S.pan.x,Y=J.cy+S.pan.y;Object.assign(t,{left:F-oe,right:F+oe,top:Y+Z,bottom:Y-Z}),t.updateProjectionMatrix()}function _e(ne,G){S.aspect=ne/G,S.aspect<s?(r.repeat.set(S.aspect/s,1),r.offset.set((1-r.repeat.x)/2,0)):(r.repeat.set(1,s/S.aspect),r.offset.set(0,(1-r.repeat.y)/2)),f&&W()}let Se=0,ze=-1,Qe=0;const j=new U;function se(ne){if(!f)return;Se+=ne;const G=Math.max(0,Math.floor(Se*dg))%_o;G!==ze&&(ze=G,Qe=G*7.31);for(const q of d)q.mat.map=q.frames[G];if(u.target){const q=u.target[0]-u.x,x=u.target[1]-u.z,_=Math.hypot(q,x),F=ug*ne;if(_<=F){u.x=u.target[0],u.z=u.target[1],u.target=null,u.moving=!1;const Y=u.resolve;u.resolve=null,Y?.()}else{u.x+=q/_*F,u.z+=x/_*F,u.moving=!0,j.set(Math.cos(vi),0,-Math.sin(vi));const Y=q*j.x+x*j.z;Math.abs(Y)>.05&&(u.facing=Y>0?1:-1)}}u.walkT=u.moving?u.walkT+ne:0;const J=u.moving&&Math.floor(u.walkT*8)%2===1;u.mat.map=u.frames[J?1:0][G];const Z=u.moving?Math.abs(Math.sin(u.walkT*16))*.07:0,oe=u.moving?1:1+Math.sin(Se*3)*.018;u.m.position.set(u.x,Z,u.z),u.m.scale.set(u.facing/oe,oe,1),u.sh.position.set(u.x,.018,u.z),j.set(Math.cos(vi),0,-Math.sin(vi));for(const q of Object.values(g)){const x=Math.sign((u.x-q.x)*j.x+(u.z-q.z)*j.z)||1,_=1+Math.sin(Se*2.6+q.x)*.015;q.m.scale.set(x/_,_,1)}for(let q=m.length-1;q>=0;q--){const x=m[q];x.t+=ne,x.vy-=9*ne,x.m.position.x+=x.vx*ne,x.m.position.z+=x.vz*ne,x.m.position.y=Math.max(0,x.m.position.y+x.vy*ne),x.m.scale.setScalar(Math.max(.001,1-x.t/.9)),x.t>.9&&(f.remove(x.m),p.splice(p.indexOf(x.m),1),m.splice(q,1))}h.map=c[G];for(const q of p)q.rotation.y=vi;de(ne)}const ye=()=>{f&&i.render(e,t,Qe)};function le(ne,G,J,Z=8){for(let oe=0;oe<Z;oe++){const q=oe/Z*Math.PI*2+Math.random(),x=new qt(.36,.36*_r);x.translate(0,.18*_r,0);const _=new ot(x,h);_.position.set(ne,G,J),_.userData.sprite=!0,_.userData.colorMap=()=>h.map,f.add(_),p.push(_),m.push({m:_,vx:Math.cos(q)*2.2,vz:Math.sin(q)*1.2,vy:2.5+Math.random()*1.5,t:0})}}function Pe(ne,G){return ne=Math.max(-vn+.6,Math.min(vn-.6,ne)),G=Math.max(-wt+.9,Math.min(wt-.4,G)),u.resolve&&u.resolve(),new Promise(J=>{u.target=[ne,G],u.resolve=J})}function Ne(ne){const G=v.find(_=>_.id===ne);if(!G)return Promise.resolve();let J=u.x-G.x,Z=u.z-G.z;const oe=Math.hypot(J,Z)||1;if(oe<1.4)return Promise.resolve();J/=oe,Z/=oe;const q=G.x+(J*.6+.8*Math.sign(J||1))*.9,x=G.z+Math.max(.5,Z*1.2+.4);return Pe(q,x)}function Ve(){const ne=[],G=n.domElement.clientWidth,J=n.domElement.clientHeight;for(const Z of v)H.set(Z.x,Z.y,Z.z).project(t),ne.push({id:Z.id,x:(H.x+1)/2*G,y:(1-H.y)/2*J,person:!!Z.person});return ne}const lt=new C0,We=new $e,gt=new ti(new U(0,1,0),0);function N(ne,G){const J=n.domElement.getBoundingClientRect();We.set((ne-J.left)/J.width*2-1,-((G-J.top)/J.height)*2+1),lt.setFromCamera(We,t);const Z=lt.intersectObjects(v.map(q=>q.obj),!0);for(const q of Z){if(q.object.userData.sprite&&q.uv){const x=q.object.material.map?.image;if(x?.getContext&&x.getContext("2d").getImageData(Math.floor(q.uv.x*(x.width-1)),Math.floor((1-q.uv.y)*(x.height-1)),1,1).data[3]<60)continue}if(q.object.userData.hot)return{hot:q.object.userData.hot}}const oe=new U;return lt.ray.intersectPlane(gt,oe)&&Math.abs(oe.x)<vn&&Math.abs(oe.z)<wt?{floor:[oe.x,oe.z]}:null}return{load:z,update:se,render:ye,resize:_e,walkTo:Pe,approach:Ne,tags:Ve,pick:N,setMood:k,portrait:$,det:u,people:g,focus:(ne,G=.78)=>{const J=g[ne]||v.find(Z=>Z.id===ne);S.focus=J?{x:(J.x+u.x)/2,z:(J.z+u.z)/2}:null,S.zoomT=J?G:1},celebrate:()=>{le(u.x,1.2,u.z,10);for(const ne of Object.values(g))le(ne.x,1.2,ne.z,5)},sparkle:ne=>{const G=v.find(J=>J.id===ne);G&&le(G.x,Math.min(G.y,1.2),G.z,7)},get ready(){return!!f}}}const Nc=[{id:"school",name:"School",icon:"🏫"},{id:"friends",name:"Friends",icon:"🤝"},{id:"family",name:"Family",icon:"🏠"},{id:"money",name:"Money",icon:"💰"},{id:"internet",name:"Internet",icon:"📱"},{id:"worship",name:"Worship",icon:"🕌"}],Sg=[{category:"school",title:"The Football Team Pick"},{category:"friends",title:"The Left-Out Friend"},{category:"friends",title:"The Broken Promise"},{category:"family",title:"The Last Samosa"},{category:"money",title:"The Extra Change"},{category:"internet",title:"The Borrowed Password"},{category:"worship",title:"The Noisy Masjid"},{category:"worship",title:"The Forgotten Dua"}],sr={detectiveGirl:{kind:"girl",skin:"#e0a878",top:"#e8584e",cover:"#f5cf5f",prop:"magnifier"},detectiveBoy:{kind:"boy",skin:"#c68a5e",top:"#e8584e",cover:"#ffffff",hair:"#3a2416",prop:"magnifier"}},Mr=[{id:"rm20",num:1,category:"money",title:"The Missing RM20",scene:"classroom",theme:"Honesty & returning what is not yours (amanah)",badge:{name:"Amanah Keeper",icon:"🔐"},brief:{from:"teacher",lines:["Oh, {D}! I am glad you are here.","Aisyah's trip money has gone missing. It was a RM20 note in a blue envelope.","The class trip is tomorrow. Can you find out what happened? Be kind, and listen to everyone."]},cast:[{id:"teacher",name:"Teacher Aminah",look:{kind:"woman",skin:"#d79a6b",top:"#6f9fd8",cover:"#8a6cc8"},x:-.9,z:-2.9},{id:"aisyah",name:"Aisyah",look:{kind:"girl",skin:"#e0a878",top:"#7cc6a4",cover:"#f0b3d6"},x:2.3,z:-.4,mood:"sad"},{id:"hakim",name:"Hakim",look:{kind:"boy",skin:"#b07650",top:"#f5cf5f",cover:"#ffffff",hair:"#2a1a10"},x:3.9,z:2.4},{id:"farah",name:"Farah",look:{kind:"girl",skin:"#8d5a3b",top:"#b9a7ea",cover:"#6fcfb7"},x:-3.2,z:2.4}],props:[{type:"bag",x:2.9,z:-.8,color:"#6f9fd8"},{type:"bottle",x:-4.7,z:-2.9,color:"#e8584e"},{type:"footprints",x:-4.9,z:-.3,rot:1.16},{type:"envelope",x:-4.2,z:-1.7}],hotspots:[{id:"aisyah",kind:"person",who:"aisyah",label:"Aisyah",lines:["I put my RM20 in a blue envelope, inside my bag.","At recess I carried my bag to the reading corner to get my book.","After recess the envelope was still in my bag... but it was empty!"],clue:{id:"c_aisyah",type:"statement",icon:"💬",name:"Aisyah's story",text:"She took her bag to the reading corner at recess. After recess the envelope was empty."}},{id:"hakim",kind:"person",who:"hakim",label:"Hakim",lines:["Money? I don't know anything about money.","I played football outside the WHOLE recess. I never came inside. Not even once!"],clue:{id:"c_hakim",type:"statement",icon:"💬",name:"Hakim's story",text:'"I played football the whole recess. I never came inside, not even once."'}},{id:"farah",kind:"person",who:"farah",label:"Farah",lines:["I stayed inside at recess to water the class plants with Teacher Aminah.","I heard someone run in and out very fast. Squeak, squeak! Like football boots.","I didn't see who it was. I was behind the plant shelf."],clue:{id:"c_farah",type:"statement",icon:"💬",name:"Farah's story",text:"She heard someone run in and out very fast at recess, squeaking like football boots."}},{id:"teacher",kind:"person",who:"teacher",label:"Teacher Aminah",lines:["I was here all recess. I was busy with the plants, so I didn't watch the door.","Remember, {D}: we don't call anyone a thief. We look for the truth, gently."],clue:{id:"c_teacher",type:"statement",icon:"💬",name:"Teacher's note",text:"She was busy with the plants and did not watch the door."}},{id:"footprints",kind:"object",prop:"footprints",label:"Muddy prints",lines:["Muddy footprints! They go from the door to the reading corner... and back again.","The pattern has little round studs, like football boots."],clue:{id:"c_prints",type:"evidence",icon:"👣",name:"Muddy football prints",text:"Muddy prints with football-boot studs go from the door to the reading corner and back."}},{id:"bottle",kind:"object",prop:"bottle",label:"Water bottle",lines:["A red water bottle, left by the reading corner.","The name on it says... HAKIM."],clue:{id:"c_bottle",type:"evidence",icon:"🧴",name:"Hakim's water bottle",text:"Found by the reading corner, where Aisyah's bag was at recess. The label says HAKIM."}}],huddle:{after:3,child:"Detectives, huddle up! Tell your partner what you have found so far.",parent:{ask:["What do we know for sure, and what are we only guessing?","Is it fair to say someone is a thief before we know the facts?"],tip:"Praise careful thinking. Good detectives (and good Muslims) do not jump to blame. You might mention that Allah tells us to check news before acting on it (Al-Hujurat 49:6)."}},contradiction:{who:"hakim",clue:"c_hakim",answer:["c_bottle","c_prints"],statement:"I played football the WHOLE recess. I never came inside. Not even once!",press:["Really! I was outside. Ask anyone. My boots were on the field all the time!"],hint:{ask:["Hakim says he never came inside. Is there anything in our casebook that was found inside, and belongs to him?"],tip:"Let your child find it. If they are stuck, point at the reading corner together."},aha:"Your water bottle was by the reading corner, Hakim. So you did come inside...",confession:["...Okay. I came in to get my water bottle.","There was a RM20 note on the floor by the reading corner. Nobody was there.","I thought... finders keepers? I wanted to buy new football cards.","It's still in my pocket. I don't know what to do now."]},islamic:{title:"Amanah: giving things back",sources:[{kind:"quran",ref:"An-Nisa 4:58",text:"Indeed, Allah commands you to render trusts to whom they are due…"},{kind:"hadith",ref:"Sahih al-Bukhari 6094 & Sahih Muslim 2607",text:"Truthfulness leads to righteousness, and righteousness leads to Paradise."}],explain:'Things that belong to someone else are an amanah (a trust). "Finders keepers" is not the Muslim way: when we find something, we try to give it back to its owner. Being truthful about it, even when it is hard, leads to good.',open:"If you like, open the Qur'an to Surah An-Nisa, ayah 58, and read it together.",ask:["How would Aisyah feel if she never got her money back?","Why might it feel hard for Hakim to tell the truth now?"],note:"The detailed rules for found property (luqatah) have more steps. For those, ask your local imam or teacher."},discuss:{prompt:"Talk together: Hakim found the money on the floor. Does that make it his?",nudge:"Take turns. Grown-up, share a time you found something that wasn't yours."},decision:{who:"hakim",question:"What should Hakim do now?",best:"return",options:[{id:"keep",icon:"🤫",text:"Keep it. He found it, so finders keepers.",chain:[{icon:"🤫",text:"Hakim keeps the RM20."},{icon:"🚌",text:"Aisyah cannot pay for the trip."},{icon:"😢",text:"She stays behind, sad and worried."},{icon:"🎒",text:"Hakim feels heavy inside every time he sees her."},{icon:"💔",text:"When the class finds out, it is hard to trust him."}],tone:"sad"},{id:"return",icon:"🤲",text:"Give it back to Aisyah and tell the truth.",chain:[{icon:"🤲",text:"Hakim gives the RM20 back and says sorry."},{icon:"😮‍💨",text:"Aisyah is so relieved!"},{icon:"😊",text:"Hakim feels light and honest inside."},{icon:"🤝",text:"Everyone knows they can trust Hakim."},{icon:"🚌",text:"The whole class goes on the trip together."}],tone:"good"},{id:"sneak",icon:"🙈",text:"Sneak it back into her bag so nobody knows.",chain:[{icon:"🙈",text:"Hakim hides the money back in her bag."},{icon:"😮",text:"Aisyah finds it. She is glad, but confused."},{icon:"🤔",text:"Everyone still wonders who took it."},{icon:"😬",text:`Hakim's fib ("I never came inside") is still there.`},{icon:"🌧️",text:"He misses the chance to be known as honest."}],tone:"mixed"}]},principle:{title:"The principle: Amanah & Sidq (trust & truthfulness)",points:["What belongs to someone else is a trust. We give it back.","Owning up is brave. Truthfulness leads to good.","We can make things right: return it, and say sorry for the fib."]},resolution:["Hakim takes a deep breath and gives Aisyah the RM20.",`"I'm sorry I said I never came inside." Aisyah smiles. "Thank you for giving it back."`],apply:{title:"This week, family detectives…",ideas:[`Make a "found it" box at home for things we find that aren't ours.`,"Next time you find something, tell a grown-up straight away."]}},{id:"screenshot",num:2,category:"internet",title:"The Secret Screenshot",scene:"yard",theme:"Not mocking others, privacy & covering faults",badge:{name:"Honour Guard",icon:"🛡️"},brief:{from:"sara",lines:["{D}! Please help. Last night Nadia sent a silly sneezing photo to the class chat by mistake.",'She deleted it after ten seconds. But now someone has a screenshot, and they call her "Sneezy Nadia".',"Who took the screenshot? And what should happen now?"]},cast:[{id:"sara",name:"Sara",look:{kind:"girl",skin:"#c68a5e",top:"#78c4dc",cover:"#e8584e"},x:-3.6,z:1.8},{id:"nadia",name:"Nadia",look:{kind:"girl",skin:"#e0a878",top:"#f0b3d6",cover:"#8a6cc8"},x:-1.2,z:-2.6,mood:"sad"},{id:"imran",name:"Imran",look:{kind:"boy",skin:"#d79a6b",top:"#83c47b",cover:"#6f9fd8",hair:"#2a1a10"},x:3.6,z:-1.6},{id:"yusuf",name:"Yusuf",look:{kind:"boy",skin:"#8d5a3b",top:"#f5a25a",cover:null,hair:"#1f140c"},x:3.4,z:3.3}],props:[{type:"tablet",x:5.3,z:1.9},{type:"doodle",x:.9,z:1.7},{type:"ball",x:-4.9,z:-1.1}],hotspots:[{id:"nadia",kind:"person",who:"nadia",label:"Nadia",lines:["It was just a sneeze photo. I pressed the wrong button!","I deleted it really fast, at 7:42. Now people are laughing at me.","I don't want to come to school tomorrow."],clue:{id:"c_nadia",type:"statement",icon:"💬",name:"Nadia's story",text:"She sent the photo by mistake and deleted it at 7:42. She feels embarrassed and sad."}},{id:"sara",kind:"person",who:"sara",label:"Sara",lines:["At 7:42 only three people were online in the chat: me, Yusuf and Imran.","I didn't take a screenshot. I sent Nadia a hug emoji instead."],clue:{id:"c_sara",type:"statement",icon:"💬",name:"Sara's story",text:"Only Sara, Yusuf and Imran were online at 7:42."}},{id:"yusuf",kind:"person",who:"yusuf",label:"Yusuf",lines:["Haha, the sneeze photo? Someone sent it to me. I didn't take it!","I only sent laughing faces... Maybe that wasn't very kind.","It's on my tablet over there, if you want to see."],clue:{id:"c_yusuf",type:"statement",icon:"💬",name:"Yusuf's story",text:"Someone forwarded the screenshot to him. He did not take it."}},{id:"imran",kind:"person",who:"imran",label:"Imran",lines:["Screenshot? Not me! I didn't even see the chat last night.","I didn't take any screenshot. Nope."],clue:{id:"c_imran",type:"statement",icon:"💬",name:"Imran's story",text:`"I didn't even see the chat last night. I didn't take any screenshot."`}},{id:"tablet",kind:"object",prop:"tablet",label:"Yusuf's tablet",lines:["The forwarded screenshot is on Yusuf's tablet.","Look at the top! A message popped up on the phone while the screenshot was taken:",'"Mama: Imran, dinner is ready!"'],clue:{id:"c_shot",type:"evidence",icon:"📱",name:"The screenshot",text:'At the top it shows a pop-up message on the phone that took it: "Mama: Imran, dinner is ready!"'}},{id:"doodle",kind:"object",prop:"doodle",label:"Paper on bench",lines:["A paper on the bench with a drawing of a sneezing face.",'Someone wrote "SNEEZY NADIA" on it. Ouch.'],clue:{id:"c_doodle",type:"evidence",icon:"📝",name:"Mean nickname note",text:'A drawing on the bench that says "SNEEZY NADIA". The joke is spreading offline too.'}}],huddle:{after:3,child:"Detectives, huddle up! How do you think Nadia feels right now?",parent:{ask:["Have you ever felt laughed at? What did it feel like?","Is a joke still funny if one person is hurt by it?"],tip:"Let your child talk about feelings first. There is no rush to solve the case."}},contradiction:{who:"imran",clue:"c_imran",answer:["c_shot"],statement:"I didn't even see the chat last night. I didn't take any screenshot.",press:["I was busy! I had dinner and then I read a book. Honest!"],hint:{ask:["Look closely at what was on the screen when the screenshot was taken. Whose phone would get that message?"],tip:"The clue is the pop-up message in the screenshot."},aha:'The screenshot shows "Mama: Imran, dinner is ready!" So it was taken on your phone, Imran.',confession:["...Yes. I took it. It was so funny, I couldn't stop laughing.","I sent it to Yusuf. And now some kids in the other class want it too.","I was going to post it in the big group chat. Everyone would see it."]},islamic:{title:"Don't mock, and cover others' mistakes",sources:[{kind:"quran",ref:"Al-Hujurat 49:11",text:"O you who have believed, let not a people ridicule [another] people; perhaps they may be better than them… And do not insult one another and do not call each other by [offensive] nicknames."},{kind:"quran",ref:"Al-Hujurat 49:12",text:"…And do not spy or backbite each other."},{kind:"hadith",ref:"Sahih al-Bukhari 2442 & Sahih Muslim 2580",text:"Whoever covers (the faults of) a Muslim, Allah will cover him on the Day of Resurrection."}],explain:"Allah tells us not to make fun of people or call them hurtful nicknames. When someone makes an embarrassing mistake, a Muslim covers it instead of spreading it, and Allah promises to cover our mistakes too.",open:"If you like, open the Qur'an to Surah Al-Hujurat, ayat 11 and 12, and read them together.",ask:["Is sharing a screenshot like passing on a secret?",'How can we "cover" a friend who made a mistake?']},discuss:{prompt:"Talk together: once a picture is online, can we ever get it all back?",nudge:"Grown-up: share one simple family rule you have about photos of other people."},decision:{who:"imran",question:"What should Imran do now?",best:"delete",options:[{id:"post",icon:"📤",text:"Post it in the big group chat. It's just a joke!",chain:[{icon:"📤",text:"Imran posts the screenshot."},{icon:"👥",text:"More kids share it, again and again."},{icon:"📲",text:"Nadia sees it everywhere."},{icon:"😳",text:"She feels embarrassed and alone."},{icon:"💔",text:"Friendships break. Nobody feels safe in the chat."}],tone:"sad"},{id:"delete",icon:"🗑️",text:"Delete it, ask Yusuf to delete it, and say sorry to Nadia.",chain:[{icon:"🗑️",text:"Imran deletes it and asks Yusuf to delete it too."},{icon:"🛑",text:"The picture stops spreading."},{icon:"💌",text:"Imran says sorry to Nadia."},{icon:"😌",text:"Nadia feels protected, not laughed at."},{icon:"🤝",text:"The class learns to cover each other's mistakes."}],tone:"good"},{id:"hide",icon:"🔒",text:"Keep it saved on his phone, but don't share it.",chain:[{icon:"🔒",text:"Imran keeps the screenshot saved."},{icon:"📨",text:"Yusuf still has his copy too."},{icon:"😟",text:"Nadia worries it could come back any day."},{icon:"📱",text:"One day a friend scrolls his photos and finds it."},{icon:"🌧️",text:"The problem is hidden, not solved."}],tone:"mixed"}]},principle:{title:"The principle: guard your brother's and sister's honour",points:["We don't ridicule people or call them hurtful nicknames.","When someone slips up, we cover it instead of spreading it.",'Online, "just a joke" can travel far and hurt for a long time.']},resolution:["Imran deletes the screenshot. Yusuf deletes his copy too.",`"Sorry, Nadia. That wasn't fair." Nadia smiles a little. "Thanks for stopping it."`],apply:{title:"This week, family detectives…",ideas:['Before sharing any photo of a person, ask: "Would they be happy I shared this?"',"If you see someone being laughed at online, tell a grown-up."]}},{id:"vase",num:3,category:"family",title:"The Broken Vase",scene:"home",theme:"Owning up, and not blaming others",badge:{name:"Truth Teller",icon:"🏺"},brief:{from:"mama",lines:["Assalamu alaikum, {D}. Thank you for coming.","My favourite vase, the one from Nenek, is broken on the floor.","Maryam says little Adam did it. I don't want to blame anyone unfairly. Can you look into it?"]},cast:[{id:"mama",name:"Auntie Huda",look:{kind:"woman",skin:"#e0a878",top:"#83c47b",cover:"#6f9fd8"},x:-3.6,z:1.4},{id:"maryam",name:"Maryam",look:{kind:"girl",skin:"#e0a878",top:"#f5a25a",cover:"#b9a7ea"},x:3.8,z:1.4},{id:"adam",name:"Adam (age 4)",look:{kind:"toddler",skin:"#e0a878",top:"#78c4dc",hair:"#3a2416"},x:1.7,z:2.9,mood:"sad"}],props:[{type:"shards",x:-.9,z:-2.6},{type:"blocks",x:.1,z:1.3},{type:"chart",x:2.6,z:-3.9},{type:"catbasket",x:-5.4,z:-2.1},{type:"softball",x:4.3,z:-2.1}],hotspots:[{id:"mama",kind:"person",who:"mama",label:"Auntie Huda",lines:["I was in the kitchen making tea. Then I heard a CRASH!","When I came in, Maryam was standing by the sofa, and Adam was sitting on the rug.","The vase was on the high shelf, very high up."],clue:{id:"c_mama",type:"statement",icon:"💬",name:"Auntie Huda's story",text:"The vase was on the high shelf. After the crash, Maryam was by the sofa and Adam was on the rug."}},{id:"maryam",kind:"person",who:"maryam",label:"Maryam",lines:["It was Adam! I saw him climb up and grab the vase.","He's little, so he won't get in big trouble anyway."],clue:{id:"c_maryam",type:"statement",icon:"💬",name:"Maryam's story",text:'"Adam climbed up and grabbed the vase. I saw him."'}},{id:"adam",kind:"person",who:"adam",label:"Adam",lines:["I was making a tower! A big tower!","Then... CRASH! Not me. Not me!"],clue:{id:"c_adam",type:"statement",icon:"💬",name:"Adam's story",text:"He was building a block tower when the crash happened."}},{id:"blocks",kind:"object",prop:"blocks",label:"Block tower",lines:["Adam's block tower is still standing, tall and wobbly.","If he had jumped up and run to the shelf, it would surely have fallen over."],clue:{id:"c_blocks",type:"evidence",icon:"🧱",name:"Tower still standing",text:"Adam's wobbly tower is still standing. He did not rush off from it."}},{id:"chart",kind:"object",prop:"chart",label:"Height chart",lines:["A height chart on the wall. Adam's line says 95 cm.","The high shelf is at 150 cm. There is no chair near it.","Adam could never reach it!"],clue:{id:"c_chart",type:"evidence",icon:"📏",name:"Height chart",text:"Adam is 95 cm tall. The shelf is 150 cm high with no chair nearby. He cannot reach it."}},{id:"softball",kind:"object",prop:"softball",label:"Soft ball",lines:["A soft ball, rolled under the armchair.","There's a name written on it: MARYAM.","Hmm. Was someone throwing a ball indoors?"],clue:{id:"c_ball",type:"evidence",icon:"🥎",name:"Maryam's ball",text:"A soft ball with MARYAM written on it, rolled under the armchair."}},{id:"cat",kind:"object",prop:"catbasket",label:"Cat basket",lines:["Oyen the cat is fast asleep. Purr... purr...","The blanket is neat and his fur is dry. He hasn't moved for ages."],clue:{id:"c_cat",type:"evidence",icon:"🐈",name:"Sleepy cat",text:"Oyen the cat has been asleep the whole time."}}],huddle:{after:3,child:"Detectives, huddle up! Why might someone blame a little brother?",parent:{ask:["Why might it feel easier to blame someone else?","How would it feel to be told off for something you didn't do?"],tip:"Keep it gentle: everyone is tempted sometimes. The case is about what we do next."}},contradiction:{who:"maryam",clue:"c_maryam",answer:["c_chart","c_blocks"],statement:"Adam climbed up and grabbed the vase. I saw him!",press:["He's a really good climber! Um... I think."],hint:{ask:["How tall is Adam? How high is the shelf? Could he really reach it?"],tip:"The height chart or the standing block tower both show it."},aha:"Adam is only 95 cm, and the shelf is 150 cm high. He couldn't reach it!",confession:["...You're right. It wasn't Adam.","I was throwing my ball up to the ceiling. It hit the vase. CRASH.","I got scared. Adam is little, so I thought he wouldn't get in trouble..."]},islamic:{title:"Never put your mistake on someone else",sources:[{kind:"quran",ref:"An-Nisa 4:112",text:"But whoever earns an offense or a sin and then blames it on an innocent [person] has taken upon himself a slander and manifest sin."},{kind:"quran",ref:"Al-An'am 6:164",text:"…And every soul earns not [blame] except against itself, and no bearer of burdens will bear the burden of another."}],explain:"Breaking the vase was an accident, and accidents happen. But blaming little Adam would turn an accident into a real wrong. In Islam, each person carries their own actions. We own our mistakes, say sorry, and try to fix them.",open:"If you like, open the Qur'an to Surah An-Nisa, ayah 112, and read it together.",ask:["Which is worse: the broken vase, or blaming Adam?","What could Maryam do to help fix things?"]},discuss:{prompt:"Talk together: why is it scary to own up, and how can grown-ups make it easier?",nudge:"Grown-up: you might promise your child how you will react when they own up to a mistake."},decision:{who:"maryam",question:"What should Maryam do now?",best:"truth",options:[{id:"blame",icon:"👉",text:"Keep saying Adam did it.",chain:[{icon:"👉",text:"Maryam keeps blaming Adam."},{icon:"😭",text:"Adam is told off for something he didn't do."},{icon:"😔",text:"Maryam feels guilty inside."},{icon:"🔍",text:"Later, the truth comes out anyway."},{icon:"💔",text:"Now it is harder for Mama to trust Maryam."}],tone:"sad"},{id:"truth",icon:"🙋‍♀️",text:"Tell Mama the truth, say sorry, and help fix it.",chain:[{icon:"🙋‍♀️",text:"Maryam tells the truth and says sorry."},{icon:"🤗",text:"Mama is sad about the vase, but proud of her honesty."},{icon:"🧴",text:"Together they glue the pieces back."},{icon:"🌸",text:"The mended vase gets fresh flowers."},{icon:"💞",text:"Adam gives Maryam a hug. Trust grows."}],tone:"good"},{id:"dunno",icon:"🤷‍♀️",text:`Say "I don't know what happened."`,chain:[{icon:"🤷‍♀️",text:"Maryam says she doesn't know."},{icon:"🤔",text:"Everyone keeps wondering and guessing."},{icon:"👀",text:"Adam still gets funny looks."},{icon:"🎒",text:"Maryam carries a heavy secret."},{icon:"🌧️",text:"The house feels cloudy for days."}],tone:"mixed"}]},principle:{title:"The principle: own your actions",points:["Accidents happen. Owning up is brave.","Blaming an innocent person is a real wrong in Islam.","Say sorry, then help fix what you can."]},resolution:[`Maryam goes to her mama. "It was me. I'm sorry. I was throwing my ball."`,`Auntie Huda hugs her. "Thank you for telling me the truth. Let's fix it together."`],apply:{title:"This week, family detectives…",ideas:['Agree a family "owning-up promise": if you tell the truth, we stay calm and fix it together.',"Notice and praise each other when someone owns up."]}},{id:"homework",num:4,category:"school",title:"The Copied Homework",scene:"classroom",theme:"Honest work & learning for real",badge:{name:"Honest Learner",icon:"✏️"},brief:{from:"teacher",lines:["{D}, I have a little puzzle for you.","Two maths sheets have exactly the same mistakes: 7 × 8 = 54, and the same crossed-out sum.","One belongs to Bilal and one to Danish. Can you find out what happened, kindly?"]},cast:[{id:"teacher",name:"Teacher Aminah",look:{kind:"woman",skin:"#d79a6b",top:"#6f9fd8",cover:"#8a6cc8"},x:-4.4,z:-1.4},{id:"bilal",name:"Bilal",look:{kind:"boy",skin:"#c68a5e",top:"#b9a7ea",cover:"#f5cf5f",hair:"#2a1a10"},x:2.7,z:2.9},{id:"danish",name:"Danish",look:{kind:"boy",skin:"#e0a878",top:"#78c4dc",cover:null,hair:"#3a2416"},x:2.2,z:-.6},{id:"zara",name:"Zara",look:{kind:"girl",skin:"#b07650",top:"#f5cf5f",cover:"#83c47b"},x:-3.2,z:2.4}],props:[{type:"sheets",x:-2.2,z:-3.1},{type:"planner",x:4.5,z:1.6}],hotspots:[{id:"sheets",kind:"object",prop:"sheets",label:"Two maths sheets",lines:["Two homework sheets side by side.","Both say 7 × 8 = 54. Both have the same sum crossed out in the same place.","That's a big coincidence..."],clue:{id:"c_sheets",type:"evidence",icon:"📄",name:"Matching mistakes",text:"Both sheets have 7 × 8 = 54 and the same crossed-out sum."}},{id:"bilal",kind:"person",who:"bilal",label:"Bilal",lines:["I did it all by myself! Last night, straight after Isha.","I worked really hard on it. Every single sum."],clue:{id:"c_bilal",type:"statement",icon:"💬",name:"Bilal's story",text:'"I did it all by myself last night, straight after Isha."'}},{id:"danish",kind:"person",who:"danish",label:"Danish",lines:["I did mine on the weekend. I'm not great at the 8 times table.",'This morning at the gate, Bilal asked to "check" my sheet. I let him borrow it.'],clue:{id:"c_danish",type:"statement",icon:"💬",name:"Danish's story",text:'He did his sheet at the weekend. Bilal borrowed it at the gate this morning to "check" it.'}},{id:"zara",kind:"person",who:"zara",label:"Zara",lines:["This morning Bilal was writing super fast on the bench by the gate.",'He said, "Quick, quick, before the bell!"'],clue:{id:"c_zara",type:"statement",icon:"💬",name:"Zara's story",text:"This morning Bilal was writing super fast by the gate before the bell."}},{id:"planner",kind:"object",prop:"planner",label:"Bilal's planner",lines:["Bilal's planner is open on his desk.",'Yesterday it says: "Play new game till late!! Maths homework: do TOMORROW morning."'],clue:{id:"c_planner",type:"evidence",icon:"📒",name:"Bilal's planner",text:'"Play new game till late!! Maths homework: do TOMORROW morning."'}}],huddle:{after:3,child:"Detectives, huddle up! What do the two matching sheets tell us?",parent:{ask:["Is it ever okay to look at a friend's answers? When is it helping, and when is it copying?","Why do teachers give homework at all?"],tip:"Asking a friend to explain is great. Copying answers is different. Let your child find the line."}},contradiction:{who:"bilal",clue:"c_bilal",answer:["c_planner","c_zara","c_danish"],statement:"I did it all by myself last night, straight after Isha.",press:["Really! After Isha I sat at my desk and did every sum."],hint:{ask:["Bilal says he did it last night. Is there anything that says what he really did last night?"],tip:"His own planner is the strongest clue. Zara and Danish also saw him this morning."},aha:'Your planner says "Play new game till late" and "do homework TOMORROW morning", Bilal.',confession:["...Yeah. I played my new game until late.","This morning I borrowed Danish's sheet and copied it super fast.","I don't really get the 8 times table. I didn't want to look silly."]},islamic:{title:"Honest work, real learning",sources:[{kind:"hadith",ref:"Sahih Muslim (Book of Faith)",text:"Whoever cheats us is not one of us."},{kind:"quran",ref:"Ta-Ha 20:114",text:'…and say, "My Lord, increase me in knowledge."'}],explain:"The Prophet Muhammad ﷺ warned us strongly against cheating. Homework is our chance to learn, and learning is something we can even ask Allah for. Copying hides the problem instead of fixing it, and asking for help is nothing to be shy about.",open:'You might teach your child the short dua from Surah Ta-Ha 20:114: "Rabbi zidni ilma" (My Lord, increase me in knowledge).',ask:["Who loses the most when Bilal copies?","What could Bilal do instead when he gets stuck?"]},discuss:{prompt:"Talk together: what is the difference between getting help and copying?",nudge:"Grown-up: tell a story of something that was hard for you to learn as a child."},decision:{who:"bilal",question:"What should Bilal do now?",best:"tell",options:[{id:"quiet",icon:"🤐",text:"Hand it in and say nothing.",chain:[{icon:"🤐",text:"Bilal hands in the copied sheet."},{icon:"✔️",text:"He gets a tick, but still doesn't know 7 × 8."},{icon:"📝",text:"Next week there is a times-table test."},{icon:"😰",text:"He feels lost and wants to copy again."},{icon:"🔁",text:"The problem keeps growing."}],tone:"sad"},{id:"tell",icon:"🙋‍♂️",text:"Tell the teacher, ask for help, and redo it himself.",chain:[{icon:"🙋‍♂️",text:"Bilal tells Teacher Aminah the truth."},{icon:"🧑‍🏫",text:"She helps him practise the 8 times table."},{icon:"💡",text:"7 × 8 = 56! He really gets it now."},{icon:"😊",text:"He feels proud of his own work."},{icon:"🤝",text:"Danish and Bilal practise together, honestly."}],tone:"good"},{id:"blame",icon:"👉",text:"Say Danish copied HIM.",chain:[{icon:"👉",text:"Bilal says Danish copied him."},{icon:"😢",text:"Danish gets in trouble for nothing."},{icon:"💔",text:"Their friendship cracks."},{icon:"🕳️",text:"One fib needs another fib to hide it."},{icon:"🌧️",text:"Bilal still can't do his 8 times table."}],tone:"sad"}]},principle:{title:"The principle: honest effort",points:["Cheating is not the Muslim way, even in small things.","Learning is precious. We can ask Allah to increase our knowledge.","Getting stuck is normal. Asking for help is brave."]},resolution:[`Bilal walks up to Teacher Aminah. "I copied. I'm sorry. I don't get the 8 times table."`,`She smiles. "Thank you for being honest, Bilal. Let's learn it together."`],apply:{title:"This week, family detectives…",ideas:["Pick one thing that is hard for you and practise it together for 5 minutes a day.",'Learn "Rabbi zidni ilma" together and say it before homework.']}}];let Fn,Ki,vo=!1;function ws(){if(!Fn)try{Fn=new(window.AudioContext||window.webkitAudioContext),Ki=Fn.createGain(),Ki.gain.value=vo?0:.4,Ki.connect(Fn.destination)}catch{Fn=null}}function Fc(n){vo=n,Ki&&(Ki.gain.value=n?0:.4)}function nn(n,e,{type:t="triangle",vol:i=.5,slide:r=1,delay:s=0}={}){if(!Fn||vo)return;const a=Fn.currentTime+s,o=Fn.createOscillator(),l=Fn.createGain();o.type=t,o.frequency.setValueAtTime(n,a),o.frequency.exponentialRampToValueAtTime(n*r,a+e),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(i,a+.012),l.gain.exponentialRampToValueAtTime(1e-4,a+e),o.connect(l).connect(Ki),o.start(a),o.stop(a+e+.02)}const zn={tap:()=>nn(620,.07,{vol:.25}),blip:()=>nn(900+Math.random()*120,.03,{type:"square",vol:.04}),open:()=>{nn(520,.1,{vol:.3}),nn(780,.12,{delay:.06,vol:.3})},clue:()=>{nn(660,.12,{slide:1.5}),nn(1320,.12,{delay:.08,vol:.3})},soft:()=>nn(330,.3,{type:"sine",slide:.8,vol:.3}),aha:()=>[392,523,659].forEach((n,e)=>nn(n,.18,{delay:e*.08,vol:.4})),chain:n=>nn(440+n*70,.12,{type:"sine",vol:.3}),talk:()=>{nn(587,.14,{type:"sine",vol:.35}),nn(880,.2,{type:"sine",delay:.1,vol:.3})},badge:()=>[523,659,784,1047].forEach((n,e)=>nn(n,.24,{delay:e*.11,vol:.4}))},st=n=>document.getElementById(n),he=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),kc="familyDeen.detective.v1",Za=()=>({v:1,setup:null,convos:0,log:[],cases:{},current:null,muted:!1});let De=(()=>{try{return{...Za(),...JSON.parse(localStorage.getItem(kc)||"{}")}}catch{return Za()}})();const Sn=()=>{try{localStorage.setItem(kc,JSON.stringify(De))}catch{}},xt=()=>De.setup?.parent||"Baba",Gn=()=>De.setup?.name||"Noor",Mn=n=>String(n).replaceAll("{P}",xt()).replaceAll("{D}",Gn()),Nr=()=>De.setup?.detective==="boy"?sr.detectiveBoy:sr.detectiveGirl;let Ei=1,pn=!1;const ar=st("layer"),bg=n=>new Promise(e=>setTimeout(e,n/Ei));function it(n,{cls:e="",onRender:t}={}){ar.innerHTML=`<section class="screen ${e}">${n}</section>`;const i=ar.firstElementChild;return t?.(i),new Promise(r=>{i.addEventListener("click",s=>{const a=s.target.closest("[data-act]");!a||a.disabled||(ws(),zn.tap(),r(a.dataset.act))})})}const $t=()=>{ar.innerHTML=""},Ze=(n,e,t="")=>`<button class="chunky ${t}" data-act="${n}">${e}</button>`;function wr(n,e,t){return`<div class="card parent"><div class="phead"><span>👤 For ${he(xt())}</span><small>only ${he(xt())} reads this</small></div>
    <h2>${n}</h2>${e}<div class="btns">${t}</div></div>`}const ps=n=>`<ul class="asks">${n.map(e=>`<li>${he(Mn(e))}</li>`).join("")}</ul>`;async function ni(n){n==="parent"?await it(`<div class="cover"><div class="big">🙈</div><h2>Pass the device to ${he(xt())}</h2>
      <p>Detective ${he(Gn())}, no peeking! The next card is only for ${he(xt())}.</p>${Ze("ok",`I'm ${he(xt())}, show me`,"blue")}</div>`,{cls:"solid"}):await it(`<div class="cover"><div class="big">🔄</div><h2>Pass back to Detective ${he(Gn())}</h2>
      <p>${he(xt())}, you can give the device back now.</p>${Ze("ok",`I'm Detective ${he(Gn())}!`)}</div>`,{cls:"solid kid"})}function Pr(n){const e=st("toast");e.textContent=n,e.classList.remove("hidden"),e.style.animation="none",e.offsetWidth,e.style.animation="",clearTimeout(Pr.timer),Pr.timer=setTimeout(()=>e.classList.add("hidden"),2600)}function Xi(n){De.convos++;const e=De.current;e&&(e.convos=(e.convos||0)+1),De.log.push({kind:n,case:e?.id||null,at:Date.now()}),De.log.length>300&&De.log.shift(),Sn(),zn.talk(),Pr(`💬 Conversation #${De.convos}. Lovely talking!`)}const rt={lines:[],i:0,shown:0,open:!1,resolve:null,acc:0};function xo(n,e,t,i="happy"){return new Promise(r=>{Object.assign(rt,{lines:t.map(Mn),i:0,shown:0,open:!0,resolve:r,acc:0}),st("dlgName").textContent=n,st("dlgFace").src=li(Jt(e,{mood:i})),st("dialog").classList.remove("hidden"),zn.open()})}function Mo(){if(!rt.open)return;const n=rt.lines[rt.i];if(rt.shown<n.length){rt.shown=n.length,st("dlgText").textContent=n;return}if(++rt.i<rt.lines.length){rt.shown=0,st("dlgText").textContent="";return}rt.open=!1,st("dialog").classList.add("hidden");const e=rt.resolve;rt.resolve=null,e?.()}st("dialog").addEventListener("click",()=>{ws(),Mo()});window.addEventListener("keydown",n=>{(n.key===" "||n.key==="Enter")&&rt.open&&(n.preventDefault(),Mo())});const Ts=new y0({canvas:st("scene"),antialias:!0,alpha:!0});Ts.setPixelRatio(Math.min(window.devicePixelRatio,2));Ts.outputColorSpace=Wt;const St=await yg(Ts);function Oc(){Ts.setSize(window.innerWidth,window.innerHeight,!1),St.resize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",Oc);Oc();let Xe=null,Yl=performance.now();function Bc(n){const e=Math.max(0,Math.min(.05,(n-Yl)/1e3))*Ei;if(Yl=n,St.update(e),rt.open){const t=rt.lines[rt.i];for(rt.acc+=e*45;rt.acc>=1&&rt.shown<t.length;)rt.shown++,rt.acc--,rt.shown%3===0&&zn.blip();st("dlgText").textContent=t.slice(0,rt.shown)}Eg(),St.render(),requestAnimationFrame(Bc)}const Ka=new Map;function Eg(){const n=st("tags"),e=Xe?.investigating&&!rt.open&&!ar.firstElementChild;if(n.classList.toggle("hidden",!e),!e)return;const t=[],i=St.tags().sort((r,s)=>s.y-r.y);for(const r of i){const s=Xe.c.hotspots.find(v=>v.id===r.id);if(!s)continue;let a=Ka.get(r.id);a||(a=document.createElement("button"),a.className="tag",a.dataset.hot=r.id,a.addEventListener("click",v=>{v.stopPropagation(),ws(),So(r.id)}),n.appendChild(a),Ka.set(r.id,a));const o=Xe.found.has(s.clue.id),l=`${o?"✓":s.kind==="person"?"💬":"🔍"} ${he(s.label)}`;a.innerHTML!==l&&(a.innerHTML=l),a.classList.toggle("done",o),a.classList.toggle("obj",s.kind!=="person");const c=a.offsetWidth||120,h=a.offsetHeight||40,f=c/2+6,d=window.innerWidth,p=Math.max(f,Math.min(d-f,r.x));let g=r.y;for(let v=0;v<6;v++){const m=t.find(u=>Math.abs(u.x-p)<(u.w+c)/2+4&&Math.abs(u.y-g)<h+4);if(!m)break;g=m.y-h-6}g=Math.max(h+60,g),t.push({x:p,y:g,w:c}),a.style.transform=`translate(${p}px, ${g}px) translate(-50%, -100%)`}}function Fr(){st("tags").innerHTML="",Ka.clear()}st("scene").addEventListener("pointerdown",n=>{if(ws(),!Xe?.investigating||rt.open||pn||ar.firstElementChild)return;const e=St.pick(n.clientX,n.clientY);e?.hot&&Xe.c.hotspots.some(t=>t.id===e.hot)?So(e.hot):e?.floor&&St.walkTo(e.floor[0],e.floor[1]+.3)});function Ai(n){if(st("hud").classList.toggle("hidden",!n),!n||!Xe)return;const e=Xe.c;st("casePill").innerHTML=`<b>Case ${e.num}</b> ${he(e.title)}`,st("bookCount").textContent=Xe.found.size}const Tr=n=>{st("hint").textContent=n,st("hint").classList.toggle("hidden",!n)};st("muteBtn").addEventListener("click",()=>{De.muted=!De.muted,Fc(De.muted),st("muteBtn").innerHTML=Lt(De.muted?"mute":"sound"),Sn()});st("homeBtn").addEventListener("click",async()=>{if(pn||rt.open)return;pn=!0;const n=await it(`<div class="card small"><h2>Back to the case board?</h2><p>Your case is saved. You can carry on later.</p>
    <div class="btns">${Ze("stay","Keep investigating","gold")}${Ze("go","Case board")}</div></div>`,{cls:"dim"});pn=!1,$t(),n==="go"&&(Xe=null,Fr(),Ai(!1),Ji())});st("bookBtn").addEventListener("click",()=>{!pn&&!rt.open&&Xe&&zc()});function wg(n,e=!1){const t=e?"button":"div";return`<${t} class="clue ${n.type}" ${e?`data-act="clue:${n.id}"`:""}><span class="cico">${n.icon}</span>
    <span><b>${he(n.name)}</b><small>${he(Mn(n.text))}</small></span></${t}>`}const Tg=n=>n.hotspots.map(e=>e.clue).filter(e=>Xe.found.has(e.id));async function zc(n){pn=!0;const e=Xe.c,t=Tg(e).filter(s=>!n||s.id!==n),i=Xe.islamicSeen?`<h3>📖 Islamic evidence</h3>${e.islamic.sources.map(s=>`<div class="clue islamic"><span class="cico">${s.kind==="quran"?"📖":"📜"}</span><span><b>${he(s.ref)}</b><small>${he(s.text)}</small></span></div>`).join("")}`:"",r=await it(`<div class="card book"><div class="ribbon">${n?"Present evidence":"Casebook"}</div>
    ${n?`<p class="lead">Which clue shows that the statement doesn't add up?</p>`:""}
    <div class="clues">${t.map(s=>wg(s,!!n)).join("")||"<p>No clues yet. Tap people and 🔍 things in the room!</p>"}</div>
    ${n?"":i}
    <div class="btns">${Ze("close",n?"Back":"Close","gold")}</div></div>`,{cls:"dim"});return pn=!1,$t(),r.startsWith("clue:")?r.slice(5):null}async function yo(){Xe=null,Ai(!1),Fr(),await St.load("yard",{props:[],cast:[],hotspots:[]},Nr());const n=!!De.setup;if(await it(`<div class="card title">
      <div class="brand">Family Deen</div>
      ${Jc([{src:li(Jt(sr.detectiveGirl)),cls:"main bob"},{icon:"magnifier",cls:"main"},{src:li(Jt(sr.detectiveBoy)),cls:"main bob"}],{tone:"dusk"})}
      <h1><span>Muslim</span> Detective</h1>
      <p class="tag-line">A detective team: one child, one grown-up.<br>Solve gentle mysteries, talk it through, learn from the Qur'an and Sunnah.</p>
      <div class="btns col">${Ze("play",`${Lt(n?"play":"magnifier")} ${n?"Continue":"Start a case"}`)}${Ze("guide",`${Lt("grownup")} Grown-up guide`,"blue")}</div>
    </div>`,{cls:"clear"})==="guide")return await Hc(),yo();n||await Gc(),Ji()}async function Hc(){await it(wr("How Muslim Detective works",`
    <p>You are the detective's partner. <b>The game does not replace you as the teacher</b>; it gives you moments to teach.</p>
    ${Zc([{icon:"magnifier",title:"Case & investigation",text:"your child taps people and objects to collect clues."},{icon:"talk",title:"Huddles",text:"the screen stops. You get a private card with a question to ask."},{icon:"quran",title:"Islamic evidence",text:"you get an ayah or hadith first, then reveal and explain it."},{icon:"compass",title:'Decision & "Why?"',text:"your child chooses, then explains out loud to you."},{icon:"hourglass",title:"Consequences",text:"you both watch what happens next, and what could have happened."}])}
    <p>Blue cards with <b>👤 For ${he(xt())}</b> are for you. When you see "Pass the device", hand it over. There are no "wrong" screens: gentle nudges only.</p>
    <p class="small">One case takes about 10–20 minutes. Progress is counted in <b>conversations had</b>, not points. The Qur'an meanings are from Sahih International; please check any source you are unsure about with a trusted teacher.</p>`,Ze("ok","Got it")),{cls:"dim"})}async function Gc(){let n=De.setup?.detective||"girl",e=De.setup?.parent||"Baba",t=De.setup?.name||"";const i=()=>`<div class="card setup"><div class="ribbon">Your detective team</div>
    <h3>Who is the detective?</h3>
    <div class="pick">
      <button class="who dkav pink ${n==="girl"?"on":""}" style="--i:0" data-act="det:girl"><span class="face"><img src="${li(Jt(sr.detectiveGirl))}" alt=""></span><b>Girl detective</b></button>
      <button class="who dkav blue ${n==="boy"?"on":""}" style="--i:1" data-act="det:boy"><span class="face"><img src="${li(Jt(sr.detectiveBoy))}" alt=""></span><b>Boy detective</b></button>
    </div>
    <label class="field">Detective name <input id="nameIn" maxlength="14" placeholder="${n==="boy"?"Idris":"Noor"}" value="${he(t)}"></label>
    <h3>Who is the grown-up partner?</h3>
    <div class="chips">${["Baba","Mama","Nenek","Atuk"].map(r=>`<button class="chip ${e===r?"on":""}" data-act="par:${r}">${r}</button>`).join("")}
      <input id="parIn" class="chip-in" maxlength="12" placeholder="Other…" value="${["Baba","Mama","Nenek","Atuk"].includes(e)?"":he(e)}"></div>
    <div class="btns">${Ze("go",`${Lt("map")} Open the case board`)}</div></div>`;for(;;){const r=await it(i(),{cls:"dim"});t=st("nameIn")?.value.trim()||t;const s=st("parIn")?.value.trim();if(s&&(e=s),r.startsWith("det:")){n=r.slice(4);continue}if(r.startsWith("par:")){e=r.slice(4),st("parIn")&&(st("parIn").value="");continue}if(r==="go")break}De.setup={detective:n,parent:e,name:t||(n==="boy"?"Idris":"Noor")},Sn()}async function Ji(){Xe=null,Ai(!1),Fr(),$t(),await St.load("yard",{props:[],cast:[],hotspots:[]},Nr());const n=Mr.filter(s=>De.cases[s.id]?.done).length,e={school:["school","gold"],friends:["friends","green"],family:["house","red"],money:["money","orange"],internet:["phone","blue"],worship:["mosque","teal"]};let t=0;const i=s=>{const[a,o]=e[s.id]||["star","sand"],l=Mr.filter(h=>h.category===s.id).map(h=>{const f=De.cases[h.id],d=De.current?.id===h.id,p=h.cast?.[0];return Lo({attr:"data-act",id:`case:${h.id}`,color:o,i:t++,done:!!f?.done,pic:p?li(Jt(p.look)):a,title:he(h.title),sub:`Case ${h.num}`,tag:f?.done?`${Lt("badge")} Solved`:d?"Resume":"New",tagKind:f?.done?"done":d?"now":"new",meta:f?.done?`${h.badge.icon} ${he(h.badge.name)}`:`${Lt("people")} ${h.cast?.length||0} people to talk to`})}),c=Sg.filter(h=>h.category===s.id).map(h=>Lo({color:o,i:t++,locked:!0,title:he(h.title),sub:"Coming soon"}));return`<div class="catcol"><h3>${Lt(a)} ${s.name}</h3>${l.join("")}${c.join("")}</div>`},r=await it(`<div class="card boardcard"><div class="ribbon">Case Board</div>
    ${Kc([["talk",`<b>${De.convos}</b> conversations had`,"blue"],["badge",`<b>${n}</b> / ${Mr.length} detective badges`,"gold"],["people",`${he(Gn())} &amp; ${he(xt())}`,"green"]])}
    <div class="cats">${Nc.map(i).join("")}</div>
    <div class="btns">${Ze("team",`${Lt("people")} Change team`,"gold")}${Ze("guide",`${Lt("grownup")} Grown-up guide`,"blue")}${Ze("reset","Reset","ghost")}</div></div>`,{cls:"dim board"});if(r==="team")return await Gc(),Ji();if(r==="guide")return await Hc(),Ji();if(r==="reset")return await it(`<div class="card small"><h2>Start over?</h2><p>This clears badges and conversations on this device.</p><div class="btns">${Ze("no","Keep my progress","gold")}${Ze("yes","Clear it")}</div></div>`,{cls:"dim"})==="yes"?(De=Za(),Sn(),yo()):Ji();r.startsWith("case:")&&Ag(Mr.find(s=>s.id===r.slice(5)))}const $i=["brief","investigate","contradiction","islamic","discuss","decision","chain","resolution","apply"],Vc=n=>{De.current.step=n,De.current.found=[...Xe.found],Sn()},ms=(n,e)=>n.cast.find(t=>t.id===e),yr=(n,e,t,i)=>{const r=ms(n,e);St.focus(e);const s=i||St.people[e]?.mood||"happy";return xo(r.name,r.look,t,s).then(()=>St.focus(null))},jl=n=>xo(`Detective ${Gn()}`,Nr(),n);async function Ag(n){$t();const e=De.current?.id===n.id?De.current:null;De.current=e||{id:n.id,step:"brief",found:[],convos:0,huddled:!1},Sn(),Xe={c:n,found:new Set(De.current.found),investigating:!1,islamicSeen:$i.indexOf(De.current.step)>$i.indexOf("islamic")},await St.load(n.scene,n,Nr()),Fr(),Ai(!0);let t=$i.indexOf(De.current.step);for(e&&t>0&&Pr("Welcome back, detectives! Picking up where you left off.");t<$i.length;t++)if(!Xe||Xe.c!==n||(Vc($i[t]),await Rg[$i[t]](n)===!1))return}const Rg={async brief(n){Tr("");const e=Nc.find(t=>t.id===n.category);return await it(`<div class="card casefile"><div class="ribbon">Case ${n.num}</div>
      <div class="stamp">${e.icon} ${e.name}</div>
      <h1>${he(n.title)}</h1><p class="lead">A new mystery for Detective ${he(Gn())} and ${he(xt())}.</p>
      <p class="theme">Today's big idea: <b>${he(n.theme)}</b></p>
      <div class="btns">${Ze("go","Open the case")}</div></div>`,{cls:"dim"}),$t(),await yr(n,n.brief.from,n.brief.lines),!0},async investigate(n){return Xe.found.size>=n.hotspots.length||(Xe.investigating=!0,Ai(!0),Tr("Tap a 💬 person to interview them, or a 🔍 thing to inspect it."),await new Promise(e=>{Xe.doneInvestigating=e}),Xe.investigating=!1,Tr(""),await it(`<div class="card small"><div class="big">🗂️</div><h2>All clues found!</h2>
      <p>Look through your casebook. Does somebody's story <b>not add up</b>?</p>${Ze("go","Let's find out")}</div>`,{cls:"dim"}),$t()),!0},async contradiction(n){const e=n.contradiction,t=ms(n,e.who);let i="";for(;;){const r=await it(`<div class="card court">
        <div class="ribbon">Hmm, wait a moment…</div>
        <div class="suspect"><img src="${li(Jt(t.look,{mood:"happy"}))}" alt=""><div class="bubble"><b>${he(t.name)} said:</b>“${he(Mn(e.statement))}”</div></div>
        ${i?`<p class="note">${i}</p>`:`<p class="lead">Can you find a clue that doesn't match this?</p>`}
        <div class="btns">${Ze("press","🗣️ Press: ask more","gold")}${Ze("present","📂 Present evidence")}${Ze("hint",`🙋 Ask ${he(xt())} for a hint`,"blue")}</div></div>`,{cls:"dim"});if($t(),r==="press"){await yr(n,e.who,e.press),i="Still the same story. Maybe a clue can help?";continue}if(r==="hint"){await ni("parent"),await it(wr("A gentle hint",`<p>Your detective is looking for the clue that contradicts ${he(t.name)}.</p><h4>You could ask:</h4>${ps(e.hint.ask)}<p class="tip">💡 ${he(Mn(e.hint.tip))}</p>`,Ze("ok","Done, pass it back"))),await ni("child"),$t(),i=`What did ${he(xt())} say? Take another look at your casebook.`;continue}const s=await zc(e.clue);if(!s)continue;if(e.answer.includes(s))break;zn.soft();const a=n.hotspots.find(o=>o.clue.id===s)?.clue;i=`Hmm, “${he(a?.name||"")}” doesn't quite clash with what ${he(t.name)} said. Try another clue, or ask ${he(xt())} for a hint!`}return zn.aha(),await it(`<div class="aha" data-act="ok"><div class="stampbig">It doesn't add up!</div></div>`,{cls:"clear",onRender:()=>setTimeout(()=>ar.querySelector(".aha")?.click(),1400/Ei)}).catch(()=>{}),$t(),await jl([e.aha]),await St.setMood(e.who,"worried"),await yr(n,e.who,e.confession,"worried"),!0},async islamic(n){const e=n.islamic;return await it(`<div class="card stop"><div class="big">✋</div><h2>Stop! Look up at ${he(xt())}.</h2>
      <p>${he(xt())} has some <b>Islamic evidence</b> for this case. It's a secret until they're ready!</p>${Ze("go",`Pass to ${he(xt())}`)}</div>`,{cls:"dim"}),await ni("parent"),await it(wr(`📖 Islamic Evidence Card: ${he(e.title)}`,`
      ${e.sources.map(i=>`<blockquote><cite>${i.kind==="quran"?"📖 Qur'an":"📜 Hadith"} · ${he(i.ref)}</cite>“${he(i.text)}”</blockquote>`).join("")}
      <h4>How you might explain it</h4><p>${he(Mn(e.explain))}</p>
      <p class="tip">📖 ${he(e.open)}</p>
      <h4>Questions to ask</h4>${ps(e.ask)}
      ${e.note?`<p class="small">ℹ️ ${he(e.note)}</p>`:""}`,Ze("ok","I'm ready: reveal it to my detective"))),await ni("child"),Xe.islamicSeen=!0,await it(`<div class="card reveal"><div class="ribbon gold">Islamic evidence unlocked!</div>
      <p class="lead">${he(xt())} will read this with you and explain it.</p>
      ${e.sources.map(i=>`<blockquote class="kid"><cite>${i.kind==="quran"?"📖 Qur'an":"📜 Hadith of the Prophet Muhammad ﷺ"} · ${he(i.ref)}</cite>“${he(i.text)}”</blockquote>`).join("")}
      <div class="btns">${Ze("talked","💬 We talked about it ✓")}</div></div>`,{cls:"dim"})==="talked"&&Xi("islamic"),$t(),!0},async discuss(n){return await it(`<div class="card talkcard"><div class="big">🗣️</div><div class="ribbon">Talk together</div>
      <h2>${he(Mn(n.discuss.prompt))}</h2><p class="small">${he(Mn(n.discuss.nudge))}</p>
      <div class="btns">${Ze("ok","💬 We talked ✓")}</div></div>`,{cls:"dim"}),Xi("discuss"),$t(),!0},async decision(n){const e=n.decision,t=ms(n,e.who),r=(await it(`<div class="card decide"><div class="ribbon">Your decision, Detective</div>
      <div class="suspect small"><img src="${li(Jt(t.look,{mood:"worried"}))}" alt=""><h2>${he(e.question)}</h2></div>
      <div class="options">${e.options.map(l=>`<button class="opt" data-act="opt:${l.id}"><span>${l.icon}</span>${he(l.text)}</button>`).join("")}</div></div>`,{cls:"dim"})).slice(4);De.current.decision=r,Sn();const s=e.options.find(l=>l.id===r);await it(`<div class="card why"><div class="big">🤔</div><div class="ribbon">Why?</div>
      <p class="chosen">You chose: <b>${s.icon} ${he(s.text)}</b></p>
      <h2>Tell ${he(xt())} out loud: <em>why</em> is that the best thing to do?</h2>
      <p class="small">Look up from the screen and explain. Take your time!</p>
      <div class="btns">${Ze("ok","🗣️ I explained ✓")}</div></div>`,{cls:"dim"}),Xi("why"),await ni("parent");const a=e.options.find(l=>l.id===e.best),o=r===e.best?'<p class="tip">🌟 Your detective chose the path the lesson points to. Ask them what might make it <b>hard</b> to do in real life.</p>':`<p class="tip">💛 Your detective chose a different path. Please don't say "wrong". Say "Let's see what happens next…" The consequence chain will show it, and then you can compare it with: <b>${he(a.text)}</b></p>`;return await it(wr(he(n.principle.title),`<p>Your detective chose: <b>${s.icon} ${he(s.text)}</b></p>
      <h4>Share the principle in your own words</h4>${ps(n.principle.points)}${o}`,Ze("ok","Reveal the principle"))),await ni("child"),await it(`<div class="card reveal"><div class="ribbon gold">${he(xt())} shares the principle</div>
      <ul class="principle">${n.principle.points.map(l=>`<li>${he(l)}</li>`).join("")}</ul>
      <div class="btns">${Ze("ok","What happens next? ▸")}</div></div>`,{cls:"dim"}),$t(),!0},async chain(n){const e=n.decision,t=ms(n,e.who),i=e.options.find(o=>o.id===De.current.decision)||e.options[0],r=i.id===e.best?e.options.find(o=>o.tone==="sad"):e.options.find(o=>o.id===e.best),s=(o,l)=>`<div class="card chaincard ${o.tone}"><div class="ribbon">${l}</div>
      <p class="lead">${o.icon} ${he(o.text)}</p>
      <div class="chain">${o.chain.map((c,h)=>`<div class="node" style="animation-delay:${(.2+h*.7)/Ei}s"><span>${c.icon}</span><p>${he(c.text)}</p></div>`).join('<i class="arrow"></i>')}</div>
      <div class="btns late" style="animation-delay:${(.4+o.chain.length*.7)/Ei}s">${Ze("next",o===i?`What if ${he(t.name)} chose differently? ▸`:"Compare them")}</div></div>`,a=o=>o.chain.forEach((l,c)=>setTimeout(()=>zn.chain(c),(.2+c*.7)*1e3/Ei));return a(i),await it(s(i,`If ${t.name} chooses this…`),{cls:"dim"}),a(r),await it(s(r,`What if… ${t.name} chose this instead?`),{cls:"dim"}),await it(`<div class="card talkcard"><div class="big">⚖️</div><div class="ribbon">Talk together</div>
      <h2>Which ending would you want, if you were ${he(t.name)}? Why?</h2>
      <div class="twin"><div class="mini ${i.tone}">${i.icon} ${he(i.chain.at(-1).text)}</div><div class="mini ${r.tone}">${r.icon} ${he(r.chain.at(-1).text)}</div></div>
      <div class="btns">${Ze("ok","💬 We talked ✓")}</div></div>`,{cls:"dim"}),Xi("compare"),$t(),!0},async resolution(n){const e=n.decision;await St.setMood(e.who,"happy");for(const i of n.cast)i.mood==="sad"&&await St.setMood(i.id,"happy");await jl(["Here is how the case ended…"]),await yr(n,e.who,n.resolution,"happy"),St.celebrate(),zn.badge(),De.cases[n.id]={...De.cases[n.id]||{},done:!0,decision:De.current.decision,convos:(De.cases[n.id]?.convos||0)+(De.current.convos||0),at:Date.now()},Sn();const t=De.current.convos||0;return await it(`<div class="card solved"><div class="ribbon gold">Case solved!</div>
      ${nh({medal:n.badge.icon,title:`${he(n.badge.name)} badge`,stars:t>=4?3:t>=2?2:1,count:t,countLabel:"conversations",text:`Detective ${he(Gn())} and ${he(xt())} talked it through together.`})}
      <div class="btns">${Ze("ok","One last thing ▸")}</div></div>`,{cls:"dim",onRender:i=>ih(i)}),!0},async apply(n){return await it(`<div class="card talkcard apply"><div class="big">🏡</div><div class="ribbon">${he(n.apply.title)}</div>
      <p class="lead">Pick one idea together (or make your own):</p>
      <ul class="principle">${n.apply.ideas.map(e=>`<li>${he(e)}</li>`).join("")}</ul>
      <div class="btns">${Ze("ok","🤝 We made a plan ✓")}</div></div>`,{cls:"dim"}),Xi("apply"),De.current=null,Sn(),Xe=null,Fr(),Ai(!1),Ji(),!1}};async function So(n){if(pn||rt.open||!Xe?.investigating)return;const e=Xe.c,t=e.hotspots.find(i=>i.id===n);if(t){if(pn=!0,Tr(""),await St.approach(n),t.kind==="person"?await yr(e,t.who,t.lines):(St.focus(n,.8),await xo(`Detective ${Gn()}`,Nr(),t.lines),St.focus(null)),!Xe){pn=!1;return}if(!Xe.found.has(t.clue.id)){Xe.found.add(t.clue.id),Vc("investigate"),St.sparkle(n),zn.clue(),Ai(!0),Pr(`📒 Added to casebook: ${t.clue.name}`);const i=st("bookBtn");i.classList.remove("bump"),i.offsetWidth,i.classList.add("bump"),!De.current.huddled&&Xe.found.size>=e.huddle.after&&await Cg(e)}pn=!1,Xe.found.size>=e.hotspots.length?Xe.doneInvestigating?.():Tr("Tap a 💬 person to interview them, or a 🔍 thing to inspect it.")}}async function Cg(n){await bg(500),await it(`<div class="card stop"><div class="big">✋</div><div class="ribbon">Detective huddle!</div>
    <h2>${he(Mn(n.huddle.child))}</h2><p>Stop and look up at ${he(xt())}.</p>${Ze("go",`Pass to ${he(xt())}`)}</div>`,{cls:"dim"}),await ni("parent"),await it(wr("Huddle guidance",`<p>Your detective has found ${Xe.found.size} clues. Pause here and talk.</p>
    <h4>Try asking</h4>${ps(n.huddle.parent.ask)}<p class="tip">💡 ${he(Mn(n.huddle.parent.tip))}</p>`,Ze("ok","We talked ✓, pass it back"))),Xi("huddle"),await ni("child"),$t(),De.current.huddled=!0,Sn()}Fc(De.muted);jc({muteBtn:De.muted?"mute":"sound",homeBtn:"home"});st("bookBtn").querySelector("span").innerHTML=Lt("book");requestAnimationFrame(Bc);window.game={get save(){return De},get active(){return Xe},world:St,advance:Mo,setSpeed:n=>{Ei=n},get dialogOpen(){return rt.open},interact:So,cases:Mr,ready:!0};yo();
