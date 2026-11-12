const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-JXomGhWD.js","./rig-Bsa0sgdP.js","./index-Rf5FTUvt.js","./BufferGeometryUtils-CmkYootI.js","./index-CpV-T6Ui.js","./index-Co6yelDz.js","./index-Bz8NiNqZ.js","./index-b3yEcUqa.js","./index-CAPljgKO.js","./index-BOTPki5k.js","./index-DB4-TIj8.js","./index-BeZ6CrqM.js","./index-CE8QG5tI.js","./index-CwZYPDWM.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bo="170",mu=0,Sl=1,gu=2,Zc=1,Kc=2,Mn=3,Gn=0,Fe=1,Ce=2,zn=0,$i=1,Ga=2,El=3,wl=4,_u=5,oi=100,xu=101,vu=102,yu=103,Mu=104,Su=200,Eu=201,wu=202,bu=203,Wa=204,Xa=205,Tu=206,Au=207,Cu=208,Ru=209,Pu=210,Lu=211,Du=212,Iu=213,qu=214,Ya=0,$a=1,ja=2,Zi=3,Ja=4,Za=5,Ka=6,Qa=7,Qc=0,Uu=1,Nu=2,Hn=0,Fu=1,Ou=2,Bu=3,ku=4,zu=5,Hu=6,Vu=7,th=300,Ki=301,Qi=302,to=303,eo=304,Gr=306,no=1e3,ci=1001,io=1002,ke=1003,Gu=1004,$s=1005,ln=1006,ea=1007,hi=1008,An=1009,eh=1010,nh=1011,Ds=1012,ko=1013,gi=1014,cn=1015,Bs=1016,zo=1017,Ho=1018,ts=1020,ih=35902,sh=1021,rh=1022,sn=1023,ah=1024,oh=1025,ji=1026,es=1027,Wr=1028,Vo=1029,lh=1030,Go=1031,Wo=1033,Rr=33776,Pr=33777,Lr=33778,Dr=33779,so=35840,ro=35841,ao=35842,oo=35843,lo=36196,co=37492,ho=37496,uo=37808,fo=37809,po=37810,mo=37811,go=37812,_o=37813,xo=37814,vo=37815,yo=37816,Mo=37817,So=37818,Eo=37819,wo=37820,bo=37821,Ir=36492,To=36494,Ao=36495,ch=36283,Co=36284,Ro=36285,Po=36286,Wu=3200,Xu=3201,hh=0,Yu=1,On="",be="srgb",as="srgb-linear",Xr="linear",ae="srgb",wi=7680,bl=519,$u=512,ju=513,Ju=514,uh=515,Zu=516,Ku=517,Qu=518,td=519,Lo=35044,Vg=35048,Tl="300 es",Sn=2e3,Nr=2001;class os{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Al=1234567;const Cs=Math.PI/180,Is=180/Math.PI;function hn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function Xo(i,t){return(i%t+t)%t}function ed(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function nd(i,t,e){return i!==t?(e-i)/(t-i):0}function Rs(i,t,e){return(1-e)*i+e*t}function id(i,t,e,n){return Rs(i,t,1-Math.exp(-e*n))}function sd(i,t=1){return t-Math.abs(Xo(i,t*2)-t)}function rd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ad(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function od(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ld(i,t){return i+Math.random()*(t-i)}function cd(i){return i*(.5-Math.random())}function hd(i){i!==void 0&&(Al=i);let t=Al+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ud(i){return i*Cs}function dd(i){return i*Is}function fd(i){return(i&i-1)===0&&i!==0}function pd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function md(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gd(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function en(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Gg={DEG2RAD:Cs,RAD2DEG:Is,generateUUID:hn,clamp:Te,euclideanModulo:Xo,mapLinear:ed,inverseLerp:nd,lerp:Rs,damp:id,pingpong:sd,smoothstep:rd,smootherstep:ad,randInt:od,randFloat:ld,randFloatSpread:cd,seededRandom:hd,degToRad:ud,radToDeg:dd,isPowerOfTwo:fd,ceilPowerOfTwo:pd,floorPowerOfTwo:md,setQuaternionFromProperEuler:gd,normalize:se,denormalize:en};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,s,r,a,o,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],y=s[1],v=s[4],x=s[7],L=s[2],b=s[5],A=s[8];return r[0]=a*_+o*y+l*L,r[3]=a*m+o*v+l*b,r[6]=a*f+o*x+l*A,r[1]=c*_+h*y+u*L,r[4]=c*m+h*v+u*b,r[7]=c*f+h*x+u*A,r[2]=d*_+p*y+g*L,r[5]=d*m+p*v+g*b,r[8]=d*f+p*x+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(na.makeScale(t,e)),this}rotate(t){return this.premultiply(na.makeRotation(-t)),this}translate(t,e){return this.premultiply(na.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const na=new Vt;function dh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _d(){const i=Fr("canvas");return i.style.display="block",i}const Cl={};function bs(i){i in Cl||(Cl[i]=!0,console.warn(i))}function xd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function vd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Kt={enabled:!0,workingColorSpace:as,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(i.r=En(i.r),i.g=En(i.g),i.b=En(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(i.r=Ji(i.r),i.g=Ji(i.g),i.b=Ji(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===On?Xr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function En(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Rl=[.64,.33,.3,.6,.15,.06],Pl=[.2126,.7152,.0722],Ll=[.3127,.329],Dl=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Il=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kt.define({[as]:{primaries:Rl,whitePoint:Ll,transfer:Xr,toXYZ:Dl,fromXYZ:Il,luminanceCoefficients:Pl,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:Rl,whitePoint:Ll,transfer:ae,toXYZ:Dl,fromXYZ:Il,luminanceCoefficients:Pl,outputColorSpaceConfig:{drawingBufferColorSpace:be}}});let bi;class Md{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{bi===void 0&&(bi=Fr("canvas")),bi.width=t.width,bi.height=t.height;const n=bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=En(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(En(e[n]/255)*255):e[n]=En(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sd=0;class fh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=hn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ia(s[a].image)):r.push(ia(s[a]))}else r=ia(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ia(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Md.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ed=0;class De extends os{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=ci,s=ci,r=ln,a=hi,o=sn,l=An,c=De.DEFAULT_ANISOTROPY,h=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=hn(),this.name="",this.source=new fh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case no:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case no:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=th;De.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,s=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,x=(p+1)/2,L=(f+1)/2,b=(h+d)/4,A=(u+_)/4,R=(g+m)/4;return v>x&&v>L?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=b/n,r=A/n):x>L?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=R/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=A/r,s=R/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wd extends os{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new De(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new fh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends wd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ph extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bd extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ks{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*_,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const L=Math.sqrt(v),b=Math.atan2(L,f*y);m=Math.sin(m*b)/L,o=Math.sin(o*b)/L}const x=o*y;if(l=l*m+d*x,c=c*m+p*x,h=h*m+g*x,u=u*m+_*x,m===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ql.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ql.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return sa.copy(this).projectOnVector(t),this.sub(sa)}reflect(t){return this.sub(sa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sa=new D,ql=new ks;class vi{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ke):Ke.fromBufferAttribute(r,a),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),js.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),js.copy(n.boundingBox)),js.applyMatrix4(t.matrixWorld),this.union(js)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ps),Js.subVectors(this.max,ps),Ti.subVectors(t.a,ps),Ai.subVectors(t.b,ps),Ci.subVectors(t.c,ps),Dn.subVectors(Ai,Ti),In.subVectors(Ci,Ai),Jn.subVectors(Ti,Ci);let e=[0,-Dn.z,Dn.y,0,-In.z,In.y,0,-Jn.z,Jn.y,Dn.z,0,-Dn.x,In.z,0,-In.x,Jn.z,0,-Jn.x,-Dn.y,Dn.x,0,-In.y,In.x,0,-Jn.y,Jn.x,0];return!ra(e,Ti,Ai,Ci,Js)||(e=[1,0,0,0,1,0,0,0,1],!ra(e,Ti,Ai,Ci,Js))?!1:(Zs.crossVectors(Dn,In),e=[Zs.x,Zs.y,Zs.z],ra(e,Ti,Ai,Ci,Js))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const mn=[new D,new D,new D,new D,new D,new D,new D,new D],Ke=new D,js=new vi,Ti=new D,Ai=new D,Ci=new D,Dn=new D,In=new D,Jn=new D,ps=new D,Js=new D,Zs=new D,Zn=new D;function ra(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Zn.fromArray(i,r);const o=s.x*Math.abs(Zn.x)+s.y*Math.abs(Zn.y)+s.z*Math.abs(Zn.z),l=t.dot(Zn),c=e.dot(Zn),h=n.dot(Zn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Td=new vi,ms=new D,aa=new D;class yi{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Td.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ms.subVectors(t,this.center);const e=ms.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ms,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(aa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ms.copy(t.center).add(aa)),this.expandByPoint(ms.copy(t.center).sub(aa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new D,oa=new D,Ks=new D,qn=new D,la=new D,Qs=new D,ca=new D;class Yo{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gn.copy(this.origin).addScaledVector(this.direction,e),gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){oa.copy(t).add(e).multiplyScalar(.5),Ks.copy(e).sub(t).normalize(),qn.copy(this.origin).sub(oa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ks),o=qn.dot(this.direction),l=-qn.dot(Ks),c=qn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(oa).addScaledVector(Ks,d),p}intersectSphere(t,e){gn.subVectors(t.center,this.origin);const n=gn.dot(this.direction),s=gn.dot(gn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,gn)!==null}intersectTriangle(t,e,n,s,r){la.subVectors(e,t),Qs.subVectors(n,t),ca.crossVectors(la,Qs);let a=this.direction.dot(ca),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,t);const l=o*this.direction.dot(Qs.crossVectors(qn,Qs));if(l<0)return null;const c=o*this.direction.dot(la.cross(qn));if(c<0||l+c>a)return null;const h=-o*qn.dot(ca);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,n,s,r,a,o,l,c,h,u,d,p,g,_,m){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,_,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ri.setFromMatrixColumn(t,0).length(),r=1/Ri.setFromMatrixColumn(t,1).length(),a=1/Ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ad,t,Cd)}lookAt(t,e,n){const s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Un.crossVectors(n,He),Un.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Un.crossVectors(n,He)),Un.normalize(),tr.crossVectors(He,Un),s[0]=Un.x,s[4]=tr.x,s[8]=He.x,s[1]=Un.y,s[5]=tr.y,s[9]=He.y,s[2]=Un.z,s[6]=tr.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],y=n[3],v=n[7],x=n[11],L=n[15],b=s[0],A=s[4],R=s[8],E=s[12],M=s[1],P=s[5],G=s[9],N=s[13],O=s[2],W=s[6],k=s[10],Z=s[14],z=s[3],st=s[7],ht=s[11],gt=s[15];return r[0]=a*b+o*M+l*O+c*z,r[4]=a*A+o*P+l*W+c*st,r[8]=a*R+o*G+l*k+c*ht,r[12]=a*E+o*N+l*Z+c*gt,r[1]=h*b+u*M+d*O+p*z,r[5]=h*A+u*P+d*W+p*st,r[9]=h*R+u*G+d*k+p*ht,r[13]=h*E+u*N+d*Z+p*gt,r[2]=g*b+_*M+m*O+f*z,r[6]=g*A+_*P+m*W+f*st,r[10]=g*R+_*G+m*k+f*ht,r[14]=g*E+_*N+m*Z+f*gt,r[3]=y*b+v*M+x*O+L*z,r[7]=y*A+v*P+x*W+L*st,r[11]=y*R+v*G+x*k+L*ht,r[15]=y*E+v*N+x*Z+L*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+_*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],y=u*m*c-_*d*c+_*l*p-o*m*p-u*l*f+o*d*f,v=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,x=h*_*c-g*u*c+g*o*p-a*_*p-h*o*f+a*u*f,L=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,b=e*y+n*v+s*x+r*L;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=y*A,t[1]=(_*d*r-u*m*r-_*s*p+n*m*p+u*s*f-n*d*f)*A,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*f+n*l*f)*A,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*A,t[4]=v*A,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*A,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*f-e*l*f)*A,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*A,t[8]=x*A,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*A,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*f+e*o*f)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*A,t[12]=L*A,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*A,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*A,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,_=a*h,m=a*u,f=o*u,y=l*c,v=l*h,x=l*u,L=n.x,b=n.y,A=n.z;return s[0]=(1-(_+f))*L,s[1]=(p+x)*L,s[2]=(g-v)*L,s[3]=0,s[4]=(p-x)*b,s[5]=(1-(d+f))*b,s[6]=(m+y)*b,s[7]=0,s[8]=(g+v)*A,s[9]=(m-y)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ri.set(s[0],s[1],s[2]).length();const a=Ri.set(s[4],s[5],s[6]).length(),o=Ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Qe.copy(this);const c=1/r,h=1/a,u=1/o;return Qe.elements[0]*=c,Qe.elements[1]*=c,Qe.elements[2]*=c,Qe.elements[4]*=h,Qe.elements[5]*=h,Qe.elements[6]*=h,Qe.elements[8]*=u,Qe.elements[9]*=u,Qe.elements[10]*=u,e.setFromRotationMatrix(Qe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Sn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(o===Sn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Nr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Sn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,p=(n+s)*h;let g,_;if(o===Sn)g=(a+r)*u,_=-2*u;else if(o===Nr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ri=new D,Qe=new re,Ad=new D(0,0,0),Cd=new D(1,1,1),Un=new D,tr=new D,He=new D,Ul=new re,Nl=new ks;class Cn{constructor(t=0,e=0,n=0,s=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ul.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ul,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class mh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rd=0;const Fl=new D,Pi=new ks,_n=new re,er=new D,gs=new D,Pd=new D,Ld=new ks,Ol=new D(1,0,0),Bl=new D(0,1,0),kl=new D(0,0,1),zl={type:"added"},Dd={type:"removed"},Li={type:"childadded",child:null},ha={type:"childremoved",child:null};class _e extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new D,e=new Cn,n=new ks,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Vt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(Ol,t)}rotateY(t){return this.rotateOnAxis(Bl,t)}rotateZ(t){return this.rotateOnAxis(kl,t)}translateOnAxis(t,e){return Fl.copy(t).applyQuaternion(this.quaternion),this.position.add(Fl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ol,t)}translateY(t){return this.translateOnAxis(Bl,t)}translateZ(t){return this.translateOnAxis(kl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?er.copy(t):er.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(gs,er,this.up):_n.lookAt(er,gs,this.up),this.quaternion.setFromRotationMatrix(_n),s&&(_n.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(_n),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zl),Li.child=t,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dd),ha.child=t,this.dispatchEvent(ha),ha.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zl),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,t,Pd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,Ld,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}_e.DEFAULT_UP=new D(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new D,xn=new D,ua=new D,vn=new D,Di=new D,Ii=new D,Hl=new D,da=new D,fa=new D,pa=new D,ma=new me,ga=new me,_a=new me;class $e{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),tn.subVectors(t,e),s.cross(tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){tn.subVectors(s,e),xn.subVectors(n,e),ua.subVectors(t,e);const a=tn.dot(tn),o=tn.dot(xn),l=tn.dot(ua),c=xn.dot(xn),h=xn.dot(ua),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vn.x),l.addScaledVector(a,vn.y),l.addScaledVector(o,vn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ma.setScalar(0),ga.setScalar(0),_a.setScalar(0),ma.fromBufferAttribute(t,e),ga.fromBufferAttribute(t,n),_a.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ma,r.x),a.addScaledVector(ga,r.y),a.addScaledVector(_a,r.z),a}static isFrontFacing(t,e,n,s){return tn.subVectors(n,e),xn.subVectors(t,e),tn.cross(xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),tn.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return $e.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Di.subVectors(s,n),Ii.subVectors(r,n),da.subVectors(t,n);const l=Di.dot(da),c=Ii.dot(da);if(l<=0&&c<=0)return e.copy(n);fa.subVectors(t,s);const h=Di.dot(fa),u=Ii.dot(fa);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Di,a);pa.subVectors(t,r);const p=Di.dot(pa),g=Ii.dot(pa);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ii,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Hl.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Hl,o);const f=1/(m+_+d);return a=_*f,o=d*f,e.copy(n).addScaledVector(Di,a).addScaledVector(Ii,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},nr={h:0,s:0,l:0};function xa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=Xo(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=xa(a,r,t+1/3),this.g=xa(a,r,t),this.b=xa(a,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){const n=gh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=En(t.r),this.g=En(t.g),this.b=En(t.b),this}copyLinearToSRGB(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return Kt.fromWorkingColorSpace(Le.copy(this),t),Math.round(Te(Le.r*255,0,255))*65536+Math.round(Te(Le.g*255,0,255))*256+Math.round(Te(Le.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Le.copy(this),e);const n=Le.r,s=Le.g,r=Le.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=be){Kt.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,s=Le.b;return t!==be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Nn),this.setHSL(Nn.h+t,Nn.s+e,Nn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Nn),t.getHSL(nr);const n=Rs(Nn.h,nr.h,e),s=Rs(Nn.s,nr.s,e),r=Rs(Nn.l,nr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new Xt;Xt.NAMES=gh;let Id=0;class Xn extends os{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=hn(),this.name="",this.blending=$i,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Xa&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ls extends Xn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new D,ir=new nt;class je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lo,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ir.fromBufferAttribute(this,e),ir.applyMatrix3(t),this.setXY(e,ir.x,ir.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=en(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=en(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=en(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=en(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=en(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lo&&(t.usage=this.usage),t}}class _h extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class xh extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Yt extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let qd=0;const Xe=new re,va=new _e,qi=new D,Ve=new vi,_s=new vi,Ee=new D;class xe extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dh(t)?xh:_h)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return va.lookAt(t),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ve.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];_s.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(Ve.min,_s.min),Ve.expandByPoint(Ee),Ee.addVectors(Ve.max,_s.max),Ve.expandByPoint(Ee)):(Ve.expandByPoint(_s.min),Ve.expandByPoint(_s.max))}Ve.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ee));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ee.fromBufferAttribute(o,c),l&&(qi.fromBufferAttribute(t,c),Ee.add(qi)),s=Math.max(s,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new D,l[R]=new D;const c=new D,h=new D,u=new D,d=new nt,p=new nt,g=new nt,_=new D,m=new D;function f(R,E,M){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[R].add(_),o[E].add(_),o[M].add(_),l[R].add(m),l[E].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,E=y.length;R<E;++R){const M=y[R],P=M.start,G=M.count;for(let N=P,O=P+G;N<O;N+=3)f(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const v=new D,x=new D,L=new D,b=new D;function A(R){L.fromBufferAttribute(s,R),b.copy(L);const E=o[R];v.copy(E),v.sub(L.multiplyScalar(L.dot(E))).normalize(),x.crossVectors(b,E);const P=x.dot(l[R])<0?-1:1;a.setXYZW(R,v.x,v.y,v.z,P)}for(let R=0,E=y.length;R<E;++R){const M=y[R],P=M.start,G=M.count;for(let N=P,O=P+G;N<O;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new je(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vl=new re,Kn=new Yo,sr=new yi,Gl=new D,rr=new D,ar=new D,or=new D,ya=new D,lr=new D,Wl=new D,cr=new D;class ye extends _e{constructor(t=new xe,e=new ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){lr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(ya.fromBufferAttribute(u,t),a?lr.addScaledVector(ya,h):lr.addScaledVector(ya.sub(e),h))}e.add(lr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(r),Kn.copy(t.ray).recast(t.near),!(sr.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(sr,Gl)===null||Kn.origin.distanceToSquared(Gl)>(t.far-t.near)**2))&&(Vl.copy(r).invert(),Kn.copy(t.ray).applyMatrix4(Vl),!(n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Kn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,L=v;x<L;x+=3){const b=o.getX(x),A=o.getX(x+1),R=o.getX(x+2);s=hr(this,f,t,n,c,h,u,b,A,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=o.getX(m),v=o.getX(m+1),x=o.getX(m+2);s=hr(this,a,t,n,c,h,u,y,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,L=v;x<L;x+=3){const b=x,A=x+1,R=x+2;s=hr(this,f,t,n,c,h,u,b,A,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=m,v=m+1,x=m+2;s=hr(this,a,t,n,c,h,u,y,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ud(i,t,e,n,s,r,a,o){let l;if(t.side===Fe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Gn,o),l===null)return null;cr.copy(o),cr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(cr);return c<e.near||c>e.far?null:{distance:c,point:cr.clone(),object:i}}function hr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,rr),i.getVertexPosition(l,ar),i.getVertexPosition(c,or);const h=Ud(i,t,e,n,rr,ar,or,Wl);if(h){const u=new D;$e.getBarycoord(Wl,rr,ar,or,u),s&&(h.uv=$e.getInterpolatedAttribute(s,o,l,c,u,new nt)),r&&(h.uv1=$e.getInterpolatedAttribute(r,o,l,c,u,new nt)),a&&(h.normal=$e.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};$e.getNormal(rr,ar,or,d.normal),h.face=d,h.barycoord=u}return h}class Mi extends xe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(u,2));function g(_,m,f,y,v,x,L,b,A,R,E){const M=x/A,P=L/R,G=x/2,N=L/2,O=b/2,W=A+1,k=R+1;let Z=0,z=0;const st=new D;for(let ht=0;ht<k;ht++){const gt=ht*P-N;for(let Dt=0;Dt<W;Dt++){const $t=Dt*M-G;st[_]=$t*y,st[m]=gt*v,st[f]=O,c.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[f]=b>0?1:-1,h.push(st.x,st.y,st.z),u.push(Dt/A),u.push(1-ht/R),Z+=1}}for(let ht=0;ht<R;ht++)for(let gt=0;gt<A;gt++){const Dt=d+gt+W*ht,$t=d+gt+W*(ht+1),$=d+(gt+1)+W*(ht+1),at=d+(gt+1)+W*ht;l.push(Dt,$t,at),l.push($t,$,at),z+=6}o.addGroup(p,z,E),p+=z,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ns(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ne(i){const t={};for(let e=0;e<i.length;e++){const n=ns(i[e]);for(const s in n)t[s]=n[s]}return t}function Nd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const Fd={clone:ns,merge:Ne};var Od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends Xn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Od,this.fragmentShader=Bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ns(t.uniforms),this.uniformsGroups=Nd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class yh extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=Sn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fn=new D,Xl=new nt,Yl=new nt;class Ge extends yh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Is*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fn.x,Fn.y).multiplyScalar(-t/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fn.x,Fn.y).multiplyScalar(-t/Fn.z)}getViewSize(t,e){return this.getViewBounds(t,Xl,Yl),e.subVectors(Yl,Xl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Cs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ui=-90,Ni=1;class kd extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ge(Ui,Ni,t,e);s.layers=this.layers,this.add(s);const r=new Ge(Ui,Ni,t,e);r.layers=this.layers,this.add(r);const a=new Ge(Ui,Ni,t,e);a.layers=this.layers,this.add(a);const o=new Ge(Ui,Ni,t,e);o.layers=this.layers,this.add(o);const l=new Ge(Ui,Ni,t,e);l.layers=this.layers,this.add(l);const c=new Ge(Ui,Ni,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Mh extends De{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ki,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zd extends _i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Mh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mi(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:zn});r.uniforms.tEquirect.value=e;const a=new ye(s,r),o=e.minFilter;return e.minFilter===hi&&(e.minFilter=ln),new kd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Ma=new D,Hd=new D,Vd=new Vt;class si{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ma.subVectors(n,e).cross(Hd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ma),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Vd.getNormalMatrix(t),s=this.coplanarPoint(Ma).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new yi,ur=new D;class $o{constructor(t=new si,e=new si,n=new si,s=new si,r=new si,a=new si){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],y=s[13],v=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,m-p,x-f).normalize(),n[1].setComponents(l+r,d+c,m+p,x+f).normalize(),n[2].setComponents(l+a,d+h,m+g,x+y).normalize(),n[3].setComponents(l-a,d-h,m-g,x-y).normalize(),n[4].setComponents(l-o,d-u,m-_,x-v).normalize(),e===Sn)n[5].setComponents(l+o,d+u,m+_,x+v).normalize();else if(e===Nr)n[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(t){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ur.x=s.normal.x>0?t.max.x:t.min.x,ur.y=s.normal.y>0?t.max.y:t.min.y,ur.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ur)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gd(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Si extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const y=f*d-a;for(let v=0;v<c;v++){const x=v*u-r;g.push(x,-y,0),_.push(0,0,1),m.push(v/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const v=y+c*f,x=y+c*(f+1),L=y+1+c*(f+1),b=y+1+c*f;p.push(v,x,b),p.push(x,L,b)}this.setIndex(p),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Si(t.width,t.height,t.widthSegments,t.heightSegments)}}var Wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xd=`#ifdef USE_ALPHAHASH
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
#endif`,Yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zd=`#ifdef USE_AOMAP
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
#endif`,Kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qd=`#ifdef USE_BATCHING
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
#endif`,tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rf=`#ifdef USE_IRIDESCENCE
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
#endif`,af=`#ifdef USE_BUMPMAP
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mf=`#define PI 3.141592653589793
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
} // validated`,gf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_f=`vec3 transformedNormal = objectNormal;
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
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ef=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wf=`#ifdef USE_ENVMAP
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
#endif`,bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,If=`#ifdef USE_GRADIENTMAP
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
}`,qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ff=`uniform bool receiveShadow;
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
#endif`,Of=`#ifdef USE_ENVMAP
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
#endif`,Bf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vf=`PhysicalMaterial material;
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
#endif`,Gf=`struct PhysicalMaterial {
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
}`,Wf=`
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
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$f=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ep=`#if defined( USE_POINTS_UV )
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
#endif`,np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ap=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`#ifdef USE_MORPHTARGETS
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
#endif`,lp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pp=`#ifdef USE_NORMALMAP
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
#endif`,mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ep=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pp=`float getShadowMask() {
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
}`,Lp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dp=`#ifdef USE_SKINNING
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
#endif`,Ip=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qp=`#ifdef USE_SKINNING
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
#endif`,Up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Op=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bp=`#ifdef USE_TRANSMISSION
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
#endif`,kp=`#ifdef USE_TRANSMISSION
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xp=`uniform sampler2D t2D;
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
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`#include <common>
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
}`,Kp=`#if DEPTH_PACKING == 3200
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
}`,Qp=`#define DISTANCE
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
}`,t0=`#define DISTANCE
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
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`uniform float scale;
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
}`,s0=`uniform vec3 diffuse;
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
}`,r0=`#include <common>
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
}`,a0=`uniform vec3 diffuse;
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
}`,o0=`#define LAMBERT
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
}`,l0=`#define LAMBERT
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
}`,c0=`#define MATCAP
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
}`,h0=`#define MATCAP
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
}`,u0=`#define NORMAL
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
}`,d0=`#define NORMAL
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
}`,f0=`#define PHONG
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
}`,p0=`#define PHONG
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
}`,m0=`#define STANDARD
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
}`,g0=`#define STANDARD
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
}`,_0=`#define TOON
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
}`,x0=`#define TOON
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
}`,v0=`uniform float size;
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
}`,y0=`uniform vec3 diffuse;
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
}`,M0=`#include <common>
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
}`,S0=`uniform vec3 color;
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
}`,E0=`uniform float rotation;
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
}`,w0=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:Wd,alphahash_pars_fragment:Xd,alphamap_fragment:Yd,alphamap_pars_fragment:$d,alphatest_fragment:jd,alphatest_pars_fragment:Jd,aomap_fragment:Zd,aomap_pars_fragment:Kd,batching_pars_vertex:Qd,batching_vertex:tf,begin_vertex:ef,beginnormal_vertex:nf,bsdfs:sf,iridescence_fragment:rf,bumpmap_pars_fragment:af,clipping_planes_fragment:of,clipping_planes_pars_fragment:lf,clipping_planes_pars_vertex:cf,clipping_planes_vertex:hf,color_fragment:uf,color_pars_fragment:df,color_pars_vertex:ff,color_vertex:pf,common:mf,cube_uv_reflection_fragment:gf,defaultnormal_vertex:_f,displacementmap_pars_vertex:xf,displacementmap_vertex:vf,emissivemap_fragment:yf,emissivemap_pars_fragment:Mf,colorspace_fragment:Sf,colorspace_pars_fragment:Ef,envmap_fragment:wf,envmap_common_pars_fragment:bf,envmap_pars_fragment:Tf,envmap_pars_vertex:Af,envmap_physical_pars_fragment:Of,envmap_vertex:Cf,fog_vertex:Rf,fog_pars_vertex:Pf,fog_fragment:Lf,fog_pars_fragment:Df,gradientmap_pars_fragment:If,lightmap_pars_fragment:qf,lights_lambert_fragment:Uf,lights_lambert_pars_fragment:Nf,lights_pars_begin:Ff,lights_toon_fragment:Bf,lights_toon_pars_fragment:kf,lights_phong_fragment:zf,lights_phong_pars_fragment:Hf,lights_physical_fragment:Vf,lights_physical_pars_fragment:Gf,lights_fragment_begin:Wf,lights_fragment_maps:Xf,lights_fragment_end:Yf,logdepthbuf_fragment:$f,logdepthbuf_pars_fragment:jf,logdepthbuf_pars_vertex:Jf,logdepthbuf_vertex:Zf,map_fragment:Kf,map_pars_fragment:Qf,map_particle_fragment:tp,map_particle_pars_fragment:ep,metalnessmap_fragment:np,metalnessmap_pars_fragment:ip,morphinstance_vertex:sp,morphcolor_vertex:rp,morphnormal_vertex:ap,morphtarget_pars_vertex:op,morphtarget_vertex:lp,normal_fragment_begin:cp,normal_fragment_maps:hp,normal_pars_fragment:up,normal_pars_vertex:dp,normal_vertex:fp,normalmap_pars_fragment:pp,clearcoat_normal_fragment_begin:mp,clearcoat_normal_fragment_maps:gp,clearcoat_pars_fragment:_p,iridescence_pars_fragment:xp,opaque_fragment:vp,packing:yp,premultiplied_alpha_fragment:Mp,project_vertex:Sp,dithering_fragment:Ep,dithering_pars_fragment:wp,roughnessmap_fragment:bp,roughnessmap_pars_fragment:Tp,shadowmap_pars_fragment:Ap,shadowmap_pars_vertex:Cp,shadowmap_vertex:Rp,shadowmask_pars_fragment:Pp,skinbase_vertex:Lp,skinning_pars_vertex:Dp,skinning_vertex:Ip,skinnormal_vertex:qp,specularmap_fragment:Up,specularmap_pars_fragment:Np,tonemapping_fragment:Fp,tonemapping_pars_fragment:Op,transmission_fragment:Bp,transmission_pars_fragment:kp,uv_pars_fragment:zp,uv_pars_vertex:Hp,uv_vertex:Vp,worldpos_vertex:Gp,background_vert:Wp,background_frag:Xp,backgroundCube_vert:Yp,backgroundCube_frag:$p,cube_vert:jp,cube_frag:Jp,depth_vert:Zp,depth_frag:Kp,distanceRGBA_vert:Qp,distanceRGBA_frag:t0,equirect_vert:e0,equirect_frag:n0,linedashed_vert:i0,linedashed_frag:s0,meshbasic_vert:r0,meshbasic_frag:a0,meshlambert_vert:o0,meshlambert_frag:l0,meshmatcap_vert:c0,meshmatcap_frag:h0,meshnormal_vert:u0,meshnormal_frag:d0,meshphong_vert:f0,meshphong_frag:p0,meshphysical_vert:m0,meshphysical_frag:g0,meshtoon_vert:_0,meshtoon_frag:x0,points_vert:v0,points_frag:y0,shadow_vert:M0,shadow_frag:S0,sprite_vert:E0,sprite_frag:w0},ut={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},on={basic:{uniforms:Ne([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ne([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ne([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ne([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ne([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ne([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ne([ut.points,ut.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ne([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ne([ut.common,ut.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ne([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ne([ut.sprite,ut.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ne([ut.common,ut.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ne([ut.lights,ut.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};on.physical={uniforms:Ne([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const dr={r:0,b:0,g:0},ti=new Cn,b0=new re;function T0(i,t,e,n,s,r,a){const o=new Xt(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1;const x=g(y);x===null?f(o,l):x&&x.isColor&&(f(x,1),v=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){const x=g(v);x&&(x.isCubeTexture||x.mapping===Gr)?(h===void 0&&(h=new ye(new Mi(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:ns(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ti.copy(v.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(b0.makeRotationFromEuler(ti)),h.material.toneMapped=Kt.getTransfer(x.colorSpace)!==ae,(u!==x||d!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,p=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ye(new Si(2,2),new Wn({name:"BackgroundMaterial",uniforms:ns(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(x.colorSpace)!==ae,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,v){y.getRGB(dr,vh(i)),n.buffers.color.setClear(dr.r,dr.g,dr.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:_,addToRenderList:m}}function A0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(M,P,G,N,O){let W=!1;const k=u(N,G,P);r!==k&&(r=k,c(r.object)),W=p(M,N,G,O),W&&g(M,N,G,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,x(M,P,G,N),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,P,G){const N=G.wireframe===!0;let O=n[M.id];O===void 0&&(O={},n[M.id]=O);let W=O[P.id];W===void 0&&(W={},O[P.id]=W);let k=W[N];return k===void 0&&(k=d(l()),W[N]=k),k}function d(M){const P=[],G=[],N=[];for(let O=0;O<e;O++)P[O]=0,G[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:N,object:M,attributes:{},index:null}}function p(M,P,G,N){const O=r.attributes,W=P.attributes;let k=0;const Z=G.getAttributes();for(const z in Z)if(Z[z].location>=0){const ht=O[z];let gt=W[z];if(gt===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(gt=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(gt=M.instanceColor)),ht===void 0||ht.attribute!==gt||gt&&ht.data!==gt.data)return!0;k++}return r.attributesNum!==k||r.index!==N}function g(M,P,G,N){const O={},W=P.attributes;let k=0;const Z=G.getAttributes();for(const z in Z)if(Z[z].location>=0){let ht=W[z];ht===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor));const gt={};gt.attribute=ht,ht&&ht.data&&(gt.data=ht.data),O[z]=gt,k++}r.attributes=O,r.attributesNum=k,r.index=N}function _(){const M=r.newAttributes;for(let P=0,G=M.length;P<G;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){const G=r.newAttributes,N=r.enabledAttributes,O=r.attributeDivisors;G[M]=1,N[M]===0&&(i.enableVertexAttribArray(M),N[M]=1),O[M]!==P&&(i.vertexAttribDivisor(M,P),O[M]=P)}function y(){const M=r.newAttributes,P=r.enabledAttributes;for(let G=0,N=P.length;G<N;G++)P[G]!==M[G]&&(i.disableVertexAttribArray(G),P[G]=0)}function v(M,P,G,N,O,W,k){k===!0?i.vertexAttribIPointer(M,P,G,O,W):i.vertexAttribPointer(M,P,G,N,O,W)}function x(M,P,G,N){_();const O=N.attributes,W=G.getAttributes(),k=P.defaultAttributeValues;for(const Z in W){const z=W[Z];if(z.location>=0){let st=O[Z];if(st===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){const ht=st.normalized,gt=st.itemSize,Dt=t.get(st);if(Dt===void 0)continue;const $t=Dt.buffer,$=Dt.type,at=Dt.bytesPerElement,Et=$===i.INT||$===i.UNSIGNED_INT||st.gpuType===ko;if(st.isInterleavedBufferAttribute){const lt=st.data,Lt=lt.stride,Bt=st.offset;if(lt.isInstancedInterleavedBuffer){for(let Ut=0;Ut<z.locationSize;Ut++)f(z.location+Ut,lt.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ut=0;Ut<z.locationSize;Ut++)m(z.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let Ut=0;Ut<z.locationSize;Ut++)v(z.location+Ut,gt/z.locationSize,$,ht,Lt*at,(Bt+gt/z.locationSize*Ut)*at,Et)}else{if(st.isInstancedBufferAttribute){for(let lt=0;lt<z.locationSize;lt++)f(z.location+lt,st.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let lt=0;lt<z.locationSize;lt++)m(z.location+lt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let lt=0;lt<z.locationSize;lt++)v(z.location+lt,gt/z.locationSize,$,ht,gt*at,gt/z.locationSize*lt*at,Et)}}else if(k!==void 0){const ht=k[Z];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(z.location,ht);break;case 3:i.vertexAttrib3fv(z.location,ht);break;case 4:i.vertexAttrib4fv(z.location,ht);break;default:i.vertexAttrib1fv(z.location,ht)}}}}y()}function L(){R();for(const M in n){const P=n[M];for(const G in P){const N=P[G];for(const O in N)h(N[O].object),delete N[O];delete P[G]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const G in P){const N=P[G];for(const O in N)h(N[O].object),delete N[O];delete P[G]}delete n[M.id]}function A(M){for(const P in n){const G=n[P];if(G[M.id]===void 0)continue;const N=G[M.id];for(const O in N)h(N[O].object),delete N[O];delete G[M.id]}}function R(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function C0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function R0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==sn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const R=A===Bs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==An&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==cn&&!R)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:L,maxSamples:b}}function P0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new si,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,v=y*4;let x=f.clippingState||null;l.value=x,x=h(g,d,v,p);for(let L=0;L!==v;++L)x[L]=e[L];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,x=p;v!==_;++v,x+=4)a.copy(u[v]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function L0(i){let t=new WeakMap;function e(a,o){return o===to?a.mapping=Ki:o===eo&&(a.mapping=Qi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===to||o===eo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new zd(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Eh extends yh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Xi=4,$l=[.125,.215,.35,.446,.526,.582],li=20,Sa=new Eh,jl=new Xt;let Ea=null,wa=0,ba=0,Ta=!1;const ri=(1+Math.sqrt(5))/2,Fi=1/ri,Jl=[new D(-ri,Fi,0),new D(ri,Fi,0),new D(-Fi,0,ri),new D(Fi,0,ri),new D(0,ri,-Fi),new D(0,ri,Fi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Zl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ea=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ea,wa,ba),this._renderer.xr.enabled=Ta,t.scissorTest=!1,fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===Qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ea=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Bs,format:sn,colorSpace:as,depthBuffer:!1},s=Kl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D0(r)),this._blurMaterial=I0(r,t,e)}return s}_compileMaterial(t){const e=new ye(this._lodPlanes[0],t);this._renderer.compile(e,Sa)}_sceneToCubeUV(t,e,n,s){const o=new Ge(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(jl),h.toneMapping=Hn,h.autoClear=!1;const p=new ls({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new ye(new Mi,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(jl),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const v=this._cubeSize;fr(s,y*v,f>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ki||t.mapping===Qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ql());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ye(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;fr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Sa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Jl[(s-r-1)%Jl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ye(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*li-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):li;m>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${li}`);const f=[];let y=0;for(let A=0;A<li;++A){const R=A/_,E=Math.exp(-R*R/2);f.push(E),A===0?y+=E:A<m&&(y+=2*E)}for(let A=0;A<f.length;A++)f[A]=f[A]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const x=this._sizeLods[s],L=3*x*(s>v-Xi?s-v+Xi:0),b=4*(this._cubeSize-x);fr(e,L,b,3*x,2*x),l.setRenderTarget(e),l.render(u,Sa)}}function D0(i){const t=[],e=[],n=[];let s=i;const r=i-Xi+1+$l.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Xi?l=$l[a-i+Xi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*p),v=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let b=0;b<p;b++){const A=b%3*2/3-1,R=b>2?0:-1,E=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];y.set(E,_*g*b),v.set(d,m*g*b);const M=[b,b,b,b,b,b];x.set(M,f*g*b)}const L=new xe;L.setAttribute("position",new je(y,_)),L.setAttribute("uv",new je(v,m)),L.setAttribute("faceIndex",new je(x,f)),t.push(L),s>Xi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kl(i,t,e){const n=new _i(i,t,e);return n.texture.mapping=Gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function I0(i,t,e){const n=new Float32Array(li),s=new D(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jo(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Ql(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jo(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function tc(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function jo(){return`

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
	`}function q0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===to||l===eo,h=l===Ki||l===Qi;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Zl(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Zl(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function U0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&bs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function N0(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let v=0,x=y.length;v<x;v+=3){const L=y[v+0],b=y[v+1],A=y[v+2];d.push(L,b,b,A,A,L)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const L=v+0,b=v+1,A=v+2;d.push(L,b,b,A,A,L)}}else return;const m=new(dh(d)?xh:_h)(d,1);m.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function F0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y]*_[y];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function O0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function B0(i,t,e){const n=new WeakMap,s=new me;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let E=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;p===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let x=o.attributes.position.count*v,L=1;x>t.maxTextureSize&&(L=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const b=new Float32Array(x*L*4*u),A=new ph(b,x,L,u);A.type=cn,A.needsUpdate=!0;const R=v*4;for(let M=0;M<u;M++){const P=m[M],G=f[M],N=y[M],O=x*L*4*M;for(let W=0;W<P.count;W++){const k=W*R;p===!0&&(s.fromBufferAttribute(P,W),b[O+k+0]=s.x,b[O+k+1]=s.y,b[O+k+2]=s.z,b[O+k+3]=0),g===!0&&(s.fromBufferAttribute(G,W),b[O+k+4]=s.x,b[O+k+5]=s.y,b[O+k+6]=s.z,b[O+k+7]=0),_===!0&&(s.fromBufferAttribute(N,W),b[O+k+8]=s.x,b[O+k+9]=s.y,b[O+k+10]=s.z,b[O+k+11]=N.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new nt(x,L)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function k0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class wh extends De{constructor(t,e,n,s,r,a,o,l,c,h=ji){if(h!==ji&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ji&&(n=gi),n===void 0&&h===es&&(n=ts),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ke,this.minFilter=l!==void 0?l:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const bh=new De,ec=new wh(1,1),Th=new ph,Ah=new bd,Ch=new Mh,nc=[],ic=[],sc=new Float32Array(16),rc=new Float32Array(9),ac=new Float32Array(4);function cs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=nc[s];if(r===void 0&&(r=new Float32Array(s),nc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Yr(i,t){let e=ic[t];e===void 0&&(e=new Int32Array(t),ic[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function z0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function H0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),Se(e,t)}}function V0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),Se(e,t)}}function G0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),Se(e,t)}}function W0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;ac.set(n),i.uniformMatrix2fv(this.addr,!1,ac),Se(e,n)}}function X0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;rc.set(n),i.uniformMatrix3fv(this.addr,!1,rc),Se(e,n)}}function Y0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;sc.set(n),i.uniformMatrix4fv(this.addr,!1,sc),Se(e,n)}}function $0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function j0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),Se(e,t)}}function J0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),Se(e,t)}}function Z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),Se(e,t)}}function K0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),Se(e,t)}}function tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),Se(e,t)}}function em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),Se(e,t)}}function nm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ec.compareFunction=uh,r=ec):r=bh,e.setTexture2D(t||r,s)}function im(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ah,s)}function sm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ch,s)}function rm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Th,s)}function am(i){switch(i){case 5126:return z0;case 35664:return H0;case 35665:return V0;case 35666:return G0;case 35674:return W0;case 35675:return X0;case 35676:return Y0;case 5124:case 35670:return $0;case 35667:case 35671:return j0;case 35668:case 35672:return J0;case 35669:case 35673:return Z0;case 5125:return K0;case 36294:return Q0;case 36295:return tm;case 36296:return em;case 35678:case 36198:case 36298:case 36306:case 35682:return nm;case 35679:case 36299:case 36307:return im;case 35680:case 36300:case 36308:case 36293:return sm;case 36289:case 36303:case 36311:case 36292:return rm}}function om(i,t){i.uniform1fv(this.addr,t)}function lm(i,t){const e=cs(t,this.size,2);i.uniform2fv(this.addr,e)}function cm(i,t){const e=cs(t,this.size,3);i.uniform3fv(this.addr,e)}function hm(i,t){const e=cs(t,this.size,4);i.uniform4fv(this.addr,e)}function um(i,t){const e=cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function dm(i,t){const e=cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function fm(i,t){const e=cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function pm(i,t){i.uniform1iv(this.addr,t)}function mm(i,t){i.uniform2iv(this.addr,t)}function gm(i,t){i.uniform3iv(this.addr,t)}function _m(i,t){i.uniform4iv(this.addr,t)}function xm(i,t){i.uniform1uiv(this.addr,t)}function vm(i,t){i.uniform2uiv(this.addr,t)}function ym(i,t){i.uniform3uiv(this.addr,t)}function Mm(i,t){i.uniform4uiv(this.addr,t)}function Sm(i,t,e){const n=this.cache,s=t.length,r=Yr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||bh,r[a])}function Em(i,t,e){const n=this.cache,s=t.length,r=Yr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ah,r[a])}function wm(i,t,e){const n=this.cache,s=t.length,r=Yr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ch,r[a])}function bm(i,t,e){const n=this.cache,s=t.length,r=Yr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Th,r[a])}function Tm(i){switch(i){case 5126:return om;case 35664:return lm;case 35665:return cm;case 35666:return hm;case 35674:return um;case 35675:return dm;case 35676:return fm;case 5124:case 35670:return pm;case 35667:case 35671:return mm;case 35668:case 35672:return gm;case 35669:case 35673:return _m;case 5125:return xm;case 36294:return vm;case 36295:return ym;case 36296:return Mm;case 35678:case 36198:case 36298:case 36306:case 35682:return Sm;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return wm;case 36289:case 36303:case 36311:case 36292:return bm}}class Am{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=am(e.type)}}class Cm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tm(e.type)}}class Rm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Aa=/(\w+)(\])?(\[|\.)?/g;function oc(i,t){i.seq.push(t),i.map[t.id]=t}function Pm(i,t,e){const n=i.name,s=n.length;for(Aa.lastIndex=0;;){const r=Aa.exec(n),a=Aa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){oc(e,c===void 0?new Am(o,i,t):new Cm(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Rm(o),oc(e,u)),e=u}}}class qr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Pm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function lc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Lm=37297;let Dm=0;function Im(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const cc=new Vt;function qm(i){Kt._getMatrix(cc,Kt.workingColorSpace,i);const t=`mat3( ${cc.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case Xr:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function hc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Im(i.getShaderSource(t),a)}else return s}function Um(i,t){const e=qm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Nm(i,t){let e;switch(t){case Fu:e="Linear";break;case Ou:e="Reinhard";break;case Bu:e="Cineon";break;case ku:e="ACESFilmic";break;case Hu:e="AgX";break;case Vu:e="Neutral";break;case zu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const pr=new D;function Fm(){Kt.getLuminanceCoefficients(pr);const i=pr.x.toFixed(4),t=pr.y.toFixed(4),e=pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Om(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function Bm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function km(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ts(i){return i!==""}function uc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(i){return i.replace(zm,Vm)}const Hm=new Map;function Vm(i,t){let e=Wt[t];if(e===void 0){const n=Hm.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Do(e)}const Gm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fc(i){return i.replace(Gm,Wm)}function Wm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Xm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ym(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ki:case Qi:t="ENVMAP_TYPE_CUBE";break;case Gr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $m(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qi:t="ENVMAP_MODE_REFRACTION";break}return t}function jm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qc:t="ENVMAP_BLENDING_MULTIPLY";break;case Uu:t="ENVMAP_BLENDING_MIX";break;case Nu:t="ENVMAP_BLENDING_ADD";break}return t}function Jm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Zm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Xm(e),c=Ym(e),h=$m(e),u=jm(e),d=Jm(e),p=Om(e),g=Bm(r),_=s.createProgram();let m,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ts).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ts).join(`
`),f.length>0&&(f+=`
`)):(m=[pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),f=[pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Hn?Nm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Um("linearToOutputTexel",e.outputColorSpace),Fm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),a=Do(a),a=uc(a,e),a=dc(a,e),o=Do(o),o=uc(o,e),o=dc(o,e),a=fc(a),o=fc(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=y+m+a,x=y+f+o,L=lc(s,s.VERTEX_SHADER,v),b=lc(s,s.FRAGMENT_SHADER,x);s.attachShader(_,L),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(P){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(_).trim(),N=s.getShaderInfoLog(L).trim(),O=s.getShaderInfoLog(b).trim();let W=!0,k=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,b);else{const Z=hc(s,L,"vertex"),z=hc(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+Z+`
`+z)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(N===""||O==="")&&(k=!1);k&&(P.diagnostics={runnable:W,programLog:G,vertexShader:{log:N,prefix:m},fragmentShader:{log:O,prefix:f}})}s.deleteShader(L),s.deleteShader(b),R=new qr(s,_),E=km(s,_)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Lm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=b,this}let Km=0;class Qm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new t1(t),e.set(t,n)),n}}class t1{constructor(t){this.id=Km++,this.code=t,this.usedTimes=0}}function e1(i,t,e,n,s,r,a){const o=new mh,l=new Qm,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,P,G,N){const O=G.fog,W=N.geometry,k=E.isMeshStandardMaterial?G.environment:null,Z=(E.isMeshStandardMaterial?e:t).get(E.envMap||k),z=Z&&Z.mapping===Gr?Z.image.height:null,st=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const ht=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,gt=ht!==void 0?ht.length:0;let Dt=0;W.morphAttributes.position!==void 0&&(Dt=1),W.morphAttributes.normal!==void 0&&(Dt=2),W.morphAttributes.color!==void 0&&(Dt=3);let $t,$,at,Et;if(st){const ie=on[st];$t=ie.vertexShader,$=ie.fragmentShader}else $t=E.vertexShader,$=E.fragmentShader,l.update(E),at=l.getVertexShaderID(E),Et=l.getFragmentShaderID(E);const lt=i.getRenderTarget(),Lt=i.state.buffers.depth.getReversed(),Bt=N.isInstancedMesh===!0,Ut=N.isBatchedMesh===!0,Zt=!!E.map,Q=!!E.matcap,rt=!!Z,C=!!E.aoMap,Ct=!!E.lightMap,et=!!E.bumpMap,yt=!!E.normalMap,ct=!!E.displacementMap,It=!!E.emissiveMap,xt=!!E.metalnessMap,T=!!E.roughnessMap,S=E.anisotropy>0,B=E.clearcoat>0,j=E.dispersion>0,tt=E.iridescence>0,J=E.sheen>0,wt=E.transmission>0,dt=S&&!!E.anisotropyMap,vt=B&&!!E.clearcoatMap,jt=B&&!!E.clearcoatNormalMap,it=B&&!!E.clearcoatRoughnessMap,Mt=tt&&!!E.iridescenceMap,qt=tt&&!!E.iridescenceThicknessMap,Ot=J&&!!E.sheenColorMap,St=J&&!!E.sheenRoughnessMap,Jt=!!E.specularMap,Gt=!!E.specularColorMap,oe=!!E.specularIntensityMap,I=wt&&!!E.transmissionMap,ft=wt&&!!E.thicknessMap,X=!!E.gradientMap,K=!!E.alphaMap,_t=E.alphaTest>0,pt=!!E.alphaHash,zt=!!E.extensions;let pe=Hn;E.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(pe=i.toneMapping);const Re={shaderID:st,shaderType:E.type,shaderName:E.name,vertexShader:$t,fragmentShader:$,defines:E.defines,customVertexShaderID:at,customFragmentShaderID:Et,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ut,batchingColor:Ut&&N._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&N.instanceColor!==null,instancingMorph:Bt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:as,alphaToCoverage:!!E.alphaToCoverage,map:Zt,matcap:Q,envMap:rt,envMapMode:rt&&Z.mapping,envMapCubeUVHeight:z,aoMap:C,lightMap:Ct,bumpMap:et,normalMap:yt,displacementMap:d&&ct,emissiveMap:It,normalMapObjectSpace:yt&&E.normalMapType===Yu,normalMapTangentSpace:yt&&E.normalMapType===hh,metalnessMap:xt,roughnessMap:T,anisotropy:S,anisotropyMap:dt,clearcoat:B,clearcoatMap:vt,clearcoatNormalMap:jt,clearcoatRoughnessMap:it,dispersion:j,iridescence:tt,iridescenceMap:Mt,iridescenceThicknessMap:qt,sheen:J,sheenColorMap:Ot,sheenRoughnessMap:St,specularMap:Jt,specularColorMap:Gt,specularIntensityMap:oe,transmission:wt,transmissionMap:I,thicknessMap:ft,gradientMap:X,opaque:E.transparent===!1&&E.blending===$i&&E.alphaToCoverage===!1,alphaMap:K,alphaTest:_t,alphaHash:pt,combine:E.combine,mapUv:Zt&&_(E.map.channel),aoMapUv:C&&_(E.aoMap.channel),lightMapUv:Ct&&_(E.lightMap.channel),bumpMapUv:et&&_(E.bumpMap.channel),normalMapUv:yt&&_(E.normalMap.channel),displacementMapUv:ct&&_(E.displacementMap.channel),emissiveMapUv:It&&_(E.emissiveMap.channel),metalnessMapUv:xt&&_(E.metalnessMap.channel),roughnessMapUv:T&&_(E.roughnessMap.channel),anisotropyMapUv:dt&&_(E.anisotropyMap.channel),clearcoatMapUv:vt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:jt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:St&&_(E.sheenRoughnessMap.channel),specularMapUv:Jt&&_(E.specularMap.channel),specularColorMapUv:Gt&&_(E.specularColorMap.channel),specularIntensityMapUv:oe&&_(E.specularIntensityMap.channel),transmissionMapUv:I&&_(E.transmissionMap.channel),thicknessMapUv:ft&&_(E.thicknessMap.channel),alphaMapUv:K&&_(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(yt||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(Zt||K),fog:!!O,useFog:E.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Lt,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Dt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:Zt&&E.map.isVideoTexture===!0&&Kt.getTransfer(E.map.colorSpace)===ae,decodeVideoTextureEmissive:It&&E.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(E.emissiveMap.colorSpace)===ae,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ce,flipSided:E.side===Fe,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:zt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&E.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function f(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)M.push(P),M.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(y(M,E),v(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function y(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function v(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){const M=g[E.type];let P;if(M){const G=on[M];P=Fd.clone(G.uniforms)}else P=E.uniforms;return P}function L(E,M){let P;for(let G=0,N=h.length;G<N;G++){const O=h[G];if(O.cacheKey===M){P=O,++P.usedTimes;break}}return P===void 0&&(P=new Zm(i,M,E,r),h.push(P)),P}function b(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function A(E){l.remove(E)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:L,releaseProgram:b,releaseShaderCache:A,programs:h,dispose:R}}function n1(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function i1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function mc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function o(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||i1),n.length>1&&n.sort(d||mc),s.length>1&&s.sort(d||mc)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function s1(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new gc,i.set(n,[a])):s>=r.length?(a=new gc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function r1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Xt};break;case"SpotLight":e={position:new D,direction:new D,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function a1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let o1=0;function l1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function c1(i){const t=new r1,e=a1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new re,a=new re;function o(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,y=0,v=0,x=0,L=0,b=0,A=0;c.sort(l1);for(let E=0,M=c.length;E<M;E++){const P=c[E],G=P.color,N=P.intensity,O=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=G.r*N,u+=G.g*N,d+=G.b*N;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],N);A++}else if(P.isDirectionalLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,z=e.get(P);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=P.shadow.matrix,y++}n.directional[p]=k,p++}else if(P.isSpotLight){const k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(G).multiplyScalar(N),k.distance=O,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[_]=k;const Z=P.shadow;if(P.map&&(n.spotLightMap[L]=P.map,L++,Z.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[_]=Z.matrix,P.castShadow){const z=e.get(P);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=W,x++}_++}else if(P.isRectAreaLight){const k=t.get(P);k.color.copy(G).multiplyScalar(N),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=k,m++}else if(P.isPointLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const Z=P.shadow,z=e.get(P);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,z.shadowCameraNear=Z.camera.near,z.shadowCameraFar=Z.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,v++}n.point[g]=k,g++}else if(P.isHemisphereLight){const k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(N),k.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[f]=k,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==y||R.numPointShadows!==v||R.numSpotShadows!==x||R.numSpotMaps!==L||R.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+L-b,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=y,R.numPointShadows=v,R.numSpotShadows=x,R.numSpotMaps=L,R.numLightProbes=A,n.version=o1++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const v=c[f];if(v.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(v.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function _c(i){const t=new c1(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function h1(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new _c(i),t.set(s,[o])):r>=a.length?(o=new _c(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class u1 extends Xn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Wu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class d1 extends Xn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const f1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p1=`uniform sampler2D shadow_pass;
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
}`;function m1(i,t,e){let n=new $o;const s=new nt,r=new nt,a=new me,o=new u1({depthPacking:Xu}),l=new d1,c={},h=e.maxTextureSize,u={[Gn]:Fe,[Fe]:Gn,[Ce]:Ce},d=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:f1,fragmentShader:p1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new xe;g.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ye(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zc;let f=this.type;this.render=function(b,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),G=i.state;G.setBlending(zn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const N=f!==Mn&&this.type===Mn,O=f===Mn&&this.type!==Mn;for(let W=0,k=b.length;W<k;W++){const Z=b[W],z=Z.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const st=z.getFrameExtents();if(s.multiply(st),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,z.mapSize.y=r.y)),z.map===null||N===!0||O===!0){const gt=this.type!==Mn?{minFilter:ke,magFilter:ke}:{};z.map!==null&&z.map.dispose(),z.map=new _i(s.x,s.y,gt),z.map.texture.name=Z.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const ht=z.getViewportCount();for(let gt=0;gt<ht;gt++){const Dt=z.getViewport(gt);a.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),G.viewport(a),z.updateMatrices(Z,gt),n=z.getFrustum(),x(A,R,z.camera,Z,this.type)}z.isPointLightShadow!==!0&&this.type===Mn&&y(z,R),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,P)};function y(b,A){const R=t.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new _i(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,R,d,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,R,p,_,null)}function v(b,A,R,E){let M=null;const P=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=M.uuid,N=A.uuid;let O=c[G];O===void 0&&(O={},c[G]=O);let W=O[N];W===void 0&&(W=M.clone(),O[N]=W,A.addEventListener("dispose",L)),M=W}if(M.visible=A.visible,M.wireframe=A.wireframe,E===Mn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=i.properties.get(M);G.light=R}return M}function x(b,A,R,E,M){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Mn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const N=t.update(b),O=b.material;if(Array.isArray(O)){const W=N.groups;for(let k=0,Z=W.length;k<Z;k++){const z=W[k],st=O[z.materialIndex];if(st&&st.visible){const ht=v(b,st,E,M);b.onBeforeShadow(i,b,A,R,N,ht,z),i.renderBufferDirect(R,null,N,ht,b,z),b.onAfterShadow(i,b,A,R,N,ht,z)}}}else if(O.visible){const W=v(b,O,E,M);b.onBeforeShadow(i,b,A,R,N,W,null),i.renderBufferDirect(R,null,N,W,b,null),b.onAfterShadow(i,b,A,R,N,W,null)}}const G=b.children;for(let N=0,O=G.length;N<O;N++)x(G[N],A,R,E,M)}function L(b){b.target.removeEventListener("dispose",L);for(const R in c){const E=c[R],M=b.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const g1={[Ya]:$a,[ja]:Ka,[Ja]:Qa,[Zi]:Za,[$a]:Ya,[Ka]:ja,[Qa]:Ja,[Za]:Zi};function _1(i,t){function e(){let I=!1;const ft=new me;let X=null;const K=new me(0,0,0,0);return{setMask:function(_t){X!==_t&&!I&&(i.colorMask(_t,_t,_t,_t),X=_t)},setLocked:function(_t){I=_t},setClear:function(_t,pt,zt,pe,Re){Re===!0&&(_t*=pe,pt*=pe,zt*=pe),ft.set(_t,pt,zt,pe),K.equals(ft)===!1&&(i.clearColor(_t,pt,zt,pe),K.copy(ft))},reset:function(){I=!1,X=null,K.set(-1,0,0,0)}}}function n(){let I=!1,ft=!1,X=null,K=null,_t=null;return{setReversed:function(pt){if(ft!==pt){const zt=t.get("EXT_clip_control");ft?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);const pe=_t;_t=null,this.setClear(pe)}ft=pt},getReversed:function(){return ft},setTest:function(pt){pt?lt(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(pt){X!==pt&&!I&&(i.depthMask(pt),X=pt)},setFunc:function(pt){if(ft&&(pt=g1[pt]),K!==pt){switch(pt){case Ya:i.depthFunc(i.NEVER);break;case $a:i.depthFunc(i.ALWAYS);break;case ja:i.depthFunc(i.LESS);break;case Zi:i.depthFunc(i.LEQUAL);break;case Ja:i.depthFunc(i.EQUAL);break;case Za:i.depthFunc(i.GEQUAL);break;case Ka:i.depthFunc(i.GREATER);break;case Qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=pt}},setLocked:function(pt){I=pt},setClear:function(pt){_t!==pt&&(ft&&(pt=1-pt),i.clearDepth(pt),_t=pt)},reset:function(){I=!1,X=null,K=null,_t=null,ft=!1}}}function s(){let I=!1,ft=null,X=null,K=null,_t=null,pt=null,zt=null,pe=null,Re=null;return{setTest:function(ie){I||(ie?lt(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(ie){ft!==ie&&!I&&(i.stencilMask(ie),ft=ie)},setFunc:function(ie,Je,fn){(X!==ie||K!==Je||_t!==fn)&&(i.stencilFunc(ie,Je,fn),X=ie,K=Je,_t=fn)},setOp:function(ie,Je,fn){(pt!==ie||zt!==Je||pe!==fn)&&(i.stencilOp(ie,Je,fn),pt=ie,zt=Je,pe=fn)},setLocked:function(ie){I=ie},setClear:function(ie){Re!==ie&&(i.clearStencil(ie),Re=ie)},reset:function(){I=!1,ft=null,X=null,K=null,_t=null,pt=null,zt=null,pe=null,Re=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,y=null,v=null,x=null,L=null,b=null,A=new Xt(0,0,0),R=0,E=!1,M=null,P=null,G=null,N=null,O=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,Z=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(z)[1]),k=Z>=1):z.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),k=Z>=2);let st=null,ht={};const gt=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),$t=new me().fromArray(gt),$=new me().fromArray(Dt);function at(I,ft,X,K){const _t=new Uint8Array(4),pt=i.createTexture();i.bindTexture(I,pt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<X;zt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(ft+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return pt}const Et={};Et[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(i.DEPTH_TEST),a.setFunc(Zi),et(!1),yt(Sl),lt(i.CULL_FACE),C(zn);function lt(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Lt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Bt(I,ft){return u[I]!==ft?(i.bindFramebuffer(I,ft),u[I]=ft,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ft),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Ut(I,ft){let X=p,K=!1;if(I){X=d.get(ft),X===void 0&&(X=[],d.set(ft,X));const _t=I.textures;if(X.length!==_t.length||X[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,zt=_t.length;pt<zt;pt++)X[pt]=i.COLOR_ATTACHMENT0+pt;X.length=_t.length,K=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,K=!0);K&&i.drawBuffers(X)}function Zt(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Q={[oi]:i.FUNC_ADD,[xu]:i.FUNC_SUBTRACT,[vu]:i.FUNC_REVERSE_SUBTRACT};Q[yu]=i.MIN,Q[Mu]=i.MAX;const rt={[Su]:i.ZERO,[Eu]:i.ONE,[wu]:i.SRC_COLOR,[Wa]:i.SRC_ALPHA,[Pu]:i.SRC_ALPHA_SATURATE,[Cu]:i.DST_COLOR,[Tu]:i.DST_ALPHA,[bu]:i.ONE_MINUS_SRC_COLOR,[Xa]:i.ONE_MINUS_SRC_ALPHA,[Ru]:i.ONE_MINUS_DST_COLOR,[Au]:i.ONE_MINUS_DST_ALPHA,[Lu]:i.CONSTANT_COLOR,[Du]:i.ONE_MINUS_CONSTANT_COLOR,[Iu]:i.CONSTANT_ALPHA,[qu]:i.ONE_MINUS_CONSTANT_ALPHA};function C(I,ft,X,K,_t,pt,zt,pe,Re,ie){if(I===zn){_===!0&&(Lt(i.BLEND),_=!1);return}if(_===!1&&(lt(i.BLEND),_=!0),I!==_u){if(I!==m||ie!==E){if((f!==oi||x!==oi)&&(i.blendEquation(i.FUNC_ADD),f=oi,x=oi),ie)switch(I){case $i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ga:i.blendFunc(i.ONE,i.ONE);break;case El:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case $i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ga:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case El:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,v=null,L=null,b=null,A.set(0,0,0),R=0,m=I,E=ie}return}_t=_t||ft,pt=pt||X,zt=zt||K,(ft!==f||_t!==x)&&(i.blendEquationSeparate(Q[ft],Q[_t]),f=ft,x=_t),(X!==y||K!==v||pt!==L||zt!==b)&&(i.blendFuncSeparate(rt[X],rt[K],rt[pt],rt[zt]),y=X,v=K,L=pt,b=zt),(pe.equals(A)===!1||Re!==R)&&(i.blendColor(pe.r,pe.g,pe.b,Re),A.copy(pe),R=Re),m=I,E=!1}function Ct(I,ft){I.side===Ce?Lt(i.CULL_FACE):lt(i.CULL_FACE);let X=I.side===Fe;ft&&(X=!X),et(X),I.blending===$i&&I.transparent===!1?C(zn):C(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const K=I.stencilWrite;o.setTest(K),K&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),It(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(I){M!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),M=I)}function yt(I){I!==mu?(lt(i.CULL_FACE),I!==P&&(I===Sl?i.cullFace(i.BACK):I===gu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),P=I}function ct(I){I!==G&&(k&&i.lineWidth(I),G=I)}function It(I,ft,X){I?(lt(i.POLYGON_OFFSET_FILL),(N!==ft||O!==X)&&(i.polygonOffset(ft,X),N=ft,O=X)):Lt(i.POLYGON_OFFSET_FILL)}function xt(I){I?lt(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function T(I){I===void 0&&(I=i.TEXTURE0+W-1),st!==I&&(i.activeTexture(I),st=I)}function S(I,ft,X){X===void 0&&(st===null?X=i.TEXTURE0+W-1:X=st);let K=ht[X];K===void 0&&(K={type:void 0,texture:void 0},ht[X]=K),(K.type!==I||K.texture!==ft)&&(st!==X&&(i.activeTexture(X),st=X),i.bindTexture(I,ft||Et[I]),K.type=I,K.texture=ft)}function B(){const I=ht[st];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function qt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ot(I){$t.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),$t.copy(I))}function St(I){$.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function Jt(I,ft){let X=c.get(ft);X===void 0&&(X=new WeakMap,c.set(ft,X));let K=X.get(I);K===void 0&&(K=i.getUniformBlockIndex(ft,I.name),X.set(I,K))}function Gt(I,ft){const K=c.get(ft).get(I);l.get(ft)!==K&&(i.uniformBlockBinding(ft,K,I.__bindingPointIndex),l.set(ft,K))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ht={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,y=null,v=null,x=null,L=null,b=null,A=new Xt(0,0,0),R=0,E=!1,M=null,P=null,G=null,N=null,O=null,$t.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:Lt,bindFramebuffer:Bt,drawBuffers:Ut,useProgram:Zt,setBlending:C,setMaterial:Ct,setFlipSided:et,setCullFace:yt,setLineWidth:ct,setPolygonOffset:It,setScissorTest:xt,activeTexture:T,bindTexture:S,unbindTexture:B,compressedTexImage2D:j,compressedTexImage3D:tt,texImage2D:Mt,texImage3D:qt,updateUBOMapping:Jt,uniformBlockBinding:Gt,texStorage2D:jt,texStorage3D:it,texSubImage2D:J,texSubImage3D:wt,compressedTexSubImage2D:dt,compressedTexSubImage3D:vt,scissor:Ot,viewport:St,reset:oe}}function xc(i,t,e,n){const s=x1(n);switch(e){case sh:return i*t;case ah:return i*t;case oh:return i*t*2;case Wr:return i*t/s.components*s.byteLength;case Vo:return i*t/s.components*s.byteLength;case lh:return i*t*2/s.components*s.byteLength;case Go:return i*t*2/s.components*s.byteLength;case rh:return i*t*3/s.components*s.byteLength;case sn:return i*t*4/s.components*s.byteLength;case Wo:return i*t*4/s.components*s.byteLength;case Rr:case Pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Lr:case Dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ro:case oo:return Math.max(i,16)*Math.max(t,8)/4;case so:case ao:return Math.max(i,8)*Math.max(t,8)/2;case lo:case co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case po:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case mo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case go:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case _o:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case xo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case vo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case yo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case So:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case wo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case bo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ir:case To:case Ao:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ch:case Co:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ro:case Po:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function x1(i){switch(i){case An:case eh:return{byteLength:1,components:1};case Ds:case nh:case Bs:return{byteLength:2,components:1};case zo:case Ho:return{byteLength:2,components:4};case gi:case ko:case cn:return{byteLength:4,components:1};case ih:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function v1(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,S){return p?new OffscreenCanvas(T,S):Fr("canvas")}function _(T,S,B){let j=1;const tt=xt(T);if((tt.width>B||tt.height>B)&&(j=B/Math.max(tt.width,tt.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const J=Math.floor(j*tt.width),wt=Math.floor(j*tt.height);u===void 0&&(u=g(J,wt));const dt=S?g(J,wt):u;return dt.width=J,dt.height=wt,dt.getContext("2d").drawImage(T,0,0,J,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+J+"x"+wt+")."),dt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(T,S,B,j,tt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=S;if(S===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),S===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),S===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),S===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),S===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),S===i.RGBA){const wt=tt?Xr:Kt.getTransfer(j);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=wt===ae?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(T,S){let B;return T?S===null||S===gi||S===ts?B=i.DEPTH24_STENCIL8:S===cn?B=i.DEPTH32F_STENCIL8:S===Ds&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===gi||S===ts?B=i.DEPTH_COMPONENT24:S===cn?B=i.DEPTH_COMPONENT32F:S===Ds&&(B=i.DEPTH_COMPONENT16),B}function L(T,S){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==ke&&T.minFilter!==ln?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function b(T){const S=T.target;S.removeEventListener("dispose",b),R(S),S.isVideoTexture&&h.delete(S)}function A(T){const S=T.target;S.removeEventListener("dispose",A),M(S)}function R(T){const S=n.get(T);if(S.__webglInit===void 0)return;const B=T.source,j=d.get(B);if(j){const tt=j[S.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&E(T),Object.keys(j).length===0&&d.delete(B)}n.remove(T)}function E(T){const S=n.get(T);i.deleteTexture(S.__webglTexture);const B=T.source,j=d.get(B);delete j[S.__cacheKey],a.memory.textures--}function M(T){const S=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let tt=0;tt<S.__webglFramebuffer[j].length;tt++)i.deleteFramebuffer(S.__webglFramebuffer[j][tt]);else i.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)i.deleteFramebuffer(S.__webglFramebuffer[j]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=T.textures;for(let j=0,tt=B.length;j<tt;j++){const J=n.get(B[j]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(B[j])}n.remove(T)}let P=0;function G(){P=0}function N(){const T=P;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function O(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function W(T,S){const B=n.get(T);if(T.isVideoTexture&&ct(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(B,T,S);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function k(T,S){const B=n.get(T);if(T.version>0&&B.__version!==T.version){$(B,T,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function Z(T,S){const B=n.get(T);if(T.version>0&&B.__version!==T.version){$(B,T,S);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function z(T,S){const B=n.get(T);if(T.version>0&&B.__version!==T.version){at(B,T,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}const st={[no]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[io]:i.MIRRORED_REPEAT},ht={[ke]:i.NEAREST,[Gu]:i.NEAREST_MIPMAP_NEAREST,[$s]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[ea]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},gt={[$u]:i.NEVER,[td]:i.ALWAYS,[ju]:i.LESS,[uh]:i.LEQUAL,[Ju]:i.EQUAL,[Qu]:i.GEQUAL,[Zu]:i.GREATER,[Ku]:i.NOTEQUAL};function Dt(T,S){if(S.type===cn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ln||S.magFilter===ea||S.magFilter===$s||S.magFilter===hi||S.minFilter===ln||S.minFilter===ea||S.minFilter===$s||S.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,st[S.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,st[S.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,st[S.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ht[S.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ht[S.minFilter]),S.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,gt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ke||S.minFilter!==$s&&S.minFilter!==hi||S.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function $t(T,S){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",b));const j=S.source;let tt=d.get(j);tt===void 0&&(tt={},d.set(j,tt));const J=O(S);if(J!==T.__cacheKey){tt[J]===void 0&&(tt[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),tt[J].usedTimes++;const wt=tt[T.__cacheKey];wt!==void 0&&(tt[T.__cacheKey].usedTimes--,wt.usedTimes===0&&E(S)),T.__cacheKey=J,T.__webglTexture=tt[J].texture}return B}function $(T,S,B){let j=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=i.TEXTURE_3D);const tt=$t(T,S),J=S.source;e.bindTexture(j,T.__webglTexture,i.TEXTURE0+B);const wt=n.get(J);if(J.version!==wt.__version||tt===!0){e.activeTexture(i.TEXTURE0+B);const dt=Kt.getPrimaries(Kt.workingColorSpace),vt=S.colorSpace===On?null:Kt.getPrimaries(S.colorSpace),jt=S.colorSpace===On||dt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let it=_(S.image,!1,s.maxTextureSize);it=It(S,it);const Mt=r.convert(S.format,S.colorSpace),qt=r.convert(S.type);let Ot=v(S.internalFormat,Mt,qt,S.colorSpace,S.isVideoTexture);Dt(j,S);let St;const Jt=S.mipmaps,Gt=S.isVideoTexture!==!0,oe=wt.__version===void 0||tt===!0,I=J.dataReady,ft=L(S,it);if(S.isDepthTexture)Ot=x(S.format===es,S.type),oe&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,Ot,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Ot,it.width,it.height,0,Mt,qt,null));else if(S.isDataTexture)if(Jt.length>0){Gt&&oe&&e.texStorage2D(i.TEXTURE_2D,ft,Ot,Jt[0].width,Jt[0].height);for(let X=0,K=Jt.length;X<K;X++)St=Jt[X],Gt?I&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,St.width,St.height,Mt,qt,St.data):e.texImage2D(i.TEXTURE_2D,X,Ot,St.width,St.height,0,Mt,qt,St.data);S.generateMipmaps=!1}else Gt?(oe&&e.texStorage2D(i.TEXTURE_2D,ft,Ot,it.width,it.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,Mt,qt,it.data)):e.texImage2D(i.TEXTURE_2D,0,Ot,it.width,it.height,0,Mt,qt,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Gt&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Ot,Jt[0].width,Jt[0].height,it.depth);for(let X=0,K=Jt.length;X<K;X++)if(St=Jt[X],S.format!==sn)if(Mt!==null)if(Gt){if(I)if(S.layerUpdates.size>0){const _t=xc(St.width,St.height,S.format,S.type);for(const pt of S.layerUpdates){const zt=St.data.subarray(pt*_t/St.data.BYTES_PER_ELEMENT,(pt+1)*_t/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,pt,St.width,St.height,1,Mt,zt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,St.width,St.height,it.depth,Mt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Ot,St.width,St.height,it.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,St.width,St.height,it.depth,Mt,qt,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Ot,St.width,St.height,it.depth,0,Mt,qt,St.data)}else{Gt&&oe&&e.texStorage2D(i.TEXTURE_2D,ft,Ot,Jt[0].width,Jt[0].height);for(let X=0,K=Jt.length;X<K;X++)St=Jt[X],S.format!==sn?Mt!==null?Gt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,St.width,St.height,Mt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Ot,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?I&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,St.width,St.height,Mt,qt,St.data):e.texImage2D(i.TEXTURE_2D,X,Ot,St.width,St.height,0,Mt,qt,St.data)}else if(S.isDataArrayTexture)if(Gt){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Ot,it.width,it.height,it.depth),I)if(S.layerUpdates.size>0){const X=xc(it.width,it.height,S.format,S.type);for(const K of S.layerUpdates){const _t=it.data.subarray(K*X/it.data.BYTES_PER_ELEMENT,(K+1)*X/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,it.width,it.height,1,Mt,qt,_t)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,Mt,qt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,it.width,it.height,it.depth,0,Mt,qt,it.data);else if(S.isData3DTexture)Gt?(oe&&e.texStorage3D(i.TEXTURE_3D,ft,Ot,it.width,it.height,it.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,Mt,qt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,it.width,it.height,it.depth,0,Mt,qt,it.data);else if(S.isFramebufferTexture){if(oe)if(Gt)e.texStorage2D(i.TEXTURE_2D,ft,Ot,it.width,it.height);else{let X=it.width,K=it.height;for(let _t=0;_t<ft;_t++)e.texImage2D(i.TEXTURE_2D,_t,Ot,X,K,0,Mt,qt,null),X>>=1,K>>=1}}else if(Jt.length>0){if(Gt&&oe){const X=xt(Jt[0]);e.texStorage2D(i.TEXTURE_2D,ft,Ot,X.width,X.height)}for(let X=0,K=Jt.length;X<K;X++)St=Jt[X],Gt?I&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Mt,qt,St):e.texImage2D(i.TEXTURE_2D,X,Ot,Mt,qt,St);S.generateMipmaps=!1}else if(Gt){if(oe){const X=xt(it);e.texStorage2D(i.TEXTURE_2D,ft,Ot,X.width,X.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,qt,it)}else e.texImage2D(i.TEXTURE_2D,0,Ot,Mt,qt,it);m(S)&&f(j),wt.__version=J.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function at(T,S,B){if(S.image.length!==6)return;const j=$t(T,S),tt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const J=n.get(tt);if(tt.version!==J.__version||j===!0){e.activeTexture(i.TEXTURE0+B);const wt=Kt.getPrimaries(Kt.workingColorSpace),dt=S.colorSpace===On?null:Kt.getPrimaries(S.colorSpace),vt=S.colorSpace===On||wt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const jt=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,Mt=[];for(let K=0;K<6;K++)!jt&&!it?Mt[K]=_(S.image[K],!0,s.maxCubemapSize):Mt[K]=it?S.image[K].image:S.image[K],Mt[K]=It(S,Mt[K]);const qt=Mt[0],Ot=r.convert(S.format,S.colorSpace),St=r.convert(S.type),Jt=v(S.internalFormat,Ot,St,S.colorSpace),Gt=S.isVideoTexture!==!0,oe=J.__version===void 0||j===!0,I=tt.dataReady;let ft=L(S,qt);Dt(i.TEXTURE_CUBE_MAP,S);let X;if(jt){Gt&&oe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Jt,qt.width,qt.height);for(let K=0;K<6;K++){X=Mt[K].mipmaps;for(let _t=0;_t<X.length;_t++){const pt=X[_t];S.format!==sn?Ot!==null?Gt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,0,0,pt.width,pt.height,Ot,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,Jt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,0,0,pt.width,pt.height,Ot,St,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,Jt,pt.width,pt.height,0,Ot,St,pt.data)}}}else{if(X=S.mipmaps,Gt&&oe){X.length>0&&ft++;const K=xt(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Jt,K.width,K.height)}for(let K=0;K<6;K++)if(it){Gt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Mt[K].width,Mt[K].height,Ot,St,Mt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Jt,Mt[K].width,Mt[K].height,0,Ot,St,Mt[K].data);for(let _t=0;_t<X.length;_t++){const zt=X[_t].image[K].image;Gt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,0,0,zt.width,zt.height,Ot,St,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,Jt,zt.width,zt.height,0,Ot,St,zt.data)}}else{Gt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ot,St,Mt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Jt,Ot,St,Mt[K]);for(let _t=0;_t<X.length;_t++){const pt=X[_t];Gt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,0,0,Ot,St,pt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,Jt,Ot,St,pt.image[K])}}}m(S)&&f(i.TEXTURE_CUBE_MAP),J.__version=tt.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Et(T,S,B,j,tt,J){const wt=r.convert(B.format,B.colorSpace),dt=r.convert(B.type),vt=v(B.internalFormat,wt,dt,B.colorSpace),jt=n.get(S),it=n.get(B);if(it.__renderTarget=S,!jt.__hasExternalTextures){const Mt=Math.max(1,S.width>>J),qt=Math.max(1,S.height>>J);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,J,vt,Mt,qt,S.depth,0,wt,dt,null):e.texImage2D(tt,J,vt,Mt,qt,0,wt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),yt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,tt,it.__webglTexture,0,et(S)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,tt,it.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(T,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),S.depthBuffer){const j=S.depthTexture,tt=j&&j.isDepthTexture?j.type:null,J=x(S.stencilBuffer,tt),wt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=et(S);yt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,J,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,J,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,J,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,T)}else{const j=S.textures;for(let tt=0;tt<j.length;tt++){const J=j[tt],wt=r.convert(J.format,J.colorSpace),dt=r.convert(J.type),vt=v(J.internalFormat,wt,dt,J.colorSpace),jt=et(S);B&&yt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,vt,S.width,S.height):yt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,vt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,vt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const tt=j.__webglTexture,J=et(S);if(S.depthTexture.format===ji)yt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(S.depthTexture.format===es)yt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Bt(T){const S=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const tt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",tt)};j.addEventListener("dispose",tt),S.__depthDisposeCallback=tt}S.__boundDepthTexture=j}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Lt(S.__webglFramebuffer,T)}else if(B){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=i.createRenderbuffer(),lt(S.__webglDepthbuffer[j],T,!1);else{const tt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),lt(S.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(T,S,B){const j=n.get(T);S!==void 0&&Et(j.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Bt(T)}function Zt(T){const S=T.texture,B=n.get(T),j=n.get(S);T.addEventListener("dispose",A);const tt=T.textures,J=T.isWebGLCubeRenderTarget===!0,wt=tt.length>1;if(wt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=S.version,a.memory.textures++),J){B.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[dt]=[];for(let vt=0;vt<S.mipmaps.length;vt++)B.__webglFramebuffer[dt][vt]=i.createFramebuffer()}else B.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let dt=0;dt<S.mipmaps.length;dt++)B.__webglFramebuffer[dt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(wt)for(let dt=0,vt=tt.length;dt<vt;dt++){const jt=n.get(tt[dt]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&yt(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let dt=0;dt<tt.length;dt++){const vt=tt[dt];B.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[dt]);const jt=r.convert(vt.format,vt.colorSpace),it=r.convert(vt.type),Mt=v(vt.internalFormat,jt,it,vt.colorSpace,T.isXRRenderTarget===!0),qt=et(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,Mt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,B.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,S);for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)Et(B.__webglFramebuffer[dt][vt],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,vt);else Et(B.__webglFramebuffer[dt],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(S)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let dt=0,vt=tt.length;dt<vt;dt++){const jt=tt[dt],it=n.get(jt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),Dt(i.TEXTURE_2D,jt),Et(B.__webglFramebuffer,T,jt,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),m(jt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(dt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,j.__webglTexture),Dt(dt,S),S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)Et(B.__webglFramebuffer[vt],T,S,i.COLOR_ATTACHMENT0,dt,vt);else Et(B.__webglFramebuffer,T,S,i.COLOR_ATTACHMENT0,dt,0);m(S)&&f(dt),e.unbindTexture()}T.depthBuffer&&Bt(T)}function Q(T){const S=T.textures;for(let B=0,j=S.length;B<j;B++){const tt=S[B];if(m(tt)){const J=y(T),wt=n.get(tt).__webglTexture;e.bindTexture(J,wt),f(J),e.unbindTexture()}}}const rt=[],C=[];function Ct(T){if(T.samples>0){if(yt(T)===!1){const S=T.textures,B=T.width,j=T.height;let tt=i.COLOR_BUFFER_BIT;const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(T),dt=S.length>1;if(dt)for(let vt=0;vt<S.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let vt=0;vt<S.length;vt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[vt]);const jt=n.get(S[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,B,j,0,0,B,j,tt,i.NEAREST),l===!0&&(rt.length=0,C.length=0,rt.push(i.COLOR_ATTACHMENT0+vt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(rt.push(J),C.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let vt=0;vt<S.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[vt]);const jt=n.get(S[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const S=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function et(T){return Math.min(s.maxSamples,T.samples)}function yt(T){const S=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ct(T){const S=a.render.frame;h.get(T)!==S&&(h.set(T,S),T.update())}function It(T,S){const B=T.colorSpace,j=T.format,tt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==as&&B!==On&&(Kt.getTransfer(B)===ae?(j!==sn||tt!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function xt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=G,this.setTexture2D=W,this.setTexture2DArray=k,this.setTexture3D=Z,this.setTextureCube=z,this.rebindTextures=Ut,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=yt}function y1(i,t){function e(n,s=On){let r;const a=Kt.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===zo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ho)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ih)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===eh)return i.BYTE;if(n===nh)return i.SHORT;if(n===Ds)return i.UNSIGNED_SHORT;if(n===ko)return i.INT;if(n===gi)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===Bs)return i.HALF_FLOAT;if(n===sh)return i.ALPHA;if(n===rh)return i.RGB;if(n===sn)return i.RGBA;if(n===ah)return i.LUMINANCE;if(n===oh)return i.LUMINANCE_ALPHA;if(n===ji)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===Wr)return i.RED;if(n===Vo)return i.RED_INTEGER;if(n===lh)return i.RG;if(n===Go)return i.RG_INTEGER;if(n===Wo)return i.RGBA_INTEGER;if(n===Rr||n===Pr||n===Lr||n===Dr)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===so||n===ro||n===ao||n===oo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===so)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ro)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lo||n===co||n===ho)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===lo||n===co)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ho)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===xo||n===vo||n===yo||n===Mo||n===So||n===Eo||n===wo||n===bo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===uo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===po)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===go)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_o)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===So)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Eo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ir||n===To||n===Ao)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ir)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===To)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ao)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ch||n===Co||n===Ro||n===Po)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ir)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Co)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Po)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class M1 extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ce extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S1={type:"move"};class Ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(S1)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const E1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w1=`
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

}`;class b1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new De,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Wn({vertexShader:E1,fragmentShader:w1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ye(new Si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T1 extends os{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=new b1,m=e.getContextAttributes();let f=null,y=null;const v=[],x=[],L=new nt;let b=null;const A=new Ge;A.viewport=new me;const R=new Ge;R.viewport=new me;const E=[A,R],M=new M1;let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let at=v[$];return at===void 0&&(at=new Ca,v[$]=at),at.getTargetRaySpace()},this.getControllerGrip=function($){let at=v[$];return at===void 0&&(at=new Ca,v[$]=at),at.getGripSpace()},this.getHand=function($){let at=v[$];return at===void 0&&(at=new Ca,v[$]=at),at.getHandSpace()};function N($){const at=x.indexOf($.inputSource);if(at===-1)return;const Et=v[at];Et!==void 0&&(Et.update($.inputSource,$.frame,c||a),Et.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",W);for(let $=0;$<v.length;$++){const at=x[$];at!==null&&(x[$]=null,v[$].disconnect(at))}P=null,G=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,y=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",O),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new _i(p.framebufferWidth,p.framebufferHeight,{format:sn,type:An,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,Et=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?es:ji,Et=m.stencil?ts:gi);const Lt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Lt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new _i(d.textureWidth,d.textureHeight,{format:sn,type:An,depthTexture:new wh(d.textureWidth,d.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W($){for(let at=0;at<$.removed.length;at++){const Et=$.removed[at],lt=x.indexOf(Et);lt>=0&&(x[lt]=null,v[lt].disconnect(Et))}for(let at=0;at<$.added.length;at++){const Et=$.added[at];let lt=x.indexOf(Et);if(lt===-1){for(let Bt=0;Bt<v.length;Bt++)if(Bt>=x.length){x.push(Et),lt=Bt;break}else if(x[Bt]===null){x[Bt]=Et,lt=Bt;break}if(lt===-1)break}const Lt=v[lt];Lt&&Lt.connect(Et)}}const k=new D,Z=new D;function z($,at,Et){k.setFromMatrixPosition(at.matrixWorld),Z.setFromMatrixPosition(Et.matrixWorld);const lt=k.distanceTo(Z),Lt=at.projectionMatrix.elements,Bt=Et.projectionMatrix.elements,Ut=Lt[14]/(Lt[10]-1),Zt=Lt[14]/(Lt[10]+1),Q=(Lt[9]+1)/Lt[5],rt=(Lt[9]-1)/Lt[5],C=(Lt[8]-1)/Lt[0],Ct=(Bt[8]+1)/Bt[0],et=Ut*C,yt=Ut*Ct,ct=lt/(-C+Ct),It=ct*-C;if(at.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(It),$.translateZ(ct),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Lt[10]===-1)$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const xt=Ut+ct,T=Zt+ct,S=et-It,B=yt+(lt-It),j=Q*Zt/T*xt,tt=rt*Zt/T*xt;$.projectionMatrix.makePerspective(S,B,j,tt,xt,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function st($,at){at===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(at.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let at=$.near,Et=$.far;_.texture!==null&&(_.depthNear>0&&(at=_.depthNear),_.depthFar>0&&(Et=_.depthFar)),M.near=R.near=A.near=at,M.far=R.far=A.far=Et,(P!==M.near||G!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,G=M.far),A.layers.mask=$.layers.mask|2,R.layers.mask=$.layers.mask|4,M.layers.mask=A.layers.mask|R.layers.mask;const lt=$.parent,Lt=M.cameras;st(M,lt);for(let Bt=0;Bt<Lt.length;Bt++)st(Lt[Bt],lt);Lt.length===2?z(M,A,R):M.projectionMatrix.copy(A.projectionMatrix),ht($,M,lt)};function ht($,at,Et){Et===null?$.matrix.copy(at.matrixWorld):($.matrix.copy(Et.matrixWorld),$.matrix.invert(),$.matrix.multiply(at.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Is*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let gt=null;function Dt($,at){if(h=at.getViewerPose(c||a),g=at,h!==null){const Et=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let lt=!1;Et.length!==M.cameras.length&&(M.cameras.length=0,lt=!0);for(let Bt=0;Bt<Et.length;Bt++){const Ut=Et[Bt];let Zt=null;if(p!==null)Zt=p.getViewport(Ut);else{const rt=u.getViewSubImage(d,Ut);Zt=rt.viewport,Bt===0&&(t.setRenderTargetTextures(y,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(y))}let Q=E[Bt];Q===void 0&&(Q=new Ge,Q.layers.enable(Bt),Q.viewport=new me,E[Bt]=Q),Q.matrix.fromArray(Ut.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Ut.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),Bt===0&&(M.matrix.copy(Q.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),lt===!0&&M.cameras.push(Q)}const Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Bt=u.getDepthInformation(Et[0]);Bt&&Bt.isValid&&Bt.texture&&_.init(t,Bt,s.renderState)}}for(let Et=0;Et<v.length;Et++){const lt=x[Et],Lt=v[Et];lt!==null&&Lt!==void 0&&Lt.update(lt,at,c||a)}gt&&gt($,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}const $t=new Sh;$t.setAnimationLoop(Dt),this.setAnimationLoop=function($){gt=$},this.dispose=function(){}}}const ei=new Cn,A1=new re;function C1(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,vh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,v,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Fe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Fe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=t.get(f),v=y.envMap,x=y.envMapRotation;v&&(m.envMap.value=v,ei.copy(x),ei.x*=-1,ei.y*=-1,ei.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),m.envMapRotation.value.setFromMatrix4(A1.makeRotationFromEuler(ei)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=v*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Fe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function R1(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const x=v.program;n.uniformBlockBinding(y,x)}function c(y,v){let x=s[y.id];x===void 0&&(g(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",m));const L=v.program;n.updateUBOMapping(y,L);const b=t.render.frame;r[y.id]!==b&&(d(y),r[y.id]=b)}function h(y){const v=u();y.__bindingPointIndex=v;const x=i.createBuffer(),L=y.__size,b=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,L,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=s[y.id],x=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,A=x.length;b<A;b++){const R=Array.isArray(x[b])?x[b]:[x[b]];for(let E=0,M=R.length;E<M;E++){const P=R[E];if(p(P,b,E,L)===!0){const G=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let O=0;for(let W=0;W<N.length;W++){const k=N[W],Z=_(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,G+O,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,O),O+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,v,x,L){const b=y.value,A=v+"_"+x;if(L[A]===void 0)return typeof b=="number"||typeof b=="boolean"?L[A]=b:L[A]=b.clone(),!0;{const R=L[A];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return L[A]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function g(y){const v=y.uniforms;let x=0;const L=16;for(let A=0,R=v.length;A<R;A++){const E=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,P=E.length;M<P;M++){const G=E[M],N=Array.isArray(G.value)?G.value:[G.value];for(let O=0,W=N.length;O<W;O++){const k=N[O],Z=_(k),z=x%L,st=z%Z.boundary,ht=z+st;x+=st,ht!==0&&L-ht<Z.storage&&(x+=L-ht),G.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=Z.storage}}}const b=x%L;return b>0&&(x+=L-b),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class P1{constructor(t={}){const{canvas:e=_d(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=be,this.toneMapping=Hn,this.toneMappingExposure=1;const x=this;let L=!1,b=0,A=0,R=null,E=-1,M=null;const P=new me,G=new me;let N=null;const O=new Xt(0);let W=0,k=e.width,Z=e.height,z=1,st=null,ht=null;const gt=new me(0,0,k,Z),Dt=new me(0,0,k,Z);let $t=!1;const $=new $o;let at=!1,Et=!1;const lt=new re,Lt=new re,Bt=new D,Ut=new me,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function rt(){return R===null?z:1}let C=n;function Ct(w,q){return e.getContext(w,q)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bo}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",pt,!1),C===null){const q="webgl2";if(C=Ct(q,w),C===null)throw Ct(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let et,yt,ct,It,xt,T,S,B,j,tt,J,wt,dt,vt,jt,it,Mt,qt,Ot,St,Jt,Gt,oe,I;function ft(){et=new U0(C),et.init(),Gt=new y1(C,et),yt=new R0(C,et,t,Gt),ct=new _1(C,et),yt.reverseDepthBuffer&&d&&ct.buffers.depth.setReversed(!0),It=new O0(C),xt=new n1,T=new v1(C,et,ct,xt,yt,Gt,It),S=new L0(x),B=new q0(x),j=new Gd(C),oe=new A0(C,j),tt=new N0(C,j,It,oe),J=new k0(C,tt,j,It),Ot=new B0(C,yt,T),it=new P0(xt),wt=new e1(x,S,B,et,yt,oe,it),dt=new C1(x,xt),vt=new s1,jt=new h1(et),qt=new T0(x,S,B,ct,J,p,l),Mt=new m1(x,J,yt),I=new R1(C,It,yt,ct),St=new C0(C,et,It),Jt=new F0(C,et,It),It.programs=wt.programs,x.capabilities=yt,x.extensions=et,x.properties=xt,x.renderLists=vt,x.shadowMap=Mt,x.state=ct,x.info=It}ft();const X=new T1(x,C);this.xr=X,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const w=et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(k,Z,!1))},this.getSize=function(w){return w.set(k,Z)},this.setSize=function(w,q,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,Z=q,e.width=Math.floor(w*z),e.height=Math.floor(q*z),H===!0&&(e.style.width=w+"px",e.style.height=q+"px"),this.setViewport(0,0,w,q)},this.getDrawingBufferSize=function(w){return w.set(k*z,Z*z).floor()},this.setDrawingBufferSize=function(w,q,H){k=w,Z=q,z=H,e.width=Math.floor(w*H),e.height=Math.floor(q*H),this.setViewport(0,0,w,q)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(gt)},this.setViewport=function(w,q,H,V){w.isVector4?gt.set(w.x,w.y,w.z,w.w):gt.set(w,q,H,V),ct.viewport(P.copy(gt).multiplyScalar(z).round())},this.getScissor=function(w){return w.copy(Dt)},this.setScissor=function(w,q,H,V){w.isVector4?Dt.set(w.x,w.y,w.z,w.w):Dt.set(w,q,H,V),ct.scissor(G.copy(Dt).multiplyScalar(z).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(w){ct.setScissorTest($t=w)},this.setOpaqueSort=function(w){st=w},this.setTransparentSort=function(w){ht=w},this.getClearColor=function(w){return w.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(w=!0,q=!0,H=!0){let V=0;if(w){let U=!1;if(R!==null){const ot=R.texture.format;U=ot===Wo||ot===Go||ot===Vo}if(U){const ot=R.texture.type,mt=ot===An||ot===gi||ot===Ds||ot===ts||ot===zo||ot===Ho,bt=qt.getClearColor(),Tt=qt.getClearAlpha(),kt=bt.r,Ht=bt.g,At=bt.b;mt?(g[0]=kt,g[1]=Ht,g[2]=At,g[3]=Tt,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=kt,_[1]=Ht,_[2]=At,_[3]=Tt,C.clearBufferiv(C.COLOR,0,_))}else V|=C.COLOR_BUFFER_BIT}q&&(V|=C.DEPTH_BUFFER_BIT),H&&(V|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),vt.dispose(),jt.dispose(),xt.dispose(),S.dispose(),B.dispose(),J.dispose(),oe.dispose(),I.dispose(),wt.dispose(),X.dispose(),X.removeEventListener("sessionstart",pl),X.removeEventListener("sessionend",ml),jn.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const w=It.autoReset,q=Mt.enabled,H=Mt.autoUpdate,V=Mt.needsUpdate,U=Mt.type;ft(),It.autoReset=w,Mt.enabled=q,Mt.autoUpdate=H,Mt.needsUpdate=V,Mt.type=U}function pt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function zt(w){const q=w.target;q.removeEventListener("dispose",zt),pe(q)}function pe(w){Re(w),xt.remove(w)}function Re(w){const q=xt.get(w).programs;q!==void 0&&(q.forEach(function(H){wt.releaseProgram(H)}),w.isShaderMaterial&&wt.releaseShaderCache(w))}this.renderBufferDirect=function(w,q,H,V,U,ot){q===null&&(q=Zt);const mt=U.isMesh&&U.matrixWorld.determinant()<0,bt=du(w,q,H,V,U);ct.setMaterial(V,mt);let Tt=H.index,kt=1;if(V.wireframe===!0){if(Tt=tt.getWireframeAttribute(H),Tt===void 0)return;kt=2}const Ht=H.drawRange,At=H.attributes.position;let te=Ht.start*kt,le=(Ht.start+Ht.count)*kt;ot!==null&&(te=Math.max(te,ot.start*kt),le=Math.min(le,(ot.start+ot.count)*kt)),Tt!==null?(te=Math.max(te,0),le=Math.min(le,Tt.count)):At!=null&&(te=Math.max(te,0),le=Math.min(le,At.count));const ue=le-te;if(ue<0||ue===1/0)return;oe.setup(U,V,bt,H,Tt);let Oe,ee=St;if(Tt!==null&&(Oe=j.get(Tt),ee=Jt,ee.setIndex(Oe)),U.isMesh)V.wireframe===!0?(ct.setLineWidth(V.wireframeLinewidth*rt()),ee.setMode(C.LINES)):ee.setMode(C.TRIANGLES);else if(U.isLine){let Rt=V.linewidth;Rt===void 0&&(Rt=1),ct.setLineWidth(Rt*rt()),U.isLineSegments?ee.setMode(C.LINES):U.isLineLoop?ee.setMode(C.LINE_LOOP):ee.setMode(C.LINE_STRIP)}else U.isPoints?ee.setMode(C.POINTS):U.isSprite&&ee.setMode(C.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ee.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ee.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Rt=U._multiDrawStarts,pn=U._multiDrawCounts,ne=U._multiDrawCount,Ze=Tt?j.get(Tt).bytesPerElement:1,Ei=xt.get(V).currentProgram.getUniforms();for(let ze=0;ze<ne;ze++)Ei.setValue(C,"_gl_DrawID",ze),ee.render(Rt[ze]/Ze,pn[ze])}else if(U.isInstancedMesh)ee.renderInstances(te,ue,U.count);else if(H.isInstancedBufferGeometry){const Rt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,pn=Math.min(H.instanceCount,Rt);ee.renderInstances(te,ue,pn)}else ee.render(te,ue)};function ie(w,q,H){w.transparent===!0&&w.side===Ce&&w.forceSinglePass===!1?(w.side=Fe,w.needsUpdate=!0,Ys(w,q,H),w.side=Gn,w.needsUpdate=!0,Ys(w,q,H),w.side=Ce):Ys(w,q,H)}this.compile=function(w,q,H=null){H===null&&(H=w),f=jt.get(H),f.init(q),v.push(f),H.traverseVisible(function(U){U.isLight&&U.layers.test(q.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),w!==H&&w.traverseVisible(function(U){U.isLight&&U.layers.test(q.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const V=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ot=U.material;if(ot)if(Array.isArray(ot))for(let mt=0;mt<ot.length;mt++){const bt=ot[mt];ie(bt,H,U),V.add(bt)}else ie(ot,H,U),V.add(ot)}),v.pop(),f=null,V},this.compileAsync=function(w,q,H=null){const V=this.compile(w,q,H);return new Promise(U=>{function ot(){if(V.forEach(function(mt){xt.get(mt).currentProgram.isReady()&&V.delete(mt)}),V.size===0){U(w);return}setTimeout(ot,10)}et.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Je=null;function fn(w){Je&&Je(w)}function pl(){jn.stop()}function ml(){jn.start()}const jn=new Sh;jn.setAnimationLoop(fn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(w){Je=w,X.setAnimationLoop(w),w===null?jn.stop():jn.start()},X.addEventListener("sessionstart",pl),X.addEventListener("sessionend",ml),this.render=function(w,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(q),q=X.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,q,R),f=jt.get(w,v.length),f.init(q),v.push(f),Lt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),$.setFromProjectionMatrix(Lt),Et=this.localClippingEnabled,at=it.init(this.clippingPlanes,Et),m=vt.get(w,y.length),m.init(),y.push(m),X.enabled===!0&&X.isPresenting===!0){const ot=x.xr.getDepthSensingMesh();ot!==null&&ta(ot,q,-1/0,x.sortObjects)}ta(w,q,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(st,ht),Q=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Q&&qt.addToRenderList(m,w),this.info.render.frame++,at===!0&&it.beginShadows();const H=f.state.shadowsArray;Mt.render(H,w,q),at===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,U=m.transmissive;if(f.setupLights(),q.isArrayCamera){const ot=q.cameras;if(U.length>0)for(let mt=0,bt=ot.length;mt<bt;mt++){const Tt=ot[mt];_l(V,U,w,Tt)}Q&&qt.render(w);for(let mt=0,bt=ot.length;mt<bt;mt++){const Tt=ot[mt];gl(m,w,Tt,Tt.viewport)}}else U.length>0&&_l(V,U,w,q),Q&&qt.render(w),gl(m,w,q);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(x,w,q),oe.resetDefaultState(),E=-1,M=null,v.pop(),v.length>0?(f=v[v.length-1],at===!0&&it.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function ta(w,q,H,V){if(w.visible===!1)return;if(w.layers.test(q.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(q);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||$.intersectsSprite(w)){V&&Ut.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Lt);const mt=J.update(w),bt=w.material;bt.visible&&m.push(w,mt,bt,H,Ut.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||$.intersectsObject(w))){const mt=J.update(w),bt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ut.copy(w.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Ut.copy(mt.boundingSphere.center)),Ut.applyMatrix4(w.matrixWorld).applyMatrix4(Lt)),Array.isArray(bt)){const Tt=mt.groups;for(let kt=0,Ht=Tt.length;kt<Ht;kt++){const At=Tt[kt],te=bt[At.materialIndex];te&&te.visible&&m.push(w,mt,te,H,Ut.z,At)}}else bt.visible&&m.push(w,mt,bt,H,Ut.z,null)}}const ot=w.children;for(let mt=0,bt=ot.length;mt<bt;mt++)ta(ot[mt],q,H,V)}function gl(w,q,H,V){const U=w.opaque,ot=w.transmissive,mt=w.transparent;f.setupLightsView(H),at===!0&&it.setGlobalState(x.clippingPlanes,H),V&&ct.viewport(P.copy(V)),U.length>0&&Xs(U,q,H),ot.length>0&&Xs(ot,q,H),mt.length>0&&Xs(mt,q,H),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function _l(w,q,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new _i(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Bs:An,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const ot=f.state.transmissionRenderTarget[V.id],mt=V.viewport||P;ot.setSize(mt.z,mt.w);const bt=x.getRenderTarget();x.setRenderTarget(ot),x.getClearColor(O),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Q&&qt.render(H);const Tt=x.toneMapping;x.toneMapping=Hn;const kt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),at===!0&&it.setGlobalState(x.clippingPlanes,V),Xs(w,H,V),T.updateMultisampleRenderTarget(ot),T.updateRenderTargetMipmap(ot),et.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let At=0,te=q.length;At<te;At++){const le=q[At],ue=le.object,Oe=le.geometry,ee=le.material,Rt=le.group;if(ee.side===Ce&&ue.layers.test(V.layers)){const pn=ee.side;ee.side=Fe,ee.needsUpdate=!0,xl(ue,H,V,Oe,ee,Rt),ee.side=pn,ee.needsUpdate=!0,Ht=!0}}Ht===!0&&(T.updateMultisampleRenderTarget(ot),T.updateRenderTargetMipmap(ot))}x.setRenderTarget(bt),x.setClearColor(O,W),kt!==void 0&&(V.viewport=kt),x.toneMapping=Tt}function Xs(w,q,H){const V=q.isScene===!0?q.overrideMaterial:null;for(let U=0,ot=w.length;U<ot;U++){const mt=w[U],bt=mt.object,Tt=mt.geometry,kt=V===null?mt.material:V,Ht=mt.group;bt.layers.test(H.layers)&&xl(bt,q,H,Tt,kt,Ht)}}function xl(w,q,H,V,U,ot){w.onBeforeRender(x,q,H,V,U,ot),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(x,q,H,V,w,ot),U.transparent===!0&&U.side===Ce&&U.forceSinglePass===!1?(U.side=Fe,U.needsUpdate=!0,x.renderBufferDirect(H,q,V,U,w,ot),U.side=Gn,U.needsUpdate=!0,x.renderBufferDirect(H,q,V,U,w,ot),U.side=Ce):x.renderBufferDirect(H,q,V,U,w,ot),w.onAfterRender(x,q,H,V,U,ot)}function Ys(w,q,H){q.isScene!==!0&&(q=Zt);const V=xt.get(w),U=f.state.lights,ot=f.state.shadowsArray,mt=U.state.version,bt=wt.getParameters(w,U.state,ot,q,H),Tt=wt.getProgramCacheKey(bt);let kt=V.programs;V.environment=w.isMeshStandardMaterial?q.environment:null,V.fog=q.fog,V.envMap=(w.isMeshStandardMaterial?B:S).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?q.environmentRotation:w.envMapRotation,kt===void 0&&(w.addEventListener("dispose",zt),kt=new Map,V.programs=kt);let Ht=kt.get(Tt);if(Ht!==void 0){if(V.currentProgram===Ht&&V.lightsStateVersion===mt)return yl(w,bt),Ht}else bt.uniforms=wt.getUniforms(w),w.onBeforeCompile(bt,x),Ht=wt.acquireProgram(bt,Tt),kt.set(Tt,Ht),V.uniforms=bt.uniforms;const At=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(At.clippingPlanes=it.uniform),yl(w,bt),V.needsLights=pu(w),V.lightsStateVersion=mt,V.needsLights&&(At.ambientLightColor.value=U.state.ambient,At.lightProbe.value=U.state.probe,At.directionalLights.value=U.state.directional,At.directionalLightShadows.value=U.state.directionalShadow,At.spotLights.value=U.state.spot,At.spotLightShadows.value=U.state.spotShadow,At.rectAreaLights.value=U.state.rectArea,At.ltc_1.value=U.state.rectAreaLTC1,At.ltc_2.value=U.state.rectAreaLTC2,At.pointLights.value=U.state.point,At.pointLightShadows.value=U.state.pointShadow,At.hemisphereLights.value=U.state.hemi,At.directionalShadowMap.value=U.state.directionalShadowMap,At.directionalShadowMatrix.value=U.state.directionalShadowMatrix,At.spotShadowMap.value=U.state.spotShadowMap,At.spotLightMatrix.value=U.state.spotLightMatrix,At.spotLightMap.value=U.state.spotLightMap,At.pointShadowMap.value=U.state.pointShadowMap,At.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Ht,V.uniformsList=null,Ht}function vl(w){if(w.uniformsList===null){const q=w.currentProgram.getUniforms();w.uniformsList=qr.seqWithValue(q.seq,w.uniforms)}return w.uniformsList}function yl(w,q){const H=xt.get(w);H.outputColorSpace=q.outputColorSpace,H.batching=q.batching,H.batchingColor=q.batchingColor,H.instancing=q.instancing,H.instancingColor=q.instancingColor,H.instancingMorph=q.instancingMorph,H.skinning=q.skinning,H.morphTargets=q.morphTargets,H.morphNormals=q.morphNormals,H.morphColors=q.morphColors,H.morphTargetsCount=q.morphTargetsCount,H.numClippingPlanes=q.numClippingPlanes,H.numIntersection=q.numClipIntersection,H.vertexAlphas=q.vertexAlphas,H.vertexTangents=q.vertexTangents,H.toneMapping=q.toneMapping}function du(w,q,H,V,U){q.isScene!==!0&&(q=Zt),T.resetTextureUnits();const ot=q.fog,mt=V.isMeshStandardMaterial?q.environment:null,bt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:as,Tt=(V.isMeshStandardMaterial?B:S).get(V.envMap||mt),kt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ht=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),At=!!H.morphAttributes.position,te=!!H.morphAttributes.normal,le=!!H.morphAttributes.color;let ue=Hn;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ue=x.toneMapping);const Oe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ee=Oe!==void 0?Oe.length:0,Rt=xt.get(V),pn=f.state.lights;if(at===!0&&(Et===!0||w!==M)){const We=w===M&&V.id===E;it.setState(V,w,We)}let ne=!1;V.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==pn.state.version||Rt.outputColorSpace!==bt||U.isBatchedMesh&&Rt.batching===!1||!U.isBatchedMesh&&Rt.batching===!0||U.isBatchedMesh&&Rt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Rt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Rt.instancing===!1||!U.isInstancedMesh&&Rt.instancing===!0||U.isSkinnedMesh&&Rt.skinning===!1||!U.isSkinnedMesh&&Rt.skinning===!0||U.isInstancedMesh&&Rt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Rt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Rt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Rt.instancingMorph===!1&&U.morphTexture!==null||Rt.envMap!==Tt||V.fog===!0&&Rt.fog!==ot||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==it.numPlanes||Rt.numIntersection!==it.numIntersection)||Rt.vertexAlphas!==kt||Rt.vertexTangents!==Ht||Rt.morphTargets!==At||Rt.morphNormals!==te||Rt.morphColors!==le||Rt.toneMapping!==ue||Rt.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,Rt.__version=V.version);let Ze=Rt.currentProgram;ne===!0&&(Ze=Ys(V,q,U));let Ei=!1,ze=!1,ds=!1;const de=Ze.getUniforms(),an=Rt.uniforms;if(ct.useProgram(Ze.program)&&(Ei=!0,ze=!0,ds=!0),V.id!==E&&(E=V.id,ze=!0),Ei||M!==w){ct.buffers.depth.getReversed()?(lt.copy(w.projectionMatrix),vd(lt),yd(lt),de.setValue(C,"projectionMatrix",lt)):de.setValue(C,"projectionMatrix",w.projectionMatrix),de.setValue(C,"viewMatrix",w.matrixWorldInverse);const Pn=de.map.cameraPosition;Pn!==void 0&&Pn.setValue(C,Bt.setFromMatrixPosition(w.matrixWorld)),yt.logarithmicDepthBuffer&&de.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&de.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,ze=!0,ds=!0)}if(U.isSkinnedMesh){de.setOptional(C,U,"bindMatrix"),de.setOptional(C,U,"bindMatrixInverse");const We=U.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),de.setValue(C,"boneTexture",We.boneTexture,T))}U.isBatchedMesh&&(de.setOptional(C,U,"batchingTexture"),de.setValue(C,"batchingTexture",U._matricesTexture,T),de.setOptional(C,U,"batchingIdTexture"),de.setValue(C,"batchingIdTexture",U._indirectTexture,T),de.setOptional(C,U,"batchingColorTexture"),U._colorsTexture!==null&&de.setValue(C,"batchingColorTexture",U._colorsTexture,T));const fs=H.morphAttributes;if((fs.position!==void 0||fs.normal!==void 0||fs.color!==void 0)&&Ot.update(U,H,Ze),(ze||Rt.receiveShadow!==U.receiveShadow)&&(Rt.receiveShadow=U.receiveShadow,de.setValue(C,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(an.envMap.value=Tt,an.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&q.environment!==null&&(an.envMapIntensity.value=q.environmentIntensity),ze&&(de.setValue(C,"toneMappingExposure",x.toneMappingExposure),Rt.needsLights&&fu(an,ds),ot&&V.fog===!0&&dt.refreshFogUniforms(an,ot),dt.refreshMaterialUniforms(an,V,z,Z,f.state.transmissionRenderTarget[w.id]),qr.upload(C,vl(Rt),an,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(qr.upload(C,vl(Rt),an,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&de.setValue(C,"center",U.center),de.setValue(C,"modelViewMatrix",U.modelViewMatrix),de.setValue(C,"normalMatrix",U.normalMatrix),de.setValue(C,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const We=V.uniformsGroups;for(let Pn=0,Ln=We.length;Pn<Ln;Pn++){const Ml=We[Pn];I.update(Ml,Ze),I.bind(Ml,Ze)}}return Ze}function fu(w,q){w.ambientLightColor.needsUpdate=q,w.lightProbe.needsUpdate=q,w.directionalLights.needsUpdate=q,w.directionalLightShadows.needsUpdate=q,w.pointLights.needsUpdate=q,w.pointLightShadows.needsUpdate=q,w.spotLights.needsUpdate=q,w.spotLightShadows.needsUpdate=q,w.rectAreaLights.needsUpdate=q,w.hemisphereLights.needsUpdate=q}function pu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,q,H){xt.get(w.texture).__webglTexture=q,xt.get(w.depthTexture).__webglTexture=H;const V=xt.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,q){const H=xt.get(w);H.__webglFramebuffer=q,H.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(w,q=0,H=0){R=w,b=q,A=H;let V=!0,U=null,ot=!1,mt=!1;if(w){const Tt=xt.get(w);if(Tt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(C.FRAMEBUFFER,null),V=!1;else if(Tt.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(Tt.__hasExternalTextures)T.rebindTextures(w,xt.get(w.texture).__webglTexture,xt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const At=w.depthTexture;if(Tt.__boundDepthTexture!==At){if(At!==null&&xt.has(At)&&(w.width!==At.image.width||w.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}const kt=w.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(mt=!0);const Ht=xt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ht[q])?U=Ht[q][H]:U=Ht[q],ot=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?U=xt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ht)?U=Ht[H]:U=Ht,P.copy(w.viewport),G.copy(w.scissor),N=w.scissorTest}else P.copy(gt).multiplyScalar(z).floor(),G.copy(Dt).multiplyScalar(z).floor(),N=$t;if(ct.bindFramebuffer(C.FRAMEBUFFER,U)&&V&&ct.drawBuffers(w,U),ct.viewport(P),ct.scissor(G),ct.setScissorTest(N),ot){const Tt=xt.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+q,Tt.__webglTexture,H)}else if(mt){const Tt=xt.get(w.texture),kt=q||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Tt.__webglTexture,H||0,kt)}E=-1},this.readRenderTargetPixels=function(w,q,H,V,U,ot,mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=xt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(bt=bt[mt]),bt){ct.bindFramebuffer(C.FRAMEBUFFER,bt);try{const Tt=w.texture,kt=Tt.format,Ht=Tt.type;if(!yt.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=w.width-V&&H>=0&&H<=w.height-U&&C.readPixels(q,H,V,U,Gt.convert(kt),Gt.convert(Ht),ot)}finally{const Tt=R!==null?xt.get(R).__webglFramebuffer:null;ct.bindFramebuffer(C.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(w,q,H,V,U,ot,mt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=xt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(bt=bt[mt]),bt){const Tt=w.texture,kt=Tt.format,Ht=Tt.type;if(!yt.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=w.width-V&&H>=0&&H<=w.height-U){ct.bindFramebuffer(C.FRAMEBUFFER,bt);const At=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,At),C.bufferData(C.PIXEL_PACK_BUFFER,ot.byteLength,C.STREAM_READ),C.readPixels(q,H,V,U,Gt.convert(kt),Gt.convert(Ht),0);const te=R!==null?xt.get(R).__webglFramebuffer:null;ct.bindFramebuffer(C.FRAMEBUFFER,te);const le=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await xd(C,le,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,At),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ot),C.deleteBuffer(At),C.deleteSync(le),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,q=null,H=0){w.isTexture!==!0&&(bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-H),U=Math.floor(w.image.width*V),ot=Math.floor(w.image.height*V),mt=q!==null?q.x:0,bt=q!==null?q.y:0;T.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,H,0,0,mt,bt,U,ot),ct.unbindTexture()},this.copyTextureToTexture=function(w,q,H=null,V=null,U=0){w.isTexture!==!0&&(bs("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],q=arguments[2],U=arguments[3]||0,H=null);let ot,mt,bt,Tt,kt,Ht,At,te,le;const ue=w.isCompressedTexture?w.mipmaps[U]:w.image;H!==null?(ot=H.max.x-H.min.x,mt=H.max.y-H.min.y,bt=H.isBox3?H.max.z-H.min.z:1,Tt=H.min.x,kt=H.min.y,Ht=H.isBox3?H.min.z:0):(ot=ue.width,mt=ue.height,bt=ue.depth||1,Tt=0,kt=0,Ht=0),V!==null?(At=V.x,te=V.y,le=V.z):(At=0,te=0,le=0);const Oe=Gt.convert(q.format),ee=Gt.convert(q.type);let Rt;q.isData3DTexture?(T.setTexture3D(q,0),Rt=C.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(T.setTexture2DArray(q,0),Rt=C.TEXTURE_2D_ARRAY):(T.setTexture2D(q,0),Rt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,q.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,q.unpackAlignment);const pn=C.getParameter(C.UNPACK_ROW_LENGTH),ne=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ze=C.getParameter(C.UNPACK_SKIP_PIXELS),Ei=C.getParameter(C.UNPACK_SKIP_ROWS),ze=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ue.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ue.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Tt),C.pixelStorei(C.UNPACK_SKIP_ROWS,kt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ht);const ds=w.isDataArrayTexture||w.isData3DTexture,de=q.isDataArrayTexture||q.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const an=xt.get(w),fs=xt.get(q),We=xt.get(an.__renderTarget),Pn=xt.get(fs.__renderTarget);ct.bindFramebuffer(C.READ_FRAMEBUFFER,We.__webglFramebuffer),ct.bindFramebuffer(C.DRAW_FRAMEBUFFER,Pn.__webglFramebuffer);for(let Ln=0;Ln<bt;Ln++)ds&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,xt.get(w).__webglTexture,U,Ht+Ln),w.isDepthTexture?(de&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,xt.get(q).__webglTexture,U,le+Ln),C.blitFramebuffer(Tt,kt,ot,mt,At,te,ot,mt,C.DEPTH_BUFFER_BIT,C.NEAREST)):de?C.copyTexSubImage3D(Rt,U,At,te,le+Ln,Tt,kt,ot,mt):C.copyTexSubImage2D(Rt,U,At,te,le+Ln,Tt,kt,ot,mt);ct.bindFramebuffer(C.READ_FRAMEBUFFER,null),ct.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else de?w.isDataTexture||w.isData3DTexture?C.texSubImage3D(Rt,U,At,te,le,ot,mt,bt,Oe,ee,ue.data):q.isCompressedArrayTexture?C.compressedTexSubImage3D(Rt,U,At,te,le,ot,mt,bt,Oe,ue.data):C.texSubImage3D(Rt,U,At,te,le,ot,mt,bt,Oe,ee,ue):w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,U,At,te,ot,mt,Oe,ee,ue.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,U,At,te,ue.width,ue.height,Oe,ue.data):C.texSubImage2D(C.TEXTURE_2D,U,At,te,ot,mt,Oe,ee,ue);C.pixelStorei(C.UNPACK_ROW_LENGTH,pn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ne),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ze),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ei),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ze),U===0&&q.generateMipmaps&&C.generateMipmap(Rt),ct.unbindTexture()},this.copyTextureToTexture3D=function(w,q,H=null,V=null,U=0){return w.isTexture!==!0&&(bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,w=arguments[2],q=arguments[3],U=arguments[4]||0),bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,q,H,V,U)},this.initRenderTarget=function(w){xt.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),ct.unbindTexture()},this.resetState=function(){b=0,A=0,R=null,ct.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}class Rh{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xt(t),this.near=e,this.far=n}clone(){return new Rh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ph extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class L1{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Lo,this.updateRanges=[],this.version=0,this.uuid=hn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qe=new D;class Or{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=en(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=en(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=en(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=en(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=en(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Or(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Jo extends Xn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Oi;const xs=new D,Bi=new D,ki=new D,zi=new nt,vs=new nt,Lh=new re,mr=new D,ys=new D,gr=new D,vc=new nt,Ra=new nt,yc=new nt;class Dh extends _e{constructor(t=new Jo){if(super(),this.isSprite=!0,this.type="Sprite",Oi===void 0){Oi=new xe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new L1(e,5);Oi.setIndex([0,1,2,0,2,3]),Oi.setAttribute("position",new Or(n,3,0,!1)),Oi.setAttribute("uv",new Or(n,2,3,!1))}this.geometry=Oi,this.material=t,this.center=new nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bi.setFromMatrixScale(this.matrixWorld),Lh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bi.multiplyScalar(-ki.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;_r(mr.set(-.5,-.5,0),ki,a,Bi,s,r),_r(ys.set(.5,-.5,0),ki,a,Bi,s,r),_r(gr.set(.5,.5,0),ki,a,Bi,s,r),vc.set(0,0),Ra.set(1,0),yc.set(1,1);let o=t.ray.intersectTriangle(mr,ys,gr,!1,xs);if(o===null&&(_r(ys.set(-.5,.5,0),ki,a,Bi,s,r),Ra.set(0,1),o=t.ray.intersectTriangle(mr,gr,ys,!1,xs),o===null))return;const l=t.ray.origin.distanceTo(xs);l<t.near||l>t.far||e.push({distance:l,point:xs.clone(),uv:$e.getInterpolation(xs,mr,ys,gr,vc,Ra,yc,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function _r(i,t,e,n,s,r){zi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(vs.x=r*zi.x-s*zi.y,vs.y=s*zi.x+r*zi.y):vs.copy(zi),i.copy(t),i.x+=vs.x,i.y+=vs.y,i.applyMatrix4(Lh)}class Ih extends De{constructor(t=null,e=1,n=1,s,r,a,o,l,c=ke,h=ke,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mc extends je{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Hi=new re,Sc=new re,xr=[],Ec=new vi,D1=new re,Ms=new ye,Ss=new yi;class Wg extends ye{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Mc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,D1)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hi),Ec.copy(t.boundingBox).applyMatrix4(Hi),this.boundingBox.union(Ec)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hi),Ss.copy(t.boundingSphere).applyMatrix4(Hi),this.boundingSphere.union(Ss)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ms.geometry=this.geometry,Ms.material=this.material,Ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ss.copy(this.boundingSphere),Ss.applyMatrix4(n),t.ray.intersectsSphere(Ss)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hi),Sc.multiplyMatrices(n,Hi),Ms.matrixWorld=Sc,Ms.raycast(t,xr);for(let a=0,o=xr.length;a<o;a++){const l=xr[a];l.instanceId=r,l.object=this,e.push(l)}xr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Mc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ih(new Float32Array(s*this.count),s,this.count,Wr,cn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class I1 extends Xn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Br=new D,kr=new D,wc=new re,Es=new Yo,vr=new yi,Pa=new D,bc=new D;class Xg extends _e{constructor(t=new xe,e=new I1){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Br.fromBufferAttribute(e,s-1),kr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Br.distanceTo(kr);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(s),vr.radius+=r,t.ray.intersectsSphere(vr)===!1)return;wc.copy(s).invert(),Es.copy(t.ray).applyMatrix4(wc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const f=h.getX(_),y=h.getX(_+1),v=yr(this,t,Es,l,f,y);v&&e.push(v)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=yr(this,t,Es,l,_,m);f&&e.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const f=yr(this,t,Es,l,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=yr(this,t,Es,l,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function yr(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Br.fromBufferAttribute(a,s),kr.fromBufferAttribute(a,r),e.distanceSqToSegment(Br,kr,Pa,bc)>n)return;Pa.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Pa);if(!(l<t.near||l>t.far))return{distance:l,point:bc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class q1 extends Xn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Tc=new re,Io=new Yo,Mr=new yi,Sr=new D;class Yg extends _e{constructor(t=new xe,e=new q1){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(s),Mr.radius+=r,t.ray.intersectsSphere(Mr)===!1)return;Tc.copy(s).invert(),Io.copy(t.ray).applyMatrix4(Tc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);Sr.fromBufferAttribute(u,m),Ac(Sr,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,_=p;g<_;g++)Sr.fromBufferAttribute(u,g),Ac(Sr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ac(i,t,e,n,s,r,a){const o=Io.distanceSqToPoint(i);if(o<e){const l=new D;Io.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class zs extends De{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new nt:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,s=[],r=[],a=[],o=new D,l=new re;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Te(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Te(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Zo extends un{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new nt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class U1 extends Zo{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ko(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Er=new D,La=new Ko,Da=new Ko,Ia=new Ko;class N1 extends un{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Er.subVectors(s[0],s[1]).add(s[0]),c=Er);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Er.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Er),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),La.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Da.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Ia.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(La.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Da.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ia.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(La.calc(l),Da.calc(l),Ia.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Cc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function F1(i,t){const e=1-i;return e*e*t}function O1(i,t){return 2*(1-i)*i*t}function B1(i,t){return i*i*t}function Ps(i,t,e,n){return F1(i,t)+O1(i,e)+B1(i,n)}function k1(i,t){const e=1-i;return e*e*e*t}function z1(i,t){const e=1-i;return 3*e*e*i*t}function H1(i,t){return 3*(1-i)*i*i*t}function V1(i,t){return i*i*i*t}function Ls(i,t,e,n,s){return k1(i,t)+z1(i,e)+H1(i,n)+V1(i,s)}class qh extends un{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ls(t,s.x,r.x,a.x,o.x),Ls(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class G1 extends un{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ls(t,s.x,r.x,a.x,o.x),Ls(t,s.y,r.y,a.y,o.y),Ls(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Uh extends un{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class W1 extends un{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nh extends un{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ps(t,s.x,r.x,a.x),Ps(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fh extends un{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ps(t,s.x,r.x,a.x),Ps(t,s.y,r.y,a.y),Ps(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Oh extends un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Cc(o,l.x,c.x,h.x,u.x),Cc(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new nt().fromArray(s))}return this}}var zr=Object.freeze({__proto__:null,ArcCurve:U1,CatmullRomCurve3:N1,CubicBezierCurve:qh,CubicBezierCurve3:G1,EllipseCurve:Zo,LineCurve:Uh,LineCurve3:W1,QuadraticBezierCurve:Nh,QuadraticBezierCurve3:Fh,SplineCurve:Oh});class X1 extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new zr[s.type]().fromJSON(s))}return this}}class Hr extends X1{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Uh(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Nh(this.currentPoint.clone(),new nt(t,e),new nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new qh(this.currentPoint.clone(),new nt(t,e),new nt(n,s),new nt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Oh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Zo(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Qo extends xe{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Te(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new D,d=new nt,p=new D,g=new D,_=new D;let m=0,f=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let y=0;y<=e;y++){const v=n+y*h*s,x=Math.sin(v),L=Math.cos(v);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*x,u.y=t[b].y,u.z=t[b].x*L,a.push(u.x,u.y,u.z),d.x=y/e,d.y=b/(t.length-1),o.push(d.x,d.y);const A=l[3*b+0]*x,R=l[3*b+1],E=l[3*b+0]*L;c.push(A,R,E)}}for(let y=0;y<e;y++)for(let v=0;v<t.length-1;v++){const x=v+y*t.length,L=x,b=x+t.length,A=x+t.length+1,R=x+1;r.push(L,b,R),r.push(A,R,b)}this.setIndex(r),this.setAttribute("position",new Yt(a,3)),this.setAttribute("uv",new Yt(o,2)),this.setAttribute("normal",new Yt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.points,t.segments,t.phiStart,t.phiLength)}}class $r extends Qo{constructor(t=1,e=1,n=4,s=8){const r=new Hr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new $r(t.radius,t.length,t.capSegments,t.radialSegments)}}class Bh extends xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new D,h=new nt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(o,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bh(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ie extends xe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;y(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(p,2));function y(){const x=new D,L=new D;let b=0;const A=(e-t)/n;for(let R=0;R<=r;R++){const E=[],M=R/r,P=M*(e-t)+t;for(let G=0;G<=s;G++){const N=G/s,O=N*l+o,W=Math.sin(O),k=Math.cos(O);L.x=P*W,L.y=-M*n+m,L.z=P*k,u.push(L.x,L.y,L.z),x.set(W,A,k).normalize(),d.push(x.x,x.y,x.z),p.push(N,1-M),E.push(g++)}_.push(E)}for(let R=0;R<s;R++)for(let E=0;E<r;E++){const M=_[E][R],P=_[E+1][R],G=_[E+1][R+1],N=_[E][R+1];(t>0||E!==0)&&(h.push(M,P,N),b+=3),(e>0||E!==r-1)&&(h.push(P,G,N),b+=3)}c.addGroup(f,b,0),f+=b}function v(x){const L=g,b=new nt,A=new D;let R=0;const E=x===!0?t:e,M=x===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const P=g;for(let G=0;G<=s;G++){const O=G/s*l+o,W=Math.cos(O),k=Math.sin(O);A.x=E*k,A.y=m*M,A.z=E*W,u.push(A.x,A.y,A.z),d.push(0,M,0),b.x=W*.5+.5,b.y=k*.5*M+.5,p.push(b.x,b.y),g++}for(let G=0;G<s;G++){const N=L+G,O=P+G;x===!0?h.push(O,O+1,N):h.push(O+1,O,N),R+=3}c.addGroup(f,R,x===!0?1:2),f+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ie(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qs extends Ie{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new qs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Hs extends xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(r.slice(),3)),this.setAttribute("uv",new Yt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const v=new D,x=new D,L=new D;for(let b=0;b<e.length;b+=3)p(e[b+0],v),p(e[b+1],x),p(e[b+2],L),l(v,x,L,y)}function l(y,v,x,L){const b=L+1,A=[];for(let R=0;R<=b;R++){A[R]=[];const E=y.clone().lerp(x,R/b),M=v.clone().lerp(x,R/b),P=b-R;for(let G=0;G<=P;G++)G===0&&R===b?A[R][G]=E:A[R][G]=E.clone().lerp(M,G/P)}for(let R=0;R<b;R++)for(let E=0;E<2*(b-R)-1;E++){const M=Math.floor(E/2);E%2===0?(d(A[R][M+1]),d(A[R+1][M]),d(A[R][M])):(d(A[R][M+1]),d(A[R+1][M+1]),d(A[R+1][M]))}}function c(y){const v=new D;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(y),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){const y=new D;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];const x=m(y)/2/Math.PI+.5,L=f(y)/Math.PI+.5;a.push(x,1-L)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){const v=a[y+0],x=a[y+2],L=a[y+4],b=Math.max(v,x,L),A=Math.min(v,x,L);b>.9&&A<.1&&(v<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),L<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function p(y,v){const x=y*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function g(){const y=new D,v=new D,x=new D,L=new D,b=new nt,A=new nt,R=new nt;for(let E=0,M=0;E<r.length;E+=9,M+=6){y.set(r[E+0],r[E+1],r[E+2]),v.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),b.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),R.set(a[M+4],a[M+5]),L.copy(y).add(v).add(x).divideScalar(3);const P=m(L);_(b,M+0,y,P),_(A,M+2,v,P),_(R,M+4,x,P)}}function _(y,v,x,L){L<0&&y.x===1&&(a[v]=y.x-1),x.x===0&&x.z===0&&(a[v]=L/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hs(t.vertices,t.indices,t.radius,t.details)}}class kh extends Hs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new kh(t.radius,t.detail)}}class fi extends Hr{constructor(t){super(t),this.uuid=hn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Hr().fromJSON(s))}return this}}const Y1={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=zh(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,p;if(n&&(r=K1(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Us(r,a,e,o,l,p,0),a}};function zh(i,t,e,n,s){let r,a;if(s===c2(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Rc(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Rc(r,i[r],i[r+1],a);return a&&jr(a,a.next)&&(Fs(a),a=a.next),a}function xi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(jr(e,e.next)||fe(e.prev,e,e.next)===0)){if(Fs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Us(i,t,e,n,s,r,a){if(!i)return;!a&&r&&i2(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?j1(i,n,s,r):$1(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Fs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=J1(xi(i),t,e),Us(i,t,e,n,s,r,2)):a===2&&Z1(i,t,e,n,s,r):Us(xi(i),t,e,n,s,r,1);break}}}function $1(i){const t=i.prev,e=i,n=i.next;if(fe(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Yi(s,o,r,l,a,c,g.x,g.y)&&fe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function j1(i,t,e,n){const s=i.prev,r=i,a=i.next;if(fe(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,f=qo(p,g,t,e,n),y=qo(_,m,t,e,n);let v=i.prevZ,x=i.nextZ;for(;v&&v.z>=f&&x&&x.z<=y;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Yi(o,h,l,u,c,d,v.x,v.y)&&fe(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Yi(o,h,l,u,c,d,x.x,x.y)&&fe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Yi(o,h,l,u,c,d,v.x,v.y)&&fe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Yi(o,h,l,u,c,d,x.x,x.y)&&fe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function J1(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!jr(s,r)&&Hh(s,n,n.next,r)&&Ns(s,r)&&Ns(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Fs(n),Fs(n.next),n=i=r),n=n.next}while(n!==i);return xi(n)}function Z1(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&a2(a,o)){let l=Vh(a,o);a=xi(a,a.next),l=xi(l,l.next),Us(a,t,e,n,s,r,0),Us(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function K1(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=zh(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(r2(c));for(s.sort(Q1),r=0;r<s.length;r++)e=t2(s[r],e);return e}function Q1(i,t){return i.x-t.x}function t2(i,t){const e=e2(i,t);if(!e)return t;const n=Vh(e,i);return xi(n,n.next),xi(e,e.next)}function e2(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Yi(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Ns(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&n2(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function n2(i,t){return fe(i.prev,i,t.prev)<0&&fe(t.next,i,i.next)<0}function i2(i,t,e,n){let s=i;do s.z===0&&(s.z=qo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,s2(s)}function s2(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function qo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function r2(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Yi(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function a2(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!o2(i,t)&&(Ns(i,t)&&Ns(t,i)&&l2(i,t)&&(fe(i.prev,i,t.prev)||fe(i,t.prev,t))||jr(i,t)&&fe(i.prev,i,i.next)>0&&fe(t.prev,t,t.next)>0)}function fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function jr(i,t){return i.x===t.x&&i.y===t.y}function Hh(i,t,e,n){const s=br(fe(i,t,e)),r=br(fe(i,t,n)),a=br(fe(e,n,i)),o=br(fe(e,n,t));return!!(s!==r&&a!==o||s===0&&wr(i,e,t)||r===0&&wr(i,n,t)||a===0&&wr(e,i,n)||o===0&&wr(e,t,n))}function wr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function br(i){return i>0?1:i<0?-1:0}function o2(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Hh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ns(i,t){return fe(i.prev,i,i.next)<0?fe(i,t,i.next)>=0&&fe(i,i.prev,t)>=0:fe(i,t,i.prev)<0||fe(i,i.next,t)<0}function l2(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Vh(i,t){const e=new Uo(i.i,i.x,i.y),n=new Uo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Rc(i,t,e,n){const s=new Uo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Uo(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function c2(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class wn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return wn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Pc(t),Lc(n,t);let a=t.length;e.forEach(Pc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Lc(n,e[l]);const o=Y1.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Pc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Lc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Jr extends xe{constructor(t=new fi([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Yt(s,3)),this.setAttribute("uv",new Yt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:h2;let v,x=!1,L,b,A,R;f&&(v=f.getSpacedPoints(h),x=!0,d=!1,L=f.computeFrenetFrames(h,!1),b=new D,A=new D,R=new D),d||(m=0,p=0,g=0,_=0);const E=o.extractPoints(c);let M=E.shape;const P=E.holes;if(!wn.isClockWise(M)){M=M.reverse();for(let Q=0,rt=P.length;Q<rt;Q++){const C=P[Q];wn.isClockWise(C)&&(P[Q]=C.reverse())}}const N=wn.triangulateShape(M,P),O=M;for(let Q=0,rt=P.length;Q<rt;Q++){const C=P[Q];M=M.concat(C)}function W(Q,rt,C){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(rt,C)}const k=M.length,Z=N.length;function z(Q,rt,C){let Ct,et,yt;const ct=Q.x-rt.x,It=Q.y-rt.y,xt=C.x-Q.x,T=C.y-Q.y,S=ct*ct+It*It,B=ct*T-It*xt;if(Math.abs(B)>Number.EPSILON){const j=Math.sqrt(S),tt=Math.sqrt(xt*xt+T*T),J=rt.x-It/j,wt=rt.y+ct/j,dt=C.x-T/tt,vt=C.y+xt/tt,jt=((dt-J)*T-(vt-wt)*xt)/(ct*T-It*xt);Ct=J+ct*jt-Q.x,et=wt+It*jt-Q.y;const it=Ct*Ct+et*et;if(it<=2)return new nt(Ct,et);yt=Math.sqrt(it/2)}else{let j=!1;ct>Number.EPSILON?xt>Number.EPSILON&&(j=!0):ct<-Number.EPSILON?xt<-Number.EPSILON&&(j=!0):Math.sign(It)===Math.sign(T)&&(j=!0),j?(Ct=-It,et=ct,yt=Math.sqrt(S)):(Ct=ct,et=It,yt=Math.sqrt(S/2))}return new nt(Ct/yt,et/yt)}const st=[];for(let Q=0,rt=O.length,C=rt-1,Ct=Q+1;Q<rt;Q++,C++,Ct++)C===rt&&(C=0),Ct===rt&&(Ct=0),st[Q]=z(O[Q],O[C],O[Ct]);const ht=[];let gt,Dt=st.concat();for(let Q=0,rt=P.length;Q<rt;Q++){const C=P[Q];gt=[];for(let Ct=0,et=C.length,yt=et-1,ct=Ct+1;Ct<et;Ct++,yt++,ct++)yt===et&&(yt=0),ct===et&&(ct=0),gt[Ct]=z(C[Ct],C[yt],C[ct]);ht.push(gt),Dt=Dt.concat(gt)}for(let Q=0;Q<m;Q++){const rt=Q/m,C=p*Math.cos(rt*Math.PI/2),Ct=g*Math.sin(rt*Math.PI/2)+_;for(let et=0,yt=O.length;et<yt;et++){const ct=W(O[et],st[et],Ct);lt(ct.x,ct.y,-C)}for(let et=0,yt=P.length;et<yt;et++){const ct=P[et];gt=ht[et];for(let It=0,xt=ct.length;It<xt;It++){const T=W(ct[It],gt[It],Ct);lt(T.x,T.y,-C)}}}const $t=g+_;for(let Q=0;Q<k;Q++){const rt=d?W(M[Q],Dt[Q],$t):M[Q];x?(A.copy(L.normals[0]).multiplyScalar(rt.x),b.copy(L.binormals[0]).multiplyScalar(rt.y),R.copy(v[0]).add(A).add(b),lt(R.x,R.y,R.z)):lt(rt.x,rt.y,0)}for(let Q=1;Q<=h;Q++)for(let rt=0;rt<k;rt++){const C=d?W(M[rt],Dt[rt],$t):M[rt];x?(A.copy(L.normals[Q]).multiplyScalar(C.x),b.copy(L.binormals[Q]).multiplyScalar(C.y),R.copy(v[Q]).add(A).add(b),lt(R.x,R.y,R.z)):lt(C.x,C.y,u/h*Q)}for(let Q=m-1;Q>=0;Q--){const rt=Q/m,C=p*Math.cos(rt*Math.PI/2),Ct=g*Math.sin(rt*Math.PI/2)+_;for(let et=0,yt=O.length;et<yt;et++){const ct=W(O[et],st[et],Ct);lt(ct.x,ct.y,u+C)}for(let et=0,yt=P.length;et<yt;et++){const ct=P[et];gt=ht[et];for(let It=0,xt=ct.length;It<xt;It++){const T=W(ct[It],gt[It],Ct);x?lt(T.x,T.y+v[h-1].y,v[h-1].x+C):lt(T.x,T.y,u+C)}}}$(),at();function $(){const Q=s.length/3;if(d){let rt=0,C=k*rt;for(let Ct=0;Ct<Z;Ct++){const et=N[Ct];Lt(et[2]+C,et[1]+C,et[0]+C)}rt=h+m*2,C=k*rt;for(let Ct=0;Ct<Z;Ct++){const et=N[Ct];Lt(et[0]+C,et[1]+C,et[2]+C)}}else{for(let rt=0;rt<Z;rt++){const C=N[rt];Lt(C[2],C[1],C[0])}for(let rt=0;rt<Z;rt++){const C=N[rt];Lt(C[0]+k*h,C[1]+k*h,C[2]+k*h)}}n.addGroup(Q,s.length/3-Q,0)}function at(){const Q=s.length/3;let rt=0;Et(O,rt),rt+=O.length;for(let C=0,Ct=P.length;C<Ct;C++){const et=P[C];Et(et,rt),rt+=et.length}n.addGroup(Q,s.length/3-Q,1)}function Et(Q,rt){let C=Q.length;for(;--C>=0;){const Ct=C;let et=C-1;et<0&&(et=Q.length-1);for(let yt=0,ct=h+m*2;yt<ct;yt++){const It=k*yt,xt=k*(yt+1),T=rt+Ct+It,S=rt+et+It,B=rt+et+xt,j=rt+Ct+xt;Bt(T,S,B,j)}}}function lt(Q,rt,C){l.push(Q),l.push(rt),l.push(C)}function Lt(Q,rt,C){Ut(Q),Ut(rt),Ut(C);const Ct=s.length/3,et=y.generateTopUV(n,s,Ct-3,Ct-2,Ct-1);Zt(et[0]),Zt(et[1]),Zt(et[2])}function Bt(Q,rt,C,Ct){Ut(Q),Ut(rt),Ut(Ct),Ut(rt),Ut(C),Ut(Ct);const et=s.length/3,yt=y.generateSideWallUV(n,s,et-6,et-3,et-2,et-1);Zt(yt[0]),Zt(yt[1]),Zt(yt[3]),Zt(yt[1]),Zt(yt[2]),Zt(yt[3])}function Ut(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function Zt(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return u2(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new zr[s.type]().fromJSON(s)),new Jr(n,t.options)}}const h2={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new nt(r,a),new nt(o,l),new nt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new nt(a,1-l),new nt(c,1-u),new nt(d,1-g),new nt(_,1-f)]:[new nt(o,1-l),new nt(h,1-u),new nt(p,1-g),new nt(m,1-f)]}};function u2(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Gh extends Hs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Gh(t.radius,t.detail)}}class Wh extends Hs{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Wh(t.radius,t.detail)}}class Xh extends xe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,p=new D,g=new nt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let f=0;f<n;f++){const y=f+m,v=y,x=y+n+1,L=y+n+2,b=y+1;o.push(v,x,b),o.push(x,L,b)}}this.setIndex(o),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class tl extends xe{constructor(t=new fi([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(r,3)),this.setAttribute("uv",new Yt(a,2));function c(h){const u=s.length/3,d=h.extractPoints(e);let p=d.shape;const g=d.holes;wn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){const y=g[m];wn.isClockWise(y)===!0&&(g[m]=y.reverse())}const _=wn.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){const y=g[m];p=p.concat(y)}for(let m=0,f=p.length;m<f;m++){const y=p[m];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,f=_.length;m<f;m++){const y=_[m],v=y[0]+u,x=y[1]+u,L=y[2]+u;n.push(v,x,L),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return d2(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new tl(n,t.curveSegments)}}function d2(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Qt extends xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new D,d=new D,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const y=[],v=f/n;let x=0;f===0&&a===0?x=.5/e:f===n&&l===Math.PI&&(x=-.5/e);for(let L=0;L<=e;L++){const b=L/e;u.x=-t*Math.cos(s+b*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(s+b*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(b+x,1-v),y.push(c++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){const v=h[f][y+1],x=h[f][y],L=h[f+1][y],b=h[f+1][y+1];(f!==0||a>0)&&p.push(v,x,b),(f!==n-1||l<Math.PI)&&p.push(x,L,b)}this.setIndex(p),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Bn extends xe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new D,u=new D,d=new D;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,y=(s+1)*p+g;a.push(_,m,y),a.push(m,f,y)}this.setIndex(a),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Yh extends xe{constructor(t=new Fh(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,l=new D,c=new nt;let h=new D;const u=[],d=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(p,2));function _(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),y(),f()}function m(v){h=t.getPointAt(v/e,h);const x=a.normals[v],L=a.binormals[v];for(let b=0;b<=s;b++){const A=b/s*Math.PI*2,R=Math.sin(A),E=-Math.cos(A);l.x=E*x.x+R*L.x,l.y=E*x.y+R*L.y,l.z=E*x.z+R*L.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function f(){for(let v=1;v<=e;v++)for(let x=1;x<=s;x++){const L=(s+1)*(v-1)+(x-1),b=(s+1)*v+(x-1),A=(s+1)*v+x,R=(s+1)*(v-1)+x;g.push(L,b,R),g.push(b,A,R)}}function y(){for(let v=0;v<=e;v++)for(let x=0;x<=s;x++)c.x=v/e,c.y=x/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Yh(new zr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class f2 extends Xn{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Xt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hh,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Dc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class p2{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const m2=new p2;class el{constructor(t){this.manager=t!==void 0?t:m2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}el.DEFAULT_MATERIAL_NAME="__DEFAULT";const yn={};class g2 extends Error{constructor(t,e){super(t),this.response=e}}class _2 extends el{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Dc.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(yn[t]!==void 0){yn[t].push({onLoad:e,onProgress:n,onError:s});return}yn[t]=[],yn[t].push({onLoad:e,onProgress:n,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=yn[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){y();function y(){u.read().then(({done:v,value:x})=>{if(v)f.close();else{_+=x.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let b=0,A=h.length;b<A;b++){const R=h[b];R.onProgress&&R.onProgress(L)}f.enqueue(x),y()}},v=>{f.error(v)})}}});return new Response(m)}else throw new g2(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Dc.add(t,c);const h=yn[t];delete yn[t];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=yn[t];if(h===void 0)throw this.manager.itemError(t),c;delete yn[t];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class $h extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class x2 extends $h{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const qa=new re,Ic=new D,qc=new D;class v2{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $o,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ic.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ic),qc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qc),e.updateMatrixWorld(),qa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class y2 extends v2{constructor(){super(new Eh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class M2 extends $h{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new y2}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class S2{constructor(){this.type="ShapePath",this.color=new Xt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Hr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,a){return this.currentPath.bezierCurveTo(t,e,n,s,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(f){const y=[];for(let v=0,x=f.length;v<x;v++){const L=f[v],b=new fi;b.curves=L.curves,y.push(b)}return y}function n(f,y){const v=y.length;let x=!1;for(let L=v-1,b=0;b<v;L=b++){let A=y[L],R=y[b],E=R.x-A.x,M=R.y-A.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(A=y[b],E=-E,R=y[L],M=-M),f.y<A.y||f.y>R.y)continue;if(f.y===A.y){if(f.x===A.x)return!0}else{const P=M*(f.x-A.x)-E*(f.y-A.y);if(P===0)return!0;if(P<0)continue;x=!x}}else{if(f.y!==A.y)continue;if(R.x<=f.x&&f.x<=A.x||A.x<=f.x&&f.x<=R.x)return!0}}return x}const s=wn.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l;const c=[];if(r.length===1)return o=r[0],l=new fi,l.curves=o.curves,c.push(l),c;let h=!s(r[0].getPoints());h=t?!h:h;const u=[],d=[];let p=[],g=0,_;d[g]=void 0,p[g]=[];for(let f=0,y=r.length;f<y;f++)o=r[f],_=o.getPoints(),a=s(_),a=t?!a:a,a?(!h&&d[g]&&g++,d[g]={s:new fi,p:_},d[g].s.curves=o.curves,h&&g++,p[g]=[]):p[g].push({h:o,p:_[0]});if(!d[0])return e(r);if(d.length>1){let f=!1,y=0;for(let v=0,x=d.length;v<x;v++)u[v]=[];for(let v=0,x=d.length;v<x;v++){const L=p[v];for(let b=0;b<L.length;b++){const A=L[b];let R=!0;for(let E=0;E<d.length;E++)n(A.p,d[E].p)&&(v!==E&&y++,R?(R=!1,u[E].push(A)):f=!0);R&&u[v].push(A)}}y>0&&f===!1&&(p=u)}let m;for(let f=0,y=d.length;f<y;f++){l=d[f].s,c.push(l),m=p[f];for(let v=0,x=m.length;v<x;v++)l.holes.push(m[v].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bo);class E2{constructor(t){this.canvas=t,this.renderer=new P1({canvas:t,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Kc,this.renderer.outputColorSpace=be,this.view=null,this.w=1,this.h=1,window.addEventListener("resize",()=>this.resize()),this.resize()}setView(t){this.view=t,this.resize()}get aspect(){return this.w/this.h}resize(){var s,r;this.w=window.innerWidth,this.h=window.innerHeight,this.renderer.setSize(this.w,this.h,!1);const t=this.view;if(!t)return;const e=t.camera;e.aspect=this.aspect;const n=(s=t.offset)==null?void 0:s.call(t,this.aspect);n?e.setViewOffset(this.w,this.h,n[0]*this.w,n[1]*this.h,this.w,this.h):e.clearViewOffset(),(r=t.onResize)==null||r.call(t,this.aspect),e.updateProjectionMatrix()}render(){this.view&&this.renderer.render(this.view.scene,this.view.camera)}toScreen(t,e=(n=>(n=this.view)==null?void 0:n.camera)()){const s=t.clone().project(e);return{x:(s.x*.5+.5)*this.w,y:(-s.y*.5+.5)*this.h,behind:s.z>1}}}function $g(i){const t=document.createElement("canvas");t.width=4,t.height=256;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,256);i.forEach(([r,a])=>n.addColorStop(r,a)),e.fillStyle=n,e.fillRect(0,0,4,256);const s=new zs(t);return s.colorSpace=be,s}function w2(i,{sky:t=16777215,ground:e=14268282,hemi:n=1.3,sun:s=1.7,sunPos:r=[-8,18,12],shadow:a=20}={}){i.add(new x2(t,e,n));const o=new M2(16777215,s);return o.position.set(...r),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),Object.assign(o.shadow.camera,{left:-a,right:a,top:a,bottom:-a,near:1,far:80}),i.add(o),i.add(o.target),o}function jg(i,t,e,n){const s=i.fov*Math.PI/180,r=2*Math.atan(Math.tan(s/2)*t);return Math.max(e/Math.tan(r/2),n/Math.tan(s/2))}const b2=new Qt(1,6,4),T2=new Si(1,.6);class A2{constructor(t){this.scene=t,this.list=[]}burst(t,{count:e=16,colors:n=[16767291,16740264,4171488,8046415],speed:s=5,size:r=.12,life:a=.9,gravity:o=-9,confetti:l=!1,up:c=2}={}){for(let h=0;h<e;h++){const u=new ls({color:n[h%n.length],transparent:!0,side:Ce}),d=new ye(l?T2:b2,u);d.position.copy(t),d.scale.setScalar(r*(.7+Math.random()*.6));const p=Math.random()*Math.PI*2,g=Math.random()*2-1,_=new D(Math.cos(p)*Math.sqrt(1-g*g),g,Math.sin(p)*Math.sqrt(1-g*g)).multiplyScalar(s*(.4+Math.random()*.6));_.y+=c,this.scene.add(d),this.list.push({m:d,v:_,life:a,max:a,gravity:o,spin:l?(Math.random()-.5)*12:0})}}update(t){for(let e=this.list.length-1;e>=0;e--){const n=this.list[e];if(n.life-=t,n.life<=0){this.scene.remove(n.m),n.m.material.dispose(),this.list.splice(e,1);continue}n.v.y+=n.gravity*t,n.m.position.addScaledVector(n.v,t),n.spin&&(n.m.rotation.x+=n.spin*t,n.m.rotation.y+=n.spin*.7*t),n.m.material.opacity=Math.min(1,n.life/n.max*2)}}clear(){for(const t of this.list)this.scene.remove(t.m),t.m.material.dispose();this.list=[]}}const C2=(()=>{const i=new Uint8Array([90,160,225,255]),t=new Ih(i,i.length,1,Wr);return t.minFilter=t.magFilter=ke,t.needsUpdate=!0,t})(),Ua=new Map;function Nt(i,t={}){const e=i+JSON.stringify(t);if(!t.noCache&&Ua.has(e))return Ua.get(e);const{noCache:n,...s}=t,r=new f2({color:i,gradientMap:C2,...s});return n||Ua.set(e,r),r}const bn=(i,t={})=>new ls({color:i,...t});function rn(i,t=!1){return i.traverse(e=>{e.isMesh&&(e.castShadow=!0,t&&(e.receiveShadow=!0))}),i}const Pt=(i,t,e=0,n=0,s=0)=>{const r=new ye(i,t);return r.position.set(e,n,s),r},nn=(i,t,e)=>new ye(new $r(i,t,5,12),e);let ws=null;function R2(){if(ws)return ws;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.7)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),ws=new zs(i),ws.colorSpace=be,ws}function jh(i,t=1,e=.8){const n=new Dh(new Jo({map:R2(),color:i,transparent:!0,opacity:e,depthWrite:!1,blending:Ga}));return n.scale.setScalar(t),n}const is=[{name:"Rayyan",skin:13012058,shirt:4171488,pants:3100543,shoes:16777215,head:"kufi",hat:16777215,trim:16763196},{name:"Noor",skin:15845280,shirt:16740264,pants:8015800,shoes:16777215,head:"hijab",hat:10185727,trim:16769126},{name:"Sami",skin:9263675,shirt:16747069,pants:3824192,shoes:3355443,head:"cap",hat:1483680,trim:16777215},{name:"Layla",skin:14724222,shirt:1483680,pants:3096166,shoes:16740264,head:"hijab",hat:16777215,trim:1483680}],Jg={name:"Zaki",skin:11565650,shirt:8046415,pants:4473924,shoes:16767291,head:"hair",hat:2824720,trim:16777215},Gi={thigh:.55,shin:.55,hipY:1.2};function P2(i){const t=new ce,e=Nt(i.skin),n=Pt(new Qt(.46,24,18),e);t.add(n);const s=bn(2234127),r=bn(16777215);for(const l of[-1,1]){const c=Pt(new Qt(.075,12,10),s,.16*l,.04,.4);c.scale.set(.85,1.15,.6),t.add(c),t.add(Pt(new Qt(.026,8,6),r,.16*l+.02,.08,.445));const h=Pt(new Qt(.07,10,8),bn(16751272,{transparent:!0,opacity:.7}),.27*l,-.09,.34);h.scale.z=.3,t.add(h);const u=Pt(new $r(.018,.08,3,6),s,.16*l,.17,.41);u.rotation.z=Math.PI/2+.15*l,t.add(u)}const a=Pt(new Bn(.1,.022,6,16,Math.PI),s,0,-.1,.415);a.rotation.z=Math.PI,t.add(a),t.add(Pt(new Qt(.045,8,6),Nt(i.skin),0,-.01,.46));const o=Nt(i.hat);if(i.head==="kufi"){const l=Pt(new Ie(.36,.43,.26,24),o,0,.3,-.02);l.rotation.x=-.12,t.add(l);const c=Pt(new Bn(.425,.03,6,28),Nt(i.trim),0,.2,-.01);c.rotation.x=Math.PI/2-.12,t.add(c),t.add(Pt(new Qt(.47,18,12,0,Math.PI*2,Math.PI*.45,Math.PI*.3),Nt(2824720),0,0,-.05))}else if(i.head==="hijab"){const c=Pt(new Qt(.52,24,18,Math.PI/2+.85,Math.PI*2-1.7,0,Math.PI*.82),Nt(i.hat,{side:Ce}));t.add(c);const h=Pt(new Ie(.4,.62,.42,24,1,!0),Nt(i.hat,{side:Ce}),0,-.5,-.02);t.add(h);const u=Pt(new Bn(.43,.035,6,28,Math.PI*1.25),Nt(i.trim),0,.02,.2);u.rotation.z=-Math.PI*.125,u.scale.y=1.1,t.add(u)}else if(i.head==="cap"){t.add(Pt(new Qt(.48,20,12,0,Math.PI*2,0,Math.PI*.45),o,0,.02,0));const l=Pt(new Ie(.3,.3,.04,20,1,!1,-Math.PI/2,Math.PI),o,0,.18,.3);t.add(l),t.add(Pt(new Qt(.06,8,6),Nt(i.trim),0,.49,0))}else{const l=Pt(new Qt(.485,20,12,0,Math.PI*2,0,Math.PI*.42),o,0,.03,-.03);t.add(l);const c=Pt(new Bn(.44,.04,6,28),Nt(16731501),0,.16,0);c.rotation.x=Math.PI/2-.2,t.add(c)}return t}function L2(i=is[0]){const t=new ce,e=new ce;e.position.y=Gi.hipY,t.add(e);const n=Nt(i.shirt),s=Nt(i.pants),r=Nt(i.skin),a=Nt(i.shoes),o=new ce;e.add(o);const l=nn(.36,.42,n);l.position.y=.45,l.scale.set(1.05,1,.78),o.add(l);const c=Pt(new Ie(.37,.43,.32,20,1,!0),Nt(i.shirt,{side:Ce}),0,.02,0);c.scale.z=.8,o.add(c);const h=Pt(new Bn(.43,.035,6,24),Nt(i.trim),0,-.13,0);h.rotation.x=Math.PI/2,h.scale.y=.8,o.add(h),o.add(Pt(new Ie(.12,.14,.2,10),r,0,.92,0));const u=P2(i);u.position.y=1.38,o.add(u);const d={root:t,pelvis:e,torso:o,head:u,arms:{},legs:{}};for(const[p,g]of[["sl",-1],["sr",1]]){const _=new ce;_.position.set(.42*g,.78,0),o.add(_),_.add(Pt(new Qt(.14,10,8),n));const m=nn(.12,.28,n);m.position.y=-.24,_.add(m);const f=new ce;f.position.y=-.48,_.add(f);const y=nn(.1,.28,r);y.position.y=-.22,f.add(y);const v=Pt(new Qt(.13,12,10),r,0,-.48,0);f.add(v),d.arms[p]={shoulder:_,elbow:f,hand:v,s:g};const x=new ce;x.position.set(.19*g,0,0),e.add(x);const L=nn(.15,.3,s);L.position.y=-.27,x.add(L);const b=new ce;b.position.y=-.55,x.add(b);const A=nn(.13,.32,s);A.position.y=-.25,b.add(A);const R=Pt(new Qt(.16,12,8),a,0,-.55+.02,.07);R.scale.set(.95,.6,1.4),b.add(R),d.legs[p]={hip:x,knee:b,foot:R,s:g}}return t.userData.rig=d,t.userData.style=i,rn(t),Jh(t,{}),t}new D;function Jh(i,t){var s,r,a;const e=i.userData.rig;for(const o of["sl","sr"]){const l=((s=t.arms)==null?void 0:s[o])||{},c=e.arms[o],h=l.up??.12,u=l.fore??h;c.shoulder.rotation.set(-(l.fwd||0),l.yaw||0,c.s*h),c.elbow.rotation.set(-(l.foreFwd||0),0,c.s*(u-h));const d=((r=t.legs)==null?void 0:r[o])||{},p=e.legs[o];p.hip.rotation.set(-(d.lift||0),0,p.s*(d.spread||0)),p.knee.rotation.set(d.knee??d.lift??0,0,0)}e.torso.rotation.set(t.bend||0,t.twist||0,-(t.lean||0)),e.head.rotation.set(t.nod||0,t.yawHead||0,0);let n=0;if(t.autoGround!==!1){let o=0;for(const l of["sl","sr"]){const c=((a=t.legs)==null?void 0:a[l])||{},h=c.lift||0,u=c.knee??h,d=c.spread||0;o=Math.max(o,(Gi.thigh*Math.cos(h)+Gi.shin*Math.cos(h-u))*Math.cos(d))}n=Gi.thigh+Gi.shin-o}e.pelvis.position.y=Gi.hipY-n+(t.hop||0)}function Zg(i,t,e=new D){return i.userData.rig.arms[t].hand.getWorldPosition(e)}function Kg(i,t,e){var r,a,o,l;const n=(c=0,h=0)=>c+(h-c)*e,s={arms:{},legs:{},lean:n(i.lean,t.lean),bend:n(i.bend,t.bend),hop:n(i.hop,t.hop),twist:n(i.twist,t.twist)};for(const c of["sl","sr"]){const h=((r=i.arms)==null?void 0:r[c])||{},u=((a=t.arms)==null?void 0:a[c])||{},d=h.up??.12,p=u.up??.12;s.arms[c]={up:n(d,p),fore:n(h.fore??d,u.fore??p),fwd:n(h.fwd,u.fwd),foreFwd:n(h.foreFwd,u.foreFwd)};const g=((o=i.legs)==null?void 0:o[c])||{},_=((l=t.legs)==null?void 0:l[c])||{};s.legs[c]={spread:n(g.spread,_.spread),lift:n(g.lift,_.lift),knee:n(g.knee??g.lift,_.knee??_.lift)}}return s}const D2={stand:{arms:{sl:{up:.12},sr:{up:.12}}},wave:i=>({arms:{sl:{up:.12},sr:{up:2.5,fore:2.5+.5*Math.sin(i*8)}}}),cheer:i=>({arms:{sl:{up:2.7+.15*Math.sin(i*10)},sr:{up:2.7+.15*Math.sin(i*10+1)}},hop:Math.abs(Math.sin(i*6))*.25}),reachUp:{arms:{sl:{up:2.95},sr:{up:2.95}}},armsOut:i=>({arms:{sl:{up:Math.PI/2+.25*Math.sin(i*5),fore:Math.PI/2+.25*Math.sin(i*5)},sr:{up:Math.PI/2+.25*Math.cos(i*5)}}}),leanLeft:{lean:-.3,arms:{sl:{up:.3},sr:{up:2.8,fore:3.2}}},leanRight:{lean:.3,arms:{sr:{up:.3},sl:{up:2.8,fore:3.2}}},toeTouch:{bend:.9,arms:{sl:{up:.1,fwd:.6},sr:{up:.1,fwd:.6}},legs:{sl:{lift:.1,knee:.2},sr:{lift:.1,knee:.2}}},squat:i=>({bend:i*.35,arms:{sl:{up:.25,fwd:i*1.4},sr:{up:.25,fwd:i*1.4}},legs:{sl:{lift:i*1.3,knee:i*1.9,spread:i*.15},sr:{lift:i*1.3,knee:i*1.9,spread:i*.15}}}),jack:i=>({arms:{sl:{up:.12+i*2.75},sr:{up:.12+i*2.75}},legs:{sl:{spread:i*.38},sr:{spread:i*.38}},hop:Math.sin(i*Math.PI)*.3}),run:(i,t=1)=>{const e=Math.sin(i),n=Math.cos(i);return{arms:{sl:{up:.15,fwd:-e*.9*t,foreFwd:1.1*t},sr:{up:.15,fwd:e*.9*t,foreFwd:1.1*t}},legs:{sl:{lift:(.2+e*.8)*t,knee:(.4+Math.max(0,-n)*1.1+Math.max(0,e)*.6)*t},sr:{lift:(.2-e*.8)*t,knee:(.4+Math.max(0,n)*1.1+Math.max(0,-e)*.6)*t}},bend:.15*t,hop:Math.abs(n)*.12*t,autoGround:!0}},march:i=>{const t=Math.max(0,Math.sin(i)),e=Math.max(0,-Math.sin(i));return{arms:{sl:{up:.15,fwd:e*.8,foreFwd:.4},sr:{up:.15,fwd:t*.8,foreFwd:.4}},legs:{sl:{lift:t*1.2,knee:t*1.3},sr:{lift:e*1.2,knee:e*1.3}}}},ride:(i=0)=>({arms:{sl:{up:.25,fwd:.7,foreFwd:.6},sr:{up:.25,fwd:.7,foreFwd:.6}},legs:{sl:{lift:.55,knee:.9,spread:.75},sr:{lift:.55,knee:.9,spread:.75}},bend:.15+i*.1,autoGround:!1})};function I2(i,{color:t,hoof:e,len:n,x:s,zF:r,zB:a,y:o,r:l}){const c=[];for(const[h,u]of[[-s,r],[s,r],[-s,a],[s,a]]){const d=new ce;d.position.set(h,o,u);const p=nn(l,n*.5,Nt(t));p.position.y=-n*.3,d.add(p);const g=new ce;g.position.y=-n*.55,d.add(g);const _=nn(l*.8,n*.4,Nt(t));_.position.y=-n*.2,g.add(_),g.add(Pt(new Ie(l*.95,l*1.05,.14,10),Nt(e),0,-n*.45,0)),i.add(d),c.push({pivot:d,knee:g})}return c}function q2(i,t,e,n,s=.09){for(const r of[-1,1])i.add(Pt(new Qt(s,10,8),bn(1774090),t*r,e,n)),i.add(Pt(new Qt(s*.35,6,6),bn(16777215),t*r+.02*r,e+.03,n+s*.6))}function Qg(i=14263387){const t=new ce,e=Pt(new Qt(1,20,14),Nt(i),0,2.55,0);e.scale.set(.72,.62,1.35),t.add(e);const n=Pt(new Qt(.6,16,12),Nt(i),0,3.05,-.25);n.scale.set(1,.85,1.25),t.add(n);const s=nn(.25,.7,Nt(i));s.position.set(0,2.85,1.35),s.rotation.x=1,t.add(s);const r=nn(.22,.65,Nt(i));r.position.set(0,3.4,1.75),r.rotation.x=-.2,t.add(r);const a=new ce;a.position.set(0,3.85,1.95),t.add(a);const o=nn(.24,.4,Nt(i));o.rotation.x=Math.PI/2,a.add(o);const l=Pt(new Qt(.22,10,8),Nt(12749384),0,-.05,.38);a.add(l);for(const _ of[-1,1])a.add(Pt(new Qt(.08,8,6),Nt(i),.2*_,.2,-.15));q2(a,.19,.1,.12,.075);for(const _ of[-1,1]){const m=Pt(new Mi(.12,.02,.02),bn(1774090),.2*_,.19,.14);m.rotation.z=.3*_,a.add(m)}const c=new ce;c.position.set(0,2.6,-1.3);const h=nn(.07,.6,Nt(9067051));h.position.set(0,-.3,-.1),c.add(h),t.add(c);const u=Pt(new Ie(.66,.66,1.2,20,1,!0,-Math.PI*.5,Math.PI),Nt(8015800,{side:Ce}),0,3.05,.05);u.rotation.set(Math.PI/2,0,Math.PI/2),t.add(u);const d=[16731501,16763196,1483680];for(let _=0;_<6;_++){const m=_<3?-1:1,f=-.4+_%3*.45;t.add(Pt(new Qt(.08,8,6),Nt(d[_%3]),.68*m,2.45,f))}const p=Pt(new Qt(.42,14,8,0,Math.PI*2,0,Math.PI/2),Nt(15087942),0,3.5,.15);p.scale.set(1,.35,1),t.add(p);const g=I2(t,{color:i,hoof:9067051,len:2.25,x:.34,zF:.8,zB:-.8,y:2.3,r:.13});return t.userData={legs:g,tail:c,head:a,saddleY:3.62,saddleZ:.15,kind:"camel"},rn(t)}const t_=[16731501,16763196,4171488,8046415,10185727,16747069];function e_(i){const t=new ce,e=Pt(new Qt(.55,20,16),Nt(i,{noCache:!0}));e.scale.y=1.18,t.add(e),t.add(Pt(new Qt(.12,8,6),bn(16777215,{transparent:!0,opacity:.7}),-.2,.28,.42));const n=Pt(new qs(.09,.14,8),Nt(i),0,-.68,0);t.add(n);const s=Pt(new Ie(.008,.008,1.3,4),bn(16777215),0,-1.38,0);return t.add(s),t.userData.color=i,rn(t)}const U2=(()=>{const i=new fi;for(let e=0;e<10;e++){const n=e%2?.2:.46,s=Math.PI/2+e*Math.PI/5;e===0?i.moveTo(Math.cos(s)*n,Math.sin(s)*n):i.lineTo(Math.cos(s)*n,Math.sin(s)*n)}i.closePath();const t=new Jr(i,{depth:.12,bevelEnabled:!0,bevelThickness:.06,bevelSize:.05,bevelSegments:2});return t.center(),t})();function n_(i=16767291){const t=new ce,e=new ye(U2,Nt(i,{emissive:i,emissiveIntensity:.45,noCache:!0}));e.name="star",t.add(e);const n=jh(i,2,.7);return n.name="glow",t.add(n),t}function i_(i=16757051){const t=new ce,e=Nt(13211180),n=Nt(7031594,{emissive:i,emissiveIntensity:0,noCache:!0}),s=Pt(new Ie(.3,.24,.62,6),n);t.add(s);for(let c=0;c<6;c++){const h=c/6*Math.PI*2,u=Pt(new Mi(.04,.66,.04),e,Math.cos(h)*.29,0,Math.sin(h)*.29);u.rotation.z=Math.cos(h)*.09,u.rotation.x=-Math.sin(h)*.09,t.add(u)}const r=Pt(new qs(.42,.38,6),e,0,.5,0);t.add(r),t.add(Pt(new Qt(.07,8,6),e,0,.74,0));const a=Pt(new Bn(.1,.025,6,12),e,0,.86,0);t.add(a);const o=Pt(new qs(.26,.24,6),e,0,-.43,0);o.rotation.x=Math.PI,t.add(o),t.add(Pt(new Qt(.05,6,6),e,0,-.6,0));const l=jh(i,2.2,0);return t.add(l),t.userData={glassMat:n,glow:l,color:i,lit:!1},rn(t)}function s_(i,t,e=i.userData.color){i.userData.lit=t,i.userData.color=e,i.userData.glassMat.emissive.setHex(e),i.userData.glassMat.emissiveIntensity=1.1,i.userData.glassMat.color.setHex(16773824),i.userData.glow.material.color.setHex(e),i.userData.glow.material.opacity=.85}function r_(i=16774064,t=1){const e=.62*t,n=Math.sqrt(t*t-e*e/4),s=Math.atan2(n,e/2),r=new fi;r.absarc(0,0,t,s,Math.PI*2-s,!1),r.absarc(e,0,t,Math.PI+s,Math.PI-s,!0);const a=new ye(new tl(r,32),bn(i,{fog:!1}));return a.rotation.z=.5,a}function N2(i=1,t=16777215){const e=new ce,n=Nt(t);for(const[s,r,a]of[[0,0,1],[.9,-.1,.75],[-.9,-.1,.8],[.4,.45,.7],[-.4,.4,.65]])e.add(Pt(new Qt(a,14,10),n,s,r,0));return e.scale.setScalar(i),e}function a_(i=6){const t=new ce,e=Nt(10251066),n=7;for(let o=0;o<n;o++){const l=Pt(new Ie(.28-o*.015,.34-o*.015,i/n+.05,8),e,Math.sin(o*.35)*.35,(o+.5)*(i/n),0);l.rotation.z=-.06,t.add(l)}const s=new D(Math.sin(n*.35)*.35,i,0),r=Nt(4173385,{side:Ce});for(let o=0;o<7;o++){const l=Pt(new Qt(1,10,6,0,Math.PI*2,0,Math.PI/2),r);l.scale.set(2.2,.35,.55),l.position.copy(s),l.rotation.y=o/7*Math.PI*2,l.rotation.z=-.45,l.translateX(1.4),t.add(l)}const a=Nt(9059090);for(let o=0;o<3;o++){const l=o*2.1;for(let c=0;c<5;c++)t.add(Pt(new Qt(.11,6,5),a,s.x+Math.cos(l)*.4+c%2*.1,i-.35-c*.08,Math.sin(l)*.4+c%3*.06))}return rn(t)}function o_(i=16731501,t=3){const e=new ce;e.add(Pt(new Ie(.06,.06,t,6),Nt(16777215),0,t/2,0));const n=Pt(new Si(1,.65),Nt(i,{side:Ce}),.5,t-.35,0);return n.name="flag",e.add(n),rn(e)}function F2(i=1,t=5030746){const e=new ce,n=Nt(t);for(const[r,a,o]of[[0,.5,.8],[.8,.35,.6],[-.75,.35,.65]])e.add(Pt(new Qt(o,12,10),n,r,a,0));const s=[16740264,16769098,16777215];for(let r=0;r<4;r++)e.add(Pt(new Qt(.1,6,6),Nt(s[r%3]),-.8+r*.5,.55+r%2*.35,.6));return e.scale.setScalar(i),rn(e)}function l_(i="FINISH"){const t=new ce;for(const a of[-1,1])t.add(Pt(new Ie(.15,.15,4,8),Nt(16777215),3.2*a,2,0));const e=document.createElement("canvas");e.width=512,e.height=96;const n=e.getContext("2d");for(let a=0;a<16;a++)n.fillStyle=a%2?"#222":"#fff",n.fillRect(a*32,0,32,16),n.fillStyle=a%2?"#fff":"#222",n.fillRect(a*32,80,32,16);n.fillStyle="#ff4d6d",n.fillRect(0,16,512,64),n.fillStyle="#fff",n.font='bold 52px "Baloo 2", sans-serif',n.textAlign="center",n.textBaseline="middle",n.fillText(i,256,50);const s=new zs(e);s.colorSpace=be;const r=Pt(new Si(6.6,1.2),new ls({map:s,side:Ce}),0,3.7,0);return t.add(r),rn(t)}class O2 extends el{constructor(t){super(t)}load(t,e,n,s){const r=this,a=new _2(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){const l=r.parse(JSON.parse(o));e&&e(l)},n,s)}parse(t){return new B2(t)}}class B2{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],s=k2(t,e,this.data);for(let r=0,a=s.length;r<a;r++)n.push(...s[r].toShapes());return n}}function k2(i,t,e){const n=Array.from(i),s=t/e.resolution,r=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*s,a=[];let o=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)o=0,l-=r;else{const u=z2(h,s,o,l,e);o+=u.offsetX,a.push(u.path)}}return a}function z2(i,t,e,n,s){const r=s.glyphs[i]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+i+'" does not exists in font family '+s.familyName+".");return}const a=new S2;let o,l,c,h,u,d,p,g;if(r.o){const _=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,f=_.length;m<f;)switch(_[m++]){case"m":o=_[m++]*t+e,l=_[m++]*t+n,a.moveTo(o,l);break;case"l":o=_[m++]*t+e,l=_[m++]*t+n,a.lineTo(o,l);break;case"q":c=_[m++]*t+e,h=_[m++]*t+n,u=_[m++]*t+e,d=_[m++]*t+n,a.quadraticCurveTo(u,d,c,h);break;case"b":c=_[m++]*t+e,h=_[m++]*t+n,u=_[m++]*t+e,d=_[m++]*t+n,p=_[m++]*t+e,g=_[m++]*t+n,a.bezierCurveTo(u,d,p,g,c,h);break}}return{offsetX:r.ha*t,path:a}}class H2 extends Jr{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const s=n.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(s,e)}this.type="TextGeometry"}}const V2=JSON.parse('{"0":{"x_min":51,"x_max":779,"ha":828,"o":"m 415 -26 q 142 129 242 -26 q 51 476 51 271 q 141 825 51 683 q 415 984 242 984 q 687 825 585 984 q 779 476 779 682 q 688 131 779 271 q 415 -26 587 -26 m 415 137 q 529 242 485 137 q 568 477 568 338 q 530 713 568 619 q 415 821 488 821 q 303 718 344 821 q 262 477 262 616 q 301 237 262 337 q 415 137 341 137 "},"1":{"x_min":197.609375,"x_max":628,"ha":828,"o":"m 628 0 l 434 0 l 434 674 l 197 674 l 197 810 q 373 837 318 810 q 468 984 450 876 l 628 984 l 628 0 "},"2":{"x_min":64,"x_max":764,"ha":828,"o":"m 764 685 q 675 452 764 541 q 484 325 637 415 q 307 168 357 250 l 754 168 l 754 0 l 64 0 q 193 301 64 175 q 433 480 202 311 q 564 673 564 576 q 519 780 564 737 q 416 824 475 824 q 318 780 358 824 q 262 633 270 730 l 80 633 q 184 903 80 807 q 415 988 276 988 q 654 907 552 988 q 764 685 764 819 "},"3":{"x_min":61,"x_max":767,"ha":828,"o":"m 767 290 q 653 51 767 143 q 402 -32 548 -32 q 168 48 262 -32 q 61 300 61 140 l 250 300 q 298 173 250 219 q 405 132 343 132 q 514 169 471 132 q 563 282 563 211 q 491 405 563 369 q 343 432 439 432 l 343 568 q 472 592 425 568 q 534 701 534 626 q 493 793 534 758 q 398 829 453 829 q 306 789 344 829 q 268 669 268 749 l 80 669 q 182 909 80 823 q 410 986 274 986 q 633 916 540 986 q 735 719 735 840 q 703 608 735 656 q 615 522 672 561 q 727 427 687 486 q 767 290 767 369 "},"4":{"x_min":53,"x_max":775.21875,"ha":828,"o":"m 775 213 l 660 213 l 660 0 l 470 0 l 470 213 l 53 213 l 53 384 l 416 958 l 660 958 l 660 370 l 775 370 l 775 213 m 474 364 l 474 786 l 204 363 l 474 364 "},"5":{"x_min":59,"x_max":767,"ha":828,"o":"m 767 319 q 644 59 767 158 q 382 -29 533 -29 q 158 43 247 -29 q 59 264 59 123 l 252 264 q 295 165 252 201 q 400 129 339 129 q 512 172 466 129 q 564 308 564 220 q 514 437 564 387 q 398 488 464 488 q 329 472 361 488 q 271 420 297 456 l 93 428 l 157 958 l 722 958 l 722 790 l 295 790 l 271 593 q 348 635 306 621 q 431 649 389 649 q 663 551 560 649 q 767 319 767 453 "},"6":{"x_min":57,"x_max":771,"ha":828,"o":"m 744 734 l 544 734 q 500 802 533 776 q 425 828 466 828 q 315 769 359 828 q 264 571 264 701 q 451 638 343 638 q 691 537 602 638 q 771 315 771 449 q 683 79 771 176 q 420 -29 586 -29 q 134 123 227 -29 q 57 455 57 250 q 184 865 57 721 q 452 988 293 988 q 657 916 570 988 q 744 734 744 845 m 426 128 q 538 178 498 128 q 578 300 578 229 q 538 422 578 372 q 415 479 493 479 q 303 430 342 479 q 264 313 264 381 q 308 184 264 240 q 426 128 352 128 "},"7":{"x_min":65.28125,"x_max":762.5,"ha":828,"o":"m 762 808 q 521 435 604 626 q 409 0 438 244 l 205 0 q 313 422 227 234 q 548 789 387 583 l 65 789 l 65 958 l 762 958 l 762 808 "},"8":{"x_min":57,"x_max":770,"ha":828,"o":"m 625 516 q 733 416 697 477 q 770 284 770 355 q 675 69 770 161 q 415 -29 574 -29 q 145 65 244 -29 q 57 273 57 150 q 93 413 57 350 q 204 516 130 477 q 112 609 142 556 q 83 718 83 662 q 177 905 83 824 q 414 986 272 986 q 650 904 555 986 q 745 715 745 822 q 716 608 745 658 q 625 516 688 558 m 414 590 q 516 624 479 590 q 553 706 553 659 q 516 791 553 755 q 414 828 480 828 q 311 792 348 828 q 275 706 275 757 q 310 624 275 658 q 414 590 345 590 m 413 135 q 527 179 487 135 q 564 279 564 218 q 525 386 564 341 q 411 436 482 436 q 298 387 341 436 q 261 282 261 344 q 300 178 261 222 q 413 135 340 135 "},"9":{"x_min":58,"x_max":769,"ha":828,"o":"m 769 492 q 646 90 769 232 q 384 -33 539 -33 q 187 35 271 -33 q 83 224 98 107 l 282 224 q 323 154 286 182 q 404 127 359 127 q 513 182 471 127 q 563 384 563 248 q 475 335 532 355 q 372 315 418 315 q 137 416 224 315 q 58 642 58 507 q 144 877 58 781 q 407 984 239 984 q 694 827 602 984 q 769 492 769 699 m 416 476 q 525 521 488 476 q 563 632 563 566 q 521 764 563 709 q 403 826 474 826 q 297 773 337 826 q 258 649 258 720 q 295 530 258 577 q 416 476 339 476 "},"ο":{"x_min":0,"x_max":764,"ha":863,"o":"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 "},"S":{"x_min":0,"x_max":826,"ha":915,"o":"m 826 306 q 701 55 826 148 q 423 -29 587 -29 q 138 60 255 -29 q 0 318 13 154 l 208 318 q 288 192 216 238 q 437 152 352 152 q 559 181 506 152 q 623 282 623 217 q 466 411 623 372 q 176 487 197 478 q 18 719 18 557 q 136 958 18 869 q 399 1040 244 1040 q 670 956 561 1040 q 791 713 791 864 l 591 713 q 526 826 583 786 q 393 866 469 866 q 277 838 326 866 q 218 742 218 804 q 374 617 218 655 q 667 542 646 552 q 826 306 826 471 "},"¦":{"x_min":0,"x_max":143,"ha":240,"o":"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},"/":{"x_min":196.109375,"x_max":632.5625,"ha":828,"o":"m 632 1040 l 289 -128 l 196 -128 l 538 1040 l 632 1040 "},"Τ":{"x_min":-0.609375,"x_max":808,"ha":878,"o":"m 808 831 l 508 831 l 508 0 l 298 0 l 298 831 l 0 831 l 0 1013 l 808 1013 l 808 831 "},"y":{"x_min":0,"x_max":738.890625,"ha":828,"o":"m 738 749 l 444 -107 q 361 -238 413 -199 q 213 -277 308 -277 q 156 -275 176 -277 q 120 -271 131 -271 l 120 -110 q 147 -113 134 -111 q 179 -116 161 -116 q 247 -91 226 -116 q 269 -17 269 -67 q 206 173 269 -4 q 84 515 162 301 q 0 749 41 632 l 218 749 l 376 207 l 529 749 l 738 749 "},"Π":{"x_min":0,"x_max":809,"ha":922,"o":"m 809 0 l 598 0 l 598 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 809 1012 l 809 0 "},"ΐ":{"x_min":-162,"x_max":364,"ha":364,"o":"m 364 810 l 235 810 l 235 952 l 364 952 l 364 810 m 301 1064 l 86 810 l -12 810 l 123 1064 l 301 1064 m -33 810 l -162 810 l -162 952 l -33 952 l -33 810 m 200 0 l 0 0 l 0 748 l 200 748 l 200 0 "},"g":{"x_min":0,"x_max":724,"ha":839,"o":"m 724 48 q 637 -223 724 -142 q 357 -304 551 -304 q 140 -253 226 -304 q 23 -72 36 -192 l 243 -72 q 290 -127 255 -110 q 368 -144 324 -144 q 504 -82 470 -144 q 530 71 530 -38 l 530 105 q 441 25 496 51 q 319 0 386 0 q 79 115 166 0 q 0 377 0 219 q 77 647 0 534 q 317 775 166 775 q 534 656 456 775 l 534 748 l 724 748 l 724 48 m 368 167 q 492 237 447 167 q 530 382 530 297 q 490 529 530 466 q 364 603 444 603 q 240 532 284 603 q 201 386 201 471 q 240 239 201 300 q 368 167 286 167 "},"²":{"x_min":0,"x_max":463,"ha":560,"o":"m 463 791 q 365 627 463 706 q 151 483 258 555 l 455 483 l 455 382 l 0 382 q 84 565 0 488 q 244 672 97 576 q 331 784 331 727 q 299 850 331 824 q 228 876 268 876 q 159 848 187 876 q 132 762 132 820 l 10 762 q 78 924 10 866 q 228 976 137 976 q 392 925 322 976 q 463 791 463 874 "},"–":{"x_min":0,"x_max":704.171875,"ha":801,"o":"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},"Κ":{"x_min":0,"x_max":899.671875,"ha":969,"o":"m 899 0 l 646 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 596 l 603 1013 l 863 1013 l 460 603 l 899 0 "},"ƒ":{"x_min":-46,"x_max":440,"ha":525,"o":"m 440 609 l 316 609 l 149 -277 l -46 -277 l 121 609 l 14 609 l 14 749 l 121 749 q 159 949 121 894 q 344 1019 208 1019 l 440 1015 l 440 855 l 377 855 q 326 841 338 855 q 314 797 314 827 q 314 773 314 786 q 314 749 314 761 l 440 749 l 440 609 "},"e":{"x_min":0,"x_max":708,"ha":808,"o":"m 708 321 l 207 321 q 254 186 207 236 q 362 141 298 141 q 501 227 453 141 l 700 227 q 566 36 662 104 q 362 -26 477 -26 q 112 72 213 -26 q 0 369 0 182 q 95 683 0 573 q 358 793 191 793 q 619 677 531 793 q 708 321 708 561 m 501 453 q 460 571 501 531 q 353 612 420 612 q 247 570 287 612 q 207 453 207 529 l 501 453 "},"ό":{"x_min":0,"x_max":764,"ha":863,"o":"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 m 593 1039 l 391 823 l 293 823 l 415 1039 l 593 1039 "},"J":{"x_min":0,"x_max":649,"ha":760,"o":"m 649 294 q 573 48 649 125 q 327 -29 497 -29 q 61 82 136 -29 q 0 375 0 173 l 200 375 l 199 309 q 219 194 199 230 q 321 145 249 145 q 418 193 390 145 q 441 307 441 232 l 441 1013 l 649 1013 l 649 294 "},"»":{"x_min":-0.234375,"x_max":526,"ha":624,"o":"m 526 286 l 297 87 l 296 250 l 437 373 l 297 495 l 297 660 l 526 461 l 526 286 m 229 286 l 0 87 l 0 250 l 140 373 l 0 495 l 0 660 l 229 461 l 229 286 "},"©":{"x_min":3,"x_max":1007,"ha":1104,"o":"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 758 410 q 676 255 748 313 q 506 197 605 197 q 298 291 374 197 q 229 499 229 377 q 297 713 229 624 q 494 811 372 811 q 666 760 593 811 q 752 616 739 710 l 621 616 q 587 688 621 658 q 509 719 554 719 q 404 658 441 719 q 368 511 368 598 q 403 362 368 427 q 498 298 438 298 q 624 410 606 298 l 758 410 "},"ώ":{"x_min":0,"x_max":945,"ha":1051,"o":"m 566 528 l 372 528 l 372 323 q 372 298 372 311 q 373 271 372 285 q 360 183 373 211 q 292 142 342 142 q 219 222 243 142 q 203 365 203 279 q 241 565 203 461 q 334 748 273 650 l 130 748 q 36 552 68 650 q 0 337 0 444 q 69 96 0 204 q 276 -29 149 -29 q 390 0 337 -29 q 470 78 444 28 q 551 0 495 30 q 668 -29 608 -29 q 874 96 793 -29 q 945 337 945 205 q 910 547 945 444 q 814 748 876 650 l 610 748 q 703 565 671 650 q 742 365 742 462 q 718 189 742 237 q 651 142 694 142 q 577 190 597 142 q 565 289 565 221 l 565 323 l 566 528 m 718 1039 l 516 823 l 417 823 l 540 1039 l 718 1039 "},"^":{"x_min":197.21875,"x_max":630.5625,"ha":828,"o":"m 630 836 l 536 836 l 413 987 l 294 836 l 197 836 l 331 1090 l 493 1090 l 630 836 "},"«":{"x_min":0,"x_max":526.546875,"ha":624,"o":"m 526 87 l 297 286 l 297 461 l 526 660 l 526 495 l 385 373 l 526 250 l 526 87 m 229 87 l 0 286 l 0 461 l 229 660 l 229 495 l 88 373 l 229 250 l 229 87 "},"D":{"x_min":0,"x_max":864,"ha":968,"o":"m 400 1013 q 736 874 608 1013 q 864 523 864 735 q 717 146 864 293 q 340 0 570 0 l 0 0 l 0 1013 l 400 1013 m 398 837 l 206 837 l 206 182 l 372 182 q 584 276 507 182 q 657 504 657 365 q 594 727 657 632 q 398 837 522 837 "},"∙":{"x_min":0,"x_max":207,"ha":304,"o":"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},"ÿ":{"x_min":0,"x_max":47,"ha":125,"o":"m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 "},"w":{"x_min":0,"x_max":1056.953125,"ha":1150,"o":"m 1056 749 l 848 0 l 647 0 l 527 536 l 412 0 l 211 0 l 0 749 l 202 749 l 325 226 l 429 748 l 633 748 l 740 229 l 864 749 l 1056 749 "},"$":{"x_min":0,"x_max":704,"ha":800,"o":"m 682 693 l 495 693 q 468 782 491 749 q 391 831 441 824 l 391 579 q 633 462 562 534 q 704 259 704 389 q 616 57 704 136 q 391 -22 528 -22 l 391 -156 l 308 -156 l 308 -22 q 76 69 152 -7 q 0 300 0 147 l 183 300 q 215 191 190 230 q 308 128 245 143 l 308 414 q 84 505 157 432 q 12 700 12 578 q 89 902 12 824 q 308 981 166 981 l 308 1069 l 391 1069 l 391 981 q 595 905 521 981 q 682 693 670 829 m 308 599 l 308 831 q 228 796 256 831 q 200 712 200 762 q 225 642 200 668 q 308 599 251 617 m 391 128 q 476 174 449 140 q 504 258 504 207 q 391 388 504 354 l 391 128 "},"\\\\":{"x_min":-0.03125,"x_max":434.765625,"ha":532,"o":"m 434 -128 l 341 -128 l 0 1039 l 91 1040 l 434 -128 "},"µ":{"x_min":0,"x_max":647,"ha":754,"o":"m 647 0 l 478 0 l 478 68 q 412 9 448 30 q 330 -11 375 -11 q 261 3 296 -11 q 199 43 226 18 l 199 -277 l 0 -277 l 0 749 l 199 749 l 199 358 q 216 221 199 267 q 322 151 244 151 q 435 240 410 151 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},"Ι":{"x_min":42,"x_max":250,"ha":413,"o":"m 250 0 l 42 0 l 42 1013 l 250 1013 l 250 0 "},"Ύ":{"x_min":0,"x_max":1211.15625,"ha":1289,"o":"m 1211 1012 l 907 376 l 907 0 l 697 0 l 697 376 l 374 1012 l 583 1012 l 802 576 l 1001 1012 l 1211 1012 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"’":{"x_min":0,"x_max":192,"ha":289,"o":"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 "},"Ν":{"x_min":0,"x_max":833,"ha":946,"o":"m 833 0 l 617 0 l 206 696 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},"-":{"x_min":27.78125,"x_max":413.890625,"ha":525,"o":"m 413 279 l 27 279 l 27 468 l 413 468 l 413 279 "},"Q":{"x_min":0,"x_max":995.59375,"ha":1096,"o":"m 995 49 l 885 -70 l 762 42 q 641 -12 709 4 q 497 -29 572 -29 q 135 123 271 -29 q 0 504 0 276 q 131 881 0 731 q 497 1040 270 1040 q 859 883 719 1040 q 994 506 994 731 q 966 321 994 413 q 884 152 938 229 l 995 49 m 730 299 q 767 395 755 344 q 779 504 779 446 q 713 743 779 644 q 505 857 638 857 q 284 745 366 857 q 210 501 210 644 q 279 265 210 361 q 492 157 357 157 q 615 181 557 157 l 508 287 l 620 405 l 730 299 "},"ς":{"x_min":0,"x_max":731.78125,"ha":768,"o":"m 731 448 l 547 448 q 485 571 531 533 q 369 610 440 610 q 245 537 292 610 q 204 394 204 473 q 322 186 204 238 q 540 133 430 159 q 659 -15 659 98 q 643 -141 659 -80 q 595 -278 627 -202 l 423 -278 q 458 -186 448 -215 q 474 -88 474 -133 q 352 0 474 -27 q 123 80 181 38 q 0 382 0 170 q 98 660 0 549 q 367 777 202 777 q 622 683 513 777 q 731 448 731 589 "},"M":{"x_min":0,"x_max":1019,"ha":1135,"o":"m 1019 0 l 823 0 l 823 819 l 618 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1012 l 510 241 l 707 1013 l 1019 1013 l 1019 0 "},"Ψ":{"x_min":0,"x_max":995,"ha":1085,"o":"m 995 698 q 924 340 995 437 q 590 200 841 227 l 590 0 l 404 0 l 404 200 q 70 340 152 227 q 0 698 0 437 l 0 1013 l 188 1013 l 188 694 q 212 472 188 525 q 404 383 254 383 l 404 1013 l 590 1013 l 590 383 q 781 472 740 383 q 807 694 807 525 l 807 1013 l 995 1013 l 995 698 "},"C":{"x_min":0,"x_max":970.828125,"ha":1043,"o":"m 970 345 q 802 70 933 169 q 490 -29 672 -29 q 130 130 268 -29 q 0 506 0 281 q 134 885 0 737 q 502 1040 275 1040 q 802 939 668 1040 q 965 679 936 838 l 745 679 q 649 809 716 761 q 495 857 582 857 q 283 747 361 857 q 214 508 214 648 q 282 267 214 367 q 493 154 359 154 q 651 204 584 154 q 752 345 718 255 l 970 345 "},"!":{"x_min":0,"x_max":204,"ha":307,"o":"m 204 739 q 182 515 204 686 q 152 282 167 398 l 52 282 q 13 589 27 473 q 0 739 0 704 l 0 1013 l 204 1013 l 204 739 m 204 0 l 0 0 l 0 203 l 204 203 l 204 0 "},"{":{"x_min":0,"x_max":501.390625,"ha":599,"o":"m 501 -285 q 229 -209 301 -285 q 176 -35 176 -155 q 182 47 176 -8 q 189 126 189 103 q 156 245 189 209 q 0 294 112 294 l 0 438 q 154 485 111 438 q 189 603 189 522 q 186 666 189 636 q 176 783 176 772 q 231 945 176 894 q 501 1015 306 1015 l 501 872 q 370 833 408 872 q 340 737 340 801 q 342 677 340 705 q 353 569 353 579 q 326 451 353 496 q 207 366 291 393 q 327 289 294 346 q 353 164 353 246 q 348 79 353 132 q 344 17 344 26 q 372 -95 344 -58 q 501 -141 408 -141 l 501 -285 "},"X":{"x_min":0,"x_max":894.453125,"ha":999,"o":"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 659 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"#":{"x_min":0,"x_max":1019.453125,"ha":1117,"o":"m 1019 722 l 969 582 l 776 581 l 717 417 l 919 417 l 868 279 l 668 278 l 566 -6 l 413 -5 l 516 279 l 348 279 l 247 -6 l 94 -6 l 196 278 l 0 279 l 49 417 l 245 417 l 304 581 l 98 582 l 150 722 l 354 721 l 455 1006 l 606 1006 l 507 721 l 673 722 l 776 1006 l 927 1006 l 826 721 l 1019 722 m 627 581 l 454 581 l 394 417 l 567 417 l 627 581 "},"ι":{"x_min":42,"x_max":242,"ha":389,"o":"m 242 0 l 42 0 l 42 749 l 242 749 l 242 0 "},"Ά":{"x_min":0,"x_max":995.828125,"ha":1072,"o":"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 995 0 l 776 0 l 708 208 l 315 208 l 247 0 l 29 0 l 390 1012 l 629 1012 l 995 0 m 652 376 l 509 809 l 369 376 l 652 376 "},")":{"x_min":0,"x_max":389,"ha":486,"o":"m 389 357 q 319 14 389 187 q 145 -293 259 -134 l 0 -293 q 139 22 90 -142 q 189 358 189 187 q 139 689 189 525 q 0 1013 90 853 l 145 1013 q 319 703 258 857 q 389 357 389 528 "},"ε":{"x_min":16.671875,"x_max":652.78125,"ha":742,"o":"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 249 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 "},"Δ":{"x_min":0,"x_max":981.953125,"ha":1057,"o":"m 981 0 l 0 0 l 386 1013 l 594 1013 l 981 0 m 715 175 l 490 765 l 266 175 l 715 175 "},"}":{"x_min":0,"x_max":500,"ha":597,"o":"m 500 294 q 348 246 390 294 q 315 128 315 209 q 320 42 315 101 q 326 -48 326 -17 q 270 -214 326 -161 q 0 -285 196 -285 l 0 -141 q 126 -97 90 -141 q 154 8 154 -64 q 150 91 154 37 q 146 157 146 145 q 172 281 146 235 q 294 366 206 339 q 173 451 208 390 q 146 576 146 500 q 150 655 146 603 q 154 731 154 708 q 126 831 154 799 q 0 872 90 872 l 0 1015 q 270 944 196 1015 q 326 777 326 891 q 322 707 326 747 q 313 593 313 612 q 347 482 313 518 q 500 438 390 438 l 500 294 "},"‰":{"x_min":0,"x_max":1681,"ha":1775,"o":"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 m 1430 484 q 1618 404 1548 484 q 1681 228 1681 332 q 1618 51 1681 123 q 1429 -29 1548 -29 q 1241 50 1309 -29 q 1179 227 1179 122 q 1241 403 1179 331 q 1430 484 1311 484 m 1431 120 q 1509 151 1481 120 q 1537 226 1537 183 q 1511 299 1537 270 q 1431 333 1482 333 q 1352 301 1380 333 q 1325 226 1325 269 q 1352 151 1325 182 q 1431 120 1379 120 "},"a":{"x_min":0,"x_max":700,"ha":786,"o":"m 700 0 l 488 0 q 465 93 469 45 q 365 5 427 37 q 233 -26 303 -26 q 65 37 130 -26 q 0 205 0 101 q 120 409 0 355 q 343 452 168 431 q 465 522 465 468 q 424 588 465 565 q 337 611 384 611 q 250 581 285 611 q 215 503 215 552 l 26 503 q 113 707 26 633 q 328 775 194 775 q 538 723 444 775 q 657 554 657 659 l 657 137 q 666 73 657 101 q 700 33 675 45 l 700 0 m 465 297 l 465 367 q 299 322 358 340 q 193 217 193 287 q 223 150 193 174 q 298 127 254 127 q 417 175 370 127 q 465 297 465 224 "},"—":{"x_min":0,"x_max":941.671875,"ha":1039,"o":"m 941 297 l 0 297 l 0 450 l 941 450 l 941 297 "},"=":{"x_min":29.171875,"x_max":798.609375,"ha":828,"o":"m 798 502 l 29 502 l 29 635 l 798 635 l 798 502 m 798 204 l 29 204 l 29 339 l 798 339 l 798 204 "},"N":{"x_min":0,"x_max":833,"ha":949,"o":"m 833 0 l 617 0 l 206 695 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},"ρ":{"x_min":0,"x_max":722,"ha":810,"o":"m 364 -17 q 271 0 313 -17 q 194 48 230 16 l 194 -278 l 0 -278 l 0 370 q 87 656 0 548 q 358 775 183 775 q 626 655 524 775 q 722 372 722 541 q 621 95 722 208 q 364 -17 520 -17 m 360 607 q 237 529 280 607 q 201 377 201 463 q 234 229 201 292 q 355 147 277 147 q 467 210 419 147 q 515 374 515 273 q 471 537 515 468 q 360 607 428 607 "},"¯":{"x_min":0,"x_max":775,"ha":771,"o":"m 775 958 l 0 958 l 0 1111 l 775 1111 l 775 958 "},"Z":{"x_min":0,"x_max":804.171875,"ha":906,"o":"m 804 836 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 830 l 11 830 l 11 1013 l 804 1013 l 804 836 "},"u":{"x_min":0,"x_max":668,"ha":782,"o":"m 668 0 l 474 0 l 474 89 q 363 9 425 37 q 233 -19 301 -19 q 61 53 123 -19 q 0 239 0 126 l 0 749 l 199 749 l 199 296 q 225 193 199 233 q 316 146 257 146 q 424 193 380 146 q 469 304 469 240 l 469 749 l 668 749 l 668 0 "},"k":{"x_min":0,"x_max":688.890625,"ha":771,"o":"m 688 0 l 450 0 l 270 316 l 196 237 l 196 0 l 0 0 l 0 1013 l 196 1013 l 196 483 l 433 748 l 675 748 l 413 469 l 688 0 "},"Η":{"x_min":0,"x_max":837,"ha":950,"o":"m 837 0 l 627 0 l 627 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 627 635 l 627 1013 l 837 1013 l 837 0 "},"Α":{"x_min":0,"x_max":966.671875,"ha":1043,"o":"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 809 l 340 376 l 623 376 "},"s":{"x_min":0,"x_max":681,"ha":775,"o":"m 681 229 q 568 33 681 105 q 340 -29 471 -29 q 107 39 202 -29 q 0 245 0 114 l 201 245 q 252 155 201 189 q 358 128 295 128 q 436 144 401 128 q 482 205 482 166 q 363 284 482 255 q 143 348 181 329 q 25 533 25 408 q 129 716 25 647 q 340 778 220 778 q 554 710 465 778 q 658 522 643 643 l 463 522 q 419 596 458 570 q 327 622 380 622 q 255 606 290 622 q 221 556 221 590 q 339 473 221 506 q 561 404 528 420 q 681 229 681 344 "},"B":{"x_min":0,"x_max":835,"ha":938,"o":"m 674 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 765 630 797 686 q 674 547 734 575 m 438 621 q 538 646 495 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 438 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},"…":{"x_min":0,"x_max":819,"ha":963,"o":"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 m 512 0 l 306 0 l 306 207 l 512 207 l 512 0 m 819 0 l 613 0 l 613 207 l 819 207 l 819 0 "},"?":{"x_min":1,"x_max":687,"ha":785,"o":"m 687 734 q 621 563 687 634 q 501 454 560 508 q 436 293 436 386 l 251 293 l 251 391 q 363 557 251 462 q 476 724 476 653 q 432 827 476 788 q 332 866 389 866 q 238 827 275 866 q 195 699 195 781 l 1 699 q 110 955 1 861 q 352 1040 210 1040 q 582 963 489 1040 q 687 734 687 878 m 446 0 l 243 0 l 243 203 l 446 203 l 446 0 "},"H":{"x_min":0,"x_max":838,"ha":953,"o":"m 838 0 l 628 0 l 628 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 628 635 l 628 1013 l 838 1013 l 838 0 "},"ν":{"x_min":0,"x_max":740.28125,"ha":828,"o":"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},"c":{"x_min":0,"x_max":751.390625,"ha":828,"o":"m 751 282 q 625 58 725 142 q 384 -26 526 -26 q 107 84 215 -26 q 0 366 0 195 q 98 651 0 536 q 370 774 204 774 q 616 700 518 774 q 751 486 715 626 l 536 486 q 477 570 516 538 q 380 607 434 607 q 248 533 298 607 q 204 378 204 466 q 242 219 204 285 q 377 139 290 139 q 483 179 438 139 q 543 282 527 220 l 751 282 "},"¶":{"x_min":0,"x_max":566.671875,"ha":678,"o":"m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 "},"β":{"x_min":0,"x_max":703,"ha":789,"o":"m 510 539 q 651 429 600 501 q 703 262 703 357 q 617 53 703 136 q 404 -29 532 -29 q 199 51 279 -29 l 199 -278 l 0 -278 l 0 627 q 77 911 0 812 q 343 1021 163 1021 q 551 957 464 1021 q 649 769 649 886 q 613 638 649 697 q 510 539 577 579 m 344 136 q 452 181 408 136 q 497 291 497 227 q 435 409 497 369 q 299 444 381 444 l 299 600 q 407 634 363 600 q 452 731 452 669 q 417 820 452 784 q 329 857 382 857 q 217 775 246 857 q 199 622 199 725 l 199 393 q 221 226 199 284 q 344 136 254 136 "},"Μ":{"x_min":0,"x_max":1019,"ha":1132,"o":"m 1019 0 l 823 0 l 823 818 l 617 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1013 l 509 241 l 708 1013 l 1019 1013 l 1019 0 "},"Ό":{"x_min":0.15625,"x_max":1174,"ha":1271,"o":"m 676 -29 q 312 127 451 -29 q 179 505 179 277 q 311 883 179 733 q 676 1040 449 1040 q 1040 883 901 1040 q 1174 505 1174 733 q 1041 127 1174 277 q 676 -29 903 -29 m 676 154 q 890 266 811 154 q 961 506 961 366 q 891 745 961 648 q 676 857 812 857 q 462 747 541 857 q 392 506 392 648 q 461 266 392 365 q 676 154 540 154 m 314 1034 l 98 779 l 0 779 l 136 1034 l 314 1034 "},"Ή":{"x_min":0,"x_max":1248,"ha":1361,"o":"m 1248 0 l 1038 0 l 1038 450 l 621 450 l 621 0 l 411 0 l 411 1012 l 621 1012 l 621 635 l 1038 635 l 1038 1012 l 1248 1012 l 1248 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"•":{"x_min":-27.78125,"x_max":691.671875,"ha":775,"o":"m 691 508 q 588 252 691 358 q 331 147 486 147 q 77 251 183 147 q -27 508 -27 355 q 75 761 -27 655 q 331 868 179 868 q 585 763 479 868 q 691 508 691 658 "},"¥":{"x_min":0,"x_max":836,"ha":931,"o":"m 195 625 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 l 650 625 l 777 625 l 777 472 l 578 472 l 538 389 l 777 389 l 777 236 l 532 236 l 532 0 l 322 0 l 322 236 l 79 236 l 79 389 l 315 389 l 273 472 l 79 472 l 79 625 l 195 625 "},"(":{"x_min":0,"x_max":388.890625,"ha":486,"o":"m 388 -293 l 243 -293 q 70 14 130 -134 q 0 357 0 189 q 69 703 0 526 q 243 1013 129 856 l 388 1013 q 248 695 297 860 q 200 358 200 530 q 248 24 200 187 q 388 -293 297 -138 "},"U":{"x_min":0,"x_max":813,"ha":926,"o":"m 813 362 q 697 79 813 187 q 405 -29 582 -29 q 114 78 229 -29 q 0 362 0 186 l 0 1013 l 210 1013 l 210 387 q 260 226 210 291 q 408 154 315 154 q 554 226 500 154 q 603 387 603 291 l 603 1013 l 813 1013 l 813 362 "},"γ":{"x_min":0.0625,"x_max":729.234375,"ha":815,"o":"m 729 749 l 457 37 l 457 -278 l 257 -278 l 257 37 q 218 155 243 95 q 170 275 194 215 l 0 749 l 207 749 l 363 284 l 522 749 l 729 749 "},"α":{"x_min":-1,"x_max":722,"ha":835,"o":"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 "},"F":{"x_min":0,"x_max":706.953125,"ha":778,"o":"m 706 837 l 206 837 l 206 606 l 645 606 l 645 431 l 206 431 l 206 0 l 0 0 l 0 1013 l 706 1013 l 706 837 "},"­":{"x_min":0,"x_max":704.171875,"ha":801,"o":"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},":":{"x_min":0,"x_max":207,"ha":304,"o":"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 m 207 0 l 0 0 l 0 207 l 207 207 l 207 0 "},"Χ":{"x_min":0,"x_max":894.453125,"ha":978,"o":"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 660 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"*":{"x_min":115,"x_max":713,"ha":828,"o":"m 713 740 l 518 688 l 651 525 l 531 438 l 412 612 l 290 439 l 173 523 l 308 688 l 115 741 l 159 880 l 342 816 l 343 1013 l 482 1013 l 481 816 l 664 880 l 713 740 "},"†":{"x_min":0,"x_max":809,"ha":894,"o":"m 509 804 l 809 804 l 809 621 l 509 621 l 509 0 l 299 0 l 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 "},"°":{"x_min":-1,"x_max":363,"ha":460,"o":"m 181 808 q 46 862 94 808 q -1 992 -1 917 q 44 1118 -1 1066 q 181 1175 96 1175 q 317 1118 265 1175 q 363 991 363 1066 q 315 862 363 917 q 181 808 267 808 m 181 908 q 240 933 218 908 q 263 992 263 958 q 242 1051 263 1027 q 181 1075 221 1075 q 120 1050 142 1075 q 99 991 99 1026 q 120 933 99 958 q 181 908 142 908 "},"V":{"x_min":0,"x_max":895.828125,"ha":997,"o":"m 895 1013 l 550 0 l 347 0 l 0 1013 l 231 1013 l 447 256 l 666 1013 l 895 1013 "},"Ξ":{"x_min":0,"x_max":751.390625,"ha":800,"o":"m 733 826 l 5 826 l 5 1012 l 733 1012 l 733 826 m 681 432 l 65 432 l 65 617 l 681 617 l 681 432 m 751 0 l 0 0 l 0 183 l 751 183 l 751 0 "}," ":{"x_min":0,"x_max":0,"ha":853},"Ϋ":{"x_min":-0.21875,"x_max":836.171875,"ha":914,"o":"m 610 1046 l 454 1046 l 454 1215 l 610 1215 l 610 1046 m 369 1046 l 212 1046 l 212 1215 l 369 1215 l 369 1046 m 836 1012 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1012 l 208 1012 l 427 576 l 626 1012 l 836 1012 "},"”":{"x_min":0,"x_max":469,"ha":567,"o":"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 m 469 834 q 414 692 469 751 q 277 626 360 634 l 277 697 q 379 831 379 723 l 277 831 l 277 1013 l 469 1013 l 469 834 "},"@":{"x_min":0,"x_max":1276,"ha":1374,"o":"m 1115 -52 q 895 -170 1015 -130 q 647 -211 776 -211 q 158 -34 334 -211 q 0 360 0 123 q 179 810 0 621 q 698 1019 377 1019 q 1138 859 981 1019 q 1276 514 1276 720 q 1173 210 1276 335 q 884 75 1062 75 q 784 90 810 75 q 737 186 749 112 q 647 104 698 133 q 532 75 596 75 q 360 144 420 75 q 308 308 308 205 q 398 568 308 451 q 638 696 497 696 q 731 671 690 696 q 805 604 772 647 l 840 673 l 964 673 q 886 373 915 490 q 856 239 856 257 q 876 201 856 214 q 920 188 895 188 q 1084 284 1019 188 q 1150 511 1150 380 q 1051 779 1150 672 q 715 905 934 905 q 272 734 439 905 q 121 363 121 580 q 250 41 121 170 q 647 -103 394 -103 q 863 -67 751 -103 q 1061 26 975 -32 l 1115 -52 m 769 483 q 770 500 770 489 q 733 567 770 539 q 651 596 695 596 q 508 504 566 596 q 457 322 457 422 q 483 215 457 256 q 561 175 509 175 q 671 221 625 175 q 733 333 718 268 l 769 483 "},"Ί":{"x_min":0,"x_max":619,"ha":732,"o":"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 619 0 l 411 0 l 411 1012 l 619 1012 l 619 0 "},"i":{"x_min":14,"x_max":214,"ha":326,"o":"m 214 830 l 14 830 l 14 1013 l 214 1013 l 214 830 m 214 0 l 14 0 l 14 748 l 214 748 l 214 0 "},"Β":{"x_min":0,"x_max":835,"ha":961,"o":"m 675 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 766 630 797 686 q 675 547 734 575 m 439 621 q 539 646 496 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 439 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},"υ":{"x_min":0,"x_max":656,"ha":767,"o":"m 656 416 q 568 55 656 145 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 191 l 0 749 l 200 749 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 749 l 656 749 l 656 416 "},"]":{"x_min":0,"x_max":349,"ha":446,"o":"m 349 -300 l 0 -300 l 0 -154 l 163 -154 l 163 866 l 0 866 l 0 1013 l 349 1013 l 349 -300 "},"m":{"x_min":0,"x_max":1065,"ha":1174,"o":"m 1065 0 l 866 0 l 866 483 q 836 564 866 532 q 759 596 807 596 q 663 555 700 596 q 627 454 627 514 l 627 0 l 433 0 l 433 481 q 403 563 433 531 q 323 596 374 596 q 231 554 265 596 q 197 453 197 513 l 197 0 l 0 0 l 0 748 l 189 748 l 189 665 q 279 745 226 715 q 392 775 333 775 q 509 744 455 775 q 606 659 563 713 q 695 744 640 713 q 814 775 749 775 q 992 702 920 775 q 1065 523 1065 630 l 1065 0 "},"χ":{"x_min":0,"x_max":759.71875,"ha":847,"o":"m 759 -299 l 548 -299 l 379 66 l 215 -299 l 0 -299 l 261 233 l 13 749 l 230 749 l 379 400 l 527 749 l 738 749 l 500 238 l 759 -299 "},"ί":{"x_min":42,"x_max":371.171875,"ha":389,"o":"m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 m 371 1039 l 169 823 l 71 823 l 193 1039 l 371 1039 "},"Ζ":{"x_min":0,"x_max":804.171875,"ha":886,"o":"m 804 835 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 829 l 11 829 l 11 1012 l 804 1012 l 804 835 "},"R":{"x_min":0,"x_max":836.109375,"ha":947,"o":"m 836 0 l 608 0 q 588 53 596 20 q 581 144 581 86 q 581 179 581 162 q 581 215 581 197 q 553 345 581 306 q 428 393 518 393 l 208 393 l 208 0 l 0 0 l 0 1013 l 491 1013 q 720 944 630 1013 q 819 734 819 869 q 778 584 819 654 q 664 485 738 513 q 757 415 727 463 q 794 231 794 358 l 794 170 q 800 84 794 116 q 836 31 806 51 l 836 0 m 462 838 l 208 838 l 208 572 l 452 572 q 562 604 517 572 q 612 704 612 640 q 568 801 612 765 q 462 838 525 838 "},"o":{"x_min":0,"x_max":764,"ha":871,"o":"m 380 -26 q 105 86 211 -26 q 0 371 0 199 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 371 764 544 q 658 86 764 199 q 380 -26 552 -26 m 379 141 q 515 216 466 141 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 217 204 282 q 379 141 294 141 "},"K":{"x_min":0,"x_max":900,"ha":996,"o":"m 900 0 l 647 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 595 l 604 1013 l 863 1013 l 461 603 l 900 0 "},",":{"x_min":0,"x_max":206,"ha":303,"o":"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 "},"d":{"x_min":0,"x_max":722,"ha":836,"o":"m 722 0 l 530 0 l 530 101 q 303 -26 449 -26 q 72 103 155 -26 q 0 373 0 214 q 72 642 0 528 q 305 775 156 775 q 433 743 373 775 q 530 656 492 712 l 530 1013 l 722 1013 l 722 0 m 361 600 q 234 523 280 600 q 196 372 196 458 q 233 220 196 286 q 358 143 278 143 q 489 216 442 143 q 530 369 530 280 q 491 522 530 456 q 361 600 443 600 "},"¨":{"x_min":212,"x_max":609,"ha":933,"o":"m 609 1046 l 453 1046 l 453 1216 l 609 1216 l 609 1046 m 369 1046 l 212 1046 l 212 1216 l 369 1216 l 369 1046 "},"E":{"x_min":0,"x_max":761.109375,"ha":824,"o":"m 761 0 l 0 0 l 0 1013 l 734 1013 l 734 837 l 206 837 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},"Y":{"x_min":0,"x_max":836,"ha":931,"o":"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},"\\"":{"x_min":0,"x_max":357,"ha":454,"o":"m 357 604 l 225 604 l 225 988 l 357 988 l 357 604 m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"‹":{"x_min":35.984375,"x_max":791.671875,"ha":828,"o":"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"„":{"x_min":0,"x_max":483,"ha":588,"o":"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 m 483 5 q 427 -151 483 -88 q 277 -238 371 -213 l 277 -159 q 361 -100 334 -137 q 388 -2 388 -62 l 277 -2 l 277 205 l 483 205 l 483 5 "},"δ":{"x_min":6,"x_max":732,"ha":835,"o":"m 732 352 q 630 76 732 177 q 354 -25 529 -25 q 101 74 197 -25 q 6 333 6 174 q 89 581 6 480 q 323 690 178 690 q 66 864 201 787 l 66 1013 l 669 1013 l 669 856 l 348 856 q 532 729 461 789 q 673 566 625 651 q 732 352 732 465 m 419 551 q 259 496 321 551 q 198 344 198 441 q 238 208 198 267 q 357 140 283 140 q 484 203 437 140 q 526 344 526 260 q 499 466 526 410 q 419 551 473 521 "},"έ":{"x_min":16.671875,"x_max":652.78125,"ha":742,"o":"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 250 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},"ω":{"x_min":0,"x_max":945,"ha":1051,"o":"m 565 323 l 565 289 q 577 190 565 221 q 651 142 597 142 q 718 189 694 142 q 742 365 742 237 q 703 565 742 462 q 610 749 671 650 l 814 749 q 910 547 876 650 q 945 337 945 444 q 874 96 945 205 q 668 -29 793 -29 q 551 0 608 -29 q 470 78 495 30 q 390 0 444 28 q 276 -29 337 -29 q 69 96 149 -29 q 0 337 0 204 q 36 553 0 444 q 130 749 68 650 l 334 749 q 241 565 273 650 q 203 365 203 461 q 219 222 203 279 q 292 142 243 142 q 360 183 342 142 q 373 271 373 211 q 372 298 372 285 q 372 323 372 311 l 372 528 l 566 528 l 565 323 "},"´":{"x_min":0,"x_max":132,"ha":299,"o":"m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"±":{"x_min":29,"x_max":798,"ha":828,"o":"m 798 480 l 484 480 l 484 254 l 344 254 l 344 480 l 29 480 l 29 615 l 344 615 l 344 842 l 484 842 l 484 615 l 798 615 l 798 480 m 798 0 l 29 0 l 29 136 l 798 136 l 798 0 "},"|":{"x_min":0,"x_max":143,"ha":240,"o":"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},"ϋ":{"x_min":0,"x_max":656,"ha":767,"o":"m 535 810 l 406 810 l 406 952 l 535 952 l 535 810 m 271 810 l 142 810 l 142 952 l 271 952 l 271 810 m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 "},"§":{"x_min":0,"x_max":633,"ha":731,"o":"m 633 469 q 601 356 633 406 q 512 274 569 305 q 570 197 548 242 q 593 105 593 152 q 501 -76 593 -5 q 301 -142 416 -142 q 122 -82 193 -142 q 43 108 43 -15 l 212 108 q 251 27 220 53 q 321 1 283 1 q 389 23 360 1 q 419 83 419 46 q 310 194 419 139 q 108 297 111 295 q 0 476 0 372 q 33 584 0 537 q 120 659 62 626 q 72 720 91 686 q 53 790 53 755 q 133 978 53 908 q 312 1042 207 1042 q 483 984 412 1042 q 574 807 562 921 l 409 807 q 379 875 409 851 q 307 900 349 900 q 244 881 270 900 q 218 829 218 862 q 324 731 218 781 q 524 636 506 647 q 633 469 633 565 m 419 334 q 473 411 473 372 q 451 459 473 436 q 390 502 430 481 l 209 595 q 167 557 182 577 q 153 520 153 537 q 187 461 153 491 q 263 413 212 440 l 419 334 "},"b":{"x_min":0,"x_max":722,"ha":822,"o":"m 416 -26 q 289 6 346 -26 q 192 101 232 39 l 192 0 l 0 0 l 0 1013 l 192 1013 l 192 656 q 286 743 226 712 q 415 775 346 775 q 649 644 564 775 q 722 374 722 533 q 649 106 722 218 q 416 -26 565 -26 m 361 600 q 232 524 279 600 q 192 371 192 459 q 229 221 192 284 q 357 145 275 145 q 487 221 441 145 q 526 374 526 285 q 488 523 526 460 q 361 600 442 600 "},"q":{"x_min":0,"x_max":722,"ha":833,"o":"m 722 -298 l 530 -298 l 530 97 q 306 -25 449 -25 q 73 104 159 -25 q 0 372 0 216 q 72 643 0 529 q 305 775 156 775 q 430 742 371 775 q 530 654 488 709 l 530 750 l 722 750 l 722 -298 m 360 601 q 234 527 278 601 q 197 378 197 466 q 233 225 197 291 q 357 144 277 144 q 488 217 441 144 q 530 370 530 282 q 491 523 530 459 q 360 601 443 601 "},"Ω":{"x_min":-0.03125,"x_max":1008.53125,"ha":1108,"o":"m 1008 0 l 589 0 l 589 199 q 717 368 670 265 q 764 580 764 471 q 698 778 764 706 q 504 855 629 855 q 311 773 380 855 q 243 563 243 691 q 289 360 243 458 q 419 199 336 262 l 419 0 l 0 0 l 0 176 l 202 176 q 77 355 123 251 q 32 569 32 459 q 165 908 32 776 q 505 1040 298 1040 q 844 912 711 1040 q 977 578 977 785 q 931 362 977 467 q 805 176 886 256 l 1008 176 l 1008 0 "},"ύ":{"x_min":0,"x_max":656,"ha":767,"o":"m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 m 579 1039 l 378 823 l 279 823 l 401 1039 l 579 1039 "},"z":{"x_min":0,"x_max":663.890625,"ha":753,"o":"m 663 0 l 0 0 l 0 154 l 411 591 l 25 591 l 25 749 l 650 749 l 650 584 l 245 165 l 663 165 l 663 0 "},"™":{"x_min":0,"x_max":951,"ha":1063,"o":"m 405 921 l 255 921 l 255 506 l 149 506 l 149 921 l 0 921 l 0 1013 l 405 1013 l 405 921 m 951 506 l 852 506 l 852 916 l 750 506 l 643 506 l 539 915 l 539 506 l 442 506 l 442 1013 l 595 1012 l 695 625 l 794 1013 l 951 1013 l 951 506 "},"ή":{"x_min":0,"x_max":669,"ha":779,"o":"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 m 495 1039 l 293 823 l 195 823 l 317 1039 l 495 1039 "},"Θ":{"x_min":0,"x_max":993,"ha":1092,"o":"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 133 883 0 733 q 497 1040 272 1040 q 861 883 722 1040 q 993 505 993 733 q 861 127 993 277 q 497 -29 722 -29 m 497 154 q 711 266 631 154 q 782 506 782 367 q 712 746 782 648 q 497 858 634 858 q 281 746 361 858 q 211 506 211 648 q 280 266 211 365 q 497 154 359 154 m 676 430 l 316 430 l 316 593 l 676 593 l 676 430 "},"®":{"x_min":3,"x_max":1007,"ha":1104,"o":"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 782 190 l 639 190 q 627 225 632 202 q 623 285 623 248 l 623 326 q 603 411 623 384 q 527 439 584 439 l 388 439 l 388 190 l 257 190 l 257 829 l 566 829 q 709 787 654 829 q 772 654 772 740 q 746 559 772 604 q 675 497 720 514 q 735 451 714 483 q 756 341 756 419 l 756 299 q 760 244 756 265 q 782 212 764 223 l 782 190 m 546 718 l 388 718 l 388 552 l 541 552 q 612 572 584 552 q 641 635 641 593 q 614 695 641 672 q 546 718 587 718 "},"~":{"x_min":0,"x_max":851,"ha":949,"o":"m 851 968 q 795 750 851 831 q 599 656 730 656 q 406 744 506 656 q 259 832 305 832 q 162 775 193 832 q 139 656 139 730 l 0 656 q 58 871 0 787 q 251 968 124 968 q 442 879 341 968 q 596 791 544 791 q 691 849 663 791 q 712 968 712 892 l 851 968 "},"Ε":{"x_min":0,"x_max":761.546875,"ha":824,"o":"m 761 0 l 0 0 l 0 1012 l 735 1012 l 735 836 l 206 836 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},"³":{"x_min":0,"x_max":467,"ha":564,"o":"m 467 555 q 393 413 467 466 q 229 365 325 365 q 70 413 134 365 q 0 565 0 467 l 123 565 q 163 484 131 512 q 229 461 190 461 q 299 486 269 461 q 329 553 329 512 q 281 627 329 607 q 187 641 248 641 l 187 722 q 268 737 237 722 q 312 804 312 758 q 285 859 312 837 q 224 882 259 882 q 165 858 189 882 q 135 783 140 834 l 12 783 q 86 930 20 878 q 230 976 145 976 q 379 931 314 976 q 444 813 444 887 q 423 744 444 773 q 365 695 402 716 q 439 640 412 676 q 467 555 467 605 "},"[":{"x_min":0,"x_max":347.21875,"ha":444,"o":"m 347 -300 l 0 -300 l 0 1013 l 347 1013 l 347 866 l 188 866 l 188 -154 l 347 -154 l 347 -300 "},"L":{"x_min":0,"x_max":704.171875,"ha":763,"o":"m 704 0 l 0 0 l 0 1013 l 208 1013 l 208 186 l 704 186 l 704 0 "},"σ":{"x_min":0,"x_max":851.3125,"ha":940,"o":"m 851 594 l 712 594 q 761 369 761 485 q 658 83 761 191 q 379 -25 555 -25 q 104 87 208 -25 q 0 372 0 200 q 103 659 0 544 q 378 775 207 775 q 464 762 407 775 q 549 750 521 750 l 851 750 l 851 594 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 608 465 608 q 244 530 293 608 q 203 373 203 465 q 244 218 203 283 q 379 142 293 142 "},"ζ":{"x_min":0,"x_max":622,"ha":701,"o":"m 622 -32 q 604 -158 622 -98 q 551 -278 587 -218 l 373 -278 q 426 -180 406 -229 q 446 -80 446 -131 q 421 -22 446 -37 q 354 -8 397 -8 q 316 -9 341 -8 q 280 -11 291 -11 q 75 69 150 -11 q 0 283 0 150 q 87 596 0 437 q 291 856 162 730 l 47 856 l 47 1013 l 592 1013 l 592 904 q 317 660 422 800 q 197 318 197 497 q 306 141 197 169 q 510 123 408 131 q 622 -32 622 102 "},"θ":{"x_min":0,"x_max":714,"ha":817,"o":"m 357 1022 q 633 833 534 1022 q 714 486 714 679 q 634 148 714 288 q 354 -25 536 -25 q 79 147 175 -25 q 0 481 0 288 q 79 831 0 679 q 357 1022 177 1022 m 510 590 q 475 763 510 687 q 351 862 430 862 q 233 763 272 862 q 204 590 204 689 l 510 590 m 510 440 l 204 440 q 233 251 204 337 q 355 131 274 131 q 478 248 434 131 q 510 440 510 337 "},"Ο":{"x_min":0,"x_max":995,"ha":1092,"o":"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 132 883 0 733 q 497 1040 270 1040 q 861 883 722 1040 q 995 505 995 733 q 862 127 995 277 q 497 -29 724 -29 m 497 154 q 711 266 632 154 q 781 506 781 365 q 711 745 781 647 q 497 857 632 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},"Γ":{"x_min":0,"x_max":703.84375,"ha":742,"o":"m 703 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 703 1012 l 703 836 "}," ":{"x_min":0,"x_max":0,"ha":375},"%":{"x_min":0,"x_max":1111,"ha":1213,"o":"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 "},"P":{"x_min":0,"x_max":771,"ha":838,"o":"m 208 361 l 208 0 l 0 0 l 0 1013 l 450 1013 q 682 919 593 1013 q 771 682 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 421 837 l 208 837 l 208 544 l 410 544 q 525 579 480 544 q 571 683 571 615 q 527 792 571 747 q 421 837 484 837 "},"Έ":{"x_min":0,"x_max":1172.546875,"ha":1235,"o":"m 1172 0 l 411 0 l 411 1012 l 1146 1012 l 1146 836 l 617 836 l 617 621 l 1101 621 l 1101 446 l 617 446 l 617 186 l 1172 186 l 1172 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"Ώ":{"x_min":0.4375,"x_max":1189.546875,"ha":1289,"o":"m 1189 0 l 770 0 l 770 199 q 897 369 849 263 q 945 580 945 474 q 879 778 945 706 q 685 855 810 855 q 492 773 561 855 q 424 563 424 691 q 470 360 424 458 q 600 199 517 262 l 600 0 l 180 0 l 180 176 l 383 176 q 258 355 304 251 q 213 569 213 459 q 346 908 213 776 q 686 1040 479 1040 q 1025 912 892 1040 q 1158 578 1158 785 q 1112 362 1158 467 q 986 176 1067 256 l 1189 176 l 1189 0 m 314 1092 l 99 837 l 0 837 l 136 1092 l 314 1092 "},"_":{"x_min":61.109375,"x_max":766.671875,"ha":828,"o":"m 766 -333 l 61 -333 l 61 -190 l 766 -190 l 766 -333 "},"Ϊ":{"x_min":-56,"x_max":342,"ha":503,"o":"m 342 1046 l 186 1046 l 186 1215 l 342 1215 l 342 1046 m 101 1046 l -56 1046 l -56 1215 l 101 1215 l 101 1046 m 249 0 l 41 0 l 41 1012 l 249 1012 l 249 0 "},"+":{"x_min":43,"x_max":784,"ha":828,"o":"m 784 353 l 483 353 l 483 0 l 343 0 l 343 353 l 43 353 l 43 489 l 343 489 l 343 840 l 483 840 l 483 489 l 784 489 l 784 353 "},"½":{"x_min":0,"x_max":1090,"ha":1188,"o":"m 1090 380 q 992 230 1090 301 q 779 101 886 165 q 822 94 784 95 q 924 93 859 93 l 951 93 l 973 93 l 992 93 l 1009 93 q 1046 93 1027 93 q 1085 93 1066 93 l 1085 0 l 650 0 l 654 38 q 815 233 665 137 q 965 376 965 330 q 936 436 965 412 q 869 461 908 461 q 806 435 831 461 q 774 354 780 409 l 659 354 q 724 505 659 451 q 870 554 783 554 q 1024 506 958 554 q 1090 380 1090 459 m 868 998 l 268 -28 l 154 -27 l 757 999 l 868 998 m 272 422 l 147 422 l 147 799 l 0 799 l 0 875 q 126 900 91 875 q 170 973 162 926 l 272 973 l 272 422 "},"Ρ":{"x_min":0,"x_max":771,"ha":838,"o":"m 208 361 l 208 0 l 0 0 l 0 1012 l 450 1012 q 682 919 593 1012 q 771 681 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 422 836 l 209 836 l 209 544 l 410 544 q 525 579 480 544 q 571 683 571 614 q 527 791 571 747 q 422 836 484 836 "},"\'":{"x_min":0,"x_max":192,"ha":289,"o":"m 192 834 q 137 692 192 751 q 0 626 82 632 l 0 697 q 101 830 101 726 l 0 830 l 0 1013 l 192 1013 l 192 834 "},"ª":{"x_min":0,"x_max":350,"ha":393,"o":"m 350 625 l 245 625 q 237 648 241 636 q 233 672 233 661 q 117 611 192 611 q 33 643 66 611 q 0 727 0 675 q 116 846 0 828 q 233 886 233 864 q 211 919 233 907 q 168 931 190 931 q 108 877 108 931 l 14 877 q 56 977 14 942 q 165 1013 98 1013 q 270 987 224 1013 q 329 903 329 955 l 329 694 q 332 661 329 675 q 350 641 336 648 l 350 625 m 233 774 l 233 809 q 151 786 180 796 q 97 733 97 768 q 111 700 97 712 q 149 689 126 689 q 210 713 187 689 q 233 774 233 737 "},"΅":{"x_min":57,"x_max":584,"ha":753,"o":"m 584 810 l 455 810 l 455 952 l 584 952 l 584 810 m 521 1064 l 305 810 l 207 810 l 343 1064 l 521 1064 m 186 810 l 57 810 l 57 952 l 186 952 l 186 810 "},"T":{"x_min":0,"x_max":809,"ha":894,"o":"m 809 831 l 509 831 l 509 0 l 299 0 l 299 831 l 0 831 l 0 1013 l 809 1013 l 809 831 "},"Φ":{"x_min":0,"x_max":949,"ha":1032,"o":"m 566 0 l 385 0 l 385 121 q 111 230 222 121 q 0 508 0 340 q 112 775 0 669 q 385 892 219 875 l 385 1013 l 566 1013 l 566 892 q 836 776 732 875 q 949 507 949 671 q 838 231 949 341 q 566 121 728 121 l 566 0 m 566 285 q 701 352 650 285 q 753 508 753 419 q 703 658 753 597 q 566 729 653 720 l 566 285 m 385 285 l 385 729 q 245 661 297 717 q 193 516 193 604 q 246 356 193 427 q 385 285 300 285 "},"j":{"x_min":-45.828125,"x_max":242,"ha":361,"o":"m 242 830 l 42 830 l 42 1013 l 242 1013 l 242 830 m 242 -119 q 180 -267 242 -221 q 20 -308 127 -308 l -45 -308 l -45 -140 l -24 -140 q 25 -130 8 -140 q 42 -88 42 -120 l 42 748 l 242 748 l 242 -119 "},"Σ":{"x_min":0,"x_max":772.21875,"ha":849,"o":"m 772 0 l 0 0 l 0 140 l 368 526 l 18 862 l 18 1012 l 740 1012 l 740 836 l 315 836 l 619 523 l 298 175 l 772 175 l 772 0 "},"›":{"x_min":36.109375,"x_max":792,"ha":828,"o":"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},"<":{"x_min":35.984375,"x_max":791.671875,"ha":828,"o":"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"£":{"x_min":0,"x_max":716.546875,"ha":814,"o":"m 716 38 q 603 -9 658 5 q 502 -24 548 -24 q 398 -10 451 -24 q 239 25 266 25 q 161 12 200 25 q 77 -29 122 0 l 0 113 q 110 211 81 174 q 151 315 151 259 q 117 440 151 365 l 0 440 l 0 515 l 73 515 q 35 610 52 560 q 15 710 15 671 q 119 910 15 831 q 349 984 216 984 q 570 910 480 984 q 693 668 674 826 l 501 668 q 455 791 501 746 q 353 830 414 830 q 256 795 298 830 q 215 705 215 760 q 249 583 215 655 q 283 515 266 548 l 479 515 l 479 440 l 309 440 q 316 394 313 413 q 319 355 319 374 q 287 241 319 291 q 188 135 263 205 q 262 160 225 152 q 332 168 298 168 q 455 151 368 168 q 523 143 500 143 q 588 152 558 143 q 654 189 617 162 l 716 38 "},"t":{"x_min":0,"x_max":412,"ha":511,"o":"m 412 -6 q 349 -8 391 -6 q 287 -11 307 -11 q 137 38 177 -11 q 97 203 97 87 l 97 609 l 0 609 l 0 749 l 97 749 l 97 951 l 297 951 l 297 749 l 412 749 l 412 609 l 297 609 l 297 191 q 315 152 297 162 q 366 143 334 143 q 389 143 378 143 q 412 143 400 143 l 412 -6 "},"¬":{"x_min":0,"x_max":704,"ha":801,"o":"m 704 93 l 551 93 l 551 297 l 0 297 l 0 450 l 704 450 l 704 93 "},"λ":{"x_min":0,"x_max":701.390625,"ha":775,"o":"m 701 0 l 491 0 l 345 444 l 195 0 l 0 0 l 238 697 l 131 1013 l 334 1013 l 701 0 "},"W":{"x_min":0,"x_max":1291.671875,"ha":1399,"o":"m 1291 1013 l 1002 0 l 802 0 l 645 777 l 490 0 l 288 0 l 0 1013 l 215 1013 l 388 298 l 534 1012 l 757 1013 l 904 299 l 1076 1013 l 1291 1013 "},">":{"x_min":36.109375,"x_max":792,"ha":828,"o":"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},"v":{"x_min":0,"x_max":740.28125,"ha":828,"o":"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},"τ":{"x_min":0.28125,"x_max":618.734375,"ha":699,"o":"m 618 593 l 409 593 l 409 0 l 210 0 l 210 593 l 0 593 l 0 749 l 618 749 l 618 593 "},"ξ":{"x_min":0,"x_max":640,"ha":715,"o":"m 640 -14 q 619 -157 640 -84 q 563 -299 599 -230 l 399 -299 q 442 -194 433 -223 q 468 -85 468 -126 q 440 -25 468 -41 q 368 -10 412 -10 q 333 -11 355 -10 q 302 -13 311 -13 q 91 60 179 -13 q 0 259 0 138 q 56 426 0 354 q 201 530 109 493 q 106 594 144 553 q 65 699 65 642 q 94 787 65 747 q 169 856 123 828 l 22 856 l 22 1013 l 597 1013 l 597 856 l 497 857 q 345 840 398 857 q 257 736 257 812 q 366 614 257 642 q 552 602 416 602 l 552 446 l 513 446 q 313 425 379 446 q 199 284 199 389 q 312 162 199 184 q 524 136 418 148 q 640 -14 640 105 "},"&":{"x_min":-1,"x_max":910.109375,"ha":1007,"o":"m 910 -1 l 676 -1 l 607 83 q 291 -47 439 -47 q 50 100 135 -47 q -1 273 -1 190 q 51 431 -1 357 q 218 568 104 505 q 151 661 169 629 q 120 769 120 717 q 201 951 120 885 q 382 1013 276 1013 q 555 957 485 1013 q 635 789 635 894 q 584 644 635 709 q 468 539 548 597 l 615 359 q 664 527 654 440 l 844 527 q 725 223 824 359 l 910 -1 m 461 787 q 436 848 461 826 q 381 870 412 870 q 325 849 349 870 q 301 792 301 829 q 324 719 301 757 q 372 660 335 703 q 430 714 405 680 q 461 787 461 753 m 500 214 l 318 441 q 198 286 198 363 q 225 204 198 248 q 347 135 268 135 q 425 153 388 135 q 500 214 462 172 "},"Λ":{"x_min":0,"x_max":894.453125,"ha":974,"o":"m 894 0 l 666 0 l 447 757 l 225 0 l 0 0 l 344 1013 l 547 1013 l 894 0 "},"I":{"x_min":41,"x_max":249,"ha":365,"o":"m 249 0 l 41 0 l 41 1013 l 249 1013 l 249 0 "},"G":{"x_min":0,"x_max":971,"ha":1057,"o":"m 971 -1 l 829 -1 l 805 118 q 479 -29 670 -29 q 126 133 261 -29 q 0 509 0 286 q 130 884 0 737 q 493 1040 268 1040 q 790 948 659 1040 q 961 698 920 857 l 736 698 q 643 813 709 769 q 500 857 578 857 q 285 746 364 857 q 213 504 213 644 q 285 263 213 361 q 505 154 365 154 q 667 217 598 154 q 761 374 736 280 l 548 374 l 548 548 l 971 548 l 971 -1 "},"ΰ":{"x_min":0,"x_max":655,"ha":767,"o":"m 583 810 l 454 810 l 454 952 l 583 952 l 583 810 m 186 810 l 57 809 l 57 952 l 186 952 l 186 810 m 516 1039 l 315 823 l 216 823 l 338 1039 l 516 1039 m 655 417 q 567 55 655 146 q 326 -25 489 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 439 247 410 142 q 455 422 455 304 l 455 748 l 655 748 l 655 417 "},"`":{"x_min":0,"x_max":190,"ha":288,"o":"m 190 654 l 0 654 l 0 830 q 55 970 0 909 q 190 1040 110 1031 l 190 969 q 111 922 134 952 q 88 836 88 892 l 190 836 l 190 654 "},"·":{"x_min":0,"x_max":207,"ha":304,"o":"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},"Υ":{"x_min":-0.21875,"x_max":836.171875,"ha":914,"o":"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},"r":{"x_min":0,"x_max":431.9375,"ha":513,"o":"m 431 564 q 269 536 320 564 q 200 395 200 498 l 200 0 l 0 0 l 0 748 l 183 748 l 183 618 q 285 731 224 694 q 431 768 345 768 l 431 564 "},"x":{"x_min":0,"x_max":738.890625,"ha":826,"o":"m 738 0 l 504 0 l 366 238 l 230 0 l 0 0 l 252 382 l 11 749 l 238 749 l 372 522 l 502 749 l 725 749 l 488 384 l 738 0 "},"μ":{"x_min":0,"x_max":647,"ha":754,"o":"m 647 0 l 477 0 l 477 68 q 411 9 448 30 q 330 -11 374 -11 q 261 3 295 -11 q 199 43 226 18 l 199 -278 l 0 -278 l 0 749 l 199 749 l 199 358 q 216 222 199 268 q 322 152 244 152 q 435 240 410 152 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},"h":{"x_min":0,"x_max":669,"ha":782,"o":"m 669 0 l 469 0 l 469 390 q 449 526 469 472 q 353 607 420 607 q 248 554 295 607 q 201 441 201 501 l 201 0 l 0 0 l 0 1013 l 201 1013 l 201 665 q 303 743 245 715 q 425 772 362 772 q 609 684 542 772 q 669 484 669 605 l 669 0 "},".":{"x_min":0,"x_max":206,"ha":303,"o":"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 "},"φ":{"x_min":-1,"x_max":921,"ha":990,"o":"m 542 -278 l 367 -278 l 367 -22 q 99 92 200 -22 q -1 376 -1 206 q 72 627 -1 520 q 288 769 151 742 l 288 581 q 222 495 243 550 q 202 378 202 439 q 240 228 202 291 q 367 145 285 157 l 367 776 l 515 776 q 807 667 694 776 q 921 379 921 558 q 815 93 921 209 q 542 -22 709 -22 l 542 -278 m 542 145 q 672 225 625 145 q 713 381 713 291 q 671 536 713 470 q 542 611 624 611 l 542 145 "},";":{"x_min":0,"x_max":208,"ha":306,"o":"m 208 528 l 0 528 l 0 735 l 208 735 l 208 528 m 208 6 q 152 -151 208 -89 q 0 -238 96 -212 l 0 -158 q 87 -100 61 -136 q 113 0 113 -65 l 0 0 l 0 207 l 208 207 l 208 6 "},"f":{"x_min":0,"x_max":424,"ha":525,"o":"m 424 609 l 300 609 l 300 0 l 107 0 l 107 609 l 0 609 l 0 749 l 107 749 q 145 949 107 894 q 328 1019 193 1019 l 424 1015 l 424 855 l 362 855 q 312 841 324 855 q 300 797 300 827 q 300 773 300 786 q 300 749 300 761 l 424 749 l 424 609 "},"“":{"x_min":0,"x_max":468,"ha":567,"o":"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 m 468 631 l 278 631 l 278 807 q 333 947 278 885 q 468 1017 388 1010 l 468 947 q 366 813 366 921 l 468 813 l 468 631 "},"A":{"x_min":0,"x_max":966.671875,"ha":1069,"o":"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 810 l 340 376 l 623 376 "},"‘":{"x_min":0,"x_max":190,"ha":289,"o":"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 "},"ϊ":{"x_min":-55,"x_max":337,"ha":389,"o":"m 337 810 l 208 810 l 208 952 l 337 952 l 337 810 m 74 810 l -55 810 l -55 952 l 74 952 l 74 810 m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 "},"π":{"x_min":0.5,"x_max":838.890625,"ha":938,"o":"m 838 593 l 750 593 l 750 0 l 549 0 l 549 593 l 287 593 l 287 0 l 88 0 l 88 593 l 0 593 l 0 749 l 838 749 l 838 593 "},"ά":{"x_min":-1,"x_max":722,"ha":835,"o":"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},"O":{"x_min":0,"x_max":994,"ha":1094,"o":"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 131 883 0 733 q 497 1040 270 1040 q 860 883 721 1040 q 994 505 994 733 q 862 127 994 277 q 497 -29 723 -29 m 497 154 q 710 266 631 154 q 780 506 780 365 q 710 745 780 647 q 497 857 631 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},"n":{"x_min":0,"x_max":669,"ha":782,"o":"m 669 0 l 469 0 l 469 452 q 442 553 469 513 q 352 601 412 601 q 245 553 290 601 q 200 441 200 505 l 200 0 l 0 0 l 0 748 l 194 748 l 194 659 q 289 744 230 713 q 416 775 349 775 q 600 700 531 775 q 669 509 669 626 l 669 0 "},"l":{"x_min":41,"x_max":240,"ha":363,"o":"m 240 0 l 41 0 l 41 1013 l 240 1013 l 240 0 "},"¤":{"x_min":40.265625,"x_max":727.203125,"ha":825,"o":"m 727 792 l 594 659 q 620 552 620 609 q 598 459 620 504 l 725 331 l 620 224 l 491 352 q 382 331 443 331 q 273 352 322 331 l 144 224 l 40 330 l 167 459 q 147 552 147 501 q 172 658 147 608 l 40 794 l 147 898 l 283 759 q 383 776 330 776 q 482 759 434 776 l 620 898 l 727 792 m 383 644 q 308 617 334 644 q 283 551 283 590 q 309 489 283 517 q 381 462 335 462 q 456 488 430 462 q 482 554 482 515 q 455 616 482 588 q 383 644 429 644 "},"κ":{"x_min":0,"x_max":691.84375,"ha":779,"o":"m 691 0 l 479 0 l 284 343 l 196 252 l 196 0 l 0 0 l 0 749 l 196 749 l 196 490 l 440 749 l 677 749 l 416 479 l 691 0 "},"p":{"x_min":0,"x_max":722,"ha":824,"o":"m 415 -26 q 287 4 346 -26 q 192 92 228 34 l 192 -298 l 0 -298 l 0 750 l 192 750 l 192 647 q 289 740 230 706 q 416 775 347 775 q 649 645 566 775 q 722 375 722 534 q 649 106 722 218 q 415 -26 564 -26 m 363 603 q 232 529 278 603 q 192 375 192 465 q 230 222 192 286 q 360 146 276 146 q 487 221 441 146 q 526 371 526 285 q 488 523 526 458 q 363 603 443 603 "},"‡":{"x_min":0,"x_max":809,"ha":894,"o":"m 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 l 809 804 l 809 621 l 509 621 l 509 387 l 809 387 l 809 205 l 509 205 l 509 0 l 299 0 l 299 205 l 0 205 l 0 387 l 299 387 l 299 621 "},"ψ":{"x_min":0,"x_max":875,"ha":979,"o":"m 522 142 q 657 274 620 163 q 671 352 671 316 l 671 748 l 875 748 l 875 402 q 806 134 875 240 q 525 -22 719 -1 l 525 -278 l 349 -278 l 349 -22 q 65 135 152 -1 q 0 402 0 238 l 0 748 l 204 748 l 204 352 q 231 240 204 295 q 353 142 272 159 l 353 922 l 524 922 l 522 142 "},"η":{"x_min":0,"x_max":669,"ha":779,"o":"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 "}}'),G2="bold",W2=1216,X2=-100,Y2="normal",$2={yMin:-333,xMin:-162,yMax:1216,xMax:1681},j2=1e3,J2={postscript_name:"Helvetiker-Bold",version_string:"Version 1.00 2004 initial release",vendor_url:"http://www.magenta.gr",full_font_name:"Helvetiker Bold",font_family_name:"Helvetiker",copyright:"Copyright (c) Magenta ltd, 2004.",description:"",trademark:"",designer:"",designer_url:"",unique_font_identifier:"Magenta ltd:Helvetiker Bold:22-10-104",license_url:"http://www.ellak.gr/fonts/MgOpen/license.html",license_description:`Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r
\r
Permission is hereby granted, free of charge, to any person obtaining a copy of the fonts accompanying this license ("Fonts") and associated documentation files (the "Font Software"), to reproduce and distribute the Font Software, including without limitation the rights to use, copy, merge, publish, distribute, and/or sell copies of the Font Software, and to permit persons to whom the Font Software is furnished to do so, subject to the following conditions: \r
\r
The above copyright and this permission notice shall be included in all copies of one or more of the Font Software typefaces.\r
\r
The Font Software may be modified, altered, or added to, and in particular the designs of glyphs or characters in the Fonts may be modified and additional glyphs or characters may be added to the Fonts, only if the fonts are renamed to names not containing the word "MgOpen", or if the modifications are accepted for inclusion in the Font Software itself by the each appointed Administrator.\r
\r
This License becomes null and void to the extent applicable to Fonts or Font Software that has been modified and is distributed under the "MgOpen" name.\r
\r
The Font Software may be sold as part of a larger software package but no copy of one or more of the Font Software typefaces may be sold by itself. \r
\r
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.`,manufacturer_name:"Magenta ltd",font_sub_family_name:"Bold"},Z2=-334,K2="Helvetiker",Q2=1549,tg=50,eg={glyphs:V2,cssFontWeight:G2,ascender:W2,underlinePosition:X2,cssFontStyle:Y2,boundingBox:$2,resolution:j2,original_font_information:J2,descender:Z2,familyName:K2,lineHeight:Q2,underlineThickness:tg},ng="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),ui={A:{word:"Apple",emoji:"🍎"},B:{word:"Ball",emoji:"⚽"},C:{word:"Cat",emoji:"🐱"},D:{word:"Duck",emoji:"🦆"},E:{word:"Egg",emoji:"🥚"},F:{word:"Fish",emoji:"🐟"},G:{word:"Grapes",emoji:"🍇"},H:{word:"Hat",emoji:"👒"},I:{word:"Igloo",emoji:"🧊"},J:{word:"Juice",emoji:"🧃"},K:{word:"Kite",emoji:"🪁"},L:{word:"Lemon",emoji:"🍋"},M:{word:"Moon",emoji:"🌙"},N:{word:"Nest",emoji:"🪺"},O:{word:"Orange",emoji:"🍊"},P:{word:"Pear",emoji:"🍐"},Q:{word:"Queen bee",emoji:"🐝"},R:{word:"Rainbow",emoji:"🌈"},S:{word:"Sun",emoji:"☀️"},T:{word:"Tree",emoji:"🌳"},U:{word:"Umbrella",emoji:"☂️"},V:{word:"Van",emoji:"🚐"},W:{word:"Whale",emoji:"🐳"},X:{word:"Box",emoji:"📦",note:"X is at the END of box!"},Y:{word:"Yo-yo",emoji:"🪀"},Z:{word:"Zebra",emoji:"🦓"}},c_=[{word:"CAT",emoji:"🐱"},{word:"SUN",emoji:"☀️"},{word:"BEE",emoji:"🐝"},{word:"EGG",emoji:"🥚"},{word:"BUS",emoji:"🚌"},{word:"HAT",emoji:"👒"},{word:"DOG",emoji:"🐶"},{word:"COW",emoji:"🐮"},{word:"OWL",emoji:"🦉"},{word:"CUP",emoji:"🥤"},{word:"BOX",emoji:"📦"},{word:"KEY",emoji:"🔑"},{word:"FISH",emoji:"🐟"},{word:"MOON",emoji:"🌙"},{word:"STAR",emoji:"⭐"},{word:"FROG",emoji:"🐸"},{word:"CAKE",emoji:"🍰"},{word:"DUCK",emoji:"🦆"},{word:"TREE",emoji:"🌳"},{word:"KITE",emoji:"🪁"},{word:"LION",emoji:"🦁"},{word:"APPLE",emoji:"🍎"},{word:"HORSE",emoji:"🐴"},{word:"CAMEL",emoji:"🐫"}],h_=i=>{var t;return`${i} is for ${((t=ui[i])==null?void 0:t.word)||""}`},Tr=[16740264,4171488,16763196,8046415,10185727,16747069,1483680],Vs=i=>Tr[((i.charCodeAt(0)-65)%Tr.length+Tr.length)%Tr.length],ss=i=>`#${i.toString(16).padStart(6,"0")}`;function u_(i,t=Math.random){const e=[...i];for(let n=e.length-1;n>0;n--){const s=Math.floor(t()*(n+1));[e[n],e[s]]=[e[s],e[n]]}return e}const ig=new O2().parse(eg),Na=new Map;function sg(i,t=.35){const e=`${i}|${t}`;if(Na.has(e))return Na.get(e);const n=new H2(i,{font:ig,size:1,depth:t,curveSegments:6,bevelEnabled:!0,bevelThickness:.06,bevelSize:.045,bevelSegments:3});n.computeBoundingBox();const s=n.boundingBox,r=Math.max(.01,s.max.y-s.min.y);return n.translate(-(s.min.x+s.max.x)/2,-s.min.y,-(s.min.z+s.max.z)/2),n.scale(1/r,1/r,1),n.computeVertexNormals(),Na.set(e,n),n}const Fa=new Map;function rg(i,t=3876372){const e=`${i}|${t}`;if(!Fa.has(e)){const n=new ls({color:t,side:Fe});n.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <begin_vertex>",`vec3 transformed = position + normalize(normal) * ${i.toFixed(4)};`)},n.customProgramCacheKey=()=>`outline${i}`,Fa.set(e,n)}return Fa.get(e)}function ag(i,t=.035){const e=[];i.traverse(n=>{var s;n.isMesh&&((s=n.material)!=null&&s.isMeshToonMaterial)&&!n.material.transparent&&!n.userData.noOutline&&e.push(n)});for(const n of e){const s=new ye(n.geometry,rg(t));s.userData.noOutline=!0,s.raycast=()=>{},n.add(s)}return i}function og(i,{color:t=Vs(i),size:e=1,depth:n=.35,outline:s=!0}={}){const r=new ce,a=new ye(sg(i,n),Nt(t));return a.castShadow=!0,r.add(a),s&&ag(a,.03),r.scale.setScalar(e),r.userData={ch:i,mesh:a},r}const Oa=new Map;function d_(i,{fg:t=null,bg:e="#fffaf0",ring:n=null,sub:s="",px:r=256}={}){const a=JSON.stringify([i,t,e,n,s,r]);if(Oa.has(a))return Oa.get(a);const o=document.createElement("canvas");o.width=o.height=r;const l=o.getContext("2d"),c=t||ss(Vs(i.toUpperCase()));e&&(l.fillStyle=e,l.beginPath(),l.arc(r/2,r/2,r*.46,0,Math.PI*2),l.fill()),n&&(l.lineWidth=r*.05,l.strokeStyle=n,l.beginPath(),l.arc(r/2,r/2,r*.44,0,Math.PI*2),l.stroke()),l.textAlign="center",l.textBaseline="middle",l.font=`800 ${r*(s?.5:.62)}px 'Baloo 2', 'Arial Rounded MT Bold', system-ui, sans-serif`,l.lineWidth=r*.06,l.strokeStyle="#ffffff",l.lineJoin="round";const h=r*(s?.46:.54);l.strokeText(i,r/2,h),l.fillStyle=c,l.fillText(i,r/2,h),s&&(l.font=`700 ${r*.13}px 'Baloo 2', system-ui, sans-serif`,l.fillStyle="#4a2f12",l.fillText(s,r/2,r*.8));const u=new zs(o);return u.colorSpace=be,u.anisotropy=4,Oa.set(a,u),u}function f_(i,{color:t="#16a3a0",h:e=.6,fontPx:n=64}={}){const s=document.createElement("canvas"),r=s.getContext("2d"),a=new zs(s);a.colorSpace=be;const o=new Jo({map:a,transparent:!0,depthTest:!1,depthWrite:!1}),l=new Dh(o);l.renderOrder=10;const c=h=>{r.font=`800 ${n}px 'Baloo 2', system-ui, sans-serif`;const u=Math.ceil(r.measureText(h).width+n*1.2);s.width=u,s.height=Math.ceil(n*1.6),r.font=`800 ${n}px 'Baloo 2', system-ui, sans-serif`,r.fillStyle="#fffaf0",r.strokeStyle=t,r.lineWidth=7,r.beginPath(),r.roundRect(4,4,s.width-8,s.height-8,s.height/2-4),r.fill(),r.stroke(),r.fillStyle="#4a2f12",r.textAlign="center",r.textBaseline="middle",r.fillText(h,s.width/2,s.height/2+n*.06),a.needsUpdate=!0,l.scale.set(e*s.width/s.height,e,1)};return c(i),l.userData.set=c,l}const Uc=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;class lg{constructor(){this.scene=new Ph,this.camera=new Ge(40,1,.1,200),w2(this.scene,{sunPos:[-6,14,10],shadow:10});const t=new ye(new Ie(9,10,1,40),Nt(9425258));t.position.y=-.5,t.receiveShadow=!0,this.scene.add(t);for(const[n,s,r]of[[-5,-3,1.2],[4.5,-3.5,1],[-3.2,2.5,.8],[6,.5,.9]]){const a=F2(r);a.position.set(n,0,s),this.scene.add(rn(a))}this.clouds=[];for(const[n,s,r,a]of[[-7,6,-8,1.3],[5,7,-10,1.6],[11,5,-6,1]]){const o=N2(a);o.position.set(n,s,r),this.scene.add(o),this.clouds.push(o)}this.letters=[];const e="ABCDEFG".split("");e.forEach((n,s)=>{const r=rn(og(n,{size:.9})),a=-Math.PI*.95+s/(e.length-1)*Math.PI*.9;r.userData.home=new D(Math.cos(a)*3.6,0,Math.sin(a)*2.2+.5),r.position.copy(r.userData.home),r.userData.phase=s*.7,this.scene.add(r),this.letters.push(r)}),this.kid=null,this.setAvatar(0),this.t=0}setAvatar(t){this.kid&&this.scene.remove(this.kid),this.kid=rn(L2(is[t]||is[0])),this.kid.position.set(0,0,.3),this.scene.add(this.kid)}offset(t){return t>1.2?[.18,0]:null}onResize(t){const e=t<.8?1.6:t<1.2?1.25:1;this.camera.position.set(0,3.6*e,10.5*e),this.camera.lookAt(0,1.3,0)}update(t){this.t+=t;const e=Uc?.8:this.t;if(Jh(this.kid,D2.wave(e)),this.kid.rotation.y=Math.sin(e*.6)*.15,!Uc){for(const n of this.letters){const s=n.userData.phase;n.position.y=Math.abs(Math.sin(e*2.2+s))*.7,n.rotation.y=Math.sin(e*.9+s)*.5;const r=1-Math.max(0,.12-n.position.y)*1.2;n.scale.set(.9/r,.9*r,.9)}for(const n of this.clouds)n.position.x+=t*.3,n.position.x>14&&(n.position.x=-14)}}}const rs={read:{kind:"Quran",text:"Read! In the name of your Lord who created.",source:"Quran 96:1",meaning:"The very first word revealed of the Quran was “Read!”. Learning our letters is the first step to reading — and reading helps us learn about everything Allah created."},pen:{kind:"Quran",text:"Read! And your Lord is the Most Generous, who taught by the pen.",source:"Quran 96:3–4",meaning:"Allah taught people to write so we can share what we know. Every letter you write in the sky is practice for writing with a real pen!"},strong:{kind:"Hadith",text:"The strong believer is better and more beloved to Allah than the weak believer, while there is good in both.",source:"Sahih Muslim 2664",meaning:"Allah loves it when we are strong — in our minds and in our bodies! Moving and learning together makes us stronger in both."},hoopoe:{kind:"Quran",text:"He inspected the birds and said, “Why do I not see the hoopoe?”",source:"Quran 27:20",meaning:"The Quran tells of a clever hoopoe bird who flew far away and came back with important news. In this game you fly a little hoopoe too — and bring back letters!"},knowledge:{kind:"Hadith",text:"Whoever takes a path to seek knowledge, Allah makes easy for him a path to Paradise.",source:"Sahih Muslim 2699",meaning:"Every time you learn something new — even one letter — you are walking on a good path. Keep learning, a little every day!"},tree:{kind:"Hadith",text:"If a Muslim plants a tree, and a bird, a person or an animal eats from it, it counts as charity for him.",source:"Sahih al-Bukhari 2320",meaning:"Fruit trees are a gift that keeps giving! In this orchard we share the fruit — and we are kind to the busy bees who help the trees grow."},regular:{kind:"Hadith",text:"The most beloved deeds to Allah are those done regularly, even if they are small.",source:"Sahih al-Bukhari 6464 · Sahih Muslim 783",meaning:"A little bit every day is better than a lot once in a while."}},Ba=["MashaAllah!","Great job!","Super!","Well done!","Amazing!","Yes!","Brilliant!"],cg=(i=Math.floor(Math.random()*Ba.length))=>Ba[i%Ba.length],Zh="alphabetMoves.v1",ka={muted:!1,voice:!1,avatar:0,mode:null,stars:0,letters:{},best:{},bestStars:{},plays:{},streak:0,bestStreak:0,lastDay:-1,todayDay:-1,todayDone:[]};function hg(){try{const i=JSON.parse(localStorage.getItem(Zh)||"null");return i?{...structuredClone(ka),...i}:structuredClone(ka)}catch{return structuredClone(ka)}}function Yn(i){try{localStorage.setItem(Zh,JSON.stringify(i))}catch{}}function nl(i=new Date){return Math.floor(Date.UTC(i.getFullYear(),i.getMonth(),i.getDate())/864e5)}function ug(i,t=nl()){return i.lastDay>=t-1?i.streak:0}function dg(i,t,e,n,s=[],r=nl()){const a={streakUp:!1,newBest:!1,newLetters:[]};i.lastDay!==r&&(i.streak=i.lastDay===r-1?i.streak+1:1,i.lastDay=r,a.streakUp=!0),i.bestStreak=Math.max(i.bestStreak,i.streak),i.todayDay!==r&&(i.todayDay=r,i.todayDone=[]),i.todayDone.includes(t)||i.todayDone.push(t),e>(i.best[t]||0)&&(i.best[t]=e,a.newBest=!0),i.bestStars[t]=Math.max(i.bestStars[t]||0,n),i.plays[t]=(i.plays[t]||0)+1,i.stars+=n;for(const o of s)i.letters[o]||a.newLetters.push(o),i.letters[o]=(i.letters[o]||0)+1;return a}let ni=null,pi=null,Zr=!1;function il(){if(!ni){const i=window.AudioContext||window.webkitAudioContext;if(!i)return null;ni=new i,pi=ni.createGain(),pi.gain.value=Zr?0:.5,pi.connect(ni.destination)}return ni.state==="suspended"&&ni.resume(),ni}function fg(){il()}function Kh(i){Zr=i,pi&&(pi.gain.value=i?0:.5)}function we(i,t,{type:e="sine",vol:n=.3,slide:s=0,delay:r=0}={}){const a=il();if(!a||Zr)return;const o=a.currentTime+r,l=a.createOscillator(),c=a.createGain();l.type=e,l.frequency.setValueAtTime(i,o),s&&l.frequency.exponentialRampToValueAtTime(Math.max(40,i+s),o+t),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(n,o+.01),c.gain.exponentialRampToValueAtTime(1e-4,o+t),l.connect(c).connect(pi),l.start(o),l.stop(o+t+.05)}function Ar(i,{vol:t=.5,cutoff:e=900,type:n="lowpass",delay:s=0}={}){const r=il();if(!r||Zr)return;const a=Math.floor(r.sampleRate*i),o=r.createBuffer(1,a,r.sampleRate),l=o.getChannelData(0);for(let d=0;d<a;d++)l[d]=(Math.random()*2-1)*(1-d/a)**2;const c=r.createBufferSource();c.buffer=o;const h=r.createBiquadFilter();h.type=n,h.frequency.value=e;const u=r.createGain();u.gain.value=t,c.connect(h).connect(u).connect(pi),c.start(r.currentTime+s)}const kn={click:()=>we(660,.08,{type:"triangle",vol:.2}),rep:(i=0)=>we(520*2**(i%8/12),.12,{type:"triangle",vol:.25,slide:220}),step:i=>we(i?300:360,.05,{type:"square",vol:.05}),hoof:i=>{we(i?220:260,.06,{type:"triangle",vol:.18,slide:-80}),Ar(.05,{vol:.12,cutoff:1800})},draw:()=>we(180,.35,{type:"sawtooth",vol:.04,slide:120}),shoot:()=>{Ar(.25,{vol:.35,cutoff:3e3,type:"highpass"}),we(700,.2,{type:"sine",vol:.12,slide:-400})},pop:()=>{Ar(.12,{vol:.7,cutoff:2500}),we(900,.1,{type:"triangle",vol:.2,slide:600})},thunk:()=>we(160,.12,{type:"triangle",vol:.3,slide:-60}),miss:()=>we(420,.25,{type:"sine",vol:.12,slide:-200}),star:(i=0)=>[0,.06,.12].forEach((t,e)=>we(880*2**((i%5*2+e*4)/12),.18,{type:"sine",vol:.18,delay:t})),lantern:(i=0)=>{we(660*2**(i%12/12),.35,{type:"sine",vol:.22}),we(1320*2**(i%12/12),.25,{type:"sine",vol:.08,delay:.03})},checkpoint:()=>[659,784,988].forEach((i,t)=>we(i,.18,{type:"triangle",vol:.2,delay:t*.08})),beep:()=>we(660,.15,{type:"square",vol:.1}),go:()=>we(990,.4,{type:"square",vol:.12}),win:()=>[523,659,784,1047].forEach((i,t)=>we(i,.25,{type:"triangle",vol:.25,delay:t*.12})),finish:()=>[784,988,1175,1568].forEach((i,t)=>we(i,.3,{type:"sine",vol:.22,delay:t*.09})),gentle:()=>we(440,.2,{type:"sine",vol:.12,slide:60}),whoosh:()=>Ar(.4,{vol:.2,cutoff:1200})};let Qh=!1,Wi=null,Nc="",Fc=0;const Ur=[];function Oc(){var t,e;const i=((e=(t=window.speechSynthesis)==null?void 0:t.getVoices)==null?void 0:e.call(t))||[];Wi=i.find(n=>/en[-_](US|GB)/i.test(n.lang)&&/female|samantha|karen|google/i.test(n.name))||i.find(n=>/^en/i.test(n.lang))||null}typeof window<"u"&&window.speechSynthesis&&(Oc(),window.speechSynthesis.onvoiceschanged=Oc);function pg(i){var t;Qh=i,i&&((t=window.speechSynthesis)==null||t.cancel())}function Kr(i,{interrupt:t=!1,rate:e=.95,pitch:n=1.15}={}){Ur.push(i),Ur.length>30&&Ur.shift();const s=performance.now();if(i===Nc&&s-Fc<800)return;Nc=i,Fc=s;const r=window.speechSynthesis;if(Qh||!r||typeof SpeechSynthesisUtterance>"u")return;t&&r.cancel();const a=new SpeechSynthesisUtterance(i);Wi&&(a.voice=Wi),a.lang=(Wi==null?void 0:Wi.lang)||"en-US",a.rate=e,a.pitch=n,r.speak(a)}const mg="modulepreload",gg=function(i,t){return new URL(i,t).href},Bc={},ve=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){let a=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=a(e.map(h=>{if(h=gg(h,n),h in Bc)return;Bc[h]=!0;const u=h.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!n)for(let _=o.length-1;_>=0;_--){const m=o[_];if(m.href===h&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${d}`))return;const g=document.createElement("link");if(g.rel=u?"stylesheet":mg,u||(g.as="script"),g.crossOrigin="",g.href=h,c&&g.setAttribute("nonce",c),document.head.appendChild(g),u)return new Promise((_,m)=>{g.addEventListener("load",_),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};class kc{constructor(){this.y=null}f(t,e){return this.y=this.y===null?t:e*t+(1-e)*this.y,this.y}}const zc=(i,t)=>1/(1+1/(2*Math.PI*i*t));class Hc{constructor(t=1.5,e=3,n=1){Object.assign(this,{minCutoff:t,beta:e,dCutoff:n}),this.reset()}reset(){this.x=new kc,this.dx=new kc,this.tPrev=null,this.xPrev=0}filter(t,e){if(this.tPrev===null||e<=this.tPrev)return this.tPrev=e,this.xPrev=t,this.x.y=t,this.dx.y=0,t;const n=e-this.tPrev,s=this.dx.f((t-this.xPrev)/n,zc(this.dCutoff,n)),r=this.x.f(t,zc(this.minCutoff+this.beta*Math.abs(s),n));return this.tPrev=e,this.xPrev=t,r}}class za{constructor(t={}){this.opts={minCutoff:1.5,beta:3,...t},this.filters=Array.from({length:33},()=>[new Hc(this.opts.minCutoff,this.opts.beta),new Hc(this.opts.minCutoff,this.opts.beta)]),this.vis=new Array(33).fill(0),this.tLast=null}reset(){this.filters.forEach(([t,e])=>{t.reset(),e.reset()}),this.vis.fill(0),this.tLast=null}smooth(t,e){this.tLast!==null&&(e-this.tLast>.6||e<this.tLast)&&this.reset();const n=this.tLast===null;return this.tLast=e,t.map((s,r)=>{const a=s.visibility??1;return this.vis[r]=n?a:this.vis[r]*.5+a*.5,{x:this.filters[r][0].filter(s.x,e),y:this.filters[r][1].filter(s.y,e),z:s.z||0,visibility:this.vis[r]}})}}const _g=[[11,12],[11,13],[13,15],[12,14],[14,16],[11,23],[12,24],[23,24],[23,25],[25,27],[24,26],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32],[15,19],[16,20]];function Ha(i,t=4/3){const e=new Array(33);for(let n=0;n<33;n++){const s=i[n];if(!s){e[n]={x:0,y:0,v:0};continue}const r=s.x>-.03&&s.x<1.03&&s.y>-.03&&s.y<1.03,a=s.visibility??1;e[n]={x:(1-s.x)*t,y:s.y,v:r?a:Math.min(a,.1)}}return e}const mi=(i,t=.5)=>!!i&&i.v>=t,No=(i,t)=>({x:(i.x+t.x)/2,y:(i.y+t.y)/2,v:Math.min(i.v,t.v)}),xg=(i,t)=>Math.hypot(i.x-t.x,i.y-t.y),Os=(i,t=0,e=1)=>Math.max(t,Math.min(e,i));function Vc(i,t,e){const n=i.x-t.x,s=i.y-t.y,r=e.x-t.x,a=e.y-t.y,o=Math.hypot(n,s)*Math.hypot(r,a);return o<1e-9?180:Math.acos(Os((n*r+s*a)/o,-1,1))*180/Math.PI}function tu(i){return xg(No(i[11],i[12]),No(i[23],i[24]))}const eu=new URL("./",window.location.href).href,vg=new URL("mediapipe/wasm",eu).href,Vi=i=>new URL(`mediapipe/${i}`,eu).href;class Ye extends Error{constructor(t,e){super(e||t),this.code=t}}const Gc=i=>new Promise((t,e)=>setTimeout(()=>e(new Error("timeout")),i)),Va={pose:{cls:"PoseLandmarker",opts:()=>({baseOptions:{modelAssetPath:Vi("pose_landmarker_lite.task")},runningMode:"VIDEO",numPoses:1,minPoseDetectionConfidence:.5,minPosePresenceConfidence:.5,minTrackingConfidence:.5}),run:(i,t,e)=>i.detectForVideo(t,e)},pose2:{cls:"PoseLandmarker",opts:()=>({baseOptions:{modelAssetPath:Vi("pose_landmarker_lite.task")},runningMode:"VIDEO",numPoses:2,minPoseDetectionConfidence:.5,minPosePresenceConfidence:.5,minTrackingConfidence:.5}),run:(i,t,e)=>i.detectForVideo(t,e)},hand:{cls:"HandLandmarker",opts:()=>({baseOptions:{modelAssetPath:Vi("hand_landmarker.task")},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:.5}),run:(i,t,e)=>i.detectForVideo(t,e)},gesture:{cls:"GestureRecognizer",opts:()=>({baseOptions:{modelAssetPath:Vi("gesture_recognizer.task")},runningMode:"VIDEO",numHands:1,minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:.5}),run:(i,t,e)=>i.recognizeForVideo(t,e)},face:{cls:"FaceLandmarker",opts:()=>({baseOptions:{modelAssetPath:Vi("face_landmarker.task")},runningMode:"VIDEO",numFaces:1,outputFaceBlendshapes:!0,outputFacialTransformationMatrixes:!1,minFaceDetectionConfidence:.5,minFacePresenceConfidence:.5,minTrackingConfidence:.5}),run:(i,t,e)=>i.detectForVideo(t,e)},segment:{cls:"ImageSegmenter",opts:()=>({baseOptions:{modelAssetPath:Vi("selfie_segmenter.tflite")},runningMode:"VIDEO",outputConfidenceMasks:!0,outputCategoryMask:!1}),run:(i,t,e)=>i.segmentForVideo(t,e),preferCpu:!0}},nu=i=>i.map(t=>({x:1-t.x,y:t.y,z:t.z||0}));function yg(i){var n,s,r,a,o,l;const t=[],e=(i==null?void 0:i.landmarks)||[];for(let c=0;c<e.length;c++){const h=((s=(n=i.handedness)==null?void 0:n[c])==null?void 0:s[0])||((a=(r=i.handednesses)==null?void 0:r[c])==null?void 0:a[0]),d={side:h?h.categoryName==="Left"?"R":"L":c===0?"R":"L",score:(h==null?void 0:h.score)??1,pts:nu(e[c])},p=(l=(o=i.gestures)==null?void 0:o[c])==null?void 0:l[0];p&&(d.gesture=p.categoryName||"None",d.gestureScore=p.score),t.push(d)}return t}function Mg(i){const t=i[1],e=i[234],n=i[454],s=i[10],r=i[152],a=i[33],o=i[263],l=Math.min(e.x,n.x),c=Math.max(e.x,n.x),h=Math.max(1e-4,c-l),u=(t.x-(l+c)/2)/h*2,d=(a.y+o.y)/2,p=Math.max(1e-4,r.y-s.y),g=((t.y-d)/p-.18)*6,[_,m]=a.x<o.x?[a,o]:[o,a],f=Math.atan2(m.y-_.y,m.x-_.x);return{yaw:Math.max(-1.5,Math.min(1.5,u)),pitch:Math.max(-1.5,Math.min(1.5,g)),roll:f,center:{x:(l+c)/2,y:(s.y+r.y)/2},size:p}}function Sg(i){var s,r,a;const t=(s=i==null?void 0:i.faceLandmarks)==null?void 0:s[0];if(!t||t.length<468)return null;const e=nu(t),n={};for(const o of((a=(r=i.faceBlendshapes)==null?void 0:r[0])==null?void 0:a.categories)||[])n[o.categoryName]=o.score;return{pts:e,blend:n,...Mg(e)}}function Eg(i){var o;const t=(o=i==null?void 0:i.confidenceMasks)==null?void 0:o[0];if(!t)return null;const e=t.getAsFloat32Array(),n=t.width,s=t.height,r=new Float32Array(n*s);let a=0;for(let l=0;l<s;l++){const c=l*n;for(let h=0;h<n;h++){const u=e[c+(n-1-h)];r[c+h]=u,a+=u>.5?1:0}}return{mask:r,w:n,h:s,coverage:a/(n*s)}}class wg{constructor(){this.video=null,this.stream=null,this.camGen=0,this.granted=!1,this.fileset=null,this.tasks={},this.kind=null,this.poseSmoother=new za,this.peopleSmoothers=[new za,new za],this.peopleCx=[null,null],this.listeners=new Set,this.lastVideoTime=-1,this.lastDetect=0,this.latest=null,this.frames=0,this.detections=0,this.detectMs={},this.detectCount={},this.errors=[],this.source="none"}onFrame(t){return this.listeners.add(t),()=>this.listeners.delete(t)}get cameraOn(){return!!this.stream&&this.stream.active}hasTask(t){var e;return!!((e=this.tasks[t])!=null&&e.task)}use(t){this.kind=t,this.lastVideoTime=-1,this.poseSmoother.reset(),this.peopleSmoothers.forEach(e=>e.reset()),this.peopleCx=[null,null]}async startCamera(t){var s;if(!window.isSecureContext)throw new Ye("insecure");if(!((s=navigator.mediaDevices)!=null&&s.getUserMedia))throw new Ye("unsupported");this.video=t;const e=++this.camGen;this.releaseStream();let n;try{n=await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user",width:{ideal:640},height:{ideal:480}}})}catch(r){if(e!==this.camGen)throw new Ye("cancelled");const a=(r==null?void 0:r.name)||"";throw a==="NotAllowedError"||a==="SecurityError"||a==="PermissionDeniedError"?new Ye("denied",a):a==="NotFoundError"||a==="OverconstrainedError"||a==="DevicesNotFoundError"?new Ye("nocamera",a):a==="NotReadableError"||a==="TrackStartError"||a==="AbortError"?new Ye("busy",a):new Ye("unknown",a||String(r))}if(e!==this.camGen)throw n.getTracks().forEach(r=>r.stop()),new Ye("cancelled");if(this.stream=n,this.granted=!0,t.srcObject=n,t.muted=!0,t.playsInline=!0,await t.play().catch(()=>{}),t.videoWidth||await new Promise(r=>{t.addEventListener("loadeddata",()=>r(),{once:!0}),setTimeout(r,3e3)}),e!==this.camGen)throw new Ye("cancelled");this.source="camera"}stopCamera(){this.camGen++,this.releaseStream()}releaseStream(){var t;(t=this.stream)==null||t.getTracks().forEach(e=>e.stop()),this.stream=null,this.video&&(this.video.srcObject=null),this.source==="camera"&&(this.source="none")}async loadTask(t){var o;if((o=this.tasks[t])!=null&&o.task)return;const e=Va[t];if(!e)throw new Ye("model",`unknown task ${t}`);const n=await ve(()=>import("./vision_bundle-qr10_K4S.js"),[],import.meta.url);if(!this.fileset)try{this.fileset=await Promise.race([n.FilesetResolver.forVisionTasks(vg),Gc(3e4)])}catch(l){throw new Ye("model",`wasm: ${(l==null?void 0:l.message)||l}`)}const s=n[e.cls],r=l=>{const c=e.opts();return c.baseOptions.delegate=l,Promise.race([s.createFromOptions(this.fileset,c),Gc(3e4)])},a=e.preferCpu?["CPU","GPU"]:["GPU","CPU"];for(const l of a)try{this.tasks[t]={task:await r(l),delegate:l,create:r};return}catch(c){this.errors.push(`${t}/${l}: ${(c==null?void 0:c.message)||c}`)}throw new Ye("model",this.errors.join(" | "))}async warmUp(t=this.kind){var s;const e=this.video,n=this.tasks[t];if(!(!n||!e||e.readyState<2)){await new Promise(r=>setTimeout(r,30));try{const r=Va[t].run(n.task,e,performance.now());(s=r==null?void 0:r.close)==null||s.call(r)}catch(r){this.errors.push(`warmup ${t}: ${(r==null?void 0:r.message)||r}`)}this.lastDetect=performance.now()}}async _maybeSwitchToCpu(t){const e=this.tasks[t];if(!(!e||e.delegate!=="GPU"||e.triedCpu)){e.triedCpu=!0;try{const n=await e.create("CPU"),s=e.task;e.task=n,e.delegate="CPU",this.lastVideoTime=-1;try{s==null||s.close()}catch{}}catch(n){this.errors.push(`cpu-switch ${t}: ${(n==null?void 0:n.message)||n}`)}}}poll(t=performance.now()){var h;const e=this.kind,n=this.tasks[e];if(this.source!=="camera"||!n||!this.video)return;const s=this.video;if(s.readyState<2||!s.videoWidth||s.currentTime===this.lastVideoTime||t-this.lastDetect<28)return;this.lastVideoTime=s.currentTime,this.lastDetect=t;let r;const a=performance.now();try{r=Va[e].run(n.task,s,t)}catch(u){this.errors.push(`detect ${e}: ${(u==null?void 0:u.message)||u}`);return}const o=performance.now()-a;this.detectMs[e]=this.detectMs[e]===void 0?o:this.detectMs[e]*.8+o*.2,this.detectCount[e]=(this.detectCount[e]||0)+1,this.detectCount[e]>8&&this.detectMs[e]>120&&this._maybeSwitchToCpu(e);const l=s.videoWidth/s.videoHeight,c=this.fromResult(e,r,t/1e3,l);(h=r==null?void 0:r.close)==null||h.call(r),this.emit(c)}fromResult(t,e,n,s){var a;const r={kind:t,t:n,aspect:s};if(t==="pose"){const o=(a=e==null?void 0:e.landmarks)==null?void 0:a[0];if(o&&o.length>=33){const l=this.poseSmoother.smooth(o,n);r.raw=l,r.pts=Ha(l,s)}else r.raw=null,r.pts=null}else t==="pose2"?r.people=this.peopleFrom((e==null?void 0:e.landmarks)||[],n,s):t==="hand"||t==="gesture"?r.hands=yg(e):t==="face"?r.face=Sg(e):t==="segment"&&Object.assign(r,Eg(e)||{mask:null,w:0,h:0,coverage:0});return r}peopleFrom(t,e,n){const s=t.filter(o=>o&&o.length>=33).map(o=>({raw:o,cx:1-(o[23].x+o[24].x)/2}));s.sort((o,l)=>o.cx-l.cx);const r=this.peopleCx.map((o,l)=>o??(l?.75:.25));let a;if(s.length===2){const o=Math.abs(s[0].cx-r[0])+Math.abs(s[1].cx-r[1]);a=Math.abs(s[0].cx-r[1])+Math.abs(s[1].cx-r[0])<o?[1,0]:[0,1]}else a=s.map(o=>Math.abs(o.cx-r[0])<=Math.abs(o.cx-r[1])?0:1);return s.forEach((o,l)=>{this.peopleCx[a[l]]=o.cx}),s.map((o,l)=>{const c=this.peopleSmoothers[a[l]].smooth(o.raw,e);return{raw:c,pts:Ha(c,n),cx:o.cx}})}emit(t){this.frames++,sl(t)&&this.detections++,this.latest=t;for(const e of this.listeners)e(t);return t}inject(t){this.source="inject";const e={kind:this.kind,t:performance.now()/1e3,aspect:4/3,...t};return e.kind==="pose"&&e.raw&&!e.pts&&(e.raw=this.poseSmoother.smooth(e.raw,e.t),e.pts=Ha(e.raw,e.aspect)),e.kind==="pose2"&&e.raws&&!e.people&&(e.people=this.peopleFrom(e.raws,e.t,e.aspect)),this.emit(e)}status(){const t={};for(const[e,n]of Object.entries(this.tasks))t[e]={delegate:n.delegate,ms:this.detectMs[e]&&Math.round(this.detectMs[e])};return{source:this.source,kind:this.kind,cameraOn:this.cameraOn,tasks:t,frames:this.frames,detections:this.detections,errors:[...this.errors],video:this.video?{w:this.video.videoWidth,h:this.video.videoHeight}:null}}}function sl(i){var t,e;if(!i)return!1;switch(i.kind){case"pose":return!!i.pts;case"pose2":return!!((t=i.people)!=null&&t.length);case"hand":case"gesture":return!!((e=i.hands)!=null&&e.length);case"face":return!!i.face;case"segment":return(i.coverage||0)>.02;default:return!1}}const bg=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]],Tg=[10,338,297,332,284,251,389,356,454,323,361,288,397,365,379,378,400,377,152,148,176,149,150,136,172,58,132,93,234,127,162,21,54,103,67,109,10],Ag=[61,146,91,181,84,17,314,405,321,375,291,409,270,269,267,0,37,39,40,185,61];let ii=null;function Cg(i,t,{guide:e=null,ok:n=!1}={}){const s=Math.min(window.devicePixelRatio||1,2),r=Math.round(i.clientWidth*s),a=Math.round(i.clientHeight*s);if(!r||!a)return;(i.width!==r||i.height!==a)&&(i.width=r,i.height=a);const o=i.getContext("2d");o.clearRect(0,0,r,a);const l=(t==null?void 0:t.aspect)||4/3,c=r/a;let h=r,u=a,d=0,p=0;l>c?(h=a*l,d=(r-h)/2):(u=r/l,p=(a-u)/2);const g=f=>[d+f.x*h,p+f.y*u];if(e){o.save(),o.setLineDash([10*s,8*s]),o.lineWidth=3*s,o.strokeStyle=n?"rgba(90,220,120,0.95)":"rgba(255,255,255,0.85)",o.beginPath();const[f,y,v,x,L]=e==="face"?[.3,.12,.4,.7,.2]:e==="hands"?[.08,.08,.84,.84,.08]:e==="duo"?[.04,.05,.92,.9,.06]:[.28,.05,.44,.9,.08];e==="face"?o.ellipse(r*(f+v/2),a*(y+x/2),r*v/2,a*x/2,0,0,Math.PI*2):o.roundRect(r*f,a*y,r*v,a*x,L*Math.min(r,a)),o.stroke(),o.restore()}if(!t)return;o.lineCap="round",o.lineJoin="round";const _=Math.max(3,5*s*Math.min(1,r/400)),m=t.kind==="pose"&&t.raw?[t.raw]:t.kind==="pose2"?(t.people||[]).map(f=>f.raw):[];for(const f of m){const y=v=>g({x:1-v.x,y:v.y});o.lineWidth=_;for(const[v,x]of _g){const L=f[v],b=f[x];if((L.visibility??1)<.4||(b.visibility??1)<.4)continue;const A=v===11&&x===12||v===23&&x===24||v===11&&x===23||v===12&&x===24;o.strokeStyle=A?"rgba(255,255,255,0.95)":v%2?"rgba(255,201,60,0.95)":"rgba(22,200,196,0.95)";const[R,E]=y(L),[M,P]=y(b);o.beginPath(),o.moveTo(R,E),o.lineTo(M,P),o.stroke()}for(const v of[0,11,12,13,14,15,16,23,24,25,26,27,28]){const x=f[v];if((x.visibility??1)<.4)continue;const[L,b]=y(x);o.fillStyle=v===15||v===16?"#ff6fa8":"#fff",o.beginPath(),o.arc(L,b,(v===0?7:v===15||v===16?6:4)*s,0,Math.PI*2),o.fill()}}if((t.kind==="hand"||t.kind==="gesture")&&t.hands)for(const f of t.hands){o.lineWidth=_*.8,o.strokeStyle=f.side==="L"?"rgba(255,201,60,0.95)":"rgba(22,200,196,0.95)";for(const[x,L]of bg){const[b,A]=g(f.pts[x]),[R,E]=g(f.pts[L]);o.beginPath(),o.moveTo(b,A),o.lineTo(R,E),o.stroke()}const[y,v]=g(f.pts[8]);if(o.fillStyle="#ff6fa8",o.beginPath(),o.arc(y,v,7*s,0,Math.PI*2),o.fill(),f.gesture&&f.gesture!=="None"){const[x,L]=g(f.pts[0]);o.font=`${22*s}px system-ui`,o.textAlign="center",o.fillText(Rg[f.gesture]||"",x,L+26*s)}}else if(t.kind==="face"&&t.face){const f=t.face.pts;o.lineWidth=_*.7;for(const[y,v]of[[Tg,"rgba(255,255,255,0.9)"],[Ag,"rgba(255,111,168,0.95)"]])o.strokeStyle=v,o.beginPath(),y.forEach((x,L)=>{const[b,A]=g(f[x]);L?o.lineTo(b,A):o.moveTo(b,A)}),o.stroke();o.fillStyle="#ffc93c";for(const y of[33,263,1]){const[v,x]=g(f[y]);o.beginPath(),o.arc(v,x,4*s,0,Math.PI*2),o.fill()}}else if(t.kind==="segment"&&t.mask){const{mask:f,w:y,h:v}=t;ii||(ii=document.createElement("canvas")),(ii.width!==y||ii.height!==v)&&(ii.width=y,ii.height=v);const x=ii.getContext("2d"),L=x.createImageData(y,v);for(let b=0;b<y*v;b++){const A=f[b]>.5?150:0;L.data[b*4]=22,L.data[b*4+1]=200,L.data[b*4+2]=196,L.data[b*4+3]=A}x.putImageData(L,0,0),o.drawImage(ii,d,p,h,u)}}const Rg={Pointing_Up:"☝️",Open_Palm:"✋",Closed_Fist:"✊",Thumb_Up:"👍",Thumb_Down:"👎",Victory:"✌️",ILoveYou:"🤟"},Vr={squat:{downDepth:.2,upDepth:.08,kneeDown:125,kneeUp:150,minHold:.1,minGap:.45,baseAdapt:.04},jack:{armsUp:.3,legsOpen:.9,legsClosed:.72,minGap:.35},gate:{okAfter:.35,lostAfter:.8}},Wc={full:{core:[11,12,23,24],arms:[],legs:[25,26,27,28],th:.5},legs:{core:[11,12,23,24],arms:[],legs:[25,26],th:.5},upper:{core:[11,12,23,24],arms:[13,14,15,16],legs:[],th:.35},reach:{core:[11,12,23,24],arms:[13,14,15,16],legs:[25,26],th:.45}};function p_(i,t="full"){if(!i)return{ok:!1,reason:"nobody"};const e=Wc[t]||Wc.full,n=r=>mi(i[r],e.th),s=e.core.filter(n).length;return s===0?{ok:!1,reason:"nobody"}:s<e.core.length?{ok:!1,reason:"center"}:e.legs.every(n)?e.arms.every(n)?{ok:!0,reason:"ok"}:{ok:!1,reason:"arms"}:{ok:!1,reason:"feet"}}class Pg{constructor(){this.reset()}reset(){this.ok=!1,this.reason="nobody",this.since=null,this.pending=null,this.okSince=null}update(t,e){const n=t.ok;if(n||(this.reason=t.reason),n===this.ok)return this.pending=null,n&&(this.reason="ok"),this.ok;this.pending===null&&(this.pending=e);const s=n?Vr.gate.okAfter:Vr.gate.lostAfter;return e-this.pending>=s&&(this.ok=n,this.pending=null,this.okSince=n?e:null,n&&(this.reason="ok")),this.ok}}class m_{constructor(){this.reset()}reset(){this.count=0,this.state="up",this.base=null,this.depth=0,this.tPrev=null,this.lastRep=-1/0,this.downSince=null,this.maxDepth=0}update(t,e){if(![11,12,23,24,25,26].every(d=>mi(t[d],.4)))return null;const n=tu(t);if(n<.001)return null;const s=No(t[23],t[24]);let r,a=180;mi(t[27],.4)&&mi(t[28],.4)?(r=(Math.max(t[27].y,t[28].y)-s.y)/n,a=Math.max(Vc(t[23],t[25],t[27]),Vc(t[24],t[26],t[28]))):r=(Math.max(t[25].y,t[26].y)-s.y)/n*2.05;const o=this.tPrev===null?0:Os(e-this.tPrev,0,.5);this.tPrev=e;const l=Vr.squat;this.base===null||r>this.base?this.base=r:this.base-=(this.base-r)*Math.min(1,l.baseAdapt*o),this.depth=Os(1-r/this.base);const c=this.depth>l.downDepth||a<l.kneeDown,h=this.depth<l.upDepth&&a>l.kneeUp;let u=null;return this.state==="up"?c?(this.downSince??(this.downSince=e),e-this.downSince>=l.minHold&&(this.state="down",this.maxDepth=this.depth,u="down")):this.downSince=null:(this.maxDepth=Math.max(this.maxDepth,this.depth),h&&(this.state="up",this.downSince=null,e-this.lastRep>=l.minGap&&(this.count++,this.lastRep=e,u="rep"))),u}}class g_{constructor(){this.reset()}reset(){this.count=0,this.state="unknown",this.lastRep=-1/0,this.openness=0}update(t,e){if(![11,12,23,24,15,16].every(_=>mi(t[_],.35)))return null;const n=tu(t);if(n<.001)return null;const s=Vr.jack,r=(t[11].y+t[12].y)/2,a=(r-t[15].y)/n,o=(r-t[16].y)/n,l=Math.min(a,o)>s.armsUp,c=Math.max(a,o)<-.1,u=mi(t[27],.4)&&mi(t[28],.4)?Math.abs(t[27].x-t[28].x)/n:null,d=u===null||u>s.legsOpen,p=u===null||u<s.legsClosed;this.openness=Os((Math.min(a,o)+.9)/1.6)*.6+(u===null?.4:Os((u-.35)/.8)*.4);let g=null;return l&&d&&this.state!=="open"?(this.state==="closed"&&e-this.lastRep>=s.minGap&&(this.count++,this.lastRep=e,g="rep"),this.state="open"):c&&p&&this.state!=="closed"&&(this.state="closed"),g}}class __{constructor(t){this.ctx=t,this.scene=new Ph,this.camera=new Ge(50,1,.1,600),this.particles=new A2(this.scene),this.reps=0,this.score=0,this.done=!1,this.time=0,this.mode="nocam",this.learned=new Set}get vision(){return"pose"}get guide(){return"body"}get usesVision(){return this.mode!=="nocam"}get roundSeconds(){return 60}get controls(){return[]}reset(t){this.mode=t,this.reps=0,this.score=0,this.done=!1,this.time=0,this.learned=new Set,this.particles.clear()}presence(t){return sl(t)?{ok:!0,reason:"ok"}:{ok:!1,reason:`no_${this.vision}`}}onVision(){}onKey(){}onControl(){}onPointer(){}update(t){this.time+=t,this.particles.update(t)}hud(){return{reps:this.reps,repLabel:"moves",prompt:"",meter:null}}result(){return{reps:this.reps,stars:0,lines:[]}}starsFor(t,[e,n,s]){return t>=s?3:t>=n?2:t>=e?1:0}pop(t,e,n){const s=n||new D(0,3,0),r=this.ctx.world.toScreen(s,this.camera);this.ctx.popup(t,e,r.x,r.y)}displayToWorld(t,e,n=0,s=new D){const a=new D(t*2-1,-(e*2-1),.5).unproject(this.camera).sub(this.camera.position).normalize(),o=(n-this.camera.position.z)/a.z;return s.copy(this.camera.position).addScaledVector(a,o)}}const Fo={ok:"Great — we can see you! 👍",no_pose:"We can't see you yet — stand in front of the camera! 🙂",no_pose2:"We can't see you yet — stand side by side in front of the camera! 👫",no_hand:"Hold your hands up so the camera can see them ✋✋",no_gesture:"Hold one hand up — point your finger ☝️",no_face:"Look at the camera so we can see your face 🙂",no_segment:"Step in front of the camera 🙂",center:"Move into the middle so we can see you 🙂",feet:"Step back so we can see your whole body — feet too! 👣",arms:"Step back a little so we can see your arms 🙌",close:"Come a little closer 🙂",far:"Move back a little 🙂"},Tn=[{id:"skywriter",name:"Sky Writer",icon:"✍️",blurb:"Write giant letters in the air",color:"#9b6bff",category:"letters",tech:"☝️ Hand gestures",content:"pen",load:()=>ve(()=>import("./index-D7GAA0ry.js"),[],import.meta.url),how:{camera:["Point one finger up ☝️ to write. Open your hand ✋ to lift the pen.","Follow the dots to write the letter — make it BIG with your whole arm!","Thumbs up 👍 when you finish a letter!"],nocam:["Hold the mouse button (or your finger) and follow the dots.","Move the pen with the arrow keys and hold SPACE to write.","Draw the letter in the air with your arm too!"]}},{id:"wall",name:"Letter Wall",icon:"🧱",blurb:"Make letters with your body",color:"#ff8a3d",category:"letters",tech:"🧍 Body tracking",content:"strong",load:()=>ve(()=>import("./index-JXomGhWD.js"),__vite__mapDeps([0,1]),import.meta.url),how:{camera:["Stand back so the camera can see your whole body.","A wall with a letter-shaped hole is coming — make that letter with your body!","Hold the shape until the wall reaches you."],nocam:["Press the letter key (I, T, Y, X, L, A) or tap the letter button to make the shape.","Make the shape with your body too! 🙆"]}},{id:"hoopoe",name:"Hoopoe Flight",icon:"🐦",blurb:"Fly with your head, collect A to Z",color:"#3fa6e0",category:"letters",tech:"🙂 Face tracking",content:"hoopoe",load:()=>ve(()=>import("./index-Rf5FTUvt.js"),__vite__mapDeps([2,3]),import.meta.url),how:{camera:["Sit or stand so the camera sees your face.","Turn and tilt your head to steer the hoopoe to the next letter.","Open your mouth wide — “Aaah!” — to catch it!"],nocam:["Steer with the arrow keys or move the mouse.","Press SPACE (or tap) to catch the letter.","Move your head along with the bird! 🙂"]}},{id:"bubbles",name:"Bubble Body",icon:"🫧",blurb:"Pop letter bubbles with your body",color:"#16a3a0",category:"letters",tech:"🧍 Body shape",content:"knowledge",load:()=>ve(()=>import("./index-Da8RAKDF.js"),[],import.meta.url),how:{camera:["Stand back so the camera can see you.","Your shadow-buddy copies you. Pop the bubbles with the letter we call!","Jump, reach, wiggle — any part of you can pop a bubble!"],nocam:["Move the bubble wand with the mouse, a finger or the arrow keys.","Pop the bubbles with the letter we call!"]}},{id:"orchard",name:"Letter Orchard",icon:"🍎",blurb:"Slice fruit that starts with the letter",color:"#3fae49",category:"letters",tech:"🗡️ Finger blade",content:"tree",load:()=>ve(()=>import("./index-CpV-T6Ui.js"),__vite__mapDeps([4,3]),import.meta.url),how:{camera:["Hold up one hand and point your finger — it is your magic blade!","Swipe FAST through the fruit whose word starts with the letter. Big arm swipes!","Spare the bees 🐝 — never slice them!"],nocam:["Swipe with the mouse or your finger to slice.","Slice the fruit that starts with the letter. Spare the bees 🐝!"]}},{id:"jumprope",category:"active",name:"Jump the Rope",icon:"🦘",blurb:"Jump every time the rope swings round",color:"#ff8a3d",tech:"🧍 Body tracking",load:()=>ve(()=>import("./index-Co6yelDz.js"),__vite__mapDeps([5,1,3]),import.meta.url),how:{camera:["Stand back so the camera sees your whole body.","Two friends swing a big rope — JUMP each time it comes round your feet!","It gets faster… how many in a row can you do?"],nocam:["Press SPACE (or tap) to jump when the rope reaches your feet.","Jump for real too! 🦘"]}},{id:"goalie",category:"active",name:"Super Goalie",icon:"🥅",blurb:"Block the balls with hands, feet or head",color:"#3fa6e0",tech:"🧍 Body tracking",load:()=>ve(()=>import("./index-Bz8NiNqZ.js"),__vite__mapDeps([6,1]),import.meta.url),how:{camera:["Stand in the goal where the camera sees your whole body.","Balls fly at you — stop them with your hands, feet or head!","Reach high, stretch wide, and dive (safely)!"],nocam:["Move your gloves with the mouse, a finger or the arrow keys.","Stop the balls before they reach the net!"]}},{id:"freeze",category:"active",name:"Freeze Garden",icon:"🚦",blurb:"Move on green, freeze on red!",color:"#7ac74f",tech:"🧍 Body tracking",load:()=>ve(()=>import("./index-b3yEcUqa.js"),__vite__mapDeps([7,1,3]),import.meta.url),how:{camera:["When the lantern is GREEN, dance and wiggle — your moves make the flowers grow!","When it turns RED, FREEZE like a statue. Don't wake the sleepy cat!"],nocam:["Hold SPACE (or the button) to dance on green.","Let go on red — freeze!"]}},{id:"sled",category:"active",name:"Dune Sled",icon:"🛷",blurb:"Lean to steer, crouch to zoom, jump the rocks",color:"#e8a93a",tech:"🧍 Body tracking",load:()=>ve(()=>import("./index-CAPljgKO.js"),__vite__mapDeps([8,3]),import.meta.url),how:{camera:["Lean left and right to steer down the sand dunes.","Crouch low to go faster. JUMP to hop over rocks!"],nocam:["← → to steer, ↓ to crouch and zoom, SPACE to jump."]}},{id:"rocket",category:"active",name:"Rocket Power",icon:"🚀",blurb:"Squats fuel it, star jumps launch it",color:"#9b6bff",tech:"🧍 Body tracking",load:()=>ve(()=>import("./index-BOTPki5k.js"),__vite__mapDeps([9,1,3]),import.meta.url),how:{camera:["Do squats to pump fuel into the rocket.","Then star jumps to fire the engines — blast off to the moon!"],nocam:["Press S to squat, Space to star jump (or the buttons).","In space, steer with ← → to catch stars. Do the moves for real too! 💪"]}},{id:"painter",category:"active",name:"Body Painter",icon:"🎨",blurb:"Paint the whole wall with your body",color:"#ff6fa8",tech:"🧍 Body shape",load:()=>ve(()=>import("./index-DR6KQYA6.js"),[],import.meta.url),how:{camera:["Wherever you move, paint splashes onto the garden wall!","Stretch, jump and sway to cover EVERY bit before time runs out."],nocam:["Paint with the mouse or your finger — cover the whole wall!"]}},{id:"keepup",category:"active",name:"Balloon Keep-Up",icon:"🎈",blurb:"Don't let the balloons touch the ground",color:"#ff4d6d",tech:"🧍 Body shape",load:()=>ve(()=>import("./index-CpjNDU0V.js"),[],import.meta.url),how:{camera:["Tap the balloons back up with any part of you — hands, head, knees!","Don't let them touch the ground. More balloons join as you go!"],nocam:["Bop the balloons up with the mouse or your finger."]}},{id:"puffboat",category:"calm",name:"Puff Boat",icon:"⛵",blurb:"Puff your cheeks to blow the sail",color:"#16a3a0",tech:"🙂 Face tracking",load:()=>ve(()=>import("./index-DB4-TIj8.js"),__vite__mapDeps([10,3]),import.meta.url),how:{camera:["Puff your cheeks (or blow) to fill the sail with wind.","Tilt your head to steer around the islands and collect shells."],nocam:["Hold SPACE to blow, ← → to steer."]}},{id:"funnyface",category:"calm",name:"Funny Face Copy",icon:"🤪",blurb:"Copy the silly faces",color:"#ffb13b",tech:"🙂 Face tracking",load:()=>ve(()=>import("./index-ynmzmJ7B.js"),[],import.meta.url),how:{camera:["Copy the cartoon's face: big smile, surprised, wink, puffy cheeks, eyebrows up…","Hold it — SNAP! — a funny sticker for your album."],nocam:["Press the matching face button before the timer runs out."]}},{id:"beecatch",category:"calm",name:"Bee Catcher",icon:"🐝",blurb:"Gently catch bees and bring them home",color:"#e0a400",tech:"✊ Hand gestures",load:()=>ve(()=>import("./index-BeZ6CrqM.js"),__vite__mapDeps([11,3]),import.meta.url),how:{camera:["Move your open hand ✋ to a buzzing bee, then close it gently ✊ to catch it.","Carry it to the hive and open your hand ✋ to let it go home."],nocam:["Move with the mouse or a finger. Hold the button (or SPACE) to catch, let go at the hive."]}},{id:"rps",category:"calm",name:"Rock Paper Scissors",icon:"✌️",blurb:"Rock, paper, scissors with Bolt the robot",color:"#8e6cf0",tech:"✊✋✌️ Hand gestures",load:()=>ve(()=>import("./index-Hhg8Uxqm.js"),[],import.meta.url),how:{camera:["“Rock, paper, scissors — SHOOT!” Show ✊, ✋ or ✌️ to the camera on SHOOT.","Watch for “Beat me!” and “Copy me!” rounds — and wave ✋ to recharge Bolt."],nocam:["Pick ✊ ✋ ✌️ with the buttons or keys R, P, S on SHOOT."]}},{id:"siblingrace",category:"family",name:"Sibling Race",icon:"🏃",blurb:"Two players race side by side",color:"#2bb5a6",tech:"👫 Two-player body tracking",load:()=>ve(()=>import("./index-CE8QG5tI.js"),__vite__mapDeps([12,3]),import.meta.url),how:{camera:["Two players stand side by side — both whole bodies in the picture.","Run on the spot — fast feet! Jump the hurdles, arms UP on the boost pad."],nocam:["P1: A / S to run, W to jump · P2: K / L to run, I to jump."]}},{id:"tugofwar",category:"family",name:"Tug of War",icon:"🪢",blurb:"Squat fast to pull the rope your way",color:"#c98a3d",tech:"👫 Two-player body tracking",load:()=>ve(()=>import("./index-CwZYPDWM.js"),__vite__mapDeps([13,3]),import.meta.url),how:{camera:["Two players (a child and a grown-up?) stand side by side.","Every squat pulls the rope your way. Pull the flag over your line to win!"],nocam:["Player 1 taps A (or S), player 2 taps L (or ↓) — fast!"]}}],Lg=[{id:"letters",name:"Letter games",icon:"🔤",color:"#9b6bff"},{id:"active",name:"Active play",icon:"⚡",color:"#ff8a3d"},{id:"calm",name:"Calm & silly",icon:"😄",color:"#16a3a0"},{id:"family",name:"Play together",icon:"👨‍👩‍👧",color:"#ff6fa8"}],rl=Object.fromEntries(Tn.map(i=>[i.id,i]));async function Dg(){return await Promise.all(Tn.map(async i=>{try{i.Cls=(await i.load()).default}catch(t){i.broken=!0,console.error(`[games] ${i.id} failed to load:`,t)}})),Tn}const Be={torso:.5,shW:.19,hipW:.1,upper:.28,fore:.26,thigh:.42,shin:.4};function Ig(i){let t=i>>>0||1;return()=>(t=t*1664525+1013904223>>>0,t/4294967296-.5)}function ai(i={}){var P,G;const t=i.sideOn||0,e=Be.shW*(1-.85*t),n=Be.hipW*(1-.8*t),s=i.squat||0,r={};for(const[N,O]of[["sl",-1],["sr",1]]){const W={...((P=i.legs)==null?void 0:P[N])||{}},k=(W.lift||0)+s*1.25,Z=(W.knee??(W.lift||0))+s*(1.25+.5),z=(W.spread||0)+s*.12,st=k-Z,ht=[O*Math.sin(z)*Math.cos(k)*Be.thigh,-Math.cos(z)*Math.cos(k)*Be.thigh],gt=[O*Math.sin(z)*Math.cos(st)*Be.shin,-Math.cos(z)*Math.cos(st)*Be.shin];r[N]={s:O,thighV:ht,shinV:gt,ext:-(ht[1]+gt[1])}}const a=Math.max(r.sl.ext,r.sr.ext)+(i.hop||0),o={},l=i.lean||0,c=i.bend||0,h=[0,a];for(const N of["sl","sr"]){const O=r[N],W=[h[0]+O.s*n,a],k=[W[0]+O.thighV[0],W[1]+O.thighV[1]],Z=[k[0]+O.shinV[0],k[1]+O.shinV[1]];o[N]={hip:W,knee:k,ankle:Z,heel:[Z[0],Z[1]-.04],foot:[Z[0]+O.s*.03,Z[1]-.06]}}const u=Be.torso*Math.cos(c),d=[h[0]+Math.sin(l)*u,h[1]+Math.cos(l)*u],p=[Math.cos(l),-Math.sin(l)];for(const N of["sl","sr"]){const O=N==="sl"?-1:1,W=[d[0]+p[0]*e*O,d[1]+p[1]*e*O],k=((G=i.arms)==null?void 0:G[N])||{};let Z,z;if(k.wrist)z=[W[0]+k.wrist[0],W[1]+k.wrist[1]],Z=k.elbow?[W[0]+k.elbow[0],W[1]+k.elbow[1]]:[(W[0]+z[0])/2,(W[1]+z[1])/2-.03];else{const Dt=k.up||0,$t=k.fore??Dt,$=Math.cos(k.fwd||0);Z=[W[0]+O*Math.sin(Dt)*Be.upper*$,W[1]-Math.cos(Dt)*Be.upper*$],z=[Z[0]+O*Math.sin($t)*Be.fore*$,Z[1]-Math.cos($t)*Be.fore*$]}const st=[z[0]-Z[0],z[1]-Z[1]],ht=Math.hypot(st[0],st[1])||1,gt=(Dt,$t)=>[z[0]+st[0]/ht*Dt-st[1]/ht*$t,z[1]+st[1]/ht*Dt+st[0]/ht*$t];Object.assign(o[N],{sh:W,elbow:Z,wrist:z,pinky:gt(.06,-.02*O),index:gt(.07,.01*O),thumb:gt(.04,.03*O)})}const g=[Math.sin(l),Math.cos(l)],_=(N,O)=>[d[0]+g[0]*N+p[0]*O,d[1]+g[1]*N+p[1]*O],m=[];m[0]=_(.22,0),m[1]=_(.25,-.02),m[2]=_(.25,-.03),m[3]=_(.25,-.045),m[4]=_(.25,.02),m[5]=_(.25,.03),m[6]=_(.25,.045),m[7]=_(.23,-.075*(1-.6*t)),m[8]=_(.23,.075*(1-.6*t)),m[9]=_(.18,-.025),m[10]=_(.18,.025);const f={sl:[11,13,15,17,19,21,23,25,27,29,31],sr:[12,14,16,18,20,22,24,26,28,30,32]},y=["sh","elbow","wrist","pinky","index","thumb","hip","knee","ankle","heel","foot"];for(const N of["sl","sr"])f[N].forEach((O,W)=>{m[O]=o[N][y[W]]});const v=i.aspect??4/3,x=(i.height??.72)/1.62,L=i.feetY??.92,b=i.cx??.5,A=Ig(i.seed??7),R=i.jitter||0,E=new Set(i.hide||[]),M=N=>E.has("all")||E.has("legs")&&N>=25||E.has("feet")&&N>=27||E.has("arms")&&[13,14,15,16,17,18,19,20,21,22].includes(N);return m.map(([N,O],W)=>{const k=b+N*x/v+R*A(),Z=L-O*x+R*A(),z=k<0||k>1||Z<0||Z>1;return{x:1-k,y:Z,z:0,visibility:M(W)?.05:z?.2:.97}})}const Xc=Math.PI/2,Ue={stand:(i={})=>ai({arms:{sl:{up:.12},sr:{up:.12}},...i}),squat:(i,t={})=>ai({squat:i,bend:i*.35,arms:{sl:{up:.3+i*.9,fwd:i*.8},sr:{up:.3+i*.9,fwd:i*.8}},...t}),jack:(i,t={})=>ai({arms:{sl:{up:.12+i*2.7},sr:{up:.12+i*2.7}},legs:{sl:{spread:i*.36},sr:{spread:i*.36}},hop:Math.sin(i*Math.PI)*.05,...t}),jog:(i,t=.9,e={})=>{const n=Math.max(0,Math.sin(i))*t,s=Math.max(0,-Math.sin(i))*t;return ai({legs:{sl:{lift:n,knee:n*1.3},sr:{lift:s,knee:s*1.3}},arms:{sl:{up:.2,fore:.2+s*1.2,fwd:s*.8},sr:{up:.2,fore:.2+n*1.2,fwd:n*.8}},...e})},archery:(i,{aim:t=0,side:e="sr",sideOn:n=0,drop:s=!1,...r}={})=>{const a=e==="sr"?1:-1,o=Be.shW*(1-.85*n),l=t*.4,c=Be.upper+Be.fore,h=[a*Math.cos(l)*c,Math.sin(l)*c],u=[h[0]+a*2*o,h[1]],d=[a*o*.9,.1],p=[u[0]+(d[0]-u[0])*i,u[1]+(d[1]-u[1])*i],g=[p[0]*(1-i)*.5-a*.22*i,p[1]*.5-.06*(1-i)+.02*i],_=s?{up:.15}:{wrist:p,elbow:g},m={up:Xc+l,fore:Xc+l};return ai({sideOn:n,arms:e==="sr"?{sr:m,sl:_}:{sl:m,sr:_},...r})},reach:(i,t,e={})=>ai({arms:{[i]:{up:t},[i==="sl"?"sr":"sl"]:{up:.12}},...e})};function qg(i,t={}){const e=t.fps??30,n=t.t0??100,s=t.jitter??.003,r=[];let a=t.seed??11;const o=(h,u)=>r.push({lm:h,t:n+u}),l=()=>({jitter:s,seed:a++,aspect:t.aspect}),c=(h,u)=>{const d=r.length?r[r.length-1].t-n+1/e:0;for(let p=0;p<h*e;p++){const g=p/e;o(u(g/h,g),d+g)}};switch(i){case"stand":c(t.seconds??3,()=>Ue.stand(l()));break;case"squat":{const h=t.depth??.85,u=t.period??1.8;c(.6,()=>Ue.stand(l()));for(let d=0;d<(t.reps??10);d++)c(u,p=>Ue.squat(h*Math.sin(Math.PI*p)**1.3,l()));c(.6,()=>Ue.stand(l()));break}case"jack":{const h=t.period??1.2,u=t.amount??1;c(.6,()=>Ue.jack(0,l()));for(let d=0;d<(t.reps??8);d++)c(h,p=>Ue.jack(u*Math.sin(Math.PI*p)**.8,{...l(),hide:t.hide}));c(.6,()=>Ue.jack(0,l()));break}case"jog":{const h=t.cadence??3;c(t.seconds??6,(u,d)=>Ue.jog(d*Math.PI*h,t.amp??.9,l()));break}case"archery":{const h=t.shots??5,u=t.draw??1,d=t.hold??.4,p=t.sideOn??0,g=t.side??"sr";c(.5,()=>Ue.stand(l()));for(let _=0;_<h;_++){const m=t.aim??(_%3-1)*.5,f=()=>({aim:m,side:g,sideOn:p,...l()});c(.5,()=>Ue.archery(0,f())),c(.6,y=>Ue.archery(u*y,f())),c(d,()=>Ue.archery(u,f())),c(.15,y=>Ue.archery(u*(1-y),f())),c(.4,()=>Ue.archery(0,f()))}break}default:throw new Error(`unknown sequence ${i}`)}return r}const Ug=Object.freeze(Object.defineProperty({__proto__:null,poses:Ue,sequence:qg,synthPose:ai},Symbol.toStringTag,{value:"Module"})),Y=i=>document.getElementById(i),Ft=hg();Kh(Ft.muted);const al=()=>pg(Ft.muted||!Ft.voice);al();const Ng={pose:"body helper 🧍",pose2:"two-player body helper 👫",hand:"hand helper ✋",gesture:"gesture helper ☝️",face:"face helper 🙂",segment:"shape helper 🫧"},Rn=new E2(Y("scene")),$n=new lg;$n.setAvatar(Ft.avatar);Rn.setView($n);const he=new wg,Vn=new Pg,Fg={world:Rn,sfx:kn,say:Kr,popup:(i,t,e,n)=>hu(i,e,n,t),avatarStyle:()=>is[Ft.avatar]||is[0],save:()=>Ft},Cr={};function ol(i){return Cr[i]||(Cr[i]=new rl[i].Cls(Fg)),Cr[i]}const F={screen:"home",mode:Ft.mode==="camera"?"camera":"nocam",def:null,act:null,phase:"idle",timeLeft:0,elapsed:0,readyT:0,countT:0,endT:0,roundSeconds:null,lastFrame:null,lastResult:null,presence:{ok:!1,reason:"nobody"}},Og=["home","mode","privacy","loading","error","hub","intro","ready","pause","result","book"];function Ae(i){F.screen=i;for(const e of Og)Y(`screen-${e}`).classList.toggle("hidden",e!==i);const t=i===null||i==="ready"||i==="pause";Y("hud").classList.toggle("hidden",!(i===null||i==="pause")),Y("topbar").classList.toggle("hidden",t),Y("homeBtn").classList.toggle("hidden",i==="home"),!t&&F.act&&Rn.setView($n),iu()}function iu(){const t=F.act&&(F.screen===null||F.screen==="ready"||F.screen==="pause")&&F.mode!=="nocam";Y("pip").classList.toggle("hidden",!t),Y("pip").classList.toggle("big",t&&F.screen==="ready"),Y("pip").classList.toggle("inject",F.mode==="inject")}function hs(){const i=ug(Ft),t=Object.keys(Ft.letters).length;Y("starCount").textContent=Ft.stars,Y("letterCount").textContent=`${t}/26`,Y("hubStreak").textContent=i,Y("hubStars").textContent=Ft.stars,Y("hubLetters").textContent=t,Y("hubLetterBar").style.width=`${Math.round(t/26*100)}%`,Y("muteBtn").textContent=Ft.muted?"🔇":"🔊",Y("voiceBtn").classList.toggle("off",!Ft.voice),Y("voiceBtn").title=Ft.voice?"Voice is on":"Voice is off",Y("pauseVoice").textContent=`🗣️ Voice: ${Ft.voice?"on":"off"}`,Y("modeChip").innerHTML=F.mode==="nocam"?"👆 Tap &amp; Keys <small>change</small>":"📷 Camera <small>change</small>"}document.addEventListener("click",i=>{fg(),i.target.closest("button")&&kn.click()},!0);Y("muteBtn").onclick=()=>{Ft.muted=!Ft.muted,Kh(Ft.muted),al(),Yn(Ft),hs()};const su=()=>{Ft.voice=!Ft.voice,al(),Yn(Ft),hs(),Ft.voice&&Kr("Voice on!",{interrupt:!0})};Y("voiceBtn").onclick=su;Y("pauseVoice").onclick=su;Y("homeBtn").onclick=()=>cl();Y("homeQuote").textContent=rs.read.text;Y("homeSource").textContent=`— ${rs.read.source}`;function ll(){const i=Y("avatarRow");i.innerHTML="",is.forEach((t,e)=>{const n=document.createElement("button");n.className=`avatar-btn${e===Ft.avatar?" on":""}`,n.style.setProperty("--c",ss(t.shirt)),n.style.setProperty("--h",ss(t.hat)),n.innerHTML=`<span class="av-face"><i></i></span><b>${t.name}</b>`,n.dataset.head=t.head,n.onclick=()=>{Ft.avatar=e,Yn(Ft),$n.setAvatar(e),ll()},i.appendChild(n)})}function cl(){ou(),Rn.setView($n),ll(),hs(),Ae("home")}Y("homePlay").onclick=()=>{Ft.mode?Ft.mode==="camera"?hl():(F.mode="nocam",dn()):Ae("mode")};Y("modeCamera").onclick=()=>{Ft.mode="camera",Yn(Ft),hl()};Y("modeNocam").onclick=()=>us();Y("modeBack").onclick=()=>cl();function us(){Ft.mode="nocam",Yn(Ft),he.stopCamera(),F.mode="nocam",dn()}function hl(){if(he.granted){F.mode="camera",dn();return}F.pendingGame=null,Ae("privacy")}Y("privacyOk").onclick=()=>Gs(F.pendingGame);Y("privacyNocam").onclick=()=>us();const Yc={denied:["🙈","The camera is switched off","That's okay! Camera permission wasn't given. A grown-up can allow the camera for this page (look for the 🔒 or 📷 icon next to the web address), then press “Try again”. Or play with taps & keys instead!"],nocamera:["📷❓","No camera found","We couldn't find a camera on this device. You can still play every game with taps and keys!"],busy:["📷💤","The camera is busy","Another app or tab might be using the camera. Close it, then press “Try again”."],insecure:["🔐","The camera needs a safe web address","Browsers only allow the camera on https:// pages or on localhost. Ask a grown-up to open the game that way — or play with taps & keys."],unsupported:["🧭","This browser can't use the camera","Try a recent Chrome, Edge, Safari or Firefox — or play with taps & keys."],model:["🤖","The camera helper didn't load","The part of the game that sees your moves couldn't start on this device. Please try again — or play with taps & keys."],unknown:["😕","Something went wrong with the camera","Please try again — or play with taps & keys."]};function ul(i){const[t,e,n]=Yc[i]||Yc.unknown;F.lastError=i,Y("errIco").textContent=t,Y("errTitle").textContent=e,Y("errText").textContent=n,Ae("error")}Y("errRetry").onclick=()=>Gs(F.pendingGame);Y("loadingNocam").onclick=()=>us();Y("errNocam").onclick=()=>us();async function Gs(i=null){F.pendingGame=i,Ae("loading"),Y("loadingText").textContent="Turning on the camera…",Y("loadingSub").textContent=he.granted?"":"If your browser asks, choose “Allow”.";try{if(he.cameraOn||await he.startCamera(Y("video")),i){const t=ol(i).vision;he.hasTask(t)||(Y("loadingText").textContent=`Waking up the ${Ng[t]}…`,Y("loadingSub").textContent="This can take a few seconds the first time.",await he.loadTask(t),Y("loadingText").textContent="Almost ready…",await he.warmUp(t))}if(F.screen!=="loading")return;F.mode="camera",Ft.mode="camera",Yn(Ft),i?dl(i,"camera"):dn()}catch(t){if((t==null?void 0:t.code)==="cancelled")return;console.warn("[camera]",(t==null?void 0:t.code)||"",(t==null?void 0:t.message)||t),(t==null?void 0:t.code)!=="model"&&he.stopCamera(),F.screen==="loading"&&ul((t==null?void 0:t.code)||"unknown")}}async function Bg(){var i;try{await he.startCamera(Y("video"))}catch(t){if((t==null?void 0:t.code)==="cancelled")return;console.warn("[camera]",(t==null?void 0:t.code)||"",(t==null?void 0:t.message)||t),he.stopCamera(),F.pendingGame=((i=F.def)==null?void 0:i.id)??null,ul((t==null?void 0:t.code)||"unknown")}}function dn(){ou(),Rn.setView($n),hs(),Y("hubTip").innerHTML=`<b>🔥 Keep your streak!</b> “${rs.regular.text}” <span>— ${rs.regular.source}</span>`;const i=Y("gameGrid");i.innerHTML="";const t=Ft.todayDay===nl()?Ft.todayDone:[],e={};for(const n of Lg){if(!Tn.some(a=>a.category===n.id))continue;const s=document.createElement("section");s.className="cat",s.style.setProperty("--c",n.color||"var(--teal)");const r=Tn.filter(a=>a.category===n.id).length;s.innerHTML=`<h3 class="cat-head"><span>${n.icon}</span> ${n.name}<small>${r} games</small></h3><div class="activity-grid"></div>`,i.appendChild(s),e[n.id]=s.querySelector(".activity-grid")}Tn.forEach(n=>{const s=e[n.category]||i,r=document.createElement("button");r.className="act-card",r.dataset.game=n.id,r.style.setProperty("--c",n.color);const a=Ft.bestStars[n.id]||0,o=t.includes(n.id)?'<span class="tag done">✔ Today</span>':"";r.innerHTML=`${o}<span class="ico">${n.icon}</span><b>${n.name}</b><small>${n.blurb}</small><span class="tech">${n.tech}</span><span class="mini-stars">${"★".repeat(a)}<i>${"★".repeat(3-a)}</i></span>`,n.broken&&(r.disabled=!0),r.onclick=()=>Ws(n.id),s.appendChild(r)}),Ae("hub")}Y("modeChip").onclick=()=>{F.mode==="nocam"?(Ft.mode="camera",Yn(Ft),hl()):us()};Y("bookBtn").onclick=()=>ru();function ru(){const i=Y("bookGrid");i.innerHTML="";for(const e of ng){const n=Ft.letters[e]||0,s=document.createElement("button");s.className=`sticker${n?" got":""}`,s.style.setProperty("--c",ss(Vs(e))),s.innerHTML=`<b>${e}</b><span>${n?ui[e].emoji:"？"}</span><em>${n?ui[e].word:"…"}</em>${n?`<small>${n}×</small>`:""}`,s.setAttribute("aria-label",n?`${e} is for ${ui[e].word}, found ${n} times`:`${e}, not found yet`),s.onclick=()=>Kr(`${e}. ${e} is for ${ui[e].word}.`,{interrupt:!0}),i.appendChild(s)}const t=Object.keys(Ft.letters).length;Y("bookSub").textContent=t===26?"You found every letter — MashaAllah! 🎉":`${t} of 26 letters found. Tap a letter to hear it!`,Y("bookBar").style.width=`${Math.round(t/26*100)}%`,Ae("book")}Y("bookBack").onclick=()=>dn();function Ws(i){const t=rl[i];F.def=t;const e=rs[t.content];Y("introIcon").textContent=t.icon,Y("introName").textContent=t.name,Y("screen-intro").querySelector(".intro-card").style.setProperty("--c",t.color),Y("introTech").textContent=t.tech,Y("introContent").classList.toggle("hidden",!e),e&&(Y("introKind").textContent=e.kind==="Quran"?"📖 From the Quran":"🌙 Hadith",Y("introText").textContent=e.text,Y("introSource").textContent=`— ${e.source}`,Y("introMeaning").textContent=e.meaning);const n=t.how[F.mode==="nocam"?"nocam":"camera"];Y("introHow").innerHTML=n.map(s=>`<li>${s}</li>`).join(""),Y("introMode").textContent=F.mode==="nocam"?"👆 Tap & keys mode":"📷 Camera mode",Ae("intro")}Y("introStart").onclick=()=>{const i=F.def.id;F.mode==="camera"&&(!he.cameraOn||!he.hasTask(ol(i).vision))?Gs(i):dl(i,F.mode)};Y("introBack").onclick=()=>dn();function dl(i,t=F.mode,e={}){const n=rl[i],s=ol(i);F.def=n,F.act=s,F.mode=t,he.use(s.vision),F.lastFrame=null,s.reset(t),Rn.setView(s),Vn.reset(),F.presence={ok:!1,reason:`no_${s.vision}`};const r=F.roundSeconds??s.roundSeconds;F.timeLeft=r,F.untimed=!r,F.elapsed=0,Y("hudTitle").innerHTML=`<span>${n.icon}</span> ${n.name}`,Y("hudTimer").classList.toggle("hidden",F.untimed),kg(s),As=-1,cu(),t==="nocam"||e.skipReady?au(e.skipCountdown):(F.phase="ready",F.readyT=0,Ae("ready"))}function au(i=!1){if(Ae(null),i){F.phase="playing";return}F.phase="countdown",F.countT=0,F.countShown=null}function ou(){var i;F.phase="idle",F.act=null,he.stopCamera(),Y("countdown").classList.add("hidden"),Y("visBanner").classList.add("hidden"),(i=window.speechSynthesis)==null||i.cancel(),iu()}function Oo(){!F.act||F.phase==="ended"||(F.phase="ended",F.endT=0,kn.finish(),hu(F.untimed?"All done! 🎉":"Time! 🎉",innerWidth/2,innerHeight*.38,"big"))}function lu(){const i=F.act,t=F.def,e=i.result();e.reps>0&&(e.stars=Math.max(1,e.stars));const n=[...i.learned].filter(h=>ui[h]).sort();Y("popups").innerHTML="";const s=dg(Ft,t.id,e.reps,e.stars,n);Yn(Ft),F.lastResult={id:t.id,...e,letters:n,...s};const r=["Good try!","Great job!","Awesome!","MashaAllah — superstar!"];Y("resTitle").textContent=r[e.stars],Y("resIcon").textContent=t.icon,Y("resGame").textContent=t.name,Y("screen-result").querySelector(".result-card").style.setProperty("--c",t.color),Y("resStars").innerHTML=[0,1,2].map(h=>`<span class="${h<e.stars?"":"off"}" style="animation-delay:${.15+h*.18}s">⭐</span>`).join(""),Y("resLines").innerHTML=e.lines.map(h=>`<li>${h}</li>`).join(""),Y("resLetters").innerHTML=n.length?n.map(h=>`<span class="res-letter${s.newLetters.includes(h)?" new":""}" style="--c:${ss(Vs(h))}">${h}</span>`).join(""):"",Y("resLetters").classList.toggle("hidden",!n.length);const a=[`+${e.stars} star${e.stars===1?"":"s"} ⭐`];s.newLetters.length&&a.push(`📒 ${s.newLetters.length} new letter${s.newLetters.length===1?"":"s"} for your book!`),s.streakUp&&a.push(`🔥 ${Ft.streak}-day streak!`),s.newBest&&(Ft.plays[t.id]||0)>1&&a.push("🏅 New personal best!"),Y("resEarn").innerHTML=a.join("<br>");const o=rs[t.content];Y("resReminder").classList.toggle("hidden",!o),o&&(Y("resReminder").innerHTML=`<b>Remember:</b> “${o.text}” <span>— ${o.source}</span>`);const l=Tn.filter(h=>h.category===t.category&&!h.broken),c=l[(l.indexOf(t)+1)%l.length];Y("resNext").textContent=`Next: ${c.name} ${c.icon}`,Y("resNext").onclick=()=>Ws(c.id),Rn.setView($n),F.act=null,F.phase="idle",he.stopCamera(),hs(),Ae("result"),e.stars>=2&&kn.win(),Kr(r[e.stars].replace("—",","),{interrupt:!0})}Y("resAgain").onclick=()=>{var i;return Ws(((i=F.lastResult)==null?void 0:i.id)||Tn[0].id)};Y("resHub").onclick=()=>dn();function Qr(){var i,t,e;!F.act||!["playing","countdown","ready"].includes(F.phase)||(F.pausedFrom=F.phase,F.phase="paused",Y("countdown").classList.add("hidden"),(t=(i=F.act).onControl)==null||t.call(i,"*release*",!1),(e=window.speechSynthesis)==null||e.cancel(),Ae("pause"))}function fl(){if(F.phase==="paused"){if(F.pausedFrom==="ready"){F.phase="ready",Ae("ready");return}Ae(null),F.phase=F.pausedFrom==="countdown"?"countdown":"playing",F.phase==="countdown"&&(F.countT=0,F.countShown=null)}}Y("pauseBtn").onclick=Qr;Y("resumeBtn").onclick=fl;Y("quitBtn").onclick=()=>dn();Y("readyPause").onclick=()=>dn();Y("readyNocam").onclick=()=>{const i=F.def.id;us(),Ws(i)};document.addEventListener("visibilitychange",()=>{if(document.hidden){he.stopCamera(),Qr();return}F.screen==="loading"?he.cameraOn||Gs(F.pendingGame):F.act&&F.mode==="camera"&&!he.cameraOn&&Bg()});function kg(i){const t=Y("controls");if(t.innerHTML="",t.classList.toggle("hidden",F.mode!=="nocam"),F.mode==="nocam")for(const e of i.controls||[]){const n=document.createElement("button");n.className=`ctrl-btn${e.hold?" hold":""}${e.small?" small":""}`,n.innerHTML=`${e.label}${e.key?`<small>${e.key}</small>`:""}`,n.dataset.id=e.id;const s=a=>{a.preventDefault(),n.classList.add("down"),F.phase==="playing"&&i.onControl(e.id,!0)},r=a=>{a.preventDefault(),n.classList.contains("down")&&(n.classList.remove("down"),i.onControl(e.id,!1))};n.addEventListener("pointerdown",s),n.addEventListener("pointerup",r),n.addEventListener("pointerleave",r),n.addEventListener("pointercancel",r),n.addEventListener("contextmenu",a=>a.preventDefault()),t.appendChild(n)}}let As=-1,$c=null;function cu(){const i=F.act;if(!i)return;const t=i.hud();if(t.reps!==As){if(Y("hudReps").textContent=t.reps,As>=0&&t.reps>As){const r=Y("hudReps").parentElement;r.classList.remove("bump"),r.offsetWidth,r.classList.add("bump")}As=t.reps}Y("hudRepLabel").textContent=t.repLabel,Y("hudBig").classList.toggle("hidden",!t.big),t.big&&(Y("hudBig").textContent=t.big),Y("hudPrompt").innerHTML=t.prompt||"",Y("hudDetail").textContent=t.detail||"";const e=t.letter?`${t.letter}|${t.letterSub||""}`:null;if(e!==$c&&($c=e,Y("hudLetter").classList.toggle("hidden",!t.letter),t.letter)){Y("hudLetterCh").textContent=t.letter,Y("hudLetter").style.setProperty("--c",t.letter.length===1&&ui[t.letter]?ss(Vs(t.letter)):"#16a3a0"),Y("hudLetterSub").textContent=t.letterSub||"";const r=Y("hudLetter");r.classList.remove("bump"),r.offsetWidth,r.classList.add("bump")}const n=Math.max(0,Math.ceil(F.timeLeft));Y("hudTimer").textContent=n,Y("hudTimer").classList.toggle("low",!F.untimed&&n<=5&&F.phase==="playing");const s=t.meter!==null&&t.meter!==void 0;Y("hudMeterWrap").classList.toggle("hidden",!s),s&&(Y("hudMeter").style.width=`${Math.round(Math.min(1,t.meter)*100)}%`,Y("hudMeter").classList.toggle("good",!!t.meterGood),Y("hudMeterLabel").textContent=t.meterLabel||"");for(const r of Y("controls").children)r.classList.toggle("nudge",t.highlight===r.dataset.id)}function hu(i,t,e,n){const s=document.createElement("div");s.className=`popup ${n||""}`,s.textContent=i,Y("popups").appendChild(s);const r=Math.min(innerWidth/2,s.offsetWidth/2+8);s.style.left=`${Math.max(r,Math.min(innerWidth-r,t))}px`,s.style.top=`${Math.max(90,Math.min(innerHeight-90,e))}px`,setTimeout(()=>s.remove(),1600)}he.onFrame(i=>{F.lastFrame=i;const t=F.act;!t||F.mode==="nocam"||i.kind!==t.vision||!["ready","countdown","playing"].includes(F.phase)||(F.presence=t.presence(i),Vn.update(F.presence,i.t),t.onVision(i,F.phase==="playing"&&Vn.ok))});const jc=i=>Fo[i]||i||Fo.no_pose,zg=new Set(["Space","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"]);window.addEventListener("keydown",i=>{var t;if(i.code==="KeyP"&&!((t=F.act)!=null&&t.usesLetterKeys&&F.phase==="playing")||i.code==="Escape"){F.phase==="paused"?fl():Qr();return}F.act&&F.mode==="nocam"&&(F.phase==="playing"||F.phase==="countdown")&&(zg.has(i.code)&&i.preventDefault(),F.phase==="playing"&&(!i.repeat||i.code.startsWith("Arrow"))&&F.act.onKey(i.code,!0,i))});window.addEventListener("keyup",i=>{F.act&&F.mode==="nocam"&&F.act.onKey(i.code,!1,i)});const di=Y("scene");di.addEventListener("pointerdown",i=>{var t;F.act&&F.phase==="playing"&&((t=di.setPointerCapture)==null||t.call(di,i.pointerId),F.act.onPointer("down",i.clientX,i.clientY))});di.addEventListener("pointermove",i=>{F.act&&F.phase==="playing"&&F.act.onPointer("move",i.clientX,i.clientY)});di.addEventListener("pointerup",i=>{F.act&&F.act.onPointer("up",i.clientX,i.clientY)});di.addEventListener("pointercancel",i=>{F.act&&F.act.onPointer("up",i.clientX,i.clientY)});let Jc=performance.now();function uu(i){var n;requestAnimationFrame(uu);const t=Math.min(.05,(i-Jc)/1e3);Jc=i;const e=F.act;if(e&&F.mode==="camera"&&["ready","countdown","playing","paused"].includes(F.phase)&&he.poll(i),e){switch(F.phase){case"ready":{e.update(t,!1);const s=Vn.ok;F.readyT=s?F.readyT+t:0,Y("readyMsg").textContent=s?Fo.ok:jc(F.presence.reason),Y("readyMsg").classList.toggle("ok",s),Y("readyBar").style.width=`${Math.min(100,F.readyT/1.2*100)}%`,Y("readyTip").textContent=e.vision==="pose2"?"Stand side by side so BOTH whole bodies fit inside the box (one player works too).":e.guide==="face"?"Sit or stand so your face is inside the circle.":e.guide==="hands"?"Stand back a little so both hands fit in the picture.":"Stand back so your whole body fits inside the box. Make sure there's space around you!",F.readyT>=1.2&&(kn.go(),au());break}case"countdown":{e.update(t,!1),F.countT+=t;const s=3-Math.floor(F.countT/.8),r=s>0?String(s):"GO!";if(r!==F.countShown){F.countShown=r;const a=Y("countdown");a.textContent=r,a.classList.remove("hidden","tick"),a.offsetWidth,a.classList.add("tick"),s>0?kn.beep():kn.go()}F.countT>=3.2&&(Y("countdown").classList.add("hidden"),F.phase="playing",(n=e.onStart)==null||n.call(e));break}case"playing":{const s=F.mode==="nocam"||Vn.ok;if(Y("visBanner").classList.toggle("hidden",s),s||(Y("visBanner").textContent=`⏸ ${jc(F.presence.reason)}`),e.update(t,s),s&&(F.elapsed+=t,!F.untimed)){const r=Math.ceil(F.timeLeft);F.timeLeft-=t;const a=Math.ceil(F.timeLeft);a!==r&&a<=5&&a>0&&kn.beep()}(!F.untimed&&F.timeLeft<=0||e.done)&&Oo();break}case"ended":e.update(t,!1),F.endT+=t,Y("visBanner").classList.add("hidden"),F.endT>1.4&&lu();break}cu()}else $n.update(t);Y("pip").classList.contains("hidden")||Cg(Y("pipCanvas"),F.lastFrame,{guide:F.screen==="ready"?(e==null?void 0:e.vision)==="pose2"?"duo":e==null?void 0:e.guide:null,ok:Vn.ok}),Rn.render()}requestAnimationFrame(uu);const Hg={version:"1.0.0",get save(){return structuredClone(Ft)},get screen(){return F.screen},get current(){return F.act},games:Tn.map(i=>i.id),state(){var t;const i=F.act;return{screen:F.screen,phase:F.phase,mode:F.mode,game:((t=F.def)==null?void 0:t.id)||null,vision:(i==null?void 0:i.vision)||null,reps:(i==null?void 0:i.reps)??null,score:(i==null?void 0:i.score)??null,timeLeft:F.timeLeft,untimed:F.untimed,visible:Vn.ok,presence:F.presence,hud:i?i.hud():null,learned:i?[...i.learned]:null,lastResult:F.lastResult,lastError:F.lastError||null,tracker:he.status(),spoken:[...Ur]}},synthPose:Ug,inject(i){const t=he.inject(i);return{subject:sl(t),visible:Vn.ok,presence:F.presence}},feed(i){for(const t of i)he.inject(t);return this.state()},start(i,{mode:t="nocam",skipReady:e=!1,skipCountdown:n=!1,seconds:s}={}){var r,a;return s!==void 0&&(F.roundSeconds=s),t==="inject"&&(he.source="inject"),dl(i,t,{skipReady:e,skipCountdown:n}),n&&((a=(r=F.act).onStart)==null||a.call(r)),this.state()},setRoundSeconds(i){F.roundSeconds=i},endRound(){Oo()},finishNow(){return F.act&&(Oo(),lu()),F.lastResult},key(i,t=!0){var e;(e=F.act)==null||e.onKey(i,t,{code:i,key:i.replace(/^Key/,"")})},control(i,t=!0){var e;(e=F.act)==null||e.onControl(i,t)},pointer(i,t,e){var n;(n=F.act)==null||n.onPointer(i,t,e)},show(i){const t={home:cl,hub:dn,book:ru,mode:()=>Ae("mode"),privacy:()=>Ae("privacy"),loading:()=>Ae("loading")};return t[i]?t[i]():i.startsWith("intro:")?Ws(i.slice(6)):i.startsWith("error:")&&ul(i.slice(6)),F.screen},pause:Qr,resume:fl,enableCamera:Gs,tracker:he,world:Rn,cheer:cg};hs();ll();Ae("home");Dg().then(()=>{window.game=Hg});export{l_ as $,Ga as A,Mi as B,qs as C,h_ as D,Jr as E,ss as F,ce as G,Vs as H,Wg as I,we as J,og as K,ui as L,ye as M,Gg as N,Wh as O,Si as P,ks as Q,mi as R,Qt as S,Bn as T,xg as U,D as V,No as W,f2 as X,C2 as Y,F2 as Z,t_ as _,ag as a,Ce as a0,rn as a1,no as a2,D2 as a3,L2 as a4,jg as a5,u_ as a6,Jh as a7,Ar as a8,p_ as a9,i_ as aA,s_ as aB,Yt as aC,Qg as aD,a_ as aE,kh as aF,Gh as aG,m_ as aH,g_ as aI,r_ as aJ,Fh as aK,Yh as aL,Os as aM,me as aN,sn as aO,On as aP,N1 as aQ,W1 as aR,ke as aS,Ph as aT,x2 as aU,Ge as aV,Kg as aa,Jg as ab,tl as ac,Cn as ad,Rh as ae,Wn as af,nt as ag,Ih as ah,Wr as ai,An as aj,ln as ak,c_ as al,Jo as am,d_ as an,Dh as ao,Qo as ap,_e as aq,Vg as ar,Xh as as,Zg as at,is as au,Fe as av,o_ as aw,I1 as ax,Xg as ay,M2 as az,Bh as b,ls as c,N2 as d,fi as e,Ie as f,$r as g,f_ as h,__ as i,w2 as j,e_ as k,zs as l,jh as m,be as n,Mc as o,n_ as p,xe as q,je as r,$g as s,Nt as t,Yg as u,q1 as v,R2 as w,re as x,Xt as y,ng as z};
