var wd=Object.defineProperty;var Ed=(i,t,e)=>t in i?wd(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Xi=(i,t,e)=>Ed(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sc="170",bd=0,dl=1,Td=2,zh=1,Hh=2,kn=3,fi=0,Ze=1,be=2,hi=0,fs=1,nr=2,fl=3,pl=4,Ad=5,Ri=100,Rd=101,Cd=102,Pd=103,Ld=104,Dd=200,Id=201,Ud=202,Nd=203,Eo=204,bo=205,Fd=206,Od=207,kd=208,Bd=209,zd=210,Hd=211,Vd=212,Gd=213,Wd=214,To=0,Ao=1,Ro=2,gs=3,Co=4,Po=5,Lo=6,Do=7,Vh=0,Xd=1,qd=2,ui=0,Yd=1,$d=2,jd=3,Zd=4,Jd=5,Kd=6,Qd=7,Gh=300,_s=301,xs=302,Io=303,Uo=304,_a=306,No=1e3,Pi=1001,Fo=1002,We=1003,tf=1004,Sr=1005,En=1006,Oa=1007,Li=1008,Xn=1009,Wh=1010,Xh=1011,ir=1012,wc=1013,Ni=1014,zn=1015,ur=1016,Ec=1017,bc=1018,vs=1020,qh=35902,Yh=1021,$h=1022,xn=1023,jh=1024,Zh=1025,ps=1026,Ms=1027,xa=1028,Tc=1029,Jh=1030,Ac=1031,Rc=1033,ia=33776,sa=33777,ra=33778,aa=33779,Oo=35840,ko=35841,Bo=35842,zo=35843,Ho=36196,Vo=37492,Go=37496,Wo=37808,Xo=37809,qo=37810,Yo=37811,$o=37812,jo=37813,Zo=37814,Jo=37815,Ko=37816,Qo=37817,tc=37818,ec=37819,nc=37820,ic=37821,oa=36492,sc=36494,rc=36495,Kh=36283,ac=36284,oc=36285,cc=36286,ef=3200,nf=3201,Qh=0,sf=1,ci="",Ee="srgb",Es="srgb-linear",va="linear",ce="srgb",qi=7680,ml=519,rf=512,af=513,of=514,tu=515,cf=516,lf=517,hf=518,uf=519,lc=35044,gl="300 es",Hn=2e3,la=2001;class bs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _l=1234567;const Ks=Math.PI/180,sr=180/Math.PI;function bn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function De(i,t,e){return Math.max(t,Math.min(e,i))}function Cc(i,t){return(i%t+t)%t}function df(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ff(i,t,e){return i!==t?(e-i)/(t-i):0}function Qs(i,t,e){return(1-e)*i+e*t}function pf(i,t,e,n){return Qs(i,t,1-Math.exp(-e*n))}function mf(i,t=1){return t-Math.abs(Cc(i,t*2)-t)}function gf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function _f(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function xf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function vf(i,t){return i+Math.random()*(t-i)}function Mf(i){return i*(.5-Math.random())}function yf(i){i!==void 0&&(_l=i);let t=_l+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sf(i){return i*Ks}function wf(i){return i*sr}function Ef(i){return(i&i-1)===0&&i!==0}function bf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Tf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Af(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Bn={DEG2RAD:Ks,RAD2DEG:sr,generateUUID:bn,clamp:De,euclideanModulo:Cc,mapLinear:df,inverseLerp:ff,lerp:Qs,damp:pf,pingpong:mf,smoothstep:gf,smootherstep:_f,randInt:xf,randFloat:vf,randFloatSpread:Mf,seededRandom:yf,degToRad:Sf,radToDeg:wf,isPowerOfTwo:Ef,ceilPowerOfTwo:bf,floorPowerOfTwo:Tf,setQuaternionFromProperEuler:Af,normalize:oe,denormalize:gn};class et{constructor(t=0,e=0){et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,s,r,a,o,c,l){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],S=s[1],y=s[4],x=s[7],D=s[2],T=s[5],C=s[8];return r[0]=a*_+o*S+c*D,r[3]=a*m+o*y+c*T,r[6]=a*p+o*x+c*C,r[1]=l*_+h*S+u*D,r[4]=l*m+h*y+u*T,r[7]=l*p+h*x+u*C,r[2]=d*_+f*S+g*D,r[5]=d*m+f*y+g*T,r[8]=d*p+f*x+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ka.makeScale(t,e)),this}rotate(t){return this.premultiply(ka.makeRotation(-t)),this}translate(t,e){return this.premultiply(ka.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ka=new qt;function eu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ha(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rf(){const i=ha("canvas");return i.style.display="block",i}const xl={};function $s(i){i in xl||(xl[i]=!0,console.warn(i))}function Cf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Pf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Lf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ne={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ce&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ce&&(i.r=ms(i.r),i.g=ms(i.g),i.b=ms(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ci?va:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const vl=[.64,.33,.3,.6,.15,.06],Ml=[.2126,.7152,.0722],yl=[.3127,.329],Sl=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wl=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[Es]:{primaries:vl,whitePoint:yl,transfer:va,toXYZ:Sl,fromXYZ:wl,luminanceCoefficients:Ml,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:vl,whitePoint:yl,transfer:ce,toXYZ:Sl,fromXYZ:wl,luminanceCoefficients:Ml,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}});let Yi;class Df{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yi===void 0&&(Yi=ha("canvas")),Yi.width=t.width,Yi.height=t.height;const n=Yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ha("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let If=0;class nu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=bn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ba(s[a].image)):r.push(Ba(s[a]))}else r=Ba(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ba(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Df.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uf=0;class ke extends bs{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=Pi,s=Pi,r=En,a=Li,o=xn,c=Xn,l=ke.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=bn(),this.name="",this.source=new nu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case No:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case Fo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case No:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case Fo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Gh;ke.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,s=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,x=(f+1)/2,D=(p+1)/2,T=(h+d)/4,C=(u+_)/4,L=(g+m)/4;return y>x&&y>D?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=C/n):x>D?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=L/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=C/r,s=L/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nf extends bs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new nu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends Nf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class iu extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ff extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-o;const p=c*d+l*f+h*g+u*_,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const D=Math.sqrt(y),T=Math.atan2(D,p*S);m=Math.sin(m*T)/D,o=Math.sin(o*T)/D}const x=o*S;if(c=c*m+d*x,l=l*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-o){const D=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=D,l*=D,h*=D,u*=D}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-o*f,t[e+2]=l*g+h*f+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(El.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(El.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return za.copy(this).projectOnVector(t),this.sub(za)}reflect(t){return this.sub(za.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const za=new A,El=new dr;class Ts{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,un):un.fromBufferAttribute(r,a),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)),wr.applyMatrix4(t.matrixWorld),this.union(wr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ns),Er.subVectors(this.max,Ns),$i.subVectors(t.a,Ns),ji.subVectors(t.b,Ns),Zi.subVectors(t.c,Ns),ti.subVectors(ji,$i),ei.subVectors(Zi,ji),xi.subVectors($i,Zi);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-xi.z,xi.y,ti.z,0,-ti.x,ei.z,0,-ei.x,xi.z,0,-xi.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-xi.y,xi.x,0];return!Ha(e,$i,ji,Zi,Er)||(e=[1,0,0,0,1,0,0,0,1],!Ha(e,$i,ji,Zi,Er))?!1:(br.crossVectors(ti,ei),e=[br.x,br.y,br.z],Ha(e,$i,ji,Zi,Er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ln=[new A,new A,new A,new A,new A,new A,new A,new A],un=new A,wr=new Ts,$i=new A,ji=new A,Zi=new A,ti=new A,ei=new A,xi=new A,Ns=new A,Er=new A,br=new A,vi=new A;function Ha(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){vi.fromArray(i,r);const o=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),c=t.dot(vi),l=e.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Of=new Ts,Fs=new A,Va=new A;class fr{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Of.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fs.subVectors(t,this.center);const e=Fs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Fs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fs.copy(t.center).add(Va)),this.expandByPoint(Fs.copy(t.center).sub(Va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new A,Ga=new A,Tr=new A,ni=new A,Wa=new A,Ar=new A,Xa=new A;class Pc{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ga.copy(t).add(e).multiplyScalar(.5),Tr.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(Ga);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Tr),o=ni.dot(this.direction),c=-ni.dot(Tr),l=ni.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ga).addScaledVector(Tr,d),f}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const n=Dn.dot(this.direction),s=Dn.dot(Dn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,s,r){Wa.subVectors(e,t),Ar.subVectors(n,t),Xa.crossVectors(Wa,Ar);let a=this.direction.dot(Xa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,t);const c=o*this.direction.dot(Ar.crossVectors(ni,Ar));if(c<0)return null;const l=o*this.direction.dot(Wa.cross(ni));if(l<0||c+l>a)return null;const h=-o*ni.dot(Xa);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,r,a,o,c,l,h,u,d,f,g,_,m){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,f,g,_,m)}set(t,e,n,s,r,a,o,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),a=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kf,t,Bf)}lookAt(t,e,n){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),ii.crossVectors(n,Ke),ii.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),ii.crossVectors(n,Ke)),ii.normalize(),Rr.crossVectors(Ke,ii),s[0]=ii.x,s[4]=Rr.x,s[8]=Ke.x,s[1]=ii.y,s[5]=Rr.y,s[9]=Ke.y,s[2]=ii.z,s[6]=Rr.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],y=n[7],x=n[11],D=n[15],T=s[0],C=s[4],L=s[8],E=s[12],M=s[1],P=s[5],W=s[9],F=s[13],O=s[2],X=s[6],z=s[10],J=s[14],H=s[3],st=s[7],dt=s[11],xt=s[15];return r[0]=a*T+o*M+c*O+l*H,r[4]=a*C+o*P+c*X+l*st,r[8]=a*L+o*W+c*z+l*dt,r[12]=a*E+o*F+c*J+l*xt,r[1]=h*T+u*M+d*O+f*H,r[5]=h*C+u*P+d*X+f*st,r[9]=h*L+u*W+d*z+f*dt,r[13]=h*E+u*F+d*J+f*xt,r[2]=g*T+_*M+m*O+p*H,r[6]=g*C+_*P+m*X+p*st,r[10]=g*L+_*W+m*z+p*dt,r[14]=g*E+_*F+m*J+p*xt,r[3]=S*T+y*M+x*O+D*H,r[7]=S*C+y*P+x*X+D*st,r[11]=S*L+y*W+x*z+D*dt,r[15]=S*E+y*F+x*J+D*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+_*(+e*c*f-e*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+m*(+e*l*u-e*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=u*m*l-_*d*l+_*c*f-o*m*f-u*c*p+o*d*p,y=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,x=h*_*l-g*u*l+g*o*f-a*_*f-h*o*p+a*u*p,D=g*u*c-h*_*c-g*o*d+a*_*d+h*o*m-a*u*m,T=e*S+n*y+s*x+r*D;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=S*C,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*C,t[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*p+n*c*p)*C,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*C,t[4]=y*C,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*C,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*C,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*f+e*c*f)*C,t[8]=x*C,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*C,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*p+e*o*p)*C,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*f-e*o*f)*C,t[12]=D*C,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*C,t[14]=(g*o*s-a*_*s-g*n*c+e*_*c+a*n*m-e*o*m)*C,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,S=c*l,y=c*h,x=c*u,D=n.x,T=n.y,C=n.z;return s[0]=(1-(_+p))*D,s[1]=(f+x)*D,s[2]=(g-y)*D,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(d+p))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+y)*C,s[9]=(m-S)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ji.set(s[0],s[1],s[2]).length();const a=Ji.set(s[4],s[5],s[6]).length(),o=Ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],dn.copy(this);const l=1/r,h=1/a,u=1/o;return dn.elements[0]*=l,dn.elements[1]*=l,dn.elements[2]*=l,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=u,dn.elements[9]*=u,dn.elements[10]*=u,e.setFromRotationMatrix(dn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Hn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(o===Hn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===la)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Hn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,f=(n+s)*h;let g,_;if(o===Hn)g=(a+r)*u,_=-2*u;else if(o===la)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ji=new A,dn=new le,kf=new A(0,0,0),Bf=new A(1,1,1),ii=new A,Rr=new A,Ke=new A,bl=new le,Tl=new dr;class qn{constructor(t=0,e=0,n=0,s=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(De(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-De(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(De(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tl.setFromEuler(this),this.setFromQuaternion(Tl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class Lc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zf=0;const Al=new A,Ki=new dr,In=new le,Cr=new A,Os=new A,Hf=new A,Vf=new dr,Rl=new A(1,0,0),Cl=new A(0,1,0),Pl=new A(0,0,1),Ll={type:"added"},Gf={type:"removed"},Qi={type:"childadded",child:null},qa={type:"childremoved",child:null};class Te extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new A,e=new qn,n=new dr,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new qt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(Rl,t)}rotateY(t){return this.rotateOnAxis(Cl,t)}rotateZ(t){return this.rotateOnAxis(Pl,t)}translateOnAxis(t,e){return Al.copy(t).applyQuaternion(this.quaternion),this.position.add(Al.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rl,t)}translateY(t){return this.translateOnAxis(Cl,t)}translateZ(t){return this.translateOnAxis(Pl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Cr.copy(t):Cr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Os,Cr,this.up):In.lookAt(Cr,Os,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(In),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ll),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gf),qa.child=t,this.dispatchEvent(qa),qa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ll),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,Hf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,Vf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Te.DEFAULT_UP=new A(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new A,Un=new A,Ya=new A,Nn=new A,ts=new A,es=new A,Dl=new A,$a=new A,ja=new A,Za=new A,Ja=new xe,Ka=new xe,Qa=new xe;class an{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),fn.subVectors(t,e),s.cross(fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){fn.subVectors(s,e),Un.subVectors(n,e),Ya.subVectors(t,e);const a=fn.dot(fn),o=fn.dot(Un),c=fn.dot(Ya),l=Un.dot(Un),h=Un.dot(Ya),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Nn.x),c.addScaledVector(a,Nn.y),c.addScaledVector(o,Nn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ja.setScalar(0),Ka.setScalar(0),Qa.setScalar(0),Ja.fromBufferAttribute(t,e),Ka.fromBufferAttribute(t,n),Qa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ja,r.x),a.addScaledVector(Ka,r.y),a.addScaledVector(Qa,r.z),a}static isFrontFacing(t,e,n,s){return fn.subVectors(n,e),Un.subVectors(t,e),fn.cross(Un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),fn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return an.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ts.subVectors(s,n),es.subVectors(r,n),$a.subVectors(t,n);const c=ts.dot($a),l=es.dot($a);if(c<=0&&l<=0)return e.copy(n);ja.subVectors(t,s);const h=ts.dot(ja),u=es.dot(ja);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ts,a);Za.subVectors(t,r);const f=ts.dot(Za),g=es.dot(Za);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(es,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Dl.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Dl,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(ts,a).addScaledVector(es,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function to(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=Cc(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=to(a,r,t+1/3),this.g=to(a,r,t),this.b=to(a,r,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=Ee){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){const n=su[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return ne.fromWorkingColorSpace(Fe.copy(this),t),Math.round(De(Fe.r*255,0,255))*65536+Math.round(De(Fe.g*255,0,255))*256+Math.round(De(Fe.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Fe.copy(this),e);const n=Fe.r,s=Fe.g,r=Fe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Ee){ne.fromWorkingColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,s=Fe.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(Pr);const n=Qs(si.h,Pr.h,e),s=Qs(si.s,Pr.s,e),r=Qs(si.l,Pr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new Kt;Kt.NAMES=su;let Wf=0;class zi extends bs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=bn(),this.name="",this.blending=fs,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eo,this.blendDst=bo,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ml,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Eo&&(n.blendSrc=this.blendSrc),this.blendDst!==bo&&(n.blendDst=this.blendDst),this.blendEquation!==Ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ml&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class cn extends zi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new A,Lr=new et;class vn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lc,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lr.fromBufferAttribute(this,e),Lr.applyMatrix3(t),this.setXY(e,Lr.x,Lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array),r=oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lc&&(t.usage=this.usage),t}}class ru extends vn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class au extends vn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends vn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Xf=0;const sn=new le,eo=new Te,ns=new A,Qe=new Ts,ks=new Ts,Pe=new A;class Ce extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(eu(t)?au:ru)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return eo.lookAt(t),eo.updateMatrix(),this.applyMatrix4(eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new te(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(Qe.min,ks.min),Qe.expandByPoint(Pe),Pe.addVectors(Qe.max,ks.max),Qe.expandByPoint(Pe)):(Qe.expandByPoint(ks.min),Qe.expandByPoint(ks.max))}Qe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Pe.fromBufferAttribute(o,l),c&&(ns.fromBufferAttribute(t,l),Pe.add(ns)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new A,c[L]=new A;const l=new A,h=new A,u=new A,d=new et,f=new et,g=new et,_=new A,m=new A;function p(L,E,M){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[L].add(_),o[E].add(_),o[M].add(_),c[L].add(m),c[E].add(m),c[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let L=0,E=S.length;L<E;++L){const M=S[L],P=M.start,W=M.count;for(let F=P,O=P+W;F<O;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const y=new A,x=new A,D=new A,T=new A;function C(L){D.fromBufferAttribute(s,L),T.copy(D);const E=o[L];y.copy(E),y.sub(D.multiplyScalar(D.dot(E))).normalize(),x.crossVectors(T,E);const P=x.dot(c[L])<0?-1:1;a.setXYZW(L,y.x,y.y,y.z,P)}for(let L=0,E=S.length;L<E;++L){const M=S[L],P=M.start,W=M.count;for(let F=P,O=P+W;F<O;F+=3)C(t.getX(F+0)),C(t.getX(F+1)),C(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new A,r=new A,a=new A,o=new A,c=new A,l=new A,h=new A,u=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new vn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Il=new le,Mi=new Pc,Dr=new fr,Ul=new A,Ir=new A,Ur=new A,Nr=new A,no=new A,Fr=new A,Nl=new A,Or=new A;class Jt extends Te{constructor(t=new Ce,e=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Fr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(no.fromBufferAttribute(u,t),a?Fr.addScaledVector(no,h):Fr.addScaledVector(no.sub(e),h))}e.add(Fr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(r),Mi.copy(t.ray).recast(t.near),!(Dr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Dr,Ul)===null||Mi.origin.distanceToSquared(Ul)>(t.far-t.near)**2))&&(Il.copy(r).invert(),Mi.copy(t.ray).applyMatrix4(Il),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,D=y;x<D;x+=3){const T=o.getX(x),C=o.getX(x+1),L=o.getX(x+2);s=kr(this,p,t,n,l,h,u,T,C,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);s=kr(this,a,t,n,l,h,u,S,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,D=y;x<D;x+=3){const T=x,C=x+1,L=x+2;s=kr(this,p,t,n,l,h,u,T,C,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=m,y=m+1,x=m+2;s=kr(this,a,t,n,l,h,u,S,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function qf(i,t,e,n,s,r,a,o){let c;if(t.side===Ze?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===fi,o),c===null)return null;Or.copy(o),Or.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Or);return l<e.near||l>e.far?null:{distance:l,point:Or.clone(),object:i}}function kr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Ir),i.getVertexPosition(c,Ur),i.getVertexPosition(l,Nr);const h=qf(i,t,e,n,Ir,Ur,Nr,Nl);if(h){const u=new A;an.getBarycoord(Nl,Ir,Ur,Nr,u),s&&(h.uv=an.getInterpolatedAttribute(s,o,c,l,u,new et)),r&&(h.uv1=an.getInterpolatedAttribute(r,o,c,l,u,new et)),a&&(h.normal=an.getInterpolatedAttribute(a,o,c,l,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new A,materialIndex:0};an.getNormal(Ir,Ur,Nr,d.normal),h.face=d,h.barycoord=u}return h}class on extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function g(_,m,p,S,y,x,D,T,C,L,E){const M=x/C,P=D/L,W=x/2,F=D/2,O=T/2,X=C+1,z=L+1;let J=0,H=0;const st=new A;for(let dt=0;dt<z;dt++){const xt=dt*P-F;for(let Ut=0;Ut<X;Ut++){const jt=Ut*M-W;st[_]=jt*S,st[m]=xt*y,st[p]=O,l.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[p]=T>0?1:-1,h.push(st.x,st.y,st.z),u.push(Ut/C),u.push(1-dt/L),J+=1}}for(let dt=0;dt<L;dt++)for(let xt=0;xt<C;xt++){const Ut=d+xt+X*dt,jt=d+xt+X*(dt+1),Y=d+(xt+1)+X*(dt+1),at=d+(xt+1)+X*dt;c.push(Ut,jt,at),c.push(jt,Y,at),H+=6}o.addGroup(f,H,E),f+=H,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new on(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ys(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ve(i){const t={};for(let e=0;e<i.length;e++){const n=ys(i[e]);for(const s in n)t[s]=n[s]}return t}function Yf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ou(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const $f={clone:ys,merge:Ve};var jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends zi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jf,this.fragmentShader=Zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=Yf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class cu extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new A,Fl=new et,Ol=new et;class $e extends cu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=sr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,Fl,Ol),e.subVectors(Ol,Fl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ks*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const is=-90,ss=1;class Jf extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $e(is,ss,t,e);s.layers=this.layers,this.add(s);const r=new $e(is,ss,t,e);r.layers=this.layers,this.add(r);const a=new $e(is,ss,t,e);a.layers=this.layers,this.add(a);const o=new $e(is,ss,t,e);o.layers=this.layers,this.add(o);const c=new $e(is,ss,t,e);c.layers=this.layers,this.add(c);const l=new $e(is,ss,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===la)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class lu extends ke{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:_s,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kf extends Fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new lu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:En}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new on(5,5,5),r=new pi({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:hi});r.uniforms.tEquirect.value=e;const a=new Jt(s,r),o=e.minFilter;return e.minFilter===Li&&(e.minFilter=En),new Jf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const io=new A,Qf=new A,tp=new qt;class oi{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=io.subVectors(n,e).cross(Qf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(io),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||tp.getNormalMatrix(t),s=this.coplanarPoint(io).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new fr,Br=new A;class Dc{constructor(t=new oi,e=new oi,n=new oi,s=new oi,r=new oi,a=new oi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],S=s[13],y=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,m-f,x-p).normalize(),n[1].setComponents(c+r,d+l,m+f,x+p).normalize(),n[2].setComponents(c+a,d+h,m+g,x+S).normalize(),n[3].setComponents(c-a,d-h,m-g,x-S).normalize(),n[4].setComponents(c-o,d-u,m-_,x-y).normalize(),e===Hn)n[5].setComponents(c+o,d+u,m+_,x+y).normalize();else if(e===la)n[5].setComponents(o,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Br.x=s.normal.x>0?t.max.x:t.min.x,Br.y=s.normal.y>0?t.max.y:t.min.y,Br.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Br)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ep(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class Be extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const S=p*d-a;for(let y=0;y<l;y++){const x=y*u-r;g.push(x,-S,0),_.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){const y=S+l*p,x=S+l*(p+1),D=S+1+l*(p+1),T=S+1+l*p;f.push(y,x,T),f.push(x,D,T)}this.setIndex(f),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.width,t.height,t.widthSegments,t.heightSegments)}}var np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ip=`#ifdef USE_ALPHAHASH
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
#endif`,sp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ap=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cp=`#ifdef USE_AOMAP
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
#endif`,lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hp=`#ifdef USE_BATCHING
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
#endif`,up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mp=`#ifdef USE_IRIDESCENCE
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
#endif`,gp=`#ifdef USE_BUMPMAP
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
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bp=`#define PI 3.141592653589793
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
} // validated`,Tp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ap=`vec3 transformedNormal = objectNormal;
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
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Up=`#ifdef USE_ENVMAP
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
#endif`,Np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gp=`#ifdef USE_GRADIENTMAP
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
}`,Wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yp=`uniform bool receiveShadow;
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
#endif`,$p=`#ifdef USE_ENVMAP
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
#endif`,jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qp=`PhysicalMaterial material;
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
#endif`,tm=`struct PhysicalMaterial {
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
}`,em=`
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
#endif`,nm=`#if defined( RE_IndirectDiffuse )
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
#endif`,im=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,um=`#if defined( USE_POINTS_UV )
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
#endif`,dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_m=`#ifdef USE_MORPHTARGETS
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
#endif`,xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Em=`#ifdef USE_NORMALMAP
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
#endif`,bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Am=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zm=`float getShadowMask() {
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
}`,Hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vm=`#ifdef USE_SKINNING
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
#endif`,Gm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$m=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,Zm=`#ifdef USE_TRANSMISSION
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const e0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n0=`uniform sampler2D t2D;
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
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`#include <common>
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
}`,c0=`#if DEPTH_PACKING == 3200
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
}`,l0=`#define DISTANCE
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
}`,h0=`#define DISTANCE
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
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`uniform float scale;
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
}`,p0=`uniform vec3 diffuse;
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
}`,m0=`#include <common>
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
}`,g0=`uniform vec3 diffuse;
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
}`,_0=`#define LAMBERT
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
}`,x0=`#define LAMBERT
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
}`,v0=`#define MATCAP
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
}`,M0=`#define MATCAP
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
}`,y0=`#define NORMAL
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
}`,S0=`#define NORMAL
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
}`,w0=`#define PHONG
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
}`,E0=`#define PHONG
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
}`,b0=`#define STANDARD
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
}`,T0=`#define STANDARD
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
}`,A0=`#define TOON
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
}`,R0=`#define TOON
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
}`,C0=`uniform float size;
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
}`,P0=`uniform vec3 diffuse;
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
}`,L0=`#include <common>
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
}`,D0=`uniform vec3 color;
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
}`,I0=`uniform float rotation;
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
}`,U0=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:np,alphahash_pars_fragment:ip,alphamap_fragment:sp,alphamap_pars_fragment:rp,alphatest_fragment:ap,alphatest_pars_fragment:op,aomap_fragment:cp,aomap_pars_fragment:lp,batching_pars_vertex:hp,batching_vertex:up,begin_vertex:dp,beginnormal_vertex:fp,bsdfs:pp,iridescence_fragment:mp,bumpmap_pars_fragment:gp,clipping_planes_fragment:_p,clipping_planes_pars_fragment:xp,clipping_planes_pars_vertex:vp,clipping_planes_vertex:Mp,color_fragment:yp,color_pars_fragment:Sp,color_pars_vertex:wp,color_vertex:Ep,common:bp,cube_uv_reflection_fragment:Tp,defaultnormal_vertex:Ap,displacementmap_pars_vertex:Rp,displacementmap_vertex:Cp,emissivemap_fragment:Pp,emissivemap_pars_fragment:Lp,colorspace_fragment:Dp,colorspace_pars_fragment:Ip,envmap_fragment:Up,envmap_common_pars_fragment:Np,envmap_pars_fragment:Fp,envmap_pars_vertex:Op,envmap_physical_pars_fragment:$p,envmap_vertex:kp,fog_vertex:Bp,fog_pars_vertex:zp,fog_fragment:Hp,fog_pars_fragment:Vp,gradientmap_pars_fragment:Gp,lightmap_pars_fragment:Wp,lights_lambert_fragment:Xp,lights_lambert_pars_fragment:qp,lights_pars_begin:Yp,lights_toon_fragment:jp,lights_toon_pars_fragment:Zp,lights_phong_fragment:Jp,lights_phong_pars_fragment:Kp,lights_physical_fragment:Qp,lights_physical_pars_fragment:tm,lights_fragment_begin:em,lights_fragment_maps:nm,lights_fragment_end:im,logdepthbuf_fragment:sm,logdepthbuf_pars_fragment:rm,logdepthbuf_pars_vertex:am,logdepthbuf_vertex:om,map_fragment:cm,map_pars_fragment:lm,map_particle_fragment:hm,map_particle_pars_fragment:um,metalnessmap_fragment:dm,metalnessmap_pars_fragment:fm,morphinstance_vertex:pm,morphcolor_vertex:mm,morphnormal_vertex:gm,morphtarget_pars_vertex:_m,morphtarget_vertex:xm,normal_fragment_begin:vm,normal_fragment_maps:Mm,normal_pars_fragment:ym,normal_pars_vertex:Sm,normal_vertex:wm,normalmap_pars_fragment:Em,clearcoat_normal_fragment_begin:bm,clearcoat_normal_fragment_maps:Tm,clearcoat_pars_fragment:Am,iridescence_pars_fragment:Rm,opaque_fragment:Cm,packing:Pm,premultiplied_alpha_fragment:Lm,project_vertex:Dm,dithering_fragment:Im,dithering_pars_fragment:Um,roughnessmap_fragment:Nm,roughnessmap_pars_fragment:Fm,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:km,shadowmap_vertex:Bm,shadowmask_pars_fragment:zm,skinbase_vertex:Hm,skinning_pars_vertex:Vm,skinning_vertex:Gm,skinnormal_vertex:Wm,specularmap_fragment:Xm,specularmap_pars_fragment:qm,tonemapping_fragment:Ym,tonemapping_pars_fragment:$m,transmission_fragment:jm,transmission_pars_fragment:Zm,uv_pars_fragment:Jm,uv_pars_vertex:Km,uv_vertex:Qm,worldpos_vertex:t0,background_vert:e0,background_frag:n0,backgroundCube_vert:i0,backgroundCube_frag:s0,cube_vert:r0,cube_frag:a0,depth_vert:o0,depth_frag:c0,distanceRGBA_vert:l0,distanceRGBA_frag:h0,equirect_vert:u0,equirect_frag:d0,linedashed_vert:f0,linedashed_frag:p0,meshbasic_vert:m0,meshbasic_frag:g0,meshlambert_vert:_0,meshlambert_frag:x0,meshmatcap_vert:v0,meshmatcap_frag:M0,meshnormal_vert:y0,meshnormal_frag:S0,meshphong_vert:w0,meshphong_frag:E0,meshphysical_vert:b0,meshphysical_frag:T0,meshtoon_vert:A0,meshtoon_frag:R0,points_vert:C0,points_frag:P0,shadow_vert:L0,shadow_frag:D0,sprite_vert:I0,sprite_frag:U0},ft={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},wn={basic:{uniforms:Ve([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Ve([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Kt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Ve([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Ve([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Ve([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Kt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Ve([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Ve([ft.points,ft.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Ve([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Ve([ft.common,ft.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Ve([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Ve([ft.sprite,ft.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Ve([ft.common,ft.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Ve([ft.lights,ft.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};wn.physical={uniforms:Ve([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const zr={r:0,b:0,g:0},Si=new qn,N0=new le;function F0(i,t,e,n,s,r,a){const o=new Kt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function _(S){let y=!1;const x=g(S);x===null?p(o,c):x&&x.isColor&&(p(x,1),y=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===_a)?(h===void 0&&(h=new Jt(new on(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:ys(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Si.copy(y.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(N0.makeRotationFromEuler(Si)),h.material.toneMapped=ne.getTransfer(x.colorSpace)!==ce,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Jt(new Be(2,2),new pi({name:"BackgroundMaterial",uniforms:ys(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ne.getTransfer(x.colorSpace)!==ce,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,y){S.getRGB(zr,ou(i)),n.buffers.color.setClear(zr.r,zr.g,zr.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(S,y=1){o.set(S),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(o,c)},render:_,addToRenderList:m}}function O0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(M,P,W,F,O){let X=!1;const z=u(F,W,P);r!==z&&(r=z,l(r.object)),X=f(M,F,W,O),X&&g(M,F,W,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,x(M,P,W,F),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,P,W){const F=W.wireframe===!0;let O=n[M.id];O===void 0&&(O={},n[M.id]=O);let X=O[P.id];X===void 0&&(X={},O[P.id]=X);let z=X[F];return z===void 0&&(z=d(c()),X[F]=z),z}function d(M){const P=[],W=[],F=[];for(let O=0;O<e;O++)P[O]=0,W[O]=0,F[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:W,attributeDivisors:F,object:M,attributes:{},index:null}}function f(M,P,W,F){const O=r.attributes,X=P.attributes;let z=0;const J=W.getAttributes();for(const H in J)if(J[H].location>=0){const dt=O[H];let xt=X[H];if(xt===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor)),dt===void 0||dt.attribute!==xt||xt&&dt.data!==xt.data)return!0;z++}return r.attributesNum!==z||r.index!==F}function g(M,P,W,F){const O={},X=P.attributes;let z=0;const J=W.getAttributes();for(const H in J)if(J[H].location>=0){let dt=X[H];dt===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor));const xt={};xt.attribute=dt,dt&&dt.data&&(xt.data=dt.data),O[H]=xt,z++}r.attributes=O,r.attributesNum=z,r.index=F}function _(){const M=r.newAttributes;for(let P=0,W=M.length;P<W;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const W=r.newAttributes,F=r.enabledAttributes,O=r.attributeDivisors;W[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),O[M]!==P&&(i.vertexAttribDivisor(M,P),O[M]=P)}function S(){const M=r.newAttributes,P=r.enabledAttributes;for(let W=0,F=P.length;W<F;W++)P[W]!==M[W]&&(i.disableVertexAttribArray(W),P[W]=0)}function y(M,P,W,F,O,X,z){z===!0?i.vertexAttribIPointer(M,P,W,O,X):i.vertexAttribPointer(M,P,W,F,O,X)}function x(M,P,W,F){_();const O=F.attributes,X=W.getAttributes(),z=P.defaultAttributeValues;for(const J in X){const H=X[J];if(H.location>=0){let st=O[J];if(st===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){const dt=st.normalized,xt=st.itemSize,Ut=t.get(st);if(Ut===void 0)continue;const jt=Ut.buffer,Y=Ut.type,at=Ut.bytesPerElement,bt=Y===i.INT||Y===i.UNSIGNED_INT||st.gpuType===wc;if(st.isInterleavedBufferAttribute){const lt=st.data,Dt=lt.stride,Vt=st.offset;if(lt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<H.locationSize;Bt++)p(H.location+Bt,lt.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Bt=0;Bt<H.locationSize;Bt++)m(H.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let Bt=0;Bt<H.locationSize;Bt++)y(H.location+Bt,xt/H.locationSize,Y,dt,Dt*at,(Vt+xt/H.locationSize*Bt)*at,bt)}else{if(st.isInstancedBufferAttribute){for(let lt=0;lt<H.locationSize;lt++)p(H.location+lt,st.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let lt=0;lt<H.locationSize;lt++)m(H.location+lt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let lt=0;lt<H.locationSize;lt++)y(H.location+lt,xt/H.locationSize,Y,dt,xt*at,xt/H.locationSize*lt*at,bt)}}else if(z!==void 0){const dt=z[J];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(H.location,dt);break;case 3:i.vertexAttrib3fv(H.location,dt);break;case 4:i.vertexAttrib4fv(H.location,dt);break;default:i.vertexAttrib1fv(H.location,dt)}}}}S()}function D(){L();for(const M in n){const P=n[M];for(const W in P){const F=P[W];for(const O in F)h(F[O].object),delete F[O];delete P[W]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const W in P){const F=P[W];for(const O in F)h(F[O].object),delete F[O];delete P[W]}delete n[M.id]}function C(M){for(const P in n){const W=n[P];if(W[M.id]===void 0)continue;const F=W[M.id];for(const O in F)h(F[O].object),delete F[O];delete W[M.id]}}function L(){E(),a=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function k0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function B0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==xn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const L=C===ur&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Xn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==zn&&!L)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:D,maxSamples:T}}function z0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new oi,o=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const S=r?0:n,y=S*4;let x=p.clippingState||null;c.value=x,x=h(g,d,y,f);for(let D=0;D!==y;++D)x[D]=e[D];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)a.copy(u[y]).applyMatrix4(S,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function H0(i){let t=new WeakMap;function e(a,o){return o===Io?a.mapping=_s:o===Uo&&(a.mapping=xs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Io||o===Uo)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Kf(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class uu extends cu{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const us=4,kl=[.125,.215,.35,.446,.526,.582],Ci=20,so=new uu,Bl=new Kt;let ro=null,ao=0,oo=0,co=!1;const Ti=(1+Math.sqrt(5))/2,rs=1/Ti,zl=[new A(-Ti,rs,0),new A(Ti,rs,0),new A(-rs,0,Ti),new A(rs,0,Ti),new A(0,Ti,-rs),new A(0,Ti,rs),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class Hl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ro=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ro,ao,oo),this._renderer.xr.enabled=co,t.scissorTest=!1,Hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ro=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:ur,format:xn,colorSpace:Es,depthBuffer:!1},s=Vl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=V0(r)),this._blurMaterial=G0(r,t,e)}return s}_compileMaterial(t){const e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,so)}_sceneToCubeUV(t,e,n,s){const o=new $e(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Bl),h.toneMapping=ui,h.autoClear=!1;const f=new cn({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),g=new Jt(new on,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Bl),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):S===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const y=this._cubeSize;Hr(s,S*y,p>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===_s||t.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Jt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Hr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,so)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=zl[(s-r-1)%zl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Jt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ci-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ci;m>Ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ci}`);const p=[];let S=0;for(let C=0;C<Ci;++C){const L=C/_,E=Math.exp(-L*L/2);p.push(E),C===0?S+=E:C<m&&(S+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[s],D=3*x*(s>y-us?s-y+us:0),T=4*(this._cubeSize-x);Hr(e,D,T,3*x,2*x),c.setRenderTarget(e),c.render(u,so)}}function V0(i){const t=[],e=[],n=[];let s=i;const r=i-us+1+kl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-us?c=kl[a-i+us-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,L=T>2?0:-1,E=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];S.set(E,_*g*T),y.set(d,m*g*T);const M=[T,T,T,T,T,T];x.set(M,p*g*T)}const D=new Ce;D.setAttribute("position",new vn(S,_)),D.setAttribute("uv",new vn(y,m)),D.setAttribute("faceIndex",new vn(x,p)),t.push(D),s>us&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Vl(i,t,e){const n=new Fi(i,t,e);return n.texture.mapping=_a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function G0(i,t,e){const n=new Float32Array(Ci),s=new A(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Gl(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Wl(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Ic(){return`

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
	`}function W0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Io||c===Uo,h=c===_s||c===xs;if(l||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Hl(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Hl(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function X0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&$s("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function q0(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let y=0,x=S.length;y<x;y+=3){const D=S[y+0],T=S[y+1],C=S[y+2];d.push(D,T,T,C,C,D)}}else if(g!==void 0){const S=g.array;_=g.version;for(let y=0,x=S.length/3-1;y<x;y+=3){const D=y+0,T=y+1,C=y+2;d.push(D,T,T,C,C,D)}}else return;const m=new(eu(d)?au:ru)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Y0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*_[S];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function $0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function j0(i,t,e){const n=new WeakMap,s=new xe;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let E=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=o.attributes.position.count*y,D=1;x>t.maxTextureSize&&(D=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const T=new Float32Array(x*D*4*u),C=new iu(T,x,D,u);C.type=zn,C.needsUpdate=!0;const L=y*4;for(let M=0;M<u;M++){const P=m[M],W=p[M],F=S[M],O=x*D*4*M;for(let X=0;X<P.count;X++){const z=X*L;f===!0&&(s.fromBufferAttribute(P,X),T[O+z+0]=s.x,T[O+z+1]=s.y,T[O+z+2]=s.z,T[O+z+3]=0),g===!0&&(s.fromBufferAttribute(W,X),T[O+z+4]=s.x,T[O+z+5]=s.y,T[O+z+6]=s.z,T[O+z+7]=0),_===!0&&(s.fromBufferAttribute(F,X),T[O+z+8]=s.x,T[O+z+9]=s.y,T[O+z+10]=s.z,T[O+z+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new et(x,D)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Z0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class du extends ke{constructor(t,e,n,s,r,a,o,c,l,h=ps){if(h!==ps&&h!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ps&&(n=Ni),n===void 0&&h===Ms&&(n=vs),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:We,this.minFilter=c!==void 0?c:We,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const fu=new ke,Xl=new du(1,1),pu=new iu,mu=new Ff,gu=new lu,ql=[],Yl=[],$l=new Float32Array(16),jl=new Float32Array(9),Zl=new Float32Array(4);function As(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ql[s];if(r===void 0&&(r=new Float32Array(s),ql[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ma(i,t){let e=Yl[t];e===void 0&&(e=new Int32Array(t),Yl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function J0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function K0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function Q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function eg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;Zl.set(n),i.uniformMatrix2fv(this.addr,!1,Zl),Re(e,n)}}function ng(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;jl.set(n),i.uniformMatrix3fv(this.addr,!1,jl),Re(e,n)}}function ig(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;$l.set(n),i.uniformMatrix4fv(this.addr,!1,$l),Re(e,n)}}function sg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function cg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function dg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xl.compareFunction=tu,r=Xl):r=fu,e.setTexture2D(t||r,s)}function fg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||mu,s)}function pg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||gu,s)}function mg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||pu,s)}function gg(i){switch(i){case 5126:return J0;case 35664:return K0;case 35665:return Q0;case 35666:return tg;case 35674:return eg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return sg;case 35667:case 35671:return rg;case 35668:case 35672:return ag;case 35669:case 35673:return og;case 5125:return cg;case 36294:return lg;case 36295:return hg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return fg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}function _g(i,t){i.uniform1fv(this.addr,t)}function xg(i,t){const e=As(t,this.size,2);i.uniform2fv(this.addr,e)}function vg(i,t){const e=As(t,this.size,3);i.uniform3fv(this.addr,e)}function Mg(i,t){const e=As(t,this.size,4);i.uniform4fv(this.addr,e)}function yg(i,t){const e=As(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Sg(i,t){const e=As(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function wg(i,t){const e=As(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Eg(i,t){i.uniform1iv(this.addr,t)}function bg(i,t){i.uniform2iv(this.addr,t)}function Tg(i,t){i.uniform3iv(this.addr,t)}function Ag(i,t){i.uniform4iv(this.addr,t)}function Rg(i,t){i.uniform1uiv(this.addr,t)}function Cg(i,t){i.uniform2uiv(this.addr,t)}function Pg(i,t){i.uniform3uiv(this.addr,t)}function Lg(i,t){i.uniform4uiv(this.addr,t)}function Dg(i,t,e){const n=this.cache,s=t.length,r=Ma(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||fu,r[a])}function Ig(i,t,e){const n=this.cache,s=t.length,r=Ma(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||mu,r[a])}function Ug(i,t,e){const n=this.cache,s=t.length,r=Ma(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||gu,r[a])}function Ng(i,t,e){const n=this.cache,s=t.length,r=Ma(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||pu,r[a])}function Fg(i){switch(i){case 5126:return _g;case 35664:return xg;case 35665:return vg;case 35666:return Mg;case 35674:return yg;case 35675:return Sg;case 35676:return wg;case 5124:case 35670:return Eg;case 35667:case 35671:return bg;case 35668:case 35672:return Tg;case 35669:case 35673:return Ag;case 5125:return Rg;case 36294:return Cg;case 36295:return Pg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Ng}}class Og{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gg(e.type)}}class kg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fg(e.type)}}class Bg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const lo=/(\w+)(\])?(\[|\.)?/g;function Jl(i,t){i.seq.push(t),i.map[t.id]=t}function zg(i,t,e){const n=i.name,s=n.length;for(lo.lastIndex=0;;){const r=lo.exec(n),a=lo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Jl(e,l===void 0?new Og(o,i,t):new kg(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Bg(o),Jl(e,u)),e=u}}}class ca{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);zg(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Kl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Hg=37297;let Vg=0;function Gg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Ql=new qt;function Wg(i){ne._getMatrix(Ql,ne.workingColorSpace,i);const t=`mat3( ${Ql.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case va:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function th(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Gg(i.getShaderSource(t),a)}else return s}function Xg(i,t){const e=Wg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function qg(i,t){let e;switch(t){case Yd:e="Linear";break;case $d:e="Reinhard";break;case jd:e="Cineon";break;case Zd:e="ACESFilmic";break;case Kd:e="AgX";break;case Qd:e="Neutral";break;case Jd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Vr=new A;function Yg(){ne.getLuminanceCoefficients(Vr);const i=Vr.x.toFixed(4),t=Vr.y.toFixed(4),e=Vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $g(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function jg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function js(i){return i!==""}function eh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(i){return i.replace(Jg,Qg)}const Kg=new Map;function Qg(i,t){let e=$t[t];if(e===void 0){const n=Kg.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return hc(e)}const t_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ih(i){return i.replace(t_,e_)}function e_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function n_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function i_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _s:case xs:t="ENVMAP_TYPE_CUBE";break;case _a:t="ENVMAP_TYPE_CUBE_UV";break}return t}function s_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case xs:t="ENVMAP_MODE_REFRACTION";break}return t}function r_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vh:t="ENVMAP_BLENDING_MULTIPLY";break;case Xd:t="ENVMAP_BLENDING_MIX";break;case qd:t="ENVMAP_BLENDING_ADD";break}return t}function a_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function o_(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=n_(e),l=i_(e),h=s_(e),u=r_(e),d=a_(e),f=$g(e),g=jg(r),_=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),p.length>0&&(p+=`
`)):(m=[sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),p=[sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?$t.tonemapping_pars_fragment:"",e.toneMapping!==ui?qg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Xg("linearToOutputTexel",e.outputColorSpace),Yg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(js).join(`
`)),a=hc(a),a=eh(a,e),a=nh(a,e),o=hc(o),o=eh(o,e),o=nh(o,e),a=ih(a),o=ih(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+m+a,x=S+p+o,D=Kl(s,s.VERTEX_SHADER,y),T=Kl(s,s.FRAGMENT_SHADER,x);s.attachShader(_,D),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(P){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(D).trim(),O=s.getShaderInfoLog(T).trim();let X=!0,z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,T);else{const J=th(s,D,"vertex"),H=th(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+J+`
`+H)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(F===""||O==="")&&(z=!1);z&&(P.diagnostics={runnable:X,programLog:W,vertexShader:{log:F,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(D),s.deleteShader(T),L=new ca(s,_),E=Zg(s,_)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Hg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=T,this}let c_=0;class l_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new h_(t),e.set(t,n)),n}}class h_{constructor(t){this.id=c_++,this.code=t,this.usedTimes=0}}function u_(i,t,e,n,s,r,a){const o=new Lc,c=new l_,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,P,W,F){const O=W.fog,X=F.geometry,z=E.isMeshStandardMaterial?W.environment:null,J=(E.isMeshStandardMaterial?e:t).get(E.envMap||z),H=J&&J.mapping===_a?J.image.height:null,st=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const dt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,xt=dt!==void 0?dt.length:0;let Ut=0;X.morphAttributes.position!==void 0&&(Ut=1),X.morphAttributes.normal!==void 0&&(Ut=2),X.morphAttributes.color!==void 0&&(Ut=3);let jt,Y,at,bt;if(st){const ae=wn[st];jt=ae.vertexShader,Y=ae.fragmentShader}else jt=E.vertexShader,Y=E.fragmentShader,c.update(E),at=c.getVertexShaderID(E),bt=c.getFragmentShaderID(E);const lt=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),Vt=F.isInstancedMesh===!0,Bt=F.isBatchedMesh===!0,ee=!!E.map,Q=!!E.matcap,rt=!!J,R=!!E.aoMap,Pt=!!E.lightMap,nt=!!E.bumpMap,St=!!E.normalMap,ut=!!E.displacementMap,Ft=!!E.emissiveMap,Mt=!!E.metalnessMap,b=!!E.roughnessMap,v=E.anisotropy>0,B=E.clearcoat>0,$=E.dispersion>0,tt=E.iridescence>0,j=E.sheen>0,Tt=E.transmission>0,pt=v&&!!E.anisotropyMap,yt=B&&!!E.clearcoatMap,Zt=B&&!!E.clearcoatNormalMap,it=B&&!!E.clearcoatRoughnessMap,wt=tt&&!!E.iridescenceMap,Ot=tt&&!!E.iridescenceThicknessMap,zt=j&&!!E.sheenColorMap,Et=j&&!!E.sheenRoughnessMap,Qt=!!E.specularMap,Yt=!!E.specularColorMap,he=!!E.specularIntensityMap,I=Tt&&!!E.transmissionMap,mt=Tt&&!!E.thicknessMap,q=!!E.gradientMap,K=!!E.alphaMap,vt=E.alphaTest>0,gt=!!E.alphaHash,Wt=!!E.extensions;let _e=ui;E.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(_e=i.toneMapping);const Ue={shaderID:st,shaderType:E.type,shaderName:E.name,vertexShader:jt,fragmentShader:Y,defines:E.defines,customVertexShaderID:at,customFragmentShaderID:bt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Bt,batchingColor:Bt&&F._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&F.instanceColor!==null,instancingMorph:Vt&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Es,alphaToCoverage:!!E.alphaToCoverage,map:ee,matcap:Q,envMap:rt,envMapMode:rt&&J.mapping,envMapCubeUVHeight:H,aoMap:R,lightMap:Pt,bumpMap:nt,normalMap:St,displacementMap:d&&ut,emissiveMap:Ft,normalMapObjectSpace:St&&E.normalMapType===sf,normalMapTangentSpace:St&&E.normalMapType===Qh,metalnessMap:Mt,roughnessMap:b,anisotropy:v,anisotropyMap:pt,clearcoat:B,clearcoatMap:yt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:it,dispersion:$,iridescence:tt,iridescenceMap:wt,iridescenceThicknessMap:Ot,sheen:j,sheenColorMap:zt,sheenRoughnessMap:Et,specularMap:Qt,specularColorMap:Yt,specularIntensityMap:he,transmission:Tt,transmissionMap:I,thicknessMap:mt,gradientMap:q,opaque:E.transparent===!1&&E.blending===fs&&E.alphaToCoverage===!1,alphaMap:K,alphaTest:vt,alphaHash:gt,combine:E.combine,mapUv:ee&&_(E.map.channel),aoMapUv:R&&_(E.aoMap.channel),lightMapUv:Pt&&_(E.lightMap.channel),bumpMapUv:nt&&_(E.bumpMap.channel),normalMapUv:St&&_(E.normalMap.channel),displacementMapUv:ut&&_(E.displacementMap.channel),emissiveMapUv:Ft&&_(E.emissiveMap.channel),metalnessMapUv:Mt&&_(E.metalnessMap.channel),roughnessMapUv:b&&_(E.roughnessMap.channel),anisotropyMapUv:pt&&_(E.anisotropyMap.channel),clearcoatMapUv:yt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(E.sheenRoughnessMap.channel),specularMapUv:Qt&&_(E.specularMap.channel),specularColorMapUv:Yt&&_(E.specularColorMap.channel),specularIntensityMapUv:he&&_(E.specularIntensityMap.channel),transmissionMapUv:I&&_(E.transmissionMap.channel),thicknessMapUv:mt&&_(E.thicknessMap.channel),alphaMapUv:K&&_(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(St||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(ee||K),fog:!!O,useFog:E.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Dt,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Ut,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:ee&&E.map.isVideoTexture===!0&&ne.getTransfer(E.map.colorSpace)===ce,decodeVideoTextureEmissive:Ft&&E.emissiveMap.isVideoTexture===!0&&ne.getTransfer(E.emissiveMap.colorSpace)===ce,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===be,flipSided:E.side===Ze,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Wt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&E.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ue.vertexUv1s=l.has(1),Ue.vertexUv2s=l.has(2),Ue.vertexUv3s=l.has(3),l.clear(),Ue}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)M.push(P),M.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(S(M,E),y(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function S(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){const M=g[E.type];let P;if(M){const W=wn[M];P=$f.clone(W.uniforms)}else P=E.uniforms;return P}function D(E,M){let P;for(let W=0,F=h.length;W<F;W++){const O=h[W];if(O.cacheKey===M){P=O,++P.usedTimes;break}}return P===void 0&&(P=new o_(i,M,E,r),h.push(P)),P}function T(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function C(E){c.remove(E)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:D,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:L}}function d_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function f_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function rh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ah(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||f_),n.length>1&&n.sort(d||rh),s.length>1&&s.sort(d||rh)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function p_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new ah,i.set(n,[a])):s>=r.length?(a=new ah,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function m_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Kt};break;case"SpotLight":e={position:new A,direction:new A,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function g_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let __=0;function x_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function v_(i){const t=new m_,e=g_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const s=new A,r=new le,a=new le;function o(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,y=0,x=0,D=0,T=0,C=0;l.sort(x_);for(let E=0,M=l.length;E<M;E++){const P=l[E],W=P.color,F=P.intensity,O=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=W.r*F,u+=W.g*F,d+=W.b*F;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],F);C++}else if(P.isDirectionalLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,H=e.get(P);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=P.shadow.matrix,S++}n.directional[f]=z,f++}else if(P.isSpotLight){const z=t.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(W).multiplyScalar(F),z.distance=O,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[_]=z;const J=P.shadow;if(P.map&&(n.spotLightMap[D]=P.map,D++,J.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[_]=J.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=X,x++}_++}else if(P.isRectAreaLight){const z=t.get(P);z.color.copy(W).multiplyScalar(F),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=z,m++}else if(P.isPointLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const J=P.shadow,H=e.get(P);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=z,g++}else if(P.isHemisphereLight){const z=t.get(P);z.skyColor.copy(P.color).multiplyScalar(F),z.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==S||L.numPointShadows!==y||L.numSpotShadows!==x||L.numSpotMaps!==D||L.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+D-T,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=S,L.numPointShadows=y,L.numSpotShadows=x,L.numSpotMaps=D,L.numLightProbes=C,n.version=__++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const y=l[p];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function oh(i){const t=new v_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function M_(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new oh(i),t.set(s,[o])):r>=a.length?(o=new oh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class y_ extends zi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class S_ extends zi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const w_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E_=`uniform sampler2D shadow_pass;
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
}`;function b_(i,t,e){let n=new Dc;const s=new et,r=new et,a=new xe,o=new y_({depthPacking:nf}),c=new S_,l={},h=e.maxTextureSize,u={[fi]:Ze,[Ze]:fi,[be]:be},d=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:w_,fragmentShader:E_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ce;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Jt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zh;let p=this.type;this.render=function(T,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),W=i.state;W.setBlending(hi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const F=p!==kn&&this.type===kn,O=p===kn&&this.type!==kn;for(let X=0,z=T.length;X<z;X++){const J=T[X],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const st=H.getFrameExtents();if(s.multiply(st),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,H.mapSize.y=r.y)),H.map===null||F===!0||O===!0){const xt=this.type!==kn?{minFilter:We,magFilter:We}:{};H.map!==null&&H.map.dispose(),H.map=new Fi(s.x,s.y,xt),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const dt=H.getViewportCount();for(let xt=0;xt<dt;xt++){const Ut=H.getViewport(xt);a.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),W.viewport(a),H.updateMatrices(J,xt),n=H.getFrustum(),x(C,L,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===kn&&S(H,L),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,P)};function S(T,C){const L=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Fi(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,L,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,L,f,_,null)}function y(T,C,L,E){let M=null;const P=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=L.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const W=M.uuid,F=C.uuid;let O=l[W];O===void 0&&(O={},l[W]=O);let X=O[F];X===void 0&&(X=M.clone(),O[F]=X,C.addEventListener("dispose",D)),M=X}if(M.visible=C.visible,M.wireframe=C.wireframe,E===kn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=i.properties.get(M);W.light=L}return M}function x(T,C,L,E,M){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===kn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const F=t.update(T),O=T.material;if(Array.isArray(O)){const X=F.groups;for(let z=0,J=X.length;z<J;z++){const H=X[z],st=O[H.materialIndex];if(st&&st.visible){const dt=y(T,st,E,M);T.onBeforeShadow(i,T,C,L,F,dt,H),i.renderBufferDirect(L,null,F,dt,T,H),T.onAfterShadow(i,T,C,L,F,dt,H)}}}else if(O.visible){const X=y(T,O,E,M);T.onBeforeShadow(i,T,C,L,F,X,null),i.renderBufferDirect(L,null,F,X,T,null),T.onAfterShadow(i,T,C,L,F,X,null)}}const W=T.children;for(let F=0,O=W.length;F<O;F++)x(W[F],C,L,E,M)}function D(T){T.target.removeEventListener("dispose",D);for(const L in l){const E=l[L],M=T.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const T_={[To]:Ao,[Ro]:Lo,[Co]:Do,[gs]:Po,[Ao]:To,[Lo]:Ro,[Do]:Co,[Po]:gs};function A_(i,t){function e(){let I=!1;const mt=new xe;let q=null;const K=new xe(0,0,0,0);return{setMask:function(vt){q!==vt&&!I&&(i.colorMask(vt,vt,vt,vt),q=vt)},setLocked:function(vt){I=vt},setClear:function(vt,gt,Wt,_e,Ue){Ue===!0&&(vt*=_e,gt*=_e,Wt*=_e),mt.set(vt,gt,Wt,_e),K.equals(mt)===!1&&(i.clearColor(vt,gt,Wt,_e),K.copy(mt))},reset:function(){I=!1,q=null,K.set(-1,0,0,0)}}}function n(){let I=!1,mt=!1,q=null,K=null,vt=null;return{setReversed:function(gt){if(mt!==gt){const Wt=t.get("EXT_clip_control");mt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);const _e=vt;vt=null,this.setClear(_e)}mt=gt},getReversed:function(){return mt},setTest:function(gt){gt?lt(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(gt){q!==gt&&!I&&(i.depthMask(gt),q=gt)},setFunc:function(gt){if(mt&&(gt=T_[gt]),K!==gt){switch(gt){case To:i.depthFunc(i.NEVER);break;case Ao:i.depthFunc(i.ALWAYS);break;case Ro:i.depthFunc(i.LESS);break;case gs:i.depthFunc(i.LEQUAL);break;case Co:i.depthFunc(i.EQUAL);break;case Po:i.depthFunc(i.GEQUAL);break;case Lo:i.depthFunc(i.GREATER);break;case Do:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=gt}},setLocked:function(gt){I=gt},setClear:function(gt){vt!==gt&&(mt&&(gt=1-gt),i.clearDepth(gt),vt=gt)},reset:function(){I=!1,q=null,K=null,vt=null,mt=!1}}}function s(){let I=!1,mt=null,q=null,K=null,vt=null,gt=null,Wt=null,_e=null,Ue=null;return{setTest:function(ae){I||(ae?lt(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(ae){mt!==ae&&!I&&(i.stencilMask(ae),mt=ae)},setFunc:function(ae,ln,Cn){(q!==ae||K!==ln||vt!==Cn)&&(i.stencilFunc(ae,ln,Cn),q=ae,K=ln,vt=Cn)},setOp:function(ae,ln,Cn){(gt!==ae||Wt!==ln||_e!==Cn)&&(i.stencilOp(ae,ln,Cn),gt=ae,Wt=ln,_e=Cn)},setLocked:function(ae){I=ae},setClear:function(ae){Ue!==ae&&(i.clearStencil(ae),Ue=ae)},reset:function(){I=!1,mt=null,q=null,K=null,vt=null,gt=null,Wt=null,_e=null,Ue=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,y=null,x=null,D=null,T=null,C=new Kt(0,0,0),L=0,E=!1,M=null,P=null,W=null,F=null,O=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,J=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=J>=2);let st=null,dt={};const xt=i.getParameter(i.SCISSOR_BOX),Ut=i.getParameter(i.VIEWPORT),jt=new xe().fromArray(xt),Y=new xe().fromArray(Ut);function at(I,mt,q,K){const vt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(I,gt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<q;Wt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(mt+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return gt}const bt={};bt[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),bt[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),bt[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(i.DEPTH_TEST),a.setFunc(gs),nt(!1),St(dl),lt(i.CULL_FACE),R(hi);function lt(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Dt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Vt(I,mt){return u[I]!==mt?(i.bindFramebuffer(I,mt),u[I]=mt,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=mt),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function Bt(I,mt){let q=f,K=!1;if(I){q=d.get(mt),q===void 0&&(q=[],d.set(mt,q));const vt=I.textures;if(q.length!==vt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Wt=vt.length;gt<Wt;gt++)q[gt]=i.COLOR_ATTACHMENT0+gt;q.length=vt.length,K=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,K=!0);K&&i.drawBuffers(q)}function ee(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Q={[Ri]:i.FUNC_ADD,[Rd]:i.FUNC_SUBTRACT,[Cd]:i.FUNC_REVERSE_SUBTRACT};Q[Pd]=i.MIN,Q[Ld]=i.MAX;const rt={[Dd]:i.ZERO,[Id]:i.ONE,[Ud]:i.SRC_COLOR,[Eo]:i.SRC_ALPHA,[zd]:i.SRC_ALPHA_SATURATE,[kd]:i.DST_COLOR,[Fd]:i.DST_ALPHA,[Nd]:i.ONE_MINUS_SRC_COLOR,[bo]:i.ONE_MINUS_SRC_ALPHA,[Bd]:i.ONE_MINUS_DST_COLOR,[Od]:i.ONE_MINUS_DST_ALPHA,[Hd]:i.CONSTANT_COLOR,[Vd]:i.ONE_MINUS_CONSTANT_COLOR,[Gd]:i.CONSTANT_ALPHA,[Wd]:i.ONE_MINUS_CONSTANT_ALPHA};function R(I,mt,q,K,vt,gt,Wt,_e,Ue,ae){if(I===hi){_===!0&&(Dt(i.BLEND),_=!1);return}if(_===!1&&(lt(i.BLEND),_=!0),I!==Ad){if(I!==m||ae!==E){if((p!==Ri||x!==Ri)&&(i.blendEquation(i.FUNC_ADD),p=Ri,x=Ri),ae)switch(I){case fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nr:i.blendFunc(i.ONE,i.ONE);break;case fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,y=null,D=null,T=null,C.set(0,0,0),L=0,m=I,E=ae}return}vt=vt||mt,gt=gt||q,Wt=Wt||K,(mt!==p||vt!==x)&&(i.blendEquationSeparate(Q[mt],Q[vt]),p=mt,x=vt),(q!==S||K!==y||gt!==D||Wt!==T)&&(i.blendFuncSeparate(rt[q],rt[K],rt[gt],rt[Wt]),S=q,y=K,D=gt,T=Wt),(_e.equals(C)===!1||Ue!==L)&&(i.blendColor(_e.r,_e.g,_e.b,Ue),C.copy(_e),L=Ue),m=I,E=!1}function Pt(I,mt){I.side===be?Dt(i.CULL_FACE):lt(i.CULL_FACE);let q=I.side===Ze;mt&&(q=!q),nt(q),I.blending===fs&&I.transparent===!1?R(hi):R(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const K=I.stencilWrite;o.setTest(K),K&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ft(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(I){M!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),M=I)}function St(I){I!==bd?(lt(i.CULL_FACE),I!==P&&(I===dl?i.cullFace(i.BACK):I===Td?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),P=I}function ut(I){I!==W&&(z&&i.lineWidth(I),W=I)}function Ft(I,mt,q){I?(lt(i.POLYGON_OFFSET_FILL),(F!==mt||O!==q)&&(i.polygonOffset(mt,q),F=mt,O=q)):Dt(i.POLYGON_OFFSET_FILL)}function Mt(I){I?lt(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function b(I){I===void 0&&(I=i.TEXTURE0+X-1),st!==I&&(i.activeTexture(I),st=I)}function v(I,mt,q){q===void 0&&(st===null?q=i.TEXTURE0+X-1:q=st);let K=dt[q];K===void 0&&(K={type:void 0,texture:void 0},dt[q]=K),(K.type!==I||K.texture!==mt)&&(st!==q&&(i.activeTexture(q),st=q),i.bindTexture(I,mt||bt[I]),K.type=I,K.texture=mt)}function B(){const I=dt[st];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Zt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ot(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function zt(I){jt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),jt.copy(I))}function Et(I){Y.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function Qt(I,mt){let q=l.get(mt);q===void 0&&(q=new WeakMap,l.set(mt,q));let K=q.get(I);K===void 0&&(K=i.getUniformBlockIndex(mt,I.name),q.set(I,K))}function Yt(I,mt){const K=l.get(mt).get(I);c.get(mt)!==K&&(i.uniformBlockBinding(mt,K,I.__bindingPointIndex),c.set(mt,K))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,dt={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,y=null,x=null,D=null,T=null,C=new Kt(0,0,0),L=0,E=!1,M=null,P=null,W=null,F=null,O=null,jt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:Dt,bindFramebuffer:Vt,drawBuffers:Bt,useProgram:ee,setBlending:R,setMaterial:Pt,setFlipSided:nt,setCullFace:St,setLineWidth:ut,setPolygonOffset:Ft,setScissorTest:Mt,activeTexture:b,bindTexture:v,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:tt,texImage2D:wt,texImage3D:Ot,updateUBOMapping:Qt,uniformBlockBinding:Yt,texStorage2D:Zt,texStorage3D:it,texSubImage2D:j,texSubImage3D:Tt,compressedTexSubImage2D:pt,compressedTexSubImage3D:yt,scissor:zt,viewport:Et,reset:he}}function ch(i,t,e,n){const s=R_(n);switch(e){case Yh:return i*t;case jh:return i*t;case Zh:return i*t*2;case xa:return i*t/s.components*s.byteLength;case Tc:return i*t/s.components*s.byteLength;case Jh:return i*t*2/s.components*s.byteLength;case Ac:return i*t*2/s.components*s.byteLength;case $h:return i*t*3/s.components*s.byteLength;case xn:return i*t*4/s.components*s.byteLength;case Rc:return i*t*4/s.components*s.byteLength;case ia:case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ra:case aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ko:case zo:return Math.max(i,16)*Math.max(t,8)/4;case Oo:case Bo:return Math.max(i,8)*Math.max(t,8)/2;case Ho:case Vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case qo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case $o:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case jo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case nc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case oa:case sc:case rc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Kh:case ac:return Math.ceil(i/4)*Math.ceil(t/4)*8;case oc:case cc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function R_(i){switch(i){case Xn:case Wh:return{byteLength:1,components:1};case ir:case Xh:case ur:return{byteLength:2,components:1};case Ec:case bc:return{byteLength:2,components:4};case Ni:case wc:case zn:return{byteLength:4,components:1};case qh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function C_(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new et,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return f?new OffscreenCanvas(b,v):ha("canvas")}function _(b,v,B){let $=1;const tt=Mt(b);if((tt.width>B||tt.height>B)&&($=B/Math.max(tt.width,tt.height)),$<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const j=Math.floor($*tt.width),Tt=Math.floor($*tt.height);u===void 0&&(u=g(j,Tt));const pt=v?g(j,Tt):u;return pt.width=j,pt.height=Tt,pt.getContext("2d").drawImage(b,0,0,j,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+j+"x"+Tt+")."),pt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){i.generateMipmap(b)}function S(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(b,v,B,$,tt=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let j=v;if(v===i.RED&&(B===i.FLOAT&&(j=i.R32F),B===i.HALF_FLOAT&&(j=i.R16F),B===i.UNSIGNED_BYTE&&(j=i.R8)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.R8UI),B===i.UNSIGNED_SHORT&&(j=i.R16UI),B===i.UNSIGNED_INT&&(j=i.R32UI),B===i.BYTE&&(j=i.R8I),B===i.SHORT&&(j=i.R16I),B===i.INT&&(j=i.R32I)),v===i.RG&&(B===i.FLOAT&&(j=i.RG32F),B===i.HALF_FLOAT&&(j=i.RG16F),B===i.UNSIGNED_BYTE&&(j=i.RG8)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RG8UI),B===i.UNSIGNED_SHORT&&(j=i.RG16UI),B===i.UNSIGNED_INT&&(j=i.RG32UI),B===i.BYTE&&(j=i.RG8I),B===i.SHORT&&(j=i.RG16I),B===i.INT&&(j=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGB8UI),B===i.UNSIGNED_SHORT&&(j=i.RGB16UI),B===i.UNSIGNED_INT&&(j=i.RGB32UI),B===i.BYTE&&(j=i.RGB8I),B===i.SHORT&&(j=i.RGB16I),B===i.INT&&(j=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),B===i.UNSIGNED_INT&&(j=i.RGBA32UI),B===i.BYTE&&(j=i.RGBA8I),B===i.SHORT&&(j=i.RGBA16I),B===i.INT&&(j=i.RGBA32I)),v===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),v===i.RGBA){const Tt=tt?va:ne.getTransfer($);B===i.FLOAT&&(j=i.RGBA32F),B===i.HALF_FLOAT&&(j=i.RGBA16F),B===i.UNSIGNED_BYTE&&(j=Tt===ce?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(b,v){let B;return b?v===null||v===Ni||v===vs?B=i.DEPTH24_STENCIL8:v===zn?B=i.DEPTH32F_STENCIL8:v===ir&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ni||v===vs?B=i.DEPTH_COMPONENT24:v===zn?B=i.DEPTH_COMPONENT32F:v===ir&&(B=i.DEPTH_COMPONENT16),B}function D(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==We&&b.minFilter!==En?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function T(b){const v=b.target;v.removeEventListener("dispose",T),L(v),v.isVideoTexture&&h.delete(v)}function C(b){const v=b.target;v.removeEventListener("dispose",C),M(v)}function L(b){const v=n.get(b);if(v.__webglInit===void 0)return;const B=b.source,$=d.get(B);if($){const tt=$[v.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&E(b),Object.keys($).length===0&&d.delete(B)}n.remove(b)}function E(b){const v=n.get(b);i.deleteTexture(v.__webglTexture);const B=b.source,$=d.get(B);delete $[v.__cacheKey],a.memory.textures--}function M(b){const v=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let tt=0;tt<v.__webglFramebuffer[$].length;tt++)i.deleteFramebuffer(v.__webglFramebuffer[$][tt]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=b.textures;for(let $=0,tt=B.length;$<tt;$++){const j=n.get(B[$]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(B[$])}n.remove(b)}let P=0;function W(){P=0}function F(){const b=P;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),P+=1,b}function O(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function X(b,v){const B=n.get(b);if(b.isVideoTexture&&ut(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,b,v);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function z(b,v){const B=n.get(b);if(b.version>0&&B.__version!==b.version){Y(B,b,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function J(b,v){const B=n.get(b);if(b.version>0&&B.__version!==b.version){Y(B,b,v);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function H(b,v){const B=n.get(b);if(b.version>0&&B.__version!==b.version){at(B,b,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}const st={[No]:i.REPEAT,[Pi]:i.CLAMP_TO_EDGE,[Fo]:i.MIRRORED_REPEAT},dt={[We]:i.NEAREST,[tf]:i.NEAREST_MIPMAP_NEAREST,[Sr]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[Oa]:i.LINEAR_MIPMAP_NEAREST,[Li]:i.LINEAR_MIPMAP_LINEAR},xt={[rf]:i.NEVER,[uf]:i.ALWAYS,[af]:i.LESS,[tu]:i.LEQUAL,[of]:i.EQUAL,[hf]:i.GEQUAL,[cf]:i.GREATER,[lf]:i.NOTEQUAL};function Ut(b,v){if(v.type===zn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===En||v.magFilter===Oa||v.magFilter===Sr||v.magFilter===Li||v.minFilter===En||v.minFilter===Oa||v.minFilter===Sr||v.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,st[v.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,st[v.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,st[v.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,dt[v.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,dt[v.minFilter]),v.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,xt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===We||v.minFilter!==Sr&&v.minFilter!==Li||v.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function jt(b,v){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",T));const $=v.source;let tt=d.get($);tt===void 0&&(tt={},d.set($,tt));const j=O(v);if(j!==b.__cacheKey){tt[j]===void 0&&(tt[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),tt[j].usedTimes++;const Tt=tt[b.__cacheKey];Tt!==void 0&&(tt[b.__cacheKey].usedTimes--,Tt.usedTimes===0&&E(v)),b.__cacheKey=j,b.__webglTexture=tt[j].texture}return B}function Y(b,v,B){let $=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=i.TEXTURE_3D);const tt=jt(b,v),j=v.source;e.bindTexture($,b.__webglTexture,i.TEXTURE0+B);const Tt=n.get(j);if(j.version!==Tt.__version||tt===!0){e.activeTexture(i.TEXTURE0+B);const pt=ne.getPrimaries(ne.workingColorSpace),yt=v.colorSpace===ci?null:ne.getPrimaries(v.colorSpace),Zt=v.colorSpace===ci||pt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let it=_(v.image,!1,s.maxTextureSize);it=Ft(v,it);const wt=r.convert(v.format,v.colorSpace),Ot=r.convert(v.type);let zt=y(v.internalFormat,wt,Ot,v.colorSpace,v.isVideoTexture);Ut($,v);let Et;const Qt=v.mipmaps,Yt=v.isVideoTexture!==!0,he=Tt.__version===void 0||tt===!0,I=j.dataReady,mt=D(v,it);if(v.isDepthTexture)zt=x(v.format===Ms,v.type),he&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,zt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,zt,it.width,it.height,0,wt,Ot,null));else if(v.isDataTexture)if(Qt.length>0){Yt&&he&&e.texStorage2D(i.TEXTURE_2D,mt,zt,Qt[0].width,Qt[0].height);for(let q=0,K=Qt.length;q<K;q++)Et=Qt[q],Yt?I&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Et.width,Et.height,wt,Ot,Et.data):e.texImage2D(i.TEXTURE_2D,q,zt,Et.width,Et.height,0,wt,Ot,Et.data);v.generateMipmaps=!1}else Yt?(he&&e.texStorage2D(i.TEXTURE_2D,mt,zt,it.width,it.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,wt,Ot,it.data)):e.texImage2D(i.TEXTURE_2D,0,zt,it.width,it.height,0,wt,Ot,it.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Yt&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,zt,Qt[0].width,Qt[0].height,it.depth);for(let q=0,K=Qt.length;q<K;q++)if(Et=Qt[q],v.format!==xn)if(wt!==null)if(Yt){if(I)if(v.layerUpdates.size>0){const vt=ch(Et.width,Et.height,v.format,v.type);for(const gt of v.layerUpdates){const Wt=Et.data.subarray(gt*vt/Et.data.BYTES_PER_ELEMENT,(gt+1)*vt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,gt,Et.width,Et.height,1,wt,Wt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Et.width,Et.height,it.depth,wt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,zt,Et.width,Et.height,it.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Et.width,Et.height,it.depth,wt,Ot,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,zt,Et.width,Et.height,it.depth,0,wt,Ot,Et.data)}else{Yt&&he&&e.texStorage2D(i.TEXTURE_2D,mt,zt,Qt[0].width,Qt[0].height);for(let q=0,K=Qt.length;q<K;q++)Et=Qt[q],v.format!==xn?wt!==null?Yt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,Et.width,Et.height,wt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,q,zt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?I&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Et.width,Et.height,wt,Ot,Et.data):e.texImage2D(i.TEXTURE_2D,q,zt,Et.width,Et.height,0,wt,Ot,Et.data)}else if(v.isDataArrayTexture)if(Yt){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,zt,it.width,it.height,it.depth),I)if(v.layerUpdates.size>0){const q=ch(it.width,it.height,v.format,v.type);for(const K of v.layerUpdates){const vt=it.data.subarray(K*q/it.data.BYTES_PER_ELEMENT,(K+1)*q/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,it.width,it.height,1,wt,Ot,vt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,wt,Ot,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,zt,it.width,it.height,it.depth,0,wt,Ot,it.data);else if(v.isData3DTexture)Yt?(he&&e.texStorage3D(i.TEXTURE_3D,mt,zt,it.width,it.height,it.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,wt,Ot,it.data)):e.texImage3D(i.TEXTURE_3D,0,zt,it.width,it.height,it.depth,0,wt,Ot,it.data);else if(v.isFramebufferTexture){if(he)if(Yt)e.texStorage2D(i.TEXTURE_2D,mt,zt,it.width,it.height);else{let q=it.width,K=it.height;for(let vt=0;vt<mt;vt++)e.texImage2D(i.TEXTURE_2D,vt,zt,q,K,0,wt,Ot,null),q>>=1,K>>=1}}else if(Qt.length>0){if(Yt&&he){const q=Mt(Qt[0]);e.texStorage2D(i.TEXTURE_2D,mt,zt,q.width,q.height)}for(let q=0,K=Qt.length;q<K;q++)Et=Qt[q],Yt?I&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,wt,Ot,Et):e.texImage2D(i.TEXTURE_2D,q,zt,wt,Ot,Et);v.generateMipmaps=!1}else if(Yt){if(he){const q=Mt(it);e.texStorage2D(i.TEXTURE_2D,mt,zt,q.width,q.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Ot,it)}else e.texImage2D(i.TEXTURE_2D,0,zt,wt,Ot,it);m(v)&&p($),Tt.__version=j.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function at(b,v,B){if(v.image.length!==6)return;const $=jt(b,v),tt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+B);const j=n.get(tt);if(tt.version!==j.__version||$===!0){e.activeTexture(i.TEXTURE0+B);const Tt=ne.getPrimaries(ne.workingColorSpace),pt=v.colorSpace===ci?null:ne.getPrimaries(v.colorSpace),yt=v.colorSpace===ci||Tt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Zt=v.isCompressedTexture||v.image[0].isCompressedTexture,it=v.image[0]&&v.image[0].isDataTexture,wt=[];for(let K=0;K<6;K++)!Zt&&!it?wt[K]=_(v.image[K],!0,s.maxCubemapSize):wt[K]=it?v.image[K].image:v.image[K],wt[K]=Ft(v,wt[K]);const Ot=wt[0],zt=r.convert(v.format,v.colorSpace),Et=r.convert(v.type),Qt=y(v.internalFormat,zt,Et,v.colorSpace),Yt=v.isVideoTexture!==!0,he=j.__version===void 0||$===!0,I=tt.dataReady;let mt=D(v,Ot);Ut(i.TEXTURE_CUBE_MAP,v);let q;if(Zt){Yt&&he&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Qt,Ot.width,Ot.height);for(let K=0;K<6;K++){q=wt[K].mipmaps;for(let vt=0;vt<q.length;vt++){const gt=q[vt];v.format!==xn?zt!==null?Yt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt,0,0,gt.width,gt.height,zt,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt,Qt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt,0,0,gt.width,gt.height,zt,Et,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt,Qt,gt.width,gt.height,0,zt,Et,gt.data)}}}else{if(q=v.mipmaps,Yt&&he){q.length>0&&mt++;const K=Mt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Qt,K.width,K.height)}for(let K=0;K<6;K++)if(it){Yt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,wt[K].width,wt[K].height,zt,Et,wt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Qt,wt[K].width,wt[K].height,0,zt,Et,wt[K].data);for(let vt=0;vt<q.length;vt++){const Wt=q[vt].image[K].image;Yt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt+1,0,0,Wt.width,Wt.height,zt,Et,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt+1,Qt,Wt.width,Wt.height,0,zt,Et,Wt.data)}}else{Yt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,zt,Et,wt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Qt,zt,Et,wt[K]);for(let vt=0;vt<q.length;vt++){const gt=q[vt];Yt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt+1,0,0,zt,Et,gt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt+1,Qt,zt,Et,gt.image[K])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),j.__version=tt.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function bt(b,v,B,$,tt,j){const Tt=r.convert(B.format,B.colorSpace),pt=r.convert(B.type),yt=y(B.internalFormat,Tt,pt,B.colorSpace),Zt=n.get(v),it=n.get(B);if(it.__renderTarget=v,!Zt.__hasExternalTextures){const wt=Math.max(1,v.width>>j),Ot=Math.max(1,v.height>>j);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,j,yt,wt,Ot,v.depth,0,Tt,pt,null):e.texImage2D(tt,j,yt,wt,Ot,0,Tt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),St(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,tt,it.__webglTexture,0,nt(v)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,tt,it.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(b,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,b),v.depthBuffer){const $=v.depthTexture,tt=$&&$.isDepthTexture?$.type:null,j=x(v.stencilBuffer,tt),Tt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=nt(v);St(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,j,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,j,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,j,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,b)}else{const $=v.textures;for(let tt=0;tt<$.length;tt++){const j=$[tt],Tt=r.convert(j.format,j.colorSpace),pt=r.convert(j.type),yt=y(j.internalFormat,Tt,pt,j.colorSpace),Zt=nt(v);B&&St(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,yt,v.width,v.height):St(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt,yt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,yt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);const tt=$.__webglTexture,j=nt(v);if(v.depthTexture.format===ps)St(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(v.depthTexture.format===Ms)St(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Vt(b){const v=n.get(b),B=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const $=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const tt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",tt)};$.addEventListener("dispose",tt),v.__depthDisposeCallback=tt}v.__boundDepthTexture=$}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Dt(v.__webglFramebuffer,b)}else if(B){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=i.createRenderbuffer(),lt(v.__webglDepthbuffer[$],b,!1);else{const tt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),lt(v.__webglDepthbuffer,b,!1);else{const $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(b,v,B){const $=n.get(b);v!==void 0&&bt($.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Vt(b)}function ee(b){const v=b.texture,B=n.get(b),$=n.get(v);b.addEventListener("dispose",C);const tt=b.textures,j=b.isWebGLCubeRenderTarget===!0,Tt=tt.length>1;if(Tt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=v.version,a.memory.textures++),j){B.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[pt]=[];for(let yt=0;yt<v.mipmaps.length;yt++)B.__webglFramebuffer[pt][yt]=i.createFramebuffer()}else B.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let pt=0;pt<v.mipmaps.length;pt++)B.__webglFramebuffer[pt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let pt=0,yt=tt.length;pt<yt;pt++){const Zt=n.get(tt[pt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&St(b)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let pt=0;pt<tt.length;pt++){const yt=tt[pt];B.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[pt]);const Zt=r.convert(yt.format,yt.colorSpace),it=r.convert(yt.type),wt=y(yt.internalFormat,Zt,it,yt.colorSpace,b.isXRRenderTarget===!0),Ot=nt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,wt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,B.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(B.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ut(i.TEXTURE_CUBE_MAP,v);for(let pt=0;pt<6;pt++)if(v.mipmaps&&v.mipmaps.length>0)for(let yt=0;yt<v.mipmaps.length;yt++)bt(B.__webglFramebuffer[pt][yt],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,yt);else bt(B.__webglFramebuffer[pt],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let pt=0,yt=tt.length;pt<yt;pt++){const Zt=tt[pt],it=n.get(Zt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),Ut(i.TEXTURE_2D,Zt),bt(B.__webglFramebuffer,b,Zt,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),m(Zt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(pt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,$.__webglTexture),Ut(pt,v),v.mipmaps&&v.mipmaps.length>0)for(let yt=0;yt<v.mipmaps.length;yt++)bt(B.__webglFramebuffer[yt],b,v,i.COLOR_ATTACHMENT0,pt,yt);else bt(B.__webglFramebuffer,b,v,i.COLOR_ATTACHMENT0,pt,0);m(v)&&p(pt),e.unbindTexture()}b.depthBuffer&&Vt(b)}function Q(b){const v=b.textures;for(let B=0,$=v.length;B<$;B++){const tt=v[B];if(m(tt)){const j=S(b),Tt=n.get(tt).__webglTexture;e.bindTexture(j,Tt),p(j),e.unbindTexture()}}}const rt=[],R=[];function Pt(b){if(b.samples>0){if(St(b)===!1){const v=b.textures,B=b.width,$=b.height;let tt=i.COLOR_BUFFER_BIT;const j=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(b),pt=v.length>1;if(pt)for(let yt=0;yt<v.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let yt=0;yt<v.length;yt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[yt]);const Zt=n.get(v[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Zt,0)}i.blitFramebuffer(0,0,B,$,0,0,B,$,tt,i.NEAREST),c===!0&&(rt.length=0,R.length=0,rt.push(i.COLOR_ATTACHMENT0+yt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(rt.push(j),R.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let yt=0;yt<v.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[yt]);const Zt=n.get(v[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const v=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function nt(b){return Math.min(s.maxSamples,b.samples)}function St(b){const v=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ut(b){const v=a.render.frame;h.get(b)!==v&&(h.set(b,v),b.update())}function Ft(b,v){const B=b.colorSpace,$=b.format,tt=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==Es&&B!==ci&&(ne.getTransfer(B)===ce?($!==xn||tt!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function Mt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=W,this.setTexture2D=X,this.setTexture2DArray=z,this.setTexture3D=J,this.setTextureCube=H,this.rebindTextures=Bt,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=St}function P_(i,t){function e(n,s=ci){let r;const a=ne.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===Ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wh)return i.BYTE;if(n===Xh)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===wc)return i.INT;if(n===Ni)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===ur)return i.HALF_FLOAT;if(n===Yh)return i.ALPHA;if(n===$h)return i.RGB;if(n===xn)return i.RGBA;if(n===jh)return i.LUMINANCE;if(n===Zh)return i.LUMINANCE_ALPHA;if(n===ps)return i.DEPTH_COMPONENT;if(n===Ms)return i.DEPTH_STENCIL;if(n===xa)return i.RED;if(n===Tc)return i.RED_INTEGER;if(n===Jh)return i.RG;if(n===Ac)return i.RG_INTEGER;if(n===Rc)return i.RGBA_INTEGER;if(n===ia||n===sa||n===ra||n===aa)if(a===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oo||n===ko||n===Bo||n===zo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ho||n===Vo||n===Go)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ho||n===Vo)return a===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Go)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wo||n===Xo||n===qo||n===Yo||n===$o||n===jo||n===Zo||n===Jo||n===Ko||n===Qo||n===tc||n===ec||n===nc||n===ic)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$o)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ko)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tc)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ec)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nc)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ic)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oa||n===sc||n===rc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===oa)return a===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kh||n===ac||n===oc||n===cc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===oa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class L_ extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class It extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D_={type:"move"};class ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(D_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new It;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const I_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U_=`
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

}`;class N_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new pi({vertexShader:I_,fragmentShader:U_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new Be(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F_ extends bs{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new N_,m=e.getContextAttributes();let p=null,S=null;const y=[],x=[],D=new et;let T=null;const C=new $e;C.viewport=new xe;const L=new $e;L.viewport=new xe;const E=[C,L],M=new L_;let P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let at=y[Y];return at===void 0&&(at=new ho,y[Y]=at),at.getTargetRaySpace()},this.getControllerGrip=function(Y){let at=y[Y];return at===void 0&&(at=new ho,y[Y]=at),at.getGripSpace()},this.getHand=function(Y){let at=y[Y];return at===void 0&&(at=new ho,y[Y]=at),at.getHandSpace()};function F(Y){const at=x.indexOf(Y.inputSource);if(at===-1)return;const bt=y[at];bt!==void 0&&(bt.update(Y.inputSource,Y.frame,l||a),bt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",X);for(let Y=0;Y<y.length;Y++){const at=x[Y];at!==null&&(x[Y]=null,y[Y].disconnect(at))}P=null,W=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,S=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",O),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Fi(f.framebufferWidth,f.framebufferHeight,{format:xn,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,bt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?Ms:ps,bt=m.stencil?vs:Ni);const Dt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Dt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Fi(d.textureWidth,d.textureHeight,{format:xn,type:Xn,depthTexture:new du(d.textureWidth,d.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(Y){for(let at=0;at<Y.removed.length;at++){const bt=Y.removed[at],lt=x.indexOf(bt);lt>=0&&(x[lt]=null,y[lt].disconnect(bt))}for(let at=0;at<Y.added.length;at++){const bt=Y.added[at];let lt=x.indexOf(bt);if(lt===-1){for(let Vt=0;Vt<y.length;Vt++)if(Vt>=x.length){x.push(bt),lt=Vt;break}else if(x[Vt]===null){x[Vt]=bt,lt=Vt;break}if(lt===-1)break}const Dt=y[lt];Dt&&Dt.connect(bt)}}const z=new A,J=new A;function H(Y,at,bt){z.setFromMatrixPosition(at.matrixWorld),J.setFromMatrixPosition(bt.matrixWorld);const lt=z.distanceTo(J),Dt=at.projectionMatrix.elements,Vt=bt.projectionMatrix.elements,Bt=Dt[14]/(Dt[10]-1),ee=Dt[14]/(Dt[10]+1),Q=(Dt[9]+1)/Dt[5],rt=(Dt[9]-1)/Dt[5],R=(Dt[8]-1)/Dt[0],Pt=(Vt[8]+1)/Vt[0],nt=Bt*R,St=Bt*Pt,ut=lt/(-R+Pt),Ft=ut*-R;if(at.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ft),Y.translateZ(ut),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Dt[10]===-1)Y.projectionMatrix.copy(at.projectionMatrix),Y.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const Mt=Bt+ut,b=ee+ut,v=nt-Ft,B=St+(lt-Ft),$=Q*ee/b*Mt,tt=rt*ee/b*Mt;Y.projectionMatrix.makePerspective(v,B,$,tt,Mt,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function st(Y,at){at===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(at.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let at=Y.near,bt=Y.far;_.texture!==null&&(_.depthNear>0&&(at=_.depthNear),_.depthFar>0&&(bt=_.depthFar)),M.near=L.near=C.near=at,M.far=L.far=C.far=bt,(P!==M.near||W!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,W=M.far),C.layers.mask=Y.layers.mask|2,L.layers.mask=Y.layers.mask|4,M.layers.mask=C.layers.mask|L.layers.mask;const lt=Y.parent,Dt=M.cameras;st(M,lt);for(let Vt=0;Vt<Dt.length;Vt++)st(Dt[Vt],lt);Dt.length===2?H(M,C,L):M.projectionMatrix.copy(C.projectionMatrix),dt(Y,M,lt)};function dt(Y,at,bt){bt===null?Y.matrix.copy(at.matrixWorld):(Y.matrix.copy(bt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(at.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(at.projectionMatrix),Y.projectionMatrixInverse.copy(at.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=sr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let xt=null;function Ut(Y,at){if(h=at.getViewerPose(l||a),g=at,h!==null){const bt=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let lt=!1;bt.length!==M.cameras.length&&(M.cameras.length=0,lt=!0);for(let Vt=0;Vt<bt.length;Vt++){const Bt=bt[Vt];let ee=null;if(f!==null)ee=f.getViewport(Bt);else{const rt=u.getViewSubImage(d,Bt);ee=rt.viewport,Vt===0&&(t.setRenderTargetTextures(S,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(S))}let Q=E[Vt];Q===void 0&&(Q=new $e,Q.layers.enable(Vt),Q.viewport=new xe,E[Vt]=Q),Q.matrix.fromArray(Bt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Bt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ee.x,ee.y,ee.width,ee.height),Vt===0&&(M.matrix.copy(Q.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),lt===!0&&M.cameras.push(Q)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Vt=u.getDepthInformation(bt[0]);Vt&&Vt.isValid&&Vt.texture&&_.init(t,Vt,s.renderState)}}for(let bt=0;bt<y.length;bt++){const lt=x[bt],Dt=y[bt];lt!==null&&Dt!==void 0&&Dt.update(lt,at,l||a)}xt&&xt(Y,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}const jt=new hu;jt.setAnimationLoop(Ut),this.setAnimationLoop=function(Y){xt=Y},this.dispose=function(){}}}const wi=new qn,O_=new le;function k_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ou(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,S,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),y=S.envMap,x=S.envMapRotation;y&&(m.envMap.value=y,wi.copy(x),wi.x*=-1,wi.y*=-1,wi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),m.envMapRotation.value.setFromMatrix4(O_.makeRotationFromEuler(wi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function B_(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,y){const x=y.program;n.uniformBlockBinding(S,x)}function l(S,y){let x=s[S.id];x===void 0&&(g(S),x=h(S),s[S.id]=x,S.addEventListener("dispose",m));const D=y.program;n.updateUBOMapping(S,D);const T=t.render.frame;r[S.id]!==T&&(d(S),r[S.id]=T)}function h(S){const y=u();S.__bindingPointIndex=y;const x=i.createBuffer(),D=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,D,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=s[S.id],x=S.uniforms,D=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,C=x.length;T<C;T++){const L=Array.isArray(x[T])?x[T]:[x[T]];for(let E=0,M=L.length;E<M;E++){const P=L[E];if(f(P,T,E,D)===!0){const W=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let O=0;for(let X=0;X<F.length;X++){const z=F[X],J=_(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,W+O,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,O),O+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,y,x,D){const T=S.value,C=y+"_"+x;if(D[C]===void 0)return typeof T=="number"||typeof T=="boolean"?D[C]=T:D[C]=T.clone(),!0;{const L=D[C];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return D[C]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(S){const y=S.uniforms;let x=0;const D=16;for(let C=0,L=y.length;C<L;C++){const E=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,P=E.length;M<P;M++){const W=E[M],F=Array.isArray(W.value)?W.value:[W.value];for(let O=0,X=F.length;O<X;O++){const z=F[O],J=_(z),H=x%D,st=H%J.boundary,dt=H+st;x+=st,dt!==0&&D-dt<J.storage&&(x+=D-dt),W.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=x,x+=J.storage}}}const T=x%D;return T>0&&(x+=D-T),S.__size=x,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class _u{constructor(t={}){const{canvas:e=Rf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ee,this.toneMapping=ui,this.toneMappingExposure=1;const x=this;let D=!1,T=0,C=0,L=null,E=-1,M=null;const P=new xe,W=new xe;let F=null;const O=new Kt(0);let X=0,z=e.width,J=e.height,H=1,st=null,dt=null;const xt=new xe(0,0,z,J),Ut=new xe(0,0,z,J);let jt=!1;const Y=new Dc;let at=!1,bt=!1;const lt=new le,Dt=new le,Vt=new A,Bt=new xe,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function rt(){return L===null?H:1}let R=n;function Pt(w,U){return e.getContext(w,U)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sc}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),R===null){const U="webgl2";if(R=Pt(U,w),R===null)throw Pt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let nt,St,ut,Ft,Mt,b,v,B,$,tt,j,Tt,pt,yt,Zt,it,wt,Ot,zt,Et,Qt,Yt,he,I;function mt(){nt=new X0(R),nt.init(),Yt=new P_(R,nt),St=new B0(R,nt,t,Yt),ut=new A_(R,nt),St.reverseDepthBuffer&&d&&ut.buffers.depth.setReversed(!0),Ft=new $0(R),Mt=new d_,b=new C_(R,nt,ut,Mt,St,Yt,Ft),v=new H0(x),B=new W0(x),$=new ep(R),he=new O0(R,$),tt=new q0(R,$,Ft,he),j=new Z0(R,tt,$,Ft),zt=new j0(R,St,b),it=new z0(Mt),Tt=new u_(x,v,B,nt,St,he,it),pt=new k_(x,Mt),yt=new p_,Zt=new M_(nt),Ot=new F0(x,v,B,ut,j,f,c),wt=new b_(x,j,St),I=new B_(R,Ft,St,ut),Et=new k0(R,nt,Ft),Qt=new Y0(R,nt,Ft),Ft.programs=Tt.programs,x.capabilities=St,x.extensions=nt,x.properties=Mt,x.renderLists=yt,x.shadowMap=wt,x.state=ut,x.info=Ft}mt();const q=new F_(x,R);this.xr=q,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const w=nt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=nt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(z,J,!1))},this.getSize=function(w){return w.set(z,J)},this.setSize=function(w,U,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,J=U,e.width=Math.floor(w*H),e.height=Math.floor(U*H),V===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(z*H,J*H).floor()},this.setDrawingBufferSize=function(w,U,V){z=w,J=U,H=V,e.width=Math.floor(w*V),e.height=Math.floor(U*V),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(xt)},this.setViewport=function(w,U,V,G){w.isVector4?xt.set(w.x,w.y,w.z,w.w):xt.set(w,U,V,G),ut.viewport(P.copy(xt).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(Ut)},this.setScissor=function(w,U,V,G){w.isVector4?Ut.set(w.x,w.y,w.z,w.w):Ut.set(w,U,V,G),ut.scissor(W.copy(Ut).multiplyScalar(H).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(w){ut.setScissorTest(jt=w)},this.setOpaqueSort=function(w){st=w},this.setTransparentSort=function(w){dt=w},this.getClearColor=function(w){return w.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(w=!0,U=!0,V=!0){let G=0;if(w){let N=!1;if(L!==null){const ot=L.texture.format;N=ot===Rc||ot===Ac||ot===Tc}if(N){const ot=L.texture.type,_t=ot===Xn||ot===Ni||ot===ir||ot===vs||ot===Ec||ot===bc,At=Ot.getClearColor(),Rt=Ot.getClearAlpha(),Gt=At.r,Xt=At.g,Ct=At.b;_t?(g[0]=Gt,g[1]=Xt,g[2]=Ct,g[3]=Rt,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=Gt,_[1]=Xt,_[2]=Ct,_[3]=Rt,R.clearBufferiv(R.COLOR,0,_))}else G|=R.COLOR_BUFFER_BIT}U&&(G|=R.DEPTH_BUFFER_BIT),V&&(G|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),yt.dispose(),Zt.dispose(),Mt.dispose(),v.dispose(),B.dispose(),j.dispose(),he.dispose(),I.dispose(),Tt.dispose(),q.dispose(),q.removeEventListener("sessionstart",sl),q.removeEventListener("sessionend",rl),_i.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const w=Ft.autoReset,U=wt.enabled,V=wt.autoUpdate,G=wt.needsUpdate,N=wt.type;mt(),Ft.autoReset=w,wt.enabled=U,wt.autoUpdate=V,wt.needsUpdate=G,wt.type=N}function gt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Wt(w){const U=w.target;U.removeEventListener("dispose",Wt),_e(U)}function _e(w){Ue(w),Mt.remove(w)}function Ue(w){const U=Mt.get(w).programs;U!==void 0&&(U.forEach(function(V){Tt.releaseProgram(V)}),w.isShaderMaterial&&Tt.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,V,G,N,ot){U===null&&(U=ee);const _t=N.isMesh&&N.matrixWorld.determinant()<0,At=Md(w,U,V,G,N);ut.setMaterial(G,_t);let Rt=V.index,Gt=1;if(G.wireframe===!0){if(Rt=tt.getWireframeAttribute(V),Rt===void 0)return;Gt=2}const Xt=V.drawRange,Ct=V.attributes.position;let ie=Xt.start*Gt,ue=(Xt.start+Xt.count)*Gt;ot!==null&&(ie=Math.max(ie,ot.start*Gt),ue=Math.min(ue,(ot.start+ot.count)*Gt)),Rt!==null?(ie=Math.max(ie,0),ue=Math.min(ue,Rt.count)):Ct!=null&&(ie=Math.max(ie,0),ue=Math.min(ue,Ct.count));const de=ue-ie;if(de<0||de===1/0)return;he.setup(N,G,At,V,Rt);let qe,se=Et;if(Rt!==null&&(qe=$.get(Rt),se=Qt,se.setIndex(qe)),N.isMesh)G.wireframe===!0?(ut.setLineWidth(G.wireframeLinewidth*rt()),se.setMode(R.LINES)):se.setMode(R.TRIANGLES);else if(N.isLine){let Lt=G.linewidth;Lt===void 0&&(Lt=1),ut.setLineWidth(Lt*rt()),N.isLineSegments?se.setMode(R.LINES):N.isLineLoop?se.setMode(R.LINE_LOOP):se.setMode(R.LINE_STRIP)}else N.isPoints?se.setMode(R.POINTS):N.isSprite&&se.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)se.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))se.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Lt=N._multiDrawStarts,Pn=N._multiDrawCounts,re=N._multiDrawCount,hn=Rt?$.get(Rt).bytesPerElement:1,Wi=Mt.get(G).currentProgram.getUniforms();for(let Je=0;Je<re;Je++)Wi.setValue(R,"_gl_DrawID",Je),se.render(Lt[Je]/hn,Pn[Je])}else if(N.isInstancedMesh)se.renderInstances(ie,de,N.count);else if(V.isInstancedBufferGeometry){const Lt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Pn=Math.min(V.instanceCount,Lt);se.renderInstances(ie,de,Pn)}else se.render(ie,de)};function ae(w,U,V){w.transparent===!0&&w.side===be&&w.forceSinglePass===!1?(w.side=Ze,w.needsUpdate=!0,yr(w,U,V),w.side=fi,w.needsUpdate=!0,yr(w,U,V),w.side=be):yr(w,U,V)}this.compile=function(w,U,V=null){V===null&&(V=w),p=Zt.get(V),p.init(U),y.push(p),V.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),w!==V&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const G=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ot=N.material;if(ot)if(Array.isArray(ot))for(let _t=0;_t<ot.length;_t++){const At=ot[_t];ae(At,V,N),G.add(At)}else ae(ot,V,N),G.add(ot)}),y.pop(),p=null,G},this.compileAsync=function(w,U,V=null){const G=this.compile(w,U,V);return new Promise(N=>{function ot(){if(G.forEach(function(_t){Mt.get(_t).currentProgram.isReady()&&G.delete(_t)}),G.size===0){N(w);return}setTimeout(ot,10)}nt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let ln=null;function Cn(w){ln&&ln(w)}function sl(){_i.stop()}function rl(){_i.start()}const _i=new hu;_i.setAnimationLoop(Cn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(w){ln=w,q.setAnimationLoop(w),w===null?_i.stop():_i.start()},q.addEventListener("sessionstart",sl),q.addEventListener("sessionend",rl),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,U,L),p=Zt.get(w,y.length),p.init(U),y.push(p),Dt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(Dt),bt=this.localClippingEnabled,at=it.init(this.clippingPlanes,bt),m=yt.get(w,S.length),m.init(),S.push(m),q.enabled===!0&&q.isPresenting===!0){const ot=x.xr.getDepthSensingMesh();ot!==null&&Fa(ot,U,-1/0,x.sortObjects)}Fa(w,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(st,dt),Q=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Q&&Ot.addToRenderList(m,w),this.info.render.frame++,at===!0&&it.beginShadows();const V=p.state.shadowsArray;wt.render(V,w,U),at===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const ot=U.cameras;if(N.length>0)for(let _t=0,At=ot.length;_t<At;_t++){const Rt=ot[_t];ol(G,N,w,Rt)}Q&&Ot.render(w);for(let _t=0,At=ot.length;_t<At;_t++){const Rt=ot[_t];al(m,w,Rt,Rt.viewport)}}else N.length>0&&ol(G,N,w,U),Q&&Ot.render(w),al(m,w,U);L!==null&&(b.updateMultisampleRenderTarget(L),b.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(x,w,U),he.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],at===!0&&it.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Fa(w,U,V,G){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){G&&Bt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Dt);const _t=j.update(w),At=w.material;At.visible&&m.push(w,_t,At,V,Bt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){const _t=j.update(w),At=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Bt.copy(w.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Bt.copy(_t.boundingSphere.center)),Bt.applyMatrix4(w.matrixWorld).applyMatrix4(Dt)),Array.isArray(At)){const Rt=_t.groups;for(let Gt=0,Xt=Rt.length;Gt<Xt;Gt++){const Ct=Rt[Gt],ie=At[Ct.materialIndex];ie&&ie.visible&&m.push(w,_t,ie,V,Bt.z,Ct)}}else At.visible&&m.push(w,_t,At,V,Bt.z,null)}}const ot=w.children;for(let _t=0,At=ot.length;_t<At;_t++)Fa(ot[_t],U,V,G)}function al(w,U,V,G){const N=w.opaque,ot=w.transmissive,_t=w.transparent;p.setupLightsView(V),at===!0&&it.setGlobalState(x.clippingPlanes,V),G&&ut.viewport(P.copy(G)),N.length>0&&Mr(N,U,V),ot.length>0&&Mr(ot,U,V),_t.length>0&&Mr(_t,U,V),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function ol(w,U,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Fi(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?ur:Xn,minFilter:Li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const ot=p.state.transmissionRenderTarget[G.id],_t=G.viewport||P;ot.setSize(_t.z,_t.w);const At=x.getRenderTarget();x.setRenderTarget(ot),x.getClearColor(O),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),Q&&Ot.render(V);const Rt=x.toneMapping;x.toneMapping=ui;const Gt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),at===!0&&it.setGlobalState(x.clippingPlanes,G),Mr(w,V,G),b.updateMultisampleRenderTarget(ot),b.updateRenderTargetMipmap(ot),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Ct=0,ie=U.length;Ct<ie;Ct++){const ue=U[Ct],de=ue.object,qe=ue.geometry,se=ue.material,Lt=ue.group;if(se.side===be&&de.layers.test(G.layers)){const Pn=se.side;se.side=Ze,se.needsUpdate=!0,cl(de,V,G,qe,se,Lt),se.side=Pn,se.needsUpdate=!0,Xt=!0}}Xt===!0&&(b.updateMultisampleRenderTarget(ot),b.updateRenderTargetMipmap(ot))}x.setRenderTarget(At),x.setClearColor(O,X),Gt!==void 0&&(G.viewport=Gt),x.toneMapping=Rt}function Mr(w,U,V){const G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ot=w.length;N<ot;N++){const _t=w[N],At=_t.object,Rt=_t.geometry,Gt=G===null?_t.material:G,Xt=_t.group;At.layers.test(V.layers)&&cl(At,U,V,Rt,Gt,Xt)}}function cl(w,U,V,G,N,ot){w.onBeforeRender(x,U,V,G,N,ot),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(x,U,V,G,w,ot),N.transparent===!0&&N.side===be&&N.forceSinglePass===!1?(N.side=Ze,N.needsUpdate=!0,x.renderBufferDirect(V,U,G,N,w,ot),N.side=fi,N.needsUpdate=!0,x.renderBufferDirect(V,U,G,N,w,ot),N.side=be):x.renderBufferDirect(V,U,G,N,w,ot),w.onAfterRender(x,U,V,G,N,ot)}function yr(w,U,V){U.isScene!==!0&&(U=ee);const G=Mt.get(w),N=p.state.lights,ot=p.state.shadowsArray,_t=N.state.version,At=Tt.getParameters(w,N.state,ot,U,V),Rt=Tt.getProgramCacheKey(At);let Gt=G.programs;G.environment=w.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(w.isMeshStandardMaterial?B:v).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Gt===void 0&&(w.addEventListener("dispose",Wt),Gt=new Map,G.programs=Gt);let Xt=Gt.get(Rt);if(Xt!==void 0){if(G.currentProgram===Xt&&G.lightsStateVersion===_t)return hl(w,At),Xt}else At.uniforms=Tt.getUniforms(w),w.onBeforeCompile(At,x),Xt=Tt.acquireProgram(At,Rt),Gt.set(Rt,Xt),G.uniforms=At.uniforms;const Ct=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ct.clippingPlanes=it.uniform),hl(w,At),G.needsLights=Sd(w),G.lightsStateVersion=_t,G.needsLights&&(Ct.ambientLightColor.value=N.state.ambient,Ct.lightProbe.value=N.state.probe,Ct.directionalLights.value=N.state.directional,Ct.directionalLightShadows.value=N.state.directionalShadow,Ct.spotLights.value=N.state.spot,Ct.spotLightShadows.value=N.state.spotShadow,Ct.rectAreaLights.value=N.state.rectArea,Ct.ltc_1.value=N.state.rectAreaLTC1,Ct.ltc_2.value=N.state.rectAreaLTC2,Ct.pointLights.value=N.state.point,Ct.pointLightShadows.value=N.state.pointShadow,Ct.hemisphereLights.value=N.state.hemi,Ct.directionalShadowMap.value=N.state.directionalShadowMap,Ct.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ct.spotShadowMap.value=N.state.spotShadowMap,Ct.spotLightMatrix.value=N.state.spotLightMatrix,Ct.spotLightMap.value=N.state.spotLightMap,Ct.pointShadowMap.value=N.state.pointShadowMap,Ct.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Xt,G.uniformsList=null,Xt}function ll(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=ca.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function hl(w,U){const V=Mt.get(w);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Md(w,U,V,G,N){U.isScene!==!0&&(U=ee),b.resetTextureUnits();const ot=U.fog,_t=G.isMeshStandardMaterial?U.environment:null,At=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Es,Rt=(G.isMeshStandardMaterial?B:v).get(G.envMap||_t),Gt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Xt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ct=!!V.morphAttributes.position,ie=!!V.morphAttributes.normal,ue=!!V.morphAttributes.color;let de=ui;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(de=x.toneMapping);const qe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,se=qe!==void 0?qe.length:0,Lt=Mt.get(G),Pn=p.state.lights;if(at===!0&&(bt===!0||w!==M)){const nn=w===M&&G.id===E;it.setState(G,w,nn)}let re=!1;G.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Pn.state.version||Lt.outputColorSpace!==At||N.isBatchedMesh&&Lt.batching===!1||!N.isBatchedMesh&&Lt.batching===!0||N.isBatchedMesh&&Lt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Lt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Lt.instancing===!1||!N.isInstancedMesh&&Lt.instancing===!0||N.isSkinnedMesh&&Lt.skinning===!1||!N.isSkinnedMesh&&Lt.skinning===!0||N.isInstancedMesh&&Lt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Lt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Lt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Lt.instancingMorph===!1&&N.morphTexture!==null||Lt.envMap!==Rt||G.fog===!0&&Lt.fog!==ot||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==it.numPlanes||Lt.numIntersection!==it.numIntersection)||Lt.vertexAlphas!==Gt||Lt.vertexTangents!==Xt||Lt.morphTargets!==Ct||Lt.morphNormals!==ie||Lt.morphColors!==ue||Lt.toneMapping!==de||Lt.morphTargetsCount!==se)&&(re=!0):(re=!0,Lt.__version=G.version);let hn=Lt.currentProgram;re===!0&&(hn=yr(G,U,N));let Wi=!1,Je=!1,Is=!1;const fe=hn.getUniforms(),Sn=Lt.uniforms;if(ut.useProgram(hn.program)&&(Wi=!0,Je=!0,Is=!0),G.id!==E&&(E=G.id,Je=!0),Wi||M!==w){ut.buffers.depth.getReversed()?(lt.copy(w.projectionMatrix),Pf(lt),Lf(lt),fe.setValue(R,"projectionMatrix",lt)):fe.setValue(R,"projectionMatrix",w.projectionMatrix),fe.setValue(R,"viewMatrix",w.matrixWorldInverse);const Kn=fe.map.cameraPosition;Kn!==void 0&&Kn.setValue(R,Vt.setFromMatrixPosition(w.matrixWorld)),St.logarithmicDepthBuffer&&fe.setValue(R,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&fe.setValue(R,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Je=!0,Is=!0)}if(N.isSkinnedMesh){fe.setOptional(R,N,"bindMatrix"),fe.setOptional(R,N,"bindMatrixInverse");const nn=N.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),fe.setValue(R,"boneTexture",nn.boneTexture,b))}N.isBatchedMesh&&(fe.setOptional(R,N,"batchingTexture"),fe.setValue(R,"batchingTexture",N._matricesTexture,b),fe.setOptional(R,N,"batchingIdTexture"),fe.setValue(R,"batchingIdTexture",N._indirectTexture,b),fe.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&fe.setValue(R,"batchingColorTexture",N._colorsTexture,b));const Us=V.morphAttributes;if((Us.position!==void 0||Us.normal!==void 0||Us.color!==void 0)&&zt.update(N,V,hn),(Je||Lt.receiveShadow!==N.receiveShadow)&&(Lt.receiveShadow=N.receiveShadow,fe.setValue(R,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Sn.envMap.value=Rt,Sn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(Sn.envMapIntensity.value=U.environmentIntensity),Je&&(fe.setValue(R,"toneMappingExposure",x.toneMappingExposure),Lt.needsLights&&yd(Sn,Is),ot&&G.fog===!0&&pt.refreshFogUniforms(Sn,ot),pt.refreshMaterialUniforms(Sn,G,H,J,p.state.transmissionRenderTarget[w.id]),ca.upload(R,ll(Lt),Sn,b)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ca.upload(R,ll(Lt),Sn,b),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&fe.setValue(R,"center",N.center),fe.setValue(R,"modelViewMatrix",N.modelViewMatrix),fe.setValue(R,"normalMatrix",N.normalMatrix),fe.setValue(R,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const nn=G.uniformsGroups;for(let Kn=0,Qn=nn.length;Kn<Qn;Kn++){const ul=nn[Kn];I.update(ul,hn),I.bind(ul,hn)}}return hn}function yd(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Sd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,U,V){Mt.get(w.texture).__webglTexture=U,Mt.get(w.depthTexture).__webglTexture=V;const G=Mt.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const V=Mt.get(w);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,V=0){L=w,T=U,C=V;let G=!0,N=null,ot=!1,_t=!1;if(w){const Rt=Mt.get(w);if(Rt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(R.FRAMEBUFFER,null),G=!1;else if(Rt.__webglFramebuffer===void 0)b.setupRenderTarget(w);else if(Rt.__hasExternalTextures)b.rebindTextures(w,Mt.get(w.texture).__webglTexture,Mt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ct=w.depthTexture;if(Rt.__boundDepthTexture!==Ct){if(Ct!==null&&Mt.has(Ct)&&(w.width!==Ct.image.width||w.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(w)}}const Gt=w.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(_t=!0);const Xt=Mt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xt[U])?N=Xt[U][V]:N=Xt[U],ot=!0):w.samples>0&&b.useMultisampledRTT(w)===!1?N=Mt.get(w).__webglMultisampledFramebuffer:Array.isArray(Xt)?N=Xt[V]:N=Xt,P.copy(w.viewport),W.copy(w.scissor),F=w.scissorTest}else P.copy(xt).multiplyScalar(H).floor(),W.copy(Ut).multiplyScalar(H).floor(),F=jt;if(ut.bindFramebuffer(R.FRAMEBUFFER,N)&&G&&ut.drawBuffers(w,N),ut.viewport(P),ut.scissor(W),ut.setScissorTest(F),ot){const Rt=Mt.get(w.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,Rt.__webglTexture,V)}else if(_t){const Rt=Mt.get(w.texture),Gt=U||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Rt.__webglTexture,V||0,Gt)}E=-1},this.readRenderTargetPixels=function(w,U,V,G,N,ot,_t){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Mt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_t!==void 0&&(At=At[_t]),At){ut.bindFramebuffer(R.FRAMEBUFFER,At);try{const Rt=w.texture,Gt=Rt.format,Xt=Rt.type;if(!St.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-G&&V>=0&&V<=w.height-N&&R.readPixels(U,V,G,N,Yt.convert(Gt),Yt.convert(Xt),ot)}finally{const Rt=L!==null?Mt.get(L).__webglFramebuffer:null;ut.bindFramebuffer(R.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(w,U,V,G,N,ot,_t){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Mt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_t!==void 0&&(At=At[_t]),At){const Rt=w.texture,Gt=Rt.format,Xt=Rt.type;if(!St.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-G&&V>=0&&V<=w.height-N){ut.bindFramebuffer(R.FRAMEBUFFER,At);const Ct=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ct),R.bufferData(R.PIXEL_PACK_BUFFER,ot.byteLength,R.STREAM_READ),R.readPixels(U,V,G,N,Yt.convert(Gt),Yt.convert(Xt),0);const ie=L!==null?Mt.get(L).__webglFramebuffer:null;ut.bindFramebuffer(R.FRAMEBUFFER,ie);const ue=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Cf(R,ue,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ct),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ot),R.deleteBuffer(Ct),R.deleteSync(ue),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,V=0){w.isTexture!==!0&&($s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const G=Math.pow(2,-V),N=Math.floor(w.image.width*G),ot=Math.floor(w.image.height*G),_t=U!==null?U.x:0,At=U!==null?U.y:0;b.setTexture2D(w,0),R.copyTexSubImage2D(R.TEXTURE_2D,V,0,0,_t,At,N,ot),ut.unbindTexture()},this.copyTextureToTexture=function(w,U,V=null,G=null,N=0){w.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,V=null);let ot,_t,At,Rt,Gt,Xt,Ct,ie,ue;const de=w.isCompressedTexture?w.mipmaps[N]:w.image;V!==null?(ot=V.max.x-V.min.x,_t=V.max.y-V.min.y,At=V.isBox3?V.max.z-V.min.z:1,Rt=V.min.x,Gt=V.min.y,Xt=V.isBox3?V.min.z:0):(ot=de.width,_t=de.height,At=de.depth||1,Rt=0,Gt=0,Xt=0),G!==null?(Ct=G.x,ie=G.y,ue=G.z):(Ct=0,ie=0,ue=0);const qe=Yt.convert(U.format),se=Yt.convert(U.type);let Lt;U.isData3DTexture?(b.setTexture3D(U,0),Lt=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(b.setTexture2DArray(U,0),Lt=R.TEXTURE_2D_ARRAY):(b.setTexture2D(U,0),Lt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const Pn=R.getParameter(R.UNPACK_ROW_LENGTH),re=R.getParameter(R.UNPACK_IMAGE_HEIGHT),hn=R.getParameter(R.UNPACK_SKIP_PIXELS),Wi=R.getParameter(R.UNPACK_SKIP_ROWS),Je=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,de.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,de.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Rt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Gt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Xt);const Is=w.isDataArrayTexture||w.isData3DTexture,fe=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Sn=Mt.get(w),Us=Mt.get(U),nn=Mt.get(Sn.__renderTarget),Kn=Mt.get(Us.__renderTarget);ut.bindFramebuffer(R.READ_FRAMEBUFFER,nn.__webglFramebuffer),ut.bindFramebuffer(R.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let Qn=0;Qn<At;Qn++)Is&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Mt.get(w).__webglTexture,N,Xt+Qn),w.isDepthTexture?(fe&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Mt.get(U).__webglTexture,N,ue+Qn),R.blitFramebuffer(Rt,Gt,ot,_t,Ct,ie,ot,_t,R.DEPTH_BUFFER_BIT,R.NEAREST)):fe?R.copyTexSubImage3D(Lt,N,Ct,ie,ue+Qn,Rt,Gt,ot,_t):R.copyTexSubImage2D(Lt,N,Ct,ie,ue+Qn,Rt,Gt,ot,_t);ut.bindFramebuffer(R.READ_FRAMEBUFFER,null),ut.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else fe?w.isDataTexture||w.isData3DTexture?R.texSubImage3D(Lt,N,Ct,ie,ue,ot,_t,At,qe,se,de.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(Lt,N,Ct,ie,ue,ot,_t,At,qe,de.data):R.texSubImage3D(Lt,N,Ct,ie,ue,ot,_t,At,qe,se,de):w.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,N,Ct,ie,ot,_t,qe,se,de.data):w.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,N,Ct,ie,de.width,de.height,qe,de.data):R.texSubImage2D(R.TEXTURE_2D,N,Ct,ie,ot,_t,qe,se,de);R.pixelStorei(R.UNPACK_ROW_LENGTH,Pn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,re),R.pixelStorei(R.UNPACK_SKIP_PIXELS,hn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Wi),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Je),N===0&&U.generateMipmaps&&R.generateMipmap(Lt),ut.unbindTexture()},this.copyTextureToTexture3D=function(w,U,V=null,G=null,N=0){return w.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0),$s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,V,G,N)},this.initRenderTarget=function(w){Mt.get(w).__webglFramebuffer===void 0&&b.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),ut.unbindTexture()},this.resetState=function(){T=0,C=0,L=null,ut.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class Zn{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=n}clone(){return new Zn(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Uc extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class z_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=lc,this.updateRanges=[],this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ze=new A;class ua{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array),r=oe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new vn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ua(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ya extends zi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let as;const Bs=new A,os=new A,cs=new A,ls=new et,zs=new et,xu=new le,Gr=new A,Hs=new A,Wr=new A,lh=new et,uo=new et,hh=new et;class Nc extends Te{constructor(t=new ya){if(super(),this.isSprite=!0,this.type="Sprite",as===void 0){as=new Ce;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new z_(e,5);as.setIndex([0,1,2,0,2,3]),as.setAttribute("position",new ua(n,3,0,!1)),as.setAttribute("uv",new ua(n,2,3,!1))}this.geometry=as,this.material=t,this.center=new et(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),os.setFromMatrixScale(this.matrixWorld),xu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),cs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&os.multiplyScalar(-cs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Xr(Gr.set(-.5,-.5,0),cs,a,os,s,r),Xr(Hs.set(.5,-.5,0),cs,a,os,s,r),Xr(Wr.set(.5,.5,0),cs,a,os,s,r),lh.set(0,0),uo.set(1,0),hh.set(1,1);let o=t.ray.intersectTriangle(Gr,Hs,Wr,!1,Bs);if(o===null&&(Xr(Hs.set(-.5,.5,0),cs,a,os,s,r),uo.set(0,1),o=t.ray.intersectTriangle(Gr,Wr,Hs,!1,Bs),o===null))return;const c=t.ray.origin.distanceTo(Bs);c<t.near||c>t.far||e.push({distance:c,point:Bs.clone(),uv:an.getInterpolation(Bs,Gr,Hs,Wr,lh,uo,hh,new et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Xr(i,t,e,n,s,r){ls.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(zs.x=r*ls.x-s*ls.y,zs.y=s*ls.x+r*ls.y):zs.copy(ls),i.copy(t),i.x+=zs.x,i.y+=zs.y,i.applyMatrix4(xu)}class vu extends ke{constructor(t=null,e=1,n=1,s,r,a,o,c,l=We,h=We,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mu extends zi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const da=new A,fa=new A,uh=new le,Vs=new Pc,qr=new fr,fo=new A,dh=new A;class H_ extends Te{constructor(t=new Ce,e=new Mu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)da.fromBufferAttribute(e,s-1),fa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=da.distanceTo(fa);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(s),qr.radius+=r,t.ray.intersectsSphere(qr)===!1)return;uh.copy(s).invert(),Vs.copy(t.ray).applyMatrix4(uh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),S=h.getX(_+1),y=Yr(this,t,Vs,c,p,S);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Yr(this,t,Vs,c,_,m);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=Yr(this,t,Vs,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Yr(this,t,Vs,c,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Yr(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(da.fromBufferAttribute(a,s),fa.fromBufferAttribute(a,r),e.distanceSqToSegment(da,fa,fo,dh)>n)return;fo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(fo);if(!(c<t.near||c>t.far))return{distance:c,point:dh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class Rs extends ke{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new et:new A);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,s=[],r=[],a=[],o=new A,c=new le;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new A)}r[0]=new A,a[0]=new A;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(De(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(De(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Fc extends An{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new et){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class V_ extends Fc{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Oc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const $r=new A,po=new Oc,mo=new Oc,go=new Oc;class G_ extends An{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:($r.subVectors(s[0],s[1]).add(s[0]),l=$r);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:($r.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=$r),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),po.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),mo.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),go.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(po.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),mo.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),go.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(po.calc(c),mo.calc(c),go.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function fh(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function W_(i,t){const e=1-i;return e*e*t}function X_(i,t){return 2*(1-i)*i*t}function q_(i,t){return i*i*t}function tr(i,t,e,n){return W_(i,t)+X_(i,e)+q_(i,n)}function Y_(i,t){const e=1-i;return e*e*e*t}function $_(i,t){const e=1-i;return 3*e*e*i*t}function j_(i,t){return 3*(1-i)*i*i*t}function Z_(i,t){return i*i*i*t}function er(i,t,e,n,s){return Y_(i,t)+$_(i,e)+j_(i,n)+Z_(i,s)}class yu extends An{constructor(t=new et,e=new et,n=new et,s=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new et){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(er(t,s.x,r.x,a.x,o.x),er(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class J_ extends An{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(er(t,s.x,r.x,a.x,o.x),er(t,s.y,r.y,a.y,o.y),er(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Su extends An{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class K_ extends An{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wu extends An{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(tr(t,s.x,r.x,a.x),tr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Q_ extends An{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(tr(t,s.x,r.x,a.x),tr(t,s.y,r.y,a.y),tr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Eu extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(fh(o,c.x,l.x,h.x,u.x),fh(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new et().fromArray(s))}return this}}var uc=Object.freeze({__proto__:null,ArcCurve:V_,CatmullRomCurve3:G_,CubicBezierCurve:yu,CubicBezierCurve3:J_,EllipseCurve:Fc,LineCurve:Su,LineCurve3:K_,QuadraticBezierCurve:wu,QuadraticBezierCurve3:Q_,SplineCurve:Eu});class tx extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new uc[s.type]().fromJSON(s))}return this}}class dc extends tx{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Su(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new wu(this.currentPoint.clone(),new et(t,e),new et(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new yu(this.currentPoint.clone(),new et(t,e),new et(n,s),new et(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Eu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new Fc(t,e,n,s,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class kc extends Ce{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=De(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,u=new A,d=new et,f=new A,g=new A,_=new A;let m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let S=0;S<=e;S++){const y=n+S*h*s,x=Math.sin(y),D=Math.cos(y);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*x,u.y=t[T].y,u.z=t[T].x*D,a.push(u.x,u.y,u.z),d.x=S/e,d.y=T/(t.length-1),o.push(d.x,d.y);const C=c[3*T+0]*x,L=c[3*T+1],E=c[3*T+0]*D;l.push(C,L,E)}}for(let S=0;S<e;S++)for(let y=0;y<t.length-1;y++){const x=y+S*t.length,D=x,T=x+t.length,C=x+t.length+1,L=x+1;r.push(D,T,L),r.push(C,L,T)}this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("uv",new te(o,2)),this.setAttribute("normal",new te(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kc(t.points,t.segments,t.phiStart,t.phiLength)}}class Sa extends kc{constructor(t=1,e=1,n=4,s=8){const r=new dc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Sa(t.radius,t.length,t.capSegments,t.radialSegments)}}class Tn extends Ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new A,h=new et;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(o,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Me extends Ce{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;S(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(f,2));function S(){const x=new A,D=new A;let T=0;const C=(e-t)/n;for(let L=0;L<=r;L++){const E=[],M=L/r,P=M*(e-t)+t;for(let W=0;W<=s;W++){const F=W/s,O=F*c+o,X=Math.sin(O),z=Math.cos(O);D.x=P*X,D.y=-M*n+m,D.z=P*z,u.push(D.x,D.y,D.z),x.set(X,C,z).normalize(),d.push(x.x,x.y,x.z),f.push(F,1-M),E.push(g++)}_.push(E)}for(let L=0;L<s;L++)for(let E=0;E<r;E++){const M=_[E][L],P=_[E+1][L],W=_[E+1][L+1],F=_[E][L+1];(t>0||E!==0)&&(h.push(M,P,F),T+=3),(e>0||E!==r-1)&&(h.push(P,W,F),T+=3)}l.addGroup(p,T,0),p+=T}function y(x){const D=g,T=new et,C=new A;let L=0;const E=x===!0?t:e,M=x===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const P=g;for(let W=0;W<=s;W++){const O=W/s*c+o,X=Math.cos(O),z=Math.sin(O);C.x=E*z,C.y=m*M,C.z=E*X,u.push(C.x,C.y,C.z),d.push(0,M,0),T.x=X*.5+.5,T.y=z*.5*M+.5,f.push(T.x,T.y),g++}for(let W=0;W<s;W++){const F=D+W,O=P+W;x===!0?h.push(O,O+1,F):h.push(O+1,O,F),L+=3}l.addGroup(p,L,x===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yn extends Me{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Yn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bc extends Ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const y=new A,x=new A,D=new A;for(let T=0;T<e.length;T+=3)f(e[T+0],y),f(e[T+1],x),f(e[T+2],D),c(y,x,D,S)}function c(S,y,x,D){const T=D+1,C=[];for(let L=0;L<=T;L++){C[L]=[];const E=S.clone().lerp(x,L/T),M=y.clone().lerp(x,L/T),P=T-L;for(let W=0;W<=P;W++)W===0&&L===T?C[L][W]=E:C[L][W]=E.clone().lerp(M,W/P)}for(let L=0;L<T;L++)for(let E=0;E<2*(T-L)-1;E++){const M=Math.floor(E/2);E%2===0?(d(C[L][M+1]),d(C[L+1][M]),d(C[L][M])):(d(C[L][M+1]),d(C[L+1][M+1]),d(C[L+1][M]))}}function l(S){const y=new A;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(S),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){const S=new A;for(let y=0;y<r.length;y+=3){S.x=r[y+0],S.y=r[y+1],S.z=r[y+2];const x=m(S)/2/Math.PI+.5,D=p(S)/Math.PI+.5;a.push(x,1-D)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){const y=a[S+0],x=a[S+2],D=a[S+4],T=Math.max(y,x,D),C=Math.min(y,x,D);T>.9&&C<.1&&(y<.2&&(a[S+0]+=1),x<.2&&(a[S+2]+=1),D<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,y){const x=S*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){const S=new A,y=new A,x=new A,D=new A,T=new et,C=new et,L=new et;for(let E=0,M=0;E<r.length;E+=9,M+=6){S.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),T.set(a[M+0],a[M+1]),C.set(a[M+2],a[M+3]),L.set(a[M+4],a[M+5]),D.copy(S).add(y).add(x).divideScalar(3);const P=m(D);_(T,M+0,S,P),_(C,M+2,y,P),_(L,M+4,x,P)}}function _(S,y,x,D){D<0&&S.x===1&&(a[y]=S.x-1),x.x===0&&x.z===0&&(a[y]=D/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bc(t.vertices,t.indices,t.radius,t.details)}}class zc extends Bc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new zc(t.radius,t.detail)}}class pr extends dc{constructor(t){super(t),this.uuid=bn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new dc().fromJSON(s))}return this}}const ex={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=bu(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,f;if(n&&(r=ax(i,t,r,e)),i.length>80*e){o=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return rr(r,a,e,o,c,f,0),a}};function bu(i,t,e,n,s){let r,a;if(s===_x(i,t,e,n)>0)for(r=t;r<e;r+=n)a=ph(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=ph(r,i[r],i[r+1],a);return a&&wa(a,a.next)&&(or(a),a=a.next),a}function Oi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(wa(e,e.next)||ge(e.prev,e,e.next)===0)){if(or(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function rr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&ux(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?ix(i,n,s,r):nx(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),or(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=sx(Oi(i),t,e),rr(i,t,e,n,s,r,2)):a===2&&rx(i,t,e,n,s,r):rr(Oi(i),t,e,n,s,r,1);break}}}function nx(i){const t=i.prev,e=i,n=i.next;if(ge(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ds(s,o,r,c,a,l,g.x,g.y)&&ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ix(i,t,e,n){const s=i.prev,r=i,a=i.next;if(ge(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=o>c?o>l?o:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=fc(f,g,t,e,n),S=fc(_,m,t,e,n);let y=i.prevZ,x=i.nextZ;for(;y&&y.z>=p&&x&&x.z<=S;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&ds(o,h,c,u,l,d,y.x,y.y)&&ge(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ds(o,h,c,u,l,d,x.x,x.y)&&ge(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&ds(o,h,c,u,l,d,y.x,y.y)&&ge(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=S;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ds(o,h,c,u,l,d,x.x,x.y)&&ge(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function sx(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!wa(s,r)&&Tu(s,n,n.next,r)&&ar(s,r)&&ar(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),or(n),or(n.next),n=i=r),n=n.next}while(n!==i);return Oi(n)}function rx(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&px(a,o)){let c=Au(a,o);a=Oi(a,a.next),c=Oi(c,c.next),rr(a,t,e,n,s,r,0),rr(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function ax(i,t,e,n){const s=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=bu(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(fx(l));for(s.sort(ox),r=0;r<s.length;r++)e=cx(s[r],e);return e}function ox(i,t){return i.x-t.x}function cx(i,t){const e=lx(i,t);if(!e)return t;const n=Au(e,i);return Oi(n,n.next),Oi(e,e.next)}function lx(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ds(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),ar(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&hx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function hx(i,t){return ge(i.prev,i,t.prev)<0&&ge(t.next,i,i.next)<0}function ux(i,t,e,n){let s=i;do s.z===0&&(s.z=fc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,dx(s)}function dx(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function fc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function fx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ds(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function px(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!mx(i,t)&&(ar(i,t)&&ar(t,i)&&gx(i,t)&&(ge(i.prev,i,t.prev)||ge(i,t.prev,t))||wa(i,t)&&ge(i.prev,i,i.next)>0&&ge(t.prev,t,t.next)>0)}function ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function wa(i,t){return i.x===t.x&&i.y===t.y}function Tu(i,t,e,n){const s=Zr(ge(i,t,e)),r=Zr(ge(i,t,n)),a=Zr(ge(e,n,i)),o=Zr(ge(e,n,t));return!!(s!==r&&a!==o||s===0&&jr(i,e,t)||r===0&&jr(i,n,t)||a===0&&jr(e,i,n)||o===0&&jr(e,t,n))}function jr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Zr(i){return i>0?1:i<0?-1:0}function mx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Tu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ar(i,t){return ge(i.prev,i,i.next)<0?ge(i,t,i.next)>=0&&ge(i,i.prev,t)>=0:ge(i,t,i.prev)<0||ge(i,i.next,t)<0}function gx(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Au(i,t){const e=new pc(i.i,i.x,i.y),n=new pc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ph(i,t,e,n){const s=new pc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function or(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function pc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _x(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class di{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return di.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];mh(t),gh(n,t);let a=t.length;e.forEach(mh);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,gh(n,e[c]);const o=ex.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function mh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function gh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ea extends Ce{constructor(t=new pr([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:xx;let y,x=!1,D,T,C,L;p&&(y=p.getSpacedPoints(h),x=!0,d=!1,D=p.computeFrenetFrames(h,!1),T=new A,C=new A,L=new A),d||(m=0,f=0,g=0,_=0);const E=o.extractPoints(l);let M=E.shape;const P=E.holes;if(!di.isClockWise(M)){M=M.reverse();for(let Q=0,rt=P.length;Q<rt;Q++){const R=P[Q];di.isClockWise(R)&&(P[Q]=R.reverse())}}const F=di.triangulateShape(M,P),O=M;for(let Q=0,rt=P.length;Q<rt;Q++){const R=P[Q];M=M.concat(R)}function X(Q,rt,R){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(rt,R)}const z=M.length,J=F.length;function H(Q,rt,R){let Pt,nt,St;const ut=Q.x-rt.x,Ft=Q.y-rt.y,Mt=R.x-Q.x,b=R.y-Q.y,v=ut*ut+Ft*Ft,B=ut*b-Ft*Mt;if(Math.abs(B)>Number.EPSILON){const $=Math.sqrt(v),tt=Math.sqrt(Mt*Mt+b*b),j=rt.x-Ft/$,Tt=rt.y+ut/$,pt=R.x-b/tt,yt=R.y+Mt/tt,Zt=((pt-j)*b-(yt-Tt)*Mt)/(ut*b-Ft*Mt);Pt=j+ut*Zt-Q.x,nt=Tt+Ft*Zt-Q.y;const it=Pt*Pt+nt*nt;if(it<=2)return new et(Pt,nt);St=Math.sqrt(it/2)}else{let $=!1;ut>Number.EPSILON?Mt>Number.EPSILON&&($=!0):ut<-Number.EPSILON?Mt<-Number.EPSILON&&($=!0):Math.sign(Ft)===Math.sign(b)&&($=!0),$?(Pt=-Ft,nt=ut,St=Math.sqrt(v)):(Pt=ut,nt=Ft,St=Math.sqrt(v/2))}return new et(Pt/St,nt/St)}const st=[];for(let Q=0,rt=O.length,R=rt-1,Pt=Q+1;Q<rt;Q++,R++,Pt++)R===rt&&(R=0),Pt===rt&&(Pt=0),st[Q]=H(O[Q],O[R],O[Pt]);const dt=[];let xt,Ut=st.concat();for(let Q=0,rt=P.length;Q<rt;Q++){const R=P[Q];xt=[];for(let Pt=0,nt=R.length,St=nt-1,ut=Pt+1;Pt<nt;Pt++,St++,ut++)St===nt&&(St=0),ut===nt&&(ut=0),xt[Pt]=H(R[Pt],R[St],R[ut]);dt.push(xt),Ut=Ut.concat(xt)}for(let Q=0;Q<m;Q++){const rt=Q/m,R=f*Math.cos(rt*Math.PI/2),Pt=g*Math.sin(rt*Math.PI/2)+_;for(let nt=0,St=O.length;nt<St;nt++){const ut=X(O[nt],st[nt],Pt);lt(ut.x,ut.y,-R)}for(let nt=0,St=P.length;nt<St;nt++){const ut=P[nt];xt=dt[nt];for(let Ft=0,Mt=ut.length;Ft<Mt;Ft++){const b=X(ut[Ft],xt[Ft],Pt);lt(b.x,b.y,-R)}}}const jt=g+_;for(let Q=0;Q<z;Q++){const rt=d?X(M[Q],Ut[Q],jt):M[Q];x?(C.copy(D.normals[0]).multiplyScalar(rt.x),T.copy(D.binormals[0]).multiplyScalar(rt.y),L.copy(y[0]).add(C).add(T),lt(L.x,L.y,L.z)):lt(rt.x,rt.y,0)}for(let Q=1;Q<=h;Q++)for(let rt=0;rt<z;rt++){const R=d?X(M[rt],Ut[rt],jt):M[rt];x?(C.copy(D.normals[Q]).multiplyScalar(R.x),T.copy(D.binormals[Q]).multiplyScalar(R.y),L.copy(y[Q]).add(C).add(T),lt(L.x,L.y,L.z)):lt(R.x,R.y,u/h*Q)}for(let Q=m-1;Q>=0;Q--){const rt=Q/m,R=f*Math.cos(rt*Math.PI/2),Pt=g*Math.sin(rt*Math.PI/2)+_;for(let nt=0,St=O.length;nt<St;nt++){const ut=X(O[nt],st[nt],Pt);lt(ut.x,ut.y,u+R)}for(let nt=0,St=P.length;nt<St;nt++){const ut=P[nt];xt=dt[nt];for(let Ft=0,Mt=ut.length;Ft<Mt;Ft++){const b=X(ut[Ft],xt[Ft],Pt);x?lt(b.x,b.y+y[h-1].y,y[h-1].x+R):lt(b.x,b.y,u+R)}}}Y(),at();function Y(){const Q=s.length/3;if(d){let rt=0,R=z*rt;for(let Pt=0;Pt<J;Pt++){const nt=F[Pt];Dt(nt[2]+R,nt[1]+R,nt[0]+R)}rt=h+m*2,R=z*rt;for(let Pt=0;Pt<J;Pt++){const nt=F[Pt];Dt(nt[0]+R,nt[1]+R,nt[2]+R)}}else{for(let rt=0;rt<J;rt++){const R=F[rt];Dt(R[2],R[1],R[0])}for(let rt=0;rt<J;rt++){const R=F[rt];Dt(R[0]+z*h,R[1]+z*h,R[2]+z*h)}}n.addGroup(Q,s.length/3-Q,0)}function at(){const Q=s.length/3;let rt=0;bt(O,rt),rt+=O.length;for(let R=0,Pt=P.length;R<Pt;R++){const nt=P[R];bt(nt,rt),rt+=nt.length}n.addGroup(Q,s.length/3-Q,1)}function bt(Q,rt){let R=Q.length;for(;--R>=0;){const Pt=R;let nt=R-1;nt<0&&(nt=Q.length-1);for(let St=0,ut=h+m*2;St<ut;St++){const Ft=z*St,Mt=z*(St+1),b=rt+Pt+Ft,v=rt+nt+Ft,B=rt+nt+Mt,$=rt+Pt+Mt;Vt(b,v,B,$)}}}function lt(Q,rt,R){c.push(Q),c.push(rt),c.push(R)}function Dt(Q,rt,R){Bt(Q),Bt(rt),Bt(R);const Pt=s.length/3,nt=S.generateTopUV(n,s,Pt-3,Pt-2,Pt-1);ee(nt[0]),ee(nt[1]),ee(nt[2])}function Vt(Q,rt,R,Pt){Bt(Q),Bt(rt),Bt(Pt),Bt(rt),Bt(R),Bt(Pt);const nt=s.length/3,St=S.generateSideWallUV(n,s,nt-6,nt-3,nt-2,nt-1);ee(St[0]),ee(St[1]),ee(St[3]),ee(St[1]),ee(St[2]),ee(St[3])}function Bt(Q){s.push(c[Q*3+0]),s.push(c[Q*3+1]),s.push(c[Q*3+2])}function ee(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return vx(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new uc[s.type]().fromJSON(s)),new Ea(n,t.options)}}const xx={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new et(r,a),new et(o,c),new et(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new et(a,1-c),new et(l,1-u),new et(d,1-g),new et(_,1-p)]:[new et(o,1-c),new et(h,1-u),new et(f,1-g),new et(m,1-p)]}};function vx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ba extends Ce{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,f=new A,g=new et;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const S=p+m,y=S,x=S+n+1,D=S+n+2,T=S+1;o.push(y,x,T),o.push(x,D,T)}}this.setIndex(o),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ba(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Hc extends Ce{constructor(t=new pr([new et(0,.5),new et(-.5,-.5),new et(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(r,3)),this.setAttribute("uv",new te(a,2));function l(h){const u=s.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;di.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const S=g[m];di.isClockWise(S)===!0&&(g[m]=S.reverse())}const _=di.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const S=g[m];f=f.concat(S)}for(let m=0,p=f.length;m<p;m++){const S=f[m];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let m=0,p=_.length;m<p;m++){const S=_[m],y=S[0]+u,x=S[1]+u,D=S[2]+u;n.push(y,x,D),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Mx(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new Hc(n,t.curveSegments)}}function Mx(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Ht extends Ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new A,d=new A,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const S=[],y=p/n;let x=0;p===0&&a===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let D=0;D<=e;D++){const T=D/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+x,1-y),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const y=h[p][S+1],x=h[p][S],D=h[p+1][S],T=h[p+1][S+1];(p!==0||a>0)&&f.push(y,x,T),(p!==n-1||c<Math.PI)&&f.push(x,D,T)}this.setIndex(f),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ht(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Vn extends Ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new A,u=new A,d=new A;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,S=(s+1)*f+g;a.push(_,m,S),a.push(m,p,S)}this.setIndex(a),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Vc extends zi{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Kt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qh,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Ru extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Cu extends Ru{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const _o=new le,_h=new A,xh=new A;class yx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dc,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;_h.setFromMatrixPosition(t.matrixWorld),e.position.copy(_h),xh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xh),e.updateMatrixWorld(),_o.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_o),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_o)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Sx extends yx{constructor(){super(new uu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mc extends Ru{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Sx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const vh=new le;class wx{constructor(t,e,n=0,s=1/0){this.ray=new Pc(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Lc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vh),this}intersectObject(t,e=!0,n=[]){return gc(t,this,n,e),n.sort(Mh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)gc(t[s],this,n,e);return n.sort(Mh),n}}function Mh(i,t){return i.distance-t.distance}function gc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)gc(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sc);class Ex{constructor(t){this.canvas=t,this.renderer=new _u({canvas:t,antialias:!0}),this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.renderer.setPixelRatio(this.pixelRatio),this.slowFor=0,this.lastRender=0,this.frameAvg=1/60,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Hh,this.renderer.outputColorSpace=Ee,this.view=null,this.w=1,this.h=1,window.addEventListener("resize",()=>this.resize()),this.resize()}setView(t){this.view=t,this.resize()}get aspect(){return this.w/this.h}resize(){var s,r;this.w=window.innerWidth,this.h=window.innerHeight,this.renderer.setSize(this.w,this.h,!1);const t=this.view;if(!t)return;const e=t.camera;e.aspect=this.aspect;const n=(s=t.offset)==null?void 0:s.call(t,this.aspect);n?e.setViewOffset(this.w,this.h,n[0]*this.w,n[1]*this.h,this.w,this.h):e.clearViewOffset(),(r=t.onResize)==null||r.call(t,this.aspect),e.updateProjectionMatrix()}render(){this.adapt(),this.view&&this.renderer.render(this.view.scene,this.view.camera)}adapt(){const t=performance.now(),e=(t-this.lastRender)/1e3;this.lastRender=t,!(!(e>0)||e>.25)&&(this.frameAvg+=(e-this.frameAvg)*.05,this.slowFor=this.frameAvg>1/40?this.slowFor+e:0,this.slowFor>2&&this.pixelRatio>1&&(this.pixelRatio=Math.max(1,this.pixelRatio-.5),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.w,this.h,!1),this.slowFor=0))}toScreen(t,e=(n=>(n=this.view)==null?void 0:n.camera)()){const s=t.clone().project(e);return{x:(s.x*.5+.5)*this.w,y:(-s.y*.5+.5)*this.h,behind:s.z>1}}}function Hi(i){const t=document.createElement("canvas");t.width=4,t.height=256;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,256);i.forEach(([r,a])=>n.addColorStop(r,a)),e.fillStyle=n,e.fillRect(0,0,4,256);const s=new Rs(t);return s.colorSpace=Ee,s}function Vi(i,{sky:t=16777215,ground:e=14268282,hemi:n=1.3,sun:s=1.7,sunPos:r=[-8,18,12],shadow:a=20}={}){i.add(new Cu(t,e,n));const o=new mc(16777215,s);return o.position.set(...r),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),Object.assign(o.shadow.camera,{left:-a,right:a,top:a,bottom:-a,near:1,far:80}),i.add(o),i.add(o.target),o}function Gi(i,t,e,n,{receive:s=!0}={}){const r=document.createElement("canvas");r.width=r.height=256;const a=r.getContext("2d"),o=a.createRadialGradient(128,128,10,128,128,150);o.addColorStop(0,e),o.addColorStop(.55,e),o.addColorStop(1,n),a.fillStyle=o,a.fillRect(0,0,256,256);const c=new Rs(r);c.colorSpace=Ee;const l=new Jt(new Be(i,t),new Vc({map:c,gradientMap:Pu()}));return l.rotation.x=-Math.PI/2,l.receiveShadow=s,l}let Ei=null;function Pu(){if(Ei)return Ei;const i=new Uint8Array([150,190,225,245,255]);return Ei=new vu(i,i.length,1,xa),Ei.minFilter=Ei.magFilter=We,Ei.needsUpdate=!0,Ei}function $n(i=.75,t=.18){const e=new Jt(new Tn(i,24),new cn({color:1707781,transparent:!0,opacity:t,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=.012,e.renderOrder=1,e}function Ta(i,t=[30,30,-90],e=16773800,n=5){const s=new It,r=new Jt(new Tn(n,32),new cn({color:e,fog:!1}));s.add(r);const a=new Nc(new ya({map:Lu(),color:e,transparent:!0,opacity:.55,depthWrite:!1,blending:nr,fog:!1}));return a.scale.setScalar(n*5),s.add(a),s.position.set(...t),i.add(s),s}function bx(i,{colors:t=[10475914,9227132,11920028],z:e=-70,count:n=9,spread:s=170,height:r=1}={}){const a=new It;for(let o=0;o<n;o++){const c=new Jt(new Ht(1,18,10),new Vc({color:t[o%t.length],gradientMap:Pu()})),l=12+o*7%3*5;c.scale.set(l*1.7,l*.45*r,l),c.position.set(-s/2+o/(n-1)*s,-2,e-o*5%3*9),a.add(c)}return i.add(a),a}let Gs=null;function Lu(){if(Gs)return Gs;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Gs=new Rs(i),Gs.colorSpace=Ee,Gs}class Cs{constructor(t,{count:e=30,color:n=16777215,size:s=.18,box:r=[12,6,8],center:a=[0,3,0],speed:o=.4,twinkle:c=!0,opacity:l=.7}={}){this.mat=new ya({map:Lu(),color:n,transparent:!0,opacity:l,depthWrite:!1,blending:nr}),this.list=[],this.box=r,this.center=a,this.speed=o,this.twinkle=c,this.base=l;for(let h=0;h<e;h++){const u=new Nc(this.mat.clone());u.scale.setScalar(s*(.6+Math.random()*.8));const d=Math.random()*100;u.position.set(a[0]+(Math.random()-.5)*r[0],a[1]+(Math.random()-.5)*r[1],a[2]+(Math.random()-.5)*r[2]),t.add(u),this.list.push({s:u,seed:d,y0:u.position.y,x0:u.position.x})}this.t=Math.random()*10}update(t,e=0){this.t+=t;const n=this.t;for(const s of this.list)s.s.position.x=e+s.x0+Math.sin(n*this.speed+s.seed)*.8,s.s.position.y=s.y0+Math.sin(n*this.speed*.7+s.seed*1.3)*.5,this.twinkle&&(s.s.material.opacity=this.base*(.45+.55*Math.abs(Math.sin(n*1.4+s.seed))))}}function mr(i,t,e,n){const s=i.fov*Math.PI/180,r=2*Math.atan(Math.tan(s/2)*t);return Math.max(e/Math.tan(r/2),n/Math.tan(s/2))}const Tx=new Ht(1,6,4),Ax=new Be(1,.6);class Rx{constructor(t){this.scene=t,this.list=[]}burst(t,{count:e=16,colors:n=[16767291,16740264,4171488,8046415],speed:s=5,size:r=.12,life:a=.9,gravity:o=-9,confetti:c=!1,up:l=2}={}){for(let h=0;h<e;h++){const u=new cn({color:n[h%n.length],transparent:!0,side:be}),d=new Jt(c?Ax:Tx,u);d.position.copy(t),d.scale.setScalar(r*(.7+Math.random()*.6));const f=Math.random()*Math.PI*2,g=Math.random()*2-1,_=new A(Math.cos(f)*Math.sqrt(1-g*g),g,Math.sin(f)*Math.sqrt(1-g*g)).multiplyScalar(s*(.4+Math.random()*.6));_.y+=l,this.scene.add(d),this.list.push({m:d,v:_,life:a,max:a,gravity:o,spin:c?(Math.random()-.5)*12:0})}}update(t){for(let e=this.list.length-1;e>=0;e--){const n=this.list[e];if(n.life-=t,n.life<=0){this.scene.remove(n.m),n.m.material.dispose(),this.list.splice(e,1);continue}n.v.y+=n.gravity*t,n.m.position.addScaledVector(n.v,t),n.spin&&(n.m.rotation.x+=n.spin*t,n.m.rotation.y+=n.spin*.7*t),n.m.material.opacity=Math.min(1,n.life/n.max*2)}}clear(){for(const t of this.list)this.scene.remove(t.m),t.m.material.dispose();this.list=[]}}const Cx=(()=>{const i=new Uint8Array([118,160,200,232,255]),t=new vu(i,i.length,1,xa);return t.minFilter=t.magFilter=We,t.needsUpdate=!0,t})(),xo=new Map;function ht(i,t={}){const e=i+JSON.stringify(t);if(!t.noCache&&xo.has(e))return xo.get(e);const{noCache:n,...s}=t,r=new Vc({color:i,gradientMap:Cx,...s});return n||xo.set(e,r),r}const Mn=(i,t={})=>new cn({color:i,...t});function Xe(i,t=!1){return i.traverse(e=>{e.isMesh&&(e.castShadow=!0,t&&(e.receiveShadow=!0))}),i}const ct=(i,t,e=0,n=0,s=0)=>{const r=new Jt(i,t);return r.position.set(e,n,s),r},je=(i,t,e)=>new Jt(new Sa(i,t,5,12),e);let Ws=null;function Px(){if(Ws)return Ws;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.7)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Ws=new Rs(i),Ws.colorSpace=Ee,Ws}function Wn(i,t=1,e=.8){const n=new Nc(new ya({map:Px(),color:i,transparent:!0,opacity:e,depthWrite:!1,blending:nr}));return n.scale.setScalar(t),n}const en=[{name:"Rayyan",skin:13012058,shirt:4171488,pants:3100543,shoes:16777215,head:"kufi",hat:16777215,trim:16763196},{name:"Noor",skin:15845280,shirt:16740264,pants:8015800,shoes:16777215,head:"hijab",hat:10185727,trim:16769126},{name:"Sami",skin:9263675,shirt:16747069,pants:3824192,shoes:3355443,head:"cap",hat:1483680,trim:16777215},{name:"Layla",skin:14724222,shirt:1483680,pants:3096166,shoes:16740264,head:"hijab",hat:16777215,trim:1483680}],Ii={name:"Zaki",skin:11565650,shirt:8046415,pants:4473924,shoes:16767291,head:"hair",hat:2824720,trim:16777215},tn={thigh:.55,shin:.55,hipY:1.2,upper:.48,fore:.48};function Lx(i){const t=new It,e=ht(i.skin),n=ct(new Ht(.46,24,18),e);t.add(n);const s=Mn(2234127),r=Mn(16777215);for(const c of[-1,1]){const l=ct(new Ht(.075,12,10),s,.16*c,.04,.4);l.scale.set(.85,1.15,.6),t.add(l),t.add(ct(new Ht(.026,8,6),r,.16*c+.02,.08,.445));const h=ct(new Ht(.07,10,8),Mn(16751272,{transparent:!0,opacity:.7}),.27*c,-.09,.34);h.scale.z=.3,t.add(h);const u=ct(new Sa(.018,.08,3,6),s,.16*c,.17,.41);u.rotation.z=Math.PI/2+.15*c,t.add(u)}const a=ct(new Vn(.1,.022,6,16,Math.PI),s,0,-.1,.415);a.rotation.z=Math.PI,t.add(a),t.add(ct(new Ht(.045,8,6),ht(i.skin),0,-.01,.46));const o=ht(i.hat);if(i.head==="kufi"){const c=ct(new Me(.36,.43,.26,24),o,0,.3,-.02);c.rotation.x=-.12,t.add(c);const l=ct(new Vn(.425,.03,6,28),ht(i.trim),0,.2,-.01);l.rotation.x=Math.PI/2-.12,t.add(l),t.add(ct(new Ht(.47,18,12,0,Math.PI*2,Math.PI*.45,Math.PI*.3),ht(2824720),0,0,-.05))}else if(i.head==="hijab"){const l=ct(new Ht(.52,24,18,Math.PI/2+.85,Math.PI*2-1.7,0,Math.PI*.82),ht(i.hat,{side:be}));t.add(l);const h=ct(new Me(.4,.62,.42,24,1,!0),ht(i.hat,{side:be}),0,-.5,-.02);t.add(h);const u=ct(new Vn(.43,.035,6,28,Math.PI*1.25),ht(i.trim),0,.02,.2);u.rotation.z=-Math.PI*.125,u.scale.y=1.1,t.add(u)}else if(i.head==="cap"){t.add(ct(new Ht(.48,20,12,0,Math.PI*2,0,Math.PI*.45),o,0,.02,0));const c=ct(new Me(.3,.3,.04,20,1,!1,-Math.PI/2,Math.PI),o,0,.18,.3);t.add(c),t.add(ct(new Ht(.06,8,6),ht(i.trim),0,.49,0))}else{const c=ct(new Ht(.485,20,12,0,Math.PI*2,0,Math.PI*.42),o,0,.03,-.03);t.add(c);const l=ct(new Vn(.44,.04,6,28),ht(16731501),0,.16,0);l.rotation.x=Math.PI/2-.2,t.add(l)}return t}function ye(i=en[0]){const t=new It,e=new It;e.position.y=tn.hipY,t.add(e);const n=ht(i.shirt),s=ht(i.pants),r=ht(i.skin),a=ht(i.shoes),o=new It;e.add(o);const c=je(.36,.42,n);c.position.y=.45,c.scale.set(1.05,1,.78),o.add(c);const l=ct(new Me(.37,.43,.32,20,1,!0),ht(i.shirt,{side:be}),0,.02,0);l.scale.z=.8,o.add(l);const h=ct(new Vn(.43,.035,6,24),ht(i.trim),0,-.13,0);h.rotation.x=Math.PI/2,h.scale.y=.8,o.add(h),o.add(ct(new Me(.12,.14,.2,10),r,0,.92,0));const u=Lx(i);u.position.y=1.38,o.add(u);const d={root:t,pelvis:e,torso:o,head:u,arms:{},legs:{}};for(const[f,g]of[["sl",-1],["sr",1]]){const _=new It;_.position.set(.42*g,.78,0),o.add(_),_.add(ct(new Ht(.14,10,8),n));const m=je(.12,.28,n);m.position.y=-.24,_.add(m);const p=new It;p.position.y=-.48,_.add(p);const S=je(.1,.28,r);S.position.y=-.22,p.add(S);const y=ct(new Ht(.13,12,10),r,0,-.48,0);p.add(y),d.arms[f]={shoulder:_,elbow:p,hand:y,s:g};const x=new It;x.position.set(.19*g,0,0),e.add(x);const D=je(.15,.3,s);D.position.y=-.27,x.add(D);const T=new It;T.position.y=-.55,x.add(T);const C=je(.13,.32,s);C.position.y=-.25,T.add(C);const L=ct(new Ht(.16,12,8),a,0,-.55+.02,.07);L.scale.set(.95,.6,1.4),T.add(L),d.legs[f]={hip:x,knee:T,foot:L,s:g}}return t.userData.rig=d,t.userData.style=i,Xe(t),we(t,{}),t}new A;function we(i,t){var s,r,a;const e=i.userData.rig;for(const o of["sl","sr"]){const c=((s=t.arms)==null?void 0:s[o])||{},l=e.arms[o],h=c.up??.12,u=c.fore??h;l.shoulder.rotation.set(-(c.fwd||0),c.yaw||0,l.s*h),l.elbow.rotation.set(-(c.foreFwd||0),0,l.s*(u-h));const d=((r=t.legs)==null?void 0:r[o])||{},f=e.legs[o];f.hip.rotation.set(-(d.lift||0),0,f.s*(d.spread||0)),f.knee.rotation.set(d.knee??d.lift??0,0,0)}e.torso.rotation.set(t.bend||0,t.twist||0,-(t.lean||0)),e.head.rotation.set(t.nod||0,t.yawHead||0,0);let n=0;if(t.autoGround!==!1){let o=0;for(const c of["sl","sr"]){const l=((a=t.legs)==null?void 0:a[c])||{},h=l.lift||0,u=l.knee??h,d=l.spread||0;o=Math.max(o,(tn.thigh*Math.cos(h)+tn.shin*Math.cos(h-u))*Math.cos(d))}n=tn.thigh+tn.shin-o}e.pelvis.position.y=tn.hipY-n+(t.hop||0)}function _c(i,t,e=new A){return i.userData.rig.arms[t].hand.getWorldPosition(e)}function Dx(i,t,e){var r,a,o,c;const n=(l=0,h=0)=>l+(h-l)*e,s={arms:{},legs:{},lean:n(i.lean,t.lean),bend:n(i.bend,t.bend),hop:n(i.hop,t.hop),twist:n(i.twist,t.twist)};for(const l of["sl","sr"]){const h=((r=i.arms)==null?void 0:r[l])||{},u=((a=t.arms)==null?void 0:a[l])||{},d=h.up??.12,f=u.up??.12;s.arms[l]={up:n(d,f),fore:n(h.fore??d,u.fore??f),fwd:n(h.fwd,u.fwd),foreFwd:n(h.foreFwd,u.foreFwd)};const g=((o=i.legs)==null?void 0:o[l])||{},_=((c=t.legs)==null?void 0:c[l])||{};s.legs[l]={spread:n(g.spread,_.spread),lift:n(g.lift,_.lift),knee:n(g.knee??g.lift,_.knee??_.lift)}}return s}const Nt={stand:{arms:{sl:{up:.12},sr:{up:.12}}},idle:i=>({arms:{sl:{up:.16+.04*Math.sin(i*1.6),fwd:.06*Math.sin(i*1.1)},sr:{up:.16+.04*Math.sin(i*1.6+.4),fwd:-.06*Math.sin(i*1.1)}},hop:.012*Math.sin(i*1.6),nod:.03*Math.sin(i*.9)}),wave:i=>({arms:{sl:{up:.12},sr:{up:2.5,fore:2.5+.5*Math.sin(i*8)}}}),cheer:i=>({arms:{sl:{up:2.7+.15*Math.sin(i*10)},sr:{up:2.7+.15*Math.sin(i*10+1)}},hop:Math.abs(Math.sin(i*6))*.25}),reachUp:{arms:{sl:{up:2.95},sr:{up:2.95}}},armsOut:i=>({arms:{sl:{up:Math.PI/2+.25*Math.sin(i*5),fore:Math.PI/2+.25*Math.sin(i*5)},sr:{up:Math.PI/2+.25*Math.cos(i*5)}}}),leanLeft:{lean:-.3,arms:{sl:{up:.3},sr:{up:2.8,fore:3.2}}},leanRight:{lean:.3,arms:{sr:{up:.3},sl:{up:2.8,fore:3.2}}},toeTouch:{bend:.9,arms:{sl:{up:.1,fwd:.6},sr:{up:.1,fwd:.6}},legs:{sl:{lift:.1,knee:.2},sr:{lift:.1,knee:.2}}},squat:i=>({bend:i*.35,arms:{sl:{up:.25,fwd:i*1.4},sr:{up:.25,fwd:i*1.4}},legs:{sl:{lift:i*1.3,knee:i*1.9,spread:i*.15},sr:{lift:i*1.3,knee:i*1.9,spread:i*.15}}}),jack:i=>({arms:{sl:{up:.12+i*2.75},sr:{up:.12+i*2.75}},legs:{sl:{spread:i*.38},sr:{spread:i*.38}},hop:Math.sin(i*Math.PI)*.3}),run:(i,t=1)=>{const e=Math.sin(i),n=Math.cos(i);return{arms:{sl:{up:.15,fwd:-e*.9*t,foreFwd:1.1*t},sr:{up:.15,fwd:e*.9*t,foreFwd:1.1*t}},legs:{sl:{lift:(.2+e*.8)*t,knee:(.4+Math.max(0,-n)*1.1+Math.max(0,e)*.6)*t},sr:{lift:(.2-e*.8)*t,knee:(.4+Math.max(0,n)*1.1+Math.max(0,-e)*.6)*t}},bend:.15*t,hop:Math.abs(n)*.12*t,autoGround:!0}},march:i=>{const t=Math.max(0,Math.sin(i)),e=Math.max(0,-Math.sin(i));return{arms:{sl:{up:.15,fwd:e*.8,foreFwd:.4},sr:{up:.15,fwd:t*.8,foreFwd:.4}},legs:{sl:{lift:t*1.2,knee:t*1.3},sr:{lift:e*1.2,knee:e*1.3}}}},ride:(i=0)=>({arms:{sl:{up:.25,fwd:.7,foreFwd:.6},sr:{up:.25,fwd:.7,foreFwd:.6}},legs:{sl:{lift:.55,knee:.9,spread:.75},sr:{lift:.55,knee:.9,spread:.75}},bend:.15+i*.1,autoGround:!1})};function Du(i,{color:t,hoof:e,len:n,x:s,zF:r,zB:a,y:o,r:c}){const l=[];for(const[h,u]of[[-s,r],[s,r],[-s,a],[s,a]]){const d=new It;d.position.set(h,o,u);const f=je(c,n*.5,ht(t));f.position.y=-n*.3,d.add(f);const g=new It;g.position.y=-n*.55,d.add(g);const _=je(c*.8,n*.4,ht(t));_.position.y=-n*.2,g.add(_),g.add(ct(new Me(c*.95,c*1.05,.14,10),ht(e),0,-n*.45,0)),i.add(d),l.push({pivot:d,knee:g})}return l}function Iu(i,t,e,n,s=.09){for(const r of[-1,1])i.add(ct(new Ht(s,10,8),Mn(1774090),t*r,e,n)),i.add(ct(new Ht(s*.35,6,6),Mn(16777215),t*r+.02*r,e+.03,n+s*.6))}function Aa(i=12088115,t=3875858){const e=new It,n=ct(new Ht(1,20,14),ht(i),0,2.1,0);n.scale.set(.72,.68,1.45),e.add(n);const s=je(.34,.8,ht(i));s.position.set(0,2.8,1.3),s.rotation.x=.85,e.add(s);const r=new It;r.position.set(0,3.3,1.95),r.rotation.x=.75,e.add(r);const a=je(.28,.75,ht(i));a.rotation.x=Math.PI/2,r.add(a);const o=ct(new Ht(.29,12,10),ht(15255968),0,-.05,.62);o.scale.set(.95,.85,.8),r.add(o);for(const g of[-1,1]){const _=ct(new Yn(.09,.28,8),ht(i),.16*g,.33,-.25);_.rotation.x=-.4,r.add(_),r.add(ct(new Ht(.035,6,6),Mn(3875858),.1*g,-.02,.88))}Iu(r,.25,.12,.05),r.add(ct(new Ht(.14,8,6),ht(16777215),0,.26,.15));const c=ht(t);for(let g=0;g<6;g++){const _=ct(new Ht(.17,8,6),c,0,3.3-g*.15,1.62-g*.2);_.scale.set(.6,1.2,.9),e.add(_)}const l=new It;l.position.set(0,2.35,-1.4);const h=je(.14,.8,c);h.position.set(0,-.35,-.2),h.rotation.x=-.4,l.add(h),e.add(l);const u=ct(new Me(.76,.76,.9,20,1,!0,-Math.PI*.45,Math.PI*.9),ht(15087942,{side:be}),0,2.2,.1);u.rotation.set(Math.PI/2,0,Math.PI/2),e.add(u);const d=ct(new Ht(.45,14,8,0,Math.PI*2,0,Math.PI/2),ht(7028255),0,2.72,.1);d.scale.set(1,.35,1.1),e.add(d);const f=Du(e,{color:i,hoof:3875858,len:1.75,x:.36,zF:.85,zB:-.85,y:1.85,r:.15});return e.userData={legs:f,tail:l,head:r,saddleY:2.85,saddleZ:.1,kind:"horse"},Xe(e)}function Ra(i=14263387){const t=new It,e=ct(new Ht(1,20,14),ht(i),0,2.55,0);e.scale.set(.72,.62,1.35),t.add(e);const n=ct(new Ht(.6,16,12),ht(i),0,3.05,-.25);n.scale.set(1,.85,1.25),t.add(n);const s=je(.25,.7,ht(i));s.position.set(0,2.85,1.35),s.rotation.x=1,t.add(s);const r=je(.22,.65,ht(i));r.position.set(0,3.4,1.75),r.rotation.x=-.2,t.add(r);const a=new It;a.position.set(0,3.85,1.95),t.add(a);const o=je(.24,.4,ht(i));o.rotation.x=Math.PI/2,a.add(o);const c=ct(new Ht(.22,10,8),ht(12749384),0,-.05,.38);a.add(c);for(const _ of[-1,1])a.add(ct(new Ht(.08,8,6),ht(i),.2*_,.2,-.15));Iu(a,.19,.1,.12,.075);for(const _ of[-1,1]){const m=ct(new on(.12,.02,.02),Mn(1774090),.2*_,.19,.14);m.rotation.z=.3*_,a.add(m)}const l=new It;l.position.set(0,2.6,-1.3);const h=je(.07,.6,ht(9067051));h.position.set(0,-.3,-.1),l.add(h),t.add(l);const u=ct(new Me(.66,.66,1.2,20,1,!0,-Math.PI*.5,Math.PI),ht(8015800,{side:be}),0,3.05,.05);u.rotation.set(Math.PI/2,0,Math.PI/2),t.add(u);const d=[16731501,16763196,1483680];for(let _=0;_<6;_++){const m=_<3?-1:1,p=-.4+_%3*.45;t.add(ct(new Ht(.08,8,6),ht(d[_%3]),.68*m,2.45,p))}const f=ct(new Ht(.42,14,8,0,Math.PI*2,0,Math.PI/2),ht(15087942),0,3.5,.15);f.scale.set(1,.35,1),t.add(f);const g=Du(t,{color:i,hoof:9067051,len:2.25,x:.34,zF:.8,zB:-.8,y:2.3,r:.13});return t.userData={legs:g,tail:l,head:a,saddleY:3.62,saddleZ:.15,kind:"camel"},Xe(t)}function cr(i,t,e){const n=i.userData.legs,s=[0,.5,Math.PI,Math.PI+.5];n.forEach((r,a)=>{const o=Math.sin(t+s[a]);r.pivot.rotation.x=o*.45*e,r.knee.rotation.x=Math.max(0,-Math.cos(t+s[a]))*.6*e*(a<2?1:-1)}),i.userData.tail.rotation.x=.3+Math.sin(t*.5)*.25*e,i.userData.head.rotation.y=Math.sin(t*.25)*.05}const Gc=.95;function Uu(){const i=new It,t=Gc,e=Math.PI*.27,n=ct(new Vn(t,.045,6,24,e*2),ht(9132587));n.rotation.z=-e,i.add(n);const s=ct(new Me(.065,.065,.22,8),ht(15087942),t,0,0);i.add(s);for(const c of[-1,1])i.add(ct(new Ht(.06,8,6),ht(16763196),Math.cos(e)*t,c*Math.sin(e)*t,0));const r=new A(Math.cos(e)*t,Math.sin(e)*t,0),a=new Ce().setFromPoints([r,new A(r.x,0,0),new A(r.x,-r.y,0)]),o=new H_(a,new Mu({color:16777215}));return i.add(o),i.userData={string:o,top:r},Xe(i)}function Wc(i,t){const{string:e,top:n}=i.userData,s=e.geometry.attributes.position;s.setX(1,n.x-t*.5),s.needsUpdate=!0}function xc(){const i=new It,t=ct(new Me(.025,.025,1.1,6),ht(14267276));t.rotation.z=Math.PI/2,i.add(t);const e=ct(new Yn(.06,.18,8),ht(11581640),.62,0,0);e.rotation.z=-Math.PI/2,i.add(e);for(const n of[0,Math.PI/2]){const s=ct(new on(.22,.14,.01),ht(16731501),-.48,0,0);s.rotation.x=n,i.add(s)}return i}const Jr=[16731501,16763196,4171488,8046415,10185727,16747069];function Nu(i){const t=new It,e=ct(new Ht(.55,20,16),ht(i,{noCache:!0}));e.scale.y=1.18,t.add(e),t.add(ct(new Ht(.12,8,6),Mn(16777215,{transparent:!0,opacity:.7}),-.2,.28,.42));const n=ct(new Yn(.09,.14,8),ht(i),0,-.68,0);t.add(n);const s=ct(new Me(.008,.008,1.3,4),Mn(16777215),0,-1.38,0);return t.add(s),t.userData.color=i,Xe(t)}function Fu(){const i=new It;[[1,16777215],[.8,16731501],[.6,16777215],[.4,4171488],[.2,16763196]].forEach(([n,s],r)=>{const a=ct(new Me(n,n,.12+r*.02,32),ht(s));a.rotation.x=Math.PI/2,i.add(a)});const e=ht(9132587);for(const n of[-1,1]){const s=ct(new Me(.06,.06,2.2,6),e,.55*n,-1.1,-.3);s.rotation.z=.15*n,i.add(s)}return Xe(i)}const Ix=(()=>{const i=new pr;for(let e=0;e<10;e++){const n=e%2?.2:.46,s=Math.PI/2+e*Math.PI/5;e===0?i.moveTo(Math.cos(s)*n,Math.sin(s)*n):i.lineTo(Math.cos(s)*n,Math.sin(s)*n)}i.closePath();const t=new Ea(i,{depth:.12,bevelEnabled:!0,bevelThickness:.06,bevelSize:.05,bevelSegments:2});return t.center(),t})();function Ou(i=16767291){const t=new It,e=new Jt(Ix,ht(i,{emissive:i,emissiveIntensity:.45,noCache:!0}));e.name="star",t.add(e);const n=Wn(i,2,.7);return n.name="glow",t.add(n),t}function ku(i=16757051){const t=new It,e=ht(13211180),n=ht(7031594,{emissive:i,emissiveIntensity:0,noCache:!0}),s=ct(new Me(.3,.24,.62,6),n);t.add(s);for(let l=0;l<6;l++){const h=l/6*Math.PI*2,u=ct(new on(.04,.66,.04),e,Math.cos(h)*.29,0,Math.sin(h)*.29);u.rotation.z=Math.cos(h)*.09,u.rotation.x=-Math.sin(h)*.09,t.add(u)}const r=ct(new Yn(.42,.38,6),e,0,.5,0);t.add(r),t.add(ct(new Ht(.07,8,6),e,0,.74,0));const a=ct(new Vn(.1,.025,6,12),e,0,.86,0);t.add(a);const o=ct(new Yn(.26,.24,6),e,0,-.43,0);o.rotation.x=Math.PI,t.add(o),t.add(ct(new Ht(.05,6,6),e,0,-.6,0));const c=Wn(i,2.2,0);return t.add(c),t.userData={glassMat:n,glow:c,color:i,lit:!1},Xe(t)}function Zs(i,t,e=i.userData.color){i.userData.lit=t,i.userData.color=e,i.userData.glassMat.emissive.setHex(e),i.userData.glassMat.emissiveIntensity=t?1.1:.12,i.userData.glassMat.color.setHex(t?16773824:11897429),i.userData.glow.material.color.setHex(e),i.userData.glow.material.opacity=t?.85:0}function Xc(i=16774064,t=1){const e=.62*t,n=Math.sqrt(t*t-e*e/4),s=Math.atan2(n,e/2),r=new pr;r.absarc(0,0,t,s,Math.PI*2-s,!1),r.absarc(e,0,t,Math.PI+s,Math.PI-s,!0);const a=new Jt(new Hc(r,32),Mn(i,{fog:!1}));return a.rotation.z=.5,a}function gr(i=1,t=16777215){const e=new It,n=ht(t);for(const[s,r,a]of[[0,0,1],[.9,-.1,.75],[-.9,-.1,.8],[.4,.45,.7],[-.4,.4,.65]])e.add(ct(new Ht(a,14,10),n,s,r,0));return e.scale.setScalar(i),e}function Ps(i=6){const t=new It,e=ht(10251066),n=7;for(let o=0;o<n;o++){const c=ct(new Me(.28-o*.015,.34-o*.015,i/n+.05,8),e,Math.sin(o*.35)*.35,(o+.5)*(i/n),0);c.rotation.z=-.06,t.add(c)}const s=new A(Math.sin(n*.35)*.35,i,0),r=ht(4173385,{side:be});for(let o=0;o<7;o++){const c=ct(new Ht(1,10,6,0,Math.PI*2,0,Math.PI/2),r);c.scale.set(2.2,.35,.55),c.position.copy(s),c.rotation.y=o/7*Math.PI*2,c.rotation.z=-.45,c.translateX(1.4),t.add(c)}const a=ht(9059090);for(let o=0;o<3;o++){const c=o*2.1;for(let l=0;l<5;l++)t.add(ct(new Ht(.11,6,5),a,s.x+Math.cos(c)*.4+l%2*.1,i-.35-l*.08,Math.sin(c)*.4+l%3*.06))}return Xe(t)}function Bu(i=10,t=2,e=15911293){const n=ct(new Ht(1,24,12,0,Math.PI*2,0,Math.PI/2),ht(e));return n.scale.set(i,t,i*.45),n.receiveShadow=!0,n}function zu(i=15087942){const t=new It,e=ct(new Yn(2,2.4,8),ht(i),0,1.2,0);t.add(e);const n=ct(new Yn(2.02,.5,8,1,!0),ht(16777215,{side:be}),0,.5,0);n.scale.set(1,1,1),t.add(n);const s=ct(new Tn(.55,16,0,Math.PI),Mn(3875858),0,.02,1.62);return s.rotation.x=-.2,t.add(s),t.add(ct(new Ht(.12,8,6),ht(16763196),0,2.45,0)),Xe(t)}function Ux(i=1,t=12884588){const e=ct(new zc(.8*i,0),ht(t));return e.scale.y=.6,e.rotation.y=i*3,Xe(e)}function pa(i=16731501,t=3){const e=new It;e.add(ct(new Me(.06,.06,t,6),ht(16777215),0,t/2,0));const n=ct(new Be(1,.65),ht(i,{side:be}),.5,t-.35,0);return n.name="flag",e.add(n),Xe(e)}function qc(i=1,t=5030746){const e=new It,n=ht(t);for(const[r,a,o]of[[0,.5,.8],[.8,.35,.6],[-.75,.35,.65]])e.add(ct(new Ht(o,12,10),n,r,a,0));const s=[16740264,16769098,16777215];for(let r=0;r<4;r++)e.add(ct(new Ht(.1,6,6),ht(s[r%3]),-.8+r*.5,.55+r%2*.35,.6));return e.scale.setScalar(i),Xe(e)}function Nx(i=16048577,t=1483680){const e=new It,n=ht(i);for(const o of[-1,1])e.add(ct(new on(.6,4,.8),n,1.6*o,2,0)),e.add(ct(new on(.8,.3,1),ht(t),1.6*o,4.1,0));const s=new pr;s.moveTo(-1.9,0),s.lineTo(-1.9,1.6),s.lineTo(1.9,1.6),s.lineTo(1.9,0),s.lineTo(1.3,0),s.quadraticCurveTo(1.2,1,0,1.35),s.quadraticCurveTo(-1.2,1,-1.3,0),s.closePath();const r=ct(new Ea(s,{depth:.8,bevelEnabled:!1}),n,0,4.25,-.4);e.add(r);const a=ct(new Ht(.2,10,8),ht(16763196),0,6,0);return e.add(a),Xe(e)}function Fx(i="FINISH"){const t=new It;for(const a of[-1,1])t.add(ct(new Me(.15,.15,4,8),ht(16777215),3.2*a,2,0));const e=document.createElement("canvas");e.width=512,e.height=96;const n=e.getContext("2d");for(let a=0;a<16;a++)n.fillStyle=a%2?"#222":"#fff",n.fillRect(a*32,0,32,16),n.fillStyle=a%2?"#fff":"#222",n.fillRect(a*32,80,32,16);n.fillStyle="#ff4d6d",n.fillRect(0,16,512,64),n.fillStyle="#fff",n.font='bold 52px "Baloo 2", sans-serif',n.textAlign="center",n.textBaseline="middle",n.fillText(i,256,50);const s=new Rs(e);s.colorSpace=Ee;const r=ct(new Be(6.6,1.2),new cn({map:s,side:be}),0,3.7,0);return t.add(r),Xe(t)}function Ox(i,t="#16a3a0"){const e=new It;e.add(ct(new Me(.08,.08,2.4,6),ht(9132587),0,1.2,0));const n=document.createElement("canvas");n.width=256,n.height=128;const s=n.getContext("2d");s.fillStyle=t,s.beginPath(),s.roundRect(4,4,248,120,24),s.fill(),s.strokeStyle="#fff",s.lineWidth=8,s.stroke(),s.fillStyle="#fff",s.font='bold 56px "Baloo 2", sans-serif',s.textAlign="center",s.textBaseline="middle",s.fillText(i,128,68);const r=new Rs(n);return r.colorSpace=Ee,e.add(ct(new Be(1.6,.8),new cn({map:r,side:be}),0,2.4,.05)),Xe(e)}class kx{constructor(){this.scene=new Uc,this.camera=new $e(45,1,.1,300);const t=this.scene;t.background=Hi([[0,"#56b6f2"],[.5,"#a4dcf7"],[.78,"#ffe3b0"],[1,"#ffc98a"]]),t.fog=new Zn(16309422,30,90),Vi(t,{sky:16774368,ground:14725232,hemi:1.35,sun:1.7,sunPos:[-8,16,12],shadow:12}),t.add(Gi(200,120,"#f4cd84","#f8dcae")),this.ambient=new Cs(t,{count:18,color:16773568,size:.16,box:[14,5,8],center:[0,2.5,-2],speed:.3,opacity:.5}),this.shadow=$n(.8,.16),this.shadow.position.set(0,.012,.6),t.add(this.shadow);const e=new Jt(new Tn(4.2,32),ht(9428074));e.rotation.x=-Math.PI/2,e.position.set(0,.01,0),e.scale.set(1.4,1,1),e.receiveShadow=!0,t.add(e);for(const[a,o,c,l]of[[-18,-25,14,4],[6,-30,16,5],[26,-24,12,3.5],[-35,-35,18,6]]){const h=Bu(c,l);h.position.set(a,0,o),t.add(h)}for(const[a,o,c]of[[-5.5,-4,5.5],[5.8,-5,6.5],[-9,-10,7],[10,-12,6]]){const l=Ps(c);l.position.set(a,0,o),t.add(l)}const n=zu(1483680);n.position.set(-10,0,-16),t.add(n);for(const[a,o,c,l]of[[-14,13,-40,2.2],[12,15,-45,2.6]]){const h=gr(l);h.position.set(a,o,c),t.add(h)}const s=Xc(16774856,1.1);s.position.set(16,17,-45),t.add(s);const r=Wn(16774856,5,.3);r.position.set(16,17,-45.5),t.add(r),this.camel=Ra(),this.camel.position.set(-3.3,0,-1.6),this.camel.rotation.y=.7,this.camel.scale.setScalar(.75),t.add(this.camel),this.horse=Aa(),this.horse.position.set(3.4,0,-1.8),this.horse.rotation.y=-.6,this.horse.scale.setScalar(.72),t.add(this.horse),this.setAvatar(0),this.t=0,this.cheerUntil=0}setAvatar(t){this.kid&&this.scene.remove(this.kid),this.kid=ye(en[t]||en[0]),this.kid.position.set(0,0,.6),this.scene.add(this.kid),this.cheerUntil=this.t+1.2}offset(t){return t>=1.15?[.24,.02]:[0,.26]}onResize(t){const e=t<1.15;this.camera.fov=e?58:42,this.camera.position.set(0,e?3.4:2.8,e?13:11),this.camera.lookAt(0,2.2,0)}update(t){this.t+=t,we(this.kid,this.t<this.cheerUntil?Nt.cheer(this.t):Nt.wave(this.t)),this.kid.rotation.y=Math.sin(this.t*.5)*.15,this.ambient.update(t),cr(this.camel,this.t*1.2,.08),cr(this.horse,this.t*1.3+1,.08),this.camel.userData.head.rotation.x=Math.sin(this.t*.8)*.1,this.horse.userData.head.rotation.x=Math.sin(this.t*.9+1)*.12}}const Bx=[[11,12],[11,13],[13,15],[12,14],[14,16],[11,23],[12,24],[23,24],[23,25],[25,27],[24,26],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32],[15,19],[16,20]];function Yc(i,t=4/3){const e=new Array(33);for(let n=0;n<33;n++){const s=i[n];if(!s){e[n]={x:0,y:0,v:0};continue}const r=s.x>-.03&&s.x<1.03&&s.y>-.03&&s.y<1.03,a=s.visibility??1;e[n]={x:(1-s.x)*t,y:s.y,v:r?a:Math.min(a,.1)}}return e}function zx(i,t){var n;const e=new Array(33);for(let s=0;s<33;s++){const r=i[s];e[s]=r?{x:-r.x,y:r.y,z:r.z||0,v:((n=t==null?void 0:t[s])==null?void 0:n.v)??r.visibility??1}:{x:0,y:0,z:0,v:0}}return e}const me=(i,t=.5)=>!!i&&i.v>=t,jn=(i,t)=>({x:(i.x+t.x)/2,y:(i.y+t.y)/2,z:((i.z||0)+(t.z||0))/2,v:Math.min(i.v,t.v)}),vc=(i,t)=>Math.hypot(i.x-t.x,i.y-t.y),Xs=(i,t)=>Math.hypot(i.x-t.x,i.y-t.y,(i.z||0)-(t.z||0)),Ge=(i,t=0,e=1)=>Math.max(t,Math.min(e,i));function ma(i,t,e){const n=i.x-t.x,s=i.y-t.y,r=(i.z||0)-(t.z||0),a=e.x-t.x,o=e.y-t.y,c=(e.z||0)-(t.z||0),l=Math.hypot(n,s,r)*Math.hypot(a,o,c);return l<1e-9?180:Math.acos(Ge((n*a+s*o+r*c)/l,-1,1))*180/Math.PI}function Ca(i){return vc(jn(i[11],i[12]),jn(i[23],i[24]))}const Hx={sl:{s:-1,sh:11,el:13,wr:15,hip:23,knee:25,ank:27},sr:{s:1,sh:12,el:14,wr:16,hip:24,knee:26,ank:28}};class qs{constructor(t=.05){this.v=null,this.decay=t}update(t,e){return this.v===null||t>this.v?this.v=t:this.v-=(this.v-t)*Math.min(1,this.decay*e),this.v}}class Hu{constructor(){this.reset()}reset(){this.refs={torso:new qs,sl:{thigh:new qs,shin:new qs},sr:{thigh:new qs,shin:new qs}},this.tPrev=null}solve(t,e){if(!t||![11,12,23,24].every(l=>me(t[l],.35)))return null;const n=this.tPrev===null?0:Ge(e-this.tPrev,0,.5);this.tPrev=e;const s=jn(t[11],t[12]),r=jn(t[23],t[24]),a=vc(s,r),o=this.refs.torso.update(a,n),c={arms:{},legs:{}};c.lean=Math.atan2(s.x-r.x,r.y-s.y),c.bend=Math.acos(Ge(a/o,0,1))*.9;for(const l of["sl","sr"]){const h=Hx[l];if(me(t[h.el],.35)){const u={x:t[h.el].x-t[h.sh].x,y:t[h.el].y-t[h.sh].y},d=h.s*Math.atan2(u.x,u.y);let f=d;if(me(t[h.wr],.35)){const g={x:t[h.wr].x-t[h.el].x,y:t[h.wr].y-t[h.el].y};f=h.s*Math.atan2(g.x,g.y)}c.arms[l]={up:d,fore:f}}if(me(t[h.knee],.35)){const u={x:t[h.knee].x-t[h.hip].x,y:t[h.knee].y-t[h.hip].y},d=Math.hypot(u.x,u.y),f=this.refs[l].thigh.update(d,n);let g=Math.acos(Ge(d/f,0,1));u.y<0&&(g=Math.PI/2+Math.min(.5,-u.y/f));const _=Ge(d/f*1.6,0,1),m=h.s*Math.atan2(u.x,Math.abs(u.y)+1e-6)*_;let p=g;if(me(t[h.ank],.35)){const S=vc(t[h.knee],t[h.ank]),y=this.refs[l].shin.update(S,n);p=g+Math.acos(Ge(S/y,0,1))}c.legs[l]={spread:Ge(m,-.2,.9),lift:g,knee:Ge(p,0,2.4)}}}return c}}class Ls{constructor(t){this.ctx=t,this.scene=new Uc,this.camera=new $e(50,1,.1,600),this.particles=new Rx(this.scene),this.reps=0,this.score=0,this.done=!1,this.time=0,this.mode="nocam"}get usesPose(){return this.mode!=="nocam"}get roundSeconds(){return 60}reset(t){this.mode=t,this.reps=0,this.score=0,this.done=!1,this.time=0,this.particles.clear()}onPose(){}onKey(){}onControl(){}onPointer(){}update(t){this.time+=t,this.particles.update(t)}hud(){return{reps:this.reps,repLabel:"reps",prompt:"",meter:null}}starsFor(t,[e,n,s]){return t>=s?3:t>=n?2:t>=e?1:0}pop(t,e,n){var a;const s=n||((a=this.popAnchor)==null?void 0:a.call(this))||new A(0,3,0),r=this.ctx.world.toScreen(s,this.camera);this.ctx.popup(t,e,r.x,r.y)}}class $c{constructor(t=en[0]){this.solver=new Hu,this.setStyle(t),this.current=Nt.stand,this.target=Nt.stand,this.lastPoseT=-1/0}setStyle(t){var n,s;const e=this.kid;this.kid=ye(t),e&&(this.kid.position.copy(e.position),this.kid.rotation.copy(e.rotation),(n=e.parent)==null||n.add(this.kid),(s=e.parent)==null||s.remove(e))}reset(){this.solver.reset(),this.current=Nt.stand,this.target=Nt.stand}fromFrame(t){const e=t!=null&&t.pts?this.solver.solve(t.pts,t.t):null;return e&&(this.target=e,this.lastPoseT=t.t),!!e}set(t){this.target=t}update(t,e=!1){const n=e?1:Math.min(1,t*18);this.current=Dx(this.current,this.target,n),this.current.autoGround=this.target.autoGround,we(this.kid,this.current)}}const Oe={squat:{downDepth:.2,upDepth:.08,kneeDown:125,kneeUp:150,minHold:.1,minGap:.45,baseAdapt:.04},jack:{armsUp:.3,armsDown:.1,legsOpen:.9,legsClosed:.72,minGap:.35},step:{threshold:.09,window:2.5,idle:1},archery:{straight:140,drawStart:.35,full:.75,release:.5,reload:.3,holdMin:.15,autoShoot:1},stretch:{lean:.14},gate:{okAfter:.35,lostAfter:.8}},yh={full:{core:[11,12,23,24],arms:[],legs:[25,26,27,28],th:.5},legs:{core:[11,12,23,24],arms:[],legs:[25,26],th:.5},upper:{core:[11,12,23,24],arms:[13,14,15,16],legs:[],th:.35},reach:{core:[11,12,23,24],arms:[13,14,15,16],legs:[25,26],th:.45}},Kr={nobody:"We can't see you yet — stand in front of the camera! 🙂",center:"Move into the middle so we can see you 🙂",feet:"Step back so we can see your whole body — feet too! 👣",arms:"Step back a little so we can see your arms 🙌",ok:"Great — we can see you! 👍"};function Vu(i,t="full"){if(!i)return{ok:!1,reason:"nobody"};const e=yh[t]||yh.full,n=r=>me(i[r],e.th),s=e.core.filter(n).length;return s===0?{ok:!1,reason:"nobody"}:s<e.core.length?{ok:!1,reason:"center"}:e.legs.every(n)?e.arms.every(n)?{ok:!0,reason:"ok"}:{ok:!1,reason:"arms"}:{ok:!1,reason:"feet"}}class Vx{constructor(){this.reset()}reset(){this.ok=!1,this.reason="nobody",this.since=null,this.pending=null,this.okSince=null}update(t,e){const n=t.ok;if(n||(this.reason=t.reason),n===this.ok)return this.pending=null,n&&(this.reason="ok"),this.ok;this.pending===null&&(this.pending=e);const s=n?Oe.gate.okAfter:Oe.gate.lostAfter;return e-this.pending>=s&&(this.ok=n,this.pending=null,this.okSince=n?e:null,n&&(this.reason="ok")),this.ok}}class Gu{constructor(){this.reset()}reset(){this.count=0,this.state="up",this.base=null,this.depth=0,this.tPrev=null,this.lastRep=-1/0,this.downSince=null,this.maxDepth=0}update(t,e){if(![11,12,23,24,25,26].every(d=>me(t[d],.4)))return null;const n=Ca(t);if(n<.001)return null;const s=jn(t[23],t[24]);let r,a=180;me(t[27],.4)&&me(t[28],.4)?(r=(Math.max(t[27].y,t[28].y)-s.y)/n,a=Math.max(ma(t[23],t[25],t[27]),ma(t[24],t[26],t[28]))):r=(Math.max(t[25].y,t[26].y)-s.y)/n*2.05;const o=this.tPrev===null?0:Ge(e-this.tPrev,0,.5);this.tPrev=e;const c=Oe.squat;this.base===null||r>this.base?this.base=r:this.base-=(this.base-r)*Math.min(1,c.baseAdapt*o),this.depth=Ge(1-r/this.base);const l=this.depth>c.downDepth||a<c.kneeDown,h=this.depth<c.upDepth&&a>c.kneeUp;let u=null;return this.state==="up"?l?(this.downSince??(this.downSince=e),e-this.downSince>=c.minHold&&(this.state="down",this.maxDepth=this.depth,u="down")):this.downSince=null:(this.maxDepth=Math.max(this.maxDepth,this.depth),h&&(this.state="up",this.downSince=null,e-this.lastRep>=c.minGap&&(this.count++,this.lastRep=e,u="rep"))),u}}class Wu{constructor(){this.reset()}reset(){this.count=0,this.state="unknown",this.lastRep=-1/0,this.openness=0}update(t,e){if(![11,12,23,24,15,16].every(_=>me(t[_],.35)))return null;const n=Ca(t);if(n<.001)return null;const s=Oe.jack,r=(t[11].y+t[12].y)/2,a=(r-t[15].y)/n,o=(r-t[16].y)/n,c=Math.min(a,o)>s.armsUp,l=Math.max(a,o)<-s.armsDown,u=me(t[27],.4)&&me(t[28],.4)?Math.abs(t[27].x-t[28].x)/n:null,d=u===null||u>s.legsOpen,f=u===null||u<s.legsClosed;this.openness=Ge((Math.min(a,o)+.9)/1.6)*.6+(u===null?.4:Ge((u-.35)/.8)*.4);let g=null;return c&&d&&this.state!=="open"?(this.state==="closed"&&e-this.lastRep>=s.minGap&&(this.count++,this.lastRep=e,g="rep"),this.state="open"):l&&f&&this.state!=="closed"&&(this.state="closed"),g}}class jc{constructor(){this.reset()}reset(){this.count=0,this.side=null,this.times=[],this.cadence=0,this.signal=0,this.lift=0,this.peak=0,this.lastPeak=0,this.tPrev=null}update(t,e){const n=Oe.step,s=this.tPrev===null?0:Ge(e-this.tPrev,0,.5);this.tPrev=e;let r=null;if([11,12,23,24,25,26].every(l=>me(t[l],.4))){const l=Ca(t);if(l>.001){let h=(t[25].y-t[26].y)/l;me(t[27],.4)&&me(t[28],.4)&&(h+=.5*(t[27].y-t[28].y)/l),this.signal=h,this.peak=Math.max(this.peak,Math.abs(h));const u=h>n.threshold?"A":h<-n.threshold?"B":null;u&&u!==this.side&&(this.side=u,this.count++,this.times.push(e),this.lastPeak=this.peak,this.peak=0,r="step")}}this.times=this.times.filter(l=>e-l<=n.window);let a=0;const o=this.times.length;o>=2&&e-this.times[o-1]<n.idle&&(a=(o-1)/Math.max(.25,this.times[o-1]-this.times[0]));const c=a>this.cadence?6:2.5;return this.cadence+=(a-this.cadence)*Math.min(1,c*s),this.cadence<.05&&a===0&&(this.cadence=0),r}}class Xu{constructor(){this.reset()}reset(){this.count=0,this.state="idle",this.strength=0,this.aim=0,this.bow=null,this.fullSince=null,this.lastShot=null,this.space=null}_evalBow(t,e,n){const[s,r,a]=e==="sl"?[11,13,15]:[12,14,16],[o,c,l]=e==="sl"?[12,14,16]:[11,13,15];if(![s,r,a,l].every(E=>me(t[E],.3)))return null;const h=jn(t[11],t[12]),u=Xs(h,jn(t[23],t[24])),d=Xs(t[s],t[r])+Xs(t[r],t[a]);if(u<.001||d<.001)return null;const f=ma(t[s],t[r],t[a]),g=t[a].x-t[s].x,_=(t[a].z||0)-(t[s].z||0),m=t[s].y-t[a].y,p=Math.hypot(g,_);if(!(f>Oe.archery.straight&&p>.5*d&&m>-.5*u&&m<.9*u))return null;const y=!me(t[c],.3)||ma(t[o],t[c],t[l])<150,x=Xs(t[l],h)<.5*d,D=Math.abs(t[l].y-h.y)<.6*u&&(y||x),T=Xs(t[a],t[l])/d,C=D?Ge((T-.3)/.6):0,L=Ge(Math.atan2(m,p)/(35*Math.PI/180),-1,1);return{side:e,straight:f,strength:C,aim:L,dir:Math.sign(g)||1,space:n}}_candidates(t,e){const n=[];for(const s of["sl","sr"]){const r=this._evalBow(t,s,"2d"),a=e?this._evalBow(e,s,"3d"):null;let o=r&&a?a.strength>r.strength+.05?a:r:r||a;o&&r&&o!==r&&(o={...o,aim:r.aim}),o&&n.push(o)}return n}update(t,e,n=null){const s=Oe.archery;let r=this._candidates(t,n);if(this.bow&&(this.state==="full"||this.state==="draw")){const l=r.find(h=>h.side===this.bow);l&&(r=[l])}r.sort((l,h)=>h.strength-l.strength||h.straight-l.straight);const a=r[0]||null;this.strength=a?a.strength:0,a&&(this.aim=a.aim,this.bow=a.side,this.dir=a.dir,this.space=a.space);let o=null;const c=()=>{this.count++,this.state="reload",this.fullSince=null,this.lastShot={t:e,aim:this.aim,side:this.bow},o="shoot"};switch(this.state){case"idle":case"aim":this.state=a?"aim":"idle",a&&a.strength>=s.drawStart&&(this.state="draw");break;case"draw":!a||a.strength<s.reload?(this.state=a?"aim":"idle",o="cancel"):a.strength>=s.full&&(this.state="full",this.fullSince=e,o="full");break;case"full":{const l=e-this.fullSince;!a||a.strength<s.release?l>=s.holdMin?c():this.state=a?"draw":"idle":l>=s.autoShoot&&c();break}case"reload":(!a||a.strength<s.reload)&&(this.state=a?"aim":"idle");break}return o}}function qu(i,t){if(!i||![11,12,23,24].every(a=>me(i[a],.4)))return!1;const e=Ca(i),n=jn(i[11],i[12]),s=jn(i[23],i[24]),r=me(i[15],.35)&&me(i[16],.35);switch(t){case"reachUp":{if(!r)return!1;const a=me(i[0],.4)?i[0].y:n.y-.45*e;return i[15].y<a&&i[16].y<a}case"armsOut":return r&&Math.abs(i[15].y-i[11].y)<.4*e&&Math.abs(i[16].y-i[12].y)<.4*e&&Math.abs(i[15].x-i[16].x)>2*e;case"leanLeft":case"leanRight":{const a=Math.atan2(n.x-s.x,s.y-n.y);return t==="leanLeft"?a<-Oe.stretch.lean:a>Oe.stretch.lean}case"toeTouch":{if(!r||!me(i[25],.4)||!me(i[26],.4))return!1;const a=(s.y+(i[25].y+i[26].y)/2)/2;return i[15].y>a&&i[16].y>a}default:return!0}}const Yu={SquatDetector:Gu,JumpingJackDetector:Wu,StepDetector:jc,ArcheryDetector:Xu},Gx=[{pose:"reachUp",say:"Reach up to the sky! 🙌",hold:4,max:10},{pose:"march",say:"March on the spot — knees up! 🚶",hold:6,max:12},{pose:"armsOut",say:"Arms out wide like a plane — little circles ✈️",hold:5,max:10},{pose:"leanLeft",say:"Lean to the side (your left in the mirror) 🌙",hold:3,max:9},{pose:"leanRight",say:"Now lean the other way 🌙",hold:3,max:9}],Wx=[{pose:"reachUp",say:"Big slow breath in — reach up high… 🌬️",hold:4,max:10},{pose:"leanLeft",say:"Gentle lean to one side…",hold:3,max:9},{pose:"leanRight",say:"…and the other side",hold:3,max:9},{pose:"toeTouch",say:"Reach down gently toward your knees or toes 🦶",hold:4,max:10},{pose:"free",say:"Shake it out and say “Alhamdulillah!” 😊",hold:4,max:5}];function Xx(i,t){switch(i){case"reachUp":return{...Nt.reachUp,hop:0};case"march":return Nt.march(t*5);case"armsOut":return Nt.armsOut(t);case"leanLeft":return Nt.leanLeft;case"leanRight":return Nt.leanRight;case"toeTouch":return Nt.toeTouch;case"free":return Nt.cheer(t);default:return Nt.stand}}class Sh extends Ls{constructor(t,e){super(t),this.kind=e,this.steps=e==="warmup"?Gx:Wx,this.march=new jc,this.build()}get requirement(){return"reach"}get roundSeconds(){return 0}build(){const t=this.scene,e=this.kind==="warmup";t.background=Hi(e?[[0,"#5cc8ff"],[.6,"#bfeaff"],[1,"#fff4d6"]]:[[0,"#ff9f7a"],[.5,"#ffc38a"],[1,"#ffe9c4"]]),t.fog=new Zn(e?13627391:16766632,25,70),Vi(t,{sky:16777215,ground:8965239,hemi:1.3,sun:1.6}),t.add(Gi(120,80,e?"#8fdc6a":"#b3d47a",e?"#cfefff":"#ffd6a8")),Ta(t,e?[-28,26,-70]:[20,12,-70],e?16774856:16765562,e?4:7),this.ambient=new Cs(t,{count:20,color:e?16776160:16769200,size:.14,box:[14,5,8],center:[0,2.5,-2],speed:.3,opacity:.55}),t.add($n(.75,.16).translateX(-1.6)),t.add($n(.75,.16).translateX(1.6));const n=new Jt(new Tn(3.6,32),ht(10185727));n.rotation.x=-Math.PI/2,n.position.y=.01,n.scale.set(1.3,.6,1),n.receiveShadow=!0,t.add(n);for(const[s,r,a]of[[-9,-8,6],[9,-9,7],[-14,-16,8],[14,-15,6.5]]){const o=Ps(a);o.position.set(s,0,r),t.add(o)}for(const[s,r]of[[-6,-5],[6.5,-6],[0,-10]]){const a=qc(1);a.position.set(s,0,r),t.add(a)}for(const[s,r,a,o]of[[-12,12,-30,1.6],[10,14,-34,2],[0,16,-40,1.4]]){const c=gr(o);c.position.set(s,r,a),t.add(c)}this.coach=ye(Ii),this.coach.position.set(-1.6,0,0),t.add(this.coach),this.avatar=new $c(this.ctx.avatarStyle()),this.avatar.kid.position.set(1.6,0,0),t.add(this.avatar.kid),this.halo=Wn(8060826,5,0),this.halo.position.set(1.6,1.8,-.5),t.add(this.halo)}popAnchor(){return new A(1.6,3.6,0)}onResize(t){const e=mr(this.camera,t,t<1?2.9:3.6,2.6);this.camera.position.set(0,2.2,Math.max(8,e+1.2)),this.camera.lookAt(0,t<1?1.3:1.7,0)}reset(t){super.reset(t),this.avatar.kid.userData.style!==this.ctx.avatarStyle()&&this.avatar.setStyle(this.ctx.avatarStyle()),this.avatar.reset(),this.march.reset(),this.step=0,this.stepTime=0,this.held=0,this.matched=0,this.matching=!1}get cur(){return this.steps[Math.min(this.step,this.steps.length-1)]}onPose(t,e){if(!this.avatar.fromFrame(t)){this.matching=!1;return}const s=this.cur;s.pose==="march"?(this.march.update(t.pts,t.t),this.matching=this.march.cadence>.7):this.matching=qu(t.pts,s.pose),e||(this.matching=!1)}nextStep(t){t&&(this.matched++,this.ctx.sfx.checkpoint(),this.pop("✔ Nice!","green")),this.step++,this.stepTime=0,this.held=0,this.march.reset(),this.reps=this.step,this.step>=this.steps.length?this.done=!0:this.ctx.sfx.gentle()}onControl(t,e){e&&t==="next"&&!this.done&&this.nextStep(!this.usesPose)}onKey(t,e){e&&(t==="Space"||t==="Enter"||t==="ArrowRight")&&this.onControl("next",!0)}get controls(){return[{id:"next",ic:"next",label:"Next",key:"Space"}]}update(t,e){super.update(e?t:0);const n=this.cur,s=Xx(n.pose,this.time);we(this.coach,s),this.usesPose||this.avatar.set(s),this.avatar.update(t),this.ambient.update(t),e&&!this.done&&(this.stepTime+=t,this.usesPose?((this.matching||n.pose==="free")&&(this.held+=t),this.held>=n.hold?this.nextStep(!0):this.stepTime>=n.max&&this.nextStep(!1)):(this.held+=t,this.held>=n.hold+1.5&&this.nextStep(!0))),this.halo.material.opacity=this.usesPose&&this.matching?.45:0}hud(){const t=this.cur,e=this.usesPose?t.hold:t.hold+1.5;return{reps:Math.min(this.step,this.steps.length),repLabel:`/ ${this.steps.length} stretches`,prompt:this.done?"All done!":t.say,detail:this.usesPose?this.matching?"Hold it… great! 💚":"Copy Zaki, your coach 👈":"Follow along with Zaki 👈",meter:Math.min(1,this.held/e),meterLabel:"⏳"}}result(){const t=this.steps.length,e=this.usesPose?Math.max(1,Math.round(this.matched/t*3)):3;return{reps:this.step,stars:e,lines:this.kind==="warmup"?[`🤸 ${this.step} of ${t} stretches done`,"Your muscles are warm and ready to play!"]:[`🧘 ${this.step} of ${t} stretches done`,"Great workout today — drink some water! 💧"]}}}const ki={strong:{kind:"Hadith",text:"The strong believer is better and more beloved to Allah than the weak believer, while there is good in both.",source:"Sahih Muslim 2664",meaning:"Allah loves it when we are strong — in our hearts and in our bodies! Everyone has good in them, and we can all grow stronger, one step at a time."},body:{kind:"Hadith",text:"Your body has a right over you.",source:"Sahih al-Bukhari 5199",meaning:"Our bodies are a gift from Allah. Taking care of them — moving, stretching, eating well and resting — is part of being a good Muslim."},race:{kind:"Hadith",text:'Aisha (may Allah be pleased with her) raced the Prophet ﷺ on foot and won. Some years later they raced again and he won, and he said: "This one makes up for that one!"',source:"Sunan Abi Dawud 2578",meaning:"Racing and playing together is fun and part of the Sunnah! Sometimes you win, sometimes your friend wins — what matters is having fun and staying kind."},archery:{kind:"Hadith",text:'The Prophet ﷺ passed by some people practising archery and said: "Shoot, children of Ismail, for your forefather was an archer."',source:"Sahih al-Bukhari 2899",meaning:"The Prophet ﷺ cheered people on when they practised archery. Aiming carefully teaches us patience, focus and a steady body."},horse:{kind:"Hadith",text:"Goodness is tied to the forelocks of horses until the Day of Resurrection.",source:"Sahih al-Bukhari 2849 · Sahih Muslim 1871",meaning:"Horses are a blessing from Allah. Riding and caring for animals kindly is something good and special."},camel:{kind:"Hadith",text:'A man asked: "Should I tie my camel and trust in Allah, or leave it untied and trust in Allah?" The Prophet ﷺ said: "Tie it, and trust in Allah."',source:"Jami at-Tirmidhi 2517 (graded hasan)",meaning:"We do our best AND we trust Allah. Just like we try our hardest in the game, then leave the rest to Allah!"},stars:{kind:"Quran",text:"And it is He who made the stars for you, so that you may be guided by them through the darkness of land and sea.",source:"Quran 6:97 (Surah Al-An'am)",meaning:"Allah made the beautiful stars in the sky, and travellers long ago used them to find their way. Let's reach for the stars!"},regular:{kind:"Hadith",text:"The most beloved deeds to Allah are those done regularly, even if they are small.",source:"Sahih al-Bukhari 6464 · Sahih Muslim 783",meaning:"A little exercise every day is better than a lot once in a while. Keep your streak going!"},ease:{kind:"Quran",text:"Allah does not burden any soul with more than it can bear.",source:"Quran 2:286 (Surah Al-Baqarah)",meaning:"Allah is kind and never asks too much of us. It's good to rest after working hard — listen to your body."}},wh=["MashaAllah!","Great job!","Super strong!","Keep going!","Awesome!","Well done!","You got it!","Amazing!"],_r=()=>wh[Math.floor(Math.random()*wh.length)],Eh=1.2,qx=9;class $u extends Ls{constructor(t){super(t),this.det=new Xu,this.arrows=[],this.build()}get requirement(){return"upper"}build(){const t=this.scene;t.background=Hi([[0,"#4fb8ff"],[.6,"#aee3ff"],[1,"#e8f8ff"]]),t.fog=new Zn(13496063,40,110),Vi(t,{sky:16777215,ground:8965239,sunPos:[-10,20,8],shadow:26}),t.add(Gi(200,200,"#8ddb62","#c4e9ee")),Ta(t,[38,34,-90],16774856,5),this.ambient=new Cs(t,{count:24,color:16776160,size:.14,box:[18,6,14],center:[0,3,-8],speed:.35,opacity:.55});const e=$n(.8,.16);t.add(e);const n=new Jt(new Be(4,30),ht(15914127));n.rotation.x=-Math.PI/2,n.position.set(0,.01,-12),n.receiveShadow=!0,t.add(n);const s=ht(11565637);for(let c=-12;c<=12;c++){const l=new Jt(new on(.2,1.3,.2),s);l.position.set(c*2,.65,-26),t.add(l)}for(const c of[.5,1.05]){const l=new Jt(new on(50,.14,.1),s);l.position.set(0,c,-26),t.add(l)}const r=[7129185,6076506,7917674];for(let c=0;c<8;c++){const l=new Jt(new Ht(1,20,10),ht(r[c%3])),h=10+c%3*4;l.scale.set(h*1.6,h*.5,h),l.position.set(-55+c*16,-1,-55-c%2*8),t.add(l)}for(const[c,l,h]of[[-10,-24,7],[11,-27,6.5],[-17,-32,8],[18,-34,7],[-7,-3,6],[8,-5,6.5]]){const u=Ps(h);u.position.set(c,0,l),t.add(u)}for(const[c,l]of[[-4,-2],[5,-1],[-9,-14],[9,-15]]){const h=qc(.9);h.position.set(c,0,l),t.add(h)}for(const[c,l,h,u]of[[-20,16,-60,2.2],[15,19,-70,2.6],[40,14,-60,2]]){const d=gr(u);d.position.set(c,l,h),t.add(d)}this.targets=[];for(const c of[-5.5,5.5]){const l=Fu();l.position.set(c,2.3,-21),l.scale.setScalar(1.3),t.add(l),this.targets.push({obj:l,target:!0,pos:()=>l.position.clone().add(new A(0,0,.3))})}this.balloons=[];for(let c=0;c<7;c++){const l=Nu(Jr[c%Jr.length]);t.add(l);const h={obj:l,pos:()=>l.position.clone()};this.balloons.push(h),this.respawn(h,!0)}this.kid=ye(this.ctx.avatarStyle()),this.kid.rotation.y=Math.PI/2,t.add(this.kid),this.bow=Uu(),this.kid.userData.rig.arms.sr.hand.add(this.bow),this.bow.quaternion.setFromRotationMatrix(new le().makeBasis(new A(0,-1,0),new A(1,0,0),new A(0,0,1))),this.bow.position.set(0,Gc,0),this.nocked=xc(),t.add(this.nocked),this.reticle=new It;const a=new ba(.85,1,32),o=new cn({color:16777215,transparent:!0,opacity:.9,depthTest:!1});this.reticle.add(new Jt(a,o));for(let c=0;c<4;c++){const l=new Jt(new Be(.1,.4),o),h=c*Math.PI/2;l.position.set(Math.cos(h)*1.1,Math.sin(h)*1.1,0),l.rotation.z=h+Math.PI/2,this.reticle.add(l)}this.reticle.renderOrder=10,t.add(this.reticle),this.aimGlow=Wn(16773754,3,.5),t.add(this.aimGlow)}respawn(t,e=!1){const n=!e&&Math.random()<.15;t.golden=n,t.obj.children[0].material.color.setHex(n?16761370:Jr[Math.floor(Math.random()*Jr.length)]),t.obj.scale.setScalar(n?1.25:1),t.obj.position.set((Math.random()-.5)*16,e?Math.random()*9:-1.5,-13-Math.random()*9),t.speed=.55+Math.random()*.5,t.phase=Math.random()*6,t.popped=!1,t.obj.visible=!0}popAnchor(){return new A(0,3.8,0)}onResize(t){const e=t<1,n=this.flip?-1:1;this.camera.fov=e?64:50,this.camera.position.set(n*(e?3.6:5.5),e?3.5:3.3,e?7.2:5.2),this.camera.lookAt(n*(e?-1.4:-2.5),e?3.1:3,-14)}setFlip(t){t!==!!this.flip&&(this.flip=t,this.kid.scale.x=t?-1:1,this.kid.rotation.y=t?-Math.PI/2:Math.PI/2,this.onResize(this.ctx.world.aspect),this.camera.updateProjectionMatrix())}reset(t){if(super.reset(t),this.kid.userData.style!==this.ctx.avatarStyle()){const e=ye(this.ctx.avatarStyle());e.rotation.y=Math.PI/2,this.scene.remove(this.kid),this.kid=e,this.scene.add(e),this.kid.userData.rig.arms.sr.hand.add(this.bow)}this.flip=!0,this.setFlip(!1),this.bowSide=null,this.bowSideSince=0,this.det.reset();for(const e of this.arrows)this.scene.remove(e.obj);this.arrows=[],this.balloons.forEach(e=>this.respawn(e,!0)),this.draw=0,this.aim=0,this.aimY=4,this.holding=!1,this.keys={},this.popped=0,this.bulls=0,this.goldenPops=0,this.pointerAim=null,this.state="aim"}onPose(t,e){if(!t.pts)return;const n=this.det.update(t.pts,t.t,t.world),s=this.det.bow;s!==this.bowSide&&(this.bowSide=s,this.bowSideSince=t.t),s&&(this.det.state==="aim"||this.det.state==="idle")&&t.t-this.bowSideSince>.4&&this.setFlip(s==="sr"),this.draw=this.det.strength,this.aim=this.det.aim,this.state=this.det.state,e&&(n==="full"&&this.ctx.sfx.draw(),n==="shoot"&&this.shoot(),n==="cancel"&&this.pop("Pull all the way back! 💪","blue"))}onKey(t,e){this.keys[t]=e,t==="Space"&&this.setHolding(e)}onControl(t,e){t==="draw"&&this.setHolding(e)}onPointer(t,e,n){this.usesPose||(this.pointerAim={x:e,y:n},t==="down"&&this.setHolding(!0),t==="up"&&this.setHolding(!1))}setHolding(t){this.usesPose||t===this.holding||(this.holding=t,t||(this.draw>=Oe.archery.full?this.shoot():this.draw>.15&&this.pop("Hold longer to pull all the way! 💪","blue"),this.draw=0))}get controls(){return[{id:"draw",ic:"bow",label:"Hold to draw",key:"Space",hold:!0,color:"#9b6bff"}]}candidates(){const t=this.targets.slice();for(const e of this.balloons)!e.popped&&e.obj.position.y>.6&&e.obj.position.y<10.5&&t.push(e);return t}pickTarget(){const t=this.candidates();if(this.pointerAim&&!this.usesPose){let s=null,r=1/0;for(const a of t){const o=this.ctx.world.toScreen(a.pos(),this.camera),c=Math.hypot(o.x-this.pointerAim.x,o.y-this.pointerAim.y);c<r&&(r=c,s=a)}return s}let e=null,n=1/0;for(const s of t){const r=s.pos(),a=Math.abs(r.y-this.aimY)+Math.abs(r.x)*.12+(s.target?.8:0);a<n&&(n=a,e=s)}return e}shoot(){const t=this.current||(this.current=this.pickTarget());if(!t)return;this.reps++,this.ctx.sfx.shoot();const e=this.nocked.getWorldPosition(new A),n=xc();n.position.copy(e),this.scene.add(n);const s=t.pos(),r=.35+e.distanceTo(s)/45;this.arrows.push({obj:n,from:e,target:t,t:0,flight:r,to:s}),this.draw=0}hitTarget(t){const e=t.target;if(e.target)this.bulls++,this.score+=1,this.ctx.sfx.thunk(),t.stuck=3,this.particles.burst(t.to,{count:10,colors:[16777215,16763196],speed:3,size:.1}),this.pop("🎯 Bullseye! +1","green",t.to.clone().add(new A(0,1.6,0)));else if(e.popped)this.ctx.sfx.miss(),t.stuck=0;else{e.popped=!0,e.obj.visible=!1;const n=e.golden?3:2;this.score+=n,this.popped++,e.golden&&this.goldenPops++,this.ctx.sfx.pop(),this.particles.burst(e.obj.position,{count:22,colors:[e.obj.children[0].material.color.getHex(),16777215,16767291],confetti:!0,speed:6,size:.22,up:2,gravity:-6,life:1.2}),this.pop(e.golden?"🌟 Golden balloon! +3":this.popped%4===0?`POP! ${_r()}`:"POP! +2",e.golden?"gold":"boom",e.obj.position.clone()),e.respawnIn=1.2,t.stuck=0}}update(t,e){if(super.update(e?t:0),this.ambient.update(t),!this.usesPose&&((this.keys.ArrowUp||this.keys.KeyW)&&(this.aim=Math.min(1,this.aim+t*1.2),this.pointerAim=null),(this.keys.ArrowDown||this.keys.KeyS)&&(this.aim=Math.max(-1,this.aim-t*1.2),this.pointerAim=null),this.holding&&e)){const l=this.draw;this.draw=Math.min(1,this.draw+t/.6),l<Oe.archery.full&&this.draw>=Oe.archery.full&&this.ctx.sfx.draw()}this.aimY=Eh+(this.aim+1)/2*(qx-Eh);for(const l of this.balloons){if(l.popped){l.respawnIn-=t,l.respawnIn<=0&&this.respawn(l);continue}l.obj.position.y+=l.speed*t,l.obj.position.x+=Math.sin(this.time*.8+l.phase)*.3*t,l.obj.rotation.z=Math.sin(this.time*1.3+l.phase)*.1,l.obj.position.y>12&&this.respawn(l)}if(this.current=this.pickTarget(),this.current){const l=this.current.pos();this.reticle.position.copy(l).add(new A(0,0,.8)),this.reticle.lookAt(this.camera.position);const h=(this.current.target?1.4:this.current.golden?1.1:.9)*(1+.1*Math.sin(this.time*6));this.reticle.scale.setScalar(h),this.reticle.visible=!0,this.aimGlow.position.copy(l),this.aimGlow.material.opacity=.25+this.draw*.5,this.reticle.children.forEach(u=>u.material.color.setHex(this.draw>=Oe.archery.full?8060826:16777215))}else this.reticle.visible=!1;const n=this.draw,s=this.current?Math.atan2(this.current.pos().y-2.9,16):.1,r=(this.current?Math.atan2(this.current.pos().x,-this.current.pos().z):0)*(this.flip?-1:1);we(this.kid,{arms:{sr:{up:Math.PI/2+s,fore:Math.PI/2+s,yaw:-r*.8},sl:{up:Math.PI/2+s*.8,fore:Math.PI/2+s*.8-n*2.75,yaw:Math.PI*.82-n*(Math.PI*.82+.3)}},legs:{sl:{spread:.2},sr:{spread:.2}},yawHead:1.25,twist:.1-r*.5}),this.kid.updateMatrixWorld(!0),Wc(this.bow,n);const a=_c(this.kid,"sr"),c=(this.current?this.current.pos():new A(0,3,-20)).clone().sub(a).normalize();this.nocked.position.copy(a).addScaledVector(c,.35-n*.55),this.nocked.quaternion.setFromUnitVectors(new A(1,0,0),c),this.nocked.visible=n>.05||this.usesPose&&this.state==="aim";for(let l=this.arrows.length-1;l>=0;l--){const h=this.arrows[l];if(h.stuck!==void 0){h.stuck-=t,h.stuck<=0&&(this.scene.remove(h.obj),this.arrows.splice(l,1));continue}h.t+=t/h.flight,!h.target.target&&!h.target.popped&&h.to.copy(h.target.pos());const u=Math.min(1,h.t),d=h.from.clone().lerp(h.to,u);d.y+=Math.sin(u*Math.PI)*.8;const f=h.from.clone().lerp(h.to,Math.min(1,u+.02));f.y+=Math.sin(Math.min(1,u+.02)*Math.PI)*.8,h.obj.position.copy(d),h.obj.quaternion.setFromUnitVectors(new A(1,0,0),f.sub(d).normalize()),u>=1&&this.hitTarget(h)}}hud(){const t=this.usesPose?this.det.state:this.holding?"draw":"aim",e=this.usesPose?{idle:"Stretch one arm out straight to hold the bow 🏹",aim:"Pull your other hand back to your face ✋",draw:"Keep pulling… 💪",full:"Let go to shoot! 🎯",reload:"Great shot! Bring your hand forward again"}[t]:this.holding?this.draw>=Oe.archery.full?"Let go to shoot! 🎯":"Pulling… 💪":"Hold to draw, let go to shoot! Aim: ↑ ↓ or point 🎈";return{reps:this.reps,repLabel:"arrows",prompt:e,detail:`🎈 ${this.popped} popped · 🎯 ${this.bulls} bullseyes`,meter:this.draw,meterLabel:"🏹",meterGood:this.draw>=Oe.archery.full}}result(){return{reps:this.reps,stars:this.starsFor(this.reps,[4,9,14]),lines:[`🏹 ${this.reps} arrows shot`,`🎈 ${this.popped} balloons popped${this.goldenPops?` (🌟 ${this.goldenPops} golden)`:""}`,`🎯 ${this.bulls} bullseyes · ${this.score} points`]}}}Xi($u,"id","archery");class ju{constructor(){this.det=new jc,this.reset()}reset(){this.det.reset(),this.steps=0,this.taps=[],this.lastFoot=null,this.cadence=0,this.clock=0,this.onStep=null}pose(t,e){var s;if(!t.pts)return;this.det.update(t.pts,t.t)==="step"&&e&&(this.steps++,(s=this.onStep)==null||s.call(this,this.steps%2===0))}tap(t){var e;return t===this.lastFoot?!1:(this.lastFoot=t,this.steps++,this.taps.push(this.clock),(e=this.onStep)==null||e.call(this,t==="R"),!0)}key(t,e){e&&((t==="ArrowLeft"||t==="KeyA")&&this.tap("L"),(t==="ArrowRight"||t==="KeyD")&&this.tap("R"))}update(t,e){if(this.clock+=t,e){this.cadence=this.det.cadence;return}this.taps=this.taps.filter(r=>this.clock-r<2);const n=this.taps.length;let s=0;n>=2&&this.clock-this.taps[n-1]<.8&&(s=(n-1)/Math.max(.3,this.taps[n-1]-this.taps[0])),this.cadence+=(s-this.cadence)*Math.min(1,(s>this.cadence?6:2.5)*t)}}const Zu=[{id:"L",ic:"foot",label:"Left",key:"←"},{id:"R",ic:"foot",label:"Right",key:"→"}],bh=14,Yx=3.6;class Ju extends Ls{constructor(t){super(t),this.run=new ju,this.props=[],this.build()}get requirement(){return"legs"}build(){const t=this.scene;t.background=Hi([[0,"#5ab8f0"],[.55,"#9fd8f5"],[.8,"#ffe0a8"],[1,"#ffd08a"]]),t.fog=new Zn(16112814,45,120),this.sun=Vi(t,{sky:16774368,ground:14725232,hemi:1.3,sun:1.8,sunPos:[-10,20,14],shadow:18}),this.ground=Gi(400,200,"#f4cd84","#f6dcae"),t.add(this.ground),this.path=new Jt(new Be(400,3),ht(15251559)),this.path.rotation.x=-Math.PI/2,this.path.position.y=.01,this.path.receiveShadow=!0,t.add(this.path),this.sky=new It,t.add(this.sky),this.sky.add(Ta(t,[30,30,-90],16773800,5)),this.shadow=$n(1.5,.14),t.add(this.shadow);for(const[n,s,r,a]of[[-30,22,-80,3],[10,26,-90,3.5],[50,20,-80,2.6]]){const o=gr(a);o.position.set(n,s,r),this.sky.add(o)}const e=(n,s,r,a)=>{n.position.set(s,0,r),t.add(n),this.props.push({obj:n,spacing:a})};for(let n=0;n<8;n++)e(Bu(10+n%3*4,2.5+n%2*1.5,n%2?15777904:15250784),n*22-40,-30-n%3*8,176);for(let n=0;n<10;n++)e(Ps(5+n%3),n*17-30+n%2*5,-9-n%3*4,170);for(let n=0;n<4;n++)e(zu([15087942,1483680,10185727,16747069][n]),n*45-20,-17,180);for(let n=0;n<10;n++)e(Ux(.5+n%3*.3),n*16-25,4+n%3*1.2,160);this.signs=[],this.mountRoot=new It,t.add(this.mountRoot),this.rider=ye(this.ctx.avatarStyle()),this.setMount(this.ctx.mount())}setMount(t){var e;((e=this.mount)==null?void 0:e.userData.kind)!==t&&(this.mount&&this.mountRoot.remove(this.mount),this.mount=t==="horse"?Aa():Ra(),this.mount.rotation.y=Math.PI/2,this.mountRoot.add(this.mount),this.mount.add(this.rider),this.seatRider())}seatRider(){this.rider.scale.setScalar(.72),this.rider.position.set(0,this.mount.userData.saddleY-tn.hipY*.72+.05,this.mount.userData.saddleZ)}popAnchor(){return this.mountRoot.position.clone().add(new A(.5,5.2,0))}onResize(t){this.dist=Math.max(11,mr(this.camera,t,t<1?4.2:6.5,4.2)+2),this.lookAhead=t<1?.8:3.5}reset(t){super.reset(t),this.setMount(this.ctx.mount()),this.rider.userData.style!==this.ctx.avatarStyle()&&(this.mount.remove(this.rider),this.rider=ye(this.ctx.avatarStyle()),this.mount.add(this.rider),this.seatRider()),this.run.reset(),this.run.onStep=e=>{this.speed>1?this.ctx.sfx.hoof(e):this.ctx.sfx.step(e)},this.speed=0,this.distance=0,this.phase=0,this.topSpeed=0,this.nextCheckpoint=100,this.mountRoot.position.set(0,0,0);for(const e of this.signs)this.scene.remove(e);this.signs=[],this.placeSign(100),this.placeSign(200),this.dustT=0}placeSign(t){const e=new It,n=Ox(`${t} m`,t%500===0?"#ff6fa8":"#16a3a0");n.position.set(0,0,-2.2),e.add(n);for(const s of[-2.2,2.2]){const r=pa([16731501,16763196][Math.abs(s)>0?t/100%2:0],3.2);r.position.set(.8,0,s),e.add(r)}e.position.x=t+1.5,e.userData.m=t,this.scene.add(e),this.signs.push(e)}onPose(t,e){this.run.pose(t,e)}onKey(t,e){this.run.key(t,e)}onControl(t,e){e&&this.run.tap(t)}get controls(){return Zu}update(t,e){super.update(e?t:0),this.run.update(e?t:0,this.usesPose);const n=e?Math.min(bh,this.run.cadence*Yx):0;this.speed+=(n-this.speed)*Math.min(1,(n>this.speed?2.5:1.5)*t),this.speed<.05&&(this.speed=0),this.topSpeed=Math.max(this.topSpeed,this.speed),this.reps=this.run.steps,this.distance+=this.speed*t,this.score=Math.floor(this.distance);const s=this.distance;this.mountRoot.position.x=s,this.shadow.position.x=s;const r=Math.min(1,this.speed/6);this.phase+=t*(2+this.speed*.9),cr(this.mount,this.phase,r),this.mount.position.y=Math.abs(Math.sin(this.phase))*.25*r,we(this.rider,{...Nt.ride(Math.sin(this.phase*2)*r),arms:this.speed>9?{sl:{up:2.6},sr:{up:.3,fwd:.7,foreFwd:.6}}:Nt.ride().arms});const a=this.camera;a.position.set(s+this.lookAhead,4.2,this.dist),a.lookAt(s+this.lookAhead+1,2.6,0),this.sun.position.set(s-10,20,14),this.sun.target.position.set(s,0,0),this.sky.position.x=s*.9,this.ground.position.x=s,this.path.position.x=s;for(const o of this.props)o.obj.position.x<s-45&&(o.obj.position.x+=o.spacing);if(this.distance>=this.nextCheckpoint){const o=this.nextCheckpoint;this.nextCheckpoint+=100,this.ctx.sfx.checkpoint(),this.pop(`🚩 ${o} metres! ${_r()}`,"big"),this.particles.burst(new A(o+1.5,3,0),{count:20,confetti:!0,speed:5,size:.2}),this.placeSign(o+200)}for(let o=this.signs.length-1;o>=0;o--)this.signs[o].position.x<s-40&&(this.scene.remove(this.signs[o]),this.signs.splice(o,1));this.dustT-=t,this.speed>3&&this.dustT<=0&&(this.dustT=.08,this.particles.burst(new A(s-1.2,.2,(Math.random()-.5)*.8),{count:2,colors:[15254666,16112814],speed:1.2,size:.25,gravity:.5,life:.7,up:.5}))}hud(){const t=Math.round(this.speed*3.6);return{reps:this.reps,repLabel:"steps",big:`${Math.floor(this.distance)} m`,prompt:this.usesPose?this.speed<2?"Jog on the spot to make your ride go! 🏃":this.speed<9?"Faster! Lift those knees! 🐎":"WOW! Full gallop! 💨":this.speed<2?"Tap ← → (or the foot buttons) one after the other to go!":this.speed<9?"Faster! Keep tapping left, right! 🐎":"WOW! Full gallop! 💨",detail:`💨 ${t} km/h`,meter:this.speed/bh,meterLabel:"💨",meterGood:this.speed>9}}result(){const t=Math.floor(this.distance);return{reps:this.reps,stars:this.starsFor(t,[120,300,480]),lines:[`📏 ${t} metres across the desert`,`👣 ${this.reps} steps`,`💨 Top speed ${Math.round(this.topSpeed*3.6)} km/h`]}}}Xi(Ju,"id","ride");const rn=100,$x=10.5,jx=3.4,Zx=[5.6,6.6],Qr=2;class Ku extends Ls{constructor(t){super(t),this.run=new ju,this.build()}get requirement(){return"legs"}get roundSeconds(){return 0}build(){const t=this.scene;t.background=Hi([[0,"#48b0f0"],[.6,"#a8e0ff"],[1,"#f0fbff"]]),t.fog=new Zn(14217983,60,160),this.sun=Vi(t,{sky:16777215,ground:8965239,sunPos:[-10,20,14],shadow:16});const e=Gi(400,200,"#8fdc6a","#cfeefa");e.position.x=50,t.add(e),Ta(t,[60,36,-110],16774856,5),bx(t,{colors:[10475914,8833402,11920028],z:-75,count:11,spread:320}).position.x=50,this.ambient=new Cs(t,{count:20,color:16776160,size:.14,box:[22,5,10],center:[0,2.5,-3],speed:.35,opacity:.5}),this.pShadow=$n(.75,.16),t.add(this.pShadow),this.rShadow=$n(.75,.16),this.rShadow.position.z=-2.3,t.add(this.rShadow);const n=new Jt(new Be(rn+40,5.4),ht(14248266));n.rotation.x=-Math.PI/2,n.position.set(rn/2,.01,-.9),n.receiveShadow=!0,t.add(n);const s=new cn({color:16777215});for(const a of[-3.6,-.9-.02,1.8]){const o=new Jt(new Be(rn+40,.08),s);o.rotation.x=-Math.PI/2,o.position.set(rn/2,.02,a),t.add(o)}for(const a of[0,rn]){const o=new Jt(new Be(.3,5.4),s);o.rotation.x=-Math.PI/2,o.position.set(a,.02,-.9),t.add(o)}const r=Fx("FINISH");r.rotation.y=Math.PI/2,r.position.set(rn,0,-.9),t.add(r);for(let a=-1;a<=rn/10+2;a++){const o=pa([16731501,16763196,4171488,10185727][(a+4)%4],2.6);if(o.position.set(a*10,0,-5),t.add(o),a%2===0){const c=Ps(5+a%3);c.position.set(a*10+4,0,-10-a%3*2),t.add(c)}if(a%3===0){const c=qc(.9);c.position.set(a*10+2,0,4.5),t.add(c)}}for(const[a,o,c,l]of[[0,20,-70,3],[50,24,-80,3.5],[100,20,-70,2.8],[150,22,-80,3]]){const h=gr(l);h.position.set(a,o,c),t.add(h)}this.kid=ye(this.ctx.avatarStyle()),this.kid.rotation.y=Math.PI/2,t.add(this.kid),this.rival=ye(Ii),this.rival.rotation.y=Math.PI/2,this.rival.position.z=-2.3,t.add(this.rival)}popAnchor(){return this.kid.position.clone().add(new A(0,3.6,0))}onResize(t){this.dist=Math.max(11,mr(this.camera,t,t<1?4:6,3.5)+2),this.ahead=t<1?.8:2.5}reset(t){super.reset(t),this.kid.userData.style!==this.ctx.avatarStyle()&&(this.scene.remove(this.kid),this.kid=ye(this.ctx.avatarStyle()),this.kid.rotation.y=Math.PI/2,this.scene.add(this.kid)),this.run.reset(),this.run.onStep=e=>this.ctx.sfx.step(e),this.race=0,this.wins=0,this.results=[],this.startRace()}startRace(){this.stage="ready",this.stageT=0,this.px=0,this.rx=0,this.speed=0,this.rspeed=0,this.pPhase=0,this.rPhase=0,this.pFinish=null,this.rFinish=null,this.raceT=0,this.camZ=null,this.pop(`Race ${this.race+1} of ${Qr}! Get ready…`,"big",new A(0,4.5,0))}onPose(t,e){this.run.pose(t,e)}onKey(t,e){this.run.key(t,e)}onControl(t,e){e&&this.run.tap(t)}get controls(){return Zu}update(t,e){var u,d;super.update(e?t:0),e||(t=0),this.run.update(t,this.usesPose),this.reps=this.run.steps,this.stageT+=t,this.stage==="ready"&&this.stageT>1.8&&(this.stage="go",this.stageT=0,this.ctx.sfx.go(),this.pop("GO! 🏁","boom",new A(this.px+1,4,0)));const n=this.stage==="go";n&&(this.raceT+=t);const s=n&&this.pFinish===null?Math.min($x,this.run.cadence*jx):this.pFinish!==null?2:0;this.speed+=(s-this.speed)*Math.min(1,(s>this.speed?3:2)*t),this.px+=this.speed*t;const r=n&&this.rFinish===null?Zx[this.race]*(1+.06*Math.sin(this.raceT*1.3)):this.rFinish!==null?2:0;if(this.rspeed+=(r-this.rspeed)*Math.min(1,2*t),this.rx+=this.rspeed*t,n){this.pFinish===null&&this.px>=rn&&(this.pFinish=this.raceT,this.ctx.sfx.finish()),this.rFinish===null&&this.rx>=rn&&(this.rFinish=this.raceT);const f=this.pFinish!==null&&this.rFinish!==null,g=this.rFinish!==null&&this.raceT-this.rFinish>6;(f||g)&&this.finishRace()}this.stage==="result"&&this.stageT>3.2&&(this.race++,this.race>=Qr?(this.done=!0,this.stage="done"):this.startRace()),this.pPhase+=t*(3+this.speed*1.5),this.rPhase+=t*(3+this.rspeed*1.5),this.kid.position.x=this.px,this.rival.position.x=this.rx,this.pShadow.position.x=this.px,this.rShadow.position.x=this.rx,this.ambient.update(t||.016,(this.px+this.rx)/2);const a=Math.min(1,this.speed/5),o=Math.min(1,this.rspeed/5),c=f=>Nt.cheer(this.time);we(this.kid,this.stage==="result"&&((u=this.results.at(-1))!=null&&u.won)?c():this.speed>.3?Nt.run(this.pPhase,a):Nt.idle(this.time)),we(this.rival,this.stage==="result"&&!((d=this.results.at(-1))!=null&&d.won)?c():this.rspeed>.3?Nt.run(this.rPhase,o):Nt.idle(this.time+1.3));const l=Math.abs(this.px-this.rx),h=(this.px+this.rx)/2;this.camZ=(this.camZ??this.dist)+(this.dist+Math.min(26,l*.9)-(this.camZ??this.dist))*Math.min(1,3*(t||.016)),this.camera.position.set(h+this.ahead,5.2+(this.camZ-this.dist)*.25,this.camZ),this.camera.lookAt(h+this.ahead+1,1.6,-1.2),this.sun.position.set(h-10,20,14),this.sun.target.position.set(h,0,0)}finishRace(){const t=this.pFinish!==null&&(this.rFinish===null||this.pFinish<=this.rFinish);t&&this.wins++,this.results.push({won:t,time:this.pFinish,rival:this.rFinish}),this.stage="result",this.stageT=0,t?(this.ctx.sfx.win(),this.pop(`🏆 You won race ${this.race+1}!`,"boom",this.kid.position.clone().add(new A(0,4,0))),this.particles.burst(this.kid.position.clone().add(new A(0,3,0)),{count:30,confetti:!0,speed:6,size:.22})):(this.ctx.sfx.gentle(),this.pop(this.race===0?"Zaki won this one — race again! 💪":"Zaki won — well raced! 🤝","big",this.kid.position.clone().add(new A(0,4,0))))}hud(){var s;const t=Math.max(0,Math.ceil(rn-this.px)),e=this.px-this.rx;let n;return this.stage==="ready"?n=this.usesPose?`Race ${this.race+1}: get ready to run on the spot!`:`Race ${this.race+1}: get ready to tap ← → fast!`:this.stage==="go"?n=this.pFinish!==null?"You finished! 🎉":e>2?"You're in front! Keep going! 🏃":e<-2?"Faster! You can catch Zaki! 💨":"Neck and neck! 🔥":n=(s=this.results.at(-1))!=null&&s.won?"Winner! 🏆":"Great effort!",{reps:this.reps,repLabel:"steps",big:this.stage==="go"?`${t} m to go`:`Race ${Math.min(Qr,this.race+1)}/${Qr}`,prompt:n,detail:`${this.usesPose||this.stage!=="go"?"":"Tap ← → · "}${this.wins} win${this.wins===1?"":"s"} · ${Math.round(this.speed*3.6)} km/h`,meter:Math.min(1,this.px/rn),meterLabel:"🏁",rival:Math.min(1,this.rx/rn)}}result(){const t=Math.min(3,1+this.wins),e=this.results.map((n,s)=>`Race ${s+1}: ${n.won?"🏆 You won":"🤝 Zaki won"}${n.time?` · ${n.time.toFixed(1)}s`:""}`);return e.push(`👣 ${this.reps} steps`),{reps:this.reps,stars:t,lines:e,wins:this.wins}}}Xi(Ku,"id","race");const vo=tn.hipY+.78,Mo=tn.upper+tn.fore+.05,Jx=.62;class Qu extends Ls{constructor(t){super(t),this.stars=[],this.build()}get requirement(){return"reach"}build(){const t=this.scene;t.background=Hi([[0,"#0d1b4c"],[.55,"#28408f"],[.85,"#5b5bb8"],[1,"#8e7cc9"]]),t.fog=new Zn(2637967,30,80),Vi(t,{sky:12110079,ground:2767466,hemi:1.4,sun:1,sunPos:[5,12,10]}),t.add(Gi(120,80,"#5a9a6c","#28408f")),this.fireflies=new Cs(t,{count:26,color:13172602,size:.13,box:[12,4,8],center:[0,2.2,-3],speed:.45,opacity:.8}),t.add($n(.8,.22));const e=new Jt(new ba(1.2,1.5,40),new cn({color:16769674,transparent:!0,opacity:.6}));e.rotation.x=-Math.PI/2,e.position.y=.02,t.add(e);const n=Xc(16774064,1.4);n.position.set(7,9,-20),t.add(n);const s=Wn(16774064,7,.35);s.position.set(7,9,-20.5),t.add(s);for(let r=0;r<70;r++){const a=Wn(16777215,.2+Math.random()*.35,.9);a.position.set((Math.random()-.5)*80,5+Math.random()*25,-30-Math.random()*10),a.userData.tw=Math.random()*10,t.add(a),(this.twinkles||(this.twinkles=[])).push(a)}for(const[r,a,o]of[[-8,-8,6],[9,-10,7],[-13,-15,7]]){const c=Ps(o);c.position.set(r,0,a),t.add(c)}this.avatar=new $c(this.ctx.avatarStyle()),t.add(this.avatar.kid),this.cursor=Wn(8057087,.9,.9),this.cursor.visible=!1,t.add(this.cursor),this.cursorPos=new A(1.2,2.4,0),this.raycaster=new wx,this.plane=new oi(new A(0,0,1),0)}popAnchor(){return new A(0,3.7,0)}onResize(t){const e=mr(this.camera,t,t<1?2.3:2.9,2.2);this.camera.position.set(0,2,Math.max(7,e+.8)),this.camera.lookAt(0,t<1?1.45:1.75,0)}reset(t){super.reset(t),this.avatar.kid.userData.style!==this.ctx.avatarStyle()&&this.avatar.setStyle(this.ctx.avatarStyle()),this.avatar.reset();for(const e of this.stars)this.scene.remove(e.obj);this.stars=[],this.nextSpawn=.3,this.spawned=0,this.combo=0,this.golden=0,this.missed=0,this.cursor.visible=t==="nocam",this.keys={}}spawnAt(t,e,n=!1){const s=Ou(n?16761370:16773754);s.position.set(t,e,.15),s.scale.setScalar(.01),this.scene.add(s);const r={obj:s,age:0,life:n?3.5:4.5,golden:n};return this.stars.push(r),r}spawnRandom(){const t=this.spawned%5,e=Math.random()<.5?-1:1,n=(s,r,a)=>{const o=s*.42+s*Math.sin(r)*a*Mo,c=vo-Math.cos(r)*a*Mo;return[o,Math.max(.55,c)]};if(t===3){const s=1.2+Math.random()*1.5;this.spawnAt(...n(-1,s,.9)),this.spawnAt(...n(1,s,.9))}else if(t===4)this.spawnAt(e*(.75+Math.random()*.3),.75+Math.random()*.2);else{const s=this.spawned>3&&Math.random()<.15;this.spawnAt(...n(e,.5+Math.random()*2.5,.8+Math.random()*.18),s)}this.spawned++}onPose(t){this.avatar.fromFrame(t)}onPointer(t,e,n){if(this.usesPose)return;const s=new et(e/this.ctx.world.w*2-1,-(n/this.ctx.world.h)*2+1);this.raycaster.setFromCamera(s,this.camera);const r=new A;this.raycaster.ray.intersectPlane(this.plane,r)&&(r.x=Bn.clamp(r.x,-2.4,2.4),r.y=Bn.clamp(r.y,.5,3.4),this.cursorPos.copy(r))}onKey(t,e){this.keys[t]=e}reachPose(t){const e=t.x<0?-1:1,n=e<0?"sl":"sr",s=vo-t.y-Mo*.92,r=Bn.clamp(s/.9,0,1),a=Nt.squat(r);a.arms={sl:{up:.15},sr:{up:.15}};const o=r*.75,c=new et(.42*e,vo-o),l=new et(t.x-c.x,t.y-c.y),h=tn.upper,u=tn.fore+.05,d=Bn.clamp(l.length(),.25,h+u-.001),f=Math.atan2(l.x,-l.y),g=Math.acos(Bn.clamp((h*h+d*d-u*u)/(2*h*d),-1,1)),_=Math.acos(Bn.clamp((h*h+u*u-d*d)/(2*h*u),-1,1)),m=f-e*g,p=m+e*(Math.PI-_);return a.arms[n]={up:e*m,fore:e*p},a}update(t,e){super.update(e?t:0);const n=performance.now()/1e3;for(const a of this.twinkles)a.material.opacity=.5+.45*Math.sin(n*2+a.userData.tw);if(this.fireflies.update(t),!this.usesPose){const a=3.2*t;(this.keys.ArrowLeft||this.keys.KeyA)&&(this.cursorPos.x-=a),(this.keys.ArrowRight||this.keys.KeyD)&&(this.cursorPos.x+=a),(this.keys.ArrowUp||this.keys.KeyW)&&(this.cursorPos.y+=a),(this.keys.ArrowDown||this.keys.KeyS)&&(this.cursorPos.y-=a),this.cursorPos.x=Bn.clamp(this.cursorPos.x,-2.4,2.4),this.cursorPos.y=Bn.clamp(this.cursorPos.y,.5,3.4),this.cursor.position.copy(this.cursorPos).setZ(.3),this.avatar.set(this.reachPose(this.cursorPos))}if(this.avatar.update(t),this.avatar.kid.updateMatrixWorld(!0),!e)return;this.nextSpawn-=t;const s=this.stars.filter(a=>!a.caught&&!a.gone).length;this.nextSpawn<=0&&s<2&&(this.spawnRandom(),this.nextSpawn=.9);const r=[_c(this.avatar.kid,"sl"),_c(this.avatar.kid,"sr")];this.usesPose||r.push(this.cursorPos.clone());for(let a=this.stars.length-1;a>=0;a--){const o=this.stars[a];o.age+=t;const c=o.obj;if(c.rotation.y=Math.sin(o.age*3)*.35,c.getObjectByName("star").rotation.z+=t*1.5,o.caught){o.t+=t,c.scale.setScalar(Math.max(.01,1+o.t*3)),c.getObjectByName("glow").material.opacity=Math.max(0,.7-o.t*3),o.t>.25&&(this.scene.remove(c),this.stars.splice(a,1));continue}if(o.gone){o.t+=t,c.scale.setScalar(Math.max(.01,1-o.t*3)),o.t>.33&&(this.scene.remove(c),this.stars.splice(a,1));continue}c.scale.setScalar(Math.min(1,o.age*5)*(1+.08*Math.sin(o.age*8))),o.age>.15&&r.some(l=>l.distanceTo(c.position)<Jx)?this.catchStar(o):o.age>o.life&&(o.gone=!0,o.t=0,this.combo=0,this.missed++,this.ctx.sfx.whoosh())}}catchStar(t){t.caught=!0,t.t=0;const e=t.golden?2:1;this.reps+=1,this.score+=e,this.combo++,t.golden&&this.golden++,this.ctx.sfx.star(this.reps),this.particles.burst(t.obj.position,{count:t.golden?22:14,colors:[16773754,16777215,16761370],speed:4,size:.09,up:1,gravity:-4}),this.pop(t.golden?"🌟 Golden star! +2":this.combo>=3?`${this.combo} in a row! ${_r()}`:"⭐ +1",t.golden?"gold":"green",t.obj.position.clone().add(new A(0,.6,0)))}hud(){return{reps:this.reps,repLabel:"stars",prompt:this.usesPose?"Touch the stars with your hands! Squat for low ones ⭐":"Move the magic hand to the stars! ⭐",detail:this.golden?`🌟 ${this.golden} golden`:"",meter:null}}result(){return{reps:this.reps,stars:this.starsFor(this.reps,[6,14,22]),lines:[`⭐ ${this.reps} stars caught`,this.golden?`🌟 ${this.golden} golden stars`:"Look out for golden stars next time!",`✨ ${this.score} star points`]}}}Xi(Qu,"id","stars");const ta=[{move:"squat",label:"Squats! Bend your knees and sit back ⬇️⬆️"},{move:"jack",label:"Star jumps! Arms up, feet apart ⭐"},{move:"squat",label:"Squats again — nice and low ⬇️⬆️"},{move:"jack",label:"Last one — star jumps! ⭐"}],Fn=[16757051,16740264,5951999,10223482,12950527],Ys=12;class td extends Ls{constructor(t){super(t),this.squat=new Gu,this.jack=new Wu,this.build()}get requirement(){return"full"}build(){const t=this.scene;t.background=Hi([[0,"#2a2466"],[.55,"#7a4fb8"],[.85,"#ff9a6b"],[1,"#ffcf8a"]]),t.fog=new Zn(7031450,30,70),Vi(t,{sky:16769216,ground:7031450,hemi:1.2,sun:1.2,sunPos:[6,14,10]}),t.add(Gi(80,60,"#f0d2a6","#8a6ab0")),this.embers=new Cs(t,{count:22,color:16764810,size:.12,box:[12,6,6],center:[0,4.5,-2],speed:.4,opacity:.7}),t.add($n(.8,.18));const e=new Jt(new Tn(2.4,8),ht(1483680));e.rotation.x=-Math.PI/2,e.rotation.z=Math.PI/8,e.position.y=.01,e.receiveShadow=!0,t.add(e);const n=new Jt(new Tn(1.7,8),ht(16763196));n.rotation.x=-Math.PI/2,n.position.y=.02,n.receiveShadow=!0,t.add(n);for(let a=-2;a<=2;a++){const o=Nx(16048577,a%2?16740264:1483680);o.position.set(a*4.2,0,-7-Math.abs(a)*.6),t.add(o)}const s=new Jt(new Be(60,8),ht(14268815));s.position.set(0,4,-8.5),t.add(s);const r=Xc(16774064,1.2);r.position.set(-9,13,-30),t.add(r);for(let a=0;a<40;a++){const o=Wn(16777215,.3+Math.random()*.3,.8);o.position.set((Math.random()-.5)*70,9+Math.random()*14,-32),t.add(o)}this.lanterns=[];for(let a=0;a<Ys;a++){const o=Math.PI*(.1+.8*a/(Ys-1)),c=ku(),l=-Math.cos(o)*4.3,h=2.6+Math.sin(o)*3.3;c.position.set(l,h,-1.4),c.scale.setScalar(.85),c.userData.baseY=h;const u=new Jt(new Me(.015,.015,9.5-h,4),ht(5913372));u.position.set(l,h+.75+(9.5-h)/2-.05,-1.4),t.add(u),t.add(c),this.lanterns.push(c)}this.avatar=new $c(this.ctx.avatarStyle()),t.add(this.avatar.kid)}popAnchor(){return new A(0,3.6,0)}onResize(t){const e=mr(this.camera,t,t<1?4.4:5.2,3.9);this.camera.position.set(0,3.4,Math.max(10,e+1)),this.camera.lookAt(0,t<1?2.9:3.2,0)}reset(t){super.reset(t),this.avatar.kid.userData.style!==this.ctx.avatarStyle()&&this.avatar.setStyle(this.ctx.avatarStyle()),this.avatar.reset(),this.squat.reset(),this.jack.reset(),this.squats=0,this.jacks=0,this.lit=0,this.round=0,this.anim=null,this.phaseIdx=void 0,this.lastKind=null,this.lanterns.forEach(e=>Zs(e,!1,Fn[0]))}get phase(){return ta[Math.min(ta.length-1,Math.floor(this.time/15))]}addRep(t){this.relightAt&&(this.relightAt=null,this.lanterns.forEach(s=>Zs(s,!1,Fn[this.round%Fn.length]))),this.reps++,this.lastKind=t,t==="squat"?this.squats++:this.jacks++;const e=this.lanterns[this.lit];Zs(e,!0,Fn[this.round%Fn.length]),e.userData.pulse=1,this.ctx.sfx.lantern(this.lit),this.particles.burst(e.position,{count:10,colors:[Fn[this.round%Fn.length],16777215],speed:2.5,size:.08,up:1,gravity:-3}),this.lit++;const n=t==="squat"?"Squat":"Star jump";this.pop(this.reps%5===0?`${this.reps}! ${_r()}`:`${n} +1`,this.reps%5===0?"big":"green"),this.lit>=Ys&&(this.ctx.sfx.finish(),this.pop("All lanterns lit! MashaAllah! 🏮","boom",new A(0,6.5,0)),this.lanterns.forEach(s=>this.particles.burst(s.position,{count:6,colors:[16767291,16777215],confetti:!0,speed:3,size:.2})),this.lit=0,this.round++,this.relightAt=this.time+.9)}onPose(t,e){!this.avatar.fromFrame(t)||!e||(this.squat.update(t.pts,t.t)==="rep"&&this.addRep("squat"),this.jack.update(t.pts,t.t)==="rep"&&this.addRep("jack"))}startAnim(t){this.anim||(this.anim={kind:t,t:0,counted:!1})}onKey(t,e){e&&((t==="KeyS"||t==="ArrowDown")&&this.startAnim("squat"),(t==="KeyJ"||t==="ArrowUp"||t==="Space")&&this.startAnim("jack"))}onControl(t,e){e&&this.startAnim(t)}get controls(){return[{id:"squat",ic:"arrowDown",label:"Squat",key:"S",color:"#16a3a0"},{id:"jack",ic:"star",label:"Star jump",key:"J",color:"#ff6fa8"}]}update(t,e){super.update(e?t:0);const n=Math.min(ta.length-1,Math.floor(this.time/15));if(e&&n!==this.phaseIdx&&(this.phaseIdx!==void 0&&(this.ctx.sfx.checkpoint(),this.pop(ta[n].move==="jack"?"Now: STAR JUMPS!":"Now: SQUATS!","big",new A(0,5.6,0))),this.phaseIdx=n),this.relightAt&&this.time>=this.relightAt&&(this.relightAt=null,this.lanterns.forEach(r=>Zs(r,!1,Fn[this.round%Fn.length]))),!this.usesPose)if(this.anim){const r=this.anim;r.t+=t/.75;const a=Math.sin(Math.min(1,r.t)*Math.PI);this.avatar.set(r.kind==="squat"?Nt.squat(a*.9):Nt.jack(a)),!r.counted&&r.t>=.5&&e&&(r.counted=!0,this.addRep(r.kind)),r.t>=1&&(this.anim=null)}else this.avatar.set(Nt.idle(this.time));this.avatar.update(t),this.embers.update(t);const s=performance.now()/1e3;this.lanterns.forEach((r,a)=>{r.position.y=r.userData.baseY+Math.sin(s*1.5+a)*.05,r.rotation.y+=t*.3,r.userData.pulse>0&&(r.userData.pulse=Math.max(0,r.userData.pulse-t*2.5),r.scale.setScalar(.85*(1+r.userData.pulse*.35)))})}hud(){const t=this.phase;return{reps:this.reps,repLabel:"reps",repWord:this.lastKind==="jack"?"Star jump!":"Squat!",prompt:t.label,detail:`⬇️ ${this.squats} squats · ⭐ ${this.jacks} star jumps`,meter:this.lit/Ys,meterLabel:"🏮",highlight:t.move}}result(){const t=this.starsFor(this.reps,[8,18,28]);return{reps:this.reps,stars:t,lines:[`⬇️ ${this.squats} squats`,`⭐ ${this.jacks} star jumps`,`🏮 ${this.round*Ys+this.lit} lanterns lit`]}}}Xi(td,"id","power");const ed="strongBeliever.v1",yo={muted:!1,avatar:0,mount:"camel",mode:null,strength:0,best:{},bestStars:{},plays:{},streak:0,bestStreak:0,lastDay:-1,todayDay:-1,todayDone:[]};function Kx(){try{const i=JSON.parse(localStorage.getItem(ed)||"null");return i?{...structuredClone(yo),...i}:structuredClone(yo)}catch{return structuredClone(yo)}}function mi(i){try{localStorage.setItem(ed,JSON.stringify(i))}catch{}}function Pa(i=new Date){return Math.floor(Date.UTC(i.getFullYear(),i.getMonth(),i.getDate())/864e5)}function Qx(i,t=Pa()){return i.lastDay>=t-1?i.streak:0}function tv(i,t,e,n,s=Pa()){const r={streakUp:!1,newBest:!1,starsEarned:n};return i.lastDay!==s&&(i.streak=i.lastDay===s-1?i.streak+1:1,i.lastDay=s,r.streakUp=!0),i.bestStreak=Math.max(i.bestStreak,i.streak),i.todayDay!==s&&(i.todayDay=s,i.todayDone=[]),i.todayDone.includes(t)||i.todayDone.push(t),e>(i.best[t]||0)&&(i.best[t]=e,r.newBest=!0),i.bestStars[t]=Math.max(i.bestStars[t]||0,n),i.plays[t]=(i.plays[t]||0)+1,i.strength+=n,r}let bi=null,Ui=null,La=!1;function Zc(){if(!bi){const i=window.AudioContext||window.webkitAudioContext;if(!i)return null;bi=new i,Ui=bi.createGain(),Ui.gain.value=La?0:.5,Ui.connect(bi.destination)}return bi.state==="suspended"&&bi.resume(),bi}function ev(){Zc()}function nd(i){La=i,Ui&&(Ui.gain.value=i?0:.5)}function Le(i,t,{type:e="sine",vol:n=.3,slide:s=0,delay:r=0}={}){const a=Zc();if(!a||La)return;const o=a.currentTime+r,c=a.createOscillator(),l=a.createGain();c.type=e,c.frequency.setValueAtTime(i,o),s&&c.frequency.exponentialRampToValueAtTime(Math.max(40,i+s),o+t),l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(n,o+.01),l.gain.exponentialRampToValueAtTime(1e-4,o+t),c.connect(l).connect(Ui),c.start(o),c.stop(o+t+.05)}function ea(i,{vol:t=.5,cutoff:e=900,type:n="lowpass",delay:s=0}={}){const r=Zc();if(!r||La)return;const a=Math.floor(r.sampleRate*i),o=r.createBuffer(1,a,r.sampleRate),c=o.getChannelData(0);for(let d=0;d<a;d++)c[d]=(Math.random()*2-1)*(1-d/a)**2;const l=r.createBufferSource();l.buffer=o;const h=r.createBiquadFilter();h.type=n,h.frequency.value=e;const u=r.createGain();u.gain.value=t,l.connect(h).connect(u).connect(Ui),l.start(r.currentTime+s)}const li={click:()=>Le(660,.08,{type:"triangle",vol:.2}),rep:(i=0)=>Le(520*2**(i%8/12),.12,{type:"triangle",vol:.25,slide:220}),step:i=>Le(i?300:360,.05,{type:"square",vol:.05}),hoof:i=>{Le(i?220:260,.06,{type:"triangle",vol:.18,slide:-80}),ea(.05,{vol:.12,cutoff:1800})},draw:()=>Le(180,.35,{type:"sawtooth",vol:.04,slide:120}),shoot:()=>{ea(.25,{vol:.35,cutoff:3e3,type:"highpass"}),Le(700,.2,{type:"sine",vol:.12,slide:-400})},pop:()=>{ea(.12,{vol:.7,cutoff:2500}),Le(900,.1,{type:"triangle",vol:.2,slide:600})},thunk:()=>Le(160,.12,{type:"triangle",vol:.3,slide:-60}),miss:()=>Le(420,.25,{type:"sine",vol:.12,slide:-200}),star:(i=0)=>[0,.06,.12].forEach((t,e)=>Le(880*2**((i%5*2+e*4)/12),.18,{type:"sine",vol:.18,delay:t})),lantern:(i=0)=>{Le(660*2**(i%12/12),.35,{type:"sine",vol:.22}),Le(1320*2**(i%12/12),.25,{type:"sine",vol:.08,delay:.03})},checkpoint:()=>[659,784,988].forEach((i,t)=>Le(i,.18,{type:"triangle",vol:.2,delay:t*.08})),beep:()=>Le(660,.15,{type:"square",vol:.1}),go:()=>Le(990,.4,{type:"square",vol:.12}),win:()=>[523,659,784,1047].forEach((i,t)=>Le(i,.25,{type:"triangle",vol:.25,delay:t*.12})),finish:()=>[784,988,1175,1568].forEach((i,t)=>Le(i,.3,{type:"sine",vol:.22,delay:t*.09})),gentle:()=>Le(440,.2,{type:"sine",vol:.12,slide:60}),whoosh:()=>ea(.4,{vol:.2,cutoff:1200})},nv="modulepreload",iv=function(i,t){return new URL(i,t).href},Th={},sv=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){let a=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const o=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=a(e.map(h=>{if(h=iv(h,n),h in Th)return;Th[h]=!0;const u=h.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!n)for(let _=o.length-1;_>=0;_--){const m=o[_];if(m.href===h&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${d}`))return;const g=document.createElement("link");if(g.rel=u?"stylesheet":nv,u||(g.as="script"),g.crossOrigin="",g.href=h,l&&g.setAttribute("nonce",l),document.head.appendChild(g),u)return new Promise((_,m)=>{g.addEventListener("load",_),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};class Ah{constructor(){this.y=null}f(t,e){return this.y=this.y===null?t:e*t+(1-e)*this.y,this.y}}const Rh=(i,t)=>1/(1+1/(2*Math.PI*i*t));class rv{constructor(t=1.5,e=3,n=1){Object.assign(this,{minCutoff:t,beta:e,dCutoff:n}),this.reset()}reset(){this.x=new Ah,this.dx=new Ah,this.tPrev=null,this.xPrev=0}filter(t,e){if(this.tPrev===null||e<=this.tPrev)return this.tPrev=e,this.xPrev=t,this.x.y=t,this.dx.y=0,t;const n=e-this.tPrev,s=this.dx.f((t-this.xPrev)/n,Rh(this.dCutoff,n)),r=this.x.f(t,Rh(this.minCutoff+this.beta*Math.abs(s),n));return this.tPrev=e,this.xPrev=t,r}}class Mc{constructor(t={}){this.opts={minCutoff:1.5,beta:3,...t};const e=this.opts.z?3:2;this.filters=Array.from({length:33},()=>Array.from({length:e},()=>new rv(this.opts.minCutoff,this.opts.beta))),this.vis=new Array(33).fill(0),this.tLast=null}reset(){this.filters.forEach(t=>t.forEach(e=>e.reset())),this.vis.fill(0),this.tLast=null}smooth(t,e){this.tLast!==null&&(e-this.tLast>.6||e<this.tLast)&&this.reset();const n=this.tLast===null;return this.tLast=e,t.map((s,r)=>{const a=s.visibility??1;this.vis[r]=n?a:this.vis[r]*.5+a*.5;const o=this.filters[r];return{x:o[0].filter(s.x,e),y:o[1].filter(s.y,e),z:o[2]?o[2].filter(s.z||0,e):s.z||0,visibility:this.vis[r]}})}}const id=new URL("./",window.location.href).href,Ch=new URL("mediapipe/wasm",id).href,Ph=new URL("mediapipe/pose_landmarker_lite.task",id).href;class ai extends Error{constructor(t,e){super(e||t),this.code=t}}class av{constructor(){this.video=null,this.stream=null,this.landmarker=null,this.delegate=null,this.smoother=new Mc,this.worldSmoother=new Mc({z:!0}),this.worker=null,this.inFlight=null,this.listeners=new Set,this.lastVideoTime=-1,this.lastDetect=0,this.latest=null,this.frames=0,this.detectCount=0,this.detections=0,this.errors=[],this.source="none"}onFrame(t){return this.listeners.add(t),()=>this.listeners.delete(t)}get cameraOn(){return!!this.stream&&this.stream.active}get ready(){return this.source==="inject"||this.cameraOn&&!!(this.landmarker||this.worker)}async startCamera(t){var e;if(!window.isSecureContext)throw new ai("insecure");if(!((e=navigator.mediaDevices)!=null&&e.getUserMedia))throw new ai("unsupported");this.video=t;try{this.stream=await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user",width:{ideal:640},height:{ideal:480}}})}catch(n){const s=(n==null?void 0:n.name)||"";throw s==="NotAllowedError"||s==="SecurityError"||s==="PermissionDeniedError"?new ai("denied",s):s==="NotFoundError"||s==="OverconstrainedError"||s==="DevicesNotFoundError"?new ai("nocamera",s):s==="NotReadableError"||s==="TrackStartError"||s==="AbortError"?new ai("busy",s):new ai("unknown",s||String(n))}t.srcObject=this.stream,t.muted=!0,t.playsInline=!0,await t.play().catch(()=>{}),t.videoWidth||await new Promise(n=>{const s=()=>n();t.addEventListener("loadeddata",s,{once:!0}),setTimeout(s,3e3)}),this.source="camera"}stopCamera(){var t;(t=this.stream)==null||t.getTracks().forEach(e=>e.stop()),this.stream=null,this.inFlight=null,this.video&&(this.video.srcObject=null),this.source==="camera"&&(this.source="none")}async loadModel(){if(!(this.landmarker||this.worker)){if(typeof Worker<"u"&&typeof createImageBitmap=="function")try{await this._startWorker();return}catch(t){this.errors.push(`worker: ${(t==null?void 0:t.message)||t}`),this._stopWorker()}await this._loadMainThread()}}_startWorker(){return new Promise((t,e)=>{const n=new Worker(new URL(""+new URL("pose.worker-CgFtv4fj.js",import.meta.url).href,import.meta.url));this.worker=n;const s=a=>{clearTimeout(r),e(new Error(a))},r=setTimeout(()=>s("timeout"),45e3);n.onerror=a=>s((a==null?void 0:a.message)||"worker error"),n.onmessage=a=>{var c;const o=a.data;o.type==="ready"?(clearTimeout(r),this.delegate=o.delegate,(c=o.errors)!=null&&c.length&&this.errors.push(...o.errors),n.onmessage=l=>this._onWorkerMessage(l.data),n.onerror=l=>{this.errors.push(`worker: ${(l==null?void 0:l.message)||"error"}`)},t()):o.type==="error"&&s(o.msg)},n.postMessage({type:"init",wasm:Ch,model:Ph})})}_stopWorker(){var t;try{(t=this.worker)==null||t.terminate()}catch{}this.worker=null,this.inFlight=null}_onWorkerMessage(t){var n;if(t.type==="log"){this.errors.push(t.msg);return}if(t.type!=="result")return;const e=this.inFlight;if(!(!e||e.id!==t.id)){if(this.inFlight=null,this.delegate=t.delegate,this.detectMs=t.ms,this.detectCount++,t.err){this.errors.push(`detect: ${t.err}`),this.errors.length>20&&this.errors.splice(0,this.errors.length-20);return}this.process(t.lm,e.ts/1e3,e.aspect,t.world),(n=e.done)==null||n.call(e)}}async _loadMainThread(){const{FilesetResolver:t,PoseLandmarker:e}=await sv(async()=>{const{FilesetResolver:a,PoseLandmarker:o}=await import("./vision_bundle-DzlAvxTq.js");return{FilesetResolver:a,PoseLandmarker:o}},[],import.meta.url),n=a=>new Promise((o,c)=>setTimeout(()=>c(new Error("timeout")),a));let s;try{s=await Promise.race([t.forVisionTasks(Ch),n(3e4)])}catch(a){throw new ai("model",`wasm: ${(a==null?void 0:a.message)||a}`)}const r=a=>({baseOptions:{modelAssetPath:Ph,delegate:a},runningMode:"VIDEO",numPoses:1,minPoseDetectionConfidence:.5,minPosePresenceConfidence:.5,minTrackingConfidence:.5});this._create=a=>Promise.race([e.createFromOptions(s,r(a)),n(3e4)]);for(const a of["GPU","CPU"])try{this.landmarker=await this._create(a),this.delegate=a;return}catch(o){this.errors.push(`${a}: ${(o==null?void 0:o.message)||o}`)}throw new ai("model",this.errors.join(" | "))}async warmUp(){const t=this.video;if(!(!t||t.readyState<2)){if(await new Promise(e=>setTimeout(e,30)),this.worker){await Promise.race([new Promise(e=>this._send(performance.now(),e)),new Promise(e=>setTimeout(e,15e3))]);return}if(this.landmarker){try{this.landmarker.detectForVideo(t,performance.now())}catch(e){this.errors.push(`warmup: ${(e==null?void 0:e.message)||e}`)}this.lastDetect=performance.now()}}}_send(t,e){const n=this.video,s=this._jobId=(this._jobId||0)+1,r={id:s,ts:t,aspect:n.videoWidth/n.videoHeight,done:e};this.inFlight=r,this.lastVideoTime=n.currentTime,this.lastDetect=t,createImageBitmap(n).then(a=>{var o;if(this.inFlight!==r||!this.worker){(o=a.close)==null||o.call(a);return}this.worker.postMessage({type:"detect",id:s,ts:t,bitmap:a},[a])},a=>{this.inFlight===r&&(this.inFlight=null),this.errors.push(`bitmap: ${(a==null?void 0:a.message)||a}`),e==null||e()})}async _maybeSwitchToCpu(){if(!(this.delegate!=="GPU"||this.triedCpu||!this._create)){this.triedCpu=!0;try{const t=await this._create("CPU"),e=this.landmarker;this.landmarker=t,this.delegate="CPU",this.lastVideoTime=-1;try{e==null||e.close()}catch{}}catch(t){this.errors.push(`cpu-switch: ${(t==null?void 0:t.message)||t}`)}}}poll(t=performance.now()){var a,o;if(this.source!=="camera"||!this.video||!(this.landmarker||this.worker))return;const e=this.video;if(e.readyState<2||!e.videoWidth||e.currentTime===this.lastVideoTime||t-this.lastDetect<28)return;if(this.worker){if(this.inFlight&&t-this.inFlight.ts<1e3)return;this._send(t);return}this.lastVideoTime=e.currentTime,this.lastDetect=t;let n;const s=performance.now();try{n=this.landmarker.detectForVideo(e,t)}catch(c){this.errors.push(`detect: ${(c==null?void 0:c.message)||c}`);return}const r=performance.now()-s;this.detectMs=this.detectMs===void 0?r:this.detectMs*.8+r*.2,++this.detectCount>8&&this.detectMs>120&&this._maybeSwitchToCpu(),this.process(((a=n==null?void 0:n.landmarks)==null?void 0:a[0])||null,t/1e3,e.videoWidth/e.videoHeight,((o=n==null?void 0:n.worldLandmarks)==null?void 0:o[0])||null)}process(t,e,n=4/3,s=null){this.frames++;let r;if(t&&t.length>=33){this.detections++;const a=this.smoother.smooth(t,e),o=Yc(a,n);r={t:e,aspect:n,raw:a,pts:o,world:s&&s.length>=33?zx(this.worldSmoother.smooth(s,e),o):null}}else r={t:e,aspect:n,raw:null,pts:null,world:null};this.latest=r;for(const a of this.listeners)a(r);return r}inject(t,e=performance.now()/1e3,n=4/3,s=null){return this.source="inject",this.process(t,e,n,s)}status(){return{source:this.source,cameraOn:this.cameraOn,modelLoaded:!!(this.landmarker||this.worker),worker:!!this.worker,delegate:this.delegate,detectMs:this.detectMs&&Math.round(this.detectMs),frames:this.frames,detections:this.detections,errors:[...this.errors],video:this.video?{w:this.video.videoWidth,h:this.video.videoHeight}:null}}}function ov(i,t,{guide:e=!1,ok:n=!1}={}){const s=Math.min(window.devicePixelRatio||1,2),r=Math.round(i.clientWidth*s),a=Math.round(i.clientHeight*s);if(!r||!a)return;(i.width!==r||i.height!==a)&&(i.width=r,i.height=a);const o=i.getContext("2d");o.clearRect(0,0,r,a),e&&(o.save(),o.setLineDash([10*s,8*s]),o.lineWidth=3*s,o.strokeStyle=n?"rgba(90,220,120,0.95)":"rgba(255,255,255,0.8)",o.beginPath(),o.roundRect(r*.28,a*.05,r*.44,a*.9,24*s),o.stroke(),o.restore());const c=t==null?void 0:t.raw;if(!c)return;const l=t.aspect||4/3,h=r/a;let u=r,d=a,f=0,g=0;l>h?(u=a*l,f=(r-u)/2):(d=r/l,g=(a-d)/2);const _=m=>[f+(1-m.x)*u,g+m.y*d];o.lineCap="round",o.lineWidth=Math.max(3,5*s*Math.min(1,r/400));for(const[m,p]of Bx){const S=c[m],y=c[p];if((S.visibility??1)<.4||(y.visibility??1)<.4)continue;const x=m%2===1&&p%2===1;o.strokeStyle=m===11&&p===12||m===23&&p===24||m===11&&p===23||m===12&&p===24?"rgba(255,255,255,0.95)":x?"rgba(255,201,60,0.95)":"rgba(22,200,196,0.95)";const[D,T]=_(S),[C,L]=_(y);o.beginPath(),o.moveTo(D,T),o.lineTo(C,L),o.stroke()}for(const m of[0,11,12,13,14,15,16,23,24,25,26,27,28]){const p=c[m];if((p.visibility??1)<.4)continue;const[S,y]=_(p);o.fillStyle=m===15||m===16?"#ff6fa8":"#fff",o.beginPath(),o.arc(S,y,(m===0?7:m===15||m===16?6:4)*s,0,Math.PI*2),o.fill()}}const Ye={torso:.5,shW:.19,hipW:.1,upper:.28,fore:.26,thigh:.42,shin:.4};function cv(i){let t=i>>>0||1;return()=>(t=t*1664525+1013904223>>>0,t/4294967296-.5)}function Ai(i={}){var P,W;const t=i.sideOn||0,e=Ye.shW*(1-.85*t),n=Ye.hipW*(1-.8*t),s=i.squat||0,r={};for(const[F,O]of[["sl",-1],["sr",1]]){const X={...((P=i.legs)==null?void 0:P[F])||{}},z=(X.lift||0)+s*1.25,J=(X.knee??(X.lift||0))+s*(1.25+.5),H=(X.spread||0)+s*.12,st=z-J,dt=[O*Math.sin(H)*Math.cos(z)*Ye.thigh,-Math.cos(H)*Math.cos(z)*Ye.thigh],xt=[O*Math.sin(H)*Math.cos(st)*Ye.shin,-Math.cos(H)*Math.cos(st)*Ye.shin];r[F]={s:O,thighV:dt,shinV:xt,ext:-(dt[1]+xt[1])}}const a=Math.max(r.sl.ext,r.sr.ext)+(i.hop||0),o={},c=i.lean||0,l=i.bend||0,h=[0,a];for(const F of["sl","sr"]){const O=r[F],X=[h[0]+O.s*n,a],z=[X[0]+O.thighV[0],X[1]+O.thighV[1]],J=[z[0]+O.shinV[0],z[1]+O.shinV[1]];o[F]={hip:X,knee:z,ankle:J,heel:[J[0],J[1]-.04],foot:[J[0]+O.s*.03,J[1]-.06]}}const u=Ye.torso*Math.cos(l),d=[h[0]+Math.sin(c)*u,h[1]+Math.cos(c)*u],f=[Math.cos(c),-Math.sin(c)];for(const F of["sl","sr"]){const O=F==="sl"?-1:1,X=[d[0]+f[0]*e*O,d[1]+f[1]*e*O],z=((W=i.arms)==null?void 0:W[F])||{};let J,H;if(z.wrist)H=[X[0]+z.wrist[0],X[1]+z.wrist[1]],J=z.elbow?[X[0]+z.elbow[0],X[1]+z.elbow[1]]:[(X[0]+H[0])/2,(X[1]+H[1])/2-.03];else{const Ut=z.up||0,jt=z.fore??Ut,Y=Math.cos(z.fwd||0);J=[X[0]+O*Math.sin(Ut)*Ye.upper*Y,X[1]-Math.cos(Ut)*Ye.upper*Y],H=[J[0]+O*Math.sin(jt)*Ye.fore*Y,J[1]-Math.cos(jt)*Ye.fore*Y]}const st=[H[0]-J[0],H[1]-J[1]],dt=Math.hypot(st[0],st[1])||1,xt=(Ut,jt)=>[H[0]+st[0]/dt*Ut-st[1]/dt*jt,H[1]+st[1]/dt*Ut+st[0]/dt*jt];Object.assign(o[F],{sh:X,elbow:J,wrist:H,pinky:xt(.06,-.02*O),index:xt(.07,.01*O),thumb:xt(.04,.03*O)})}const g=[Math.sin(c),Math.cos(c)],_=(F,O)=>[d[0]+g[0]*F+f[0]*O,d[1]+g[1]*F+f[1]*O],m=[];m[0]=_(.22,0),m[1]=_(.25,-.02),m[2]=_(.25,-.03),m[3]=_(.25,-.045),m[4]=_(.25,.02),m[5]=_(.25,.03),m[6]=_(.25,.045),m[7]=_(.23,-.075*(1-.6*t)),m[8]=_(.23,.075*(1-.6*t)),m[9]=_(.18,-.025),m[10]=_(.18,.025);const p={sl:[11,13,15,17,19,21,23,25,27,29,31],sr:[12,14,16,18,20,22,24,26,28,30,32]},S=["sh","elbow","wrist","pinky","index","thumb","hip","knee","ankle","heel","foot"];for(const F of["sl","sr"])p[F].forEach((O,X)=>{m[O]=o[F][S[X]]});const y=i.aspect??4/3,x=(i.height??.72)/1.62,D=i.feetY??.92,T=i.cx??.5,C=cv(i.seed??7),L=i.jitter||0,E=new Set(i.hide||[]),M=F=>E.has("all")||E.has("legs")&&F>=25||E.has("feet")&&F>=27||E.has("arms")&&[13,14,15,16,17,18,19,20,21,22].includes(F);return m.map(([F,O],X)=>{const z=T+F*x/y+L*C(),J=D-O*x+L*C(),H=z<0||z>1||J<0||J>1;return{x:1-z,y:J,z:0,visibility:M(X)?.05:H?.2:.97}})}const Lh=Math.PI/2,He={stand:(i={})=>Ai({arms:{sl:{up:.12},sr:{up:.12}},...i}),squat:(i,t={})=>Ai({squat:i,bend:i*.35,arms:{sl:{up:.3+i*.9,fwd:i*.8},sr:{up:.3+i*.9,fwd:i*.8}},...t}),jack:(i,t={})=>Ai({arms:{sl:{up:.12+i*2.7},sr:{up:.12+i*2.7}},legs:{sl:{spread:i*.36},sr:{spread:i*.36}},hop:Math.sin(i*Math.PI)*.05,...t}),jog:(i,t=.9,e={})=>{const n=Math.max(0,Math.sin(i))*t,s=Math.max(0,-Math.sin(i))*t;return Ai({legs:{sl:{lift:n,knee:n*1.3},sr:{lift:s,knee:s*1.3}},arms:{sl:{up:.2,fore:.2+s*1.2,fwd:s*.8},sr:{up:.2,fore:.2+n*1.2,fwd:n*.8}},...e})},archery:(i,{aim:t=0,side:e="sr",sideOn:n=0,drop:s=!1,...r}={})=>{const a=e==="sr"?1:-1,o=Ye.shW*(1-.85*n),c=t*.4,l=Ye.upper+Ye.fore,h=[a*Math.cos(c)*l,Math.sin(c)*l],u=[h[0]+a*2*o,h[1]],d=[a*o*.9,.1],f=[u[0]+(d[0]-u[0])*i,u[1]+(d[1]-u[1])*i],g=[f[0]*(1-i)*.5-a*.22*i,f[1]*.5-.06*(1-i)+.02*i],_=s?{up:.15}:{wrist:f,elbow:g},m={up:Lh+c,fore:Lh+c};return Ai({sideOn:n,arms:e==="sr"?{sr:m,sl:_}:{sl:m,sr:_},...r})},reach:(i,t,e={})=>Ai({arms:{[i]:{up:t},[i==="sl"?"sr":"sl"]:{up:.12}},...e})};function lv(i,t={}){const e=t.fps??30,n=t.t0??100,s=t.jitter??.003,r=[];let a=t.seed??11;const o=(h,u)=>r.push({lm:h,t:n+u}),c=()=>({jitter:s,seed:a++,aspect:t.aspect}),l=(h,u)=>{const d=r.length?r[r.length-1].t-n+1/e:0;for(let f=0;f<h*e;f++){const g=f/e;o(u(g/h,g),d+g)}};switch(i){case"stand":l(t.seconds??3,()=>He.stand(c()));break;case"squat":{const h=t.depth??.85,u=t.period??1.8;l(.6,()=>He.stand(c()));for(let d=0;d<(t.reps??10);d++)l(u,f=>He.squat(h*Math.sin(Math.PI*f)**1.3,c()));l(.6,()=>He.stand(c()));break}case"jack":{const h=t.period??1.2,u=t.amount??1;l(.6,()=>He.jack(0,c()));for(let d=0;d<(t.reps??8);d++)l(h,f=>He.jack(u*Math.sin(Math.PI*f)**.8,{...c(),hide:t.hide}));l(.6,()=>He.jack(0,c()));break}case"jog":{const h=t.cadence??3;l(t.seconds??6,(u,d)=>He.jog(d*Math.PI*h,t.amp??.9,c()));break}case"archery":{const h=t.shots??5,u=t.draw??1,d=t.hold??.4,f=t.sideOn??0,g=t.side??"sr";l(.5,()=>He.stand(c()));for(let _=0;_<h;_++){const m=t.aim??(_%3-1)*.5,p=()=>({aim:m,side:g,sideOn:f,...c()});l(.5,()=>He.archery(0,p())),l(.6,S=>He.archery(u*S,p())),l(d,()=>He.archery(u,p())),l(.15,S=>He.archery(u*(1-S),p())),l(.4,()=>He.archery(0,p()))}break}default:throw new Error(`unknown sequence ${i}`)}return r}const Dh={play:'<path d="M8 5.5v13l11-6.5z" fill="currentColor" stroke="none"/>',back:'<path d="M14 6l-6 6 6 6"/>',next:'<path d="M10 6l6 6-6 6"/>',home:'<path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z"/>',replay:'<path d="M4 12a8 8 0 1 0 2.5-5.8"/><path d="M4 4v5h5"/>',pause:'<rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none"/><rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none"/>',sound:'<path d="M4 10v4h4l5 4V6L8 10z" fill="currentColor" stroke="none"/><path d="M16 9a4 4 0 0 1 0 6"/><path d="M18.5 6.5a7.5 7.5 0 0 1 0 11"/>',mute:'<path d="M4 10v4h4l5 4V6L8 10z" fill="currentColor" stroke="none"/><path d="M16 9l5 6M21 9l-5 6"/>',camera:'<path d="M4 8h3l2-2.5h6L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/>',tap:'<path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V11"/><path d="M12 10.5a1.5 1.5 0 0 1 3 0V12"/><path d="M15 11.5a1.5 1.5 0 0 1 3 0v4.5a5 5 0 0 1-5 5h-2a5 5 0 0 1-4.3-2.4L4.3 16a1.5 1.5 0 0 1 2.3-1.9L9 16.5"/>',keys:'<rect x="3" y="7" width="18" height="11" rx="2"/><path d="M7 11h.01M11 11h.01M15 11h.01M7 14.5h10"/>',lock:'<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',star:'<path d="M12 3.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.8l6.1-.7z" fill="currentColor" stroke="none"/>',flame:'<path d="M12 3c1 3 4 4.5 4 9a4 4 0 0 1-8 0c0-1.5.6-2.5 1.2-3.3C9.5 10 10.5 11 11 12c.5-2-.5-4 1-9z" fill="currentColor" stroke="none"/>',medal:'<circle cx="12" cy="14.5" r="5.5"/><path d="M8.5 9.5L6 3h4l2 4 2-4h4l-2.5 6.5"/>',warn:'<path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17h.01"/>',foot:'<path d="M9 4.5c2.2 0 3.5 2 3.5 4.5S11.5 14 9.5 14 6 11.5 6 9s1-4.5 3-4.5z" fill="currentColor" stroke="none"/><rect x="7" y="15" width="5" height="4" rx="2" fill="currentColor" stroke="none"/><path d="M14 8.5c1.5 0 2.5 1.5 2.5 3.3S15.5 15 14.2 15 12 13.3 12 11.8s.6-3.3 2-3.3z" fill="currentColor" stroke="none"/><rect x="12.5" y="16" width="4" height="3.5" rx="1.75" fill="currentColor" stroke="none"/>',target:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/>',bow:'<path d="M6 4c6 2 10 6 10 12 0 1.5-.3 3-.8 4"/><path d="M6 4l9.2 16"/><path d="M4 20L18 6"/><path d="M15 6h3v3"/>',lantern:'<path d="M9 5h6M10 3h4M12 3V2"/><path d="M8 7h8l1 9a4 4 0 0 1-4 3h-2a4 4 0 0 1-4-3z"/><path d="M12 7v12"/>',run:'<circle cx="15" cy="4.5" r="2" fill="currentColor" stroke="none"/><path d="M13.5 8.5L10 10l-3 3"/><path d="M13.5 8.5l1.5 4.5 3 2"/><path d="M15 13l-3 3-2 5"/><path d="M12 16l-4-1"/>',stretch:'<circle cx="12" cy="4.5" r="2" fill="currentColor" stroke="none"/><path d="M12 8v7M12 8L7 4M12 8l5-4M12 15l-3 6M12 15l3 6"/>',horse:'<path d="M5 20v-6a5 5 0 0 1 5-5h4l3-4 2 1-1 4v10"/><path d="M9 20v-4M15 20v-4"/>',camel:'<path d="M4 20v-5a4 4 0 0 1 4-4c2-3 5-3 7 0a3 3 0 0 1 3 3v6"/><path d="M15 11V7l2-2 2 2v3"/><path d="M8 20v-4M15 20v-4"/>',timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>',water:'<path d="M12 3c3 4.5 6 7.5 6 11a6 6 0 0 1-12 0c0-3.5 3-6.5 6-11z"/>',eyeOff:'<path d="M3 3l18 18"/><path d="M10.6 5.3A10 10 0 0 1 12 5c5 0 9 4 10 7a11 11 0 0 1-3.2 4.2M6.6 6.6A11 11 0 0 0 2 12c1 3 5 7 10 7a9.5 9.5 0 0 0 4.2-1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',question:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .8-1 1.7"/><path d="M12 17h.01"/>',robot:'<rect x="5" y="8" width="14" height="11" rx="3"/><path d="M12 8V4M9 4h6"/><circle cx="9.5" cy="13" r="1.2" fill="currentColor" stroke="none"/><circle cx="14.5" cy="13" r="1.2" fill="currentColor" stroke="none"/><path d="M9.5 16.5h5"/>',hand:'<path d="M8 12V6a1.5 1.5 0 0 1 3 0v5M11 5.5a1.5 1.5 0 0 1 3 0V11M14 7a1.5 1.5 0 0 1 3 0v4M17 9a1.5 1.5 0 0 1 3 0v5.5a6.5 6.5 0 0 1-13 0v-1l-2.5-3a1.5 1.5 0 0 1 2.3-1.9L8 12"/>',book:'<path d="M4 5a2 2 0 0 1 2-2h5v16H6a2 2 0 0 0-2 2z"/><path d="M20 5a2 2 0 0 0-2-2h-5v16h5a2 2 0 0 1 2 2z"/>',moon:'<path d="M14 3a8 8 0 1 0 7 11.5A7 7 0 0 1 14 3z" fill="currentColor" stroke="none"/>',sparkle:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" fill="currentColor" stroke="none"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" fill="currentColor" stroke="none"/>',trophy:'<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5v1a3 3 0 0 0 3 3M16 6h3v1a3 3 0 0 1-3 3"/><path d="M12 13v3M9 20h6M10 16h4v4h-4z"/>',ruler:'<path d="M3 17L17 3l4 4L7 21z"/><path d="M8 12l1.5 1.5M11 9l1.5 1.5M14 6l1.5 1.5"/>',wind:'<path d="M3 9h10a2.5 2.5 0 1 0-2.5-2.5"/><path d="M3 14h14a3 3 0 1 1-3 3"/><path d="M3 19h7"/>',flag:'<path d="M5 21V4"/><path d="M5 4h12l-3 4 3 4H5"/>',arrowUp:'<path d="M12 19V5M6 11l6-6 6 6"/>',arrowDown:'<path d="M12 5v14M6 13l6 6 6-6"/>',arrowLeft:'<path d="M19 12H5M11 6l-6 6 6 6"/>',arrowRight:'<path d="M5 12h14M13 6l6 6-6 6"/>',grownup:'<circle cx="9" cy="6" r="2.5"/><path d="M4.5 20v-6a4.5 4.5 0 0 1 9 0v6"/><circle cx="17" cy="9" r="2"/><path d="M14 20v-4a3 3 0 0 1 6 0v4"/>',balloon:'<path d="M12 3a5 5 0 0 1 5 5.5c0 3.5-2.5 6.5-5 6.5s-5-3-5-6.5A5 5 0 0 1 12 3z" fill="currentColor" stroke="none"/><path d="M12 15l-1 2h2z" fill="currentColor" stroke="none"/><path d="M12 17c1 2-1 3 0 5"/>'};function pe(i,t=""){const e=Dh[i]||Dh.question;return`<svg class="ic ${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}</svg>`}function hv(i=document){for(const t of i.querySelectorAll("[data-ic]"))t.innerHTML=pe(t.dataset.ic),t.classList.add("ic-slot")}let hs=null;const So=new Map,wo=new Map;function uv(){if(hs)return hs;try{const i=document.createElement("canvas"),t=new _u({canvas:i,antialias:!0,alpha:!0,preserveDrawingBuffer:!0});t.setPixelRatio(1),t.outputColorSpace=Ee,t.setClearColor(0,0);const e=new Uc;e.add(new Cu(16774888,13213808,1.45));const n=new mc(16777215,1.6);n.position.set(-4,8,7),e.add(n);const s=new mc(12577023,.55);s.position.set(5,4,-6),e.add(s);const r=new $e(28,1,.1,100);hs={renderer:t,scene:e,camera:r,canvas:i}}catch{hs=!1}return hs}function sd(i){return wo.has(i)||wo.set(i,ye(i)),wo.get(i)}function mn(i=.7,t=.16){const e=new Jt(new Tn(i,24),new cn({color:1707781,transparent:!0,opacity:t}));return e.rotation.x=-Math.PI/2,e.position.y=.01,e}function lr(i,{size:t=256,w:e=t,h:n=t,center:s,radius:r,yaw:a=.35,pitch:o=.18,zoom:c=1}){const{renderer:l,scene:h,camera:u}=hs;if(l.setSize(e,n,!1),u.aspect=e/n,h.add(i),i.updateMatrixWorld(!0),!s||!r){const p=new Ts().setFromObject(i).getBoundingSphere(new fr);s=s||p.center,r=r||p.radius}const d=Bn.degToRad(u.fov/2),f=Math.atan(Math.tan(d)*u.aspect),g=r*1.04/Math.sin(Math.min(d,f))/c;u.position.set(s.x+Math.sin(a)*Math.cos(o)*g,s.y+Math.sin(o)*g,s.z+Math.cos(a)*Math.cos(o)*g),u.lookAt(s),u.updateProjectionMatrix(),l.render(h,u);const _=l.domElement.toDataURL("image/png");return h.remove(i),_}function xr(i,t){if(So.has(i))return So.get(i);if(!uv())return"";let e="";try{e=t()}catch(n){console.warn("[thumbs]",i,n)}return So.set(i,e),e}const Ih={wave:(i=.6)=>Nt.wave(i),cheer:(i=.4)=>Nt.cheer(i),shrug:()=>({arms:{sl:{up:.9,fore:2.9,fwd:.3},sr:{up:.9,fore:2.9,fwd:.3}},lean:.08,nod:.08}),think:()=>({arms:{sl:{up:.15},sr:{up:.5,fore:2.5,fwd:.9,foreFwd:1}},nod:-.1,yawHead:.15}),hide:()=>({arms:{sl:{up:.55,fore:2.75,fwd:1.1,foreFwd:1.25},sr:{up:.55,fore:2.75,fwd:1.1,foreFwd:1.25}},nod:.12}),calm:()=>({arms:{sl:{up:.25,fore:1.6,fwd:.4,foreFwd:1.3},sr:{up:.25,fore:1.6,fwd:.4,foreFwd:1.3}}}),flex:()=>({arms:{sl:{up:1.6,fore:3},sr:{up:1.6,fore:3}},hop:0})};function rd(i,t,{size:e=192,bust:n=!0,yaw:s=.3}={}){const r=sd(i);we(r,(Ih[t]||Ih.wave)()),r.rotation.y=0,r.position.set(0,0,0),r.scale.setScalar(1);const a=new It;a.add(r);const o=n?lr(a,{size:e,center:new A(0,2.15,.1),radius:1.05,yaw:s,pitch:.12}):lr(a,{size:e,center:new A(0,1.45,0),radius:1.75,yaw:s,pitch:.12});return a.remove(r),o}const Da=(i,t="wave",e=192)=>xr(`av:${i}:${t}:${e}`,()=>rd(en[i]||en[0],t,{size:e})),Ss=(i="wave",t=192,e=!0)=>xr(`coach:${i}:${t}:${e}`,()=>rd(Ii,i,{size:t,bust:e,yaw:-.3})),dv=(i,t=160)=>xr(`mount:${i}:${t}`,()=>{const e=i==="horse"?Aa():Ra();cr(e,0,0),e.rotation.y=.55;const n=new It;return n.add(e),lr(n,{size:t,center:new A(0,2.6,.5),radius:2.5,yaw:.1,pitch:.1})});function ad(i){const t=Uu();return i.userData.rig.arms.sr.hand.add(t),t.quaternion.setFromRotationMatrix(new le().makeBasis(new A(0,-1,0),new A(1,0,0),new A(0,0,1))),t.position.set(0,Gc,0),t}const od=i=>({arms:{sr:{up:Math.PI/2+.05,fore:Math.PI/2+.05},sl:{up:Math.PI/2,fore:Math.PI/2-i*2.75,yaw:Math.PI*.82-i*(Math.PI*.82+.3)}},legs:{sl:{spread:.2},sr:{spread:.2}},yawHead:1.25,twist:.1,draw:i}),fv={warmup(i){const t=new It,e=ye(Ii);we(e,Nt.reachUp),e.position.x=-1.1,t.add(e);const n=ye(i);return we(n,Nt.armsOut(.4)),n.position.x=1.1,t.add(n),t.add(mn(.6).translateX(-1.1)),t.add(mn(.6).translateX(1.1)),[t,{center:new A(0,1.7,0),radius:2.5,yaw:.25}]},archery(i){const t=new It,e=ye(i);e.rotation.y=Math.PI/2,we(e,od(.9)),Wc(ad(e),.9),t.add(e);const n=xc();n.position.set(.1,2.05,-.9),n.rotation.y=Math.PI/2,n.rotation.z=0,t.add(n);const s=Fu();s.position.set(-1.2,2.3,-5.5),s.scale.setScalar(1.1),t.add(s);const r=[16731501,4171488,16763196];return[[1.3,3.6,-3.5],[2.3,2.4,-4.5],[-2.3,4.2,-4]].forEach(([a,o,c],l)=>{const h=Nu(r[l]);h.position.set(a,o,c),t.add(h)}),t.add(mn(.7)),[t,{center:new A(.2,2.1,-2.2),radius:3.4,yaw:.85,pitch:.12}]},ride(i,t){const e=new It,n=t==="horse"?Aa():Ra();cr(n,1.2,1);const s=ye(i);return s.scale.setScalar(.72),s.position.set(0,n.userData.saddleY-tn.hipY*.72+.05,n.userData.saddleZ),we(s,{...Nt.ride(.3),arms:{sl:{up:2.6},sr:{up:.3,fwd:.7,foreFwd:.6}}}),n.add(s),n.rotation.y=.7,e.add(n),e.add(mn(1.4,.14)),[e,{center:new A(0,2.5,.2),radius:3,yaw:0,pitch:.14}]},race(i){const t=new It,e=ye(i);we(e,Nt.run(1.2,1)),e.position.set(.9,0,.3),e.rotation.y=.35,t.add(e);const n=ye(Ii);we(n,Nt.run(4.2,1)),n.position.set(-.9,0,-.3),n.rotation.y=.35,t.add(n);const s=pa(16731501,3);s.position.set(2.4,0,-2.2),t.add(s);const r=pa(16763196,3);return r.position.set(-2.6,0,-2.4),t.add(r),t.add(mn(.7).translateX(.9).translateZ(.3)),t.add(mn(.7).translateX(-.9).translateZ(-.3)),[t,{center:new A(0,1.6,-.3),radius:2.7,yaw:.15,pitch:.16}]},stars(i){const t=new It,e=ye(i);return we(e,{arms:{sl:{up:2.6},sr:{up:1.9}},legs:{sl:{spread:.15},sr:{spread:.15}}}),t.add(e),[[-1.15,3.2,.2,1.2],[1.4,2.5,.1,.9],[.4,3.9,-.5,.7]].forEach(([n,s,r,a],o)=>{const c=Ou(o===1?16761370:16773754);c.position.set(n,s,r),c.scale.setScalar(a),c.rotation.z=o*.5,t.add(c)}),t.add(mn(.7)),[t,{center:new A(.1,2.2,0),radius:2.2,yaw:.2,pitch:.1}]},power(i){const t=new It,e=ye(i);return we(e,Nt.squat(.8)),t.add(e),[[-1.4,3.6],[0,4.1],[1.4,3.6]].forEach(([n,s],r)=>{const a=ku();a.position.set(n,s,-.6),a.scale.setScalar(.8),Zs(a,r!==2,[16757051,16740264,5951999][r]),t.add(a)}),t.add(mn(.75)),[t,{center:new A(0,2.2,-.2),radius:2.5,yaw:.15,pitch:.12}]},cooldown(i){const t=new It,e=ye(Ii);we(e,Nt.toeTouch),e.position.x=-1.1,t.add(e);const n=ye(i);return we(n,Nt.leanLeft),n.position.x=1.1,t.add(n),t.add(mn(.6).translateX(-1.1)),t.add(mn(.6).translateX(1.1)),[t,{center:new A(0,1.5,0),radius:2.4,yaw:.25}]}};function pv(i,t=0,e="camel",n=320){const s=en[t]||en[0];return xr(`act:${i}:${t}:${i==="ride"?e:""}:${n}`,()=>{const[r,a]=fv[i](s,e);return lr(r,{size:n,...a})})}const mv={squat:i=>Nt.squat(Math.sin(i*Math.PI)**1.2*.95),jack:i=>Nt.jack(Math.sin(i*Math.PI)**.9),power:i=>i<.5?Nt.squat(Math.sin(i*2*Math.PI)**1.2*.95):Nt.jack(Math.sin((i-.5)*2*Math.PI)**.9),jog:i=>Nt.run(i*Math.PI*4,1),reach:i=>({arms:{sl:{up:.3+Math.max(0,Math.sin(i*Math.PI*2))*2.5},sr:{up:.3+Math.max(0,-Math.sin(i*Math.PI*2))*2.5}},lean:Math.sin(i*Math.PI*2)*.12}),archery:i=>{const t=i<.6?Math.min(1,i/.5):i<.75?1:0;return od(t)},warmup:i=>{const t=Math.floor(i*4),e=i*4%1;return[Nt.reachUp,Nt.march(e*Math.PI*2),Nt.armsOut(e*6),e<.5?Nt.leanLeft:Nt.leanRight][t]},cooldown:i=>{const t=Math.floor(i*4);return[Nt.reachUp,Nt.leanLeft,Nt.leanRight,Nt.toeTouch][t]}};function gv(i,t=12,e=176){const n=mv[i];if(!n)return[];const s=[];for(let r=0;r<t;r++){const a=xr(`loop:${i}:${r}:${t}:${e}`,()=>{const o=sd(Ii);o.position.set(0,0,0),o.scale.setScalar(1);const c=i==="archery";o.rotation.y=c?Math.PI/2:0;let l=null;c&&(l=ad(o));const h=n(r/t);we(o,h),l&&Wc(l,h.draw||0);const u=new It;u.add(o),u.add(mn(.75));const d=lr(u,{size:e,center:new A(0,1.45,0),radius:2.05,yaw:c?.95:0,pitch:.08});return u.remove(o),l&&o.userData.rig.arms.sr.hand.remove(l),d});if(!a)return[];s.push(a)}return s}const _v={warmup:"warmup",archery:"archery",ride:"jog",race:"jog",stars:"reach",power:"power",cooldown:"cooldown"},Ia=()=>{var i;return(i=window.matchMedia)==null?void 0:i.call(window,"(prefers-reduced-motion: reduce)").matches};function xv(i,t,{ms:e=900,delay:n=0,suffix:s=""}={}){if(t=Number(t)||0,Ia()||t===0){i.textContent=t+s;return}const r=performance.now()+n;i.textContent="0"+s;const a=o=>{const c=Math.min(1,Math.max(0,(o-r)/e)),l=1-Math.pow(1-c,3);i.textContent=Math.round(t*l)+s,c<1&&requestAnimationFrame(a)};requestAnimationFrame(a)}function vv(i){return i.replace(/(\d+(?:\.\d+)?)/g,'<b class="num" data-n="$1">$1</b>')}function Mv(i,{count:t=60,colors:e=["#ffd93b","#ff6fa8","#3fa6e0","#7ac74f","#9b6bff","#ff8a3d"],duration:n=2400}={}){if(Ia())return;const s=document.createElement("div");s.className="confetti";for(let r=0;r<t;r++){const a=document.createElement("i"),o=e[r%e.length],c=Math.random()*100,l=.6+Math.random()*1.6,h=Math.random()*360;a.style.cssText=`left:${c}%;background:${o};animation-duration:${l+1}s;animation-delay:${Math.random()*.6}s;transform:rotate(${h}deg);width:${6+Math.random()*6}px;height:${8+Math.random()*8}px;border-radius:${Math.random()<.3?"50%":"2px"}`,s.appendChild(a)}i.appendChild(s),setTimeout(()=>s.remove(),n+800)}let pn=null,Uh=0;function yv(i,t,e){pn||(pn=document.createElement("div"),pn.id="repFlash",document.body.appendChild(pn)),pn.innerHTML=`<b>${i}</b><span>${t}</span>`,pn.style.setProperty("--c",e||"#16a3a0"),pn.classList.remove("go","milestone"),pn.offsetWidth,pn.classList.add("go"),i>0&&i%10===0&&pn.classList.add("milestone"),clearTimeout(Uh),Uh=setTimeout(()=>pn.classList.remove("go","milestone"),900)}let On=null,Nh=0;function Sv(i){Ia()||(On||(On=document.createElement("div"),On.id="edgePulse",document.body.appendChild(On)),On.style.setProperty("--c",i||"#16a3a0"),On.classList.remove("go"),On.offsetWidth,On.classList.add("go"),clearTimeout(Nh),Nh=setTimeout(()=>On.classList.remove("go"),500))}function wv(i,t,e=10){if(!t.length)return()=>{};let n=0;if(i.src=t[0],Ia())return()=>{};const s=setInterval(()=>{n=(n+1)%t.length,i.src=t[n]},1e3/e);return()=>clearInterval(s)}const Z=i=>document.getElementById(i),kt=Kx();nd(kt.muted);hv();const hr=[{id:"warmup",name:"Warm-Up",ic:"stretch",blurb:"Stretch and get ready",color:"#7ac74f",content:()=>"body",repWord:"Nice!",make:i=>new Sh(i,"warmup"),how:{camera:["Stand where the camera can see your whole body.","Copy Zaki the coach. Hold each stretch until the bar fills up."],nocam:["Stand up and follow along with Zaki the coach!","Each stretch moves on by itself, or press <kbd>Space</kbd> / Next."]}},{id:"archery",name:"Balloon Archery",ic:"bow",blurb:"Draw the bow, pop balloons",color:"#ff6fa8",content:()=>"archery",repWord:"Shot!",make:i=>new $u(i),how:{camera:["Stretch one arm out straight: that hand holds the bow.","Pull your other hand back to your cheek… then let go to shoot!","Raise or lower your bow arm to pick a balloon."],nocam:["Hold <kbd>Space</kbd> (or press and hold the screen) to pull the bow.","Let go to shoot! Aim with <kbd>↑</kbd> <kbd>↓</kbd> or by pointing at a balloon.","Pretend to pull a real bow while you play!"]}},{id:"ride",name:"Desert Gallop",ic:"camel",blurb:"Jog to make your ride gallop",color:"#ff8a3d",flash:!1,content:()=>kt.mount==="horse"?"horse":"camel",make:i=>new Ju(i),how:{camera:["Jog on the spot and lift your knees!","The faster you jog, the faster you gallop. Reach the flags!"],nocam:["Press <kbd>←</kbd> and <kbd>→</kbd> one after the other (or tap the foot buttons).","Faster taps = faster gallop. Jog along for real too!"]}},{id:"race",name:"The Race",ic:"run",blurb:"Two races against Zaki",color:"#3fa6e0",content:()=>"race",flash:!1,make:i=>new Ku(i),how:{camera:["Run on the spot as fast as you can!","Two races of 100 m. Can you beat Zaki?"],nocam:["Tap <kbd>←</kbd> and <kbd>→</kbd> one after the other (or the foot buttons) to run.","Two races of 100 m. Can you beat Zaki?"]}},{id:"stars",name:"Star Catcher",ic:"sparkle",blurb:"Reach and stretch for stars",color:"#9b6bff",content:()=>"stars",repWord:"Star!",make:i=>new Qu(i),how:{camera:["Stars pop up around you: touch them with your hands!","Reach up high, out wide, and squat down for the low ones."],nocam:["Move the magic hand with your mouse, finger or arrow keys.","Touch the stars before they fade away!"]}},{id:"power",name:"Lantern Power",ic:"lantern",blurb:"Squats and star jumps",color:"#ffb13b",content:()=>"strong",repWord:"Rep!",make:i=>new td(i),how:{camera:["Follow the moves: squats, then star jumps (jumping jacks).","Every move lights up a lantern. Light them all!"],nocam:["Press <kbd>S</kbd> (or the Squat button) for a squat, <kbd>J</kbd> (or Star jump) for a star jump.","Every move lights up a lantern. Do the moves for real too!"]}},{id:"cooldown",name:"Cool-Down",ic:"moon",blurb:"Slow stretches to finish",color:"#16a3a0",content:()=>"ease",repWord:"Nice!",make:i=>new Sh(i,"cooldown"),how:{camera:["Slow, gentle stretches. Breathe in and out.","Copy Zaki and hold each stretch."],nocam:["Slow, gentle stretches. Breathe in and out.","Follow along with Zaki the coach."]}}],Jc=Object.fromEntries(hr.map(i=>[i.id,i])),cd=i=>i.id==="ride"&&kt.mount==="horse"?"horse":i.ic,Kc=i=>pv(i.id,kt.avatar,kt.mount),ld=(i,t="")=>{const e=Kc(i);return e?`<img class="${t}" src="${e}" alt="">`:pe(cd(i))},Jn=new Ex(Z("scene")),gi=new kx;gi.setAvatar(kt.avatar);Jn.setView(gi);const ve=new av,_n=new Vx,Ev={world:Jn,sfx:li,popup:(i,t,e,n)=>xd(i,e,n,t),avatarStyle:()=>en[kt.avatar]||en[0],mount:()=>kt.mount},na={};function bv(i){return na[i]||(na[i]=Jc[i].make(Ev)),na[i]}const k={screen:"home",mode:kt.mode==="camera"?"camera":"nocam",def:null,act:null,phase:"idle",timeLeft:0,timeTotal:0,elapsed:0,readyT:0,countT:0,endT:0,roundSeconds:null,lastFrame:null,lastResult:null},Tv=["home","mode","privacy","loading","error","hub","intro","ready","pause","result"];let ga=()=>{};function Ie(i){k.screen=i;for(const e of Tv)Z(`screen-${e}`).classList.toggle("hidden",e!==i);const t=i===null||i==="ready"||i==="pause";Z("hud").classList.toggle("hidden",!(i===null||i==="pause")),Z("topbar").classList.toggle("hidden",t),Z("homeBtn").classList.toggle("hidden",i==="home"),!t&&k.act&&Jn.setView(gi),i!=="intro"&&(ga(),ga=()=>{}),hd()}function hd(){const t=k.act&&(k.screen===null||k.screen==="ready"||k.screen==="pause")&&k.mode!=="nocam";Z("pip").classList.toggle("hidden",!t),Z("pip").classList.toggle("big",t&&k.screen==="ready"),Z("pip").classList.toggle("inject",k.mode==="inject")}function yn(i,t){const e=Z(i);e&&(t?(e.src=t,e.style.display=""):e.style.display="none")}function vr(){const i=Qx(kt);Z("strengthCount").textContent=kt.strength,Z("streakCount").textContent=i,Z("hubStreak").textContent=i,Z("hubStrength").textContent=kt.strength,Z("hubToday").textContent=kt.todayDay===Pa()?kt.todayDone.length:0,Z("muteBtn").innerHTML=pe(kt.muted?"mute":"sound"),Z("modeChip").innerHTML=k.mode==="nocam"?`${pe("tap")}<span>Tap &amp; Keys</span><small>change</small>`:`${pe("camera")}<span>Camera</span><small>change</small>`;const t=en[kt.avatar]||en[0];Z("playerName").textContent=t.name,yn("playerPortrait",Da(kt.avatar))}document.addEventListener("click",i=>{ev(),i.target.closest("button")&&li.click()},!0);Z("muteBtn").onclick=()=>{kt.muted=!kt.muted,nd(kt.muted),mi(kt),vr()};Z("homeBtn").onclick=()=>Ua();Z("homeQuote").textContent=ki.strong.text;Z("homeSource").textContent=`— ${ki.strong.source}`;function Qc(){const i=Z("avatarRow");i.innerHTML="",en.forEach((t,e)=>{const n=document.createElement("button");n.className=`avatar-btn${e===kt.avatar?" on":""}`,n.style.setProperty("--c",`#${t.shirt.toString(16).padStart(6,"0")}`);const s=Da(e,e===kt.avatar?"cheer":"wave");n.innerHTML=`<span class="av-face">${s?`<img src="${s}" alt="">`:pe("stretch")}</span><b>${t.name}</b>`,n.setAttribute("aria-label",`Play as ${t.name}`),n.onclick=()=>{kt.avatar=e,mi(kt),gi.setAvatar(e),Qc(),tl()},i.appendChild(n)})}function tl(){Z("homeStrip").innerHTML=hr.map(i=>`<span style="--c:${i.color}" title="${i.name}">${ld(i)}</span>`).join("")}function Ua(){md(),ve.stopCamera(),Jn.setView(gi),Qc(),tl(),vr(),Ie("home")}Z("homePlay").onclick=()=>{kt.mode?kt.mode==="camera"?el():(k.mode="nocam",Rn()):Ie("mode")};Z("modeCamera").onclick=()=>{kt.mode="camera",mi(kt),el()};Z("modeNocam").onclick=()=>Ds();Z("modeBack").onclick=()=>Ua();function Ds(){kt.mode="nocam",mi(kt),ve.stopCamera(),k.mode="nocam",Rn()}function el(){if(ve.landmarker||ve.worker){k.mode="camera",Rn();return}yn("privacyPortrait",Ss("calm")),Ie("privacy")}Z("privacyOk").onclick=()=>nl();Z("privacyNocam").onclick=()=>Ds();const Fh={denied:["hide","eyeOff","The camera is switched off","That's okay! Camera permission wasn't given. A grown-up can allow the camera for this page (look for the lock or camera icon next to the web address), then press “Try again”. Or play with taps & keys instead!"],nocamera:["shrug","camera","No camera found","We couldn't find a camera on this device. You can still play every activity with taps and keys!"],busy:["think","camera","The camera is busy","Another app or tab might be using the camera. Close it, then press “Try again”."],insecure:["think","lock","The camera needs a safe web address","Browsers only allow the camera on https:// pages or on localhost. Ask a grown-up to open the game that way, or play with taps & keys."],unsupported:["shrug","question","This browser can't use the camera","Try a recent Chrome, Edge, Safari or Firefox, or play with taps & keys."],model:["shrug","robot","The pose helper didn't load","The part of the game that sees your moves couldn't start on this device. Please try again, or play with taps & keys."],unknown:["shrug","question","Something went wrong with the camera","Please try again, or play with taps & keys."]};function ud(i){const[t,e,n,s]=Fh[i]||Fh.unknown;k.lastError=i,yn("errPortrait",Ss(t)),Z("errBadge").innerHTML=pe(e),Z("errTitle").textContent=n,Z("errText").textContent=s,Ie("error")}Z("errRetry").onclick=()=>nl();Z("loadingNocam").onclick=()=>Ds();Z("errNocam").onclick=()=>Ds();async function nl(){yn("loadingPortrait",Ss("think")),Ie("loading"),Z("loadingText").textContent="Turning on the camera…",Z("loadingSub").textContent="If your browser asks, choose “Allow”.";try{if(ve.cameraOn||await ve.startCamera(Z("video")),Z("loadingText").textContent="Waking up the pose helper…",Z("loadingSub").textContent="This can take a few seconds the first time.",await ve.loadModel(),Z("loadingText").textContent="Almost ready…",yn("loadingPortrait",Ss("flex")),await ve.warmUp(),k.screen!=="loading")return;k.mode="camera",kt.mode="camera",mi(kt),Rn()}catch(i){console.warn("[camera]",(i==null?void 0:i.code)||"",(i==null?void 0:i.message)||i),ve.stopCamera(),k.screen==="loading"&&ud((i==null?void 0:i.code)||"unknown")}}let Oh=null;function dd(){ve.cameraOn||(Oh??(Oh=ve.startCamera(Z("video")).catch(i=>console.warn("[camera]",(i==null?void 0:i.code)||"",(i==null?void 0:i.message)||i)).finally(()=>{Oh=null})))}const Av=i=>`<span class="mini-stars">${[0,1,2].map(t=>pe("star",t<i?"":"off")).join("")}</span>`;function Rn(){md(),ve.stopCamera(),Jn.setView(gi),vr(),Z("hubTip").innerHTML=`${pe("flame")}<div><b>Keep your streak!</b> “${ki.regular.text}” <span>— ${ki.regular.source}</span></div>`;const i=Z("activityGrid");i.innerHTML="";const t=kt.todayDay===Pa()?kt.todayDone:[];hr.forEach(e=>{const n=document.createElement("button");n.className="act-card",n.style.setProperty("--c",e.color);const s=kt.bestStars[e.id]||0,r=e.id==="warmup"&&!t.includes("warmup")?`<span class="tag">${pe("play")}Start here!</span>`:t.includes(e.id)?`<span class="tag done">${pe("check")}Today</span>`:"";n.innerHTML=`${r}<span class="pic">${ld(e)}</span><b>${e.name}</b><small>${e.blurb}</small>${Av(s)}`,n.onclick=()=>Bi(e.id),i.appendChild(n)}),Ie("hub")}Z("modeChip").onclick=()=>{k.mode==="nocam"?(kt.mode="camera",mi(kt),el()):Ds()};Z("playerChip").onclick=()=>Ua();function Bi(i){const t=Jc[i];k.def=t,ve.stopCamera();const e=ki[t.content()];document.querySelector("#screen-intro .card").style.setProperty("--c",t.color),yn("introThumb",Kc(t)),Z("introBlurb").textContent=t.blurb,Z("introName").textContent=t.name,Z("introKind").innerHTML=e.kind==="Quran"?`${pe("book")}<span>From the Quran</span>`:`${pe("moon")}<span>Hadith</span>`,Z("introText").textContent=e.text,Z("introSource").textContent=`— ${e.source}`,Z("introMeaning").textContent=e.meaning;const s=t.how[k.mode==="nocam"?"nocam":"camera"];Z("introHow").innerHTML=s.map(o=>`<li><span>${o}</span></li>`).join(""),Z("introMode").innerHTML=k.mode==="nocam"?`${pe("tap")}Tap &amp; keys`:`${pe("camera")}Camera moves`,Z("mountPick").classList.toggle("hidden",i!=="ride");for(const o of Z("mountPick").querySelectorAll("button")){o.classList.toggle("on",o.dataset.mount===kt.mount);const c=o.querySelector("img"),l=dv(o.dataset.mount);l?c.src=l:c.replaceWith(Object.assign(document.createElement("span"),{innerHTML:pe(o.dataset.mount)}))}ga();const r=gv(_v[i]);document.querySelector(".move-loop").classList.toggle("hidden",!r.length),ga=wv(Z("introLoop"),r,i==="archery"?8:10),Ie("intro")}for(const i of document.querySelectorAll("#mountPick button"))i.onclick=()=>{kt.mount=i.dataset.mount,mi(kt),Bi("ride")};Z("introStart").onclick=()=>fd(k.def.id,k.mode);Z("introBack").onclick=()=>Rn();function fd(i,t=k.mode,e={}){const n=Jc[i],s=bv(i);k.def=n,k.act=s,k.mode=t,s.reset(t),Jn.setView(s),_n.reset();const r=k.roundSeconds??s.roundSeconds;k.timeLeft=r,k.timeTotal=r||1,k.untimed=!r,k.elapsed=0,Z("hud").style.setProperty("--c",n.color),Z("hudTitle").innerHTML=`${pe(cd(n))}<span>${n.name}</span>`,Z("hudTimer").classList.toggle("hidden",k.untimed),Js=-1,Dv(s),_d(),t==="nocam"||e.skipReady?pd(e.skipCountdown):(t==="camera"&&dd(),k.phase="ready",k.readyT=0,Z("readyTitle").textContent="Get ready!",Ie("ready"))}function pd(i=!1){if(Ie(null),i){k.phase="playing";return}k.phase="countdown",k.countT=0,k.countShown=null}function md(){k.phase="idle",k.act=null,Z("countdown").classList.add("hidden"),Z("visBanner").classList.add("hidden"),hd()}function yc(){!k.act||k.phase==="ended"||(k.phase="ended",k.endT=0,li.finish(),xd(k.def.id==="race"?"Races done!":k.untimed?"All done!":"Time!",innerWidth/2,innerHeight*.38,"big"))}const Rv={1:["#d99a62","#a7673a","Bronze"],2:["#d9dde3","#8d96a3","Silver"],3:["#ffd84a","#d99a00","Gold"]};function Cv(i){const[t,e,n]=Rv[Math.max(1,Math.min(3,i))];return`<svg viewBox="0 0 64 64" role="img" aria-label="${n} medal"><path d="M22 2h10l6 18H16z" fill="#ff5a5f"/><path d="M32 2h10l6 18H30z" fill="#3fa6e0"/><circle cx="32" cy="40" r="20" fill="${e}"/><circle cx="32" cy="38" r="18" fill="${t}"/><path d="M32 26l3.6 7.6 8.4 1-6.2 5.7 1.6 8.3-7.4-4.2-7.4 4.2 1.6-8.3-6.2-5.7 8.4-1z" fill="#fff" opacity=".9"/></svg>`}const Pv=[["arrow","bow"],["balloon","balloon"],["bullseye","target"],["squat","arrowDown"],["star jump","star"],["lantern","lantern"],["metre","ruler"],["step","foot"],["speed","wind"],["star","star"],["stretch","stretch"],["race","flag"],["won","trophy"],["water","water"],["muscles","stretch"]],Lv=i=>pe((Pv.find(([t])=>i.toLowerCase().includes(t))||[0,"check"])[1]),ws=i=>i.replace(/[\p{Extended_Pictographic}️]/gu,"").replace(/\s{2,}/g," ").trim();function gd(){const i=k.act,t=k.def,e=i.result();e.reps>0&&(e.stars=Math.max(1,e.stars)),Z("popups").innerHTML="";const n=tv(kt,t.id,e.reps,e.stars);mi(kt),k.lastResult={id:t.id,...e,...n};const s=document.querySelector("#screen-result .card");s.style.setProperty("--c",t.color);const r=["Good try!","Great job!","Awesome!","MashaAllah, super strong!"];Z("resTitle").textContent=r[e.stars],Z("resMedal").innerHTML=e.stars>0?Cv(e.stars):"",yn("resPortrait",Da(kt.avatar,e.stars>=2?"cheer":"wave")),Z("resStars").innerHTML=[0,1,2].map(h=>`<span style="animation-delay:${.2+h*.18}s">${pe("star",h<e.stars?"":"off")}</span>`).join(""),Z("resLines").innerHTML=e.lines.map(h=>{const u=ws(h);return`<li>${Lv(u)}<span>${vv(u)}</span></li>`}).join(""),Z("resLines").querySelectorAll(".num").forEach((h,u)=>xv(h,h.dataset.n,{ms:800,delay:300+u*120}));const a=[`<span>${pe("star","star")}+${e.stars} strength star${e.stars===1?"":"s"}</span>`];n.streakUp&&a.push(`<span>${pe("flame","flame")}${kt.streak}-day streak!</span>`),n.newBest&&(kt.plays[t.id]||0)>1&&a.push(`<span>${pe("medal","medal-ic")}New personal best!</span>`),Z("resEarn").innerHTML=a.join("");const o=ki[t.content()];Z("resReminder").innerHTML=`${pe("moon")}<div><b>Remember:</b> “${o.text.length>120?ki.strong.text:o.text}”</div>`;const c=hr.findIndex(h=>h.id===t.id),l=hr[c+1];Z("resNextText").textContent=l?`Next: ${l.name}`:"All done! Back to menu",yn("resNextThumb",l?Kc(l):""),Z("resNext").style.setProperty("--c",l?l.color:"var(--teal)"),Z("resNext").onclick=()=>l?Bi(l.id):Rn(),Jn.setView(gi),k.act=null,k.phase="idle",ve.stopCamera(),vr(),Ie("result"),e.stars>=2&&(li.win(),Mv(s,{count:e.stars===3?80:45}))}Z("resAgain").onclick=()=>{var i;return Bi(((i=k.lastResult)==null?void 0:i.id)||"warmup")};Z("resHub").onclick=()=>Rn();function Na(){var i,t;!k.act||!["playing","countdown","ready"].includes(k.phase)||(k.pausedFrom=k.phase,k.phase="paused",Z("countdown").classList.add("hidden"),(t=(i=k.act).onControl)==null||t.call(i,"draw",!1),yn("pausePortrait",Da(kt.avatar,"calm")),Ie("pause"))}function il(){if(k.phase==="paused"){if(k.pausedFrom==="ready"){k.phase="ready",Ie("ready");return}Ie(null),k.phase=k.pausedFrom==="countdown"?"countdown":"playing",k.phase==="countdown"&&(k.countT=0,k.countShown=null)}}Z("pauseBtn").onclick=Na;Z("resumeBtn").onclick=il;Z("quitBtn").onclick=()=>Rn();Z("readyPause").onclick=()=>Rn();Z("readyNocam").onclick=()=>{const i=k.def.id;Ds(),Bi(i)};document.addEventListener("visibilitychange",()=>{document.hidden?(Na(),ve.stopCamera()):k.act&&k.mode==="camera"&&dd()});function Dv(i){const t=Z("controls");if(t.innerHTML="",t.classList.toggle("hidden",k.mode!=="nocam"),k.mode==="nocam")for(const e of i.controls||[]){const n=document.createElement("button");n.className=`ctrl-btn${e.hold?" hold":""}`,e.color&&n.style.setProperty("--c",e.color),n.innerHTML=`<span>${e.ic?pe(e.ic):""}${e.label}</span><small>${e.key}</small>`,n.dataset.id=e.id;const s=a=>{a.preventDefault(),n.classList.add("down"),k.phase==="playing"&&i.onControl(e.id,!0)},r=a=>{a.preventDefault(),n.classList.remove("down"),i.onControl(e.id,!1)};n.addEventListener("pointerdown",s),n.addEventListener("pointerup",r),n.addEventListener("pointerleave",r),n.addEventListener("pointercancel",r),n.addEventListener("contextmenu",a=>a.preventDefault()),t.appendChild(n)}}const kh={"🏹":"bow","🏮":"lantern","🏁":"flag","💨":"wind","⏳":"timer"};let Js=-1;function _d(){const i=k.act;if(!i)return;const t=i.hud();if(t.reps!==Js){if(Z("hudReps").textContent=t.reps,Js>=0&&t.reps>Js){const s=Z("hudReps").parentElement;s.classList.remove("bump"),s.offsetWidth,s.classList.add("bump"),k.def.flash!==!1&&k.phase==="playing"&&(yv(t.reps,t.repWord||k.def.repWord||"Rep!",k.def.color),Sv(k.def.color))}Js=t.reps}Z("hudRepLabel").textContent=t.repLabel,Z("hudBig").classList.toggle("hidden",!t.big),t.big&&(Z("hudBig").textContent=t.big),Z("hudPrompt").textContent=ws(t.prompt||""),Z("hudDetail").textContent=ws(t.detail||"");const e=Math.max(0,Math.ceil(k.timeLeft));Z("hudTimerText").textContent=e,Z("hudTimerArc").style.strokeDashoffset=(106.8*(1-Math.max(0,k.timeLeft)/k.timeTotal)).toFixed(1),Z("hudTimer").classList.toggle("low",!k.untimed&&e<=5&&k.phase==="playing");const n=t.meter!==null&&t.meter!==void 0;if(Z("hudMeterWrap").classList.toggle("hidden",!n),n){Z("hudMeter").style.width=`${Math.round(Math.min(1,t.meter)*100)}%`,Z("hudMeter").classList.toggle("good",!!t.meterGood);const s=t.meterLabel||"";s!==k.meterLabel&&(k.meterLabel=s,Z("hudMeterLabel").innerHTML=kh[s]?pe(kh[s]):s),Z("hudRival").classList.toggle("hidden",t.rival===void 0),t.rival!==void 0&&(Z("hudRival").style.left=`${t.rival*100}%`)}for(const s of Z("controls").children)s.classList.toggle("nudge",t.highlight===s.dataset.id)}function xd(i,t,e,n){const s=document.createElement("div");s.className=`popup ${n||""}`,s.textContent=ws(i),Z("popups").appendChild(s);const r=Math.min(innerWidth/2,s.offsetWidth/2+8);s.style.left=`${Math.max(r,Math.min(innerWidth-r,t))}px`,s.style.top=`${Math.max(90,Math.min(innerHeight-90,e))}px`,setTimeout(()=>s.remove(),1600)}ve.onFrame(i=>{k.lastFrame=i;const t=k.act;!t||k.mode==="nocam"||!["ready","countdown","playing"].includes(k.phase)||(_n.update(Vu(i.pts,t.requirement),i.t),t.onPose(i,k.phase==="playing"&&_n.ok))});const Iv=new Set(["Space","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"]);window.addEventListener("keydown",i=>{if(i.code==="KeyP"||i.code==="Escape"){k.phase==="paused"?il():Na();return}k.act&&k.mode==="nocam"&&(k.phase==="playing"||k.phase==="countdown")&&(Iv.has(i.code)&&i.preventDefault(),!i.repeat&&k.phase==="playing"&&k.act.onKey(i.code,!0),i.repeat&&k.phase==="playing"&&i.code.startsWith("Arrow")&&k.act.onKey(i.code,!0))});window.addEventListener("keyup",i=>{k.act&&k.mode==="nocam"&&k.act.onKey(i.code,!1)});const Di=Z("scene");Di.addEventListener("pointerdown",i=>{var t;k.act&&k.phase==="playing"&&((t=Di.setPointerCapture)==null||t.call(Di,i.pointerId),k.act.onPointer("down",i.clientX,i.clientY))});Di.addEventListener("pointermove",i=>{k.act&&k.phase==="playing"&&k.act.onPointer("move",i.clientX,i.clientY)});Di.addEventListener("pointerup",i=>{k.act&&k.act.onPointer("up",i.clientX,i.clientY)});Di.addEventListener("pointercancel",i=>{k.act&&k.act.onPointer("up",i.clientX,i.clientY)});let Bh=performance.now();function vd(i){requestAnimationFrame(vd);const t=Math.min(.05,(i-Bh)/1e3);Bh=i;const e=k.act;if(e&&k.mode==="camera"&&["ready","countdown","playing","paused"].includes(k.phase)&&ve.poll(i),e){switch(k.phase){case"ready":{e.update(t,!1);const n=_n.ok;k.readyT=n?k.readyT+t:0,Z("readyMsg").textContent=ws(Kr[_n.reason]||Kr.nobody),Z("readyMsg").classList.toggle("ok",n),Z("readyBar").style.width=`${Math.min(100,k.readyT/1.2*100)}%`,k.readyT>=1.2&&(li.go(),pd());break}case"countdown":{e.update(t,!1),k.countT+=t;const n=3-Math.floor(k.countT/.8),s=n>0?String(n):"GO!";if(s!==k.countShown){k.countShown=s;const r=Z("countdown");r.textContent=s,r.classList.remove("hidden","tick"),r.offsetWidth,r.classList.add("tick"),n>0?li.beep():li.go()}k.countT>=3.2&&(Z("countdown").classList.add("hidden"),k.phase="playing");break}case"playing":{const n=k.mode==="nocam"||_n.ok;if(Z("visBanner").classList.toggle("hidden",n),n||(Z("visBannerText").textContent=ws(Kr[_n.reason]||Kr.nobody)),e.update(t,n),n&&(k.elapsed+=t,!k.untimed)){const s=Math.ceil(k.timeLeft);k.timeLeft-=t;const r=Math.ceil(k.timeLeft);r!==s&&r<=5&&r>0&&li.beep()}(!k.untimed&&k.timeLeft<=0||e.done)&&yc();break}case"ended":e.update(t,!1),k.endT+=t,Z("visBanner").classList.add("hidden"),k.endT>1.4&&gd();break}_d()}else gi.update(t);Z("pip").classList.contains("hidden")||ov(Z("pipCanvas"),k.lastFrame,{guide:k.screen==="ready",ok:_n.ok}),Jn.render()}requestAnimationFrame(vd);function Uv(i,t,e=4/3){const n=new Yu[i],s=new Mc,r=[];for(const a of t){const o=Yc(s.smooth(a.lm,a.t),a.aspect||e),c=n.update(o,a.t);c&&r.push({e:c,t:a.t})}return{count:n.count,cadence:n.cadence,state:n.state,events:r}}window.game={version:"1.1.0",get save(){return structuredClone(kt)},get screen(){return k.screen},get activity(){return k.act},state(){var t;const i=k.act;return{screen:k.screen,phase:k.phase,mode:k.mode,activity:((t=k.def)==null?void 0:t.id)||null,reps:(i==null?void 0:i.reps)??null,score:(i==null?void 0:i.score)??null,timeLeft:k.timeLeft,untimed:k.untimed,visible:_n.ok,visReason:_n.reason,hud:i?i.hud():null,lastResult:k.lastResult,lastError:k.lastError||null,tracker:ve.status()}},synth:{synthPose:Ai,poses:He,sequence:lv},detectors:Yu,TUNE:Oe,checkVisibility:Vu,matchStretch:qu,RigSolver:Hu,toDisplay:Yc,runDetector:Uv,injectPose(i,{t,aspect:e=4/3}={}){return{hasBody:!!ve.inject(i,t??performance.now()/1e3,e).pts,visible:_n.ok}},feed(i,t=4/3){for(const e of i)ve.inject(e.lm,e.t,e.aspect||t);return this.state()},start(i,{mode:t="nocam",skipReady:e=!1,skipCountdown:n=!1,seconds:s}={}){return s!==void 0&&(k.roundSeconds=s),t==="inject"&&(ve.source="inject"),fd(i,t,{skipReady:e,skipCountdown:n}),this.state()},setRoundSeconds(i){k.roundSeconds=i},endRound(){yc()},finishNow(){return k.act&&(yc(),gd()),k.lastResult},key(i,t=!0){var e;(e=k.act)==null||e.onKey(i,t)},control(i,t=!0){var e;(e=k.act)==null||e.onControl(i,t)},pointer(i,t,e){var n;(n=k.act)==null||n.onPointer(i,t,e)},show(i){const t={home:Ua,hub:Rn,mode:()=>Ie("mode"),privacy:()=>{yn("privacyPortrait",Ss("calm")),Ie("privacy")},loading:()=>{yn("loadingPortrait",Ss("think")),Ie("loading")}};return t[i]?t[i]():i==="intro"?Bi("archery"):i.startsWith("intro:")?Bi(i.slice(6)):i.startsWith("error:")&&ud(i.slice(6)),k.screen},pause:Na,resume:il,enableCamera:nl,tracker:ve,world:Jn,cheer:_r};vr();Qc();tl();Ie("home");
