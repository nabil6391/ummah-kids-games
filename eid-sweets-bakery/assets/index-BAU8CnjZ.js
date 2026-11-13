(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pc="170",ju=0,Qc=1,Zu=2,Lh=1,Ih=2,Vn=3,pi=0,Qe=1,Ee=2,hi=0,hs=1,tl=2,el=3,nl=4,Ju=5,Pi=100,Ku=101,Qu=102,tf=103,ef=104,nf=200,sf=201,rf=202,of=203,ya=204,Sa=205,af=206,cf=207,lf=208,hf=209,uf=210,ff=211,df=212,pf=213,mf=214,ba=0,wa=1,Ea=2,gs=3,Ta=4,Aa=5,Ra=6,Ca=7,Uh=0,gf=1,_f=2,ui=0,vf=1,xf=2,Mf=3,yf=4,Sf=5,bf=6,wf=7,Nh=300,_s=301,vs=302,Pa=303,Da=304,ao=306,Jr=1e3,Li=1001,La=1002,tn=1003,Ef=1004,dr=1005,Rn=1006,Ro=1007,Ii=1008,qn=1009,kh=1010,Fh=1011,js=1012,mc=1013,Oi=1014,Gn=1015,ir=1016,gc=1017,_c=1018,xs=1020,Oh=35902,Bh=1021,zh=1022,bn=1023,Hh=1024,Vh=1025,us=1026,Ms=1027,vc=1028,xc=1029,Gh=1030,Mc=1031,yc=1033,Gr=33776,Wr=33777,Xr=33778,$r=33779,Ia=35840,Ua=35841,Na=35842,ka=35843,Fa=36196,Oa=37492,Ba=37496,za=37808,Ha=37809,Va=37810,Ga=37811,Wa=37812,Xa=37813,$a=37814,qa=37815,Ya=37816,ja=37817,Za=37818,Ja=37819,Ka=37820,Qa=37821,qr=36492,tc=36494,ec=36495,Wh=36283,nc=36284,ic=36285,sc=36286,Tf=3200,Af=3201,Xh=0,Rf=1,ci="",Ye="srgb",Es="srgb-linear",co="linear",ue="srgb",Gi=7680,il=519,Cf=512,Pf=513,Df=514,$h=515,Lf=516,If=517,Uf=518,Nf=519,sl=35044,rl="300 es",Wn=2e3,Kr=2001;class Ts{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ol=1234567;const fs=Math.PI/180,Zs=180/Math.PI;function Hi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Ie(i,t,e){return Math.max(t,Math.min(e,i))}function Sc(i,t){return(i%t+t)%t}function kf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ff(i,t,e){return i!==t?(e-i)/(t-i):0}function $s(i,t,e){return(1-e)*i+e*t}function Of(i,t,e,n){return $s(i,t,1-Math.exp(-e*n))}function Bf(i,t=1){return t-Math.abs(Sc(i,t*2)-t)}function zf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Hf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Vf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Gf(i,t){return i+Math.random()*(t-i)}function Wf(i){return i*(.5-Math.random())}function Xf(i){i!==void 0&&(ol=i);let t=ol+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $f(i){return i*fs}function qf(i){return i*Zs}function Yf(i){return(i&i-1)===0&&i!==0}function jf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Jf(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),m=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*m,a*l);break;case"YXY":i.set(c*m,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function is(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const sr={DEG2RAD:fs,RAD2DEG:Zs,generateUUID:Hi,clamp:Ie,euclideanModulo:Sc,mapLinear:kf,inverseLerp:Ff,lerp:$s,damp:Of,pingpong:Bf,smoothstep:zf,smootherstep:Hf,randInt:Vf,randFloat:Gf,randFloatSpread:Wf,seededRandom:Xf,degToRad:$f,radToDeg:qf,isPowerOfTwo:Yf,ceilPowerOfTwo:jf,floorPowerOfTwo:Zf,setQuaternionFromProperEuler:Jf,normalize:$e,denormalize:is};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,s,r,o,a,c,l){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=s[0],p=s[3],f=s[6],S=s[1],x=s[4],v=s[7],L=s[2],T=s[5],A=s[8];return r[0]=o*_+a*S+c*L,r[3]=o*p+a*x+c*T,r[6]=o*f+a*v+c*A,r[1]=l*_+h*S+u*L,r[4]=l*p+h*x+u*T,r[7]=l*f+h*v+u*A,r[2]=d*_+m*S+g*L,r[5]=d*p+m*x+g*T,r[8]=d*f+m*v+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,m=l*r-o*c,g=e*u+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Co.makeScale(t,e)),this}rotate(t){return this.premultiply(Co.makeRotation(-t)),this}translate(t,e){return this.premultiply(Co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Co=new jt;function qh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kf(){const i=Qr("canvas");return i.style.display="block",i}const al={};function Vs(i){i in al||(al[i]=!0,console.warn(i))}function Qf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function td(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ed(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const re={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ue&&(i.r=Xn(i.r),i.g=Xn(i.g),i.b=Xn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ue&&(i.r=ds(i.r),i.g=ds(i.g),i.b=ds(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ci?co:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const cl=[.64,.33,.3,.6,.15,.06],ll=[.2126,.7152,.0722],hl=[.3127,.329],ul=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fl=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);re.define({[Es]:{primaries:cl,whitePoint:hl,transfer:co,toXYZ:ul,fromXYZ:fl,luminanceCoefficients:ll,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:cl,whitePoint:hl,transfer:ue,toXYZ:ul,fromXYZ:fl,luminanceCoefficients:ll,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}});let Wi;class nd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Wi===void 0&&(Wi=Qr("canvas")),Wi.width=t.width,Wi.height=t.height;const n=Wi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xn(e[n]/255)*255):e[n]=Xn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let id=0;class Yh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Hi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Po(s[o].image)):r.push(Po(s[o]))}else r=Po(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Po(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sd=0;class Xe extends Ts{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=Li,s=Li,r=Rn,o=Ii,a=bn,c=qn,l=Xe.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Hi(),this.name="",this.source=new Yh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jr:t.x=t.x-Math.floor(t.x);break;case Li:t.x=t.x<0?0:1;break;case La:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jr:t.y=t.y-Math.floor(t.y);break;case Li:t.y=t.y<0?0:1;break;case La:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Nh;Xe.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,s=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],_=c[2],p=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,v=(m+1)/2,L=(f+1)/2,T=(h+d)/4,A=(u+_)/4,D=(g+p)/4;return x>v&&x>L?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=A/n):v>L?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=D/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=A/r,s=D/r),this.set(n,s,r,e),this}let S=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rd extends Ts{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Xe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Yh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends rd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class jh extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class od extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==m||h!==g){let p=1-a;const f=c*d+l*m+h*g+u*_,S=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const L=Math.sqrt(x),T=Math.atan2(L,f*S);p=Math.sin(p*T)/L,a=Math.sin(a*T)/L}const v=a*S;if(c=c*p+d*v,l=l*p+m*v,h=h*p+g*v,u=u*p+_*v,p===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*m-l*d,t[e+1]=c*g+h*d+l*u-a*m,t[e+2]=l*g+h*m+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),m=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Do.copy(this).projectOnVector(t),this.sub(Do)}reflect(t){return this.sub(Do.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Do=new R,dl=new rr;class As{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pr.copy(n.boundingBox)),pr.applyMatrix4(t.matrixWorld),this.union(pr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),mr.subVectors(this.max,Is),Xi.subVectors(t.a,Is),$i.subVectors(t.b,Is),qi.subVectors(t.c,Is),ti.subVectors($i,Xi),ei.subVectors(qi,$i),Si.subVectors(Xi,qi);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-Si.z,Si.y,ti.z,0,-ti.x,ei.z,0,-ei.x,Si.z,0,-Si.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-Si.y,Si.x,0];return!Lo(e,Xi,$i,qi,mr)||(e=[1,0,0,0,1,0,0,0,1],!Lo(e,Xi,$i,qi,mr))?!1:(gr.crossVectors(ti,ei),e=[gr.x,gr.y,gr.z],Lo(e,Xi,$i,qi,mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Fn=[new R,new R,new R,new R,new R,new R,new R,new R],xn=new R,pr=new As,Xi=new R,$i=new R,qi=new R,ti=new R,ei=new R,Si=new R,Is=new R,mr=new R,gr=new R,bi=new R;function Lo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){bi.fromArray(i,r);const a=s.x*Math.abs(bi.x)+s.y*Math.abs(bi.y)+s.z*Math.abs(bi.z),c=t.dot(bi),l=e.dot(bi),h=n.dot(bi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const ad=new As,Us=new R,Io=new R;class or{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ad.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Us.subVectors(t,this.center);const e=Us.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Us,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Io.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Us.copy(t.center).add(Io)),this.expandByPoint(Us.copy(t.center).sub(Io))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new R,Uo=new R,_r=new R,ni=new R,No=new R,vr=new R,ko=new R;class bc{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Uo.copy(t).add(e).multiplyScalar(.5),_r.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(Uo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(_r),a=ni.dot(this.direction),c=-ni.dot(_r),l=ni.lengthSq(),h=Math.abs(1-o*o);let u,d,m,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,m=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Uo).addScaledVector(_r,d),m}intersectSphere(t,e){On.subVectors(t.center,this.origin);const n=On.dot(this.direction),s=On.dot(On)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,s,r){No.subVectors(e,t),vr.subVectors(n,t),ko.crossVectors(No,vr);let o=this.direction.dot(ko),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ni.subVectors(this.origin,t);const c=a*this.direction.dot(vr.crossVectors(ni,vr));if(c<0)return null;const l=a*this.direction.dot(No.cross(ni));if(l<0||c+l>o)return null;const h=-a*ni.dot(ko);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,n,s,r,o,a,c,l,h,u,d,m,g,_,p){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,m,g,_,p)}set(t,e,n,s,r,o,a,c,l,h,u,d,m,g,_,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Yi.setFromMatrixColumn(t,0).length(),r=1/Yi.setFromMatrixColumn(t,1).length(),o=1/Yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,m=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,m=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-m,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cd,t,ld)}lookAt(t,e,n){const s=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ii.crossVectors(n,sn),ii.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ii.crossVectors(n,sn)),ii.normalize(),xr.crossVectors(sn,ii),s[0]=ii.x,s[4]=xr.x,s[8]=sn.x,s[1]=ii.y,s[5]=xr.y,s[9]=sn.y,s[2]=ii.z,s[6]=xr.z,s[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],S=n[3],x=n[7],v=n[11],L=n[15],T=s[0],A=s[4],D=s[8],w=s[12],M=s[1],P=s[5],H=s[9],O=s[13],q=s[2],J=s[6],$=s[10],tt=s[14],W=s[3],ut=s[7],Mt=s[11],At=s[15];return r[0]=o*T+a*M+c*q+l*W,r[4]=o*A+a*P+c*J+l*ut,r[8]=o*D+a*H+c*$+l*Mt,r[12]=o*w+a*O+c*tt+l*At,r[1]=h*T+u*M+d*q+m*W,r[5]=h*A+u*P+d*J+m*ut,r[9]=h*D+u*H+d*$+m*Mt,r[13]=h*w+u*O+d*tt+m*At,r[2]=g*T+_*M+p*q+f*W,r[6]=g*A+_*P+p*J+f*ut,r[10]=g*D+_*H+p*$+f*Mt,r[14]=g*w+_*O+p*tt+f*At,r[3]=S*T+x*M+v*q+L*W,r[7]=S*A+x*P+v*J+L*ut,r[11]=S*D+x*H+v*$+L*Mt,r[15]=S*w+x*O+v*tt+L*At,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],_=t[7],p=t[11],f=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*m-n*c*m)+_*(+e*c*m-e*l*d+r*o*d-s*o*m+s*l*h-r*c*h)+p*(+e*l*u-e*a*m-r*o*u+n*o*m+r*a*h-n*l*h)+f*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],_=t[13],p=t[14],f=t[15],S=u*p*l-_*d*l+_*c*m-a*p*m-u*c*f+a*d*f,x=g*d*l-h*p*l-g*c*m+o*p*m+h*c*f-o*d*f,v=h*_*l-g*u*l+g*a*m-o*_*m-h*a*f+o*u*f,L=g*u*c-h*_*c-g*a*d+o*_*d+h*a*p-o*u*p,T=e*S+n*x+s*v+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=S*A,t[1]=(_*d*r-u*p*r-_*s*m+n*p*m+u*s*f-n*d*f)*A,t[2]=(a*p*r-_*c*r+_*s*l-n*p*l-a*s*f+n*c*f)*A,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*m-n*c*m)*A,t[4]=x*A,t[5]=(h*p*r-g*d*r+g*s*m-e*p*m-h*s*f+e*d*f)*A,t[6]=(g*c*r-o*p*r-g*s*l+e*p*l+o*s*f-e*c*f)*A,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*m+e*c*m)*A,t[8]=v*A,t[9]=(g*u*r-h*_*r-g*n*m+e*_*m+h*n*f-e*u*f)*A,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*f+e*a*f)*A,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*m-e*a*m)*A,t[12]=L*A,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*p+e*u*p)*A,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*p-e*a*p)*A,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,m=r*h,g=r*u,_=o*h,p=o*u,f=a*u,S=c*l,x=c*h,v=c*u,L=n.x,T=n.y,A=n.z;return s[0]=(1-(_+f))*L,s[1]=(m+v)*L,s[2]=(g-x)*L,s[3]=0,s[4]=(m-v)*T,s[5]=(1-(d+f))*T,s[6]=(p+S)*T,s[7]=0,s[8]=(g+x)*A,s[9]=(p-S)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Yi.set(s[0],s[1],s[2]).length();const o=Yi.set(s[4],s[5],s[6]).length(),a=Yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Mn.copy(this);const l=1/r,h=1/o,u=1/a;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,e.setFromRotationMatrix(Mn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Wn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let m,g;if(a===Wn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Kr)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Wn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,m=(n+s)*h;let g,_;if(a===Wn)g=(o+r)*u,_=-2*u;else if(a===Kr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Yi=new R,Mn=new me,cd=new R(0,0,0),ld=new R(1,1,1),ii=new R,xr=new R,sn=new R,pl=new me,ml=new rr;class Yn{constructor(t=0,e=0,n=0,s=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ie(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ml.setFromEuler(this),this.setFromQuaternion(ml,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class wc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hd=0;const gl=new R,ji=new rr,Bn=new me,Mr=new R,Ns=new R,ud=new R,fd=new rr,_l=new R(1,0,0),vl=new R(0,1,0),xl=new R(0,0,1),Ml={type:"added"},dd={type:"removed"},Zi={type:"childadded",child:null},Fo={type:"childremoved",child:null};class Ue extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new R,e=new Yn,n=new rr,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new jt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(_l,t)}rotateY(t){return this.rotateOnAxis(vl,t)}rotateZ(t){return this.rotateOnAxis(xl,t)}translateOnAxis(t,e){return gl.copy(t).applyQuaternion(this.quaternion),this.position.add(gl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_l,t)}translateY(t){return this.translateOnAxis(vl,t)}translateZ(t){return this.translateOnAxis(xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Mr.copy(t):Mr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Ns,Mr,this.up):Bn.lookAt(Mr,Ns,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(Bn),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ml),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dd),Fo.child=t,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ml),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,t,ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,fd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ue.DEFAULT_UP=new R(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new R,zn=new R,Oo=new R,Hn=new R,Ji=new R,Ki=new R,yl=new R,Bo=new R,zo=new R,Ho=new R,Vo=new fe,Go=new fe,Wo=new fe;class fn{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),yn.subVectors(t,e),s.cross(yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){yn.subVectors(s,e),zn.subVectors(n,e),Oo.subVectors(t,e);const o=yn.dot(yn),a=yn.dot(zn),c=yn.dot(Oo),l=zn.dot(zn),h=zn.dot(Oo),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,m=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Hn.x),c.addScaledVector(o,Hn.y),c.addScaledVector(a,Hn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Vo.setScalar(0),Go.setScalar(0),Wo.setScalar(0),Vo.fromBufferAttribute(t,e),Go.fromBufferAttribute(t,n),Wo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Vo,r.x),o.addScaledVector(Go,r.y),o.addScaledVector(Wo,r.z),o}static isFrontFacing(t,e,n,s){return yn.subVectors(n,e),zn.subVectors(t,e),yn.cross(zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),yn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return fn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ji.subVectors(s,n),Ki.subVectors(r,n),Bo.subVectors(t,n);const c=Ji.dot(Bo),l=Ki.dot(Bo);if(c<=0&&l<=0)return e.copy(n);zo.subVectors(t,s);const h=Ji.dot(zo),u=Ki.dot(zo);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ji,o);Ho.subVectors(t,r);const m=Ji.dot(Ho),g=Ki.dot(Ho);if(g>=0&&m<=g)return e.copy(r);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ki,a);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return yl.subVectors(r,s),a=(u-h)/(u-h+(m-g)),e.copy(s).addScaledVector(yl,a);const f=1/(p+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(Ji,o).addScaledVector(Ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},yr={h:0,s:0,l:0};function Xo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Nt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=Sc(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Xo(o,r,t+1/3),this.g=Xo(o,r,t),this.b=Xo(o,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=Ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){const n=Zh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return re.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Ie(Ve.r*255,0,255))*65536+Math.round(Ie(Ve.g*255,0,255))*256+Math.round(Ie(Ve.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(Ve.copy(this),e);const n=Ve.r,s=Ve.g,r=Ve.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Ye){re.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,s=Ve.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(yr);const n=$s(si.h,yr.h,e),s=$s(si.s,yr.s,e),r=$s(si.l,yr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new Nt;Nt.NAMES=Zh;let pd=0;class Rs extends Ts{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Hi(),this.name="",this.blending=hs,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ya,this.blendDst=Sa,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ya&&(n.blendSrc=this.blendSrc),this.blendDst!==Sa&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==il&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ae extends Rs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new R,Sr=new nt;class Cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sl,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Sr.fromBufferAttribute(this,e),Sr.applyMatrix3(t),this.setXY(e,Sr.x,Sr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=is(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=is(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=is(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sl&&(t.usage=this.usage),t}}class Jh extends Cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Kh extends Cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends Cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let md=0;const cn=new me,$o=new Ue,Qi=new R,rn=new As,ks=new As,Le=new R;class De extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qh(t)?Kh:Jh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return $o.lookAt(t),$o.updateMatrix(),this.applyMatrix4($o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(rn.min,ks.min),rn.expandByPoint(Le),Le.addVectors(rn.max,ks.max),rn.expandByPoint(Le)):(rn.expandByPoint(ks.min),rn.expandByPoint(ks.max))}rn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Le.fromBufferAttribute(a,l),c&&(Qi.fromBufferAttribute(t,l),Le.add(Qi)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new R,c[D]=new R;const l=new R,h=new R,u=new R,d=new nt,m=new nt,g=new nt,_=new R,p=new R;function f(D,w,M){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,D),m.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),m.sub(d),g.sub(d);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(P),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(P),a[D].add(_),a[w].add(_),a[M].add(_),c[D].add(p),c[w].add(p),c[M].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let D=0,w=S.length;D<w;++D){const M=S[D],P=M.start,H=M.count;for(let O=P,q=P+H;O<q;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const x=new R,v=new R,L=new R,T=new R;function A(D){L.fromBufferAttribute(s,D),T.copy(L);const w=a[D];x.copy(w),x.sub(L.multiplyScalar(L.dot(w))).normalize(),v.crossVectors(T,w);const P=v.dot(c[D])<0?-1:1;o.setXYZW(D,x.x,x.y,x.z,P)}for(let D=0,w=S.length;D<w;++D){const M=S[D],P=M.start,H=M.count;for(let O=P,q=P+H;O<q;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[m++]}return new Cn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],m=t(d,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sl=new me,wi=new bc,br=new or,bl=new R,wr=new R,Er=new R,Tr=new R,qo=new R,Ar=new R,wl=new R,Rr=new R;class ie extends Ue{constructor(t=new De,e=new Ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ar.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(qo.fromBufferAttribute(u,t),o?Ar.addScaledVector(qo,h):Ar.addScaledVector(qo.sub(e),h))}e.add(Ar)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!(br.containsPoint(wi.origin)===!1&&(wi.intersectSphere(br,bl)===null||wi.origin.distanceToSquared(bl)>(t.far-t.near)**2))&&(Sl.copy(r).invert(),wi.copy(t.ray).applyMatrix4(Sl),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=o[p.materialIndex],S=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let v=S,L=x;v<L;v+=3){const T=a.getX(v),A=a.getX(v+1),D=a.getX(v+2);s=Cr(this,f,t,n,l,h,u,T,A,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const S=a.getX(p),x=a.getX(p+1),v=a.getX(p+2);s=Cr(this,o,t,n,l,h,u,S,x,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=o[p.materialIndex],S=Math.max(p.start,m.start),x=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let v=S,L=x;v<L;v+=3){const T=v,A=v+1,D=v+2;s=Cr(this,f,t,n,l,h,u,T,A,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const S=p,x=p+1,v=p+2;s=Cr(this,o,t,n,l,h,u,S,x,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function gd(i,t,e,n,s,r,o,a){let c;if(t.side===Qe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===pi,a),c===null)return null;Rr.copy(a),Rr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Rr);return l<e.near||l>e.far?null:{distance:l,point:Rr.clone(),object:i}}function Cr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,wr),i.getVertexPosition(c,Er),i.getVertexPosition(l,Tr);const h=gd(i,t,e,n,wr,Er,Tr,wl);if(h){const u=new R;fn.getBarycoord(wl,wr,Er,Tr,u),s&&(h.uv=fn.getInterpolatedAttribute(s,a,c,l,u,new nt)),r&&(h.uv1=fn.getInterpolatedAttribute(r,a,c,l,u,new nt)),o&&(h.normal=fn.getInterpolatedAttribute(o,a,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new R,materialIndex:0};fn.getNormal(wr,Er,Tr,d.normal),h.face=d,h.barycoord=u}return h}class Me extends De{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function g(_,p,f,S,x,v,L,T,A,D,w){const M=v/A,P=L/D,H=v/2,O=L/2,q=T/2,J=A+1,$=D+1;let tt=0,W=0;const ut=new R;for(let Mt=0;Mt<$;Mt++){const At=Mt*P-O;for(let Yt=0;Yt<J;Yt++){const ae=Yt*M-H;ut[_]=ae*S,ut[p]=At*x,ut[f]=q,l.push(ut.x,ut.y,ut.z),ut[_]=0,ut[p]=0,ut[f]=T>0?1:-1,h.push(ut.x,ut.y,ut.z),u.push(Yt/A),u.push(1-Mt/D),tt+=1}}for(let Mt=0;Mt<D;Mt++)for(let At=0;At<A;At++){const Yt=d+At+J*Mt,ae=d+At+J*(Mt+1),Z=d+(At+1)+J*(Mt+1),ot=d+(At+1)+J*Mt;c.push(Yt,ae,ot),c.push(ae,Z,ot),W+=6}a.addGroup(m,W,w),m+=W,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ys(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function qe(i){const t={};for(let e=0;e<i.length;e++){const n=ys(i[e]);for(const s in n)t[s]=n[s]}return t}function _d(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Qh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const vd={clone:ys,merge:qe};var xd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends Rs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xd,this.fragmentShader=Md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=_d(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class tu extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new R,El=new nt,Tl=new nt;class Ke extends tu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,El,Tl),e.subVectors(Tl,El)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ts=-90,es=1;class yd extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ke(ts,es,t,e);s.layers=this.layers,this.add(s);const r=new Ke(ts,es,t,e);r.layers=this.layers,this.add(r);const o=new Ke(ts,es,t,e);o.layers=this.layers,this.add(o);const a=new Ke(ts,es,t,e);a.layers=this.layers,this.add(a);const c=new Ke(ts,es,t,e);c.layers=this.layers,this.add(c);const l=new Ke(ts,es,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class eu extends Xe{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:_s,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sd extends Bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new eu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Me(5,5,5),r=new mi({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:hi});r.uniforms.tEquirect.value=e;const o=new ie(s,r),a=e.minFilter;return e.minFilter===Ii&&(e.minFilter=Rn),new yd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Yo=new R,bd=new R,wd=new jt;class oi{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Yo.subVectors(n,e).cross(bd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Yo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||wd.getNormalMatrix(t),s=this.coplanarPoint(Yo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new or,Pr=new R;class Ec{constructor(t=new oi,e=new oi,n=new oi,s=new oi,r=new oi,o=new oi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],m=s[8],g=s[9],_=s[10],p=s[11],f=s[12],S=s[13],x=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,p-m,v-f).normalize(),n[1].setComponents(c+r,d+l,p+m,v+f).normalize(),n[2].setComponents(c+o,d+h,p+g,v+S).normalize(),n[3].setComponents(c-o,d-h,p-g,v-S).normalize(),n[4].setComponents(c-a,d-u,p-_,v-x).normalize(),e===Wn)n[5].setComponents(c+a,d+u,p+_,v+x).normalize();else if(e===Kr)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Pr.x=s.normal.x>0?t.max.x:t.min.x,Pr.y=s.normal.y>0?t.max.y:t.min.y,Pr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ed(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){const g=u[d],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){const _=u[m];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class ye extends De{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,m=[],g=[],_=[],p=[];for(let f=0;f<h;f++){const S=f*d-o;for(let x=0;x<l;x++){const v=x*u-r;g.push(v,-S,0),_.push(0,0,1),p.push(x/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<a;S++){const x=S+l*f,v=S+l*(f+1),L=S+1+l*(f+1),T=S+1+l*f;m.push(x,v,T),m.push(v,L,T)}this.setIndex(m),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.width,t.height,t.widthSegments,t.heightSegments)}}var Td=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ad=`#ifdef USE_ALPHAHASH
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
#endif`,Rd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ld=`#ifdef USE_AOMAP
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
#endif`,Id=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ud=`#ifdef USE_BATCHING
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
#endif`,Nd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Od=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bd=`#ifdef USE_IRIDESCENCE
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
#endif`,zd=`#ifdef USE_BUMPMAP
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
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jd=`#define PI 3.141592653589793
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
} // validated`,Zd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jd=`vec3 transformedNormal = objectNormal;
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
#endif`,Kd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,np="gl_FragColor = linearToOutputTexel( gl_FragColor );",ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sp=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dp=`#ifdef USE_GRADIENTMAP
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
}`,pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_p=`uniform bool receiveShadow;
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
#endif`,vp=`#ifdef USE_ENVMAP
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
#endif`,xp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bp=`PhysicalMaterial material;
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
#endif`,wp=`struct PhysicalMaterial {
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
}`,Ep=`
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
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Up=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Np=`#if defined( USE_POINTS_UV )
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
#endif`,kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Op=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hp=`#ifdef USE_MORPHTARGETS
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
#endif`,Vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yp=`#ifdef USE_NORMALMAP
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
#endif`,jp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,e0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,h0=`float getShadowMask() {
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
}`,u0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f0=`#ifdef USE_SKINNING
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
#endif`,d0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p0=`#ifdef USE_SKINNING
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
#endif`,m0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x0=`#ifdef USE_TRANSMISSION
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
#endif`,M0=`#ifdef USE_TRANSMISSION
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
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const E0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T0=`uniform sampler2D t2D;
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`#include <common>
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
}`,L0=`#if DEPTH_PACKING == 3200
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
}`,I0=`#define DISTANCE
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
}`,U0=`#define DISTANCE
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
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,k0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`uniform float scale;
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
}`,O0=`uniform vec3 diffuse;
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
}`,B0=`#include <common>
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
}`,z0=`uniform vec3 diffuse;
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
}`,H0=`#define LAMBERT
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
}`,V0=`#define LAMBERT
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
}`,G0=`#define MATCAP
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
}`,W0=`#define MATCAP
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
}`,X0=`#define NORMAL
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
}`,$0=`#define NORMAL
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
}`,q0=`#define PHONG
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
}`,Y0=`#define PHONG
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
}`,j0=`#define STANDARD
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
}`,Z0=`#define STANDARD
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
}`,J0=`#define TOON
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
}`,K0=`#define TOON
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
}`,Q0=`uniform float size;
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
}`,tm=`uniform vec3 diffuse;
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
}`,em=`#include <common>
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
}`,nm=`uniform vec3 color;
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
}`,im=`uniform float rotation;
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
}`,sm=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:Td,alphahash_pars_fragment:Ad,alphamap_fragment:Rd,alphamap_pars_fragment:Cd,alphatest_fragment:Pd,alphatest_pars_fragment:Dd,aomap_fragment:Ld,aomap_pars_fragment:Id,batching_pars_vertex:Ud,batching_vertex:Nd,begin_vertex:kd,beginnormal_vertex:Fd,bsdfs:Od,iridescence_fragment:Bd,bumpmap_pars_fragment:zd,clipping_planes_fragment:Hd,clipping_planes_pars_fragment:Vd,clipping_planes_pars_vertex:Gd,clipping_planes_vertex:Wd,color_fragment:Xd,color_pars_fragment:$d,color_pars_vertex:qd,color_vertex:Yd,common:jd,cube_uv_reflection_fragment:Zd,defaultnormal_vertex:Jd,displacementmap_pars_vertex:Kd,displacementmap_vertex:Qd,emissivemap_fragment:tp,emissivemap_pars_fragment:ep,colorspace_fragment:np,colorspace_pars_fragment:ip,envmap_fragment:sp,envmap_common_pars_fragment:rp,envmap_pars_fragment:op,envmap_pars_vertex:ap,envmap_physical_pars_fragment:vp,envmap_vertex:cp,fog_vertex:lp,fog_pars_vertex:hp,fog_fragment:up,fog_pars_fragment:fp,gradientmap_pars_fragment:dp,lightmap_pars_fragment:pp,lights_lambert_fragment:mp,lights_lambert_pars_fragment:gp,lights_pars_begin:_p,lights_toon_fragment:xp,lights_toon_pars_fragment:Mp,lights_phong_fragment:yp,lights_phong_pars_fragment:Sp,lights_physical_fragment:bp,lights_physical_pars_fragment:wp,lights_fragment_begin:Ep,lights_fragment_maps:Tp,lights_fragment_end:Ap,logdepthbuf_fragment:Rp,logdepthbuf_pars_fragment:Cp,logdepthbuf_pars_vertex:Pp,logdepthbuf_vertex:Dp,map_fragment:Lp,map_pars_fragment:Ip,map_particle_fragment:Up,map_particle_pars_fragment:Np,metalnessmap_fragment:kp,metalnessmap_pars_fragment:Fp,morphinstance_vertex:Op,morphcolor_vertex:Bp,morphnormal_vertex:zp,morphtarget_pars_vertex:Hp,morphtarget_vertex:Vp,normal_fragment_begin:Gp,normal_fragment_maps:Wp,normal_pars_fragment:Xp,normal_pars_vertex:$p,normal_vertex:qp,normalmap_pars_fragment:Yp,clearcoat_normal_fragment_begin:jp,clearcoat_normal_fragment_maps:Zp,clearcoat_pars_fragment:Jp,iridescence_pars_fragment:Kp,opaque_fragment:Qp,packing:t0,premultiplied_alpha_fragment:e0,project_vertex:n0,dithering_fragment:i0,dithering_pars_fragment:s0,roughnessmap_fragment:r0,roughnessmap_pars_fragment:o0,shadowmap_pars_fragment:a0,shadowmap_pars_vertex:c0,shadowmap_vertex:l0,shadowmask_pars_fragment:h0,skinbase_vertex:u0,skinning_pars_vertex:f0,skinning_vertex:d0,skinnormal_vertex:p0,specularmap_fragment:m0,specularmap_pars_fragment:g0,tonemapping_fragment:_0,tonemapping_pars_fragment:v0,transmission_fragment:x0,transmission_pars_fragment:M0,uv_pars_fragment:y0,uv_pars_vertex:S0,uv_vertex:b0,worldpos_vertex:w0,background_vert:E0,background_frag:T0,backgroundCube_vert:A0,backgroundCube_frag:R0,cube_vert:C0,cube_frag:P0,depth_vert:D0,depth_frag:L0,distanceRGBA_vert:I0,distanceRGBA_frag:U0,equirect_vert:N0,equirect_frag:k0,linedashed_vert:F0,linedashed_frag:O0,meshbasic_vert:B0,meshbasic_frag:z0,meshlambert_vert:H0,meshlambert_frag:V0,meshmatcap_vert:G0,meshmatcap_frag:W0,meshnormal_vert:X0,meshnormal_frag:$0,meshphong_vert:q0,meshphong_frag:Y0,meshphysical_vert:j0,meshphysical_frag:Z0,meshtoon_vert:J0,meshtoon_frag:K0,points_vert:Q0,points_frag:tm,shadow_vert:em,shadow_frag:nm,sprite_vert:im,sprite_frag:sm},ft={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},An={basic:{uniforms:qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:qe([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:qe([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:qe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:qe([ft.points,ft.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:qe([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:qe([ft.common,ft.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:qe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:qe([ft.sprite,ft.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:qe([ft.common,ft.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:qe([ft.lights,ft.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};An.physical={uniforms:qe([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Dr={r:0,b:0,g:0},Ti=new Yn,rm=new me;function om(i,t,e,n,s,r,o){const a=new Nt(0);let c=r===!0?0:1,l,h,u=null,d=0,m=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function _(S){let x=!1;const v=g(S);v===null?f(a,c):v&&v.isColor&&(f(v,1),x=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(S,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===ao)?(h===void 0&&(h=new ie(new Me(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:ys(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ti.copy(x.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rm.makeRotationFromEuler(Ti)),h.material.toneMapped=re.getTransfer(v.colorSpace)!==ue,(u!==v||d!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,m=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ie(new ye(2,2),new mi({name:"BackgroundMaterial",uniforms:ys(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=re.getTransfer(v.colorSpace)!==ue,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,m=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function f(S,x){S.getRGB(Dr,Qh(i)),n.buffers.color.setClear(Dr.r,Dr.g,Dr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),c=x,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,f(a,c)},render:_,addToRenderList:p}}function am(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,P,H,O,q){let J=!1;const $=u(O,H,P);r!==$&&(r=$,l(r.object)),J=m(M,O,H,q),J&&g(M,O,H,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,v(M,P,H,O),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,P,H){const O=H.wireframe===!0;let q=n[M.id];q===void 0&&(q={},n[M.id]=q);let J=q[P.id];J===void 0&&(J={},q[P.id]=J);let $=J[O];return $===void 0&&($=d(c()),J[O]=$),$}function d(M){const P=[],H=[],O=[];for(let q=0;q<e;q++)P[q]=0,H[q]=0,O[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:O,object:M,attributes:{},index:null}}function m(M,P,H,O){const q=r.attributes,J=P.attributes;let $=0;const tt=H.getAttributes();for(const W in tt)if(tt[W].location>=0){const Mt=q[W];let At=J[W];if(At===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(At=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(At=M.instanceColor)),Mt===void 0||Mt.attribute!==At||At&&Mt.data!==At.data)return!0;$++}return r.attributesNum!==$||r.index!==O}function g(M,P,H,O){const q={},J=P.attributes;let $=0;const tt=H.getAttributes();for(const W in tt)if(tt[W].location>=0){let Mt=J[W];Mt===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor));const At={};At.attribute=Mt,Mt&&Mt.data&&(At.data=Mt.data),q[W]=At,$++}r.attributes=q,r.attributesNum=$,r.index=O}function _(){const M=r.newAttributes;for(let P=0,H=M.length;P<H;P++)M[P]=0}function p(M){f(M,0)}function f(M,P){const H=r.newAttributes,O=r.enabledAttributes,q=r.attributeDivisors;H[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),q[M]!==P&&(i.vertexAttribDivisor(M,P),q[M]=P)}function S(){const M=r.newAttributes,P=r.enabledAttributes;for(let H=0,O=P.length;H<O;H++)P[H]!==M[H]&&(i.disableVertexAttribArray(H),P[H]=0)}function x(M,P,H,O,q,J,$){$===!0?i.vertexAttribIPointer(M,P,H,q,J):i.vertexAttribPointer(M,P,H,O,q,J)}function v(M,P,H,O){_();const q=O.attributes,J=H.getAttributes(),$=P.defaultAttributeValues;for(const tt in J){const W=J[tt];if(W.location>=0){let ut=q[tt];if(ut===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor)),ut!==void 0){const Mt=ut.normalized,At=ut.itemSize,Yt=t.get(ut);if(Yt===void 0)continue;const ae=Yt.buffer,Z=Yt.type,ot=Yt.bytesPerElement,Ct=Z===i.INT||Z===i.UNSIGNED_INT||ut.gpuType===mc;if(ut.isInterleavedBufferAttribute){const lt=ut.data,Ot=lt.stride,Xt=ut.offset;if(lt.isInstancedInterleavedBuffer){for(let Gt=0;Gt<W.locationSize;Gt++)f(W.location+Gt,lt.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Gt=0;Gt<W.locationSize;Gt++)p(W.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Gt=0;Gt<W.locationSize;Gt++)x(W.location+Gt,At/W.locationSize,Z,Mt,Ot*ot,(Xt+At/W.locationSize*Gt)*ot,Ct)}else{if(ut.isInstancedBufferAttribute){for(let lt=0;lt<W.locationSize;lt++)f(W.location+lt,ut.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let lt=0;lt<W.locationSize;lt++)p(W.location+lt);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let lt=0;lt<W.locationSize;lt++)x(W.location+lt,At/W.locationSize,Z,Mt,At*ot,At/W.locationSize*lt*ot,Ct)}}else if($!==void 0){const Mt=$[tt];if(Mt!==void 0)switch(Mt.length){case 2:i.vertexAttrib2fv(W.location,Mt);break;case 3:i.vertexAttrib3fv(W.location,Mt);break;case 4:i.vertexAttrib4fv(W.location,Mt);break;default:i.vertexAttrib1fv(W.location,Mt)}}}}S()}function L(){D();for(const M in n){const P=n[M];for(const H in P){const O=P[H];for(const q in O)h(O[q].object),delete O[q];delete P[H]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const H in P){const O=P[H];for(const q in O)h(O[q].object),delete O[q];delete P[H]}delete n[M.id]}function A(M){for(const P in n){const H=n[P];if(H[M.id]===void 0)continue;const O=H[M.id];for(const q in O)h(O[q].object),delete O[q];delete H[M.id]}}function D(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:S}}function cm(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,n,1)}function c(l,h,u,d){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function lm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==bn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const D=A===ir&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==qn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Gn&&!D)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:L,maxSamples:T}}function hm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new oi,a=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||s;return s=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{const S=r?0:n,x=S*4;let v=f.clippingState||null;c.value=v,v=h(g,d,x,m);for(let L=0;L!==x;++L)v[L]=e[L];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const f=m+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,v=m;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(S,a),o.normal.toArray(p,v),p[v+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function um(i){let t=new WeakMap;function e(o,a){return a===Pa?o.mapping=_s:a===Da&&(o.mapping=vs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Pa||a===Da)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Sd(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class iu extends tu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const cs=4,Al=[.125,.215,.35,.446,.526,.582],Di=20,jo=new iu,Rl=new Nt;let Zo=null,Jo=0,Ko=0,Qo=!1;const Ci=(1+Math.sqrt(5))/2,ns=1/Ci,Cl=[new R(-Ci,ns,0),new R(Ci,ns,0),new R(-ns,0,Ci),new R(ns,0,Ci),new R(0,Ci,-ns),new R(0,Ci,ns),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Pl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Zo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zo,Jo,Ko),this._renderer.xr.enabled=Qo,t.scissorTest=!1,Lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:ir,format:bn,colorSpace:Es,depthBuffer:!1},s=Dl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fm(r)),this._blurMaterial=dm(r,t,e)}return s}_compileMaterial(t){const e=new ie(this._lodPlanes[0],t);this._renderer.compile(e,jo)}_sceneToCubeUV(t,e,n,s){const a=new Ke(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Rl),h.toneMapping=ui,h.autoClear=!1;const m=new Ae({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),g=new ie(new Me,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Rl),_=!0);for(let f=0;f<6;f++){const S=f%3;S===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):S===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const x=this._cubeSize;Lr(s,S*x,f>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===_s||t.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Il()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ll());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ie(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Lr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,jo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Cl[(s-r-1)%Cl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ie(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Di-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Di;p>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Di}`);const f=[];let S=0;for(let A=0;A<Di;++A){const D=A/_,w=Math.exp(-D*D/2);f.push(w),A===0?S+=w:A<p&&(S+=2*w)}for(let A=0;A<f.length;A++)f[A]=f[A]/S;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[s],L=3*v*(s>x-cs?s-x+cs:0),T=4*(this._cubeSize-v);Lr(e,L,T,3*v,2*v),c.setRenderTarget(e),c.render(u,jo)}}function fm(i){const t=[],e=[],n=[];let s=i;const r=i-cs+1+Al.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-cs?c=Al[o-i+cs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,f=1,S=new Float32Array(_*g*m),x=new Float32Array(p*g*m),v=new Float32Array(f*g*m);for(let T=0;T<m;T++){const A=T%3*2/3-1,D=T>2?0:-1,w=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];S.set(w,_*g*T),x.set(d,p*g*T);const M=[T,T,T,T,T,T];v.set(M,f*g*T)}const L=new De;L.setAttribute("position",new Cn(S,_)),L.setAttribute("uv",new Cn(x,p)),L.setAttribute("faceIndex",new Cn(v,f)),t.push(L),s>cs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Dl(i,t,e){const n=new Bi(i,t,e);return n.texture.mapping=ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function dm(i,t,e){const n=new Float32Array(Di),s=new R(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Ll(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Il(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Tc(){return`

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
	`}function pm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Pa||c===Da,h=c===_s||c===vs;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Pl(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return l&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new Pl(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function mm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Vs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function gm(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)t.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)t.update(_[p],i.ARRAY_BUFFER)}}function l(u){const d=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const S=m.array;_=m.version;for(let x=0,v=S.length;x<v;x+=3){const L=S[x+0],T=S[x+1],A=S[x+2];d.push(L,T,T,A,A,L)}}else if(g!==void 0){const S=g.array;_=g.version;for(let x=0,v=S.length/3-1;x<v;x+=3){const L=x+0,T=x+1,A=x+2;d.push(L,T,T,A,A,L)}}else return;const p=new(qh(d)?Kh:Jh)(d,1);p.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,p)}function h(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function _m(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,m){i.drawElements(n,m,r,d*o),e.update(m,n,1)}function l(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,d*o,g),e.update(m,n,g))}function h(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];e.update(p,n,1)}function u(d,m,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)l(d[f]/o,m[f],_[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,_,0,g);let f=0;for(let S=0;S<g;S++)f+=m[S]*_[S];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function vm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function xm(i,t,e){const n=new WeakMap,s=new fe;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var m=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),p===!0&&(v=3);let L=a.attributes.position.count*v,T=1;L>t.maxTextureSize&&(T=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const A=new Float32Array(L*T*4*u),D=new jh(A,L,T,u);D.type=Gn,D.needsUpdate=!0;const w=v*4;for(let P=0;P<u;P++){const H=f[P],O=S[P],q=x[P],J=L*T*4*P;for(let $=0;$<H.count;$++){const tt=$*w;g===!0&&(s.fromBufferAttribute(H,$),A[J+tt+0]=s.x,A[J+tt+1]=s.y,A[J+tt+2]=s.z,A[J+tt+3]=0),_===!0&&(s.fromBufferAttribute(O,$),A[J+tt+4]=s.x,A[J+tt+5]=s.y,A[J+tt+6]=s.z,A[J+tt+7]=0),p===!0&&(s.fromBufferAttribute(q,$),A[J+tt+8]=s.x,A[J+tt+9]=s.y,A[J+tt+10]=s.z,A[J+tt+11]=q.itemSize===4?s.w:1)}}d={count:u,texture:D,size:new nt(L,T)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Mm(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class su extends Xe{constructor(t,e,n,s,r,o,a,c,l,h=us){if(h!==us&&h!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===us&&(n=Oi),n===void 0&&h===Ms&&(n=xs),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:tn,this.minFilter=c!==void 0?c:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ru=new Xe,Ul=new su(1,1),ou=new jh,au=new od,cu=new eu,Nl=[],kl=[],Fl=new Float32Array(16),Ol=new Float32Array(9),Bl=new Float32Array(4);function Cs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Nl[s];if(r===void 0&&(r=new Float32Array(s),Nl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function lo(i,t){let e=kl[t];e===void 0&&(e=new Int32Array(t),kl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ym(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function Em(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Bl.set(n),i.uniformMatrix2fv(this.addr,!1,Bl),Pe(e,n)}}function Tm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Ol.set(n),i.uniformMatrix3fv(this.addr,!1,Ol),Pe(e,n)}}function Am(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Fl.set(n),i.uniformMatrix4fv(this.addr,!1,Fl),Pe(e,n)}}function Rm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function Pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function Lm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function Um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function Nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function km(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ul.compareFunction=$h,r=Ul):r=ru,e.setTexture2D(t||r,s)}function Fm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||au,s)}function Om(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||cu,s)}function Bm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ou,s)}function zm(i){switch(i){case 5126:return ym;case 35664:return Sm;case 35665:return bm;case 35666:return wm;case 35674:return Em;case 35675:return Tm;case 35676:return Am;case 5124:case 35670:return Rm;case 35667:case 35671:return Cm;case 35668:case 35672:return Pm;case 35669:case 35673:return Dm;case 5125:return Lm;case 36294:return Im;case 36295:return Um;case 36296:return Nm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Fm;case 35680:case 36300:case 36308:case 36293:return Om;case 36289:case 36303:case 36311:case 36292:return Bm}}function Hm(i,t){i.uniform1fv(this.addr,t)}function Vm(i,t){const e=Cs(t,this.size,2);i.uniform2fv(this.addr,e)}function Gm(i,t){const e=Cs(t,this.size,3);i.uniform3fv(this.addr,e)}function Wm(i,t){const e=Cs(t,this.size,4);i.uniform4fv(this.addr,e)}function Xm(i,t){const e=Cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $m(i,t){const e=Cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function qm(i,t){const e=Cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ym(i,t){i.uniform1iv(this.addr,t)}function jm(i,t){i.uniform2iv(this.addr,t)}function Zm(i,t){i.uniform3iv(this.addr,t)}function Jm(i,t){i.uniform4iv(this.addr,t)}function Km(i,t){i.uniform1uiv(this.addr,t)}function Qm(i,t){i.uniform2uiv(this.addr,t)}function tg(i,t){i.uniform3uiv(this.addr,t)}function eg(i,t){i.uniform4uiv(this.addr,t)}function ng(i,t,e){const n=this.cache,s=t.length,r=lo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ru,r[o])}function ig(i,t,e){const n=this.cache,s=t.length,r=lo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||au,r[o])}function sg(i,t,e){const n=this.cache,s=t.length,r=lo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||cu,r[o])}function rg(i,t,e){const n=this.cache,s=t.length,r=lo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ou,r[o])}function og(i){switch(i){case 5126:return Hm;case 35664:return Vm;case 35665:return Gm;case 35666:return Wm;case 35674:return Xm;case 35675:return $m;case 35676:return qm;case 5124:case 35670:return Ym;case 35667:case 35671:return jm;case 35668:case 35672:return Zm;case 35669:case 35673:return Jm;case 5125:return Km;case 36294:return Qm;case 36295:return tg;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return rg}}class ag{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zm(e.type)}}class cg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=og(e.type)}}class lg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ta=/(\w+)(\])?(\[|\.)?/g;function zl(i,t){i.seq.push(t),i.map[t.id]=t}function hg(i,t,e){const n=i.name,s=n.length;for(ta.lastIndex=0;;){const r=ta.exec(n),o=ta.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){zl(e,l===void 0?new ag(a,i,t):new cg(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new lg(a),zl(e,u)),e=u}}}class Yr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);hg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Hl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ug=37297;let fg=0;function dg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Vl=new jt;function pg(i){re._getMatrix(Vl,re.workingColorSpace,i);const t=`mat3( ${Vl.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case co:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Gl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+dg(i.getShaderSource(t),o)}else return s}function mg(i,t){const e=pg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function gg(i,t){let e;switch(t){case vf:e="Linear";break;case xf:e="Reinhard";break;case Mf:e="Cineon";break;case yf:e="ACESFilmic";break;case bf:e="AgX";break;case wf:e="Neutral";break;case Sf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ir=new R;function _g(){re.getLuminanceCoefficients(Ir);const i=Ir.x.toFixed(4),t=Ir.y.toFixed(4),e=Ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function xg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Gs(i){return i!==""}function Wl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function rc(i){return i.replace(yg,bg)}const Sg=new Map;function bg(i,t){let e=Qt[t];if(e===void 0){const n=Sg.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return rc(e)}const wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $l(i){return i.replace(wg,Eg)}function Eg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ql(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Tg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Lh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ih?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ag(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _s:case vs:t="ENVMAP_TYPE_CUBE";break;case ao:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vs:t="ENVMAP_MODE_REFRACTION";break}return t}function Cg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Uh:t="ENVMAP_BLENDING_MULTIPLY";break;case gf:t="ENVMAP_BLENDING_MIX";break;case _f:t="ENVMAP_BLENDING_ADD";break}return t}function Pg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Dg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Tg(e),l=Ag(e),h=Rg(e),u=Cg(e),d=Pg(e),m=vg(e),g=xg(r),_=s.createProgram();let p,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gs).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gs).join(`
`),f.length>0&&(f+=`
`)):(p=[ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),f=[ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?Qt.tonemapping_pars_fragment:"",e.toneMapping!==ui?gg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,mg("linearToOutputTexel",e.outputColorSpace),_g(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gs).join(`
`)),o=rc(o),o=Wl(o,e),o=Xl(o,e),a=rc(a),a=Wl(a,e),a=Xl(a,e),o=$l(o),a=$l(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=S+p+o,v=S+f+a,L=Hl(s,s.VERTEX_SHADER,x),T=Hl(s,s.FRAGMENT_SHADER,v);s.attachShader(_,L),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(P){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(L).trim(),q=s.getShaderInfoLog(T).trim();let J=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,T);else{const tt=Gl(s,L,"vertex"),W=Gl(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+tt+`
`+W)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(O===""||q==="")&&($=!1);$&&(P.diagnostics={runnable:J,programLog:H,vertexShader:{log:O,prefix:p},fragmentShader:{log:q,prefix:f}})}s.deleteShader(L),s.deleteShader(T),D=new Yr(s,_),w=Mg(s,_)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,ug)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=T,this}let Lg=0;class Ig{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ug(t),e.set(t,n)),n}}class Ug{constructor(t){this.id=Lg++,this.code=t,this.usedTimes=0}}function Ng(i,t,e,n,s,r,o){const a=new wc,c=new Ig,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function p(w,M,P,H,O){const q=H.fog,J=O.geometry,$=w.isMeshStandardMaterial?H.environment:null,tt=(w.isMeshStandardMaterial?e:t).get(w.envMap||$),W=tt&&tt.mapping===ao?tt.image.height:null,ut=g[w.type];w.precision!==null&&(m=s.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const Mt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,At=Mt!==void 0?Mt.length:0;let Yt=0;J.morphAttributes.position!==void 0&&(Yt=1),J.morphAttributes.normal!==void 0&&(Yt=2),J.morphAttributes.color!==void 0&&(Yt=3);let ae,Z,ot,Ct;if(ut){const he=An[ut];ae=he.vertexShader,Z=he.fragmentShader}else ae=w.vertexShader,Z=w.fragmentShader,c.update(w),ot=c.getVertexShaderID(w),Ct=c.getFragmentShaderID(w);const lt=i.getRenderTarget(),Ot=i.state.buffers.depth.getReversed(),Xt=O.isInstancedMesh===!0,Gt=O.isBatchedMesh===!0,se=!!w.map,Q=!!w.matcap,rt=!!tt,C=!!w.aoMap,Ut=!!w.lightMap,it=!!w.bumpMap,wt=!!w.normalMap,ht=!!w.displacementMap,Ht=!!w.emissiveMap,St=!!w.metalnessMap,E=!!w.roughnessMap,y=w.anisotropy>0,F=w.clearcoat>0,Y=w.dispersion>0,et=w.iridescence>0,j=w.sheen>0,Pt=w.transmission>0,dt=y&&!!w.anisotropyMap,bt=F&&!!w.clearcoatMap,ee=F&&!!w.clearcoatNormalMap,st=F&&!!w.clearcoatRoughnessMap,Et=et&&!!w.iridescenceMap,Vt=et&&!!w.iridescenceThicknessMap,Wt=j&&!!w.sheenColorMap,Tt=j&&!!w.sheenRoughnessMap,ne=!!w.specularMap,Kt=!!w.specularColorMap,de=!!w.specularIntensityMap,U=Pt&&!!w.transmissionMap,mt=Pt&&!!w.thicknessMap,X=!!w.gradientMap,K=!!w.alphaMap,xt=w.alphaTest>0,gt=!!w.alphaHash,Zt=!!w.extensions;let be=ui;w.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(be=i.toneMapping);const ze={shaderID:ut,shaderType:w.type,shaderName:w.name,vertexShader:ae,fragmentShader:Z,defines:w.defines,customVertexShaderID:ot,customFragmentShaderID:Ct,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Gt,batchingColor:Gt&&O._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&O.instanceColor!==null,instancingMorph:Xt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Es,alphaToCoverage:!!w.alphaToCoverage,map:se,matcap:Q,envMap:rt,envMapMode:rt&&tt.mapping,envMapCubeUVHeight:W,aoMap:C,lightMap:Ut,bumpMap:it,normalMap:wt,displacementMap:d&&ht,emissiveMap:Ht,normalMapObjectSpace:wt&&w.normalMapType===Rf,normalMapTangentSpace:wt&&w.normalMapType===Xh,metalnessMap:St,roughnessMap:E,anisotropy:y,anisotropyMap:dt,clearcoat:F,clearcoatMap:bt,clearcoatNormalMap:ee,clearcoatRoughnessMap:st,dispersion:Y,iridescence:et,iridescenceMap:Et,iridescenceThicknessMap:Vt,sheen:j,sheenColorMap:Wt,sheenRoughnessMap:Tt,specularMap:ne,specularColorMap:Kt,specularIntensityMap:de,transmission:Pt,transmissionMap:U,thicknessMap:mt,gradientMap:X,opaque:w.transparent===!1&&w.blending===hs&&w.alphaToCoverage===!1,alphaMap:K,alphaTest:xt,alphaHash:gt,combine:w.combine,mapUv:se&&_(w.map.channel),aoMapUv:C&&_(w.aoMap.channel),lightMapUv:Ut&&_(w.lightMap.channel),bumpMapUv:it&&_(w.bumpMap.channel),normalMapUv:wt&&_(w.normalMap.channel),displacementMapUv:ht&&_(w.displacementMap.channel),emissiveMapUv:Ht&&_(w.emissiveMap.channel),metalnessMapUv:St&&_(w.metalnessMap.channel),roughnessMapUv:E&&_(w.roughnessMap.channel),anisotropyMapUv:dt&&_(w.anisotropyMap.channel),clearcoatMapUv:bt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:ee&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&_(w.sheenRoughnessMap.channel),specularMapUv:ne&&_(w.specularMap.channel),specularColorMapUv:Kt&&_(w.specularColorMap.channel),specularIntensityMapUv:de&&_(w.specularIntensityMap.channel),transmissionMapUv:U&&_(w.transmissionMap.channel),thicknessMapUv:mt&&_(w.thicknessMap.channel),alphaMapUv:K&&_(w.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(wt||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!J.attributes.uv&&(se||K),fog:!!q,useFog:w.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ot,skinning:O.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Yt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:se&&w.map.isVideoTexture===!0&&re.getTransfer(w.map.colorSpace)===ue,decodeVideoTextureEmissive:Ht&&w.emissiveMap.isVideoTexture===!0&&re.getTransfer(w.emissiveMap.colorSpace)===ue,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ee,flipSided:w.side===Qe,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Zt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&w.extensions.multiDraw===!0||Gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function f(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)M.push(P),M.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(S(M,w),x(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function S(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function x(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){const M=g[w.type];let P;if(M){const H=An[M];P=vd.clone(H.uniforms)}else P=w.uniforms;return P}function L(w,M){let P;for(let H=0,O=h.length;H<O;H++){const q=h[H];if(q.cacheKey===M){P=q,++P.usedTimes;break}}return P===void 0&&(P=new Dg(i,M,w,r),h.push(P)),P}function T(w){if(--w.usedTimes===0){const M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function A(w){c.remove(w)}function D(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:v,acquireProgram:L,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:D}}function kg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Fg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Yl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function jl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,m,g,_,p){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=p),t++,f}function a(u,d,m,g,_,p){const f=o(u,d,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):e.push(f)}function c(u,d,m,g,_,p){const f=o(u,d,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||Fg),n.length>1&&n.sort(d||Yl),s.length>1&&s.sort(d||Yl)}function h(){for(let u=t,d=i.length;u<d;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Og(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new jl,i.set(n,[o])):s>=r.length?(o=new jl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Bg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Nt};break;case"SpotLight":e={position:new R,direction:new R,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function zg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Hg=0;function Vg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Gg(i){const t=new Bg,e=zg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new me,o=new me;function a(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let m=0,g=0,_=0,p=0,f=0,S=0,x=0,v=0,L=0,T=0,A=0;l.sort(Vg);for(let w=0,M=l.length;w<M;w++){const P=l[w],H=P.color,O=P.intensity,q=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=H.r*O,u+=H.g*O,d+=H.b*O;else if(P.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(P.sh.coefficients[$],O);A++}else if(P.isDirectionalLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const tt=P.shadow,W=e.get(P);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,n.directionalShadow[m]=W,n.directionalShadowMap[m]=J,n.directionalShadowMatrix[m]=P.shadow.matrix,S++}n.directional[m]=$,m++}else if(P.isSpotLight){const $=t.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(H).multiplyScalar(O),$.distance=q,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,n.spot[_]=$;const tt=P.shadow;if(P.map&&(n.spotLightMap[L]=P.map,L++,tt.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[_]=tt.matrix,P.castShadow){const W=e.get(P);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=J,v++}_++}else if(P.isRectAreaLight){const $=t.get(P);$.color.copy(H).multiplyScalar(O),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=$,p++}else if(P.isPointLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),$.distance=P.distance,$.decay=P.decay,P.castShadow){const tt=P.shadow,W=e.get(P);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,W.shadowCameraNear=tt.camera.near,W.shadowCameraFar=tt.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=$,g++}else if(P.isHemisphereLight){const $=t.get(P);$.skyColor.copy(P.color).multiplyScalar(O),$.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[f]=$,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==m||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==p||D.hemiLength!==f||D.numDirectionalShadows!==S||D.numPointShadows!==x||D.numSpotShadows!==v||D.numSpotMaps!==L||D.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+L-T,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,D.directionalLength=m,D.pointLength=g,D.spotLength=_,D.rectAreaLength=p,D.hemiLength=f,D.numDirectionalShadows=S,D.numPointShadows=x,D.numSpotShadows=v,D.numSpotMaps=L,D.numLightProbes=A,n.version=Hg++)}function c(l,h){let u=0,d=0,m=0,g=0,_=0;const p=h.matrixWorldInverse;for(let f=0,S=l.length;f<S;f++){const x=l[f];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),u++}else if(x.isSpotLight){const v=n.spot[m];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),m++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function Zl(i){const t=new Gg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Wg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Zl(i),t.set(s,[a])):r>=o.length?(a=new Zl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Xg extends Rs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $g extends Rs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yg=`uniform sampler2D shadow_pass;
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
}`;function jg(i,t,e){let n=new Ec;const s=new nt,r=new nt,o=new fe,a=new Xg({depthPacking:Af}),c=new $g,l={},h=e.maxTextureSize,u={[pi]:Qe,[Qe]:pi,[Ee]:Ee},d=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:qg,fragmentShader:Yg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new De;g.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ie(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lh;let f=this.type;this.render=function(T,A,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const w=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),H=i.state;H.setBlending(hi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const O=f!==Vn&&this.type===Vn,q=f===Vn&&this.type!==Vn;for(let J=0,$=T.length;J<$;J++){const tt=T[J],W=tt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ut=W.getFrameExtents();if(s.multiply(ut),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ut.x),s.x=r.x*ut.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ut.y),s.y=r.y*ut.y,W.mapSize.y=r.y)),W.map===null||O===!0||q===!0){const At=this.type!==Vn?{minFilter:tn,magFilter:tn}:{};W.map!==null&&W.map.dispose(),W.map=new Bi(s.x,s.y,At),W.map.texture.name=tt.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const Mt=W.getViewportCount();for(let At=0;At<Mt;At++){const Yt=W.getViewport(At);o.set(r.x*Yt.x,r.y*Yt.y,r.x*Yt.z,r.y*Yt.w),H.viewport(o),W.updateMatrices(tt,At),n=W.getFrustum(),v(A,D,W.camera,tt,this.type)}W.isPointLightShadow!==!0&&this.type===Vn&&S(W,D),W.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(w,M,P)};function S(T,A){const D=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Bi(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,D,d,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,D,m,_,null)}function x(T,A,D,w){let M=null;const P=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=D.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=M.uuid,O=A.uuid;let q=l[H];q===void 0&&(q={},l[H]=q);let J=q[O];J===void 0&&(J=M.clone(),q[O]=J,A.addEventListener("dispose",L)),M=J}if(M.visible=A.visible,M.wireframe=A.wireframe,w===Vn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=i.properties.get(M);H.light=D}return M}function v(T,A,D,w,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Vn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const O=t.update(T),q=T.material;if(Array.isArray(q)){const J=O.groups;for(let $=0,tt=J.length;$<tt;$++){const W=J[$],ut=q[W.materialIndex];if(ut&&ut.visible){const Mt=x(T,ut,w,M);T.onBeforeShadow(i,T,A,D,O,Mt,W),i.renderBufferDirect(D,null,O,Mt,T,W),T.onAfterShadow(i,T,A,D,O,Mt,W)}}}else if(q.visible){const J=x(T,q,w,M);T.onBeforeShadow(i,T,A,D,O,J,null),i.renderBufferDirect(D,null,O,J,T,null),T.onAfterShadow(i,T,A,D,O,J,null)}}const H=T.children;for(let O=0,q=H.length;O<q;O++)v(H[O],A,D,w,M)}function L(T){T.target.removeEventListener("dispose",L);for(const D in l){const w=l[D],M=T.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const Zg={[ba]:wa,[Ea]:Ra,[Ta]:Ca,[gs]:Aa,[wa]:ba,[Ra]:Ea,[Ca]:Ta,[Aa]:gs};function Jg(i,t){function e(){let U=!1;const mt=new fe;let X=null;const K=new fe(0,0,0,0);return{setMask:function(xt){X!==xt&&!U&&(i.colorMask(xt,xt,xt,xt),X=xt)},setLocked:function(xt){U=xt},setClear:function(xt,gt,Zt,be,ze){ze===!0&&(xt*=be,gt*=be,Zt*=be),mt.set(xt,gt,Zt,be),K.equals(mt)===!1&&(i.clearColor(xt,gt,Zt,be),K.copy(mt))},reset:function(){U=!1,X=null,K.set(-1,0,0,0)}}}function n(){let U=!1,mt=!1,X=null,K=null,xt=null;return{setReversed:function(gt){if(mt!==gt){const Zt=t.get("EXT_clip_control");mt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);const be=xt;xt=null,this.setClear(be)}mt=gt},getReversed:function(){return mt},setTest:function(gt){gt?lt(i.DEPTH_TEST):Ot(i.DEPTH_TEST)},setMask:function(gt){X!==gt&&!U&&(i.depthMask(gt),X=gt)},setFunc:function(gt){if(mt&&(gt=Zg[gt]),K!==gt){switch(gt){case ba:i.depthFunc(i.NEVER);break;case wa:i.depthFunc(i.ALWAYS);break;case Ea:i.depthFunc(i.LESS);break;case gs:i.depthFunc(i.LEQUAL);break;case Ta:i.depthFunc(i.EQUAL);break;case Aa:i.depthFunc(i.GEQUAL);break;case Ra:i.depthFunc(i.GREATER);break;case Ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=gt}},setLocked:function(gt){U=gt},setClear:function(gt){xt!==gt&&(mt&&(gt=1-gt),i.clearDepth(gt),xt=gt)},reset:function(){U=!1,X=null,K=null,xt=null,mt=!1}}}function s(){let U=!1,mt=null,X=null,K=null,xt=null,gt=null,Zt=null,be=null,ze=null;return{setTest:function(he){U||(he?lt(i.STENCIL_TEST):Ot(i.STENCIL_TEST))},setMask:function(he){mt!==he&&!U&&(i.stencilMask(he),mt=he)},setFunc:function(he,_n,Nn){(X!==he||K!==_n||xt!==Nn)&&(i.stencilFunc(he,_n,Nn),X=he,K=_n,xt=Nn)},setOp:function(he,_n,Nn){(gt!==he||Zt!==_n||be!==Nn)&&(i.stencilOp(he,_n,Nn),gt=he,Zt=_n,be=Nn)},setLocked:function(he){U=he},setClear:function(he){ze!==he&&(i.clearStencil(he),ze=he)},reset:function(){U=!1,mt=null,X=null,K=null,xt=null,gt=null,Zt=null,be=null,ze=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,m=[],g=null,_=!1,p=null,f=null,S=null,x=null,v=null,L=null,T=null,A=new Nt(0,0,0),D=0,w=!1,M=null,P=null,H=null,O=null,q=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,tt=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(W)[1]),$=tt>=1):W.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),$=tt>=2);let ut=null,Mt={};const At=i.getParameter(i.SCISSOR_BOX),Yt=i.getParameter(i.VIEWPORT),ae=new fe().fromArray(At),Z=new fe().fromArray(Yt);function ot(U,mt,X,K){const xt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(U,gt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<X;Zt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(mt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return gt}const Ct={};Ct[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),Ct[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ct[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(i.DEPTH_TEST),o.setFunc(gs),it(!1),wt(Qc),lt(i.CULL_FACE),C(hi);function lt(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Ot(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Xt(U,mt){return u[U]!==mt?(i.bindFramebuffer(U,mt),u[U]=mt,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=mt),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function Gt(U,mt){let X=m,K=!1;if(U){X=d.get(mt),X===void 0&&(X=[],d.set(mt,X));const xt=U.textures;if(X.length!==xt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Zt=xt.length;gt<Zt;gt++)X[gt]=i.COLOR_ATTACHMENT0+gt;X.length=xt.length,K=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,K=!0);K&&i.drawBuffers(X)}function se(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const Q={[Pi]:i.FUNC_ADD,[Ku]:i.FUNC_SUBTRACT,[Qu]:i.FUNC_REVERSE_SUBTRACT};Q[tf]=i.MIN,Q[ef]=i.MAX;const rt={[nf]:i.ZERO,[sf]:i.ONE,[rf]:i.SRC_COLOR,[ya]:i.SRC_ALPHA,[uf]:i.SRC_ALPHA_SATURATE,[lf]:i.DST_COLOR,[af]:i.DST_ALPHA,[of]:i.ONE_MINUS_SRC_COLOR,[Sa]:i.ONE_MINUS_SRC_ALPHA,[hf]:i.ONE_MINUS_DST_COLOR,[cf]:i.ONE_MINUS_DST_ALPHA,[ff]:i.CONSTANT_COLOR,[df]:i.ONE_MINUS_CONSTANT_COLOR,[pf]:i.CONSTANT_ALPHA,[mf]:i.ONE_MINUS_CONSTANT_ALPHA};function C(U,mt,X,K,xt,gt,Zt,be,ze,he){if(U===hi){_===!0&&(Ot(i.BLEND),_=!1);return}if(_===!1&&(lt(i.BLEND),_=!0),U!==Ju){if(U!==p||he!==w){if((f!==Pi||v!==Pi)&&(i.blendEquation(i.FUNC_ADD),f=Pi,v=Pi),he)switch(U){case hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tl:i.blendFunc(i.ONE,i.ONE);break;case el:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case el:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,x=null,L=null,T=null,A.set(0,0,0),D=0,p=U,w=he}return}xt=xt||mt,gt=gt||X,Zt=Zt||K,(mt!==f||xt!==v)&&(i.blendEquationSeparate(Q[mt],Q[xt]),f=mt,v=xt),(X!==S||K!==x||gt!==L||Zt!==T)&&(i.blendFuncSeparate(rt[X],rt[K],rt[gt],rt[Zt]),S=X,x=K,L=gt,T=Zt),(be.equals(A)===!1||ze!==D)&&(i.blendColor(be.r,be.g,be.b,ze),A.copy(be),D=ze),p=U,w=!1}function Ut(U,mt){U.side===Ee?Ot(i.CULL_FACE):lt(i.CULL_FACE);let X=U.side===Qe;mt&&(X=!X),it(X),U.blending===hs&&U.transparent===!1?C(hi):C(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const K=U.stencilWrite;a.setTest(K),K&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ht(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function wt(U){U!==ju?(lt(i.CULL_FACE),U!==P&&(U===Qc?i.cullFace(i.BACK):U===Zu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ot(i.CULL_FACE),P=U}function ht(U){U!==H&&($&&i.lineWidth(U),H=U)}function Ht(U,mt,X){U?(lt(i.POLYGON_OFFSET_FILL),(O!==mt||q!==X)&&(i.polygonOffset(mt,X),O=mt,q=X)):Ot(i.POLYGON_OFFSET_FILL)}function St(U){U?lt(i.SCISSOR_TEST):Ot(i.SCISSOR_TEST)}function E(U){U===void 0&&(U=i.TEXTURE0+J-1),ut!==U&&(i.activeTexture(U),ut=U)}function y(U,mt,X){X===void 0&&(ut===null?X=i.TEXTURE0+J-1:X=ut);let K=Mt[X];K===void 0&&(K={type:void 0,texture:void 0},Mt[X]=K),(K.type!==U||K.texture!==mt)&&(ut!==X&&(i.activeTexture(X),ut=X),i.bindTexture(U,mt||Ct[U]),K.type=U,K.texture=mt)}function F(){const U=Mt[ut];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Vt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Wt(U){ae.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ae.copy(U))}function Tt(U){Z.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Z.copy(U))}function ne(U,mt){let X=l.get(mt);X===void 0&&(X=new WeakMap,l.set(mt,X));let K=X.get(U);K===void 0&&(K=i.getUniformBlockIndex(mt,U.name),X.set(U,K))}function Kt(U,mt){const K=l.get(mt).get(U);c.get(mt)!==K&&(i.uniformBlockBinding(mt,K,U.__bindingPointIndex),c.set(mt,K))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ut=null,Mt={},u={},d=new WeakMap,m=[],g=null,_=!1,p=null,f=null,S=null,x=null,v=null,L=null,T=null,A=new Nt(0,0,0),D=0,w=!1,M=null,P=null,H=null,O=null,q=null,ae.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:Ot,bindFramebuffer:Xt,drawBuffers:Gt,useProgram:se,setBlending:C,setMaterial:Ut,setFlipSided:it,setCullFace:wt,setLineWidth:ht,setPolygonOffset:Ht,setScissorTest:St,activeTexture:E,bindTexture:y,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:et,texImage2D:Et,texImage3D:Vt,updateUBOMapping:ne,uniformBlockBinding:Kt,texStorage2D:ee,texStorage3D:st,texSubImage2D:j,texSubImage3D:Pt,compressedTexSubImage2D:dt,compressedTexSubImage3D:bt,scissor:Wt,viewport:Tt,reset:de}}function Jl(i,t,e,n){const s=Kg(n);switch(e){case Bh:return i*t;case Hh:return i*t;case Vh:return i*t*2;case vc:return i*t/s.components*s.byteLength;case xc:return i*t/s.components*s.byteLength;case Gh:return i*t*2/s.components*s.byteLength;case Mc:return i*t*2/s.components*s.byteLength;case zh:return i*t*3/s.components*s.byteLength;case bn:return i*t*4/s.components*s.byteLength;case yc:return i*t*4/s.components*s.byteLength;case Gr:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xr:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ua:case ka:return Math.max(i,16)*Math.max(t,8)/4;case Ia:case Na:return Math.max(i,8)*Math.max(t,8)/2;case Fa:case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case qa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case qr:case tc:case ec:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wh:case nc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ic:case sc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kg(i){switch(i){case qn:case kh:return{byteLength:1,components:1};case js:case Fh:case ir:return{byteLength:2,components:1};case gc:case _c:return{byteLength:2,components:4};case Oi:case mc:case Gn:return{byteLength:4,components:1};case Oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Qg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return m?new OffscreenCanvas(E,y):Qr("canvas")}function _(E,y,F){let Y=1;const et=St(E);if((et.width>F||et.height>F)&&(Y=F/Math.max(et.width,et.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const j=Math.floor(Y*et.width),Pt=Math.floor(Y*et.height);u===void 0&&(u=g(j,Pt));const dt=y?g(j,Pt):u;return dt.width=j,dt.height=Pt,dt.getContext("2d").drawImage(E,0,0,j,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+j+"x"+Pt+")."),dt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),E;return E}function p(E){return E.generateMipmaps}function f(E){i.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(E,y,F,Y,et=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let j=y;if(y===i.RED&&(F===i.FLOAT&&(j=i.R32F),F===i.HALF_FLOAT&&(j=i.R16F),F===i.UNSIGNED_BYTE&&(j=i.R8)),y===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.R8UI),F===i.UNSIGNED_SHORT&&(j=i.R16UI),F===i.UNSIGNED_INT&&(j=i.R32UI),F===i.BYTE&&(j=i.R8I),F===i.SHORT&&(j=i.R16I),F===i.INT&&(j=i.R32I)),y===i.RG&&(F===i.FLOAT&&(j=i.RG32F),F===i.HALF_FLOAT&&(j=i.RG16F),F===i.UNSIGNED_BYTE&&(j=i.RG8)),y===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.RG8UI),F===i.UNSIGNED_SHORT&&(j=i.RG16UI),F===i.UNSIGNED_INT&&(j=i.RG32UI),F===i.BYTE&&(j=i.RG8I),F===i.SHORT&&(j=i.RG16I),F===i.INT&&(j=i.RG32I)),y===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.RGB8UI),F===i.UNSIGNED_SHORT&&(j=i.RGB16UI),F===i.UNSIGNED_INT&&(j=i.RGB32UI),F===i.BYTE&&(j=i.RGB8I),F===i.SHORT&&(j=i.RGB16I),F===i.INT&&(j=i.RGB32I)),y===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),F===i.UNSIGNED_INT&&(j=i.RGBA32UI),F===i.BYTE&&(j=i.RGBA8I),F===i.SHORT&&(j=i.RGBA16I),F===i.INT&&(j=i.RGBA32I)),y===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),y===i.RGBA){const Pt=et?co:re.getTransfer(Y);F===i.FLOAT&&(j=i.RGBA32F),F===i.HALF_FLOAT&&(j=i.RGBA16F),F===i.UNSIGNED_BYTE&&(j=Pt===ue?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function v(E,y){let F;return E?y===null||y===Oi||y===xs?F=i.DEPTH24_STENCIL8:y===Gn?F=i.DEPTH32F_STENCIL8:y===js&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Oi||y===xs?F=i.DEPTH_COMPONENT24:y===Gn?F=i.DEPTH_COMPONENT32F:y===js&&(F=i.DEPTH_COMPONENT16),F}function L(E,y){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==tn&&E.minFilter!==Rn?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function T(E){const y=E.target;y.removeEventListener("dispose",T),D(y),y.isVideoTexture&&h.delete(y)}function A(E){const y=E.target;y.removeEventListener("dispose",A),M(y)}function D(E){const y=n.get(E);if(y.__webglInit===void 0)return;const F=E.source,Y=d.get(F);if(Y){const et=Y[y.__cacheKey];et.usedTimes--,et.usedTimes===0&&w(E),Object.keys(Y).length===0&&d.delete(F)}n.remove(E)}function w(E){const y=n.get(E);i.deleteTexture(y.__webglTexture);const F=E.source,Y=d.get(F);delete Y[y.__cacheKey],o.memory.textures--}function M(E){const y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let et=0;et<y.__webglFramebuffer[Y].length;et++)i.deleteFramebuffer(y.__webglFramebuffer[Y][et]);else i.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)i.deleteFramebuffer(y.__webglFramebuffer[Y]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=E.textures;for(let Y=0,et=F.length;Y<et;Y++){const j=n.get(F[Y]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(F[Y])}n.remove(E)}let P=0;function H(){P=0}function O(){const E=P;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),P+=1,E}function q(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function J(E,y){const F=n.get(E);if(E.isVideoTexture&&ht(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const Y=E.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(F,E,y);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+y)}function $(E,y){const F=n.get(E);if(E.version>0&&F.__version!==E.version){Z(F,E,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+y)}function tt(E,y){const F=n.get(E);if(E.version>0&&F.__version!==E.version){Z(F,E,y);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+y)}function W(E,y){const F=n.get(E);if(E.version>0&&F.__version!==E.version){ot(F,E,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+y)}const ut={[Jr]:i.REPEAT,[Li]:i.CLAMP_TO_EDGE,[La]:i.MIRRORED_REPEAT},Mt={[tn]:i.NEAREST,[Ef]:i.NEAREST_MIPMAP_NEAREST,[dr]:i.NEAREST_MIPMAP_LINEAR,[Rn]:i.LINEAR,[Ro]:i.LINEAR_MIPMAP_NEAREST,[Ii]:i.LINEAR_MIPMAP_LINEAR},At={[Cf]:i.NEVER,[Nf]:i.ALWAYS,[Pf]:i.LESS,[$h]:i.LEQUAL,[Df]:i.EQUAL,[Uf]:i.GEQUAL,[Lf]:i.GREATER,[If]:i.NOTEQUAL};function Yt(E,y){if(y.type===Gn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Rn||y.magFilter===Ro||y.magFilter===dr||y.magFilter===Ii||y.minFilter===Rn||y.minFilter===Ro||y.minFilter===dr||y.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ut[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ut[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ut[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Mt[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Mt[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,At[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===tn||y.minFilter!==dr&&y.minFilter!==Ii||y.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ae(E,y){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",T));const Y=y.source;let et=d.get(Y);et===void 0&&(et={},d.set(Y,et));const j=q(y);if(j!==E.__cacheKey){et[j]===void 0&&(et[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),et[j].usedTimes++;const Pt=et[E.__cacheKey];Pt!==void 0&&(et[E.__cacheKey].usedTimes--,Pt.usedTimes===0&&w(y)),E.__cacheKey=j,E.__webglTexture=et[j].texture}return F}function Z(E,y,F){let Y=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=i.TEXTURE_3D);const et=ae(E,y),j=y.source;e.bindTexture(Y,E.__webglTexture,i.TEXTURE0+F);const Pt=n.get(j);if(j.version!==Pt.__version||et===!0){e.activeTexture(i.TEXTURE0+F);const dt=re.getPrimaries(re.workingColorSpace),bt=y.colorSpace===ci?null:re.getPrimaries(y.colorSpace),ee=y.colorSpace===ci||dt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let st=_(y.image,!1,s.maxTextureSize);st=Ht(y,st);const Et=r.convert(y.format,y.colorSpace),Vt=r.convert(y.type);let Wt=x(y.internalFormat,Et,Vt,y.colorSpace,y.isVideoTexture);Yt(Y,y);let Tt;const ne=y.mipmaps,Kt=y.isVideoTexture!==!0,de=Pt.__version===void 0||et===!0,U=j.dataReady,mt=L(y,st);if(y.isDepthTexture)Wt=v(y.format===Ms,y.type),de&&(Kt?e.texStorage2D(i.TEXTURE_2D,1,Wt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Wt,st.width,st.height,0,Et,Vt,null));else if(y.isDataTexture)if(ne.length>0){Kt&&de&&e.texStorage2D(i.TEXTURE_2D,mt,Wt,ne[0].width,ne[0].height);for(let X=0,K=ne.length;X<K;X++)Tt=ne[X],Kt?U&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Tt.width,Tt.height,Et,Vt,Tt.data):e.texImage2D(i.TEXTURE_2D,X,Wt,Tt.width,Tt.height,0,Et,Vt,Tt.data);y.generateMipmaps=!1}else Kt?(de&&e.texStorage2D(i.TEXTURE_2D,mt,Wt,st.width,st.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,Et,Vt,st.data)):e.texImage2D(i.TEXTURE_2D,0,Wt,st.width,st.height,0,Et,Vt,st.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Kt&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Wt,ne[0].width,ne[0].height,st.depth);for(let X=0,K=ne.length;X<K;X++)if(Tt=ne[X],y.format!==bn)if(Et!==null)if(Kt){if(U)if(y.layerUpdates.size>0){const xt=Jl(Tt.width,Tt.height,y.format,y.type);for(const gt of y.layerUpdates){const Zt=Tt.data.subarray(gt*xt/Tt.data.BYTES_PER_ELEMENT,(gt+1)*xt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,gt,Tt.width,Tt.height,1,Et,Zt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Tt.width,Tt.height,st.depth,Et,Tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Wt,Tt.width,Tt.height,st.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Tt.width,Tt.height,st.depth,Et,Vt,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Wt,Tt.width,Tt.height,st.depth,0,Et,Vt,Tt.data)}else{Kt&&de&&e.texStorage2D(i.TEXTURE_2D,mt,Wt,ne[0].width,ne[0].height);for(let X=0,K=ne.length;X<K;X++)Tt=ne[X],y.format!==bn?Et!==null?Kt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,Tt.width,Tt.height,Et,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Wt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?U&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Tt.width,Tt.height,Et,Vt,Tt.data):e.texImage2D(i.TEXTURE_2D,X,Wt,Tt.width,Tt.height,0,Et,Vt,Tt.data)}else if(y.isDataArrayTexture)if(Kt){if(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Wt,st.width,st.height,st.depth),U)if(y.layerUpdates.size>0){const X=Jl(st.width,st.height,y.format,y.type);for(const K of y.layerUpdates){const xt=st.data.subarray(K*X/st.data.BYTES_PER_ELEMENT,(K+1)*X/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,st.width,st.height,1,Et,Vt,xt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Et,Vt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Wt,st.width,st.height,st.depth,0,Et,Vt,st.data);else if(y.isData3DTexture)Kt?(de&&e.texStorage3D(i.TEXTURE_3D,mt,Wt,st.width,st.height,st.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Et,Vt,st.data)):e.texImage3D(i.TEXTURE_3D,0,Wt,st.width,st.height,st.depth,0,Et,Vt,st.data);else if(y.isFramebufferTexture){if(de)if(Kt)e.texStorage2D(i.TEXTURE_2D,mt,Wt,st.width,st.height);else{let X=st.width,K=st.height;for(let xt=0;xt<mt;xt++)e.texImage2D(i.TEXTURE_2D,xt,Wt,X,K,0,Et,Vt,null),X>>=1,K>>=1}}else if(ne.length>0){if(Kt&&de){const X=St(ne[0]);e.texStorage2D(i.TEXTURE_2D,mt,Wt,X.width,X.height)}for(let X=0,K=ne.length;X<K;X++)Tt=ne[X],Kt?U&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Et,Vt,Tt):e.texImage2D(i.TEXTURE_2D,X,Wt,Et,Vt,Tt);y.generateMipmaps=!1}else if(Kt){if(de){const X=St(st);e.texStorage2D(i.TEXTURE_2D,mt,Wt,X.width,X.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Vt,st)}else e.texImage2D(i.TEXTURE_2D,0,Wt,Et,Vt,st);p(y)&&f(Y),Pt.__version=j.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function ot(E,y,F){if(y.image.length!==6)return;const Y=ae(E,y),et=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);const j=n.get(et);if(et.version!==j.__version||Y===!0){e.activeTexture(i.TEXTURE0+F);const Pt=re.getPrimaries(re.workingColorSpace),dt=y.colorSpace===ci?null:re.getPrimaries(y.colorSpace),bt=y.colorSpace===ci||Pt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const ee=y.isCompressedTexture||y.image[0].isCompressedTexture,st=y.image[0]&&y.image[0].isDataTexture,Et=[];for(let K=0;K<6;K++)!ee&&!st?Et[K]=_(y.image[K],!0,s.maxCubemapSize):Et[K]=st?y.image[K].image:y.image[K],Et[K]=Ht(y,Et[K]);const Vt=Et[0],Wt=r.convert(y.format,y.colorSpace),Tt=r.convert(y.type),ne=x(y.internalFormat,Wt,Tt,y.colorSpace),Kt=y.isVideoTexture!==!0,de=j.__version===void 0||Y===!0,U=et.dataReady;let mt=L(y,Vt);Yt(i.TEXTURE_CUBE_MAP,y);let X;if(ee){Kt&&de&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,ne,Vt.width,Vt.height);for(let K=0;K<6;K++){X=Et[K].mipmaps;for(let xt=0;xt<X.length;xt++){const gt=X[xt];y.format!==bn?Wt!==null?Kt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,0,0,gt.width,gt.height,Wt,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,ne,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,0,0,gt.width,gt.height,Wt,Tt,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,ne,gt.width,gt.height,0,Wt,Tt,gt.data)}}}else{if(X=y.mipmaps,Kt&&de){X.length>0&&mt++;const K=St(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,ne,K.width,K.height)}for(let K=0;K<6;K++)if(st){Kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Et[K].width,Et[K].height,Wt,Tt,Et[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ne,Et[K].width,Et[K].height,0,Wt,Tt,Et[K].data);for(let xt=0;xt<X.length;xt++){const Zt=X[xt].image[K].image;Kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,0,0,Zt.width,Zt.height,Wt,Tt,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,ne,Zt.width,Zt.height,0,Wt,Tt,Zt.data)}}else{Kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Wt,Tt,Et[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ne,Wt,Tt,Et[K]);for(let xt=0;xt<X.length;xt++){const gt=X[xt];Kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,0,0,Wt,Tt,gt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,ne,Wt,Tt,gt.image[K])}}}p(y)&&f(i.TEXTURE_CUBE_MAP),j.__version=et.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Ct(E,y,F,Y,et,j){const Pt=r.convert(F.format,F.colorSpace),dt=r.convert(F.type),bt=x(F.internalFormat,Pt,dt,F.colorSpace),ee=n.get(y),st=n.get(F);if(st.__renderTarget=y,!ee.__hasExternalTextures){const Et=Math.max(1,y.width>>j),Vt=Math.max(1,y.height>>j);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,j,bt,Et,Vt,y.depth,0,Pt,dt,null):e.texImage2D(et,j,bt,Et,Vt,0,Pt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),wt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,et,st.__webglTexture,0,it(y)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,et,st.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(E,y,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){const Y=y.depthTexture,et=Y&&Y.isDepthTexture?Y.type:null,j=v(y.stencilBuffer,et),Pt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=it(y);wt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,j,y.width,y.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,j,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,j,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,E)}else{const Y=y.textures;for(let et=0;et<Y.length;et++){const j=Y[et],Pt=r.convert(j.format,j.colorSpace),dt=r.convert(j.type),bt=x(j.internalFormat,Pt,dt,j.colorSpace),ee=it(y);F&&wt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,bt,y.width,y.height):wt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,bt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,bt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ot(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(y.depthTexture);Y.__renderTarget=y,(!Y.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J(y.depthTexture,0);const et=Y.__webglTexture,j=it(y);if(y.depthTexture.format===us)wt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(y.depthTexture.format===Ms)wt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Xt(E){const y=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){const Y=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){const et=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",et)};Y.addEventListener("dispose",et),y.__depthDisposeCallback=et}y.__boundDepthTexture=Y}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ot(y.__webglFramebuffer,E)}else if(F){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=i.createRenderbuffer(),lt(y.__webglDepthbuffer[Y],E,!1);else{const et=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),lt(y.__webglDepthbuffer,E,!1);else{const Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(E,y,F){const Y=n.get(E);y!==void 0&&Ct(Y.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Xt(E)}function se(E){const y=E.texture,F=n.get(E),Y=n.get(y);E.addEventListener("dispose",A);const et=E.textures,j=E.isWebGLCubeRenderTarget===!0,Pt=et.length>1;if(Pt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=y.version,o.memory.textures++),j){F.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[dt]=[];for(let bt=0;bt<y.mipmaps.length;bt++)F.__webglFramebuffer[dt][bt]=i.createFramebuffer()}else F.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let dt=0;dt<y.mipmaps.length;dt++)F.__webglFramebuffer[dt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let dt=0,bt=et.length;dt<bt;dt++){const ee=n.get(et[dt]);ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&wt(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let dt=0;dt<et.length;dt++){const bt=et[dt];F.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[dt]);const ee=r.convert(bt.format,bt.colorSpace),st=r.convert(bt.type),Et=x(bt.internalFormat,ee,st,bt.colorSpace,E.isXRRenderTarget===!0),Vt=it(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,Et,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,F.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,y);for(let dt=0;dt<6;dt++)if(y.mipmaps&&y.mipmaps.length>0)for(let bt=0;bt<y.mipmaps.length;bt++)Ct(F.__webglFramebuffer[dt][bt],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt);else Ct(F.__webglFramebuffer[dt],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);p(y)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let dt=0,bt=et.length;dt<bt;dt++){const ee=et[dt],st=n.get(ee);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),Yt(i.TEXTURE_2D,ee),Ct(F.__webglFramebuffer,E,ee,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),p(ee)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(dt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,Y.__webglTexture),Yt(dt,y),y.mipmaps&&y.mipmaps.length>0)for(let bt=0;bt<y.mipmaps.length;bt++)Ct(F.__webglFramebuffer[bt],E,y,i.COLOR_ATTACHMENT0,dt,bt);else Ct(F.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,dt,0);p(y)&&f(dt),e.unbindTexture()}E.depthBuffer&&Xt(E)}function Q(E){const y=E.textures;for(let F=0,Y=y.length;F<Y;F++){const et=y[F];if(p(et)){const j=S(E),Pt=n.get(et).__webglTexture;e.bindTexture(j,Pt),f(j),e.unbindTexture()}}}const rt=[],C=[];function Ut(E){if(E.samples>0){if(wt(E)===!1){const y=E.textures,F=E.width,Y=E.height;let et=i.COLOR_BUFFER_BIT;const j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(E),dt=y.length>1;if(dt)for(let bt=0;bt<y.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let bt=0;bt<y.length;bt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[bt]);const ee=n.get(y[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,et,i.NEAREST),c===!0&&(rt.length=0,C.length=0,rt.push(i.COLOR_ATTACHMENT0+bt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(rt.push(j),C.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let bt=0;bt<y.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[bt]);const ee=n.get(y[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,ee,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function it(E){return Math.min(s.maxSamples,E.samples)}function wt(E){const y=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ht(E){const y=o.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function Ht(E,y){const F=E.colorSpace,Y=E.format,et=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Es&&F!==ci&&(re.getTransfer(F)===ue?(Y!==bn||et!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function St(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=H,this.setTexture2D=J,this.setTexture2DArray=$,this.setTexture3D=tt,this.setTextureCube=W,this.rebindTextures=Gt,this.setupRenderTarget=se,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=wt}function t_(i,t){function e(n,s=ci){let r;const o=re.getTransfer(s);if(n===qn)return i.UNSIGNED_BYTE;if(n===gc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_c)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Oh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kh)return i.BYTE;if(n===Fh)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===mc)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===ir)return i.HALF_FLOAT;if(n===Bh)return i.ALPHA;if(n===zh)return i.RGB;if(n===bn)return i.RGBA;if(n===Hh)return i.LUMINANCE;if(n===Vh)return i.LUMINANCE_ALPHA;if(n===us)return i.DEPTH_COMPONENT;if(n===Ms)return i.DEPTH_STENCIL;if(n===vc)return i.RED;if(n===xc)return i.RED_INTEGER;if(n===Gh)return i.RG;if(n===Mc)return i.RG_INTEGER;if(n===yc)return i.RGBA_INTEGER;if(n===Gr||n===Wr||n===Xr||n===$r)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ia||n===Ua||n===Na||n===ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fa||n===Oa||n===Ba)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fa||n===Oa)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ba)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===za||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===$a||n===qa||n===Ya||n===ja||n===Za||n===Ja||n===Ka||n===Qa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===za)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Va)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ga)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$a)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ya)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ja)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Za)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ja)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ka)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qr||n===tc||n===ec)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qr)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wh||n===nc||n===ic||n===sc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ic)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class e_ extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class yt extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const n_={type:"move"};class ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),f=this._getHandJoint(l,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(n_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const i_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s_=`
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

}`;class r_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Xe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new mi({vertexShader:i_,fragmentShader:s_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ie(new ye(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class o_ extends Ts{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null;const _=new r_,p=e.getContextAttributes();let f=null,S=null;const x=[],v=[],L=new nt;let T=null;const A=new Ke;A.viewport=new fe;const D=new Ke;D.viewport=new fe;const w=[A,D],M=new e_;let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ot=x[Z];return ot===void 0&&(ot=new ea,x[Z]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(Z){let ot=x[Z];return ot===void 0&&(ot=new ea,x[Z]=ot),ot.getGripSpace()},this.getHand=function(Z){let ot=x[Z];return ot===void 0&&(ot=new ea,x[Z]=ot),ot.getHandSpace()};function O(Z){const ot=v.indexOf(Z.inputSource);if(ot===-1)return;const Ct=x[ot];Ct!==void 0&&(Ct.update(Z.inputSource,Z.frame,l||o),Ct.dispatchEvent({type:Z.type,data:Z.inputSource}))}function q(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",J);for(let Z=0;Z<x.length;Z++){const ot=v[Z];ot!==null&&(v[Z]=null,x[Z].disconnect(ot))}P=null,H=null,_.reset(),t.setRenderTarget(f),m=null,d=null,u=null,s=null,S=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",q),s.addEventListener("inputsourceschange",J),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const ot={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Bi(m.framebufferWidth,m.framebufferHeight,{format:bn,type:qn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let ot=null,Ct=null,lt=null;p.depth&&(lt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=p.stencil?Ms:us,Ct=p.stencil?xs:Oi);const Ot={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ot),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Bi(d.textureWidth,d.textureHeight,{format:bn,type:qn,depthTexture:new su(d.textureWidth,d.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ae.setContext(s),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(Z){for(let ot=0;ot<Z.removed.length;ot++){const Ct=Z.removed[ot],lt=v.indexOf(Ct);lt>=0&&(v[lt]=null,x[lt].disconnect(Ct))}for(let ot=0;ot<Z.added.length;ot++){const Ct=Z.added[ot];let lt=v.indexOf(Ct);if(lt===-1){for(let Xt=0;Xt<x.length;Xt++)if(Xt>=v.length){v.push(Ct),lt=Xt;break}else if(v[Xt]===null){v[Xt]=Ct,lt=Xt;break}if(lt===-1)break}const Ot=x[lt];Ot&&Ot.connect(Ct)}}const $=new R,tt=new R;function W(Z,ot,Ct){$.setFromMatrixPosition(ot.matrixWorld),tt.setFromMatrixPosition(Ct.matrixWorld);const lt=$.distanceTo(tt),Ot=ot.projectionMatrix.elements,Xt=Ct.projectionMatrix.elements,Gt=Ot[14]/(Ot[10]-1),se=Ot[14]/(Ot[10]+1),Q=(Ot[9]+1)/Ot[5],rt=(Ot[9]-1)/Ot[5],C=(Ot[8]-1)/Ot[0],Ut=(Xt[8]+1)/Xt[0],it=Gt*C,wt=Gt*Ut,ht=lt/(-C+Ut),Ht=ht*-C;if(ot.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ht),Z.translateZ(ht),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ot[10]===-1)Z.projectionMatrix.copy(ot.projectionMatrix),Z.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const St=Gt+ht,E=se+ht,y=it-Ht,F=wt+(lt-Ht),Y=Q*se/E*St,et=rt*se/E*St;Z.projectionMatrix.makePerspective(y,F,Y,et,St,E),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ut(Z,ot){ot===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ot.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ot=Z.near,Ct=Z.far;_.texture!==null&&(_.depthNear>0&&(ot=_.depthNear),_.depthFar>0&&(Ct=_.depthFar)),M.near=D.near=A.near=ot,M.far=D.far=A.far=Ct,(P!==M.near||H!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,H=M.far),A.layers.mask=Z.layers.mask|2,D.layers.mask=Z.layers.mask|4,M.layers.mask=A.layers.mask|D.layers.mask;const lt=Z.parent,Ot=M.cameras;ut(M,lt);for(let Xt=0;Xt<Ot.length;Xt++)ut(Ot[Xt],lt);Ot.length===2?W(M,A,D):M.projectionMatrix.copy(A.projectionMatrix),Mt(Z,M,lt)};function Mt(Z,ot,Ct){Ct===null?Z.matrix.copy(ot.matrixWorld):(Z.matrix.copy(Ct.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ot.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ot.projectionMatrix),Z.projectionMatrixInverse.copy(ot.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Zs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let At=null;function Yt(Z,ot){if(h=ot.getViewerPose(l||o),g=ot,h!==null){const Ct=h.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let lt=!1;Ct.length!==M.cameras.length&&(M.cameras.length=0,lt=!0);for(let Xt=0;Xt<Ct.length;Xt++){const Gt=Ct[Xt];let se=null;if(m!==null)se=m.getViewport(Gt);else{const rt=u.getViewSubImage(d,Gt);se=rt.viewport,Xt===0&&(t.setRenderTargetTextures(S,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(S))}let Q=w[Xt];Q===void 0&&(Q=new Ke,Q.layers.enable(Xt),Q.viewport=new fe,w[Xt]=Q),Q.matrix.fromArray(Gt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Gt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(se.x,se.y,se.width,se.height),Xt===0&&(M.matrix.copy(Q.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),lt===!0&&M.cameras.push(Q)}const Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){const Xt=u.getDepthInformation(Ct[0]);Xt&&Xt.isValid&&Xt.texture&&_.init(t,Xt,s.renderState)}}for(let Ct=0;Ct<x.length;Ct++){const lt=v[Ct],Ot=x[Ct];lt!==null&&Ot!==void 0&&Ot.update(lt,ot,l||o)}At&&At(Z,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),g=null}const ae=new nu;ae.setAnimationLoop(Yt),this.setAnimationLoop=function(Z){At=Z},this.dispose=function(){}}}const Ai=new Yn,a_=new me;function c_(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Qh(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,S,x,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,v)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,S,x):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Qe&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Qe&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const S=t.get(f),x=S.envMap,v=S.envMapRotation;x&&(p.envMap.value=x,Ai.copy(v),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),p.envMapRotation.value.setFromMatrix4(a_.makeRotationFromEuler(Ai)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,S,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=x*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,S){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Qe&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const S=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function l_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,x){const v=x.program;n.uniformBlockBinding(S,v)}function l(S,x){let v=s[S.id];v===void 0&&(g(S),v=h(S),s[S.id]=v,S.addEventListener("dispose",p));const L=x.program;n.updateUBOMapping(S,L);const T=t.render.frame;r[S.id]!==T&&(d(S),r[S.id]=T)}function h(S){const x=u();S.__bindingPointIndex=x;const v=i.createBuffer(),L=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const x=s[S.id],v=S.uniforms,L=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,A=v.length;T<A;T++){const D=Array.isArray(v[T])?v[T]:[v[T]];for(let w=0,M=D.length;w<M;w++){const P=D[w];if(m(P,T,w,L)===!0){const H=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let J=0;J<O.length;J++){const $=O[J],tt=_($);typeof $=="number"||typeof $=="boolean"?(P.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,H+q,P.__data)):$.isMatrix3?(P.__data[0]=$.elements[0],P.__data[1]=$.elements[1],P.__data[2]=$.elements[2],P.__data[3]=0,P.__data[4]=$.elements[3],P.__data[5]=$.elements[4],P.__data[6]=$.elements[5],P.__data[7]=0,P.__data[8]=$.elements[6],P.__data[9]=$.elements[7],P.__data[10]=$.elements[8],P.__data[11]=0):($.toArray(P.__data,q),q+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,x,v,L){const T=S.value,A=x+"_"+v;if(L[A]===void 0)return typeof T=="number"||typeof T=="boolean"?L[A]=T:L[A]=T.clone(),!0;{const D=L[A];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return L[A]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function g(S){const x=S.uniforms;let v=0;const L=16;for(let A=0,D=x.length;A<D;A++){const w=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,P=w.length;M<P;M++){const H=w[M],O=Array.isArray(H.value)?H.value:[H.value];for(let q=0,J=O.length;q<J;q++){const $=O[q],tt=_($),W=v%L,ut=W%tt.boundary,Mt=W+ut;v+=ut,Mt!==0&&L-Mt<tt.storage&&(v+=L-Mt),H.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=tt.storage}}}const T=v%L;return T>0&&(v+=L-T),S.__size=v,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function p(S){const x=S.target;x.removeEventListener("dispose",p);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class lu{constructor(t={}){const{canvas:e=Kf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,f=null;const S=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ye,this.toneMapping=ui,this.toneMappingExposure=1;const v=this;let L=!1,T=0,A=0,D=null,w=-1,M=null;const P=new fe,H=new fe;let O=null;const q=new Nt(0);let J=0,$=e.width,tt=e.height,W=1,ut=null,Mt=null;const At=new fe(0,0,$,tt),Yt=new fe(0,0,$,tt);let ae=!1;const Z=new Ec;let ot=!1,Ct=!1;const lt=new me,Ot=new me,Xt=new R,Gt=new fe,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function rt(){return D===null?W:1}let C=n;function Ut(b,N){return e.getContext(b,N)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pc}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),C===null){const N="webgl2";if(C=Ut(N,b),C===null)throw Ut(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let it,wt,ht,Ht,St,E,y,F,Y,et,j,Pt,dt,bt,ee,st,Et,Vt,Wt,Tt,ne,Kt,de,U;function mt(){it=new mm(C),it.init(),Kt=new t_(C,it),wt=new lm(C,it,t,Kt),ht=new Jg(C,it),wt.reverseDepthBuffer&&d&&ht.buffers.depth.setReversed(!0),Ht=new vm(C),St=new kg,E=new Qg(C,it,ht,St,wt,Kt,Ht),y=new um(v),F=new pm(v),Y=new Ed(C),de=new am(C,Y),et=new gm(C,Y,Ht,de),j=new Mm(C,et,Y,Ht),Wt=new xm(C,wt,E),st=new hm(St),Pt=new Ng(v,y,F,it,wt,de,st),dt=new c_(v,St),bt=new Og,ee=new Wg(it),Vt=new om(v,y,F,ht,j,m,c),Et=new jg(v,j,wt),U=new l_(C,Ht,wt,ht),Tt=new cm(C,it,Ht),ne=new _m(C,it,Ht),Ht.programs=Pt.programs,v.capabilities=wt,v.extensions=it,v.properties=St,v.renderLists=bt,v.shadowMap=Et,v.state=ht,v.info=Ht}mt();const X=new o_(v,C);this.xr=X,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const b=it.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=it.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize($,tt,!1))},this.getSize=function(b){return b.set($,tt)},this.setSize=function(b,N,B=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,tt=N,e.width=Math.floor(b*W),e.height=Math.floor(N*W),B===!0&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set($*W,tt*W).floor()},this.setDrawingBufferSize=function(b,N,B){$=b,tt=N,W=B,e.width=Math.floor(b*B),e.height=Math.floor(N*B),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(At)},this.setViewport=function(b,N,B,z){b.isVector4?At.set(b.x,b.y,b.z,b.w):At.set(b,N,B,z),ht.viewport(P.copy(At).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(Yt)},this.setScissor=function(b,N,B,z){b.isVector4?Yt.set(b.x,b.y,b.z,b.w):Yt.set(b,N,B,z),ht.scissor(H.copy(Yt).multiplyScalar(W).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(b){ht.setScissorTest(ae=b)},this.setOpaqueSort=function(b){ut=b},this.setTransparentSort=function(b){Mt=b},this.getClearColor=function(b){return b.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(b=!0,N=!0,B=!0){let z=0;if(b){let k=!1;if(D!==null){const at=D.texture.format;k=at===yc||at===Mc||at===xc}if(k){const at=D.texture.type,_t=at===qn||at===Oi||at===js||at===xs||at===gc||at===_c,Dt=Vt.getClearColor(),Lt=Vt.getClearAlpha(),$t=Dt.r,Jt=Dt.g,It=Dt.b;_t?(g[0]=$t,g[1]=Jt,g[2]=It,g[3]=Lt,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=$t,_[1]=Jt,_[2]=It,_[3]=Lt,C.clearBufferiv(C.COLOR,0,_))}else z|=C.COLOR_BUFFER_BIT}N&&(z|=C.DEPTH_BUFFER_BIT),B&&(z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),bt.dispose(),ee.dispose(),St.dispose(),y.dispose(),F.dispose(),j.dispose(),de.dispose(),U.dispose(),Pt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Xc),X.removeEventListener("sessionend",$c),yi.stop()};function K(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const b=Ht.autoReset,N=Et.enabled,B=Et.autoUpdate,z=Et.needsUpdate,k=Et.type;mt(),Ht.autoReset=b,Et.enabled=N,Et.autoUpdate=B,Et.needsUpdate=z,Et.type=k}function gt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Zt(b){const N=b.target;N.removeEventListener("dispose",Zt),be(N)}function be(b){ze(b),St.remove(b)}function ze(b){const N=St.get(b).programs;N!==void 0&&(N.forEach(function(B){Pt.releaseProgram(B)}),b.isShaderMaterial&&Pt.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,B,z,k,at){N===null&&(N=se);const _t=k.isMesh&&k.matrixWorld.determinant()<0,Dt=$u(b,N,B,z,k);ht.setMaterial(z,_t);let Lt=B.index,$t=1;if(z.wireframe===!0){if(Lt=et.getWireframeAttribute(B),Lt===void 0)return;$t=2}const Jt=B.drawRange,It=B.attributes.position;let oe=Jt.start*$t,pe=(Jt.start+Jt.count)*$t;at!==null&&(oe=Math.max(oe,at.start*$t),pe=Math.min(pe,(at.start+at.count)*$t)),Lt!==null?(oe=Math.max(oe,0),pe=Math.min(pe,Lt.count)):It!=null&&(oe=Math.max(oe,0),pe=Math.min(pe,It.count));const ge=pe-oe;if(ge<0||ge===1/0)return;de.setup(k,z,Dt,B,Lt);let Ze,ce=Tt;if(Lt!==null&&(Ze=Y.get(Lt),ce=ne,ce.setIndex(Ze)),k.isMesh)z.wireframe===!0?(ht.setLineWidth(z.wireframeLinewidth*rt()),ce.setMode(C.LINES)):ce.setMode(C.TRIANGLES);else if(k.isLine){let kt=z.linewidth;kt===void 0&&(kt=1),ht.setLineWidth(kt*rt()),k.isLineSegments?ce.setMode(C.LINES):k.isLineLoop?ce.setMode(C.LINE_LOOP):ce.setMode(C.LINE_STRIP)}else k.isPoints?ce.setMode(C.POINTS):k.isSprite&&ce.setMode(C.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ce.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))ce.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const kt=k._multiDrawStarts,kn=k._multiDrawCounts,le=k._multiDrawCount,vn=Lt?Y.get(Lt).bytesPerElement:1,Vi=St.get(z).currentProgram.getUniforms();for(let nn=0;nn<le;nn++)Vi.setValue(C,"_gl_DrawID",nn),ce.render(kt[nn]/vn,kn[nn])}else if(k.isInstancedMesh)ce.renderInstances(oe,ge,k.count);else if(B.isInstancedBufferGeometry){const kt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,kn=Math.min(B.instanceCount,kt);ce.renderInstances(oe,ge,kn)}else ce.render(oe,ge)};function he(b,N,B){b.transparent===!0&&b.side===Ee&&b.forceSinglePass===!1?(b.side=Qe,b.needsUpdate=!0,fr(b,N,B),b.side=pi,b.needsUpdate=!0,fr(b,N,B),b.side=Ee):fr(b,N,B)}this.compile=function(b,N,B=null){B===null&&(B=b),f=ee.get(B),f.init(N),x.push(f),B.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),b!==B&&b.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights();const z=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const at=k.material;if(at)if(Array.isArray(at))for(let _t=0;_t<at.length;_t++){const Dt=at[_t];he(Dt,B,k),z.add(Dt)}else he(at,B,k),z.add(at)}),x.pop(),f=null,z},this.compileAsync=function(b,N,B=null){const z=this.compile(b,N,B);return new Promise(k=>{function at(){if(z.forEach(function(_t){St.get(_t).currentProgram.isReady()&&z.delete(_t)}),z.size===0){k(b);return}setTimeout(at,10)}it.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let _n=null;function Nn(b){_n&&_n(b)}function Xc(){yi.stop()}function $c(){yi.start()}const yi=new nu;yi.setAnimationLoop(Nn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(b){_n=b,X.setAnimationLoop(b),b===null?yi.stop():yi.start()},X.addEventListener("sessionstart",Xc),X.addEventListener("sessionend",$c),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,N,D),f=ee.get(b,x.length),f.init(N),x.push(f),Ot.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z.setFromProjectionMatrix(Ot),Ct=this.localClippingEnabled,ot=st.init(this.clippingPlanes,Ct),p=bt.get(b,S.length),p.init(),S.push(p),X.enabled===!0&&X.isPresenting===!0){const at=v.xr.getDepthSensingMesh();at!==null&&Ao(at,N,-1/0,v.sortObjects)}Ao(b,N,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(ut,Mt),Q=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Q&&Vt.addToRenderList(p,b),this.info.render.frame++,ot===!0&&st.beginShadows();const B=f.state.shadowsArray;Et.render(B,b,N),ot===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=p.opaque,k=p.transmissive;if(f.setupLights(),N.isArrayCamera){const at=N.cameras;if(k.length>0)for(let _t=0,Dt=at.length;_t<Dt;_t++){const Lt=at[_t];Yc(z,k,b,Lt)}Q&&Vt.render(b);for(let _t=0,Dt=at.length;_t<Dt;_t++){const Lt=at[_t];qc(p,b,Lt,Lt.viewport)}}else k.length>0&&Yc(z,k,b,N),Q&&Vt.render(b),qc(p,b,N);D!==null&&(E.updateMultisampleRenderTarget(D),E.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(v,b,N),de.resetDefaultState(),w=-1,M=null,x.pop(),x.length>0?(f=x[x.length-1],ot===!0&&st.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?p=S[S.length-1]:p=null};function Ao(b,N,B,z){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Z.intersectsSprite(b)){z&&Gt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ot);const _t=j.update(b),Dt=b.material;Dt.visible&&p.push(b,_t,Dt,B,Gt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Z.intersectsObject(b))){const _t=j.update(b),Dt=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Gt.copy(b.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Gt.copy(_t.boundingSphere.center)),Gt.applyMatrix4(b.matrixWorld).applyMatrix4(Ot)),Array.isArray(Dt)){const Lt=_t.groups;for(let $t=0,Jt=Lt.length;$t<Jt;$t++){const It=Lt[$t],oe=Dt[It.materialIndex];oe&&oe.visible&&p.push(b,_t,oe,B,Gt.z,It)}}else Dt.visible&&p.push(b,_t,Dt,B,Gt.z,null)}}const at=b.children;for(let _t=0,Dt=at.length;_t<Dt;_t++)Ao(at[_t],N,B,z)}function qc(b,N,B,z){const k=b.opaque,at=b.transmissive,_t=b.transparent;f.setupLightsView(B),ot===!0&&st.setGlobalState(v.clippingPlanes,B),z&&ht.viewport(P.copy(z)),k.length>0&&ur(k,N,B),at.length>0&&ur(at,N,B),_t.length>0&&ur(_t,N,B),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Yc(b,N,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new Bi(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?ir:qn,minFilter:Ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const at=f.state.transmissionRenderTarget[z.id],_t=z.viewport||P;at.setSize(_t.z,_t.w);const Dt=v.getRenderTarget();v.setRenderTarget(at),v.getClearColor(q),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),Q&&Vt.render(B);const Lt=v.toneMapping;v.toneMapping=ui;const $t=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),ot===!0&&st.setGlobalState(v.clippingPlanes,z),ur(b,B,z),E.updateMultisampleRenderTarget(at),E.updateRenderTargetMipmap(at),it.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let It=0,oe=N.length;It<oe;It++){const pe=N[It],ge=pe.object,Ze=pe.geometry,ce=pe.material,kt=pe.group;if(ce.side===Ee&&ge.layers.test(z.layers)){const kn=ce.side;ce.side=Qe,ce.needsUpdate=!0,jc(ge,B,z,Ze,ce,kt),ce.side=kn,ce.needsUpdate=!0,Jt=!0}}Jt===!0&&(E.updateMultisampleRenderTarget(at),E.updateRenderTargetMipmap(at))}v.setRenderTarget(Dt),v.setClearColor(q,J),$t!==void 0&&(z.viewport=$t),v.toneMapping=Lt}function ur(b,N,B){const z=N.isScene===!0?N.overrideMaterial:null;for(let k=0,at=b.length;k<at;k++){const _t=b[k],Dt=_t.object,Lt=_t.geometry,$t=z===null?_t.material:z,Jt=_t.group;Dt.layers.test(B.layers)&&jc(Dt,N,B,Lt,$t,Jt)}}function jc(b,N,B,z,k,at){b.onBeforeRender(v,N,B,z,k,at),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(v,N,B,z,b,at),k.transparent===!0&&k.side===Ee&&k.forceSinglePass===!1?(k.side=Qe,k.needsUpdate=!0,v.renderBufferDirect(B,N,z,k,b,at),k.side=pi,k.needsUpdate=!0,v.renderBufferDirect(B,N,z,k,b,at),k.side=Ee):v.renderBufferDirect(B,N,z,k,b,at),b.onAfterRender(v,N,B,z,k,at)}function fr(b,N,B){N.isScene!==!0&&(N=se);const z=St.get(b),k=f.state.lights,at=f.state.shadowsArray,_t=k.state.version,Dt=Pt.getParameters(b,k.state,at,N,B),Lt=Pt.getProgramCacheKey(Dt);let $t=z.programs;z.environment=b.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(b.isMeshStandardMaterial?F:y).get(b.envMap||z.environment),z.envMapRotation=z.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,$t===void 0&&(b.addEventListener("dispose",Zt),$t=new Map,z.programs=$t);let Jt=$t.get(Lt);if(Jt!==void 0){if(z.currentProgram===Jt&&z.lightsStateVersion===_t)return Jc(b,Dt),Jt}else Dt.uniforms=Pt.getUniforms(b),b.onBeforeCompile(Dt,v),Jt=Pt.acquireProgram(Dt,Lt),$t.set(Lt,Jt),z.uniforms=Dt.uniforms;const It=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(It.clippingPlanes=st.uniform),Jc(b,Dt),z.needsLights=Yu(b),z.lightsStateVersion=_t,z.needsLights&&(It.ambientLightColor.value=k.state.ambient,It.lightProbe.value=k.state.probe,It.directionalLights.value=k.state.directional,It.directionalLightShadows.value=k.state.directionalShadow,It.spotLights.value=k.state.spot,It.spotLightShadows.value=k.state.spotShadow,It.rectAreaLights.value=k.state.rectArea,It.ltc_1.value=k.state.rectAreaLTC1,It.ltc_2.value=k.state.rectAreaLTC2,It.pointLights.value=k.state.point,It.pointLightShadows.value=k.state.pointShadow,It.hemisphereLights.value=k.state.hemi,It.directionalShadowMap.value=k.state.directionalShadowMap,It.directionalShadowMatrix.value=k.state.directionalShadowMatrix,It.spotShadowMap.value=k.state.spotShadowMap,It.spotLightMatrix.value=k.state.spotLightMatrix,It.spotLightMap.value=k.state.spotLightMap,It.pointShadowMap.value=k.state.pointShadowMap,It.pointShadowMatrix.value=k.state.pointShadowMatrix),z.currentProgram=Jt,z.uniformsList=null,Jt}function Zc(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=Yr.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Jc(b,N){const B=St.get(b);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function $u(b,N,B,z,k){N.isScene!==!0&&(N=se),E.resetTextureUnits();const at=N.fog,_t=z.isMeshStandardMaterial?N.environment:null,Dt=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Es,Lt=(z.isMeshStandardMaterial?F:y).get(z.envMap||_t),$t=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Jt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),It=!!B.morphAttributes.position,oe=!!B.morphAttributes.normal,pe=!!B.morphAttributes.color;let ge=ui;z.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ge=v.toneMapping);const Ze=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ce=Ze!==void 0?Ze.length:0,kt=St.get(z),kn=f.state.lights;if(ot===!0&&(Ct===!0||b!==M)){const an=b===M&&z.id===w;st.setState(z,b,an)}let le=!1;z.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==kn.state.version||kt.outputColorSpace!==Dt||k.isBatchedMesh&&kt.batching===!1||!k.isBatchedMesh&&kt.batching===!0||k.isBatchedMesh&&kt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&kt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&kt.instancing===!1||!k.isInstancedMesh&&kt.instancing===!0||k.isSkinnedMesh&&kt.skinning===!1||!k.isSkinnedMesh&&kt.skinning===!0||k.isInstancedMesh&&kt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&kt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&kt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&kt.instancingMorph===!1&&k.morphTexture!==null||kt.envMap!==Lt||z.fog===!0&&kt.fog!==at||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==st.numPlanes||kt.numIntersection!==st.numIntersection)||kt.vertexAlphas!==$t||kt.vertexTangents!==Jt||kt.morphTargets!==It||kt.morphNormals!==oe||kt.morphColors!==pe||kt.toneMapping!==ge||kt.morphTargetsCount!==ce)&&(le=!0):(le=!0,kt.__version=z.version);let vn=kt.currentProgram;le===!0&&(vn=fr(z,N,k));let Vi=!1,nn=!1,Ds=!1;const _e=vn.getUniforms(),Tn=kt.uniforms;if(ht.useProgram(vn.program)&&(Vi=!0,nn=!0,Ds=!0),z.id!==w&&(w=z.id,nn=!0),Vi||M!==b){ht.buffers.depth.getReversed()?(lt.copy(b.projectionMatrix),td(lt),ed(lt),_e.setValue(C,"projectionMatrix",lt)):_e.setValue(C,"projectionMatrix",b.projectionMatrix),_e.setValue(C,"viewMatrix",b.matrixWorldInverse);const Kn=_e.map.cameraPosition;Kn!==void 0&&Kn.setValue(C,Xt.setFromMatrixPosition(b.matrixWorld)),wt.logarithmicDepthBuffer&&_e.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&_e.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,nn=!0,Ds=!0)}if(k.isSkinnedMesh){_e.setOptional(C,k,"bindMatrix"),_e.setOptional(C,k,"bindMatrixInverse");const an=k.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),_e.setValue(C,"boneTexture",an.boneTexture,E))}k.isBatchedMesh&&(_e.setOptional(C,k,"batchingTexture"),_e.setValue(C,"batchingTexture",k._matricesTexture,E),_e.setOptional(C,k,"batchingIdTexture"),_e.setValue(C,"batchingIdTexture",k._indirectTexture,E),_e.setOptional(C,k,"batchingColorTexture"),k._colorsTexture!==null&&_e.setValue(C,"batchingColorTexture",k._colorsTexture,E));const Ls=B.morphAttributes;if((Ls.position!==void 0||Ls.normal!==void 0||Ls.color!==void 0)&&Wt.update(k,B,vn),(nn||kt.receiveShadow!==k.receiveShadow)&&(kt.receiveShadow=k.receiveShadow,_e.setValue(C,"receiveShadow",k.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Tn.envMap.value=Lt,Tn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&N.environment!==null&&(Tn.envMapIntensity.value=N.environmentIntensity),nn&&(_e.setValue(C,"toneMappingExposure",v.toneMappingExposure),kt.needsLights&&qu(Tn,Ds),at&&z.fog===!0&&dt.refreshFogUniforms(Tn,at),dt.refreshMaterialUniforms(Tn,z,W,tt,f.state.transmissionRenderTarget[b.id]),Yr.upload(C,Zc(kt),Tn,E)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Yr.upload(C,Zc(kt),Tn,E),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&_e.setValue(C,"center",k.center),_e.setValue(C,"modelViewMatrix",k.modelViewMatrix),_e.setValue(C,"normalMatrix",k.normalMatrix),_e.setValue(C,"modelMatrix",k.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const an=z.uniformsGroups;for(let Kn=0,Qn=an.length;Kn<Qn;Kn++){const Kc=an[Kn];U.update(Kc,vn),U.bind(Kc,vn)}}return vn}function qu(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Yu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,N,B){St.get(b.texture).__webglTexture=N,St.get(b.depthTexture).__webglTexture=B;const z=St.get(b);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){const B=St.get(b);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,B=0){D=b,T=N,A=B;let z=!0,k=null,at=!1,_t=!1;if(b){const Lt=St.get(b);if(Lt.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(C.FRAMEBUFFER,null),z=!1;else if(Lt.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(Lt.__hasExternalTextures)E.rebindTextures(b,St.get(b.texture).__webglTexture,St.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const It=b.depthTexture;if(Lt.__boundDepthTexture!==It){if(It!==null&&St.has(It)&&(b.width!==It.image.width||b.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}const $t=b.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(_t=!0);const Jt=St.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Jt[N])?k=Jt[N][B]:k=Jt[N],at=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?k=St.get(b).__webglMultisampledFramebuffer:Array.isArray(Jt)?k=Jt[B]:k=Jt,P.copy(b.viewport),H.copy(b.scissor),O=b.scissorTest}else P.copy(At).multiplyScalar(W).floor(),H.copy(Yt).multiplyScalar(W).floor(),O=ae;if(ht.bindFramebuffer(C.FRAMEBUFFER,k)&&z&&ht.drawBuffers(b,k),ht.viewport(P),ht.scissor(H),ht.setScissorTest(O),at){const Lt=St.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,Lt.__webglTexture,B)}else if(_t){const Lt=St.get(b.texture),$t=N||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Lt.__webglTexture,B||0,$t)}w=-1},this.readRenderTargetPixels=function(b,N,B,z,k,at,_t){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=St.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(Dt=Dt[_t]),Dt){ht.bindFramebuffer(C.FRAMEBUFFER,Dt);try{const Lt=b.texture,$t=Lt.format,Jt=Lt.type;if(!wt.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-z&&B>=0&&B<=b.height-k&&C.readPixels(N,B,z,k,Kt.convert($t),Kt.convert(Jt),at)}finally{const Lt=D!==null?St.get(D).__webglFramebuffer:null;ht.bindFramebuffer(C.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(b,N,B,z,k,at,_t){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=St.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(Dt=Dt[_t]),Dt){const Lt=b.texture,$t=Lt.format,Jt=Lt.type;if(!wt.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-z&&B>=0&&B<=b.height-k){ht.bindFramebuffer(C.FRAMEBUFFER,Dt);const It=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,It),C.bufferData(C.PIXEL_PACK_BUFFER,at.byteLength,C.STREAM_READ),C.readPixels(N,B,z,k,Kt.convert($t),Kt.convert(Jt),0);const oe=D!==null?St.get(D).__webglFramebuffer:null;ht.bindFramebuffer(C.FRAMEBUFFER,oe);const pe=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Qf(C,pe,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,It),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,at),C.deleteBuffer(It),C.deleteSync(pe),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,N=null,B=0){b.isTexture!==!0&&(Vs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);const z=Math.pow(2,-B),k=Math.floor(b.image.width*z),at=Math.floor(b.image.height*z),_t=N!==null?N.x:0,Dt=N!==null?N.y:0;E.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,_t,Dt,k,at),ht.unbindTexture()},this.copyTextureToTexture=function(b,N,B=null,z=null,k=0){b.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,b=arguments[1],N=arguments[2],k=arguments[3]||0,B=null);let at,_t,Dt,Lt,$t,Jt,It,oe,pe;const ge=b.isCompressedTexture?b.mipmaps[k]:b.image;B!==null?(at=B.max.x-B.min.x,_t=B.max.y-B.min.y,Dt=B.isBox3?B.max.z-B.min.z:1,Lt=B.min.x,$t=B.min.y,Jt=B.isBox3?B.min.z:0):(at=ge.width,_t=ge.height,Dt=ge.depth||1,Lt=0,$t=0,Jt=0),z!==null?(It=z.x,oe=z.y,pe=z.z):(It=0,oe=0,pe=0);const Ze=Kt.convert(N.format),ce=Kt.convert(N.type);let kt;N.isData3DTexture?(E.setTexture3D(N,0),kt=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(E.setTexture2DArray(N,0),kt=C.TEXTURE_2D_ARRAY):(E.setTexture2D(N,0),kt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const kn=C.getParameter(C.UNPACK_ROW_LENGTH),le=C.getParameter(C.UNPACK_IMAGE_HEIGHT),vn=C.getParameter(C.UNPACK_SKIP_PIXELS),Vi=C.getParameter(C.UNPACK_SKIP_ROWS),nn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ge.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ge.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Lt),C.pixelStorei(C.UNPACK_SKIP_ROWS,$t),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Jt);const Ds=b.isDataArrayTexture||b.isData3DTexture,_e=N.isDataArrayTexture||N.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Tn=St.get(b),Ls=St.get(N),an=St.get(Tn.__renderTarget),Kn=St.get(Ls.__renderTarget);ht.bindFramebuffer(C.READ_FRAMEBUFFER,an.__webglFramebuffer),ht.bindFramebuffer(C.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let Qn=0;Qn<Dt;Qn++)Ds&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,St.get(b).__webglTexture,k,Jt+Qn),b.isDepthTexture?(_e&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,St.get(N).__webglTexture,k,pe+Qn),C.blitFramebuffer(Lt,$t,at,_t,It,oe,at,_t,C.DEPTH_BUFFER_BIT,C.NEAREST)):_e?C.copyTexSubImage3D(kt,k,It,oe,pe+Qn,Lt,$t,at,_t):C.copyTexSubImage2D(kt,k,It,oe,pe+Qn,Lt,$t,at,_t);ht.bindFramebuffer(C.READ_FRAMEBUFFER,null),ht.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else _e?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(kt,k,It,oe,pe,at,_t,Dt,Ze,ce,ge.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(kt,k,It,oe,pe,at,_t,Dt,Ze,ge.data):C.texSubImage3D(kt,k,It,oe,pe,at,_t,Dt,Ze,ce,ge):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,k,It,oe,at,_t,Ze,ce,ge.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,k,It,oe,ge.width,ge.height,Ze,ge.data):C.texSubImage2D(C.TEXTURE_2D,k,It,oe,at,_t,Ze,ce,ge);C.pixelStorei(C.UNPACK_ROW_LENGTH,kn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,le),C.pixelStorei(C.UNPACK_SKIP_PIXELS,vn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Vi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,nn),k===0&&N.generateMipmaps&&C.generateMipmap(kt),ht.unbindTexture()},this.copyTextureToTexture3D=function(b,N,B=null,z=null,k=0){return b.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,b=arguments[2],N=arguments[3],k=arguments[4]||0),Vs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,N,B,z,k)},this.initRenderTarget=function(b){St.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),ht.unbindTexture()},this.resetState=function(){T=0,A=0,D=null,ht.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}class hu extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class h_ extends Xe{constructor(t=null,e=1,n=1,s,r,o,a,c,l=tn,h=tn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uu extends Rs{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const to=new R,eo=new R,Kl=new me,Fs=new bc,Ur=new or,na=new R,Ql=new R;class u_ extends Ue{constructor(t=new De,e=new uu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)to.fromBufferAttribute(e,s-1),eo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=to.distanceTo(eo);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(s),Ur.radius+=r,t.ray.intersectsSphere(Ur)===!1)return;Kl.copy(s).invert(),Fs.copy(t.ray).applyMatrix4(Kl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=l){const f=h.getX(_),S=h.getX(_+1),x=Nr(this,t,Fs,c,f,S);x&&e.push(x)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(m),f=Nr(this,t,Fs,c,_,p);f&&e.push(f)}}else{const m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=l){const f=Nr(this,t,Fs,c,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=Nr(this,t,Fs,c,g-1,m);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Nr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(to.fromBufferAttribute(o,s),eo.fromBufferAttribute(o,r),e.distanceSqToSegment(to,eo,na,Ql)>n)return;na.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(na);if(!(c<t.near||c>t.far))return{distance:c,point:Ql.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const th=new R,eh=new R;class f_ extends u_{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)th.fromBufferAttribute(e,s),eh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+th.distanceTo(eh);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fu extends Xe{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,m=(o-h)/d;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new nt:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,s=[],r=[],o=[],a=new R,c=new me;for(let m=0;m<=t;m++){const g=m/t;s[m]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ie(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(Ie(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ac extends Ln{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new nt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,m=l-this.aY;c=d*h-m*u+this.aX,l=d*u+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class d_ extends Ac{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Rc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,m*=h,s(o,a,d,m)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const kr=new R,ia=new Rc,sa=new Rc,ra=new Rc;class Cc extends Ln{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(kr.subVectors(s[0],s[1]).add(s[0]),l=kr);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(kr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=kr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),ia.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,p),sa.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,p),ra.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(ia.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),sa.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ra.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(ia.calc(c),sa.calc(c),ra.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function nh(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function p_(i,t){const e=1-i;return e*e*t}function m_(i,t){return 2*(1-i)*i*t}function g_(i,t){return i*i*t}function qs(i,t,e,n){return p_(i,t)+m_(i,e)+g_(i,n)}function __(i,t){const e=1-i;return e*e*e*t}function v_(i,t){const e=1-i;return 3*e*e*i*t}function x_(i,t){return 3*(1-i)*i*i*t}function M_(i,t){return i*i*i*t}function Ys(i,t,e,n,s){return __(i,t)+v_(i,e)+x_(i,n)+M_(i,s)}class du extends Ln{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ys(t,s.x,r.x,o.x,a.x),Ys(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class y_ extends Ln{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ys(t,s.x,r.x,o.x,a.x),Ys(t,s.y,r.y,o.y,a.y),Ys(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class pu extends Ln{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class S_ extends Ln{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mu extends Ln{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(qs(t,s.x,r.x,o.x),qs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ho extends Ln{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(qs(t,s.x,r.x,o.x),qs(t,s.y,r.y,o.y),qs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gu extends Ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(nh(a,c.x,l.x,h.x,u.x),nh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new nt().fromArray(s))}return this}}var no=Object.freeze({__proto__:null,ArcCurve:d_,CatmullRomCurve3:Cc,CubicBezierCurve:du,CubicBezierCurve3:y_,EllipseCurve:Ac,LineCurve:pu,LineCurve3:S_,QuadraticBezierCurve:mu,QuadraticBezierCurve3:ho,SplineCurve:gu});class b_ extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new no[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new no[s.type]().fromJSON(s))}return this}}class Js extends b_{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new pu(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new mu(this.currentPoint.clone(),new nt(t,e),new nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new du(this.currentPoint.clone(),new nt(t,e),new nt(n,s),new nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new gu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Ac(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class en extends De{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ie(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new R,d=new nt,m=new R,g=new R,_=new R;let p=0,f=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:p=t[S+1].x-t[S].x,f=t[S+1].y-t[S].y,m.x=f*1,m.y=-p,m.z=f*0,_.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:p=t[S+1].x-t[S].x,f=t[S+1].y-t[S].y,m.x=f*1,m.y=-p,m.z=f*0,g.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),c.push(m.x,m.y,m.z),_.copy(g)}for(let S=0;S<=e;S++){const x=n+S*h*s,v=Math.sin(x),L=Math.cos(x);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*v,u.y=t[T].y,u.z=t[T].x*L,o.push(u.x,u.y,u.z),d.x=S/e,d.y=T/(t.length-1),a.push(d.x,d.y);const A=c[3*T+0]*v,D=c[3*T+1],w=c[3*T+0]*L;l.push(A,D,w)}}for(let S=0;S<e;S++)for(let x=0;x<t.length-1;x++){const v=x+S*t.length,L=v,T=v+t.length,A=v+t.length+1,D=v+1;r.push(L,T,D),r.push(A,D,T)}this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("uv",new te(a,2)),this.setAttribute("normal",new te(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new en(t.points,t.segments,t.phiStart,t.phiLength)}}class ar extends en{constructor(t=1,e=1,n=4,s=8){const r=new Js;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new ar(t.radius,t.length,t.capSegments,t.radialSegments)}}class Zn extends De{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new R,h=new nt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const m=n+u/e*s;l.x=t*Math.cos(m),l.y=t*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class zt extends De{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],m=[];let g=0;const _=[],p=n/2;let f=0;S(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(m,2));function S(){const v=new R,L=new R;let T=0;const A=(e-t)/n;for(let D=0;D<=r;D++){const w=[],M=D/r,P=M*(e-t)+t;for(let H=0;H<=s;H++){const O=H/s,q=O*c+a,J=Math.sin(q),$=Math.cos(q);L.x=P*J,L.y=-M*n+p,L.z=P*$,u.push(L.x,L.y,L.z),v.set(J,A,$).normalize(),d.push(v.x,v.y,v.z),m.push(O,1-M),w.push(g++)}_.push(w)}for(let D=0;D<s;D++)for(let w=0;w<r;w++){const M=_[w][D],P=_[w+1][D],H=_[w+1][D+1],O=_[w][D+1];(t>0||w!==0)&&(h.push(M,P,O),T+=3),(e>0||w!==r-1)&&(h.push(P,H,O),T+=3)}l.addGroup(f,T,0),f+=T}function x(v){const L=g,T=new nt,A=new R;let D=0;const w=v===!0?t:e,M=v===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,p*M,0),d.push(0,M,0),m.push(.5,.5),g++;const P=g;for(let H=0;H<=s;H++){const q=H/s*c+a,J=Math.cos(q),$=Math.sin(q);A.x=w*$,A.y=p*M,A.z=w*J,u.push(A.x,A.y,A.z),d.push(0,M,0),T.x=J*.5+.5,T.y=$*.5*M+.5,m.push(T.x,T.y),g++}for(let H=0;H<s;H++){const O=L+H,q=P+H;v===!0?h.push(q,q+1,O):h.push(q+1,q,O),D+=3}l.addGroup(f,D,v===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class gi extends zt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new gi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class cr extends De{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const x=new R,v=new R,L=new R;for(let T=0;T<e.length;T+=3)m(e[T+0],x),m(e[T+1],v),m(e[T+2],L),c(x,v,L,S)}function c(S,x,v,L){const T=L+1,A=[];for(let D=0;D<=T;D++){A[D]=[];const w=S.clone().lerp(v,D/T),M=x.clone().lerp(v,D/T),P=T-D;for(let H=0;H<=P;H++)H===0&&D===T?A[D][H]=w:A[D][H]=w.clone().lerp(M,H/P)}for(let D=0;D<T;D++)for(let w=0;w<2*(T-D)-1;w++){const M=Math.floor(w/2);w%2===0?(d(A[D][M+1]),d(A[D+1][M]),d(A[D][M])):(d(A[D][M+1]),d(A[D+1][M+1]),d(A[D+1][M]))}}function l(S){const x=new R;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(S),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){const S=new R;for(let x=0;x<r.length;x+=3){S.x=r[x+0],S.y=r[x+1],S.z=r[x+2];const v=p(S)/2/Math.PI+.5,L=f(S)/Math.PI+.5;o.push(v,1-L)}g(),u()}function u(){for(let S=0;S<o.length;S+=6){const x=o[S+0],v=o[S+2],L=o[S+4],T=Math.max(x,v,L),A=Math.min(x,v,L);T>.9&&A<.1&&(x<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),L<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function m(S,x){const v=S*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){const S=new R,x=new R,v=new R,L=new R,T=new nt,A=new nt,D=new nt;for(let w=0,M=0;w<r.length;w+=9,M+=6){S.set(r[w+0],r[w+1],r[w+2]),x.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),T.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),D.set(o[M+4],o[M+5]),L.copy(S).add(x).add(v).divideScalar(3);const P=p(L);_(T,M+0,S,P),_(A,M+2,x,P),_(D,M+4,v,P)}}function _(S,x,v,L){L<0&&S.x===1&&(o[x]=S.x-1),v.x===0&&v.z===0&&(o[x]=L/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cr(t.vertices,t.indices,t.radius,t.details)}}class Pc extends cr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Pc(t.radius,t.detail)}}const Fr=new R,Or=new R,oa=new R,Br=new fn;class w_ extends De{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(fs*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},m=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:p,c:f}=Br;if(_.fromBufferAttribute(a,l[0]),p.fromBufferAttribute(a,l[1]),f.fromBufferAttribute(a,l[2]),Br.getNormal(oa),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){const x=(S+1)%3,v=u[S],L=u[x],T=Br[h[S]],A=Br[h[x]],D=`${v}_${L}`,w=`${L}_${v}`;w in d&&d[w]?(oa.dot(d[w].normal)<=r&&(m.push(T.x,T.y,T.z),m.push(A.x,A.y,A.z)),d[w]=null):D in d||(d[D]={index0:l[S],index1:l[x],normal:oa.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:p}=d[g];Fr.fromBufferAttribute(a,_),Or.fromBufferAttribute(a,p),m.push(Fr.x,Fr.y,Fr.z),m.push(Or.x,Or.y,Or.z)}this.setAttribute("position",new te(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class jn extends Js{constructor(t){super(t),this.uuid=Hi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Js().fromJSON(s))}return this}}const E_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=_u(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,m;if(n&&(r=P_(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);m=Math.max(l-a,h-c),m=m!==0?32767/m:0}return Ks(r,o,e,a,c,m,0),o}};function _u(i,t,e,n,s){let r,o;if(s===H_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=ih(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=ih(r,i[r],i[r+1],o);return o&&uo(o,o.next)&&(tr(o),o=o.next),o}function zi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(uo(e,e.next)||Se(e.prev,e,e.next)===0)){if(tr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ks(i,t,e,n,s,r,o){if(!i)return;!o&&r&&N_(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?A_(i,n,s,r):T_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),tr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=R_(zi(i),t,e),Ks(i,t,e,n,s,r,2)):o===2&&C_(i,t,e,n,s,r):Ks(zi(i),t,e,n,s,r,1);break}}}function T_(i){const t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,m=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&ls(s,a,r,c,o,l,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function A_(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Se(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,m=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,p=h>u?h>d?h:d:u>d?u:d,f=oc(m,g,t,e,n),S=oc(_,p,t,e,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=f&&v&&v.z<=S;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&ls(a,h,c,u,l,d,x.x,x.y)&&Se(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=m&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&ls(a,h,c,u,l,d,v.x,v.y)&&Se(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=f;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&ls(a,h,c,u,l,d,x.x,x.y)&&Se(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=S;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&ls(a,h,c,u,l,d,v.x,v.y)&&Se(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function R_(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!uo(s,r)&&vu(s,n,n.next,r)&&Qs(s,r)&&Qs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),tr(n),tr(n.next),n=i=r),n=n.next}while(n!==i);return zi(n)}function C_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&O_(o,a)){let c=xu(o,a);o=zi(o,o.next),c=zi(c,c.next),Ks(o,t,e,n,s,r,0),Ks(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function P_(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=_u(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(F_(l));for(s.sort(D_),r=0;r<s.length;r++)e=L_(s[r],e);return e}function D_(i,t){return i.x-t.x}function L_(i,t){const e=I_(i,t);if(!e)return t;const n=xu(e,i);return zi(n,n.next),zi(e,e.next)}function I_(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ls(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Qs(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&U_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function U_(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function N_(i,t,e,n){let s=i;do s.z===0&&(s.z=oc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,k_(s)}function k_(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function oc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function F_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ls(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function O_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!B_(i,t)&&(Qs(i,t)&&Qs(t,i)&&z_(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||uo(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function uo(i,t){return i.x===t.x&&i.y===t.y}function vu(i,t,e,n){const s=Hr(Se(i,t,e)),r=Hr(Se(i,t,n)),o=Hr(Se(e,n,i)),a=Hr(Se(e,n,t));return!!(s!==r&&o!==a||s===0&&zr(i,e,t)||r===0&&zr(i,n,t)||o===0&&zr(e,i,n)||a===0&&zr(e,t,n))}function zr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Hr(i){return i>0?1:i<0?-1:0}function B_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&vu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Qs(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function z_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function xu(i,t){const e=new ac(i.i,i.x,i.y),n=new ac(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ih(i,t,e,n){const s=new ac(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function tr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ac(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function H_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class fi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return fi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];sh(t),rh(n,t);let o=t.length;e.forEach(sh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,rh(n,e[c]);const a=E_.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function sh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function rh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class lr extends De{constructor(t=new jn([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:V_;let x,v=!1,L,T,A,D;f&&(x=f.getSpacedPoints(h),v=!0,d=!1,L=f.computeFrenetFrames(h,!1),T=new R,A=new R,D=new R),d||(p=0,m=0,g=0,_=0);const w=a.extractPoints(l);let M=w.shape;const P=w.holes;if(!fi.isClockWise(M)){M=M.reverse();for(let Q=0,rt=P.length;Q<rt;Q++){const C=P[Q];fi.isClockWise(C)&&(P[Q]=C.reverse())}}const O=fi.triangulateShape(M,P),q=M;for(let Q=0,rt=P.length;Q<rt;Q++){const C=P[Q];M=M.concat(C)}function J(Q,rt,C){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(rt,C)}const $=M.length,tt=O.length;function W(Q,rt,C){let Ut,it,wt;const ht=Q.x-rt.x,Ht=Q.y-rt.y,St=C.x-Q.x,E=C.y-Q.y,y=ht*ht+Ht*Ht,F=ht*E-Ht*St;if(Math.abs(F)>Number.EPSILON){const Y=Math.sqrt(y),et=Math.sqrt(St*St+E*E),j=rt.x-Ht/Y,Pt=rt.y+ht/Y,dt=C.x-E/et,bt=C.y+St/et,ee=((dt-j)*E-(bt-Pt)*St)/(ht*E-Ht*St);Ut=j+ht*ee-Q.x,it=Pt+Ht*ee-Q.y;const st=Ut*Ut+it*it;if(st<=2)return new nt(Ut,it);wt=Math.sqrt(st/2)}else{let Y=!1;ht>Number.EPSILON?St>Number.EPSILON&&(Y=!0):ht<-Number.EPSILON?St<-Number.EPSILON&&(Y=!0):Math.sign(Ht)===Math.sign(E)&&(Y=!0),Y?(Ut=-Ht,it=ht,wt=Math.sqrt(y)):(Ut=ht,it=Ht,wt=Math.sqrt(y/2))}return new nt(Ut/wt,it/wt)}const ut=[];for(let Q=0,rt=q.length,C=rt-1,Ut=Q+1;Q<rt;Q++,C++,Ut++)C===rt&&(C=0),Ut===rt&&(Ut=0),ut[Q]=W(q[Q],q[C],q[Ut]);const Mt=[];let At,Yt=ut.concat();for(let Q=0,rt=P.length;Q<rt;Q++){const C=P[Q];At=[];for(let Ut=0,it=C.length,wt=it-1,ht=Ut+1;Ut<it;Ut++,wt++,ht++)wt===it&&(wt=0),ht===it&&(ht=0),At[Ut]=W(C[Ut],C[wt],C[ht]);Mt.push(At),Yt=Yt.concat(At)}for(let Q=0;Q<p;Q++){const rt=Q/p,C=m*Math.cos(rt*Math.PI/2),Ut=g*Math.sin(rt*Math.PI/2)+_;for(let it=0,wt=q.length;it<wt;it++){const ht=J(q[it],ut[it],Ut);lt(ht.x,ht.y,-C)}for(let it=0,wt=P.length;it<wt;it++){const ht=P[it];At=Mt[it];for(let Ht=0,St=ht.length;Ht<St;Ht++){const E=J(ht[Ht],At[Ht],Ut);lt(E.x,E.y,-C)}}}const ae=g+_;for(let Q=0;Q<$;Q++){const rt=d?J(M[Q],Yt[Q],ae):M[Q];v?(A.copy(L.normals[0]).multiplyScalar(rt.x),T.copy(L.binormals[0]).multiplyScalar(rt.y),D.copy(x[0]).add(A).add(T),lt(D.x,D.y,D.z)):lt(rt.x,rt.y,0)}for(let Q=1;Q<=h;Q++)for(let rt=0;rt<$;rt++){const C=d?J(M[rt],Yt[rt],ae):M[rt];v?(A.copy(L.normals[Q]).multiplyScalar(C.x),T.copy(L.binormals[Q]).multiplyScalar(C.y),D.copy(x[Q]).add(A).add(T),lt(D.x,D.y,D.z)):lt(C.x,C.y,u/h*Q)}for(let Q=p-1;Q>=0;Q--){const rt=Q/p,C=m*Math.cos(rt*Math.PI/2),Ut=g*Math.sin(rt*Math.PI/2)+_;for(let it=0,wt=q.length;it<wt;it++){const ht=J(q[it],ut[it],Ut);lt(ht.x,ht.y,u+C)}for(let it=0,wt=P.length;it<wt;it++){const ht=P[it];At=Mt[it];for(let Ht=0,St=ht.length;Ht<St;Ht++){const E=J(ht[Ht],At[Ht],Ut);v?lt(E.x,E.y+x[h-1].y,x[h-1].x+C):lt(E.x,E.y,u+C)}}}Z(),ot();function Z(){const Q=s.length/3;if(d){let rt=0,C=$*rt;for(let Ut=0;Ut<tt;Ut++){const it=O[Ut];Ot(it[2]+C,it[1]+C,it[0]+C)}rt=h+p*2,C=$*rt;for(let Ut=0;Ut<tt;Ut++){const it=O[Ut];Ot(it[0]+C,it[1]+C,it[2]+C)}}else{for(let rt=0;rt<tt;rt++){const C=O[rt];Ot(C[2],C[1],C[0])}for(let rt=0;rt<tt;rt++){const C=O[rt];Ot(C[0]+$*h,C[1]+$*h,C[2]+$*h)}}n.addGroup(Q,s.length/3-Q,0)}function ot(){const Q=s.length/3;let rt=0;Ct(q,rt),rt+=q.length;for(let C=0,Ut=P.length;C<Ut;C++){const it=P[C];Ct(it,rt),rt+=it.length}n.addGroup(Q,s.length/3-Q,1)}function Ct(Q,rt){let C=Q.length;for(;--C>=0;){const Ut=C;let it=C-1;it<0&&(it=Q.length-1);for(let wt=0,ht=h+p*2;wt<ht;wt++){const Ht=$*wt,St=$*(wt+1),E=rt+Ut+Ht,y=rt+it+Ht,F=rt+it+St,Y=rt+Ut+St;Xt(E,y,F,Y)}}}function lt(Q,rt,C){c.push(Q),c.push(rt),c.push(C)}function Ot(Q,rt,C){Gt(Q),Gt(rt),Gt(C);const Ut=s.length/3,it=S.generateTopUV(n,s,Ut-3,Ut-2,Ut-1);se(it[0]),se(it[1]),se(it[2])}function Xt(Q,rt,C,Ut){Gt(Q),Gt(rt),Gt(Ut),Gt(rt),Gt(C),Gt(Ut);const it=s.length/3,wt=S.generateSideWallUV(n,s,it-6,it-3,it-2,it-1);se(wt[0]),se(wt[1]),se(wt[3]),se(wt[1]),se(wt[2]),se(wt[3])}function Gt(Q){s.push(c[Q*3+0]),s.push(c[Q*3+1]),s.push(c[Q*3+2])}function se(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return G_(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new no[s.type]().fromJSON(s)),new lr(n,t.options)}}const V_={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new nt(r,o),new nt(a,c),new nt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],m=t[s*3+1],g=t[s*3+2],_=t[r*3],p=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new nt(o,1-c),new nt(l,1-u),new nt(d,1-g),new nt(_,1-f)]:[new nt(a,1-c),new nt(h,1-u),new nt(m,1-g),new nt(p,1-f)]}};function G_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Dc extends cr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Dc(t.radius,t.detail)}}class Lc extends cr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Lc(t.radius,t.detail)}}class fo extends De{constructor(t=new jn([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(r,3)),this.setAttribute("uv",new te(o,2));function l(h){const u=s.length/3,d=h.extractPoints(e);let m=d.shape;const g=d.holes;fi.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,f=g.length;p<f;p++){const S=g[p];fi.isClockWise(S)===!0&&(g[p]=S.reverse())}const _=fi.triangulateShape(m,g);for(let p=0,f=g.length;p<f;p++){const S=g[p];m=m.concat(S)}for(let p=0,f=m.length;p<f;p++){const S=m[p];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let p=0,f=_.length;p<f;p++){const S=_[p],x=S[0]+u,v=S[1]+u,L=S[2]+u;n.push(x,v,L),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return W_(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new fo(n,t.curveSegments)}}function W_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class qt extends De{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new R,d=new R,m=[],g=[],_=[],p=[];for(let f=0;f<=n;f++){const S=[],x=f/n;let v=0;f===0&&o===0?v=.5/e:f===n&&c===Math.PI&&(v=-.5/e);for(let L=0;L<=e;L++){const T=L/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(T+v,1-x),S.push(l++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){const x=h[f][S+1],v=h[f][S],L=h[f+1][S],T=h[f+1][S+1];(f!==0||o>0)&&m.push(x,v,T),(f!==n-1||c<Math.PI)&&m.push(v,L,T)}this.setIndex(m),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Re extends De{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new R,u=new R,d=new R;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){const _=g/s*r,p=m/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){const _=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,f=(s+1)*(m-1)+g,S=(s+1)*m+g;o.push(_,p,S),o.push(p,f,S)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class po extends De{constructor(t=1,e=.4,n=64,s=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:s,p:r,q:o},n=Math.floor(n),s=Math.floor(s);const a=[],c=[],l=[],h=[],u=new R,d=new R,m=new R,g=new R,_=new R,p=new R,f=new R;for(let x=0;x<=n;++x){const v=x/n*r*Math.PI*2;S(v,r,o,t,m),S(v+.01,r,o,t,g),p.subVectors(g,m),f.addVectors(g,m),_.crossVectors(p,f),f.crossVectors(_,p),_.normalize(),f.normalize();for(let L=0;L<=s;++L){const T=L/s*Math.PI*2,A=-e*Math.cos(T),D=e*Math.sin(T);u.x=m.x+(A*f.x+D*_.x),u.y=m.y+(A*f.y+D*_.y),u.z=m.z+(A*f.z+D*_.z),c.push(u.x,u.y,u.z),d.subVectors(u,m).normalize(),l.push(d.x,d.y,d.z),h.push(x/n),h.push(L/s)}}for(let x=1;x<=n;x++)for(let v=1;v<=s;v++){const L=(s+1)*(x-1)+(v-1),T=(s+1)*x+(v-1),A=(s+1)*x+v,D=(s+1)*(x-1)+v;a.push(L,T,D),a.push(T,A,D)}this.setIndex(a),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(h,2));function S(x,v,L,T,A){const D=Math.cos(x),w=Math.sin(x),M=L/v*x,P=Math.cos(M);A.x=T*(2+P)*.5*D,A.y=T*(2+P)*w*.5,A.z=T*Math.sin(M)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new po(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Ps extends De{constructor(t=new ho(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,c=new R,l=new nt;let h=new R;const u=[],d=[],m=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(m,2));function _(){for(let x=0;x<e;x++)p(x);p(r===!1?e:0),S(),f()}function p(x){h=t.getPointAt(x/e,h);const v=o.normals[x],L=o.binormals[x];for(let T=0;T<=s;T++){const A=T/s*Math.PI*2,D=Math.sin(A),w=-Math.cos(A);c.x=w*v.x+D*L.x,c.y=w*v.y+D*L.y,c.z=w*v.z+D*L.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function f(){for(let x=1;x<=e;x++)for(let v=1;v<=s;v++){const L=(s+1)*(x-1)+(v-1),T=(s+1)*x+(v-1),A=(s+1)*x+v,D=(s+1)*(x-1)+v;g.push(L,T,D),g.push(T,A,D)}}function S(){for(let x=0;x<=e;x++)for(let v=0;v<=s;v++)l.x=x/e,l.y=v/s,m.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ps(new no[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class mo extends Rs{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Nt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xh,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Ic extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Mu extends Ic{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const aa=new me,oh=new R,ah=new R;class yu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ec,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;oh.setFromMatrixPosition(t.matrixWorld),e.position.copy(oh),ah.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ah),e.updateMatrixWorld(),aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(aa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ch=new me,Os=new R,ca=new R;class X_ extends yu{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Os.setFromMatrixPosition(t.matrixWorld),n.position.copy(Os),ca.copy(n.position),ca.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ca),n.updateMatrixWorld(),s.makeTranslation(-Os.x,-Os.y,-Os.z),ch.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ch)}}class $_ extends Ic{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new X_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class q_ extends yu{constructor(){super(new iu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Su extends Ic{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new q_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Y_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=lh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function lh(){return performance.now()}const hh=new me;class bu{constructor(t,e,n=0,s=1/0){this.ray=new bc(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new wc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return hh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hh),this}intersectObject(t,e=!0,n=[]){return cc(t,this,n,e),n.sort(uh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)cc(t[s],this,n,e);return n.sort(uh),n}}function uh(i,t){return i.distance-t.distance}function cc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)cc(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pc);const Bs=new R;function ln(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Bs.copy(t),Bs[n]=0,Bs.normalize();const l=.5*o/(o+a),h=1-Bs.angleTo(i)/c;return Math.sign(Bs[e])===1?h*l:a/(o+a)+l+l*(1-h)}class Oe extends Me{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new R,c=new R,l=new R(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,m=h.length/6,g=new R,_=.5/s;for(let p=0,f=0;p<h.length;p+=3,f+=2)switch(a.fromArray(h,p),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[p+0]=l.x*Math.sign(a.x)+c.x*r,h[p+1]=l.y*Math.sign(a.y)+c.y*r,h[p+2]=l.z*Math.sign(a.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/m)){case 0:g.set(1,0,0),d[f+0]=ln(g,c,"z","y",r,n),d[f+1]=1-ln(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[f+0]=1-ln(g,c,"z","y",r,n),d[f+1]=1-ln(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[f+0]=1-ln(g,c,"x","z",r,t),d[f+1]=ln(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[f+0]=1-ln(g,c,"x","z",r,t),d[f+1]=1-ln(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[f+0]=1-ln(g,c,"x","y",r,t),d[f+1]=1-ln(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[f+0]=ln(g,c,"x","y",r,t),d[f+1]=1-ln(g,c,"y","x",r,e);break}}}const Ss={flour:{name:"Flour",model:"sack",color:16775402,lump:16775920,label:"FLOUR",tint:16115400},sugar:{name:"Sugar",model:"jar",color:16777215,lump:16777215,label:"SUGAR",tint:16761558},butter:{name:"Butter",model:"butter",color:16769658,lump:16770447},egg:{name:"Eggs",model:"egg",color:16765503,lump:16764735},milk:{name:"Milk",model:"milk",color:16777215,lump:16645629},vanilla:{name:"Vanilla",model:"vanilla",color:4860951,lump:16181190},dates:{name:"Dates",model:"dates",color:8010262,lump:8010262},oats:{name:"Oats",model:"jar",color:15257498,lump:14861964,label:"OATS",tint:13232304},coconut:{name:"Coconut",model:"coconut",color:16777215,lump:16514039},honey:{name:"Honey",model:"honey",color:16098851,lump:16098851},semolina:{name:"Semolina",model:"sack",color:16243852,lump:15980414,label:"SEMOLINA",tint:16769162},kunafa:{name:"Kunafa Pastry",model:"pastry",color:16240506,lump:15976549}},Be={cookies:{name:"Eid Sugar Cookies",short:"Cookies",emoji:"🍪",count:6,unlock:0,ingredients:["flour","sugar","butter","egg","vanilla"],shape:"cut",bake:!0,dough:16180152,golden:15182170,burnt:8014374,batter:16047272,blurb:"Cut out crescents, stars and lanterns!",sample:{r:"cookies",s:"crescent",f:"blue",it:[{t:"pearl",x:-.1,z:.05,c:"white"},{t:"pearl",x:.05,z:-.15,c:"white"}]}},cupcakes:{name:"Rainbow Cupcakes",short:"Cupcakes",emoji:"🧁",count:6,unlock:0,ingredients:["flour","sugar","egg","milk","butter"],shape:"fill",tool:"jug",bake:!0,dough:16508848,golden:15315555,burnt:8014374,batter:16310948,blurb:"Pour the batter into pretty cups!",sample:{r:"cupcakes",f:"pink",it:[{t:"spr",x:0,z:0,k:3},{t:"spr",x:.12,z:.1,k:5},{t:"spr",x:-.12,z:.08,k:8}]}},dateballs:{name:"Date & Coconut Balls",short:"Date Balls",emoji:"🟤",count:6,unlock:4,ingredients:["dates","oats","coconut","honey"],shape:"fill",tool:"roll",bake:!1,dough:9062946,golden:9062946,burnt:9062946,batter:9062946,blurb:"No oven needed — roll them round!",sample:{r:"dateballs",f:"white",it:[{t:"pearl",x:0,z:0,c:"gold"}]}},maamoul:{name:"Date Ma'amoul",short:"Ma'amoul",emoji:"🌕",count:6,unlock:7,ingredients:["semolina","butter","sugar","milk"],shape:"fill",tool:"date",bake:!0,dough:16245941,golden:15120490,burnt:8014374,batter:15916200,blurb:"Stuff each one with a sweet date!",sample:{r:"maamoul",f:"white",it:[]}},kunafa:{name:"Kunafa Nests",short:"Kunafa",emoji:"🪺",count:6,unlock:11,ingredients:["kunafa","butter","sugar"],shape:"fill",tool:"pastry",bake:!0,dough:16310944,golden:15770426,burnt:8011808,batter:15978360,blurb:"Crispy golden nests with sweet cream!",sample:{r:"kunafa",f:"white",it:[{t:"spr",x:0,z:0,k:2,p:1}]}},cake:{name:"Big Eid Cake",short:"Eid Cake",emoji:"🎂",count:1,unlock:15,ingredients:["flour","sugar","egg","milk","butter"],shape:"fill",tool:"bowl",bake:!0,dough:16508848,golden:15381606,burnt:8014374,batter:16310948,blurb:"One big cake to share with everyone!",sample:{r:"cake",f:"pink",tx:"white",it:[]}}},j_=["cookies","cupcakes","dateballs","maamoul","kunafa","cake"],io={crescent:{name:"Crescent",emoji:"🌙"},star:{name:"Star",emoji:"⭐"},heart:{name:"Heart",emoji:"💗"},lantern:{name:"Lantern",emoji:"🏮"},mosque:{name:"Mosque",emoji:"🕌"}},Pn={pink:{name:"Pink",hex:16752327,unlock:0},blue:{name:"Blue",hex:9423615,unlock:0},white:{name:"White",hex:16775922,unlock:0},lemon:{name:"Lemon",hex:16770155,unlock:0},mint:{name:"Mint",hex:9627327,unlock:5},lavender:{name:"Lavender",hex:13018367,unlock:5},chocolate:{name:"Chocolate",hex:8803642,unlock:5},gold:{name:"Gold",hex:15909198,unlock:20}},lc={white:16775408,pink:16762844,gold:16109402,blue:12575743},wu=[16740264,6211839,16769098,8315018,12749823,16777215,16751181],Z_=[10212202,8372053,12050570],di={frost:{name:"Frosting",emoji:"🧁",unlock:0,color:!0,say:"Tap a treat to frost it!"},spr:{name:"Sprinkles",emoji:"🌈",unlock:0,color:!1,say:"Drag your finger over the treats to sprinkle!"},pearl:{name:"Pearls",emoji:"⚪",unlock:0,color:"pearl",say:"Tap to place sugar pearls!"},pipe:{name:"Piping",emoji:"🍥",unlock:3,color:!0,say:"Draw with the piping bag!"},fond:{name:"Shapes",emoji:"⭐",unlock:8,color:!0,say:"Tap to stick on sugar shapes!"},glitter:{name:"Glitter",emoji:"✨",unlock:12,color:!1,say:"Tap a treat to add edible glitter!"},text:{name:"Eid Mubarak",emoji:"✍️",unlock:16,color:!0,say:"Tap a treat to write Eid Mubarak!"}},J_=["frost","spr","pearl","pipe","fond","glitter","text"],K_=["star","crescent","heart","flower"],Uc={pink:{hex:16757711,pattern:16777215},blue:{hex:10474751,pattern:16777215},mint:{hex:11070672,pattern:16777215},gold:{hex:16110202,pattern:16777215},lilac:{hex:14073087,pattern:16777215}},Nc={red:16734842,gold:15907119,blue:4165600,green:4175210,white:16777215},Ni={pink:{name:"Rose Kitchen",unlock:0,wall:16770284,tile:16762841,counter:16775409,cabinet:16752575,trim:15760035,floor:15780256,bunting:[16740264,16769098,6211839,8315018]},mint:{name:"Mint Garden",unlock:6,wall:14875631,tile:11857107,counter:16777215,cabinet:7328166,trim:4173439,floor:15257e3,bunting:[4173439,16777215,16763210,16748467]},lavender:{name:"Lavender Night",unlock:10,wall:15524863,tile:13811967,counter:16775935,cabinet:11111408,trim:8018646,floor:14270632,bunting:[8018646,15909198,16777215,16752327]},gold:{name:"Golden Eid",unlock:18,wall:16774102,tile:16243866,counter:16776694,cabinet:3829680,trim:14263339,floor:15320986,bunting:[15909198,3829680,16777215,4173439]}},hc={rose:16748472,sky:8372223,mint:8379568,lilac:12164351,sun:16763210},Ge={maryam:{name:"Aunty Maryam",kind:"woman",skin:15910048,hijab:6990079,dress:4157365,house:16765404,door:5930966,thanks:"Oh, these smell wonderful! I will put them out for our Eid guests."},noor:{name:"Nani Noor",kind:"grandma",skin:15251855,hijab:15921906,dress:9202616,house:16773304,door:10185686,thanks:"My dear, you bake just like I did when I was little. Come, have one with me!"},karim:{name:"Uncle Karim",kind:"man",skin:13209445,cap:16777215,dress:5940090,house:13234396,door:4168298,thanks:"Ho ho, perfect timing! Everyone at the mosque will get a piece."},layla:{name:"Layla",kind:"girl",skin:15777946,hijab:16757575,dress:16744360,house:14084351,door:15759946,thanks:"For me? Yay! Can we bake together next time?"},sami:{name:"Little Sami",kind:"boy",skin:12025688,cap:4165600,dress:16765503,house:16769220,door:14047834,thanks:"Wow wow wow! This is the best Eid ever!"},huda:{name:"Teacher Huda",kind:"woman",skin:10250308,hijab:4175264,dress:3112838,house:15391999,door:3119754,thanks:"How thoughtful! My whole class will say thank you tomorrow."}},zs=["maryam","noor","karim","layla","sami","huda"],jr=[{id:"o1",who:"maryam",r:"cookies",req:[{k:"shape",v:"star"},{k:"frost",v:"blue"}],say:"wants 6 star cookies with blue frosting!"},{id:"o2",who:"sami",r:"cupcakes",req:[{k:"frost",v:"pink"},{k:"top",v:"spr"}],say:"wants pink cupcakes with lots of sprinkles!"},{id:"o3",who:"noor",r:"cookies",req:[{k:"shape",v:"crescent"},{k:"top",v:"pearl"}],say:"would love crescent cookies with sugar pearls."},{id:"o4",who:"layla",r:"cupcakes",req:[{k:"frost",v:"lemon"},{k:"top",v:"pearl"}],say:"wants lemon cupcakes with pearls on top!"},{id:"o5",who:"karim",r:"dateballs",req:[{k:"frost",v:"white"},{k:"top",v:"spr"}],say:"wants date balls rolled in white coconut, with sprinkles."},{id:"o6",who:"huda",r:"cookies",req:[{k:"shape",v:"heart"},{k:"frost",v:"pink"}],say:"wants pink heart cookies for her class."},{id:"o7",who:"maryam",r:"maamoul",req:[{k:"frost",v:"white"},{k:"top",v:"pipe"}],say:"wants ma'amoul with white sugar and piping."},{id:"o8",who:"sami",r:"cookies",req:[{k:"shape",v:"lantern"},{k:"frost",v:"mint"}],say:"wants lantern cookies with mint frosting!"},{id:"o9",who:"noor",r:"kunafa",req:[{k:"frost",v:"white"},{k:"top",v:"spr"}],say:"wants kunafa nests with cream and sprinkles."},{id:"o10",who:"layla",r:"cookies",req:[{k:"shape",v:"mosque"},{k:"frost",v:"lavender"}],say:"wants mosque cookies with lavender frosting."},{id:"o11",who:"karim",r:"cupcakes",req:[{k:"frost",v:"chocolate"},{k:"top",v:"fond"}],say:"wants chocolate cupcakes with sugar shapes."},{id:"o12",who:"huda",r:"cake",req:[{k:"frost",v:"pink"},{k:"top",v:"text"}],say:"wants a big pink cake that says Eid Mubarak!"},{id:"o13",who:"maryam",r:"kunafa",req:[{k:"frost",v:"mint"},{k:"top",v:"glitter"}],say:"wants kunafa nests with mint cream and glitter."},{id:"o14",who:"noor",r:"cake",req:[{k:"frost",v:"gold"},{k:"top",v:"glitter"}],say:"wants a golden Eid cake that sparkles!"}],li=[{text:"Give gifts to one another, and you will love one another.",src:"Al-Adab al-Mufrad 594",mean:"Giving presents makes love grow between people."},{text:"Do not think any good deed is small, even meeting your brother with a cheerful face.",src:"Sahih Muslim 2626",mean:"Every kind thing counts, even a smile!"},{text:"O Muslim women! None of you should think a gift to her neighbour is too small, even if it is a sheep’s hoof.",src:"Sahih al-Bukhari 2566, Sahih Muslim 1030",mean:"Every gift to a neighbour is special, big or small."},{text:"When you cook soup, add more water, and remember your neighbours.",src:"Sahih Muslim 2625 (shortened)",mean:"Make a little extra so you can share with the people next door."},{text:"Which Islam is best? “To feed people, and to greet with salaam those you know and those you do not know.”",src:"Sahih al-Bukhari 12, Sahih Muslim 39",mean:"Sharing food and saying salaam are some of the best deeds."},{text:"None of you truly believes until he loves for his brother what he loves for himself.",src:"Sahih al-Bukhari 13, Sahih Muslim 45",mean:"Want good things for others, just like you want them for you."},{text:"Your smile for your brother is a charity.",src:"Jami' at-Tirmidhi 1956",mean:"A happy smile is a gift you can give every day."},{text:"And they give food, even though they love it, to the poor, the orphan and the captive.",src:"Quran 76:8",mean:"Allah loves those who share food they love."}],Q_=["JazakAllahu khayran! Eid Mubarak!","MashaAllah, it looks so yummy! Thank you!","Eid Mubarak, sweetheart! What a lovely gift!","Thank you! I will share them with my family!"],so=["MashaAllah!","Yummy!","Wonderful!","Great job!","So pretty!"];function go(){var e;const i=[];for(const[n,s]of Object.entries(Be))s.unlock>0&&i.push({id:`recipe:${n}`,cost:s.unlock,label:`${s.emoji} ${s.name}`,kind:"Recipe"});for(const[n,s]of Object.entries(di))s.unlock>0&&i.push({id:`tool:${n}`,cost:s.unlock,label:`${s.emoji} ${s.name}`,kind:"Decoration"});const t={};for(const[n,s]of Object.entries(Pn))s.unlock>0&&(t[e=s.unlock]||(t[e]=[])).push(s.name);for(const[n,s]of Object.entries(t))i.push({id:`colors:${n}`,cost:Number(n),label:`🎨 ${s.join(", ")} frosting`,kind:"Colours"});for(const[n,s]of Object.entries(Ni))s.unlock>0&&i.push({id:`theme:${n}`,cost:s.unlock,label:`🏠 ${s.name}`,kind:"Kitchen"});return i.sort((n,s)=>n.cost-s.cost)}function la(i){let t=Be[i.r].unlock;for(const e of i.req)e.k==="frost"&&(t=Math.max(t,Pn[e.v].unlock)),e.k==="top"&&(t=Math.max(t,di[e.v].unlock));return t}function er(i){return i.k==="shape"?`${io[i.v].emoji} ${io[i.v].name} shape`:i.k==="frost"?`🎨 ${Pn[i.v].name} ${i.r==="dateballs"?"coating":"frosting"}`:`${di[i.v].emoji} ${di[i.v].name}`}function Eu(i,t){return i.req.map(e=>t.length>0&&t.every(n=>e.k==="shape"?n.s===e.v:e.k==="frost"?n.f===e.v:e.v==="glitter"?!!n.g:e.v==="text"?!!n.tx:(n.it||[]).some(s=>s.t===e.v)))}const nr=i=>i[Math.floor(Math.random()*i.length)],_o=(()=>{const i=new Uint8Array([110,175,230,255]),t=new h_(i,i.length,1,vc);return t.minFilter=t.magFilter=tn,t.needsUpdate=!0,t})(),ha=new Map;function G(i,t={}){const e=i+JSON.stringify(t);if(ha.has(e))return ha.get(e);const n=new mo({color:i,gradientMap:_o,...t});return ha.set(e,n),n}function Fe(i,t={}){return new mo({color:i,gradientMap:_o,...t})}const ua=new Map;function dn(i,t={}){const e=i+JSON.stringify(t);if(ua.has(e))return ua.get(e);const n=new Ae({color:i,...t});return ua.set(e,n),n}function Ne(i,t=!1){return i.traverse(e=>{e.isMesh&&(e.castShadow=!0,t&&(e.receiveShadow=!0))}),i}const pn=(i,t,e)=>new R(i,t,e),Tu=pn(0,1,0);function Dn(i){let t=i*2654435761>>>0||1;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function I(i,t,e=0,n=0,s=0){const r=new ie(i,t);return r.position.set(e,n,s),r}const ki='"Baloo 2", "Comic Sans MS", system-ui, sans-serif';function vi(i,t,e,{repeat:n=null}={}){const s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);const r=new fu(s);return r.colorSpace=Ye,r.anisotropy=4,n&&(r.wrapS=r.wrapT=Jr,r.repeat.set(...n)),r}const vo=i=>`#${i.toString(16).padStart(6,"0")}`,fa=new Map;function xi(i,t){return fa.has(i)||fa.set(i,t()),fa.get(i)}function Mi(i,t="#ffffff",e="#5a3a10",n=256,s=128){return xi(`lbl:${i}:${t}:${e}:${n}`,()=>vi(n,s,r=>{r.fillStyle=t,r.fillRect(0,0,n,s),r.fillStyle=e,r.textAlign="center",r.textBaseline="middle";let o=s*.55;for(r.font=`800 ${o}px ${ki}`;r.measureText(i).width>n*.9&&o>10;)o-=2,r.font=`800 ${o}px ${ki}`;r.fillText(i,n/2,s*.55)}))}function tv(i,t,e=512,n=256){return xi(`wr:${i.join("|")}:${t}:${e}`,()=>vi(e,n,s=>{s.clearRect(0,0,e,n),s.textAlign="center",s.textBaseline="middle",s.lineJoin="round";const r=n/(i.length+.3);i.forEach((o,a)=>{let c=r*.95;for(s.font=`800 ${c}px ${ki}`;s.measureText(o).width>e*.92&&c>10;)c-=2,s.font=`800 ${c}px ${ki}`;const l=n/2+(a-(i.length-1)/2)*r;s.strokeStyle="rgba(90,50,30,0.45)",s.lineWidth=c*.14,s.strokeText(o,e/2,l+2),s.fillStyle=vo(t),s.fillText(o,e/2,l)})}))}function ev(){return xi("tiles",()=>vi(256,256,i=>{i.fillStyle="#ffffff",i.fillRect(0,0,256,256),i.fillStyle="#e4e4e4";for(let t=0;t<=2;t++)i.fillRect(t*128-3,0,6,256),i.fillRect(0,t*128-3,256,6);i.fillStyle="#f0f0f0";for(const[t,e]of[[64,64],[192,64],[64,192],[192,192]]){i.save(),i.translate(t,e);for(const n of[0,Math.PI/4])i.save(),i.rotate(n),i.fillRect(-22,-22,44,44),i.restore();i.fillStyle="#ffffff",i.beginPath(),i.arc(0,0,12,0,Math.PI*2),i.fill(),i.fillStyle="#f0f0f0",i.restore()}},{repeat:[40,1.2]}))}function Au(){return xi("strands",()=>vi(256,128,i=>{i.fillStyle="#e6e6e6",i.fillRect(0,0,256,128);const t=Dn(7);for(let e=0;e<260;e++){i.strokeStyle=t()<.5?"#ffffff":"#bdbdbd",i.lineWidth=1.5+t()*2,i.beginPath();const n=t()*256,s=t()*128;i.moveTo(n,s),i.bezierCurveTo(n+10,s+(t()-.5)*30,n+25,s+(t()-.5)*30,n+40,s+(t()-.5)*20),i.stroke()}},{repeat:[3,1]}))}function Ru(){return xi("speckle",()=>vi(128,128,i=>{i.fillStyle="#d8d8d8",i.fillRect(0,0,128,128);const t=Dn(3);for(let e=0;e<220;e++)i.fillStyle=t()<.7?"#ffffff":"#b8b8b8",i.fillRect(t()*128,t()*128,2+t()*4,1.5+t()*2)},{repeat:[2,2]}))}function Cu(i){return xi(`box:${i}`,()=>vi(256,256,t=>{t.fillStyle=vo(i),t.fillRect(0,0,256,256),t.fillStyle="rgba(255,255,255,0.85)";const e=(s,r,o)=>{t.beginPath();for(let a=0;a<10;a++){const c=-Math.PI/2+a*Math.PI/5,l=a%2?o*.45:o;t.lineTo(s+Math.cos(c)*l,r+Math.sin(c)*l)}t.fill()},n=(s,r,o)=>{t.save(),t.beginPath(),t.arc(s,r,o,0,Math.PI*2),t.arc(s+o*.45,r-o*.2,o*.85,0,Math.PI*2,!0),t.fill("evenodd"),t.restore()};for(let s=0;s<4;s++)for(let r=0;r<4;r++){const o=32+s*64+r%2*32,a=32+r*64;(s+r)%2?e(o,a,13):n(o,a,13)}},{repeat:[1,1]}))}function nv(){return xi("sky",()=>vi(256,256,i=>{const t=i.createLinearGradient(0,0,0,256);t.addColorStop(0,"#3b3f8f"),t.addColorStop(.55,"#b07fc9"),t.addColorStop(1,"#ffc7a8"),i.fillStyle=t,i.fillRect(0,0,256,256),i.fillStyle="#fff6c9",i.beginPath(),i.arc(150,80,34,0,Math.PI*2),i.arc(166,70,30,0,Math.PI*2,!0),i.fill("evenodd");const e=Dn(11);for(let n=0;n<30;n++)i.globalAlpha=.5+e()*.5,i.fillRect(e()*256,e()*140,2,2)}))}function iv(){return xi("streetsky",()=>vi(16,256,i=>{const t=i.createLinearGradient(0,0,0,256);t.addColorStop(0,"#7cc8ff"),t.addColorStop(.6,"#c5e8ff"),t.addColorStop(1,"#fff1d6"),i.fillStyle=t,i.fillRect(0,0,16,256)}))}function ss(i){const t=new jn;return i.forEach(([e,n],s)=>s?t.lineTo(e,n):t.moveTo(e,n)),t.closePath(),t}const fh={circle:()=>{const i=new jn;return i.absarc(0,0,.46,0,Math.PI*2,!1),i},star:()=>{const i=[];for(let t=0;t<10;t++){const e=Math.PI/2+t*Math.PI/5,n=t%2?.23:.52;i.push([Math.cos(e)*n,Math.sin(e)*n-.02])}return ss(i)},crescent:()=>{const s=Math.acos(.6290909090909089),r=Math.atan2(.5*Math.sin(s),.5*Math.cos(s)-.22),o=[],a=28;for(let l=0;l<=a;l++){const h=s+(2*Math.PI-2*s)*l/a;o.push([.5*Math.cos(h),.5*Math.sin(h)])}for(let l=1;l<a;l++){const h=2*Math.PI-r-(2*Math.PI-2*r)*l/a;o.push([.22+.4*Math.cos(h),.4*Math.sin(h)])}const c=.5;return ss(o.map(([l,h])=>(l+=.12,[l*Math.cos(c)-h*Math.sin(c),l*Math.sin(c)+h*Math.cos(c)])))},heart:()=>{const i=new jn;return i.moveTo(0,-.45),i.bezierCurveTo(-.1,-.35,-.52,-.1,-.52,.14),i.bezierCurveTo(-.52,.36,-.34,.47,-.19,.47),i.bezierCurveTo(-.07,.47,0,.39,0,.31),i.bezierCurveTo(0,.39,.07,.47,.19,.47),i.bezierCurveTo(.34,.47,.52,.36,.52,.14),i.bezierCurveTo(.52,-.1,.1,-.35,0,-.45),i},lantern:()=>ss([[-.09,.52],[.09,.52],[.1,.43],[.24,.33],[.3,.12],[.3,-.17],[.21,-.33],[.08,-.42],[0,-.52],[-.08,-.42],[-.21,-.33],[-.3,-.17],[-.3,.12],[-.24,.33],[-.1,.43]]),mosque:()=>{const i=[[-.52,-.44],[.52,-.44],[.52,.16],[.44,.48],[.36,.16],[.36,-.04],[.28,-.04]],t=18;for(let e=0;e<=t;e++){if(e===t/2){i.push([.04,.38],[0,.52],[-.04,.38]);continue}const n=-.15+(Math.PI+.3)*e/t;i.push([Math.cos(n)*.3,.09+Math.sin(n)*.29])}return i.push([-.28,-.04],[-.36,-.04],[-.36,.16],[-.44,.48],[-.52,.16]),ss(i)},flower:()=>{const i=[];for(let t=0;t<60;t++){const e=t/60*Math.PI*2,n=.36+.14*Math.cos(e*5);i.push([Math.cos(e)*n,Math.sin(e)*n])}return ss(i)}},da=new Map;function gn(i){return da.has(i)||da.set(i,(fh[i]||fh.circle)()),da.get(i)}const pa=new Map;function Je(i,t){return pa.has(i)||pa.set(i,t()),pa.get(i)}function on(i,t,e,n=1,s=3){const r=new lr(i,{depth:t,bevelEnabled:e>0,bevelThickness:e,bevelSize:e*.9,bevelSegments:s,curveSegments:14});return r.rotateX(-Math.PI/2),r.translate(0,e,0),n!==1&&r.scale(n,1,n),r.computeVertexNormals(),r}function Pu(i,t=1){return Je(`outline:${i}:${t}`,()=>{const n=gn(i).getPoints(24),s=new jn(n.map(o=>o.clone().multiplyScalar(1.04))),r=new Js(n.map(o=>o.clone().multiplyScalar(.94)).reverse());return s.holes.push(r),on(s,.3,.01,t,1)})}const Du={cookies:.46,cupcakes:.38,maamoul:.38,kunafa:.4,dateballs:.27,cake:1.35},uc=[16752327,9423615,16770155,9627327,13018367,16757642];function fc(i,t){const e=Be[i],n=new Nt(e.dough);return t<=.55?n.lerp(new Nt(e.golden),Math.max(0,t)/.55):t<=.78?new Nt(e.golden):new Nt(e.golden).lerp(new Nt(e.burnt),Math.min(1,(t-.78)/.22))}const sv=.22;function rv(i){return Je(`cookie:${i}`,()=>on(gn(i),.12,.05))}function ov(i){return Je(`cfrost:${i}`,()=>on(gn(i),.02,.035,.84))}const av=(()=>{const i=new zt(.4,.3,.46,32,1,!0),t=i.attributes.position;for(let e=0;e<t.count;e++){const n=Math.atan2(t.getZ(e),t.getX(e)),s=1+.045*Math.cos(n*16);t.setX(e,t.getX(e)*s),t.setZ(e,t.getZ(e)*s)}return i.translate(0,.23,0),i.computeVertexNormals(),i})(),cv=new qt(.42,28,12,0,Math.PI*2,0,Math.PI/2),lv=(()=>{const i=[[.44,0],[.46,.06],[.4,.13],[.39,.17],[.31,.24],[.3,.28],[.2,.36],[.19,.4],[.08,.48],[.02,.53],[0,.54]].map(([n,s])=>new nt(n,s)),t=new en(i,36),e=t.attributes.position;for(let n=0;n<e.count;n++){const s=Math.atan2(e.getZ(n),e.getX(n)),r=1+.05*Math.cos(s*8+e.getY(n)*20);e.setX(n,e.getX(n)*r),e.setZ(n,e.getZ(n)*r)}return t.computeVertexNormals(),t})(),dh=(()=>{const i=[[0,0],[.37,0],[.42,.05],[.42,.12],[.38,.24],[.28,.33],[.14,.38],[0,.39]].map(([n,s])=>new nt(n,s)),t=new en(i,48),e=t.attributes.position;for(let n=0;n<e.count;n++){if(e.getY(n)<.06)continue;const s=Math.atan2(e.getZ(n),e.getX(n)),r=1-.07*(.5+.5*Math.cos(s*12));e.setX(n,e.getX(n)*r),e.setZ(n,e.getZ(n)*r),e.setY(n,e.getY(n)*(1-.04*(.5+.5*Math.cos(s*12))))}return t.computeVertexNormals(),t})(),ph=(()=>{const i=new Dc(.28,4),t=i.attributes.position,e=Dn(5),n=new Map;for(let s=0;s<t.count;s++){const r=`${t.getX(s).toFixed(3)},${t.getY(s).toFixed(3)},${t.getZ(s).toFixed(3)}`;n.has(r)||n.set(r,1+(e()-.5)*.05);const o=n.get(r);t.setXYZ(s,t.getX(s)*o,t.getY(s)*o,t.getZ(s)*o)}return i.computeVertexNormals(),i})();function ai(i,t={}){const e=i.r,n=new yt,s=n.userData;s.surfaces=[],s.bakeMats=[],s.data=i,s.recipe=e,s.radius=Du[e],s.twinkles=[];const r=t.bake??.62,o=(l={})=>{const h=t.unique?Fe(fc(e,r),l):G(fc(e,r).getHex(),l);return s.bakeMats.push(h),h},a=i.f?Pn[i.f].hex:null,c=(l,h=!1)=>(n.add(l),h&&s.surfaces.push(l),l.castShadow=!0,l);if(e==="cookies")c(I(rv(i.s||"crescent"),o()),!0),a!=null&&c(I(ov(i.s||"crescent"),G(a),0,sv-.03,0),!0);else if(e==="cupcakes"){c(I(av,G(uc[(i.lc||0)%uc.length],{side:Ee})));const l=c(I(cv,o(),0,.44,0),a==null);l.scale.y=.72*(t.rise??1),s.dome=l,a!=null&&c(I(lv,G(a),0,.46,0),!0)}else if(e==="maamoul")c(I(dh,o()),a==null),a!=null&&c(I(dh,G(a)),!0).scale.set(1.035,1.05,1.035);else if(e==="kunafa"){const l=Au();c(I(Je("kbase",()=>new zt(.34,.32,.08,24)),o({map:l}),0,.04,0),!0);const h=c(I(Je("kring",()=>new Re(.29,.13,14,32)),o({map:l}),0,.15,0),!0);h.rotation.x=Math.PI/2,h.scale.z=.85;const u=Dn(21),d=s.bakeMats[0];for(let m=0;m<9;m++){const g=u()*Math.PI*2,_=g+.8+u()*1.2,p=u()*.03,f=Je(`kstrand:${m}`,()=>new Ps(new Cc([pn(Math.cos(g)*.3,.2,Math.sin(g)*.3),pn(Math.cos((g+_)/2)*.36,.29+p,Math.sin((g+_)/2)*.36),pn(Math.cos(_)*.3,.2,Math.sin(_)*.3)]),10,.022,5));c(I(f,d))}if(a!=null){const m=c(I(Je("kcream",()=>new qt(.22,20,10,0,Math.PI*2,0,Math.PI/2)),G(a),0,.1,0),!0);m.scale.y=.95}}else if(e==="dateballs")c(I(ph,o(),0,.27,0),a==null).scale.set(1,.95,1),a!=null&&c(I(ph,G(a,{map:Ru()}),0,.27,0),!0).scale.set(1.08,1.03,1.08);else if(e==="cake"){const l=c(I(Je("sponge",()=>new zt(1.45,1.45,1,56)),o(),0,.5,0),a==null);if(l.scale.y=t.rise??1,l.position.y=.5*(t.rise??1),s.dome=l,a!=null){c(I(Je("cakefrost",()=>new zt(1.52,1.52,1.1,56)),G(a),0,.55,0),!0);const h=Je("bead",()=>new qt(.1,10,8)),u=G(new Nt(a).lerp(new Nt(16777215),.55).getHex());for(let d=0;d<30;d++){const m=d/30*Math.PI*2;c(I(h,u,Math.cos(m)*1.46,1.1,Math.sin(m)*1.46)),c(I(h,u,Math.cos(m)*1.53,.08,Math.sin(m)*1.53))}}}s.deco=new yt,n.add(s.deco),n.updateMatrixWorld(!0);for(const l of i.it||[])i.tx&&e!=="cake"&&Math.hypot(l.x,l.z)<.25||Lu(n,l);return i.g&&gv(n,i.g),i.tx&&_v(n,i.tx),n}function ma(i,t,e){const n=fc(i.userData.recipe,t);for(const s of i.userData.bakeMats)s.color.copy(n);if(e!=null&&i.userData.dome){const s=i.userData.dome;i.userData.recipe==="cake"?(s.scale.y=e,s.position.y=.5*e):s.scale.y=.72*e}}const mh=new bu,hv=new jt;function kc(i,t,e){i.updateMatrixWorld(!0);const n=i.localToWorld(pn(t,8,e)),s=i.localToWorld(pn(t,0,e)).sub(n).normalize();mh.set(n,s);const r=mh.intersectObjects(i.userData.surfaces,!1);if(!r.length)return null;const o=r[0],a=i.worldToLocal(o.point.clone()),c=o.face.normal.clone().applyMatrix3(hv.getNormalMatrix(o.object.matrix)).normalize();return c.y<.2&&c.set(0,1,0),{y:a.y,n:c}}const uv=new ar(.014,.055,3,6),fv=new qt(.042,14,10),dv=(()=>{const i=[[0,0],[.06,0],[.065,.03],[.045,.065],[.02,.09],[0,.1]].map(([n,s])=>new nt(n,s)),t=new en(i,24),e=t.attributes.position;for(let n=0;n<e.count;n++){const s=Math.atan2(e.getZ(n),e.getX(n)),r=1+.18*Math.cos(s*6+e.getY(n)*30);e.setX(n,e.getX(n)*r),e.setZ(n,e.getZ(n)*r)}return t.computeVertexNormals(),t})();function pv(i){var t,e;if(i.t==="spr"){const n=new yt,s=Dn(i.k||1),r=i.p?Z_:wu;for(let o=0;o<7;o++){const a=new ie(uv,G(r[Math.floor(s()*r.length)])),c=s()*Math.PI*2,l=s()*.075;a.position.set(Math.cos(c)*l,.016,Math.sin(c)*l),a.rotation.set(0,s()*Math.PI,Math.PI/2),n.add(a)}return n}if(i.t==="pearl"){const n=new ie(fv,G(lc[i.c]||lc.white,{emissive:2236962}));n.position.y=.03;const s=new yt;return s.add(n),s}if(i.t==="pipe"){const n=new yt;return n.add(new ie(dv,G(((t=Pn[i.c])==null?void 0:t.hex)??16777215))),n}if(i.t==="fond"){const n=new yt,s=new ie(Je(`fond:${i.s}`,()=>on(gn(i.s),.03,.012,.26,2)),G(((e=Pn[i.c])==null?void 0:e.hex)??16777215));return n.add(s),n}return new yt}function Lu(i,t){const e=kc(i,t.x,t.z);if(!e)return null;const n=pv(t);return n.position.set(t.x,e.y-.004,t.z),n.quaternion.setFromUnitVectors(Tu,e.n),n.rotateY(t.r||0),n.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),i.userData.deco.add(n),n}const mv=new Lc(.03,0);function gv(i,t=1){const e=Dn(t*31+7),n=i.userData.radius*.85,s=i.userData.recipe==="cake"?60:16;for(let r=0;r<s;r++){const o=e()*Math.PI*2,a=Math.sqrt(e())*n,c=Math.cos(o)*a,l=Math.sin(o)*a,h=kc(i,c,l);if(!h)continue;const u=new ie(mv,dn(e()<.5?16773800:16777215));u.position.set(c,h.y+.02,l),u.rotation.set(e()*3,e()*3,0),u.userData.phase=e()*6,i.userData.deco.add(u),i.userData.twinkles.push(u)}}const ga=new Map;function gh(i,t,e){const n=`${i}:${t}`;return ga.has(n)||ga.set(n,new Ae({map:tv(["Eid","Mubarak"],i,t,e),transparent:!0,depthWrite:!1})),ga.get(n)}function _v(i,t){var o;const e=((o=Pn[t])==null?void 0:o.hex)??16777215,n=i.userData.recipe==="cake",s=kc(i,0,0);if(!s)return;const r=new yt;if(n){const a=new ie(Je("wplane:cake",()=>new ye(2.3,1.15)),gh(e,512,256));a.rotation.x=-Math.PI/2,a.position.y=.012,r.add(a)}else{const a=new ie(Je("plaque",()=>new zt(.22,.22,.035,28)),G(16775922));a.position.y=.02,r.add(a);const c=new ie(Je("wplane:small",()=>new ye(.4,.28)),gh(e,256,180));c.rotation.x=-Math.PI/2,c.position.y=.04,r.add(c)}r.position.set(0,s.y,0),r.quaternion.setFromUnitVectors(Tu,s.n),i.userData.deco.add(r)}function vv(i){const t=new yt,e=G(i.tint),n=I(new qt(.42,20,16),e,0,.4,0);n.scale.set(1.08,1,.85),t.add(n);const s=I(new zt(.12,.26,.22,14),e,0,.84,0);t.add(s);const r=I(new Re(.13,.035,6,16),G(14047866),0,.9,0);r.rotation.x=Math.PI/2,t.add(r);const o=I(new gi(.22,.18,12),e,0,1.02,0);o.rotation.x=Math.PI,t.add(o);const a=I(new qt(.15,10,8),G(i.color),0,1.02,0);t.add(a);const c=I(new ye(.6,.3),new Ae({map:Mi(i.label,"#fffaf0","#c0476e")}),0,.42,.37);return t.add(c),t}function xv(i){const t=new yt;t.add(I(new zt(.28,.28,.5,22),G(i.color),0,.27,0));const e=I(new zt(.32,.32,.66,22),new mo({color:15267583,gradientMap:_o,transparent:!0,opacity:.35}),0,.34,0);t.add(e),t.add(I(new zt(.34,.34,.12,22),G(i.tint),0,.72,0)),t.add(I(new qt(.08,10,8),G(i.tint),0,.8,0));const n=I(new ye(.5,.24),new Ae({map:Mi(i.label,"#ffffff","#4a7ab8")}),0,.34,.325);return t.add(n),t}function Mv(){const i=new yt;i.add(I(new zt(.46,.5,.06,24),G(12575743),0,.03,0));const t=I(new Oe(.66,.3,.36,3,.05),G(16769658),0,.21,0);i.add(t);const e=I(new Oe(.34,.33,.39,3,.05),G(16777215),.17,.21,0);i.add(e);const n=I(new ye(.3,.16),new Ae({map:Mi("BUTTER","#ffffff","#e0a000")}),.17,.22,.2);return i.add(n),i}function yv(){const i=new yt,t=I(new zt(.42,.3,.2,22),G(10474751),0,.1,0);i.add(t);const e=new qt(.17,18,14);for(const[n,s,r]of[[-.14,.02,.2],[.14,-.02,-.25],[0,.14,.1]]){const o=I(e,G(16774108),n,.3,s);o.scale.set(1,1.3,1),o.rotation.z=r,i.add(o)}return i}function Sv(){const i=new yt,t=[[0,0],[.26,0],[.28,.05],[.28,.5],[.2,.66],[.12,.74],[.12,.84],[0,.84]].map(([n,s])=>new nt(n,s));i.add(I(new en(t,24),G(16777215))),i.add(I(new zt(.14,.14,.1,18),G(4886754),0,.88,0));const e=I(new zt(.285,.285,.24,24,1,!0),new Ae({map:Mi("MILK","#6fb6ff","#ffffff",256,64)}),0,.3,0);return i.add(e),i}function bv(){const i=new yt;i.add(I(new zt(.44,.36,.08,24),G(16769260),0,.04,0));const t=new ar(.035,.62,4,8);for(const[n,s]of[[-.06,.2],[.07,-.15]]){const r=I(t,G(4860951),n,.12,0);r.rotation.set(Math.PI/2,0,0),r.rotation.y=s,i.add(r)}const e=new yt;for(let n=0;n<5;n++){const s=I(new qt(.07,8,6),G(16774084),Math.cos(n*1.256)*.08,0,Math.sin(n*1.256)*.08);s.scale.set(1,.4,1),e.add(s)}return e.add(I(new qt(.04,8,6),G(15907119))),e.position.set(.2,.14,.18),i.add(e),i}function wv(){const i=new yt,t=[[0,0],[.3,0],[.45,.12],[.5,.24],[.46,.24],[.4,.14],[.28,.06],[0,.06]].map(([s,r])=>new nt(s,r));i.add(I(new en(t,24),G(16774108,{side:Ee})));const e=new qt(.1,12,10),n=Dn(4);for(let s=0;s<8;s++){const r=s/8*Math.PI*2+n(),o=s<6?.24:.05,a=I(e,G(8010262),Math.cos(r)*o,.17+(s>=6?.08:0),Math.sin(r)*o);a.scale.set(.8,.8,1.6),a.rotation.y=n()*3,i.add(a)}return i}function Ev(){const i=new yt,t=I(new qt(.36,20,12,0,Math.PI*2,Math.PI/2,Math.PI/2),G(8014374,{side:Ee}),0,.36,0);i.add(t);const e=I(new Zn(.33,24),G(16777215),0,.36,0);e.rotation.x=-Math.PI/2,i.add(e);const n=I(new qt(.26,14,8,0,Math.PI*2,0,Math.PI/2),G(16645621,{map:Ru()}),0,.36,0);return n.scale.y=.5,i.add(n),i}function Tv(){const i=new yt,t=[[0,0],[.2,0],[.32,.12],[.34,.3],[.26,.48],[.2,.52],[.2,.56],[0,.56]].map(([s,r])=>new nt(s,r));i.add(I(new en(t,24),G(16098851))),i.add(I(new zt(.24,.24,.08,20),G(16767354),0,.6,0));const e=I(new zt(.025,.025,.55,8),G(13208125),.12,.75,0);e.rotation.z=-.4,i.add(e);const n=I(new ye(.34,.16),new Ae({map:Mi("HONEY","#fff3c4","#b86a00")}),0,.28,.33);return i.add(n),i}function Av(){const i=new yt;i.add(I(new zt(.46,.4,.06,24),G(14085375),0,.03,0));const t=G(16242058,{map:Au()});for(let e=0;e<3;e++){const n=I(new po(.18,.06,64,8,2+e,3),t,0,.16+e*.1,0);n.rotation.set(Math.PI/2,e,0),n.scale.set(1.1-e*.2,1.1-e*.2,.6),i.add(n)}return i}function Rv(i){const t=Ss[i],e={sack:vv,jar:xv,butter:Mv,egg:yv,milk:Sv,vanilla:bv,dates:wv,coconut:Ev,honey:Tv,pastry:Av}[t.model],n=Ne(e(t));return n.userData.ingredient=i,n}function Cv(){const i=new yt,t=[[0,0],[.55,0],[.62,.05],[.9,.22],[1.12,.52],[1.2,.86],[1.25,.9]].map(([a,c])=>new nt(a,c)),e=[[1.25,.9],[1.14,.88],[1.08,.56],[.88,.3],[.55,.14],[0,.12]].map(([a,c])=>new nt(a,c)),n=I(new en(t,40),Fe(16752575));i.add(n);const s=I(new en(e,40),G(16775922,{side:Ee}));i.add(s);const r=I(new Re(1.2,.055,8,48),G(16777215),0,.9,0);r.rotation.x=Math.PI/2,i.add(r),i.userData.bodyMat=n.material;const o=I(new Zn(1,40),Fe(16047272),0,.2,0);return o.rotation.x=-Math.PI/2,o.visible=!1,i.add(o),i.userData.batter=o,i.userData.innerR=a=>{for(let c=0;c<e.length-1;c++){const l=e[c],h=e[c+1];if(a<=l.y&&a>=h.y)return sr.lerp(h.x,l.x,(a-h.y)/(l.y-h.y))}return .5},Ne(i)}function Pv(){const i=new yt,t=G(14262374),e=I(new zt(.045,.06,1.5,10),t,0,.8,0);i.add(e);const n=I(new qt(.17,14,10),t,0,.05,0);return n.scale.set(1,1.4,.45),i.add(n),Ne(i)}function Dv(){const i=new yt,t=[[0,0],[.3,0],[.34,.08],[.36,.45],[.4,.62],[0,.62]].map(([r,o])=>new nt(r,o));i.add(I(new en(t,24),G(16752575)));const e=I(new gi(.1,.25,10,1,!0),G(16752575,{side:Ee}),.4,.56,0);e.rotation.z=Math.PI/2+.3,i.add(e);const n=I(new Re(.18,.04,8,16,Math.PI),G(16752575),-.36,.34,0);n.rotation.z=Math.PI/2,i.add(n);const s=I(new Zn(.37,24),G(16310948),0,.6,0);return s.rotation.x=-Math.PI/2,i.add(s),Ne(i)}function _h(i){const t=new yt,e=I(Pu(i,1),G(13621478,{emissive:2239027}));t.add(e);const n=I(new Re(.16,.035,8,20,Math.PI),G(16744360),0,.33,0);return t.add(n),Ne(t)}function vh(i=3.9,t=2.7){const e=new yt,n=G(13884132);e.add(I(new Oe(i,.08,t,2,.03),n,0,.04,0));for(const[r,o,a,c]of[[0,t/2,i,.08],[0,-t/2,i,.08],[i/2,0,.08,t],[-i/2,0,.08,t]])e.add(I(new Me(a,.14,c),n,r,.1,o));const s=I(new ye(i-.3,t-.3),G(16774886),0,.085,0);return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,e.add(s),Ne(e)}function Lv(i,t,e){const n=new jn,s=.5;n.moveTo(-i/2+s,-t/2),n.lineTo(i/2-s,-t/2),n.quadraticCurveTo(i/2,-t/2,i/2,-t/2+s),n.lineTo(i/2,t/2-s),n.quadraticCurveTo(i/2,t/2,i/2-s,t/2),n.lineTo(-i/2+s,t/2),n.quadraticCurveTo(-i/2,t/2,-i/2,t/2-s),n.lineTo(-i/2,-t/2+s),n.quadraticCurveTo(-i/2,-t/2,-i/2+s,-t/2);const r=I(on(n,.08,.04),Fe(e));return r.receiveShadow=!0,r}function Iv(){const i=new yt,t=G(15120254),e=I(new zt(.16,.16,1.6,18),t);e.rotation.z=Math.PI/2,i.add(e);for(const n of[-1,1]){const s=I(new zt(.06,.06,.4,10),G(16752575),n*1,0,0);s.rotation.z=Math.PI/2,i.add(s)}return Ne(i)}function _a(i){const t=new yt;if(i==="tin"||i==="pan"){const e=i==="pan",n=e?1.55:.42,s=e?.55:.22;t.add(I(new zt(n,n*.94,s,e?48:24,1,!0),G(13226718,{side:Ee}),0,s/2,0)),t.add(I(new zt(n*.94,n*.94,.02,e?48:24),G(12108495),0,.01,0));const r=I(new Re(n,.03,6,e?48:24),G(14739182),0,s,0);r.rotation.x=Math.PI/2,t.add(r)}return Ne(t)}function Iu(i="board"){const t=new yt;if(i==="stand"){const e=I(new zt(2,1.95,.12,48),G(16777215),0,.5,0);t.add(e);const n=I(new Re(2,.06,6,64),G(16765408),0,.53,0);n.rotation.x=Math.PI/2,t.add(n),t.add(I(new zt(.25,.35,.45,20),G(16777215),0,.22,0)),t.add(I(new zt(.8,.9,.08,28),G(16777215),0,.04,0)),t.userData.top=.56}else{t.add(I(new Oe(4.6,.12,3.2,3,.06),G(16777215),0,.06,0));const e=I(new Oe(4.3,.02,2.9,2,.01),G(16770030),0,.125,0);t.add(e),t.userData.top=.135}return Ne(t,!0)}function Uv(i,t,e,n="pink"){const s=new yt,r=Uc[n].hex,o=Cu(r),a=new mo({color:16777215,gradientMap:_o,map:o}),c=G(new Nt(r).lerp(new Nt(16777215),.6).getHex(),{side:Ee}),l=.06;s.add(I(new Me(i,l,t),c,0,l/2,0));for(const[p,f,S,x]of[[0,t/2,i,l],[0,-t/2,i,l],[i/2,0,l,t],[-i/2,0,l,t]])s.add(I(new Me(S,e,x),a,p,e/2,f));const h=I(new ye(i-.1,t-.1),G(16777215),0,l+.01,0);h.rotation.x=-Math.PI/2,s.add(h);const u=new yt;u.add(I(new Me(i+.12,.28,t+.12),a,0,.14,0)),u.add(I(new Me(i+.08,.02,t+.08),c,0,0,0));const d=new yt,m=G(Nc.red);d.add(I(new Me(i+.16,.3,.2),m,0,.145,0)),d.add(I(new Me(.2,.3,t+.16),m,0,.145,0));const g=new yt,_=new Re(.28,.08,8,20);for(const p of[-1,1]){const f=I(_,m,p*.3,.2,0);f.scale.set(1.1,.8,.6),f.rotation.z=p*.35,g.add(f);const S=I(new Me(.14,.03,.5),m,p*.18,.02,.28);S.rotation.y=p*.4,g.add(S)}return g.add(I(new qt(.13,12,10),m,0,.18,0)),g.position.y=.3,d.add(g),d.userData.mat=m,u.add(d),u.userData.ribbon=d,u.userData.bow=g,s.add(u),s.userData.lid=u,s.userData.sideMat=a,s.userData.inMat=c,s.userData.size={w:i,d:t,h:e},Ne(s)}function va(i,t,e){const n=i.userData;if(t){const s=Uc[t].hex;n.sideMat.map=Cu(s),n.sideMat.needsUpdate=!0,n.inMat.color.set(new Nt(s).lerp(new Nt(16777215),.6))}if(e){const s=n.lid.userData.ribbon,r=G(Nc[e]);s.traverse(o=>{o.isMesh&&(o.material=r)})}}function Nv(){const i=new yt,t=3.3,e=2.4,n=2.1,s=Fe(16773600),r=Fe(16752575);i.userData.bodyMat=s,i.userData.accentMat=r;const o=.18;i.add(I(new Oe(t,o,n,3,.07),s,0,o/2,0)),i.add(I(new Oe(t,.5,n,3,.12),s,0,e-.25,0)),i.add(I(new Oe(o,e,n,3,.07),s,-t/2+o/2,e/2,0)),i.add(I(new Oe(o,e,n,3,.07),s,t/2-o/2,e/2,0)),i.add(I(new Me(t-.1,e-.1,o),s,0,e/2,-n/2+o/2));const a=new Ae({color:5913146});i.userData.interiorMat=a;const c=I(new ye(t-.4,e-.7),a,0,(e-.5)/2+.1,-n/2+o+.01);i.add(c);const l=I(new ye(t-.4,n-.3),G(6965834),0,o+.01,0);l.rotation.x=-Math.PI/2,i.add(l);for(let M=0;M<7;M++){const P=I(new zt(.015,.015,n-.3,6),G(11184810),-1.2+M*.4,.45,0);P.rotation.x=Math.PI/2,i.add(P)}const h=new Ae({color:8930372});i.userData.coilMat=h;for(let M=0;M<3;M++){const P=I(new zt(.03,.03,t-.6,6),h,0,e-.6,-.6+M*.6);P.rotation.z=Math.PI/2,i.add(P)}const u=I(new Oe(t-.2,.42,.1,2,.04),r,0,e-.25,n/2+.02);i.add(u);const d=[];for(const M of[-1.1,-.6,.9]){const P=I(new zt(.13,.13,.1,16),G(16777215),M,e-.25,n/2+.1);P.rotation.x=Math.PI/2;const H=I(new Me(.03,.1,.02),G(5913104),0,.06,.05);H.rotation.x=-Math.PI/2,P.add(H),i.add(P),d.push(P)}i.userData.knobs=d;const m=I(new qt(.08,12,8),new Ae({color:7829367}),.2,e-.25,n/2+.08);i.add(m),i.userData.lampMat=m.material;const g=I(on(gn("crescent"),.02,.01,.3,1),G(15909198),.45,e-.25,n/2+.08);g.rotation.x=Math.PI/2,i.add(g);const _=new yt;_.position.set(0,o,n/2+.02);const p=t-.25,f=e-.75,S=new jn;S.moveTo(-p/2,0),S.lineTo(p/2,0),S.lineTo(p/2,f),S.lineTo(-p/2,f),S.closePath();const x=new Js,v=p-.6,L=f-.55;x.moveTo(-v/2,.22),x.lineTo(-v/2,.22+L),x.lineTo(v/2,.22+L),x.lineTo(v/2,.22),x.closePath(),S.holes.push(x);const T=new lr(S,{depth:.1,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:2});_.add(I(T,s));const A=I(new ye(v,L),new Ae({color:16767392,transparent:!0,opacity:.22,depthWrite:!1}),0,.22+L/2,.06);_.add(A),i.userData.glassMat=A.material;const D=I(new zt(.06,.06,p-.8,12),r,0,f-.12,.3);D.rotation.z=Math.PI/2,_.add(D);for(const M of[-1,1])_.add(I(new Me(.06,.06,.22),r,M*(p-.8)/2,f-.12,.2));i.add(_),i.userData.door=_;const w=new $_(16751168,0,5,1.5);return w.position.set(0,1.4,0),i.add(w),i.userData.light=w,i.userData.size={W:t,H:e,D:n},Ne(i)}function Fc(i=15909198,t=16769162){const e=new yt,n=G(i,{emissive:3351040}),s=I(new Re(.08,.02,6,12),n,0,.78,0);e.add(s),e.add(I(new gi(.3,.26,6),n,0,.6,0));const r=I(new zt(.26,.2,.5,6),dn(t),0,.22,0);e.add(r);const o=new f_(new w_(new zt(.265,.205,.5,6)),new uu({color:i}));o.position.y=.22,e.add(o),e.add(I(new zt(.3,.3,.05,6),n,0,.47,0)),e.add(I(new zt(.22,.22,.05,6),n,0,-.03,0));const a=I(new gi(.18,.22,6),n,0,-.16,0);return a.rotation.x=Math.PI,e.add(a),e.add(I(new qt(.04,8,6),n,0,-.29,0)),e}function xh(i,t,e){const n=new yt;return n.add(I(new Oe(3,.1,.6,2,.03),G(15120254),0,0,0)),[[16752327,"MIX"],[9423615,"SALT"],[16770155,"OATS"],[9627327,"TEA"]].forEach(([r,o],a)=>{const c=new yt;c.add(I(new zt(.22,.22,.46,16),G(16777215),0,.23,0)),c.add(I(new zt(.24,.24,.1,16),G(r),0,.5,0));const l=I(new ye(.3,.14),new Ae({map:Mi(o,"#ffffff",vo(r))}),0,.23,.225);c.add(l),c.position.set(-1.1+a*.72,.05,0),n.add(c)}),n.position.set(i,t,-2),Ne(n)}function kv(i,t,e,n,s){const r=new yt,o=new fo(ss([[-.2,0],[.2,0],[0,-.42]])),a=5;let c=0;for(let l=i;l<t;l+=a){const h=pn(l,e,n),u=pn(l+a,e,n),d=pn(l+a/2,e-.6,n+.1),m=new ho(h,d,u);r.add(I(new Ps(m,16,.015,4),G(16777215)));const g=8;for(let _=1;_<g;_++){const p=m.getPoint(_/g),f=I(o,s[c++%s.length],p.x,p.y,p.z+.02);r.add(f)}}return r}function Fv(i,t,e,n){const s=new yt,r=[16773800,16762844,12575743,13236185],o=new qt(.06,8,6);for(let a=i;a<t;a+=4){const c=new ho(pn(a,e,n),pn(a+2,e-.35,n+.05),pn(a+4,e,n));s.add(I(new Ps(c,12,.01,3),G(5921370)));for(let l=1;l<6;l++){const h=c.getPoint(l/6);s.add(I(o,dn(r[l%4]),h.x,h.y-.06,h.z))}}return s}function Ov(i,t){const e=new yt,n=G(15909198,{emissive:3811840}),s=I(on(gn("crescent"),.05,.02,.9),n);s.rotation.x=Math.PI/2,s.position.y=-.9,e.add(s);const r=I(on(gn("star"),.05,.02,.4),n);return r.rotation.x=Math.PI/2,r.position.set(.5,-.55,.05),e.add(r),e.add(I(new zt(.008,.008,.5,4),G(16777215),0,-.2,0)),e.add(I(new zt(.008,.008,.25,4),G(16777215),.5,-.2,.05)),e.position.set(i,t,-2.1),e}function Bv(i,t){const e=new yt,n=2.6,s=2.2,r=I(new ye(n,s),new Ae({map:nv()}),0,0,0);e.add(r);const o=G(16777215);for(const[l,h,u,d]of[[0,s/2,n+.2,.14],[0,-s/2,n+.4,.2],[n/2,0,.14,s],[-n/2,0,.14,s],[0,0,.08,s],[0,.1,n,.08]])e.add(I(new Me(u,d,.14),o,l,h,.05));const a=I(new Re(n/2+.04,.08,6,24,Math.PI),o,0,s/2,.05);e.add(a);const c=I(new Zn(n/2,24,0,Math.PI),new Ae({color:3882895}),0,s/2,-.01);e.add(c),e.add(I(new Oe(n+.2,.3,.4,2,.06),G(16752575),0,-s/2-.2,.2));for(let l=0;l<7;l++)e.add(I(new qt(.13,8,6),G([16740264,16777215,16769098][l%3]),-1.1+l*.37,-s/2+.02,.25));return e.position.set(i,t,-2.25),Ne(e)}function zv(i,t){const e=new yt;e.add(I(new Oe(3.4,1,.1,2,.05),G(14725754),0,0,0));const n=I(new ye(3.2,.85),new Ae({map:Mi("Eid Mubarak!","#fff6ea","#e0508a",512,128)}),0,0,.06);e.add(n);for(const s of[-1,1])e.add(I(new zt(.01,.01,.9,4),G(16777215),s*1.3,.85,0));return e.position.set(i,t,-2.2),e}function Hv(){const i=new yt,t={wall:Fe(16770284),tile:Fe(16762841,{map:ev()}),counter:Fe(16775409),cabinet:Fe(16752575),trim:Fe(15760035),floor:Fe(15780256),bunting:[0,1,2,3].map(()=>Fe(16777215,{side:Ee}))},e=-16,n=42,s=n-e,r=(e+n)/2,o=I(new ye(s+40,40),t.floor,r,0,8);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,i.add(o);const a=I(new ye(s+40,12),t.wall,r,6,-2.3);a.receiveShadow=!0,i.add(a);const c=I(new ye(s,1.5),t.tile,r,1.75,-2.28);c.receiveShadow=!0,i.add(c),i.add(I(new Me(s,.08,.08),t.trim,r,2.52,-2.26));const l=I(new Me(s,.9,3.5),t.cabinet,r,.45,-.5);l.receiveShadow=!0,i.add(l);const h=I(new Oe(s+.2,.12,3.9,2,.05),t.counter,r,.94,-.42);h.receiveShadow=!0,i.add(h),i.add(I(new Me(s+.2,.05,.05),t.trim,r,.87,1.53));for(let _=e+1;_<n-.5;_+=1.8){const p=I(new Oe(1.6,.72,.06,2,.03),t.cabinet,_+.8,.45,1.27);i.add(p);const f=I(new Oe(1.3,.48,.04,2,.02),t.trim,_+.8,.45,1.3);i.add(f),i.add(I(new qt(.06,8,6),G(16777215),_+.8,.62,1.34))}const u=t.bunting;i.add(kv(e,n,4.9,-2.15,u)),i.add(Fv(e,n,3.9,-2.2)),i.add(Bv(-6,3.6));const d=zv(0,3.35);i.add(d),i.userData.sign=d,i.add(xh(8,3.1)),i.add(xh(28.5,3.1));for(const _ of[-9,-2.5,4,12,20,25,36])i.add(Ov(_,5.6));const m=[];for(const[_,p]of[[-3.5,15909198],[3.2,16744360],[11.5,6211839],[19.5,15909198],[26.5,16744360],[34,8315018]]){const f=Fc(p);f.position.set(_,5.1,-1.4),i.add(I(new zt(.01,.01,2,4),G(8947848),_,6.9,-1.4)),i.add(f),m.push(f)}i.userData.lanterns=m;const g=new yt;g.add(I(new zt(.3,.22,.45,14),G(15305306),0,.22,0));for(let _=0;_<6;_++){const p=I(new qt(.2,8,6),G(6274922),Math.cos(_)*.18,.6+_%2*.15,Math.sin(_)*.12);p.scale.set(.6,1.4,.6),p.rotation.z=Math.cos(_)*.5,g.add(p)}return g.position.set(-9.5,1,-1.6),i.add(Ne(g)),i.userData.mats=t,i}function Vv(i,t){const e=i.userData.mats;e.wall.color.set(t.wall),e.tile.color.set(t.tile),e.counter.color.set(t.counter),e.cabinet.color.set(t.cabinet),e.trim.color.set(t.trim),e.floor.color.set(t.floor),e.bunting.forEach((n,s)=>n.color.set(t.bunting[s%t.bunting.length]))}const Gv=(()=>{const i=[[0,0],[.44,0],[.43,.06],[.38,.4],[.31,.8],[.26,1.05],[.2,1.18],[0,1.22]].map(([t,e])=>new nt(t,e));return new en(i,28)})();function dc(i){const t=new yt,e=G(i.skin??15910048),n=G(i.dress??16744360),s=new yt;t.add(s);const r=I(Gv,n);if(s.add(r),i.apron){const g=I(new zt(.3,.42,.85,20,1,!0,-.9,1.8),G(16777215,{side:Ee}),0,.5,.02);g.rotation.y=Math.PI/2-Math.PI/2,s.add(g);const _=I(on(gn("heart"),.01,.01,.2,1),G(16740264),0,.62,.36);_.rotation.x=Math.PI/2-.2,s.add(_)}for(const g of[-1,1]){const _=I(new qt(.11,10,8),G(6965818),g*.15,.05,.25);_.scale.set(1,.6,1.5),s.add(_)}const o=[];for(const g of[-1,1]){const _=new yt;_.position.set(g*.25,1.1,0);const p=I(new ar(.08,.38,4,8),n,0,-.24,0);_.add(p);const f=I(new qt(.075,10,8),e,0,-.5,0);_.add(f),_.rotation.z=g*.25,s.add(_),o.push(_)}t.userData.arms=o;const a=new yt;a.position.y=1.5,s.add(a);const c=I(new qt(.3,24,18),e);if(a.add(c),i.kind==="woman"||i.kind==="girl"||i.kind==="grandma"){const g=G(i.hijab??16748472),_=I(new qt(.345,24,18),g,0,.03,-.07);a.add(_);const p=I(new Re(.255,.055,10,32),g,0,-.01,.18);p.scale.set(.95,1.1,1),a.add(p);const f=I(new en([[.16,-.2],[.26,-.28],[.36,-.4],[.43,-.56],[.44,-.62]].map(([x,v])=>new nt(x,v)),28),G(i.hijab??16748472,{side:Ee}),0,0,-.03);a.add(f);const S=I(new Re(.2,.06,10,24,Math.PI),g,0,-.19,.02);S.rotation.set(Math.PI/2+.35,0,0),a.add(S),t.userData.hijabMats=[g,f.material]}else{a.add(I(new qt(.305,20,12,0,Math.PI*2,0,Math.PI/2.2),G(3811870),0,0,-.02));const g=I(new zt(.25,.29,.16,22),G(i.cap??16777215),0,.22,-.02);a.add(g);for(const _ of[-1,1]){const p=I(new qt(.06,8,6),e,_*.29,-.02,0);p.scale.z=.6,a.add(p)}if(i.kind==="man"){const _=I(new qt(.27,18,12,0,Math.PI*2,Math.PI*.55,Math.PI*.45),G(3811870),0,.02,.03);a.add(_)}}const h=dn(2759188),u=dn(16777215);for(const g of[-1,1]){const _=I(new qt(.048,12,10),h,g*.1,.03,.27);_.scale.set(.9,1.15,.6),a.add(_),a.add(I(new qt(.016,6,5),u,g*.1+.015,.055,.3));const p=I(new Zn(.05,14),dn(16751272,{transparent:!0,opacity:.7}),g*.17,-.06,.255);if(p.rotation.y=g*.55,a.add(p),i.kind==="grandma"){const f=I(new Re(.075,.012,6,18),G(9071162),g*.1,.03,.29);a.add(f)}}const d=I(new Re(.06,.014,6,14,Math.PI),h,0,-.07,.28);d.rotation.z=Math.PI,a.add(d),t.userData.head=a,t.userData.body=s;const m={woman:1,grandma:.95,man:1.06,girl:.8,boy:.72}[i.kind]??1;return t.scale.setScalar(m),Ne(t)}function Wv(i,t){for(const e of i.userData.hijabMats||[])e.color.set(t)}function Xv(i,t){const e=new yt,n=2.8,s=2.5,r=2.2;if(e.add(I(new Oe(n,s,r,3,.08),G(i.house),0,s/2,0)),i.kind==="woman"||i.kind==="grandma"){e.add(I(new Me(n+.1,.18,r+.1),G(16777215),0,s+.05,0));for(let f=0;f<7;f++)e.add(I(new Me(.2,.2,.2),G(16777215),-n/2+.1+f*(n-.2)/6,s+.24,r/2));const _=I(new qt(.7,20,12,0,Math.PI*2,0,Math.PI/2),G(i.door),.3,s+.1,-.2);_.scale.y=1.2,e.add(_);const p=I(on(gn("crescent"),.03,.01,.35,1),G(15909198),.3,s+1.1,-.2);p.rotation.x=Math.PI/2,e.add(p)}else{const _=I(new gi(2.25,1.3,4),G(i.door),0,s+.64,0);_.rotation.y=Math.PI/4,_.scale.set(1,1,.85),e.add(_)}const a=new jn;a.moveTo(0,0),a.lineTo(.9,0),a.lineTo(.9,1.1),a.absarc(.45,1.1,.45,0,Math.PI,!1),a.closePath();const c=I(new fo(a),dn(3811882),-.45,.02,r/2+.01);e.add(c);const l=new yt;l.position.set(-.45,.02,r/2+.02);const h=I(new lr(a,{depth:.06,bevelEnabled:!1}),G(i.door));l.add(h),l.add(I(new qt(.06,8,6),G(15909198),.75,.8,.09)),e.add(l),e.userData.door=l;const u=I(new Re(.5,.06,6,20,Math.PI),G(16777215),0,1.12,r/2+.03);e.add(u);for(const _ of[-1,1]){const p=I(new ye(.5,.6),dn(16773296),_*.95,1.5,r/2+.01);e.add(p);const f=I(new Zn(.25,12,0,Math.PI),dn(16773296),_*.95,1.8,r/2+.01);e.add(f);for(const S of[-1,1])e.add(I(new Me(.2,.7,.04),G(i.door),_*.95+S*.38,1.52,r/2+.03))}const d=I(new ye(1.7,.36),new Ae({map:Mi(t,"#ffffff",vo(i.door),384,80)}),0,1.9,r/2+.03);d.position.y=2.2,e.add(d);const m=Fc(15909198);m.scale.setScalar(.5),m.position.set(.72,1.35,r/2+.2),e.add(m),e.add(I(new Me(1.3,.1,.5),G(15260875),0,.05,r/2+.25));const g=I(new zt(.18,.13,.3,10),G(15305306),-1.05,.15,r/2+.3);return e.add(g),e.add(I(new qt(.22,8,6),G(6274922),-1.05,.42,r/2+.3)),e.add(I(new qt(.07,6,5),G(16740264),-.98,.58,r/2+.42)),e.userData.size={W:n,H:s,D:r},Ne(e)}function $v(i=3.4){const t=new yt,e=G(11565637);for(let s=0;s<7;s++){const r=I(new zt(.14-s*.008,.17-s*.008,i/7,8),e,Math.sin(s*.4)*.12,(s+.5)*i/7,0);t.add(r)}const n=G(5223258,{side:Ee});for(let s=0;s<7;s++){const r=I(new qt(.8,10,6),n);r.scale.set(1,.08,.28),r.position.set(Math.cos(s/7*Math.PI*2)*.7,i-.1,Math.sin(s/7*Math.PI*2)*.7),r.rotation.y=-s/7*Math.PI*2,r.rotation.z=-.35,t.add(r)}for(let s=0;s<5;s++)t.add(I(new qt(.09,6,5),G(10111518),Math.cos(s)*.15,i-.3,Math.sin(s)*.15));return Ne(t)}function qv(){const i=new yt;i.add(I(new zt(.06,.08,3,8),G(3820138),0,1.5,0));const t=Fc(3820138);t.scale.setScalar(.7),t.position.y=2.75,i.add(t);const e=I(on(gn("crescent"),.03,.01,.35,1),G(15909198),0,3.5,0);return e.rotation.x=Math.PI/2,i.add(e),Ne(i)}function Yv(i=1){const t=new yt,e=G(16777215);for(const[n,s,r]of[[0,0,.8],[.8,-.1,.6],[-.8,-.1,.6],[.3,.35,.55]])t.add(I(new qt(r,12,10),e,n,s,0));return t.scale.set(i*1.4,i,i),t}const Mh=(()=>{const i=on(gn("heart"),.05,.02,.5,1);return i.rotateX(Math.PI/2),i.center(),i})(),yh=(()=>{const i=on(gn("star"),.04,.02,.45,1);return i.rotateX(Math.PI/2),i.center(),i})(),jv=new qt(.08,8,6);let Ri=null,Fi=null,xo=!1;function Oc(){if(!Ri){const i=window.AudioContext||window.webkitAudioContext;if(!i)return null;Ri=new i,Fi=Ri.createGain(),Fi.gain.value=xo?0:.5,Fi.connect(Ri.destination)}return Ri.state==="suspended"&&Ri.resume(),Ri}function Uu(){Oc()}function Bc(i){xo=i,Fi&&(Fi.gain.value=i?0:.5)}function ve(i,t,{type:e="sine",vol:n=.3,slide:s=0,delay:r=0}={}){const o=Oc();if(!o||xo)return;const a=o.currentTime+r,c=o.createOscillator(),l=o.createGain();c.type=e,c.frequency.setValueAtTime(i,a),s&&c.frequency.exponentialRampToValueAtTime(Math.max(40,i+s),a+t),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(n,a+.01),l.gain.exponentialRampToValueAtTime(1e-4,a+t),c.connect(l).connect(Fi),c.start(a),c.stop(a+t+.05)}function Sn(i,{vol:t=.4,cutoff:e=900,type:n="lowpass",delay:s=0,sweep:r=0}={}){const o=Oc();if(!o||xo)return;const a=o.currentTime+s,c=Math.floor(o.sampleRate*i),l=o.createBuffer(1,c,o.sampleRate),h=l.getChannelData(0);for(let g=0;g<c;g++)h[g]=(Math.random()*2-1)*Math.sin(Math.PI*g/c);const u=o.createBufferSource();u.buffer=l;const d=o.createBiquadFilter();d.type=n,d.frequency.setValueAtTime(e,a),r&&d.frequency.exponentialRampToValueAtTime(Math.max(60,e+r),a+i);const m=o.createGain();m.gain.value=t,u.connect(d).connect(m).connect(Fi),u.start(a)}let Sh=0;const Bt={click:()=>ve(700,.07,{type:"triangle",vol:.18}),pick:()=>ve(520,.1,{type:"triangle",vol:.2,slide:200}),pour:()=>{Sn(.6,{vol:.35,cutoff:2400,sweep:-1800}),ve(300,.2,{type:"sine",vol:.12,slide:-120,delay:.3})},plop:()=>ve(420,.14,{type:"sine",vol:.3,slide:-260}),stir:()=>{const i=performance.now();i-Sh<140||(Sh=i,Sn(.16,{vol:.2,cutoff:700,type:"bandpass",sweep:400}))},cut:()=>{ve(180,.12,{type:"square",vol:.12,slide:-80}),Sn(.08,{vol:.25,cutoff:1500})},fill:()=>ve(300+Math.random()*120,.08,{type:"sine",vol:.12,slide:80}),done:()=>[660,880,1100].forEach((i,t)=>ve(i,.16,{type:"triangle",vol:.2,delay:t*.08})),door:()=>{Sn(.25,{vol:.25,cutoff:500}),ve(140,.18,{type:"triangle",vol:.15})},tick:()=>ve(1200,.03,{type:"square",vol:.04}),ding:()=>{ve(1568,.8,{type:"sine",vol:.25}),ve(2093,.6,{type:"sine",vol:.12,delay:.02})},oops:()=>[520,440,392].forEach((i,t)=>ve(i,.18,{type:"triangle",vol:.16,delay:t*.12})),notyet:()=>ve(330,.2,{type:"triangle",vol:.15,slide:60}),frost:()=>{Sn(.22,{vol:.25,cutoff:500,sweep:300}),ve(260,.15,{type:"sine",vol:.12,slide:120})},sprinkle:()=>{for(let i=0;i<3;i++)ve(1800+Math.random()*1400,.04,{type:"sine",vol:.06,delay:i*.03})},place:()=>ve(900+Math.random()*200,.07,{type:"sine",vol:.15,slide:300}),sparkle:()=>[1568,1976,2349,2637].forEach((i,t)=>ve(i,.18,{type:"sine",vol:.1,delay:t*.05})),box:()=>{ve(220,.12,{type:"triangle",vol:.2}),Sn(.1,{vol:.15,cutoff:800})},ribbon:()=>{Sn(.4,{vol:.18,cutoff:3e3,type:"bandpass",sweep:2e3}),[880,1320].forEach((i,t)=>ve(i,.2,{type:"triangle",vol:.14,delay:.3+t*.1}))},knock:()=>[0,.18,.36].forEach(i=>{ve(160,.08,{type:"square",vol:.12,delay:i}),Sn(.06,{vol:.3,cutoff:400,delay:i})}),step:()=>ve(200,.05,{type:"triangle",vol:.06}),happy:()=>[523,659,784,1047,1319].forEach((i,t)=>ve(i,.22,{type:"triangle",vol:.2,delay:t*.09})),star:(i=0)=>ve(880*2**(i*4/12),.3,{type:"sine",vol:.25,delay:0}),unlock:()=>[784,988,1175,1568,1976].forEach((i,t)=>ve(i,.3,{type:"triangle",vol:.18,delay:t*.08})),shutter:()=>{Sn(.07,{vol:.5,cutoff:4e3,type:"highpass"}),Sn(.09,{vol:.4,cutoff:3e3,type:"highpass",delay:.1})},whoosh:()=>Sn(.35,{vol:.2,cutoff:400,type:"bandpass",sweep:1800}),soft:()=>ve(300,.15,{type:"sine",vol:.12})};let Ui=null,ps=null,Ws=null;const $n=new Map;function Mo(){if(Ui)return!0;try{const t=document.createElement("canvas");Ui=new lu({canvas:t,antialias:!0,alpha:!0,preserveDrawingBuffer:!0})}catch{return!1}Ui.setPixelRatio(1),Ui.outputColorSpace=Ye,ps=new hu,ps.add(new Mu(16777215,16767462,1.7));const i=new Su(16777215,1.5);return i.position.set(-3,8,6),ps.add(i),Ws=new Ke(30,1,.1,100),!0}function yo(i,t,{pitch:e=.35,pad:n=1.05,yBias:s=0}={}){Ui.setSize(t,t,!1),ps.add(i),i.updateMatrixWorld(!0);const r=new As().setFromObject(i),o=r.getCenter(new R);o.y+=s;const c=r.getBoundingSphere(new or).radius*n/Math.sin(sr.degToRad(Ws.fov/2));Ws.position.set(o.x,o.y+c*Math.sin(e),o.z+c*Math.cos(e)),Ws.lookAt(o),Ui.render(ps,Ws);const l=Ui.domElement.toDataURL("image/png");return ps.remove(i),l}function Xs(i,t=1.25,e=3){if(i===1)return[[0,0]];const n=Math.ceil(i/e),s=[];for(let r=0;r<i;r++)s.push([(r%e-(e-1)/2)*t,(Math.floor(r/e)-(n-1)/2)*t]);return s}function Nu(i){const t=new yt,e=i.r==="cake",n=Iu(e?"stand":"board");t.add(n);const s=Xs(i.treats.length);return i.treats.forEach((r,o)=>{const a=ai(r);a.position.set(s[o][0],n.userData.top,s[o][1]),t.add(a)}),t}function So(i,t=160){const e=`p:${i}:${t}`;if($n.has(e))return $n.get(e);if(!Mo())return"";const n=dc(Ge[i]),s=new yt;s.add(n);const r=n.scale.x;n.position.y=-1.3*r;const o=yo(s,t,{pitch:.1,pad:.42,yBias:.42*r});return $n.set(e,o),o}function ms(i,t=180){const e=`r:${i}:${t}`;if($n.has(e))return $n.get(e);if(!Mo())return"";const n=yo(ai(Be[i].sample),t,{pitch:.55,pad:.85});return $n.set(e,n),n}function bo(i,t=220){const e=`c:${i.id}:${t}`;if($n.has(e))return $n.get(e);if(!Mo())return"";const n=yo(Nu(i),t,{pitch:.9,pad:i.r==="cake"?.85:.98});return $n.set(e,n),n}async function Zv(i,{who:t=null}={}){if(!Mo())return null;const e=new Image;e.src=yo(Nu(i),900,{pitch:.85,pad:i.r==="cake"?.82:.96}),await e.decode().catch(()=>{});const n=1080,s=1350,r=document.createElement("canvas");r.width=n,r.height=s;const o=r.getContext("2d"),a=o.createLinearGradient(0,0,0,s);a.addColorStop(0,"#ffd6e6"),a.addColorStop(1,"#fff3d6"),o.fillStyle=a,o.fillRect(0,0,n,s),o.fillStyle="rgba(255,255,255,0.55)";for(let u=0;u<9;u++)for(let d=0;d<11;d++){const m=60+u*120+d%2*60,g=60+d*125;if(o.beginPath(),(u+d)%2){for(let _=0;_<10;_++){const p=-Math.PI/2+_*Math.PI/5,f=_%2?7:16;o.lineTo(m+Math.cos(p)*f,g+Math.sin(p)*f)}o.fill()}else o.arc(m,g,14,0,Math.PI*2),o.arc(m+7,g-3,12,0,Math.PI*2,!0),o.fill("evenodd")}const c=(u,d,m,g,_)=>{o.beginPath(),o.roundRect(u,d,m,g,_)},l=o.createRadialGradient(n/2,700,60,n/2,700,620);l.addColorStop(0,"#ffffff"),l.addColorStop(1,"#ffe6ef"),o.fillStyle=l,o.shadowColor="rgba(160,80,110,0.25)",o.shadowBlur=30,o.shadowOffsetY=10,c(70,210,n-140,960,60),o.fill(),o.shadowColor="transparent",o.drawImage(e,90,230,n-180,n-180),o.textAlign="center",o.fillStyle="#e0508a",o.font=`800 110px ${ki}`,o.fillText("Eid Mubarak!",n/2,160),o.fillStyle="#5a3a10",o.font=`800 54px ${ki}`,o.fillText(`My ${Be[i.r].name}`,n/2,1245),o.font=`600 38px ${ki}`,o.fillStyle="#8a6a4a";const h=t?`A gift for ${Ge[t].name} · Eid Sweets Bakery`:"Baked with love · Eid Sweets Bakery";return o.fillText(h,n/2,1305),r.toDataURL("image/png")}const Ft=1,xe={shape:9,oven:17.5,deco:26,box:34},Vr=new R(0,0,-300),pt=(i,t,e)=>new R(i,t,e),we=sr.lerp,Hs=sr.clamp,bh=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,wh=i=>1-(1-i)**3,xa=i=>1+(1.7+1)*(i-1)**3+1.7*(i-1)**2,hn=i=>Math.round(i*1e3)/1e3,un={golden:.55,crispy:.8,speed:1/14};class Jv{constructor(t,e){this.canvas=t,this.hooks=e,this.renderer=new lu({canvas:t,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ih,this.renderer.outputColorSpace=Ye,this.scene=new hu,this.scene.background=new Nt(16770284),this.camera=new Ke(40,1,.1,400),this.ray=new bu,this.clock=new Y_,this.time=0,this.insets={top:90,bottom:140},this.tweens=[],this.particles=[],this.epoch=0,this.mode="title",this.step=null,this.viewName="title",this.look=pt(0,2,0),this.camAnim=null,this.pointer=null,this.hover=null,this.deco={tool:"frost",color:"pink",pearl:"white",fond:"star",undo:[]},this.boxColor="pink",this.ribbon="red",this.cutter="crescent",this.buildWorld(),this.bindInput(),this.resize(),window.addEventListener("resize",()=>this.resize()),this.renderer.setAnimationLoop(()=>this.frame())}buildWorld(){const t=this.scene;t.add(new Mu(16777215,16767462,1.45));const e=new Su(16777215,1.55);e.castShadow=!0,e.shadow.mapSize.set(1024,1024),Object.assign(e.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:1,far:40}),e.shadow.bias=-6e-4,t.add(e),t.add(e.target),this.sun=e,this.kitchen=Hv(),t.add(this.kitchen),this.oven=Nv(),this.oven.position.set(xe.oven,Ft,-1),t.add(this.oven),this.bowl=Cv(),this.bowl.position.set(0,Ft,-.4),t.add(this.bowl);const n=document.createElement("canvas");n.width=n.height=256;const s=n.getContext("2d");s.strokeStyle="rgba(255,255,255,0.9)",s.lineWidth=7,s.lineCap="round";for(let o=0;o<3;o++){s.beginPath();for(let a=0;a<1;a+=.01){const c=a*7+o*2.09,l=12+a*110;s.lineTo(128+Math.cos(c)*l,128+Math.sin(c)*l)}s.stroke()}const r=new fu(n);this.swirl=new ie(new Zn(1,40),new Ae({map:r,transparent:!0,opacity:0,depthWrite:!1})),this.swirl.rotation.x=-Math.PI/2,this.bowl.add(this.swirl),this.spoon=Pv(),this.spoon.visible=!1,t.add(this.spoon),this.lumps=new yt,this.bowl.add(this.lumps),this.girl=dc({kind:"girl",skin:15910048,dress:16744360,hijab:hc.rose,apron:!0}),t.add(this.girl),this.props=new yt,t.add(this.props),this.buildStreet()}buildStreet(){const t=new yt;t.position.copy(Vr);const e=new ie(new ye(120,80),G(10412666));e.rotation.x=-Math.PI/2,e.receiveShadow=!0,t.add(e),this.roads=[];for(let r=0;r<2;r++){const o=new ie(new ye(40,2.6),G(15983300));o.rotation.x=-Math.PI/2,o.position.y=.01,o.receiveShadow=!0,t.add(o),this.roads.push(o)}this.houses={};for(const r of zs){const o=Ge[r],a=Xv(o,o.name);a.userData.who=r;const c=dc(o);c.visible=!1,a.add(c),a.userData.person=c,t.add(a),this.houses[r]=a}this.streetDecor=[];for(let r=0;r<4;r++){const o=$v(3.2+r%2*.6);t.add(o),this.streetDecor.push(o)}for(let r=0;r<2;r++){const o=qv();t.add(o),this.streetDecor.push(o)}for(let r=0;r<6;r++){const o=Yv(.8+r%3*.3);o.position.set(-24+r*9,9+r%2*2,-22-r%3*4),t.add(o)}this.arrow=new yt;const n=new ie(new gi(.35,.6,16),G(16734858,{emissive:5574946}));n.rotation.x=Math.PI,this.arrow.add(n);const s=new Re(1,.06,8,40);this.targetRing=new ie(s,dn(16777215)),this.targetRing.rotation.x=-Math.PI/2,t.add(this.arrow),t.add(this.targetRing),this.arrow.visible=this.targetRing.visible=!1,this.street=t,this.scene.add(t)}layoutStreet(){const t=this.portrait;zs.forEach((n,s)=>{const r=this.houses[n];t?r.position.set((s%3-1)*3.25,0,s<3?-3.8:2.8):r.position.set((s-2.5)*3.3,0,-3),r.rotation.y=0}),this.roads[0].position.set(0,.01,t?-1.6:-.6),this.roads[1].position.set(0,.01,t?5:30);const e=t?[[-5.2,-6.4],[-1.6,-6.6],[1.6,-6.6],[5.2,-6.4],[-5.5,2.4],[5.5,2.4]]:[[-11.8,-3.6],[11.8,-3.6],[-6.6,-5.8],[6.6,-5.8],[-3.3,-1.7],[3.3,-1.7]];this.streetDecor.forEach((n,s)=>n.position.set(e[s][0],0,e[s][1]))}resize(){const t=window.innerWidth,e=window.innerHeight;this.w=t,this.h=e,this.renderer.setSize(t,e,!1);const n=this.portrait;this.portrait=t/e<.85,this.camera.aspect=t/e,this.camera.fov=this.portrait?50:40,this.camera.updateProjectionMatrix(),this.layoutStreet(),n!==void 0&&n!==this.portrait&&this.mode==="bake"&&this.relayoutBake(),this.applyView(!0)}setInsets(t,e,n=0){const s=this.insets;Math.abs(t-s.top)<2&&Math.abs(e-s.bottom)<2&&Math.abs(n-(s.right||0))<2||(this.insets={top:t,bottom:e,right:n},this.applyView(!1))}viewFor(t){const e=this.portrait,n=this.bowl.position.z;switch(t){case"title":return e?{t:pt(-.9,2.2,.8),hw:2.3,hh:1.9,pitch:.26}:{t:pt(-1.6,2.2,.8),hw:3.4,hh:2.3,pitch:.26};case"add":return{t:pt(0,Ft+.45,e?-.05:-.15),hw:e?2.3:4.3,hh:e?2.25:1.85,pitch:.82};case"stir":return{t:pt(0,Ft+.55,n),hw:1.55,hh:1.45,pitch:e?1.3:1};case"shape":return{t:pt(xe.shape,Ft+.2,0),hw:this.recipe==="cake"?2:2.15,hh:this.recipe==="cake"?1.9:1.55,pitch:e?1.25:1.05};case"oven":return{t:pt(xe.oven,Ft+1.25,0),hw:1.95,hh:1.5,pitch:.2};case"deco":return e&&this.recipe!=="cake"?{t:pt(xe.deco,Ft+.35,-.2),hw:1.45,hh:2.05,pitch:1.12}:this.recipe==="cake"?{t:pt(xe.deco,Ft+1.2,-.2),hw:2.15,hh:2.05,pitch:.82}:{t:pt(xe.deco,Ft+.35,-.2),hw:2,hh:1.3,pitch:.98};case"box":return{t:pt(xe.box,Ft+.35,-.4),hw:1.7,hh:2,pitch:.98};case"street":return{t:pt(Vr.x,1.5,Vr.z+(e?-.3:-1.2)),hw:e?5.1:10.2,hh:e?5.2:3.4,pitch:e?.82:.24};case"door":{const r=this.houses[this.deliverWho].getWorldPosition(new R);return{t:pt(r.x+.3,1.3,r.z+2.2),hw:2.2,hh:1.7,pitch:e?.3:.18}}default:return{t:pt(0,2,0),hw:4,hh:2,pitch:.3}}}camPose(t){const e=this.w/this.h,n=Math.tan(sr.degToRad(this.camera.fov/2)),s=Hs(this.insets.top/this.h,0,.45),r=Hs(this.insets.bottom/this.h,0,.6),o=1-2*s,a=-1+2*r,c=Math.max(.25,(o-a)/2),l=(o+a)/2,u=1-2*Hs((this.insets.right||0)/this.w,0,.6),d=-1,m=(u-d)/2,g=(u+d)/2,_=Math.max(t.hh/(n*c),t.hw/(n*e*.97*m)),p=pt(0,Math.sin(t.pitch),Math.cos(t.pitch)),f=pt(0,Math.cos(t.pitch),-Math.sin(t.pitch)),S=t.t.clone().sub(f.multiplyScalar(l*n*_)).add(pt(-g*n*e*_,0,0));return{pos:S.clone().add(p.multiplyScalar(_)),look:S}}setView(t,e=1.1){this.viewName=t,this.kitchen.userData.sign.visible=t!=="stir",this.applyView(e===0,e)}applyView(t,e=.5){const n=this.camPose(this.viewFor(this.viewName)),s=this.viewFor(this.viewName);if(this.sun.position.copy(s.t).add(pt(-4,10,7)),this.sun.target.position.copy(s.t),t){this.camAnim=null,this.camera.position.copy(n.pos),this.look.copy(n.look),this.camera.lookAt(this.look),this.camera.updateMatrixWorld();return}this.camAnim={fp:this.camera.position.clone(),fl:this.look.clone(),tp:n.pos,tl:n.look,t:0,dur:e}}anim(t,e,n=bh){const s=this.epoch;return new Promise(r=>{this.tweens.push({t:0,dur:t,fn:e,easing:n,ep:s,done:r})})}wait(t){return this.anim(t,()=>{})}alive(t){return t===this.epoch}burst(t,{n:e=10,colors:n=[16777215],geo:s=jv,speed:r=2,up:o=2,gravity:a=-6,life:c=.8,scale:l=1,spread:h=1}={}){for(let u=0;u<e;u++){const d=new ie(s,dn(n[u%n.length],s===Mh||s===yh?{side:Ee}:{}));d.position.copy(t),d.scale.setScalar(l);const m=Math.random()*Math.PI*2,g=pt(Math.cos(m)*r*h*Math.random(),o*(.6+Math.random()*.6),Math.sin(m)*r*h*Math.random());this.scene.add(d),this.particles.push({m:d,vel:g,life:c,max:c,gravity:a,s0:l,spin:(Math.random()-.5)*6})}}hearts(t,e=8){this.burst(t,{n:e,colors:[16734858,16748472,16762844],geo:Mh,speed:1.4,up:2.6,gravity:-.6,life:1.6,scale:.8})}stars(t,e=10,n=.6){this.burst(t,{n:e,colors:[16769098,16777215,16763210],geo:yh,speed:2.4,up:3,gravity:-4,life:1.1,scale:n})}showTitle(){this.epoch++,this.clearBake(),this.mode="title",this.step=null,this.scene.background=new Nt(16770284),this.girl.visible=!0,this.girl.position.set(this.portrait?-2:-2.6,0,2.5),this.girl.rotation.set(0,.3,0),this.girlHolding(!1),this.setView("title",this.viewName==="title"?0:1.2)}setTheme(t){Vv(this.kitchen,Ni[t]),this.oven.userData.accentMat.color.set(Ni[t].cabinet),this.bowl.userData.bodyMat.color.set(Ni[t].cabinet)}setHijab(t){Wv(this.girl,hc[t])}girlHolding(t){const[e,n]=this.girl.userData.arms;t?(e.rotation.set(-1.1,0,-.25),n.rotation.set(-1.1,0,.25)):(e.rotation.set(0,0,-.25),n.rotation.set(0,0,.25)),this.giftMini&&(this.giftMini.visible=t)}clearBake(){this.props.traverse(t=>{t.geometry&&t.geometry.dispose()}),this.handedGift&&this.handedGift.traverse(t=>{t.geometry&&t.geometry.dispose()}),this.scene.remove(this.props),this.props=new yt,this.scene.add(this.props),this.lumps.clear(),this.bowl.userData.batter.visible=!1,this.swirl.material.opacity=0,this.spoon.visible=!1,this.oven.userData.door.rotation.x=0,this.setOvenHeat(0,!1),this.drag=null,this.treats=[],this.slots=[],this.tool=null,this.cutterMesh=null,this.arrow.visible=this.targetRing.visible=!1;for(const t of zs){const e=this.houses[t];e.userData.person.visible=!1,e.userData.door.rotation.y=0,e.visible=!0}this.giftMini&&(this.girl.remove(this.giftMini),this.giftMini=null),this.handedGift&&(this.scene.remove(this.handedGift),this.handedGift=null);for(const t of zs){const[e,n]=this.houses[t].userData.person.userData.arms;e.rotation.set(0,0,-.25),n.rotation.set(0,0,.25)}}startBake(t){this.epoch++,this.clearBake(),this.mode="bake",this.recipe=t,this.R=Be[t],this.girl.visible=!1,this.scene.background=new Nt(16770284),this.deco.undo=[],this.decoReady=!1,this.bowl.position.set(0,Ft,this.portrait?-.75:-.4),this.ingredients=this.R.ingredients.map(e=>{const n=Rv(e);return n.userData.used=!1,this.props.add(n),n}),this.layoutIngredients(!0),this.added=0,this.stirP=0,this.shapeP=0,this.setStep("add")}layoutIngredients(t){const n=this.portrait?[[-1.35,1],[1.35,1],[-1.8,-1.2],[1.8,-1.2],[0,1.1]]:[[-2.3,.75],[2.3,.75],[-3.3,-.65],[3.3,-.65],[-1.15,1.2]];this.ingredients.forEach((s,r)=>{const[o,a]=n[r];s.userData.home=pt(o,Ft,a),(t||!s.userData.busy)&&(s.position.copy(s.userData.home),s.rotation.set(0,o<0?.35:-.35,0))})}relayoutBake(){var t;if((this.step==="add"||this.step==="stir")&&(this.bowl.position.z=this.portrait?-.75:-.4,this.layoutIngredients(!0)),this.step==="decorate"&&this.plate&&((t=this.treats)!=null&&t.length)){this.plate.rotation.y=this.portrait?Math.PI/2:0;const e=this.decoCells();this.treats.forEach((n,s)=>{n.cell=e[s],n.obj&&n.obj.position.set(xe.deco+n.cell[0],Ft+this.plate.userData.top,-.2+n.cell[1])})}}setStep(t){this.step=t,this.drag=null;const e=this.epoch;t==="add"?this.setView("add",1.2):t==="stir"?this.enterStir():t==="shape"?this.enterShape(e):t==="bake"?this.enterBake(e):t==="decorate"?this.enterDecorate(e):t==="box"?this.enterBox(e):t==="deliver"&&this.enterDeliver(e)}async pour(t){if(t.userData.used)return;t.userData.used=!0,t.userData.busy=!0;const e=this.epoch,n=Ss[t.userData.ingredient],s=this.bowl.position,r=t.position.clone(),o=t.position.x<s.x?-1:1,a=pt(s.x+o*.9,Ft+2.1,s.z+.1),c=t.rotation.clone();if(Bt.pick(),await this.anim(.45,g=>{t.position.lerpVectors(r,a,g),t.position.y+=Math.sin(g*Math.PI)*.6,t.rotation.z=we(c.z,-o*2.1,g),t.rotation.y=we(c.y,0,g)}),!this.alive(e))return;Bt.pour();const l=pt(s.x+o*.35,Ft+1.9,s.z+.1),h=.22+.4*(this.added+1)/this.ingredients.length;for(let g=0;g<7;g++)setTimeout(()=>{this.alive(e)&&this.burst(l,{n:4,colors:[n.color,n.lump],speed:.25,up:-.5,gravity:-9,life:.35,scale:1.1})},g*70);if(await this.wait(.45),!this.alive(e))return;Bt.plop(),this.added++;const u=this.bowl.userData.batter;u.visible=!0,u.position.y=h,u.scale.setScalar(this.bowl.userData.innerR(h)*.98);const d=this.ingredients.filter(g=>g.userData.used).map(g=>new Nt(Ss[g.userData.ingredient].lump)),m=d.reduce((g,_)=>g.add(_),new Nt(0,0,0)).multiplyScalar(1/d.length);u.material.color.copy(m).lerp(new Nt(16777215),.15);for(let g=0;g<4;g++){const _=new ie(new qt(.16+Math.random()*.08,12,8),G(n.lump)),p=Math.random()*Math.PI*2,f=Math.random()*.55;_.userData.a=p,_.userData.r=f,_.position.set(Math.cos(p)*f,h,Math.sin(p)*f),_.scale.set(1,.55,1),this.lumps.add(_)}for(const g of this.lumps.children)g.position.y=h;this.burst(pt(s.x,Ft+h+.2,s.z),{n:8,colors:[n.lump,16777215],speed:1.2,up:1.4,gravity:-6,life:.5}),await this.anim(.3,g=>{t.scale.setScalar(Math.max(.001,1-g))}),this.alive(e)&&(t.visible=!1,this.hooks.onProgress("add",this.added,{id:t.userData.ingredient,total:this.ingredients.length}),this.added>=this.ingredients.length&&(Bt.done(),this.hooks.onStepDone("add")))}enterStir(){this.stirP=0,this.stirAngle=null,this.spoon.visible=!0;const t=this.bowl.position,e=this.bowl.userData.batter.position.y;this.spoon.position.set(t.x+.3,Ft+e,t.z+.1),this.spoon.rotation.set(.3,0,-.35),this.startBatter=this.bowl.userData.batter.material.color.clone(),this.swirl.position.y=e+.01,this.swirl.scale.setScalar(this.bowl.userData.innerR(e)*.9),this.setView("stir",1)}stirMove(t){const e=this.bowl.position,n=this.bowl.userData.batter.position.y,s=this.toScreen(pt(e.x,Ft+n,e.z)),r=t.clientX-s.x,o=t.clientY-s.y,a=Math.hypot(r,o),c=this.planeHit(t,Ft+n);if(c){const h=c.x-e.x,u=c.z-e.z,d=this.bowl.userData.innerR(n)-.25,m=Math.hypot(h,u),g=m>d?d/m:1;this.spoon.position.set(e.x+h*g,Ft+n-.05,e.z+u*g),this.spoon.rotation.set(.25-u*.2,0,-.35+h*.15)}if(a<12)return;const l=Math.atan2(o,r);if(this.stirAngle!=null){let h=l-this.stirAngle;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;h=Hs(h,-.6,.6),this.stirP=Math.min(1,this.stirP+Math.abs(h)/(Math.PI*2*3.5)),this.swirl.rotation.z+=h;for(const u of this.lumps.children)u.userData.a-=h*.9,u.position.x=Math.cos(u.userData.a)*u.userData.r,u.position.z=Math.sin(u.userData.a)*u.userData.r,u.scale.setScalar(Math.max(.01,1-this.stirP*1.15)),u.scale.y*=.55;if(this.bowl.userData.batter.material.color.copy(this.startBatter).lerp(new Nt(this.R.batter),this.stirP),this.swirl.material.opacity=.5*Math.sin(Math.min(1,this.stirP*1.2)*Math.PI),Math.abs(h)>.02&&Bt.stir(),this.hooks.onProgress("stir",this.stirP),this.stirP>=1){this.stirAngle=null,this.finishStir();return}}this.stirAngle=l}finishStir(){this.step="stir-done",this.lumps.clear(),this.swirl.material.opacity=0;const t=this.bowl.position;this.stars(pt(t.x,Ft+1.2,t.z),12),Bt.done(),this.hooks.onStepDone("stir")}enterShape(t){this.spoon.visible=!1;const e=this.R.count,n=this.recipe==="cake";this.tray=new yt,this.tray.position.set(xe.shape,Ft,0),this.tray.add(n?vh(3.7,3.7):vh()),this.props.add(this.tray);const s=Xs(e,1.2);if(this.slots=s.map(([r,o],a)=>{const c=new yt;return c.position.set(r,.09,o),this.tray.add(c),{g:c,x:r,z:o,p:0,done:!1,i:a,d:{r:this.recipe,it:[]}}}),this.shapeDone=0,this.cutQueue=[],this.cutBusy=!1,this.R.shape==="cut")this.rollP=0,this.slab=Lv(3.5,2.35,this.R.dough),this.slab.position.set(0,.09,0),this.slab.scale.set(.35,3.2,.35),this.tray.add(this.slab),this.pin=Iv(),this.pin.position.set(xe.shape,Ft+.55,.9),this.props.add(this.pin),this.shapePhase="roll";else{this.shapePhase="fill";for(const r of this.slots)this.buildFillSlot(r);this.tool=this.makeFillTool(),this.tool.visible=!1,this.props.add(this.tool)}this.setView("shape",1.2)}makeFillTool(){const t=this.R.tool;if(t==="jug"||t==="bowl"){const n=Dv();return n.scale.setScalar(t==="bowl"?1.5:1.1),n.userData.pour=!0,n}const e=new yt;if(t==="date"){const n=new ie(new qt(.13,12,10),G(8010262));n.scale.set(.8,.8,1.6),e.add(n)}else if(t==="pastry"){const n=new ie(new po(.16,.05,48,6,2,3),G(15976549));e.add(n)}else{const n=new ie(new Re(.42,.04,8,32),dn(16777215,{transparent:!0,opacity:.8}));n.rotation.x=Math.PI/2,e.add(n)}return e}buildFillSlot(t){const e=this.recipe;if(t.g.clear(),e==="cupcakes"){t.d.lc=t.i%uc.length,t.treat=ai(t.d,{unique:!0,bake:0,rise:.2}),t.treat.userData.dome.visible=!1;const n=new ie(new zt(.38,.3,1,24),Fe(this.R.batter));n.scale.y=.001,t.treat.add(n),t.fill=n,t.g.add(t.treat)}else if(e==="cake")t.g.add(_a("pan")),t.treat=ai(t.d,{unique:!0,bake:0,rise:.02}),t.treat.position.y=.035,t.g.add(t.treat);else if(e==="kunafa"){t.g.add(_a("tin"));const n=new yt,s=Dn(t.i+3),r=Fe(this.R.dough);for(let o=0;o<18;o++){const a=s()*Math.PI*2,c=a+1+s()*2,l=.05+o/18*.2,h=new Cc([0,.5,1].map(d=>{const m=we(a,c,d),g=.2+s()*.14;return pt(Math.cos(m)*g,l+s()*.05,Math.sin(m)*g)})),u=new ie(new Ps(h,10,.03,5),r);u.visible=!1,n.add(u)}t.g.add(n),t.strands=n}else if(e==="maamoul"){const n=new ie(new qt(.33,20,14),Fe(this.R.dough));n.position.y=.3,t.g.add(n),t.ball=n;const s=new ie(new qt(.12,12,10),G(8010262));s.scale.set(.8,.8,1.6),s.visible=!1,t.g.add(s),t.date=s}else if(e==="dateballs"){const n=new ie(new Pc(.3,0),Fe(this.R.dough));n.position.y=.2,n.scale.set(1.35,.6,1.15),t.g.add(n),t.lump=n}}updateFillSlot(t){const e=Math.min(1,t.p),n=this.recipe;if(n==="cupcakes")t.fill.scale.y=Math.max(.001,.42*e),t.fill.position.y=.02+.21*e;else if(n==="cake")ma(t.treat,0,Math.max(.02,.45*e));else if(n==="kunafa"){const s=Math.floor(e*t.strands.children.length);t.strands.children.forEach((r,o)=>{r.visible=o<s})}else n==="maamoul"?(t.date.visible=e>.02,t.date.position.y=we(.75,.35,e),t.ball.scale.set(1+e*.15,1-e*.3,1+e*.15),t.ball.position.y=.3-e*.08):n==="dateballs"&&(t.lump.rotation.y=e*12,t.lump.rotation.x=e*7,t.lump.scale.set(we(1.35,.95,e),we(.6,.95,e),we(1.15,.95,e)),t.lump.position.y=we(.2,.28,e));e>=1&&!t.done&&(t.done=!0,this.shapeDone++,(n==="maamoul"||n==="dateballs"||n==="kunafa")&&(t.g.clear(),n==="kunafa"&&t.g.add(_a("tin")),t.treat=ai(t.d,{unique:!0,bake:0}),t.g.add(t.treat),t.treat.scale.setScalar(.01),this.anim(.35,s=>t.treat.scale.setScalar(Math.max(.01,xa(s))),s=>s)),n==="cupcakes"&&(t.treat.userData.dome.visible=!0),Bt.done(),this.stars(t.g.getWorldPosition(pt(0,0,0)).add(pt(0,.6,0)),6,.4),this.hooks.onProgress("shape",this.shapeDone/this.slots.length),this.shapeDone>=this.slots.length&&this.finishShape())}fillTick(t){if(!this.tool)return;const e=this.hover;if(!e){this.tool.visible=!1;return}const n=this.planeHit(e,Ft+.4);if(!n)return;this.tool.visible=!0;const s=!!this.pointer,r=pt(n.x,Ft+(this.tool.userData.pour?1.25:.95),n.z);this.tool.position.lerp(r,Math.min(1,t*18));let o=null;const a=this.recipe==="cake"?1.4:.55;for(const l of this.slots){const h=l.g.getWorldPosition(pt(0,0,0));!l.done&&Math.hypot(h.x-n.x,h.z-n.z)<a&&(o=l)}const c=s&&o;if(this.tool.userData.pour?this.tool.rotation.z=we(this.tool.rotation.z,c?-1:0,Math.min(1,t*10)):this.recipe==="dateballs"?this.tool.rotation.y+=t*(c?8:1):this.tool.rotation.y+=t*2,c){o.p+=t*(this.recipe==="cake"?.45:.9),this.fillSfxT=(this.fillSfxT||0)-t,this.fillSfxT<=0&&(Bt.fill(),this.fillSfxT=.18);const l=o.g.getWorldPosition(pt(0,0,0));if(this.tool.userData.pour){const h=this.tool.localToWorld(pt(.5,.55,0));Math.random()<.6&&this.burst(h,{n:1,colors:[this.R.batter],speed:.1,up:-.3,gravity:-9,life:.28,scale:.9})}else Math.random()<.3&&this.burst(l.clone().add(pt(0,.5,0)),{n:1,colors:[16777215,16773800],speed:1,up:1,gravity:-3,life:.4,scale:.4});this.updateFillSlot(o)}}rollMove(t,e){const n=this.planeHit(t,Ft+.35);if(!n)return;this.pin.position.lerp(pt(n.x,Ft+.4,n.z),.6),this.pin.children[0].rotation.x+=e*.03,this.rollP=Math.min(1,this.rollP+e/(this.w*1.6));const s=wh(this.rollP);if(this.slab.scale.set(we(.35,1,s),we(3.2,1,s),we(.35,1,s)),e>3&&Bt.stir(),this.hooks.onProgress("roll",this.rollP),this.rollP>=1){this.shapePhase="cut",Bt.done(),this.stars(pt(xe.shape,Ft+.8,0),10,.5);const r=this.pin;this.anim(.5,o=>{r.position.y=Ft+.4+o*3,r.position.z=.9+o*2}).then(()=>{r.visible=!1}),this.cutterMesh=_h(this.cutter),this.cutterMesh.visible=!1,this.props.add(this.cutterMesh),this.hooks.onStepDone("roll")}}setCutter(t){if(this.cutter=t,this.cutterMesh){const e=this.cutterMesh.position.clone(),n=this.cutterMesh.visible;this.props.remove(this.cutterMesh),this.cutterMesh=_h(t),this.cutterMesh.position.copy(e),this.cutterMesh.visible=n,this.props.add(this.cutterMesh)}}async cutAt(t){var g;if(this.cutBusy){(this.cutQueue||(this.cutQueue=[])).push({clientX:t.clientX,clientY:t.clientY});return}const e=this.planeHit(t,Ft+.2);if(!e)return;const n=e.x-this.tray.position.x,s=e.z-this.tray.position.z;if(Math.abs(n)>2.1||Math.abs(s)>1.5)return;const r=this.slots.filter(_=>!_.done);if(!r.length)return;let o=r[0],a=1/0;for(const _ of r){const p=Math.hypot(_.x-n,_.z-s);p<a&&(a=p,o=_)}const c=this.epoch;this.cutBusy=!0,o.done=!0;const l=this.cutterMesh,h=pt(this.tray.position.x+o.x,Ft+.9,o.z);l.visible=!0;const u=l.position.clone();if(await this.anim(.14,_=>l.position.lerpVectors(u,h,_)),await this.anim(.12,_=>{l.position.y=we(Ft+.9,Ft+.08,_)}),!this.alive(c))return;Bt.cut(),o.d.s=this.cutter,o.treat=ai(o.d,{unique:!0,bake:0}),o.treat.position.y=.12,o.g.add(o.treat);const d=new ie(Pu(this.cutter,1),G(15257502));d.scale.y=.05,d.position.y=.12,o.g.add(d),this.burst(h.clone().setY(Ft+.3),{n:6,colors:[16777215,this.R.dough],speed:1.2,up:1,life:.4}),await this.anim(.18,_=>{l.position.y=we(Ft+.08,Ft+.9,_),o.treat.position.y=.12+Math.sin(_*Math.PI)*.25}),this.cutBusy=!1,this.shapeDone++;const m=(g=this.cutQueue)==null?void 0:g.shift();if(m&&this.shapeDone<this.slots.length&&setTimeout(()=>this.alive(c)&&this.cutAt(m),0),this.hooks.onProgress("shape",this.shapeDone/this.slots.length,{shape:this.cutter}),this.shapeDone>=this.slots.length){const _=this.slab;this.props.remove(l),this.cutterMesh=null;for(const p of this.slots)p.g.children.filter(f=>f!==p.treat).forEach(f=>p.g.remove(f));Bt.whoosh(),this.anim(.5,p=>{_.position.y=.09+p*2,_.scale.x=_.scale.z=1-p*.8}).then(()=>{_.visible=!1}),this.finishShape()}}finishShape(){this.step="shape-done",this.tool&&(this.tool.visible=!1),this.hooks.onStepDone("shape")}setOvenHeat(t,e){const n=this.oven.userData;n.light.intensity=t*3,n.coilMat.color.set(new Nt(8930372).lerp(new Nt(16738858),t)),n.interiorMat.color.set(new Nt(5913146).lerp(new Nt(16754784),t*.8)),n.glassMat.color.set(new Nt(16767392).lerp(new Nt(16752704),t)),n.glassMat.opacity=.22+t*.15,n.lampMat.color.set(e?4186218:t>0?16734778:7829367)}async openDoor(t){const e=this.oven.userData.door,n=e.rotation.x,s=t?1.45:0;Bt.door(),await this.anim(.5,r=>{e.rotation.x=we(n,s,r)})}async enterBake(t){this.bakeState="loading",this.bakeM=0,this.setView("oven",1.3),await this.wait(.6),this.alive(t)&&(await this.openDoor(!0),this.alive(t)&&(await this.moveTrayIn(t),this.alive(t)&&(await this.openDoor(!1),this.alive(t)&&(this.bakeState="baking",this.bakeM=0,this.bakeTickT=0,this.dinged=!1,this.hooks.onProgress("bake-start",0)))))}async moveTrayIn(t){const e=this.tray,n=e.position.clone(),s=pt(xe.oven,Ft+.6,1.3),r=pt(xe.oven,Ft+.47,-1),o=e.scale.x;Bt.whoosh(),await this.anim(.8,a=>{e.position.lerpVectors(n,s,a),e.position.y+=Math.sin(a*Math.PI)*.8,e.scale.setScalar(we(o,.62,a))}),this.alive(t)&&await this.anim(.5,a=>e.position.lerpVectors(s,r,a))}bakeTick(t){if(this.bakeState!=="baking")return;this.bakeM=Math.min(1,this.bakeM+t*un.speed);const e=this.bakeM,n=e>=un.golden&&e<=un.crispy;this.setOvenHeat(.5+.5*Math.sin(this.time*3)*.2+.3,n);for(const s of this.slots){if(!s.treat)continue;const r=this.recipe==="cupcakes"?.2+.8*Math.min(1,e/un.golden):this.recipe==="cake"?.45+.55*Math.min(1,e/un.golden):null;ma(s.treat,e,r)}for(const s of this.oven.userData.knobs)s.rotation.y=-e*4;this.bakeTickT-=t,this.bakeTickT<=0&&(Bt.tick(),this.bakeTickT=.5),!this.dinged&&e>=un.golden&&(this.dinged=!0,Bt.ding(),this.hooks.onProgress("bake-golden",e)),Math.random()<t*4&&this.burst(pt(xe.oven+(Math.random()-.5)*2,Ft+2.5,-.2),{n:1,colors:[16777215],speed:.2,up:.8,gravity:.3,life:1.2,scale:1.4}),this.hooks.onProgress("bake",e),e>=1&&this.takeOut()}takeOut(){if(this.bakeState!=="baking")return null;const t=this.bakeM;if(t<un.golden)return Bt.notyet(),this.hooks.onToast("Not yet! They are still doughy. Wait for the green part.",{speak:!0}),"early";const e=this.epoch;this.bakeState="out";const n=t<=un.crispy?"golden":"crispy";return(async()=>{if(this.setOvenHeat(0,!1),await this.openDoor(!0),!this.alive(e))return;const s=this.tray,r=s.position.clone(),o=pt(xe.oven,Ft+.9,1);if(await this.anim(.6,a=>s.position.lerpVectors(r,o,a)),!!this.alive(e))if(n==="golden"){this.stars(pt(xe.oven,Ft+1.6,1),14);for(let a=0;a<6;a++)setTimeout(()=>this.alive(e)&&this.burst(pt(xe.oven+(Math.random()-.5)*1.8,Ft+1.2,1),{n:2,colors:[16777215],speed:.3,up:1,gravity:.5,life:1.4,scale:1.6}),a*150);Bt.done(),this.hooks.onStepDone("bake",{result:n})}else{Bt.oops();for(let a=0;a<4;a++)this.burst(pt(xe.oven+(Math.random()-.5)*1.8,Ft+1.2,1),{n:3,colors:[10132122,13619151],speed:.4,up:1,gravity:.4,life:1.5,scale:1.8});this.hooks.onStepDone("bake",{result:n})}})(),n}async retryBake(){const t=this.epoch;for(const r of this.slots){if(!r.treat)continue;const o=this.recipe==="cupcakes"?.2:this.recipe==="cake"?.45:null;ma(r.treat,0,o)}this.stars(pt(xe.oven,Ft+1.6,1),8,.4);const e=this.tray,n=e.position.clone(),s=pt(xe.oven,Ft+.47,-1);await this.anim(.6,r=>e.position.lerpVectors(n,s,r)),this.alive(t)&&(await this.openDoor(!1),this.alive(t)&&(this.bakeM=0,this.dinged=!1,this.bakeState="baking",this.hooks.onProgress("bake-start",0)))}async enterDecorate(t){this.spoon.visible=!1,this.tool&&(this.tool.visible=!1);const e=this.recipe==="cake";this.plate=Iu(e?"stand":"board"),this.plate.position.set(xe.deco,Ft,-.2),this.props.add(this.plate),this.setView("deco",1.3),this.treats=[];const n=this.decoCells();if(this.portrait&&(this.plate.rotation.y=Math.PI/2),this.slots.forEach((s,r)=>{const o={d:s.d,obj:null,cell:n[r]};this.treats.push(o)}),this.tray){const s=this.tray,r=s.position.clone();this.anim(.8,o=>{s.position.lerpVectors(r,pt(xe.oven+3,Ft+3,2),o),s.scale.setScalar(we(s.scale.x,.01,o))}).then(()=>{s.visible=!1})}if(this.oven.userData.door.rotation.x=0,await this.wait(.7),!!this.alive(t)){for(let s=0;s<this.treats.length;s++){const r=this.treats[s];if(this.rebuildTreat(s),r.obj.scale.setScalar(.01),Bt.place(),this.anim(.35,o=>r.obj.scale.setScalar(Math.max(.01,xa(o))),o=>o),await this.wait(.08),!this.alive(t))return}this.decoReady=!0}}decoCells(){return Xs(this.slots.length,1.25,this.portrait?2:3)}rebuildTreat(t){const e=this.treats[t],n=e.obj,s=ai(e.d);s.position.set(xe.deco+e.cell[0],Ft+this.plate.userData.top,-.2+e.cell[1]),n&&(s.scale.copy(n.scale),this.props.remove(n)),s.userData.index=t,this.props.add(s),e.obj=s}decoSnapshot(){this.deco.undo.push(JSON.stringify(this.treats.map(t=>t.d))),this.deco.undo.length>40&&this.deco.undo.shift(),this.hooks.onProgress("deco-undo",this.deco.undo.length)}undo(){const t=this.deco.undo.pop();if(!t)return;JSON.parse(t).forEach((n,s)=>{JSON.stringify(n)!==JSON.stringify(this.treats[s].d)&&(Object.keys(this.treats[s].d).forEach(r=>delete this.treats[s].d[r]),Object.assign(this.treats[s].d,n),this.slots[s].d=this.treats[s].d,this.rebuildTreat(s))}),Bt.whoosh(),this.hooks.onProgress("deco-undo",this.deco.undo.length),this.hooks.onProgress("deco",0)}pickTreat(t){var c;if(!((c=this.treats)!=null&&c.length)||!this.treats[0].obj)return null;const e=this.rayFrom(t),n=this.treats.flatMap(l=>l.obj.userData.surfaces),s=e.intersectObjects(n,!1);if(!s.length)return null;const r=s[0];let o=r.object;for(;o&&o.userData.index===void 0;)o=o.parent;if(!o)return null;const a=o.worldToLocal(r.point.clone());return{i:o.userData.index,local:a,world:r.point.clone()}}decoDown(t){if(!this.decoReady)return;const e=this.pickTreat(t);e&&(this.decoSnapshot(),this.stroke={last:e.world,changed:!1},this.decoApply(e,!0))}decoMove(t){if(!this.stroke)return;const e=this.deco.tool;if(!["spr","pearl","pipe","fond"].includes(e))return;const n=this.pickTreat(t);if(!n)return;const s={spr:.12,pearl:.11,pipe:.05,fond:.3}[e];n.world.distanceTo(this.stroke.last)<s||(this.stroke.last=n.world,this.decoApply(n,!1))}decoApply(t,e){const n=this.treats[t.i],s=n.d,r=this.deco.tool,o=hn(t.local.x),a=hn(t.local.z),c=t.world;if(s.it||(s.it=[]),r==="frost"){if(!e)return;s.f=this.deco.color,this.rebuildTreat(t.i),Bt.frost(),this.burst(c.clone().add(pt(0,.2,0)),{n:10,colors:[Pn[s.f].hex,16777215],speed:1.2,up:1.5,life:.5}),this.squish(n.obj)}else if(r==="glitter"){if(!e)return;s.g=1+Math.floor(Math.random()*999),this.rebuildTreat(t.i),Bt.sparkle(),this.stars(c.clone().add(pt(0,.3,0)),8,.35)}else if(r==="text"){if(!e)return;s.tx=this.deco.color,this.rebuildTreat(t.i),Bt.sparkle(),this.squish(n.obj)}else{if(s.it.length>=160){e&&this.hooks.onToast("This treat is full of goodies! Try another one.");return}if(s.tx&&this.recipe!=="cake"&&Math.hypot(o,a)<.25)return;const l={t:r,x:o,z:a};r==="spr"&&(l.k=1+Math.floor(Math.random()*9999),(this.recipe==="kunafa"||this.recipe==="maamoul")&&(l.p=this.deco.pistachio?1:0),l.p||delete l.p,Bt.sprinkle()),r==="pearl"&&(l.c=this.deco.pearl,Bt.place()),r==="pipe"&&(l.c=this.deco.color,Math.random()<.3&&Bt.fill()),r==="fond"&&(l.c=this.deco.color,l.s=this.deco.fond,l.r=hn(Math.random()*1.2-.6),Bt.place()),s.it.push(l),Lu(n.obj,l),r==="spr"&&Math.random()<.5&&this.burst(c.clone().add(pt(0,.15,0)),{n:3,colors:wu,speed:.8,up:1,life:.3,scale:.4})}this.hooks.onProgress("deco",1)}squish(t){const e=t.scale.x;this.anim(.3,n=>{t.scale.set(e*(1+Math.sin(n*Math.PI)*.12),e*(1-Math.sin(n*Math.PI)*.1),e*(1+Math.sin(n*Math.PI)*.12))},n=>n)}decoAll(){if(!this.decoReady)return;this.decoSnapshot();const t=this.deco.tool;this.treats.forEach((e,n)=>{const s=e.d;s.it||(s.it=[]);const r=Du[this.recipe],o=Dn(Date.now()%1e4+n*17);if(t==="frost")s.f=this.deco.color;else if(t==="glitter")s.g=1+Math.floor(o()*999);else if(t==="text")s.tx=this.deco.color;else if(t==="spr"){const a=this.recipe==="cake"?26:7;for(let c=0;c<a;c++){const l=o()*Math.PI*2,h=Math.sqrt(o())*r*.72,u={t:"spr",x:hn(Math.cos(l)*h),z:hn(Math.sin(l)*h),k:1+Math.floor(o()*9999)};this.deco.pistachio&&(this.recipe==="kunafa"||this.recipe==="maamoul")&&(u.p=1),s.it.push(u)}}else if(t==="pearl"){const a=this.recipe==="cake"?20:8;for(let c=0;c<a;c++){const l=c/a*Math.PI*2;s.it.push({t:"pearl",x:hn(Math.cos(l)*r*.66),z:hn(Math.sin(l)*r*.66),c:this.deco.pearl})}}else if(t==="pipe"){const a=this.recipe==="cake"?48:16;for(let c=0;c<a;c++){const l=c/a*Math.PI*2;s.it.push({t:"pipe",x:hn(Math.cos(l)*r*.8),z:hn(Math.sin(l)*r*.8),c:this.deco.color})}}else if(t==="fond")if(this.recipe==="cake")for(let a=0;a<6;a++){const c=a/6*Math.PI*2;s.it.push({t:"fond",s:this.deco.fond,x:hn(Math.cos(c)*.95),z:hn(Math.sin(c)*.95),c:this.deco.color,r:hn(-c)})}else s.it.push({t:"fond",s:this.deco.fond,x:0,z:0,c:this.deco.color,r:0});s.it.length>160&&(s.it=s.it.slice(-160)),this.rebuildTreat(n)}),Bt.sparkle();for(const e of this.treats)this.stars(e.obj.getWorldPosition(pt(0,0,0)).add(pt(0,.5,0)),4,.3);this.hooks.onProgress("deco",1)}enterBox(t){this.decoReady=!1;const e=this.recipe==="cake",n=this.treats.length,s=e?{w:2.55,d:2.55,h:1,z:-.95}:{w:2.78,d:1.95,h:.78,z:-1.15};this.box=Uv(s.w,s.d,s.h,this.boxColor),this.box.position.set(xe.box,Ft,s.z),va(this.box,null,this.ribbon);const r=this.box.userData.lid;r.visible=!1,r.position.y=s.h+2.5,this.props.add(this.box),this.boxCells=e?[[0,0]]:Xs(n,.84);const o=e?[[0,1.15]]:Xs(n,.95).map(([a,c])=>[a,c+.75]);this.packed=0,this.treats.forEach((a,c)=>{const l=ai(a.d);l.userData.index=c,l.userData.packed=!1,l.userData.home=pt(xe.box+o[c][0],Ft+.02,o[c][1]),l.position.copy(l.userData.home),l.scale.setScalar(e?.55:.75),this.props.add(l),a.boxObj=l,a.obj&&this.props.remove(a.obj)}),this.setView("box",1.2)}async packTreat(t){const e=t.boxObj;if(e.userData.packed)return;e.userData.packed=!0;const n=this.epoch,s=this.boxCells[this.packed];this.packed++;const r=this.recipe==="cake",o=pt(this.box.position.x+s[0],Ft+.07,this.box.position.z+s[1]),a=e.position.clone(),c=e.scale.x,l=r?.78:.68;Bt.pick(),await this.anim(.45,h=>{e.position.lerpVectors(a,o,h),e.position.y+=Math.sin(h*Math.PI)*1,e.scale.setScalar(we(c,l,h))}),this.alive(n)&&(Bt.box(),this.burst(o.clone().add(pt(0,.5,0)),{n:5,colors:[16777215,16762844],speed:1,up:1,life:.4,scale:.6}),this.hooks.onProgress("box",this.packed/this.treats.length),this.packed>=this.treats.length&&this.hooks.onStepDone("packed"))}packAll(){for(const t of this.treats)t.boxObj.userData.packed||this.packTreat(t)}setBoxColor(t){this.boxColor=t,this.box&&va(this.box,t,null)}setRibbon(t){this.ribbon=t,this.box&&va(this.box,null,t)}async tieBox(){const t=this.epoch,e=this.box.userData.lid,n=this.box.userData.size.h;e.visible=!0;const s=e.userData.bow;s.scale.setScalar(.01),Bt.whoosh(),await this.anim(.55,r=>{e.position.y=we(n+2.5,n,r),e.rotation.y=(1-r)*.6},wh),this.alive(t)&&(Bt.box(),Bt.ribbon(),await this.anim(.5,r=>s.scale.setScalar(Math.max(.01,xa(r))),r=>r),this.alive(t)&&(this.stars(this.box.position.clone().add(pt(0,n+.8,0)),16,.5),this.hearts(this.box.position.clone().add(pt(0,n+.6,0)),6),await this.wait(.6),this.alive(t)&&this.hooks.onStepDone("box")))}enterDeliver(t){this.mode="street",this.scene.background=iv(),this.deliverWho=null,this.delivering=!1,this.girl.visible=!0,this.girl.rotation.set(0,0,0),this.girl.position.copy(Vr).add(this.portrait?pt(0,0,6.4):pt(0,0,1.6)),this.giftMini&&this.girl.remove(this.giftMini);const e=this.box.clone();e.scale.setScalar(this.recipe==="cake"?.26:.24),e.position.set(0,.92,.5),this.girl.add(e),this.giftMini=e,this.girlHolding(!0),this.setTarget(this.orderWho||null),this.setView("street",1.4)}setTarget(t){if(this.target=t,!t){this.arrow.visible=this.targetRing.visible=!1;return}const e=this.houses[t];this.arrow.visible=this.targetRing.visible=!0,this.arrow.position.set(e.position.x,4.4,e.position.z+1.2),this.targetRing.position.set(e.position.x,.03,e.position.z+1.9)}pickHouse(t){const n=this.rayFrom(t).intersectObjects(Object.values(this.houses),!0);if(!n.length)return null;let s=n[0].object;for(;s&&!s.userData.who;)s=s.parent;return(s==null?void 0:s.userData.who)||null}async deliverTo(t){if(this.delivering)return;if(this.target&&t!==this.target){Bt.soft(),this.hooks.onToast(`This gift is for ${Ge[this.target].name}! Look for the pink arrow.`,{speak:!0});const p=this.arrow;this.anim(.6,f=>{p.scale.setScalar(1+Math.sin(f*Math.PI*3)*.3)},f=>f);return}this.delivering=!0,this.deliverWho=t,this.arrow.visible=this.targetRing.visible=!1;const e=this.epoch,n=this.houses[t],s=n.getWorldPosition(new R),r=s.z+1.1;if(this.portrait)for(const p of zs){const f=this.houses[p];f.position.z>n.position.z+1&&(f.visible=!1)}if(this.setView("door",1.1),this.hooks.onProgress("deliver-start",0,{who:t}),await this.wait(.35),!this.alive(e))return;const o=this.girl,a=pt(s.x+2.6,0,r+1.3),c=pt(s.x+.85,0,r+1);if(o.position.copy(a),o.rotation.y=-Math.PI/2+.3,await this.anim(1,p=>{o.position.lerpVectors(a,c,p),o.position.y=Math.abs(Math.sin(p*Math.PI*4))*.12,Math.floor(p*8)!==this._lastStep&&(this._lastStep=Math.floor(p*8),Bt.step())},p=>p),!this.alive(e)||(o.position.y=0,await this.anim(.3,p=>{o.rotation.y=we(-Math.PI/2+.3,-.5,p)}),Bt.knock(),await this.wait(.7),!this.alive(e)))return;Bt.door();const l=n.userData.door,h=n.userData.person;if(h.visible=!0,h.position.set(0,0,.4),h.rotation.y=.35,await this.anim(.6,p=>{l.rotation.y=-1.9*p,h.position.z=we(.4,1.75,p)}),!this.alive(e))return;const u=this.giftMini,d=u.getWorldPosition(new R);this.girl.remove(u),this.scene.add(u),u.position.copy(d),u.scale.multiplyScalar(this.girl.scale.x);const m=h.localToWorld(pt(0,1,.5)),[g,_]=h.userData.arms;g.rotation.set(-1.1,0,-.25),_.rotation.set(-1.1,0,.25),this.giftMini=null,this.handedGift=u,this.girlHolding(!1),await this.anim(.6,p=>{u.position.lerpVectors(d,m,p),u.position.y+=Math.sin(p*Math.PI)*.4}),this.alive(e)&&(Bt.happy(),this.hearts(h.getWorldPosition(pt(0,0,0)).add(pt(0,2.1,0)),12),this.stars(h.getWorldPosition(pt(0,0,0)).add(pt(0,2.3,0)),10,.5),this.hopping=h,this.hopT=0,this.hooks.onDelivered(t))}bindInput(){const t=this.canvas;t.style.touchAction="none",t.addEventListener("pointerdown",e=>this.onDown(e)),window.addEventListener("pointermove",e=>this.onMove(e)),window.addEventListener("pointerup",e=>this.onUp(e)),window.addEventListener("pointercancel",e=>this.onUp(e))}ndc(t){const e=this.canvas.getBoundingClientRect();return new nt((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1)}rayFrom(t){return this.ray.setFromCamera(this.ndc(t),this.camera),this.ray}planeHit(t,e){const n=this.rayFrom(t),s=new R;return n.ray.intersectPlane(new oi(pt(0,1,0),-e),s)?s:null}toScreen(t){const e=t.clone().project(this.camera);return{x:(e.x+1)/2*this.w,y:(1-e.y)/2*this.h}}onDown(t){if(this.pointer)return;this.pointer={id:t.pointerId,x:t.clientX,y:t.clientY,sx:t.clientX,sy:t.clientY,moved:!1},this.hover={clientX:t.clientX,clientY:t.clientY};try{this.canvas.setPointerCapture(t.pointerId)}catch{}const e=this.step;if(this.mode==="street"){const n=this.pickHouse(t);n&&this.deliverTo(n);return}if(e==="add"){const n=this.rayFrom(t).intersectObjects(this.ingredients.filter(s=>!s.userData.used&&s.visible),!0);if(n.length){let s=n[0].object;for(;s&&!s.userData.ingredient;)s=s.parent;s&&(this.drag={obj:s,kind:"ing"},s.userData.busy=!0,Bt.pick())}}else if(e==="stir")this.stirAngle=null,this.stirMove(t);else if(e==="shape"){if(this.shapePhase==="cut"&&this.cutterMesh){const n=this.planeHit(t,Ft+.9);n&&(this.cutterMesh.position.copy(n),this.cutterMesh.visible=!0)}}else if(e==="decorate")this.decoDown(t);else if(e==="box"){const n=this.treats.map(r=>r.boxObj).filter(r=>r&&!r.userData.packed),s=this.rayFrom(t).intersectObjects(n,!0);if(s.length){let r=s[0].object;for(;r&&r.userData.index===void 0;)r=r.parent;r&&(this.drag={obj:r,kind:"treat"},Bt.pick())}else if(this.rayFrom(t).intersectObject(this.box,!0).length){const o=this.treats.find(a=>!a.boxObj.userData.packed);o&&this.packTreat(o)}}}onMove(t){this.hover={clientX:t.clientX,clientY:t.clientY};const e=this.pointer;if(this.step==="shape"&&this.shapePhase==="cut"&&this.cutterMesh&&!this.cutBusy&&t.pointerType==="mouse"){const o=this.planeHit(t,Ft+.9);o&&(this.cutterMesh.visible=!0,this.cutterMesh.position.lerp(o,.6))}if(!e||e.id!==t.pointerId)return;const n=t.clientX-e.x,s=t.clientY-e.y;e.x=t.clientX,e.y=t.clientY,Math.hypot(e.x-e.sx,e.y-e.sy)>8&&(e.moved=!0);const r=this.step;if(this.drag){const o=this.planeHit(t,Ft+1.2);if(o){const a=this.drag.obj;a.position.lerp(pt(o.x,Ft+(this.drag.kind==="ing"?.9:.6),o.z),.7),a.rotation.z=Hs(-n*.02,-.4,.4)}}else if(r==="stir")this.stirMove(t);else if(r==="shape"&&this.shapePhase==="roll")this.rollMove(t,Math.hypot(n,s));else if(r==="shape"&&this.shapePhase==="cut"&&this.cutterMesh&&!this.cutBusy){const o=this.planeHit(t,Ft+.9);o&&this.cutterMesh.position.lerp(o,.6)}else r==="decorate"&&this.decoMove(t)}onUp(t){const e=this.pointer;if(!e||e.id!==t.pointerId)return;this.pointer=null,t.pointerType!=="mouse"&&(this.hover=null);const n=this.step;if(this.drag){const{obj:s,kind:r}=this.drag;if(this.drag=null,r==="ing"){const o=this.bowl.position,a=Math.hypot(s.position.x-o.x,s.position.z-o.z)<1.9;!e.moved||a?this.pour(s):this.sendHome(s)}else if(r==="treat"){const o=this.box.position,a=this.box.userData.size,c=Math.abs(s.position.x-o.x)<a.w/2+.4&&Math.abs(s.position.z-o.z)<a.d/2+.3,l=this.treats[s.userData.index];!e.moved||c?this.packTreat(l):this.sendHome(s)}return}n==="stir"&&(this.stirAngle=null),n==="shape"&&this.shapePhase==="cut"&&!e.moved?this.cutAt(t):n==="shape"&&this.shapePhase==="cut"&&e.moved&&this.cutAt(t),n==="decorate"&&(this.stroke=null)}sendHome(t){const e=t.position.clone(),n=t.rotation.z;Bt.soft(),this.anim(.35,s=>{t.position.lerpVectors(e,t.userData.home,s),t.rotation.z=we(n,0,s)}).then(()=>{t.userData.busy=!1})}frame(){const t=Math.min(this.clock.getDelta(),.05);if(this.time+=t,this.camAnim){const e=this.camAnim;e.t+=t;const n=bh(Math.min(1,e.t/e.dur));this.camera.position.lerpVectors(e.fp,e.tp,n),this.look.lerpVectors(e.fl,e.tl,n),e.t>=e.dur&&(this.camAnim=null)}this.camera.lookAt(this.look);for(let e=this.tweens.length-1;e>=0;e--){const n=this.tweens[e];if(n.ep!==this.epoch){this.tweens.splice(e,1),n.done();continue}n.t+=t;const s=Math.min(1,n.t/n.dur);n.fn(n.easing(s)),s>=1&&(this.tweens.splice(e,1),n.done())}for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];if(n.life-=t,n.life<=0){this.scene.remove(n.m),this.particles.splice(e,1);continue}n.vel.y+=n.gravity*t,n.m.position.addScaledVector(n.vel,t),n.m.rotation.y+=n.spin*t,n.m.scale.setScalar(n.s0*Math.min(1,n.life/n.max*2.2))}this.step==="shape"&&this.shapePhase==="fill"&&this.fillTick(t),this.step==="bake"&&this.bakeTick(t);for(const[e,n]of this.kitchen.userData.lanterns.entries())n.rotation.z=Math.sin(this.time*1.2+e)*.05;if(this.girl.visible){const[e,n]=this.girl.userData.arms;this.mode==="title"&&(n.rotation.z=2.6+Math.sin(this.time*6)*.35,n.rotation.x=0,e.rotation.set(0,0,-.25)),this.girl.userData.head.rotation.z=Math.sin(this.time*1.5)*.06}if(this.arrow.visible&&(this.arrow.position.y=4.4+Math.sin(this.time*4)*.25,this.arrow.rotation.y+=t*2,this.targetRing.scale.setScalar(1+Math.sin(this.time*4)*.08)),this.hopping&&(this.hopT+=t,this.hopping.position.y=Math.abs(Math.sin(this.hopT*7))*.25*Math.max(0,1-this.hopT/2.5),this.hopT>2.5&&(this.hopping=null)),this.treats){for(const e of this.treats)for(const n of[e.obj,e.boxObj])if(!(!n||!n.parent))for(const s of n.userData.twinkles){const r=.6+.6*Math.abs(Math.sin(this.time*3+s.userData.phase));s.scale.setScalar(r),s.rotation.y+=t*2}}this.renderer.render(this.scene,this.camera)}getCreation(){return{r:this.recipe,treats:(this.treats||[]).map(t=>JSON.parse(JSON.stringify(t.d))),box:{c:this.boxColor,rb:this.ribbon}}}debugInfo(){const t=e=>e?this.toScreen(e.getWorldPosition(new R)):null;return{mode:this.mode,step:this.step,shapePhase:this.shapePhase,bakeM:this.bakeM,bakeState:this.bakeState,bowl:t(this.bowl),bowlSurface:this.toScreen(this.bowl.position.clone().add(pt(0,this.bowl.userData.batter.position.y,0))),ingredients:(this.ingredients||[]).map(e=>({id:e.userData.ingredient,used:e.userData.used,...this.toScreen(e.position.clone().add(pt(0,.45,0)))})),slots:(this.slots||[]).map(e=>({done:e.done,...this.toScreen(e.g.getWorldPosition(new R).add(pt(0,.3,0)))})),tray:this.tray?t(this.tray):null,treats:(this.treats||[]).map(e=>e.obj&&e.obj.parent?this.toScreen(e.obj.getWorldPosition(new R).add(pt(0,e.obj.userData.recipe==="cake"?1.1:.25,0))):null),boxTreats:(this.treats||[]).map(e=>e.boxObj?{packed:e.boxObj.userData.packed,...this.toScreen(e.boxObj.getWorldPosition(new R).add(pt(0,.2,0)))}:null),box:this.box?t(this.box):null,houses:Object.fromEntries(Object.entries(this.houses).map(([e,n])=>[e,this.toScreen(n.getWorldPosition(new R).add(pt(0,1.3,1.1)))])),camAnimating:!!this.camAnim}}}const zc="eidSweetsBakery.v1",Zr={stars:{},book:[],theme:"pink",hijab:"rose",muted:!1,voice:!0,bakes:0,seen:[],hadith:0};function Kv(){try{const i=JSON.parse(localStorage.getItem(zc)||"null");return i?{...structuredClone(Zr),...i,stars:{...i.stars},book:Array.isArray(i.book)?i.book:[]}:structuredClone(Zr)}catch{return structuredClone(Zr)}}function Qv(i){try{return localStorage.setItem(zc,JSON.stringify(i)),!0}catch{return!1}}function tx(){try{localStorage.removeItem(zc)}catch{}return structuredClone(Zr)}function mn(i){return Object.values(i.stars).reduce((t,e)=>t+e,0)}let ku=!0,rs=null;const We=typeof window<"u"&&"speechSynthesis"in window?window.speechSynthesis:null;function Eh(){if(!We)return;const t=We.getVoices().filter(e=>/^en/i.test(e.lang));rs=t.find(e=>/samantha|karen|moira|tessa|google us english|female/i.test(e.name))||t[0]||null}var Ph;We&&(Eh(),(Ph=We.addEventListener)==null||Ph.call(We,"voiceschanged",Eh));const ex=!!We;function Hc(i){ku=i,i||We==null||We.cancel()}function nx(i){return String(i).replace(/ﷺ/g,", peace be upon him,").replace(/Ma'amoul/gi,"mah-mool").replace(/\bKunafa\b/gi,"koo-nah-fah").replace(/\bNani\b/g,"Nah-nee").replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{200D}]/gu,"").replace(/\s+/g," ").trim()}function In(i,{interrupt:t=!0,force:e=!1}={}){if(!(!We||!ku&&!e))try{t&&We.cancel();const n=new SpeechSynthesisUtterance(nx(i));rs&&(n.voice=rs),n.lang=(rs==null?void 0:rs.lang)||"en-US",n.rate=.92,n.pitch=1.15,We.speak(n)}catch{}}function ix(){We==null||We.cancel()}const V=i=>document.getElementById(i),ke=i=>`#${i.toString(16).padStart(6,"0")}`,sx={pink:"🌸",mint:"🌿",lavender:"🌙",gold:"✨"},rx={rose:"Rose",sky:"Sky",mint:"Mint",lilac:"Lilac",sun:"Sunny"};let vt=Kv();Bc(vt.muted);Hc(vt.voice);for(const i of go())i.cost<=mn(vt)&&!vt.seen.includes(i.id)&&vt.seen.push(i.id);const Vc={flour:"🌾",sugar:"🍚",butter:"🧈",egg:"🥚",milk:"🥛",vanilla:"🌼",dates:"🌴",oats:"🥣",coconut:"🥥",honey:"🍯",semolina:"🌾",kunafa:"🪺"},Th={add:{e:"🥣",name:"Add"},stir:{e:"🌀",name:"Mix"},shape:{e:"🍪",name:"Shape"},bake:{e:"🔥",name:"Bake"},decorate:{e:"🎨",name:"Decorate"},box:{e:"🎁",name:"Box"},deliver:{e:"🏠",name:"Give"}},ox={cupcakes:"Hold your finger over each paper cup to pour in the batter.",cake:"Hold your finger over the cake pan to pour in the batter.",maamoul:"Hold your finger over each dough ball to stuff it with a sweet date.",kunafa:"Hold your finger over each tin to fill it with kunafa pastry.",dateballs:"Rub each lump round and round to roll it into a ball."},Rt=new Jv(V("scene"),{onStepDone:gx,onProgress:mx,onToast:_x,onDelivered:vx});Rt.setTheme(vt.theme);Rt.setHijab(vt.hijab);const ax=["title","orders","recipes","intro","result","book","view","kitchen","grown"];let bs="title";function Un(i){bs=i;for(const t of ax)V(`screen-${t}`).classList.toggle("active",t===i);V("hud").classList.toggle("hidden",i!==null),document.body.classList.toggle("playing",i===null),V("homeBtn").classList.toggle("hidden",i==="title"),requestAnimationFrame(wn)}function Jn(i,t){V(`screen-${i}`).classList.toggle("active",t)}function wn(){const i=window.innerHeight;let e=V("topbar").getBoundingClientRect().bottom+6,n=0,s=0;if(bs===null){const r=V("hudTop");e=Math.max(e,r.offsetTop+r.offsetHeight+6);const o=V("panel");n=o.childElementCount?o.offsetHeight+6:12}else if(bs==="title"){const r=document.querySelector("#screen-title .card");window.innerWidth/i>=1.1?s=window.innerWidth-r.offsetLeft+10:n=i-r.offsetTop+4}Rt.setInsets(e,n,s)}window.addEventListener("resize",()=>requestAnimationFrame(wn));new ResizeObserver(()=>wn()).observe(V("panel"));new ResizeObserver(()=>wn()).observe(V("hudTop"));new ResizeObserver(()=>wn()).observe(document.querySelector("#screen-title .card"));var Dh;(Dh=document.fonts)==null||Dh.ready.then(()=>requestAnimationFrame(wn));document.addEventListener("click",i=>{Uu(),i.target.closest("button")&&Bt.click()},!0);document.addEventListener("pointerdown",()=>Uu(),{capture:!0,once:!0});function _i(){Qv(vt)||je("Could not save on this device (storage is full).")}function hr(){V("starCount").textContent=mn(vt),V("muteBtn").textContent=vt.muted?"🔇":"🔊",V("muteBtn").classList.toggle("off",vt.muted),V("voiceBtn").classList.toggle("off",!vt.voice),V("voiceBtn").classList.toggle("hidden",!ex)}V("muteBtn").onclick=()=>{vt.muted=!vt.muted,Bc(vt.muted),_i(),hr()};V("voiceBtn").onclick=()=>{vt.voice=!vt.voice,Hc(vt.voice),_i(),hr(),je(vt.voice?"🗣️ Read-aloud is on":"Read-aloud is off"),vt.voice&&In("Read-aloud is on!")};V("homeBtn").onclick=()=>{if(bs===null&&ct&&ct.step!=="deliver-done"){Jn("confirm",!0);return}En()};V("confirmYes").onclick=()=>{Jn("confirm",!1),En()};V("confirmNo").onclick=()=>Jn("confirm",!1);function je(i,{big:t=!1,say:e=!1}={}){const n=document.createElement("div");n.className=`toast${t?" big":""}`,n.textContent=i,V("toasts").appendChild(n),setTimeout(()=>n.remove(),2500),e&&In(i)}const Ah=["#ff6fa8","#f5b82e","#4aa8e8","#3fbf8f","#c28bff","#ffffff"];function cx(i=42){if(Fu())return;const t=document.createElement("div");t.className="confetti";for(let e=0;e<i;e++){const n=document.createElement("i");n.style.cssText=`left:${Math.random()*100}%;background:${Ah[e%Ah.length]};animation-delay:${Math.random()*.6}s;animation-duration:${1.8+Math.random()*1.2}s;--r:${(Math.random()*720-360).toFixed(0)}deg;--x:${(Math.random()*12-6).toFixed(1)}rem;${e%3?"":"border-radius:50%"}`,t.appendChild(n)}document.body.appendChild(t),setTimeout(()=>t.remove(),3600)}function lx(i,t){const e=V("starCount");if(t<=i||Fu()){e.textContent=t;return}const n=V("starPill"),s=performance.now()+500,r=500+(t-i)*200,o=a=>{const c=Math.max(0,Math.min(1,(a-s)/r));e.textContent=Math.round(i+(t-i)*c),c<1?requestAnimationFrame(o):(n.classList.remove("bump"),n.offsetWidth,n.classList.add("bump"))};e.textContent=i,requestAnimationFrame(o)}const Fu=()=>{var i;return(i=window.matchMedia)==null?void 0:i.call(window,"(prefers-reduced-motion: reduce)").matches};function hx(){const i=V("heroTreats");i.childElementCount||(i.innerHTML=["cookies","cupcakes","cake","maamoul"].map((t,e)=>`<img alt="" src="${ms(t,140)}" style="--i:${e}" />`).join("")),document.querySelectorAll("#screen-title .ico[data-thumb]").forEach(t=>{const[e,n]=t.dataset.thumb.split(":");let s="";if(e==="person")s=So(n,120);else if(e==="recipe")s=ms(n,120);else if(e==="book")s=vt.book[0]?bo(vt.book[0],120):ms("cake",120);else if(e==="theme"){const r=Ni[vt.theme]||Ni.pink;t.innerHTML=`<span class="mini-kitchen">${[r.wall,r.cabinet,r.tile,r.trim].map(o=>`<i style="background:${ke(o)}"></i>`).join("")}</span>`;return}s&&(t.innerHTML=`<img alt="" src="${s}" />`)})}function En(){ix(),ct=null,Jn("crispy",!1),Rt.showTitle(),hx(),Un("title"),hr()}V("tOrders").onclick=()=>wo();V("tFree").onclick=()=>Eo();V("tBook").onclick=()=>To();V("tKitchen").onclick=()=>oo();V("tGrown").onclick=()=>Sx();const Rh=i=>"★".repeat(i)+"☆".repeat(3-i);function ux(){const i=mn(vt);return go().find(t=>t.cost>i)||null}function fx(){var s;const i=mn(vt),t=ux();if(!t)return`⭐ ${i} stars — MashaAllah, you unlocked everything!`;const e=((s=[...go()].reverse().find(r=>r.cost<=i))==null?void 0:s.cost)??0,n=Math.round((i-e)/(t.cost-e)*100);return`⭐ ${i} stars · Next: ${t.label} at ${t.cost} ⭐<div class="track"><div style="width:${n}%"></div></div>`}function wo(){var n;const i=mn(vt);V("unlockBar").innerHTML=fx();const t=V("orderGrid");t.innerHTML="";const e=(n=jr.find(s=>la(s)<=i&&!vt.stars[s.id])||jr.find(s=>la(s)<=i&&vt.stars[s.id]<3))==null?void 0:n.id;for(const s of jr){const r=la(s),o=r<=i,a=vt.stars[s.id]||0,c=Ge[s.who],l=document.createElement("button");l.className="order-card",l.dataset.order=s.id,s.id===e&&l.classList.add("next"),l.disabled=!o,l.style.setProperty("--c",ke(c.house)),l.style.setProperty("--c2",ke(c.door));const h=o&&a>0&&a<3?` <span class="retry">Try for ${Rh(3)}</span>`:"";l.innerHTML=`<span class="who-pic"><img alt="" src="${So(s.who)}" /><img class="badge" alt="" src="${ms(s.r,90)}" /></span><div><div class="who">${c.name}</div>
      <div class="what">${Be[s.r].emoji} ${s.say}</div>
      <div class="st">${o?Rh(a)+h:`<span class="lock">🔒 ${r} ⭐</span>`}</div></div>`,l.onclick=()=>Gc(s.r,s),t.appendChild(l)}Un("orders")}V("ordersBack").onclick=()=>En();function Eo(){const i=mn(vt),t=V("recipeGrid");t.innerHTML="";for(const e of j_){const n=Be[e],s=n.unlock<=i,r=document.createElement("button");r.className="recipe-card",r.dataset.recipe=e,r.disabled=!s,r.style.setProperty("--c",ke(n.dough)),r.innerHTML=`<img alt="" src="${ms(e)}" /><b>${n.emoji} ${n.name}</b><small>${s?n.blurb:`🔒 Unlocks at ${n.unlock} ⭐`}</small>`,r.onclick=()=>Gc(e,null),t.appendChild(r)}Un("recipes")}V("recipesBack").onclick=()=>En();let ct=null;function Gc(i,t){const e=Be[i];if(ct={recipe:i,order:t,steps:["add","stir","shape",...e.bake?["bake"]:[],"decorate","box","deliver"],step:null},V("introImg").src=ms(i),V("introTitle").textContent=e.name,V("introBlurb").textContent=e.blurb,t){const n=Ge[t.who];V("introOrder").innerHTML=`<img alt="" src="${So(t.who)}" /><div>${n.name} ${t.say}<div class="chips">${t.req.map(s=>`<span class="chip">${er(s)}</span>`).join("")}</div></div>`}else V("introOrder").innerHTML="";V("introIngs").innerHTML=e.ingredients.map(n=>`<span class="ing-chip">${Vc[n]} ${Ss[n].name}</span>`).join(""),Un("intro"),In(t?`${Ge[t.who].name} ${t.say}`:`Let's make ${e.name}!`)}V("introBack").onclick=()=>ct!=null&&ct.order?wo():Eo();V("introGo").onclick=()=>dx();function dx(){var i;Be[ct.recipe],je("Bismillah! 🌙",{big:!0}),In("Bismillah!"),Rt.orderWho=((i=ct.order)==null?void 0:i.who)||null,Rt.deco.tool="frost",Rt.deco.color="pink",Rt.startBake(ct.recipe),Un(null),Hu("add",{silent:!0}),setTimeout(()=>Bu(),900)}function Ou(){const i=ct.step==="deliver-done"?ct.steps.length:ct.steps.indexOf(ct.step);V("steps").innerHTML=ct.steps.map((t,e)=>`<div class="st ${e<i?"done":e===i?"now":""}" title="${Th[t].name}">${e<i?"✓":t==="shape"?Be[ct.recipe].emoji:Th[t].e}</div>`).join("")}function ws(i,t=!0){const e=V("bubble");V("bubbleText").textContent=i,e.style.animation="none",e.offsetWidth,e.style.animation="",ct.bubble=i,t&&In(i),requestAnimationFrame(wn)}function Bu(){ct!=null&&ct.bubble&&In(ct.bubble,{force:!0})}V("sayBtn").onclick=()=>Bu();function zu(){const i=ct.order;return i?` ${Ge[i.who].name} wants: ${i.req.map(t=>er(t).replace(/^\S+\s/,"")).join(" + ")}.`:""}function Hu(i,{silent:t=!1}={}){ct.step=i,Ou(),i!=="add"&&Rt.setStep(i);const e=Be[ct.recipe],n=V("panel");n.innerHTML="";let s="";if(i==="add")s="Drag each ingredient into the bowl — or just tap it!",n.innerHTML=`<div class="panel-row" id="ingChips">${e.ingredients.map(r=>`<span class="ing-chip" data-ing="${r}">${Vc[r]} ${Ss[r].name}</span>`).join("")}</div>`;else if(i==="stir")s="Now stir! Move your finger round and round the bowl. 🌀",n.innerHTML='<div class="label">Mixing…</div><div class="progress"><div id="stirBar"></div></div>';else if(i==="shape")e.shape==="cut"?(s="Roll the dough flat! Swipe back and forth on it.",n.innerHTML='<div class="label">Rolling…</div><div class="progress"><div id="rollBar"></div></div>'):(s=ox[ct.recipe],n.innerHTML=`<div class="label"><span id="fillCount">0</span> / ${e.count} ${e.count>1?"done":""}</div><div class="progress"><div id="fillBar"></div></div>`);else if(i==="bake")s="Into the oven! Take them out when the needle is in the green part.",Vu();else if(i==="decorate")s=`Time to decorate! Pick a tool, then tap or drag on your treats.${zu()}`,as();else if(i==="box")s="Put your treats in the gift box! Drag or tap each one.",ro(!1);else if(i==="deliver"){const r=ct.order;s=r?`Let's take the gift to ${Ge[r.who].name}! Tap the house with the pink arrow.`:"Who will you give your gift to? Tap a house!"}ws(s,!t),requestAnimationFrame(wn)}function os(i=900){const t=ct.steps.indexOf(ct.step),e=ct;setTimeout(()=>{ct===e&&Hu(ct.steps[t+1])},i)}function Vu(){V("panel").innerHTML=`<div class="meter-wrap"><div class="meter" id="meter">
      <span class="zone" style="left:${un.golden*50}%">🥛 Doughy</span>
      <span class="zone" style="left:${(un.golden+un.crispy)*50}%">✅ Golden</span>
      <span class="zone" style="left:${(un.crispy+1)*50}%">🔥 Crispy</span>
      <div class="needle" id="needle"></div></div></div>
    <button class="btn big" id="takeOut" disabled>Take out! 🧤</button>`,V("takeOut").onclick=()=>{const i=Rt.takeOut();i&&i!=="early"&&(V("takeOut").disabled=!0)}}function px(i){return di[i].unlock<=mn(vt)}function Ch(i){return Pn[i].unlock<=mn(vt)}function as(){const i=Rt.deco,t=di[i.tool],e=J_.map(c=>{const l=di[c],h=px(c);return`<button class="tool ${i.tool===c?"on":""}" data-tool="${c}" ${h?"":"disabled"}><span class="e">${h?l.emoji:"🔒"}</span><small>${h?l.name:`${l.unlock} ⭐`}</small></button>`}).join("");let n="";t.color===!0?n=Object.entries(Pn).map(([c,l])=>`<button class="sw ${i.color===c?"on":""}" data-color="${c}" style="background:${ke(l.hex)}" title="${l.name}" ${Ch(c)?"":"disabled"}>${Ch(c)?"":"🔒"}</button>`).join(""):t.color==="pearl"?n=Object.entries(lc).map(([c,l])=>`<button class="sw ${i.pearl===c?"on":""}" data-pearl="${c}" style="background:${ke(l)}" title="${c}"></button>`).join(""):i.tool==="spr"&&(ct.recipe==="kunafa"||ct.recipe==="maamoul")?n=`<button class="shape-btn ${i.pistachio?"":"on"}" data-pist="0">🌈<small>Rainbow</small></button><button class="shape-btn ${i.pistachio?"on":""}" data-pist="1">🟢<small>Pistachio</small></button>`:n=`<span class="label">${t.say}</span>`;let s="";i.tool==="fond"&&(s=`<div class="panel-row">${K_.map(c=>`<button class="shape-btn ${i.fond===c?"on":""}" data-fond="${c}">${{star:"⭐",crescent:"🌙",heart:"💗",flower:"🌸"}[c]}</button>`).join("")}</div>`);const r=ct.recipe==="cake"?"✨ Magic":"✨ All",o=ct.order?'<div class="checks live" id="liveChecks"></div>':"";V("panel").innerHTML=`${o}<div class="panel-row scroll" id="toolRow">${e}</div>
    ${s}<div class="swatches" id="decoOpts">${n}</div>
    <div class="actions"><button class="btn alt" id="decoUndo" ${i.undo.length?"":"disabled"}>↩ Undo</button><button class="btn gold" id="decoAll">${r}</button><button class="btn mint" id="decoDone">Done ✔</button></div>`,V("panel").querySelectorAll("[data-tool]").forEach(c=>c.onclick=()=>{i.tool=c.dataset.tool,as(),ws(di[i.tool].say+zu(),!0)}),V("panel").querySelectorAll("[data-color]").forEach(c=>c.onclick=()=>{i.color=c.dataset.color,as()}),V("panel").querySelectorAll("[data-pearl]").forEach(c=>c.onclick=()=>{i.pearl=c.dataset.pearl,as()}),V("panel").querySelectorAll("[data-fond]").forEach(c=>c.onclick=()=>{i.fond=c.dataset.fond,as()}),V("panel").querySelectorAll("[data-pist]").forEach(c=>c.onclick=()=>{i.pistachio=c.dataset.pist==="1",as()}),V("decoUndo").onclick=()=>Rt.undo(),V("decoAll").onclick=()=>Rt.decoAll(),V("decoDone").onclick=()=>{je(nr(so),{big:!0}),Bt.done(),os(700)};const a=V("toolRow").querySelector(".on");a&&a.scrollIntoView({block:"nearest",inline:"center"}),Gu(),requestAnimationFrame(wn)}let Ma=0;function Gu(){const i=ct==null?void 0:ct.order,t=V("liveChecks");!i||!t||Ma||(Ma=requestAnimationFrame(()=>{if(Ma=0,!ct||ct.order!==i||!V("liveChecks"))return;const e=Eu(i,Rt.getCreation().treats),n=!ct.liveOk;ct.liveOk||(ct.liveOk=[]);const s=e.join();V("liveChecks").dataset.key!==s&&(V("liveChecks").dataset.key=s,V("liveChecks").innerHTML=i.req.map((r,o)=>`<span class="check ${e[o]?"ok":r.k==="shape"?"miss":"todo"}">${e[o]?"✅":r.k==="shape"?"💭":"⬜"} ${er(r)}</span>`).join(""),e.forEach((r,o)=>{r&&!ct.liveOk[o]&&!n&&(je(`${nr(so)} ${er(i.req[o])} ✔`,{big:!0}),Bt.done()),ct.liveOk[o]=r}))}))}function ro(i){const t=Object.entries(Uc).map(([n,s])=>`<button class="sw ${Rt.boxColor===n?"on":""}" data-box="${n}" style="background:${ke(s.hex)}" title="${n}"></button>`).join(""),e=Object.entries(Nc).map(([n,s])=>`<button class="sw ${Rt.ribbon===n?"on":""}" data-rib="${n}" style="background:${ke(s)}" title="${n}">🎀</button>`).join("");V("panel").innerHTML=`<div class="panel-row"><span class="label">Box:</span><div class="swatches">${t}</div></div>
    <div class="panel-row"><span class="label">Ribbon:</span><div class="swatches">${e}</div></div>
    <div class="actions">${i?'<button class="btn big pulse" id="tieBtn">Tie the ribbon 🎀</button>':`<span class="count" id="packCount">${Rt.packed||0} / ${Rt.treats.length} packed</span><button class="btn alt" id="packAll">Pack all 📦</button>`}</div>`,V("panel").querySelectorAll("[data-box]").forEach(n=>n.onclick=()=>{Rt.setBoxColor(n.dataset.box),ro(i)}),V("panel").querySelectorAll("[data-rib]").forEach(n=>n.onclick=()=>{Rt.setRibbon(n.dataset.rib),ro(i)}),i?V("tieBtn").onclick=()=>{V("tieBtn").disabled=!0,Rt.tieBox()}:V("packAll").onclick=()=>Rt.packAll(),requestAnimationFrame(wn)}function mx(i,t,e={}){if(ct){if(i==="add"){const n=document.querySelector(`#ingChips [data-ing="${e.id}"]`);n&&n.classList.add("ok"),t<e.total&&je(`${Vc[e.id]} ${Ss[e.id].name}!`,{say:!0})}else if(i==="stir"){const n=V("stirBar");n&&(n.style.width=`${t*100}%`)}else if(i==="roll"){const n=V("rollBar");n&&(n.style.width=`${t*100}%`)}else if(i==="shape"){const n=Be[ct.recipe],s=Math.round(t*n.count),r=V("fillBar");r&&(r.style.width=`${t*100}%`);const o=V("fillCount");o&&(o.textContent=s);const a=V("cutCount");a&&(a.textContent=s),n.count>1&&s>0&&s!==ct.counted&&(ct.counted=s,In(s===n.count?`${s}! All done!`:String(s)))}else if(i==="deco")Gu();else if(i==="bake"){const n=V("needle");n&&(n.style.left=`${t*100}%`)}else if(i==="bake-start"){const n=V("takeOut");n&&(n.disabled=!1);const s=V("needle");s&&(s.style.left="0%")}else if(i==="bake-golden"){ws("Golden! Take them out now! 🧤");const n=V("takeOut");n&&n.classList.add("pulse")}else if(i==="deco-undo"){const n=V("decoUndo");n&&(n.disabled=t===0)}else if(i==="box"){const n=V("packCount");n&&(n.textContent=`${Math.round(t*Rt.treats.length)} / ${Rt.treats.length} packed`)}}}function gx(i,t={}){var n,s;if(!ct)return;const e=Be[ct.recipe];if(i==="add")je(`${nr(so)} All in!`,{big:!0}),os(1e3);else if(i==="stir")je("Smooth and yummy!",{big:!0}),os(1e3);else if(i==="roll"){const r=((s=(n=ct.order)==null?void 0:n.req.find(o=>o.k==="shape"))==null?void 0:s.v)||Rt.cutter;Rt.setCutter(r),ws(`Pick a cookie cutter, then tap the dough to cut ${e.count} cookies!${ct.order?` ${Ge[ct.order.who].name} wants ${io[ct.order.req.find(o=>o.k==="shape").v].name.toLowerCase()} cookies.`:""}`),Wu()}else i==="shape"?(je(`${nr(so)}`,{big:!0}),os(1100)):i==="bake"?t.result==="golden"?(je("Perfectly golden! MashaAllah! ✨",{big:!0,say:!0}),os(1500)):setTimeout(()=>{(ct==null?void 0:ct.step)==="bake"&&(Jn("crispy",!0),In("Oops, a little crispy! That's okay. Let's try again!"))},900):i==="packed"?(ws("All packed! Choose a ribbon colour, then tie the box. 🎀"),ro(!0)):i==="box"&&(je("What a pretty gift! 🎁",{big:!0}),os(900))}function Wu(){const i=Be[ct.recipe];V("panel").innerHTML=`<div class="panel-row">${Object.entries(io).map(([t,e])=>`<button class="shape-btn ${Rt.cutter===t?"on":""}" data-cut="${t}">${e.emoji}<small>${e.name}</small></button>`).join("")}</div>
    <div class="label"><span id="cutCount">${Rt.shapeDone||0}</span> / ${i.count} cookies</div>`,V("panel").querySelectorAll("[data-cut]").forEach(t=>t.onclick=()=>{Rt.setCutter(t.dataset.cut),Wu()}),requestAnimationFrame(wn)}V("crispyRetry").onclick=()=>{Jn("crispy",!1),Vu(),ws("Fresh batch! Watch for the green part this time."),Rt.retryBake()};function _x(i,{speak:t=!1}={}){je(i,{say:t})}function vx(i){if(!ct)return;ct.step="deliver-done",ct.who=i,Ou(),V("panel").innerHTML="";const t=ct;setTimeout(()=>{ct===t&&xx()},2e3)}function xx(){const i=ct.order,t=ct.who,e=Rt.getCreation();ct.creation={...e,id:Date.now().toString(36),who:t,date:new Date().toISOString(),order:(i==null?void 0:i.id)||null},ct.saved=!1;const n=Ge[t].thanks&&Math.random()<.5?Ge[t].thanks:nr(Q_),s=mn(vt);V("resFace").src=So(t),V("resTreat").src=bo(ct.creation,260),V("resThanks").innerHTML=`<b>${Ge[t].name}:</b> ${n}`;let r=[];if(i){const a=Eu(i,e.treats),c=1+a.filter(Boolean).length,l=vt.stars[i.id]||0;c>l&&(vt.stars[i.id]=c),V("resStars").innerHTML=[0,1,2].map(u=>`<span class="${u<c?"":"off"}" style="animation-delay:${.2+u*.25}s">⭐</span>`).join("");for(let u=0;u<c;u++)setTimeout(()=>Bt.star(u),250+u*250);V("resChecks").innerHTML=[[!0,"Gift delivered"],...i.req.map((u,d)=>[a[d],er(u)+(a[d]?"":" — try it next time!")])].map(([u,d],m)=>`<span class="check ${u?"ok":"miss"}" style="--i:${m}">${u?"✅":"💭"} ${d}</span>`).join("");const h=mn(vt);r=go().filter(u=>u.cost<=h&&!vt.seen.includes(u.id));for(const u of r)vt.seen.push(u.id)}else V("resStars").innerHTML="",V("resChecks").innerHTML="";const o=li[vt.hadith%li.length];vt.hadith=(vt.hadith+1)%li.length,vt.bakes++,_i(),hr(),V("resHadith").textContent=o.text,V("resSource").textContent=o.src,V("resMeaning").textContent=o.mean,V("resSave").disabled=!1,V("resSave").textContent="📖 Save to Bakery Book",V("resMore").textContent=i?"📋 More orders":"🧁 Bake again",Un("result"),cx(),lx(s,mn(vt)),In(`Alhamdulillah! ${Ge[t].name} says: ${n} ... ${o.text}`),r.length&&setTimeout(()=>{V("unlockList").innerHTML=r.map(a=>`<li>${a.label}<small>${a.kind}</small></li>`).join(""),Jn("unlock",!0),Bt.unlock(),V("starPill").classList.remove("bump"),V("starPill").offsetWidth,V("starPill").classList.add("bump")},2200)}V("unlockOk").onclick=()=>Jn("unlock",!1);V("resSave").onclick=()=>{ct.saved||(vt.book.unshift(ct.creation),vt.book.length>30&&(vt.book.length=30),ct.saved=!0,_i(),V("resSave").disabled=!0,V("resSave").textContent="✅ Saved!",je("Saved in your Bakery Book! 📖"),Bt.done())};V("resPhoto").onclick=()=>Xu(ct.creation);V("resMore").onclick=()=>{const i=ct.order;En(),i?wo():Eo()};V("resHome").onclick=()=>En();async function Xu(i){Bt.shutter();const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#fff;z-index:60;opacity:0.9;transition:opacity .5s;pointer-events:none",document.body.appendChild(t),requestAnimationFrame(()=>{t.style.opacity="0"}),setTimeout(()=>t.remove(),600);const e=await Zv(i,{who:i.who});if(!e){je("Sorry, photos do not work on this device.");return}const n=document.createElement("a");n.href=e,n.download=`eid-sweets-${i.r}-${new Date().toISOString().slice(0,10)}.png`,document.body.appendChild(n),n.click(),n.remove(),je("📸 Photo saved!")}function To(){const i=V("bookGrid");i.innerHTML="",V("bookSub").textContent=vt.book.length?`You have saved ${vt.book.length} creation${vt.book.length>1?"s":""}. Tap one to look closer!`:"",vt.book.length||(i.innerHTML='<div class="empty">No treats yet! Bake something, then tap “Save to Bakery Book”. 🧁</div>'),vt.book.forEach((t,e)=>{const n=document.createElement("button");n.className="book-item",n.dataset.book=e,n.innerHTML=`<img alt="" src="${bo(t)}" /><b>${Be[t.r].short}</b><small>${t.who?`for ${Ge[t.who].name}`:""}</small>`,n.onclick=()=>yx(e),i.appendChild(n)}),Mx(),Un("book")}function Mx(){const i=Math.min(vt.bakes,li.length),t=V("bookSayings");t.innerHTML=`<h3>🌙 Sayings you have collected <small>${i} / ${li.length}</small></h3>`+li.map((e,n)=>n<i?`<button class="saying" data-say="${n}" style="--i:${n}"><b>“${e.text}”</b><small>${e.src}</small><span>${e.mean}</span></button>`:`<div class="saying locked" style="--i:${n}">🔒 Deliver another gift to collect this saying.</div>`).join(""),t.querySelectorAll("[data-say]").forEach(e=>e.onclick=()=>{const n=li[+e.dataset.say];In(`${n.text} ... ${n.mean}`,{force:!0})})}V("bookBack").onclick=()=>En();let Wc=0;function yx(i){Wc=i;const t=vt.book[i];V("viewImg").src=bo(t,420),V("viewTitle").textContent=Be[t.r].name,V("viewSub").textContent=`${t.who?`A gift for ${Ge[t.who].name} · `:""}${new Date(t.date).toLocaleDateString()}`,Un("view")}V("viewBack").onclick=()=>To();V("viewPhoto").onclick=()=>Xu(vt.book[Wc]);V("viewDelete").onclick=()=>{vt.book.splice(Wc,1),_i(),To()};function oo(){const i=mn(vt);V("themeGrid").innerHTML=Object.entries(Ni).map(([t,e])=>{const n=e.unlock<=i;return`<button class="theme-card ${vt.theme===t?"on":""}" data-theme="${t}" ${n?"":"disabled"} style="--c:${ke(e.trim)}">
      <div class="prev" style="background:${ke(e.wall)}">
        <span class="cab" style="background:${ke(e.cabinet)}"></span><span class="cab" style="background:${ke(e.cabinet)}"></span>
        <span class="tiles" style="background:${ke(e.tile)}"></span><span class="counter" style="background:${ke(e.counter)};border-color:${ke(e.trim)}"></span>
        <span class="bunt">${e.bunting.map(s=>`<i style="background:${ke(s)}"></i>`).join("")}</span>
        <span class="ico">${sx[t]||"🏠"}</span>
      </div>
      <b>${n?e.name:`🔒 ${e.unlock} ⭐`}</b>${vt.theme===t?'<span class="tick">✔</span>':""}</button>`}).join(""),V("hijabGrid").innerHTML=Object.entries(hc).map(([t,e])=>`<span class="sw-wrap"><button class="sw ${vt.hijab===t?"on":""}" data-hijab="${t}" style="background:${ke(e)}" aria-label="${t}">${vt.hijab===t?"✔":""}</button><small>${rx[t]||t}</small></span>`).join(""),V("themeGrid").querySelectorAll("[data-theme]").forEach(t=>t.onclick=()=>{vt.theme=t.dataset.theme,Rt.setTheme(vt.theme),_i(),oo()}),V("hijabGrid").querySelectorAll("[data-hijab]").forEach(t=>t.onclick=()=>{vt.hijab=t.dataset.hijab,Rt.setHijab(vt.hijab),_i(),oo()}),Un("kitchen")}V("kitchenDone").onclick=()=>En();function Sx(){V("grownList").innerHTML=li.map(i=>`<li>“${i.text}” — <i>${i.src}</i></li>`).join(""),Un("grown")}V("grownBack").onclick=()=>En();V("grownReset").onclick=()=>{confirm("Reset all stars, unlocks and saved creations?")&&(vt=tx(),Bc(vt.muted),Hc(vt.voice),Rt.setTheme(vt.theme),Rt.setHijab(vt.hijab),_i(),En())};window.addEventListener("keydown",i=>{var t;i.key==="Escape"&&(V("screen-confirm").classList.contains("active")?Jn("confirm",!1):bs===null&&V("homeBtn").click()),i.key===" "&&(ct==null?void 0:ct.step)==="bake"&&(i.preventDefault(),(t=V("takeOut"))==null||t.click())});hr();En();window.game={game:Rt,get save(){return vt},get session(){return ct},get screen(){return bs},info:()=>Rt.debugInfo(),openOrders:wo,openRecipes:Eo,openBook:To,openKitchen:oo,openIntro:(i,t)=>Gc(i,jr.find(e=>e.id===t)||null),auto(){var t,e;const i=ct==null?void 0:ct.step;if(i==="add")for(const n of Rt.ingredients)Rt.pour(n);else if(i==="stir")Rt.stirP=1,Rt.finishStir();else if(i==="shape")if(Rt.shapePhase==="roll")Rt.rollP=.999,Rt.rollMove({clientX:Rt.w/2,clientY:Rt.h/2},10);else if(Rt.shapePhase==="fill")for(const n of Rt.slots)n.p=1,Rt.updateFillSlot(n);else Rt.shapePhase==="cut"&&(async()=>{for(let s=0;s<Rt.slots.length;s++){const r=Rt.slots.find(a=>!a.done);if(!r)break;const o=Rt.toScreen(r.g.getWorldPosition(new Rt.camera.position.constructor));await Rt.cutAt({clientX:o.x,clientY:o.y})}})();else i==="bake"?(Rt.bakeM=.62,Rt.takeOut()):i==="decorate"?V("decoDone").click():i==="box"?Rt.packed<Rt.treats.length?Rt.packAll():(t=V("tieBtn"))==null||t.click():i==="deliver"&&Rt.deliverTo(((e=ct.order)==null?void 0:e.who)||"maryam")}};
