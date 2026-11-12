import{R as er,H as Ih,W as Hi,a as nn,s as Uh,w as Nh}from"./scroll-PR33qJYT.js";const gc=()=>matchMedia("(prefers-reduced-motion: reduce)").matches,Fh=n=>String(n??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),$={red:"#ea5d50",gold:"#f6cf5c",green:"#71cf6d",blue:"#6f95e6",teal:"#5fbfb0",purple:"#a98ae0",orange:"#f3a04c",pink:"#f08cb0",sand:"#e9d6a8",paper:"#fffaf0",skin:"#e0a878",skin2:"#c68a5e",wood:"#c98a4d",sky:"#bfe0f5"},Sn=(n,t,e)=>`<ellipse cx="${n}" cy="${e}" rx="1.7" ry="2.4" fill="currentColor" stroke="none"/><ellipse cx="${t}" cy="${e}" rx="1.7" ry="2.4" fill="currentColor" stroke="none"/>`,fs={fire:`<path d="M32 6c3 8 12 12 12 24a12 12 0 0 1-24 0c0-6 3-9 5-12 0 5 2 7 4 8 0-8-1-14 3-20z" fill="${$.orange}"/><path d="M32 22c2 4 6 6 6 11a6 6 0 0 1-12 0c0-4 3-6 6-11z" fill="${$.gold}" stroke="none"/><path d="M14 56h36" /><path d="M18 50l28 6M46 50l-28 6" stroke-width="4"/>`,moon:'<path d="M40 8a22 22 0 1 0 16 36A18 18 0 0 1 40 8z" fill="#fff2a8"/><circle cx="50" cy="16" r="2" fill="currentColor" stroke="none"/><circle cx="58" cy="30" r="1.6" fill="currentColor" stroke="none"/>',star:`<path d="M32 6l7.5 16 17.5 2-13 12 3.5 17L32 44l-15.5 9 3.5-17-13-12 17.5-2z" fill="${$.gold}"/>`,book:`<path d="M8 14q22-6 24 4v36q-2-8-24-4z" fill="${$.paper}"/><path d="M56 14q-22-6-24 4v36q2-8 24-4z" fill="${$.paper}"/><path d="M14 24l12 2M14 32l12 2M38 26l12-2M38 34l12-2" stroke-width="2.4"/>`,quran:`<path d="M10 42l22 10 22-10v-8l-22 10-22-10z" fill="${$.wood}"/><path d="M12 30q20-8 20 2v18q0-8-20-2z" fill="${$.green}"/><path d="M52 30q-20-8-20 2v18q0-8 20-2z" fill="${$.green}"/><path d="M18 36l8 1M18 42l8 1M38 37l8-1M38 43l8-1" stroke="#fff" stroke-width="2.4"/><path d="M32 12v6M24 16l3 4M40 16l-3 4" stroke-width="2.6"/>`,scroll:`<path d="M16 14h32v34H16z" fill="${$.paper}"/><rect x="10" y="10" width="44" height="8" rx="4" fill="${$.sand}"/><rect x="10" y="46" width="44" height="8" rx="4" fill="${$.sand}"/><path d="M24 26h16M24 34h12" stroke-width="2.6"/>`,map:`<path d="M8 16l16-6 16 6 16-6v38l-16 6-16-6-16 6z" fill="${$.sand}"/><path d="M24 10v38M40 16v38" stroke-width="2.4"/><path d="M14 36q6-10 14-4t12-8" stroke="${$.red}" stroke-dasharray="4 3" stroke-width="2.6"/><path d="M44 24l6 6M50 24l-6 6" stroke="${$.red}" stroke-width="3"/>`,chest:`<rect x="8" y="26" width="48" height="28" rx="4" fill="${$.wood}"/><path d="M8 30a24 14 0 0 1 48 0z" fill="${$.red}"/><rect x="26" y="26" width="12" height="12" rx="2" fill="${$.gold}"/><path d="M8 30h48" />`,key:`<circle cx="22" cy="24" r="12" fill="${$.gold}"/><circle cx="22" cy="24" r="4" fill="${$.paper}"/><path d="M32 30l20 20M46 44l6-6M40 50l6-6" stroke-width="5" stroke="currentColor"/><path d="M32 30l20 20M46 44l6-6M40 50l6-6" stroke="${$.gold}" stroke-width="2"/>`,lock:`<rect x="14" y="28" width="36" height="28" rx="6" fill="${$.gold}"/><path d="M20 28v-8a12 12 0 0 1 24 0v8" fill="none" stroke-width="5"/><circle cx="32" cy="40" r="4" fill="currentColor" stroke="none"/><path d="M32 42v8" stroke-width="3.5"/>`,unlock:`<rect x="14" y="28" width="36" height="28" rx="6" fill="${$.green}"/><path d="M20 28v-8a12 12 0 0 1 24 0" fill="none" stroke-width="5"/><circle cx="32" cy="40" r="4" fill="currentColor" stroke="none"/><path d="M32 42v8" stroke-width="3.5"/>`,house:`<path d="M6 32L32 8l26 24" fill="none" stroke-width="4"/><path d="M12 30v26h40V30" fill="${$.paper}"/><path d="M12 30L32 12l20 18z" fill="${$.red}"/><rect x="26" y="38" width="12" height="18" rx="2" fill="${$.wood}"/><rect x="42" y="36" width="8" height="8" fill="${$.sky}"/>`,door:`<rect x="16" y="8" width="32" height="50" rx="14" fill="${$.wood}"/><rect x="22" y="14" width="20" height="38" rx="8" fill="none" stroke-width="2.4"/><circle cx="40" cy="36" r="3" fill="${$.gold}"/><path d="M8 58h48" stroke-width="3.5"/>`,magnifier:`<circle cx="26" cy="26" r="16" fill="#dfe8ff"/><circle cx="26" cy="26" r="9" fill="none" stroke="#fff" stroke-width="3"/><path d="M38 38l16 16" stroke-width="8"/><path d="M38 38l16 16" stroke="${$.red}" stroke-width="3.5"/>`,badge:`<path d="M20 36l-6 22 18-8 18 8-6-22" fill="${$.red}"/><circle cx="32" cy="24" r="18" fill="${$.gold}"/><path d="M32 13l3.5 7 8 1-6 5.5 1.5 8-7-4-7 4 1.5-8-6-5.5 8-1z" fill="${$.paper}" stroke-width="2.2"/>`,tick:`<path d="M12 34l14 14 26-30" fill="none" stroke-width="11"/><path d="M12 34l14 14 26-30" fill="none" stroke="${$.green}" stroke-width="5"/>`,hand:`<path d="M22 30V14a4 4 0 0 1 8 0v14l2-18a4 4 0 0 1 8 0v18l2-10a4 4 0 0 1 8 0v18c0 12-8 20-18 20S14 50 14 38v-6a4 4 0 0 1 8 0z" fill="${$.skin}"/>`,talk:`<path d="M8 12h30a6 6 0 0 1 6 6v14a6 6 0 0 1-6 6H24l-10 8v-8H8a6 6 0 0 1-6-6V18a6 6 0 0 1 6-6z" fill="${$.blue}" transform="translate(4 0)"/><path d="M34 30h22a5 5 0 0 1 5 5v12a5 5 0 0 1-5 5h-4v7l-9-7H34a5 5 0 0 1-5-5V35a5 5 0 0 1 5-5z" fill="${$.gold}"/><path d="M16 22h16M16 28h10" stroke="#fff" stroke-width="2.6"/>`,ear:`<path d="M20 26a14 14 0 0 1 28 0c0 10-8 10-10 18-1 6-5 10-10 10-4 0-7-3-7-7" fill="${$.skin}"/><path d="M30 28a5 5 0 0 1 10 0c0 5-5 5-6 10" fill="none" stroke-width="2.6"/>`,eye:`<path d="M4 32q28-26 56 0Q32 58 4 32z" fill="#fff"/><circle cx="32" cy="32" r="9" fill="${$.teal}"/><circle cx="32" cy="32" r="4" fill="currentColor" stroke="none"/><circle cx="36" cy="28" r="1.8" fill="#fff" stroke="none"/>`,heart:`<path d="M32 56S6 40 6 22a13 13 0 0 1 26-4 13 13 0 0 1 26 4c0 18-26 34-26 34z" fill="${$.pink}"/><ellipse cx="20" cy="20" rx="4" ry="2.5" fill="#fff" stroke="none" transform="rotate(-30 20 20)"/>`,people:`<circle cx="20" cy="22" r="9" fill="${$.skin2}"/><path d="M4 56c0-12 7-18 16-18s16 6 16 18z" fill="${$.blue}"/><circle cx="44" cy="20" r="11" fill="${$.skin}"/><path d="M26 56c0-13 8-20 18-20s18 7 18 20z" fill="${$.green}"/>${Sn(17,23,22)}${Sn(40,48,20)}`,child:`<path d="M18 20a14 14 0 0 1 28 0v10H18z" fill="${$.purple}"/><circle cx="32" cy="24" r="12" fill="${$.skin}"/><path d="M12 58c0-12 9-20 20-20s20 8 20 20z" fill="${$.teal}"/>${Sn(27.5,36.5,24)}<path d="M28 30q4 3 8 0" fill="none" stroke-width="2.2"/>`,grownup:`<path d="M14 58c0-14 8-22 18-22s18 8 18 22z" fill="${$.blue}"/><circle cx="32" cy="20" r="13" fill="${$.skin2}"/><path d="M19 18a13 13 0 0 1 26 0v6q-13-6-26 0z" fill="${$.paper}"/>${Sn(27,37,22)}<path d="M27 28q5 4 10 0" fill="none" stroke-width="2.2"/>`,family:`<circle cx="18" cy="18" r="9" fill="${$.skin2}"/><path d="M4 50c0-12 6-18 14-18s14 6 14 18z" fill="${$.blue}"/><circle cx="46" cy="18" r="9" fill="${$.skin}"/><path d="M32 50c0-12 6-18 14-18s14 6 14 18z" fill="${$.pink}"/><circle cx="32" cy="36" r="7" fill="${$.skin}"/><path d="M22 60c0-9 4-14 10-14s10 5 10 14z" fill="${$.gold}"/>${Sn(15.5,20.5,18)}${Sn(43.5,48.5,18)}${Sn(30,34,36)}`,chalk:`<rect x="6" y="10" width="52" height="38" rx="3" fill="${$.wood}"/><rect x="11" y="15" width="42" height="28" fill="#3f6b58"/><path d="M18 24h14M18 32h22M18 38h10" stroke="#fff" stroke-width="2.4"/><path d="M20 48v10M44 48v10" stroke-width="3.5"/>`,camel:`<path d="M14 56V40q-6-8 2-16 6-6 14-4 6-10 14-8 6 2 8 8 4 2 4 8v8l-6 2v18" fill="${$.sand}"/><path d="M12 24q6-10 20-8" fill="none" stroke-width="2.4"/><path d="M26 40v16M40 40v16" stroke-width="3"/><circle cx="50" cy="26" r="1.8" fill="currentColor" stroke="none"/>`,dua:`<path d="M20 58V34q-10-2-12-14l6-10q6 0 8 8l4 8v32z" fill="${$.skin}"/><path d="M44 58V34q10-2 12-14l-6-10q-6 0-8 8l-4 8v32z" fill="${$.skin}"/><path d="M26 44h12" stroke-width="2"/>`,mosque:`<path d="M10 58V34h44v24z" fill="${$.paper}"/><path d="M14 34a18 14 0 0 1 36 0z" fill="${$.teal}"/><path d="M32 12v8" stroke-width="3"/><circle cx="32" cy="11" r="2.2" fill="${$.gold}"/><rect x="26" y="42" width="12" height="16" rx="6" fill="${$.wood}"/><path d="M6 58V22l4-6 4 6v36M50 58V22l4-6 4 6v36" fill="${$.paper}"/>`,compass:`<circle cx="32" cy="32" r="24" fill="${$.sand}"/><circle cx="32" cy="32" r="18" fill="${$.paper}"/><path d="M32 14l6 18-6 18-6-18z" fill="${$.red}"/><path d="M32 32l-6-0 6 18 6-18z" fill="#fff" stroke="none"/><circle cx="32" cy="32" r="3" fill="currentColor" stroke="none"/>`,puzzle:`<path d="M12 14h16a6 6 0 1 1 12 0h12v16a6 6 0 1 0 0 12v16H36a6 6 0 1 1-12 0H12V42a6 6 0 1 1 0-12z" fill="${$.purple}"/>`,lantern:`<path d="M22 20h20l4 28H18z" fill="#fff2a8"/><rect x="20" y="12" width="24" height="8" rx="3" fill="${$.wood}"/><path d="M32 12V6M18 48h28l-4 8H22z" fill="${$.wood}"/><path d="M32 28c2 3 4 5 4 8a4 4 0 0 1-8 0c0-3 2-5 4-8z" fill="${$.orange}" stroke-width="2"/>`,gem:`<path d="M16 12h32l10 14-26 30L6 26z" fill="${$.teal}"/><path d="M6 26h52M16 12l10 14 6-14 6 14 10-14M26 26l6 30 6-30" fill="none" stroke-width="2.4"/>`,sound:'<path d="M8 24h10l14-12v40L18 40H8z" fill="#fff"/><path d="M40 22a14 14 0 0 1 0 20M46 14a24 24 0 0 1 0 36" fill="none" stroke-width="4.5"/>',mute:`<path d="M8 24h10l14-12v40L18 40H8z" fill="#fff"/><path d="M40 24l16 16M56 24L40 40" stroke-width="6"/><path d="M40 24l16 16M56 24L40 40" stroke="${$.red}" stroke-width="2.8"/>`,help:`<circle cx="32" cy="32" r="24" fill="${$.blue}"/><path d="M24 26a8 8 0 1 1 12 7c-3 2-4 3-4 7" fill="none" stroke="#fff" stroke-width="5"/><circle cx="32" cy="47" r="3.2" fill="#fff" stroke="none"/>`,home:`<path d="M8 30L32 10l24 20" fill="none" stroke-width="4"/><path d="M14 28v26h36V28" fill="${$.paper}"/><rect x="26" y="38" width="12" height="16" rx="2" fill="${$.wood}"/>`,pause:'<rect x="14" y="12" width="12" height="40" rx="3" fill="#fff"/><rect x="38" y="12" width="12" height="40" rx="3" fill="#fff"/>',play:'<path d="M18 10l34 22-34 22z" fill="#fff"/>',back:'<path d="M38 12L16 32l22 20" fill="none" stroke-width="9"/><path d="M38 12L16 32l22 20" fill="none" stroke="#fff" stroke-width="4"/>',pencil:`<path d="M12 52l4-14 28-28 10 10-28 28z" fill="${$.gold}"/><path d="M40 14l10 10" /><path d="M16 38l10 10" /><path d="M12 52l4-14 10 10z" fill="${$.skin}"/>`,dice:`<rect x="10" y="10" width="44" height="44" rx="9" fill="#fff"/><circle cx="22" cy="22" r="4" fill="currentColor" stroke="none"/><circle cx="42" cy="22" r="4" fill="currentColor" stroke="none"/><circle cx="32" cy="32" r="4" fill="${$.red}" stroke="none"/><circle cx="22" cy="42" r="4" fill="currentColor" stroke="none"/><circle cx="42" cy="42" r="4" fill="currentColor" stroke="none"/>`,mic:`<rect x="22" y="6" width="20" height="32" rx="10" fill="${$.red}"/><path d="M14 30a18 18 0 0 0 36 0M32 48v10M22 58h20" fill="none" stroke-width="4"/>`,palette:`<path d="M32 8a24 24 0 1 0 8 46c4-2 2-6 0-8s-2-6 4-6h4a8 8 0 0 0 8-8A24 24 0 0 0 32 8z" fill="${$.paper}"/><circle cx="20" cy="26" r="4" fill="${$.red}" stroke="none"/><circle cx="30" cy="18" r="4" fill="${$.gold}" stroke="none"/><circle cx="42" cy="20" r="4" fill="${$.green}" stroke="none"/><circle cx="18" cy="38" r="4" fill="${$.blue}" stroke="none"/>`,mask:`<path d="M10 14q22 10 44 0v20a22 22 0 0 1-44 0z" fill="${$.purple}"/><path d="M20 28q4-4 8 0M36 28q4-4 8 0" fill="none" stroke-width="3"/><path d="M24 42q8 6 16 0" fill="none" stroke-width="3"/>`,question:`<circle cx="32" cy="32" r="24" fill="${$.gold}"/><path d="M24 26a8 8 0 1 1 12 7c-3 2-4 3-4 7" fill="none" stroke-width="5"/><circle cx="32" cy="47" r="3.2" fill="currentColor" stroke="none"/>`,ban:`<circle cx="32" cy="32" r="24" fill="#fff"/><circle cx="32" cy="32" r="16" fill="none" stroke="${$.red}" stroke-width="6"/><path d="M21 21l22 22" stroke="${$.red}" stroke-width="6"/>`,sun:`<circle cx="32" cy="32" r="14" fill="${$.gold}"/><path d="M32 6v8M32 50v8M6 32h8M50 32h8M13 13l6 6M45 45l6 6M13 51l6-6M45 19l6-6" stroke-width="4"/>`,cloud:'<path d="M18 48a10 10 0 0 1-2-20 14 14 0 0 1 27-4 10 10 0 0 1 5 24z" fill="#fff"/>',water:'<path d="M32 6c8 12 16 20 16 32a16 16 0 0 1-32 0C16 26 24 18 32 6z" fill="#78c4dc"/><ellipse cx="25" cy="38" rx="3" ry="6" fill="#e9f7fb" stroke="none"/>',brick:`<rect x="6" y="14" width="24" height="12" fill="${$.wood}"/><rect x="34" y="14" width="24" height="12" fill="${$.orange}"/><rect x="18" y="30" width="26" height="12" fill="${$.orange}"/><rect x="6" y="30" width="8" height="12" fill="${$.wood}"/><rect x="48" y="30" width="10" height="12" fill="${$.wood}"/><rect x="6" y="46" width="24" height="12" fill="${$.orange}"/><rect x="34" y="46" width="24" height="12" fill="${$.wood}"/>`,bee:`<ellipse cx="32" cy="36" rx="16" ry="12" fill="${$.gold}"/><path d="M26 25v22M34 25v22M42 28v16" stroke-width="3.5"/><ellipse cx="22" cy="20" rx="10" ry="6" fill="#fff" transform="rotate(-25 22 20)"/><ellipse cx="42" cy="20" rx="10" ry="6" fill="#fff" transform="rotate(25 42 20)"/><circle cx="14" cy="36" r="6" fill="${$.gold}"/><circle cx="12" cy="35" r="1.6" fill="currentColor" stroke="none"/>`,leaf:`<path d="M12 52C12 26 30 10 54 10c0 26-16 44-42 42z" fill="${$.green}"/><path d="M14 50L46 18" fill="none" stroke-width="2.8"/>`,school:`<path d="M8 58V28l24-14 24 14v30z" fill="${$.paper}"/><path d="M8 28l24-14 24 14" fill="none" stroke-width="4"/><rect x="26" y="40" width="12" height="18" rx="2" fill="${$.wood}"/><circle cx="32" cy="30" r="5" fill="${$.gold}"/><path d="M32 8v8" stroke-width="3"/><path d="M32 8h10l-10 5z" fill="${$.red}"/>`,friends:`<circle cx="22" cy="22" r="10" fill="${$.skin}"/><circle cx="44" cy="24" r="9" fill="${$.skin2}"/><path d="M6 56c0-12 7-18 16-18s16 6 16 18z" fill="${$.green}"/><path d="M30 56c0-11 6-16 14-16s14 5 14 16z" fill="${$.orange}"/>${Sn(19,25,22)}${Sn(41.5,46.5,24)}<path d="M19 28q3 2 6 0M41 29q3 2 6 0" fill="none" stroke-width="2"/>`,money:`<ellipse cx="32" cy="40" rx="22" ry="10" fill="${$.gold}"/><ellipse cx="32" cy="32" rx="22" ry="10" fill="${$.gold}"/><ellipse cx="32" cy="24" rx="22" ry="10" fill="#fff2a8"/><ellipse cx="32" cy="24" rx="12" ry="5" fill="none" stroke-width="2.2"/>`,phone:`<rect x="18" y="6" width="28" height="52" rx="6" fill="#fff"/><rect x="22" y="12" width="20" height="36" rx="2" fill="${$.sky}"/><circle cx="32" cy="53" r="2.2" fill="currentColor" stroke="none"/>`,sparkle:`<path d="M26 6l5 15 15 5-15 5-5 15-5-15-15-5 15-5z" fill="${$.gold}"/><path d="M48 34l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#fff"/>`,crystal:`<path d="M20 48l12-40 12 40z" fill="${$.purple}"/><path d="M14 56h36l-6-8H20z" fill="${$.blue}"/><path d="M32 8v40" stroke-width="2"/>`,seedling:`<path d="M12 56q20-6 40 0z" fill="${$.wood}"/><path d="M32 52V30" stroke-width="4"/><path d="M32 36q-2-14-16-14 2 14 16 14z" fill="${$.green}"/><path d="M32 30q2-14 16-14-2 14-16 14z" fill="#b4de94"/>`,rehal:`<path d="M8 48l24-16 24 16-24 10z" fill="${$.wood}"/><path d="M14 30q18-8 18 0v14q0-8-18 0z" fill="${$.paper}"/><path d="M50 30q-18-8-18 0v14q0-8 18 0z" fill="${$.paper}"/>`,juz:`<path d="M12 10h36a4 4 0 0 1 4 4v38a4 4 0 0 1-4 4H12z" fill="${$.teal}"/><path d="M12 10v46M20 10v46" stroke-width="2.4"/><rect x="28" y="22" width="18" height="12" rx="2" fill="${$.paper}"/>`,flag:`<path d="M16 58V8" stroke-width="5"/><path d="M18 10h30l-6 12 6 12H18z" fill="${$.red}"/>`,stop:`<path d="M20 8h24l16 16v24L44 60H20L4 44V20z" fill="${$.red}"/><path d="M20 32h24" stroke="#fff" stroke-width="6"/>`,shield:`<path d="M32 6l22 8v18c0 14-10 22-22 28C20 54 10 46 10 32V14z" fill="${$.blue}"/><path d="M22 32l7 7 13-14" fill="none" stroke="#fff" stroke-width="5"/>`,trophy:`<path d="M18 8h28v14a14 14 0 0 1-28 0z" fill="${$.gold}"/><path d="M18 14H8a10 10 0 0 0 10 10M46 14h10a10 10 0 0 1-10 10" fill="none" stroke-width="3.5"/><path d="M28 36h8v8h-8z" fill="${$.gold}"/><rect x="18" y="44" width="28" height="10" rx="3" fill="${$.wood}"/>`,hourglass:`<path d="M16 8h32l-12 24 12 24H16l12-24z" fill="#fff"/><path d="M22 14h20l-10 14zM24 52h16l-8-10z" fill="${$.sand}" stroke="none"/><path d="M12 8h40M12 56h40" stroke-width="4"/>`},Ns=new Map;function Ue(n,t=""){const e=n+"|"+t;return Ns.has(e)||Ns.set(e,`<span class="dk-ico ${t}" data-ic="${n}"><svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">${fs[n]||fs.star}</svg></span>`),Ns.get(e)}const Oh=n=>n in fs;function kh(n){for(const[t,e]of Object.entries(n)){const i=document.getElementById(t);i&&(i.classList.add("dk-iconbtn"),i.innerHTML=Ue(e))}}const Bh=n=>n?n.startsWith("data:")||n.startsWith("blob:")||n.startsWith("/")||n.startsWith("http")?`<img src="${n}" alt="" ${n.startsWith("data:image/svg")?'class="contain"':""}>`:Oh(n)?Ue(n):`<span class="glyph">${n}</span>`:"";function zh(n){const t=n.tag?`<span class="tag ${n.tagKind||""}">${n.tag}</span>`:"",e=n.pips?`<span class="dkpips">${Array.from({length:n.pips[1]},(s,o)=>`<i class="${o<n.pips[0]?"on":""}"></i>`).join("")}</span>`:"",i=n.meta||e?`<div class="meta">${e}${n.meta||""}</div>`:"",r=`${n.attr?`${n.attr}="${Fh(n.id)}"`:""} ${n.data||""} style="--i:${n.i||0}${n.colorHex?`;--c:${n.colorHex}`:""}${n.darkHex?`;--cd:${n.darkHex}`:""}" ${n.locked?"disabled":""}`;return`<button class="dkcard ${n.color||""} ${n.locked?"locked":""} ${n.done?"done":""} ${n.cls||""}" ${r}>
    ${t}<span class="pic ${n.tall?"tall":""}">${Bh(n.locked&&!n.keepPic?"lock":n.pic)}</span>
    <h3>${n.title}</h3>${n.sub?`<span class="sub">${n.sub}</span>`:""}${i}</button>`}const Hh=n=>`<div class="dksteps">${n.map((t,e)=>`<div class="dkstep" style="--i:${e}">${Ue(t.icon||"hand")}${t.title?`<b>${t.title}</b>`:""}<p>${t.text}</p></div>`).join("")}</div>`,Gh=(n,t,e="",i=0)=>`<span class="dkchip ${e}" style="--i:${i}">${n?Ue(n):""}${t}</span>`,Vh=n=>`<div class="dkstats">${n.map((t,e)=>Gh(t[0],t[1],t[2]||"",e)).join("")}</div>`;function Wh(n,{tone:t="",glow:e=!1,sparkles:i=0}={}){const r=i?`<span class="sparkles">${Array.from({length:i},(s,o)=>`<i style="--i:${o};left:${8+o*37%84}%;top:${10+o*53%55}%"></i>`).join("")}</span>`:"";return`<div class="dkhero ${t?"dk-"+t:""}">${r}${e?'<span class="glow"></span>':""}${n.map((s,o)=>s.src?`<img src="${s.src}" alt="" class="${s.cls||""}" style="--i:${o}">`:Ue(s.icon,s.cls||"").replace("style=","").replace('class="dk-ico',`style="--i:${o}" class="dk-ico`)).join("")}</div>`}const _c=()=>{let n=document.getElementById("dkfx");return n||(n=document.createElement("div"),n.id="dkfx",document.body.appendChild(n)),n},nl=["#f6cf5c","#ea5d50","#71cf6d","#6f95e6","#f08cb0","#5fbfb0","#fff"];function Xh(n,t,{n:e=28,spread:i=180,up:r=130}={}){if(gc())return;const s=_c();for(let o=0;o<e;o++){const a=document.createElement("i");a.className="dkconf";const l=-Math.PI/2+(Math.random()-.5)*2.2,c=i*(.4+Math.random()*.6);a.style.cssText=`left:${n}px;top:${t}px;background:${nl[o%nl.length]};--dx:${Math.cos(l)*c}px;--dy:${Math.sin(l)*c*.5+r}px;--rot:${(Math.random()-.5)*900}deg;--kt:${.9+Math.random()*.7}s;transform:rotate(${Math.random()*360}deg)`,s.appendChild(a),setTimeout(()=>a.remove(),1700)}}function $h(n,t,e=6){if(!gc())for(let i=0;i<e;i++){const r=document.createElement("i");r.className="dkstar",r.innerHTML=`<svg viewBox="0 0 64 64" fill="none" stroke="#6b2f1a" stroke-width="3" stroke-linejoin="round">${fs.star}</svg>`,r.style.cssText=`left:${n}px;top:${t}px;--dx:${(Math.random()-.5)*140}px;--dy:${-40-Math.random()*80}px;--kt:${.7+Math.random()*.5}s`,_c().appendChild(r),setTimeout(()=>r.remove(),1300)}}function vc(n,t=!1){var s;const e=(s=n==null?void 0:n.getBoundingClientRect)==null?void 0:s.call(n);if(!e)return;const i=e.left+e.width/2,r=e.top+e.height/2;Xh(i,r,{n:t?44:20,spread:t?280:150}),t&&$h(i,r,8)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const va="170",qh=0,il=1,Yh=2,xc=1,Zh=2,Rn=3,jn=0,$e=1,Xe=2,qn=0,Gi=1,yo=2,rl=3,sl=4,Jh=5,ui=100,jh=101,Kh=102,Qh=103,tu=104,eu=200,nu=201,iu=202,ru=203,So=204,Eo=205,su=206,ou=207,au=208,lu=209,cu=210,hu=211,uu=212,fu=213,du=214,bo=0,wo=1,To=2,$i=3,Ao=4,Ro=5,Co=6,Po=7,Mc=0,pu=1,mu=2,Yn=0,gu=1,_u=2,vu=3,xu=4,Mu=5,yu=6,Su=7,yc=300,qi=301,Yi=302,Lo=303,Do=304,Es=306,ds=1e3,di=1001,Io=1002,Ce=1003,Eu=1004,Nr=1005,_n=1006,Fs=1007,pi=1008,In=1009,Sc=1010,Ec=1011,yr=1012,xa=1013,vi=1014,Cn=1015,xi=1016,Ma=1017,ya=1018,Zi=1020,bc=35902,wc=1021,Tc=1022,un=1023,Ac=1024,Rc=1025,Vi=1026,Ji=1027,bs=1028,Sa=1029,Cc=1030,Ea=1031,ba=1033,ss=33776,os=33777,as=33778,ls=33779,Uo=35840,No=35841,Fo=35842,Oo=35843,ko=36196,Bo=37492,zo=37496,Ho=37808,Go=37809,Vo=37810,Wo=37811,Xo=37812,$o=37813,qo=37814,Yo=37815,Zo=37816,Jo=37817,jo=37818,Ko=37819,Qo=37820,ta=37821,cs=36492,ea=36494,na=36495,Pc=36283,ia=36284,ra=36285,sa=36286,bu=3200,wu=3201,Lc=0,Tu=1,$n="",We="srgb",nr="srgb-linear",ws="linear",he="srgb",bi=7680,ol=519,Au=512,Ru=513,Cu=514,Dc=515,Pu=516,Lu=517,Du=518,Iu=519,al=35044,ll="300 es",Pn=2e3,ps=2001;class ir{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Os=Math.PI/180,oa=180/Math.PI;function rr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]).toLowerCase()}function Re(n,t,e){return Math.max(t,Math.min(e,n))}function Uu(n,t){return(n%t+t)%t}function ks(n,t,e){return(1-e)*n+e*t}function hr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ve(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,i,r,s,o,a,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],y=r[1],x=r[4],v=r[7],P=r[2],w=r[5],R=r[8];return s[0]=o*_+a*y+l*P,s[3]=o*m+a*x+l*w,s[6]=o*p+a*v+l*R,s[1]=c*_+h*y+u*P,s[4]=c*m+h*x+u*w,s[7]=c*p+h*v+u*R,s[2]=f*_+d*y+g*P,s[5]=f*m+d*x+g*w,s[8]=f*p+d*v+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,g=e*u+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(r*c-h*i)*_,t[2]=(a*i-r*o)*_,t[3]=f*_,t[4]=(h*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=d*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Bs.makeScale(t,e)),this}rotate(t){return this.premultiply(Bs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Bs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bs=new $t;function Ic(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ms(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Nu(){const n=ms("canvas");return n.style.display="block",n}const cl={};function mr(n){n in cl||(cl[n]=!0,console.warn(n))}function Fu(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Ou(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ku(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ee={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(n.r=Ln(n.r),n.g=Ln(n.g),n.b=Ln(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(n.r=Wi(n.r),n.g=Wi(n.g),n.b=Wi(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===$n?ws:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ln(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const hl=[.64,.33,.3,.6,.15,.06],ul=[.2126,.7152,.0722],fl=[.3127,.329],dl=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pl=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ee.define({[nr]:{primaries:hl,whitePoint:fl,transfer:ws,toXYZ:dl,fromXYZ:pl,luminanceCoefficients:ul,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:hl,whitePoint:fl,transfer:he,toXYZ:dl,fromXYZ:pl,luminanceCoefficients:ul,outputColorSpaceConfig:{drawingBufferColorSpace:We}}});let wi;class Bu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{wi===void 0&&(wi=ms("canvas")),wi.width=t.width,wi.height=t.height;const i=wi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ms("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ln(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ln(e[i]/255)*255):e[i]=Ln(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zu=0;class Uc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=rr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(zs(r[o].image)):s.push(zs(r[o]))}else s=zs(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function zs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hu=0;class Fe extends ir{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,i=di,r=di,s=_n,o=pi,a=un,l=In,c=Fe.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=rr(),this.name="",this.source=new Uc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ds:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case Io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ds:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case Io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=yc;Fe.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,i=0,r=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(d+1)/2,P=(p+1)/2,w=(h+f)/4,R=(u+_)/4,L=(g+m)/4;return x>v&&x>P?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=R/i):v>P?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=w/r,s=L/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=R/s,r=L/s),this.set(i,r,s,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gu extends ir{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Fe(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Uc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends Gu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Nc extends Fe{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vu extends Fe{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ei{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-a;const p=l*f+c*d+h*g+u*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const P=Math.sqrt(x),w=Math.atan2(P,p*y);m=Math.sin(m*w)/P,a=Math.sin(a*w)/P}const v=a*y;if(l=l*m+f*v,c=c*m+d*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),u=a(s/2),f=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>u){const d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-i-u);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ml.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ml.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),h=2*(a*e-s*r),u=2*(s*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Hs.copy(this).projectOnVector(t),this.sub(Hs)}reflect(t){return this.sub(Hs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hs=new D,ml=new ei;class Tr{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,on):on.fromBufferAttribute(s,o),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fr.copy(i.boundingBox)),Fr.applyMatrix4(t.matrixWorld),this.union(Fr)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),Or.subVectors(this.max,ur),Ti.subVectors(t.a,ur),Ai.subVectors(t.b,ur),Ri.subVectors(t.c,ur),kn.subVectors(Ai,Ti),Bn.subVectors(Ri,Ai),ii.subVectors(Ti,Ri);let e=[0,-kn.z,kn.y,0,-Bn.z,Bn.y,0,-ii.z,ii.y,kn.z,0,-kn.x,Bn.z,0,-Bn.x,ii.z,0,-ii.x,-kn.y,kn.x,0,-Bn.y,Bn.x,0,-ii.y,ii.x,0];return!Gs(e,Ti,Ai,Ri,Or)||(e=[1,0,0,0,1,0,0,0,1],!Gs(e,Ti,Ai,Ri,Or))?!1:(kr.crossVectors(kn,Bn),e=[kr.x,kr.y,kr.z],Gs(e,Ti,Ai,Ri,Or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const En=[new D,new D,new D,new D,new D,new D,new D,new D],on=new D,Fr=new Tr,Ti=new D,Ai=new D,Ri=new D,kn=new D,Bn=new D,ii=new D,ur=new D,Or=new D,kr=new D,ri=new D;function Gs(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ri.fromArray(n,s);const a=r.x*Math.abs(ri.x)+r.y*Math.abs(ri.y)+r.z*Math.abs(ri.z),l=t.dot(ri),c=e.dot(ri),h=i.dot(ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Wu=new Tr,fr=new D,Vs=new D;class wa{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Wu.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);const e=fr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(fr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(Vs)),this.expandByPoint(fr.copy(t.center).sub(Vs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new D,Ws=new D,Br=new D,zn=new D,Xs=new D,zr=new D,$s=new D;class Fc{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Ws.copy(t).add(e).multiplyScalar(.5),Br.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(Ws);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Br),a=zn.dot(this.direction),l=-zn.dot(Br),c=zn.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ws).addScaledVector(Br,f),d}intersectSphere(t,e){bn.subVectors(t.center,this.origin);const i=bn.dot(this.direction),r=bn.dot(bn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,i,r,s){Xs.subVectors(e,t),zr.subVectors(i,t),$s.crossVectors(Xs,zr);let o=this.direction.dot($s),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,t);const l=a*this.direction.dot(zr.crossVectors(zn,zr));if(l<0)return null;const c=a*this.direction.dot(Xs.cross(zn));if(c<0||l+c>o)return null;const h=-a*zn.dot($s);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,i,r,s,o,a,l,c,h,u,f,d,g,_,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,h,u,f,d,g,_,m)}set(t,e,i,r,s,o,a,l,c,h,u,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Ci.setFromMatrixColumn(t,0).length(),s=1/Ci.setFromMatrixColumn(t,1).length(),o=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xu,t,$u)}lookAt(t,e,i){const r=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Hn.crossVectors(i,Ze),Hn.lengthSq()===0&&(Math.abs(i.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Hn.crossVectors(i,Ze)),Hn.normalize(),Hr.crossVectors(Ze,Hn),r[0]=Hn.x,r[4]=Hr.x,r[8]=Ze.x,r[1]=Hn.y,r[5]=Hr.y,r[9]=Ze.y,r[2]=Hn.z,r[6]=Hr.z,r[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],x=i[7],v=i[11],P=i[15],w=r[0],R=r[4],L=r[8],E=r[12],M=r[1],A=r[5],O=r[9],F=r[13],k=r[2],X=r[6],B=r[10],nt=r[14],W=r[3],dt=r[7],Mt=r[11],Rt=r[15];return s[0]=o*w+a*M+l*k+c*W,s[4]=o*R+a*A+l*X+c*dt,s[8]=o*L+a*O+l*B+c*Mt,s[12]=o*E+a*F+l*nt+c*Rt,s[1]=h*w+u*M+f*k+d*W,s[5]=h*R+u*A+f*X+d*dt,s[9]=h*L+u*O+f*B+d*Mt,s[13]=h*E+u*F+f*nt+d*Rt,s[2]=g*w+_*M+m*k+p*W,s[6]=g*R+_*A+m*X+p*dt,s[10]=g*L+_*O+m*B+p*Mt,s[14]=g*E+_*F+m*nt+p*Rt,s[3]=y*w+x*M+v*k+P*W,s[7]=y*R+x*A+v*X+P*dt,s[11]=y*L+x*O+v*B+P*Mt,s[15]=y*E+x*F+v*nt+P*Rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*u-r*c*u-s*a*f+i*c*f+r*a*d-i*l*d)+_*(+e*l*d-e*c*f+s*o*f-r*o*d+r*c*h-s*l*h)+m*(+e*c*u-e*a*d-s*o*u+i*o*d+s*a*h-i*c*h)+p*(-r*a*h-e*l*u+e*a*f+r*o*u-i*o*f+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=u*m*c-_*f*c+_*l*d-a*m*d-u*l*p+a*f*p,x=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,v=h*_*c-g*u*c+g*a*d-o*_*d-h*a*p+o*u*p,P=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,w=e*y+i*x+r*v+s*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return t[0]=y*R,t[1]=(_*f*s-u*m*s-_*r*d+i*m*d+u*r*p-i*f*p)*R,t[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*R,t[3]=(u*l*s-a*f*s-u*r*c+i*f*c+a*r*d-i*l*d)*R,t[4]=x*R,t[5]=(h*m*s-g*f*s+g*r*d-e*m*d-h*r*p+e*f*p)*R,t[6]=(g*l*s-o*m*s-g*r*c+e*m*c+o*r*p-e*l*p)*R,t[7]=(o*f*s-h*l*s+h*r*c-e*f*c-o*r*d+e*l*d)*R,t[8]=v*R,t[9]=(g*u*s-h*_*s-g*i*d+e*_*d+h*i*p-e*u*p)*R,t[10]=(o*_*s-g*a*s+g*i*c-e*_*c-o*i*p+e*a*p)*R,t[11]=(h*a*s-o*u*s-h*i*c+e*u*c+o*i*d-e*a*d)*R,t[12]=P*R,t[13]=(h*_*r-g*u*r+g*i*f-e*_*f-h*i*m+e*u*m)*R,t[14]=(g*a*r-o*_*r-g*i*l+e*_*l+o*i*m-e*a*m)*R,t[15]=(o*u*r-h*a*r+h*i*l-e*u*l-o*i*f+e*a*f)*R,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,g=s*u,_=o*h,m=o*u,p=a*u,y=l*c,x=l*h,v=l*u,P=i.x,w=i.y,R=i.z;return r[0]=(1-(_+p))*P,r[1]=(d+v)*P,r[2]=(g-x)*P,r[3]=0,r[4]=(d-v)*w,r[5]=(1-(f+p))*w,r[6]=(m+y)*w,r[7]=0,r[8]=(g+x)*R,r[9]=(m-y)*R,r[10]=(1-(f+_))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Ci.set(r[0],r[1],r[2]).length();const o=Ci.set(r[4],r[5],r[6]).length(),a=Ci.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],an.copy(this);const c=1/s,h=1/o,u=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,e.setFromRotationMatrix(an),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Pn){const l=this.elements,c=2*s/(e-t),h=2*s/(i-r),u=(e+t)/(e-t),f=(i+r)/(i-r);let d,g;if(a===Pn)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ps)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Pn){const l=this.elements,c=1/(e-t),h=1/(i-r),u=1/(o-s),f=(e+t)*c,d=(i+r)*h;let g,_;if(a===Pn)g=(o+s)*u,_=-2*u;else if(a===ps)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ci=new D,an=new _e,Xu=new D(0,0,0),$u=new D(1,1,1),Hn=new D,Hr=new D,Ze=new D,gl=new _e,_l=new ei;class vn{constructor(t=0,e=0,i=0,r=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return gl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _l.setFromEuler(this),this.setFromQuaternion(_l,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class Ta{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let qu=0;const vl=new D,Pi=new ei,wn=new _e,Gr=new D,dr=new D,Yu=new D,Zu=new ei,xl=new D(1,0,0),Ml=new D(0,1,0),yl=new D(0,0,1),Sl={type:"added"},Ju={type:"removed"},Li={type:"childadded",child:null},qs={type:"childremoved",child:null};class Pe extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new D,e=new vn,i=new ei,r=new D(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _e},normalMatrix:{value:new $t}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(xl,t)}rotateY(t){return this.rotateOnAxis(Ml,t)}rotateZ(t){return this.rotateOnAxis(yl,t)}translateOnAxis(t,e){return vl.copy(t).applyQuaternion(this.quaternion),this.position.add(vl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xl,t)}translateY(t){return this.translateOnAxis(Ml,t)}translateZ(t){return this.translateOnAxis(yl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Gr.copy(t):Gr.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(dr,Gr,this.up):wn.lookAt(Gr,dr,this.up),this.quaternion.setFromRotationMatrix(wn),r&&(wn.extractRotation(r.matrixWorld),Pi.setFromRotationMatrix(wn),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sl),Li.child=t,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ju),qs.child=t,this.dispatchEvent(qs),qs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sl),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,t,Yu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Zu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Pe.DEFAULT_UP=new D(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new D,Tn=new D,Ys=new D,An=new D,Di=new D,Ii=new D,El=new D,Zs=new D,Js=new D,js=new D,Ks=new Me,Qs=new Me,to=new Me;class hn{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),ln.subVectors(t,e),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){ln.subVectors(r,e),Tn.subVectors(i,e),Ys.subVectors(t,e);const o=ln.dot(ln),a=ln.dot(Tn),l=ln.dot(Ys),c=Tn.dot(Tn),h=Tn.dot(Ys),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,An.x),l.addScaledVector(o,An.y),l.addScaledVector(a,An.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return Ks.setScalar(0),Qs.setScalar(0),to.setScalar(0),Ks.fromBufferAttribute(t,e),Qs.fromBufferAttribute(t,i),to.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Ks,s.x),o.addScaledVector(Qs,s.y),o.addScaledVector(to,s.z),o}static isFrontFacing(t,e,i,r){return ln.subVectors(i,e),Tn.subVectors(t,e),ln.cross(Tn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),ln.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return hn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Di.subVectors(r,i),Ii.subVectors(s,i),Zs.subVectors(t,i);const l=Di.dot(Zs),c=Ii.dot(Zs);if(l<=0&&c<=0)return e.copy(i);Js.subVectors(t,r);const h=Di.dot(Js),u=Ii.dot(Js);if(h>=0&&u<=h)return e.copy(r);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Di,o);js.subVectors(t,s);const d=Di.dot(js),g=Ii.dot(js);if(g>=0&&d<=g)return e.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Ii,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return El.subVectors(s,r),a=(u-h)/(u-h+(d-g)),e.copy(r).addScaledVector(El,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(i).addScaledVector(Di,o).addScaledVector(Ii,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function eo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=ee.workingColorSpace){return this.r=t,this.g=e,this.b=i,ee.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=ee.workingColorSpace){if(t=Uu(t,1),e=Re(e,0,1),i=Re(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=eo(o,s,t+1/3),this.g=eo(o,s,t),this.b=eo(o,s,t-1/3)}return ee.toWorkingColorSpace(this,r),this}setStyle(t,e=We){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){const i=Oc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return ee.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Re(Ie.r*255,0,255))*65536+Math.round(Re(Ie.g*255,0,255))*256+Math.round(Re(Ie.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Ie.copy(this),e);const i=Ie.r,r=Ie.g,s=Ie.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=We){ee.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,i=Ie.g,r=Ie.b;return t!==We?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(Vr);const i=ks(Gn.h,Vr.h,e),r=ks(Gn.s,Vr.s,e),s=ks(Gn.l,Vr.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new Qt;Qt.NAMES=Oc;let ju=0;class Ar extends ir{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=rr(),this.name="",this.blending=Gi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=So,this.blendDst=Eo,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ol,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(i.blending=this.blending),this.side!==jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==So&&(i.blendSrc=this.blendSrc),this.blendDst!==Eo&&(i.blendDst=this.blendDst),this.blendEquation!==ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ol&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fe extends Ar{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new D,Wr=new at;class fn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=al,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Wr.fromBufferAttribute(this,e),Wr.applyMatrix3(t),this.setXY(e,Wr.x,Wr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=hr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),r=Ve(r,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==al&&(t.usage=this.usage),t}}class kc extends fn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Bc extends fn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class oe extends fn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Ku=0;const tn=new _e,no=new Pe,Ui=new D,Je=new Tr,pr=new Tr,we=new D;class Oe extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ic(t)?Bc:kc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $t().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,i){return tn.makeTranslation(t,e,i),this.applyMatrix4(tn),this}scale(t,e,i){return tn.makeScale(t,e,i),this.applyMatrix4(tn),this}lookAt(t){return no.lookAt(t),no.updateMatrix(),this.applyMatrix4(no.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oe(i,3))}else{for(let i=0,r=e.count;i<r;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Je.setFromBufferAttribute(s),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(Je.min,pr.min),Je.expandByPoint(we),we.addVectors(Je.max,pr.max),Je.expandByPoint(we)):(Je.expandByPoint(pr.min),Je.expandByPoint(pr.max))}Je.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)we.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(we));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)we.fromBufferAttribute(a,c),l&&(Ui.fromBufferAttribute(t,c),we.add(Ui)),r=Math.max(r,i.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new D,l[L]=new D;const c=new D,h=new D,u=new D,f=new at,d=new at,g=new at,_=new D,m=new D;function p(L,E,M){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,E),u.fromBufferAttribute(i,M),f.fromBufferAttribute(s,L),d.fromBufferAttribute(s,E),g.fromBufferAttribute(s,M),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const A=1/(d.x*g.y-g.x*d.y);isFinite(A)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(A),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(A),a[L].add(_),a[E].add(_),a[M].add(_),l[L].add(m),l[E].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let L=0,E=y.length;L<E;++L){const M=y[L],A=M.start,O=M.count;for(let F=A,k=A+O;F<k;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const x=new D,v=new D,P=new D,w=new D;function R(L){P.fromBufferAttribute(r,L),w.copy(P);const E=a[L];x.copy(E),x.sub(P.multiplyScalar(P.dot(E))).normalize(),v.crossVectors(w,E);const A=v.dot(l[L])<0?-1:1;o.setXYZW(L,x.x,x.y,x.z,A)}for(let L=0,E=y.length;L<E;++L){const M=y[L],A=M.start,O=M.count;for(let F=A,k=A+O;F<k;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new fn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bl=new _e,si=new Fc,Xr=new wa,wl=new D,$r=new D,qr=new D,Yr=new D,io=new D,Zr=new D,Tl=new D,Jr=new D;class Jt extends Pe{constructor(t=new Oe,e=new fe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Zr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(io.fromBufferAttribute(u,t),o?Zr.addScaledVector(io,h):Zr.addScaledVector(io.sub(e),h))}e.add(Zr)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(s),si.copy(t.ray).recast(t.near),!(Xr.containsPoint(si.origin)===!1&&(si.intersectSphere(Xr,wl)===null||si.origin.distanceToSquared(wl)>(t.far-t.near)**2))&&(bl.copy(s).invert(),si.copy(t.ray).applyMatrix4(bl),!(i.boundingBox!==null&&si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,P=x;v<P;v+=3){const w=a.getX(v),R=a.getX(v+1),L=a.getX(v+2);r=jr(this,p,t,i,c,h,u,w,R,L),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);r=jr(this,o,t,i,c,h,u,y,x,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,P=x;v<P;v+=3){const w=v,R=v+1,L=v+2;r=jr(this,p,t,i,c,h,u,w,R,L),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=m,x=m+1,v=m+2;r=jr(this,o,t,i,c,h,u,y,x,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Qu(n,t,e,i,r,s,o,a){let l;if(t.side===$e?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===jn,a),l===null)return null;Jr.copy(a),Jr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Jr);return c<e.near||c>e.far?null:{distance:c,point:Jr.clone(),object:n}}function jr(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,$r),n.getVertexPosition(l,qr),n.getVertexPosition(c,Yr);const h=Qu(n,t,e,i,$r,qr,Yr,Tl);if(h){const u=new D;hn.getBarycoord(Tl,$r,qr,Yr,u),r&&(h.uv=hn.getInterpolatedAttribute(r,a,l,c,u,new at)),s&&(h.uv1=hn.getInterpolatedAttribute(s,a,l,c,u,new at)),o&&(h.normal=hn.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};hn.getNormal($r,qr,Yr,f.normal),h.face=f,h.barycoord=u}return h}class qe extends Oe{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function g(_,m,p,y,x,v,P,w,R,L,E){const M=v/R,A=P/L,O=v/2,F=P/2,k=w/2,X=R+1,B=L+1;let nt=0,W=0;const dt=new D;for(let Mt=0;Mt<B;Mt++){const Rt=Mt*A-F;for(let zt=0;zt<X;zt++){const ie=zt*M-O;dt[_]=ie*y,dt[m]=Rt*x,dt[p]=k,c.push(dt.x,dt.y,dt.z),dt[_]=0,dt[m]=0,dt[p]=w>0?1:-1,h.push(dt.x,dt.y,dt.z),u.push(zt/R),u.push(1-Mt/L),nt+=1}}for(let Mt=0;Mt<L;Mt++)for(let Rt=0;Rt<R;Rt++){const zt=f+Rt+X*Mt,ie=f+Rt+X*(Mt+1),Y=f+(Rt+1)+X*(Mt+1),ot=f+(Rt+1)+X*Mt;l.push(zt,ie,ot),l.push(ie,Y,ot),W+=6}a.addGroup(d,W,E),d+=W,f+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ji(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function ke(n){const t={};for(let e=0;e<n.length;e++){const i=ji(n[e]);for(const r in i)t[r]=i[r]}return t}function tf(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function zc(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const ef={clone:ji,merge:ke};var nf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends Ar{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nf,this.fragmentShader=rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ji(t.uniforms),this.uniformsGroups=tf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Hc extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new D,Al=new at,Rl=new at;class cn extends Hc{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=oa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,Al,Rl),e.subVectors(Rl,Al)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Os*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ni=-90,Fi=1;class sf extends Pe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new cn(Ni,Fi,t,e);r.layers=this.layers,this.add(r);const s=new cn(Ni,Fi,t,e);s.layers=this.layers,this.add(s);const o=new cn(Ni,Fi,t,e);o.layers=this.layers,this.add(o);const a=new cn(Ni,Fi,t,e);a.layers=this.layers,this.add(a);const l=new cn(Ni,Fi,t,e);l.layers=this.layers,this.add(l);const c=new cn(Ni,Fi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ps)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Gc extends Fe{constructor(t,e,i,r,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:qi,super(t,e,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class of extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Gc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_n}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new qe(5,5,5),s=new dn({name:"CubemapFromEquirect",uniforms:ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$e,blending:qn});s.uniforms.tEquirect.value=e;const o=new Jt(r,s),a=e.minFilter;return e.minFilter===pi&&(e.minFilter=_n),new sf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const ro=new D,af=new D,lf=new $t;class ci{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=ro.subVectors(i,e).cross(af.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ro),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||lf.getNormalMatrix(t),r=this.coplanarPoint(ro).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new wa,Kr=new D;class Aa{constructor(t=new ci,e=new ci,i=new ci,r=new ci,s=new ci,o=new ci){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Pn){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],f=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],y=r[13],x=r[14],v=r[15];if(i[0].setComponents(l-s,f-c,m-d,v-p).normalize(),i[1].setComponents(l+s,f+c,m+d,v+p).normalize(),i[2].setComponents(l+o,f+h,m+g,v+y).normalize(),i[3].setComponents(l-o,f-h,m-g,v-y).normalize(),i[4].setComponents(l-a,f-u,m-_,v-x).normalize(),e===Pn)i[5].setComponents(l+a,f+u,m+_,v+x).normalize();else if(e===ps)i[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Kr.x=r.normal.x>0?t.max.x:t.min.x,Kr.y=r.normal.y>0?t.max.y:t.min.y,Kr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vc(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function cf(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class He extends Oe{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const y=p*f-o;for(let x=0;x<c;x++){const v=x*u-s;g.push(v,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const x=y+c*p,v=y+c*(p+1),P=y+1+c*(p+1),w=y+1+c*p;d.push(x,v,w),d.push(v,P,w)}this.setIndex(d),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new He(t.width,t.height,t.widthSegments,t.heightSegments)}}var hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uf=`#ifdef USE_ALPHAHASH
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
#endif`,ff=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,df=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gf=`#ifdef USE_AOMAP
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
#endif`,_f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vf=`#ifdef USE_BATCHING
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
#endif`,xf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ef=`#ifdef USE_IRIDESCENCE
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
#endif`,bf=`#ifdef USE_BUMPMAP
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
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
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
#endif`,If=`#define PI 3.141592653589793
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
} // validated`,Uf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nf=`vec3 transformedNormal = objectNormal;
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
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Of=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jf=`#ifdef USE_GRADIENTMAP
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
}`,Kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ed=`uniform bool receiveShadow;
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
#endif`,nd=`#ifdef USE_ENVMAP
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
#endif`,id=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ad=`PhysicalMaterial material;
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
#endif`,ld=`struct PhysicalMaterial {
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
}`,cd=`
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
#endif`,hd=`#if defined( RE_IndirectDiffuse )
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
#endif`,ud=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,md=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_d=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xd=`#if defined( USE_POINTS_UV )
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
#endif`,Md=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ed=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wd=`#ifdef USE_MORPHTARGETS
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
#endif`,Td=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ad=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ld=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dd=`#ifdef USE_NORMALMAP
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
#endif`,Id=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ud=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Od=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$d=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yd=`float getShadowMask() {
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
}`,Zd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jd=`#ifdef USE_SKINNING
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
#endif`,jd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kd=`#ifdef USE_SKINNING
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
#endif`,Qd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ep=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,np=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ip=`#ifdef USE_TRANSMISSION
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
#endif`,rp=`#ifdef USE_TRANSMISSION
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
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hp=`uniform sampler2D t2D;
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
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`#include <common>
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
}`,gp=`#if DEPTH_PACKING == 3200
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
}`,_p=`#define DISTANCE
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
}`,vp=`#define DISTANCE
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
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`uniform float scale;
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
}`,Sp=`uniform vec3 diffuse;
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
}`,Ep=`#include <common>
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
}`,bp=`uniform vec3 diffuse;
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
}`,wp=`#define LAMBERT
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
}`,Tp=`#define LAMBERT
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
}`,Ap=`#define MATCAP
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
}`,Rp=`#define MATCAP
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
}`,Cp=`#define NORMAL
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
}`,Pp=`#define NORMAL
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
}`,Lp=`#define PHONG
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
}`,Dp=`#define PHONG
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
}`,Ip=`#define STANDARD
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
}`,Up=`#define STANDARD
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
}`,Np=`#define TOON
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
}`,Fp=`#define TOON
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
}`,Op=`uniform float size;
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
}`,kp=`uniform vec3 diffuse;
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
}`,Bp=`#include <common>
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
}`,zp=`uniform vec3 color;
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
}`,Hp=`uniform float rotation;
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:hf,alphahash_pars_fragment:uf,alphamap_fragment:ff,alphamap_pars_fragment:df,alphatest_fragment:pf,alphatest_pars_fragment:mf,aomap_fragment:gf,aomap_pars_fragment:_f,batching_pars_vertex:vf,batching_vertex:xf,begin_vertex:Mf,beginnormal_vertex:yf,bsdfs:Sf,iridescence_fragment:Ef,bumpmap_pars_fragment:bf,clipping_planes_fragment:wf,clipping_planes_pars_fragment:Tf,clipping_planes_pars_vertex:Af,clipping_planes_vertex:Rf,color_fragment:Cf,color_pars_fragment:Pf,color_pars_vertex:Lf,color_vertex:Df,common:If,cube_uv_reflection_fragment:Uf,defaultnormal_vertex:Nf,displacementmap_pars_vertex:Ff,displacementmap_vertex:Of,emissivemap_fragment:kf,emissivemap_pars_fragment:Bf,colorspace_fragment:zf,colorspace_pars_fragment:Hf,envmap_fragment:Gf,envmap_common_pars_fragment:Vf,envmap_pars_fragment:Wf,envmap_pars_vertex:Xf,envmap_physical_pars_fragment:nd,envmap_vertex:$f,fog_vertex:qf,fog_pars_vertex:Yf,fog_fragment:Zf,fog_pars_fragment:Jf,gradientmap_pars_fragment:jf,lightmap_pars_fragment:Kf,lights_lambert_fragment:Qf,lights_lambert_pars_fragment:td,lights_pars_begin:ed,lights_toon_fragment:id,lights_toon_pars_fragment:rd,lights_phong_fragment:sd,lights_phong_pars_fragment:od,lights_physical_fragment:ad,lights_physical_pars_fragment:ld,lights_fragment_begin:cd,lights_fragment_maps:hd,lights_fragment_end:ud,logdepthbuf_fragment:fd,logdepthbuf_pars_fragment:dd,logdepthbuf_pars_vertex:pd,logdepthbuf_vertex:md,map_fragment:gd,map_pars_fragment:_d,map_particle_fragment:vd,map_particle_pars_fragment:xd,metalnessmap_fragment:Md,metalnessmap_pars_fragment:yd,morphinstance_vertex:Sd,morphcolor_vertex:Ed,morphnormal_vertex:bd,morphtarget_pars_vertex:wd,morphtarget_vertex:Td,normal_fragment_begin:Ad,normal_fragment_maps:Rd,normal_pars_fragment:Cd,normal_pars_vertex:Pd,normal_vertex:Ld,normalmap_pars_fragment:Dd,clearcoat_normal_fragment_begin:Id,clearcoat_normal_fragment_maps:Ud,clearcoat_pars_fragment:Nd,iridescence_pars_fragment:Fd,opaque_fragment:Od,packing:kd,premultiplied_alpha_fragment:Bd,project_vertex:zd,dithering_fragment:Hd,dithering_pars_fragment:Gd,roughnessmap_fragment:Vd,roughnessmap_pars_fragment:Wd,shadowmap_pars_fragment:Xd,shadowmap_pars_vertex:$d,shadowmap_vertex:qd,shadowmask_pars_fragment:Yd,skinbase_vertex:Zd,skinning_pars_vertex:Jd,skinning_vertex:jd,skinnormal_vertex:Kd,specularmap_fragment:Qd,specularmap_pars_fragment:tp,tonemapping_fragment:ep,tonemapping_pars_fragment:np,transmission_fragment:ip,transmission_pars_fragment:rp,uv_pars_fragment:sp,uv_pars_vertex:op,uv_vertex:ap,worldpos_vertex:lp,background_vert:cp,background_frag:hp,backgroundCube_vert:up,backgroundCube_frag:fp,cube_vert:dp,cube_frag:pp,depth_vert:mp,depth_frag:gp,distanceRGBA_vert:_p,distanceRGBA_frag:vp,equirect_vert:xp,equirect_frag:Mp,linedashed_vert:yp,linedashed_frag:Sp,meshbasic_vert:Ep,meshbasic_frag:bp,meshlambert_vert:wp,meshlambert_frag:Tp,meshmatcap_vert:Ap,meshmatcap_frag:Rp,meshnormal_vert:Cp,meshnormal_frag:Pp,meshphong_vert:Lp,meshphong_frag:Dp,meshphysical_vert:Ip,meshphysical_frag:Up,meshtoon_vert:Np,meshtoon_frag:Fp,points_vert:Op,points_frag:kp,shadow_vert:Bp,shadow_frag:zp,sprite_vert:Hp,sprite_frag:Gp},_t={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},gn={basic:{uniforms:ke([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:ke([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:ke([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:ke([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:ke([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:ke([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:ke([_t.points,_t.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:ke([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:ke([_t.common,_t.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:ke([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:ke([_t.sprite,_t.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:ke([_t.common,_t.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:ke([_t.lights,_t.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};gn.physical={uniforms:ke([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Qr={r:0,b:0,g:0},ai=new vn,Vp=new _e;function Wp(n,t,e,i,r,s,o){const a=new Qt(0);let l=s===!0?0:1,c,h,u=null,f=0,d=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const v=g(y);v===null?p(a,l):v&&v.isColor&&(p(v,1),x=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===Es)?(h===void 0&&(h=new Jt(new qe(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:ji(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ai.copy(x.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vp.makeRotationFromEuler(ai)),h.material.toneMapped=ee.getTransfer(v.colorSpace)!==he,(u!==v||f!==v.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Jt(new He(2,2),new dn({name:"BackgroundMaterial",uniforms:ji(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ee.getTransfer(v.colorSpace)!==he,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB(Qr,zc(n)),i.buffers.color.setClear(Qr.r,Qr.g,Qr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m}}function Xp(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(M,A,O,F,k){let X=!1;const B=u(F,O,A);s!==B&&(s=B,c(s.object)),X=d(M,F,O,k),X&&g(M,F,O,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(M,A,O,F),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,A,O){const F=O.wireframe===!0;let k=i[M.id];k===void 0&&(k={},i[M.id]=k);let X=k[A.id];X===void 0&&(X={},k[A.id]=X);let B=X[F];return B===void 0&&(B=f(l()),X[F]=B),B}function f(M){const A=[],O=[],F=[];for(let k=0;k<e;k++)A[k]=0,O[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:O,attributeDivisors:F,object:M,attributes:{},index:null}}function d(M,A,O,F){const k=s.attributes,X=A.attributes;let B=0;const nt=O.getAttributes();for(const W in nt)if(nt[W].location>=0){const Mt=k[W];let Rt=X[W];if(Rt===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(Rt=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(Rt=M.instanceColor)),Mt===void 0||Mt.attribute!==Rt||Rt&&Mt.data!==Rt.data)return!0;B++}return s.attributesNum!==B||s.index!==F}function g(M,A,O,F){const k={},X=A.attributes;let B=0;const nt=O.getAttributes();for(const W in nt)if(nt[W].location>=0){let Mt=X[W];Mt===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor));const Rt={};Rt.attribute=Mt,Mt&&Mt.data&&(Rt.data=Mt.data),k[W]=Rt,B++}s.attributes=k,s.attributesNum=B,s.index=F}function _(){const M=s.newAttributes;for(let A=0,O=M.length;A<O;A++)M[A]=0}function m(M){p(M,0)}function p(M,A){const O=s.newAttributes,F=s.enabledAttributes,k=s.attributeDivisors;O[M]=1,F[M]===0&&(n.enableVertexAttribArray(M),F[M]=1),k[M]!==A&&(n.vertexAttribDivisor(M,A),k[M]=A)}function y(){const M=s.newAttributes,A=s.enabledAttributes;for(let O=0,F=A.length;O<F;O++)A[O]!==M[O]&&(n.disableVertexAttribArray(O),A[O]=0)}function x(M,A,O,F,k,X,B){B===!0?n.vertexAttribIPointer(M,A,O,k,X):n.vertexAttribPointer(M,A,O,F,k,X)}function v(M,A,O,F){_();const k=F.attributes,X=O.getAttributes(),B=A.defaultAttributeValues;for(const nt in X){const W=X[nt];if(W.location>=0){let dt=k[nt];if(dt===void 0&&(nt==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),nt==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor)),dt!==void 0){const Mt=dt.normalized,Rt=dt.itemSize,zt=t.get(dt);if(zt===void 0)continue;const ie=zt.buffer,Y=zt.type,ot=zt.bytesPerElement,Lt=Y===n.INT||Y===n.UNSIGNED_INT||dt.gpuType===xa;if(dt.isInterleavedBufferAttribute){const ht=dt.data,tt=ht.stride,mt=dt.offset;if(ht.isInstancedInterleavedBuffer){for(let rt=0;rt<W.locationSize;rt++)p(W.location+rt,ht.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let rt=0;rt<W.locationSize;rt++)m(W.location+rt);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let rt=0;rt<W.locationSize;rt++)x(W.location+rt,Rt/W.locationSize,Y,Mt,tt*ot,(mt+Rt/W.locationSize*rt)*ot,Lt)}else{if(dt.isInstancedBufferAttribute){for(let ht=0;ht<W.locationSize;ht++)p(W.location+ht,dt.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ht=0;ht<W.locationSize;ht++)m(W.location+ht);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let ht=0;ht<W.locationSize;ht++)x(W.location+ht,Rt/W.locationSize,Y,Mt,Rt*ot,Rt/W.locationSize*ht*ot,Lt)}}else if(B!==void 0){const Mt=B[nt];if(Mt!==void 0)switch(Mt.length){case 2:n.vertexAttrib2fv(W.location,Mt);break;case 3:n.vertexAttrib3fv(W.location,Mt);break;case 4:n.vertexAttrib4fv(W.location,Mt);break;default:n.vertexAttrib1fv(W.location,Mt)}}}}y()}function P(){L();for(const M in i){const A=i[M];for(const O in A){const F=A[O];for(const k in F)h(F[k].object),delete F[k];delete A[O]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const A=i[M.id];for(const O in A){const F=A[O];for(const k in F)h(F[k].object),delete F[k];delete A[O]}delete i[M.id]}function R(M){for(const A in i){const O=i[A];if(O[M.id]===void 0)continue;const F=O[M.id];for(const k in F)h(F[k].object),delete F[k];delete O[M.id]}}function L(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function $p(n,t,e){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,i,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function qp(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==un&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==In&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Cn&&!L)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:P,maxSamples:w}}function Yp(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new ci,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||r;return r=f,i=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const y=s?0:i,x=y*4;let v=p.clippingState||null;l.value=v,v=h(g,f,x,d);for(let P=0;P!==x;++P)v[P]=e[P];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Zp(n){let t=new WeakMap;function e(o,a){return a===Lo?o.mapping=qi:a===Do&&(o.mapping=Yi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Lo||a===Do)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new of(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Ts extends Hc{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Bi=4,Cl=[.125,.215,.35,.446,.526,.582],fi=20,so=new Ts,Pl=new Qt;let oo=null,ao=0,lo=0,co=!1;const hi=(1+Math.sqrt(5))/2,Oi=1/hi,Ll=[new D(-hi,Oi,0),new D(hi,Oi,0),new D(-Oi,0,hi),new D(Oi,0,hi),new D(0,hi,-Oi),new D(0,hi,Oi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Dl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){oo=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(oo,ao,lo),this._renderer.xr.enabled=co,t.scissorTest=!1,ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oo=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:xi,format:un,colorSpace:nr,depthBuffer:!1},r=Il(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Il(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jp(s)),this._blurMaterial=jp(s,t,e)}return r}_compileMaterial(t){const e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,so)}_sceneToCubeUV(t,e,i,r){const a=new cn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Pl),h.toneMapping=Yn,h.autoClear=!1;const d=new fe({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),g=new Jt(new qe,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Pl),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;ts(r,y*x,p>2?x:0,x,x),h.setRenderTarget(r),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===qi||t.mapping===Yi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ul());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;ts(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,so)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ll[(r-s-1)%Ll.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Jt(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*fi-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):fi;m>fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fi}`);const p=[];let y=0;for(let R=0;R<fi;++R){const L=R/_,E=Math.exp(-L*L/2);p.push(E),R===0?y+=E:R<m&&(y+=2*E)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const v=this._sizeLods[r],P=3*v*(r>x-Bi?r-x+Bi:0),w=4*(this._cubeSize-v);ts(e,P,w,3*v,2*v),l.setRenderTarget(e),l.render(u,so)}}function Jp(n){const t=[],e=[],i=[];let r=n;const s=n-Bi+1+Cl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Bi?l=Cl[o-n+Bi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),x=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let w=0;w<d;w++){const R=w%3*2/3-1,L=w>2?0:-1,E=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];y.set(E,_*g*w),x.set(f,m*g*w);const M=[w,w,w,w,w,w];v.set(M,p*g*w)}const P=new Oe;P.setAttribute("position",new fn(y,_)),P.setAttribute("uv",new fn(x,m)),P.setAttribute("faceIndex",new fn(v,p)),t.push(P),r>Bi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Il(n,t,e){const i=new Un(n,t,e);return i.texture.mapping=Es,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ts(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function jp(n,t,e){const i=new Float32Array(fi),r=new D(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ra(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Ul(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ra(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Nl(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Ra(){return`

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
	`}function Kp(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Lo||l===Do,h=l===qi||l===Yi;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Dl(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&r(d)?(e===null&&(e=new Dl(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Qp(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&mr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function tm(n,t,e,i){const r={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let x=0,v=y.length;x<v;x+=3){const P=y[x+0],w=y[x+1],R=y[x+2];f.push(P,w,w,R,R,P)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const P=x+0,w=x+1,R=x+2;f.push(P,w,w,R,R,P)}}else return;const m=new(Ic(f)?Bc:kc)(f,1);m.version=_;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function em(n,t,e){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*o),e.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,f*o,g),e.update(d,i,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function u(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*_[y];e.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function nm(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function im(n,t,e){const i=new WeakMap,r=new Me;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let E=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let v=a.attributes.position.count*x,P=1;v>t.maxTextureSize&&(P=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const w=new Float32Array(v*P*4*u),R=new Nc(w,v,P,u);R.type=Cn,R.needsUpdate=!0;const L=x*4;for(let M=0;M<u;M++){const A=m[M],O=p[M],F=y[M],k=v*P*4*M;for(let X=0;X<A.count;X++){const B=X*L;d===!0&&(r.fromBufferAttribute(A,X),w[k+B+0]=r.x,w[k+B+1]=r.y,w[k+B+2]=r.z,w[k+B+3]=0),g===!0&&(r.fromBufferAttribute(O,X),w[k+B+4]=r.x,w[k+B+5]=r.y,w[k+B+6]=r.z,w[k+B+7]=0),_===!0&&(r.fromBufferAttribute(F,X),w[k+B+8]=r.x,w[k+B+9]=r.y,w[k+B+10]=r.z,w[k+B+11]=F.itemSize===4?r.w:1)}}f={count:u,texture:R,size:new at(v,P)},i.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function rm(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Wc extends Fe{constructor(t,e,i,r,s,o,a,l,c,h=Vi){if(h!==Vi&&h!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Vi&&(i=vi),i===void 0&&h===Ji&&(i=Zi),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ce,this.minFilter=l!==void 0?l:Ce,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Xc=new Fe,Fl=new Wc(1,1),$c=new Nc,qc=new Vu,Yc=new Gc,Ol=[],kl=[],Bl=new Float32Array(16),zl=new Float32Array(9),Hl=new Float32Array(4);function sr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Ol[r];if(s===void 0&&(s=new Float32Array(r),Ol[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Ee(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function As(n,t){let e=kl[t];e===void 0&&(e=new Int32Array(t),kl[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function sm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function om(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2fv(this.addr,t),be(e,t)}}function am(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;n.uniform3fv(this.addr,t),be(e,t)}}function lm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4fv(this.addr,t),be(e,t)}}function cm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,i))return;Hl.set(i),n.uniformMatrix2fv(this.addr,!1,Hl),be(e,i)}}function hm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,i))return;zl.set(i),n.uniformMatrix3fv(this.addr,!1,zl),be(e,i)}}function um(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,i))return;Bl.set(i),n.uniformMatrix4fv(this.addr,!1,Bl),be(e,i)}}function fm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function dm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2iv(this.addr,t),be(e,t)}}function pm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3iv(this.addr,t),be(e,t)}}function mm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4iv(this.addr,t),be(e,t)}}function gm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function _m(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2uiv(this.addr,t),be(e,t)}}function vm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3uiv(this.addr,t),be(e,t)}}function xm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4uiv(this.addr,t),be(e,t)}}function Mm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Fl.compareFunction=Dc,s=Fl):s=Xc,e.setTexture2D(t||s,r)}function ym(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||qc,r)}function Sm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Yc,r)}function Em(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||$c,r)}function bm(n){switch(n){case 5126:return sm;case 35664:return om;case 35665:return am;case 35666:return lm;case 35674:return cm;case 35675:return hm;case 35676:return um;case 5124:case 35670:return fm;case 35667:case 35671:return dm;case 35668:case 35672:return pm;case 35669:case 35673:return mm;case 5125:return gm;case 36294:return _m;case 36295:return vm;case 36296:return xm;case 35678:case 36198:case 36298:case 36306:case 35682:return Mm;case 35679:case 36299:case 36307:return ym;case 35680:case 36300:case 36308:case 36293:return Sm;case 36289:case 36303:case 36311:case 36292:return Em}}function wm(n,t){n.uniform1fv(this.addr,t)}function Tm(n,t){const e=sr(t,this.size,2);n.uniform2fv(this.addr,e)}function Am(n,t){const e=sr(t,this.size,3);n.uniform3fv(this.addr,e)}function Rm(n,t){const e=sr(t,this.size,4);n.uniform4fv(this.addr,e)}function Cm(n,t){const e=sr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Pm(n,t){const e=sr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Lm(n,t){const e=sr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Dm(n,t){n.uniform1iv(this.addr,t)}function Im(n,t){n.uniform2iv(this.addr,t)}function Um(n,t){n.uniform3iv(this.addr,t)}function Nm(n,t){n.uniform4iv(this.addr,t)}function Fm(n,t){n.uniform1uiv(this.addr,t)}function Om(n,t){n.uniform2uiv(this.addr,t)}function km(n,t){n.uniform3uiv(this.addr,t)}function Bm(n,t){n.uniform4uiv(this.addr,t)}function zm(n,t,e){const i=this.cache,r=t.length,s=As(e,r);Ee(i,s)||(n.uniform1iv(this.addr,s),be(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Xc,s[o])}function Hm(n,t,e){const i=this.cache,r=t.length,s=As(e,r);Ee(i,s)||(n.uniform1iv(this.addr,s),be(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||qc,s[o])}function Gm(n,t,e){const i=this.cache,r=t.length,s=As(e,r);Ee(i,s)||(n.uniform1iv(this.addr,s),be(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Yc,s[o])}function Vm(n,t,e){const i=this.cache,r=t.length,s=As(e,r);Ee(i,s)||(n.uniform1iv(this.addr,s),be(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||$c,s[o])}function Wm(n){switch(n){case 5126:return wm;case 35664:return Tm;case 35665:return Am;case 35666:return Rm;case 35674:return Cm;case 35675:return Pm;case 35676:return Lm;case 5124:case 35670:return Dm;case 35667:case 35671:return Im;case 35668:case 35672:return Um;case 35669:case 35673:return Nm;case 5125:return Fm;case 36294:return Om;case 36295:return km;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Vm}}class Xm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=bm(e.type)}}class $m{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Wm(e.type)}}class qm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const ho=/(\w+)(\])?(\[|\.)?/g;function Gl(n,t){n.seq.push(t),n.map[t.id]=t}function Ym(n,t,e){const i=n.name,r=i.length;for(ho.lastIndex=0;;){const s=ho.exec(i),o=ho.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Gl(e,c===void 0?new Xm(a,n,t):new $m(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new qm(a),Gl(e,u)),e=u}}}class hs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Ym(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Vl(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Zm=37297;let Jm=0;function jm(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Wl=new $t;function Km(n){ee._getMatrix(Wl,ee.workingColorSpace,n);const t=`mat3( ${Wl.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(n)){case ws:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Xl(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+jm(n.getShaderSource(t),o)}else return r}function Qm(n,t){const e=Km(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function t0(n,t){let e;switch(t){case gu:e="Linear";break;case _u:e="Reinhard";break;case vu:e="Cineon";break;case xu:e="ACESFilmic";break;case yu:e="AgX";break;case Su:e="Neutral";break;case Mu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const es=new D;function e0(){ee.getLuminanceCoefficients(es);const n=es.x.toFixed(4),t=es.y.toFixed(4),e=es.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function i0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function r0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function gr(n){return n!==""}function $l(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ql(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const s0=/^[ \t]*#include +<([\w\d./]+)>/gm;function aa(n){return n.replace(s0,a0)}const o0=new Map;function a0(n,t){let e=Yt[t];if(e===void 0){const i=o0.get(t);if(i!==void 0)e=Yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return aa(e)}const l0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yl(n){return n.replace(l0,c0)}function c0(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zl(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function h0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function u0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qi:case Yi:t="ENVMAP_TYPE_CUBE";break;case Es:t="ENVMAP_TYPE_CUBE_UV";break}return t}function f0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Yi:t="ENVMAP_MODE_REFRACTION";break}return t}function d0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Mc:t="ENVMAP_BLENDING_MULTIPLY";break;case pu:t="ENVMAP_BLENDING_MIX";break;case mu:t="ENVMAP_BLENDING_ADD";break}return t}function p0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function m0(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=h0(e),c=u0(e),h=f0(e),u=d0(e),f=p0(e),d=n0(e),g=i0(s),_=r.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gr).join(`
`),p.length>0&&(p+=`
`)):(m=[Zl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),p=[Zl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Yn?t0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Qm("linearToOutputTexel",e.outputColorSpace),e0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gr).join(`
`)),o=aa(o),o=$l(o,e),o=ql(o,e),a=aa(a),a=$l(a,e),a=ql(a,e),o=Yl(o),a=Yl(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+o,v=y+p+a,P=Vl(r,r.VERTEX_SHADER,x),w=Vl(r,r.FRAGMENT_SHADER,v);r.attachShader(_,P),r.attachShader(_,w),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(A){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(P).trim(),k=r.getShaderInfoLog(w).trim();let X=!0,B=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,P,w);else{const nt=Xl(r,P,"vertex"),W=Xl(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+O+`
`+nt+`
`+W)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||k==="")&&(B=!1);B&&(A.diagnostics={runnable:X,programLog:O,vertexShader:{log:F,prefix:m},fragmentShader:{log:k,prefix:p}})}r.deleteShader(P),r.deleteShader(w),L=new hs(r,_),E=r0(r,_)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,Zm)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=w,this}let g0=0;class _0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new v0(t),e.set(t,i)),i}}class v0{constructor(t){this.id=g0++,this.code=t,this.usedTimes=0}}function x0(n,t,e,i,r,s,o){const a=new Ta,l=new _0,c=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,A,O,F){const k=O.fog,X=F.geometry,B=E.isMeshStandardMaterial?O.environment:null,nt=(E.isMeshStandardMaterial?e:t).get(E.envMap||B),W=nt&&nt.mapping===Es?nt.image.height:null,dt=g[E.type];E.precision!==null&&(d=r.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const Mt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Rt=Mt!==void 0?Mt.length:0;let zt=0;X.morphAttributes.position!==void 0&&(zt=1),X.morphAttributes.normal!==void 0&&(zt=2),X.morphAttributes.color!==void 0&&(zt=3);let ie,Y,ot,Lt;if(dt){const ce=gn[dt];ie=ce.vertexShader,Y=ce.fragmentShader}else ie=E.vertexShader,Y=E.fragmentShader,l.update(E),ot=l.getVertexShaderID(E),Lt=l.getFragmentShaderID(E);const ht=n.getRenderTarget(),tt=n.state.buffers.depth.getReversed(),mt=F.isInstancedMesh===!0,rt=F.isBatchedMesh===!0,ut=!!E.map,H=!!E.matcap,Z=!!nt,C=!!E.aoMap,wt=!!E.lightMap,it=!!E.bumpMap,Et=!!E.normalMap,ft=!!E.displacementMap,Ft=!!E.emissiveMap,Tt=!!E.metalnessMap,T=!!E.roughnessMap,S=E.anisotropy>0,z=E.clearcoat>0,J=E.dispersion>0,Q=E.iridescence>0,j=E.sheen>0,Dt=E.transmission>0,vt=S&&!!E.anisotropyMap,At=z&&!!E.clearcoatMap,jt=z&&!!E.clearcoatNormalMap,st=z&&!!E.clearcoatRoughnessMap,Ct=Q&&!!E.iridescenceMap,Bt=Q&&!!E.iridescenceThicknessMap,Ht=j&&!!E.sheenColorMap,Pt=j&&!!E.sheenRoughnessMap,Kt=!!E.specularMap,qt=!!E.specularColorMap,de=!!E.specularIntensityMap,I=Dt&&!!E.transmissionMap,xt=Dt&&!!E.thicknessMap,q=!!E.gradientMap,K=!!E.alphaMap,bt=E.alphaTest>0,yt=!!E.alphaHash,Wt=!!E.extensions;let xe=Yn;E.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(xe=n.toneMapping);const Le={shaderID:dt,shaderType:E.type,shaderName:E.name,vertexShader:ie,fragmentShader:Y,defines:E.defines,customVertexShaderID:ot,customFragmentShaderID:Lt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:rt,batchingColor:rt&&F._colorsTexture!==null,instancing:mt,instancingColor:mt&&F.instanceColor!==null,instancingMorph:mt&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ht===null?n.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:nr,alphaToCoverage:!!E.alphaToCoverage,map:ut,matcap:H,envMap:Z,envMapMode:Z&&nt.mapping,envMapCubeUVHeight:W,aoMap:C,lightMap:wt,bumpMap:it,normalMap:Et,displacementMap:f&&ft,emissiveMap:Ft,normalMapObjectSpace:Et&&E.normalMapType===Tu,normalMapTangentSpace:Et&&E.normalMapType===Lc,metalnessMap:Tt,roughnessMap:T,anisotropy:S,anisotropyMap:vt,clearcoat:z,clearcoatMap:At,clearcoatNormalMap:jt,clearcoatRoughnessMap:st,dispersion:J,iridescence:Q,iridescenceMap:Ct,iridescenceThicknessMap:Bt,sheen:j,sheenColorMap:Ht,sheenRoughnessMap:Pt,specularMap:Kt,specularColorMap:qt,specularIntensityMap:de,transmission:Dt,transmissionMap:I,thicknessMap:xt,gradientMap:q,opaque:E.transparent===!1&&E.blending===Gi&&E.alphaToCoverage===!1,alphaMap:K,alphaTest:bt,alphaHash:yt,combine:E.combine,mapUv:ut&&_(E.map.channel),aoMapUv:C&&_(E.aoMap.channel),lightMapUv:wt&&_(E.lightMap.channel),bumpMapUv:it&&_(E.bumpMap.channel),normalMapUv:Et&&_(E.normalMap.channel),displacementMapUv:ft&&_(E.displacementMap.channel),emissiveMapUv:Ft&&_(E.emissiveMap.channel),metalnessMapUv:Tt&&_(E.metalnessMap.channel),roughnessMapUv:T&&_(E.roughnessMap.channel),anisotropyMapUv:vt&&_(E.anisotropyMap.channel),clearcoatMapUv:At&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:jt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&_(E.sheenRoughnessMap.channel),specularMapUv:Kt&&_(E.specularMap.channel),specularColorMapUv:qt&&_(E.specularColorMap.channel),specularIntensityMapUv:de&&_(E.specularIntensityMap.channel),transmissionMapUv:I&&_(E.transmissionMap.channel),thicknessMapUv:xt&&_(E.thicknessMap.channel),alphaMapUv:K&&_(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Et||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(ut||K),fog:!!k,useFog:E.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:tt,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:zt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:xe,decodeVideoTexture:ut&&E.map.isVideoTexture===!0&&ee.getTransfer(E.map.colorSpace)===he,decodeVideoTextureEmissive:Ft&&E.emissiveMap.isVideoTexture===!0&&ee.getTransfer(E.emissiveMap.colorSpace)===he,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Xe,flipSided:E.side===$e,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Wt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&E.extensions.multiDraw===!0||rt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const A in E.defines)M.push(A),M.push(E.defines[A]);return E.isRawShaderMaterial===!1&&(y(M,E),x(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function y(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function x(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){const M=g[E.type];let A;if(M){const O=gn[M];A=ef.clone(O.uniforms)}else A=E.uniforms;return A}function P(E,M){let A;for(let O=0,F=h.length;O<F;O++){const k=h[O];if(k.cacheKey===M){A=k,++A.usedTimes;break}}return A===void 0&&(A=new m0(n,M,E,s),h.push(A)),A}function w(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function R(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:L}}function M0(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function y0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Jl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function jl(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(u,f,d,g,_,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):e.push(p)}function l(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||y0),i.length>1&&i.sort(f||Jl),r.length>1&&r.sort(f||Jl)}function h(){for(let u=t,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function S0(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new jl,n.set(i,[o])):r>=s.length?(o=new jl,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function E0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Qt};break;case"SpotLight":e={position:new D,direction:new D,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function b0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let w0=0;function T0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function A0(n){const t=new E0,e=b0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new _e,o=new _e;function a(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,y=0,x=0,v=0,P=0,w=0,R=0;c.sort(T0);for(let E=0,M=c.length;E<M;E++){const A=c[E],O=A.color,F=A.intensity,k=A.distance,X=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=O.r*F,u+=O.g*F,f+=O.b*F;else if(A.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(A.sh.coefficients[B],F);R++}else if(A.isDirectionalLight){const B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const nt=A.shadow,W=e.get(A);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,i.directionalShadow[d]=W,i.directionalShadowMap[d]=X,i.directionalShadowMatrix[d]=A.shadow.matrix,y++}i.directional[d]=B,d++}else if(A.isSpotLight){const B=t.get(A);B.position.setFromMatrixPosition(A.matrixWorld),B.color.copy(O).multiplyScalar(F),B.distance=k,B.coneCos=Math.cos(A.angle),B.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),B.decay=A.decay,i.spot[_]=B;const nt=A.shadow;if(A.map&&(i.spotLightMap[P]=A.map,P++,nt.updateMatrices(A),A.castShadow&&w++),i.spotLightMatrix[_]=nt.matrix,A.castShadow){const W=e.get(A);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=X,v++}_++}else if(A.isRectAreaLight){const B=t.get(A);B.color.copy(O).multiplyScalar(F),B.halfWidth.set(A.width*.5,0,0),B.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=B,m++}else if(A.isPointLight){const B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),B.distance=A.distance,B.decay=A.decay,A.castShadow){const nt=A.shadow,W=e.get(A);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,W.shadowCameraNear=nt.camera.near,W.shadowCameraFar=nt.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=A.shadow.matrix,x++}i.point[g]=B,g++}else if(A.isHemisphereLight){const B=t.get(A);B.skyColor.copy(A.color).multiplyScalar(F),B.groundColor.copy(A.groundColor).multiplyScalar(F),i.hemi[p]=B,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==y||L.numPointShadows!==x||L.numSpotShadows!==v||L.numSpotMaps!==P||L.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+P-w,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,L.directionalLength=d,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=y,L.numPointShadows=x,L.numSpotShadows=v,L.numSpotMaps=P,L.numLightProbes=R,i.version=w0++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const x=c[p];if(x.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Kl(n){const t=new A0(n),e=[],i=[];function r(h){c.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function R0(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Kl(n),t.set(r,[a])):s>=o.length?(a=new Kl(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class C0 extends Ar{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=bu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class P0 extends Ar{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const L0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D0=`uniform sampler2D shadow_pass;
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
}`;function I0(n,t,e){let i=new Aa;const r=new at,s=new at,o=new Me,a=new C0({depthPacking:wu}),l=new P0,c={},h=e.maxTextureSize,u={[jn]:$e,[$e]:jn,[Xe]:Xe},f=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:L0,fragmentShader:D0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Oe;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Jt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xc;let p=this.type;this.render=function(w,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),O=n.state;O.setBlending(qn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=p!==Rn&&this.type===Rn,k=p===Rn&&this.type!==Rn;for(let X=0,B=w.length;X<B;X++){const nt=w[X],W=nt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const dt=W.getFrameExtents();if(r.multiply(dt),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/dt.x),r.x=s.x*dt.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/dt.y),r.y=s.y*dt.y,W.mapSize.y=s.y)),W.map===null||F===!0||k===!0){const Rt=this.type!==Rn?{minFilter:Ce,magFilter:Ce}:{};W.map!==null&&W.map.dispose(),W.map=new Un(r.x,r.y,Rt),W.map.texture.name=nt.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const Mt=W.getViewportCount();for(let Rt=0;Rt<Mt;Rt++){const zt=W.getViewport(Rt);o.set(s.x*zt.x,s.y*zt.y,s.x*zt.z,s.y*zt.w),O.viewport(o),W.updateMatrices(nt,Rt),i=W.getFrustum(),v(R,L,W.camera,nt,this.type)}W.isPointLightShadow!==!0&&this.type===Rn&&y(W,L),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,M,A)};function y(w,R){const L=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Un(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,L,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,L,d,_,null)}function x(w,R,L,E){let M=null;const A=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)M=A;else if(M=L.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const O=M.uuid,F=R.uuid;let k=c[O];k===void 0&&(k={},c[O]=k);let X=k[F];X===void 0&&(X=M.clone(),k[F]=X,R.addEventListener("dispose",P)),M=X}if(M.visible=R.visible,M.wireframe=R.wireframe,E===Rn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=n.properties.get(M);O.light=L}return M}function v(w,R,L,E,M){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Rn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const F=t.update(w),k=w.material;if(Array.isArray(k)){const X=F.groups;for(let B=0,nt=X.length;B<nt;B++){const W=X[B],dt=k[W.materialIndex];if(dt&&dt.visible){const Mt=x(w,dt,E,M);w.onBeforeShadow(n,w,R,L,F,Mt,W),n.renderBufferDirect(L,null,F,Mt,w,W),w.onAfterShadow(n,w,R,L,F,Mt,W)}}}else if(k.visible){const X=x(w,k,E,M);w.onBeforeShadow(n,w,R,L,F,X,null),n.renderBufferDirect(L,null,F,X,w,null),w.onAfterShadow(n,w,R,L,F,X,null)}}const O=w.children;for(let F=0,k=O.length;F<k;F++)v(O[F],R,L,E,M)}function P(w){w.target.removeEventListener("dispose",P);for(const L in c){const E=c[L],M=w.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const U0={[bo]:wo,[To]:Co,[Ao]:Po,[$i]:Ro,[wo]:bo,[Co]:To,[Po]:Ao,[Ro]:$i};function N0(n,t){function e(){let I=!1;const xt=new Me;let q=null;const K=new Me(0,0,0,0);return{setMask:function(bt){q!==bt&&!I&&(n.colorMask(bt,bt,bt,bt),q=bt)},setLocked:function(bt){I=bt},setClear:function(bt,yt,Wt,xe,Le){Le===!0&&(bt*=xe,yt*=xe,Wt*=xe),xt.set(bt,yt,Wt,xe),K.equals(xt)===!1&&(n.clearColor(bt,yt,Wt,xe),K.copy(xt))},reset:function(){I=!1,q=null,K.set(-1,0,0,0)}}}function i(){let I=!1,xt=!1,q=null,K=null,bt=null;return{setReversed:function(yt){if(xt!==yt){const Wt=t.get("EXT_clip_control");xt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);const xe=bt;bt=null,this.setClear(xe)}xt=yt},getReversed:function(){return xt},setTest:function(yt){yt?ht(n.DEPTH_TEST):tt(n.DEPTH_TEST)},setMask:function(yt){q!==yt&&!I&&(n.depthMask(yt),q=yt)},setFunc:function(yt){if(xt&&(yt=U0[yt]),K!==yt){switch(yt){case bo:n.depthFunc(n.NEVER);break;case wo:n.depthFunc(n.ALWAYS);break;case To:n.depthFunc(n.LESS);break;case $i:n.depthFunc(n.LEQUAL);break;case Ao:n.depthFunc(n.EQUAL);break;case Ro:n.depthFunc(n.GEQUAL);break;case Co:n.depthFunc(n.GREATER);break;case Po:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=yt}},setLocked:function(yt){I=yt},setClear:function(yt){bt!==yt&&(xt&&(yt=1-yt),n.clearDepth(yt),bt=yt)},reset:function(){I=!1,q=null,K=null,bt=null,xt=!1}}}function r(){let I=!1,xt=null,q=null,K=null,bt=null,yt=null,Wt=null,xe=null,Le=null;return{setTest:function(ce){I||(ce?ht(n.STENCIL_TEST):tt(n.STENCIL_TEST))},setMask:function(ce){xt!==ce&&!I&&(n.stencilMask(ce),xt=ce)},setFunc:function(ce,rn,Mn){(q!==ce||K!==rn||bt!==Mn)&&(n.stencilFunc(ce,rn,Mn),q=ce,K=rn,bt=Mn)},setOp:function(ce,rn,Mn){(yt!==ce||Wt!==rn||xe!==Mn)&&(n.stencilOp(ce,rn,Mn),yt=ce,Wt=rn,xe=Mn)},setLocked:function(ce){I=ce},setClear:function(ce){Le!==ce&&(n.clearStencil(ce),Le=ce)},reset:function(){I=!1,xt=null,q=null,K=null,bt=null,yt=null,Wt=null,xe=null,Le=null}}}const s=new e,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,x=null,v=null,P=null,w=null,R=new Qt(0,0,0),L=0,E=!1,M=null,A=null,O=null,F=null,k=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,nt=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=nt>=1):W.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=nt>=2);let dt=null,Mt={};const Rt=n.getParameter(n.SCISSOR_BOX),zt=n.getParameter(n.VIEWPORT),ie=new Me().fromArray(Rt),Y=new Me().fromArray(zt);function ot(I,xt,q,K){const bt=new Uint8Array(4),yt=n.createTexture();n.bindTexture(I,yt),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Wt=0;Wt<q;Wt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(xt,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,bt):n.texImage2D(xt+Wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,bt);return yt}const Lt={};Lt[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),Lt[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Lt[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Lt[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(n.DEPTH_TEST),o.setFunc($i),it(!1),Et(il),ht(n.CULL_FACE),C(qn);function ht(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function tt(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function mt(I,xt){return u[I]!==xt?(n.bindFramebuffer(I,xt),u[I]=xt,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=xt),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=xt),!0):!1}function rt(I,xt){let q=d,K=!1;if(I){q=f.get(xt),q===void 0&&(q=[],f.set(xt,q));const bt=I.textures;if(q.length!==bt.length||q[0]!==n.COLOR_ATTACHMENT0){for(let yt=0,Wt=bt.length;yt<Wt;yt++)q[yt]=n.COLOR_ATTACHMENT0+yt;q.length=bt.length,K=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,K=!0);K&&n.drawBuffers(q)}function ut(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const H={[ui]:n.FUNC_ADD,[jh]:n.FUNC_SUBTRACT,[Kh]:n.FUNC_REVERSE_SUBTRACT};H[Qh]=n.MIN,H[tu]=n.MAX;const Z={[eu]:n.ZERO,[nu]:n.ONE,[iu]:n.SRC_COLOR,[So]:n.SRC_ALPHA,[cu]:n.SRC_ALPHA_SATURATE,[au]:n.DST_COLOR,[su]:n.DST_ALPHA,[ru]:n.ONE_MINUS_SRC_COLOR,[Eo]:n.ONE_MINUS_SRC_ALPHA,[lu]:n.ONE_MINUS_DST_COLOR,[ou]:n.ONE_MINUS_DST_ALPHA,[hu]:n.CONSTANT_COLOR,[uu]:n.ONE_MINUS_CONSTANT_COLOR,[fu]:n.CONSTANT_ALPHA,[du]:n.ONE_MINUS_CONSTANT_ALPHA};function C(I,xt,q,K,bt,yt,Wt,xe,Le,ce){if(I===qn){_===!0&&(tt(n.BLEND),_=!1);return}if(_===!1&&(ht(n.BLEND),_=!0),I!==Jh){if(I!==m||ce!==E){if((p!==ui||v!==ui)&&(n.blendEquation(n.FUNC_ADD),p=ui,v=ui),ce)switch(I){case Gi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yo:n.blendFunc(n.ONE,n.ONE);break;case rl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Gi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case rl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,x=null,P=null,w=null,R.set(0,0,0),L=0,m=I,E=ce}return}bt=bt||xt,yt=yt||q,Wt=Wt||K,(xt!==p||bt!==v)&&(n.blendEquationSeparate(H[xt],H[bt]),p=xt,v=bt),(q!==y||K!==x||yt!==P||Wt!==w)&&(n.blendFuncSeparate(Z[q],Z[K],Z[yt],Z[Wt]),y=q,x=K,P=yt,w=Wt),(xe.equals(R)===!1||Le!==L)&&(n.blendColor(xe.r,xe.g,xe.b,Le),R.copy(xe),L=Le),m=I,E=!1}function wt(I,xt){I.side===Xe?tt(n.CULL_FACE):ht(n.CULL_FACE);let q=I.side===$e;xt&&(q=!q),it(q),I.blending===Gi&&I.transparent===!1?C(qn):C(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const K=I.stencilWrite;a.setTest(K),K&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ft(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ht(n.SAMPLE_ALPHA_TO_COVERAGE):tt(n.SAMPLE_ALPHA_TO_COVERAGE)}function it(I){M!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),M=I)}function Et(I){I!==qh?(ht(n.CULL_FACE),I!==A&&(I===il?n.cullFace(n.BACK):I===Yh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):tt(n.CULL_FACE),A=I}function ft(I){I!==O&&(B&&n.lineWidth(I),O=I)}function Ft(I,xt,q){I?(ht(n.POLYGON_OFFSET_FILL),(F!==xt||k!==q)&&(n.polygonOffset(xt,q),F=xt,k=q)):tt(n.POLYGON_OFFSET_FILL)}function Tt(I){I?ht(n.SCISSOR_TEST):tt(n.SCISSOR_TEST)}function T(I){I===void 0&&(I=n.TEXTURE0+X-1),dt!==I&&(n.activeTexture(I),dt=I)}function S(I,xt,q){q===void 0&&(dt===null?q=n.TEXTURE0+X-1:q=dt);let K=Mt[q];K===void 0&&(K={type:void 0,texture:void 0},Mt[q]=K),(K.type!==I||K.texture!==xt)&&(dt!==q&&(n.activeTexture(q),dt=q),n.bindTexture(I,xt||Lt[I]),K.type=I,K.texture=xt)}function z(){const I=Mt[dt];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function jt(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Bt(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ht(I){ie.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ie.copy(I))}function Pt(I){Y.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function Kt(I,xt){let q=c.get(xt);q===void 0&&(q=new WeakMap,c.set(xt,q));let K=q.get(I);K===void 0&&(K=n.getUniformBlockIndex(xt,I.name),q.set(I,K))}function qt(I,xt){const K=c.get(xt).get(I);l.get(xt)!==K&&(n.uniformBlockBinding(xt,K,I.__bindingPointIndex),l.set(xt,K))}function de(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},dt=null,Mt={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,x=null,v=null,P=null,w=null,R=new Qt(0,0,0),L=0,E=!1,M=null,A=null,O=null,F=null,k=null,ie.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ht,disable:tt,bindFramebuffer:mt,drawBuffers:rt,useProgram:ut,setBlending:C,setMaterial:wt,setFlipSided:it,setCullFace:Et,setLineWidth:ft,setPolygonOffset:Ft,setScissorTest:Tt,activeTexture:T,bindTexture:S,unbindTexture:z,compressedTexImage2D:J,compressedTexImage3D:Q,texImage2D:Ct,texImage3D:Bt,updateUBOMapping:Kt,uniformBlockBinding:qt,texStorage2D:jt,texStorage3D:st,texSubImage2D:j,texSubImage3D:Dt,compressedTexSubImage2D:vt,compressedTexSubImage3D:At,scissor:Ht,viewport:Pt,reset:de}}function Ql(n,t,e,i){const r=F0(i);switch(e){case wc:return n*t;case Ac:return n*t;case Rc:return n*t*2;case bs:return n*t/r.components*r.byteLength;case Sa:return n*t/r.components*r.byteLength;case Cc:return n*t*2/r.components*r.byteLength;case Ea:return n*t*2/r.components*r.byteLength;case Tc:return n*t*3/r.components*r.byteLength;case un:return n*t*4/r.components*r.byteLength;case ba:return n*t*4/r.components*r.byteLength;case ss:case os:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case as:case ls:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case No:case Oo:return Math.max(n,16)*Math.max(t,8)/4;case Uo:case Fo:return Math.max(n,8)*Math.max(t,8)/2;case ko:case Bo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case zo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ho:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Go:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case $o:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case qo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Zo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case jo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ko:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Qo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ta:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case cs:case ea:case na:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Pc:case ia:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ra:case sa:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function F0(n){switch(n){case In:case Sc:return{byteLength:1,components:1};case yr:case Ec:case xi:return{byteLength:2,components:1};case Ma:case ya:return{byteLength:2,components:4};case vi:case xa:case Cn:return{byteLength:4,components:1};case bc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function O0(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,S){return d?new OffscreenCanvas(T,S):ms("canvas")}function _(T,S,z){let J=1;const Q=Tt(T);if((Q.width>z||Q.height>z)&&(J=z/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const j=Math.floor(J*Q.width),Dt=Math.floor(J*Q.height);u===void 0&&(u=g(j,Dt));const vt=S?g(j,Dt):u;return vt.width=j,vt.height=Dt,vt.getContext("2d").drawImage(T,0,0,j,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+Dt+")."),vt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(T,S,z,J,Q=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=S;if(S===n.RED&&(z===n.FLOAT&&(j=n.R32F),z===n.HALF_FLOAT&&(j=n.R16F),z===n.UNSIGNED_BYTE&&(j=n.R8)),S===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.R8UI),z===n.UNSIGNED_SHORT&&(j=n.R16UI),z===n.UNSIGNED_INT&&(j=n.R32UI),z===n.BYTE&&(j=n.R8I),z===n.SHORT&&(j=n.R16I),z===n.INT&&(j=n.R32I)),S===n.RG&&(z===n.FLOAT&&(j=n.RG32F),z===n.HALF_FLOAT&&(j=n.RG16F),z===n.UNSIGNED_BYTE&&(j=n.RG8)),S===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.RG8UI),z===n.UNSIGNED_SHORT&&(j=n.RG16UI),z===n.UNSIGNED_INT&&(j=n.RG32UI),z===n.BYTE&&(j=n.RG8I),z===n.SHORT&&(j=n.RG16I),z===n.INT&&(j=n.RG32I)),S===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.RGB8UI),z===n.UNSIGNED_SHORT&&(j=n.RGB16UI),z===n.UNSIGNED_INT&&(j=n.RGB32UI),z===n.BYTE&&(j=n.RGB8I),z===n.SHORT&&(j=n.RGB16I),z===n.INT&&(j=n.RGB32I)),S===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),z===n.UNSIGNED_INT&&(j=n.RGBA32UI),z===n.BYTE&&(j=n.RGBA8I),z===n.SHORT&&(j=n.RGBA16I),z===n.INT&&(j=n.RGBA32I)),S===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),S===n.RGBA){const Dt=Q?ws:ee.getTransfer(J);z===n.FLOAT&&(j=n.RGBA32F),z===n.HALF_FLOAT&&(j=n.RGBA16F),z===n.UNSIGNED_BYTE&&(j=Dt===he?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function v(T,S){let z;return T?S===null||S===vi||S===Zi?z=n.DEPTH24_STENCIL8:S===Cn?z=n.DEPTH32F_STENCIL8:S===yr&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===vi||S===Zi?z=n.DEPTH_COMPONENT24:S===Cn?z=n.DEPTH_COMPONENT32F:S===yr&&(z=n.DEPTH_COMPONENT16),z}function P(T,S){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ce&&T.minFilter!==_n?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function w(T){const S=T.target;S.removeEventListener("dispose",w),L(S),S.isVideoTexture&&h.delete(S)}function R(T){const S=T.target;S.removeEventListener("dispose",R),M(S)}function L(T){const S=i.get(T);if(S.__webglInit===void 0)return;const z=T.source,J=f.get(z);if(J){const Q=J[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(T),Object.keys(J).length===0&&f.delete(z)}i.remove(T)}function E(T){const S=i.get(T);n.deleteTexture(S.__webglTexture);const z=T.source,J=f.get(z);delete J[S.__cacheKey],o.memory.textures--}function M(T){const S=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let Q=0;Q<S.__webglFramebuffer[J].length;Q++)n.deleteFramebuffer(S.__webglFramebuffer[J][Q]);else n.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)n.deleteFramebuffer(S.__webglFramebuffer[J]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=T.textures;for(let J=0,Q=z.length;J<Q;J++){const j=i.get(z[J]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(z[J])}i.remove(T)}let A=0;function O(){A=0}function F(){const T=A;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),A+=1,T}function k(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function X(T,S){const z=i.get(T);if(T.isVideoTexture&&ft(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){const J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,T,S);return}}e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+S)}function B(T,S){const z=i.get(T);if(T.version>0&&z.__version!==T.version){Y(z,T,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+S)}function nt(T,S){const z=i.get(T);if(T.version>0&&z.__version!==T.version){Y(z,T,S);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+S)}function W(T,S){const z=i.get(T);if(T.version>0&&z.__version!==T.version){ot(z,T,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+S)}const dt={[ds]:n.REPEAT,[di]:n.CLAMP_TO_EDGE,[Io]:n.MIRRORED_REPEAT},Mt={[Ce]:n.NEAREST,[Eu]:n.NEAREST_MIPMAP_NEAREST,[Nr]:n.NEAREST_MIPMAP_LINEAR,[_n]:n.LINEAR,[Fs]:n.LINEAR_MIPMAP_NEAREST,[pi]:n.LINEAR_MIPMAP_LINEAR},Rt={[Au]:n.NEVER,[Iu]:n.ALWAYS,[Ru]:n.LESS,[Dc]:n.LEQUAL,[Cu]:n.EQUAL,[Du]:n.GEQUAL,[Pu]:n.GREATER,[Lu]:n.NOTEQUAL};function zt(T,S){if(S.type===Cn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===_n||S.magFilter===Fs||S.magFilter===Nr||S.magFilter===pi||S.minFilter===_n||S.minFilter===Fs||S.minFilter===Nr||S.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,dt[S.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,dt[S.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,dt[S.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Mt[S.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Mt[S.minFilter]),S.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Rt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ce||S.minFilter!==Nr&&S.minFilter!==pi||S.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ie(T,S){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",w));const J=S.source;let Q=f.get(J);Q===void 0&&(Q={},f.set(J,Q));const j=k(S);if(j!==T.__cacheKey){Q[j]===void 0&&(Q[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[j].usedTimes++;const Dt=Q[T.__cacheKey];Dt!==void 0&&(Q[T.__cacheKey].usedTimes--,Dt.usedTimes===0&&E(S)),T.__cacheKey=j,T.__webglTexture=Q[j].texture}return z}function Y(T,S,z){let J=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=n.TEXTURE_3D);const Q=ie(T,S),j=S.source;e.bindTexture(J,T.__webglTexture,n.TEXTURE0+z);const Dt=i.get(j);if(j.version!==Dt.__version||Q===!0){e.activeTexture(n.TEXTURE0+z);const vt=ee.getPrimaries(ee.workingColorSpace),At=S.colorSpace===$n?null:ee.getPrimaries(S.colorSpace),jt=S.colorSpace===$n||vt===At?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let st=_(S.image,!1,r.maxTextureSize);st=Ft(S,st);const Ct=s.convert(S.format,S.colorSpace),Bt=s.convert(S.type);let Ht=x(S.internalFormat,Ct,Bt,S.colorSpace,S.isVideoTexture);zt(J,S);let Pt;const Kt=S.mipmaps,qt=S.isVideoTexture!==!0,de=Dt.__version===void 0||Q===!0,I=j.dataReady,xt=P(S,st);if(S.isDepthTexture)Ht=v(S.format===Ji,S.type),de&&(qt?e.texStorage2D(n.TEXTURE_2D,1,Ht,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,Ht,st.width,st.height,0,Ct,Bt,null));else if(S.isDataTexture)if(Kt.length>0){qt&&de&&e.texStorage2D(n.TEXTURE_2D,xt,Ht,Kt[0].width,Kt[0].height);for(let q=0,K=Kt.length;q<K;q++)Pt=Kt[q],qt?I&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,Pt.width,Pt.height,Ct,Bt,Pt.data):e.texImage2D(n.TEXTURE_2D,q,Ht,Pt.width,Pt.height,0,Ct,Bt,Pt.data);S.generateMipmaps=!1}else qt?(de&&e.texStorage2D(n.TEXTURE_2D,xt,Ht,st.width,st.height),I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,st.width,st.height,Ct,Bt,st.data)):e.texImage2D(n.TEXTURE_2D,0,Ht,st.width,st.height,0,Ct,Bt,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qt&&de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,Ht,Kt[0].width,Kt[0].height,st.depth);for(let q=0,K=Kt.length;q<K;q++)if(Pt=Kt[q],S.format!==un)if(Ct!==null)if(qt){if(I)if(S.layerUpdates.size>0){const bt=Ql(Pt.width,Pt.height,S.format,S.type);for(const yt of S.layerUpdates){const Wt=Pt.data.subarray(yt*bt/Pt.data.BYTES_PER_ELEMENT,(yt+1)*bt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,yt,Pt.width,Pt.height,1,Ct,Wt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Pt.width,Pt.height,st.depth,Ct,Pt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Ht,Pt.width,Pt.height,st.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Pt.width,Pt.height,st.depth,Ct,Bt,Pt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,q,Ht,Pt.width,Pt.height,st.depth,0,Ct,Bt,Pt.data)}else{qt&&de&&e.texStorage2D(n.TEXTURE_2D,xt,Ht,Kt[0].width,Kt[0].height);for(let q=0,K=Kt.length;q<K;q++)Pt=Kt[q],S.format!==un?Ct!==null?qt?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,Pt.width,Pt.height,Ct,Pt.data):e.compressedTexImage2D(n.TEXTURE_2D,q,Ht,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?I&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,Pt.width,Pt.height,Ct,Bt,Pt.data):e.texImage2D(n.TEXTURE_2D,q,Ht,Pt.width,Pt.height,0,Ct,Bt,Pt.data)}else if(S.isDataArrayTexture)if(qt){if(de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,Ht,st.width,st.height,st.depth),I)if(S.layerUpdates.size>0){const q=Ql(st.width,st.height,S.format,S.type);for(const K of S.layerUpdates){const bt=st.data.subarray(K*q/st.data.BYTES_PER_ELEMENT,(K+1)*q/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,st.width,st.height,1,Ct,Bt,bt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Ct,Bt,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ht,st.width,st.height,st.depth,0,Ct,Bt,st.data);else if(S.isData3DTexture)qt?(de&&e.texStorage3D(n.TEXTURE_3D,xt,Ht,st.width,st.height,st.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Ct,Bt,st.data)):e.texImage3D(n.TEXTURE_3D,0,Ht,st.width,st.height,st.depth,0,Ct,Bt,st.data);else if(S.isFramebufferTexture){if(de)if(qt)e.texStorage2D(n.TEXTURE_2D,xt,Ht,st.width,st.height);else{let q=st.width,K=st.height;for(let bt=0;bt<xt;bt++)e.texImage2D(n.TEXTURE_2D,bt,Ht,q,K,0,Ct,Bt,null),q>>=1,K>>=1}}else if(Kt.length>0){if(qt&&de){const q=Tt(Kt[0]);e.texStorage2D(n.TEXTURE_2D,xt,Ht,q.width,q.height)}for(let q=0,K=Kt.length;q<K;q++)Pt=Kt[q],qt?I&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,Ct,Bt,Pt):e.texImage2D(n.TEXTURE_2D,q,Ht,Ct,Bt,Pt);S.generateMipmaps=!1}else if(qt){if(de){const q=Tt(st);e.texStorage2D(n.TEXTURE_2D,xt,Ht,q.width,q.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ct,Bt,st)}else e.texImage2D(n.TEXTURE_2D,0,Ht,Ct,Bt,st);m(S)&&p(J),Dt.__version=j.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function ot(T,S,z){if(S.image.length!==6)return;const J=ie(T,S),Q=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+z);const j=i.get(Q);if(Q.version!==j.__version||J===!0){e.activeTexture(n.TEXTURE0+z);const Dt=ee.getPrimaries(ee.workingColorSpace),vt=S.colorSpace===$n?null:ee.getPrimaries(S.colorSpace),At=S.colorSpace===$n||Dt===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const jt=S.isCompressedTexture||S.image[0].isCompressedTexture,st=S.image[0]&&S.image[0].isDataTexture,Ct=[];for(let K=0;K<6;K++)!jt&&!st?Ct[K]=_(S.image[K],!0,r.maxCubemapSize):Ct[K]=st?S.image[K].image:S.image[K],Ct[K]=Ft(S,Ct[K]);const Bt=Ct[0],Ht=s.convert(S.format,S.colorSpace),Pt=s.convert(S.type),Kt=x(S.internalFormat,Ht,Pt,S.colorSpace),qt=S.isVideoTexture!==!0,de=j.__version===void 0||J===!0,I=Q.dataReady;let xt=P(S,Bt);zt(n.TEXTURE_CUBE_MAP,S);let q;if(jt){qt&&de&&e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,Kt,Bt.width,Bt.height);for(let K=0;K<6;K++){q=Ct[K].mipmaps;for(let bt=0;bt<q.length;bt++){const yt=q[bt];S.format!==un?Ht!==null?qt?I&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,bt,0,0,yt.width,yt.height,Ht,yt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,bt,Kt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,bt,0,0,yt.width,yt.height,Ht,Pt,yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,bt,Kt,yt.width,yt.height,0,Ht,Pt,yt.data)}}}else{if(q=S.mipmaps,qt&&de){q.length>0&&xt++;const K=Tt(Ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,Kt,K.width,K.height)}for(let K=0;K<6;K++)if(st){qt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ct[K].width,Ct[K].height,Ht,Pt,Ct[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Kt,Ct[K].width,Ct[K].height,0,Ht,Pt,Ct[K].data);for(let bt=0;bt<q.length;bt++){const Wt=q[bt].image[K].image;qt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,bt+1,0,0,Wt.width,Wt.height,Ht,Pt,Wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,bt+1,Kt,Wt.width,Wt.height,0,Ht,Pt,Wt.data)}}else{qt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ht,Pt,Ct[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Kt,Ht,Pt,Ct[K]);for(let bt=0;bt<q.length;bt++){const yt=q[bt];qt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,bt+1,0,0,Ht,Pt,yt.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,bt+1,Kt,Ht,Pt,yt.image[K])}}}m(S)&&p(n.TEXTURE_CUBE_MAP),j.__version=Q.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Lt(T,S,z,J,Q,j){const Dt=s.convert(z.format,z.colorSpace),vt=s.convert(z.type),At=x(z.internalFormat,Dt,vt,z.colorSpace),jt=i.get(S),st=i.get(z);if(st.__renderTarget=S,!jt.__hasExternalTextures){const Ct=Math.max(1,S.width>>j),Bt=Math.max(1,S.height>>j);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,j,At,Ct,Bt,S.depth,0,Dt,vt,null):e.texImage2D(Q,j,At,Ct,Bt,0,Dt,vt,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),Et(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,Q,st.__webglTexture,0,it(S)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,Q,st.__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(T,S,z){if(n.bindRenderbuffer(n.RENDERBUFFER,T),S.depthBuffer){const J=S.depthTexture,Q=J&&J.isDepthTexture?J.type:null,j=v(S.stencilBuffer,Q),Dt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=it(S);Et(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt,j,S.width,S.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt,j,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,j,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Dt,n.RENDERBUFFER,T)}else{const J=S.textures;for(let Q=0;Q<J.length;Q++){const j=J[Q],Dt=s.convert(j.format,j.colorSpace),vt=s.convert(j.type),At=x(j.internalFormat,Dt,vt,j.colorSpace),jt=it(S);z&&Et(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,jt,At,S.width,S.height):Et(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,jt,At,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,At,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function tt(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(S.depthTexture);J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const Q=J.__webglTexture,j=it(S);if(S.depthTexture.format===Vi)Et(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Ji)Et(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function mt(T){const S=i.get(T),z=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const J=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=J}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");tt(S.__webglFramebuffer,T)}else if(z){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=n.createRenderbuffer(),ht(S.__webglDepthbuffer[J],T,!1);else{const Q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,j)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),ht(S.__webglDepthbuffer,T,!1);else{const J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Q)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(T,S,z){const J=i.get(T);S!==void 0&&Lt(J.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&mt(T)}function ut(T){const S=T.texture,z=i.get(T),J=i.get(S);T.addEventListener("dispose",R);const Q=T.textures,j=T.isWebGLCubeRenderTarget===!0,Dt=Q.length>1;if(Dt||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=S.version,o.memory.textures++),j){z.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[vt]=[];for(let At=0;At<S.mipmaps.length;At++)z.__webglFramebuffer[vt][At]=n.createFramebuffer()}else z.__webglFramebuffer[vt]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let vt=0;vt<S.mipmaps.length;vt++)z.__webglFramebuffer[vt]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Dt)for(let vt=0,At=Q.length;vt<At;vt++){const jt=i.get(Q[vt]);jt.__webglTexture===void 0&&(jt.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&Et(T)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let vt=0;vt<Q.length;vt++){const At=Q[vt];z.__webglColorRenderbuffer[vt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[vt]);const jt=s.convert(At.format,At.colorSpace),st=s.convert(At.type),Ct=x(At.internalFormat,jt,st,At.colorSpace,T.isXRRenderTarget===!0),Bt=it(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt,Ct,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,z.__webglColorRenderbuffer[vt])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),ht(z.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),zt(n.TEXTURE_CUBE_MAP,S);for(let vt=0;vt<6;vt++)if(S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)Lt(z.__webglFramebuffer[vt][At],T,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,At);else Lt(z.__webglFramebuffer[vt],T,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);m(S)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let vt=0,At=Q.length;vt<At;vt++){const jt=Q[vt],st=i.get(jt);e.bindTexture(n.TEXTURE_2D,st.__webglTexture),zt(n.TEXTURE_2D,jt),Lt(z.__webglFramebuffer,T,jt,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,0),m(jt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let vt=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(vt=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(vt,J.__webglTexture),zt(vt,S),S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)Lt(z.__webglFramebuffer[At],T,S,n.COLOR_ATTACHMENT0,vt,At);else Lt(z.__webglFramebuffer,T,S,n.COLOR_ATTACHMENT0,vt,0);m(S)&&p(vt),e.unbindTexture()}T.depthBuffer&&mt(T)}function H(T){const S=T.textures;for(let z=0,J=S.length;z<J;z++){const Q=S[z];if(m(Q)){const j=y(T),Dt=i.get(Q).__webglTexture;e.bindTexture(j,Dt),p(j),e.unbindTexture()}}}const Z=[],C=[];function wt(T){if(T.samples>0){if(Et(T)===!1){const S=T.textures,z=T.width,J=T.height;let Q=n.COLOR_BUFFER_BIT;const j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Dt=i.get(T),vt=S.length>1;if(vt)for(let At=0;At<S.length;At++)e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let At=0;At<S.length;At++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),vt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Dt.__webglColorRenderbuffer[At]);const jt=i.get(S[At]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,jt,0)}n.blitFramebuffer(0,0,z,J,0,0,z,J,Q,n.NEAREST),l===!0&&(Z.length=0,C.length=0,Z.push(n.COLOR_ATTACHMENT0+At),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Z.push(j),C.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Z))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),vt)for(let At=0;At<S.length;At++){e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,Dt.__webglColorRenderbuffer[At]);const jt=i.get(S[At]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,jt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const S=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function it(T){return Math.min(r.maxSamples,T.samples)}function Et(T){const S=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ft(T){const S=o.render.frame;h.get(T)!==S&&(h.set(T,S),T.update())}function Ft(T,S){const z=T.colorSpace,J=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==nr&&z!==$n&&(ee.getTransfer(z)===he?(J!==un||Q!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function Tt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=B,this.setTexture3D=nt,this.setTextureCube=W,this.rebindTextures=rt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Et}function k0(n,t){function e(i,r=$n){let s;const o=ee.getTransfer(r);if(i===In)return n.UNSIGNED_BYTE;if(i===Ma)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ya)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Sc)return n.BYTE;if(i===Ec)return n.SHORT;if(i===yr)return n.UNSIGNED_SHORT;if(i===xa)return n.INT;if(i===vi)return n.UNSIGNED_INT;if(i===Cn)return n.FLOAT;if(i===xi)return n.HALF_FLOAT;if(i===wc)return n.ALPHA;if(i===Tc)return n.RGB;if(i===un)return n.RGBA;if(i===Ac)return n.LUMINANCE;if(i===Rc)return n.LUMINANCE_ALPHA;if(i===Vi)return n.DEPTH_COMPONENT;if(i===Ji)return n.DEPTH_STENCIL;if(i===bs)return n.RED;if(i===Sa)return n.RED_INTEGER;if(i===Cc)return n.RG;if(i===Ea)return n.RG_INTEGER;if(i===ba)return n.RGBA_INTEGER;if(i===ss||i===os||i===as||i===ls)if(o===he)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ss)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===as)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ss)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===os)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===as)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ls)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Uo||i===No||i===Fo||i===Oo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Uo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===No)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Oo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ko||i===Bo||i===zo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ko||i===Bo)return o===he?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===zo)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ho||i===Go||i===Vo||i===Wo||i===Xo||i===$o||i===qo||i===Yo||i===Zo||i===Jo||i===jo||i===Ko||i===Qo||i===ta)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ho)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Go)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vo)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wo)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xo)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$o)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qo)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yo)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zo)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jo)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jo)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ko)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qo)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ta)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cs||i===ea||i===na)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===cs)return o===he?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ea)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===na)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pc||i===ia||i===ra||i===sa)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===cs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ia)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ra)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class B0 extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ze extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const z0={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(z0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ze;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const H0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G0=`
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

}`;class V0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Fe,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new dn({vertexShader:H0,fragmentShader:G0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new He(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class W0 extends ir{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const _=new V0,m=e.getContextAttributes();let p=null,y=null;const x=[],v=[],P=new at;let w=null;const R=new cn;R.viewport=new Me;const L=new cn;L.viewport=new Me;const E=[R,L],M=new B0;let A=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ot=x[Y];return ot===void 0&&(ot=new uo,x[Y]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(Y){let ot=x[Y];return ot===void 0&&(ot=new uo,x[Y]=ot),ot.getGripSpace()},this.getHand=function(Y){let ot=x[Y];return ot===void 0&&(ot=new uo,x[Y]=ot),ot.getHandSpace()};function F(Y){const ot=v.indexOf(Y.inputSource);if(ot===-1)return;const Lt=x[ot];Lt!==void 0&&(Lt.update(Y.inputSource,Y.frame,c||o),Lt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",X);for(let Y=0;Y<x.length;Y++){const ot=v[Y];ot!==null&&(v[Y]=null,x[Y].disconnect(ot))}A=null,O=null,_.reset(),t.setRenderTarget(p),d=null,f=null,u=null,r=null,y=null,ie.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",k),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(P),r.renderState.layers===void 0){const ot={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,ot),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Un(d.framebufferWidth,d.framebufferHeight,{format:un,type:In,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ot=null,Lt=null,ht=null;m.depth&&(ht=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=m.stencil?Ji:Vi,Lt=m.stencil?Zi:vi);const tt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:s};u=new XRWebGLBinding(r,e),f=u.createProjectionLayer(tt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Un(f.textureWidth,f.textureHeight,{format:un,type:In,depthTexture:new Wc(f.textureWidth,f.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ie.setContext(r),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(Y){for(let ot=0;ot<Y.removed.length;ot++){const Lt=Y.removed[ot],ht=v.indexOf(Lt);ht>=0&&(v[ht]=null,x[ht].disconnect(Lt))}for(let ot=0;ot<Y.added.length;ot++){const Lt=Y.added[ot];let ht=v.indexOf(Lt);if(ht===-1){for(let mt=0;mt<x.length;mt++)if(mt>=v.length){v.push(Lt),ht=mt;break}else if(v[mt]===null){v[mt]=Lt,ht=mt;break}if(ht===-1)break}const tt=x[ht];tt&&tt.connect(Lt)}}const B=new D,nt=new D;function W(Y,ot,Lt){B.setFromMatrixPosition(ot.matrixWorld),nt.setFromMatrixPosition(Lt.matrixWorld);const ht=B.distanceTo(nt),tt=ot.projectionMatrix.elements,mt=Lt.projectionMatrix.elements,rt=tt[14]/(tt[10]-1),ut=tt[14]/(tt[10]+1),H=(tt[9]+1)/tt[5],Z=(tt[9]-1)/tt[5],C=(tt[8]-1)/tt[0],wt=(mt[8]+1)/mt[0],it=rt*C,Et=rt*wt,ft=ht/(-C+wt),Ft=ft*-C;if(ot.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ft),Y.translateZ(ft),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),tt[10]===-1)Y.projectionMatrix.copy(ot.projectionMatrix),Y.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Tt=rt+ft,T=ut+ft,S=it-Ft,z=Et+(ht-Ft),J=H*ut/T*Tt,Q=Z*ut/T*Tt;Y.projectionMatrix.makePerspective(S,z,J,Q,Tt,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function dt(Y,ot){ot===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ot.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ot=Y.near,Lt=Y.far;_.texture!==null&&(_.depthNear>0&&(ot=_.depthNear),_.depthFar>0&&(Lt=_.depthFar)),M.near=L.near=R.near=ot,M.far=L.far=R.far=Lt,(A!==M.near||O!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,O=M.far),R.layers.mask=Y.layers.mask|2,L.layers.mask=Y.layers.mask|4,M.layers.mask=R.layers.mask|L.layers.mask;const ht=Y.parent,tt=M.cameras;dt(M,ht);for(let mt=0;mt<tt.length;mt++)dt(tt[mt],ht);tt.length===2?W(M,R,L):M.projectionMatrix.copy(R.projectionMatrix),Mt(Y,M,ht)};function Mt(Y,ot,Lt){Lt===null?Y.matrix.copy(ot.matrixWorld):(Y.matrix.copy(Lt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ot.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ot.projectionMatrix),Y.projectionMatrixInverse.copy(ot.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=oa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Rt=null;function zt(Y,ot){if(h=ot.getViewerPose(c||o),g=ot,h!==null){const Lt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let ht=!1;Lt.length!==M.cameras.length&&(M.cameras.length=0,ht=!0);for(let mt=0;mt<Lt.length;mt++){const rt=Lt[mt];let ut=null;if(d!==null)ut=d.getViewport(rt);else{const Z=u.getViewSubImage(f,rt);ut=Z.viewport,mt===0&&(t.setRenderTargetTextures(y,Z.colorTexture,f.ignoreDepthValues?void 0:Z.depthStencilTexture),t.setRenderTarget(y))}let H=E[mt];H===void 0&&(H=new cn,H.layers.enable(mt),H.viewport=new Me,E[mt]=H),H.matrix.fromArray(rt.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(rt.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(ut.x,ut.y,ut.width,ut.height),mt===0&&(M.matrix.copy(H.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ht===!0&&M.cameras.push(H)}const tt=r.enabledFeatures;if(tt&&tt.includes("depth-sensing")){const mt=u.getDepthInformation(Lt[0]);mt&&mt.isValid&&mt.texture&&_.init(t,mt,r.renderState)}}for(let Lt=0;Lt<x.length;Lt++){const ht=v[Lt],tt=x[Lt];ht!==null&&tt!==void 0&&tt.update(ht,ot,c||o)}Rt&&Rt(Y,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),g=null}const ie=new Vc;ie.setAnimationLoop(zt),this.setAnimationLoop=function(Y){Rt=Y},this.dispose=function(){}}}const li=new vn,X0=new _e;function $0(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,zc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$e&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$e&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),x=y.envMap,v=y.envMapRotation;x&&(m.envMap.value=x,li.copy(v),li.x*=-1,li.y*=-1,li.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),m.envMapRotation.value.setFromMatrix4(X0.makeRotationFromEuler(li)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function q0(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const v=x.program;i.uniformBlockBinding(y,v)}function c(y,x){let v=r[y.id];v===void 0&&(g(y),v=h(y),r[y.id]=v,y.addEventListener("dispose",m));const P=x.program;i.updateUBOMapping(y,P);const w=t.render.frame;s[y.id]!==w&&(f(y),s[y.id]=w)}function h(y){const x=u();y.__bindingPointIndex=x;const v=n.createBuffer(),P=y.__size,w=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,P,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=r[y.id],v=y.uniforms,P=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,R=v.length;w<R;w++){const L=Array.isArray(v[w])?v[w]:[v[w]];for(let E=0,M=L.length;E<M;E++){const A=L[E];if(d(A,w,E,P)===!0){const O=A.__offset,F=Array.isArray(A.value)?A.value:[A.value];let k=0;for(let X=0;X<F.length;X++){const B=F[X],nt=_(B);typeof B=="number"||typeof B=="boolean"?(A.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,O+k,A.__data)):B.isMatrix3?(A.__data[0]=B.elements[0],A.__data[1]=B.elements[1],A.__data[2]=B.elements[2],A.__data[3]=0,A.__data[4]=B.elements[3],A.__data[5]=B.elements[4],A.__data[6]=B.elements[5],A.__data[7]=0,A.__data[8]=B.elements[6],A.__data[9]=B.elements[7],A.__data[10]=B.elements[8],A.__data[11]=0):(B.toArray(A.__data,k),k+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,x,v,P){const w=y.value,R=x+"_"+v;if(P[R]===void 0)return typeof w=="number"||typeof w=="boolean"?P[R]=w:P[R]=w.clone(),!0;{const L=P[R];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return P[R]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(y){const x=y.uniforms;let v=0;const P=16;for(let R=0,L=x.length;R<L;R++){const E=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,A=E.length;M<A;M++){const O=E[M],F=Array.isArray(O.value)?O.value:[O.value];for(let k=0,X=F.length;k<X;k++){const B=F[k],nt=_(B),W=v%P,dt=W%nt.boundary,Mt=W+dt;v+=dt,Mt!==0&&P-Mt<nt.storage&&(v+=P-Mt),O.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=nt.storage}}}const w=v%P;return w>0&&(v+=P-w),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Y0{constructor(t={}){const{canvas:e=Nu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this.toneMapping=Yn,this.toneMappingExposure=1;const v=this;let P=!1,w=0,R=0,L=null,E=-1,M=null;const A=new Me,O=new Me;let F=null;const k=new Qt(0);let X=0,B=e.width,nt=e.height,W=1,dt=null,Mt=null;const Rt=new Me(0,0,B,nt),zt=new Me(0,0,B,nt);let ie=!1;const Y=new Aa;let ot=!1,Lt=!1;const ht=new _e,tt=new _e,mt=new D,rt=new Me,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let H=!1;function Z(){return L===null?W:1}let C=i;function wt(b,U){return e.getContext(b,U)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${va}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),C===null){const U="webgl2";if(C=wt(U,b),C===null)throw wt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let it,Et,ft,Ft,Tt,T,S,z,J,Q,j,Dt,vt,At,jt,st,Ct,Bt,Ht,Pt,Kt,qt,de,I;function xt(){it=new Qp(C),it.init(),qt=new k0(C,it),Et=new qp(C,it,t,qt),ft=new N0(C,it),Et.reverseDepthBuffer&&f&&ft.buffers.depth.setReversed(!0),Ft=new nm(C),Tt=new M0,T=new O0(C,it,ft,Tt,Et,qt,Ft),S=new Zp(v),z=new Kp(v),J=new cf(C),de=new Xp(C,J),Q=new tm(C,J,Ft,de),j=new rm(C,Q,J,Ft),Ht=new im(C,Et,T),st=new Yp(Tt),Dt=new x0(v,S,z,it,Et,de,st),vt=new $0(v,Tt),At=new S0,jt=new R0(it),Bt=new Wp(v,S,z,ft,j,d,l),Ct=new I0(v,j,Et),I=new q0(C,Ft,Et,ft),Pt=new $p(C,it,Ft),Kt=new em(C,it,Ft),Ft.programs=Dt.programs,v.capabilities=Et,v.extensions=it,v.properties=Tt,v.renderLists=At,v.shadowMap=Ct,v.state=ft,v.info=Ft}xt();const q=new W0(v,C);this.xr=q,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const b=it.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=it.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(B,nt,!1))},this.getSize=function(b){return b.set(B,nt)},this.setSize=function(b,U,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=b,nt=U,e.width=Math.floor(b*W),e.height=Math.floor(U*W),G===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(B*W,nt*W).floor()},this.setDrawingBufferSize=function(b,U,G){B=b,nt=U,W=G,e.width=Math.floor(b*G),e.height=Math.floor(U*G),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(Rt)},this.setViewport=function(b,U,G,V){b.isVector4?Rt.set(b.x,b.y,b.z,b.w):Rt.set(b,U,G,V),ft.viewport(A.copy(Rt).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(zt)},this.setScissor=function(b,U,G,V){b.isVector4?zt.set(b.x,b.y,b.z,b.w):zt.set(b,U,G,V),ft.scissor(O.copy(zt).multiplyScalar(W).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(b){ft.setScissorTest(ie=b)},this.setOpaqueSort=function(b){dt=b},this.setTransparentSort=function(b){Mt=b},this.getClearColor=function(b){return b.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(b=!0,U=!0,G=!0){let V=0;if(b){let N=!1;if(L!==null){const lt=L.texture.format;N=lt===ba||lt===Ea||lt===Sa}if(N){const lt=L.texture.type,St=lt===In||lt===vi||lt===yr||lt===Zi||lt===Ma||lt===ya,It=Bt.getClearColor(),Ut=Bt.getClearAlpha(),Vt=It.r,Xt=It.g,Nt=It.b;St?(g[0]=Vt,g[1]=Xt,g[2]=Nt,g[3]=Ut,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Vt,_[1]=Xt,_[2]=Nt,_[3]=Ut,C.clearBufferiv(C.COLOR,0,_))}else V|=C.COLOR_BUFFER_BIT}U&&(V|=C.DEPTH_BUFFER_BIT),G&&(V|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),At.dispose(),jt.dispose(),Tt.dispose(),S.dispose(),z.dispose(),j.dispose(),de.dispose(),I.dispose(),Dt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Ya),q.removeEventListener("sessionend",Za),ni.stop()};function K(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const b=Ft.autoReset,U=Ct.enabled,G=Ct.autoUpdate,V=Ct.needsUpdate,N=Ct.type;xt(),Ft.autoReset=b,Ct.enabled=U,Ct.autoUpdate=G,Ct.needsUpdate=V,Ct.type=N}function yt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Wt(b){const U=b.target;U.removeEventListener("dispose",Wt),xe(U)}function xe(b){Le(b),Tt.remove(b)}function Le(b){const U=Tt.get(b).programs;U!==void 0&&(U.forEach(function(G){Dt.releaseProgram(G)}),b.isShaderMaterial&&Dt.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,G,V,N,lt){U===null&&(U=ut);const St=N.isMesh&&N.matrixWorld.determinant()<0,It=Ph(b,U,G,V,N);ft.setMaterial(V,St);let Ut=G.index,Vt=1;if(V.wireframe===!0){if(Ut=Q.getWireframeAttribute(G),Ut===void 0)return;Vt=2}const Xt=G.drawRange,Nt=G.attributes.position;let re=Xt.start*Vt,pe=(Xt.start+Xt.count)*Vt;lt!==null&&(re=Math.max(re,lt.start*Vt),pe=Math.min(pe,(lt.start+lt.count)*Vt)),Ut!==null?(re=Math.max(re,0),pe=Math.min(pe,Ut.count)):Nt!=null&&(re=Math.max(re,0),pe=Math.min(pe,Nt.count));const me=pe-re;if(me<0||me===1/0)return;de.setup(N,V,It,G,Ut);let Ge,ae=Pt;if(Ut!==null&&(Ge=J.get(Ut),ae=Kt,ae.setIndex(Ge)),N.isMesh)V.wireframe===!0?(ft.setLineWidth(V.wireframeLinewidth*Z()),ae.setMode(C.LINES)):ae.setMode(C.TRIANGLES);else if(N.isLine){let Ot=V.linewidth;Ot===void 0&&(Ot=1),ft.setLineWidth(Ot*Z()),N.isLineSegments?ae.setMode(C.LINES):N.isLineLoop?ae.setMode(C.LINE_LOOP):ae.setMode(C.LINE_STRIP)}else N.isPoints?ae.setMode(C.POINTS):N.isSprite&&ae.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ae.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))ae.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ot=N._multiDrawStarts,yn=N._multiDrawCounts,le=N._multiDrawCount,sn=Ut?J.get(Ut).bytesPerElement:1,Ei=Tt.get(V).currentProgram.getUniforms();for(let Ye=0;Ye<le;Ye++)Ei.setValue(C,"_gl_DrawID",Ye),ae.render(Ot[Ye]/sn,yn[Ye])}else if(N.isInstancedMesh)ae.renderInstances(re,me,N.count);else if(G.isInstancedBufferGeometry){const Ot=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,yn=Math.min(G.instanceCount,Ot);ae.renderInstances(re,me,yn)}else ae.render(re,me)};function ce(b,U,G){b.transparent===!0&&b.side===Xe&&b.forceSinglePass===!1?(b.side=$e,b.needsUpdate=!0,Ur(b,U,G),b.side=jn,b.needsUpdate=!0,Ur(b,U,G),b.side=Xe):Ur(b,U,G)}this.compile=function(b,U,G=null){G===null&&(G=b),p=jt.get(G),p.init(U),x.push(p),G.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),b!==G&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const V=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const lt=N.material;if(lt)if(Array.isArray(lt))for(let St=0;St<lt.length;St++){const It=lt[St];ce(It,G,N),V.add(It)}else ce(lt,G,N),V.add(lt)}),x.pop(),p=null,V},this.compileAsync=function(b,U,G=null){const V=this.compile(b,U,G);return new Promise(N=>{function lt(){if(V.forEach(function(St){Tt.get(St).currentProgram.isReady()&&V.delete(St)}),V.size===0){N(b);return}setTimeout(lt,10)}it.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let rn=null;function Mn(b){rn&&rn(b)}function Ya(){ni.stop()}function Za(){ni.start()}const ni=new Vc;ni.setAnimationLoop(Mn),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(b){rn=b,q.setAnimationLoop(b),b===null?ni.stop():ni.start()},q.addEventListener("sessionstart",Ya),q.addEventListener("sessionend",Za),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,U,L),p=jt.get(b,x.length),p.init(U),x.push(p),tt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(tt),Lt=this.localClippingEnabled,ot=st.init(this.clippingPlanes,Lt),m=At.get(b,y.length),m.init(),y.push(m),q.enabled===!0&&q.isPresenting===!0){const lt=v.xr.getDepthSensingMesh();lt!==null&&Us(lt,U,-1/0,v.sortObjects)}Us(b,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(dt,Mt),H=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,H&&Bt.addToRenderList(m,b),this.info.render.frame++,ot===!0&&st.beginShadows();const G=p.state.shadowsArray;Ct.render(G,b,U),ot===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const lt=U.cameras;if(N.length>0)for(let St=0,It=lt.length;St<It;St++){const Ut=lt[St];ja(V,N,b,Ut)}H&&Bt.render(b);for(let St=0,It=lt.length;St<It;St++){const Ut=lt[St];Ja(m,b,Ut,Ut.viewport)}}else N.length>0&&ja(V,N,b,U),H&&Bt.render(b),Ja(m,b,U);L!==null&&(T.updateMultisampleRenderTarget(L),T.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(v,b,U),de.resetDefaultState(),E=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],ot===!0&&st.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Us(b,U,G,V){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){V&&rt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(tt);const St=j.update(b),It=b.material;It.visible&&m.push(b,St,It,G,rt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){const St=j.update(b),It=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),rt.copy(b.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),rt.copy(St.boundingSphere.center)),rt.applyMatrix4(b.matrixWorld).applyMatrix4(tt)),Array.isArray(It)){const Ut=St.groups;for(let Vt=0,Xt=Ut.length;Vt<Xt;Vt++){const Nt=Ut[Vt],re=It[Nt.materialIndex];re&&re.visible&&m.push(b,St,re,G,rt.z,Nt)}}else It.visible&&m.push(b,St,It,G,rt.z,null)}}const lt=b.children;for(let St=0,It=lt.length;St<It;St++)Us(lt[St],U,G,V)}function Ja(b,U,G,V){const N=b.opaque,lt=b.transmissive,St=b.transparent;p.setupLightsView(G),ot===!0&&st.setGlobalState(v.clippingPlanes,G),V&&ft.viewport(A.copy(V)),N.length>0&&Ir(N,U,G),lt.length>0&&Ir(lt,U,G),St.length>0&&Ir(St,U,G),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function ja(b,U,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Un(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?xi:In,minFilter:pi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const lt=p.state.transmissionRenderTarget[V.id],St=V.viewport||A;lt.setSize(St.z,St.w);const It=v.getRenderTarget();v.setRenderTarget(lt),v.getClearColor(k),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),H&&Bt.render(G);const Ut=v.toneMapping;v.toneMapping=Yn;const Vt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),ot===!0&&st.setGlobalState(v.clippingPlanes,V),Ir(b,G,V),T.updateMultisampleRenderTarget(lt),T.updateRenderTargetMipmap(lt),it.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Nt=0,re=U.length;Nt<re;Nt++){const pe=U[Nt],me=pe.object,Ge=pe.geometry,ae=pe.material,Ot=pe.group;if(ae.side===Xe&&me.layers.test(V.layers)){const yn=ae.side;ae.side=$e,ae.needsUpdate=!0,Ka(me,G,V,Ge,ae,Ot),ae.side=yn,ae.needsUpdate=!0,Xt=!0}}Xt===!0&&(T.updateMultisampleRenderTarget(lt),T.updateRenderTargetMipmap(lt))}v.setRenderTarget(It),v.setClearColor(k,X),Vt!==void 0&&(V.viewport=Vt),v.toneMapping=Ut}function Ir(b,U,G){const V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,lt=b.length;N<lt;N++){const St=b[N],It=St.object,Ut=St.geometry,Vt=V===null?St.material:V,Xt=St.group;It.layers.test(G.layers)&&Ka(It,U,G,Ut,Vt,Xt)}}function Ka(b,U,G,V,N,lt){b.onBeforeRender(v,U,G,V,N,lt),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(v,U,G,V,b,lt),N.transparent===!0&&N.side===Xe&&N.forceSinglePass===!1?(N.side=$e,N.needsUpdate=!0,v.renderBufferDirect(G,U,V,N,b,lt),N.side=jn,N.needsUpdate=!0,v.renderBufferDirect(G,U,V,N,b,lt),N.side=Xe):v.renderBufferDirect(G,U,V,N,b,lt),b.onAfterRender(v,U,G,V,N,lt)}function Ur(b,U,G){U.isScene!==!0&&(U=ut);const V=Tt.get(b),N=p.state.lights,lt=p.state.shadowsArray,St=N.state.version,It=Dt.getParameters(b,N.state,lt,U,G),Ut=Dt.getProgramCacheKey(It);let Vt=V.programs;V.environment=b.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(b.isMeshStandardMaterial?z:S).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Vt===void 0&&(b.addEventListener("dispose",Wt),Vt=new Map,V.programs=Vt);let Xt=Vt.get(Ut);if(Xt!==void 0){if(V.currentProgram===Xt&&V.lightsStateVersion===St)return tl(b,It),Xt}else It.uniforms=Dt.getUniforms(b),b.onBeforeCompile(It,v),Xt=Dt.acquireProgram(It,Ut),Vt.set(Ut,Xt),V.uniforms=It.uniforms;const Nt=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Nt.clippingPlanes=st.uniform),tl(b,It),V.needsLights=Dh(b),V.lightsStateVersion=St,V.needsLights&&(Nt.ambientLightColor.value=N.state.ambient,Nt.lightProbe.value=N.state.probe,Nt.directionalLights.value=N.state.directional,Nt.directionalLightShadows.value=N.state.directionalShadow,Nt.spotLights.value=N.state.spot,Nt.spotLightShadows.value=N.state.spotShadow,Nt.rectAreaLights.value=N.state.rectArea,Nt.ltc_1.value=N.state.rectAreaLTC1,Nt.ltc_2.value=N.state.rectAreaLTC2,Nt.pointLights.value=N.state.point,Nt.pointLightShadows.value=N.state.pointShadow,Nt.hemisphereLights.value=N.state.hemi,Nt.directionalShadowMap.value=N.state.directionalShadowMap,Nt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Nt.spotShadowMap.value=N.state.spotShadowMap,Nt.spotLightMatrix.value=N.state.spotLightMatrix,Nt.spotLightMap.value=N.state.spotLightMap,Nt.pointShadowMap.value=N.state.pointShadowMap,Nt.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Xt,V.uniformsList=null,Xt}function Qa(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=hs.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function tl(b,U){const G=Tt.get(b);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Ph(b,U,G,V,N){U.isScene!==!0&&(U=ut),T.resetTextureUnits();const lt=U.fog,St=V.isMeshStandardMaterial?U.environment:null,It=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:nr,Ut=(V.isMeshStandardMaterial?z:S).get(V.envMap||St),Vt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Xt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Nt=!!G.morphAttributes.position,re=!!G.morphAttributes.normal,pe=!!G.morphAttributes.color;let me=Yn;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(me=v.toneMapping);const Ge=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ae=Ge!==void 0?Ge.length:0,Ot=Tt.get(V),yn=p.state.lights;if(ot===!0&&(Lt===!0||b!==M)){const Qe=b===M&&V.id===E;st.setState(V,b,Qe)}let le=!1;V.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==yn.state.version||Ot.outputColorSpace!==It||N.isBatchedMesh&&Ot.batching===!1||!N.isBatchedMesh&&Ot.batching===!0||N.isBatchedMesh&&Ot.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ot.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ot.instancing===!1||!N.isInstancedMesh&&Ot.instancing===!0||N.isSkinnedMesh&&Ot.skinning===!1||!N.isSkinnedMesh&&Ot.skinning===!0||N.isInstancedMesh&&Ot.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ot.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ot.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ot.instancingMorph===!1&&N.morphTexture!==null||Ot.envMap!==Ut||V.fog===!0&&Ot.fog!==lt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==st.numPlanes||Ot.numIntersection!==st.numIntersection)||Ot.vertexAlphas!==Vt||Ot.vertexTangents!==Xt||Ot.morphTargets!==Nt||Ot.morphNormals!==re||Ot.morphColors!==pe||Ot.toneMapping!==me||Ot.morphTargetsCount!==ae)&&(le=!0):(le=!0,Ot.__version=V.version);let sn=Ot.currentProgram;le===!0&&(sn=Ur(V,U,N));let Ei=!1,Ye=!1,lr=!1;const ge=sn.getUniforms(),pn=Ot.uniforms;if(ft.useProgram(sn.program)&&(Ei=!0,Ye=!0,lr=!0),V.id!==E&&(E=V.id,Ye=!0),Ei||M!==b){ft.buffers.depth.getReversed()?(ht.copy(b.projectionMatrix),Ou(ht),ku(ht),ge.setValue(C,"projectionMatrix",ht)):ge.setValue(C,"projectionMatrix",b.projectionMatrix),ge.setValue(C,"viewMatrix",b.matrixWorldInverse);const Fn=ge.map.cameraPosition;Fn!==void 0&&Fn.setValue(C,mt.setFromMatrixPosition(b.matrixWorld)),Et.logarithmicDepthBuffer&&ge.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ge.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Ye=!0,lr=!0)}if(N.isSkinnedMesh){ge.setOptional(C,N,"bindMatrix"),ge.setOptional(C,N,"bindMatrixInverse");const Qe=N.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),ge.setValue(C,"boneTexture",Qe.boneTexture,T))}N.isBatchedMesh&&(ge.setOptional(C,N,"batchingTexture"),ge.setValue(C,"batchingTexture",N._matricesTexture,T),ge.setOptional(C,N,"batchingIdTexture"),ge.setValue(C,"batchingIdTexture",N._indirectTexture,T),ge.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&ge.setValue(C,"batchingColorTexture",N._colorsTexture,T));const cr=G.morphAttributes;if((cr.position!==void 0||cr.normal!==void 0||cr.color!==void 0)&&Ht.update(N,G,sn),(Ye||Ot.receiveShadow!==N.receiveShadow)&&(Ot.receiveShadow=N.receiveShadow,ge.setValue(C,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(pn.envMap.value=Ut,pn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(pn.envMapIntensity.value=U.environmentIntensity),Ye&&(ge.setValue(C,"toneMappingExposure",v.toneMappingExposure),Ot.needsLights&&Lh(pn,lr),lt&&V.fog===!0&&vt.refreshFogUniforms(pn,lt),vt.refreshMaterialUniforms(pn,V,W,nt,p.state.transmissionRenderTarget[b.id]),hs.upload(C,Qa(Ot),pn,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(hs.upload(C,Qa(Ot),pn,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ge.setValue(C,"center",N.center),ge.setValue(C,"modelViewMatrix",N.modelViewMatrix),ge.setValue(C,"normalMatrix",N.normalMatrix),ge.setValue(C,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Qe=V.uniformsGroups;for(let Fn=0,On=Qe.length;Fn<On;Fn++){const el=Qe[Fn];I.update(el,sn),I.bind(el,sn)}}return sn}function Lh(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Dh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,U,G){Tt.get(b.texture).__webglTexture=U,Tt.get(b.depthTexture).__webglTexture=G;const V=Tt.get(b);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const G=Tt.get(b);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,G=0){L=b,w=U,R=G;let V=!0,N=null,lt=!1,St=!1;if(b){const Ut=Tt.get(b);if(Ut.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(C.FRAMEBUFFER,null),V=!1;else if(Ut.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(Ut.__hasExternalTextures)T.rebindTextures(b,Tt.get(b.texture).__webglTexture,Tt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Nt=b.depthTexture;if(Ut.__boundDepthTexture!==Nt){if(Nt!==null&&Tt.has(Nt)&&(b.width!==Nt.image.width||b.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}const Vt=b.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(St=!0);const Xt=Tt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Xt[U])?N=Xt[U][G]:N=Xt[U],lt=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?N=Tt.get(b).__webglMultisampledFramebuffer:Array.isArray(Xt)?N=Xt[G]:N=Xt,A.copy(b.viewport),O.copy(b.scissor),F=b.scissorTest}else A.copy(Rt).multiplyScalar(W).floor(),O.copy(zt).multiplyScalar(W).floor(),F=ie;if(ft.bindFramebuffer(C.FRAMEBUFFER,N)&&V&&ft.drawBuffers(b,N),ft.viewport(A),ft.scissor(O),ft.setScissorTest(F),lt){const Ut=Tt.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ut.__webglTexture,G)}else if(St){const Ut=Tt.get(b.texture),Vt=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ut.__webglTexture,G||0,Vt)}E=-1},this.readRenderTargetPixels=function(b,U,G,V,N,lt,St){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Tt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&St!==void 0&&(It=It[St]),It){ft.bindFramebuffer(C.FRAMEBUFFER,It);try{const Ut=b.texture,Vt=Ut.format,Xt=Ut.type;if(!Et.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-V&&G>=0&&G<=b.height-N&&C.readPixels(U,G,V,N,qt.convert(Vt),qt.convert(Xt),lt)}finally{const Ut=L!==null?Tt.get(L).__webglFramebuffer:null;ft.bindFramebuffer(C.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(b,U,G,V,N,lt,St){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Tt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&St!==void 0&&(It=It[St]),It){const Ut=b.texture,Vt=Ut.format,Xt=Ut.type;if(!Et.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-V&&G>=0&&G<=b.height-N){ft.bindFramebuffer(C.FRAMEBUFFER,It);const Nt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Nt),C.bufferData(C.PIXEL_PACK_BUFFER,lt.byteLength,C.STREAM_READ),C.readPixels(U,G,V,N,qt.convert(Vt),qt.convert(Xt),0);const re=L!==null?Tt.get(L).__webglFramebuffer:null;ft.bindFramebuffer(C.FRAMEBUFFER,re);const pe=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Fu(C,pe,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Nt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,lt),C.deleteBuffer(Nt),C.deleteSync(pe),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,G=0){b.isTexture!==!0&&(mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const V=Math.pow(2,-G),N=Math.floor(b.image.width*V),lt=Math.floor(b.image.height*V),St=U!==null?U.x:0,It=U!==null?U.y:0;T.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,G,0,0,St,It,N,lt),ft.unbindTexture()},this.copyTextureToTexture=function(b,U,G=null,V=null,N=0){b.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,b=arguments[1],U=arguments[2],N=arguments[3]||0,G=null);let lt,St,It,Ut,Vt,Xt,Nt,re,pe;const me=b.isCompressedTexture?b.mipmaps[N]:b.image;G!==null?(lt=G.max.x-G.min.x,St=G.max.y-G.min.y,It=G.isBox3?G.max.z-G.min.z:1,Ut=G.min.x,Vt=G.min.y,Xt=G.isBox3?G.min.z:0):(lt=me.width,St=me.height,It=me.depth||1,Ut=0,Vt=0,Xt=0),V!==null?(Nt=V.x,re=V.y,pe=V.z):(Nt=0,re=0,pe=0);const Ge=qt.convert(U.format),ae=qt.convert(U.type);let Ot;U.isData3DTexture?(T.setTexture3D(U,0),Ot=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),Ot=C.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),Ot=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const yn=C.getParameter(C.UNPACK_ROW_LENGTH),le=C.getParameter(C.UNPACK_IMAGE_HEIGHT),sn=C.getParameter(C.UNPACK_SKIP_PIXELS),Ei=C.getParameter(C.UNPACK_SKIP_ROWS),Ye=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,me.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,me.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ut),C.pixelStorei(C.UNPACK_SKIP_ROWS,Vt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Xt);const lr=b.isDataArrayTexture||b.isData3DTexture,ge=U.isDataArrayTexture||U.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const pn=Tt.get(b),cr=Tt.get(U),Qe=Tt.get(pn.__renderTarget),Fn=Tt.get(cr.__renderTarget);ft.bindFramebuffer(C.READ_FRAMEBUFFER,Qe.__webglFramebuffer),ft.bindFramebuffer(C.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let On=0;On<It;On++)lr&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Tt.get(b).__webglTexture,N,Xt+On),b.isDepthTexture?(ge&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Tt.get(U).__webglTexture,N,pe+On),C.blitFramebuffer(Ut,Vt,lt,St,Nt,re,lt,St,C.DEPTH_BUFFER_BIT,C.NEAREST)):ge?C.copyTexSubImage3D(Ot,N,Nt,re,pe+On,Ut,Vt,lt,St):C.copyTexSubImage2D(Ot,N,Nt,re,pe+On,Ut,Vt,lt,St);ft.bindFramebuffer(C.READ_FRAMEBUFFER,null),ft.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ge?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(Ot,N,Nt,re,pe,lt,St,It,Ge,ae,me.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(Ot,N,Nt,re,pe,lt,St,It,Ge,me.data):C.texSubImage3D(Ot,N,Nt,re,pe,lt,St,It,Ge,ae,me):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,N,Nt,re,lt,St,Ge,ae,me.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,N,Nt,re,me.width,me.height,Ge,me.data):C.texSubImage2D(C.TEXTURE_2D,N,Nt,re,lt,St,Ge,ae,me);C.pixelStorei(C.UNPACK_ROW_LENGTH,yn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,le),C.pixelStorei(C.UNPACK_SKIP_PIXELS,sn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ei),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ye),N===0&&U.generateMipmaps&&C.generateMipmap(Ot),ft.unbindTexture()},this.copyTextureToTexture3D=function(b,U,G=null,V=null,N=0){return b.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,b=arguments[2],U=arguments[3],N=arguments[4]||0),mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,U,G,V,N)},this.initRenderTarget=function(b){Tt.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),ft.unbindTexture()},this.resetState=function(){w=0,R=0,L=null,ft.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}class Zc extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Jc extends Fe{constructor(t=null,e=1,i=1,r,s,o,a,l,c=Ce,h=Ce,u,f){super(null,o,a,l,c,h,r,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Z0 extends Fe{constructor(t,e,i,r,s,o,a,l,c){super(t,e,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let r=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const h=i[r],f=i[r+1]-h,d=(o-h)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new at:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new D,r=[],s=[],o=[],a=new D,l=new _e;for(let d=0;d<=t;d++){const g=d/t;r[d]=this.getTangentAt(g,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Re(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(Re(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ca extends xn{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new at){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class J0 extends Ca{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Pa(){let n=0,t=0,e=0,i=0;function r(s,o,a,l){n=s,t=a,e=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return n+t*s+e*o+i*a}}}const ns=new D,fo=new Pa,po=new Pa,mo=new Pa;class jc extends xn{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new D){const i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(ns.subVectors(r[0],r[1]).add(r[0]),c=ns);const u=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(ns.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=ns),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),fo.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),po.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),mo.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(fo.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),po.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),mo.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(fo.calc(l),po.calc(l),mo.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new D().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function tc(n,t,e,i,r){const s=(i-t)*.5,o=(r-e)*.5,a=n*n,l=n*a;return(2*e-2*i+s+o)*l+(-3*e+3*i-2*s-o)*a+s*n+e}function j0(n,t){const e=1-n;return e*e*t}function K0(n,t){return 2*(1-n)*n*t}function Q0(n,t){return n*n*t}function vr(n,t,e,i){return j0(n,t)+K0(n,e)+Q0(n,i)}function tg(n,t){const e=1-n;return e*e*e*t}function eg(n,t){const e=1-n;return 3*e*e*n*t}function ng(n,t){return 3*(1-n)*n*n*t}function ig(n,t){return n*n*n*t}function xr(n,t,e,i,r){return tg(n,t)+eg(n,e)+ng(n,i)+ig(n,r)}class Kc extends xn{constructor(t=new at,e=new at,i=new at,r=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new at){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(xr(t,r.x,s.x,o.x,a.x),xr(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class rg extends xn{constructor(t=new D,e=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new D){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(xr(t,r.x,s.x,o.x,a.x),xr(t,r.y,s.y,o.y,a.y),xr(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qc extends xn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sg extends xn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class th extends xn{constructor(t=new at,e=new at,i=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new at){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(vr(t,r.x,s.x,o.x),vr(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class eh extends xn{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(vr(t,r.x,s.x,o.x),vr(t,r.y,s.y,o.y),vr(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nh extends xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return i.set(tc(a,l.x,c.x,h.x,u.x),tc(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new at().fromArray(r))}return this}}var gs=Object.freeze({__proto__:null,ArcCurve:J0,CatmullRomCurve3:jc,CubicBezierCurve:Kc,CubicBezierCurve3:rg,EllipseCurve:Ca,LineCurve:Qc,LineCurve3:sg,QuadraticBezierCurve:th,QuadraticBezierCurve3:eh,SplineCurve:nh});class og extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gs[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(new gs[r.type]().fromJSON(r))}return this}}class ec extends og{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Qc(this.currentPoint.clone(),new at(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){const s=new th(this.currentPoint.clone(),new at(t,e),new at(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,s,o){const a=new Kc(this.currentPoint.clone(),new at(t,e),new at(i,r),new at(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new nh(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,r,s,o),this}absarc(t,e,i,r,s,o){return this.absellipse(t,e,i,i,r,s,o),this}ellipse(t,e,i,r,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,r,s,o,a,l),this}absellipse(t,e,i,r,s,o,a,l){const c=new Ca(t,e,i,r,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class La extends Oe{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:r},e=Math.floor(e),r=Re(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],h=1/e,u=new D,f=new at,d=new D,g=new D,_=new D;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let y=0;y<=e;y++){const x=i+y*h*r,v=Math.sin(x),P=Math.cos(x);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*v,u.y=t[w].y,u.z=t[w].x*P,o.push(u.x,u.y,u.z),f.x=y/e,f.y=w/(t.length-1),a.push(f.x,f.y);const R=l[3*w+0]*v,L=l[3*w+1],E=l[3*w+0]*P;c.push(R,L,E)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){const v=x+y*t.length,P=v,w=v+t.length,R=v+t.length+1,L=v+1;s.push(P,w,L),s.push(R,L,w)}this.setIndex(s),this.setAttribute("position",new oe(o,3)),this.setAttribute("uv",new oe(a,2)),this.setAttribute("normal",new oe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new La(t.points,t.segments,t.phiStart,t.phiLength)}}class Rr extends Oe{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new D,h=new at;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=i+u/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(a,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Nn extends Oe{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=i/2;let p=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(d,2));function y(){const v=new D,P=new D;let w=0;const R=(e-t)/i;for(let L=0;L<=s;L++){const E=[],M=L/s,A=M*(e-t)+t;for(let O=0;O<=r;O++){const F=O/r,k=F*l+a,X=Math.sin(k),B=Math.cos(k);P.x=A*X,P.y=-M*i+m,P.z=A*B,u.push(P.x,P.y,P.z),v.set(X,R,B).normalize(),f.push(v.x,v.y,v.z),d.push(F,1-M),E.push(g++)}_.push(E)}for(let L=0;L<r;L++)for(let E=0;E<s;E++){const M=_[E][L],A=_[E+1][L],O=_[E+1][L+1],F=_[E][L+1];(t>0||E!==0)&&(h.push(M,A,F),w+=3),(e>0||E!==s-1)&&(h.push(A,O,F),w+=3)}c.addGroup(p,w,0),p+=w}function x(v){const P=g,w=new at,R=new D;let L=0;const E=v===!0?t:e,M=v===!0?1:-1;for(let O=1;O<=r;O++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const A=g;for(let O=0;O<=r;O++){const k=O/r*l+a,X=Math.cos(k),B=Math.sin(k);R.x=E*B,R.y=m*M,R.z=E*X,u.push(R.x,R.y,R.z),f.push(0,M,0),w.x=X*.5+.5,w.y=B*.5*M+.5,d.push(w.x,w.y),g++}for(let O=0;O<r;O++){const F=P+O,k=A+O;v===!0?h.push(k,k+1,F):h.push(k+1,k,F),L+=3}c.addGroup(p,L,v===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Cr extends Nn{constructor(t=1,e=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Cr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rs extends Oe{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new oe(s,3)),this.setAttribute("normal",new oe(s.slice(),3)),this.setAttribute("uv",new oe(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new D,v=new D,P=new D;for(let w=0;w<e.length;w+=3)d(e[w+0],x),d(e[w+1],v),d(e[w+2],P),l(x,v,P,y)}function l(y,x,v,P){const w=P+1,R=[];for(let L=0;L<=w;L++){R[L]=[];const E=y.clone().lerp(v,L/w),M=x.clone().lerp(v,L/w),A=w-L;for(let O=0;O<=A;O++)O===0&&L===w?R[L][O]=E:R[L][O]=E.clone().lerp(M,O/A)}for(let L=0;L<w;L++)for(let E=0;E<2*(w-L)-1;E++){const M=Math.floor(E/2);E%2===0?(f(R[L][M+1]),f(R[L+1][M]),f(R[L][M])):(f(R[L][M+1]),f(R[L+1][M+1]),f(R[L+1][M]))}}function c(y){const x=new D;for(let v=0;v<s.length;v+=3)x.x=s[v+0],x.y=s[v+1],x.z=s[v+2],x.normalize().multiplyScalar(y),s[v+0]=x.x,s[v+1]=x.y,s[v+2]=x.z}function h(){const y=new D;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];const v=m(y)/2/Math.PI+.5,P=p(y)/Math.PI+.5;o.push(v,1-P)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const x=o[y+0],v=o[y+2],P=o[y+4],w=Math.max(x,v,P),R=Math.min(x,v,P);w>.9&&R<.1&&(x<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),P<.2&&(o[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function d(y,x){const v=y*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){const y=new D,x=new D,v=new D,P=new D,w=new at,R=new at,L=new at;for(let E=0,M=0;E<s.length;E+=9,M+=6){y.set(s[E+0],s[E+1],s[E+2]),x.set(s[E+3],s[E+4],s[E+5]),v.set(s[E+6],s[E+7],s[E+8]),w.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),P.copy(y).add(x).add(v).divideScalar(3);const A=m(P);_(w,M+0,y,A),_(R,M+2,x,A),_(L,M+4,v,A)}}function _(y,x,v,P){P<0&&y.x===1&&(o[x]=y.x-1),v.x===0&&v.z===0&&(o[x]=P/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rs(t.vertices,t.indices,t.radius,t.details)}}class ih extends ec{constructor(t){super(t),this.uuid=rr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(new ec().fromJSON(r))}return this}}const ag={triangulate:function(n,t,e=2){const i=t&&t.length,r=i?t[0]*e:n.length;let s=rh(n,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,f,d;if(i&&(s=fg(n,t,s,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let g=e;g<r;g+=e)u=n[g],f=n[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Sr(s,o,e,a,l,d,0),o}};function rh(n,t,e,i,r){let s,o;if(r===Eg(n,t,e,i)>0)for(s=t;s<e;s+=i)o=nc(s,n[s],n[s+1],o);else for(s=e-i;s>=t;s-=i)o=nc(s,n[s],n[s+1],o);return o&&Cs(o,o.next)&&(br(o),o=o.next),o}function Mi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Cs(e,e.next)||ve(e.prev,e,e.next)===0)){if(br(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Sr(n,t,e,i,r,s,o){if(!n)return;!o&&s&&_g(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?cg(n,i,r,s):lg(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),br(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=hg(Mi(n),t,e),Sr(n,t,e,i,r,s,2)):o===2&&ug(n,t,e,i,r,s):Sr(Mi(n),t,e,i,r,s,1);break}}}function lg(n){const t=n.prev,e=n,i=n.next;if(ve(t,e,i)>=0)return!1;const r=t.x,s=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=r<s?r<o?r:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&zi(r,a,s,l,o,c,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function cg(n,t,e,i){const r=n.prev,s=n,o=n.next;if(ve(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=la(d,g,t,e,i),y=la(_,m,t,e,i);let x=n.prevZ,v=n.nextZ;for(;x&&x.z>=p&&v&&v.z<=y;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&zi(a,h,l,u,c,f,x.x,x.y)&&ve(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&zi(a,h,l,u,c,f,v.x,v.y)&&ve(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&zi(a,h,l,u,c,f,x.x,x.y)&&ve(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&zi(a,h,l,u,c,f,v.x,v.y)&&ve(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function hg(n,t,e){let i=n;do{const r=i.prev,s=i.next.next;!Cs(r,s)&&sh(r,i,i.next,s)&&Er(r,s)&&Er(s,r)&&(t.push(r.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),br(i),br(i.next),i=n=s),i=i.next}while(i!==n);return Mi(i)}function ug(n,t,e,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Mg(o,a)){let l=oh(o,a);o=Mi(o,o.next),l=Mi(l,l.next),Sr(o,t,e,i,r,s,0),Sr(l,t,e,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function fg(n,t,e,i){const r=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*i,l=s<o-1?t[s+1]*i:n.length,c=rh(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(xg(c));for(r.sort(dg),s=0;s<r.length;s++)e=pg(r[s],e);return e}function dg(n,t){return n.x-t.x}function pg(n,t){const e=mg(n,t);if(!e)return t;const i=oh(e,n);return Mi(i,i.next),Mi(e,e.next)}function mg(n,t){let e=t,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>i&&(i=f,r=e.x<e.next.x?e:e.next,f===s))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let h=1/0,u;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&zi(o<c?s:i,o,l,c,o<c?i:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),Er(e,n)&&(u<h||u===h&&(e.x>r.x||e.x===r.x&&gg(r,e)))&&(r=e,h=u)),e=e.next;while(e!==a);return r}function gg(n,t){return ve(n.prev,n,t.prev)<0&&ve(t.next,n,n.next)<0}function _g(n,t,e,i){let r=n;do r.z===0&&(r.z=la(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,vg(r)}function vg(n){let t,e,i,r,s,o,a,l,c=1;do{for(e=n,n=null,s=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(r=e,e=e.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;e=i}s.nextZ=null,c*=2}while(o>1);return n}function la(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function xg(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function zi(n,t,e,i,r,s,o,a){return(r-o)*(t-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(i-a)}function Mg(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!yg(n,t)&&(Er(n,t)&&Er(t,n)&&Sg(n,t)&&(ve(n.prev,n,t.prev)||ve(n,t.prev,t))||Cs(n,t)&&ve(n.prev,n,n.next)>0&&ve(t.prev,t,t.next)>0)}function ve(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Cs(n,t){return n.x===t.x&&n.y===t.y}function sh(n,t,e,i){const r=rs(ve(n,t,e)),s=rs(ve(n,t,i)),o=rs(ve(e,i,n)),a=rs(ve(e,i,t));return!!(r!==s&&o!==a||r===0&&is(n,e,t)||s===0&&is(n,i,t)||o===0&&is(e,n,i)||a===0&&is(e,t,i))}function is(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function rs(n){return n>0?1:n<0?-1:0}function yg(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&sh(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Er(n,t){return ve(n.prev,n,n.next)<0?ve(n,t,n.next)>=0&&ve(n,n.prev,t)>=0:ve(n,t,n.prev)<0||ve(n,n.next,t)<0}function Sg(n,t){let e=n,i=!1;const r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function oh(n,t){const e=new ca(n.i,n.x,n.y),i=new ca(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function nc(n,t,e,i){const r=new ca(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function br(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ca(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Eg(n,t,e,i){let r=0;for(let s=t,o=e-i;s<e;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Mr{static area(t){const e=t.length;let i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return Mr.area(t)<0}static triangulateShape(t,e){const i=[],r=[],s=[];ic(t),rc(i,t);let o=t.length;e.forEach(ic);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,rc(i,e[l]);const a=ag.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function ic(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function rc(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Da extends Oe{constructor(t=new ih([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new oe(r,3)),this.setAttribute("uv",new oe(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:bg;let x,v=!1,P,w,R,L;p&&(x=p.getSpacedPoints(h),v=!0,f=!1,P=p.computeFrenetFrames(h,!1),w=new D,R=new D,L=new D),f||(m=0,d=0,g=0,_=0);const E=a.extractPoints(c);let M=E.shape;const A=E.holes;if(!Mr.isClockWise(M)){M=M.reverse();for(let H=0,Z=A.length;H<Z;H++){const C=A[H];Mr.isClockWise(C)&&(A[H]=C.reverse())}}const F=Mr.triangulateShape(M,A),k=M;for(let H=0,Z=A.length;H<Z;H++){const C=A[H];M=M.concat(C)}function X(H,Z,C){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),H.clone().addScaledVector(Z,C)}const B=M.length,nt=F.length;function W(H,Z,C){let wt,it,Et;const ft=H.x-Z.x,Ft=H.y-Z.y,Tt=C.x-H.x,T=C.y-H.y,S=ft*ft+Ft*Ft,z=ft*T-Ft*Tt;if(Math.abs(z)>Number.EPSILON){const J=Math.sqrt(S),Q=Math.sqrt(Tt*Tt+T*T),j=Z.x-Ft/J,Dt=Z.y+ft/J,vt=C.x-T/Q,At=C.y+Tt/Q,jt=((vt-j)*T-(At-Dt)*Tt)/(ft*T-Ft*Tt);wt=j+ft*jt-H.x,it=Dt+Ft*jt-H.y;const st=wt*wt+it*it;if(st<=2)return new at(wt,it);Et=Math.sqrt(st/2)}else{let J=!1;ft>Number.EPSILON?Tt>Number.EPSILON&&(J=!0):ft<-Number.EPSILON?Tt<-Number.EPSILON&&(J=!0):Math.sign(Ft)===Math.sign(T)&&(J=!0),J?(wt=-Ft,it=ft,Et=Math.sqrt(S)):(wt=ft,it=Ft,Et=Math.sqrt(S/2))}return new at(wt/Et,it/Et)}const dt=[];for(let H=0,Z=k.length,C=Z-1,wt=H+1;H<Z;H++,C++,wt++)C===Z&&(C=0),wt===Z&&(wt=0),dt[H]=W(k[H],k[C],k[wt]);const Mt=[];let Rt,zt=dt.concat();for(let H=0,Z=A.length;H<Z;H++){const C=A[H];Rt=[];for(let wt=0,it=C.length,Et=it-1,ft=wt+1;wt<it;wt++,Et++,ft++)Et===it&&(Et=0),ft===it&&(ft=0),Rt[wt]=W(C[wt],C[Et],C[ft]);Mt.push(Rt),zt=zt.concat(Rt)}for(let H=0;H<m;H++){const Z=H/m,C=d*Math.cos(Z*Math.PI/2),wt=g*Math.sin(Z*Math.PI/2)+_;for(let it=0,Et=k.length;it<Et;it++){const ft=X(k[it],dt[it],wt);ht(ft.x,ft.y,-C)}for(let it=0,Et=A.length;it<Et;it++){const ft=A[it];Rt=Mt[it];for(let Ft=0,Tt=ft.length;Ft<Tt;Ft++){const T=X(ft[Ft],Rt[Ft],wt);ht(T.x,T.y,-C)}}}const ie=g+_;for(let H=0;H<B;H++){const Z=f?X(M[H],zt[H],ie):M[H];v?(R.copy(P.normals[0]).multiplyScalar(Z.x),w.copy(P.binormals[0]).multiplyScalar(Z.y),L.copy(x[0]).add(R).add(w),ht(L.x,L.y,L.z)):ht(Z.x,Z.y,0)}for(let H=1;H<=h;H++)for(let Z=0;Z<B;Z++){const C=f?X(M[Z],zt[Z],ie):M[Z];v?(R.copy(P.normals[H]).multiplyScalar(C.x),w.copy(P.binormals[H]).multiplyScalar(C.y),L.copy(x[H]).add(R).add(w),ht(L.x,L.y,L.z)):ht(C.x,C.y,u/h*H)}for(let H=m-1;H>=0;H--){const Z=H/m,C=d*Math.cos(Z*Math.PI/2),wt=g*Math.sin(Z*Math.PI/2)+_;for(let it=0,Et=k.length;it<Et;it++){const ft=X(k[it],dt[it],wt);ht(ft.x,ft.y,u+C)}for(let it=0,Et=A.length;it<Et;it++){const ft=A[it];Rt=Mt[it];for(let Ft=0,Tt=ft.length;Ft<Tt;Ft++){const T=X(ft[Ft],Rt[Ft],wt);v?ht(T.x,T.y+x[h-1].y,x[h-1].x+C):ht(T.x,T.y,u+C)}}}Y(),ot();function Y(){const H=r.length/3;if(f){let Z=0,C=B*Z;for(let wt=0;wt<nt;wt++){const it=F[wt];tt(it[2]+C,it[1]+C,it[0]+C)}Z=h+m*2,C=B*Z;for(let wt=0;wt<nt;wt++){const it=F[wt];tt(it[0]+C,it[1]+C,it[2]+C)}}else{for(let Z=0;Z<nt;Z++){const C=F[Z];tt(C[2],C[1],C[0])}for(let Z=0;Z<nt;Z++){const C=F[Z];tt(C[0]+B*h,C[1]+B*h,C[2]+B*h)}}i.addGroup(H,r.length/3-H,0)}function ot(){const H=r.length/3;let Z=0;Lt(k,Z),Z+=k.length;for(let C=0,wt=A.length;C<wt;C++){const it=A[C];Lt(it,Z),Z+=it.length}i.addGroup(H,r.length/3-H,1)}function Lt(H,Z){let C=H.length;for(;--C>=0;){const wt=C;let it=C-1;it<0&&(it=H.length-1);for(let Et=0,ft=h+m*2;Et<ft;Et++){const Ft=B*Et,Tt=B*(Et+1),T=Z+wt+Ft,S=Z+it+Ft,z=Z+it+Tt,J=Z+wt+Tt;mt(T,S,z,J)}}}function ht(H,Z,C){l.push(H),l.push(Z),l.push(C)}function tt(H,Z,C){rt(H),rt(Z),rt(C);const wt=r.length/3,it=y.generateTopUV(i,r,wt-3,wt-2,wt-1);ut(it[0]),ut(it[1]),ut(it[2])}function mt(H,Z,C,wt){rt(H),rt(Z),rt(wt),rt(Z),rt(C),rt(wt);const it=r.length/3,Et=y.generateSideWallUV(i,r,it-6,it-3,it-2,it-1);ut(Et[0]),ut(Et[1]),ut(Et[3]),ut(Et[1]),ut(Et[2]),ut(Et[3])}function rt(H){r.push(l[H*3+0]),r.push(l[H*3+1]),r.push(l[H*3+2])}function ut(H){s.push(H.x),s.push(H.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return wg(e,i,t)}static fromJSON(t,e){const i=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];i.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new gs[r.type]().fromJSON(r)),new Da(i,t.options)}}const bg={generateTopUV:function(n,t,e,i,r){const s=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[r*3],h=t[r*3+1];return[new at(s,o),new at(a,l),new at(c,h)]},generateSideWallUV:function(n,t,e,i,r,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[r*3],d=t[r*3+1],g=t[r*3+2],_=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new at(o,1-l),new at(c,1-u),new at(f,1-g),new at(_,1-p)]:[new at(a,1-l),new at(h,1-u),new at(d,1-g),new at(m,1-p)]}};function wg(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ia extends Rs{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ia(t.radius,t.detail)}}class Ua extends Rs{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ua(t.radius,t.detail)}}class yi extends Oe{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new D,f=new D,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const y=[],x=p/i;let v=0;p===0&&o===0?v=.5/e:p===i&&l===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){const w=P/e;u.x=-t*Math.cos(r+w*s)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(r+w*s)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(w+v,1-x),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){const x=h[p][y+1],v=h[p][y],P=h[p+1][y],w=h[p+1][y+1];(p!==0||o>0)&&d.push(x,v,w),(p!==i-1||l<Math.PI)&&d.push(v,P,w)}this.setIndex(d),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Na extends Oe{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new D,u=new D,f=new D;for(let d=0;d<=i;d++)for(let g=0;g<=r;g++){const _=g/r*s,m=d/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=r;g++){const _=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,y=(r+1)*d+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Na(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Fa extends Oe{constructor(t=new eh(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:r,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,l=new D,c=new at;let h=new D;const u=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(d,2));function _(){for(let x=0;x<e;x++)m(x);m(s===!1?e:0),y(),p()}function m(x){h=t.getPointAt(x/e,h);const v=o.normals[x],P=o.binormals[x];for(let w=0;w<=r;w++){const R=w/r*Math.PI*2,L=Math.sin(R),E=-Math.cos(R);l.x=E*v.x+L*P.x,l.y=E*v.y+L*P.y,l.z=E*v.z+L*P.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=e;x++)for(let v=1;v<=r;v++){const P=(r+1)*(x-1)+(v-1),w=(r+1)*x+(v-1),R=(r+1)*x+v,L=(r+1)*(x-1)+v;g.push(P,w,L),g.push(w,R,L)}}function y(){for(let x=0;x<=e;x++)for(let v=0;v<=r;v++)c.x=x/e,c.y=v/r,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Fa(new gs[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Tg extends Ar{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Qt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lc,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class ah extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ag extends ah{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const go=new _e,sc=new D,oc=new D;class Rg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Aa,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;sc.setFromMatrixPosition(t.matrixWorld),e.position.copy(sc),oc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(oc),e.updateMatrixWorld(),go.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(go),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(go)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Cg extends Rg{constructor(){super(new Ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pg extends ah{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new Cg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const ac=new _e;class Lg{constructor(t,e,i=0,r=1/0){this.ray=new Fc(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Ta,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ac.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ac),this}intersectObject(t,e=!0,i=[]){return ha(t,this,i,e),i.sort(lc),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)ha(t[r],this,i,e);return i.sort(lc),i}}function lc(n,t){return n.distance-t.distance}function ha(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)ha(s[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=va);const Zn="#5b3520",Jn={trunk:"#e2a574",leaf:"#83c47b",leafLight:"#b4de94",fir:"#8ccf87",top:"#66ad74",dirt:"#c28c5a",dirtDark:"#a8754a"};function Gt(n){let t=(Math.imul(n|0,2654435761)^2654435769)>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}function ue(n,t){const e=document.createElement("canvas");return e.width=Math.round(n),e.height=Math.round(t),[e,e.getContext("2d")]}function Dg(n,t,{amp:e=1.5,step:i=5,closed:r=!1}={}){const s=[],o=n.length,a=r?o:o-1,l=t()*6.28,c=t()*6.28;let h=0;for(let u=0;u<a;u++){const[f,d]=n[u],[g,_]=n[(u+1)%o],m=Math.hypot(g-f,_-d)||1,p=-(_-d)/m,y=(g-f)/m,x=Math.max(1,Math.ceil(m/i));for(let v=0;v<x;v++){const P=v/x,w=e*(Math.sin(h*.045+l)*.65+Math.sin(h*.17+c)*.35);s.push([f+(g-f)*P+p*w,d+(_-d)*P+y*w]),h+=m/x}}return r||s.push(n[o-1].slice()),s}function kt(n,t,e,{w:i=3,color:r=Zn,closed:s=!1,amp:o=1.3}={}){const a=Dg(t,e,{amp:o,closed:s});s&&a.push(a[0]);const l=e()*6.28,c=.12+e()*.14;n.strokeStyle=r,n.lineCap="round",n.lineJoin="round";for(let h=0;h<a.length-1;h++)n.lineWidth=i*(.7+.55*(.5+.5*Math.sin(h*c+l))),n.beginPath(),n.moveTo(a[h][0],a[h][1]),n.lineTo(a[h+1][0],a[h+1][1]),n.stroke()}function lh(n,t){n.beginPath(),n.moveTo(t[0][0],t[0][1]);for(const e of t)n.lineTo(e[0],e[1]);n.closePath()}function ne(n,t,e){n.fillStyle=e,lh(n,t),n.fill()}function Oa(n,t,e){n.save(),lh(n,t),n.clip(),e(),n.restore()}function Ne(n,t,e,i,r,{n:s=40,lump:o=.08}={}){const a=2+Math.floor(r()*3),l=r()*6.28,c=5+Math.floor(r()*3),h=r()*6.28,u=[];for(let f=0;f<s;f++){const d=f/s*Math.PI*2,g=1+o*(Math.sin(d*a+l)*.6+Math.sin(d*c+h)*.4);u.push([n+Math.cos(d)*e*g,t+Math.sin(d)*i*g])}return u}function ch(n,t,e,i,r){const s=[];for(let o=0;o<r;o++){const a=Math.PI+o/r*Math.PI,l=Math.PI+(o+1)/r*Math.PI,c=n+Math.cos(a)*e,h=t+Math.sin(a)*i,u=n+Math.cos(l)*e,f=t+Math.sin(l)*i,d=(c+u)/2,g=(h+f)/2,_=Math.hypot(u-c,f-h)/2,m=Math.atan2(h-g,c-d),p=Math.atan2(g-t,d-n),y=Math.cos(m+Math.PI/2-p)>0?1:-1;for(let x=0;x<8;x++){const v=m+y*(x/8)*Math.PI;s.push([d+Math.cos(v)*_,g+Math.sin(v)*_*1.05])}}for(let o=0;o<=10;o++){const a=o/10*Math.PI;s.push([n+Math.cos(a)*e,t+Math.sin(a)*i*.45])}return s}function Ig(){const[n,t]=ue(128,64),e=t.createRadialGradient(64,32,4,64,32,62);return e.addColorStop(0,"rgba(50,95,55,.42)"),e.addColorStop(.7,"rgba(50,95,55,.3)"),e.addColorStop(1,"rgba(50,95,55,0)"),t.setTransform(1,0,0,.5,0,16),t.fillStyle=e,t.beginPath(),t.arc(64,32,62,0,Math.PI*2),t.fill(),n}function Ug(n,t="#ffd24a"){const[e,i]=ue(80,80),r=Gt(20+n),s=[];for(let o=0;o<10;o++){const a=-Math.PI/2+o*Math.PI/5,l=o%2?14:32;s.push([40+Math.cos(a)*l,42+Math.sin(a)*l])}return ne(i,s,t),kt(i,s,r,{w:3.4,closed:!0,amp:.6}),e}function Ng(n,t,{H:e=128,lip:i=!0,seed:r=41}={}){const s=n*t,[o,a]=ue(s,e),l=Gt(r),c=Gt(r+1);a.fillStyle=Jn.dirt,a.fillRect(0,0,s,e),a.fillStyle=Jn.dirtDark,a.fillRect(0,e*.72,s,e);for(let h=0;h<26*e/128;h++){const u=l()*s,f=30+l()*(e-48),d=20+l()*40;kt(a,[[u,f],[u+d,f+(l()-.5)*6]],c,{w:2.2,color:"#9a6a40",amp:1})}for(let h=20+l()*40;h<s-10;h+=55+l()*80)kt(a,[[h,16],[h+(l()-.5)*12,16+(.4+l()*.55)*(e-16)]],c,{w:3,amp:1.5});if(i){const h=[[0,0],[s,0]];for(let u=s;u>=0;u-=12)h.push([u,12+7*Math.abs(Math.sin(u*.13))+l()*3]);ne(a,h,Jn.top),kt(a,h.slice(2),c,{w:3.4,amp:.6})}return kt(a,[[0,e-3],[s,e-3]],c,{w:5,amp:1}),o}function Fg(n=1024,t=640){const[e,i]=ue(n,t),r=Gt(61),s=Gt(62),o=i.createLinearGradient(0,0,0,t);o.addColorStop(0,"#7f8fe0"),o.addColorStop(.6,"#a7a6ee"),o.addColorStop(1,"#c9b5ee"),i.fillStyle=o,i.fillRect(0,0,n,t);for(let a=0;a<7;a++){const l=s()*n,c=60+s()*(t-120),h=60+s()*90,u=h*.32,f=3+Math.floor(s()*3),d=ch(l,c,h,u,f);ne(i,d,"#e7c4ee"),Oa(i,d,()=>ne(i,Ne(l,c+u*.55,h*1.1,u*.45,r),"#d7aee6")),kt(i,d,r,{w:2.6,closed:!0,color:"#6d5aa8"})}return e}const Og=new dn({side:Xe,vertexShader:`
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
    }`}),kg=new dn({side:Xe,uniforms:{map:{value:null}},vertexShader:`
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
    }`}),ki=new dn({uniforms:{tColor:{value:null},tND:{value:null},texel:{value:new at},seed:{value:0},lineW:{value:1.3},ink:{value:new Qt(Zn)}},depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
    }`});function Bg(n){const t=new Un(1,1,{samples:4,type:xi}),e=new Un(1,1,{type:xi,minFilter:Ce,magFilter:Ce}),i=new Jt(new He(2,2),ki),r=new Zc;r.add(i);const s=new Ts(-1,1,1,-1,0,1),o=new at,a=[];function l(){n.getDrawingBufferSize(o),t.setSize(o.x,o.y),e.setSize(o.x,o.y),ki.uniforms.texel.value.set(1/o.x,1/o.y),ki.uniforms.lineW.value=1.25*n.getPixelRatio()}function c(h,u,f){n.getDrawingBufferSize(o),(o.x!==t.width||o.y!==t.height)&&l(),n.setRenderTarget(t),n.render(h,u);const d=h.background;h.background=null,h.traverse(_=>{if(!(!_.isMesh||!_.visible)){if(_.userData.noInk){_.visible=!1,a.push([_,null]);return}a.push([_,_.material]),_.userData.sprite?(_.material=kg,_.onBeforeRender=Hg):_.material=Og}});const g=n.getClearAlpha();n.getClearColor(cc),n.setClearColor(0,0),n.setRenderTarget(e),n.render(h,u),n.setClearColor(cc,g);for(const[_,m]of a)m?(_.material=m,_.onBeforeRender=zg):_.visible=!0;a.length=0,h.background=d,ki.uniforms.tColor.value=t.texture,ki.uniforms.tND.value=e.texture,ki.uniforms.seed.value=f,n.setRenderTarget(null),n.render(r,s)}return{render:c,setSize:l}}const cc=new Qt,zg=()=>{};function Hg(n,t,e,i,r){r.uniforms.map.value=this.userData.colorMap(),r.uniformsNeedUpdate=!0}function Gg(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new Oe;let c=0;for(let h=0;h<n.length;++h){const u=n[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const u=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(const h in s){const u=hc(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);const g=hc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function hc(n){let t,e,i,r=-1,s=0;for(let c=0;c<n.length;++c){const h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const o=new t(s),a=new fn(o,e,i);let l=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){const _=h.getComponent(f,g);a.setComponent(f+u,g,_)}}else o.set(h.array,l);l+=h.count*e}return r!==void 0&&(a.gpuType=r),a}function Vg(n,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},i=n.getIndex(),r=n.getAttribute("position"),s=i?i.count:r.count;let o=0;const a=Object.keys(n.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let y=0,x=a.length;y<x;y++){const v=a[y],P=n.attributes[v];l[v]=new P.constructor(new P.array.constructor(P.count*P.itemSize),P.itemSize,P.normalized);const w=n.morphAttributes[v];w&&(c[v]||(c[v]=[]),w.forEach((R,L)=>{const E=new R.array.constructor(R.count*R.itemSize);c[v][L]=new R.constructor(E,R.itemSize,R.normalized)}))}const d=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),m=d*_;for(let y=0;y<s;y++){const x=i?i.getX(y):y;let v="";for(let P=0,w=a.length;P<w;P++){const R=a[P],L=n.getAttribute(R),E=L.itemSize;for(let M=0;M<E;M++)v+=`${~~(L[u[M]](x)*_+m)},`}if(v in e)h.push(e[v]);else{for(let P=0,w=a.length;P<w;P++){const R=a[P],L=n.getAttribute(R),E=n.morphAttributes[R],M=L.itemSize,A=l[R],O=c[R];for(let F=0;F<M;F++){const k=u[F],X=f[F];if(A[X](o,L[k](x)),E)for(let B=0,nt=E.length;B<nt;B++)O[B][X](o,E[B][k](x))}}e[v]=o,h.push(o),o++}}const p=n.clone();for(const y in n.attributes){const x=l[y];if(p.setAttribute(y,new x.constructor(x.array.slice(0,o*x.itemSize),x.itemSize,x.normalized)),y in c)for(let v=0;v<c[y].length;v++){const P=c[y][v];p.morphAttributes[y][v]=new P.constructor(P.array.slice(0,o*P.itemSize),P.itemSize,P.normalized)}}return p.setIndex(h),p}const Wg=(()=>{const n=new Jc(new Uint8Array([120,255]),2,1,bs);return n.minFilter=n.magFilter=Ce,n.needsUpdate=!0,n})(),_o=new Map;function Zt(n,t={}){const e=n+JSON.stringify(t,(i,r)=>r&&r.isTexture?r.uuid:r);return _o.has(e)||_o.set(e,new Tg({color:n,gradientMap:Wg,...t})),_o.get(e)}function Te(n,t=!1){const e=new Z0(n);return e.colorSpace=We,e.anisotropy=8,t&&(e.wrapS=e.wrapT=ds),e}const hh=new D(0,1,0),Xg=new _e,ka=new ei,Ba=new D,za=new D;function Ps(n,t,e=ka.identity(),i=Ba.set(1,1,1)){return n.clone().applyMatrix4(Xg.compose(t,e,i))}function $g(n){return n.attributes.uv||n.setAttribute("uv",new oe(new Float32Array(n.attributes.position.count*2),2)),n}function _s(n,t){return new Jt(Gg(n.map($g)),t)}const qg=new yi(1,12,8);function uc(n,t,e,i){const r=3+Math.floor(e()*3);for(let s=0;s<r;s++){const o=s/r*Math.PI*2+e(),a=s===0?0:t*.55,l=t*(s===0?1:.62+e()*.2);i.push(Ps(qg,za.set(n.x+Math.cos(o)*a,n.y+(s===0?t*.12:0),n.z+Math.sin(o)*a),ka.identity(),Ba.set(l,l*.46,l)))}}function uh(n){const t=Gt(n),e=4+t()*.9,i=(t()-.5)*.5,r=new ze,s=new Nn(.06,.2,e,8,12);s.translate(0,e/2,0);const o=s.attributes.position;for(let h=0;h<o.count;h++){const u=o.getY(h)/e,f=u<.1?1+(.1-u)*7:1;o.setXYZ(h,o.getX(h)*f+i*u*u,o.getY(h),o.getZ(h)*f)}s.computeVertexNormals();const a=[s],l=[],c=6+Math.floor(t()*3);for(let h=0;h<c;h++){const u=.3+h/(c-1)*.62,f=h*2.4+t()*.6,d=.35+(1-u)*.95,g=new D(i*u*u,u*e,0),_=new D(Math.cos(f)*.8,.6,Math.sin(f)*.8).normalize(),m=new Nn(.025,.05,d,5);a.push(Ps(m,g.clone().addScaledVector(_,d/2),new ei().setFromUnitVectors(hh,_))),uc(g.clone().addScaledVector(_,d),.28+(1-u)*.2,t,l)}return uc(new D(i,e+.05,0),.26,t,l),r.add(_s(a,Zt(Jn.trunk)),_s(l,Zt(Jn.leaf))),r}function Yg(n){const t=Gt(n),e=new ze,i=4+Math.floor(t()*2),r=new Nn(.1,.16,1.2,7);r.translate(0,.6,0);const s=[];for(let o=0;o<i;o++){const a=o/(i-1),l=1.05-.62*a,c=1.25-.3*a,h=.9+a*2.3,u=new Cr(l,c,10,1,!0),f=u.attributes.position;for(let d=0;d<f.count;d++){if(f.getY(d)>-c/2+.01)continue;const g=Math.atan2(f.getZ(d),f.getX(d)),_=Math.round(g/(Math.PI*2/10))%2===0,m=_?1.08:.8;f.setXYZ(d,f.getX(d)*m,f.getY(d)+(_?-.14:.06),f.getZ(d)*m)}u.computeVertexNormals(),s.push(Ps(u,za.set(0,h+c/2,0),ka.setFromAxisAngle(hh,t()*6)))}return e.add(new Jt(r,Zt(Jn.trunk)),_s(s,Zt(Jn.fir,{side:Xe}))),e}function Zg(n,t){const e=Gt(n);let i=new yi(.6,14,10);i.deleteAttribute("uv"),i.deleteAttribute("normal"),i=Vg(i);const r=i.attributes.position;for(let o=0;o<r.count;o++){let a=r.getY(o);a<0&&(a*=.35);const l=1+(e()-.5)*.14;r.setXYZ(o,r.getX(o)*1.15*l,(a+.2)*1.3*l,r.getZ(o)*l)}i.computeVertexNormals();const s=new Jt(i,Zt("#d8c6a2"));return s.scale.setScalar(t),s.rotation.y=e()*6.28,s}function Jg(n){const t=Gt(n),e=[],i=4+Math.floor(t()*2),r=new Cr(.11,.75,5);r.translate(0,.37,0);for(let s=0;s<i;s++){const o=s/i*Math.PI*2+t(),a=.25+t()*.35,l=new ei().setFromEuler(new vn(Math.sin(o)*a,0,-Math.cos(o)*a));e.push(Ps(r,za.set(Math.cos(o)*.08,0,Math.sin(o)*.08),l,Ba.set(1,.7+t()*.6,1)))}return _s(e,Zt(Jn.leafLight))}const jg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="200" height="240">
  <defs><filter id="boil" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="1"/><feDisplacementMap in="SourceGraphic" scale="3.5" xChannelSelector="R" yChannelSelector="G"/></filter></defs>
  <g filter="url(#boil)" stroke="#4a2c1a" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <ellipse cx="84" cy="228" rx="13" ry="7" fill="#f7efe0"/><ellipse cx="116" cy="228" rx="13" ry="7" fill="#f7efe0"/>
    <path d="M72 128 L56 170 M56 170 L48 172 M56 170 L51 179 M56 170 L58 179" fill="none"/>
    <path d="M128 128 L144 170 M144 170 L152 172 M144 170 L149 179 M144 170 L142 179" fill="none"/>
    <path d="M74 118 Q100 110 126 118 L144 222 Q100 232 56 222 Z" fill="#b9a7ea"/>
    <path d="M76 124 L62 162" stroke-width="15" fill="none"/><path d="M76 124 L62 162" stroke="#b9a7ea" stroke-width="8" fill="none"/>
    <path d="M124 124 L138 162" stroke-width="15" fill="none"/><path d="M124 124 L138 162" stroke="#b9a7ea" stroke-width="8" fill="none"/>
    <path d="M100 150 L100 212" stroke="#8f7bd6" stroke-width="3" fill="none"/>
    <path d="M50 104 Q44 32 100 28 Q156 32 150 104 Q152 134 100 138 Q48 134 50 104 Z" fill="#f29bb8"/>
    <ellipse cx="100" cy="84" rx="32" ry="34" fill="#e7b48a"/>
    <path d="M70 70 Q100 44 130 70" fill="none" stroke="#d97a9a" stroke-width="3"/>
    <ellipse cx="88" cy="84.5" rx="3.1" ry="4.2" fill="#2a1a10" stroke="none"/><ellipse cx="114" cy="84.5" rx="3.1" ry="4.2" fill="#2a1a10" stroke="none"/>
    <ellipse cx="76" cy="97" rx="7" ry="4.5" fill="#ff8fa3" opacity=".6" stroke="none"/><ellipse cx="124" cy="97" rx="7" ry="4.5" fill="#ff8fa3" opacity=".6" stroke="none"/>
    <path d="M92 101 Q100 108 108 101" fill="none" stroke-width="3.5"/>
  </g>
</svg>
`,Kg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="200" height="240">
  <defs><filter id="boil" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="1"/><feDisplacementMap in="SourceGraphic" scale="3.5" xChannelSelector="R" yChannelSelector="G"/></filter></defs>
  <g filter="url(#boil)" stroke="#4a2c1a" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M86 196 L86 222" stroke-width="15"/><path d="M86 196 L86 222" stroke="#6b7fb8" stroke-width="8"/>
    <path d="M114 196 L114 222" stroke-width="15"/><path d="M114 196 L114 222" stroke="#6b7fb8" stroke-width="8"/>
    <ellipse cx="82" cy="227" rx="13" ry="7" fill="#f7efe0"/><ellipse cx="118" cy="227" rx="13" ry="7" fill="#f7efe0"/>
    <path d="M72 126 L54 162 M54 162 L46 164 M54 162 L49 171 M54 162 L56 171" fill="none"/>
    <path d="M128 126 L146 162 M146 162 L154 164 M146 162 L151 171 M146 162 L144 171" fill="none"/>
    <path d="M72 120 Q100 112 128 120 L136 204 Q100 210 64 204 Z" fill="#7fc7c0"/>
    <path d="M76 124 L60 156" stroke-width="15" fill="none"/><path d="M76 124 L60 156" stroke="#7fc7c0" stroke-width="8" fill="none"/>
    <path d="M124 124 L140 156" stroke-width="15" fill="none"/><path d="M124 124 L140 156" stroke="#7fc7c0" stroke-width="8" fill="none"/>
    <path d="M92 122 L100 138 L108 122" fill="none" stroke-width="3"/>
    <ellipse cx="100" cy="82" rx="34" ry="36" fill="#c68a5e"/>
    <ellipse cx="66" cy="84" rx="6" ry="9" fill="#c68a5e"/><ellipse cx="134" cy="84" rx="6" ry="9" fill="#c68a5e"/>
    <path d="M66 62 Q66 34 100 32 Q134 34 134 62 Z" fill="#fbf6ea"/>
    <path d="M72 52 L128 52" stroke="#d6c7a6" stroke-width="3"/>
    <ellipse cx="88" cy="86.5" rx="3.1" ry="4.2" fill="#2a1a10" stroke="none"/><ellipse cx="114" cy="86.5" rx="3.1" ry="4.2" fill="#2a1a10" stroke="none"/>
    <ellipse cx="76" cy="99" rx="7" ry="4.5" fill="#ff8fa3" opacity=".6" stroke="none"/><ellipse cx="124" cy="99" rx="7" ry="4.5" fill="#ff8fa3" opacity=".6" stroke="none"/>
    <path d="M92 103 Q100 110 108 103" fill="none" stroke-width="3.5"/>
  </g>
</svg>
`,Qg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="200" height="240">
  <defs><filter id="boil" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="1"/><feDisplacementMap in="SourceGraphic" scale="3.5" xChannelSelector="R" yChannelSelector="G"/></filter></defs>
  <g filter="url(#boil)" stroke="#4a2c1a" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <ellipse cx="86" cy="230" rx="14" ry="7" fill="#8a5a3a"/><ellipse cx="114" cy="230" rx="14" ry="7" fill="#8a5a3a"/>
    <path d="M74 110 Q100 100 126 110 L146 226 Q100 236 54 226 Z" fill="#6fa3a0"/>
    <path d="M76 116 L58 172 M58 172 L50 174 M58 172 L53 181 M58 172 L60 181" fill="none"/>
    <path d="M124 116 L142 172 M142 172 L150 174 M142 172 L147 181 M142 172 L140 181" fill="none"/>
    <path d="M78 116 L62 166" stroke-width="15" fill="none"/><path d="M78 116 L62 166" stroke="#6fa3a0" stroke-width="8" fill="none"/>
    <path d="M122 116 L138 166" stroke-width="15" fill="none"/><path d="M122 116 L138 166" stroke="#6fa3a0" stroke-width="8" fill="none"/>
    <path d="M52 94 Q46 20 100 16 Q154 20 148 94 Q152 132 100 136 Q48 132 52 94 Z" fill="#f0c96a"/>
    <ellipse cx="100" cy="72" rx="30" ry="33" fill="#d79a6b"/>
    <ellipse cx="88" cy="70.5" rx="3.1" ry="4.2" fill="#2a1a10" stroke="none"/><ellipse cx="114" cy="70.5" rx="3.1" ry="4.2" fill="#2a1a10" stroke="none"/>
    <ellipse cx="76" cy="83" rx="7" ry="4.5" fill="#ff8fa3" opacity=".6" stroke="none"/><ellipse cx="124" cy="83" rx="7" ry="4.5" fill="#ff8fa3" opacity=".6" stroke="none"/>
    <path d="M92 87 Q100 94 108 87" fill="none" stroke-width="3.5"/>
  </g>
</svg>
`,t_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="200" height="240">
  <defs><filter id="boil" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="1"/><feDisplacementMap in="SourceGraphic" scale="3.5" xChannelSelector="R" yChannelSelector="G"/></filter></defs>
  <g filter="url(#boil)" stroke="#4a2c1a" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M86 196 L86 224" stroke-width="16"/><path d="M86 196 L86 224" stroke="#8a7a68" stroke-width="9"/>
    <path d="M114 196 L114 224" stroke-width="16"/><path d="M114 196 L114 224" stroke="#8a7a68" stroke-width="9"/>
    <ellipse cx="82" cy="229" rx="14" ry="7" fill="#6b4a33"/><ellipse cx="118" cy="229" rx="14" ry="7" fill="#6b4a33"/>
    <path d="M70 112 L52 166 M52 166 L44 168 M52 166 L47 175 M52 166 L54 175" fill="none"/>
    <path d="M130 112 L148 166 M148 166 L156 168 M148 166 L153 175 M148 166 L146 175" fill="none"/>
    <path d="M70 108 Q100 98 130 108 L140 206 Q100 212 60 206 Z" fill="#e8e1d0"/>
    <path d="M74 112 L58 160" stroke-width="16" fill="none"/><path d="M74 112 L58 160" stroke="#e8e1d0" stroke-width="9" fill="none"/>
    <path d="M126 112 L142 160" stroke-width="16" fill="none"/><path d="M126 112 L142 160" stroke="#e8e1d0" stroke-width="9" fill="none"/>
    <ellipse cx="100" cy="68" rx="32" ry="35" fill="#b07650"/>
    <path d="M70 76 Q72 112 100 112 Q128 112 130 76 Q124 96 100 96 Q76 96 70 76 Z" fill="#4a3326"/>
    <path d="M68 46 Q68 22 100 20 Q132 22 132 46 Z" fill="#fbf6ea"/>
    <ellipse cx="88" cy="64.5" rx="3.1" ry="4.2" fill="#2a1a10" stroke="none"/><ellipse cx="114" cy="64.5" rx="3.1" ry="4.2" fill="#2a1a10" stroke="none"/>
    <ellipse cx="76" cy="77" rx="7" ry="4.5" fill="#ff8fa3" opacity=".6" stroke="none"/><ellipse cx="124" cy="77" rx="7" ry="4.5" fill="#ff8fa3" opacity=".6" stroke="none"/>
    <path d="M93 84 Q100 90 107 84" fill="none" stroke-width="3.5"/>
  </g>
</svg>
`,e_=7,fh=3;async function n_(n,t,e){const i=new Image;i.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n),await i.decode();const r=document.createElement("canvas");return r.width=t,r.height=e,r.getContext("2d").drawImage(i,0,0,t,e),r}const i_=(n,t,e)=>Promise.all(Array.from({length:fh},(i,r)=>n_(n.replace(/seed="\d+"/,`seed="${r*17+3}"`),t,e).then(s=>Te(s))));async function r_(n){const t=new Zc,e=new Ts(-1,1,1,-1,.1,300),i=Bg(n);t.add(new Ag(16777215,15985368,1.9));const r=new Pg(16777215,1.3);r.position.set(-9,6,8),t.add(r);const s={},[o,a,l,c]=await Promise.all([jg,Kg,Qg,t_].map(tt=>i_(tt,300,360)));Object.assign(s,{girl:o,boy:a,mama:l,baba:c});const h=[0,1,2].map(tt=>Te(Ug(tt))),u=Te(Ig());let f=new ze;t.add(f);let d=[],g=[],_=[],m=[],p=[];const y={center:new D,pitch:.6,yaw:0,width:12,height:8,padTop:0,padBottom:0,aspect:1,pxW:1,pxH:1};let x=0,v=0,P=-1,w=0;function R(){return t.remove(f),f.traverse(tt=>{tt.geometry&&!tt.userData.sharedGeo&&tt.geometry.dispose()}),f=new ze,t.add(f),d=[],g=[],_=[],m.length=0,p=[],t.background=null,f}function L(){const tt=Math.max(50,y.pxH-y.padTop-y.padBottom),mt=Math.max(y.width/y.pxW,y.height/tt),rt=y.pxW*mt/2,ut=y.pxH*mt/2,H=(y.padBottom-y.padTop)/2*mt;Object.assign(e,{left:-rt,right:rt,top:ut-H,bottom:-ut-H}),e.updateProjectionMatrix()}function E(){const mt=Math.cos(y.pitch),rt=y.yaw+Math.sin(x*.35)*w;e.position.set(y.center.x+Math.sin(rt)*mt*60,y.center.y+Math.sin(y.pitch)*60,y.center.z+Math.cos(rt)*mt*60),e.lookAt(y.center)}function M(tt){Object.assign(y,tt),tt.center&&(y.center=new D(...tt.center)),w=tt.sway||0,L(),E()}function A(tt,mt,rt=y.padTop,ut=y.padBottom){Object.assign(y,{pxW:tt,pxH:mt,aspect:tt/mt,padTop:rt,padBottom:ut}),L()}function O(tt,mt,rt,ut=1.6,{y:H=0,flip:Z=!1}={}){const C=s[tt],wt=ut*(300/360),it=1/Math.cos(y.pitch||.6),Et=new fe({map:C[0],alphaTest:.5,side:Xe}),ft=new He(wt,ut*it);ft.translate(0,ut*it/2,0);const Ft=new Jt(ft,Et);return Ft.position.set(mt,H,rt),Z&&(Ft.scale.x=-1),Ft.userData.sprite=!0,Ft.userData.colorMap=()=>Et.map,Ft.userData.breathe=Math.random()*6,d.push({mat:Et,frames:C}),g.push(Ft),f.add(Ft),X(mt,rt,wt*.9,H),Ft}const F=new fe({map:u,transparent:!0,depthWrite:!1}),k=new He(1,1).rotateX(-Math.PI/2);function X(tt,mt,rt,ut=0,H=rt*.5){const Z=new Jt(k,F);return Z.position.set(tt,ut+.02,mt),Z.scale.set(rt,1,H),Z.renderOrder=1,Z.userData.noInk=!0,Z.userData.sharedGeo=!0,f.add(Z),Z}const B=new fe({map:h[0],alphaTest:.5,side:Xe}),nt=new He(.4,.4);function W(tt,mt=10,rt=2.4){for(let ut=0;ut<mt;ut++){const H=ut/mt*Math.PI*2+Math.random(),Z=new Jt(nt,B);Z.userData.sprite=!0,Z.userData.colorMap=()=>B.map,Z.userData.sharedGeo=!0,Z.position.copy(tt),f.add(Z),g.push(Z),p.push({m:Z,vx:Math.cos(H)*rt,vz:Math.sin(H)*rt*.4,vy:3+Math.random()*2,t:0})}}function dt(tt,mt,rt=ut=>1-(1-ut)**3){return new Promise(ut=>m.push({t:0,dur:tt,fn:mt,ease:rt,resolve:ut}))}function Mt(tt,mt,rt,ut=.5,H=.8){const Z=tt.position.clone(),C=tt.rotation.clone();return dt(ut,wt=>{tt.position.lerpVectors(Z,mt,wt),tt.position.y+=Math.sin(wt*Math.PI)*H,rt&&tt.rotation.set(C.x+(rt[0]-C.x)*wt,C.y+(rt[1]-C.y)*wt,C.z+(rt[2]-C.z)*wt)})}const Rt=new Lg,zt=new at;function ie(tt,mt){const rt=n.domElement.getBoundingClientRect();zt.set((tt-rt.left)/rt.width*2-1,-((mt-rt.top)/rt.height)*2+1),Rt.setFromCamera(zt,e);const ut=Rt.intersectObject(f,!0);for(const H of ut){let Z=H.object;for(;Z&&!Z.userData.pick;)Z=Z.parent;if(Z&&Z.visible!==!1)return Z.userData.pick}return null}const Y=new D;function ot(tt,mt=0){tt.getWorldPosition(Y),Y.y+=mt,Y.project(e);const rt=n.domElement.getBoundingClientRect();return{x:rt.left+(Y.x+1)/2*rt.width,y:rt.top+(1-Y.y)/2*rt.height}}function Lt(tt){x+=tt;const mt=Math.max(0,Math.floor(x*e_))%fh;if(mt!==P){P=mt,v=mt*7.31;for(const ut of d)ut.mat.map=ut.frames[mt];B.map=h[mt]}for(let ut=m.length-1;ut>=0;ut--){const H=m[ut];H.t+=tt;const Z=Math.min(1,H.t/H.dur);H.fn(H.ease(Z)),Z>=1&&(m.splice(ut,1),H.resolve())}for(const ut of _)ut(x,tt);for(const ut of g)if(ut.rotation.y=y.yaw,ut.userData.breathe!=null){const H=1+Math.sin(x*3+ut.userData.breathe)*.018;ut.scale.y=H}for(let ut=p.length-1;ut>=0;ut--){const H=p[ut];H.t+=tt,H.vy-=9*tt,H.m.position.x+=H.vx*tt,H.m.position.z+=H.vz*tt,H.m.position.y+=H.vy*tt,H.m.scale.setScalar(Math.max(.001,1-H.t/1.1)),H.t>1.1&&(f.remove(H.m),g.splice(g.indexOf(H.m),1),p.splice(ut,1))}const rt=t.background;if(rt!=null&&rt.isTexture&&rt.userData.cover&&rt.image){const ut=rt.image.width/rt.image.height,H=y.aspect;H<ut?(rt.repeat.set(H/ut,1),rt.offset.set((1-H/ut)/2,0)):(rt.repeat.set(1,ut/H),rt.offset.set(0,(1-ut/H)/2))}E()}return{scene:t,camera:e,renderer:n,get root(){return f},view:y,clear:R,setView:M,resize:A,character:O,blob:X,burst:W,tween:dt,moveTo:Mt,pick:ie,toScreen:ot,update:Lt,render:()=>i.render(t,e,v),anim:tt=>_.push(tt),get time(){return x}}}const ua=Math.PI*2,pt={box:(n,t,e)=>new qe(n,t,e),cyl:(n,t,e,i=10,r=!1)=>new Nn(n,t,e,i,1,r),sph:(n,t=12,e=9)=>new yi(n,t,e),hemi:(n,t=14)=>new yi(n,t,8,0,ua,0,Math.PI/2),cone:(n,t,e=8)=>new Cr(n,t,e),tor:(n,t,e=ua,i=16)=>new Na(n,t,8,i,e),oct:n=>new Ua(n),ico:(n,t=0)=>new Ia(n,t),plane:(n,t)=>new He(n,t),lathe:(n,t=16)=>new La(n.map(([e,i])=>new at(e,i)),t),tube:(n,t,e=40)=>new Fa(new jc(n.map(i=>new D(...i))),e,t,8),extrude:(n,t)=>{const e=new Da(new ih(n.map(([i,r])=>new at(i,r))),{depth:t,bevelEnabled:!1});return e.translate(0,0,-t/2),e}},s_=n=>typeof n=="number"?[n,n,n]:n,o_=(()=>{const n=new Jc(new Uint8Array([205,255]),2,1,bs);return n.minFilter=n.magFilter=Ce,n.needsUpdate=!0,n})();function gt(n,t,{p:e=[0,0,0],r:i=[0,0,0],s:r=1,map:s,side:o,glow:a,basic:l,soft:c}={}){const h={};c&&(h.gradientMap=o_),s&&(h.map=s),o&&(h.side=o),a&&(h.emissive=a,h.emissiveIntensity=.55);const u=l?new fe({color:t,map:s,side:o}):Zt(t,h),f=new Jt(n,u);return f.position.set(...e),f.rotation.set(...i),f.scale.set(...s_(r)),f}function Kn(...n){const t=new ze;return t.add(...n.flat().filter(Boolean)),t}const vo=new Map,mn=(n,t)=>(vo.has(n)||vo.set(n,Te(t(),!0)),vo.get(n)),dh={chevrons:()=>mn("chev",()=>{const[n,t]=ue(256,256),e=Gt(5);t.fillStyle="#c7c0e6",t.fillRect(0,0,256,256);for(let i=-40;i<300;i+=64){const r=[[30,i+40],[128,i],[226,i+40],[226,i+64],[128,i+24],[30,i+64]];ne(t,r,"#8f84c2"),kt(t,r,e,{w:3,closed:!0,color:"#4b3f7a"})}return n}),stripes:(n="#5aa0e6",t="#ffd24a")=>mn("str"+n+t,()=>{const[e,i]=ue(256,256),r=Gt(6);for(let s=0;s<8;s++)i.fillStyle=s%2?n:t,i.fillRect(s*32,0,32,256);for(let s=1;s<8;s++)kt(i,[[s*32,0],[s*32,256]],r,{w:2.5});return e}),swirl:()=>mn("swirl",()=>{const[n,t]=ue(256,256),e=Gt(7);t.fillStyle="#d24cf0",t.fillRect(0,0,256,256);const i=[];for(let r=0;r<22;r+=.25)i.push([128+Math.cos(r)*r*5.2,128+Math.sin(r)*r*5.2]);return kt(t,i,e,{w:9,color:"#f3a6ff",amp:1}),n}),arrow:()=>mn("arrow",()=>{const[n,t]=ue(256,128),e=Gt(8);t.fillStyle="#e8c58f",t.fillRect(0,0,256,128);const i=[[40,52],[160,52],[160,30],[215,64],[160,98],[160,76],[40,76]];ne(t,i,"#e8584e"),kt(t,i,e,{w:3.5,closed:!0});for(let r=0;r<3;r++)kt(t,[[10,20+r*40],[60,22+r*40]],e,{w:1.6,color:"#b58d5b"});return n}),rings:()=>mn("rings",()=>{const[n,t]=ue(128,128),e=Gt(9);t.fillStyle="#f1c792",t.fillRect(0,0,128,128);for(const i of[14,28,42,56])kt(t,Ne(64,64,i,i,e,{n:28,lump:.05}),e,{w:2.2,closed:!0,color:"#b07a45"});return n}),bricks:(n,t,e)=>mn("br"+n,()=>{const[i,r]=ue(512,256),s=Gt(91),o=Gt(92);r.fillStyle=t,r.fillRect(0,0,512,256);for(let a=0,l=0;l<256;a++,l+=42)for(let c=a%2?0:-40;c<512;c+=96+o()*10){const h=[[c+4,l+4],[c+90,l+4],[c+90,l+39],[c+4,l+39]];ne(r,h,o()<.35?n:t),kt(r,h,s,{w:2,closed:!0,color:e,amp:.6})}return i}),strata:(n,t,e)=>mn("strata"+n,()=>{const[i,r]=ue(256,256),s=Gt(33),o=Gt(34);for(let a=0;a<256;a+=32)r.fillStyle=a/32%2?n:t,r.fillRect(0,a,256,32);for(let a=32;a<256;a+=32)kt(r,[[0,a+(o()-.5)*6],[256,a+(o()-.5)*6]],s,{w:2.4,color:e,amp:2});for(let a=0;a<14;a++){const l=o()*256,c=o()*256;kt(r,[[l,c],[l+4,c+18]],s,{w:2,color:e,amp:0})}return i}),star:(n,t)=>mn("star"+n+t,()=>{const[e,i]=ue(256,256),r=Gt(10);i.fillStyle=n,i.fillRect(0,0,256,256);const s=[];for(let o=0;o<10;o++){const a=-Math.PI/2+o*Math.PI/5,l=o%2?40:90;s.push([128+Math.cos(a)*l,134+Math.sin(a)*l])}return ne(i,s,t),kt(i,s,r,{w:5,closed:!0}),e}),corrugated:(n,t)=>mn("corr"+n,()=>{const[e,i]=ue(256,128),r=Gt(12);i.fillStyle=n,i.fillRect(0,0,256,128);for(let s=8;s<256;s+=16)kt(i,[[s,0],[s,128]],r,{w:2,color:t,amp:.4});return e}),dots:(n,t)=>mn("dots"+n,()=>{const[e,i]=ue(128,128),r=Gt(13);i.fillStyle=n,i.fillRect(0,0,128,128);for(let s=0;s<9;s++)i.fillStyle=t,i.beginPath(),i.arc(r()*128,r()*128,6+r()*6,0,ua),i.fill();return e})},Ha='"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',fa='"Amiri","Noto Naskh Arabic","Geeza Pro","Arial",serif',Xn='"Baloo 2","Fredoka",system-ui,sans-serif';function ph(n,t,e,i){return[[n,t],[n+e,t],[n+e,t+i],[n,t+i]]}function Ga(n,t,e,i,r,s=6){const o=[],a=[[n+e-r,t+r,-Math.PI/2],[n+e-r,t+i-r,0],[n+r,t+i-r,Math.PI/2],[n+r,t+r,Math.PI]];for(const[l,c,h]of a)for(let u=0;u<=s;u++){const f=h+u/s*Math.PI/2;o.push([l+Math.cos(f)*r,c+Math.sin(f)*r])}return o}const a_={cave(n,t,e,i){const r=Gt(401),s=[[t-i,e+i*.7],[t-i*.55,e-i*.2],[t-i*.2,e-i*.75],[t+i*.2,e-i*.55],[t+i*.6,e-i*.1],[t+i,e+i*.7]];ne(n,s,"#c9a27a"),kt(n,s,r,{w:4,closed:!0}),kt(n,[[t-i*.45,e+i*.1],[t-i*.2,e+i*.05]],r,{w:3,color:"#9b7552"}),kt(n,[[t+i*.3,e-i*.1],[t+i*.55,e+i*.05]],r,{w:3,color:"#9b7552"});const o=[];for(let a=0;a<=14;a++){const l=Math.PI+a/14*Math.PI;o.push([t+Math.cos(l)*i*.34,e+i*.7+Math.sin(l)*i*.5])}ne(n,o,"#4a3326"),kt(n,o,r,{w:3.5})},adobe(n,t,e,i){const r=Gt(402),s=i*.62,o=i*.34;for(let a=0;a<3;a++)for(let l=0;l<3-a%2;l++){const c=t-i+(a%2?s/2:0)+l*s+4,h=e+i*.55-(a+1)*o,u=ph(c,h,s-6,o-5);ne(n,u,a===1?"#d9b07a":"#cfa06a"),kt(n,u,r,{w:3,closed:!0,amp:.6}),n.fillStyle="#b9895a",n.fillRect(c+8,h+8,4,3),n.fillRect(c+s*.5,h+o*.5,5,3)}}};function Va(n,{bg:t="#fbf3df",size:e=256,round:i=!1}={}){const[r,s]=ue(e,e),o=Gt(n.id.length*31+7),a=e*.06,l=i?Ne(e/2,e/2,e/2-a,e/2-a,o,{n:40,lump:.03}):Ga(a,a,e-2*a,e-2*a,e*.14);return i||(s.fillStyle="#c98f55",s.fillRect(0,0,e,e)),ne(s,l,t),Oa(s,l,()=>ne(s,Ne(e*.42,e*.38,e*.3,e*.22,o,{lump:.2}),"rgba(255,255,255,.55)")),kt(s,l,o,{w:e*.028,closed:!0,amp:1}),n.paint?a_[n.paint](s,e/2,e/2,e*.33):n.sky!=null?l_(s,n.sky,e):(s.font=`${Math.round(e*.56)}px ${Ha}`,s.textAlign="center",s.textBaseline="middle",s.fillText(n.icon,e/2,e*.54)),r}const da=[{top:"#2c3570",bot:"#e9a3a6",sun:[.85,.92],glow:!0},{top:"#7fa6e6",bot:"#ffd2a0",sun:[.88,.7]},{top:"#6fb3ee",bot:"#cfe9ff",sun:[.72,.36]},{top:"#5aaaf0",bot:"#bfe4ff",sun:[.46,.18]},{top:"#72aee6",bot:"#f4e2b4",sun:[.22,.45]},{top:"#6a5aa8",bot:"#f59a6a",sun:[.1,.9]},{top:"#141a45",bot:"#2d3a7a",sun:null,stars:!0}];function l_(n,t,e){const i=da[t],r=e*.16,s=e-2*r,o=Gt(t+50),a=Ne(e/2,e/2,s/2,s/2,Gt(3),{n:36,lump:.02});Oa(n,a,()=>{const l=n.createLinearGradient(0,r,0,r+s);if(l.addColorStop(0,i.top),l.addColorStop(1,i.bot),n.fillStyle=l,n.fillRect(0,0,e,e),i.sun&&(n.fillStyle="#ffd24a",n.beginPath(),n.arc(r+i.sun[0]*s,r+i.sun[1]*s,e*.08,0,7),n.fill()),i.stars){n.fillStyle="#fff6c0";for(let c=0;c<9;c++)n.beginPath(),n.arc(r+c*37%100/100*s,r+c*53%60/100*s,3,0,7),n.fill();n.fillStyle="#fff2b0",n.beginPath(),n.arc(r+s*.3,r+s*.3,e*.07,0,7),n.fill(),n.fillStyle=i.top,n.beginPath(),n.arc(r+s*.34,r+s*.27,e*.06,0,7),n.fill()}ne(n,[[0,r+s*.78],[e,r+s*.74],[e,e],[0,e]],t===6?"#27402e":"#7cb86e")}),kt(n,a,o,{w:e*.02,closed:!0})}function Wa(n=512,t=512,e="#e8c08a",i="#b0824e",r=1){const[s,o]=ue(n,t),a=Gt(r),l=Gt(r+1);o.fillStyle=e,o.fillRect(0,0,n,t);for(let h=0;h<18;h++)ne(o,Ne(l()*n,l()*t,30+l()*60,8+l()*10,l,{lump:.2}),"rgba(255,240,210,.35)");const c=64;for(let h=0;h<t;h+=c){kt(o,[[0,h+2],[n,h+2+(l()-.5)*5]],a,{w:2.6,color:i});for(let u=h/c%2?90:220;u<n;u+=260+l()*60)kt(o,[[u,h+3],[u,h+c-2]],a,{w:2.2,color:i,amp:.4});for(let u=0;u<3;u++){const f=l()*n,d=h+16+l()*32;kt(o,[[f,d],[f+26+l()*20,d+(l()-.5)*4]],a,{w:1.5,color:"#c99a62",amp:.8})}}return s}function c_(n=512,t=512,e=5){const[i,r]=ue(n,t),s=Gt(e);r.fillStyle="#f3ead6",r.fillRect(0,0,n,t);const o=64,a=["#7fc7c0","#f0c96a","#86b9e8"];for(let l=0;l<t;l+=o)for(let c=0;c<n;c+=o){const h=c+o/2,u=l+o/2,f=[];for(let d=0;d<16;d++){const g=d/16*Math.PI*2+Math.PI/8,_=d%2?o*.22:o*.36;f.push([h+Math.cos(g)*_,u+Math.sin(g)*_])}ne(r,f,a[(c+l)/o%3]),kt(r,f,s,{w:1.8,closed:!0,color:"#6b5a4a",amp:.4})}for(let l=0;l<=t;l+=o)kt(r,[[0,l],[n,l]],s,{w:1.2,color:"#d8c9a8",amp:.3});for(let l=0;l<=n;l+=o)kt(r,[[l,0],[l,t]],s,{w:1.2,color:"#d8c9a8",amp:.3});return i}function mh(n=512,t=512,e=9){const[i,r]=ue(n,t),s=Gt(e),o=Gt(e+1);r.fillStyle="#ecd7a6",r.fillRect(0,0,n,t);for(let a=0;a<26;a++)ne(r,Ne(o()*n,o()*t,30+o()*60,12+o()*24,o,{lump:.25}),o()<.5?"#f2e0b4":"#e3c992");for(let a=0;a<90;a++){const l=o()*n,c=o()*t;kt(r,[[l,c],[l+9,c-2]],s,{w:1.8,color:"#d6ba84",amp:0})}for(let a=0;a<14;a++){const l=o()*n,c=o()*t,h=Ne(l,c,5,4,s,{n:12});ne(r,h,"#cdb18a"),kt(r,h,s,{w:1.5,closed:!0,amp:.2})}return i}function gh(n=512,t=512,e=11){const[i,r]=ue(n,t),s=Gt(e),o=Gt(e+1);r.fillStyle="#9dd190",r.fillRect(0,0,n,t);for(let a=0;a<26;a++)ne(r,Ne(o()*n,o()*t,30+o()*60,14+o()*26,o,{lump:.22}),o()<.5?"#a9d99b":"#93c886");for(let a=0;a<260;a++){const l=o()*n,c=o()*t;kt(r,[[l,c],[l+3,c-7]],s,{w:2,color:"#78b66f",amp:0}),o()<.6&&kt(r,[[l+5,c+1],[l+8,c-6]],s,{w:2,color:"#78b66f",amp:0})}for(let a=0;a<10;a++){const l=o()*n,c=o()*t;for(let h=0;h<5;h++){const u=h/5*6.28,f=Ne(l+Math.cos(u)*5,c+Math.sin(u)*4,4.2,3.6,s,{n:10});ne(r,f,"#fffdf6"),kt(r,f,s,{w:1.3,color:"#9a7a58",closed:!0,amp:.2})}r.fillStyle="#f5c84c",r.beginPath(),r.arc(l,c,2.6,0,7),r.fill()}return i}function _h(n="#f4ead3",t="#7cc39a",e=512,i=384,r=21){const[s,o]=ue(e,i),a=Gt(r),l=Gt(r+1);o.fillStyle=n,o.fillRect(0,0,e,i);for(let h=0;h<16;h++)ne(o,Ne(l()*e,60+l()*i,30+l()*50,16+l()*20,l,{lump:.2}),"rgba(255,255,255,.35)");for(let h=0;h<12;h++)ne(o,Ne(l()*e,80+l()*i,20+l()*40,10+l()*14,l,{lump:.2}),"rgba(160,120,80,.08)");const c=58;o.fillStyle=t,o.fillRect(0,0,e,c);for(let h=0;h<e/64;h++){const u=32+h*64,f=c/2,d=[];for(let g=0;g<16;g++){const _=g/16*Math.PI*2+Math.PI/8,m=g%2?11:20;d.push([u+Math.cos(_)*m,f+Math.sin(_)*m])}ne(o,d,"#fff6dc"),kt(o,d,a,{w:2,closed:!0,amp:.3})}return kt(o,[[0,c],[e,c]],a,{w:3.2}),o.fillStyle="rgba(160,110,70,.15)",o.fillRect(0,i*.78,e,i),kt(o,[[0,i*.78],[e,i*.78]],a,{w:2.4,color:"#a8754a"}),s}function h_(n=512,t=128,e=31){const[i,r]=ue(n,t),s=Gt(e);r.fillStyle="#6fb57c",r.fillRect(0,0,n,t);for(let o=-20;o<n+40;o+=46){const a=ch(o,40,34,26,3);ne(r,a,"#83c47b"),kt(r,a,s,{w:2.4,closed:!0,color:"#3f7a4a"})}for(let o=0;o<40;o++){const a=o*97%n,l=60+o*41%60;kt(r,[[a,l],[a+4,l-8]],s,{w:2,color:"#52985f",amp:0})}return i}function u_(n,{w:t=384,h:e=160,bg:i="#fbf3df",color:r=Zn,ar:s=!1,sub:o,size:a,font:l}={}){const[c,h]=ue(t,e),u=Gt(n.length*13+3);h.fillStyle="#c98f55",h.fillRect(0,0,t,e);const f=Ga(8,8,t-16,e-16,18);ne(h,f,i),kt(h,f,u,{w:4,closed:!0}),h.fillStyle=r,h.textAlign="center",h.textBaseline="middle";const d=a||(s?e*.5:e*.36);return h.font=l||(s?`bold ${d}px ${fa}`:`800 ${d}px ${Xn}`),s&&(h.direction="rtl"),h.fillText(n,t/2,o?e*.38:e*(s?.56:.54)),o&&(h.direction="rtl",h.font=`bold ${e*.3}px ${fa}`,h.fillText(o,t/2,e*.72)),c}function f_(n,t){const[e,i]=ue(512,160),r=Gt(n.id.length*7),s=Ga(10,10,492,140,26);return i.clearRect(0,0,512,160),ne(i,s,t?"#d9d2c4":"#fbf3df"),kt(i,s,r,{w:5,closed:!0}),i.textBaseline="middle",i.textAlign="center",i.font=`${n.icon.length===1&&/[؀-ۿ]/.test(n.icon)?`bold 76px ${fa}`:`70px ${Ha}`}`,i.fillStyle=Zn,i.fillText(t?"🔒":n.icon,72,84),i.font=`800 ${n.name.length>14?44:52}px ${Xn}`,i.fillStyle=t?"#8a7f70":Zn,i.fillText(n.name,300,86),e}const vs=6.2,xs=3.9,Wn={makkah:[.95,1.05],madinah:[.35,-1.45],stops:[[1.55,1.55],[-1.2,.2],[.3,-.72]]};function fc(n=!1){const e=vs*160,i=xs*160,[r,s]=ue(e,i),o=Gt(71),a=Gt(72),l=([g,_])=>[(g+vs/2)*160,(_+xs/2)*160];s.fillStyle="#f1dcae",s.fillRect(0,0,e,i);for(let g=0;g<30;g++)ne(s,Ne(a()*e,a()*i,40+a()*90,20+a()*40,a,{lump:.25}),a()<.5?"#ecd09a":"#f6e6c2");const c=[[0,0],[e*.16,0],[e*.13,i*.3],[e*.17,i*.55],[e*.12,i*.8],[e*.15,i],[0,i]];ne(s,c,"#8fcbe0"),kt(s,c.slice(1,6),o,{w:4,color:"#3d86a6"});for(let g=0;g<6;g++){const _=20+a()*e*.08,m=30+a()*(i-60);kt(s,[[_,m],[_+10,m-6],[_+20,m],[_+30,m-6]],o,{w:2.4,color:"#e9f7fb",amp:0})}s.save(),s.translate(e*.06,i*.5),s.rotate(-Math.PI/2),s.font=`700 30px ${Xn}`,s.fillStyle="#3d86a6",s.textAlign="center",s.fillText("Red Sea",0,0),s.restore();for(let g=0;g<9;g++){const _=e*.25+a()*e*.7,m=40+a()*(i-80),p=[[_-26,m+12],[_,m-16],[_+26,m+12]];kt(s,p,o,{w:3,color:"#b58d5b"})}const h=[Wn.makkah,[1.3,1.45],Wn.stops[0],[.4,1.5],[-.8,1],Wn.stops[1],[-.9,-.4],Wn.stops[2],Wn.madinah].map(l);s.setLineDash(n?[]:[10,14]),kt(s,h,o,{w:n?9:6,color:n?"#e8584e":"#9a6a3a",amp:1.2}),s.setLineDash([]),Wn.stops.forEach((g,_)=>{const[m,p]=l(g),y=Ne(m,p,58,58,o,{n:30,lump:.03});ne(s,y,"rgba(255,250,235,.8)"),s.setLineDash([8,8]),kt(s,y,o,{w:3.5,closed:!0}),s.setLineDash([]),s.font=`800 56px ${Xn}`,s.textAlign="center",s.textBaseline="middle",s.fillStyle="#b58d5b",s.fillText(String(_+1),m,p+4);const x=m-62,v=p-58,P=Ne(x,v,24,24,o,{n:20});ne(s,P,"#f5cf5f"),kt(s,P,o,{w:3,closed:!0}),s.font=`800 32px ${Xn}`,s.fillStyle=Zn,s.fillText(String(_+1),x,v+2)});for(const[g,_]of[["makkah","Makkah"],["madinah","Madinah"]]){const[m,p]=l(Wn[g]),y=Ne(m,p,22,22,o,{n:20});ne(s,y,"#e8584e"),kt(s,y,o,{w:3.5,closed:!0});const x=g==="makkah",v=x?m-34:m+34;s.font=`800 44px ${Xn}`,s.textAlign=x?"right":"left",s.textBaseline="middle",s.lineWidth=8,s.strokeStyle="#fbf3df",s.strokeText(_,v,p),s.fillStyle=Zn,s.fillText(_,v,p)}const[u,f]=[e-90,i-100],d=[[u,f-60],[u+14,f],[u,f+40],[u-14,f]];return ne(s,d,"#fbf3df"),ne(s,[[u,f-60],[u+14,f],[u-14,f]],"#e8584e"),kt(s,d,o,{w:3,closed:!0}),s.font=`800 36px ${Xn}`,s.textAlign="center",s.fillStyle=Zn,s.fillText("N",u,f-82),n&&(s.font=`800 90px ${Xn}`,s.lineWidth=14,s.strokeStyle="#fbf3df",s.textAlign="center",s.strokeText("HIJRAH",e*.62,i*.45),s.fillStyle="#e8584e",s.fillText("HIJRAH",e*.62,i*.45)),kt(s,ph(6,6,e-12,i-12),o,{w:6,closed:!0}),r}function dc(n=256,t=256,e=!1){const[i,r]=ue(n,t),s=Gt(5),o=r.createLinearGradient(0,0,0,t);e?(o.addColorStop(0,"#4a4f9e"),o.addColorStop(1,"#f2a6a0")):(o.addColorStop(0,"#1f2766"),o.addColorStop(1,"#4a4f9e")),r.fillStyle=o,r.fillRect(0,0,n,t);for(let a=0;a<40;a++)r.fillStyle=`rgba(255,246,200,${.4+s()*.6})`,r.beginPath(),r.arc(s()*n,s()*t,1+s()*2.2,0,7),r.fill();return e?(r.font=`${n*.26}px ${Ha}`,r.textAlign="center",r.textBaseline="middle",r.fillText("☀️",n*.3,t*.62),r.fillText("🌙",n*.7,t*.35),r.fillText("⭐",n*.5,t*.2)):(r.fillStyle="#fff2b0",r.beginPath(),r.arc(n*.66,t*.32,n*.09,0,7),r.fill(),r.fillStyle="#1f2766",r.beginPath(),r.arc(n*.7,t*.28,n*.08,0,7),r.fill()),i}function d_(n="255,220,120"){const[t,e]=ue(128,128),i=e.createRadialGradient(64,64,4,64,64,62);return i.addColorStop(0,`rgba(${n},.9)`),i.addColorStop(.5,`rgba(${n},.35)`),i.addColorStop(1,`rgba(${n},0)`),e.fillStyle=i,e.fillRect(0,0,128,128),t}function vh(n,t,e=64,i=256){const[r,s]=ue(e,i),o=s.createLinearGradient(0,0,0,i);return o.addColorStop(0,n),o.addColorStop(1,t),s.fillStyle=o,s.fillRect(0,0,e,i),r}function p_(n,t){const[e,i]=ue(256,192),r=Gt(n+90);i.fillStyle="#fbf6e8",i.fillRect(0,0,256,192);for(let s=0;s<7;s++)kt(i,[[30,30+s*20],[226,30+s*20]],r,{w:2,color:s<Math.ceil(n/t*7)?"#b58d5b":"#e6dcc4",amp:.8});return e}const se=Math.PI,mi=(n,t)=>{const e=Te(n,!!t);return t&&e.repeat.set(...t),e},Pr=(n,t=Math.random)=>{n=n.slice();for(let e=n.length-1;e>0;e--){const i=Math.floor(t()*(e+1));[n[e],n[i]]=[n[i],n[e]]}return n};function Ls(n,t=.8,e=.12,i){const r=new fe({map:Te(Va(n,{bg:i}))}),s=Zt("#c98f55"),o=new Jt(new qe(t,e,t),[s,s,r,s,s,s]),a=new ze;return a.add(o),a.userData.pick={type:"token",id:n.id},a}function m_(n,t=.4){const e=new fe({map:Te(Va(n,{round:!0,bg:"#fff4d6"}))});e.map.center.set(.5,.5),e.map.rotation=se/2;const i=Zt("#e0b25a"),r=new Jt(new Nn(t,t,.12,28),[i,e,i]),s=new ze;return s.add(r),s.userData.pick={type:"token",id:n.id},s}function Ms(n,t){const e=new Jt(new He(n,n),new fe({map:Te(d_(t)),transparent:!0,depthWrite:!1,blending:yo}));return e.userData.noInk=!0,e.renderOrder=3,e}function Ki(n,t,e,i={}){const r=Te(u_(n,{w:Math.round(t*200),h:Math.round(e*200),...i}));return new Jt(new qe(t,e,.06),[Zt("#c98f55"),Zt("#c98f55"),Zt("#c98f55"),Zt("#c98f55"),new fe({map:r}),Zt("#c98f55")])}function or(n,{W:t=12,D:e=7,H:i=4.6,floor:r,wall:s=["#f4ead3","#7cc39a"],back:o=["#c8d6f2","#f3e6d6"],noWall:a=!1}={}){const l=n.root;n.scene.background=Te(vh(...o));const c=new fe({map:mi(r,[t/3,e/3])}),h=new Jt(new qe(t,.5,e),[Zt("#b77c45"),Zt("#b77c45"),c,Zt("#8a5d33"),Zt("#c98a4d"),Zt("#b77c45")]);if(h.position.y=-.25,l.add(h),a)return;const u=new fe({map:mi(_h(...s),[t/4,1])}),f=Zt(s[0]),d=new Jt(new qe(t+.6,i,.3),[f,f,Zt(s[1]),f,u,f]);d.position.set(0,i/2,-e/2-.15),l.add(d);for(const g of[-1,1]){const _=new Jt(new qe(.3,i,e),[f,f,Zt(s[1]),f,f,f]);_.position.set(g*(t/2+.15),i/2,0),l.add(_)}}function g_(n,t){const e=Kn(gt(pt.box(1.4,2.4,.5),"#b77c45",{p:[0,1.2,0]})),i=["#e8584e","#7cc39a","#86b9e8","#f0c96a","#c9b6e6"],r=Gt(n*10|0);for(let s=0;s<3;s++){e.add(gt(pt.box(1.25,.06,.45),"#8a5d33",{p:[0,.35+s*.72,.04]}));let o=-.52;for(;o<.5;){const a=.1+r()*.08,l=.4+r()*.18;e.add(gt(pt.box(a,l,.34),i[Math.floor(r()*5)],{p:[o+a/2,.38+s*.72+l/2,.08]})),o+=a+.02}}return e.position.set(n,0,t),e}function Qn(n,t,e=1){const i=[];for(let s=0;s<6;s++){const o=s/6*se*2;i.push(gt(pt.sph(.26,10,8),"#83c47b",{p:[Math.cos(o)*.22,.95+s%2*.12,Math.sin(o)*.22],s:[1,.55,1]}))}const r=Kn(gt(pt.cyl(.32,.24,.6,12),"#e0896a",{p:[0,.3,0]}),gt(pt.cyl(.35,.35,.08,12),"#c96f52",{p:[0,.6,0]}),gt(pt.sph(.3,10,8),"#5c9d5f",{p:[0,1.05,0],s:[1,.8,1]}),...i);return r.position.set(n,0,t),r.scale.setScalar(e),r}function ti(n,t,e,i="#f0c96a"){const r=Kn(gt(pt.cyl(.015,.015,.8,4),"#6b4a33",{p:[0,.4,0]}),gt(pt.cone(.26,.24,8),"#b9895a",{p:[0,-.02,0]}),gt(pt.cyl(.2,.16,.42,8),i,{p:[0,-.35,0],glow:i}),gt(pt.cyl(.12,.2,.08,8),"#b9895a",{p:[0,-.6,0]}));return r.position.set(n,t,e),r.userData.sway=n,r}function xh(n,t,e,i,r,s="#c98a4d"){const o=[[-1,-1],[1,-1],[-1,1],[1,1]].map(([l,c])=>gt(pt.box(.14,t-.1,.14),"#a8754a",{p:[l*(n/2-.15),(t-.1)/2,c*(e/2-.15)]})),a=Kn(gt(pt.box(n,.14,e),s,{p:[0,t-.07,0]}),...o);return a.position.set(i,0,r),a}function __(n,t,e,i,r="#e8584e",s="#f0c96a"){const o=new Jt(new He(n,t),new fe({map:dh.stripes(r,s)}));return o.rotation.x=-se/2,o.position.set(e,.012,i),o.userData.noInk=!0,o}function ar(n,t,e,i,r=[0,0,0]){t.position.set(...i),t.rotation.set(...r),e.add(t),n[t.userData.pick.id]={obj:t,home:{parent:e,pos:new D(...i),rot:r}}}const wr=[0,0,0],v_=[se/2-.12,0,0];function x_(n,{wings:t,unlocked:e,pages:i,total:r}){const s=n.clear();n.scene.background=Te(Fg()),n.scene.background.userData.cover=!0;const o=new fe({map:mi(gh(512,512),[5,5])}),a=new fe({map:mi(Ng(8,80,{H:256,seed:51}),[6,1])}),l=new Jt(new Nn(12.5,12.5,2.2,56,1),[a,o,a]);l.scale.set(1,1,.72),l.position.y=-1.1,s.add(l);const c=new Jt(new Rr(4.6,40),new fe({map:mi(mh(),[2,2])}));c.rotation.x=-se/2,c.scale.set(1.35,.7,1),c.position.set(0,.015,1.4),c.userData.noInk=!0,s.add(c);const h=11.4,u=6.6,f=3.4,d=-4.2,g=new fe({map:mi(_h("#f4ead3","#7cc39a",512,384,5),[h/4,1])}),_=Zt("#efe2c6"),m=new Jt(new qe(h,u,f),[_,_,_,_,g,_]);m.position.set(0,u/2,d),s.add(m);const p=d+f/2;s.add(gt(pt.box(h+.4,.22,.7),"#c9c3e0",{p:[0,3.25,p+.2]}));for(let A=-5;A<=5;A++)s.add(gt(pt.cyl(.05,.05,.5,6),"#c9c3e0",{p:[A*1.05,3.6,p+.5]}));s.add(gt(pt.box(h+.4,.08,.08),"#c9c3e0",{p:[0,3.86,p+.5]}));const y=pt.extrude([[-h/2-.5,0],[h/2+.5,0],[h/2-1.2,1.6],[-h/2+1.2,1.6]],f+.8);s.add(gt(y,"#e0896a",{p:[0,u,d]})),s.add(gt(pt.hemi(1,18),"#7cc39a",{p:[0,u+1.6,d]}),gt(pt.cyl(.04,.04,.6,6),"#f5cf5f",{p:[0,u+2.8,d]}),gt(pt.sph(.12,8,6),"#f5cf5f",{p:[0,u+3.1,d]})),s.add(gt(pt.cyl(1.1,1.1,.12,20),"#c9c3e0",{p:[0,u+1.6,d]}));const x=(A,O)=>{const F=[[-A/2,0],[A/2,0],[A/2,O-A/2]];for(let k=1;k<12;k++){const X=k/12*se;F.push([Math.cos(X)*A/2,O-A/2+Math.sin(X)*A/2])}return F.push([-A/2,O-A/2]),F},v=[[-3.6,0],[0,0],[3.6,0],[-3.6,3.36],[0,3.36],[3.6,3.36]],P={};t.forEach((A,O)=>{const[F,k]=v[O],X=e.has(A.id),B=new ze;B.position.set(F,k,p),B.add(gt(pt.extrude(x(2.3,3),.12),"#c9c3e0",{p:[0,0,.04]})),B.add(gt(pt.extrude(x(1.8,2.7),.14),X?A.color:"#bdb5a6",{p:[0,0,.1]})),B.add(gt(pt.box(.05,1.7,.02),X?A.dark:"#9a9284",{p:[0,.85,.18]})),B.add(gt(pt.sph(.07,8,6),"#f5cf5f",{p:[.3,1.1,.2]}),gt(pt.sph(.07,8,6),"#f5cf5f",{p:[-.3,1.1,.2]}));const nt=new Jt(new He(2.1,.66),new fe({map:Te(f_(A,!X)),transparent:!0,alphaTest:.5}));nt.position.set(0,1.85,.2),B.add(nt),X||B.add(gt(pt.tor(.14,.04,se,12),"#8a8a9a",{p:[0,1.05,.26]}),gt(pt.box(.36,.3,.1),"#b3aec6",{p:[0,.9,.24]})),B.traverse(W=>{W.isMesh&&(W.userData.pick=null)}),B.userData.pick={type:"wing",id:A.id},s.add(B),P[A.id]=B});for(const A of[-5.3,5.3])s.add(gt(pt.cyl(.42,.42,.1,16),"#86b9e8",{p:[A,1.9,p+.04],r:[se/2,0,0]}),gt(pt.tor(.45,.07,se*2,20),"#c9c3e0",{p:[A,1.9,p+.1]}));const w=new ze;w.position.set(0,0,2.2),w.add(gt(pt.cyl(.55,.7,.2,10),"#c9c3e0",{p:[0,.1,0]}),gt(pt.cyl(.16,.22,1.1,8),"#b77c45",{p:[0,.75,0]})),w.add(gt(pt.box(1.5,.08,1),"#8a5d33",{p:[0,1.32,0],r:[.35,0,0]}));const R=new fe({map:Te(p_(i,r))});for(const A of[-1,1]){const O=new Jt(new qe(.68,.06,.86),[Zt("#fbf6e8"),Zt("#fbf6e8"),R,Zt("#fbf6e8"),Zt("#fbf6e8"),Zt("#fbf6e8")]);O.position.set(A*.36,1.4,.02),O.rotation.set(.35,0,-A*.12),w.add(O)}w.add(gt(pt.box(1.56,.1,1.04),"#6fa3a0",{p:[0,1.34,0],r:[.35,0,0]}));const L=Ms(2.4,"255,226,140");L.position.set(0,1.7,-.1),L.material.opacity=.3+.7*(i/r),w.add(L),w.userData.pick={type:"book"},s.add(w),n.blob(0,2.2,1.6);const E=[];for(let A=0;A<i;A++){const O=gt(pt.box(.32,.02,.42),"#fbf6e8",{p:[0,2.3,2.2]});s.add(O),E.push(O)}n.anim(A=>E.forEach((O,F)=>{const k=A*.8+F/E.length*se*2;O.position.set(Math.cos(k)*1.1,2.3+Math.sin(A*2+F)*.15,2.2+Math.sin(k)*.6),O.rotation.set(.4,k,Math.sin(A*3+F)*.3)})),[[-9.2,-3.2,"p"],[9.4,-3.4,"p"],[-10.4,.8,"f"],[10.3,.4,"f"],[-8.2,4.4,"p"],[8.6,4.2,"p"],[-6.9,-5.4,"f"],[7.2,-5.6,"f"]].forEach(([A,O,F],k)=>{const X=F==="p"?uh(100+k*13):Yg(200+k*13);X.scale.set(1,1.35,1),X.position.set(A,0,O),s.add(X),n.blob(A,O,1.8),n.anim(B=>{X.rotation.z=Math.sin(B*1.3+k)*.012})}),[[-6.2,5.2,.8],[6.4,5.6,.6],[-10.6,-2.4,1]].forEach(([A,O,F],k)=>{const X=Zg(40+k,F);X.position.set(A,0,O),s.add(X)});for(let A=0;A<16;A++){const O=Gt(700+A),F=(O()-.5)*20,k=-2+O()*8;if(Math.abs(F)<6.5&&k<4.5)continue;const X=Jg(900+A);X.position.set(F,0,k),s.add(X)}return s.add(Qn(-6.2,-2.2,1.1),Qn(6.2,-2.2,1.1)),n.character("girl",-1.9,3,1.35),n.character("boy",1.9,3.1,1.35,{flip:!0}),n.character("mama",-3.4,2,1.9),n.character("baba",3.4,2.1,1.95,{flip:!0}),n.setView({center:[0,3,0],pitch:.42,yaw:0,width:23,height:14,sway:.05}),{doors:P,book:w}}function M_(n,t){const e=n.clear();or(n,{floor:Wa(),wall:["#f4ead3","#7cc39a"],back:["#b9c9ee","#f1e4d2"]});const i=-3.5;e.add(gt(pt.box(.4,3.7,.4),"#c9c3e0",{p:[-1.85,1.85,i+.1]}),gt(pt.box(.4,3.7,.4),"#c9c3e0",{p:[1.85,1.85,i+.1]}),gt(pt.box(4.2,.5,.45),"#c9c3e0",{p:[0,3.85,i+.1]}));const r=new Jt(new He(3.3,3.5),new fe({color:"#ffe9a0"}));r.position.set(0,1.75,i+.02),e.add(r);const s=[-1,1].map(u=>{const f=new ze;f.position.set(u*1.65,0,i+.12),f.add(gt(pt.box(1.64,3.5,.14),"#b77c45",{p:[-u*.82,1.75,0]}));for(const d of[.5,3])f.add(gt(pt.box(1.5,.12,.05),"#8a7a68",{p:[-u*.82,d,.09]}));return f.add(gt(pt.tor(.14,.035,se*2,14),"#f5cf5f",{p:[-u*.18,1.1,.12]})),e.add(f),f}),o={},a=Pr(t.tokens),l=[-1.2,-.4,.4,1.2],c=[2.6,1.6];a.forEach((u,f)=>{const d=l[f%4],g=c[Math.floor(f/4)],_=d<0?s[0]:s[1];ar(o,m_(u),_,[d-_.position.x,g,.13],[se/2,0,0])}),e.add(gt(pt.box(4.8,.6,1.2),"#e4e0f0",{p:[0,.3,-1.5]}));const h=[-1.68,-.56,.56,1.68].map((u,f)=>{e.add(gt(pt.cyl(.44,.44,.04,24),"#8a7a68",{p:[u,.61,-1.5]}));const d=Ki(String(f+1),.4,.3,{size:44});return d.position.set(u,.3,-.88),e.add(d),{pos:new D(u,.68,-1.5),rot:[0,0,0]}});return e.add(__(5.4,2.2,0,1),g_(-4.6,-3),Qn(4.8,-2.9),ti(-3.2,3.6,-1.5),ti(3.2,3.6,-1.5,"#86b9e8")),n.character("girl",-3.8,1.4,1.4),n.character("boy",4,1.5,1.4,{flip:!0}),{tokens:o,anchors:h,async solve(){await n.tween(1.4,u=>{s[0].rotation.y=-1.9*u,s[1].rotation.y=1.9*u}),n.burst(new D(0,1.8,-3),14)},view:{center:[0,1.5,-.6],pitch:.66,width:13,height:8.6}}}function y_(n,t,e){const i=n.clear();or(n,{floor:Wa(512,512,"#dcc3a0","#a08060",4),wall:["#e9e2f4","#8f84c2"],back:["#2f3a78","#a7a6ee"]});const r=-3.5+.05,s=new fe({map:Te(dc(256,256,!1))}),o=new Jt(new Rr(1.15,40),s);o.position.set(0,3.25,r+.02),i.add(o),i.add(gt(pt.tor(1.2,.13,se*2,40),"#f5cf5f",{p:[0,3.25,r+.1]})),i.add(gt(pt.box(.07,2.3,.06),"#f5cf5f",{p:[0,3.25,r+.08]}),gt(pt.box(2.3,.07,.06),"#f5cf5f",{p:[0,3.25,r+.08]}));const a=e.map((h,u)=>{const f=(u-1)*2.6,d=Ki(h.label,1.7,.72,{ar:!0,bg:"#fff4d6"});return d.position.set(f,1.5,r+.06),i.add(d),{pos:new D(f,.93,-2.72),rot:v_}});i.add(gt(pt.box(8.2,.5,.8),"#b77c45",{p:[0,.25,-2.85]}));const l={};i.add(xh(7.4,.72,1.5,0,.9)),Pr(t.tokens).forEach((h,u)=>ar(l,Ls(h,.9),i,[-3+u*1.2,.79,.9],wr));const c=Kn(gt(pt.cyl(.13,.18,1.5,12),"#86b9e8",{p:[0,1.5,0],r:[0,0,.9]}),gt(pt.cyl(.02,.03,1.2,5),"#8a5d33",{p:[.2,.6,0],r:[0,0,-.3]}),gt(pt.cyl(.02,.03,1.2,5),"#8a5d33",{p:[-.2,.6,.1],r:[.2,0,.3]}),gt(pt.cyl(.02,.03,1.2,5),"#8a5d33",{p:[0,.6,-.2],r:[-.3,0,0]}));return c.position.set(4.7,0,-1.4),i.add(c),i.add(Qn(-4.9,-2.9,.9),ti(-3.4,3.8,-2.2,"#c9b6e6"),ti(3.4,3.8,-2.2,"#f0c96a")),n.character("boy",-4.2,1.6,1.4),n.character("girl",4.4,1.8,1.4,{flip:!0}),{tokens:l,anchors:a,async solve(){s.map=Te(dc(256,256,!0));const h=Ms(4,"255,230,150");h.position.set(0,3.25,r+.3),i.add(h),await n.tween(.8,u=>h.scale.setScalar(.3+u)),n.burst(new D(0,3.2,-3),14)},view:{center:[0,1.6,-.6],pitch:.66,width:13,height:8.8}}}function S_(n,t){const e=n.clear();or(n,{floor:Wa(512,512,"#e8c08a","#b0824e",7),wall:["#f6ead0","#eab06a"],back:["#f2c98e","#f8ecd8"]});const i=-1,r=1;e.add(xh(vs+.4,r,xs+.4,0,i,"#a8754a"));const s=new fe({map:Te(fc(!1))}),o=new Jt(new He(vs,xs),s);o.rotation.x=-se/2,o.position.set(0,r+.005,i),e.add(o);const a=Wn.stops.map(([h,u])=>({pos:new D(h,r+.07,u+i),rot:wr}));e.add(gt(pt.box(8.2,.42,.9),"#b77c45",{p:[0,.21,2.65]}));const l={};Pr(t.tokens).forEach((h,u)=>ar(l,Ls(h,.95),e,[-3.3+u*1.32,.48,2.65],wr)),e.add(Qn(-5,-2.9,1.1),Qn(5,-2.9,1.1),ti(-3.6,3.9,-2.6),ti(3.6,3.9,-2.6,"#e8584e"));const c=Kn(gt(pt.sph(.45,16,12),"#86b9e8",{p:[0,1.2,0]}),gt(pt.tor(.52,.03,se*1.4,20),"#f5cf5f",{p:[0,1.2,0],r:[0,se/2,.4]}),gt(pt.cyl(.05,.06,.7,6),"#8a5d33",{p:[0,.4,0]}),gt(pt.cyl(.3,.35,.1,10),"#8a5d33",{p:[0,.05,0]}));return c.position.set(-4.9,0,.6),e.add(c),n.character("girl",4.8,.9,1.4,{flip:!0}),n.character("mama",-4.6,2.4,1.8),{tokens:l,anchors:a,async solve(){s.map=Te(fc(!0)),n.burst(new D(0,1.6,i),16),await n.tween(.6,()=>{})},view:{center:[0,1,-.2],pitch:.9,width:12.8,height:9}}}const E_={trunks:()=>Zt("#a8754a"),bricks:()=>Zt("#ffffff",{map:dh.bricks("#dcb27c","#cfa06a","#8a5a30")}),leaves:()=>Zt("#7cbf6a"),glass:()=>Zt("#bfe6f5",{transparent:!0,opacity:.5}),steel:()=>Zt("#aab3c2"),gold:()=>Zt("#f5cf5f",{emissive:"#f5cf5f",emissiveIntensity:.3})};function b_(n,t){const e=n.clear();or(n,{floor:mh(),wall:["#cfe6f2","#eab06a"],back:["#8fc6ee","#f6e6c2"]});const i=new fe({color:"#ffffff",transparent:!0,opacity:.3,depthWrite:!1}),r=-1.4,s=[[],[],[]];for(const u of[-1.9,0,1.9])for(const f of[-2.4,-1.5]){const d=new Jt(pt.cyl(.15,.17,2.2,10),i);d.position.set(u,1.1,f),s[0].push(d)}const o=[[6.2,1.3,.3,0,-2.95],[.3,1.3,3.2,-3.1,r],[.3,1.3,3.2,3.1,r],[2.3,1.3,.3,-1.95,.15],[2.3,1.3,.3,1.95,.15]];for(const[u,f,d,g,_]of o){const m=new Jt(pt.box(u,f,d),i);m.position.set(g,f/2,_),s[1].push(m)}{const u=new Jt(pt.box(6.5,.16,1.9),i);u.position.set(0,2.28,-2),s[2].push(u)}s.flat().forEach(u=>e.add(u));const l=["Pillars","Walls","Roof"].map((u,f)=>{const d=(f-1)*2.7;e.add(gt(pt.box(1,.5,1),"#c98a4d",{p:[d,.25,1.75]}));const g=Ki(u,1.3,.45);return g.position.set(d,1.05,1.2),g.rotation.x=-.1,e.add(g),e.add(gt(pt.cyl(.05,.05,.9,6),"#8a5d33",{p:[d,.45,1.16]})),{pos:new D(d,.57,1.75),rot:wr}});e.add(gt(pt.box(8.4,.18,.95),"#b77c45",{p:[0,.09,2.95]}));const c={};Pr(t.tokens).forEach((u,f)=>ar(c,Ls(u,.95),e,[-3.4+f*1.36,.25,2.95],wr));for(const[u,f,d]of[[-5,-2.6,1],[5.1,-2.4,2]]){const g=uh(300+d);g.scale.set(1,1.1,1),g.position.set(u,0,f),e.add(g),n.blob(u,f,1.4)}for(let u=0;u<5;u++)e.add(gt(pt.box(.5,.2,.3),"#d9b07a",{p:[-4.6+u%3*.52,.1+Math.floor(u/3)*.2,.9],r:[0,.1*u,0]}));n.character("boy",-4.6,2,1.4),n.character("baba",4.7,1.2,1.9,{flip:!0});const h=(u,f)=>s[u].forEach(d=>{d.material=f?E_[f]():i});return{tokens:c,anchors:l,onPlace:(u,f)=>(h(u,f),!1),onRemove:u=>h(u,null),async solve(){for(let u=0;u<3;u++)n.burst(s[u][0].position.clone().setY(2.4),8),await n.tween(.3,()=>{})},view:{center:[0,1.2,-.3],pitch:.7,width:13,height:8.8}}}function w_(n,t){const e=n.clear();or(n,{floor:c_(),wall:["#eaf3f6","#86b9e8"],back:["#9fd0ea","#eef6f2"]});const i=-.5;e.add(gt(pt.cyl(1.6,1.7,.55,8),"#e4e0f0",{p:[0,.28,i]}),gt(pt.tor(1.62,.09,se*2,8),"#c9c3e0",{p:[0,.6,i],r:[se/2,0,se/8]}));const r=new Jt(new Rr(1.42,8),new fe({color:"#78c4dc"}));r.rotation.x=-se/2,r.rotation.z=se/8,r.position.set(0,.64,i),e.add(r),e.add(gt(pt.cyl(.18,.24,1.2,10),"#c9c3e0",{p:[0,.9,i]}),gt(pt.cyl(.5,.2,.25,12),"#e4e0f0",{p:[0,1.55,i]}));for(let l=0;l<4;l++){const c=l/4*se*2+.4,h=pt.tube([[Math.cos(c)*.4,1.62,i+Math.sin(c)*.4],[Math.cos(c)*.8,1.5,i+Math.sin(c)*.8],[Math.cos(c)*1,.65,i+Math.sin(c)*1]],.07,12),u=gt(h,"#9ed8ee",{basic:!0});u.userData.noInk=!0,e.add(u)}const s=Ki(" ",7.6,1.4,{bg:"#e8c08a"});s.position.set(0,2.85,-3.4),e.add(s);const o=t.slots.map((l,c)=>{const h=(c-3)*1.05,u=Ki(String(c+1),.36,.3,{size:44});return u.position.set(h,3.38,-3.34),e.add(u),e.add(gt(pt.cyl(.04,.04,.14,6),"#8a5d33",{p:[h,3.15,-3.3],r:[se/2,0,0]})),{pos:new D(h,2.66,-3.25),rot:[se/2,0,0]}}),a={};return Pr(t.tokens).forEach((l,c)=>{const h=(12+c*26)*se/180;ar(a,Ls(l,.82),e,[Math.cos(h)*3,.06,i+Math.sin(h)*2.35],[0,(Math.random()-.5)*.3,0])}),e.add(Qn(-5,-2.9),Qn(5,-2.9),ti(-4,3.9,-1.2,"#86b9e8"),ti(4,3.9,-1.2,"#86b9e8")),n.character("girl",-4.9,1.6,1.4),n.character("boy",4.9,1.6,1.4,{flip:!0}),n.anim(l=>{r.material.color.setHSL(.54,.55,.66+Math.sin(l*2)*.02)}),{tokens:a,anchors:o,async solve(){for(let l=0;l<3;l++)n.burst(new D(0,1.6,i),10,3),await n.tween(.35,()=>{})},view:{center:[0,1.4,-.4],pitch:.64,width:13,height:8.8}}}function T_(n,t){const e=n.clear();or(n,{floor:gh(),noWall:!0,back:["#6fb3ee","#cfe9ff"]});const i=da.map((P,w)=>{const R=vh(P.top,P.bot,P.stars?1024:64,P.stars?512:256);if(P.stars){const L=R.getContext("2d"),E=Gt(9);L.fillStyle="#fff6c0";for(let M=0;M<70;M++)L.beginPath(),L.arc(E()*1024,E()*300,1.5+E()*2,0,7),L.fill()}return Te(R)});n.scene.background=i[2];const r=new Jt(new qe(12.4,1.3,.6),[Zt("#6fb57c"),Zt("#6fb57c"),Zt("#83c47b"),Zt("#6fb57c"),new fe({map:mi(h_(),[4,1])}),Zt("#6fb57c")]);r.position.set(0,.65,-3.2),e.add(r);const s=new D(0,1.3,-2.55),o=3.3,a=gt(pt.tor(o,.09,se+.7,48),"#f5cf5f",{p:[s.x,s.y,s.z],r:[0,0,-.35]});e.add(a);const l=[-20,0,45,98,145,182,200].map(P=>P*se/180),c=P=>new D(s.x+Math.cos(P)*o,s.y+Math.sin(P)*o,s.z),h={},u=new fe({transparent:!0,opacity:0,depthWrite:!1});t.tokens.forEach((P,w)=>{const R=new ze;R.add(gt(pt.sph(.2,12,9),w===0||w>=5?"#8f84c2":"#e8584e"));const L=new Jt(new yi(.5,8,6),u);L.userData.noInk=!0,R.add(L),R.userData.pick={type:"token",id:P.id};const E=c(l[w]);ar(h,R,e,[E.x,E.y,E.z+.05])});const f=Kn(gt(pt.sph(.42,16,12),"#ffd24a",{basic:!0})),d=Ms(2.2,"255,220,120");f.add(d),e.add(f);let g=l[2];const _=P=>{g=P,f.position.copy(c(P)).add(new D(0,0,.35))};_(g),e.add(gt(pt.cyl(.75,.8,.14,20),"#e4e0f0",{p:[0,.07,-1]}),gt(pt.cyl(.07,.09,1.4,8),"#8a5d33",{p:[0,.84,-1]}));const m=new He(1,.24).rotateX(-se/2).translate(.5,0,0),p=new Jt(m,new fe({color:"#2f3a50",transparent:!0,opacity:.45,depthWrite:!1}));p.userData.noInk=!0,p.position.set(0,.15,-1),p.renderOrder=2,e.add(p);const y=P=>{const w=l[P],R=Math.min(w,se-w);if(R<=.01){p.visible=!1;return}p.visible=!0,p.scale.x=Math.min(3.4,1.4/Math.tan(R)),p.rotation.y=Math.cos(w)>0?se:0};y(2);const x=t.slots.map((P,w)=>{const R=(w-2)*1.75,L=gt(pt.cyl(.24,.2,.5,8),"#e9e2d0",{p:[0,.75,0]}),E=Ms(1.6,"255,210,110");E.position.set(0,.8,.2),E.visible=!1;const M=Kn(gt(pt.cyl(.26,.3,.1,8),"#8a5d33",{p:[0,.45,0]}),L,gt(pt.cone(.32,.3,8),"#8a5d33",{p:[0,1.15,0]}),gt(pt.tor(.08,.025,se*2,10),"#8a5d33",{p:[0,1.36,0]}),E);M.position.set(R,0,2),e.add(M);const A=Ki(P.label,1.45,.62,{sub:P.sub});return A.position.set(R,.36,2.78),A.rotation.x=-.25,e.add(A),{glass:L,glow:E}});e.add(gt(pt.box(9.2,.4,.9),"#b77c45",{p:[0,.2,2]})),n.character("mama",-5.1,.2,1.8),n.character("boy",5.1,.4,1.4,{flip:!0});const v=(P,w)=>{const R=x[P];if(!w){R.glass.material=Zt("#e9e2d0"),R.glow.visible=!1;return}const L=da[t.tokens.find(E=>E.id===w).sky];R.glass.material=new fe({color:L.bot}),R.glow.visible=!0};return{tokens:h,anchors:[],onSelect(P){const w=t.tokens.findIndex(E=>E.id===P),R=g,L=l[w];n.scene.background=i[w],y(w),n.tween(.5,E=>_(R+(L-R)*E))},onPlace:(P,w)=>(v(P,w),!0),onRemove:P=>v(P,null),async solve(){n.scene.background=i[6],y(6),_(l[6]);for(let P=0;P<5;P++)n.burst(new D((P-2)*1.75,1.3,2),6),await n.tween(.2,()=>{})},view:{center:[0,1.6,-.2],pitch:.5,width:13,height:8.4}}}const A_={"animal-door":M_,"sky-window":y_,"hijrah-map":S_,"first-masjid":b_,"wudu-fountain":w_,"sun-clock":T_};function R_(n,t,e,i){const r=A_[t](n,e,i);return n.setView({yaw:0,sway:.03,...r.view}),n.root.traverse(s=>{if(s.userData.sway!=null){const o=s.userData.sway;n.anim(a=>{s.rotation.z=Math.sin(a*1.4+o)*.04})}}),r}let Ae,_i,Xa=localStorage.getItem("fdh-muted")==="1";function pa(){if(!Ae)try{Ae=new(window.AudioContext||window.webkitAudioContext),_i=Ae.createGain(),_i.gain.value=Xa?0:.4,_i.connect(Ae.destination)}catch{Ae=null}}function C_(n){Xa=n,localStorage.setItem("fdh-muted",n?"1":"0"),_i&&(_i.gain.value=n?0:.4)}const Mh=()=>Xa;function en(n,t,{type:e="triangle",vol:i=.5,slide:r=1,delay:s=0}={}){if(!Ae)return;const o=Ae.currentTime+s,a=Ae.createOscillator(),l=Ae.createGain();a.type=e,a.frequency.setValueAtTime(n,o),a.frequency.exponentialRampToValueAtTime(n*r,o+t),l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(i,o+.012),l.gain.exponentialRampToValueAtTime(1e-4,o+t),a.connect(l).connect(_i),a.start(o),a.stop(o+t+.02)}function xo(n,{vol:t=.3,cutoff:e=1800,delay:i=0}={}){if(!Ae)return;const r=Ae.currentTime+i,s=Math.ceil(Ae.sampleRate*n),o=Ae.createBuffer(1,s,Ae.sampleRate),a=o.getChannelData(0);for(let u=0;u<s;u++)a[u]=(Math.random()*2-1)*(1-u/s);const l=Ae.createBufferSource(),c=Ae.createBiquadFilter(),h=Ae.createGain();l.buffer=o,c.type="lowpass",c.frequency.value=e,h.gain.value=t,l.connect(c).connect(h).connect(_i),l.start(r)}const je={tap:()=>en(700,.08,{vol:.25,slide:1.3}),place:()=>{en(440,.1,{vol:.35}),xo(.08,{vol:.2,cutoff:900,delay:.05})},lift:()=>en(360,.12,{vol:.25,slide:.8}),hmm:()=>{en(330,.2,{vol:.3,slide:.85}),en(262,.28,{vol:.3,slide:.9,delay:.18})},click:()=>{xo(.06,{vol:.35,cutoff:3e3}),en(1200,.05,{type:"square",vol:.06,delay:.03})},open:()=>{en(520,.1,{vol:.3}),en(780,.12,{delay:.06,vol:.3})},page:()=>{xo(.35,{vol:.25,cutoff:2500}),en(1047,.3,{vol:.2,delay:.2})},solve:()=>[523,659,784,1047].forEach((n,t)=>en(n,.24,{delay:t*.1,vol:.4})),talk:()=>{en(880,.1,{vol:.25}),en(1175,.14,{vol:.25,delay:.08})}},yh="fdh-save-v1",pc=()=>({solved:{},talks:0,roomTalks:{},notes:{},current:null,seenHowTo:!1});function P_(){try{return{...pc(),...JSON.parse(localStorage.getItem(yh)||"{}")}}catch{return pc()}}function L_(n){try{localStorage.setItem(yh,JSON.stringify(n))}catch{}}const et=n=>document.getElementById(n),te=P_(),Sh=new URLSearchParams(location.search).has("all"),Qi=()=>L_(te),Si=()=>nn.filter(n=>te.solved[n]).length,ys=n=>!n.locked&&(Sh||Si()>=n.needPages),$a=n=>{const t=er[n],e=Hi.find(r=>r.id===t.wing);if(!ys(e))return!1;const i=e.rooms.indexOf(n);return Sh||i===0||!!te.solved[e.rooms[i-1]]};function _r(n){te.talks++,ct&&(te.roomTalks[ct.id]=(te.roomTalks[ct.id]||0)+1),Qi(),je.talk(),Ds();const t=et("talkPill");t.classList.remove("bump"),t.offsetWidth,t.classList.add("bump")}function Ds(){et("talkCount").textContent=te.talks,et("talkCount2").textContent=te.talks,et("pageCount").textContent=`${Si()}/${nn.length}`,et("muteBtn").innerHTML=et("muteBtn2").innerHTML=Ue(Mh()?"mute":"sound")}const D_=["titleScreen","howtoScreen","wingScreen","introScreen","lookAway","scrollScreen","tryScreen","pageScreen","talkScreen","bookScreen","finaleScreen"],Ke=n=>{et(n).classList.remove("hidden"),n!=="titleScreen"&&je.open()},Be=n=>et(n).classList.add("hidden"),Xi=()=>D_.some(n=>!et(n).classList.contains("hidden"));let Se,Dn="title",ct=null,Eh=null;const Mo=new Map;function I_(n){return Mo.has(n.id)||Mo.set(n.id,Va(n,{size:128}).toDataURL()),Mo.get(n.id)}function qa(){const n=window.innerWidth,t=window.innerHeight;Se.renderer.setSize(n,t,!1);let e=0,i=0;Dn==="room"&&(e=et("taskPill").getBoundingClientRect().bottom+6,i=t-et("lockBar").getBoundingClientRect().top+6),Dn==="hub"&&(e=50,i=t-et("wingBar").getBoundingClientRect().top+4),Se.resize(n,t,e,i)}function tr(){Dn="hub",ct=null,Eh=x_(Se,{wings:Hi,unlocked:new Set(Hi.filter(ys).map(n=>n.id)),pages:Si(),total:nn.length}),et("roomHud").classList.add("hidden"),et("hubHud").classList.remove("hidden"),et("nameTag").classList.add("hidden"),et("wingBar").innerHTML=Hi.map((n,t)=>{const e=ys(n),i=n.rooms.filter(r=>te.solved[r]).length;return`<button class="wing-chip ${e?"":"locked"}" data-wing="${n.id}" style="--c:${n.color};--d:${n.dark};--i:${t}">
      <span class="wi">${e?Ss[n.id]?Ue(Ss[n.id]):n.icon:Ue("lock")}</span><span class="wn">${n.name}</span><span class="wc">${n.locked?"coming soon":e?`${i}/${n.rooms.length}`:`${n.needPages} page${n.needPages>1?"s":""} to open`}</span></button>`}).join(""),et("wingBar").querySelectorAll("[data-wing]").forEach(n=>n.addEventListener("click",()=>bh(n.dataset.wing))),Ds(),qa()}const Ss={quran:"book",seerah:"camel",worship:"dua",civ:"mosque",akhlaq:"leaf"};function bh(n){const t=Hi.find(e=>e.id===n);et("wingTitle").innerHTML=`${Ss[t.id]?Ue(Ss[t.id]):t.icon} ${t.name}`,t.locked?(et("wingBlurb").textContent="This wing is still being written. In sha Allah, its doors will open in a future update.",et("roomList").innerHTML=""):ys(t)?(et("wingBlurb").textContent=t.blurb,et("roomList").innerHTML=`<div class="dkcards one">${t.rooms.map((e,i)=>{var a;const r=er[e],s=$a(e),o=te.solved[e];return zh({attr:"data-room",id:e,i,colorHex:t.color,darkHex:t.dark,locked:!s,done:o,pic:`<span class="glyph">${r.icon}</span>`,title:r.title,sub:o?`${Ue("tick")} Page restored`:s?"A missing page is inside!":"Finish the room before first",tag:s?o?`${Ue("star")} Play again`:"Enter ➜":"",tagKind:o?"done":"new",meta:o?`${Ue("talk")} ${te.roomTalks[e]||0} talks`:s?`${Ue("key")} ${((a=r.page)==null?void 0:a.title)||""}`:""})}).join("")}</div>`,et("roomList").querySelectorAll("[data-room]").forEach(e=>e.addEventListener("click",()=>{Be("wingScreen"),Is(e.dataset.room)}))):(et("wingBlurb").textContent=`Restore ${t.needPages} page${t.needPages>1?"s":""} of the Book to open this wing. (You have ${Si()}.)`,et("roomList").innerHTML=""),Ke("wingScreen")}function Is(n,t){const e=er[n];let i=e.slots.map((r,s)=>({...r,answer:r.answer||e.answer[s]}));t!=null&&t.order?i=t.order.map(r=>i.find(s=>(s.id||s.label)===r)):e.shuffleSlots&&(i=i.sort(()=>Math.random()-.5)),Dn="room",ct={id:n,room:e,slots:i,filled:i.map(()=>null),selected:null,tries:(t==null?void 0:t.tries)||0,talkedScroll:!1,marks:[]},ct.set=R_(Se,n,e,i),et("hubHud").classList.add("hidden"),et("roomHud").classList.remove("hidden"),et("roomTitle").textContent=`${e.icon} ${e.title}`,et("taskPill").textContent="👆 "+e.childTask,Dr(),qa(),t!=null&&t.filled&&t.filled.forEach((r,s)=>{r&&ct.set.tokens[r]&&Ah(s,r,!0)}),Lr(),et("introTitle").textContent=`${e.icon} ${e.title}`,et("introText").textContent=e.childIntro,et("lookText").textContent=e.lookPrompt,Ke("introScreen")}function Lr(){ct&&(te.current={id:ct.id,order:ct.slots.map(n=>n.id||n.label),filled:ct.filled.slice(),tries:ct.tries},Qi())}function Dr(){const n=ct.selected;et("slots").innerHTML=ct.slots.map((t,e)=>{const i=ct.filled[e],r=i&&ct.room.tokens.find(s=>s.id===i);return`<button class="slot ${r?"full":""} ${n&&!r?"wants":""} ${ct.marks[e]?"ok":""}" data-slot="${e}">
      <span class="sl ${t.ar?"ar":""}">${t.label}${t.sub?`<i class="ar">${t.sub}</i>`:""}</span>
      <span class="si">${r?`<img src="${I_(r)}" alt="${r.name}">`:""}</span></button>`}).join(""),et("slots").querySelectorAll("[data-slot]").forEach(t=>t.addEventListener("click",()=>Th(+t.dataset.slot))),et("tryBtn").disabled=ct.filled.some(t=>!t),et("lockBar").classList.toggle("ready",!et("tryBtn").disabled)}const U_=n=>{var t;return(t=ct.set.tokens[n])==null?void 0:t.obj.scale.setScalar(1)};function wh(n){var i,r;if(!ct||Xi())return;const t=ct.filled.indexOf(n);if(t>=0&&ct.selected===n&&!ct.set.onSelect){ct.selected=null,U_(n),us(t);return}const e=ct.selected;ct.selected=e===n?null:n,e&&ct.set.tokens[e]&&ct.set.tokens[e].obj.scale.setScalar(1),ct.selected?(je.tap(),(r=(i=ct.set).onSelect)==null||r.call(i,n)):je.lift(),Dr()}function Th(n){if(!ct)return;const t=ct.selected;if(!t){ct.filled[n]&&us(n);return}const e=ct.filled.indexOf(t);e>=0&&us(e,!0),ct.filled[n]&&us(n,!0),ct.set.tokens[t].obj.scale.setScalar(1),ct.selected=null,Ah(n,t)}function Ah(n,t,e){var o,a;ct.filled[n]=t,ct.marks[n]=!1;const i=(a=(o=ct.set).onPlace)==null?void 0:a.call(o,n,t),r=ct.set.anchors[n],s=ct.set.tokens[t];!i&&r&&(Se.root.attach(s.obj),e?(s.obj.position.copy(r.pos),s.obj.rotation.set(...r.rot)):Se.moveTo(s.obj,r.pos,r.rot,.55)),e||je.place(),Dr(),Lr()}function us(n,t){var s,o;const e=ct.filled[n];if(!e)return;ct.filled[n]=null,ct.marks[n]=!1;const i=(o=(s=ct.set).onRemove)==null?void 0:o.call(s,n,e),r=ct.set.tokens[e];!i&&ct.set.anchors[n]&&(r.home.parent.attach(r.obj),Se.moveTo(r.obj,r.home.pos,r.home.rot,.5)),t||(je.lift(),Dr(),Lr())}async function Rh(){if(!ct||ct.filled.some(e=>!e))return;je.click();const n=ct.slots.map((e,i)=>ct.filled[i]===e.answer),t=n.filter(Boolean).length;if(t===n.length)return N_();ct.tries++,ct.marks=n,Lr(),Dr(),je.hmm(),et("tryCount").textContent=`${t} of ${n.length} ${t===1?"is":"are"} right!`,et("tryHead").textContent=t?"Good thinking! The gold stars show the right ones. The lock needs the rest.":"The lock clicked… but it didn't open yet.",Ke("tryScreen")}async function N_(){const n=ct.id;je.solve(),te.solved[n]={at:Date.now(),tries:ct.tries+1},te.current=null,Qi(),et("roomHud").classList.add("hidden"),et("nameTag").classList.add("hidden"),ct.selected=null,await ct.set.solve(),await Se.tween(.6,()=>{}),je.page(),et("pageSpread").innerHTML=Ch(n),Ke("pageScreen"),setTimeout(()=>vc(et("pageSpread"),!0),250)}function Ch(n){const t=er[n],e=t.page,i=Hi.find(o=>o.id===t.wing);if(!te.solved[n])return`<div class="pg left missing"><div class="pg-ic">❔</div><h3>A missing page</h3><p>Find it in the ${i.name}: <b>${t.title}</b>.</p></div><div class="pg right missing"><p class="faint">~ ~ ~</p></div>`;const s=te.notes[n];return`<div class="pg left"><div class="pg-ic">${e.icon}</div><h3>${e.title}</h3><div class="pg-wing">${i.icon} ${i.name}</div>
      <ul>${e.learned.map(o=>`<li>${o}</li>`).join("")}</ul></div>
    <div class="pg right"><div class="src"><p>${e.source.text}</p><cite>— ${e.source.ref}</cite></div>
      <div class="convo">💬 <b>${te.roomTalks[n]||0}</b> conversation${te.roomTalks[n]===1?"":"s"} in this room</div>
      ${s?`<div class="pnote">✏️ “${s.replace(/</g,"&lt;")}”</div>`:""}</div>`}function F_(){const n=ct.room.talk;et("talkParent").textContent=n.parent,et("talkChild").textContent=n.child,et("talkApply").textContent=n.apply,et("talkNote").value=te.notes[ct.id]||"",et("talkScreen").querySelectorAll("button.talked").forEach(e=>{e.disabled=!1,e.textContent="✔ We talked"});const t=nn.find(e=>!te.solved[e]&&$a(e));et("talkNextRoom").classList.toggle("hidden",!t),et("talkNextRoom").dataset.room=t||"",Ke("talkScreen")}function mc(n){const t=et("talkNote").value.trim();if(ct&&(t?te.notes[ct.id]=t:delete te.notes[ct.id],Qi()),Be("talkScreen"),Si()===nn.length&&!te.finaleSeen){te.finaleSeen=!0,Qi(),tr(),Ke("finaleScreen"),setTimeout(()=>vc(et("finaleScreen").querySelector(".ribbon"),!0),300);return}n?Is(n):tr()}function ma(){!ct||Xi()||Ke("lookAway")}function O_(){Be("lookAway"),et("scrollBody").innerHTML=Uh(ct.id,ct.room,{tries:ct.tries,talked:ct.talkedScroll}),Nh(et("scrollBody"),()=>{ct.talkedScroll=!0,_r()}),et("scrollScreen").scrollTop=0,Ke("scrollScreen")}function k_(){const n=et("parentBtn"),t=et("holdRing"),e=650;let i=0,r=0;const s=()=>{cancelAnimationFrame(r),i=0,t.style.strokeDashoffset=277,n.classList.remove("holding")},o=()=>{const a=Math.min(1,(performance.now()-i)/e);if(t.style.strokeDashoffset=277*(1-a),a>=1){s(),ma();return}r=requestAnimationFrame(o)};n.addEventListener("pointerdown",a=>{pa(),a.preventDefault(),i=performance.now(),n.classList.add("holding"),r=requestAnimationFrame(o)}),["pointerup","pointerleave","pointercancel"].forEach(a=>n.addEventListener(a,s)),n.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),ma())})}let gi=0;function ga(n){gi=n??Math.max(0,nn.findIndex(t=>te.solved[t])),et("bookSummary").innerHTML=Vh([["book",`<b>${Si()}</b> of ${nn.length} pages restored`,"gold"],["talk",`<b>${te.talks}</b> conversations together`,"blue"]]),_a(),Ke("bookScreen")}function _a(){et("bookSpread").innerHTML=Ch(nn[gi]),et("bookDots").innerHTML=nn.map((n,t)=>`<i class="${te.solved[n]?"got":""} ${t===gi?"on":""}"></i>`).join("")}function B_(){const n=Se.renderer.domElement;n.addEventListener("pointerdown",r=>{if(pa(),Xi())return;const s=Se.pick(r.clientX,r.clientY);s&&(Dn==="hub"&&(je.tap(),s.type==="wing"&&bh(s.id),s.type==="book"&&ga()),Dn==="room"&&s.type==="token"&&wh(s.id))});let t=0;n.addEventListener("pointermove",r=>{const s=performance.now();s-t<60||r.pointerType!=="mouse"||(t=s,n.style.cursor=!Xi()&&Se.pick(r.clientX,r.clientY)?"pointer":"default")}),window.addEventListener("keydown",r=>{if(r.key==="Escape")for(const s of["wingScreen","bookScreen","howtoScreen","lookAway"])et(s).classList.contains("hidden")||Be(s);r.key.toLowerCase()==="p"&&Dn==="room"&&!Xi()&&ma()}),window.addEventListener("resize",qa),et("startBtn").onclick=()=>{pa(),Be("titleScreen");const r=te.current;r&&er[r.id]&&$a(r.id)?Is(r.id,r):tr(),te.seenHowTo||(te.seenHowTo=!0,Qi(),Ke("howtoScreen"))},et("howBtn").onclick=()=>Ke("howtoScreen"),et("helpBtn").onclick=()=>Ke("howtoScreen"),et("howClose").onclick=()=>Be("howtoScreen");const e={"🤝":"friends","🧒":"child","👤":"grownup","🗣️":"talk","🛑":"stop","📖":"book"};et("howList").outerHTML=Hh(Ih.map(([r,s])=>({icon:e[r]||"hand",text:s}))),et("titleHero").innerHTML=Wh([{icon:"child",cls:"bob"},{icon:"house",cls:"main"},{icon:"book",cls:"sm"},{icon:"grownup",cls:"bob"}],{tone:"dusk",glow:!0,sparkles:5}).replace(/^<div class="dkhero[^>]*>|<\/div>$/g,""),et("startBtn").innerHTML=`${Ue("door")} Enter the House`,et("howBtn").innerHTML=`${Ue("grownup")} Grown-ups: how it works`,kh({helpBtn:"help",backBtn:"back"}),et("bookBtn").firstChild.textContent="",et("bookBtn").insertAdjacentHTML("afterbegin",Ue("book")),et("bookSummary").classList.add("dkstats"),et("wingClose").onclick=()=>Be("wingScreen"),et("introTalked").onclick=()=>{_r(),Be("introScreen")},et("introSkip").onclick=()=>Be("introScreen"),et("iAmGrownUp").onclick=O_,et("lookCancel").onclick=()=>Be("lookAway"),et("scrollClose").onclick=()=>Be("scrollScreen"),et("tryTalked").onclick=()=>{_r(),Be("tryScreen")},et("tryBtn").onclick=Rh,et("backBtn").onclick=()=>{Lr(),tr()},et("pageNext").onclick=()=>{Be("pageScreen"),F_()},et("talkScreen").querySelectorAll("button.talked").forEach(r=>r.addEventListener("click",()=>{r.disabled=!0,r.textContent="✔ Talked!",_r("talk-"+r.dataset.t)})),et("talkHome").onclick=()=>mc(null),et("talkNextRoom").onclick=()=>mc(et("talkNextRoom").dataset.room),et("bookBtn").onclick=()=>ga(),et("bookClose").onclick=()=>Be("bookScreen"),et("bookPrev").onclick=()=>{gi=(gi+nn.length-1)%nn.length,_a(),je.page()},et("bookNext").onclick=()=>{gi=(gi+1)%nn.length,_a(),je.page()},et("finaleClose").onclick=()=>{_r(),Be("finaleScreen")};const i=()=>{C_(!Mh()),Ds()};et("muteBtn").onclick=i,et("muteBtn2").onclick=i,k_()}async function z_(){var r;const n=new Y0({canvas:et("scene"),antialias:!0,alpha:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.outputColorSpace=We;try{await Promise.race([document.fonts.load("bold 40px Amiri","الشمس"),new Promise(s=>setTimeout(s,2500))]),await document.fonts.load('800 40px "Baloo 2"')}catch{}Se=await r_(n),B_(),tr(),Dn="title",et("hubHud").classList.add("hidden"),(te.current||Si())&&(et("startBtn").textContent=te.current?`Continue: ${((r=er[te.current.id])==null?void 0:r.title)||"the House"}`:"Continue"),Ke("titleScreen"),et("loading").remove(),Ds();let t=performance.now(),e=1;function i(s){const o=Math.max(0,Math.min(.05,(s-t)/1e3))*e;if(t=s,Se.update(o),ct!=null&&ct.selected){const a=ct.set.tokens[ct.selected];a&&!ct.set.onSelect&&a.obj.scale.setScalar(1.18+Math.sin(Se.time*6)*.06);const l=Se.toScreen(a.obj,.7),c=et("nameTag");c.textContent=ct.room.tokens.find(h=>h.id===ct.selected).name,c.style.left=l.x+"px",c.style.top=l.y+"px",c.classList.toggle("hidden",Xi())}else et("nameTag").classList.add("hidden");Se.render(),requestAnimationFrame(i)}requestAnimationFrame(i),window.game={ready:!0,stage:Se,save:te,get mode(){return Dn},get room(){return ct&&{id:ct.id,filled:ct.filled.slice(),selected:ct.selected,tries:ct.tries,slots:ct.slots.map(s=>s.label)}},answer:()=>ct.slots.map(s=>s.answer),tokenScreen:s=>Se.toScreen(ct.set.tokens[s].obj,.05),doorScreen:s=>Se.toScreen(Eh.doors[s],1),enterRoom:Is,goHub:tr,selectToken:wh,tapSlot:Th,tryLock:Rh,openBook:ga,setSpeed:s=>{e=s}}}z_();
