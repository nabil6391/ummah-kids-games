(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wl="170",xf=0,ic=1,Mf=2,kh=1,Oh=2,Bn=3,oi=0,je=1,Me=2,ni=0,us=1,sc=2,rc=3,ac=4,Sf=5,wi=100,bf=101,wf=102,Tf=103,Ef=104,Af=200,Cf=201,Rf=202,Pf=203,wo=204,To=205,Lf=206,If=207,Df=208,Uf=209,Nf=210,Ff=211,kf=212,Of=213,Bf=214,Eo=0,Ao=1,Co=2,ps=3,Ro=4,Po=5,Lo=6,Io=7,Bh=0,zf=1,Hf=2,ii=0,Gf=1,Vf=2,Wf=3,qf=4,$f=5,Xf=6,jf=7,zh=300,ms=301,gs=302,Do=303,Uo=304,xa=306,oa=1e3,Ci=1001,No=1002,Ye=1003,Yf=1004,ur=1005,En=1006,Ia=1007,Ri=1008,Wn=1009,Hh=1010,Gh=1011,Zs=1012,Tl=1013,Di=1014,An=1015,nr=1016,El=1017,Al=1018,vs=1020,Vh=35902,Wh=1021,qh=1022,yn=1023,$h=1024,Xh=1025,fs=1026,_s=1027,Ma=1028,Cl=1029,jh=1030,Rl=1031,Pl=1033,$r=33776,Xr=33777,jr=33778,Yr=33779,Fo=35840,ko=35841,Oo=35842,Bo=35843,zo=36196,Ho=37492,Go=37496,Vo=37808,Wo=37809,qo=37810,$o=37811,Xo=37812,jo=37813,Yo=37814,Jo=37815,Zo=37816,Ko=37817,Qo=37818,tl=37819,el=37820,nl=37821,Jr=36492,il=36494,sl=36495,Yh=36283,rl=36284,al=36285,ol=36286,Jf=3200,Zf=3201,Jh=0,Kf=1,ti="",We="srgb",Ss="srgb-linear",Sa="linear",le="srgb",Gi=7680,oc=519,Qf=512,td=513,ed=514,Zh=515,nd=516,id=517,sd=518,rd=519,ll=35044,lc="300 es",zn=2e3,la=2001;class bs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cc=1234567;const $s=Math.PI/180,Ks=180/Math.PI;function Cn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function Ne(i,t,e){return Math.max(t,Math.min(e,i))}function Ll(i,t){return(i%t+t)%t}function ad(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function od(i,t,e){return i!==t?(e-i)/(t-i):0}function Xs(i,t,e){return(1-e)*i+e*t}function ld(i,t,e,n){return Xs(i,t,1-Math.exp(-e*n))}function cd(i,t=1){return t-Math.abs(Ll(i,t*2)-t)}function hd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ud(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function fd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function dd(i,t){return i+Math.random()*(t-i)}function pd(i){return i*(.5-Math.random())}function md(i){i!==void 0&&(cc=i);let t=cc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gd(i){return i*$s}function vd(i){return i*Ks}function _d(i){return(i&i-1)===0&&i!==0}function yd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Md(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),h=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Kh={DEG2RAD:$s,RAD2DEG:Ks,generateUUID:Cn,clamp:Ne,euclideanModulo:Ll,mapLinear:ad,inverseLerp:od,lerp:Xs,damp:ld,pingpong:cd,smoothstep:hd,smootherstep:ud,randInt:fd,randFloat:dd,randFloatSpread:pd,seededRandom:md,degToRad:gd,radToDeg:vd,isPowerOfTwo:_d,ceilPowerOfTwo:yd,floorPowerOfTwo:xd,setQuaternionFromProperEuler:Md,normalize:ae,denormalize:_n};class it{constructor(t=0,e=0){it.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,s,r,a,o,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],v=s[0],m=s[3],p=s[6],y=s[1],x=s[4],_=s[7],R=s[2],E=s[5],A=s[8];return r[0]=a*v+o*y+l*R,r[3]=a*m+o*x+l*E,r[6]=a*p+o*_+l*A,r[1]=c*v+u*y+h*R,r[4]=c*m+u*x+h*E,r[7]=c*p+u*_+h*A,r[2]=f*v+d*y+g*R,r[5]=f*m+d*x+g*E,r[8]=f*p+d*_+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,g=e*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(s*c-u*n)*v,t[2]=(o*n-s*a)*v,t[3]=f*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Da.makeScale(t,e)),this}rotate(t){return this.premultiply(Da.makeRotation(-t)),this}translate(t,e){return this.premultiply(Da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Da=new kt;function Qh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ca(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sd(){const i=ca("canvas");return i.style.display="block",i}const hc={};function Gs(i){i in hc||(hc[i]=!0,console.warn(i))}function bd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function wd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Td(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Kt={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===le&&(i.r=Hn(i.r),i.g=Hn(i.g),i.b=Hn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===le&&(i.r=ds(i.r),i.g=ds(i.g),i.b=ds(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ti?Sa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const uc=[.64,.33,.3,.6,.15,.06],fc=[.2126,.7152,.0722],dc=[.3127,.329],pc=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mc=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kt.define({[Ss]:{primaries:uc,whitePoint:dc,transfer:Sa,toXYZ:pc,fromXYZ:mc,luminanceCoefficients:fc,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:uc,whitePoint:dc,transfer:le,toXYZ:pc,fromXYZ:mc,luminanceCoefficients:fc,outputColorSpaceConfig:{drawingBufferColorSpace:We}}});let Vi;class Ed{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vi===void 0&&(Vi=ca("canvas")),Vi.width=t.width,Vi.height=t.height;const n=Vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ca("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Hn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hn(e[n]/255)*255):e[n]=Hn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ad=0;class tu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Cn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ua(s[a].image)):r.push(Ua(s[a]))}else r=Ua(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ua(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ed.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cd=0;class He extends bs{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=Ci,s=Ci,r=En,a=Ri,o=yn,l=Wn,c=He.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Cn(),this.name="",this.source=new tu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oa:t.x=t.x-Math.floor(t.x);break;case Ci:t.x=t.x<0?0:1;break;case No:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oa:t.y=t.y-Math.floor(t.y);break;case Ci:t.y=t.y<0?0:1;break;case No:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=zh;He.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,s=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,_=(d+1)/2,R=(p+1)/2,E=(u+f)/4,A=(h+v)/4,P=(g+m)/4;return x>_&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=A/n):_>R?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=P/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=P/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-v)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rd extends bs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new He(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new tu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends Rd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class eu extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pd extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class si{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(h!==v||l!==f||c!==d||u!==g){let m=1-o;const p=l*f+c*d+u*g+h*v,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const R=Math.sqrt(x),E=Math.atan2(R,p*y);m=Math.sin(m*E)/R,o=Math.sin(o*E)/R}const _=o*y;if(l=l*m+f*_,c=c*m+d*_,u=u*m+g*_,h=h*m+v*_,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-o*d,t[e+2]=c*g+u*d+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Na.copy(this).projectOnVector(t),this.sub(Na)}reflect(t){return this.sub(Na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new C,gc=new si;class hi{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fr.copy(n.boundingBox)),fr.applyMatrix4(t.matrixWorld),this.union(fr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ps),dr.subVectors(this.max,Ps),Wi.subVectors(t.a,Ps),qi.subVectors(t.b,Ps),$i.subVectors(t.c,Ps),Xn.subVectors(qi,Wi),jn.subVectors($i,qi),pi.subVectors(Wi,$i);let e=[0,-Xn.z,Xn.y,0,-jn.z,jn.y,0,-pi.z,pi.y,Xn.z,0,-Xn.x,jn.z,0,-jn.x,pi.z,0,-pi.x,-Xn.y,Xn.x,0,-jn.y,jn.x,0,-pi.y,pi.x,0];return!Fa(e,Wi,qi,$i,dr)||(e=[1,0,0,0,1,0,0,0,1],!Fa(e,Wi,qi,$i,dr))?!1:(pr.crossVectors(Xn,jn),e=[pr.x,pr.y,pr.z],Fa(e,Wi,qi,$i,dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Un=[new C,new C,new C,new C,new C,new C,new C,new C],dn=new C,fr=new hi,Wi=new C,qi=new C,$i=new C,Xn=new C,jn=new C,pi=new C,Ps=new C,dr=new C,pr=new C,mi=new C;function Fa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){mi.fromArray(i,r);const o=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),l=t.dot(mi),c=e.dot(mi),u=n.dot(mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ld=new hi,Ls=new C,ka=new C;class ws{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ld.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);const e=Ls.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ls,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(ka)),this.expandByPoint(Ls.copy(t.center).sub(ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new C,Oa=new C,mr=new C,Yn=new C,Ba=new C,gr=new C,za=new C;class nu{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Oa.copy(t).add(e).multiplyScalar(.5),mr.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(Oa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(mr),o=Yn.dot(this.direction),l=-Yn.dot(mr),c=Yn.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Oa).addScaledVector(mr,f),d}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){Ba.subVectors(e,t),gr.subVectors(n,t),za.crossVectors(Ba,gr);let a=this.direction.dot(za),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yn.subVectors(this.origin,t);const l=o*this.direction.dot(gr.crossVectors(Yn,gr));if(l<0)return null;const c=o*this.direction.dot(Ba.cross(Yn));if(c<0||l+c>a)return null;const u=-o*Yn.dot(za);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,s,r,a,o,l,c,u,h,f,d,g,v,m){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,h,f,d,g,v,m)}set(t,e,n,s,r,a,o,l,c,u,h,f,d,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Xi.setFromMatrixColumn(t,0).length(),r=1/Xi.setFromMatrixColumn(t,1).length(),a=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,d=a*h,g=o*u,v=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,v=c*h;e[0]=f+v*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,v=c*h;e[0]=f-v*o,e[4]=-a*h,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,d=a*h,g=o*u,v=o*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+v,e[1]=l*h,e[5]=v*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=v-f*h,e[8]=g*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-v*h}else if(t.order==="XZY"){const f=a*l,d=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+v,e[5]=a*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=o*u,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Id,t,Dd)}lookAt(t,e,n){const s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Jn.crossVectors(n,Ze),Jn.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Jn.crossVectors(n,Ze)),Jn.normalize(),vr.crossVectors(Ze,Jn),s[0]=Jn.x,s[4]=vr.x,s[8]=Ze.x,s[1]=Jn.y,s[5]=vr.y,s[9]=Ze.y,s[2]=Jn.z,s[6]=vr.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],x=n[7],_=n[11],R=n[15],E=s[0],A=s[4],P=s[8],w=s[12],S=s[1],L=s[5],H=s[9],z=s[13],q=s[2],J=s[6],W=s[10],K=s[14],V=s[3],ot=s[7],dt=s[11],wt=s[15];return r[0]=a*E+o*S+l*q+c*V,r[4]=a*A+o*L+l*J+c*ot,r[8]=a*P+o*H+l*W+c*dt,r[12]=a*w+o*z+l*K+c*wt,r[1]=u*E+h*S+f*q+d*V,r[5]=u*A+h*L+f*J+d*ot,r[9]=u*P+h*H+f*W+d*dt,r[13]=u*w+h*z+f*K+d*wt,r[2]=g*E+v*S+m*q+p*V,r[6]=g*A+v*L+m*J+p*ot,r[10]=g*P+v*H+m*W+p*dt,r[14]=g*w+v*z+m*K+p*wt,r[3]=y*E+x*S+_*q+R*V,r[7]=y*A+x*L+_*J+R*ot,r[11]=y*P+x*H+_*W+R*dt,r[15]=y*w+x*z+_*K+R*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*h-s*c*h-r*o*f+n*c*f+s*o*d-n*l*d)+v*(+e*l*d-e*c*f+r*a*f-s*a*d+s*c*u-r*l*u)+m*(+e*c*h-e*o*d-r*a*h+n*a*d+r*o*u-n*c*u)+p*(-s*o*u-e*l*h+e*o*f+s*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],y=h*m*c-v*f*c+v*l*d-o*m*d-h*l*p+o*f*p,x=g*f*c-u*m*c-g*l*d+a*m*d+u*l*p-a*f*p,_=u*v*c-g*h*c+g*o*d-a*v*d-u*o*p+a*h*p,R=g*h*l-u*v*l-g*o*f+a*v*f+u*o*m-a*h*m,E=e*y+n*x+s*_+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=y*A,t[1]=(v*f*r-h*m*r-v*s*d+n*m*d+h*s*p-n*f*p)*A,t[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*p+n*l*p)*A,t[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*d-n*l*d)*A,t[4]=x*A,t[5]=(u*m*r-g*f*r+g*s*d-e*m*d-u*s*p+e*f*p)*A,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*A,t[7]=(a*f*r-u*l*r+u*s*c-e*f*c-a*s*d+e*l*d)*A,t[8]=_*A,t[9]=(g*h*r-u*v*r-g*n*d+e*v*d+u*n*p-e*h*p)*A,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*p+e*o*p)*A,t[11]=(u*o*r-a*h*r-u*n*c+e*h*c+a*n*d-e*o*d)*A,t[12]=R*A,t[13]=(u*v*s-g*h*s+g*n*f-e*v*f-u*n*m+e*h*m)*A,t[14]=(g*o*s-a*v*s-g*n*l+e*v*l+a*n*m-e*o*m)*A,t[15]=(a*h*s-u*o*s+u*n*l-e*h*l-a*n*f+e*o*f)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,g=r*h,v=a*u,m=a*h,p=o*h,y=l*c,x=l*u,_=l*h,R=n.x,E=n.y,A=n.z;return s[0]=(1-(v+p))*R,s[1]=(d+_)*R,s[2]=(g-x)*R,s[3]=0,s[4]=(d-_)*E,s[5]=(1-(f+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+x)*A,s[9]=(m-y)*A,s[10]=(1-(f+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Xi.set(s[0],s[1],s[2]).length();const a=Xi.set(s[4],s[5],s[6]).length(),o=Xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],pn.copy(this);const c=1/r,u=1/a,h=1/o;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=h,pn.elements[9]*=h,pn.elements[10]*=h,e.setFromRotationMatrix(pn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=zn){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(o===zn)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===la)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=zn){const l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(a-r),f=(e+t)*c,d=(n+s)*u;let g,v;if(o===zn)g=(a+r)*h,v=-2*h;else if(o===la)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Xi=new C,pn=new oe,Id=new C(0,0,0),Dd=new C(1,1,1),Jn=new C,vr=new C,Ze=new C,vc=new oe,_c=new si;class Mn{constructor(t=0,e=0,n=0,s=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _c.setFromEuler(this),this.setFromQuaternion(_c,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class iu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ud=0;const yc=new C,ji=new si,Fn=new oe,_r=new C,Is=new C,Nd=new C,Fd=new si,xc=new C(1,0,0),Mc=new C(0,1,0),Sc=new C(0,0,1),bc={type:"added"},kd={type:"removed"},Yi={type:"childadded",child:null},Ha={type:"childremoved",child:null};class me extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new C,e=new Mn,n=new si,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new kt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(xc,t)}rotateY(t){return this.rotateOnAxis(Mc,t)}rotateZ(t){return this.rotateOnAxis(Sc,t)}translateOnAxis(t,e){return yc.copy(t).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xc,t)}translateY(t){return this.translateOnAxis(Mc,t)}translateZ(t){return this.translateOnAxis(Sc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_r.copy(t):_r.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Is,_r,this.up):Fn.lookAt(_r,Is,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(Fn),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bc),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kd),Ha.child=t,this.dispatchEvent(Ha),Ha.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bc),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,t,Nd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,Fd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}me.DEFAULT_UP=new C(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new C,kn=new C,Ga=new C,On=new C,Ji=new C,Zi=new C,wc=new C,Va=new C,Wa=new C,qa=new C,$a=new he,Xa=new he,ja=new he;class nn{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mn.subVectors(t,e),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){mn.subVectors(s,e),kn.subVectors(n,e),Ga.subVectors(t,e);const a=mn.dot(mn),o=mn.dot(kn),l=mn.dot(Ga),c=kn.dot(kn),u=kn.dot(Ga),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(a,On.y),l.addScaledVector(o,On.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return $a.setScalar(0),Xa.setScalar(0),ja.setScalar(0),$a.fromBufferAttribute(t,e),Xa.fromBufferAttribute(t,n),ja.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector($a,r.x),a.addScaledVector(Xa,r.y),a.addScaledVector(ja,r.z),a}static isFrontFacing(t,e,n,s){return mn.subVectors(n,e),kn.subVectors(t,e),mn.cross(kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),mn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ji.subVectors(s,n),Zi.subVectors(r,n),Va.subVectors(t,n);const l=Ji.dot(Va),c=Zi.dot(Va);if(l<=0&&c<=0)return e.copy(n);Wa.subVectors(t,s);const u=Ji.dot(Wa),h=Zi.dot(Wa);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Ji,a);qa.subVectors(t,r);const d=Ji.dot(qa),g=Zi.dot(qa);if(g>=0&&d<=g)return e.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Zi,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return wc.subVectors(r,s),o=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(wc,o);const p=1/(m+v+f);return a=v*p,o=f*p,e.copy(n).addScaledVector(Ji,a).addScaledVector(Zi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},yr={h:0,s:0,l:0};function Ya(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Et{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=Ll(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ya(a,r,t+1/3),this.g=Ya(a,r,t),this.b=Ya(a,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){const n=su[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return Kt.fromWorkingColorSpace(Be.copy(this),t),Math.round(Ne(Be.r*255,0,255))*65536+Math.round(Ne(Be.g*255,0,255))*256+Math.round(Ne(Be.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,s=Be.g,r=Be.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=We){Kt.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,s=Be.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(yr);const n=Xs(Zn.h,yr.h,e),s=Xs(Zn.s,yr.s,e),r=Xs(Zn.l,yr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Et;Et.NAMES=su;let Od=0;class Oi extends bs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Cn(),this.name="",this.blending=us,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wo,this.blendDst=To,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wo&&(n.blendSrc=this.blendSrc),this.blendDst!==To&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xn extends Oi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new C,xr=new it;class an{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ll,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xr.fromBufferAttribute(this,e),xr.applyMatrix3(t),this.setXY(e,xr.x,xr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_n(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_n(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_n(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ll&&(t.usage=this.usage),t}}class ru extends an{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class au extends an{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Qt extends an{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Bd=0;const en=new oe,Ja=new me,Ki=new C,Ke=new hi,Ds=new hi,De=new C;class Pe extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qh(t)?au:ru)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return Ja.lookAt(t),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ds.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(Ke.min,Ds.min),Ke.expandByPoint(De),De.addVectors(Ke.max,Ds.max),Ke.expandByPoint(De)):(Ke.expandByPoint(Ds.min),Ke.expandByPoint(Ds.max))}Ke.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)De.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(De));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)De.fromBufferAttribute(o,c),l&&(Ki.fromBufferAttribute(t,c),De.add(Ki)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new C,l[P]=new C;const c=new C,u=new C,h=new C,f=new it,d=new it,g=new it,v=new C,m=new C;function p(P,w,S){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,S),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,w),g.fromBufferAttribute(r,S),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(L),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(L),o[P].add(v),o[w].add(v),o[S].add(v),l[P].add(m),l[w].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,w=y.length;P<w;++P){const S=y[P],L=S.start,H=S.count;for(let z=L,q=L+H;z<q;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const x=new C,_=new C,R=new C,E=new C;function A(P){R.fromBufferAttribute(s,P),E.copy(R);const w=o[P];x.copy(w),x.sub(R.multiplyScalar(R.dot(w))).normalize(),_.crossVectors(E,w);const L=_.dot(l[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,L)}for(let P=0,w=y.length;P<w;++P){const S=y[P],L=S.start,H=S.count;for(let z=L,q=L+H;z<q;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,u=new C,h=new C;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new an(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tc=new oe,gi=new nu,Mr=new ws,Ec=new C,Sr=new C,br=new C,wr=new C,Za=new C,Tr=new C,Ac=new C,Er=new C;class Te extends me{constructor(t=new Pe,e=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Tr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Za.fromBufferAttribute(h,t),a?Tr.addScaledVector(Za,u):Tr.addScaledVector(Za.sub(e),u))}e.add(Tr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(r),gi.copy(t.ray).recast(t.near),!(Mr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Mr,Ec)===null||gi.origin.distanceToSquared(Ec)>(t.far-t.near)**2))&&(Tc.copy(r).invert(),gi.copy(t.ray).applyMatrix4(Tc),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,R=x;_<R;_+=3){const E=o.getX(_),A=o.getX(_+1),P=o.getX(_+2);s=Ar(this,p,t,n,c,u,h,E,A,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const y=o.getX(m),x=o.getX(m+1),_=o.getX(m+2);s=Ar(this,a,t,n,c,u,h,y,x,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,R=x;_<R;_+=3){const E=_,A=_+1,P=_+2;s=Ar(this,p,t,n,c,u,h,E,A,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const y=m,x=m+1,_=m+2;s=Ar(this,a,t,n,c,u,h,y,x,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function zd(i,t,e,n,s,r,a,o){let l;if(t.side===je?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===oi,o),l===null)return null;Er.copy(o),Er.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Er);return c<e.near||c>e.far?null:{distance:c,point:Er.clone(),object:i}}function Ar(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Sr),i.getVertexPosition(l,br),i.getVertexPosition(c,wr);const u=zd(i,t,e,n,Sr,br,wr,Ac);if(u){const h=new C;nn.getBarycoord(Ac,Sr,br,wr,h),s&&(u.uv=nn.getInterpolatedAttribute(s,o,l,c,h,new it)),r&&(u.uv1=nn.getInterpolatedAttribute(r,o,l,c,h,new it)),a&&(u.normal=nn.getInterpolatedAttribute(a,o,l,c,h,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new C,materialIndex:0};nn.getNormal(Sr,br,wr,f.normal),u.face=f,u.barycoord=h}return u}class se extends Pe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(h,2));function g(v,m,p,y,x,_,R,E,A,P,w){const S=_/A,L=R/P,H=_/2,z=R/2,q=E/2,J=A+1,W=P+1;let K=0,V=0;const ot=new C;for(let dt=0;dt<W;dt++){const wt=dt*L-z;for(let Gt=0;Gt<J;Gt++){const fe=Gt*S-H;ot[v]=fe*y,ot[m]=wt*x,ot[p]=q,c.push(ot.x,ot.y,ot.z),ot[v]=0,ot[m]=0,ot[p]=E>0?1:-1,u.push(ot.x,ot.y,ot.z),h.push(Gt/A),h.push(1-dt/P),K+=1}}for(let dt=0;dt<P;dt++)for(let wt=0;wt<A;wt++){const Gt=f+wt+J*dt,fe=f+wt+J*(dt+1),X=f+(wt+1)+J*(dt+1),et=f+(wt+1)+J*dt;l.push(Gt,fe,et),l.push(fe,X,et),V+=6}o.addGroup(d,V,w),d+=V,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new se(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ys(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ve(i){const t={};for(let e=0;e<i.length;e++){const n=ys(i[e]);for(const s in n)t[s]=n[s]}return t}function Hd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ou(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const Gd={clone:ys,merge:Ve};var Vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Oi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vd,this.fragmentShader=Wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=Hd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class lu extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new C,Cc=new it,Rc=new it;class Xe extends lu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z)}getViewSize(t,e){return this.getViewBounds(t,Cc,Rc),e.subVectors(Rc,Cc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($s*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Qi=-90,ts=1;class qd extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xe(Qi,ts,t,e);s.layers=this.layers,this.add(s);const r=new Xe(Qi,ts,t,e);r.layers=this.layers,this.add(r);const a=new Xe(Qi,ts,t,e);a.layers=this.layers,this.add(a);const o=new Xe(Qi,ts,t,e);o.layers=this.layers,this.add(o);const l=new Xe(Qi,ts,t,e);l.layers=this.layers,this.add(l);const c=new Xe(Qi,ts,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===la)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class cu extends He{constructor(t,e,n,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ms,super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $d extends Ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new cu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:En}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new se(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:ni});r.uniforms.tEquirect.value=e;const a=new Te(s,r),o=e.minFilter;return e.minFilter===Ri&&(e.minFilter=En),new qd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Ka=new C,Xd=new C,jd=new kt;class Mi{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ka.subVectors(n,e).cross(Xd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ka),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||jd.getNormalMatrix(t),s=this.coplanarPoint(Ka).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new ws,Cr=new C;class Il{constructor(t=new Mi,e=new Mi,n=new Mi,s=new Mi,r=new Mi,a=new Mi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],v=s[10],m=s[11],p=s[12],y=s[13],x=s[14],_=s[15];if(n[0].setComponents(l-r,f-c,m-d,_-p).normalize(),n[1].setComponents(l+r,f+c,m+d,_+p).normalize(),n[2].setComponents(l+a,f+u,m+g,_+y).normalize(),n[3].setComponents(l-a,f-u,m-g,_-y).normalize(),n[4].setComponents(l-o,f-h,m-v,_-x).normalize(),e===zn)n[5].setComponents(l+o,f+h,m+v,_+x).normalize();else if(e===la)n[5].setComponents(o,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Cr.x=s.normal.x>0?t.max.x:t.min.x,Cr.y=s.normal.y>0?t.max.y:t.min.y,Cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Yd(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],v=h[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const v=h[d];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Ts extends Pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=t/o,f=e/l,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const y=p*f-a;for(let x=0;x<c;x++){const _=x*h-r;g.push(_,-y,0),v.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const x=y+c*p,_=y+c*(p+1),R=y+1+c*(p+1),E=y+1+c*p;d.push(x,_,E),d.push(_,R,E)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.width,t.height,t.widthSegments,t.heightSegments)}}var Jd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zd=`#ifdef USE_ALPHAHASH
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
#endif`,Kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,np=`#ifdef USE_AOMAP
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
#endif`,ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp=`#ifdef USE_BATCHING
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
#endif`,rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cp=`#ifdef USE_IRIDESCENCE
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
#endif`,hp=`#ifdef USE_BUMPMAP
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yp=`#define PI 3.141592653589793
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
} // validated`,xp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mp=`vec3 transformedNormal = objectNormal;
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
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ap=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kp=`#ifdef USE_GRADIENTMAP
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
}`,Op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hp=`uniform bool receiveShadow;
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
#endif`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xp=`PhysicalMaterial material;
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
#endif`,jp=`struct PhysicalMaterial {
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
}`,Yp=`
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
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rm=`#if defined( USE_POINTS_UV )
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
#endif`,am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,um=`#ifdef USE_MORPHTARGETS
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
#endif`,fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_m=`#ifdef USE_NORMALMAP
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
#endif`,ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Um=`float getShadowMask() {
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
}`,Nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fm=`#ifdef USE_SKINNING
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
#endif`,km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Om=`#ifdef USE_SKINNING
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
#endif`,Bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vm=`#ifdef USE_TRANSMISSION
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
#endif`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jm=`uniform sampler2D t2D;
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
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e0=`#include <common>
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
}`,n0=`#if DEPTH_PACKING == 3200
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
}`,i0=`#define DISTANCE
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
}`,s0=`#define DISTANCE
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
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`uniform float scale;
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
}`,l0=`uniform vec3 diffuse;
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
}`,c0=`#include <common>
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
}`,h0=`uniform vec3 diffuse;
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
}`,u0=`#define LAMBERT
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
}`,f0=`#define LAMBERT
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
}`,d0=`#define MATCAP
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
}`,p0=`#define MATCAP
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
}`,m0=`#define NORMAL
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
}`,g0=`#define NORMAL
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
}`,v0=`#define PHONG
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
}`,_0=`#define PHONG
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
}`,y0=`#define STANDARD
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
}`,x0=`#define STANDARD
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
}`,M0=`#define TOON
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
}`,S0=`#define TOON
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
}`,b0=`uniform float size;
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
}`,w0=`uniform vec3 diffuse;
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
}`,T0=`#include <common>
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
}`,E0=`uniform vec3 color;
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
}`,A0=`uniform float rotation;
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
}`,C0=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:Jd,alphahash_pars_fragment:Zd,alphamap_fragment:Kd,alphamap_pars_fragment:Qd,alphatest_fragment:tp,alphatest_pars_fragment:ep,aomap_fragment:np,aomap_pars_fragment:ip,batching_pars_vertex:sp,batching_vertex:rp,begin_vertex:ap,beginnormal_vertex:op,bsdfs:lp,iridescence_fragment:cp,bumpmap_pars_fragment:hp,clipping_planes_fragment:up,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:dp,clipping_planes_vertex:pp,color_fragment:mp,color_pars_fragment:gp,color_pars_vertex:vp,color_vertex:_p,common:yp,cube_uv_reflection_fragment:xp,defaultnormal_vertex:Mp,displacementmap_pars_vertex:Sp,displacementmap_vertex:bp,emissivemap_fragment:wp,emissivemap_pars_fragment:Tp,colorspace_fragment:Ep,colorspace_pars_fragment:Ap,envmap_fragment:Cp,envmap_common_pars_fragment:Rp,envmap_pars_fragment:Pp,envmap_pars_vertex:Lp,envmap_physical_pars_fragment:Gp,envmap_vertex:Ip,fog_vertex:Dp,fog_pars_vertex:Up,fog_fragment:Np,fog_pars_fragment:Fp,gradientmap_pars_fragment:kp,lightmap_pars_fragment:Op,lights_lambert_fragment:Bp,lights_lambert_pars_fragment:zp,lights_pars_begin:Hp,lights_toon_fragment:Vp,lights_toon_pars_fragment:Wp,lights_phong_fragment:qp,lights_phong_pars_fragment:$p,lights_physical_fragment:Xp,lights_physical_pars_fragment:jp,lights_fragment_begin:Yp,lights_fragment_maps:Jp,lights_fragment_end:Zp,logdepthbuf_fragment:Kp,logdepthbuf_pars_fragment:Qp,logdepthbuf_pars_vertex:tm,logdepthbuf_vertex:em,map_fragment:nm,map_pars_fragment:im,map_particle_fragment:sm,map_particle_pars_fragment:rm,metalnessmap_fragment:am,metalnessmap_pars_fragment:om,morphinstance_vertex:lm,morphcolor_vertex:cm,morphnormal_vertex:hm,morphtarget_pars_vertex:um,morphtarget_vertex:fm,normal_fragment_begin:dm,normal_fragment_maps:pm,normal_pars_fragment:mm,normal_pars_vertex:gm,normal_vertex:vm,normalmap_pars_fragment:_m,clearcoat_normal_fragment_begin:ym,clearcoat_normal_fragment_maps:xm,clearcoat_pars_fragment:Mm,iridescence_pars_fragment:Sm,opaque_fragment:bm,packing:wm,premultiplied_alpha_fragment:Tm,project_vertex:Em,dithering_fragment:Am,dithering_pars_fragment:Cm,roughnessmap_fragment:Rm,roughnessmap_pars_fragment:Pm,shadowmap_pars_fragment:Lm,shadowmap_pars_vertex:Im,shadowmap_vertex:Dm,shadowmask_pars_fragment:Um,skinbase_vertex:Nm,skinning_pars_vertex:Fm,skinning_vertex:km,skinnormal_vertex:Om,specularmap_fragment:Bm,specularmap_pars_fragment:zm,tonemapping_fragment:Hm,tonemapping_pars_fragment:Gm,transmission_fragment:Vm,transmission_pars_fragment:Wm,uv_pars_fragment:qm,uv_pars_vertex:$m,uv_vertex:Xm,worldpos_vertex:jm,background_vert:Ym,background_frag:Jm,backgroundCube_vert:Zm,backgroundCube_frag:Km,cube_vert:Qm,cube_frag:t0,depth_vert:e0,depth_frag:n0,distanceRGBA_vert:i0,distanceRGBA_frag:s0,equirect_vert:r0,equirect_frag:a0,linedashed_vert:o0,linedashed_frag:l0,meshbasic_vert:c0,meshbasic_frag:h0,meshlambert_vert:u0,meshlambert_frag:f0,meshmatcap_vert:d0,meshmatcap_frag:p0,meshnormal_vert:m0,meshnormal_frag:g0,meshphong_vert:v0,meshphong_frag:_0,meshphysical_vert:y0,meshphysical_frag:x0,meshtoon_vert:M0,meshtoon_frag:S0,points_vert:b0,points_frag:w0,shadow_vert:T0,shadow_frag:E0,sprite_vert:A0,sprite_frag:C0},nt={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},wn={basic:{uniforms:Ve([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ve([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ve([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ve([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ve([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ve([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ve([nt.points,nt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ve([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ve([nt.common,nt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ve([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ve([nt.sprite,nt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ve([nt.common,nt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ve([nt.lights,nt.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};wn.physical={uniforms:Ve([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Rr={r:0,b:0,g:0},_i=new Mn,R0=new oe;function P0(i,t,e,n,s,r,a){const o=new Et(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function v(y){let x=!1;const _=g(y);_===null?p(o,l):_&&_.isColor&&(p(_,1),x=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){const _=g(x);_&&(_.isCubeTexture||_.mapping===xa)?(u===void 0&&(u=new Te(new se(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:ys(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),_i.copy(x.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(R0.makeRotationFromEuler(_i)),u.material.toneMapped=Kt.getTransfer(_.colorSpace)!==le,(h!==_||f!==_.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,d=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Te(new Ts(2,2),new li({name:"BackgroundMaterial",uniforms:ys(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(_.colorSpace)!==le,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB(Rr,ou(i)),n.buffers.color.setClear(Rr.r,Rr.g,Rr.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:v,addToRenderList:m}}function L0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(S,L,H,z,q){let J=!1;const W=h(z,H,L);r!==W&&(r=W,c(r.object)),J=d(S,z,H,q),J&&g(S,z,H,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,_(S,L,H,z),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,L,H){const z=H.wireframe===!0;let q=n[S.id];q===void 0&&(q={},n[S.id]=q);let J=q[L.id];J===void 0&&(J={},q[L.id]=J);let W=J[z];return W===void 0&&(W=f(l()),J[z]=W),W}function f(S){const L=[],H=[],z=[];for(let q=0;q<e;q++)L[q]=0,H[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:z,object:S,attributes:{},index:null}}function d(S,L,H,z){const q=r.attributes,J=L.attributes;let W=0;const K=H.getAttributes();for(const V in K)if(K[V].location>=0){const dt=q[V];let wt=J[V];if(wt===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(wt=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(wt=S.instanceColor)),dt===void 0||dt.attribute!==wt||wt&&dt.data!==wt.data)return!0;W++}return r.attributesNum!==W||r.index!==z}function g(S,L,H,z){const q={},J=L.attributes;let W=0;const K=H.getAttributes();for(const V in K)if(K[V].location>=0){let dt=J[V];dt===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(dt=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(dt=S.instanceColor));const wt={};wt.attribute=dt,dt&&dt.data&&(wt.data=dt.data),q[V]=wt,W++}r.attributes=q,r.attributesNum=W,r.index=z}function v(){const S=r.newAttributes;for(let L=0,H=S.length;L<H;L++)S[L]=0}function m(S){p(S,0)}function p(S,L){const H=r.newAttributes,z=r.enabledAttributes,q=r.attributeDivisors;H[S]=1,z[S]===0&&(i.enableVertexAttribArray(S),z[S]=1),q[S]!==L&&(i.vertexAttribDivisor(S,L),q[S]=L)}function y(){const S=r.newAttributes,L=r.enabledAttributes;for(let H=0,z=L.length;H<z;H++)L[H]!==S[H]&&(i.disableVertexAttribArray(H),L[H]=0)}function x(S,L,H,z,q,J,W){W===!0?i.vertexAttribIPointer(S,L,H,q,J):i.vertexAttribPointer(S,L,H,z,q,J)}function _(S,L,H,z){v();const q=z.attributes,J=H.getAttributes(),W=L.defaultAttributeValues;for(const K in J){const V=J[K];if(V.location>=0){let ot=q[K];if(ot===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(ot=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(ot=S.instanceColor)),ot!==void 0){const dt=ot.normalized,wt=ot.itemSize,Gt=t.get(ot);if(Gt===void 0)continue;const fe=Gt.buffer,X=Gt.type,et=Gt.bytesPerElement,Mt=X===i.INT||X===i.UNSIGNED_INT||ot.gpuType===Tl;if(ot.isInterleavedBufferAttribute){const lt=ot.data,Pt=lt.stride,Ut=ot.offset;if(lt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<V.locationSize;Vt++)p(V.location+Vt,lt.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Vt=0;Vt<V.locationSize;Vt++)m(V.location+Vt);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let Vt=0;Vt<V.locationSize;Vt++)x(V.location+Vt,wt/V.locationSize,X,dt,Pt*et,(Ut+wt/V.locationSize*Vt)*et,Mt)}else{if(ot.isInstancedBufferAttribute){for(let lt=0;lt<V.locationSize;lt++)p(V.location+lt,ot.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let lt=0;lt<V.locationSize;lt++)m(V.location+lt);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let lt=0;lt<V.locationSize;lt++)x(V.location+lt,wt/V.locationSize,X,dt,wt*et,wt/V.locationSize*lt*et,Mt)}}else if(W!==void 0){const dt=W[K];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(V.location,dt);break;case 3:i.vertexAttrib3fv(V.location,dt);break;case 4:i.vertexAttrib4fv(V.location,dt);break;default:i.vertexAttrib1fv(V.location,dt)}}}}y()}function R(){P();for(const S in n){const L=n[S];for(const H in L){const z=L[H];for(const q in z)u(z[q].object),delete z[q];delete L[H]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const H in L){const z=L[H];for(const q in z)u(z[q].object),delete z[q];delete L[H]}delete n[S.id]}function A(S){for(const L in n){const H=n[L];if(H[S.id]===void 0)continue;const z=H[S.id];for(const q in z)u(z[q].object),delete z[q];delete H[S.id]}}function P(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function I0(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function D0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==yn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===nr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Wn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==An&&!P)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:R,maxSamples:E}}function U0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Mi,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,x=y*4;let _=p.clippingState||null;l.value=_,_=u(g,f,x,d);for(let R=0;R!==x;++R)_[R]=e[R];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,_=d;x!==v;++x,_+=4)a.copy(h[x]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function N0(i){let t=new WeakMap;function e(a,o){return o===Do?a.mapping=ms:o===Uo&&(a.mapping=gs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Do||o===Uo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new $d(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class uu extends lu{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const cs=4,Pc=[.125,.215,.35,.446,.526,.582],Ti=20,Qa=new uu,Lc=new Et;let to=null,eo=0,no=0,io=!1;const Si=(1+Math.sqrt(5))/2,es=1/Si,Ic=[new C(-Si,es,0),new C(Si,es,0),new C(-es,0,Si),new C(es,0,Si),new C(0,Si,-es),new C(0,Si,es),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Dc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){to=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel(),io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(to,eo,no),this._renderer.xr.enabled=io,t.scissorTest=!1,Pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ms||t.mapping===gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),to=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel(),io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:nr,format:yn,colorSpace:Ss,depthBuffer:!1},s=Uc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=F0(r)),this._blurMaterial=k0(r,t,e)}return s}_compileMaterial(t){const e=new Te(this._lodPlanes[0],t);this._renderer.compile(e,Qa)}_sceneToCubeUV(t,e,n,s){const o=new Xe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Lc),u.toneMapping=ii,u.autoClear=!1;const d=new xn({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new Te(new se,d);let v=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,v=!0):(d.color.copy(Lc),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;Pr(s,y*x,p>2?x:0,x,x),u.setRenderTarget(s),v&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ms||t.mapping===gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Te(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Pr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Qa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ic[(s-r-1)%Ic.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Te(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ti-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):Ti;m>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const p=[];let y=0;for(let A=0;A<Ti;++A){const P=A/v,w=Math.exp(-P*P/2);p.push(w),A===0?y+=w:A<m&&(y+=2*w)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const _=this._sizeLods[s],R=3*_*(s>x-cs?s-x+cs:0),E=4*(this._cubeSize-_);Pr(e,R,E,3*_,2*_),l.setRenderTarget(e),l.render(h,Qa)}}function F0(i){const t=[],e=[],n=[];let s=i;const r=i-cs+1+Pc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-cs?l=Pc[a-i+cs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*d),x=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let E=0;E<d;E++){const A=E%3*2/3-1,P=E>2?0:-1,w=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];y.set(w,v*g*E),x.set(f,m*g*E);const S=[E,E,E,E,E,E];_.set(S,p*g*E)}const R=new Pe;R.setAttribute("position",new an(y,v)),R.setAttribute("uv",new an(x,m)),R.setAttribute("faceIndex",new an(_,p)),t.push(R),s>cs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Uc(i,t,e){const n=new Ui(i,t,e);return n.texture.mapping=xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function k0(i,t,e){const n=new Float32Array(Ti),s=new C(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Nc(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Fc(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Dl(){return`

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
	`}function O0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Do||l===Uo,u=l===ms||l===gs;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Dc(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Dc(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function B0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Gs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function z0(i,t,e,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const y=d.array;v=d.version;for(let x=0,_=y.length;x<_;x+=3){const R=y[x+0],E=y[x+1],A=y[x+2];f.push(R,E,E,A,A,R)}}else if(g!==void 0){const y=g.array;v=g.version;for(let x=0,_=y.length/3-1;x<_;x+=3){const R=x+0,E=x+1,A=x+2;f.push(R,E,E,A,A,R)}}else return;const m=new(Qh(f)?au:ru)(f,1);m.version=v;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function H0(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*a,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function h(f,d,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*v[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function G0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function V0(i,t,e){const n=new WeakMap,s=new he;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let S=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let R=o.attributes.position.count*_,E=1;R>t.maxTextureSize&&(E=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const A=new Float32Array(R*E*4*h),P=new eu(A,R,E,h);P.type=An,P.needsUpdate=!0;const w=_*4;for(let L=0;L<h;L++){const H=p[L],z=y[L],q=x[L],J=R*E*4*L;for(let W=0;W<H.count;W++){const K=W*w;g===!0&&(s.fromBufferAttribute(H,W),A[J+K+0]=s.x,A[J+K+1]=s.y,A[J+K+2]=s.z,A[J+K+3]=0),v===!0&&(s.fromBufferAttribute(z,W),A[J+K+4]=s.x,A[J+K+5]=s.y,A[J+K+6]=s.z,A[J+K+7]=0),m===!0&&(s.fromBufferAttribute(q,W),A[J+K+8]=s.x,A[J+K+9]=s.y,A[J+K+10]=s.z,A[J+K+11]=q.itemSize===4?s.w:1)}}f={count:h,texture:P,size:new it(R,E)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function W0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class fu extends He{constructor(t,e,n,s,r,a,o,l,c,u=fs){if(u!==fs&&u!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===fs&&(n=Di),n===void 0&&u===_s&&(n=vs),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ye,this.minFilter=l!==void 0?l:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const du=new He,kc=new fu(1,1),pu=new eu,mu=new Pd,gu=new cu,Oc=[],Bc=[],zc=new Float32Array(16),Hc=new Float32Array(9),Gc=new Float32Array(4);function Es(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Oc[s];if(r===void 0&&(r=new Float32Array(s),Oc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ba(i,t){let e=Bc[t];e===void 0&&(e=new Int32Array(t),Bc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function q0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function X0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function j0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function Y0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;Gc.set(n),i.uniformMatrix2fv(this.addr,!1,Gc),Ie(e,n)}}function J0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;Hc.set(n),i.uniformMatrix3fv(this.addr,!1,Hc),Ie(e,n)}}function Z0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;zc.set(n),i.uniformMatrix4fv(this.addr,!1,zc),Ie(e,n)}}function K0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function ng(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function ag(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kc.compareFunction=Zh,r=kc):r=du,e.setTexture2D(t||r,s)}function og(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||mu,s)}function lg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||gu,s)}function cg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||pu,s)}function hg(i){switch(i){case 5126:return q0;case 35664:return $0;case 35665:return X0;case 35666:return j0;case 35674:return Y0;case 35675:return J0;case 35676:return Z0;case 5124:case 35670:return K0;case 35667:case 35671:return Q0;case 35668:case 35672:return tg;case 35669:case 35673:return eg;case 5125:return ng;case 36294:return ig;case 36295:return sg;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return cg}}function ug(i,t){i.uniform1fv(this.addr,t)}function fg(i,t){const e=Es(t,this.size,2);i.uniform2fv(this.addr,e)}function dg(i,t){const e=Es(t,this.size,3);i.uniform3fv(this.addr,e)}function pg(i,t){const e=Es(t,this.size,4);i.uniform4fv(this.addr,e)}function mg(i,t){const e=Es(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function gg(i,t){const e=Es(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function vg(i,t){const e=Es(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _g(i,t){i.uniform1iv(this.addr,t)}function yg(i,t){i.uniform2iv(this.addr,t)}function xg(i,t){i.uniform3iv(this.addr,t)}function Mg(i,t){i.uniform4iv(this.addr,t)}function Sg(i,t){i.uniform1uiv(this.addr,t)}function bg(i,t){i.uniform2uiv(this.addr,t)}function wg(i,t){i.uniform3uiv(this.addr,t)}function Tg(i,t){i.uniform4uiv(this.addr,t)}function Eg(i,t,e){const n=this.cache,s=t.length,r=ba(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||du,r[a])}function Ag(i,t,e){const n=this.cache,s=t.length,r=ba(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||mu,r[a])}function Cg(i,t,e){const n=this.cache,s=t.length,r=ba(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||gu,r[a])}function Rg(i,t,e){const n=this.cache,s=t.length,r=ba(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||pu,r[a])}function Pg(i){switch(i){case 5126:return ug;case 35664:return fg;case 35665:return dg;case 35666:return pg;case 35674:return mg;case 35675:return gg;case 35676:return vg;case 5124:case 35670:return _g;case 35667:case 35671:return yg;case 35668:case 35672:return xg;case 35669:case 35673:return Mg;case 5125:return Sg;case 36294:return bg;case 36295:return wg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Rg}}class Lg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=hg(e.type)}}class Ig{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pg(e.type)}}class Dg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const so=/(\w+)(\])?(\[|\.)?/g;function Vc(i,t){i.seq.push(t),i.map[t.id]=t}function Ug(i,t,e){const n=i.name,s=n.length;for(so.lastIndex=0;;){const r=so.exec(n),a=so.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Vc(e,c===void 0?new Lg(o,i,t):new Ig(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new Dg(o),Vc(e,h)),e=h}}}class Zr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Ug(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Wc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Ng=37297;let Fg=0;function kg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const qc=new kt;function Og(i){Kt._getMatrix(qc,Kt.workingColorSpace,i);const t=`mat3( ${qc.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case Sa:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function $c(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+kg(i.getShaderSource(t),a)}else return s}function Bg(i,t){const e=Og(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function zg(i,t){let e;switch(t){case Gf:e="Linear";break;case Vf:e="Reinhard";break;case Wf:e="Cineon";break;case qf:e="ACESFilmic";break;case Xf:e="AgX";break;case jf:e="Neutral";break;case $f:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Lr=new C;function Hg(){Kt.getLuminanceCoefficients(Lr);const i=Lr.x.toFixed(4),t=Lr.y.toFixed(4),e=Lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function Vg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Wg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Vs(i){return i!==""}function Xc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function cl(i){return i.replace(qg,Xg)}const $g=new Map;function Xg(i,t){let e=Bt[t];if(e===void 0){const n=$g.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return cl(e)}const jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yc(i){return i.replace(jg,Yg)}function Yg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Jg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===kh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Oh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function Zg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ms:case gs:t="ENVMAP_TYPE_CUBE";break;case xa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Kg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case gs:t="ENVMAP_MODE_REFRACTION";break}return t}function Qg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bh:t="ENVMAP_BLENDING_MULTIPLY";break;case zf:t="ENVMAP_BLENDING_MIX";break;case Hf:t="ENVMAP_BLENDING_ADD";break}return t}function tv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ev(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Jg(e),c=Zg(e),u=Kg(e),h=Qg(e),f=tv(e),d=Gg(e),g=Vg(r),v=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vs).join(`
`),p.length>0&&(p+=`
`)):(m=[Jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),p=[Jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?Bt.tonemapping_pars_fragment:"",e.toneMapping!==ii?zg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Bg("linearToOutputTexel",e.outputColorSpace),Hg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vs).join(`
`)),a=cl(a),a=Xc(a,e),a=jc(a,e),o=cl(o),o=Xc(o,e),o=jc(o,e),a=Yc(a),o=Yc(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+a,_=y+p+o,R=Wc(s,s.VERTEX_SHADER,x),E=Wc(s,s.FRAGMENT_SHADER,_);s.attachShader(v,R),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(L){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(v).trim(),z=s.getShaderInfoLog(R).trim(),q=s.getShaderInfoLog(E).trim();let J=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,E);else{const K=$c(s,R,"vertex"),V=$c(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+K+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||q==="")&&(W=!1);W&&(L.diagnostics={runnable:J,programLog:H,vertexShader:{log:z,prefix:m},fragmentShader:{log:q,prefix:p}})}s.deleteShader(R),s.deleteShader(E),P=new Zr(s,v),w=Wg(s,v)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,Ng)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Fg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=E,this}let nv=0;class iv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new sv(t),e.set(t,n)),n}}class sv{constructor(t){this.id=nv++,this.code=t,this.usedTimes=0}}function rv(i,t,e,n,s,r,a){const o=new iu,l=new iv,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,S,L,H,z){const q=H.fog,J=z.geometry,W=w.isMeshStandardMaterial?H.environment:null,K=(w.isMeshStandardMaterial?e:t).get(w.envMap||W),V=K&&K.mapping===xa?K.image.height:null,ot=g[w.type];w.precision!==null&&(d=s.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const dt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,wt=dt!==void 0?dt.length:0;let Gt=0;J.morphAttributes.position!==void 0&&(Gt=1),J.morphAttributes.normal!==void 0&&(Gt=2),J.morphAttributes.color!==void 0&&(Gt=3);let fe,X,et,Mt;if(ot){const re=wn[ot];fe=re.vertexShader,X=re.fragmentShader}else fe=w.vertexShader,X=w.fragmentShader,l.update(w),et=l.getVertexShaderID(w),Mt=l.getFragmentShaderID(w);const lt=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),Ut=z.isInstancedMesh===!0,Vt=z.isBatchedMesh===!0,xe=!!w.map,Jt=!!w.matcap,Ee=!!K,N=!!w.aoMap,Qe=!!w.lightMap,$t=!!w.bumpMap,Xt=!!w.normalMap,At=!!w.displacementMap,ge=!!w.emissiveMap,Tt=!!w.metalnessMap,T=!!w.roughnessMap,M=w.anisotropy>0,F=w.clearcoat>0,j=w.dispersion>0,Z=w.iridescence>0,$=w.sheen>0,St=w.transmission>0,ct=M&&!!w.anisotropyMap,pt=F&&!!w.clearcoatMap,Zt=F&&!!w.clearcoatNormalMap,Q=F&&!!w.clearcoatRoughnessMap,mt=Z&&!!w.iridescenceMap,Ct=Z&&!!w.iridescenceThicknessMap,It=$&&!!w.sheenColorMap,gt=$&&!!w.sheenRoughnessMap,jt=!!w.specularMap,Ot=!!w.specularColorMap,de=!!w.specularIntensityMap,I=St&&!!w.transmissionMap,at=St&&!!w.thicknessMap,G=!!w.gradientMap,Y=!!w.alphaMap,ft=w.alphaTest>0,ht=!!w.alphaHash,Nt=!!w.extensions;let we=ii;w.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(we=i.toneMapping);const ke={shaderID:ot,shaderType:w.type,shaderName:w.name,vertexShader:fe,fragmentShader:X,defines:w.defines,customVertexShaderID:et,customFragmentShaderID:Mt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Vt,batchingColor:Vt&&z._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&z.instanceColor!==null,instancingMorph:Ut&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Ss,alphaToCoverage:!!w.alphaToCoverage,map:xe,matcap:Jt,envMap:Ee,envMapMode:Ee&&K.mapping,envMapCubeUVHeight:V,aoMap:N,lightMap:Qe,bumpMap:$t,normalMap:Xt,displacementMap:f&&At,emissiveMap:ge,normalMapObjectSpace:Xt&&w.normalMapType===Kf,normalMapTangentSpace:Xt&&w.normalMapType===Jh,metalnessMap:Tt,roughnessMap:T,anisotropy:M,anisotropyMap:ct,clearcoat:F,clearcoatMap:pt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:Q,dispersion:j,iridescence:Z,iridescenceMap:mt,iridescenceThicknessMap:Ct,sheen:$,sheenColorMap:It,sheenRoughnessMap:gt,specularMap:jt,specularColorMap:Ot,specularIntensityMap:de,transmission:St,transmissionMap:I,thicknessMap:at,gradientMap:G,opaque:w.transparent===!1&&w.blending===us&&w.alphaToCoverage===!1,alphaMap:Y,alphaTest:ft,alphaHash:ht,combine:w.combine,mapUv:xe&&v(w.map.channel),aoMapUv:N&&v(w.aoMap.channel),lightMapUv:Qe&&v(w.lightMap.channel),bumpMapUv:$t&&v(w.bumpMap.channel),normalMapUv:Xt&&v(w.normalMap.channel),displacementMapUv:At&&v(w.displacementMap.channel),emissiveMapUv:ge&&v(w.emissiveMap.channel),metalnessMapUv:Tt&&v(w.metalnessMap.channel),roughnessMapUv:T&&v(w.roughnessMap.channel),anisotropyMapUv:ct&&v(w.anisotropyMap.channel),clearcoatMapUv:pt&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:It&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:gt&&v(w.sheenRoughnessMap.channel),specularMapUv:jt&&v(w.specularMap.channel),specularColorMapUv:Ot&&v(w.specularColorMap.channel),specularIntensityMapUv:de&&v(w.specularIntensityMap.channel),transmissionMapUv:I&&v(w.transmissionMap.channel),thicknessMapUv:at&&v(w.thicknessMap.channel),alphaMapUv:Y&&v(w.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Xt||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!J.attributes.uv&&(xe||Y),fog:!!q,useFog:w.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Pt,skinning:z.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Gt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:xe&&w.map.isVideoTexture===!0&&Kt.getTransfer(w.map.colorSpace)===le,decodeVideoTextureEmissive:ge&&w.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(w.emissiveMap.colorSpace)===le,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Me,flipSided:w.side===je,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Nt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&w.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function p(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)S.push(L),S.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(y(S,w),x(S,w),S.push(i.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function y(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function x(w,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),w.push(o.mask)}function _(w){const S=g[w.type];let L;if(S){const H=wn[S];L=Gd.clone(H.uniforms)}else L=w.uniforms;return L}function R(w,S){let L;for(let H=0,z=u.length;H<z;H++){const q=u[H];if(q.cacheKey===S){L=q,++L.usedTimes;break}}return L===void 0&&(L=new ev(i,S,w,r),u.push(L)),L}function E(w){if(--w.usedTimes===0){const S=u.indexOf(w);u[S]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:R,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:P}}function av(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ov(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Zc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Kc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,f,d,g,v,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),t++,p}function o(h,f,d,g,v,m){const p=a(h,f,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(h,f,d,g,v,m){const p=a(h,f,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||ov),n.length>1&&n.sort(f||Zc),s.length>1&&s.sort(f||Zc)}function u(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function lv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Kc,i.set(n,[a])):s>=r.length?(a=new Kc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function cv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Et};break;case"SpotLight":e={position:new C,direction:new C,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function hv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let uv=0;function fv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function dv(i){const t=new cv,e=hv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const s=new C,r=new oe,a=new oe;function o(c){let u=0,h=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,y=0,x=0,_=0,R=0,E=0,A=0;c.sort(fv);for(let w=0,S=c.length;w<S;w++){const L=c[w],H=L.color,z=L.intensity,q=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=H.r*z,h+=H.g*z,f+=H.b*z;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],z);A++}else if(L.isDirectionalLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,V=e.get(L);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=J,n.directionalShadowMatrix[d]=L.shadow.matrix,y++}n.directional[d]=W,d++}else if(L.isSpotLight){const W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(H).multiplyScalar(z),W.distance=q,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[v]=W;const K=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,K.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[v]=K.matrix,L.castShadow){const V=e.get(L);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=J,_++}v++}else if(L.isRectAreaLight){const W=t.get(L);W.color.copy(H).multiplyScalar(z),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=W,m++}else if(L.isPointLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const K=L.shadow,V=e.get(L);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=L.shadow.matrix,x++}n.point[g]=W,g++}else if(L.isHemisphereLight){const W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(z),W.groundColor.copy(L.groundColor).multiplyScalar(z),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==x||P.numSpotShadows!==_||P.numSpotMaps!==R||P.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+R-E,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,P.directionalLength=d,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=x,P.numSpotShadows=_,P.numSpotMaps=R,P.numLightProbes=A,n.version=uv++)}function l(c,u){let h=0,f=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const x=c[p];if(x.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(x.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Qc(i){const t=new dv(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function pv(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Qc(i),t.set(s,[o])):r>=a.length?(o=new Qc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class mv extends Oi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gv extends Oi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_v=`uniform sampler2D shadow_pass;
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
}`;function yv(i,t,e){let n=new Il;const s=new it,r=new it,a=new he,o=new mv({depthPacking:Zf}),l=new gv,c={},u=e.maxTextureSize,h={[oi]:je,[je]:oi,[Me]:Me},f=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:vv,fragmentShader:_v}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Pe;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Te(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kh;let p=this.type;this.render=function(E,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const w=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),H=i.state;H.setBlending(ni),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=p!==Bn&&this.type===Bn,q=p===Bn&&this.type!==Bn;for(let J=0,W=E.length;J<W;J++){const K=E[J],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ot=V.getFrameExtents();if(s.multiply(ot),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ot.x),s.x=r.x*ot.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ot.y),s.y=r.y*ot.y,V.mapSize.y=r.y)),V.map===null||z===!0||q===!0){const wt=this.type!==Bn?{minFilter:Ye,magFilter:Ye}:{};V.map!==null&&V.map.dispose(),V.map=new Ui(s.x,s.y,wt),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const dt=V.getViewportCount();for(let wt=0;wt<dt;wt++){const Gt=V.getViewport(wt);a.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),H.viewport(a),V.updateMatrices(K,wt),n=V.getFrustum(),_(A,P,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===Bn&&y(V,P),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,S,L)};function y(E,A){const P=t.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ui(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,P,f,v,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,P,d,v,null)}function x(E,A,P,w){let S=null;const L=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)S=L;else if(S=P.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=S.uuid,z=A.uuid;let q=c[H];q===void 0&&(q={},c[H]=q);let J=q[z];J===void 0&&(J=S.clone(),q[z]=J,A.addEventListener("dispose",R)),S=J}if(S.visible=A.visible,S.wireframe=A.wireframe,w===Bn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=i.properties.get(S);H.light=P}return S}function _(E,A,P,w,S){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Bn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const z=t.update(E),q=E.material;if(Array.isArray(q)){const J=z.groups;for(let W=0,K=J.length;W<K;W++){const V=J[W],ot=q[V.materialIndex];if(ot&&ot.visible){const dt=x(E,ot,w,S);E.onBeforeShadow(i,E,A,P,z,dt,V),i.renderBufferDirect(P,null,z,dt,E,V),E.onAfterShadow(i,E,A,P,z,dt,V)}}}else if(q.visible){const J=x(E,q,w,S);E.onBeforeShadow(i,E,A,P,z,J,null),i.renderBufferDirect(P,null,z,J,E,null),E.onAfterShadow(i,E,A,P,z,J,null)}}const H=E.children;for(let z=0,q=H.length;z<q;z++)_(H[z],A,P,w,S)}function R(E){E.target.removeEventListener("dispose",R);for(const P in c){const w=c[P],S=E.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const xv={[Eo]:Ao,[Co]:Lo,[Ro]:Io,[ps]:Po,[Ao]:Eo,[Lo]:Co,[Io]:Ro,[Po]:ps};function Mv(i,t){function e(){let I=!1;const at=new he;let G=null;const Y=new he(0,0,0,0);return{setMask:function(ft){G!==ft&&!I&&(i.colorMask(ft,ft,ft,ft),G=ft)},setLocked:function(ft){I=ft},setClear:function(ft,ht,Nt,we,ke){ke===!0&&(ft*=we,ht*=we,Nt*=we),at.set(ft,ht,Nt,we),Y.equals(at)===!1&&(i.clearColor(ft,ht,Nt,we),Y.copy(at))},reset:function(){I=!1,G=null,Y.set(-1,0,0,0)}}}function n(){let I=!1,at=!1,G=null,Y=null,ft=null;return{setReversed:function(ht){if(at!==ht){const Nt=t.get("EXT_clip_control");at?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const we=ft;ft=null,this.setClear(we)}at=ht},getReversed:function(){return at},setTest:function(ht){ht?lt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(ht){G!==ht&&!I&&(i.depthMask(ht),G=ht)},setFunc:function(ht){if(at&&(ht=xv[ht]),Y!==ht){switch(ht){case Eo:i.depthFunc(i.NEVER);break;case Ao:i.depthFunc(i.ALWAYS);break;case Co:i.depthFunc(i.LESS);break;case ps:i.depthFunc(i.LEQUAL);break;case Ro:i.depthFunc(i.EQUAL);break;case Po:i.depthFunc(i.GEQUAL);break;case Lo:i.depthFunc(i.GREATER);break;case Io:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=ht}},setLocked:function(ht){I=ht},setClear:function(ht){ft!==ht&&(at&&(ht=1-ht),i.clearDepth(ht),ft=ht)},reset:function(){I=!1,G=null,Y=null,ft=null,at=!1}}}function s(){let I=!1,at=null,G=null,Y=null,ft=null,ht=null,Nt=null,we=null,ke=null;return{setTest:function(re){I||(re?lt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(re){at!==re&&!I&&(i.stencilMask(re),at=re)},setFunc:function(re,un,In){(G!==re||Y!==un||ft!==In)&&(i.stencilFunc(re,un,In),G=re,Y=un,ft=In)},setOp:function(re,un,In){(ht!==re||Nt!==un||we!==In)&&(i.stencilOp(re,un,In),ht=re,Nt=un,we=In)},setLocked:function(re){I=re},setClear:function(re){ke!==re&&(i.clearStencil(re),ke=re)},reset:function(){I=!1,at=null,G=null,Y=null,ft=null,ht=null,Nt=null,we=null,ke=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,y=null,x=null,_=null,R=null,E=null,A=new Et(0,0,0),P=0,w=!1,S=null,L=null,H=null,z=null,q=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,K=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=K>=2);let ot=null,dt={};const wt=i.getParameter(i.SCISSOR_BOX),Gt=i.getParameter(i.VIEWPORT),fe=new he().fromArray(wt),X=new he().fromArray(Gt);function et(I,at,G,Y){const ft=new Uint8Array(4),ht=i.createTexture();i.bindTexture(I,ht),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<G;Nt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,Y,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(at+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return ht}const Mt={};Mt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),Mt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Mt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(i.DEPTH_TEST),a.setFunc(ps),$t(!1),Xt(ic),lt(i.CULL_FACE),N(ni);function lt(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function Pt(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function Ut(I,at){return h[I]!==at?(i.bindFramebuffer(I,at),h[I]=at,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=at),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=at),!0):!1}function Vt(I,at){let G=d,Y=!1;if(I){G=f.get(at),G===void 0&&(G=[],f.set(at,G));const ft=I.textures;if(G.length!==ft.length||G[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Nt=ft.length;ht<Nt;ht++)G[ht]=i.COLOR_ATTACHMENT0+ht;G.length=ft.length,Y=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,Y=!0);Y&&i.drawBuffers(G)}function xe(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Jt={[wi]:i.FUNC_ADD,[bf]:i.FUNC_SUBTRACT,[wf]:i.FUNC_REVERSE_SUBTRACT};Jt[Tf]=i.MIN,Jt[Ef]=i.MAX;const Ee={[Af]:i.ZERO,[Cf]:i.ONE,[Rf]:i.SRC_COLOR,[wo]:i.SRC_ALPHA,[Nf]:i.SRC_ALPHA_SATURATE,[Df]:i.DST_COLOR,[Lf]:i.DST_ALPHA,[Pf]:i.ONE_MINUS_SRC_COLOR,[To]:i.ONE_MINUS_SRC_ALPHA,[Uf]:i.ONE_MINUS_DST_COLOR,[If]:i.ONE_MINUS_DST_ALPHA,[Ff]:i.CONSTANT_COLOR,[kf]:i.ONE_MINUS_CONSTANT_COLOR,[Of]:i.CONSTANT_ALPHA,[Bf]:i.ONE_MINUS_CONSTANT_ALPHA};function N(I,at,G,Y,ft,ht,Nt,we,ke,re){if(I===ni){v===!0&&(Pt(i.BLEND),v=!1);return}if(v===!1&&(lt(i.BLEND),v=!0),I!==Sf){if(I!==m||re!==w){if((p!==wi||_!==wi)&&(i.blendEquation(i.FUNC_ADD),p=wi,_=wi),re)switch(I){case us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sc:i.blendFunc(i.ONE,i.ONE);break;case rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ac:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ac:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,x=null,R=null,E=null,A.set(0,0,0),P=0,m=I,w=re}return}ft=ft||at,ht=ht||G,Nt=Nt||Y,(at!==p||ft!==_)&&(i.blendEquationSeparate(Jt[at],Jt[ft]),p=at,_=ft),(G!==y||Y!==x||ht!==R||Nt!==E)&&(i.blendFuncSeparate(Ee[G],Ee[Y],Ee[ht],Ee[Nt]),y=G,x=Y,R=ht,E=Nt),(we.equals(A)===!1||ke!==P)&&(i.blendColor(we.r,we.g,we.b,ke),A.copy(we),P=ke),m=I,w=!1}function Qe(I,at){I.side===Me?Pt(i.CULL_FACE):lt(i.CULL_FACE);let G=I.side===je;at&&(G=!G),$t(G),I.blending===us&&I.transparent===!1?N(ni):N(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const Y=I.stencilWrite;o.setTest(Y),Y&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ge(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function $t(I){S!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),S=I)}function Xt(I){I!==xf?(lt(i.CULL_FACE),I!==L&&(I===ic?i.cullFace(i.BACK):I===Mf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),L=I}function At(I){I!==H&&(W&&i.lineWidth(I),H=I)}function ge(I,at,G){I?(lt(i.POLYGON_OFFSET_FILL),(z!==at||q!==G)&&(i.polygonOffset(at,G),z=at,q=G)):Pt(i.POLYGON_OFFSET_FILL)}function Tt(I){I?lt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function T(I){I===void 0&&(I=i.TEXTURE0+J-1),ot!==I&&(i.activeTexture(I),ot=I)}function M(I,at,G){G===void 0&&(ot===null?G=i.TEXTURE0+J-1:G=ot);let Y=dt[G];Y===void 0&&(Y={type:void 0,texture:void 0},dt[G]=Y),(Y.type!==I||Y.texture!==at)&&(ot!==G&&(i.activeTexture(G),ot=G),i.bindTexture(I,at||Mt[I]),Y.type=I,Y.texture=at)}function F(){const I=dt[ot];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Zt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function It(I){fe.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),fe.copy(I))}function gt(I){X.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),X.copy(I))}function jt(I,at){let G=c.get(at);G===void 0&&(G=new WeakMap,c.set(at,G));let Y=G.get(I);Y===void 0&&(Y=i.getUniformBlockIndex(at,I.name),G.set(I,Y))}function Ot(I,at){const Y=c.get(at).get(I);l.get(at)!==Y&&(i.uniformBlockBinding(at,Y,I.__bindingPointIndex),l.set(at,Y))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ot=null,dt={},h={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,y=null,x=null,_=null,R=null,E=null,A=new Et(0,0,0),P=0,w=!1,S=null,L=null,H=null,z=null,q=null,fe.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:Pt,bindFramebuffer:Ut,drawBuffers:Vt,useProgram:xe,setBlending:N,setMaterial:Qe,setFlipSided:$t,setCullFace:Xt,setLineWidth:At,setPolygonOffset:ge,setScissorTest:Tt,activeTexture:T,bindTexture:M,unbindTexture:F,compressedTexImage2D:j,compressedTexImage3D:Z,texImage2D:mt,texImage3D:Ct,updateUBOMapping:jt,uniformBlockBinding:Ot,texStorage2D:Zt,texStorage3D:Q,texSubImage2D:$,texSubImage3D:St,compressedTexSubImage2D:ct,compressedTexSubImage3D:pt,scissor:It,viewport:gt,reset:de}}function th(i,t,e,n){const s=Sv(n);switch(e){case Wh:return i*t;case $h:return i*t;case Xh:return i*t*2;case Ma:return i*t/s.components*s.byteLength;case Cl:return i*t/s.components*s.byteLength;case jh:return i*t*2/s.components*s.byteLength;case Rl:return i*t*2/s.components*s.byteLength;case qh:return i*t*3/s.components*s.byteLength;case yn:return i*t*4/s.components*s.byteLength;case Pl:return i*t*4/s.components*s.byteLength;case $r:case Xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jr:case Yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ko:case Bo:return Math.max(i,16)*Math.max(t,8)/4;case Fo:case Oo:return Math.max(i,8)*Math.max(t,8)/2;case zo:case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case qo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $o:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case jo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jr:case il:case sl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Yh:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case al:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sv(i){switch(i){case Wn:case Hh:return{byteLength:1,components:1};case Zs:case Gh:case nr:return{byteLength:2,components:1};case El:case Al:return{byteLength:2,components:4};case Di:case Tl:case An:return{byteLength:4,components:1};case Vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function bv(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return d?new OffscreenCanvas(T,M):ca("canvas")}function v(T,M,F){let j=1;const Z=Tt(T);if((Z.width>F||Z.height>F)&&(j=F/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(j*Z.width),St=Math.floor(j*Z.height);h===void 0&&(h=g($,St));const ct=M?g($,St):h;return ct.width=$,ct.height=St,ct.getContext("2d").drawImage(T,0,0,$,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+$+"x"+St+")."),ct}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(T,M,F,j,Z=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=M;if(M===i.RED&&(F===i.FLOAT&&($=i.R32F),F===i.HALF_FLOAT&&($=i.R16F),F===i.UNSIGNED_BYTE&&($=i.R8)),M===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.R8UI),F===i.UNSIGNED_SHORT&&($=i.R16UI),F===i.UNSIGNED_INT&&($=i.R32UI),F===i.BYTE&&($=i.R8I),F===i.SHORT&&($=i.R16I),F===i.INT&&($=i.R32I)),M===i.RG&&(F===i.FLOAT&&($=i.RG32F),F===i.HALF_FLOAT&&($=i.RG16F),F===i.UNSIGNED_BYTE&&($=i.RG8)),M===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RG8UI),F===i.UNSIGNED_SHORT&&($=i.RG16UI),F===i.UNSIGNED_INT&&($=i.RG32UI),F===i.BYTE&&($=i.RG8I),F===i.SHORT&&($=i.RG16I),F===i.INT&&($=i.RG32I)),M===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGB8UI),F===i.UNSIGNED_SHORT&&($=i.RGB16UI),F===i.UNSIGNED_INT&&($=i.RGB32UI),F===i.BYTE&&($=i.RGB8I),F===i.SHORT&&($=i.RGB16I),F===i.INT&&($=i.RGB32I)),M===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGBA8UI),F===i.UNSIGNED_SHORT&&($=i.RGBA16UI),F===i.UNSIGNED_INT&&($=i.RGBA32UI),F===i.BYTE&&($=i.RGBA8I),F===i.SHORT&&($=i.RGBA16I),F===i.INT&&($=i.RGBA32I)),M===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),M===i.RGBA){const St=Z?Sa:Kt.getTransfer(j);F===i.FLOAT&&($=i.RGBA32F),F===i.HALF_FLOAT&&($=i.RGBA16F),F===i.UNSIGNED_BYTE&&($=St===le?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(T,M){let F;return T?M===null||M===Di||M===vs?F=i.DEPTH24_STENCIL8:M===An?F=i.DEPTH32F_STENCIL8:M===Zs&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Di||M===vs?F=i.DEPTH_COMPONENT24:M===An?F=i.DEPTH_COMPONENT32F:M===Zs&&(F=i.DEPTH_COMPONENT16),F}function R(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ye&&T.minFilter!==En?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function E(T){const M=T.target;M.removeEventListener("dispose",E),P(M),M.isVideoTexture&&u.delete(M)}function A(T){const M=T.target;M.removeEventListener("dispose",A),S(M)}function P(T){const M=n.get(T);if(M.__webglInit===void 0)return;const F=T.source,j=f.get(F);if(j){const Z=j[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&w(T),Object.keys(j).length===0&&f.delete(F)}n.remove(T)}function w(T){const M=n.get(T);i.deleteTexture(M.__webglTexture);const F=T.source,j=f.get(F);delete j[M.__cacheKey],a.memory.textures--}function S(T){const M=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let Z=0;Z<M.__webglFramebuffer[j].length;Z++)i.deleteFramebuffer(M.__webglFramebuffer[j][Z]);else i.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)i.deleteFramebuffer(M.__webglFramebuffer[j]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=T.textures;for(let j=0,Z=F.length;j<Z;j++){const $=n.get(F[j]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(F[j])}n.remove(T)}let L=0;function H(){L=0}function z(){const T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function q(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function J(T,M){const F=n.get(T);if(T.isVideoTexture&&At(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(F,T,M);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+M)}function W(T,M){const F=n.get(T);if(T.version>0&&F.__version!==T.version){X(F,T,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+M)}function K(T,M){const F=n.get(T);if(T.version>0&&F.__version!==T.version){X(F,T,M);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+M)}function V(T,M){const F=n.get(T);if(T.version>0&&F.__version!==T.version){et(F,T,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+M)}const ot={[oa]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[No]:i.MIRRORED_REPEAT},dt={[Ye]:i.NEAREST,[Yf]:i.NEAREST_MIPMAP_NEAREST,[ur]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[Ia]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},wt={[Qf]:i.NEVER,[rd]:i.ALWAYS,[td]:i.LESS,[Zh]:i.LEQUAL,[ed]:i.EQUAL,[sd]:i.GEQUAL,[nd]:i.GREATER,[id]:i.NOTEQUAL};function Gt(T,M){if(M.type===An&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===En||M.magFilter===Ia||M.magFilter===ur||M.magFilter===Ri||M.minFilter===En||M.minFilter===Ia||M.minFilter===ur||M.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ot[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ot[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ot[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,dt[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,dt[M.minFilter]),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,wt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ye||M.minFilter!==ur&&M.minFilter!==Ri||M.type===An&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function fe(T,M){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",E));const j=M.source;let Z=f.get(j);Z===void 0&&(Z={},f.set(j,Z));const $=q(M);if($!==T.__cacheKey){Z[$]===void 0&&(Z[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[$].usedTimes++;const St=Z[T.__cacheKey];St!==void 0&&(Z[T.__cacheKey].usedTimes--,St.usedTimes===0&&w(M)),T.__cacheKey=$,T.__webglTexture=Z[$].texture}return F}function X(T,M,F){let j=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=i.TEXTURE_3D);const Z=fe(T,M),$=M.source;e.bindTexture(j,T.__webglTexture,i.TEXTURE0+F);const St=n.get($);if($.version!==St.__version||Z===!0){e.activeTexture(i.TEXTURE0+F);const ct=Kt.getPrimaries(Kt.workingColorSpace),pt=M.colorSpace===ti?null:Kt.getPrimaries(M.colorSpace),Zt=M.colorSpace===ti||ct===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let Q=v(M.image,!1,s.maxTextureSize);Q=ge(M,Q);const mt=r.convert(M.format,M.colorSpace),Ct=r.convert(M.type);let It=x(M.internalFormat,mt,Ct,M.colorSpace,M.isVideoTexture);Gt(j,M);let gt;const jt=M.mipmaps,Ot=M.isVideoTexture!==!0,de=St.__version===void 0||Z===!0,I=$.dataReady,at=R(M,Q);if(M.isDepthTexture)It=_(M.format===_s,M.type),de&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,It,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,It,Q.width,Q.height,0,mt,Ct,null));else if(M.isDataTexture)if(jt.length>0){Ot&&de&&e.texStorage2D(i.TEXTURE_2D,at,It,jt[0].width,jt[0].height);for(let G=0,Y=jt.length;G<Y;G++)gt=jt[G],Ot?I&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(i.TEXTURE_2D,G,It,gt.width,gt.height,0,mt,Ct,gt.data);M.generateMipmaps=!1}else Ot?(de&&e.texStorage2D(i.TEXTURE_2D,at,It,Q.width,Q.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,mt,Ct,Q.data)):e.texImage2D(i.TEXTURE_2D,0,It,Q.width,Q.height,0,mt,Ct,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ot&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,It,jt[0].width,jt[0].height,Q.depth);for(let G=0,Y=jt.length;G<Y;G++)if(gt=jt[G],M.format!==yn)if(mt!==null)if(Ot){if(I)if(M.layerUpdates.size>0){const ft=th(gt.width,gt.height,M.format,M.type);for(const ht of M.layerUpdates){const Nt=gt.data.subarray(ht*ft/gt.data.BYTES_PER_ELEMENT,(ht+1)*ft/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,ht,gt.width,gt.height,1,mt,Nt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,gt.width,gt.height,Q.depth,mt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,It,gt.width,gt.height,Q.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,gt.width,gt.height,Q.depth,mt,Ct,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,It,gt.width,gt.height,Q.depth,0,mt,Ct,gt.data)}else{Ot&&de&&e.texStorage2D(i.TEXTURE_2D,at,It,jt[0].width,jt[0].height);for(let G=0,Y=jt.length;G<Y;G++)gt=jt[G],M.format!==yn?mt!==null?Ot?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,G,It,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?I&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(i.TEXTURE_2D,G,It,gt.width,gt.height,0,mt,Ct,gt.data)}else if(M.isDataArrayTexture)if(Ot){if(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,It,Q.width,Q.height,Q.depth),I)if(M.layerUpdates.size>0){const G=th(Q.width,Q.height,M.format,M.type);for(const Y of M.layerUpdates){const ft=Q.data.subarray(Y*G/Q.data.BYTES_PER_ELEMENT,(Y+1)*G/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,Q.width,Q.height,1,mt,Ct,ft)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,mt,Ct,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,Q.width,Q.height,Q.depth,0,mt,Ct,Q.data);else if(M.isData3DTexture)Ot?(de&&e.texStorage3D(i.TEXTURE_3D,at,It,Q.width,Q.height,Q.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,mt,Ct,Q.data)):e.texImage3D(i.TEXTURE_3D,0,It,Q.width,Q.height,Q.depth,0,mt,Ct,Q.data);else if(M.isFramebufferTexture){if(de)if(Ot)e.texStorage2D(i.TEXTURE_2D,at,It,Q.width,Q.height);else{let G=Q.width,Y=Q.height;for(let ft=0;ft<at;ft++)e.texImage2D(i.TEXTURE_2D,ft,It,G,Y,0,mt,Ct,null),G>>=1,Y>>=1}}else if(jt.length>0){if(Ot&&de){const G=Tt(jt[0]);e.texStorage2D(i.TEXTURE_2D,at,It,G.width,G.height)}for(let G=0,Y=jt.length;G<Y;G++)gt=jt[G],Ot?I&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,mt,Ct,gt):e.texImage2D(i.TEXTURE_2D,G,It,mt,Ct,gt);M.generateMipmaps=!1}else if(Ot){if(de){const G=Tt(Q);e.texStorage2D(i.TEXTURE_2D,at,It,G.width,G.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Ct,Q)}else e.texImage2D(i.TEXTURE_2D,0,It,mt,Ct,Q);m(M)&&p(j),St.__version=$.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function et(T,M,F){if(M.image.length!==6)return;const j=fe(T,M),Z=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);const $=n.get(Z);if(Z.version!==$.__version||j===!0){e.activeTexture(i.TEXTURE0+F);const St=Kt.getPrimaries(Kt.workingColorSpace),ct=M.colorSpace===ti?null:Kt.getPrimaries(M.colorSpace),pt=M.colorSpace===ti||St===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Zt=M.isCompressedTexture||M.image[0].isCompressedTexture,Q=M.image[0]&&M.image[0].isDataTexture,mt=[];for(let Y=0;Y<6;Y++)!Zt&&!Q?mt[Y]=v(M.image[Y],!0,s.maxCubemapSize):mt[Y]=Q?M.image[Y].image:M.image[Y],mt[Y]=ge(M,mt[Y]);const Ct=mt[0],It=r.convert(M.format,M.colorSpace),gt=r.convert(M.type),jt=x(M.internalFormat,It,gt,M.colorSpace),Ot=M.isVideoTexture!==!0,de=$.__version===void 0||j===!0,I=Z.dataReady;let at=R(M,Ct);Gt(i.TEXTURE_CUBE_MAP,M);let G;if(Zt){Ot&&de&&e.texStorage2D(i.TEXTURE_CUBE_MAP,at,jt,Ct.width,Ct.height);for(let Y=0;Y<6;Y++){G=mt[Y].mipmaps;for(let ft=0;ft<G.length;ft++){const ht=G[ft];M.format!==yn?It!==null?Ot?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ft,0,0,ht.width,ht.height,It,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ft,jt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ft,0,0,ht.width,ht.height,It,gt,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ft,jt,ht.width,ht.height,0,It,gt,ht.data)}}}else{if(G=M.mipmaps,Ot&&de){G.length>0&&at++;const Y=Tt(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,at,jt,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Q){Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,mt[Y].width,mt[Y].height,It,gt,mt[Y].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,jt,mt[Y].width,mt[Y].height,0,It,gt,mt[Y].data);for(let ft=0;ft<G.length;ft++){const Nt=G[ft].image[Y].image;Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ft+1,0,0,Nt.width,Nt.height,It,gt,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ft+1,jt,Nt.width,Nt.height,0,It,gt,Nt.data)}}else{Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,It,gt,mt[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,jt,It,gt,mt[Y]);for(let ft=0;ft<G.length;ft++){const ht=G[ft];Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ft+1,0,0,It,gt,ht.image[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ft+1,jt,It,gt,ht.image[Y])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),$.__version=Z.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Mt(T,M,F,j,Z,$){const St=r.convert(F.format,F.colorSpace),ct=r.convert(F.type),pt=x(F.internalFormat,St,ct,F.colorSpace),Zt=n.get(M),Q=n.get(F);if(Q.__renderTarget=M,!Zt.__hasExternalTextures){const mt=Math.max(1,M.width>>$),Ct=Math.max(1,M.height>>$);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,$,pt,mt,Ct,M.depth,0,St,ct,null):e.texImage2D(Z,$,pt,mt,Ct,0,St,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Xt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Z,Q.__webglTexture,0,$t(M)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,Z,Q.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(T,M,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer){const j=M.depthTexture,Z=j&&j.isDepthTexture?j.type:null,$=_(M.stencilBuffer,Z),St=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=$t(M);Xt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,$,M.width,M.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,$,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,$,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,T)}else{const j=M.textures;for(let Z=0;Z<j.length;Z++){const $=j[Z],St=r.convert($.format,$.colorSpace),ct=r.convert($.type),pt=x($.internalFormat,St,ct,$.colorSpace),Zt=$t(M);F&&Xt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,pt,M.width,M.height):Xt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt,pt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,pt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(M.depthTexture);j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J(M.depthTexture,0);const Z=j.__webglTexture,$=$t(M);if(M.depthTexture.format===fs)Xt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(M.depthTexture.format===_s)Xt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ut(T){const M=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=j}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Pt(M.__webglFramebuffer,T)}else if(F){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=i.createRenderbuffer(),lt(M.__webglDepthbuffer[j],T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),lt(M.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(T,M,F){const j=n.get(T);M!==void 0&&Mt(j.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ut(T)}function xe(T){const M=T.texture,F=n.get(T),j=n.get(M);T.addEventListener("dispose",A);const Z=T.textures,$=T.isWebGLCubeRenderTarget===!0,St=Z.length>1;if(St||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=M.version,a.memory.textures++),$){F.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[ct]=[];for(let pt=0;pt<M.mipmaps.length;pt++)F.__webglFramebuffer[ct][pt]=i.createFramebuffer()}else F.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let ct=0;ct<M.mipmaps.length;ct++)F.__webglFramebuffer[ct]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(St)for(let ct=0,pt=Z.length;ct<pt;ct++){const Zt=n.get(Z[ct]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Xt(T)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ct=0;ct<Z.length;ct++){const pt=Z[ct];F.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ct]);const Zt=r.convert(pt.format,pt.colorSpace),Q=r.convert(pt.type),mt=x(pt.internalFormat,Zt,Q,pt.colorSpace,T.isXRRenderTarget===!0),Ct=$t(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,mt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,F.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(F.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,M);for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)Mt(F.__webglFramebuffer[ct][pt],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,pt);else Mt(F.__webglFramebuffer[ct],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ct=0,pt=Z.length;ct<pt;ct++){const Zt=Z[ct],Q=n.get(Zt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Gt(i.TEXTURE_2D,Zt),Mt(F.__webglFramebuffer,T,Zt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(Zt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ct=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,j.__webglTexture),Gt(ct,M),M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)Mt(F.__webglFramebuffer[pt],T,M,i.COLOR_ATTACHMENT0,ct,pt);else Mt(F.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,ct,0);m(M)&&p(ct),e.unbindTexture()}T.depthBuffer&&Ut(T)}function Jt(T){const M=T.textures;for(let F=0,j=M.length;F<j;F++){const Z=M[F];if(m(Z)){const $=y(T),St=n.get(Z).__webglTexture;e.bindTexture($,St),p($),e.unbindTexture()}}}const Ee=[],N=[];function Qe(T){if(T.samples>0){if(Xt(T)===!1){const M=T.textures,F=T.width,j=T.height;let Z=i.COLOR_BUFFER_BIT;const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(T),ct=M.length>1;if(ct)for(let pt=0;pt<M.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let pt=0;pt<M.length;pt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[pt]);const Zt=n.get(M[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Zt,0)}i.blitFramebuffer(0,0,F,j,0,0,F,j,Z,i.NEAREST),l===!0&&(Ee.length=0,N.length=0,Ee.push(i.COLOR_ATTACHMENT0+pt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ee.push($),N.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ee))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let pt=0;pt<M.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,St.__webglColorRenderbuffer[pt]);const Zt=n.get(M[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,Zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const M=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function $t(T){return Math.min(s.maxSamples,T.samples)}function Xt(T){const M=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function At(T){const M=a.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function ge(T,M){const F=T.colorSpace,j=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Ss&&F!==ti&&(Kt.getTransfer(F)===le?(j!==yn||Z!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function Tt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=J,this.setTexture2DArray=W,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=Vt,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Xt}function wv(i,t){function e(n,s=ti){let r;const a=Kt.getTransfer(s);if(n===Wn)return i.UNSIGNED_BYTE;if(n===El)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Al)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hh)return i.BYTE;if(n===Gh)return i.SHORT;if(n===Zs)return i.UNSIGNED_SHORT;if(n===Tl)return i.INT;if(n===Di)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===nr)return i.HALF_FLOAT;if(n===Wh)return i.ALPHA;if(n===qh)return i.RGB;if(n===yn)return i.RGBA;if(n===$h)return i.LUMINANCE;if(n===Xh)return i.LUMINANCE_ALPHA;if(n===fs)return i.DEPTH_COMPONENT;if(n===_s)return i.DEPTH_STENCIL;if(n===Ma)return i.RED;if(n===Cl)return i.RED_INTEGER;if(n===jh)return i.RG;if(n===Rl)return i.RG_INTEGER;if(n===Pl)return i.RGBA_INTEGER;if(n===$r||n===Xr||n===jr||n===Yr)if(a===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fo||n===ko||n===Oo||n===Bo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zo||n===Ho||n===Go)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zo||n===Ho)return a===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Go)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vo||n===Wo||n===qo||n===$o||n===Xo||n===jo||n===Yo||n===Jo||n===Zo||n===Ko||n===Qo||n===tl||n===el||n===nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$o)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ko)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===el)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nl)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jr||n===il||n===sl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Jr)return a===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yh||n===rl||n===al||n===ol)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===rl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===al)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Tv extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ue extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ev={type:"move"};class ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ev)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Av=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cv=`
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

}`;class Rv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new He,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new li({vertexShader:Av,fragmentShader:Cv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Te(new Ts(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pv extends bs{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const v=new Rv,m=e.getContextAttributes();let p=null,y=null;const x=[],_=[],R=new it;let E=null;const A=new Xe;A.viewport=new he;const P=new Xe;P.viewport=new he;const w=[A,P],S=new Tv;let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=x[X];return et===void 0&&(et=new ro,x[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=x[X];return et===void 0&&(et=new ro,x[X]=et),et.getGripSpace()},this.getHand=function(X){let et=x[X];return et===void 0&&(et=new ro,x[X]=et),et.getHandSpace()};function z(X){const et=_.indexOf(X.inputSource);if(et===-1)return;const Mt=x[et];Mt!==void 0&&(Mt.update(X.inputSource,X.frame,c||a),Mt.dispatchEvent({type:X.type,data:X.inputSource}))}function q(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",J);for(let X=0;X<x.length;X++){const et=_[X];et!==null&&(_[X]=null,x[X].disconnect(et))}L=null,H=null,v.reset(),t.setRenderTarget(p),d=null,f=null,h=null,s=null,y=null,fe.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",q),s.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Ui(d.framebufferWidth,d.framebufferHeight,{format:yn,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,Mt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?_s:fs,Mt=m.stencil?vs:Di);const Pt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Pt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Ui(f.textureWidth,f.textureHeight,{format:yn,type:Wn,depthTexture:new fu(f.textureWidth,f.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),fe.setContext(s),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function J(X){for(let et=0;et<X.removed.length;et++){const Mt=X.removed[et],lt=_.indexOf(Mt);lt>=0&&(_[lt]=null,x[lt].disconnect(Mt))}for(let et=0;et<X.added.length;et++){const Mt=X.added[et];let lt=_.indexOf(Mt);if(lt===-1){for(let Ut=0;Ut<x.length;Ut++)if(Ut>=_.length){_.push(Mt),lt=Ut;break}else if(_[Ut]===null){_[Ut]=Mt,lt=Ut;break}if(lt===-1)break}const Pt=x[lt];Pt&&Pt.connect(Mt)}}const W=new C,K=new C;function V(X,et,Mt){W.setFromMatrixPosition(et.matrixWorld),K.setFromMatrixPosition(Mt.matrixWorld);const lt=W.distanceTo(K),Pt=et.projectionMatrix.elements,Ut=Mt.projectionMatrix.elements,Vt=Pt[14]/(Pt[10]-1),xe=Pt[14]/(Pt[10]+1),Jt=(Pt[9]+1)/Pt[5],Ee=(Pt[9]-1)/Pt[5],N=(Pt[8]-1)/Pt[0],Qe=(Ut[8]+1)/Ut[0],$t=Vt*N,Xt=Vt*Qe,At=lt/(-N+Qe),ge=At*-N;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ge),X.translateZ(At),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Pt[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Tt=Vt+At,T=xe+At,M=$t-ge,F=Xt+(lt-ge),j=Jt*xe/T*Tt,Z=Ee*xe/T*Tt;X.projectionMatrix.makePerspective(M,F,j,Z,Tt,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ot(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let et=X.near,Mt=X.far;v.texture!==null&&(v.depthNear>0&&(et=v.depthNear),v.depthFar>0&&(Mt=v.depthFar)),S.near=P.near=A.near=et,S.far=P.far=A.far=Mt,(L!==S.near||H!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,H=S.far),A.layers.mask=X.layers.mask|2,P.layers.mask=X.layers.mask|4,S.layers.mask=A.layers.mask|P.layers.mask;const lt=X.parent,Pt=S.cameras;ot(S,lt);for(let Ut=0;Ut<Pt.length;Ut++)ot(Pt[Ut],lt);Pt.length===2?V(S,A,P):S.projectionMatrix.copy(A.projectionMatrix),dt(X,S,lt)};function dt(X,et,Mt){Mt===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(Mt.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ks*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let wt=null;function Gt(X,et){if(u=et.getViewerPose(c||a),g=et,u!==null){const Mt=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let lt=!1;Mt.length!==S.cameras.length&&(S.cameras.length=0,lt=!0);for(let Ut=0;Ut<Mt.length;Ut++){const Vt=Mt[Ut];let xe=null;if(d!==null)xe=d.getViewport(Vt);else{const Ee=h.getViewSubImage(f,Vt);xe=Ee.viewport,Ut===0&&(t.setRenderTargetTextures(y,Ee.colorTexture,f.ignoreDepthValues?void 0:Ee.depthStencilTexture),t.setRenderTarget(y))}let Jt=w[Ut];Jt===void 0&&(Jt=new Xe,Jt.layers.enable(Ut),Jt.viewport=new he,w[Ut]=Jt),Jt.matrix.fromArray(Vt.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Vt.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(xe.x,xe.y,xe.width,xe.height),Ut===0&&(S.matrix.copy(Jt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),lt===!0&&S.cameras.push(Jt)}const Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const Ut=h.getDepthInformation(Mt[0]);Ut&&Ut.isValid&&Ut.texture&&v.init(t,Ut,s.renderState)}}for(let Mt=0;Mt<x.length;Mt++){const lt=_[Mt],Pt=x[Mt];lt!==null&&Pt!==void 0&&Pt.update(lt,et,c||a)}wt&&wt(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const fe=new hu;fe.setAnimationLoop(Gt),this.setAnimationLoop=function(X){wt=X},this.dispose=function(){}}}const yi=new Mn,Lv=new oe;function Iv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ou(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),x=y.envMap,_=y.envMapRotation;x&&(m.envMap.value=x,yi.copy(_),yi.x*=-1,yi.y*=-1,yi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),m.envMapRotation.value.setFromMatrix4(Lv.makeRotationFromEuler(yi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Dv(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const _=x.program;n.uniformBlockBinding(y,_)}function c(y,x){let _=s[y.id];_===void 0&&(g(y),_=u(y),s[y.id]=_,y.addEventListener("dispose",m));const R=x.program;n.updateUBOMapping(y,R);const E=t.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function u(y){const x=h();y.__bindingPointIndex=x;const _=i.createBuffer(),R=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,R,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=s[y.id],_=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,A=_.length;E<A;E++){const P=Array.isArray(_[E])?_[E]:[_[E]];for(let w=0,S=P.length;w<S;w++){const L=P[w];if(d(L,E,w,R)===!0){const H=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let J=0;J<z.length;J++){const W=z[J],K=v(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,H+q,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,q),q+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,x,_,R){const E=y.value,A=x+"_"+_;if(R[A]===void 0)return typeof E=="number"||typeof E=="boolean"?R[A]=E:R[A]=E.clone(),!0;{const P=R[A];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return R[A]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(y){const x=y.uniforms;let _=0;const R=16;for(let A=0,P=x.length;A<P;A++){const w=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,L=w.length;S<L;S++){const H=w[S],z=Array.isArray(H.value)?H.value:[H.value];for(let q=0,J=z.length;q<J;q++){const W=z[q],K=v(W),V=_%R,ot=V%K.boundary,dt=V+ot;_+=ot,dt!==0&&R-dt<K.storage&&(_+=R-dt),H.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=_,_+=K.storage}}}const E=_%R;return E>0&&(_+=R-E),y.__size=_,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class vu{constructor(t={}){const{canvas:e=Sd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const y=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this.toneMapping=ii,this.toneMappingExposure=1;const _=this;let R=!1,E=0,A=0,P=null,w=-1,S=null;const L=new he,H=new he;let z=null;const q=new Et(0);let J=0,W=e.width,K=e.height,V=1,ot=null,dt=null;const wt=new he(0,0,W,K),Gt=new he(0,0,W,K);let fe=!1;const X=new Il;let et=!1,Mt=!1;const lt=new oe,Pt=new oe,Ut=new C,Vt=new he,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function Ee(){return P===null?V:1}let N=n;function Qe(b,D){return e.getContext(b,D)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wl}`),e.addEventListener("webglcontextlost",Y,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ht,!1),N===null){const D="webgl2";if(N=Qe(D,b),N===null)throw Qe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let $t,Xt,At,ge,Tt,T,M,F,j,Z,$,St,ct,pt,Zt,Q,mt,Ct,It,gt,jt,Ot,de,I;function at(){$t=new B0(N),$t.init(),Ot=new wv(N,$t),Xt=new D0(N,$t,t,Ot),At=new Mv(N,$t),Xt.reverseDepthBuffer&&f&&At.buffers.depth.setReversed(!0),ge=new G0(N),Tt=new av,T=new bv(N,$t,At,Tt,Xt,Ot,ge),M=new N0(_),F=new O0(_),j=new Yd(N),de=new L0(N,j),Z=new z0(N,j,ge,de),$=new W0(N,Z,j,ge),It=new V0(N,Xt,T),Q=new U0(Tt),St=new rv(_,M,F,$t,Xt,de,Q),ct=new Iv(_,Tt),pt=new lv,Zt=new pv($t),Ct=new P0(_,M,F,At,$,d,l),mt=new yv(_,$,Xt),I=new Dv(N,ge,Xt,At),gt=new I0(N,$t,ge),jt=new H0(N,$t,ge),ge.programs=St.programs,_.capabilities=Xt,_.extensions=$t,_.properties=Tt,_.renderLists=pt,_.shadowMap=mt,_.state=At,_.info=ge}at();const G=new Pv(_,N);this.xr=G,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=$t.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=$t.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(W,K,!1))},this.getSize=function(b){return b.set(W,K)},this.setSize=function(b,D,O=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,K=D,e.width=Math.floor(b*V),e.height=Math.floor(D*V),O===!0&&(e.style.width=b+"px",e.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(W*V,K*V).floor()},this.setDrawingBufferSize=function(b,D,O){W=b,K=D,V=O,e.width=Math.floor(b*O),e.height=Math.floor(D*O),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(wt)},this.setViewport=function(b,D,O,B){b.isVector4?wt.set(b.x,b.y,b.z,b.w):wt.set(b,D,O,B),At.viewport(L.copy(wt).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(Gt)},this.setScissor=function(b,D,O,B){b.isVector4?Gt.set(b.x,b.y,b.z,b.w):Gt.set(b,D,O,B),At.scissor(H.copy(Gt).multiplyScalar(V).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(b){At.setScissorTest(fe=b)},this.setOpaqueSort=function(b){ot=b},this.setTransparentSort=function(b){dt=b},this.getClearColor=function(b){return b.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(b=!0,D=!0,O=!0){let B=0;if(b){let U=!1;if(P!==null){const tt=P.texture.format;U=tt===Pl||tt===Rl||tt===Cl}if(U){const tt=P.texture.type,ut=tt===Wn||tt===Di||tt===Zs||tt===vs||tt===El||tt===Al,_t=Ct.getClearColor(),yt=Ct.getClearAlpha(),Dt=_t.r,Ft=_t.g,xt=_t.b;ut?(g[0]=Dt,g[1]=Ft,g[2]=xt,g[3]=yt,N.clearBufferuiv(N.COLOR,0,g)):(v[0]=Dt,v[1]=Ft,v[2]=xt,v[3]=yt,N.clearBufferiv(N.COLOR,0,v))}else B|=N.COLOR_BUFFER_BIT}D&&(B|=N.DEPTH_BUFFER_BIT),O&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Y,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),pt.dispose(),Zt.dispose(),Tt.dispose(),M.dispose(),F.dispose(),$.dispose(),de.dispose(),I.dispose(),St.dispose(),G.dispose(),G.removeEventListener("sessionstart",Yl),G.removeEventListener("sessionend",Jl),di.stop()};function Y(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const b=ge.autoReset,D=mt.enabled,O=mt.autoUpdate,B=mt.needsUpdate,U=mt.type;at(),ge.autoReset=b,mt.enabled=D,mt.autoUpdate=O,mt.needsUpdate=B,mt.type=U}function ht(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Nt(b){const D=b.target;D.removeEventListener("dispose",Nt),we(D)}function we(b){ke(b),Tt.remove(b)}function ke(b){const D=Tt.get(b).programs;D!==void 0&&(D.forEach(function(O){St.releaseProgram(O)}),b.isShaderMaterial&&St.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,O,B,U,tt){D===null&&(D=xe);const ut=U.isMesh&&U.matrixWorld.determinant()<0,_t=vf(b,D,O,B,U);At.setMaterial(B,ut);let yt=O.index,Dt=1;if(B.wireframe===!0){if(yt=Z.getWireframeAttribute(O),yt===void 0)return;Dt=2}const Ft=O.drawRange,xt=O.attributes.position;let te=Ft.start*Dt,pe=(Ft.start+Ft.count)*Dt;tt!==null&&(te=Math.max(te,tt.start*Dt),pe=Math.min(pe,(tt.start+tt.count)*Dt)),yt!==null?(te=Math.max(te,0),pe=Math.min(pe,yt.count)):xt!=null&&(te=Math.max(te,0),pe=Math.min(pe,xt.count));const ve=pe-te;if(ve<0||ve===1/0)return;de.setup(U,B,_t,O,yt);let qe,ee=gt;if(yt!==null&&(qe=j.get(yt),ee=jt,ee.setIndex(qe)),U.isMesh)B.wireframe===!0?(At.setLineWidth(B.wireframeLinewidth*Ee()),ee.setMode(N.LINES)):ee.setMode(N.TRIANGLES);else if(U.isLine){let bt=B.linewidth;bt===void 0&&(bt=1),At.setLineWidth(bt*Ee()),U.isLineSegments?ee.setMode(N.LINES):U.isLineLoop?ee.setMode(N.LINE_LOOP):ee.setMode(N.LINE_STRIP)}else U.isPoints?ee.setMode(N.POINTS):U.isSprite&&ee.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ee.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))ee.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const bt=U._multiDrawStarts,Dn=U._multiDrawCounts,ne=U._multiDrawCount,fn=yt?j.get(yt).bytesPerElement:1,Hi=Tt.get(B).currentProgram.getUniforms();for(let Je=0;Je<ne;Je++)Hi.setValue(N,"_gl_DrawID",Je),ee.render(bt[Je]/fn,Dn[Je])}else if(U.isInstancedMesh)ee.renderInstances(te,ve,U.count);else if(O.isInstancedBufferGeometry){const bt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Dn=Math.min(O.instanceCount,bt);ee.renderInstances(te,ve,Dn)}else ee.render(te,ve)};function re(b,D,O){b.transparent===!0&&b.side===Me&&b.forceSinglePass===!1?(b.side=je,b.needsUpdate=!0,hr(b,D,O),b.side=oi,b.needsUpdate=!0,hr(b,D,O),b.side=Me):hr(b,D,O)}this.compile=function(b,D,O=null){O===null&&(O=b),p=Zt.get(O),p.init(D),x.push(p),O.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),b!==O&&b.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const B=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const tt=U.material;if(tt)if(Array.isArray(tt))for(let ut=0;ut<tt.length;ut++){const _t=tt[ut];re(_t,O,U),B.add(_t)}else re(tt,O,U),B.add(tt)}),x.pop(),p=null,B},this.compileAsync=function(b,D,O=null){const B=this.compile(b,D,O);return new Promise(U=>{function tt(){if(B.forEach(function(ut){Tt.get(ut).currentProgram.isReady()&&B.delete(ut)}),B.size===0){U(b);return}setTimeout(tt,10)}$t.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let un=null;function In(b){un&&un(b)}function Yl(){di.stop()}function Jl(){di.start()}const di=new hu;di.setAnimationLoop(In),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(b){un=b,G.setAnimationLoop(b),b===null?di.stop():di.start()},G.addEventListener("sessionstart",Yl),G.addEventListener("sessionend",Jl),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(D),D=G.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,D,P),p=Zt.get(b,x.length),p.init(D),x.push(p),Pt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),X.setFromProjectionMatrix(Pt),Mt=this.localClippingEnabled,et=Q.init(this.clippingPlanes,Mt),m=pt.get(b,y.length),m.init(),y.push(m),G.enabled===!0&&G.isPresenting===!0){const tt=_.xr.getDepthSensingMesh();tt!==null&&La(tt,D,-1/0,_.sortObjects)}La(b,D,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ot,dt),Jt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Jt&&Ct.addToRenderList(m,b),this.info.render.frame++,et===!0&&Q.beginShadows();const O=p.state.shadowsArray;mt.render(O,b,D),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,U=m.transmissive;if(p.setupLights(),D.isArrayCamera){const tt=D.cameras;if(U.length>0)for(let ut=0,_t=tt.length;ut<_t;ut++){const yt=tt[ut];Kl(B,U,b,yt)}Jt&&Ct.render(b);for(let ut=0,_t=tt.length;ut<_t;ut++){const yt=tt[ut];Zl(m,b,yt,yt.viewport)}}else U.length>0&&Kl(B,U,b,D),Jt&&Ct.render(b),Zl(m,b,D);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(_,b,D),de.resetDefaultState(),w=-1,S=null,x.pop(),x.length>0?(p=x[x.length-1],et===!0&&Q.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function La(b,D,O,B){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)O=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||X.intersectsSprite(b)){B&&Vt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Pt);const ut=$.update(b),_t=b.material;_t.visible&&m.push(b,ut,_t,O,Vt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||X.intersectsObject(b))){const ut=$.update(b),_t=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Vt.copy(b.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Vt.copy(ut.boundingSphere.center)),Vt.applyMatrix4(b.matrixWorld).applyMatrix4(Pt)),Array.isArray(_t)){const yt=ut.groups;for(let Dt=0,Ft=yt.length;Dt<Ft;Dt++){const xt=yt[Dt],te=_t[xt.materialIndex];te&&te.visible&&m.push(b,ut,te,O,Vt.z,xt)}}else _t.visible&&m.push(b,ut,_t,O,Vt.z,null)}}const tt=b.children;for(let ut=0,_t=tt.length;ut<_t;ut++)La(tt[ut],D,O,B)}function Zl(b,D,O,B){const U=b.opaque,tt=b.transmissive,ut=b.transparent;p.setupLightsView(O),et===!0&&Q.setGlobalState(_.clippingPlanes,O),B&&At.viewport(L.copy(B)),U.length>0&&cr(U,D,O),tt.length>0&&cr(tt,D,O),ut.length>0&&cr(ut,D,O),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Kl(b,D,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new Ui(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?nr:Wn,minFilter:Ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const tt=p.state.transmissionRenderTarget[B.id],ut=B.viewport||L;tt.setSize(ut.z,ut.w);const _t=_.getRenderTarget();_.setRenderTarget(tt),_.getClearColor(q),J=_.getClearAlpha(),J<1&&_.setClearColor(16777215,.5),_.clear(),Jt&&Ct.render(O);const yt=_.toneMapping;_.toneMapping=ii;const Dt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),et===!0&&Q.setGlobalState(_.clippingPlanes,B),cr(b,O,B),T.updateMultisampleRenderTarget(tt),T.updateRenderTargetMipmap(tt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let xt=0,te=D.length;xt<te;xt++){const pe=D[xt],ve=pe.object,qe=pe.geometry,ee=pe.material,bt=pe.group;if(ee.side===Me&&ve.layers.test(B.layers)){const Dn=ee.side;ee.side=je,ee.needsUpdate=!0,Ql(ve,O,B,qe,ee,bt),ee.side=Dn,ee.needsUpdate=!0,Ft=!0}}Ft===!0&&(T.updateMultisampleRenderTarget(tt),T.updateRenderTargetMipmap(tt))}_.setRenderTarget(_t),_.setClearColor(q,J),Dt!==void 0&&(B.viewport=Dt),_.toneMapping=yt}function cr(b,D,O){const B=D.isScene===!0?D.overrideMaterial:null;for(let U=0,tt=b.length;U<tt;U++){const ut=b[U],_t=ut.object,yt=ut.geometry,Dt=B===null?ut.material:B,Ft=ut.group;_t.layers.test(O.layers)&&Ql(_t,D,O,yt,Dt,Ft)}}function Ql(b,D,O,B,U,tt){b.onBeforeRender(_,D,O,B,U,tt),b.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(_,D,O,B,b,tt),U.transparent===!0&&U.side===Me&&U.forceSinglePass===!1?(U.side=je,U.needsUpdate=!0,_.renderBufferDirect(O,D,B,U,b,tt),U.side=oi,U.needsUpdate=!0,_.renderBufferDirect(O,D,B,U,b,tt),U.side=Me):_.renderBufferDirect(O,D,B,U,b,tt),b.onAfterRender(_,D,O,B,U,tt)}function hr(b,D,O){D.isScene!==!0&&(D=xe);const B=Tt.get(b),U=p.state.lights,tt=p.state.shadowsArray,ut=U.state.version,_t=St.getParameters(b,U.state,tt,D,O),yt=St.getProgramCacheKey(_t);let Dt=B.programs;B.environment=b.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(b.isMeshStandardMaterial?F:M).get(b.envMap||B.environment),B.envMapRotation=B.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Dt===void 0&&(b.addEventListener("dispose",Nt),Dt=new Map,B.programs=Dt);let Ft=Dt.get(yt);if(Ft!==void 0){if(B.currentProgram===Ft&&B.lightsStateVersion===ut)return ec(b,_t),Ft}else _t.uniforms=St.getUniforms(b),b.onBeforeCompile(_t,_),Ft=St.acquireProgram(_t,yt),Dt.set(yt,Ft),B.uniforms=_t.uniforms;const xt=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(xt.clippingPlanes=Q.uniform),ec(b,_t),B.needsLights=yf(b),B.lightsStateVersion=ut,B.needsLights&&(xt.ambientLightColor.value=U.state.ambient,xt.lightProbe.value=U.state.probe,xt.directionalLights.value=U.state.directional,xt.directionalLightShadows.value=U.state.directionalShadow,xt.spotLights.value=U.state.spot,xt.spotLightShadows.value=U.state.spotShadow,xt.rectAreaLights.value=U.state.rectArea,xt.ltc_1.value=U.state.rectAreaLTC1,xt.ltc_2.value=U.state.rectAreaLTC2,xt.pointLights.value=U.state.point,xt.pointLightShadows.value=U.state.pointShadow,xt.hemisphereLights.value=U.state.hemi,xt.directionalShadowMap.value=U.state.directionalShadowMap,xt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,xt.spotShadowMap.value=U.state.spotShadowMap,xt.spotLightMatrix.value=U.state.spotLightMatrix,xt.spotLightMap.value=U.state.spotLightMap,xt.pointShadowMap.value=U.state.pointShadowMap,xt.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Ft,B.uniformsList=null,Ft}function tc(b){if(b.uniformsList===null){const D=b.currentProgram.getUniforms();b.uniformsList=Zr.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function ec(b,D){const O=Tt.get(b);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.batchingColor=D.batchingColor,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function vf(b,D,O,B,U){D.isScene!==!0&&(D=xe),T.resetTextureUnits();const tt=D.fog,ut=B.isMeshStandardMaterial?D.environment:null,_t=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ss,yt=(B.isMeshStandardMaterial?F:M).get(B.envMap||ut),Dt=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ft=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),xt=!!O.morphAttributes.position,te=!!O.morphAttributes.normal,pe=!!O.morphAttributes.color;let ve=ii;B.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ve=_.toneMapping);const qe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ee=qe!==void 0?qe.length:0,bt=Tt.get(B),Dn=p.state.lights;if(et===!0&&(Mt===!0||b!==S)){const tn=b===S&&B.id===w;Q.setState(B,b,tn)}let ne=!1;B.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Dn.state.version||bt.outputColorSpace!==_t||U.isBatchedMesh&&bt.batching===!1||!U.isBatchedMesh&&bt.batching===!0||U.isBatchedMesh&&bt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&bt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&bt.instancing===!1||!U.isInstancedMesh&&bt.instancing===!0||U.isSkinnedMesh&&bt.skinning===!1||!U.isSkinnedMesh&&bt.skinning===!0||U.isInstancedMesh&&bt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&bt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&bt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&bt.instancingMorph===!1&&U.morphTexture!==null||bt.envMap!==yt||B.fog===!0&&bt.fog!==tt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==Q.numPlanes||bt.numIntersection!==Q.numIntersection)||bt.vertexAlphas!==Dt||bt.vertexTangents!==Ft||bt.morphTargets!==xt||bt.morphNormals!==te||bt.morphColors!==pe||bt.toneMapping!==ve||bt.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,bt.__version=B.version);let fn=bt.currentProgram;ne===!0&&(fn=hr(B,D,U));let Hi=!1,Je=!1,Cs=!1;const _e=fn.getUniforms(),Sn=bt.uniforms;if(At.useProgram(fn.program)&&(Hi=!0,Je=!0,Cs=!0),B.id!==w&&(w=B.id,Je=!0),Hi||S!==b){At.buffers.depth.getReversed()?(lt.copy(b.projectionMatrix),wd(lt),Td(lt),_e.setValue(N,"projectionMatrix",lt)):_e.setValue(N,"projectionMatrix",b.projectionMatrix),_e.setValue(N,"viewMatrix",b.matrixWorldInverse);const qn=_e.map.cameraPosition;qn!==void 0&&qn.setValue(N,Ut.setFromMatrixPosition(b.matrixWorld)),Xt.logarithmicDepthBuffer&&_e.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&_e.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Je=!0,Cs=!0)}if(U.isSkinnedMesh){_e.setOptional(N,U,"bindMatrix"),_e.setOptional(N,U,"bindMatrixInverse");const tn=U.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),_e.setValue(N,"boneTexture",tn.boneTexture,T))}U.isBatchedMesh&&(_e.setOptional(N,U,"batchingTexture"),_e.setValue(N,"batchingTexture",U._matricesTexture,T),_e.setOptional(N,U,"batchingIdTexture"),_e.setValue(N,"batchingIdTexture",U._indirectTexture,T),_e.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&_e.setValue(N,"batchingColorTexture",U._colorsTexture,T));const Rs=O.morphAttributes;if((Rs.position!==void 0||Rs.normal!==void 0||Rs.color!==void 0)&&It.update(U,O,fn),(Je||bt.receiveShadow!==U.receiveShadow)&&(bt.receiveShadow=U.receiveShadow,_e.setValue(N,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Sn.envMap.value=yt,Sn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(Sn.envMapIntensity.value=D.environmentIntensity),Je&&(_e.setValue(N,"toneMappingExposure",_.toneMappingExposure),bt.needsLights&&_f(Sn,Cs),tt&&B.fog===!0&&ct.refreshFogUniforms(Sn,tt),ct.refreshMaterialUniforms(Sn,B,V,K,p.state.transmissionRenderTarget[b.id]),Zr.upload(N,tc(bt),Sn,T)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Zr.upload(N,tc(bt),Sn,T),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&_e.setValue(N,"center",U.center),_e.setValue(N,"modelViewMatrix",U.modelViewMatrix),_e.setValue(N,"normalMatrix",U.normalMatrix),_e.setValue(N,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const tn=B.uniformsGroups;for(let qn=0,$n=tn.length;qn<$n;qn++){const nc=tn[qn];I.update(nc,fn),I.bind(nc,fn)}}return fn}function _f(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function yf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,D,O){Tt.get(b.texture).__webglTexture=D,Tt.get(b.depthTexture).__webglTexture=O;const B=Tt.get(b);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||$t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,D){const O=Tt.get(b);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,O=0){P=b,E=D,A=O;let B=!0,U=null,tt=!1,ut=!1;if(b){const yt=Tt.get(b);if(yt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(N.FRAMEBUFFER,null),B=!1;else if(yt.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(yt.__hasExternalTextures)T.rebindTextures(b,Tt.get(b.texture).__webglTexture,Tt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const xt=b.depthTexture;if(yt.__boundDepthTexture!==xt){if(xt!==null&&Tt.has(xt)&&(b.width!==xt.image.width||b.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}const Dt=b.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ut=!0);const Ft=Tt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ft[D])?U=Ft[D][O]:U=Ft[D],tt=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?U=Tt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ft)?U=Ft[O]:U=Ft,L.copy(b.viewport),H.copy(b.scissor),z=b.scissorTest}else L.copy(wt).multiplyScalar(V).floor(),H.copy(Gt).multiplyScalar(V).floor(),z=fe;if(At.bindFramebuffer(N.FRAMEBUFFER,U)&&B&&At.drawBuffers(b,U),At.viewport(L),At.scissor(H),At.setScissorTest(z),tt){const yt=Tt.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,yt.__webglTexture,O)}else if(ut){const yt=Tt.get(b.texture),Dt=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,yt.__webglTexture,O||0,Dt)}w=-1},this.readRenderTargetPixels=function(b,D,O,B,U,tt,ut){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Tt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(_t=_t[ut]),_t){At.bindFramebuffer(N.FRAMEBUFFER,_t);try{const yt=b.texture,Dt=yt.format,Ft=yt.type;if(!Xt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-B&&O>=0&&O<=b.height-U&&N.readPixels(D,O,B,U,Ot.convert(Dt),Ot.convert(Ft),tt)}finally{const yt=P!==null?Tt.get(P).__webglFramebuffer:null;At.bindFramebuffer(N.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(b,D,O,B,U,tt,ut){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Tt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(_t=_t[ut]),_t){const yt=b.texture,Dt=yt.format,Ft=yt.type;if(!Xt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=b.width-B&&O>=0&&O<=b.height-U){At.bindFramebuffer(N.FRAMEBUFFER,_t);const xt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,xt),N.bufferData(N.PIXEL_PACK_BUFFER,tt.byteLength,N.STREAM_READ),N.readPixels(D,O,B,U,Ot.convert(Dt),Ot.convert(Ft),0);const te=P!==null?Tt.get(P).__webglFramebuffer:null;At.bindFramebuffer(N.FRAMEBUFFER,te);const pe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await bd(N,pe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,xt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,tt),N.deleteBuffer(xt),N.deleteSync(pe),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,D=null,O=0){b.isTexture!==!0&&(Gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,b=arguments[1]);const B=Math.pow(2,-O),U=Math.floor(b.image.width*B),tt=Math.floor(b.image.height*B),ut=D!==null?D.x:0,_t=D!==null?D.y:0;T.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,O,0,0,ut,_t,U,tt),At.unbindTexture()},this.copyTextureToTexture=function(b,D,O=null,B=null,U=0){b.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,b=arguments[1],D=arguments[2],U=arguments[3]||0,O=null);let tt,ut,_t,yt,Dt,Ft,xt,te,pe;const ve=b.isCompressedTexture?b.mipmaps[U]:b.image;O!==null?(tt=O.max.x-O.min.x,ut=O.max.y-O.min.y,_t=O.isBox3?O.max.z-O.min.z:1,yt=O.min.x,Dt=O.min.y,Ft=O.isBox3?O.min.z:0):(tt=ve.width,ut=ve.height,_t=ve.depth||1,yt=0,Dt=0,Ft=0),B!==null?(xt=B.x,te=B.y,pe=B.z):(xt=0,te=0,pe=0);const qe=Ot.convert(D.format),ee=Ot.convert(D.type);let bt;D.isData3DTexture?(T.setTexture3D(D,0),bt=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(T.setTexture2DArray(D,0),bt=N.TEXTURE_2D_ARRAY):(T.setTexture2D(D,0),bt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);const Dn=N.getParameter(N.UNPACK_ROW_LENGTH),ne=N.getParameter(N.UNPACK_IMAGE_HEIGHT),fn=N.getParameter(N.UNPACK_SKIP_PIXELS),Hi=N.getParameter(N.UNPACK_SKIP_ROWS),Je=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ve.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ve.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,yt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Dt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ft);const Cs=b.isDataArrayTexture||b.isData3DTexture,_e=D.isDataArrayTexture||D.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Sn=Tt.get(b),Rs=Tt.get(D),tn=Tt.get(Sn.__renderTarget),qn=Tt.get(Rs.__renderTarget);At.bindFramebuffer(N.READ_FRAMEBUFFER,tn.__webglFramebuffer),At.bindFramebuffer(N.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let $n=0;$n<_t;$n++)Cs&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.get(b).__webglTexture,U,Ft+$n),b.isDepthTexture?(_e&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.get(D).__webglTexture,U,pe+$n),N.blitFramebuffer(yt,Dt,tt,ut,xt,te,tt,ut,N.DEPTH_BUFFER_BIT,N.NEAREST)):_e?N.copyTexSubImage3D(bt,U,xt,te,pe+$n,yt,Dt,tt,ut):N.copyTexSubImage2D(bt,U,xt,te,pe+$n,yt,Dt,tt,ut);At.bindFramebuffer(N.READ_FRAMEBUFFER,null),At.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else _e?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(bt,U,xt,te,pe,tt,ut,_t,qe,ee,ve.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(bt,U,xt,te,pe,tt,ut,_t,qe,ve.data):N.texSubImage3D(bt,U,xt,te,pe,tt,ut,_t,qe,ee,ve):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,xt,te,tt,ut,qe,ee,ve.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,xt,te,ve.width,ve.height,qe,ve.data):N.texSubImage2D(N.TEXTURE_2D,U,xt,te,tt,ut,qe,ee,ve);N.pixelStorei(N.UNPACK_ROW_LENGTH,Dn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ne),N.pixelStorei(N.UNPACK_SKIP_PIXELS,fn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Hi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Je),U===0&&D.generateMipmaps&&N.generateMipmap(bt),At.unbindTexture()},this.copyTextureToTexture3D=function(b,D,O=null,B=null,U=0){return b.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,b=arguments[2],D=arguments[3],U=arguments[4]||0),Gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,D,O,B,U)},this.initRenderTarget=function(b){Tt.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),At.unbindTexture()},this.resetState=function(){E=0,A=0,P=null,At.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}class Ul{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Et(t),this.near=e,this.far=n}clone(){return new Ul(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class _u extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Uv{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ll,this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ge=new C;class ha{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new an(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ha(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class yu extends Oi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ns;const Us=new C,is=new C,ss=new C,rs=new it,Ns=new it,xu=new oe,Ir=new C,Fs=new C,Dr=new C,eh=new it,ao=new it,nh=new it;class Nv extends me{constructor(t=new yu){if(super(),this.isSprite=!0,this.type="Sprite",ns===void 0){ns=new Pe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Uv(e,5);ns.setIndex([0,1,2,0,2,3]),ns.setAttribute("position",new ha(n,3,0,!1)),ns.setAttribute("uv",new ha(n,2,3,!1))}this.geometry=ns,this.material=t,this.center=new it(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),is.setFromMatrixScale(this.matrixWorld),xu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ss.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&is.multiplyScalar(-ss.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Ur(Ir.set(-.5,-.5,0),ss,a,is,s,r),Ur(Fs.set(.5,-.5,0),ss,a,is,s,r),Ur(Dr.set(.5,.5,0),ss,a,is,s,r),eh.set(0,0),ao.set(1,0),nh.set(1,1);let o=t.ray.intersectTriangle(Ir,Fs,Dr,!1,Us);if(o===null&&(Ur(Fs.set(-.5,.5,0),ss,a,is,s,r),ao.set(0,1),o=t.ray.intersectTriangle(Ir,Dr,Fs,!1,Us),o===null))return;const l=t.ray.origin.distanceTo(Us);l<t.near||l>t.far||e.push({distance:l,point:Us.clone(),uv:nn.getInterpolation(Us,Ir,Fs,Dr,eh,ao,nh,new it),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ur(i,t,e,n,s,r){rs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ns.x=r*rs.x-s*rs.y,Ns.y=s*rs.x+r*rs.y):Ns.copy(rs),i.copy(t),i.x+=Ns.x,i.y+=Ns.y,i.applyMatrix4(xu)}class Mu extends He{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ye,u=Ye,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hl extends an{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const as=new oe,ih=new oe,Nr=[],sh=new hi,Fv=new oe,ks=new Te,Os=new ws;class ri extends Te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new hl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Fv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new hi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,as),sh.copy(t.boundingBox).applyMatrix4(as),this.boundingBox.union(sh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ws),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,as),Os.copy(t.boundingSphere).applyMatrix4(as),this.boundingSphere.union(Os)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Os.copy(this.boundingSphere),Os.applyMatrix4(n),t.ray.intersectsSphere(Os)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,as),ih.multiplyMatrices(n,as),ks.matrixWorld=ih,ks.raycast(t,Nr);for(let a=0,o=Nr.length;a<o;a++){const l=Nr[a];l.instanceId=r,l.object=this,e.push(l)}Nr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new hl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mu(new Float32Array(s*this.count),s,this.count,Ma,An));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Su extends Oi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const rh=new oe,ul=new nu,Fr=new ws,kr=new C;class kv extends me{constructor(t=new Pe,e=new Su){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(s),Fr.radius+=r,t.ray.intersectsSphere(Fr)===!1)return;rh.copy(s).invert(),ul.copy(t.ray).applyMatrix4(rh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,v=d;g<v;g++){const m=c.getX(g);kr.fromBufferAttribute(h,m),ah(kr,m,l,s,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,v=d;g<v;g++)kr.fromBufferAttribute(h,g),ah(kr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ah(i,t,e,n,s,r,a){const o=ul.distanceSqToPoint(i);if(o<e){const l=new C;ul.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ov extends He{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],f=n[s+1]-u,d=(a-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new it:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,s=[],r=[],a=[],o=new C,l=new oe;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ne(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ne(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Nl extends Ln{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new it){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Bv extends Nl{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Fl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let f=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,d*=u,s(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Or=new C,oo=new Fl,lo=new Fl,co=new Fl;class zv extends Ln{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Or.subVectors(s[0],s[1]).add(s[0]),c=Or);const h=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Or.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Or),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),oo.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,v,m),lo.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,v,m),co.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(oo.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),lo.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),co.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(oo.calc(l),lo.calc(l),co.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function oh(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Hv(i,t){const e=1-i;return e*e*t}function Gv(i,t){return 2*(1-i)*i*t}function Vv(i,t){return i*i*t}function js(i,t,e,n){return Hv(i,t)+Gv(i,e)+Vv(i,n)}function Wv(i,t){const e=1-i;return e*e*e*t}function qv(i,t){const e=1-i;return 3*e*e*i*t}function $v(i,t){return 3*(1-i)*i*i*t}function Xv(i,t){return i*i*i*t}function Ys(i,t,e,n,s){return Wv(i,t)+qv(i,e)+$v(i,n)+Xv(i,s)}class bu extends Ln{constructor(t=new it,e=new it,n=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new it){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ys(t,s.x,r.x,a.x,o.x),Ys(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jv extends Ln{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ys(t,s.x,r.x,a.x,o.x),Ys(t,s.y,r.y,a.y,o.y),Ys(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wu extends Ln{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yv extends Ln{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tu extends Ln{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(js(t,s.x,r.x,a.x),js(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jv extends Ln{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(js(t,s.x,r.x,a.x),js(t,s.y,r.y,a.y),js(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Eu extends Ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(oh(o,l.x,c.x,u.x,h.x),oh(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new it().fromArray(s))}return this}}var lh=Object.freeze({__proto__:null,ArcCurve:Bv,CatmullRomCurve3:zv,CubicBezierCurve:bu,CubicBezierCurve3:jv,EllipseCurve:Nl,LineCurve:wu,LineCurve3:Yv,QuadraticBezierCurve:Tu,QuadraticBezierCurve3:Jv,SplineCurve:Eu});class Zv extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new lh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new lh[s.type]().fromJSON(s))}return this}}class fl extends Zv{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new wu(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Tu(this.currentPoint.clone(),new it(t,e),new it(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new bu(this.currentPoint.clone(),new it(t,e),new it(n,s),new it(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Eu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Nl(t,e,n,s,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class kl extends Pe{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ne(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/e,h=new C,f=new it,d=new C,g=new C,v=new C;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(g)}for(let y=0;y<=e;y++){const x=n+y*u*s,_=Math.sin(x),R=Math.cos(x);for(let E=0;E<=t.length-1;E++){h.x=t[E].x*_,h.y=t[E].y,h.z=t[E].x*R,a.push(h.x,h.y,h.z),f.x=y/e,f.y=E/(t.length-1),o.push(f.x,f.y);const A=l[3*E+0]*_,P=l[3*E+1],w=l[3*E+0]*R;c.push(A,P,w)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){const _=x+y*t.length,R=_,E=_+t.length,A=_+t.length+1,P=_+1;r.push(R,E,P),r.push(A,P,E)}this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("uv",new Qt(o,2)),this.setAttribute("normal",new Qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kl(t.points,t.segments,t.phiStart,t.phiLength)}}class wa extends kl{constructor(t=1,e=1,n=4,s=8){const r=new fl;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new wa(t.radius,t.length,t.capSegments,t.radialSegments)}}class ci extends Pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new C,u=new it;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=n+h/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(o,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Re extends Pe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const v=[],m=n/2;let p=0;y(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Qt(h,3)),this.setAttribute("normal",new Qt(f,3)),this.setAttribute("uv",new Qt(d,2));function y(){const _=new C,R=new C;let E=0;const A=(e-t)/n;for(let P=0;P<=r;P++){const w=[],S=P/r,L=S*(e-t)+t;for(let H=0;H<=s;H++){const z=H/s,q=z*l+o,J=Math.sin(q),W=Math.cos(q);R.x=L*J,R.y=-S*n+m,R.z=L*W,h.push(R.x,R.y,R.z),_.set(J,A,W).normalize(),f.push(_.x,_.y,_.z),d.push(z,1-S),w.push(g++)}v.push(w)}for(let P=0;P<s;P++)for(let w=0;w<r;w++){const S=v[w][P],L=v[w+1][P],H=v[w+1][P+1],z=v[w][P+1];(t>0||w!==0)&&(u.push(S,L,z),E+=3),(e>0||w!==r-1)&&(u.push(L,H,z),E+=3)}c.addGroup(p,E,0),p+=E}function x(_){const R=g,E=new it,A=new C;let P=0;const w=_===!0?t:e,S=_===!0?1:-1;for(let H=1;H<=s;H++)h.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),g++;const L=g;for(let H=0;H<=s;H++){const q=H/s*l+o,J=Math.cos(q),W=Math.sin(q);A.x=w*W,A.y=m*S,A.z=w*J,h.push(A.x,A.y,A.z),f.push(0,S,0),E.x=J*.5+.5,E.y=W*.5*S+.5,d.push(E.x,E.y),g++}for(let H=0;H<s;H++){const z=R+H,q=L+H;_===!0?u.push(q,q+1,z):u.push(q+1,q,z),P+=3}c.addGroup(p,P,_===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bi extends Re{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Bi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ol extends Pe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new C,_=new C,R=new C;for(let E=0;E<e.length;E+=3)d(e[E+0],x),d(e[E+1],_),d(e[E+2],R),l(x,_,R,y)}function l(y,x,_,R){const E=R+1,A=[];for(let P=0;P<=E;P++){A[P]=[];const w=y.clone().lerp(_,P/E),S=x.clone().lerp(_,P/E),L=E-P;for(let H=0;H<=L;H++)H===0&&P===E?A[P][H]=w:A[P][H]=w.clone().lerp(S,H/L)}for(let P=0;P<E;P++)for(let w=0;w<2*(E-P)-1;w++){const S=Math.floor(w/2);w%2===0?(f(A[P][S+1]),f(A[P+1][S]),f(A[P][S])):(f(A[P][S+1]),f(A[P+1][S+1]),f(A[P+1][S]))}}function c(y){const x=new C;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(y),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function u(){const y=new C;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const _=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;a.push(_,1-R)}g(),h()}function h(){for(let y=0;y<a.length;y+=6){const x=a[y+0],_=a[y+2],R=a[y+4],E=Math.max(x,_,R),A=Math.min(x,_,R);E>.9&&A<.1&&(x<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,x){const _=y*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function g(){const y=new C,x=new C,_=new C,R=new C,E=new it,A=new it,P=new it;for(let w=0,S=0;w<r.length;w+=9,S+=6){y.set(r[w+0],r[w+1],r[w+2]),x.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),E.set(a[S+0],a[S+1]),A.set(a[S+2],a[S+3]),P.set(a[S+4],a[S+5]),R.copy(y).add(x).add(_).divideScalar(3);const L=m(R);v(E,S+0,y,L),v(A,S+2,x,L),v(P,S+4,_,L)}}function v(y,x,_,R){R<0&&y.x===1&&(a[x]=y.x-1),_.x===0&&_.z===0&&(a[x]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ol(t.vertices,t.indices,t.radius,t.details)}}class xs extends Ol{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xs(t.radius,t.detail)}}class Au extends fl{constructor(t){super(t),this.uuid=Cn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new fl().fromJSON(s))}return this}}const Kv={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Cu(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,h,f,d;if(n&&(r=i_(i,t,r,e)),i.length>80*e){o=c=i[0],l=u=i[1];for(let g=e;g<s;g+=e)h=i[g],f=i[g+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-o,u-l),d=d!==0?32767/d:0}return Qs(r,a,e,o,l,d,0),a}};function Cu(i,t,e,n,s){let r,a;if(s===p_(i,t,e,n)>0)for(r=t;r<e;r+=n)a=ch(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=ch(r,i[r],i[r+1],a);return a&&Ta(a,a.next)&&(er(a),a=a.next),a}function Ni(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ta(e,e.next)||Se(e.prev,e,e.next)===0)){if(er(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Qs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&l_(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?t_(i,n,s,r):Qv(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),er(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=e_(Ni(i),t,e),Qs(i,t,e,n,s,r,2)):a===2&&n_(i,t,e,n,s,r):Qs(Ni(i),t,e,n,s,r,1);break}}}function Qv(i){const t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,h=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&hs(s,o,r,l,a,c,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function t_(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Se(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,h=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,v=o>l?o>c?o:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=dl(d,g,t,e,n),y=dl(v,m,t,e,n);let x=i.prevZ,_=i.nextZ;for(;x&&x.z>=p&&_&&_.z<=y;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&hs(o,u,l,h,c,f,x.x,x.y)&&Se(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&hs(o,u,l,h,c,f,_.x,_.y)&&Se(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&hs(o,u,l,h,c,f,x.x,x.y)&&Se(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=y;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&hs(o,u,l,h,c,f,_.x,_.y)&&Se(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function e_(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Ta(s,r)&&Ru(s,n,n.next,r)&&tr(s,r)&&tr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),er(n),er(n.next),n=i=r),n=n.next}while(n!==i);return Ni(n)}function n_(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&u_(a,o)){let l=Pu(a,o);a=Ni(a,a.next),l=Ni(l,l.next),Qs(a,t,e,n,s,r,0),Qs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function i_(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Cu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(h_(c));for(s.sort(s_),r=0;r<s.length;r++)e=r_(s[r],e);return e}function s_(i,t){return i.x-t.x}function r_(i,t){const e=a_(i,t);if(!e)return t;const n=Pu(e,i);return Ni(n,n.next),Ni(e,e.next)}function a_(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&hs(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(r-e.x),tr(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&o_(s,e)))&&(s=e,u=h)),e=e.next;while(e!==o);return s}function o_(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function l_(i,t,e,n){let s=i;do s.z===0&&(s.z=dl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,c_(s)}function c_(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function dl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function h_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function hs(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function u_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!f_(i,t)&&(tr(i,t)&&tr(t,i)&&d_(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||Ta(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ta(i,t){return i.x===t.x&&i.y===t.y}function Ru(i,t,e,n){const s=zr(Se(i,t,e)),r=zr(Se(i,t,n)),a=zr(Se(e,n,i)),o=zr(Se(e,n,t));return!!(s!==r&&a!==o||s===0&&Br(i,e,t)||r===0&&Br(i,n,t)||a===0&&Br(e,i,n)||o===0&&Br(e,t,n))}function Br(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function zr(i){return i>0?1:i<0?-1:0}function f_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ru(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function tr(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function d_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Pu(i,t){const e=new pl(i.i,i.x,i.y),n=new pl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ch(i,t,e,n){const s=new pl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function er(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function pl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function p_(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Js{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Js.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];hh(t),uh(n,t);let a=t.length;e.forEach(hh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,uh(n,e[l]);const o=Kv.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function hh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function uh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Pi extends Pe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=t;const f=(e-t)/s,d=new C,g=new it;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const y=p+m,x=y,_=y+n+1,R=y+n+2,E=y+1;o.push(x,_,E),o.push(_,R,E)}}this.setIndex(o),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Bl extends Pe{constructor(t=new Au([new it(0,.5),new it(-.5,-.5),new it(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Qt(s,3)),this.setAttribute("normal",new Qt(r,3)),this.setAttribute("uv",new Qt(a,2));function c(u){const h=s.length/3,f=u.extractPoints(e);let d=f.shape;const g=f.holes;Js.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];Js.isClockWise(y)===!0&&(g[m]=y.reverse())}const v=Js.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){const y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=v.length;m<p;m++){const y=v[m],x=y[0]+h,_=y[1]+h,R=y[2]+h;n.push(x,_,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return m_(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new Bl(n,t.curveSegments)}}function m_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class ze extends Pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new C,f=new C,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const y=[],x=p/n;let _=0;p===0&&a===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let R=0;R<=e;R++){const E=R/e;h.x=-t*Math.cos(s+E*r)*Math.sin(a+x*o),h.y=t*Math.cos(a+x*o),h.z=t*Math.sin(s+E*r)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(E+_,1-x),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const x=u[p][y+1],_=u[p][y],R=u[p+1][y],E=u[p+1][y+1];(p!==0||a>0)&&d.push(x,_,E),(p!==n-1||l<Math.PI)&&d.push(_,R,E)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ze(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class sn extends Pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new C,h=new C,f=new C;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const v=g/s*r,m=d/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(v),h.y=(t+e*Math.cos(m))*Math.sin(v),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const v=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,y=(s+1)*d+g;a.push(v,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ua extends Oi{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Et(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jh,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class zl extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Lu extends zl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ho=new oe,fh=new C,dh=new C;class Iu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Il,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;fh.setFromMatrixPosition(t.matrixWorld),e.position.copy(fh),dh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dh),e.updateMatrixWorld(),ho.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ho),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ho)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ph=new oe,Bs=new C,uo=new C;class g_ extends Iu{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Bs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Bs),uo.copy(n.position),uo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(uo),n.updateMatrixWorld(),s.makeTranslation(-Bs.x,-Bs.y,-Bs.z),ph.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ph)}}class v_ extends zl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new g_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class __ extends Iu{constructor(){super(new uu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Du extends zl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new __}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class y_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=mh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function mh(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wl);const ml=(()=>{const i=new Uint8Array([95,165,225,255]),t=new Mu(i,i.length,1,Ma);return t.minFilter=t.magFilter=Ye,t.needsUpdate=!0,t})(),fo=new Map;function st(i,t={}){const{noCache:e,...n}=t;if(e)return new ua({color:i,gradientMap:ml,...n});const s=i+JSON.stringify(n);if(fo.has(s))return fo.get(s);const r=new ua({color:i,gradientMap:ml,...n});return fo.set(s,r),r}const po=new Map;function Kr(i,t={}){const e=i+JSON.stringify(t);if(po.has(e))return po.get(e);const n=new xn({color:i,...t});return po.set(e,n),n}function hn(i,t=!1){return i.traverse(e=>{e.isMesh&&(e.castShadow=!0,t&&(e.receiveShadow=!0))}),i}const mo=new Map;function ye(i,t){return mo.has(i)||mo.set(i,t()),mo.get(i)}const rt=(i,t)=>new Te(i,t);function Ea(i,t,e){const n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);const s=new Ov(n);return s.colorSpace=We,s.anisotropy=4,s}function Uu(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}const gl="'Baloo 2', 'Comic Sans MS', system-ui, sans-serif";function Hr(i,{bg:t="#fffaf0",fg:e="#4a2f12",border:n="#e0b44a",height:s=.9,bold:r=800}={}){const o=document.createElement("canvas").getContext("2d");o.font=`${r} 64px ${gl}`;const c=Math.ceil(o.measureText(i).width)+70,u=110,h=Ea(c,u,d=>{Uu(d,6,6,c-12,u-12,40),d.fillStyle=t,d.fill(),d.lineWidth=8,d.strokeStyle=n,d.stroke(),d.font=`${r} 64px ${gl}`,d.fillStyle=e,d.textAlign="center",d.textBaseline="middle",d.fillText(i,c/2,u/2+4)}),f=new Nv(new yu({map:h,depthWrite:!1}));return f.scale.set(s*(c/u),s,1),f.renderOrder=5,f}function x_(i,t,{z:e=.93}={}){const n=ye("eye",()=>new ze(.06,10,8));for(const r of[-1,1]){const a=rt(n,Kr(2234900));a.position.set(.34*t*r,.1*t,e*t),a.scale.set(t/.42,1.35*t/.42,.6),i.add(a);const o=rt(ye("cheek",()=>new ze(.06,8,6)),Kr(16748451,{transparent:!0,opacity:.6}));o.position.set(.6*t*r,-.2*t,.76*t),o.scale.z=.4,i.add(o)}const s=rt(ye("smile",()=>new sn(.1,.022,6,14,Math.PI)),Kr(7023386));s.rotation.z=Math.PI,s.position.set(0,-.22*t,.95*t),s.scale.setScalar(t/.42),i.add(s)}function Hl({kind:i="boy",color:t="#3fae49",skinTone:e=0}={}){const n=new ue,s=new Et(t),r=i==="woman"||i==="girl",a=i==="boy"||i==="girl",o=[13011550,11564624,14723192,9263675],l=st(o[e%o.length]),c=rt(ye("base",()=>new Re(.62,.68,.16,28)),st(s.getHex()));c.position.y=.08,n.add(c);const u=rt(ye("rim",()=>new sn(.64,.05,6,28)),st(16777215));u.rotation.x=Math.PI/2,u.position.y=.16,n.add(u);const h=new ue;h.name="figure",h.position.y=.16,n.add(h);const f=st(16514039),d=st(15526884),g=s.clone().lerp(new Et(16777215),.12).getHex(),v=r?st(s.clone().multiplyScalar(.88).getHex()):f,m=rt(new Re(.3,.5,1.05,18),v);if(m.position.y=.55,h.add(m),r){const _=rt(ye("hem",()=>new sn(.49,.04,6,22)),st(g));_.rotation.x=Math.PI/2,_.position.y=.06,h.add(_)}else{const _=rt(new Re(.34,.44,.55,18,1,!0),d);_.material=st(15855850,{side:Me}),_.position.y=.86,h.add(_);const R=rt(new sn(.4,.035,6,20),d);R.position.y=.78,R.rotation.set(Math.PI/2+.35,0,.4),h.add(R);const E=rt(new sn(.42,.045,6,22),st(s.getHex()));E.position.y=.72,E.rotation.set(Math.PI/2-.5,0,-.5),h.add(E);const A=rt(new se(.2,.24,.04),st(s.getHex()));A.position.set(0,.72,.39),A.rotation.x=-.25,h.add(A)}for(const _ of[-1,1]){const R=new ue;R.position.set(.36*_,1,0);const E=rt(ye("sleeve",()=>new wa(.1,.42,4,8)),r?v:f);E.position.y=-.26,R.add(E);const A=rt(ye("hand",()=>new ze(.1,10,8)),l);A.position.y=-.55,R.add(A),R.rotation.z=.2*_,R.name=_<0?"armL":"armR",h.add(R)}for(const _ of[-1,1]){const R=rt(ye("shoe",()=>new ze(.12,10,8)),st(8016432));R.scale.set(1,.5,1.4),R.position.set(.17*_,.03,.12),h.add(R)}const p=new ue;p.position.y=1.5,p.name="head";const y=.42;if(p.add(rt(ye("headS",()=>new ze(y,22,18)),l)),r){const _=st(g),R=rt(ye("hood",()=>new ze(.5,22,18,0,Math.PI*2,0,Math.PI*.62)),_);R.rotation.x=-.35,R.position.set(0,.02,-.08),p.add(R);const E=rt(ye("hback",()=>new ze(.5,20,16)),_);E.scale.set(1,1,.8),E.position.set(0,-.02,-.14),p.add(E);const A=rt(ye("drape",()=>new Bi(.64,.72,22,1,!0)),st(g,{side:Me}));A.position.y=-.5,p.add(A)}else{const _=rt(ye("hair",()=>new ze(.435,20,14,0,Math.PI*2,0,Math.PI*.4)),st(2824720));_.rotation.x=-.28,p.add(_)}x_(p,y),h.add(p);const x=a?.86:1;return h.scale.setScalar(x),a&&p.scale.setScalar(1.12),hn(n)}function M_(i,t=[16777215]){const e=new wa(.13,.28,3,6);e.translate(0,.27,0);const n=new ri(e,st(16777215),i),s=new Et;for(let r=0;r<i;r++)n.setColorAt(r,s.set(t[r%t.length]));return n.castShadow=!1,n}function vl(){const i=new ue,t=rt(new se(2.9,.16,2.6),st(13617339));t.position.y=.08,i.add(t);const e=rt(new se(2.6,3,2.3),st(1776415));e.position.y=1.66,i.add(e);const n=rt(new se(2.64,.3,2.34),st(14264892));n.position.y=2.45,i.add(n);const s=rt(new se(2.645,.05,2.345),st(11568682));s.position.y=2.45,i.add(s);const r=rt(new se(.62,1.05,.06),st(14264892));r.position.set(.55,1.75,1.16),i.add(r);const a=rt(new sn(.12,.04,6,14),st(14211288));return a.position.set(1.31,1.2,1.16),a.rotation.y=Math.PI/4,i.add(a),hn(i)}function Nu(i=6){const t=new ue,e=st(15853520),n=st(13220250),s=rt(new Re(.28,.36,i,10),e);s.position.y=i/2,t.add(s);for(const o of[i*.55,i*.85]){const l=rt(new Re(.46,.4,.18,12),n);l.position.y=o,t.add(l)}const r=rt(new Bi(.3,.9,10),st(10135456));r.position.y=i+.45,t.add(r);const a=rt(new sn(.1,.03,6,12,Math.PI*1.4),st(14264892));return a.position.y=i+1.02,t.add(a),t}function S_(){const i=new ue,t=rt(new ci(7.6,64),st(16184300));t.rotation.x=-Math.PI/2,t.position.y=.03,t.receiveShadow=!0,i.add(t);for(const d of[3.2,5.2]){const g=rt(new Pi(d-.03,d+.03,64),Kr(14998731));g.rotation.x=-Math.PI/2,g.position.y=.035,i.add(g)}const e=8.15,n=new se(.28,1.25,.28),s=new ri(n,st(15853520),48),r=new me;for(let d=0;d<48;d++){const g=d/48*Math.PI*2;r.position.set(Math.cos(g)*e,.63,Math.sin(g)*e),r.rotation.y=-g,r.updateMatrix(),s.setMatrixAt(d,r.matrix)}s.castShadow=!0,i.add(s);const a=rt(new Re(e+.35,e+.35,.32,64,1,!0),st(15260866,{side:Me}));a.position.y=1.4,i.add(a);const o=rt(new Pi(e-.35,e+.35,64),st(16050899,{side:Me}));o.rotation.x=-Math.PI/2,o.position.y=1.56,i.add(o);const l=rt(new Re(e-.35,e-.35,.32,64,1,!0),st(14734004,{side:Me}));l.position.y=1.4,i.add(l);for(const d of[-2.75,-1.95,-1.2]){const g=Nu(6.5);g.position.set(Math.cos(d)*12.6,0,Math.sin(d)*12.6),i.add(g)}const c=vl();c.rotation.y=.3,i.add(c);const u=rt(new ze(.28,12,8,0,Math.PI*2,0,Math.PI/2),st(14264892));u.position.set(1.2,.05,2.6),i.add(u);const h=M_(170,[16777215,16777215,16053488,16777215,14207976,10406368,16777215,15259317]);h.name="crowd";const f=[];for(let d=0;d<170;d++)f.push({r:2.25+Math.random()*4.6,a:Math.random()*Math.PI*2,sp:.1+Math.random()*.08});return h.userData.seeds=f,i.add(h),i.userData.update=d=>{const g=new me;f.forEach((v,m)=>{v.a-=v.sp/v.r*2.2*d,g.position.set(Math.cos(v.a)*v.r,.03,Math.sin(v.a)*v.r),g.updateMatrix(),h.setMatrixAt(m,g.matrix)}),h.instanceMatrix.needsUpdate=!0},i.userData.update(0),hn(i)}function Fu(i=16){const t=new ue,e=rt(new se(i,.1,2.4),st(16184300));e.position.y=.05,e.receiveShadow=!0,t.add(e);const n=rt(new se(i,.22,2.7),st(15260866));n.position.y=1.6,t.add(n);const s=Math.round(i/1.3);for(let r=0;r<=s;r++)for(const a of[-1,1]){const o=rt(ye("masaP",()=>new se(.2,1.5,.2)),st(15853520));o.position.set(-i/2+r/s*i,.8,a*1.18),t.add(o)}for(const r of[-1.2,1.2]){const a=rt(new se(.35,.08,2.5),new xn({color:3923050}));a.position.set(r,1.47,0),t.add(a)}for(const r of[-1,1]){const a=rt(new xs(1.5,0),st(10848876));a.scale.set(1.1,.75,1),a.position.set(r*(i/2+1.1),.7,0),t.add(a);const o=rt(new xs(.7,0),st(9401944));o.position.set(r*(i/2+.6),1.2,.5),t.add(o)}return hn(t)}function ku({dome:i=4173450}={}){const t=new ue,e=st(16050899),n=rt(new se(3.2,1.8,2.6),e);n.position.y=.9,t.add(n);const s=rt(new Re(.95,.95,.4,16),e);s.position.y=2,t.add(s);const r=rt(new ze(.95,18,12,0,Math.PI*2,0,Math.PI/2),st(i));r.position.y=2.2,t.add(r);const a=rt(new se(.7,1.1,.05),st(2792847));a.position.set(0,.55,1.31),t.add(a);const o=rt(new Re(.35,.35,.05,14,1,!1,0,Math.PI),st(2792847));o.rotation.set(Math.PI/2,Math.PI/2,0),o.rotation.set(-Math.PI/2,0,Math.PI/2),o.position.set(0,1.1,1.31),t.add(o);const l=Nu(4.2);return l.position.set(1.9,0,-.9),l.scale.setScalar(.85),t.add(l),hn(t)}function Ou(i){const t=new ue,e=new se(1.35,.6,1.35);e.translate(0,.3,0);const n=new Bi(1,.7,4);n.rotateY(Math.PI/4),n.translate(0,.95,0);const s=i.length,r=new ri(e,st(16777215),s),a=new ri(n,st(15987699),s),o=new me;return i.forEach((l,c)=>{o.position.set(l.x,0,l.z),o.rotation.y=l.r||0,o.updateMatrix(),r.setMatrixAt(c,o.matrix),a.setMatrixAt(c,o.matrix)}),r.castShadow=a.castShadow=!0,t.add(r,a),t}function _l(i=4,t=4.2,e=11111274){const n=new ue,s=new Bi(i,t,9,3),r=s.attributes.position;for(let o=0;o<r.count;o++){const l=r.getY(o);if(l<t/2-.01&&l>-t/2+.01){const c=.85+(Math.sin(o*12.9898)*43758.5453%1+1)%1*.3;r.setX(o,r.getX(o)*c),r.setZ(o,r.getZ(o)*c)}}s.computeVertexNormals();const a=rt(s,st(e,{flatShading:!0}));return a.position.y=t/2,n.add(a),hn(n)}function Bu(){const i=new ue,t=rt(new se(.35,1.6,.35),st(16777215));t.position.y=.8,i.add(t);const e=rt(new se(.9,.3,.9),st(15658734));return e.position.y=.15,i.add(e),hn(i)}function Ws(i=2){const t=new ue,e=[1.5,2.1,2.9][i],n=[1.5,1.9,2.4][i],s=rt(new Re(1,1,.35,28,1,!0),st(13617339,{side:Me}));s.scale.set(e*.75+.6,1,1.1),s.position.y=.17,t.add(s);const r=rt(new ci(1,28),st(12103842));r.rotation.x=-Math.PI/2,r.scale.set(e*.75+.6,1.1,1),r.position.y=.05,t.add(r);const a=rt(new se(e,n,.45),st(12168608));a.position.y=n/2,t.add(a);const o=rt(new se(e+.1,.12,.55),st(10260868));return o.position.y=n,t.add(o),hn(t)}function Qr(i=15909995,t=4173385){const e=new ue,n=rt(ye("parcel",()=>new se(.5,.36,.5)),st(i));n.position.y=.18,e.add(n);for(const s of[0,Math.PI/2]){const r=rt(ye("ribbon",()=>new se(.52,.38,.08)),st(t));r.position.y=.18,r.rotation.y=s,e.add(r)}return e}function ta({wall:i=16050899,awning:t=4171488}={}){const e=new ue,n=rt(new se(2.4,1.6,1.8),st(i));n.position.y=.8,e.add(n);const s=rt(new se(2.6,.12,.9),st(t));s.position.set(0,1.35,1.2),s.rotation.x=.3,e.add(s);const r=rt(new se(.7,1,.05),st(8016432));return r.position.set(0,.5,.91),e.add(r),hn(e)}function zu(i=4173385){const t=new ue,e=st(i);for(const s of[-1,1]){const r=rt(new se(.35,2.6,.35),e);r.position.set(s*1.4,1.3,0),t.add(r)}const n=rt(new sn(1.4,.18,8,20,Math.PI),e);return n.position.y=2.6,t.add(n),hn(t)}function Hu(i=3.5){const t=new ue,e=st(10251066),n=6;for(let a=0;a<n;a++){const o=rt(new Re(.17-a*.01,.22-a*.01,i/n+.04,7),e);o.position.set(Math.sin(a*.35)*.2,(a+.5)*(i/n),0),t.add(o)}const s=new C(Math.sin(n*.35)*.2,i,0),r=st(4173385,{side:Me});for(let a=0;a<6;a++){const o=rt(ye("leaf",()=>new ze(1,8,5,0,Math.PI*2,0,Math.PI/2)),r);o.scale.set(1.3,.22,.34),o.position.copy(s),o.rotation.y=a/6*Math.PI*2,o.rotation.z=-.45,o.translateX(.85),t.add(o)}return hn(t)}function ea(i=1){const t=new ue,e=rt(new Re(.12,.18,.9,6),st(9067827));e.position.y=.45,t.add(e);for(const[n,s,r]of[[0,1.2,.6],[.35,1,.45],[-.35,1.05,.45]]){const a=rt(ye("treeS"+r,()=>new ze(r,9,7)),st(5221967));a.position.set(n,s,0),t.add(a)}return t.scale.setScalar(i),hn(t)}function Gu(i=1,t=11836024){const e=rt(ye("rock",()=>new xs(.5,0)),st(t,{flatShading:!0}));return e.scale.set(i*1.3,i*.8,i),e.position.y=i*.3,e.castShadow=!0,e}function na(){const i=new ue,t=rt(new Re(.06,.08,2.2,6),st(5987174));t.position.y=1.1,i.add(t);const e=rt(new ze(.2,10,8),new xn({color:16773808}));return e.position.y=2.25,e.name="bulb",i.add(e),i}function b_(i){return Ea(128,128,(t,e,n)=>{t.fillStyle="#fffaf0",t.fillRect(0,0,e,n),Uu(t,6,6,e-12,n-12,26),t.fillStyle="#ffffff",t.fill(),t.lineWidth=6,t.strokeStyle="#f0d9a8",t.stroke();const s={1:[[2,2]],2:[[1,1],[3,3]],3:[[1,1],[2,2],[3,3]],4:[[1,1],[3,1],[1,3],[3,3]],5:[[1,1],[3,1],[2,2],[1,3],[3,3]],6:[[1,1],[3,1],[1,2],[3,2],[1,3],[3,3]]}[i];for(const[r,a]of s)t.beginPath(),t.arc(r*32,a*32,i===1?17:12,0,Math.PI*2),t.fillStyle=i===1?"#e04a5f":"#3a2a1a",t.fill()})}const w_=[3,4,1,6,2,5];function Vu(){const i=w_.map(e=>new ua({map:b_(e),gradientMap:ml}));return new Te(new se(1,1,1),i)}function Wu(i){return{1:[Math.PI/2,0],6:[-Math.PI/2,0],2:[0,0],5:[0,Math.PI],3:[0,-Math.PI/2],4:[0,Math.PI/2]}[i]}const gh={p:{color:16774102,icon:""},g:{color:8313175,icon:"⭐"},q:{color:7259903,icon:"❓"},o:{color:16757596,icon:"😅"},start:{color:16744118,icon:"🚩"},finish:{color:16744118,icon:"🏠"},station:{color:16765514,icon:""}},go=new Map;function T_(i,t){const e=i+"|"+(t||"");if(go.has(e))return go.get(e);const n=Ea(128,128,(s,r,a)=>{s.textAlign="center",s.textBaseline="middle",t?(s.font=`800 72px ${gl}`,s.fillStyle="#7a4a00",s.fillText(String(t),r/2,a/2+6)):(s.font='74px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',s.fillText(i,r/2,a/2+4))});return go.set(e,n),n}function qu(i,t,e=null){const n=gh[i]||gh.p,s=new ue,r=i==="station"||i==="start"||i==="finish",a=r?1.2:.85,o=rt(ye("tile"+a,()=>new Re(a,a+.06,.26,32)),st(n.color));o.position.y=.13,o.receiveShadow=!0,s.add(o);const l=r?16777215:new Et(n.color).multiplyScalar(.82).getHex(),c=rt(ye("rim"+a,()=>new sn(a-.05,.06,6,32)),st(l));if(c.rotation.x=Math.PI/2,c.position.y=.27,s.add(c),e!=null){const u=rt(ye("ring"+a,()=>new sn(a-.22,.045,6,32)),st(e));u.rotation.x=Math.PI/2,u.position.y=.275,s.add(u);const h=rt(ye("flagpole",()=>new Re(.04,.05,1.9,6)),st(11569232));h.position.set(a*.95,.95,-a*.55),s.add(h);const f=rt(ye("flag",()=>{const d=new Au;return d.moveTo(0,0),d.lineTo(.75,.2),d.lineTo(0,.42),d.closePath(),new Bl(d)}),st(e,{side:Me}));f.position.set(a*.97,1.45,-a*.55),f.rotation.y=-.5,f.name="flag",s.add(f)}if(n.icon||t){const u=rt(new ci(a*.72,24),new xn({map:T_(n.icon,t),transparent:!0,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.position.y=.28,s.add(u)}return s}function E_(i=64){const t=new Ts(.22,.22),e=new ri(t,new xn({color:16777215,side:Me,transparent:!0,opacity:.95,depthWrite:!1}),i);return e.instanceColor=new hl(new Float32Array(i*3).fill(1),3),e.count=0,e.frustumCulled=!1,e}const ia=[{ar:"لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ",tr:"Labbayk Allāhumma labbayk",en:"Here I am, O Allah, here I am."},{ar:"لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ",tr:"Labbayka lā sharīka laka labbayk",en:"Here I am, You have no partner, here I am."},{ar:"إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ",tr:"Innal-ḥamda wan-niʿmata laka wal-mulk",en:"All praise and all blessings are Yours, and all power."},{ar:"لَا شَرِيكَ لَكَ",tr:"Lā sharīka lak",en:"You have no partner."}],$u="Sahih al-Bukhari & Sahih Muslim",sa={title:"Three ways to do Hajj",text:"There are three ways to perform Hajj: Tamattuʿ, Qirān and Ifrād. This journey follows Hajj at-Tamattuʿ — the way most pilgrims from far away do it. First you do an ʿUmrah and come out of ihram, then on the 8th of Dhul Hijjah you put on ihram again for Hajj."},Ms={text:"Pilgrimage to the House is a duty owed to Allah by people who are able to make the journey.",source:"Quran 3:97 (meaning)"},fa={text:"An accepted Hajj (Hajj Mabrur) has no reward except Paradise.",source:"Sahih al-Bukhari & Sahih Muslim"},be=[{id:"miqat",icon:"🤍",name:"The Miqat",place:"Miqat",day:"Arriving for Hajj",sky:"morning",activities:["talbiyah"],intro:"The Miqat is the special boundary where pilgrims get ready. They make their intention, put on ihram and start saying the Talbiyah. Men wear two plain white sheets. Women wear their normal loose, modest clothes. Everyone looks alike — rich or poor, all equal before Allah.",facts:["Pilgrims make the intention (niyyah) at the Miqat. For Tamattuʿ, the intention is first for ʿUmrah.","Ihram for men is two plain white, unstitched sheets. Women wear normal loose, modest clothes.","In ihram pilgrims do not use perfume, cut hair or nails, hunt, or argue.",'Then they say the Talbiyah again and again: "Labbayk Allāhumma labbayk!"'],quote:{text:"Call the people to Hajj. They will come to you on foot and on every lean camel, from every far-away road.",source:"Quran 22:27 (meaning) — Allah's command to Prophet Ibrahim (peace be upon him)"}},{id:"tawaf",icon:"🔄",name:"Tawaf of ʿUmrah",place:"Masjid al-Haram",day:"Arriving in Makkah",sky:"day",activities:["tawaf"],intro:"Welcome to Masjid al-Haram in Makkah! Pilgrims walk around the Kaaba seven times. This is called Tawaf. They go anticlockwise, keeping the Kaaba on their left side, starting and ending at the corner with the Black Stone.",facts:["Tawaf is 7 circuits around the Kaaba, going anticlockwise, with the Kaaba on your left.",'Each circuit starts and ends at the corner of the Black Stone. Pilgrims say "Allāhu Akbar" there.',"After Tawaf, pilgrims pray two rakʿahs behind Maqam Ibrahim if they can, and drink Zamzam water.","The Kaaba was built by Prophet Ibrahim and his son Prophet Ismaʿil (peace be upon them)."],quote:{text:"And remember when Ibrahim and Ismaʿil were raising the foundations of the House…",source:"Quran 2:127 (meaning)"}},{id:"sai",icon:"⛰️",name:"Saʿi: Safa & Marwah",place:"Safa & Marwah",day:"Arriving in Makkah",sky:"afternoon",activities:["sai"],intro:"Now pilgrims walk seven times between two small hills, Safa and Marwah. This is called Saʿi. It starts at Safa and ends at Marwah. Pilgrims remember Hajar (peace be upon her), who ran between these hills looking for water for her baby.",story:["Long ago, Prophet Ibrahim (peace be upon him) left his wife Hajar and their baby Ismaʿil in this dry valley, by the command of Allah.","Hajar trusted Allah. When their water ran out, the baby grew very thirsty.","Hajar climbed the hill of Safa to look for help… then ran to the hill of Marwah… back and forth.","She went between the two hills seven times, never giving up.","Then, by Allah's mercy, water gushed from the ground near the baby!","That spring is Zamzam. It still flows today, and pilgrims drink from it.","When we walk between Safa and Marwah, we remember Hajar's trust in Allah."],facts:["Saʿi is 7 laps. Safa to Marwah is 1, Marwah back to Safa is 2… ending at Marwah on lap 7.","Between the green lights, men walk a little faster; women walk at a normal pace.","The story of Hajar and the spring of Zamzam is told in Sahih al-Bukhari."],quote:{text:"Indeed, Safa and Marwah are among the symbols of Allah.",source:"Quran 2:158 (meaning)"}},{id:"trim1",icon:"✂️",name:"ʿUmrah complete!",place:"Makkah",day:"Arriving in Makkah",sky:"afternoon",activities:["trim"],intro:"The ʿUmrah is done! To finish it, pilgrims cut their hair. Men usually trim now, saving the full shave for the Day of Eid. Women trim just a little — about a fingertip's length. Now they come out of ihram and wait for the days of Hajj.",facts:["Cutting the hair ends the ʿUmrah. Then pilgrims come out of ihram.","Men shave or trim; in Tamattuʿ many men just trim now and shave on the 10th.","Women trim a small lock, about a fingertip's length."],quote:{text:"Hajj is in the well-known months… and whatever good you do, Allah knows it.",source:"Quran 2:197 (meaning)"}},{id:"mina8",icon:"⛺",name:"Mina — Day of Tarwiyah",place:"Mina",day:"8 Dhul Hijjah",sky:"morning",activities:["tent"],intro:"It is the 8th of Dhul Hijjah! Pilgrims put on ihram again, this time for Hajj, say the Talbiyah, and travel to Mina — a valley full of white tents. They stay there for the day and night, praying each prayer on time, with the four-rakʿah prayers shortened to two.",facts:["On the 8th, Tamattuʿ pilgrims put on ihram again, from where they are staying in Makkah.","In Mina they pray Dhuhr, ʿAsr, Maghrib, ʿIsha and the next Fajr, each at its own time.","Mina is a city of tents. Staying with your group is important!"],quote:{text:"Hajj is in the well-known months. So there should be no bad behaviour, no wrongdoing and no arguing during Hajj.",source:"Quran 2:197 (meaning)"}},{id:"arafah",icon:"🤲",name:"The Day of Arafah",place:"Mount Arafah",day:"9 Dhul Hijjah",sky:"sunset",activities:["arafah"],intro:`The 9th of Dhul Hijjah is the most important day of Hajj. Pilgrims go to the plain of Arafah and stand there from after midday until sunset, making du'a to Allah — asking for forgiveness and for all that is good. The Prophet ﷺ said: "Hajj is Arafah."`,facts:["Standing at Arafah is the heart of Hajj. Whoever misses it has missed the Hajj.","Pilgrims pray Dhuhr and ʿAsr together, shortened, then spend the afternoon in du'a.","Near Arafah is a small hill called Jabal ar-Raḥmah. Climbing it is not part of Hajj.","Muslims at home are encouraged to fast on the Day of Arafah (pilgrims do not fast)."],quote:{text:"Hajj is Arafah.",source:"Sunan at-Tirmidhi, an-Nasa'i & Ibn Majah"},quote2:{text:"The best du'a is the du'a on the Day of Arafah.",source:"Sunan at-Tirmidhi"}},{id:"muzdalifah",icon:"🌙",name:"Night at Muzdalifah",place:"Muzdalifah",day:"Night before 10 Dhul Hijjah",sky:"night",activities:["pebbles"],intro:"After sunset, pilgrims leave Arafah for Muzdalifah. They pray Maghrib and ʿIsha together, then rest under the open sky. Many pick up small pebbles here for the stoning — each one about the size of a chickpea. At dawn they pray Fajr and remember Allah.",facts:["At Muzdalifah pilgrims pray Maghrib and ʿIsha together, then sleep under the stars.","They pray Fajr there and remember Allah until it gets bright, then leave before sunrise.","Pebbles should be small, like a chickpea. Pilgrims need 7 for the 10th, and 21 for each day after — 49 or 70 in total."],quote:{text:"When you leave Arafat, remember Allah at al-Mashʿar al-Haram.",source:"Quran 2:198 (meaning)"}},{id:"aqabah",icon:"🪨",name:"Stoning Jamrat al-ʿAqabah",place:"The Jamarat",day:"10 Dhul Hijjah — Eid al-Adha",sky:"morning",activities:["jamarat-aqabah"],intro:'Eid Mubarak! It is the 10th of Dhul Hijjah, the Day of Eid al-Adha. Pilgrims go to the Jamarat — three stone walls in Mina. Today they throw seven small pebbles only at the biggest wall, Jamrat al-ʿAqabah, saying "Allāhu Akbar" with each one. The Talbiyah stops now.',facts:["On the 10th, pilgrims throw 7 pebbles at Jamrat al-ʿAqabah only — the big one.",'They say "Allāhu Akbar" with every pebble, just as the Prophet ﷺ did.',"The stoning remembers how Prophet Ibrahim (peace be upon him) turned away from the whispers of Shaytan and obeyed Allah. The walls are only markers — we are obeying Allah and rejecting evil."],quote:{text:'The Prophet ﷺ said "Allāhu Akbar" with every pebble he threw.',source:"Sahih al-Bukhari (meaning)"}},{id:"qurbani",icon:"🎁",name:"Qurbani — Sharing",place:"Mina",day:"10 Dhul Hijjah — Eid al-Adha",sky:"day",activities:["qurbani"],intro:"Tamattuʿ pilgrims offer a Qurbani (called hady). This remembers Prophet Ibrahim (peace be upon him), who was ready to obey Allah even in his hardest test — and Allah sent a ram in its place. Today most pilgrims buy a Qurbani voucher, and the meat is shared with people in need. Let's share the parcels!",facts:["Tamattuʿ and Qirān pilgrims must offer a sacrifice (hady). Muslims around the world also give Qurbani for Eid.","The meat is eaten and shared. Many scholars recommend three parts: family, friends and neighbours, and people in need.","What matters to Allah is our taqwa — being mindful of Him."],quote:{text:"Neither their meat nor their blood reaches Allah — what reaches Him is your taqwa.",source:"Quran 22:37 (meaning)"}},{id:"shave",icon:"💈",name:"Shave or Trim",place:"Mina",day:"10 Dhul Hijjah — Eid al-Adha",sky:"day",activities:["trim"],intro:"Next, men shave their heads or trim their hair, and women trim a fingertip's length. After the stoning and the haircut, most of the rules of ihram are lifted and pilgrims can change into normal clothes.",facts:["Men may shave or trim; shaving is better. Women only trim a little.","The Prophet ﷺ made du'a three times for those who shave, and once for those who trim.",'After stoning and cutting the hair, most ihram rules end (the "first release").'],quote:{text:"O Allah, have mercy on those who shave their heads… and those who trim.",source:"Sahih al-Bukhari & Sahih Muslim (meaning)"}},{id:"ifadah",icon:"🕋",name:"Tawaf al-Ifāḍah",place:"Masjid al-Haram",day:"10 Dhul Hijjah — Eid al-Adha",sky:"afternoon",activities:["tawaf","sai"],intro:"Pilgrims return to Makkah for Tawaf al-Ifāḍah — seven circuits around the Kaaba. It is one of the pillars of Hajj. Tamattuʿ pilgrims then do Saʿi again between Safa and Marwah. After this, all the rules of ihram are lifted. Eid Mubarak!",facts:["Tawaf al-Ifāḍah is a pillar (rukn) of Hajj — Hajj is not complete without it.","Tamattuʿ pilgrims also do Saʿi for their Hajj.","It can be done on the 10th or on the following days."],quote:{text:"Whoever does Hajj for Allah, without bad words or wrongdoing, returns (free of sins) like the day his mother gave birth to him.",source:"Sahih al-Bukhari & Sahih Muslim (meaning)"}},{id:"tashreeq",icon:"🪨",name:"Days of Tashreeq",place:"Mina & the Jamarat",day:"11 – 13 Dhul Hijjah",sky:"day",activities:["jamarat-tashreeq"],intro:`Pilgrims stay in Mina for the Days of Tashreeq. Each day, after midday, they stone all three Jamarat in order: the small one, then the middle one, then the big one — seven pebbles each, saying "Allāhu Akbar". They stop to make du'a after the first two.`,facts:["On the 11th, 12th (and 13th for those who stay), pilgrims stone all three Jamarat after midday.","The order is: small (al-Ṣughrā), middle (al-Wusṭā), then big (al-ʿAqabah) — 7 pebbles each.","Pilgrims may leave Mina after stoning on the 12th, or stay for the 13th."],quote:{text:"Remember Allah during the appointed days. Whoever hurries on in two days, there is no sin on him, and whoever stays on, there is no sin on him.",source:"Quran 2:203 (meaning)"}},{id:"wada",icon:"👋",name:"Farewell Tawaf",place:"Masjid al-Haram",day:"Before going home",sky:"night",activities:["tawaf"],intro:"Before leaving Makkah, pilgrims say goodbye to the Kaaba with one last Tawaf — Tawaf al-Wadāʿ, the Farewell Tawaf. It should be the last thing they do in Makkah before they travel home.",facts:["The Farewell Tawaf is the last act before leaving Makkah.","Pilgrims go home with a fresh start, full of love for Allah, and try to keep being their best.","A Hajj that is accepted by Allah is called Hajj Mabrur."],quote:{text:"None of you should leave until the last thing he does is (Tawaf) at the House.",source:"Sahih Muslim (meaning)"}}],ui=Object.fromEntries(be.map((i,t)=>[i.id,{...i,num:t+1}]));be.forEach((i,t)=>{i.num=t+1});const vh=[{icon:"🧓",text:"You helped an elderly pilgrim find the way back to their group.",move:2},{icon:"💧",text:"You shared your cold water with a thirsty pilgrim.",move:1},{icon:"🙂",text:"You smiled and said salām to a pilgrim from far away. A smile is charity!",move:1},{icon:"🧺",text:"You picked up litter and kept the holy places clean.",move:2},{icon:"⏳",text:"The crowd was slow, but you stayed patient and kind.",move:1},{icon:"🥤",text:"You handed out drinks to pilgrims resting in the shade.",move:2},{icon:"🧭",text:"You helped a lost child find their parents.",move:2},{icon:"🤝",text:"You let someone go ahead of you in the queue.",move:1}],_h=[{icon:"🧭",text:"Oops! You lost your group in the crowd. Wait at the meeting point until they find you.",skip:1,tip:"Tip: always know your group's meeting point."},{icon:"🚰",text:"Oops! You forgot your water bottle. Go back 2 spaces to fetch it.",back:2,tip:"Tip: it's hot — keep drinking water."},{icon:"😴",text:"Yawn! You were so tired you took a long nap. Miss a turn.",skip:1,tip:"Tip: rest when you can — Hajj is a lot of walking."},{icon:"⛺",text:"Oops! All the tents look the same — you walked to the wrong one. Go back 1 space.",back:1,tip:"Tip: remember your tent number and flag."},{icon:"🩴",text:"Oops! Your sandal strap broke. Go back 1 space to fix it.",back:1,tip:"Tip: bring a spare pair of comfy sandals."}],yh=[{q:"How many times do pilgrims walk around the Kaaba in Tawaf?",station:"tawaf",options:["5 times","7 times","10 times"],answer:1,explain:"Tawaf is 7 circuits around the Kaaba."},{q:"Which way do pilgrims walk in Tawaf?",station:"tawaf",options:["Anticlockwise — Kaaba on the left","Clockwise — Kaaba on the right","Any way they like"],answer:0,explain:"Tawaf goes anticlockwise, with the Kaaba on your left side."},{q:"Where does Saʿi begin?",station:"sai",options:["At Marwah","At Safa","At Mina"],answer:1,explain:"Saʿi starts at Safa and ends at Marwah."},{q:"Who ran between Safa and Marwah looking for water?",station:"sai",options:["Hajar (peace be upon her)","A merchant","A shepherd"],answer:0,explain:"Hajar ran between the hills for her baby Ismaʿil, and Allah gave them Zamzam."},{q:"What is the name of the blessed water in Makkah?",station:"sai",options:["Kawthar","Zamzam","Salsabil"],answer:1,explain:"Zamzam water still flows in Makkah today."},{q:"Which day is the most important day of Hajj?",station:"arafah",options:["The Day of Arafah","The day you arrive","The last day"],answer:0,explain:'The Prophet ﷺ said: "Hajj is Arafah."'},{q:"What do men wear in ihram?",station:"miqat",options:["Two plain white sheets","A colourful robe","Their school uniform"],answer:0,explain:"Two plain white sheets — everyone looks equal."},{q:"How many pebbles are thrown at each Jamrah?",station:"aqabah",options:["3","7","12"],answer:1,explain:'Seven pebbles at each Jamrah, saying "Allāhu Akbar" each time.'},{q:"How big should a stoning pebble be?",station:"muzdalifah",options:["As big as a football","Small, like a chickpea","As big as a brick"],answer:1,explain:"Pebbles are small, about the size of a chickpea."},{q:"What do pilgrims say again and again after putting on ihram?",station:"miqat",options:["The Talbiyah","Happy birthday","Nothing at all"],answer:0,explain:'"Labbayk Allāhumma labbayk" — Here I am, O Allah!'},{q:"Which Eid happens during the days of Hajj?",station:"aqabah",options:["Eid al-Fitr","Eid al-Adha","No Eid"],answer:1,explain:"Eid al-Adha is on the 10th of Dhul Hijjah."},{q:"Where do pilgrims sleep under the open sky?",station:"muzdalifah",options:["Muzdalifah","Madinah","Jeddah"],answer:0,explain:"Pilgrims spend the night at Muzdalifah under the stars."},{q:"Who built the Kaaba?",station:"tawaf",options:["Prophet Ibrahim and Prophet Ismaʿil (peace be upon them)","Nobody knows","A king"],answer:0,explain:"The Quran tells us Ibrahim and Ismaʿil raised its foundations (2:127)."},{q:"Which Jamrah is stoned on the Day of Eid?",station:"aqabah",options:["All three","Only the small one","Only Jamrat al-ʿAqabah (the big one)"],answer:2,explain:"On the 10th, only Jamrat al-ʿAqabah is stoned."},{q:'What does "Hajj Mabrur" mean?',station:"wada",options:["A Hajj accepted by Allah","A very fast Hajj","A Hajj by plane"],answer:0,explain:"Hajj Mabrur is a Hajj that is accepted — its reward is Paradise."},{q:"Which of the three ways of Hajj does this journey follow?",station:"trim1",options:["Hajj at-Tamattuʿ (ʿUmrah first, then Hajj)","Hajj al-Ifrād (Hajj only)","Hajj al-Qirān (ʿUmrah and Hajj joined)"],answer:0,explain:"This journey follows Tamattuʿ: first ʿUmrah, then Hajj. Qirān and Ifrād are the other two ways."},{q:"What is the valley of white tents called?",station:"mina8",options:["Mina","Badr","Taif"],answer:0,explain:"Pilgrims stay in the tents of Mina."},{q:"What is the last thing pilgrims do before leaving Makkah?",station:"wada",options:["Go shopping","The Farewell Tawaf","Climb a mountain"],answer:1,explain:"Tawaf al-Wadāʿ — the Farewell Tawaf."},{q:"What should we avoid during Hajj?",station:"miqat",options:["Arguing and bad words","Drinking water","Smiling"],answer:0,explain:"Quran 2:197 — no bad behaviour, no wrongdoing and no arguing during Hajj."},{q:"Where do pilgrims pick up pebbles?",station:"muzdalifah",options:["Many pick them up at Muzdalifah","They buy them at a shop","They bring them from home"],answer:0,explain:"Many pilgrims collect their pebbles at Muzdalifah."},{q:"What happens after the Qurbani?",station:"qurbani",options:["The meat is thrown away","The meat is shared, especially with people in need","Nothing"],answer:1,explain:"Qurbani meat is shared with family, friends and people in need."},{q:"In which month is Hajj?",station:"mina8",options:["Ramadan","Dhul Hijjah","Muharram"],answer:1,explain:"Hajj is in Dhul Hijjah, the 12th month of the Islamic calendar."}],xh={"talbiyah-order":{station:"miqat",text:"Say the Talbiyah one line at a time, in order."},"tawaf-direction":{station:"tawaf",text:"Tawaf goes anticlockwise — keep the Kaaba on your left side."},"sai-start":{station:"sai",text:"Saʿi starts at Safa and ends at Marwah."},"trim-too-much":{station:"trim1",text:"Just a little trim — about a fingertip's length."},tent:{station:"mina8",text:"Remember your tent's colour AND its symbol."},"prayer-order":{station:"mina8",text:"The prayers go Dhuhr, ʿAsr, Maghrib, ʿIsha, then Fajr."},"pebble-big":{station:"muzdalifah",text:"Pebbles are small, about the size of a chickpea."},"jamarat-order":{station:"tashreeq",text:"First the small Jamrah, then the middle one, then the big one."},"qurbani-fair":{station:"qurbani",text:"Qurbani meat is shared with family, friends and people in need."}},A_=[{icon:"🌱",text:"O Allah, forgive me and my family."},{icon:"🧭",text:"O Allah, guide me to what is right."},{icon:"👨‍👩‍👧",text:"O Allah, bless my parents and keep them safe."},{icon:"🤲",text:"O Allah, help people who are hungry, sick or sad."},{icon:"💛",text:"O Allah, make me kind, honest and patient."},{icon:"🕋",text:"O Allah, invite me to Your House for Hajj one day."}],vo={tr:"Rabbanā ātinā fid-dunyā ḥasanah, wa fil-ākhirati ḥasanah, wa qinā ʿadhāban-nār.",en:"Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.",source:"Quran 2:201"},Li=["Aunt Maryam","Uncle Yusuf","Cousin Zayd","Grandma Khadijah"],C_=[{id:"boy",label:"Boy",note:"white ihram"},{id:"girl",label:"Girl",note:"hijab"},{id:"man",label:"Man",note:"white ihram"},{id:"woman",label:"Woman",note:"hijab"}],da=[{id:"green",hex:"#3fae49",dark:"#2b8a34"},{id:"blue",hex:"#3fa6e0",dark:"#2a7fb8"},{id:"purple",hex:"#8e6cf0",dark:"#6a4bc4"},{id:"orange",hex:"#ff9a3c",dark:"#d97a20"},{id:"pink",hex:"#ff6fa8",dark:"#c8467c"},{id:"teal",hex:"#2bb5a6",dark:"#1f8a7e"}],pa=["MashaAllah!","Well done!","Wonderful!","Great job!","SubhanAllah, amazing!"],Tn={x:-16,z:0,r:9.5},gn=i=>[Tn.x+Math.cos(i)*Tn.r,Tn.z+Math.sin(i)*Tn.r],bn=Math.PI,Mh=[["start",-50,14],["w",-47,11],["miqat",-44,8],["w",-38,4.5],["w",-31.5,1.6],["tawaf",...gn(bn)],["w",...gn(bn*7/8)],["w",...gn(bn*3/4)],["w",...gn(bn*5/8)],["w",...gn(bn/2)],["w",-14.5,13],["sai",-11,15.2],["w",-5,15.8],["trim1",0,15.5],["w",5,14],["mina8",9,11],["w",15,8.8],["w",23,6.3],["arafah",30,4],["w",33.5,-1],["w",31,-6.5],["muzdalifah",25,-9],["w",19,-10.5],["w",12.5,-10.5],["aqabah",6.5,-10.2],["w",4.2,-9.2],["qurbani",2.2,-7.4],["w",1.2,-5.4],["shave",.2,-3.2],["w",-2.8,-.8],["ifadah",...gn(0)],["w",...gn(-bn/8)],["w",...gn(-bn/4)],["w",-8.4,-12],["w",-3,-17.2],["w",4,-19.8],["tashreeq",12,-21],["w",18,-23],["w",15.5,-27],["w",6,-27.5],["w",-4,-26],["w",-11.5,-20.5],["wada",...gn(-bn/2)],["w",...gn(-bn*5/8)],["w",...gn(-bn*3/4)],["w",-27.5,-10.5],["finish",-32,-13]];function R_(i,t=40){const e=[],n=a=>i[Math.max(0,Math.min(i.length-1,a))],s=[];for(let a=0;a<i.length-1;a++){const o=n(a-1),l=n(a),c=n(a+1),u=n(a+2);s[a]=e.length;for(let h=0;h<t;h++){const f=h/t,d=f*f,g=d*f,v=(m,p,y,x)=>.5*(2*p+(-m+y)*f+(2*m-5*p+4*y-x)*d+(-m+3*p-3*y+x)*g);e.push({x:v(o[0],l[0],c[0],u[0]),z:v(o[1],l[1],c[1],u[1])})}}s[i.length-1]=e.length,e.push({x:i.at(-1)[0],z:i.at(-1)[1]});let r=0;return e.forEach((a,o)=>{o&&(r+=Math.hypot(a.x-e[o-1].x,a.z-e[o-1].z)),a.s=r}),{samples:e,keyIdx:s}}function Sh(i,t){let e=0,n=i.length-1;for(;n-e>1;){const o=e+n>>1;i[o].s<t?e=o:n=o}const s=i[e],r=i[n],a=r.s===s.s?0:(t-s.s)/(r.s-s.s);return{x:s.x+(r.x-s.x)*a,z:s.z+(r.z-s.z)*a,dir:Math.atan2(r.x-s.x,r.z-s.z)}}const bh=["p","q","g","p","o","q","g","p","q","g","o","p","g","q"],P_=3,L_=6;function I_(){const i=Mh.map(a=>[a[1],a[2]]),{samples:t,keyIdx:e}=R_(i),n=Mh.map((a,o)=>({key:a[0],s:t[e[o]].s})).filter(a=>a.key!=="w"),s=[];let r=0;for(let a=0;a<n.length;a++){const o=n[a],l=Sh(t,o.s),c=o.key==="start"?"start":o.key==="finish"?"finish":"station";s.push({i:s.length,type:c,station:c==="station"?o.key:null,s:o.s,x:l.x,z:l.z,dir:l.dir});const u=n[a+1];if(!u)break;const h=u.s-o.s,f=Math.min(L_,Math.max(0,Math.round(h/P_)-1));for(let d=1;d<=f;d++){const g=o.s+h*d/(f+1),v=Sh(t,g);let m=bh[r++%bh.length];d===1&&m==="o"&&(m="p"),s.push({i:s.length,type:m,station:null,s:g,x:v.x,z:v.z,dir:v.dir})}}return{spaces:s,samples:t}}const ra=I_(),Wt=ra.spaces,ma=Wt.length-1,bi=Object.fromEntries(Wt.filter(i=>i.station).map(i=>[i.station,i.i]));function Aa(i,t=i.pos){for(let e=t;e<Wt.length;e++){const n=Wt[e];if(n.station&&!i.done.includes(n.station))return e}return ma}function Xu(i,t){const e=Aa(i,i.pos+1);return Math.min(i.pos+t,e)}function D_(i,t){return Math.max(0,i.pos-t)}function ju(i,t){const e=be.find(n=>!i.done.includes(n.id));return!!e&&e.id===t}function U_(i,t){return{id:t,name:i.name,kind:i.kind,color:i.color,human:i.human!==!1,pos:0,done:[],skip:0,deeds:0,stars:0,finished:!1,finishOrder:0,asked:[]}}function N_(i){return{v:1,players:i.map(U_),turn:0,finishedCount:0,rolls:0,started:Date.now()}}function wh(i){const t=i.players.length;for(let e=1;e<=t;e++){const n=(i.turn+e)%t;if(!i.players[n].finished)return i.turn=n,!0}return!1}function Yu(i){for(let t=i;t<Wt.length;t++){const e=Wt[t].station&&be.find(n=>n.id===Wt[t].station);if(e)return e.sky}return"night"}function F_(i){for(let t=i;t<Wt.length;t++){const e=Wt[t].station&&be.find(n=>n.id===Wt[t].station);if(e)return{day:e.day,place:e.place}}return{day:"Journey home",place:"Home"}}function k_(i,t,e=Math.random){let n=t.map((o,l)=>l).filter(o=>!i.asked.includes(o));n.length||(i.asked=[],n=t.map((o,l)=>l));const s=n.filter(o=>t[o].station&&i.done.includes(t[o].station)),r=s.length?s:n,a=r[Math.floor(e()*r.length)];return i.asked.push(a),a}const O_={miqat:{color:"#1fb3a3",dark:"#13877b",soft:"#dff7f3",label:"Miqat"},tawaf:{color:"#f0b429",dark:"#c78b0d",soft:"#fff3cf",label:"Tawaf"},sai:{color:"#3fae49",dark:"#2b8a34",soft:"#e3f6df",label:"Saʿi"},trim1:{color:"#ff6fa8",dark:"#cf4a80",soft:"#ffe3ee",label:"ʿUmrah done"},mina8:{color:"#3fa6e0",dark:"#2a7fb8",soft:"#e0f1fb",label:"Mina"},arafah:{color:"#ff8a3c",dark:"#d2651a",soft:"#ffe8d8",label:"Arafah"},muzdalifah:{color:"#5b5bd6",dark:"#4040a8",soft:"#e6e6fa",label:"Muzdalifah"},aqabah:{color:"#d9603b",dark:"#ad4524",soft:"#fbe2d9",label:"Jamrat al-ʿAqabah"},qurbani:{color:"#e8505b",dark:"#b93640",soft:"#fde0e2",label:"Qurbani"},shave:{color:"#8e6cf0",dark:"#6a4bc4",soft:"#ece6fc",label:"Shave / trim"},ifadah:{color:"#159b7a",dark:"#0f735a",soft:"#dcf3ec",label:"Tawaf al-Ifāḍah"},tashreeq:{color:"#b8742a",dark:"#8c561c",soft:"#f6e8d6",label:"Tashreeq"},wada:{color:"#2f5fd1",dark:"#2246a0",soft:"#dfe7fa",label:"Farewell"}},Gn=i=>O_[i]||{color:"#f0b429",dark:"#c78b0d",soft:"#fff3cf",label:""},Ju=()=>typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;let xi=null,Ii=null,Ca=!1;function Gl(){if(!xi){const i=window.AudioContext||window.webkitAudioContext;if(!i)return null;xi=new i,Ii=xi.createGain(),Ii.gain.value=Ca?0:.5,Ii.connect(xi.destination)}return xi.state==="suspended"&&xi.resume(),xi}function B_(){Gl()}function Zu(i){Ca=i,Ii&&(Ii.gain.value=i?0:.5)}function Ue(i,t,{type:e="sine",vol:n=.3,slide:s=0,delay:r=0}={}){const a=Gl();if(!a||Ca)return;const o=a.currentTime+r,l=a.createOscillator(),c=a.createGain();l.type=e,l.frequency.setValueAtTime(i,o),s&&l.frequency.exponentialRampToValueAtTime(Math.max(40,i+s),o+t),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(n,o+.01),c.gain.exponentialRampToValueAtTime(1e-4,o+t),l.connect(c).connect(Ii),l.start(o),l.stop(o+t+.05)}function Qn(i,{vol:t=.4,cutoff:e=900,delay:n=0,type:s="lowpass"}={}){const r=Gl();if(!r||Ca)return;const a=Math.max(1,Math.floor(r.sampleRate*i)),o=r.createBuffer(1,a,r.sampleRate),l=o.getChannelData(0);for(let f=0;f<a;f++)l[f]=(Math.random()*2-1)*(1-f/a)**2;const c=r.createBufferSource();c.buffer=o;const u=r.createBiquadFilter();u.type=s,u.frequency.value=e;const h=r.createGain();h.gain.value=t,c.connect(u).connect(h).connect(Ii),c.start(r.currentTime+n)}const Lt={click:()=>Ue(660,.07,{type:"triangle",vol:.18}),roll:()=>{for(let i=0;i<7;i++)Qn(.05,{vol:.35,cutoff:2400,delay:i*.09,type:"bandpass"})},land:()=>{Qn(.08,{vol:.5,cutoff:600}),Ue(220,.1,{type:"sine",vol:.2})},hop:()=>Ue(520,.09,{type:"triangle",vol:.16,slide:260}),station:()=>[523,659,784].forEach((i,t)=>Ue(i,.32,{type:"sine",vol:.22,delay:t*.11})),good:()=>[659,784,988,1319].forEach((i,t)=>Ue(i,.18,{type:"triangle",vol:.18,delay:t*.07})),oops:()=>{Ue(392,.2,{type:"triangle",vol:.18,slide:-120}),Ue(330,.25,{type:"triangle",vol:.15,delay:.16,slide:-100})},right:()=>{Ue(784,.12,{type:"triangle",vol:.2}),Ue(1047,.2,{type:"triangle",vol:.2,delay:.1})},gentle:()=>Ue(300,.22,{type:"sine",vol:.18,slide:-40}),circuit:()=>{Ue(880,.5,{type:"sine",vol:.18}),Ue(1320,.6,{type:"sine",vol:.08,delay:.02})},step:()=>Qn(.04,{vol:.2,cutoff:1400}),pick:()=>{Ue(1200,.05,{type:"square",vol:.05}),Qn(.05,{vol:.25,cutoff:3e3,type:"highpass"})},throw:()=>Qn(.18,{vol:.18,cutoff:1800,type:"bandpass"}),hit:()=>{Qn(.07,{vol:.5,cutoff:2500,type:"highpass"}),Ue(1500,.05,{type:"square",vol:.04})},snip:()=>{Qn(.04,{vol:.4,cutoff:4e3,type:"highpass"}),Qn(.04,{vol:.4,cutoff:4e3,type:"highpass",delay:.09})},pop:()=>Ue(600,.12,{type:"sine",vol:.25,slide:500}),water:()=>{for(let i=0;i<6;i++)Ue(700+Math.random()*900,.12,{type:"sine",vol:.1,delay:i*.08,slide:300})},win:()=>[523,659,784,1047,784,1047].forEach((i,t)=>Ue(i,.28,{type:"triangle",vol:.22,delay:t*.13})),chime:()=>[1047,1319,1568].forEach((i,t)=>Ue(i,.6,{type:"sine",vol:.12,delay:t*.18}))},_o={morning:{top:"#6fc0ff",mid:"#bfe3ff",bot:"#ffe3bd",hemi:1.25,hemiSky:16777215,sun:1.55,sunC:16773334,sunPos:[-20,18,16],stars:0,lamps:0},day:{top:"#3fa9ff",mid:"#9fdcff",bot:"#e3f7ff",hemi:1.35,hemiSky:16777215,sun:1.8,sunC:16777215,sunPos:[-6,26,12],stars:0,lamps:0},afternoon:{top:"#4f9fe8",mid:"#a9d8f5",bot:"#ffd9a0",hemi:1.25,hemiSky:16774368,sun:1.6,sunC:16769712,sunPos:[16,18,12],stars:0,lamps:.2},sunset:{top:"#3f3f8f",mid:"#e0869a",bot:"#ffbf78",hemi:1.1,hemiSky:16766656,sun:1.25,sunC:16756848,sunPos:[26,9,6],stars:.25,lamps:.6},night:{top:"#0c1140",mid:"#232c74",bot:"#574c98",hemi:.95,hemiSky:12109055,sun:.7,sunC:11188479,sunPos:[-12,20,10],stars:1,lamps:1}},Gr=(i,t,e)=>i+(t-i)*e,z_=i=>i<.5?2*i*i:1-(-2*i+2)**2/2;class H_{constructor(t){this.canvas=t,this.renderer=new vu({canvas:t,antialias:!0,alpha:!0,preserveDrawingBuffer:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Oh,this.renderer.outputColorSpace=We,this.scene=new _u,this.scene.fog=new Ul(12575743,70,190),this.camera=new Xe(42,1,.1,500),this.scene.add(this.camera),this.clock=new y_,this.time=0,this.speed=1,this.tweens=[],this.tokens=new Map,this.updaters=[],this.mode="overview",this.focusPos=new C(-10,0,-4),this.camPos=new C(0,60,60),this.camLook=new C(-10,0,-4),this.skyName="morning",this.sky=this.skyValues(_o.morning),this.dieState=null,this.bottomPad=0,this.topPad=0,this.reduced=Ju(),this.buildWorld(),this.buildDie(),this.buildParticles(),this.resize(),window.addEventListener("resize",()=>this.resize()),this.renderer.setAnimationLoop(()=>this.frame())}skyValues(t){return{top:new Et(t.top),mid:new Et(t.mid),bot:new Et(t.bot),hemi:t.hemi,hemiSky:new Et(t.hemiSky),sun:t.sun,sunC:new Et(t.sunC),sunPos:new C(...t.sunPos),stars:t.stars,lamps:t.lamps}}buildWorld(){const t=this.scene;this.hemi=new Lu(16777215,13215863,1.3),t.add(this.hemi),this.sun=new Du(16777215,1.7),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),Object.assign(this.sun.shadow.camera,{left:-24,right:24,top:24,bottom:-24,near:1,far:90}),this.sun.shadow.bias=-8e-4,t.add(this.sun,this.sun.target);const e=Ea(256,256,(r,a,o)=>{r.fillStyle="#f3dca6",r.fillRect(0,0,a,o);const l=Vr(3);for(let c=0;c<46;c++)r.fillStyle=l()<.5?"rgba(255,245,215,0.45)":"rgba(214,176,112,0.22)",r.beginPath(),r.ellipse(l()*a,l()*o,10+l()*34,6+l()*18,l()*3,0,Math.PI*2),r.fill()});e.wrapS=e.wrapT=oa,e.repeat.set(14,11);const n=new Te(new Ts(260,200),st(16777215,{map:e,noCache:!0}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);const s=st(15256974,{transparent:!0,opacity:.55});for(const[r,a,o]of[[-30,20,9],[20,18,10],[42,-20,11],[-40,-22,10],[0,30,12]]){const l=new Te(new ci(o,24),s);l.rotation.x=-Math.PI/2,l.position.set(r,.012,a),l.receiveShadow=!0,t.add(l)}this.buildRoad(),this.buildTiles(),this.buildLandmarks(),this.buildDecor(),this.buildStars(),this.buildMarker()}buildRoad(){const t=ra.samples,e=1.3,n=(o,l,c)=>{const u=[],h=[];for(let g=0;g<t.length;g++){const v=t[Math.max(0,g-1)],m=t[Math.min(t.length-1,g+1)];let p=m.x-v.x,y=m.z-v.z;const x=Math.hypot(p,y)||1;if(p/=x,y/=x,u.push(t[g].x-y*o,l,t[g].z+p*o,t[g].x+y*o,l,t[g].z-p*o),g){const _=(g-1)*2;h.push(_,_+1,_+2,_+1,_+3,_+2)}}const f=new Pe;f.setAttribute("position",new Qt(u,3)),f.setIndex(h),f.computeVertexNormals();const d=new Te(f,st(c,{side:Me}));return d.receiveShadow=!0,this.scene.add(d),d};n(e+.28,.025,15123855),n(e,.035,16774104);const s=new ri(new ze(.13,6,4),st(14268793),Math.ceil(t.length/6)*2),r=new me;let a=0;for(let o=0;o<t.length;o+=6){const l=t[Math.max(0,o-1)],c=t[Math.min(t.length-1,o+1)];let u=c.x-l.x,h=c.z-l.z;const f=Math.hypot(u,h)||1;u/=f,h/=f;for(const d of[-1,1])r.position.set(t[o].x-h*(e+.2)*d,.06,t[o].z+u*(e+.2)*d),r.updateMatrix(),s.setMatrixAt(a++,r.matrix)}s.count=a,this.scene.add(s)}buildTiles(){this.tiles=[],this.flags=[];for(const o of Wt){const l=o.station?ui[o.station]:null,c=l?new Et(Gn(l.id).color).getHex():null,u=qu(o.type,l?l.num:null,c);u.position.set(o.x,0,o.z),this.scene.add(u),this.tiles.push(u);const h=u.getObjectByName("flag");if(h&&this.flags.push(h),l){const f=Gn(l.id),d=Hr(`${l.num} · ${f.label||l.name}`,{height:.72,border:f.color,fg:"#2b2440"});d.position.set(o.x+1.15,2.45,o.z-.65),d.name="sign-"+l.id,this.scene.add(d)}}const t=Hr("Start",{height:.75,bg:"#fff0f6",border:"#ff7eb6"});t.position.set(Wt[0].x,2.6,Wt[0].z-.9),this.scene.add(t);const e=Wt.at(-1),n=Hr("Journey Home",{height:.8,bg:"#fff0f6",border:"#ff7eb6"});n.position.set(e.x,3.6,e.z-.5),this.scene.add(n);const s=zu(16744118);s.position.set(e.x+Math.sin(e.dir)*1.9,0,e.z+Math.cos(e.dir)*1.9),s.rotation.y=e.dir,this.scene.add(s);const r=new Te(new Re(.9,1.25,4.5,24,1,!0),new xn({color:16765514,transparent:!0,opacity:.18,side:Me,depthWrite:!1}));r.position.y=2.4;const a=new Te(new Pi(1.25,1.5,40),new xn({color:16765514,transparent:!0,opacity:.8,side:Me,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=.3,this.beacon=new ue,this.beacon.add(r,a),this.beacon.visible=!1,this.beaconRing=a,this.beaconCol=r,this.scene.add(this.beacon),this.pathMesh=new ri(new Pi(.45,.62,28),new xn({color:16777215,transparent:!0,opacity:.85,side:Me,depthWrite:!1}),8),this.pathMesh.count=0,this.pathMesh.frustumCulled=!1,this.scene.add(this.pathMesh)}place(t,e,n,s=0){return t.position.set(e,0,n),t.rotation.y=s,this.scene.add(t),t}sign(t,e,n,s,r=.7,a={}){const o=Hr(t,{height:r,bg:"#ffffff",border:"#c9b99a",...a});return o.position.set(e,n,s),this.scene.add(o),o}buildLandmarks(){this.haram=this.place(S_(),Tn.x,Tn.z),this.updaters.push(m=>this.haram.userData.update(m)),this.sign("Masjid al-Haram · Makkah",Tn.x,7.6,Tn.z-12.5,.95,{border:"#3fae49"});const t=Wt[bi.miqat];this.place(ku(),t.x-1.5,t.z-5,.2),this.sign("Miqat",t.x-1.5,4.9,t.z-5,.7,{border:"#1fb3a3"});const e=this.place(Fu(15),-11.3,19.3);e.name="masa",this.sign("Safa",-20.3,2.6,19.3,.65,{border:"#3fae49"}),this.sign("Marwah",-2.3,2.6,19.3,.65,{border:"#3fae49"});const n=Wt[bi.trim1];this.place(ta({awning:16740264}),n.x+3.2,n.z+2.6,-.3);const s=[],r=(m,p,y=2.1)=>Wt.every(x=>Math.hypot(x.x-m,x.z-p)>y)&&ra.samples.every((x,_)=>_%4||Math.hypot(x.x-m,x.z-p)>1.8),a=(m,p,y,x,_=1.9)=>{for(let R=m;R<=p;R+=_)for(let E=y;E<=x;E+=_){const A=R+Math.sin(R*3.1+E)*.25,P=E+Math.cos(R*1.7-E)*.25;r(A,P)&&s.push({x:A,z:P,r:0})}};a(9,21,-5,4.5),a(-2,20,-34,-30.5),a(22,27,-31,-24),this.scene.add(Ou(s)),this.sign("Mina",15,3.6,-1,.85,{border:"#3fa6e0"});const o=_l(4.2,4.6);this.place(o,39.5,.5);const l=Bu();l.position.set(39.5,4.3,.5),this.scene.add(l),this.sign("Arafah",39.5,7.3,.5,.85,{border:"#ff8a3c"});for(const[m,p]of[[27,0],[28.5,-3],[26,9.5],[29,9.2],[32,8.8],[35,6.5],[36.5,-5.5],[42,5.5],[34,-10]])this.place(ea(1),m,p);const c=new Te(new ci(4.2,28),st(14270602));c.rotation.x=-Math.PI/2,c.position.set(26.5,.02,-14.5),c.receiveShadow=!0,this.scene.add(c);const u=new ri(new xs(.09,0),st(9274743),140),h=new me,f=Vr(11);for(let m=0;m<140;m++){const p=f()*Math.PI*2,y=Math.sqrt(f())*3.9;h.position.set(26.5+Math.cos(p)*y,.06,-14.5+Math.sin(p)*y),h.rotation.set(f(),f(),0),h.updateMatrix(),u.setMatrixAt(m,h.matrix)}this.scene.add(u),this.lamps=[];for(const[m,p]of[[23,-13],[30,-13.5],[26.5,-18.5],[17,-7],[-3,12],[8,7.5],[-6,-8]]){const y=this.place(na(),m,p);this.lamps.push(y.getObjectByName("bulb"))}this.sign("Muzdalifah",26.5,2.4,-17.8,.75,{border:"#5b5bd6"});const d=-15.6;[[18.5,0,"Small"],[12.5,1,"Middle"],[6.5,2,"Big · al-ʿAqabah"]].forEach(([m,p,y])=>{this.place(Ws(p),m,d),this.sign(y,m,[2.4,2.8,3.3][p],d,.55)}),this.sign("The Jamarat",12.5,4.6,d-.5,.8,{border:"#d9603b"});const g=Wt[bi.qurbani];this.place(ta({awning:4173385}),g.x+3.4,g.z+.4,-.5);for(let m=0;m<5;m++){const p=Qr(m%2?15909995:15313003,m%2?4173385:16740264);p.position.set(g.x+2.4+m%3*.55,.36*Math.floor(m/3),g.z+1.8+m%2*.2),this.scene.add(p)}const v=Wt[bi.shave];this.place(ta({awning:9334e3}),v.x+3.6,v.z+1.2,-.4)}buildDecor(){const t=(a,o,l)=>Wt.some(c=>Math.hypot(c.x-a,c.z-o)<l)||ra.samples.some((c,u)=>u%3===0&&Math.hypot(c.x-a,c.z-o)<l-.6),e=Vr(7);let n=0,s=0;this.palms=[];for(let a=0;a<260&&(n<34||s<50);a++){const o=-60+e()*112,l=-38+e()*64;if(!t(o,l,2.8)&&!(Math.hypot(o-Tn.x,l-Tn.z)<14)&&!(o>8&&o<22&&l>-6&&l<5)&&!(o>34&&o<45&&l>-4&&l<5)){if(e()<.45&&n<34)this.palms.push(this.place(Hu(2.6+e()*1.4),o,l,e()*6)),n++;else if(s<50){const c=Gu(.6+e()*1.2);c.position.set(o,0,l),c.rotation.y=e()*6,this.scene.add(c),s++}}}const r=[[-62,-44,10,9],[-38,-48,12,11],[-10,-52,13,10],[18,-50,12,12],[44,-44,13,10],[66,-18,12,9],[66,14,11,8],[-70,4,11,8]];for(const[a,o,l,c]of r)this.place(_l(l,c,11901562),a,o)}buildStars(){const e=[],n=Vr(5);for(let r=0;r<420;r++){const a=n()*Math.PI*2,o=.12+n()*1.2,l=220;e.push(Math.cos(a)*Math.cos(o)*l,Math.sin(o)*l*.9,Math.sin(a)*Math.cos(o)*l)}const s=new Pe;s.setAttribute("position",new Qt(e,3)),this.stars=new kv(s,new Su({color:16774864,size:1.7,sizeAttenuation:!0,transparent:!0,opacity:0,depthWrite:!1,fog:!1})),this.scene.add(this.stars)}buildMarker(){const t=new ue,e=new Te(new Bi(.3,.55,14),st(16777215));e.rotation.x=Math.PI,t.add(e),this.markerCone=e,this.marker=t,this.marker.visible=!1,this.scene.add(t);const n=new Te(new Pi(.75,.95,32),new xn({color:16777215,transparent:!0,opacity:.8,side:Me,depthWrite:!1}));n.rotation.x=-Math.PI/2,this.markerRing=n,n.visible=!1,this.scene.add(n)}buildParticles(){this.parts=E_(96),this.partItems=[],this.scene.add(this.parts)}spawnParticles(t,e,n,{n:s=10,color:r=16777215,up:a=2.2,out:o=1.6,life:l=.7,size:c=1,gravity:u=6}={}){this.reduced&&(s=Math.min(s,4));const h=new Et(r);for(let f=0;f<s;f++){this.partItems.length>=96&&this.partItems.shift();const d=Math.random()*Math.PI*2,g=Math.random();this.partItems.push({x:t,y:e+.1,z:n,vx:Math.cos(d)*o*g,vy:a*(.5+Math.random()*.8),vz:Math.sin(d)*o*g,t:0,life:l*(.7+Math.random()*.6),rot:Math.random()*6,c:h.clone().lerp(new Et(16777215),Math.random()*.35),s:c*(.6+Math.random()*.8),g:u})}}updateParticles(t){const e=new me;let n=0;for(let s=this.partItems.length-1;s>=0;s--){const r=this.partItems[s];if(r.t+=t,r.t>=r.life){this.partItems.splice(s,1);continue}r.vy-=r.g*t,r.x+=r.vx*t,r.y+=r.vy*t,r.z+=r.vz*t,r.y<.05&&(r.y=.05,r.vy*=-.3,r.vx*=.8,r.vz*=.8);const a=1-r.t/r.life;e.position.set(r.x,r.y,r.z),e.rotation.set(r.rot+r.t*4,r.rot*1.3+r.t*3,0),e.scale.setScalar(r.s*(.4+a*.8)),e.updateMatrix(),this.parts.setMatrixAt(n,e.matrix),this.parts.setColorAt(n,r.c),n++}this.parts.count=n,n&&(this.parts.instanceMatrix.needsUpdate=!0,this.parts.instanceColor.needsUpdate=!0)}burst(t,e=16765514,n=22){const s=this.tokens.get(t);s&&this.spawnParticles(s.position.x,s.position.y+.8,s.position.z,{n,color:e,up:3.4,out:2.4,life:1.1,size:1.2,gravity:5})}buildDie(){this.die=Vu(),this.die.visible=!1,this.dieLight=new v_(16777215,3,10,1.2),this.camera.add(this.die),this.camera.add(this.dieLight),this.die.rotation.set(-.35,.4,0),this.dieSquash=1}showDie(t){this.die.visible=t}diePlacement(){const e=12*Math.tan(Kh.degToRad(this.camera.fov/2)),n=e*this.camera.aspect,s=this.canvas.clientWidth||innerWidth,r=this.canvas.clientHeight||innerHeight,a=s>r?Math.min(104,Math.max(70,r*.11)):Math.min(84,Math.max(56,s*.16));let o,l;s>r*1.05?(o=s/2+Math.min(s*.28,260),l=r-Math.max(70,this.bottomPad*.5)):(o=s-a*.9,l=r-this.bottomPad-a*.85);const c=a/r*e;return{pos:new C((o/s-.5)*n,(.5-l/r)*e,-6),size:c}}async rollDie(t){this.die.visible=!0;const[e,n]=Wu(t),s=new si().setFromEuler(new Mn(e,n,0,"XYZ")),a=new si().setFromEuler(new Mn(-.32,.38,0)).multiply(s),o=new C(Math.random()*2-1,Math.random()*2-1,Math.random()-.5).normalize(),l=this.die.quaternion.clone();await this.anim(.14,c=>{this.dieSquash=1-Math.sin(c*Math.PI)*.22}),Lt.roll(),await this.anim(this.reduced?.4:.95,c=>{const u=z_(c),h=new si().setFromAxisAngle(o,(1-u)*16);this.die.quaternion.copy(l).slerp(a,u).premultiply(h),this.dieBounce=Math.abs(Math.sin(c*Math.PI*3))*(1-c)*.9,this.dieSquash=1}),this.die.quaternion.copy(a),this.dieBounce=0,Lt.land(),await this.anim(.32,c=>{this.dieSquash=1+Math.sin(c*Math.PI)*(c<.4?-.18:.14)}),this.dieSquash=1}setPlayers(t){for(const e of this.tokens.values())this.scene.remove(e);this.tokens.clear(),t.forEach((e,n)=>{const s=Hl({kind:e.kind,color:e.color,skinTone:n});s.userData.pid=e.id,this.scene.add(s),this.tokens.set(e.id,s)}),this.players=t,this.layoutTokens()}slotOffset(t){const e=this.players.filter(a=>a.pos===t.pos);if(e.length<2)return[0,0];const s=e.indexOf(t)/e.length*Math.PI*2+.6,r=Wt[t.pos].type==="station"||Wt[t.pos].type==="start"||Wt[t.pos].type==="finish"?.62:.5;return[Math.cos(s)*r,Math.sin(s)*r]}layoutTokens(t=null){if(this.players)for(const e of this.players){if(e.id===t)continue;const n=this.tokens.get(e.id),s=Wt[e.pos],[r,a]=this.slotOffset(e);n.position.set(s.x+r,.27,s.z+a);const o=this.players.filter(l=>l.pos===e.pos).length>2?.8:1;n.scale.setScalar(o),n.rotation.y=0}}async hopToken(t,e,{last:n=!0}={}){const s=this.tokens.get(t),r=this.players.find(l=>l.id===t),a=s.getObjectByName("figure"),o=s.scale.x;for(const l of e){const c=s.position.clone(),u=Wt[l],h=new C(u.x,.27,u.z),f=Math.atan2(h.x-c.x,h.z-c.z);s.rotation.y=f,Lt.hop(),await this.anim(this.reduced?.18:.3,d=>{s.position.lerpVectors(c,h,d);const g=Math.sin(d*Math.PI);s.position.y=.27+g*1;const v=d<.5?1+g*.18:1+g*.18-(1-g)*.12*(d>.85?1:0);a.scale.set(1/Math.sqrt(v),v,1/Math.sqrt(v)),this.focusPos.set(s.position.x,0,s.position.z)}),a.scale.setScalar(1),this.spawnParticles(h.x,.3,h.z,{n:n?10:5,color:15981734,up:1.1,out:1.6,life:.5,size:.9,gravity:4}),n&&await this.anim(.14,d=>{const g=1-Math.sin(d*Math.PI)*.14;a.scale.set(1/Math.sqrt(g),g,1/Math.sqrt(g))}),a.scale.setScalar(1)}return s.scale.setScalar(o),this.layoutTokens(),s.rotation.y=0,r}showPath(t,e="#ffffff"){const n=new me,s=Math.min(t.length,8);for(let r=0;r<s;r++){const a=Wt[t[r]];n.position.set(a.x,.31,a.z),n.rotation.set(-Math.PI/2,0,0),n.updateMatrix(),this.pathMesh.setMatrixAt(r,n.matrix)}this.pathMesh.count=s,this.pathMesh.material.color.set(e),s&&(this.pathMesh.instanceMatrix.needsUpdate=!0)}celebrate(t){const e=this.tokens.get(t);if(!e)return;const n=e.getObjectByName("figure");this.anim(this.reduced?.3:.9,s=>{n.position.y=.16+Math.abs(Math.sin(s*Math.PI*3))*.5,n.rotation.y=s*Math.PI*2}).then(()=>{n.position.y=.16,n.rotation.y=0})}setActive(t){this.activeId=t}setNextStation(t){if(!t||bi[t]==null){this.beacon.visible=!1;return}const e=Wt[bi[t]],n=new Et(Gn(t).color);this.beacon.position.set(e.x,0,e.z),this.beaconRing.material.color.copy(n),this.beaconCol.material.color.copy(n),this.beacon.visible=!0}focusOn(t){const e=Wt[t];this.focusPos.set(e.x,0,e.z)}setMode(t){this.mode=t}cameraGoal(){const t=this.camera.aspect,e=t<.9;if(this.mode==="follow"){const a=e?2:t<1.3?1.3:1.05,o=this.focusPos.clone();return o.z-=e?2.2:1.6,{pos:o.clone().add(new C(0,15.5*a,13.5*a)),look:o,up:new C(0,1,0)}}if(this.mode==="overview"&&e){const a=new C(-8,0,-6);return{pos:a.clone().add(new C(-32,118/Math.max(.5,t*1.9),0)),look:a,up:new C(1,0,0)}}const n=new C(-7.5,0,-3),s=Math.max(1,1.6/t),r=this.mode==="title"?new C(0,30*s,38*s):new C(0,68*s,46*s);return this.mode==="title"&&n.set(-12,0,2),{pos:n.clone().add(r),look:n,up:new C(0,1,0)}}snapCamera(){const t=this.cameraGoal();this.camPos.copy(t.pos),this.camLook.copy(t.look),this.camera.up.copy(t.up)}setSky(t){_o[t]&&(this.skyName=t)}updateSky(t){const e=this.skyValues(_o[this.skyName]),n=1-Math.exp(-t*1.6*this.speed),s=this.sky;s.top.lerp(e.top,n),s.mid.lerp(e.mid,n),s.bot.lerp(e.bot,n),s.hemi=Gr(s.hemi,e.hemi,n),s.sun=Gr(s.sun,e.sun,n),s.hemiSky.lerp(e.hemiSky,n),s.sunC.lerp(e.sunC,n),s.sunPos.lerp(e.sunPos,n),s.stars=Gr(s.stars,e.stars,n),s.lamps=Gr(s.lamps,e.lamps,n),this.hemi.intensity=s.hemi,this.hemi.color.copy(s.hemiSky),this.sun.intensity=s.sun,this.sun.color.copy(s.sunC),this.sun.position.copy(this.camLook).add(s.sunPos),this.sun.target.position.copy(this.camLook),this.stars.material.opacity=s.stars,this.stars.position.copy(this.camera.position),this.scene.fog.color.copy(s.mid);for(const a of this.lamps)a.material.color.setRGB(1,.95,.7).lerp(new Et(14209728),1-s.lamps);const r=`linear-gradient(#${s.top.getHexString()} 0%, #${s.mid.getHexString()} 55%, #${s.bot.getHexString()} 100%)`;r!==this._css&&(document.body.style.background=r,this._css=r),document.body.classList.toggle("is-night",s.stars>.5)}anim(t,e){return new Promise(n=>this.tweens.push({t:0,dur:t,fn:e,resolve:n}))}wait(t){return this.anim(t,()=>{})}resize(){const t=this.canvas.clientWidth||innerWidth,e=this.canvas.clientHeight||innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}frame(){var c,u;const t=Math.min(.05,this.clock.getDelta()),e=t*this.speed;this.time+=t;for(let h=this.tweens.length-1;h>=0;h--){const f=this.tweens[h];f.t+=e/f.dur;const d=Math.min(1,f.t);f.fn(d),d>=1&&(this.tweens.splice(h,1),f.resolve())}for(const h of this.updaters)h(t);this.updateParticles(e);const n=this.cameraGoal(),s=1-Math.exp(-t*3.2*Math.max(1,this.speed*.5));this.camPos.lerp(n.pos,s),this.camLook.lerp(n.look,s),this.camera.up.lerp(n.up,s).normalize(),this.camera.position.copy(this.camPos),this.camera.lookAt(this.camLook);const r=this.camPos.distanceTo(this.camLook);this.scene.fog.near=r+28,this.scene.fog.far=r+150;const a=this.diePlacement();this.die.position.copy(a.pos),this.die.position.y+=this.dieBounce||0;const o=this.dieSquash||1;this.die.scale.set(a.size/Math.sqrt(o),a.size*o,a.size/Math.sqrt(o)),this.dieLight.position.set(1.5,a.pos.y+2,a.pos.z+3);const l=this.activeId!=null&&this.tokens.get(this.activeId);if(this.marker.visible=this.markerRing.visible=!!l&&this.mode==="follow",l){this.marker.position.set(l.position.x,l.position.y+2.55+Math.sin(this.time*4)*.15,l.position.z),this.marker.rotation.y+=t*2,this.markerRing.position.set(l.position.x,.31,l.position.z);const h=(u=(c=this.players)==null?void 0:c.find(f=>f.id===this.activeId))==null?void 0:u.color;h&&(this.markerRing.material.color.set(h),this.markerCone.material=st(new Et(h).getHex())),this.markerRing.material.opacity=.55+Math.sin(this.time*5)*.3}if(this.beacon.visible){const h=.5+Math.sin(this.time*2.5)*.5;this.beaconRing.scale.setScalar(1+h*.25),this.beaconRing.material.opacity=.35+(1-h)*.5,this.beaconCol.material.opacity=.12+h*.1}for(const[h,f]of this.tokens){const d=f.getObjectByName("figure"),g=d==null?void 0:d.getObjectByName("head");g&&(g.rotation.z=Math.sin(this.time*2+h)*.06)}if(!this.reduced){for(let h=0;h<this.palms.length;h++)this.palms[h].rotation.z=Math.sin(this.time*.9+h*1.7)*.035;for(let h=0;h<this.flags.length;h++)this.flags[h].scale.x=.85+Math.sin(this.time*6+h)*.15}this.updateSky(t),this.frameNo=(this.frameNo||0)+1,(!this.lowPower||this.frameNo%6===0)&&this.renderer.render(this.scene,this.camera)}toScreen(t){const e=t.clone().project(this.camera);return{x:(e.x+1)/2*(this.canvas.clientWidth||innerWidth),y:(1-e.y)/2*(this.canvas.clientHeight||innerHeight)}}dieScreen(){const t=new C;return this.die.getWorldPosition(t),this.toScreen(t)}}function Vr(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const rn=typeof window<"u"?window.speechSynthesis:null;let Ku=!0,yl=null;function Th(){if(!rn)return;const t=(rn.getVoices()||[]).filter(e=>/^en[-_]/i.test(e.lang));yl=t.find(e=>/samantha|karen|moira|tessa|google us english|google uk english female|aria|jenny/i.test(e.name))||t.find(e=>e.localService)||t[0]||null}var Fh;rn&&(Th(),(Fh=rn.addEventListener)==null||Fh.call(rn,"voiceschanged",Th));function Qu(i){Ku=i,i||Fi()}function G_(i){return String(i).replace(/ﷺ/g,", peace be upon him,").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[ʿʾ]/g,"").replace(/[\u0600-\u06FF]+/g,"").replace(/Kaaba/g,"Kaba").replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/gu,"").replace(/\s+/g," ").trim()}function Ce(i,{rate:t=.92,pitch:e=1.1,interrupt:n=!0}={}){if(!(!rn||!Ku||!i))try{n&&rn.cancel();const s=new SpeechSynthesisUtterance(G_(i));yl&&(s.voice=yl),s.rate=t,s.pitch=e,rn.speak(s)}catch{}}function Fi(){try{rn==null||rn.cancel()}catch{}}const qt=Math.PI*2,tf="#4a2f12";function ce(i,t,e){const n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}function on(i){const t=i.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2}}function yo(i){for(let t=i.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1));[i[t],i[e]]=[i[e],i[t]]}return i}function ki(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}class ir{constructor(t){this.api=t,this.stage=t.stage,this.canvas=ce("canvas","act-canvas"),this.stage.appendChild(this.canvas),this.x=this.canvas.getContext("2d"),this.w=300,this.h=300,this.t=0,this.alive=!0,this.fx=[],this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(this.stage),this.resize();let e=performance.now();const n=s=>{var a,o;if(!this.alive)return;const r=Math.min(.05,(s-e)/1e3)*(((a=t.speed)==null?void 0:a.call(t))||1);e=s,this.t+=r,(o=this.update)==null||o.call(this,r),this.drawAll(r),requestAnimationFrame(n)};requestAnimationFrame(n),this.lastDown=0,this.canvas.addEventListener("pointerdown",s=>{var r,a,o;this.lastDown=performance.now(),(a=(r=this.canvas).setPointerCapture)==null||a.call(r,s.pointerId),(o=this.down)==null||o.call(this,this.local(s),s)}),this.canvas.addEventListener("mousedown",s=>{var r;performance.now()-this.lastDown>80&&(this.lastDown=performance.now(),(r=this.down)==null||r.call(this,this.local(s),s))}),this.canvas.addEventListener("pointermove",s=>{var r;(r=this.move)==null||r.call(this,this.local(s),s)}),this.canvas.addEventListener("pointerup",s=>{var r;return(r=this.up)==null?void 0:r.call(this,this.local(s),s)}),this.canvas.addEventListener("pointercancel",s=>{var r;return(r=this.up)==null?void 0:r.call(this,this.local(s),s)})}resize(){var e;const t=Math.min(2,window.devicePixelRatio||1);this.w=Math.max(200,this.stage.clientWidth),this.h=Math.max(200,this.stage.clientHeight),this.canvas.width=Math.round(this.w*t),this.canvas.height=Math.round(this.h*t),this.canvas.style.width=this.w+"px",this.canvas.style.height=this.h+"px",this.x.setTransform(t,0,0,t,0,0),(e=this.layout)==null||e.call(this)}local(t){const e=this.canvas.getBoundingClientRect();return{x:t.clientX-e.left,y:t.clientY-e.top}}toScreen(t){const e=this.canvas.getBoundingClientRect();return{x:e.left+t.x,y:e.top+t.y}}float(t,e,n,s="#fff",r="#2b8a34"){this.fx.push({text:t,x:e,y:n,t:0,color:s,stroke:r})}drawAll(t){const e=this.x;e.clearRect(0,0,this.w,this.h),this.draw(e,t);for(let n=this.fx.length-1;n>=0;n--){const s=this.fx[n];if(s.t+=t,s.t>1.2){this.fx.splice(n,1);continue}e.save(),e.globalAlpha=1-s.t/1.2,e.font=`800 ${Math.round(Math.min(this.w,this.h)*.075)}px 'Baloo 2', sans-serif`,e.textAlign="center",e.lineWidth=5,e.strokeStyle=s.stroke,e.fillStyle=s.color,e.strokeText(s.text,s.x,s.y-s.t*50),e.fillText(s.text,s.x,s.y-s.t*50),e.restore()}}destroy(){this.alive=!1,this.ro.disconnect()}}function V_(i){const{stage:t}=i,e=ce("div","talbiyah");t.appendChild(e);let n;const s=new Promise(g=>{n=g});let r=-1,a=1;const o=2;i.setHint("First, make your intention and put on ihram."),i.setCounter("");const l=ce("button","intent-btn",'<span class="big-ico">🤍</span><b>Put on ihram & make intention</b><small>“Labbayka ʿUmrah” — Here I am, O Allah, for ʿUmrah</small>');l.dataset.t="intent",e.appendChild(l);const c=ce("div","phrases hidden");e.appendChild(c);const u=ia.map((g,v)=>{const m=ce("button","phrase",`<span class="ar" lang="ar" dir="rtl">${g.ar}</span><b>${g.tr}</b><small>${g.en}</small>`);return m.dataset.t="phrase"+v,m.onclick=()=>d(v,m),c.appendChild(m),m}),h=ce("div","src",`Talbiyah — ${$u}`);c.appendChild(h),l.onclick=()=>{Lt.good(),l.classList.add("hidden"),c.classList.remove("hidden"),r=0,f(),i.setHint("Say the Talbiyah! Tap the glowing words, one at a time."),i.setCounter(`Round ${a} / ${o}`),Ce("Now say the Talbiyah! Tap the glowing words.")};function f(){var g,v;u.forEach((m,p)=>{m.classList.toggle("glow",p===r),m.classList.toggle("said",p<r)}),(v=(g=u[r])==null?void 0:g.scrollIntoView)==null||v.call(g,{block:"nearest",behavior:"smooth"})}function d(g,v){var m;if(!(r<0)){if(g!==r){Lt.gentle(),i.say("Follow the glowing words, one at a time 🙂","soft"),i.mistake("talbiyah-order");return}if(Lt.right(),i.clear(),Ce(ia[g].en,{interrupt:!0}),v.classList.add("pop"),setTimeout(()=>v.classList.remove("pop"),300),r++,r>=ia.length)if(a<o)a++,r=0,i.say("Pilgrims say it again and again — once more!","good"),i.setCounter(`Round ${a} / ${o}`);else{r=99,f(),i.say("Labbayk! You are ready for ʿUmrah.","good"),setTimeout(()=>n({ok:!0}),600/(((m=i.speed)==null?void 0:m.call(i))||1));return}f()}}return{kind:"talbiyah",promise:s,targets:()=>{const g={};return l.classList.contains("hidden")||(g.intent=on(l)),u.forEach((v,m)=>{c.classList.contains("hidden")||(g["phrase"+m]=on(v))}),g.step=r,g},destroy(){}}}class W_ extends ir{constructor(t,e){super(t),this.opts=e,this.circuits=0,this.progress=0,this.wrong=0,this.last=null,this.warnT=0,this.doneFlag=!1,this.crowd=Array.from({length:60},()=>({a:Math.random()*qt,r:.3+Math.random()*.6,sp:.25+Math.random()*.2,c:Math.random()<.7?"#ffffff":["#d8cbe8","#9ec9e0","#e8d6b5"][Math.floor(Math.random()*3)]})),this.startA=Math.PI/4,t.setHint(e.hint||"Drag your pilgrim around the Kaaba — anticlockwise, with the Kaaba on your LEFT."),t.setCounter("Circuit 0 / 7"),this.promise=new Promise(n=>{this.resolve=n})}layout(){this.cx=this.w/2,this.cy=this.h/2,this.R=Math.min(this.w,this.h)*.46,this.track=this.R*.72}angleOf(t){return Math.atan2(t.y-this.cy,t.x-this.cx)}down(t){Math.hypot(t.x-this.cx,t.y-this.cy)>this.R*.12&&(this.last=this.angleOf(t))}up(){this.last=null}move(t,e){if(this.last==null&&e&&e.buttons&1&&!this.doneFlag){this.down(t);return}if(this.last==null||this.doneFlag||Math.hypot(t.x-this.cx,t.y-this.cy)<this.R*.12)return;const n=this.angleOf(t);let s=n-this.last;if(s>Math.PI&&(s-=qt),s<-Math.PI&&(s+=qt),this.last=n,s<0)for(this.progress+=-s,this.wrong=Math.max(0,this.wrong- -s*.5);this.progress>=qt;){this.progress-=qt,this.circuits++,Lt.circuit();const r=this.pilgrimPos();if(this.float(this.circuits===7?"Allāhu Akbar! 7 ✓":`Allāhu Akbar! ${this.circuits}`,r.x,r.y-20),this.api.setCounter(`Circuit ${this.circuits} / 7`),this.circuits<7&&this.api.say(`Circuit ${this.circuits} done — Allāhu Akbar! Keep going…`,"good"),this.circuits>=7){this.finish();return}}else s>0&&(this.wrong+=s,this.wrong>.6&&this.warnT<=.6&&(this.wrong=0,this.warnT=2.2,Lt.gentle(),this.api.say("Oops! Tawaf goes the other way — keep the Kaaba on your LEFT side 🙂","soft"),this.api.mistake("tawaf-direction")))}finish(){var t,e;this.doneFlag=!0,this.api.say(this.opts.doneText||"Tawaf complete! Now pilgrims pray two rakʿahs and drink Zamzam water.","good"),setTimeout(()=>this.resolve({ok:!0}),900/(((e=(t=this.api).speed)==null?void 0:e.call(t))||1))}pilgrimPos(){const t=this.startA-this.progress;return{x:this.cx+Math.cos(t)*this.track,y:this.cy+Math.sin(t)*this.track}}update(t){for(const e of this.crowd)e.a-=e.sp*t;this.warnT>0&&(this.warnT-=t)}draw(t){const{cx:e,cy:n,R:s}=this;t.fillStyle="#f6f3ec",t.beginPath(),t.arc(e,n,s,0,qt),t.fill(),t.lineWidth=6,t.strokeStyle="#e0d2b4",t.stroke();for(const f of[.45,.95])t.beginPath(),t.arc(e,n,s*f,0,qt),t.lineWidth=1.5,t.strokeStyle="#e8dfcc",t.stroke();t.setLineDash([6,10]),t.beginPath(),t.arc(e,n,this.track,0,qt),t.lineWidth=3,t.strokeStyle="rgba(63,174,73,0.45)",t.stroke(),t.setLineDash([]);const r=this.warnT>0?.6+.4*Math.sin(this.t*12):.35;for(let f=0;f<8;f++){const d=f/8*qt-this.t*.4,g=e+Math.cos(d)*this.track,v=n+Math.sin(d)*this.track;t.save(),t.translate(g,v),t.rotate(d-Math.PI/2),t.globalAlpha=r,t.fillStyle=this.warnT>0?"#ff9a3c":"#3fae49",t.beginPath(),t.moveTo(-10,-8),t.lineTo(10,0),t.lineTo(-10,8),t.lineTo(-5,0),t.closePath(),t.fill(),t.restore()}for(const f of this.crowd){const d=s*(.3+f.r*.62);t.fillStyle=f.c,t.beginPath(),t.arc(e+Math.cos(f.a)*d,n+Math.sin(f.a)*d,s*.022,0,qt),t.fill(),t.lineWidth=1,t.strokeStyle="rgba(0,0,0,0.12)",t.stroke()}const a=s*.19,o=e+a,l=n+a;t.strokeStyle="#3bdc6a",t.lineWidth=4,t.setLineDash([8,6]),t.beginPath(),t.moveTo(o,l),t.lineTo(e+Math.cos(this.startA)*s,n+Math.sin(this.startA)*s),t.stroke(),t.setLineDash([]),t.fillStyle="#1b1b1f",ki(t,e-a,n-a,a*2,a*2,3),t.fill(),t.strokeStyle="#d9aa3c",t.lineWidth=Math.max(3,a*.14),ki(t,e-a*.8,n-a*.8,a*1.6,a*1.6,2),t.stroke(),t.fillStyle="#d8d8d8",t.beginPath(),t.arc(o,l,4,0,qt),t.fill(),t.font=`700 ${Math.round(s*.07)}px 'Baloo 2', sans-serif`,t.textAlign="center",t.fillStyle="#2b8a34";const c=e+Math.cos(this.startA)*s*.93,u=n+Math.sin(this.startA)*s*.93;t.fillText("Start",c+14,u+18),t.fillStyle="#7a6a50",t.fillText("Black Stone corner",o+2,l+s*.12);const h=this.pilgrimPos();if(t.fillStyle="rgba(0,0,0,0.15)",t.beginPath(),t.ellipse(h.x,h.y+s*.05,s*.07,s*.03,0,0,qt),t.fill(),t.fillStyle=this.api.color,t.beginPath(),t.arc(h.x,h.y,Math.max(12,s*.08),0,qt),t.fill(),t.lineWidth=4,t.strokeStyle="#fff",t.stroke(),t.fillStyle="#fff",t.beginPath(),t.arc(h.x,h.y,s*.035,0,qt),t.fill(),t.strokeStyle=this.api.color,t.lineWidth=6,t.lineCap="round",t.beginPath(),t.arc(e,n,s+8,this.startA-this.progress,this.startA,!1),t.stroke(),t.lineCap="butt",this.warnT>0){t.save(),t.globalAlpha=Math.min(1,this.warnT),t.strokeStyle="#ff9a3c",t.lineWidth=10,t.lineCap="round";const f=-Math.PI*.15,d=-Math.PI*.75;t.beginPath(),t.arc(e,n,s*.5,f,d,!0),t.stroke();const g=e+Math.cos(d)*s*.5,v=n+Math.sin(d)*s*.5;t.fillStyle="#ff9a3c",t.translate(g,v),t.rotate(d-Math.PI/2),t.beginPath(),t.moveTo(18,0),t.lineTo(-8,-14),t.lineTo(-8,14),t.closePath(),t.fill(),t.restore()}}targets(){const t=this.toScreen({x:this.cx,y:this.cy}),e=this.toScreen(this.pilgrimPos());return{cx:t.x,cy:t.y,r:this.track,pilgrim:e,circuits:this.circuits}}}class q_ extends ir{constructor(t,e){super(t),this.opts=e,this.laps=0,this.pos=0,this.dir=1,this.holding=!1,this.started=!1,this.zamzam=0,this.story=ui.sai.story,this.promise=new Promise(a=>{this.resolve=a}),t.setCounter("Lap 0 / 7"),t.setHint("Where does Saʿi begin?");const n=ce("div","choice-row"),s=ce("button","btn","⛰️ At Safa"),r=ce("button","btn alt","⛰️ At Marwah");s.dataset.t="safa",r.dataset.t="marwah",n.append(s,r),t.buttons.appendChild(n),this.q=n,this.qBtns={safa:s,marwah:r},r.onclick=()=>{Lt.gentle(),t.mistake("sai-start"),t.say("Not quite — Saʿi begins at Safa, just as Allah mentions Safa first (Quran 2:158).","soft")},s.onclick=()=>{Lt.right(),t.say("Yes! Saʿi begins at Safa. 🙂","good"),n.remove(),this.begin()}}begin(){this.started=!0;const t=this.api;t.setHint("Hold the Walk button (or tap it) to walk to the other hill. 7 laps!");const e=ce("button","btn big walk","👣 Walk");e.dataset.t="walk";const n=r=>{r.preventDefault(),this.holding=!0,this.nudge()},s=()=>{this.holding=!1};e.addEventListener("pointerdown",n),e.addEventListener("pointerup",s),e.addEventListener("pointerleave",s),e.addEventListener("pointercancel",s),t.buttons.appendChild(e),this.walkBtn=e,this.opts.short?t.story("Saʿi again for Hajj: 7 laps, starting at Safa and ending at Marwah."):t.story(this.story[0])}down(){this.started&&this.laps<7&&(this.holding=!0,this.nudge())}up(){this.holding=!1}nudge(){this.pos+=.045*this.dir,this.check(),Lt.step()}inGreen(){return this.pos>.4&&this.pos<.6}update(t){if(this.zamzam>0&&(this.zamzam+=t),!this.holding||this.laps>=7)return;const e=this.inGreen()&&this.api.male?1.5:1;this.pos+=t*.55*e*this.dir,this.stepT=(this.stepT||0)+t,this.stepT>.22&&(this.stepT=0,Lt.step()),this.check()}check(){this.dir>0&&this.pos>=1?(this.pos=1,this.lap()):this.dir<0&&this.pos<=0&&(this.pos=0,this.lap())}lap(){var e,n,s;this.laps++,this.dir*=-1,this.holding=!1,Lt.circuit(),this.api.setCounter(`Lap ${this.laps} / 7`);const t=this.pos>=1?"Marwah":"Safa";this.float(`${t}! ${this.laps}`,this.hx(this.pos),this.h*.35),!this.opts.short&&this.story[this.laps]&&this.api.story(this.story[Math.min(this.story.length-1,this.laps)]),this.laps>=7&&((e=this.walkBtn)==null||e.remove(),this.zamzam=.01,Lt.water(),this.api.say(this.opts.short?"Saʿi complete, ending at Marwah!":"Saʿi complete! You finished at Marwah — and remembered the gift of Zamzam.","good"),setTimeout(()=>this.resolve({ok:!0}),1500/(((s=(n=this.api).speed)==null?void 0:s.call(n))||1)))}hx(t){return this.w*.17+t*this.w*.66}draw(t){const{w:e,h:n}=this,s=n*.72;t.fillStyle="#fdf6e8",t.fillRect(0,0,e,n),t.fillStyle="#e8dcc2",t.fillRect(0,n*.08,e,n*.07);for(let g=0;g<=10;g++){const v=g/10*e;t.fillStyle="#f1e7d0",t.fillRect(v-6,n*.15,12,s-n*.15),t.fillStyle="#e4d6b8",t.beginPath(),t.arc(v+e/20,n*.15,e/20-6,0,Math.PI),t.fill()}const r=this.hx(.4),a=this.hx(.6);t.fillStyle="rgba(59,220,106,0.18)",t.fillRect(r,n*.15,a-r,s-n*.15),t.fillStyle="#3bdc6a",t.fillRect(r-4,n*.15,8,n*.05),t.fillRect(a-4,n*.15,8,n*.05),t.font=`700 ${Math.round(n*.045)}px 'Baloo 2', sans-serif`,t.textAlign="center",t.fillStyle="#2b8a34",t.fillText("green lights",(r+a)/2,n*.26),t.fillStyle="#f6f3ec",t.fillRect(0,s,e,n-s),t.fillStyle="#e0d2b4",t.fillRect(0,s,e,4);const o=(g,v)=>{const m=e*.1;t.fillStyle="#a58a6c",t.beginPath(),t.moveTo(g-m,s+2),t.quadraticCurveTo(g-m*.4,n*.4,g,n*.42),t.quadraticCurveTo(g+m*.45,n*.42,g+m,s+2),t.closePath(),t.fill(),t.fillStyle="#8f7658",t.beginPath(),t.arc(g-m*.25,n*.52,n*.045,0,qt),t.arc(g+m*.3,n*.58,n*.035,0,qt),t.fill(),t.font=`800 ${Math.round(Math.min(n*.055,e*.05))}px 'Baloo 2', sans-serif`;const p=t.measureText(v).width+20,y=Math.min(e-p/2-4,Math.max(p/2+4,g));t.fillStyle="#fff",ki(t,y-p/2,n*.29,p,n*.08,12),t.fill(),t.fillStyle=tf,t.fillText(v,y,n*.35)};o(this.w*.1,"Safa"),o(this.w*.9,"Marwah");for(let g=0;g<7;g++)t.fillStyle=g<this.laps?this.api.color:"#e6dcc6",t.beginPath(),t.arc(e/2+(g-3)*n*.06,n*.9,n*.022,0,qt),t.fill();const l=this.hx(this.pos),c=s-4,u=this.holding?Math.abs(Math.sin(this.t*12))*5:0,h=n*.1;t.fillStyle="rgba(0,0,0,0.15)",t.beginPath(),t.ellipse(l,c+3,h*.5,h*.14,0,0,qt),t.fill();const f=!this.api.male;t.fillStyle=f?this.api.color:"#fbfbf7",t.beginPath(),t.moveTo(l-h*.42,c-u),t.lineTo(l-h*.25,c-h*1.1-u),t.lineTo(l+h*.25,c-h*1.1-u),t.lineTo(l+h*.42,c-u),t.closePath(),t.fill(),t.lineWidth=2,t.strokeStyle="rgba(0,0,0,0.15)",t.stroke(),t.fillStyle="#c68a5e",t.beginPath(),t.arc(l,c-h*1.35-u,h*.3,0,qt),t.fill(),f?(t.fillStyle="#fff",t.beginPath(),t.arc(l,c-h*1.38-u,h*.36,Math.PI*.95,Math.PI*2.05),t.lineTo(l+h*.36,c-h*1.1-u),t.lineTo(l-h*.36,c-h*1.1-u),t.fill()):(t.fillStyle="#2b1a10",t.beginPath(),t.arc(l,c-h*1.4-u,h*.3,Math.PI*1.05,Math.PI*1.95),t.fill()),t.fillStyle="#221a14";const d=this.dir;if(t.beginPath(),t.arc(l+d*h*.1-h*.08,c-h*1.36-u,2.2,0,qt),t.arc(l+d*h*.1+h*.08,c-h*1.36-u,2.2,0,qt),t.fill(),this.zamzam>0){const g=e*.5,v=s+(n-s)*.45;t.fillStyle="#cfe9ff",t.beginPath(),t.ellipse(g,v,e*.12,n*.05,0,0,qt),t.fill(),t.strokeStyle="#3fa6e0",t.lineWidth=4,t.stroke();for(let m=0;m<14;m++){const y=(this.zamzam*3+m)%1;t.fillStyle=`rgba(63,166,224,${1-y})`,t.beginPath(),t.arc(g+Math.sin(m*2.3)*e*.08*y,v-y*n*.12,4,0,qt),t.fill()}t.fillStyle="#1c5a8a",t.font=`800 ${Math.round(n*.05)}px 'Baloo 2', sans-serif`,t.fillText("Zamzam 💧",g,v+n*.1)}}targets(){var e,n;const t={laps:this.laps,started:this.started};return(e=this.q)!=null&&e.isConnected&&(t.safa=on(this.qBtns.safa),t.marwah=on(this.qBtns.marwah)),(n=this.walkBtn)!=null&&n.isConnected&&(t.walk=on(this.walkBtn)),t.canvas=this.toScreen({x:this.w/2,y:this.h/2}),t}destroy(){super.destroy()}}class $_ extends ir{constructor(t,e){super(t),this.opts=e,this.cut=[!1,!1,!1],this.falling=[],this.promise=new Promise(s=>{this.resolve=s});const n=t.male;t.setHint(n?e.eid?"Men shave or trim. Tap the scissors on each dotted line to snip!":"Men trim now (and shave on the Day of Eid). Snip each lock at the dotted line!":"Women trim just a fingertip's length, in private. Snip each lock at the dotted line!"),t.setCounter("Snips 0 / 3")}layout(){const{w:t,h:e}=this;this.locks=[0,1,2].map(n=>({x:t*(.28+n*.22),top:e*.14,tip:e*(.72+n%2*.04),cutY:e*(.64+n%2*.04)}))}down(t){var n,s;if(this.cut.every(Boolean))return;const e=Math.max(14,this.h*.045);for(let r=0;r<3;r++){const a=this.locks[r];if(!(this.cut[r]||Math.abs(t.x-a.x)>this.w*.08)){if(Math.abs(t.y-a.cutY)<=e||t.y>a.cutY&&t.y<=a.tip+10){this.cut[r]=!0,Lt.snip(),this.falling.push({x:a.x,y:a.cutY,vy:0,t:0,len:a.tip-a.cutY}),this.float("Snip! ✂️",a.x,a.cutY-20),this.api.clear();const o=this.cut.filter(Boolean).length;this.api.setCounter(`Snips ${o} / 3`),o===3&&(this.api.say(this.opts.eid?"All done! Most ihram rules are now lifted.":"ʿUmrah complete! Pilgrims now come out of ihram.","good"),setTimeout(()=>this.resolve({ok:!0}),1e3/(((s=(n=this.api).speed)==null?void 0:s.call(n))||1)));return}if(t.y<a.cutY-e&&t.y>a.top){Lt.gentle(),this.api.mistake("trim-too-much"),this.api.say("Just a little! Snip at the dotted line — about a fingertip's length.","soft");return}}}}move(t){this.hover=t}update(t){for(const e of this.falling)e.t+=t,e.vy+=900*t,e.y+=e.vy*t}draw(t){const{w:e,h:n}=this,s=t.createLinearGradient(0,0,0,n);s.addColorStop(0,"#fff3f8"),s.addColorStop(1,"#ffe3ee"),t.fillStyle=s,t.fillRect(0,0,e,n),t.fillStyle="#ffd24a",ki(t,e*.14,n*.07,e*.72,n*.07,10),t.fill(),t.fillStyle="#e6b400";for(let r=0;r<26;r++)t.fillRect(e*.16+r*e*.0265,n*.13,3,n*.03);this.locks.forEach((r,a)=>{const o=this.cut[a]?r.cutY:r.tip,l=Math.max(18,e*.035);t.lineCap="round";const c=()=>{t.beginPath(),t.moveTo(r.x,r.top+8),t.bezierCurveTo(r.x+l,r.top+(o-r.top)*.35,r.x-l,r.top+(o-r.top)*.7,r.x,o)};t.strokeStyle="#4a2e1b",t.lineWidth=l,c(),t.stroke(),t.strokeStyle="#6b4428",t.lineWidth=l*.6,c(),t.stroke(),t.strokeStyle="rgba(255,255,255,0.28)",t.lineWidth=l*.15,t.beginPath(),t.moveTo(r.x-l*.15,r.top+14),t.bezierCurveTo(r.x+l*.85,r.top+(o-r.top)*.35,r.x-l*1.15,r.top+(o-r.top)*.7,r.x-l*.2,o-6),t.stroke(),t.lineCap="butt",t.fillStyle=["#ff6fa8","#3fa6e0","#ffd24a"][a],ki(t,r.x-l*.7,r.top+4,l*1.4,10,5),t.fill(),this.cut[a]?(t.fillStyle="#3fae49",t.font=`800 ${Math.round(n*.06)}px 'Baloo 2', sans-serif`,t.textAlign="center",t.fillText("✓",r.x,r.cutY+n*.08)):(t.setLineDash([6,6]),t.strokeStyle="#ff6fa8",t.lineWidth=3,t.beginPath(),t.moveTo(r.x-e*.07,r.cutY),t.lineTo(r.x+e*.07,r.cutY),t.stroke(),t.setLineDash([]))});for(const r of this.falling)r.y>n+40||(t.save(),t.translate(r.x,r.y),t.rotate(r.t*4),t.strokeStyle="#6b4428",t.lineCap="round",t.lineWidth=Math.max(14,e*.028),t.beginPath(),t.moveTo(0,0),t.lineTo(0,r.len*.8),t.stroke(),t.restore());this.hover&&(t.font=`${Math.round(n*.09)}px "Apple Color Emoji","Segoe UI Emoji",sans-serif`,t.textAlign="center",t.fillText("✂️",this.hover.x,this.hover.y+n*.03)),t.fillStyle="#b0588a",t.font=`700 ${Math.round(n*.045)}px 'Baloo 2', sans-serif`,t.textAlign="center",t.fillText("Snip at the dotted lines",e/2,n*.93)}targets(){const t={cut:[...this.cut]};return this.locks.forEach((e,n)=>{t["cut"+n]=this.toScreen({x:e.x,y:e.cutY}),t["high"+n]=this.toScreen({x:e.x,y:e.top+(e.cutY-e.top)*.35})}),t}}const Wr={green:"#3fae49",blue:"#3fa6e0",purple:"#8e6cf0",orange:"#ff9a3c",pink:"#ff6fa8",teal:"#2bb5a6"};function X_(i){var p;const{stage:t}=i;let e;const n=new Promise(y=>{e=y}),s=((p=Object.entries(Wr).find(([,y])=>y.toLowerCase()===i.color.toLowerCase()))==null?void 0:p[0])||"green",r="⭐";i.setHint("Mina is full of white tents! Find your group's tent — look at the flag."),i.setCounter("");const a=ce("div","tent-wrap"),o=ce("div","tent-want",`Your group's flag: <span class="flag" style="background:${Wr[s]}">${r}</span>`);a.appendChild(o);const l=ce("div","tent-grid");a.appendChild(l),t.appendChild(a);const c=Object.keys(Wr).filter(y=>y!==s),u=yo([[s,"🌙"],[s,"❤️"],[c[0],r],[c[1],r],[c[2],"🔷"],[c[0],"🌙"],[c[3],"❤️"],[c[4],"⭐"]]),h=yo([[s,r],...u]),f=[];h.forEach(([y,x],_)=>{const R=ce("button","tent",`<svg viewBox="0 0 100 90" aria-hidden="true"><line x1="50" y1="4" x2="50" y2="30" stroke="#8a6a44" stroke-width="3"/><path d="M50 26 L92 58 L92 86 L8 86 L8 58 Z" fill="#fff" stroke="#d8d2c4" stroke-width="3"/><path d="M42 86 L50 62 L58 86 Z" fill="#e9e4d8"/></svg><span class="flag" style="background:${Wr[y]}">${x}</span>`);R.dataset.t=y===s&&x===r?"right":"wrong"+_,R.onclick=()=>{var E;R.dataset.t==="right"?(Lt.right(),i.clear(),R.classList.add("found"),setTimeout(m,700/(((E=i.speed)==null?void 0:E.call(i))||1))):(Lt.gentle(),i.mistake("tent"),R.classList.add("shake"),setTimeout(()=>R.classList.remove("shake"),400),i.say("That's another group's tent — check the colour AND the symbol 🙂","soft"))},l.appendChild(R),f.push(R)});let d=null;const g=[["Dhuhr","☀️"],["ʿAsr","🌤️"],["Maghrib","🌇"],["ʿIsha","🌙"],["Fajr","🌅"]];let v=0;function m(){a.innerHTML="",i.say("You found your group! 🎉","good"),i.setHint("In Mina, pilgrims pray five prayers, each on time. Tap them in order, starting with Dhuhr!"),i.setCounter("Prayers 0 / 5"),d=ce("div","prayer-grid"),yo(g.map((y,x)=>[...y,x])).forEach(([y,x,_])=>{const R=ce("button","prayer",`<span>${x}</span><b>${y}</b>`);R.dataset.t="prayer"+_,R.onclick=()=>{var E;if(!R.classList.contains("done")){if(_!==v){Lt.gentle(),i.mistake("prayer-order"),i.say(`Next comes ${g[v][0]} — prayers go Dhuhr, ʿAsr, Maghrib, ʿIsha, then Fajr.`,"soft");return}Lt.right(),i.clear(),R.classList.add("done"),v++,i.setCounter(`Prayers ${v} / 5`),v===5&&(i.say("MashaAllah! In Mina the 4-rakʿah prayers are shortened to 2, each prayed at its own time.","good"),setTimeout(()=>e({ok:!0}),1100/(((E=i.speed)==null?void 0:E.call(i))||1)))}},d.appendChild(R)}),a.appendChild(d)}return{kind:"tent",promise:n,targets:()=>{const y={};return d?d.querySelectorAll(".prayer").forEach(x=>{y[x.dataset.t]=on(x)}):f.forEach(x=>{y[x.dataset.t]=on(x)}),y.phase=d?"prayers":"tent",y},destroy(){}}}function j_(i){const{stage:t}=i;let e;const n=new Promise(v=>{e=v});i.setHint("Choose 3 du'as to make on the Day of Arafah. Tap a card to choose it."),i.setCounter("Chosen 0 / 3");const s=ce("div","dua-wrap");t.appendChild(s);const r=ce("div","dua-grid");s.appendChild(r);const a=new Set,o=A_.map((v,m)=>{const p=ce("button","dua",`<span>${v.icon}</span><b>${v.text}</b>`);return p.dataset.t="dua"+m,p.onclick=()=>{if(a.has(m))a.delete(m),p.classList.remove("on");else if(a.size>=3){Lt.gentle(),i.mistake("dua-max"),i.say("You chose 3 already — tap a chosen card to swap it.","soft");return}else a.add(m),p.classList.add("on"),Lt.pick(),i.clear(),Ce(v.text);i.setCounter(`Chosen ${a.size} / 3`),c.disabled=a.size!==3},r.appendChild(p),p}),l=ce("div","rabbana",`<b>A du'a from the Quran:</b> <i>${vo.tr}</i><br>${vo.en} <small>(${vo.source})</small>`);s.appendChild(l);const c=ce("button","btn","Make my du'a 🤲");c.dataset.t="go",c.disabled=!0,i.buttons.appendChild(c);let u=null,h=null,f=8,d=!1,g=null;return c.onclick=()=>{var m;if(a.size!==3)return;c.remove(),i.clear(),s.innerHTML="",i.setHint("A quiet moment. Close your eyes and ask Allah for anything good, in your own words."),i.setCounter(""),u=ce("div","quiet",`<div class="sunset"><div class="sun"></div><div class="mount"></div></div><div class="breath"></div><div class="quiet-text">Breathe in… breathe out…<br><span id="quietCount">${f}</span></div>`),s.appendChild(u),Lt.chime(),Ce("A quiet moment. Close your eyes and make your own du'a.");const v=((m=i.speed)==null?void 0:m.call(i))||1;g=setInterval(()=>{if(d){clearInterval(g);return}f--;const p=u.querySelector("#quietCount");p&&(p.textContent=f>0?f:"🤍"),f<=0&&(clearInterval(g),h=ce("button","btn big","Ameen 🤲"),h.dataset.t="ameen",h.onclick=()=>{Lt.good(),e({ok:!0})},i.buttons.appendChild(h),i.say("The best du'a is the du'a on the Day of Arafah.","good"))},1e3/v)},{kind:"arafah",promise:n,targets:()=>{const v={chosen:a.size,phase:u?"quiet":"cards"};return u||o.forEach((m,p)=>{v["dua"+p]=on(m)}),c.isConnected&&(v.go=on(c)),h!=null&&h.isConnected&&(v.ameen=on(h)),v},destroy(){d=!0,clearInterval(g)}}}class Y_ extends ir{constructor(t){super(t),this.got=0,this.need=7,this.flying=[],this.promise=new Promise(e=>{this.resolve=e}),t.setHint("Night at Muzdalifah. Tap small pebbles — about the size of a chickpea — to collect 7."),t.setCounter("Pebbles 0 / 7")}layout(){if(this.items)return;const{w:t,h:e}=this,n=Ah(11);this.items=[];const s=(a,o,l)=>this.items.every(c=>Math.hypot(c.x-a,c.y-o)>c.r+l+12);let r=0;for(;this.items.length<19&&r++<800;){const a=this.items.length>=13,o=a?e*(.055+n()*.02):e*.018,l=t*.08+n()*t*.84,c=e*.45+n()*e*.45;l>t*.72&&c<e*.62||s(l,c,o)&&this.items.push({x:l,y:c,r:o,big:a,taken:!1,s:n()})}this.pouch={x:t*.86,y:e*.5}}down(t){var s,r;if(this.got>=this.need)return;let e=null,n=1e9;for(const a of this.items){if(a.taken)continue;const o=Math.hypot(t.x-a.x,t.y-a.y),l=a.big?a.r+4:Math.max(22,a.r*2.4);o<l&&o<n&&(n=o,e=a)}if(e){if(e.big){Lt.gentle(),this.api.mistake("pebble-big"),this.api.say("That one is too big! Pebbles should be small — like a chickpea.","soft");return}e.taken=!0,Lt.pick(),this.api.clear(),this.flying.push({x:e.x,y:e.y,t:0,sx:e.x,sy:e.y}),this.got++,this.api.setCounter(`Pebbles ${this.got} / 7`),this.got>=this.need&&(this.api.say("7 pebbles — ready for tomorrow! Pilgrims need 49 or 70 in all, for every day of stoning.","good"),setTimeout(()=>this.resolve({ok:!0}),1200/(((r=(s=this.api).speed)==null?void 0:r.call(s))||1)))}}update(t){for(const e of this.flying)e.t=Math.min(1,e.t+t*2.2)}draw(t){const{w:e,h:n}=this,s=t.createLinearGradient(0,0,0,n);s.addColorStop(0,"#0e1440"),s.addColorStop(.4,"#26307a"),s.addColorStop(.41,"#4a4270"),s.addColorStop(1,"#6a5a78"),t.fillStyle=s,t.fillRect(0,0,e,n);const r=Ah(3);for(let o=0;o<50;o++)t.fillStyle=`rgba(255,246,208,${.5+.5*Math.sin(this.t*2+o)})`,t.beginPath(),t.arc(r()*e,r()*n*.38,1+r()*1.6,0,qt),t.fill();Z_(t,e*.14,n*.13,n*.06);for(const o of[.25,.45,.62])t.fillStyle="#5b5b66",t.fillRect(e*o-2,n*.3,4,n*.11),t.fillStyle="#fff2b0",t.beginPath(),t.arc(e*o,n*.3,6,0,qt),t.fill();for(const o of this.items)o.taken||(t.fillStyle=o.big?"#8a7f70":["#b9b1a4","#a39a8c","#c7bfb2"][Math.floor(o.s*3)],t.beginPath(),t.ellipse(o.x,o.y,o.r*1.25,o.r,o.s,0,qt),t.fill(),t.fillStyle="rgba(255,255,255,0.35)",t.beginPath(),t.ellipse(o.x-o.r*.3,o.y-o.r*.35,o.r*.4,o.r*.25,0,0,qt),t.fill(),o.big||(t.strokeStyle=`rgba(255,242,168,${.35+.3*Math.sin(this.t*4+o.s*9)})`,t.lineWidth=2,t.beginPath(),t.arc(o.x,o.y,o.r*2.1,0,qt),t.stroke()));const a=this.pouch;t.fillStyle="#c98a3d",t.beginPath(),t.ellipse(a.x,a.y,e*.07,n*.1,0,0,qt),t.fill(),t.fillStyle="#a86a26",ki(t,a.x-e*.05,a.y-n*.12,e*.1,n*.04,8),t.fill(),t.fillStyle="#fff",t.font=`800 ${Math.round(n*.07)}px 'Baloo 2', sans-serif`,t.textAlign="center",t.fillText(String(this.got),a.x,a.y+n*.03);for(const o of this.flying){if(o.t>=1)continue;const l=o.sx+(a.x-o.sx)*o.t,c=o.sy+(a.y-o.sy)*o.t-Math.sin(o.t*Math.PI)*n*.2;t.fillStyle="#b9b1a4",t.beginPath(),t.arc(l,c,n*.02,0,qt),t.fill()}}targets(){const t={got:this.got,small:[],big:[]};for(const e of this.items||[])e.taken||t[e.big?"big":"small"].push(this.toScreen(e));return t}}class Eh extends ir{constructor(t,e){super(t),this.mode=e.mode,this.walls=this.mode==="aqabah"?[2]:[0,1,2],this.hits={0:0,1:0,2:0},this.cur=0,this.stones=[],this.pauseT=0,this.layout(),this.promise=new Promise(n=>{this.resolve=n}),t.setHint(this.mode==="aqabah"?'Today only the big wall, Jamrat al-ʿAqabah. Tap the wall to throw — 7 pebbles, "Allāhu Akbar" with each!':"Stone all three in order: small, then middle, then big. Tap the glowing wall — 7 pebbles each."),this.updateCounter()}updateCounter(){const t=["Small","Middle","Big"];this.mode==="aqabah"?this.api.setCounter(`Pebbles ${this.hits[2]} / 7`):this.api.setCounter(this.walls.map(e=>`${t[e]} ${this.hits[e]}/7`).join(" · "))}layout(){if(!this.walls)return;const{w:t,h:e}=this,n=this.walls.length;this.rects={},this.walls.forEach((s,r)=>{const a=n===1?t/2:t*(.2+r*.3),o=n===1?t*.34:t*[.14,.18,.23][s],l=e*[.26,.32,.4][s]*(n===1?1.15:1),c=e*.66;this.rects[s]={x:a-o/2,y:c-l,w:o,h:l,cx:a,base:c}})}wallAt(t){for(const e of this.walls){const n=this.rects[e];if(t.x>=n.x-8&&t.x<=n.x+n.w+8&&t.y>=n.y-8&&t.y<=n.base+16)return e}return null}down(t){this.cur>=this.walls.length||this.pauseT>0||(Lt.throw(),this.stones.push({sx:this.w/2,sy:this.h*.98,tx:t.x,ty:t.y,t:0,wall:this.wallAt(t)}))}land(t){var n,s;const e=this.walls[this.cur];if(t.wall==null){Lt.gentle(),this.api.say("Missed — no problem! Aim for the wall and try again.","soft"),this.api.mistake("jamarat-miss");return}if(!(t.wall!==e&&this.hits[t.wall]>=7)){if(t.wall!==e){Lt.gentle(),this.api.mistake("jamarat-order"),this.api.say("First the small one, then the middle one, then the big one 🙂","soft");return}this.hits[e]>=7||(this.hits[e]++,Lt.hit(),this.api.clear(),this.float("Allāhu Akbar!",t.tx,t.ty-10),this.updateCounter(),this.hits[e]>=7&&(this.cur++,this.cur>=this.walls.length?(this.api.say(this.mode==="aqabah"?"All 7 pebbles! The Talbiyah stops now — Eid Mubarak!":"All three Jamarat done — MashaAllah!","good"),setTimeout(()=>this.resolve({ok:!0}),1100/(((s=(n=this.api).speed)==null?void 0:s.call(n))||1))):(this.pauseT=1.4,this.api.say("Pilgrims stop here to face the Qiblah and make du'a 🤲","good"))))}}update(t){this.pauseT>0&&(this.pauseT-=t);for(let e=this.stones.length-1;e>=0;e--){const n=this.stones[e];n.t+=t*2.6,n.t>=1&&(this.stones.splice(e,1),this.land(n))}}draw(t){const{w:e,h:n}=this,s=t.createLinearGradient(0,0,0,n);s.addColorStop(0,"#9fdcff"),s.addColorStop(1,"#fff1d6"),t.fillStyle=s,t.fillRect(0,0,e,n),t.fillStyle="#e6ddd0",t.fillRect(0,n*.12,e,n*.05),t.fillStyle="#d6cbbb";for(let a=0;a<8;a++)t.fillRect(a*e/7-5,n*.17,10,n*.5);t.fillStyle="#efe7da",t.fillRect(0,n*.66,e,n*.34);const r=["Small","Middle","Big · al-ʿAqabah"];for(const a of this.walls){const o=this.rects[a],l=this.walls[this.cur]===a,c=this.hits[a]>=7;t.fillStyle="#b8b0a2",t.beginPath(),t.ellipse(o.cx,o.base+4,o.w*.66,n*.045,0,0,qt),t.fill(),t.strokeStyle="#cfc8bb",t.lineWidth=6,t.stroke(),l&&(t.save(),t.shadowColor="#ffd24a",t.shadowBlur=24+10*Math.sin(this.t*5)),t.fillStyle="#b9ada0",ki(t,o.x,o.y,o.w,o.h,6),t.fill(),l&&t.restore(),t.fillStyle="#9c9184",t.fillRect(o.x-4,o.y-6,o.w+8,10),t.strokeStyle="rgba(0,0,0,0.08)",t.lineWidth=2;for(let u=o.y+14;u<o.base;u+=16)t.beginPath(),t.moveTo(o.x,u),t.lineTo(o.x+o.w,u),t.stroke();for(let u=0;u<this.hits[a];u++)t.fillStyle="#8d8577",t.beginPath(),t.arc(o.cx-o.w*.4+u%7*o.w*.13,o.base+6+u%2*4,3,0,qt),t.fill();t.textAlign="center",t.fillStyle=c?"#2b8a34":tf,t.font=`800 ${Math.round(n*.045)}px 'Baloo 2', sans-serif`,t.fillText(`${r[a]}${c?" ✓":""}`,o.cx,o.base+n*.12),t.font=`700 ${Math.round(n*.04)}px 'Baloo 2', sans-serif`,t.fillText(`${this.hits[a]} / 7`,o.cx,o.base+n*.17)}t.fillStyle="#c98a3d",t.beginPath(),t.ellipse(e/2,n*.99,e*.05,n*.07,0,Math.PI,qt),t.fill(),t.fillStyle="#a86a26",t.fillRect(e/2-e*.03,n*.91,e*.06,n*.015);for(let a=0;a<5;a++)t.fillStyle="#9d9587",t.beginPath(),t.arc(e/2-12+a*6,n*.935-a%2*4,4,0,qt),t.fill();for(const a of this.stones){const o=a.t,l=a.sx+(a.tx-a.sx)*o,c=a.sy+(a.ty-a.sy)*o-Math.sin(o*Math.PI)*n*.25;t.fillStyle="#8d8577",t.beginPath(),t.arc(l,c,5,0,qt),t.fill()}}targets(){const t={cur:this.walls[this.cur],hits:{...this.hits},paused:this.pauseT>0};for(const e of this.walls){const n=this.rects[e];t["wall"+e]=this.toScreen({x:n.cx,y:n.y+n.h*.5})}return t.miss=this.toScreen({x:this.w*.03,y:this.h*.08}),t}}function J_(i){const{stage:t}=i;let e;const n=new Promise(g=>{e=g});i.setHint("Share the Qurbani parcels fairly: tap a parcel, then tap a door (or drag it there)."),i.setCounter("Shared 0 / 6");const s=ce("div","qb-wrap");t.appendChild(s);const r=[{id:"family",label:"Family",ico:"🏠"},{id:"friends",label:"Friends & neighbours",ico:"🏡"},{id:"need",label:"People in need",ico:"🤲"}],a={family:0,friends:0,need:0},o=ce("div","qb-doors"),l={};for(const g of r){const v=ce("button","qb-door",`<span class="ico">${g.ico}</span><b>${g.label}</b><span class="cnt">0</span>`);v.dataset.t="door-"+g.id,v.onclick=()=>d(g.id),o.appendChild(v),l[g.id]=v}const c=ce("div","qb-shelf"),u=[];let h=null;for(let g=0;g<6;g++){const v=ce("button","parcel",'<span class="ribbon-v"></span><span class="ribbon-h"></span>');v.dataset.t="parcel"+g,v.style.setProperty("--pc",["#f2c46b","#e9a86b","#f5d38a"][g%3]),v.onclick=()=>f(v),v.addEventListener("pointerdown",m=>{if(v.classList.contains("given"))return;f(v);const p=x=>{v.style.transform=`translate(${x.clientX-m.clientX}px, ${x.clientY-m.clientY}px) scale(1.1)`},y=x=>{var R;window.removeEventListener("pointermove",p),window.removeEventListener("pointerup",y),v.style.transform="";const _=(R=document.elementFromPoint(x.clientX,x.clientY))==null?void 0:R.closest(".qb-door");_&&Math.hypot(x.clientX-m.clientX,x.clientY-m.clientY)>20&&d(_.dataset.t.slice(5))};window.addEventListener("pointermove",p),window.addEventListener("pointerup",y)}),c.appendChild(v),u.push(v)}s.append(c,o);function f(g){g.classList.contains("given")||(u.forEach(v=>v.classList.remove("picked")),g.classList.add("picked"),h=g,Lt.pick())}function d(g){var m;if(!h){i.say("First tap a parcel 🎁","soft");return}if(a[g]>=2){Lt.gentle(),i.mistake("qurbani-fair"),i.say("Let's share fairly — give some to the others too!","soft");return}a[g]++,i.clear(),h.classList.remove("picked"),h.classList.add("given"),h=null,Lt.pop(),l[g].querySelector(".cnt").textContent=a[g],l[g].classList.add("bump"),setTimeout(()=>l[g].classList.remove("bump"),350);const v=a.family+a.friends+a.need;i.setCounter(`Shared ${v} / 6`),v===6&&(i.say("Wonderful sharing! Qurbani meat reaches families in need all over the world.","good"),setTimeout(()=>e({ok:!0}),1100/(((m=i.speed)==null?void 0:m.call(i))||1)))}return{kind:"qurbani",promise:n,targets:()=>{const g={counts:{...a}};u.forEach((v,m)=>{v.classList.contains("given")||(g["parcel"+m]=on(v))});for(const v of r)g["door-"+v.id]=on(l[v.id]);return g},destroy(){}}}function Z_(i,t,e,n){i.save(),i.fillStyle="#fff2a8",i.shadowColor="rgba(255,242,168,0.6)",i.shadowBlur=16,i.beginPath(),i.arc(t,e,n,Math.PI*.35,Math.PI*1.65,!1),i.arc(t+n*.45,e-n*.1,n*.85,Math.PI*1.55,Math.PI*.45,!0),i.closePath(),i.fill(),i.restore()}function Ah(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const K_={talbiyah:"Ihram & Talbiyah",tawaf:"Tawaf — 7 circuits",sai:"Saʿi — 7 laps",trim:"Cut the hair",tent:"Find your tent in Mina",arafah:"Du'a at Arafah",pebbles:"Collect pebbles","jamarat-aqabah":"Stone Jamrat al-ʿAqabah","jamarat-tashreeq":"Stone the three Jamarat",qurbani:"Share the Qurbani"};function Q_(i,t,e={}){switch(i){case"talbiyah":return V_(t);case"tawaf":{const n=new W_(t,e.station==="wada"?{doneText:"Farewell Tawaf complete. May Allah accept it!"}:e.station==="ifadah"?{doneText:"Tawaf al-Ifāḍah complete! Next: Saʿi."}:{});return n.kind="tawaf",n}case"sai":{const n=new q_(t,{short:e.station==="ifadah"});return n.kind="sai",n}case"trim":{const n=new $_(t,{eid:e.station==="shave"});return n.kind="trim",n}case"tent":return X_(t);case"arafah":return j_(t);case"pebbles":{const n=new Y_(t);return n.kind="pebbles",n}case"jamarat-aqabah":{const n=new Eh(t,{mode:"aqabah"});return n.kind=i,n}case"jamarat-tashreeq":{const n=new Eh(t,{mode:"tashreeq"});return n.kind=i,n}case"qurbani":return J_(t);default:throw new Error("unknown activity "+i)}}const ty={miqat:'put on ihram and said the Talbiyah: "Labbayk Allāhumma labbayk!"',tawaf:"walked 7 circuits around the Kaaba, anticlockwise.",sai:"walked 7 laps from Safa to Marwah, remembering Hajar.",trim1:"trimmed a little hair — ʿUmrah complete!",mina8:"found the group's tent in Mina and prayed each prayer on time.",arafah:"stood at Arafah making du'a until sunset.",muzdalifah:"slept under the stars and collected 7 small pebbles.",aqabah:'threw 7 pebbles at Jamrat al-ʿAqabah — "Allāhu Akbar!"',qurbani:"shared Qurbani parcels with family, friends and people in need.",shave:"shaved or trimmed their hair — most ihram rules are now lifted.",ifadah:"did Tawaf al-Ifāḍah and Saʿi. Eid Mubarak!",tashreeq:"stoned the small, middle and big Jamarat, 7 pebbles each.",wada:"did the Farewell Tawaf."},os="'Baloo 2', 'Comic Sans MS', system-ui, sans-serif",zs="'Nunito', 'Segoe UI', system-ui, sans-serif";function Hs(i,t,e,n,s){i.save(),i.translate(t,e),i.fillStyle=s;for(const r of[0,Math.PI/4])i.save(),i.rotate(r),i.fillRect(-n*.7,-n*.7,n*1.4,n*1.4),i.restore();i.restore()}function ey(i,t,e,n,s=22,r=.07){i.beginPath();for(let a=0;a<s;a++){const o=a/s*Math.PI*2,l=(a+.5)/s*Math.PI*2,c=(a+1)/s*Math.PI*2,u=n*(1-r),h=n*(1+r*1.9);a||i.moveTo(t+Math.cos(o)*u,e+Math.sin(o)*u),i.quadraticCurveTo(t+Math.cos(l)*h,e+Math.sin(l)*h,t+Math.cos(c)*u,e+Math.sin(c)*u)}i.closePath()}function Ch(i,t,e,n,s,r){const a=t.split(" ");let o="";const l=[];for(const c of a){const u=o?o+" "+c:c;i.measureText(u).width>s&&o?(l.push(o),o=c):o=u}return l.push(o),l.forEach((c,u)=>i.fillText(c,e,n+u*r)),l.length}function ny(i,t,e,n,s,r,a=0){const o=Gn(s.id);i.save(),i.translate(t,e),i.rotate(a),i.shadowColor="rgba(43,36,64,0.18)",i.shadowBlur=10,i.shadowOffsetY=4,ey(i,0,0,n),i.fillStyle=o.color,i.fill(),i.shadowColor="transparent",i.beginPath(),i.arc(0,0,n*.8,0,Math.PI*2),i.fillStyle=o.soft,i.fill(),i.beginPath(),i.arc(0,0,n*.72,0,Math.PI*2),i.setLineDash([5,5]),i.lineWidth=2.5,i.strokeStyle=o.color,i.stroke(),i.setLineDash([]),r&&i.drawImage(r,-n*.72,-n*.72,n*1.44,n*1.44),i.beginPath(),i.arc(n*.68,n*.68,n*.3,0,Math.PI*2),i.fillStyle="#fff",i.fill(),i.lineWidth=3,i.strokeStyle=o.color,i.stroke(),i.fillStyle=o.dark,i.font=`800 ${Math.round(n*.36)}px ${os}`,i.textAlign="center",i.textBaseline="middle",i.fillText(String(s.num),n*.68,n*.7),i.restore()}function ef(i,{date:t=new Date,thumbs:e=null}={}){const r=document.createElement("canvas");r.width=1600,r.height=1130;const a=r.getContext("2d"),o=i.color||"#3fae49",l=a.createLinearGradient(0,0,0,1130);l.addColorStop(0,"#fffaf1"),l.addColorStop(1,"#fff1d6"),a.fillStyle=l,a.fillRect(0,0,1600,1130),a.fillStyle="#1f7a5a",a.fillRect(0,0,1600,64),a.fillRect(0,1066,1600,64),a.fillRect(0,0,64,1130),a.fillRect(1536,0,64,1130);for(let x=0;x<26;x++){const _=32+x*61.44;Hs(a,_,32,14,"#f0b429"),Hs(a,_,1098,14,"#f0b429")}for(let x=1;x<18;x++){const _=32+x*59.22222222222222;Hs(a,32,_,14,"#f0b429"),Hs(a,1568,_,14,"#f0b429")}a.strokeStyle="#d9aa3c",a.lineWidth=6,a.strokeRect(88,88,1424,954),a.strokeStyle="#ecd9a8",a.lineWidth=2,a.strokeRect(102,102,1396,926);for(const[x,_]of[[88,88],[1512,88],[88,1042],[1512,1042]])Hs(a,x,_,20,"#d9aa3c");const c=1600/2,u=190;a.fillStyle="#1b1b1f",a.fillRect(c-48,u-52,96,100),a.fillStyle="#d9aa3c",a.fillRect(c-48,u-28,96,12),a.fillStyle="#cfc8bb",a.fillRect(c-56,u+48,112,8),a.fillStyle="#d9aa3c",a.fillRect(c-330,u+2,230,4),a.fillRect(c+100,u+2,230,4),a.textAlign="center",a.fillStyle="#1f7a5a",a.font=`800 82px ${os}`,a.fillText("Hajj Journey Certificate",1600/2,330),a.fillStyle="#7a5a2a",a.font=`700 32px ${zs}`,a.fillText("This happy card is proudly given to",1600/2,392);const h=e==null?void 0:e.portrait;h&&(a.save(),a.beginPath(),a.arc(250,560,120,0,Math.PI*2),a.fillStyle="#fff",a.fill(),a.lineWidth=10,a.strokeStyle=o,a.stroke(),a.clip(),a.drawImage(h,120,410,260,300),a.restore()),a.fillStyle=o,a.font=`800 112px ${os}`;let f=112;for(;a.measureText(i.name).width>1040&&f>50;)f-=6,a.font=`800 ${f}px ${os}`;a.fillText(i.name,1600/2+(h?60:0),500),a.fillStyle="#e0b44a",a.fillRect(1600/2-300+(h?60:0),526,600,5),a.fillStyle="#2b2440",a.font=`700 31px ${zs}`,Ch(a,`for walking all ${be.length} stations of Hajj — from the Miqat and the Talbiyah, through Tawaf, Saʿi, Mina, Arafah, Muzdalifah and the Jamarat, to the Farewell Tawaf.`,1600/2+(h?60:0),560,1600-(h?760:420),40),a.font=`800 30px ${os}`,a.fillStyle="#2b8a34",a.fillText(`Good deeds: ${i.deeds}     Quiz stars: ${i.stars}`,1600/2+(h?60:0),684);const d=(e==null?void 0:e.stamps)||[],g=40,v=100,m=be.length,p=7,y=m-p;return be.forEach((x,_)=>{const R=_<p,E=R?_:_-p,A=R?p:y,P=1600/2+(E-(A-1)/2)*v;ny(a,P,R?748:838,g,x,d[_],(_%2?1:-1)*.08)}),a.fillStyle="#5a3a10",a.font=`italic 700 28px ${zs}`,Ch(a,`“${fa.text}”`,1600/2,922,1180,34),a.font=`700 22px ${zs}`,a.fillStyle="#8a6a3a",a.fillText(`— ${fa.source}`,1600/2,954),a.fillStyle="#1f7a5a",a.font=`800 28px ${os}`,a.fillText("May Allah invite you to His House for a real Hajj Mabrur one day. Ameen!",1600/2,990),a.fillStyle="#8a6a3a",a.font=`700 20px ${zs}`,a.fillText(t.toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"}),1600/2,1016),r}function nf(i,t={}){const e=ef(i,t);return new Promise(n=>{e.toBlob(s=>{const r=URL.createObjectURL(s),a=document.createElement("a");a.href=r,a.download=`hajj-journey-certificate-${String(i.name).replace(/[^\w-]+/g,"_")||"pilgrim"}.png`,document.body.appendChild(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(r),4e3),n(a.download)},"image/png")})}const sf="hajjJourney.v1",qr={muted:!1,voice:!0,guide:[],game:null,lastSetup:null,stats:{journeys:0,stars:0,deeds:0,bestStars:0}};function iy(){try{const i=JSON.parse(localStorage.getItem(sf)||"null");return i?{...structuredClone(qr),...i,stats:{...qr.stats,...i.stats||{}}}:structuredClone(qr)}catch{return structuredClone(qr)}}function sy(i){try{localStorage.setItem(sf,JSON.stringify(i))}catch{}}const Yt=(i,t="")=>`<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${t}>${i}</svg>`,ry={play:Yt('<path d="M7 4.5v15l12-7.5z" fill="currentColor" stroke="none"/>'),sparkle:Yt('<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" fill="currentColor" stroke="none"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" fill="currentColor" stroke="none"/>'),die:Yt('<rect x="3" y="3" width="18" height="18" rx="4.5" fill="#fff" stroke="#2b2440" stroke-width="1.8"/><circle cx="8.3" cy="8.3" r="1.7" fill="#2b2440" stroke="none"/><circle cx="15.7" cy="8.3" r="1.7" fill="#2b2440" stroke="none"/><circle cx="12" cy="12" r="1.7" fill="#e8505b" stroke="none"/><circle cx="8.3" cy="15.7" r="1.7" fill="#2b2440" stroke="none"/><circle cx="15.7" cy="15.7" r="1.7" fill="#2b2440" stroke="none"/>'),book:Yt('<path d="M12 6.5C10.5 5 8 4.5 3.5 4.5v13c4.5 0 7 .5 8.5 2 1.5-1.5 4-2 8.5-2v-13c-4.5 0-7 .5-8.5 2z"/><path d="M12 6.5v13"/>'),map:Yt('<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>'),voice:Yt('<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H11l-4.5 4v-4h0A2.5 2.5 0 0 1 4 13.5z"/><path d="M8 8h8M8 11.5h5"/>'),voiceOff:Yt('<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H11l-4.5 4v-4h0A2.5 2.5 0 0 1 4 13.5z"/><path d="M8.5 7l7 6M15.5 7l-7 6"/>'),sound:Yt('<path d="M3.5 9.5v5H7l5 4v-13l-5 4z" fill="currentColor" stroke="none"/><path d="M15.5 9.5a3.5 3.5 0 0 1 0 5M18 7a7 7 0 0 1 0 10"/>'),soundOff:Yt('<path d="M3.5 9.5v5H7l5 4v-13l-5 4z" fill="currentColor" stroke="none"/><path d="M15.5 9.5l5 5M20.5 9.5l-5 5"/>'),menu:Yt('<path d="M4 7h16M4 12h16M4 17h16"/>'),home:Yt('<path d="M3.5 11L12 4l8.5 7"/><path d="M6 10v10h12V10"/><path d="M10 20v-5h4v5"/>'),restart:Yt('<path d="M4 12a8 8 0 1 0 2.5-5.8"/><path d="M4 4v5h5"/>'),back:Yt('<path d="M15 5l-7 7 7 7"/>'),next:Yt('<path d="M9 5l7 7-7 7"/>'),check:Yt('<path d="M5 12.5l4.5 4.5L19 7"/>'),close:Yt('<path d="M6 6l12 12M18 6L6 18"/>'),download:Yt('<path d="M12 4v11M7 10l5 5 5-5"/><path d="M4 19h16"/>'),person:Yt('<circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>'),robot:Yt('<rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 8V4M9 4h6"/><circle cx="9" cy="14" r="1.3" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.3" fill="currentColor" stroke="none"/><path d="M9.5 17.5h5"/>'),star:Yt('<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L12 16.9l-5.3 2.8 1.1-5.9-4.3-4.1 5.9-.8z" fill="currentColor" stroke="none"/>'),question:Yt('<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7"/><circle cx="12" cy="17" r="1" fill="currentColor" stroke="none"/>'),oops:Yt('<circle cx="12" cy="12" r="9"/><path d="M12 7.5v5"/><circle cx="12" cy="16.3" r="1.1" fill="currentColor" stroke="none"/>'),gift:Yt('<rect x="4" y="9" width="16" height="11" rx="2"/><path d="M4 13h16M12 9v11M12 9c-3 0-4.5-1.3-4.5-2.8S9 4 12 9c3-5 4.5-4.3 4.5-2.8S15 9 12 9z"/>'),cert:Yt('<rect x="3.5" y="4.5" width="17" height="13" rx="2"/><path d="M7 9h10M7 12h6"/><circle cx="15.5" cy="15" r="2.2" fill="#fff"/><path d="M14 17l-.5 4 2-1 2 1-.5-4"/>'),info:Yt('<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><circle cx="12" cy="8" r="1.1" fill="currentColor" stroke="none"/>'),speaker:Yt('<path d="M4 10v4h3l4 3.5v-11L7 10z" fill="currentColor" stroke="none"/><path d="M14.5 9.5a3.5 3.5 0 0 1 0 5"/>'),heart:Yt('<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" fill="currentColor" stroke="none"/>'),flag:Yt('<path d="M6 21V4"/><path d="M6 4h11l-2.5 3.5L17 11H6z" fill="currentColor" stroke="none"/>'),footsteps:Yt('<ellipse cx="8" cy="8" rx="2.6" ry="4" fill="currentColor" stroke="none"/><ellipse cx="8.4" cy="14.5" rx="2" ry="1.3" fill="currentColor" stroke="none"/><ellipse cx="16" cy="12" rx="2.6" ry="4" fill="currentColor" stroke="none"/><ellipse cx="15.6" cy="18.5" rx="2" ry="1.3" fill="currentColor" stroke="none"/>'),lock:Yt('<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>'),pause:Yt('<rect x="6" y="4.5" width="4" height="15" rx="1.2" fill="currentColor" stroke="none"/><rect x="14" y="4.5" width="4" height="15" rx="1.2" fill="currentColor" stroke="none"/>'),moon:Yt('<path d="M15.5 3.5a8.5 8.5 0 1 0 5 15.5A9 9 0 0 1 15.5 3.5z" fill="currentColor" stroke="none"/>'),sun:Yt('<circle cx="12" cy="12" r="4" fill="currentColor" stroke="none"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/>'),hand:Yt('<path d="M7 11V5.5a1.5 1.5 0 0 1 3 0V11M10 10V4a1.5 1.5 0 0 1 3 0v6M13 10V5a1.5 1.5 0 0 1 3 0v8.5M7 11.5l-1.6-1.8a1.5 1.5 0 0 0-2.3 1.9L7 17a6 6 0 0 0 9.5 3.5l1.8-2.1a4 4 0 0 0 .7-2.2V13"/>')},zt=i=>ry[i]||"";let ei=null,Ei=null,Ai=null,Rh=null,xo=null;const Mo=new Map;function ay(){if(ei)return!0;try{return ei=new vu({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),ei.setPixelRatio(1),ei.outputColorSpace=We,ei.setClearColor(0,0),Ei=new _u,Ai=new Xe(30,1,.1,100),Rh=new Lu(16777215,14268810,1.35),xo=new Du(16774108,1.8),xo.position.set(-4,8,6),Ei.add(Rh,xo,Ai),!0}catch{return!1}}function sr(i,t,{size:e=256,elev:n=.62,yaw:s=.7,zoom:r=1,lookY:a=null,fov:o=30,ground:l=!1}={}){if(Mo.has(i))return Mo.get(i);if(!ay())return null;const c=t();Ei.add(c),c.updateMatrixWorld(!0);const u=new hi().setFromObject(c),h=u.getCenter(new C),f=u.getSize(new C),d=Math.max(f.x,f.y,f.z)*.58;let g=null;l&&(g=new Te(new ci(Math.max(f.x,f.z)*.72,40),new ua({color:15124620})),g.rotation.x=-Math.PI/2,g.position.set(h.x,u.min.y+.01,h.z),Ei.add(g)),Ai.fov=o,Ai.updateProjectionMatrix();const v=d/Math.tan(Kh.degToRad(o/2))/r,m=new C(h.x,a??h.y,h.z);Ai.position.set(m.x+Math.sin(s)*Math.cos(n)*v,m.y+Math.sin(n)*v,m.z+Math.cos(s)*Math.cos(n)*v),Ai.lookAt(m),ei.setSize(e,e,!1),ei.render(Ei,Ai);const p=document.createElement("canvas");p.width=e,p.height=e,p.getContext("2d").drawImage(ei.domElement,0,0);const y={url:p.toDataURL("image/png"),canvas:p};return Ei.remove(c),g&&(Ei.remove(g),g.geometry.dispose(),g.material.dispose()),Mo.set(i,y),y}function oy(i){const t=new ue,e=(n,s=0,r=0,a=0,o=1)=>(n.position.set(s,0,r),n.rotation.y=a,n.scale.setScalar(o),t.add(n),n);switch(i){case"miqat":e(ku(),0,0,.15),e(Hu(2.6),-2.4,.6,0,.8);break;case"tawaf":case"ifadah":case"wada":{e(vl(),0,0,.35),i==="wada"&&e(zu(16744118),2.6,1.6,-.5,.75),i==="ifadah"&&(e(na(),-2.2,1.2,0,.9),e(na(),2.3,1.1,0,.9));break}case"sai":e(Fu(7),0,0,.1);break;case"trim1":case"shave":e(ta({awning:i==="shave"?9334e3:16740264}),0,0,-.2),e(ea(.7),1.9,.9);break;case"mina8":{const n=[];for(let s=-1;s<=1;s++)for(let r=-1;r<=1;r++)n.push({x:s*1.7,z:r*1.7,r:0});t.add(Ou(n));break}case"arafah":{e(_l(3.2,3.6));const n=Bu();n.position.set(0,3.35,0),t.add(n),e(ea(.9),-3.2,1.4),e(ea(.8),3.1,1);break}case"muzdalifah":{e(na(),0,0);for(let n=0;n<9;n++)e(Gu(.28+n%3*.1,9274743),Math.cos(n*.7)*(.9+n%2*.6),Math.sin(n*.7)*(.9+n%3*.4),n);break}case"aqabah":e(Ws(2));break;case"tashreeq":e(Ws(0),-2.6,.3,0,.85),e(Ws(1),0,0,0,.85),e(Ws(2),2.9,-.3,0,.85);break;case"qurbani":{e(Qr(15909995,4173385),-.35,.1),e(Qr(15313003,16740264),.35,-.1);const n=Qr(16176522,15224923);n.position.set(0,.36,0),n.rotation.y=.4,t.add(n);break}default:e(vl())}return t}const So={miqat:{yaw:.55,elev:.5},tawaf:{yaw:.6,elev:.45,zoom:1},ifadah:{yaw:-.6,elev:.5},wada:{yaw:.8,elev:.5},sai:{yaw:.9,elev:.75,zoom:1.05},mina8:{yaw:.75,elev:.7},arafah:{yaw:.6,elev:.42},muzdalifah:{yaw:.5,elev:.6,zoom:1.1},aqabah:{yaw:.45,elev:.5},tashreeq:{yaw:.4,elev:.6},qurbani:{yaw:.7,elev:.75,zoom:1.1},trim1:{yaw:.6,elev:.45},shave:{yaw:-.6,elev:.45}};function rf(i,t=256){var n;const e={zoom:1.18,ground:!0,...So[i]||{}};return(n=So[i])!=null&&n.zoom&&(e.zoom=So[i].zoom*1.18),sr("st:"+i+":"+t,()=>oy(i),{size:t,...e})}function af({kind:i="boy",color:t="#3fae49",skinTone:e=0}={},n=160){return sr(`pg:${i}:${t}:${e}:${n}`,()=>Hl({kind:i,color:t,skinTone:e}),{size:n,yaw:.35,elev:.18,zoom:1.55,lookY:1.35,fov:26})}function Vl({kind:i="boy",color:t="#3fae49",skinTone:e=0}={},n=256){return sr(`pf:${i}:${t}:${e}:${n}`,()=>Hl({kind:i,color:t,skinTone:e}),{size:n,yaw:.45,elev:.3,zoom:1,fov:26})}function Ph(i,t=null,e=160){return sr(`tile:${i}:${t}:${e}`,()=>qu(i,t),{size:e,yaw:.2,elev:.95,zoom:1.15})}function ly(i=5,t=160){return sr(`die:${i}:${t}`,()=>{const e=Vu(),[n,s]=Wu(i);e.rotation.set(n,s,0);const r=new ue;return r.add(e),r.rotation.set(.35,-.45,0),r},{size:t,yaw:0,elev:0,zoom:1})}const k=i=>document.getElementById(i);let Ht=iy();Zu(Ht.muted);Qu(Ht.voice);const vt=new H_(k("scene"));let ie=null,Fe="title",ls=0,$e=null,xl=[];const Ra=[],of=i=>(da.find(t=>t.id===i)||da[0]).hex,lf=i=>(da.find(t=>t.hex===i)||{}).dark||"#8d85a0";function Rt(i){return String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}document.querySelectorAll("[data-icon]").forEach(i=>{i.innerHTML=zt(i.dataset.icon)});const Pa=(()=>{let n="";for(let s=0;s<22;s++){const r=s/22*Math.PI*2,a=(s+.5)/22*Math.PI*2,o=(s+1)/22*Math.PI*2,l=(c,u)=>`${(50+Math.cos(c)*u).toFixed(1)} ${(50+Math.sin(c)*u).toFixed(1)}`;n+=(s?"":`M${l(r,44-3.2)} `)+`Q${l(a,44+3.2*1.9)} ${l(o,44-3.2)} `}return`<svg class="edge" viewBox="0 0 100 100" aria-hidden="true"><path class="outer" d="${n}Z"/><circle class="inner" cx="50" cy="50" r="37"/><circle class="ring" cx="50" cy="50" r="33.5"/></svg>`})();function ln(i,{cls:t="",num:e=!0,size:n=null,style:s=""}={}){const r=ui[i],a=Gn(i),o=rf(i),l=o?`<img src="${o.url}" alt="">`:`<span style="position:absolute;inset:0;display:grid;place-items:center;font-size:calc(var(--s,4rem)*0.45)">${r.icon}</span>`;return`<span class="stamp ${t}" style="--c:${a.color};--d:${a.dark};--soft:${a.soft}${n?`;--s:${n}`:""};${s}" title="${Rt(r.name)}">${Pa}${l}${e?`<span class="num">${r.num}</span>`:""}</span>`}function rr(i,{cls:t="",size:e=null,badge:n=!0}={}){const s=af({kind:i.kind,color:i.color,skinTone:i.id??0}),r=s?`<img src="${s.url}" alt="">`:"";return`<span class="avatar ${t}" style="--c:${i.color};--soft:${i.color}22${e?`;--s:${e}`:""}">${r}${n?`<span class="badge">${zt(i.human?"person":"robot")}</span>`:""}</span>`}function cy(i,t){return be.map((e,n)=>{const s=Gn(e.id),r=i.done.includes(e.id),a=e.id===t;return`${n?`<span class="seg ${r||a?"done":""}"></span>`:""}<span class="dot ${r?"done":""} ${a?"now":""}" style="--c:${r||a?s.color:"var(--line-strong)"}" title="${Rt(e.name)}"></span>`}).join("")}function Wl(i=70){if(Ju())return;const t=k("confetti"),e=["#f0b429","#3fae49","#3fa6e0","#ff6fa8","#8e6cf0","#ff8a3c","#1fb3a3"];for(let n=0;n<i;n++){const s=document.createElement("i");s.style.left=Math.random()*100+"%",s.style.background=e[n%e.length],s.style.animationDelay=Math.random()*.9+"s",s.style.animationDuration=2.6+Math.random()*1.4+"s",s.style.transform=`rotate(${Math.random()*360}deg)`,t.appendChild(s),setTimeout(()=>s.remove(),4500)}}const cf=["title","setup","intro","station","activity","learned","space","quiz","guide","finish","end","menu","about"];let fi="title";const ga=[];function cn(i){fi=i,vt.lowPower=!["title"].includes(i);for(const t of cf)k(`screen-${t}`).classList.toggle("hidden",t!==i)}function zi(){fi=null,vt.lowPower=!1;for(const i of cf)k(`screen-${i}`).classList.add("hidden")}function ql(i){ga.push(fi),cn(i)}function va(){const i=ga.pop();i?cn(i):zi()}const _a=i=>new Promise(t=>{i.onclick=()=>{i.onclick=null,t()}});function As(){k("muteBtn").innerHTML=zt(Ht.muted?"soundOff":"sound"),k("muteBtn").classList.toggle("off",Ht.muted),k("voiceBtn").innerHTML=zt(Ht.voice?"voice":"voiceOff"),k("voiceBtn").classList.toggle("off",!Ht.voice),k("voiceBtn").title=Ht.voice?"Read aloud: on":"Read aloud: off",k("mapBtn").classList.toggle("on",vt.mode==="overview")}As();k("muteBtn").onclick=()=>{Ht.muted=!Ht.muted,Zu(Ht.muted),Pn(),As()};k("voiceBtn").onclick=()=>{Ht.voice=!Ht.voice,Qu(Ht.voice),Pn(),As(),Ht.voice&&Ce("Read aloud is on!")};k("mapBtn").onclick=()=>{vt.setMode(vt.mode==="overview"?"follow":"overview"),As()};k("guideBtn").onclick=()=>lr();k("menuBtn").onclick=()=>{fi!=="menu"&&ya()};document.addEventListener("pointerdown",()=>B_(),!0);document.addEventListener("click",i=>{i.target.closest("button")&&Lt.click()},!0);function Pn(){Ht.game=ie&&!ie.over?JSON.parse(JSON.stringify(ie)):null,sy(Ht)}function ar(i,t=2200){const e=document.createElement("div");e.className="toast",e.innerHTML=i,k("toasts").appendChild(e),setTimeout(()=>e.remove(),t/Math.max(1,vt.speed*.5))}function hy(i){const t=document.createElement("div");t.className="popup",t.textContent=i,k("popups").appendChild(t),setTimeout(()=>t.remove(),1500)}function uy(i){const t=document.createElement("div");t.className="popup die",t.textContent=i;const e=vt.dieScreen();e&&Number.isFinite(e.x)&&(t.style.left=`${e.x-24}px`,t.style.top=`${e.y-70}px`,t.style.right="auto",t.style.bottom="auto"),k("popups").appendChild(t),setTimeout(()=>t.remove(),1700)}function ya(){const i=[{id:"resume",ico:"play",label:"Keep playing",c:"var(--green)",d:"var(--green-dark)",soft:"var(--green-soft)",wide:!0},{id:"map",ico:"map",label:vt.mode==="overview"?"Follow me":"Whole map",c:"var(--sky)",d:"var(--sky-dark)",soft:"var(--sky-soft)"},{id:"guide",ico:"book",label:"Hajj Guide",c:"var(--gold)",d:"var(--gold-dark)",soft:"var(--gold-soft)"},{id:"voice",ico:Ht.voice?"voice":"voiceOff",label:Ht.voice?"Read aloud: on":"Read aloud: off",c:"var(--violet)",d:"var(--violet-dark)",soft:"#ece6fc",off:!Ht.voice},{id:"sound",ico:Ht.muted?"soundOff":"sound",label:Ht.muted?"Sound: off":"Sound: on",c:"var(--teal)",d:"var(--teal-dark)",soft:"#dff7f3",off:Ht.muted},{id:"home",ico:"home",label:"Save & go home",c:"var(--orange)",d:"var(--orange-dark)",soft:"var(--orange-soft)"},{id:"restart",ico:"restart",label:"New journey",c:"var(--coral)",d:"var(--coral-dark)",soft:"#fde0e2"}];k("menuTiles").innerHTML=i.map((t,e)=>`<button class="tile ${t.wide?"wide":""} ${t.off?"off":""}" data-id="${t.id}" style="--c:${t.c};--d:${t.d};--soft:${t.soft};--i:${e}"><span class="ico">${zt(t.ico)}</span>${t.label}</button>`).join(""),k("menuTiles").querySelectorAll(".tile").forEach(t=>{t.onclick=()=>{const e=t.dataset.id;e==="resume"?va():e==="map"?(vt.setMode(vt.mode==="overview"?"follow":"overview"),As(),va()):e==="guide"?lr():e==="voice"?(k("voiceBtn").onclick(),ya()):e==="sound"?(k("muteBtn").onclick(),ya()):e==="home"?(ga.length=0,Pn(),or()):e==="restart"&&(ga.length=0,Ht.game=null,ie=null,Pn(),$l())}}),fi!=="menu"&&ql("menu")}const fy=[{kind:"girl",color:"#3fae49",skinTone:0},{kind:"man",color:"#3fa6e0",skinTone:1},{kind:"woman",color:"#ff9a3c",skinTone:2},{kind:"boy",color:"#8e6cf0",skinTone:3}];let Lh=!1;function dy(){Lh||(Lh=!0,k("titleStrip").innerHTML=be.map((i,t)=>ln(i.id,{style:`--i:${t}`})).join(""),k("titlePilgrims").innerHTML=fy.map((i,t)=>{const e=Vl(i);return e?`<img src="${e.url}" alt="" style="--i:${t}">`:""}).join(""))}function or(){var e;ls++,Rn=null,(e=$e==null?void 0:$e.destroy)==null||e.call($e),$e=null,Fe="title",ie=null,Fi(),k("hud").classList.add("hidden"),k("mapBtn").classList.add("hidden"),k("menuBtn").classList.add("hidden"),k("botBanner").classList.add("hidden"),vt.showDie(!1),vt.setActive(null),vt.setMode("title"),vt.setSky("morning"),vt.players&&vt.setPlayers([]),dy();const i=Ht.stats,t=[i.journeys&&["var(--gold)","cert",i.journeys,`journey${i.journeys===1?"":"s"} complete`],i.stars&&["var(--sky)","star",i.stars,`quiz star${i.stars===1?"":"s"}`],i.deeds&&["var(--green)","heart",i.deeds,`good deed${i.deeds===1?"":"s"}`],Ht.guide.length&&["#8e6cf0","book",`${Ht.guide.length}/${be.length}`,"stickers"]].filter(Boolean);k("titleRecord").classList.toggle("hidden",!t.length),k("titleRecord").innerHTML=t.map(([n,s,r,a],o)=>`<span class="chip" style="--accent:${n};--i:${o}">${zt(s)}<b>${r}</b> ${a}</span>`).join(""),k("continueBtn").classList.toggle("hidden",!Ht.game),cn("title")}k("newBtn").onclick=()=>$l();k("continueBtn").onclick=()=>my();k("titleGuide").onclick=()=>lr();k("titleAbout").onclick=()=>{Sy(),ql("about")};k("aboutClose").onclick=()=>va();const Ml=["Amina","Bilal","Sara","Idris"];let vn=Ht.lastSetup||{count:2,seats:[{name:"Amina",kind:"girl",color:"green",human:!0},{name:Li[0],kind:"woman",color:"blue",human:!1},{name:Li[1],kind:"man",color:"orange",human:!1},{name:Li[2],kind:"boy",color:"purple",human:!1}]};function $l(){Fe="setup",vt.setMode("title"),qs(),cn("setup")}function qs(){k("countRow").innerHTML="";for(let t=1;t<=4;t++){const e=document.createElement("button");e.innerHTML=`<span class="dots">${"<i></i>".repeat(t)}</span>${t===1?"1 pilgrim":`${t} pilgrims`}`,e.dataset.n=t,e.classList.toggle("on",vn.count===t),e.onclick=()=>{vn.count=t,qs()},k("countRow").appendChild(e)}const i=k("seats");i.innerHTML="",vn.seats.slice(0,vn.count).forEach((t,e)=>{const n=of(t.color),s=document.createElement("div");s.className="seat",s.style.cssText=`--c:${n};--d:${lf(n)};--soft:${n}22;--i:${e}`,s.innerHTML=`
      <span class="portrait">${rr({kind:t.kind,color:n,id:e,human:t.human},{size:"4.4rem"})}</span>
      <input maxlength="18" value="${Rt(t.name)}" aria-label="Name for pilgrim ${e+1}" />
      <div class="switch" role="group" aria-label="Person or computer">
        <button class="${t.human?"on":""}" data-h="1">${zt("person")}Person</button>
        <button class="${t.human?"":"on"}" data-h="0">${zt("robot")}Computer</button>
      </div>
      <div class="kinds">${C_.map(r=>{const a=af({kind:r.id,color:n,skinTone:e});return`<button class="kind-btn ${t.kind===r.id?"on":""}" data-k="${r.id}">${a?`<img src="${a.url}" alt="">`:""}${r.label}</button>`}).join("")}</div>
      <div class="colors">${da.map(r=>`<button class="swatch ${t.color===r.id?"on":""}" data-c="${r.id}" style="background:${r.hex}" aria-label="${r.id}"></button>`).join("")}</div>`,s.querySelector("input").oninput=r=>{t.name=r.target.value},s.querySelectorAll(".switch button").forEach(r=>{r.onclick=()=>{const a=r.dataset.h==="1";if(a!==t.human){if(!a&&vn.seats.slice(0,vn.count).filter(o=>o.human).length===1){ar("At least one person needs to play!");return}t.human=a,!t.human&&(Ml.includes(t.name)||!t.name.trim())?t.name=Li[e%Li.length]:t.human&&Li.includes(t.name)&&(t.name=Ml[e]),qs()}}}),s.querySelectorAll(".kind-btn").forEach(r=>{r.onclick=()=>{t.kind=r.dataset.k,qs()}}),s.querySelectorAll(".swatch").forEach(r=>{r.onclick=()=>{const a=vn.seats.slice(0,vn.count).find(o=>o!==t&&o.color===r.dataset.c);a&&(a.color=t.color),t.color=r.dataset.c,qs()}}),i.appendChild(s)})}k("setupBack").onclick=()=>or();k("setupGo").onclick=()=>{const i=vn.seats.slice(0,vn.count).map((t,e)=>({...t,name:(t.name||"").trim()||(t.human?Ml[e]:Li[e]),color:of(t.color)}));i.some(t=>t.human)||(i[0].human=!0),Ht.lastSetup=vn,uf(i)};k("introVerse").textContent=Ms.text;k("introVerseSrc").textContent="— "+Ms.source;k("introSpeak").onclick=()=>Ce(`${Ms.text} ${hf.map(i=>i.text).join(" ")}`);const hf=[{title:"Roll & walk",text:"Roll the die and hop along the road.",c:"var(--sky)",d:"var(--sky-dark)",soft:"var(--sky-soft)",pic:()=>{const i=ly(5);return i?`<img src="${i.url}" alt="">`:""}},{title:"Gold = station",text:"Stop at every station, in order, and do its activity.",c:"var(--gold)",d:"var(--gold-dark)",soft:"var(--gold-soft)",pic:()=>{const i=Ph("station",1);return(i?`<img class="sm" src="${i.url}" alt="">`:"")+ln("tawaf",{num:!1,size:"3.4rem"})}},{title:"Deeds & quiz",text:"Green = good deed, blue = quiz, orange = oops!",c:"var(--green)",d:"var(--green-dark)",soft:"var(--green-soft)",pic:()=>["g","q","o"].map(i=>{const t=Ph(i);return t?`<img class="sm" src="${t.url}" alt="">`:""}).join("")},{title:"Everyone wins",text:"Finish all 13 stations and earn your certificate.",c:"var(--pink)",d:"var(--pink-dark)",soft:"#ffe3ee",pic:()=>`<span class="stamp" style="--s:3.6rem;--c:var(--pink);--d:var(--pink-dark);--soft:#fff">${Pa}<span style="position:absolute;inset:0;display:grid;place-items:center;color:var(--pink-dark)"><span style="width:55%;height:55%">${zt("cert")}</span></span></span>`}];let Ih=!1;function py(){Ih||(Ih=!0,k("howto").innerHTML=hf.map((i,t)=>`<div class="step" style="--c:${i.c};--d:${i.d};--soft:${i.soft};--i:${t}"><span class="n">${t+1}</span><div class="pic">${i.pic()}</div><b>${i.title}</b><p>${i.text}</p></div>`).join(""))}async function uf(i){ie=N_(i),Ra.length=0,ff(),Fe="intro",py(),cn("intro"),Ce(`${Ms.text}.`),await _a(k("introGo")),Fi(),zi(),Pn(),pf()}function my(){Ht.game&&(ie=Ht.game,ff(),zi(),ar(`Welcome back! ${Rt(ie.players[ie.turn].name)}'s turn.`),pf())}function ff(){k("hud").classList.remove("hidden"),k("turnPanel").classList.remove("hidden"),k("mapBtn").classList.remove("hidden"),k("menuBtn").classList.remove("hidden"),vt.setPlayers(ie.players),vt.showDie(!0);const i=ie.players[ie.turn];vt.setMode("follow"),vt.focusOn(i.pos),vt.snapCamera(),Vn(),requestAnimationFrame(df)}function df(){const i=k("turnPanel").getBoundingClientRect();vt.bottomPad=i.height?innerHeight-i.top:90}window.addEventListener("resize",()=>requestAnimationFrame(df));function Vn(){var n;if(!ie)return;const i=ie.players[ie.turn],t=F_(i.pos),e=(n=Wt[Aa(i,i.pos)])==null?void 0:n.station;k("dayText").textContent=t.day,k("placeText").textContent=t.place,k("dayStamp").innerHTML=e?ln(e,{num:!1,size:"2.4rem"}):"",k("playersBar").innerHTML=ie.players.map(s=>`
    <div class="pchip ${s===i?"active":""} ${s.finished?"fin":""}" style="--c:${s.color}">
      ${rr(s,{size:"1.9rem"})}
      <div class="meta"><span class="nm">${Rt(s.name)}</span><span class="bar"><i style="width:${s.done.length/be.length*100}%"></i></span></div>
      ${s.deeds+s.stars?`<span class="stars">${zt("star")}${s.deeds+s.stars}</span>`:""}
    </div>`).join(""),vt.setNextStation(e||null)}function ai(i,t,e,{stamp:n=null}={}){const s=k("botBanner");return s.style.setProperty("--c",i.color),s.innerHTML=`${n?ln(n,{num:!1,size:"2.2rem"}):rr(i,{size:"2.2rem"})}<div class="txt">${t}</div>`,s.classList.remove("hidden"),s.style.animation="none",s.offsetWidth,s.style.animation="",vt.wait(e).then(()=>{s.classList.add("hidden")})}async function pf(){const i=++ls;for(;ie&&i===ls;){const t=ie.players[ie.turn];if(t.finished){if(!wh(ie)){await bo();return}continue}gy(t),Pn();const e=Wt[t.pos];if(e.station&&!t.done.includes(e.station))await Xl(t);else if(t.pos===ma)await jl(t);else if(t.skip>0)t.skip--,Fe="skip",k("turnSub").textContent="",t.human?ar(`${Rt(t.name)} is waiting at the meeting point — misses this turn.`):await ai(t,`<b>${Rt(t.name)}</b> waits at the meeting point<small>Misses this turn</small>`,1.6),await vt.wait(t.human?1.6:.2);else{const n=await vy(t);if(i!==ls||(await Sl(t,n),i!==ls))return;await yy(t)}if(i!==ls||!ie)return;if(Vn(),!ie.players.some(n=>n.human&&!n.finished)){for(const n of ie.players)n.finished||(n.done=be.map(s=>s.id),n.pos=ma,n.finished=!0);vt.layoutTokens(),await bo();return}if(!wh(ie)){await bo();return}}}function gy(i){var s;Fe="turn",vt.setActive(i.id),vt.setMode(vt.mode==="overview"?"overview":"follow"),vt.focusOn(i.pos),vt.setSky(Yu(i.pos)),Vn();const t=ie.players.filter(r=>r.human&&!r.finished).length,e=(s=Wt[Aa(i,i.pos)])==null?void 0:s.station,n=i.human&&t>1;k("turnAvatar").innerHTML=rr(i,{size:"2.4rem"}),k("turnBanner").style.setProperty("--c",i.color),k("turnBanner").style.setProperty("--d",lf(i.color)),k("turnBanner").classList.toggle("pass",n),k("turnName").textContent=n?`Pass to ${i.name}`:i.human?`${i.name}'s turn`:`${i.name} is playing`,k("turnSub").innerHTML=e?`Next: ${ln(e,{num:!1,size:"1.3rem"})} ${Rt(ui[e].name)}`:`${zt("home")} Almost home!`}let Rn=null;function vy(i){Fe="roll";const t=k("rollBtn");return t.classList.remove("hidden","wait","shaking"),t.querySelector(".lbl").textContent=i.human?"Roll":"Rolling…",i.human||t.classList.add("wait"),new Promise(e=>{const n=async()=>{Rn=null,t.classList.add("wait","shaking"),t.querySelector(".lbl").textContent="…",Fe="rolling";const s=xl.length?xl.shift():1+Math.floor(Math.random()*6);await vt.rollDie(s),uy(s),await vt.wait(.35),e(s)};i.human?Rn=n:vt.wait(.7).then(n)})}k("rollBtn").onclick=()=>Rn==null?void 0:Rn();k("scene").addEventListener("click",i=>{if(!Rn)return;const t=vt.dieScreen();Math.hypot(i.clientX-t.x,i.clientY-t.y)<70&&Rn()});document.addEventListener("keydown",i=>{(i.key===" "||i.key==="Enter")&&Rn&&!i.target.closest("input")&&(i.preventDefault(),Rn())});async function Sl(i,t){Fe="moving";const e=Xu(i,t),n=e<i.pos+t,s=[];for(let r=i.pos+1;r<=e;r++)s.push(r);if(s.length){vt.showPath(s,i.color);for(const r of s)i.pos=r,await vt.hopToken(i.id,[r],{last:r===e});vt.showPath([])}vt.focusOn(i.pos),vt.setSky(Yu(i.pos)),Vn(),n&&Wt[e].station&&ar("Stop! Every pilgrim stops at the station.",1600)}async function _y(i,t){const e=D_(i,t);for(let n=i.pos-1;n>=e;n--)i.pos=n,await vt.hopToken(i.id,[n],{last:n===e});vt.focusOn(i.pos),Vn()}async function yy(i){const t=Wt[i.pos];if(t.station&&!i.done.includes(t.station))return Xl(i);if(t.type==="finish")return jl(i);if(t.type==="g"){const n=vh[Math.floor(Math.random()*vh.length)];return i.deeds++,Lt.good(),vt.burst(i.id,6211930),i.human?await Uh(i,{icon:n.icon,ribbon:"Good deed!",ribbonIcon:"star",cls:"",text:n.text,tip:"",effect:`+1 good deed · move ahead ${n.move}`}):await ai(i,`<b>${Rt(i.name)}</b>: ${Rt(n.text)}<small>${zt("star")} Good deed · moves ahead ${n.move}</small>`,2.2),await Sl(i,n.move),Dh(i)}if(t.type==="o"){const n=_h[Math.floor(Math.random()*_h.length)];Lt.oops(),i.human?await Uh(i,{icon:n.icon,ribbon:"Oops!",ribbonIcon:"oops",cls:"orange",text:n.text,tip:n.tip,effect:n.skip?"Miss your next turn":`Go back ${n.back}`,oops:!0}):await ai(i,`<b>${Rt(i.name)}</b>: ${Rt(n.text)}<small>${n.skip?"Misses the next turn":`Goes back ${n.back}`}</small>`,2.2),n.skip?i.skip+=n.skip:await _y(i,n.back);return}if(t.type==="q"){const{ok:n,star:s}=await My(i);return n?(s&&i.stars++,vt.burst(i.id,5223660),await Sl(i,1),Dh(i)):void 0}const e=["Say “SubhanAllah”","Say “Alhamdulillah”","Say “Allāhu Akbar”","Say “Labbayk Allāhumma labbayk!”","Drink some water and rest"][i.pos%5];i.human?ar(`${Rt(i.name)}: ${e}`,1800):await ai(i,`<b>${Rt(i.name)}</b> rests<small>${Rt(e)}</small>`,1.1)}async function Dh(i){const t=Wt[i.pos];if(t.station&&!i.done.includes(t.station))return Xl(i);if(t.type==="finish")return jl(i)}function Uh(i,{icon:t,ribbon:e,ribbonIcon:n,cls:s,text:r,tip:a,effect:o,oops:l}){return Fe="card",k("spCard").classList.toggle("oops",!!l),k("spIcon").textContent=t,k("spRibbon").innerHTML=`${zt(n||"star")}${e}`,k("spRibbon").className="ribbon "+(s||""),k("spText").textContent=r,k("spTip").textContent=a||"",k("spEffect").innerHTML=`${zt(l?"back":"footsteps")}${o}`,k("spEffect").classList.toggle("oops",!!l),cn("space"),Ce(r),new Promise(c=>{const u=()=>{k("spGo").onclick=null,zi(),c()};k("spGo").onclick=u})}function xy(i){return yh[k_(i,yh)]}let aa=null;async function My(i){Fe="quiz";const t=xy(i);if(aa={q:t,answer:t.answer},!i.human){const n=Math.random()<.75?t.answer:(t.answer+1)%t.options.length,s=n===t.answer;return await ai(i,`<b>${Rt(i.name)}</b> gets a quiz: ${Rt(t.q)}<small>Thinking…</small>`,1.4),s?Lt.right():Lt.gentle(),await ai(i,`<b>${Rt(i.name)}</b> answers “${Rt(t.options[n])}” ${s?"— correct!":"— not quite."}<small>${Rt(t.explain)}</small>`,2.4),aa=null,{ok:s,star:s}}k("qzPlayer").innerHTML=`${zt("person")}${Rt(i.name)}'s question`,k("qzQuestion").textContent=t.q,k("qzFeedback").classList.add("hidden"),k("qzGo").classList.add("hidden");const e=k("qzOptions");return e.innerHTML="",cn("quiz"),Ce(t.q+" "+t.options.join(". Or, ")),k("qzSpeak").onclick=()=>Ce(t.q+" "+t.options.join(". Or, ")),new Promise(n=>{let s=0;const r=o=>{const l=o===t.answer;if(s++,!l&&s===1){const h=e.children[o];h.disabled=!0,h.classList.add("wrong"),k("qzFeedback").innerHTML=`${zt("heart")} <b>Not that one — have one more go!</b>`,k("qzFeedback").classList.remove("hidden"),Lt.gentle(),Ce("Not that one. Have one more go!");return}const c=l&&s===1;[...e.children].forEach((h,f)=>{h.disabled=!0,f===t.answer?h.classList.add("right"):f===o&&h.classList.add("wrong")}),k("qzFeedback").innerHTML=l?`${zt("check")} <b>${pa[Math.floor(Math.random()*pa.length)]}</b> ${Rt(t.explain)}<br><b>${c?`${zt("star")} +1 quiz star and 1 step forward!`:`${zt("footsteps")} Second try — 1 step forward!`}</b>`:`${zt("heart")} <b>Good try!</b> ${Rt(t.explain)}`,k("qzFeedback").classList.remove("hidden"),l?Lt.right():Lt.gentle(),Ce((l?"Correct! ":"Good try! ")+t.explain),k("qzGo").classList.remove("hidden");const u=()=>{k("qzGo").onclick=null,aa=null,document.removeEventListener("keydown",a),zi(),n({ok:l,star:c})};k("qzGo").onclick=u},a=o=>{if(fi!=="quiz"||o.target.closest("input"))return;const l="abc".indexOf(o.key.toLowerCase())>=0?"abc".indexOf(o.key.toLowerCase()):"123".indexOf(o.key),c=l>=0&&e.children[l];c&&!c.disabled?(o.preventDefault(),c.click()):o.key==="Enter"&&!k("qzGo").classList.contains("hidden")&&(o.preventDefault(),k("qzGo").click())};document.addEventListener("keydown",a),t.options.forEach((o,l)=>{const c=document.createElement("button");c.className="option",c.innerHTML=`<span class="key">${"ABC"[l]||l+1}</span><span>${Rt(o)}</span>`,c.dataset.i=l,c.onclick=()=>r(l),e.appendChild(c)})})}async function Xl(i){const t=Wt[i.pos].station,e=ui[t];if(!ju(i,t)){console.warn("station order violated",t);return}const n=Gn(t);if(vt.setSky(e.sky),vt.focusOn(i.pos),vt.celebrate(i.id),vt.burst(i.id,parseInt(n.color.slice(1),16)),Lt.station(),Vn(),!i.human){Fe="ai",await ai(i,`<b>${Rt(i.name)}</b> · Station ${e.num}: ${Rt(e.name)}<small>${Rt(i.name)} ${Rt(ty[t])}</small>`,2.6,{stamp:t}),i.done.push(t),Pn(),Vn();return}Fe="station";const s=k("screen-station").querySelector(".card");s.style.setProperty("--accent",n.color),s.style.setProperty("--accent-dark",n.dark),s.style.setProperty("--accent-soft",n.soft),k("stRibbon").innerHTML=`${zt("flag")}Station ${e.num} of ${be.length}`,k("stDay").innerHTML=`${e.sky==="night"?zt("moon"):zt("sun")}${Rt(e.day)}`,k("stStamp").innerHTML=ln(t,{cls:"big",size:null}),k("stTitle").textContent=e.name,k("stPlace").innerHTML=`${zt("map")}${Rt(e.place)}`,k("stPlayer").innerHTML=`${zt(i.human?"person":"robot")}${Rt(i.name)}`,k("stIntro").textContent=e.intro,k("stPath").innerHTML=cy(i,t),k("stPathLabel").textContent=`${i.done.length} of ${be.length} stations done · ${be.length-i.done.length-1} to go after this one`,k("stSpeak").onclick=()=>Ce(e.intro),cn("station"),Ce(e.intro),await _a(k("stGo")),Fi();for(let a=0;a<e.activities.length;a++)await mf(e.activities[a],e,i,a);i.done.push(t),Ht.guide.includes(t)||Ht.guide.push(t),Pn(),Vn(),Fe="learned",Lt.chime();const r=k("screen-learned").querySelector(".card");r.style.setProperty("--accent",n.color),r.style.setProperty("--accent-dark",n.dark),r.style.setProperty("--accent-soft",n.soft),k("lrStamp").innerHTML=ln(t,{cls:"big"}),k("lrTitle").textContent=`${e.num}. ${e.name}`,k("lrSub").textContent=`Sticker ${Ht.guide.length} of ${be.length} in your Hajj Guide`,k("lrFacts").innerHTML=e.facts.map(a=>`<li><span>${Rt(a)}</span></li>`).join(""),k("lrQuote").textContent=e.quote.text,k("lrSource").textContent="— "+e.quote.source,k("lrSpeak").onclick=()=>Ce(e.facts.join(" ")+" "+e.quote.text),Wl(40),cn("learned"),await _a(k("lrGo")),Fi(),zi()}function mf(i,t,e,n){var u;Fe="activity",(u=$e==null?void 0:$e.destroy)==null||u.call($e);const s=k("actStage");s.innerHTML="",k("actButtons").innerHTML="",k("actMsg").textContent="",k("actMsg").className="act-msg",k("actStory").classList.add("hidden");const r=Gn(t.id),a=k("screen-activity").querySelector(".card");a.style.setProperty("--accent",r.color),a.style.setProperty("--accent-dark",r.dark),k("actStamp").innerHTML=ln(t.id,{num:!1,size:"2.4rem"}),k("actTitle").textContent=`${K_[i]}${t.activities.length>1?` (${n+1}/${t.activities.length})`:""}`;const o=["talbiyah","tent","arafah","qurbani"].includes(i);s.classList.toggle("dom",o),cn("activity");const l={stage:s,buttons:k("actButtons"),color:e.color,male:e.kind==="boy"||e.kind==="man",speed:()=>vt.speed,setHint:h=>{k("actHint").textContent=h},setCounter:h=>{k("actCounter").textContent=h},say:(h,f="good")=>{const d=k("actMsg");d.textContent=h,d.className="act-msg "+f,d.offsetWidth,d.classList.add("bump"),f==="soft"&&Ce(h)},clear:()=>{k("actMsg").textContent="",k("actMsg").className="act-msg"},story:h=>{const f=k("actStory");f.textContent=h,f.classList.remove("hidden"),f.style.animation="none",f.offsetWidth,f.style.animation="",Ce(h)},mistake:h=>{Ra.push({tag:h,station:t.id,player:e.name})}},c=Q_(i,l,{station:t.id});return $e=c,c.promise.then(h=>{var f;return(f=c.destroy)==null||f.call(c),$e=null,Fi(),hy(pa[Math.floor(Math.random()*pa.length)]),Lt.good(),h})}async function jl(i){if(i.finished=!0,ie.finishedCount++,i.finishOrder=ie.finishedCount,i.done=Array.from(new Set([...i.done])),vt.celebrate(i.id),vt.burst(i.id,15774761,36),vt.setSky("night"),Lt.win(),i.human){const e=Ht.stats;i.record=i.stars>e.bestStars&&e.journeys>0,e.journeys++,e.stars+=i.stars,e.deeds+=i.deeds,e.bestStars=Math.max(e.bestStars,i.stars)}if(Pn(),Vn(),!i.human){await ai(i,`<b>${Rt(i.name)}</b> completed the Hajj Journey!<small>MashaAllah!</small>`,2.2);return}Fe="finish",k("fnTitle").textContent=`MashaAllah, ${i.name}!`,k("fnText").textContent=`All ${be.length} stations of Hajj, ${i.deeds} good deed${i.deeds===1?"":"s"} and ${i.stars} quiz star${i.stars===1?"":"s"}. Here is your certificate!`;const t=Vl({kind:i.kind,color:i.color,skinTone:i.id});k("fnPilgrim").innerHTML=t?`<img src="${t.url}" alt="">`:"",k("fnCert").src=ef(i,{thumbs:bl(i)}).toDataURL("image/png"),k("fnDownload").onclick=()=>nf(i,{thumbs:bl(i)}),Wl(90),cn("finish"),Ce(`MashaAllah ${i.name}! You completed the Hajj Journey.`),await _a(k("fnGo")),zi()}function bl(i){var t;return{stamps:be.map(e=>{var n;return((n=rf(e.id))==null?void 0:n.canvas)||null}),portrait:((t=Vl({kind:i.kind,color:i.color,skinTone:i.id}))==null?void 0:t.canvas)||null}}async function bo(){Fe="end",ie.over=!0,vt.showDie(!1),k("turnPanel").classList.add("hidden"),k("botBanner").classList.add("hidden");const i=ie;Pn(),vt.setMode("overview"),vt.setSky("night"),As(),k("endQuote").textContent=fa.text,k("endSource").textContent="— "+fa.source,k("endList").innerHTML="",i.players.forEach((n,s)=>{const r=document.createElement("div");if(r.className="end-row",r.style.cssText=`--c:${n.color};--i:${s}`,r.innerHTML=`${rr(n,{size:"3rem"})}<span class="nm">${Rt(n.name)}<small><span>${zt("check")}${n.done.length}/${be.length}</span><span>${zt("star")}${n.deeds} deeds</span><span>${zt("question")}${n.stars} stars</span></small></span>`,n.human){const a=document.createElement("button");if(a.className="btn alt sm",a.innerHTML=`${zt("download")}Certificate`,a.onclick=()=>nf(n,{thumbs:bl(n)}),n.record){const o=document.createElement("span");o.className="record-badge",o.innerHTML=`${zt("star")}New best!`,r.appendChild(o)}r.appendChild(a)}else{const a=document.createElement("span");a.className="medal",a.innerHTML=zt("robot"),r.appendChild(a)}k("endList").appendChild(r)});const t=new Set,e=Ra.filter(n=>xh[n.tag]&&!t.has(n.tag)&&t.add(n.tag)).slice(0,4);k("endRemind").classList.toggle("hidden",!e.length),k("endRemind").innerHTML=e.length?`<h3>${zt("book")}Things to remember</h3>`+e.map((n,s)=>{const r=xh[n.tag];return`<div class="remind-row" style="--i:${s}">${ln(r.station,{num:!1})}<span>${Rt(r.text)}<small>${Rt(ui[r.station].name)} · ${Rt(n.player)}</small></span></div>`}).join(""):"",Lt.win(),Wl(80),cn("end")}k("endHome").onclick=()=>or();k("endGuide").onclick=()=>lr();let gf=null;function lr(i){const t=Ht.guide;k("guideCount").textContent=`${t.length} / ${be.length} stickers`;const e=k("guideTabs");e.innerHTML="";const n=(s,r,a,o)=>{const l=document.createElement("button");l.className="sticker"+(o?" locked":"")+(s==="about"?" welcome":""),l.dataset.id=s,l.innerHTML=`${a}<span>${r}</span>`,l.onclick=()=>Nh(s),e.appendChild(l)};n("about","Welcome",`<span class="stamp" style="--c:var(--teal);--d:var(--teal-dark);--soft:#dff7f3">${Pa}<span style="position:absolute;inset:0;display:grid;place-items:center;color:var(--teal-dark)"><span style="width:50%;height:50%">${zt("moon")}</span></span></span>`,!1),be.forEach(s=>n(s.id,s.name,ln(s.id,{cls:t.includes(s.id)?"":"locked"}),!t.includes(s.id))),Nh(i||gf||(t.length?t.at(-1):"about")),fi!=="guide"&&ql("guide")}function Nh(i){gf=i,document.querySelectorAll(".sticker").forEach(s=>s.classList.toggle("on",s.dataset.id===i));const t=k("guidePage");let e="";const n=`<div class="talb"><b>The Talbiyah</b>${ia.map(s=>`<span class="ar" lang="ar" dir="rtl">${s.ar}</span><i>${s.tr}</i> — ${s.en}<br>`).join("")}<small>${$u}</small></div>`;if(i==="about")t.innerHTML=`<div class="gp-head" style="--c:var(--teal);--d:var(--teal-dark);--soft:#dff7f3"><span class="stamp" style="--s:5rem;--c:var(--teal);--d:var(--teal-dark);--soft:#fff">${Pa}<span style="position:absolute;inset:0;display:grid;place-items:center;color:var(--teal-dark)"><span style="width:50%;height:50%">${zt("moon")}</span></span></span><div><h2>My Hajj Guide</h2><div class="gday">A sticker for every station you reach</div></div></div>
      <div class="gp-body">
      <p>Hajj is the journey to Allah's House, the Kaaba in Makkah, in the month of Dhul Hijjah. It is one of the five pillars of Islam, for every Muslim who is able to go once in their life.</p>
      <blockquote class="small-quote">${Ms.text}</blockquote><div class="source">— ${Ms.source}</div>
      <p><b>${sa.title}.</b> ${sa.text}</p>
      ${n}
      <p>Each station you reach on the board adds a sticker and a page to this book.</p></div>`,e="Hajj is the journey to Allah's House, the Kaaba in Makkah. "+sa.text;else{const s=ui[i],r=Gn(i);Ht.guide.includes(i)?(t.innerHTML=`<div class="gp-head" style="--c:${r.color};--d:${r.dark};--soft:${r.soft}">${ln(i,{size:"5rem"})}<div><h2>${s.num}. ${Rt(s.name)}</h2><div class="gday"><span>${s.sky==="night"?zt("moon"):zt("sun")} ${Rt(s.day)}</span><span>${zt("map")} ${Rt(s.place)}</span></div></div></div>
        <div class="gp-body">
        <p>${Rt(s.intro)}</p>
        ${s.id==="miqat"?n:""}
        ${s.story?`<p class="story"><b>The story:</b> ${Rt(s.story.join(" "))}</p>`:""}
        <ul class="facts" style="--accent:${r.color}">${s.facts.map(a=>`<li><span>${Rt(a)}</span></li>`).join("")}</ul>
        <blockquote class="small-quote">${Rt(s.quote.text)}</blockquote><div class="source">— ${Rt(s.quote.source)}</div>
        ${s.quote2?`<blockquote class="small-quote">${Rt(s.quote2.text)}</blockquote><div class="source">— ${Rt(s.quote2.source)}</div>`:""}</div>`,e=`${s.name}. ${s.intro} ${s.facts.join(" ")}`):(t.innerHTML=`<div class="gp-head" style="--c:var(--line-strong);--d:var(--ink-faint);--soft:var(--paper-3)">${ln(i,{cls:"locked",size:"5rem"})}<div><h2>${s.num}. ${Rt(s.name)}</h2><div class="gday">${zt("lock")} Not yet reached</div></div></div>
        <div class="gp-body"><div class="locked-msg">${zt("lock")}Reach station ${s.num} on the board to earn this sticker and unlock its page!</div></div>`,e=`Reach station ${s.num} to unlock this page.`)}t.scrollTop=0,k("guideSpeak").onclick=()=>Ce(e)}k("guideClose").onclick=()=>{Fi(),va()};function Sy(){k("aboutBody").innerHTML=`
    <p><b>Hajj Journey</b> is a gentle, cooperative board game for families. Children walk through the stations of Hajj in order, doing a short activity at each one that teaches what pilgrims do and why. Nobody loses — everyone completes every station and earns a certificate.</p>
    <h3>Which Hajj?</h3><p>${sa.text}</p>
    <h3>Respectful by design</h3>
    <ul>
      <li>No prophets, companions, angels or Shaytan are ever shown — their stories are told in words only.</li>
      <li>The Kaaba is a simple model (black cube with a gold band). Pieces walk around it, never over it.</li>
      <li>The Jamarat are shown only as walls. No animals are shown — Qurbani is shown as sharing wrapped parcels.</li>
      <li>Pilgrims are original cartoon characters: men and boys in white ihram, women and girls in loose clothes with hijab.</li>
    </ul>
    <h3>Sources</h3>
    <p>Verses are given as simple English meanings with their references (Quran 2:127, 2:158, 2:197, 2:198, 2:201, 2:203, 3:97, 22:27, 22:37). Hadith are well-known narrations from Sahih al-Bukhari, Sahih Muslim, and the Sunan of at-Tirmidhi, an-Nasa'i and Ibn Majah. The text is simplified for children — please explain details and differences of opinion with your local scholar or teacher.</p>
    <h3>Tips</h3>
    <ul>
      <li>The speaker button turns read-aloud on or off; the sound button turns sound effects on or off.</li>
      <li>The book button opens the Hajj Guide sticker book at any time.</li>
      <li>The game saves itself — you can close it and continue later.</li>
    </ul>`}window.game={board:vt,get save(){return Ht},get state(){return ie},get screen(){return fi},get phase(){return Fe},get activity(){return $e},get quiz(){return aa},get mistakes(){return Ra},SPACES:Wt,STATIONS:be,STATION_INDEX:bi,FINISH:ma,logic:{forwardTarget:Xu,canDoStation:ju,nextStop:Aa},setSpeed(i){vt.speed=i},forceRolls(...i){xl.push(...i)},startGame:uf,goTitle:or,goSetup:$l,openGuide:lr,openMenu:ya,testActivity(i,t,e={}){const n={name:"Tester",kind:"girl",color:"#3fae49",...e};return mf(i,ui[t],n,0)},snap:()=>vt.snapCamera()};or();vt.snapCamera();
