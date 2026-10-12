(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xa="170",Nc=0,wo=1,Fc=2,Gl=1,Oc=2,Dn=3,ii=0,Xt=1,Wt=2,ti=0,Wi=1,To=2,Ao=3,Ro=4,kc=5,gi=100,Bc=101,zc=102,Hc=103,Gc=104,Vc=200,Wc=201,$c=202,Xc=203,ia=204,sa=205,qc=206,Yc=207,jc=208,Zc=209,Kc=210,Jc=211,Qc=212,eh=213,th=214,ra=0,aa=1,oa=2,ji=3,la=4,ca=5,ha=6,ua=7,Vl=0,nh=1,ih=2,ni=0,sh=1,rh=2,ah=3,oh=4,lh=5,ch=6,hh=7,Wl=300,Zi=301,Ki=302,da=303,fa=304,gr=306,dr=1e3,vi=1001,pa=1002,Ut=1003,uh=1004,Ns=1005,xn=1006,br=1007,xi=1008,zn=1009,$l=1010,Xl=1011,Ss=1012,qa=1013,yi=1014,Un=1015,Si=1016,Ya=1017,ja=1018,Ji=1020,ql=35902,Yl=1021,jl=1022,hn=1023,Zl=1024,Kl=1025,$i=1026,Qi=1027,Za=1028,Ka=1029,Jl=1030,Ja=1031,Qa=1033,sr=33776,rr=33777,ar=33778,or=33779,ma=35840,ga=35841,_a=35842,va=35843,xa=36196,Ma=37492,ya=37496,Sa=37808,ba=37809,Ea=37810,wa=37811,Ta=37812,Aa=37813,Ra=37814,Ca=37815,Pa=37816,Ia=37817,Da=37818,La=37819,Ua=37820,Na=37821,lr=36492,Fa=36494,Oa=36495,Ql=36283,ka=36284,Ba=36285,za=36286,dh=3200,fh=3201,ec=0,ph=1,ei="",Vt="srgb",ns="srgb-linear",_r="linear",rt="srgb",wi=7680,Co=519,mh=512,gh=513,_h=514,tc=515,vh=516,xh=517,Mh=518,yh=519,Po=35044,Io="300 es",Nn=2e3,fr=2001;class is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Do=1234567;const _s=Math.PI/180,bs=180/Math.PI;function ss(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function Bt(n,e,t){return Math.max(e,Math.min(t,n))}function eo(n,e){return(n%e+e)%e}function Sh(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function bh(n,e,t){return n!==e?(t-n)/(e-n):0}function vs(n,e,t){return(1-t)*n+t*e}function Eh(n,e,t,i){return vs(n,e,1-Math.exp(-t*i))}function wh(n,e=1){return e-Math.abs(eo(n,e*2)-e)}function Th(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ah(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Rh(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Ch(n,e){return n+Math.random()*(e-n)}function Ph(n){return n*(.5-Math.random())}function Ih(n){n!==void 0&&(Do=n);let e=Do+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dh(n){return n*_s}function Lh(n){return n*bs}function Uh(n){return(n&n-1)===0&&n!==0}function Nh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Fh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Oh(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),f=r((e-i)/2),u=a((e-i)/2),p=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*f,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*f,o*c);break;case"ZXZ":n.set(l*f,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const kh={DEG2RAD:_s,RAD2DEG:bs,generateUUID:ss,clamp:Bt,euclideanModulo:eo,mapLinear:Sh,inverseLerp:bh,lerp:vs,damp:Eh,pingpong:wh,smoothstep:Th,smootherstep:Ah,randInt:Rh,randFloat:Ch,randFloatSpread:Ph,seededRandom:Ih,degToRad:Dh,radToDeg:Lh,isPowerOfTwo:Uh,ceilPowerOfTwo:Nh,floorPowerOfTwo:Fh,setQuaternionFromProperEuler:Oh,normalize:Ft,denormalize:Hi};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,i,s,r,a,o,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],p=i[5],g=i[8],v=s[0],m=s[3],d=s[6],S=s[1],w=s[4],M=s[7],C=s[2],T=s[5],A=s[8];return r[0]=a*v+o*S+l*C,r[3]=a*m+o*w+l*T,r[6]=a*d+o*M+l*A,r[1]=c*v+h*S+f*C,r[4]=c*m+h*w+f*T,r[7]=c*d+h*M+f*A,r[2]=u*v+p*S+g*C,r[5]=u*m+p*w+g*T,r[8]=u*d+p*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,p=c*r-a*l,g=t*f+i*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(s*c-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Er.makeScale(e,t)),this}rotate(e){return this.premultiply(Er.makeRotation(-e)),this}translate(e,t){return this.premultiply(Er.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Er=new ke;function nc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function pr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bh(){const n=pr("canvas");return n.style.display="block",n}const Lo={};function fs(n){n in Lo||(Lo[n]=!0,console.warn(n))}function zh(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Hh(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Gh(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ze={enabled:!0,workingColorSpace:ns,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===rt&&(n.r=kn(n.r),n.g=kn(n.g),n.b=kn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===rt&&(n.r=Xi(n.r),n.g=Xi(n.g),n.b=Xi(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ei?_r:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Uo=[.64,.33,.3,.6,.15,.06],No=[.2126,.7152,.0722],Fo=[.3127,.329],Oo=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ko=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ze.define({[ns]:{primaries:Uo,whitePoint:Fo,transfer:_r,toXYZ:Oo,fromXYZ:ko,luminanceCoefficients:No,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:Uo,whitePoint:Fo,transfer:rt,toXYZ:Oo,fromXYZ:ko,luminanceCoefficients:No,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}});let Ti;class Vh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ti===void 0&&(Ti=pr("canvas")),Ti.width=e.width,Ti.height=e.height;const i=Ti.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=kn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(kn(t[i]/255)*255):t[i]=kn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wh=0;class ic{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=ss(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wr(s[a].image)):r.push(wr(s[a]))}else r=wr(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function wr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $h=0;class Nt extends is{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,i=vi,s=vi,r=xn,a=xi,o=hn,l=zn,c=Nt.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=ss(),this.name="",this.source=new ic(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dr:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dr:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Wl;Nt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,s=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,M=(p+1)/2,C=(d+1)/2,T=(h+u)/4,A=(f+v)/4,R=(g+m)/4;return w>M&&w>C?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=T/i,r=A/i):M>C?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=R/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=A/r,s=R/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-v)/S,this.z=(u-h)/S,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xh extends is{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Nt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ic(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends Xh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class sc extends Nt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qh extends Nt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ri{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3];const u=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==u||c!==p||h!==g){let m=1-o;const d=l*u+c*p+h*g+f*v,S=d>=0?1:-1,w=1-d*d;if(w>Number.EPSILON){const C=Math.sqrt(w),T=Math.atan2(C,d*S);m=Math.sin(m*T)/C,o=Math.sin(o*T)/C}const M=o*S;if(l=l*m+u*M,c=c*m+p*M,h=h*m+g*M,f=f*m+v*M,m===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=C,c*=C,h*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*f+l*p-c*u,e[t+1]=l*g+h*u+c*f-o*p,e[t+2]=c*g+h*p+o*u-l*f,e[t+3]=h*g-o*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),f=o(r/2),u=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"YXZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"ZXY":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"ZYX":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"YZX":this._x=u*h*f+c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f-u*p*g;break;case"XZY":this._x=u*h*f-c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=i+o+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*f+this._w*u,this._x=i*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*h,this.y=i+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tr.copy(this).projectOnVector(e),this.sub(Tr)}reflect(e){return this.sub(Tr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tr=new U,Bo=new ri;class As{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fs.copy(i.boundingBox)),Fs.applyMatrix4(e.matrixWorld),this.union(Fs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),Os.subVectors(this.max,ls),Ai.subVectors(e.a,ls),Ri.subVectors(e.b,ls),Ci.subVectors(e.c,ls),Xn.subVectors(Ri,Ai),qn.subVectors(Ci,Ri),li.subVectors(Ai,Ci);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-li.z,li.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,li.z,0,-li.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-li.y,li.x,0];return!Ar(t,Ai,Ri,Ci,Os)||(t=[1,0,0,0,1,0,0,0,1],!Ar(t,Ai,Ri,Ci,Os))?!1:(ks.crossVectors(Xn,qn),t=[ks.x,ks.y,ks.z],Ar(t,Ai,Ri,Ci,Os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tn=[new U,new U,new U,new U,new U,new U,new U,new U],rn=new U,Fs=new As,Ai=new U,Ri=new U,Ci=new U,Xn=new U,qn=new U,li=new U,ls=new U,Os=new U,ks=new U,ci=new U;function Ar(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ci.fromArray(n,r);const o=s.x*Math.abs(ci.x)+s.y*Math.abs(ci.y)+s.z*Math.abs(ci.z),l=e.dot(ci),c=t.dot(ci),h=i.dot(ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Yh=new As,cs=new U,Rr=new U;class to{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Yh.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cs.subVectors(e,this.center);const t=cs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(cs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cs.copy(e.center).add(Rr)),this.expandByPoint(cs.copy(e.center).sub(Rr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new U,Cr=new U,Bs=new U,Yn=new U,Pr=new U,zs=new U,Ir=new U;class rc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Cr.copy(e).add(t).multiplyScalar(.5),Bs.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(Cr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Bs),o=Yn.dot(this.direction),l=-Yn.dot(Bs),c=Yn.lengthSq(),h=Math.abs(1-a*a);let f,u,p,g;if(h>0)if(f=a*l-o,u=a*o-l,g=r*h,f>=0)if(u>=-g)if(u<=g){const v=1/h;f*=v,u*=v,p=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Cr).addScaledVector(Bs,u),p}intersectSphere(e,t){An.subVectors(e.center,this.origin);const i=An.dot(this.direction),s=An.dot(An)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,i,s,r){Pr.subVectors(t,e),zs.subVectors(i,e),Ir.crossVectors(Pr,zs);let a=this.direction.dot(Ir),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yn.subVectors(this.origin,e);const l=o*this.direction.dot(zs.crossVectors(Yn,zs));if(l<0)return null;const c=o*this.direction.dot(Pr.cross(Yn));if(c<0||l+c>a)return null;const h=-o*Yn.dot(Ir);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,i,s,r,a,o,l,c,h,f,u,p,g,v,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,f,u,p,g,v,m)}set(e,t,i,s,r,a,o,l,c,h,f,u,p,g,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Pi.setFromMatrixColumn(e,0).length(),r=1/Pi.setFromMatrixColumn(e,1).length(),a=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=a*h,p=a*f,g=o*h,v=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,p=l*f,g=c*h,v=c*f;t[0]=u+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,p=l*f,g=c*h,v=c*f;t[0]=u-v*o,t[4]=-a*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,p=a*f,g=o*h,v=o*f;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+v,t[1]=l*f,t[5]=v*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-u*f,t[8]=g*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*f+g,t[10]=u-v*f}else if(e.order==="XZY"){const u=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+v,t[5]=a*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*h,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jh,e,Zh)}lookAt(e,t,i){const s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),jn.crossVectors(i,Yt),jn.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),jn.crossVectors(i,Yt)),jn.normalize(),Hs.crossVectors(Yt,jn),s[0]=jn.x,s[4]=Hs.x,s[8]=Yt.x,s[1]=jn.y,s[5]=Hs.y,s[9]=Yt.y,s[2]=jn.z,s[6]=Hs.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],p=i[13],g=i[2],v=i[6],m=i[10],d=i[14],S=i[3],w=i[7],M=i[11],C=i[15],T=s[0],A=s[4],R=s[8],b=s[12],y=s[1],P=s[5],z=s[9],O=s[13],V=s[2],Q=s[6],H=s[10],ne=s[14],W=s[3],he=s[7],ge=s[11],ye=s[15];return r[0]=a*T+o*y+l*V+c*W,r[4]=a*A+o*P+l*Q+c*he,r[8]=a*R+o*z+l*H+c*ge,r[12]=a*b+o*O+l*ne+c*ye,r[1]=h*T+f*y+u*V+p*W,r[5]=h*A+f*P+u*Q+p*he,r[9]=h*R+f*z+u*H+p*ge,r[13]=h*b+f*O+u*ne+p*ye,r[2]=g*T+v*y+m*V+d*W,r[6]=g*A+v*P+m*Q+d*he,r[10]=g*R+v*z+m*H+d*ge,r[14]=g*b+v*O+m*ne+d*ye,r[3]=S*T+w*y+M*V+C*W,r[7]=S*A+w*P+M*Q+C*he,r[11]=S*R+w*z+M*H+C*ge,r[15]=S*b+w*O+M*ne+C*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+r*l*f-s*c*f-r*o*u+i*c*u+s*o*p-i*l*p)+v*(+t*l*p-t*c*u+r*a*u-s*a*p+s*c*h-r*l*h)+m*(+t*c*f-t*o*p-r*a*f+i*a*p+r*o*h-i*c*h)+d*(-s*o*h-t*l*f+t*o*u+s*a*f-i*a*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],S=f*m*c-v*u*c+v*l*p-o*m*p-f*l*d+o*u*d,w=g*u*c-h*m*c-g*l*p+a*m*p+h*l*d-a*u*d,M=h*v*c-g*f*c+g*o*p-a*v*p-h*o*d+a*f*d,C=g*f*l-h*v*l-g*o*u+a*v*u+h*o*m-a*f*m,T=t*S+i*w+s*M+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=S*A,e[1]=(v*u*r-f*m*r-v*s*p+i*m*p+f*s*d-i*u*d)*A,e[2]=(o*m*r-v*l*r+v*s*c-i*m*c-o*s*d+i*l*d)*A,e[3]=(f*l*r-o*u*r-f*s*c+i*u*c+o*s*p-i*l*p)*A,e[4]=w*A,e[5]=(h*m*r-g*u*r+g*s*p-t*m*p-h*s*d+t*u*d)*A,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*d-t*l*d)*A,e[7]=(a*u*r-h*l*r+h*s*c-t*u*c-a*s*p+t*l*p)*A,e[8]=M*A,e[9]=(g*f*r-h*v*r-g*i*p+t*v*p+h*i*d-t*f*d)*A,e[10]=(a*v*r-g*o*r+g*i*c-t*v*c-a*i*d+t*o*d)*A,e[11]=(h*o*r-a*f*r-h*i*c+t*f*c+a*i*p-t*o*p)*A,e[12]=C*A,e[13]=(h*v*s-g*f*s+g*i*u-t*v*u-h*i*m+t*f*m)*A,e[14]=(g*o*s-a*v*s-g*i*l+t*v*l+a*i*m-t*o*m)*A,e[15]=(a*f*s-h*o*s+h*i*l-t*f*l-a*i*u+t*o*u)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,p=r*h,g=r*f,v=a*h,m=a*f,d=o*f,S=l*c,w=l*h,M=l*f,C=i.x,T=i.y,A=i.z;return s[0]=(1-(v+d))*C,s[1]=(p+M)*C,s[2]=(g-w)*C,s[3]=0,s[4]=(p-M)*T,s[5]=(1-(u+d))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+w)*A,s[9]=(m-S)*A,s[10]=(1-(u+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Pi.set(s[0],s[1],s[2]).length();const a=Pi.set(s[4],s[5],s[6]).length(),o=Pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],an.copy(this);const c=1/r,h=1/a,f=1/o;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=f,an.elements[9]*=f,an.elements[10]*=f,t.setFromRotationMatrix(an),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Nn){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),u=(i+s)/(i-s);let p,g;if(o===Nn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===fr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Nn){const l=this.elements,c=1/(t-e),h=1/(i-s),f=1/(a-r),u=(t+e)*c,p=(i+s)*h;let g,v;if(o===Nn)g=(a+r)*f,v=-2*f;else if(o===fr)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Pi=new U,an=new pt,jh=new U(0,0,0),Zh=new U(1,1,1),jn=new U,Hs=new U,Yt=new U,zo=new pt,Ho=new ri;class yn{constructor(e=0,t=0,i=0,s=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ho.setFromEuler(this),this.setFromQuaternion(Ho,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class no{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kh=0;const Go=new U,Ii=new ri,Rn=new pt,Gs=new U,hs=new U,Jh=new U,Qh=new ri,Vo=new U(1,0,0),Wo=new U(0,1,0),$o=new U(0,0,1),Xo={type:"added"},eu={type:"removed"},Di={type:"childadded",child:null},Dr={type:"childremoved",child:null};class Pt extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new U,t=new yn,i=new ri,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new ke}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new no,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.premultiply(Ii),this}rotateX(e){return this.rotateOnAxis(Vo,e)}rotateY(e){return this.rotateOnAxis(Wo,e)}rotateZ(e){return this.rotateOnAxis($o,e)}translateOnAxis(e,t){return Go.copy(e).applyQuaternion(this.quaternion),this.position.add(Go.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vo,e)}translateY(e){return this.translateOnAxis(Wo,e)}translateZ(e){return this.translateOnAxis($o,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Gs.copy(e):Gs.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(hs,Gs,this.up):Rn.lookAt(Gs,hs,this.up),this.quaternion.setFromRotationMatrix(Rn),s&&(Rn.extractRotation(s.matrixWorld),Ii.setFromRotationMatrix(Rn),this.quaternion.premultiply(Ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xo),Di.child=e,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eu),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xo),Di.child=e,this.dispatchEvent(Di),Di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,e,Jh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,Qh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Pt.DEFAULT_UP=new U(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new U,Cn=new U,Lr=new U,Pn=new U,Li=new U,Ui=new U,qo=new U,Ur=new U,Nr=new U,Fr=new U,Or=new xt,kr=new xt,Br=new xt;class cn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),on.subVectors(e,t),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){on.subVectors(s,t),Cn.subVectors(i,t),Lr.subVectors(e,t);const a=on.dot(on),o=on.dot(Cn),l=on.dot(Lr),c=Cn.dot(Cn),h=Cn.dot(Lr),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Or.setScalar(0),kr.setScalar(0),Br.setScalar(0),Or.fromBufferAttribute(e,t),kr.fromBufferAttribute(e,i),Br.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Or,r.x),a.addScaledVector(kr,r.y),a.addScaledVector(Br,r.z),a}static isFrontFacing(e,t,i,s){return on.subVectors(i,t),Cn.subVectors(e,t),on.cross(Cn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),on.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return cn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Li.subVectors(s,i),Ui.subVectors(r,i),Ur.subVectors(e,i);const l=Li.dot(Ur),c=Ui.dot(Ur);if(l<=0&&c<=0)return t.copy(i);Nr.subVectors(e,s);const h=Li.dot(Nr),f=Ui.dot(Nr);if(h>=0&&f<=h)return t.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Li,a);Fr.subVectors(e,r);const p=Li.dot(Fr),g=Ui.dot(Fr);if(g>=0&&p<=g)return t.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ui,o);const m=h*g-p*f;if(m<=0&&f-h>=0&&p-g>=0)return qo.subVectors(r,s),o=(f-h)/(f-h+(p-g)),t.copy(s).addScaledVector(qo,o);const d=1/(m+v+u);return a=v*d,o=u*d,t.copy(i).addScaledVector(Li,a).addScaledVector(Ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ac={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function zr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ze.workingColorSpace){if(e=eo(e,1),t=Bt(t,0,1),i=Bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=zr(a,r,e+1/3),this.g=zr(a,r,e),this.b=zr(a,r,e-1/3)}return Ze.toWorkingColorSpace(this,s),this}setStyle(e,t=Vt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const i=ac[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return Ze.fromWorkingColorSpace(Lt.copy(this),e),Math.round(Bt(Lt.r*255,0,255))*65536+Math.round(Bt(Lt.g*255,0,255))*256+Math.round(Bt(Lt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Lt.copy(this),t);const i=Lt.r,s=Lt.g,r=Lt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Vt){Ze.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,s=Lt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(Vs);const i=vs(Zn.h,Vs.h,t),s=vs(Zn.s,Vs.s,t),r=vs(Zn.l,Vs.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new qe;qe.NAMES=ac;let tu=0;class Rs extends is{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=ss(),this.name="",this.blending=Wi,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ia,this.blendDst=sa,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Co,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ia&&(i.blendSrc=this.blendSrc),this.blendDst!==sa&&(i.blendDst=this.blendDst),this.blendEquation!==gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Co&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class kt extends Rs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new U,Ws=new Ve;class dn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Po,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Po&&(e.usage=this.usage),e}}class oc extends dn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class lc extends dn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class bt extends dn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let nu=0;const Jt=new pt,Hr=new Pt,Ni=new U,jt=new As,us=new As,Rt=new U;class tn extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nc(e)?lc:oc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,i){return Jt.makeTranslation(e,t,i),this.applyMatrix4(Jt),this}scale(e,t,i){return Jt.makeScale(e,t,i),this.applyMatrix4(Jt),this}lookAt(e){return Hr.lookAt(e),Hr.updateMatrix(),this.applyMatrix4(Hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bt(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new to);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];us.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(jt.min,us.min),jt.expandByPoint(Rt),Rt.addVectors(jt.max,us.max),jt.expandByPoint(Rt)):(jt.expandByPoint(us.min),jt.expandByPoint(us.max))}jt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Rt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Rt.fromBufferAttribute(o,c),l&&(Ni.fromBufferAttribute(e,c),Rt.add(Ni)),s=Math.max(s,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new U,l[R]=new U;const c=new U,h=new U,f=new U,u=new Ve,p=new Ve,g=new Ve,v=new U,m=new U;function d(R,b,y){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,b),f.fromBufferAttribute(i,y),u.fromBufferAttribute(r,R),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,y),h.sub(c),f.sub(c),p.sub(u),g.sub(u);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[R].add(v),o[b].add(v),o[y].add(v),l[R].add(m),l[b].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let R=0,b=S.length;R<b;++R){const y=S[R],P=y.start,z=y.count;for(let O=P,V=P+z;O<V;O+=3)d(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const w=new U,M=new U,C=new U,T=new U;function A(R){C.fromBufferAttribute(s,R),T.copy(C);const b=o[R];w.copy(b),w.sub(C.multiplyScalar(C.dot(b))).normalize(),M.crossVectors(T,b);const P=M.dot(l[R])<0?-1:1;a.setXYZW(R,w.x,w.y,w.z,P)}for(let R=0,b=S.length;R<b;++R){const y=S[R],P=y.start,z=y.count;for(let O=P,V=P+z;O<V;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,f=new U;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let d=0;d<h;d++)u[g++]=c[p++]}return new dn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],p=e(u,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yo=new pt,hi=new rc,$s=new to,jo=new U,Xs=new U,qs=new U,Ys=new U,Gr=new U,js=new U,Zo=new U,Zs=new U;class at extends Pt{constructor(e=new tn,t=new kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){js.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(Gr.fromBufferAttribute(f,e),a?js.addScaledVector(Gr,h):js.addScaledVector(Gr.sub(t),h))}t.add(js)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$s.copy(i.boundingSphere),$s.applyMatrix4(r),hi.copy(e.ray).recast(e.near),!($s.containsPoint(hi.origin)===!1&&(hi.intersectSphere($s,jo)===null||hi.origin.distanceToSquared(jo)>(e.far-e.near)**2))&&(Yo.copy(r).invert(),hi.copy(e.ray).applyMatrix4(Yo),!(i.boundingBox!==null&&hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],d=a[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,C=w;M<C;M+=3){const T=o.getX(M),A=o.getX(M+1),R=o.getX(M+2);s=Ks(this,d,e,i,c,h,f,T,A,R),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const S=o.getX(m),w=o.getX(m+1),M=o.getX(m+2);s=Ks(this,a,e,i,c,h,f,S,w,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],d=a[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,C=w;M<C;M+=3){const T=M,A=M+1,R=M+2;s=Ks(this,d,e,i,c,h,f,T,A,R),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const S=m,w=m+1,M=m+2;s=Ks(this,a,e,i,c,h,f,S,w,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function iu(n,e,t,i,s,r,a,o){let l;if(e.side===Xt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ii,o),l===null)return null;Zs.copy(o),Zs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Zs);return c<t.near||c>t.far?null:{distance:c,point:Zs.clone(),object:n}}function Ks(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Xs),n.getVertexPosition(l,qs),n.getVertexPosition(c,Ys);const h=iu(n,e,t,i,Xs,qs,Ys,Zo);if(h){const f=new U;cn.getBarycoord(Zo,Xs,qs,Ys,f),s&&(h.uv=cn.getInterpolatedAttribute(s,o,l,c,f,new Ve)),r&&(h.uv1=cn.getInterpolatedAttribute(r,o,l,c,f,new Ve)),a&&(h.normal=cn.getInterpolatedAttribute(a,o,l,c,f,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new U,materialIndex:0};cn.getNormal(Xs,qs,Ys,u.normal),h.face=u,h.barycoord=f}return h}class ai extends tn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(f,2));function g(v,m,d,S,w,M,C,T,A,R,b){const y=M/A,P=C/R,z=M/2,O=C/2,V=T/2,Q=A+1,H=R+1;let ne=0,W=0;const he=new U;for(let ge=0;ge<H;ge++){const ye=ge*P-O;for(let Be=0;Be<Q;Be++){const Je=Be*y-z;he[v]=Je*S,he[m]=ye*w,he[d]=V,c.push(he.x,he.y,he.z),he[v]=0,he[m]=0,he[d]=T>0?1:-1,h.push(he.x,he.y,he.z),f.push(Be/A),f.push(1-ge/R),ne+=1}}for(let ge=0;ge<R;ge++)for(let ye=0;ye<A;ye++){const Be=u+ye+Q*ge,Je=u+ye+Q*(ge+1),Y=u+(ye+1)+Q*(ge+1),se=u+(ye+1)+Q*ge;l.push(Be,Je,se),l.push(Je,Y,se),W+=6}o.addGroup(p,W,b),p+=W,u+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function es(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ot(n){const e={};for(let t=0;t<n.length;t++){const i=es(n[t]);for(const s in i)e[s]=i[s]}return e}function su(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function cc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const ru={clone:es,merge:Ot};var au=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ou=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends Rs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=au,this.fragmentShader=ou,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=es(e.uniforms),this.uniformsGroups=su(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class hc extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Nn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new U,Ko=new Ve,Jo=new Ve;class ln extends hc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,Ko,Jo),t.subVectors(Jo,Ko)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_s*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fi=-90,Oi=1;class lu extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(Fi,Oi,e,t);s.layers=this.layers,this.add(s);const r=new ln(Fi,Oi,e,t);r.layers=this.layers,this.add(r);const a=new ln(Fi,Oi,e,t);a.layers=this.layers,this.add(a);const o=new ln(Fi,Oi,e,t);o.layers=this.layers,this.add(o);const l=new ln(Fi,Oi,e,t);l.layers=this.layers,this.add(l);const c=new ln(Fi,Oi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Nn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(f,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class uc extends Nt{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Zi,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cu extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new uc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ai(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:ti});r.uniforms.tEquirect.value=t;const a=new at(s,r),o=t.minFilter;return t.minFilter===xi&&(t.minFilter=xn),new lu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const Vr=new U,hu=new U,uu=new ke;class Jn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Vr.subVectors(i,t).cross(hu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Vr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||uu.getNormalMatrix(e),s=this.coplanarPoint(Vr).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new to,Js=new U;class io{constructor(e=new Jn,t=new Jn,i=new Jn,s=new Jn,r=new Jn,a=new Jn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Nn){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],p=s[8],g=s[9],v=s[10],m=s[11],d=s[12],S=s[13],w=s[14],M=s[15];if(i[0].setComponents(l-r,u-c,m-p,M-d).normalize(),i[1].setComponents(l+r,u+c,m+p,M+d).normalize(),i[2].setComponents(l+a,u+h,m+g,M+S).normalize(),i[3].setComponents(l-a,u-h,m-g,M-S).normalize(),i[4].setComponents(l-o,u-f,m-v,M-w).normalize(),t===Nn)i[5].setComponents(l+o,u+f,m+v,M+w).normalize();else if(t===fr)i[5].setComponents(o,f,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Js.x=s.normal.x>0?e.max.x:e.min.x,Js.y=s.normal.y>0?e.max.y:e.min.y,Js.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dc(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function du(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<f.length;p++){const g=f[u],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,f[u]=v)}f.length=u+1;for(let p=0,g=f.length;p<g;p++){const v=f[p];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class $t extends tn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,p=[],g=[],v=[],m=[];for(let d=0;d<h;d++){const S=d*u-a;for(let w=0;w<c;w++){const M=w*f-r;g.push(M,-S,0),v.push(0,0,1),m.push(w/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<o;S++){const w=S+c*d,M=S+c*(d+1),C=S+1+c*(d+1),T=S+1+c*d;p.push(w,M,T),p.push(M,C,T)}this.setIndex(p),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(v,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.width,e.height,e.widthSegments,e.heightSegments)}}var fu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pu=`#ifdef USE_ALPHAHASH
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
#endif`,mu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_u=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xu=`#ifdef USE_AOMAP
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
#endif`,Mu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yu=`#ifdef USE_BATCHING
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
#endif`,Su=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tu=`#ifdef USE_IRIDESCENCE
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
#endif`,Au=`#ifdef USE_BUMPMAP
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
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Du=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fu=`#define PI 3.141592653589793
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
} // validated`,Ou=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ku=`vec3 transformedNormal = objectNormal;
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
#endif`,Bu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$u=`#ifdef USE_ENVMAP
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
#endif`,Xu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qu=`#ifdef USE_ENVMAP
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
#endif`,Yu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ju=`#ifdef USE_ENVMAP
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
#endif`,Zu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ku=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ju=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ed=`#ifdef USE_GRADIENTMAP
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
}`,td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sd=`uniform bool receiveShadow;
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
#endif`,rd=`#ifdef USE_ENVMAP
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
#endif`,ad=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ld=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hd=`PhysicalMaterial material;
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
#endif`,ud=`struct PhysicalMaterial {
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
}`,dd=`
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
#endif`,fd=`#if defined( RE_IndirectDiffuse )
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
#endif`,pd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,md=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_d=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Md=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sd=`#if defined( USE_POINTS_UV )
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
#endif`,bd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ed=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Td=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ad=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rd=`#ifdef USE_MORPHTARGETS
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
#endif`,Cd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Id=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ud=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nd=`#ifdef USE_NORMALMAP
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
#endif`,Fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Od=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$d=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kd=`float getShadowMask() {
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
}`,Jd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qd=`#ifdef USE_SKINNING
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
#endif`,ef=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tf=`#ifdef USE_SKINNING
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
#endif`,nf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,af=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,of=`#ifdef USE_TRANSMISSION
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
#endif`,lf=`#ifdef USE_TRANSMISSION
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
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,df=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ff=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pf=`uniform sampler2D t2D;
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
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`#include <common>
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
}`,Mf=`#if DEPTH_PACKING == 3200
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
}`,yf=`#define DISTANCE
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
}`,Sf=`#define DISTANCE
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
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ef=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`uniform float scale;
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
}`,Tf=`uniform vec3 diffuse;
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
}`,Af=`#include <common>
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
}`,Rf=`uniform vec3 diffuse;
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
}`,Cf=`#define LAMBERT
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
}`,Pf=`#define LAMBERT
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
}`,If=`#define MATCAP
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
}`,Df=`#define MATCAP
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
}`,Lf=`#define NORMAL
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
}`,Uf=`#define NORMAL
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
}`,Nf=`#define PHONG
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
}`,Ff=`#define PHONG
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
}`,Of=`#define STANDARD
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
}`,kf=`#define STANDARD
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
}`,Bf=`#define TOON
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
}`,zf=`#define TOON
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
}`,Hf=`uniform float size;
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
}`,Gf=`uniform vec3 diffuse;
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
}`,Vf=`#include <common>
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
}`,Wf=`uniform vec3 color;
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
}`,$f=`uniform float rotation;
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
}`,Xf=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:fu,alphahash_pars_fragment:pu,alphamap_fragment:mu,alphamap_pars_fragment:gu,alphatest_fragment:_u,alphatest_pars_fragment:vu,aomap_fragment:xu,aomap_pars_fragment:Mu,batching_pars_vertex:yu,batching_vertex:Su,begin_vertex:bu,beginnormal_vertex:Eu,bsdfs:wu,iridescence_fragment:Tu,bumpmap_pars_fragment:Au,clipping_planes_fragment:Ru,clipping_planes_pars_fragment:Cu,clipping_planes_pars_vertex:Pu,clipping_planes_vertex:Iu,color_fragment:Du,color_pars_fragment:Lu,color_pars_vertex:Uu,color_vertex:Nu,common:Fu,cube_uv_reflection_fragment:Ou,defaultnormal_vertex:ku,displacementmap_pars_vertex:Bu,displacementmap_vertex:zu,emissivemap_fragment:Hu,emissivemap_pars_fragment:Gu,colorspace_fragment:Vu,colorspace_pars_fragment:Wu,envmap_fragment:$u,envmap_common_pars_fragment:Xu,envmap_pars_fragment:qu,envmap_pars_vertex:Yu,envmap_physical_pars_fragment:rd,envmap_vertex:ju,fog_vertex:Zu,fog_pars_vertex:Ku,fog_fragment:Ju,fog_pars_fragment:Qu,gradientmap_pars_fragment:ed,lightmap_pars_fragment:td,lights_lambert_fragment:nd,lights_lambert_pars_fragment:id,lights_pars_begin:sd,lights_toon_fragment:ad,lights_toon_pars_fragment:od,lights_phong_fragment:ld,lights_phong_pars_fragment:cd,lights_physical_fragment:hd,lights_physical_pars_fragment:ud,lights_fragment_begin:dd,lights_fragment_maps:fd,lights_fragment_end:pd,logdepthbuf_fragment:md,logdepthbuf_pars_fragment:gd,logdepthbuf_pars_vertex:_d,logdepthbuf_vertex:vd,map_fragment:xd,map_pars_fragment:Md,map_particle_fragment:yd,map_particle_pars_fragment:Sd,metalnessmap_fragment:bd,metalnessmap_pars_fragment:Ed,morphinstance_vertex:wd,morphcolor_vertex:Td,morphnormal_vertex:Ad,morphtarget_pars_vertex:Rd,morphtarget_vertex:Cd,normal_fragment_begin:Pd,normal_fragment_maps:Id,normal_pars_fragment:Dd,normal_pars_vertex:Ld,normal_vertex:Ud,normalmap_pars_fragment:Nd,clearcoat_normal_fragment_begin:Fd,clearcoat_normal_fragment_maps:Od,clearcoat_pars_fragment:kd,iridescence_pars_fragment:Bd,opaque_fragment:zd,packing:Hd,premultiplied_alpha_fragment:Gd,project_vertex:Vd,dithering_fragment:Wd,dithering_pars_fragment:$d,roughnessmap_fragment:Xd,roughnessmap_pars_fragment:qd,shadowmap_pars_fragment:Yd,shadowmap_pars_vertex:jd,shadowmap_vertex:Zd,shadowmask_pars_fragment:Kd,skinbase_vertex:Jd,skinning_pars_vertex:Qd,skinning_vertex:ef,skinnormal_vertex:tf,specularmap_fragment:nf,specularmap_pars_fragment:sf,tonemapping_fragment:rf,tonemapping_pars_fragment:af,transmission_fragment:of,transmission_pars_fragment:lf,uv_pars_fragment:cf,uv_pars_vertex:hf,uv_vertex:uf,worldpos_vertex:df,background_vert:ff,background_frag:pf,backgroundCube_vert:mf,backgroundCube_frag:gf,cube_vert:_f,cube_frag:vf,depth_vert:xf,depth_frag:Mf,distanceRGBA_vert:yf,distanceRGBA_frag:Sf,equirect_vert:bf,equirect_frag:Ef,linedashed_vert:wf,linedashed_frag:Tf,meshbasic_vert:Af,meshbasic_frag:Rf,meshlambert_vert:Cf,meshlambert_frag:Pf,meshmatcap_vert:If,meshmatcap_frag:Df,meshnormal_vert:Lf,meshnormal_frag:Uf,meshphong_vert:Nf,meshphong_frag:Ff,meshphysical_vert:Of,meshphysical_frag:kf,meshtoon_vert:Bf,meshtoon_frag:zf,points_vert:Hf,points_frag:Gf,shadow_vert:Vf,shadow_frag:Wf,sprite_vert:$f,sprite_frag:Xf},le={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},gn={basic:{uniforms:Ot([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Ot([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Ot([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Ot([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Ot([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new qe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Ot([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Ot([le.points,le.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Ot([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Ot([le.common,le.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Ot([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Ot([le.sprite,le.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Ot([le.common,le.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Ot([le.lights,le.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};gn.physical={uniforms:Ot([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Qs={r:0,b:0,g:0},di=new yn,qf=new pt;function Yf(n,e,t,i,s,r,a){const o=new qe(0);let l=r===!0?0:1,c,h,f=null,u=0,p=null;function g(S){let w=S.isScene===!0?S.background:null;return w&&w.isTexture&&(w=(S.backgroundBlurriness>0?t:e).get(w)),w}function v(S){let w=!1;const M=g(S);M===null?d(o,l):M&&M.isColor&&(d(M,1),w=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,w){const M=g(w);M&&(M.isCubeTexture||M.mapping===gr)?(h===void 0&&(h=new at(new ai(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:es(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),di.copy(w.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qf.makeRotationFromEuler(di)),h.material.toneMapped=Ze.getTransfer(M.colorSpace)!==rt,(f!==M||u!==M.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,f=M,u=M.version,p=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new at(new $t(2,2),new fn({name:"BackgroundMaterial",uniforms:es(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(M.colorSpace)!==rt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||u!==M.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=M,u=M.version,p=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function d(S,w){S.getRGB(Qs,cc(n)),i.buffers.color.setClear(Qs.r,Qs.g,Qs.b,w,a)}return{getClearColor:function(){return o},setClearColor:function(S,w=1){o.set(S),l=w,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,d(o,l)},render:v,addToRenderList:m}}function jf(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,a=!1;function o(y,P,z,O,V){let Q=!1;const H=f(O,z,P);r!==H&&(r=H,c(r.object)),Q=p(y,O,z,V),Q&&g(y,O,z,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,M(y,P,z,O),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function f(y,P,z){const O=z.wireframe===!0;let V=i[y.id];V===void 0&&(V={},i[y.id]=V);let Q=V[P.id];Q===void 0&&(Q={},V[P.id]=Q);let H=Q[O];return H===void 0&&(H=u(l()),Q[O]=H),H}function u(y){const P=[],z=[],O=[];for(let V=0;V<t;V++)P[V]=0,z[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:O,object:y,attributes:{},index:null}}function p(y,P,z,O){const V=r.attributes,Q=P.attributes;let H=0;const ne=z.getAttributes();for(const W in ne)if(ne[W].location>=0){const ge=V[W];let ye=Q[W];if(ye===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(ye=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(ye=y.instanceColor)),ge===void 0||ge.attribute!==ye||ye&&ge.data!==ye.data)return!0;H++}return r.attributesNum!==H||r.index!==O}function g(y,P,z,O){const V={},Q=P.attributes;let H=0;const ne=z.getAttributes();for(const W in ne)if(ne[W].location>=0){let ge=Q[W];ge===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor));const ye={};ye.attribute=ge,ge&&ge.data&&(ye.data=ge.data),V[W]=ye,H++}r.attributes=V,r.attributesNum=H,r.index=O}function v(){const y=r.newAttributes;for(let P=0,z=y.length;P<z;P++)y[P]=0}function m(y){d(y,0)}function d(y,P){const z=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;z[y]=1,O[y]===0&&(n.enableVertexAttribArray(y),O[y]=1),V[y]!==P&&(n.vertexAttribDivisor(y,P),V[y]=P)}function S(){const y=r.newAttributes,P=r.enabledAttributes;for(let z=0,O=P.length;z<O;z++)P[z]!==y[z]&&(n.disableVertexAttribArray(z),P[z]=0)}function w(y,P,z,O,V,Q,H){H===!0?n.vertexAttribIPointer(y,P,z,V,Q):n.vertexAttribPointer(y,P,z,O,V,Q)}function M(y,P,z,O){v();const V=O.attributes,Q=z.getAttributes(),H=P.defaultAttributeValues;for(const ne in Q){const W=Q[ne];if(W.location>=0){let he=V[ne];if(he===void 0&&(ne==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),ne==="instanceColor"&&y.instanceColor&&(he=y.instanceColor)),he!==void 0){const ge=he.normalized,ye=he.itemSize,Be=e.get(he);if(Be===void 0)continue;const Je=Be.buffer,Y=Be.type,se=Be.bytesPerElement,Me=Y===n.INT||Y===n.UNSIGNED_INT||he.gpuType===qa;if(he.isInterleavedBufferAttribute){const oe=he.data,Ce=oe.stride,Ue=he.offset;if(oe.isInstancedInterleavedBuffer){for(let Ge=0;Ge<W.locationSize;Ge++)d(W.location+Ge,oe.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ge=0;Ge<W.locationSize;Ge++)m(W.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let Ge=0;Ge<W.locationSize;Ge++)w(W.location+Ge,ye/W.locationSize,Y,ge,Ce*se,(Ue+ye/W.locationSize*Ge)*se,Me)}else{if(he.isInstancedBufferAttribute){for(let oe=0;oe<W.locationSize;oe++)d(W.location+oe,he.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let oe=0;oe<W.locationSize;oe++)m(W.location+oe);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let oe=0;oe<W.locationSize;oe++)w(W.location+oe,ye/W.locationSize,Y,ge,ye*se,ye/W.locationSize*oe*se,Me)}}else if(H!==void 0){const ge=H[ne];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(W.location,ge);break;case 3:n.vertexAttrib3fv(W.location,ge);break;case 4:n.vertexAttrib4fv(W.location,ge);break;default:n.vertexAttrib1fv(W.location,ge)}}}}S()}function C(){R();for(const y in i){const P=i[y];for(const z in P){const O=P[z];for(const V in O)h(O[V].object),delete O[V];delete P[z]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;const P=i[y.id];for(const z in P){const O=P[z];for(const V in O)h(O[V].object),delete O[V];delete P[z]}delete i[y.id]}function A(y){for(const P in i){const z=i[P];if(z[y.id]===void 0)continue;const O=z[y.id];for(const V in O)h(O[V].object),delete O[V];delete z[y.id]}}function R(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function Zf(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,f){f!==0&&(n.drawArraysInstanced(i,c,h,f),t.update(h,i,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];t.update(p,i,1)}function l(c,h,f,u){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v]*u[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Kf(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==hn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const R=A===Si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==zn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Un&&!R)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:C,maxSamples:T}}function Jf(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Jn,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||i!==0||s;return s=u,i=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:i,w=S*4;let M=d.clippingState||null;l.value=M,M=h(g,u,w,p);for(let C=0;C!==w;++C)M[C]=t[C];d.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=p+v*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let w=0,M=p;w!==v;++w,M+=4)a.copy(f[w]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Qf(n){let e=new WeakMap;function t(a,o){return o===da?a.mapping=Zi:o===fa&&(a.mapping=Ki),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===da||o===fa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new cu(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class vr extends hc{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vi=4,Qo=[.125,.215,.35,.446,.526,.582],_i=20,Wr=new vr,el=new qe;let $r=null,Xr=0,qr=0,Yr=!1;const mi=(1+Math.sqrt(5))/2,ki=1/mi,tl=[new U(-mi,ki,0),new U(mi,ki,0),new U(-ki,0,mi),new U(ki,0,mi),new U(0,mi,-ki),new U(0,mi,ki),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class nl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){$r=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),qr=this._renderer.getActiveMipmapLevel(),Yr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($r,Xr,qr),this._renderer.xr.enabled=Yr,e.scissorTest=!1,er(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===Ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$r=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),qr=this._renderer.getActiveMipmapLevel(),Yr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Si,format:hn,colorSpace:ns,depthBuffer:!1},s=il(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=il(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ep(r)),this._blurMaterial=tp(r,e,t)}return s}_compileMaterial(e){const t=new at(this._lodPlanes[0],e);this._renderer.compile(t,Wr)}_sceneToCubeUV(e,t,i,s){const o=new ln(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(el),h.toneMapping=ni,h.autoClear=!1;const p=new kt({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),g=new at(new ai,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(el),v=!0);for(let d=0;d<6;d++){const S=d%3;S===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):S===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const w=this._cubeSize;er(s,S*w,d>2?w:0,w,w),h.setRenderTarget(s),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Zi||e.mapping===Ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new at(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;er(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Wr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=tl[(s-r-1)%tl.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new at(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*_i-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):_i;m>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_i}`);const d=[];let S=0;for(let A=0;A<_i;++A){const R=A/v,b=Math.exp(-R*R/2);d.push(b),A===0?S+=b:A<m&&(S+=2*b)}for(let A=0;A<d.length;A++)d[A]=d[A]/S;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=d,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:w}=this;u.dTheta.value=g,u.mipInt.value=w-i;const M=this._sizeLods[s],C=3*M*(s>w-Vi?s-w+Vi:0),T=4*(this._cubeSize-M);er(t,C,T,3*M,2*M),l.setRenderTarget(t),l.render(f,Wr)}}function ep(n){const e=[],t=[],i=[];let s=n;const r=n-Vi+1+Qo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Vi?l=Qo[a-n+Vi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,v=3,m=2,d=1,S=new Float32Array(v*g*p),w=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,R=T>2?0:-1,b=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];S.set(b,v*g*T),w.set(u,m*g*T);const y=[T,T,T,T,T,T];M.set(y,d*g*T)}const C=new tn;C.setAttribute("position",new dn(S,v)),C.setAttribute("uv",new dn(w,m)),C.setAttribute("faceIndex",new dn(M,d)),e.push(C),s>Vi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function il(n,e,t){const i=new Hn(n,e,t);return i.texture.mapping=gr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function er(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function tp(n,e,t){const i=new Float32Array(_i),s=new U(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:so(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function sl(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:so(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function rl(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function so(){return`

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
	`}function np(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===da||l===fa,h=l===Zi||l===Ki;if(c||h){let f=e.get(o);const u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new nl(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new nl(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function ip(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&fs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function sp(n,e,t,i){const s={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)e.remove(v[m])}u.removeEventListener("dispose",a),delete s[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const g in u)e.update(u[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const v=p[g];for(let m=0,d=v.length;m<d;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(f){const u=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const S=p.array;v=p.version;for(let w=0,M=S.length;w<M;w+=3){const C=S[w+0],T=S[w+1],A=S[w+2];u.push(C,T,T,A,A,C)}}else if(g!==void 0){const S=g.array;v=g.version;for(let w=0,M=S.length/3-1;w<M;w+=3){const C=w+0,T=w+1,A=w+2;u.push(C,T,T,A,A,C)}}else return;const m=new(nc(u)?lc:oc)(u,1);m.version=v;const d=r.get(f);d&&e.remove(d),r.set(f,m)}function h(f){const u=r.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function rp(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,p){n.drawElements(i,p,r,u*a),t.update(p,i,1)}function c(u,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,u*a,g),t.update(p,i,g))}function h(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,u,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function f(u,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<u.length;d++)c(u[d]/a,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,u,0,v,0,g);let d=0;for(let S=0;S<g;S++)d+=p[S]*v[S];t.update(d,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function ap(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function op(n,e,t){const i=new WeakMap,s=new xt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let b=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let w=0;p===!0&&(w=1),g===!0&&(w=2),v===!0&&(w=3);let M=o.attributes.position.count*w,C=1;M>e.maxTextureSize&&(C=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const T=new Float32Array(M*C*4*f),A=new sc(T,M,C,f);A.type=Un,A.needsUpdate=!0;const R=w*4;for(let y=0;y<f;y++){const P=m[y],z=d[y],O=S[y],V=M*C*4*y;for(let Q=0;Q<P.count;Q++){const H=Q*R;p===!0&&(s.fromBufferAttribute(P,Q),T[V+H+0]=s.x,T[V+H+1]=s.y,T[V+H+2]=s.z,T[V+H+3]=0),g===!0&&(s.fromBufferAttribute(z,Q),T[V+H+4]=s.x,T[V+H+5]=s.y,T[V+H+6]=s.z,T[V+H+7]=0),v===!0&&(s.fromBufferAttribute(O,Q),T[V+H+8]=s.x,T[V+H+9]=s.y,T[V+H+10]=s.z,T[V+H+11]=O.itemSize===4?s.w:1)}}u={count:f,texture:A,size:new Ve(M,C)},i.set(o,u),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function lp(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class fc extends Nt{constructor(e,t,i,s,r,a,o,l,c,h=$i){if(h!==$i&&h!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===$i&&(i=yi),i===void 0&&h===Qi&&(i=Ji),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ut,this.minFilter=l!==void 0?l:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const pc=new Nt,al=new fc(1,1),mc=new sc,gc=new qh,_c=new uc,ol=[],ll=[],cl=new Float32Array(16),hl=new Float32Array(9),ul=new Float32Array(4);function rs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=ol[s];if(r===void 0&&(r=new Float32Array(s),ol[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function xr(n,e){let t=ll[e];t===void 0&&(t=new Int32Array(e),ll[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function up(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function dp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function fp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;ul.set(i),n.uniformMatrix2fv(this.addr,!1,ul),At(t,i)}}function pp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;hl.set(i),n.uniformMatrix3fv(this.addr,!1,hl),At(t,i)}}function mp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;cl.set(i),n.uniformMatrix4fv(this.addr,!1,cl),At(t,i)}}function gp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _p(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function vp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function xp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function Mp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function yp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function Sp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function bp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function Ep(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(al.compareFunction=tc,r=al):r=pc,t.setTexture2D(e||r,s)}function wp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||gc,s)}function Tp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||_c,s)}function Ap(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||mc,s)}function Rp(n){switch(n){case 5126:return cp;case 35664:return hp;case 35665:return up;case 35666:return dp;case 35674:return fp;case 35675:return pp;case 35676:return mp;case 5124:case 35670:return gp;case 35667:case 35671:return _p;case 35668:case 35672:return vp;case 35669:case 35673:return xp;case 5125:return Mp;case 36294:return yp;case 36295:return Sp;case 36296:return bp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ep;case 35679:case 36299:case 36307:return wp;case 35680:case 36300:case 36308:case 36293:return Tp;case 36289:case 36303:case 36311:case 36292:return Ap}}function Cp(n,e){n.uniform1fv(this.addr,e)}function Pp(n,e){const t=rs(e,this.size,2);n.uniform2fv(this.addr,t)}function Ip(n,e){const t=rs(e,this.size,3);n.uniform3fv(this.addr,t)}function Dp(n,e){const t=rs(e,this.size,4);n.uniform4fv(this.addr,t)}function Lp(n,e){const t=rs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Up(n,e){const t=rs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Np(n,e){const t=rs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Fp(n,e){n.uniform1iv(this.addr,e)}function Op(n,e){n.uniform2iv(this.addr,e)}function kp(n,e){n.uniform3iv(this.addr,e)}function Bp(n,e){n.uniform4iv(this.addr,e)}function zp(n,e){n.uniform1uiv(this.addr,e)}function Hp(n,e){n.uniform2uiv(this.addr,e)}function Gp(n,e){n.uniform3uiv(this.addr,e)}function Vp(n,e){n.uniform4uiv(this.addr,e)}function Wp(n,e,t){const i=this.cache,s=e.length,r=xr(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||pc,r[a])}function $p(n,e,t){const i=this.cache,s=e.length,r=xr(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||gc,r[a])}function Xp(n,e,t){const i=this.cache,s=e.length,r=xr(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||_c,r[a])}function qp(n,e,t){const i=this.cache,s=e.length,r=xr(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||mc,r[a])}function Yp(n){switch(n){case 5126:return Cp;case 35664:return Pp;case 35665:return Ip;case 35666:return Dp;case 35674:return Lp;case 35675:return Up;case 35676:return Np;case 5124:case 35670:return Fp;case 35667:case 35671:return Op;case 35668:case 35672:return kp;case 35669:case 35673:return Bp;case 5125:return zp;case 36294:return Hp;case 36295:return Gp;case 36296:return Vp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return $p;case 35680:case 36300:case 36308:case 36293:return Xp;case 36289:case 36303:case 36311:case 36292:return qp}}class jp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Rp(t.type)}}class Zp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yp(t.type)}}class Kp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const jr=/(\w+)(\])?(\[|\.)?/g;function dl(n,e){n.seq.push(e),n.map[e.id]=e}function Jp(n,e,t){const i=n.name,s=i.length;for(jr.lastIndex=0;;){const r=jr.exec(i),a=jr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){dl(t,c===void 0?new jp(o,n,e):new Zp(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Kp(o),dl(t,f)),t=f}}}class cr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Jp(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function fl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Qp=37297;let em=0;function tm(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const pl=new ke;function nm(n){Ze._getMatrix(pl,Ze.workingColorSpace,n);const e=`mat3( ${pl.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case _r:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ml(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+tm(n.getShaderSource(e),a)}else return s}function im(n,e){const t=nm(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sm(n,e){let t;switch(e){case sh:t="Linear";break;case rh:t="Reinhard";break;case ah:t="Cineon";break;case oh:t="ACESFilmic";break;case ch:t="AgX";break;case hh:t="Neutral";break;case lh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const tr=new U;function rm(){Ze.getLuminanceCoefficients(tr);const n=tr.x.toFixed(4),e=tr.y.toFixed(4),t=tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function am(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function om(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ps(n){return n!==""}function gl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _l(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ha(n){return n.replace(cm,um)}const hm=new Map;function um(n,e){let t=He[e];if(t===void 0){const i=hm.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ha(t)}const dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vl(n){return n.replace(dm,fm)}function fm(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xl(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function pm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Gl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Oc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Dn&&(e="SHADOWMAP_TYPE_VSM"),e}function mm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Zi:case Ki:e="ENVMAP_TYPE_CUBE";break;case gr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ki:e="ENVMAP_MODE_REFRACTION";break}return e}function _m(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vl:e="ENVMAP_BLENDING_MULTIPLY";break;case nh:e="ENVMAP_BLENDING_MIX";break;case ih:e="ENVMAP_BLENDING_ADD";break}return e}function vm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function xm(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=pm(t),c=mm(t),h=gm(t),f=_m(t),u=vm(t),p=am(t),g=om(r),v=s.createProgram();let m,d,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ps).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ps).join(`
`),d.length>0&&(d+=`
`)):(m=[xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),d=[xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?He.tonemapping_pars_fragment:"",t.toneMapping!==ni?sm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,im("linearToOutputTexel",t.outputColorSpace),rm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ps).join(`
`)),a=Ha(a),a=gl(a,t),a=_l(a,t),o=Ha(o),o=gl(o,t),o=_l(o,t),a=vl(a),o=vl(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Io?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Io?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=S+m+a,M=S+d+o,C=fl(s,s.VERTEX_SHADER,w),T=fl(s,s.FRAGMENT_SHADER,M);s.attachShader(v,C),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(P){if(n.debug.checkShaderErrors){const z=s.getProgramInfoLog(v).trim(),O=s.getShaderInfoLog(C).trim(),V=s.getShaderInfoLog(T).trim();let Q=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,C,T);else{const ne=ml(s,C,"vertex"),W=ml(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+ne+`
`+W)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||V==="")&&(H=!1);H&&(P.diagnostics={runnable:Q,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:V,prefix:d}})}s.deleteShader(C),s.deleteShader(T),R=new cr(s,v),b=lm(s,v)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,Qp)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=em++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=T,this}let Mm=0;class ym{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Sm(e),t.set(e,i)),i}}class Sm{constructor(e){this.id=Mm++,this.code=e,this.usedTimes=0}}function bm(n,e,t,i,s,r,a){const o=new no,l=new ym,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,P,z,O){const V=z.fog,Q=O.geometry,H=b.isMeshStandardMaterial?z.environment:null,ne=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),W=ne&&ne.mapping===gr?ne.image.height:null,he=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const ge=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ye=ge!==void 0?ge.length:0;let Be=0;Q.morphAttributes.position!==void 0&&(Be=1),Q.morphAttributes.normal!==void 0&&(Be=2),Q.morphAttributes.color!==void 0&&(Be=3);let Je,Y,se,Me;if(he){const tt=gn[he];Je=tt.vertexShader,Y=tt.fragmentShader}else Je=b.vertexShader,Y=b.fragmentShader,l.update(b),se=l.getVertexShaderID(b),Me=l.getFragmentShaderID(b);const oe=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),Ue=O.isInstancedMesh===!0,Ge=O.isBatchedMesh===!0,ot=!!b.map,We=!!b.matcap,mt=!!ne,N=!!b.aoMap,te=!!b.lightMap,G=!!b.bumpMap,K=!!b.normalMap,j=!!b.displacementMap,ae=!!b.emissiveMap,X=!!b.metalnessMap,x=!!b.roughnessMap,_=b.anisotropy>0,F=b.clearcoat>0,q=b.dispersion>0,ee=b.iridescence>0,Z=b.sheen>0,Te=b.transmission>0,de=_&&!!b.anisotropyMap,_e=F&&!!b.clearcoatMap,Ye=F&&!!b.clearcoatNormalMap,ie=F&&!!b.clearcoatRoughnessMap,ve=ee&&!!b.iridescenceMap,Ie=ee&&!!b.iridescenceThicknessMap,Le=Z&&!!b.sheenColorMap,xe=Z&&!!b.sheenRoughnessMap,Xe=!!b.specularMap,ze=!!b.specularColorMap,lt=!!b.specularIntensityMap,I=Te&&!!b.transmissionMap,ue=Te&&!!b.thicknessMap,$=!!b.gradientMap,J=!!b.alphaMap,me=b.alphaTest>0,fe=!!b.alphaHash,Fe=!!b.extensions;let _t=ni;b.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(_t=n.toneMapping);const It={shaderID:he,shaderType:b.type,shaderName:b.name,vertexShader:Je,fragmentShader:Y,defines:b.defines,customVertexShaderID:se,customFragmentShaderID:Me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ge,batchingColor:Ge&&O._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&O.instanceColor!==null,instancingMorph:Ue&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ns,alphaToCoverage:!!b.alphaToCoverage,map:ot,matcap:We,envMap:mt,envMapMode:mt&&ne.mapping,envMapCubeUVHeight:W,aoMap:N,lightMap:te,bumpMap:G,normalMap:K,displacementMap:u&&j,emissiveMap:ae,normalMapObjectSpace:K&&b.normalMapType===ph,normalMapTangentSpace:K&&b.normalMapType===ec,metalnessMap:X,roughnessMap:x,anisotropy:_,anisotropyMap:de,clearcoat:F,clearcoatMap:_e,clearcoatNormalMap:Ye,clearcoatRoughnessMap:ie,dispersion:q,iridescence:ee,iridescenceMap:ve,iridescenceThicknessMap:Ie,sheen:Z,sheenColorMap:Le,sheenRoughnessMap:xe,specularMap:Xe,specularColorMap:ze,specularIntensityMap:lt,transmission:Te,transmissionMap:I,thicknessMap:ue,gradientMap:$,opaque:b.transparent===!1&&b.blending===Wi&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:me,alphaHash:fe,combine:b.combine,mapUv:ot&&v(b.map.channel),aoMapUv:N&&v(b.aoMap.channel),lightMapUv:te&&v(b.lightMap.channel),bumpMapUv:G&&v(b.bumpMap.channel),normalMapUv:K&&v(b.normalMap.channel),displacementMapUv:j&&v(b.displacementMap.channel),emissiveMapUv:ae&&v(b.emissiveMap.channel),metalnessMapUv:X&&v(b.metalnessMap.channel),roughnessMapUv:x&&v(b.roughnessMap.channel),anisotropyMapUv:de&&v(b.anisotropyMap.channel),clearcoatMapUv:_e&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:xe&&v(b.sheenRoughnessMap.channel),specularMapUv:Xe&&v(b.specularMap.channel),specularColorMapUv:ze&&v(b.specularColorMap.channel),specularIntensityMapUv:lt&&v(b.specularIntensityMap.channel),transmissionMapUv:I&&v(b.transmissionMap.channel),thicknessMapUv:ue&&v(b.thicknessMap.channel),alphaMapUv:J&&v(b.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(K||_),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Q.attributes.uv&&(ot||J),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ce,skinning:O.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Be,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:_t,decodeVideoTexture:ot&&b.map.isVideoTexture===!0&&Ze.getTransfer(b.map.colorSpace)===rt,decodeVideoTextureEmissive:ae&&b.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(b.emissiveMap.colorSpace)===rt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Wt,flipSided:b.side===Xt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Fe&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&b.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function d(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)y.push(P),y.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(S(y,b),w(y,b),y.push(n.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function S(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function w(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),b.push(o.mask)}function M(b){const y=g[b.type];let P;if(y){const z=gn[y];P=ru.clone(z.uniforms)}else P=b.uniforms;return P}function C(b,y){let P;for(let z=0,O=h.length;z<O;z++){const V=h[z];if(V.cacheKey===y){P=V,++P.usedTimes;break}}return P===void 0&&(P=new xm(n,y,b,r),h.push(P)),P}function T(b){if(--b.usedTimes===0){const y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function A(b){l.remove(b)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:R}}function Em(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function wm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ml(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function yl(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f,u,p,g,v,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:u,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=u,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=v,d.group=m),e++,d}function o(f,u,p,g,v,m){const d=a(f,u,p,g,v,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(f,u,p,g,v,m){const d=a(f,u,p,g,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(f,u){t.length>1&&t.sort(f||wm),i.length>1&&i.sort(u||Ml),s.length>1&&s.sort(u||Ml)}function h(){for(let f=e,u=n.length;f<u;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Tm(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new yl,n.set(i,[a])):s>=r.length?(a=new yl,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Am(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new qe};break;case"SpotLight":t={position:new U,direction:new U,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function Rm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Cm=0;function Pm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Im(n){const e=new Am,t=Rm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const s=new U,r=new pt,a=new pt;function o(c){let h=0,f=0,u=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,S=0,w=0,M=0,C=0,T=0,A=0;c.sort(Pm);for(let b=0,y=c.length;b<y;b++){const P=c[b],z=P.color,O=P.intensity,V=P.distance,Q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*O,f+=z.g*O,u+=z.b*O;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],O);A++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ne=P.shadow,W=t.get(P);W.shadowIntensity=ne.intensity,W.shadowBias=ne.bias,W.shadowNormalBias=ne.normalBias,W.shadowRadius=ne.radius,W.shadowMapSize=ne.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=P.shadow.matrix,S++}i.directional[p]=H,p++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(z).multiplyScalar(O),H.distance=V,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[v]=H;const ne=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,ne.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[v]=ne.matrix,P.castShadow){const W=t.get(P);W.shadowIntensity=ne.intensity,W.shadowBias=ne.bias,W.shadowNormalBias=ne.normalBias,W.shadowRadius=ne.radius,W.shadowMapSize=ne.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=Q,M++}v++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(z).multiplyScalar(O),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=H,m++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const ne=P.shadow,W=t.get(P);W.shadowIntensity=ne.intensity,W.shadowBias=ne.bias,W.shadowNormalBias=ne.normalBias,W.shadowRadius=ne.radius,W.shadowMapSize=ne.mapSize,W.shadowCameraNear=ne.camera.near,W.shadowCameraFar=ne.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=P.shadow.matrix,w++}i.point[g]=H,g++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(O),H.groundColor.copy(P.groundColor).multiplyScalar(O),i.hemi[d]=H,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==S||R.numPointShadows!==w||R.numSpotShadows!==M||R.numSpotMaps!==C||R.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=M+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,R.directionalLength=p,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=S,R.numPointShadows=w,R.numSpotShadows=M,R.numSpotMaps=C,R.numLightProbes=A,i.version=Cm++)}function l(c,h){let f=0,u=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let d=0,S=c.length;d<S;d++){const w=c[d];if(w.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(w.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(w.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),u++}else if(w.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Sl(n){const e=new Im(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Dm(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Sl(n),e.set(s,[o])):r>=a.length?(o=new Sl(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Lm extends Rs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Um extends Rs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Nm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fm=`uniform sampler2D shadow_pass;
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
}`;function Om(n,e,t){let i=new io;const s=new Ve,r=new Ve,a=new xt,o=new Lm({depthPacking:fh}),l=new Um,c={},h=t.maxTextureSize,f={[ii]:Xt,[Xt]:ii,[Wt]:Wt},u=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Nm,fragmentShader:Fm}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new tn;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new at(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl;let d=this.type;this.render=function(T,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const b=n.getRenderTarget(),y=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),z=n.state;z.setBlending(ti),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=d!==Dn&&this.type===Dn,V=d===Dn&&this.type!==Dn;for(let Q=0,H=T.length;Q<H;Q++){const ne=T[Q],W=ne.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const he=W.getFrameExtents();if(s.multiply(he),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/he.x),s.x=r.x*he.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/he.y),s.y=r.y*he.y,W.mapSize.y=r.y)),W.map===null||O===!0||V===!0){const ye=this.type!==Dn?{minFilter:Ut,magFilter:Ut}:{};W.map!==null&&W.map.dispose(),W.map=new Hn(s.x,s.y,ye),W.map.texture.name=ne.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const ge=W.getViewportCount();for(let ye=0;ye<ge;ye++){const Be=W.getViewport(ye);a.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),z.viewport(a),W.updateMatrices(ne,ye),i=W.getFrustum(),M(A,R,W.camera,ne,this.type)}W.isPointLightShadow!==!0&&this.type===Dn&&S(W,R),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(b,y,P)};function S(T,A){const R=e.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Hn(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,R,u,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,R,p,v,null)}function w(T,A,R,b){let y=null;const P=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)y=P;else if(y=R.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=y.uuid,O=A.uuid;let V=c[z];V===void 0&&(V={},c[z]=V);let Q=V[O];Q===void 0&&(Q=y.clone(),V[O]=Q,A.addEventListener("dispose",C)),y=Q}if(y.visible=A.visible,y.wireframe=A.wireframe,b===Dn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:f[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=n.properties.get(y);z.light=R}return y}function M(T,A,R,b,y){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Dn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const O=e.update(T),V=T.material;if(Array.isArray(V)){const Q=O.groups;for(let H=0,ne=Q.length;H<ne;H++){const W=Q[H],he=V[W.materialIndex];if(he&&he.visible){const ge=w(T,he,b,y);T.onBeforeShadow(n,T,A,R,O,ge,W),n.renderBufferDirect(R,null,O,ge,T,W),T.onAfterShadow(n,T,A,R,O,ge,W)}}}else if(V.visible){const Q=w(T,V,b,y);T.onBeforeShadow(n,T,A,R,O,Q,null),n.renderBufferDirect(R,null,O,Q,T,null),T.onAfterShadow(n,T,A,R,O,Q,null)}}const z=T.children;for(let O=0,V=z.length;O<V;O++)M(z[O],A,R,b,y)}function C(T){T.target.removeEventListener("dispose",C);for(const R in c){const b=c[R],y=T.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const km={[ra]:aa,[oa]:ha,[la]:ua,[ji]:ca,[aa]:ra,[ha]:oa,[ua]:la,[ca]:ji};function Bm(n,e){function t(){let I=!1;const ue=new xt;let $=null;const J=new xt(0,0,0,0);return{setMask:function(me){$!==me&&!I&&(n.colorMask(me,me,me,me),$=me)},setLocked:function(me){I=me},setClear:function(me,fe,Fe,_t,It){It===!0&&(me*=_t,fe*=_t,Fe*=_t),ue.set(me,fe,Fe,_t),J.equals(ue)===!1&&(n.clearColor(me,fe,Fe,_t),J.copy(ue))},reset:function(){I=!1,$=null,J.set(-1,0,0,0)}}}function i(){let I=!1,ue=!1,$=null,J=null,me=null;return{setReversed:function(fe){if(ue!==fe){const Fe=e.get("EXT_clip_control");ue?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT);const _t=me;me=null,this.setClear(_t)}ue=fe},getReversed:function(){return ue},setTest:function(fe){fe?oe(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(fe){$!==fe&&!I&&(n.depthMask(fe),$=fe)},setFunc:function(fe){if(ue&&(fe=km[fe]),J!==fe){switch(fe){case ra:n.depthFunc(n.NEVER);break;case aa:n.depthFunc(n.ALWAYS);break;case oa:n.depthFunc(n.LESS);break;case ji:n.depthFunc(n.LEQUAL);break;case la:n.depthFunc(n.EQUAL);break;case ca:n.depthFunc(n.GEQUAL);break;case ha:n.depthFunc(n.GREATER);break;case ua:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=fe}},setLocked:function(fe){I=fe},setClear:function(fe){me!==fe&&(ue&&(fe=1-fe),n.clearDepth(fe),me=fe)},reset:function(){I=!1,$=null,J=null,me=null,ue=!1}}}function s(){let I=!1,ue=null,$=null,J=null,me=null,fe=null,Fe=null,_t=null,It=null;return{setTest:function(tt){I||(tt?oe(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(tt){ue!==tt&&!I&&(n.stencilMask(tt),ue=tt)},setFunc:function(tt,nn,En){($!==tt||J!==nn||me!==En)&&(n.stencilFunc(tt,nn,En),$=tt,J=nn,me=En)},setOp:function(tt,nn,En){(fe!==tt||Fe!==nn||_t!==En)&&(n.stencilOp(tt,nn,En),fe=tt,Fe=nn,_t=En)},setLocked:function(tt){I=tt},setClear:function(tt){It!==tt&&(n.clearStencil(tt),It=tt)},reset:function(){I=!1,ue=null,$=null,J=null,me=null,fe=null,Fe=null,_t=null,It=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},f={},u=new WeakMap,p=[],g=null,v=!1,m=null,d=null,S=null,w=null,M=null,C=null,T=null,A=new qe(0,0,0),R=0,b=!1,y=null,P=null,z=null,O=null,V=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,ne=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=ne>=1):W.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=ne>=2);let he=null,ge={};const ye=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),Je=new xt().fromArray(ye),Y=new xt().fromArray(Be);function se(I,ue,$,J){const me=new Uint8Array(4),fe=n.createTexture();n.bindTexture(I,fe),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<$;Fe++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(ue+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return fe}const Me={};Me[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(n.DEPTH_TEST),a.setFunc(ji),G(!1),K(wo),oe(n.CULL_FACE),N(ti);function oe(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function Ce(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Ue(I,ue){return f[I]!==ue?(n.bindFramebuffer(I,ue),f[I]=ue,I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ue),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ge(I,ue){let $=p,J=!1;if(I){$=u.get(ue),$===void 0&&($=[],u.set(ue,$));const me=I.textures;if($.length!==me.length||$[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,Fe=me.length;fe<Fe;fe++)$[fe]=n.COLOR_ATTACHMENT0+fe;$.length=me.length,J=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,J=!0);J&&n.drawBuffers($)}function ot(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const We={[gi]:n.FUNC_ADD,[Bc]:n.FUNC_SUBTRACT,[zc]:n.FUNC_REVERSE_SUBTRACT};We[Hc]=n.MIN,We[Gc]=n.MAX;const mt={[Vc]:n.ZERO,[Wc]:n.ONE,[$c]:n.SRC_COLOR,[ia]:n.SRC_ALPHA,[Kc]:n.SRC_ALPHA_SATURATE,[jc]:n.DST_COLOR,[qc]:n.DST_ALPHA,[Xc]:n.ONE_MINUS_SRC_COLOR,[sa]:n.ONE_MINUS_SRC_ALPHA,[Zc]:n.ONE_MINUS_DST_COLOR,[Yc]:n.ONE_MINUS_DST_ALPHA,[Jc]:n.CONSTANT_COLOR,[Qc]:n.ONE_MINUS_CONSTANT_COLOR,[eh]:n.CONSTANT_ALPHA,[th]:n.ONE_MINUS_CONSTANT_ALPHA};function N(I,ue,$,J,me,fe,Fe,_t,It,tt){if(I===ti){v===!0&&(Ce(n.BLEND),v=!1);return}if(v===!1&&(oe(n.BLEND),v=!0),I!==kc){if(I!==m||tt!==b){if((d!==gi||M!==gi)&&(n.blendEquation(n.FUNC_ADD),d=gi,M=gi),tt)switch(I){case Wi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case To:n.blendFunc(n.ONE,n.ONE);break;case Ao:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ro:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Wi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case To:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ao:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ro:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,w=null,C=null,T=null,A.set(0,0,0),R=0,m=I,b=tt}return}me=me||ue,fe=fe||$,Fe=Fe||J,(ue!==d||me!==M)&&(n.blendEquationSeparate(We[ue],We[me]),d=ue,M=me),($!==S||J!==w||fe!==C||Fe!==T)&&(n.blendFuncSeparate(mt[$],mt[J],mt[fe],mt[Fe]),S=$,w=J,C=fe,T=Fe),(_t.equals(A)===!1||It!==R)&&(n.blendColor(_t.r,_t.g,_t.b,It),A.copy(_t),R=It),m=I,b=!1}function te(I,ue){I.side===Wt?Ce(n.CULL_FACE):oe(n.CULL_FACE);let $=I.side===Xt;ue&&($=!$),G($),I.blending===Wi&&I.transparent===!1?N(ti):N(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const J=I.stencilWrite;o.setTest(J),J&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ae(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function G(I){y!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),y=I)}function K(I){I!==Nc?(oe(n.CULL_FACE),I!==P&&(I===wo?n.cullFace(n.BACK):I===Fc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),P=I}function j(I){I!==z&&(H&&n.lineWidth(I),z=I)}function ae(I,ue,$){I?(oe(n.POLYGON_OFFSET_FILL),(O!==ue||V!==$)&&(n.polygonOffset(ue,$),O=ue,V=$)):Ce(n.POLYGON_OFFSET_FILL)}function X(I){I?oe(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function x(I){I===void 0&&(I=n.TEXTURE0+Q-1),he!==I&&(n.activeTexture(I),he=I)}function _(I,ue,$){$===void 0&&(he===null?$=n.TEXTURE0+Q-1:$=he);let J=ge[$];J===void 0&&(J={type:void 0,texture:void 0},ge[$]=J),(J.type!==I||J.texture!==ue)&&(he!==$&&(n.activeTexture($),he=$),n.bindTexture(I,ue||Me[I]),J.type=I,J.texture=ue)}function F(){const I=ge[he];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ye(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(I){Je.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Je.copy(I))}function xe(I){Y.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function Xe(I,ue){let $=c.get(ue);$===void 0&&($=new WeakMap,c.set(ue,$));let J=$.get(I);J===void 0&&(J=n.getUniformBlockIndex(ue,I.name),$.set(I,J))}function ze(I,ue){const J=c.get(ue).get(I);l.get(ue)!==J&&(n.uniformBlockBinding(ue,J,I.__bindingPointIndex),l.set(ue,J))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},he=null,ge={},f={},u=new WeakMap,p=[],g=null,v=!1,m=null,d=null,S=null,w=null,M=null,C=null,T=null,A=new qe(0,0,0),R=0,b=!1,y=null,P=null,z=null,O=null,V=null,Je.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:oe,disable:Ce,bindFramebuffer:Ue,drawBuffers:Ge,useProgram:ot,setBlending:N,setMaterial:te,setFlipSided:G,setCullFace:K,setLineWidth:j,setPolygonOffset:ae,setScissorTest:X,activeTexture:x,bindTexture:_,unbindTexture:F,compressedTexImage2D:q,compressedTexImage3D:ee,texImage2D:ve,texImage3D:Ie,updateUBOMapping:Xe,uniformBlockBinding:ze,texStorage2D:Ye,texStorage3D:ie,texSubImage2D:Z,texSubImage3D:Te,compressedTexSubImage2D:de,compressedTexSubImage3D:_e,scissor:Le,viewport:xe,reset:lt}}function bl(n,e,t,i){const s=zm(i);switch(t){case Yl:return n*e;case Zl:return n*e;case Kl:return n*e*2;case Za:return n*e/s.components*s.byteLength;case Ka:return n*e/s.components*s.byteLength;case Jl:return n*e*2/s.components*s.byteLength;case Ja:return n*e*2/s.components*s.byteLength;case jl:return n*e*3/s.components*s.byteLength;case hn:return n*e*4/s.components*s.byteLength;case Qa:return n*e*4/s.components*s.byteLength;case sr:case rr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ar:case or:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ga:case va:return Math.max(n,16)*Math.max(e,8)/4;case ma:case _a:return Math.max(n,8)*Math.max(e,8)/2;case xa:case Ma:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ba:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ea:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case wa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Pa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Da:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case La:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ua:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Na:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case lr:case Fa:case Oa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ql:case ka:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ba:case za:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zm(n){switch(n){case zn:case $l:return{byteLength:1,components:1};case Ss:case Xl:case Si:return{byteLength:2,components:1};case Ya:case ja:return{byteLength:2,components:4};case yi:case qa:case Un:return{byteLength:4,components:1};case ql:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Hm(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,h=new WeakMap;let f;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,_){return p?new OffscreenCanvas(x,_):pr("canvas")}function v(x,_,F){let q=1;const ee=X(x);if((ee.width>F||ee.height>F)&&(q=F/Math.max(ee.width,ee.height)),q<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const Z=Math.floor(q*ee.width),Te=Math.floor(q*ee.height);f===void 0&&(f=g(Z,Te));const de=_?g(Z,Te):f;return de.width=Z,de.height=Te,de.getContext("2d").drawImage(x,0,0,Z,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Z+"x"+Te+")."),de}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),x;return x}function m(x){return x.generateMipmaps}function d(x){n.generateMipmap(x)}function S(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(x,_,F,q,ee=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let Z=_;if(_===n.RED&&(F===n.FLOAT&&(Z=n.R32F),F===n.HALF_FLOAT&&(Z=n.R16F),F===n.UNSIGNED_BYTE&&(Z=n.R8)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.R8UI),F===n.UNSIGNED_SHORT&&(Z=n.R16UI),F===n.UNSIGNED_INT&&(Z=n.R32UI),F===n.BYTE&&(Z=n.R8I),F===n.SHORT&&(Z=n.R16I),F===n.INT&&(Z=n.R32I)),_===n.RG&&(F===n.FLOAT&&(Z=n.RG32F),F===n.HALF_FLOAT&&(Z=n.RG16F),F===n.UNSIGNED_BYTE&&(Z=n.RG8)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.RG8UI),F===n.UNSIGNED_SHORT&&(Z=n.RG16UI),F===n.UNSIGNED_INT&&(Z=n.RG32UI),F===n.BYTE&&(Z=n.RG8I),F===n.SHORT&&(Z=n.RG16I),F===n.INT&&(Z=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),F===n.UNSIGNED_INT&&(Z=n.RGB32UI),F===n.BYTE&&(Z=n.RGB8I),F===n.SHORT&&(Z=n.RGB16I),F===n.INT&&(Z=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),F===n.UNSIGNED_INT&&(Z=n.RGBA32UI),F===n.BYTE&&(Z=n.RGBA8I),F===n.SHORT&&(Z=n.RGBA16I),F===n.INT&&(Z=n.RGBA32I)),_===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),_===n.RGBA){const Te=ee?_r:Ze.getTransfer(q);F===n.FLOAT&&(Z=n.RGBA32F),F===n.HALF_FLOAT&&(Z=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Z=Te===rt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function M(x,_){let F;return x?_===null||_===yi||_===Ji?F=n.DEPTH24_STENCIL8:_===Un?F=n.DEPTH32F_STENCIL8:_===Ss&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===yi||_===Ji?F=n.DEPTH_COMPONENT24:_===Un?F=n.DEPTH_COMPONENT32F:_===Ss&&(F=n.DEPTH_COMPONENT16),F}function C(x,_){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==Ut&&x.minFilter!==xn?Math.log2(Math.max(_.width,_.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?_.mipmaps.length:1}function T(x){const _=x.target;_.removeEventListener("dispose",T),R(_),_.isVideoTexture&&h.delete(_)}function A(x){const _=x.target;_.removeEventListener("dispose",A),y(_)}function R(x){const _=i.get(x);if(_.__webglInit===void 0)return;const F=x.source,q=u.get(F);if(q){const ee=q[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&b(x),Object.keys(q).length===0&&u.delete(F)}i.remove(x)}function b(x){const _=i.get(x);n.deleteTexture(_.__webglTexture);const F=x.source,q=u.get(F);delete q[_.__cacheKey],a.memory.textures--}function y(x){const _=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let ee=0;ee<_.__webglFramebuffer[q].length;ee++)n.deleteFramebuffer(_.__webglFramebuffer[q][ee]);else n.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)n.deleteFramebuffer(_.__webglFramebuffer[q]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=x.textures;for(let q=0,ee=F.length;q<ee;q++){const Z=i.get(F[q]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(F[q])}i.remove(x)}let P=0;function z(){P=0}function O(){const x=P;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),P+=1,x}function V(x){const _=[];return _.push(x.wrapS),_.push(x.wrapT),_.push(x.wrapR||0),_.push(x.magFilter),_.push(x.minFilter),_.push(x.anisotropy),_.push(x.internalFormat),_.push(x.format),_.push(x.type),_.push(x.generateMipmaps),_.push(x.premultiplyAlpha),_.push(x.flipY),_.push(x.unpackAlignment),_.push(x.colorSpace),_.join()}function Q(x,_){const F=i.get(x);if(x.isVideoTexture&&j(x),x.isRenderTargetTexture===!1&&x.version>0&&F.__version!==x.version){const q=x.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,x,_);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function H(x,_){const F=i.get(x);if(x.version>0&&F.__version!==x.version){Y(F,x,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function ne(x,_){const F=i.get(x);if(x.version>0&&F.__version!==x.version){Y(F,x,_);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function W(x,_){const F=i.get(x);if(x.version>0&&F.__version!==x.version){se(F,x,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}const he={[dr]:n.REPEAT,[vi]:n.CLAMP_TO_EDGE,[pa]:n.MIRRORED_REPEAT},ge={[Ut]:n.NEAREST,[uh]:n.NEAREST_MIPMAP_NEAREST,[Ns]:n.NEAREST_MIPMAP_LINEAR,[xn]:n.LINEAR,[br]:n.LINEAR_MIPMAP_NEAREST,[xi]:n.LINEAR_MIPMAP_LINEAR},ye={[mh]:n.NEVER,[yh]:n.ALWAYS,[gh]:n.LESS,[tc]:n.LEQUAL,[_h]:n.EQUAL,[Mh]:n.GEQUAL,[vh]:n.GREATER,[xh]:n.NOTEQUAL};function Be(x,_){if(_.type===Un&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===xn||_.magFilter===br||_.magFilter===Ns||_.magFilter===xi||_.minFilter===xn||_.minFilter===br||_.minFilter===Ns||_.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,he[_.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,he[_.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,he[_.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,ge[_.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,ge[_.minFilter]),_.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,ye[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ut||_.minFilter!==Ns&&_.minFilter!==xi||_.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Je(x,_){let F=!1;x.__webglInit===void 0&&(x.__webglInit=!0,_.addEventListener("dispose",T));const q=_.source;let ee=u.get(q);ee===void 0&&(ee={},u.set(q,ee));const Z=V(_);if(Z!==x.__cacheKey){ee[Z]===void 0&&(ee[Z]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ee[Z].usedTimes++;const Te=ee[x.__cacheKey];Te!==void 0&&(ee[x.__cacheKey].usedTimes--,Te.usedTimes===0&&b(_)),x.__cacheKey=Z,x.__webglTexture=ee[Z].texture}return F}function Y(x,_,F){let q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=n.TEXTURE_3D);const ee=Je(x,_),Z=_.source;t.bindTexture(q,x.__webglTexture,n.TEXTURE0+F);const Te=i.get(Z);if(Z.version!==Te.__version||ee===!0){t.activeTexture(n.TEXTURE0+F);const de=Ze.getPrimaries(Ze.workingColorSpace),_e=_.colorSpace===ei?null:Ze.getPrimaries(_.colorSpace),Ye=_.colorSpace===ei||de===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ie=v(_.image,!1,s.maxTextureSize);ie=ae(_,ie);const ve=r.convert(_.format,_.colorSpace),Ie=r.convert(_.type);let Le=w(_.internalFormat,ve,Ie,_.colorSpace,_.isVideoTexture);Be(q,_);let xe;const Xe=_.mipmaps,ze=_.isVideoTexture!==!0,lt=Te.__version===void 0||ee===!0,I=Z.dataReady,ue=C(_,ie);if(_.isDepthTexture)Le=M(_.format===Qi,_.type),lt&&(ze?t.texStorage2D(n.TEXTURE_2D,1,Le,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Le,ie.width,ie.height,0,ve,Ie,null));else if(_.isDataTexture)if(Xe.length>0){ze&&lt&&t.texStorage2D(n.TEXTURE_2D,ue,Le,Xe[0].width,Xe[0].height);for(let $=0,J=Xe.length;$<J;$++)xe=Xe[$],ze?I&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,xe.width,xe.height,ve,Ie,xe.data):t.texImage2D(n.TEXTURE_2D,$,Le,xe.width,xe.height,0,ve,Ie,xe.data);_.generateMipmaps=!1}else ze?(lt&&t.texStorage2D(n.TEXTURE_2D,ue,Le,ie.width,ie.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,ve,Ie,ie.data)):t.texImage2D(n.TEXTURE_2D,0,Le,ie.width,ie.height,0,ve,Ie,ie.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ze&&lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Le,Xe[0].width,Xe[0].height,ie.depth);for(let $=0,J=Xe.length;$<J;$++)if(xe=Xe[$],_.format!==hn)if(ve!==null)if(ze){if(I)if(_.layerUpdates.size>0){const me=bl(xe.width,xe.height,_.format,_.type);for(const fe of _.layerUpdates){const Fe=xe.data.subarray(fe*me/xe.data.BYTES_PER_ELEMENT,(fe+1)*me/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,fe,xe.width,xe.height,1,ve,Fe)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,xe.width,xe.height,ie.depth,ve,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Le,xe.width,xe.height,ie.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,xe.width,xe.height,ie.depth,ve,Ie,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,Le,xe.width,xe.height,ie.depth,0,ve,Ie,xe.data)}else{ze&&lt&&t.texStorage2D(n.TEXTURE_2D,ue,Le,Xe[0].width,Xe[0].height);for(let $=0,J=Xe.length;$<J;$++)xe=Xe[$],_.format!==hn?ve!==null?ze?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,xe.width,xe.height,ve,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,$,Le,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?I&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,xe.width,xe.height,ve,Ie,xe.data):t.texImage2D(n.TEXTURE_2D,$,Le,xe.width,xe.height,0,ve,Ie,xe.data)}else if(_.isDataArrayTexture)if(ze){if(lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Le,ie.width,ie.height,ie.depth),I)if(_.layerUpdates.size>0){const $=bl(ie.width,ie.height,_.format,_.type);for(const J of _.layerUpdates){const me=ie.data.subarray(J*$/ie.data.BYTES_PER_ELEMENT,(J+1)*$/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,ve,Ie,me)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ve,Ie,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,ie.width,ie.height,ie.depth,0,ve,Ie,ie.data);else if(_.isData3DTexture)ze?(lt&&t.texStorage3D(n.TEXTURE_3D,ue,Le,ie.width,ie.height,ie.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ve,Ie,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Le,ie.width,ie.height,ie.depth,0,ve,Ie,ie.data);else if(_.isFramebufferTexture){if(lt)if(ze)t.texStorage2D(n.TEXTURE_2D,ue,Le,ie.width,ie.height);else{let $=ie.width,J=ie.height;for(let me=0;me<ue;me++)t.texImage2D(n.TEXTURE_2D,me,Le,$,J,0,ve,Ie,null),$>>=1,J>>=1}}else if(Xe.length>0){if(ze&&lt){const $=X(Xe[0]);t.texStorage2D(n.TEXTURE_2D,ue,Le,$.width,$.height)}for(let $=0,J=Xe.length;$<J;$++)xe=Xe[$],ze?I&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,ve,Ie,xe):t.texImage2D(n.TEXTURE_2D,$,Le,ve,Ie,xe);_.generateMipmaps=!1}else if(ze){if(lt){const $=X(ie);t.texStorage2D(n.TEXTURE_2D,ue,Le,$.width,$.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Ie,ie)}else t.texImage2D(n.TEXTURE_2D,0,Le,ve,Ie,ie);m(_)&&d(q),Te.__version=Z.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function se(x,_,F){if(_.image.length!==6)return;const q=Je(x,_),ee=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+F);const Z=i.get(ee);if(ee.version!==Z.__version||q===!0){t.activeTexture(n.TEXTURE0+F);const Te=Ze.getPrimaries(Ze.workingColorSpace),de=_.colorSpace===ei?null:Ze.getPrimaries(_.colorSpace),_e=_.colorSpace===ei||Te===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ye=_.isCompressedTexture||_.image[0].isCompressedTexture,ie=_.image[0]&&_.image[0].isDataTexture,ve=[];for(let J=0;J<6;J++)!Ye&&!ie?ve[J]=v(_.image[J],!0,s.maxCubemapSize):ve[J]=ie?_.image[J].image:_.image[J],ve[J]=ae(_,ve[J]);const Ie=ve[0],Le=r.convert(_.format,_.colorSpace),xe=r.convert(_.type),Xe=w(_.internalFormat,Le,xe,_.colorSpace),ze=_.isVideoTexture!==!0,lt=Z.__version===void 0||q===!0,I=ee.dataReady;let ue=C(_,Ie);Be(n.TEXTURE_CUBE_MAP,_);let $;if(Ye){ze&&lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Xe,Ie.width,Ie.height);for(let J=0;J<6;J++){$=ve[J].mipmaps;for(let me=0;me<$.length;me++){const fe=$[me];_.format!==hn?Le!==null?ze?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,0,0,fe.width,fe.height,Le,fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,Xe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,0,0,fe.width,fe.height,Le,xe,fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,Xe,fe.width,fe.height,0,Le,xe,fe.data)}}}else{if($=_.mipmaps,ze&&lt){$.length>0&&ue++;const J=X(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Xe,J.width,J.height)}for(let J=0;J<6;J++)if(ie){ze?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ve[J].width,ve[J].height,Le,xe,ve[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xe,ve[J].width,ve[J].height,0,Le,xe,ve[J].data);for(let me=0;me<$.length;me++){const Fe=$[me].image[J].image;ze?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,0,0,Fe.width,Fe.height,Le,xe,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,Xe,Fe.width,Fe.height,0,Le,xe,Fe.data)}}else{ze?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Le,xe,ve[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xe,Le,xe,ve[J]);for(let me=0;me<$.length;me++){const fe=$[me];ze?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,0,0,Le,xe,fe.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,Xe,Le,xe,fe.image[J])}}}m(_)&&d(n.TEXTURE_CUBE_MAP),Z.__version=ee.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function Me(x,_,F,q,ee,Z){const Te=r.convert(F.format,F.colorSpace),de=r.convert(F.type),_e=w(F.internalFormat,Te,de,F.colorSpace),Ye=i.get(_),ie=i.get(F);if(ie.__renderTarget=_,!Ye.__hasExternalTextures){const ve=Math.max(1,_.width>>Z),Ie=Math.max(1,_.height>>Z);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,Z,_e,ve,Ie,_.depth,0,Te,de,null):t.texImage2D(ee,Z,_e,ve,Ie,0,Te,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),K(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,ee,ie.__webglTexture,0,G(_)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,ee,ie.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(x,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,x),_.depthBuffer){const q=_.depthTexture,ee=q&&q.isDepthTexture?q.type:null,Z=M(_.stencilBuffer,ee),Te=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=G(_);K(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,Z,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,Z,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Z,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,x)}else{const q=_.textures;for(let ee=0;ee<q.length;ee++){const Z=q[ee],Te=r.convert(Z.format,Z.colorSpace),de=r.convert(Z.type),_e=w(Z.internalFormat,Te,de,Z.colorSpace),Ye=G(_);F&&K(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,_e,_.width,_.height):K(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye,_e,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,_e,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(x,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(_.depthTexture);q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Q(_.depthTexture,0);const ee=q.__webglTexture,Z=G(_);if(_.depthTexture.format===$i)K(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(_.depthTexture.format===Qi)K(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ue(x){const _=i.get(x),F=x.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==x.depthTexture){const q=x.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const ee=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",ee)};q.addEventListener("dispose",ee),_.__depthDisposeCallback=ee}_.__boundDepthTexture=q}if(x.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ce(_.__webglFramebuffer,x)}else if(F){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=n.createRenderbuffer(),oe(_.__webglDepthbuffer[q],x,!1);else{const ee=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),oe(_.__webglDepthbuffer,x,!1);else{const q=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(x,_,F){const q=i.get(x);_!==void 0&&Me(q.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Ue(x)}function ot(x){const _=x.texture,F=i.get(x),q=i.get(_);x.addEventListener("dispose",A);const ee=x.textures,Z=x.isWebGLCubeRenderTarget===!0,Te=ee.length>1;if(Te||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=_.version,a.memory.textures++),Z){F.__webglFramebuffer=[];for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[de]=[];for(let _e=0;_e<_.mipmaps.length;_e++)F.__webglFramebuffer[de][_e]=n.createFramebuffer()}else F.__webglFramebuffer[de]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let de=0;de<_.mipmaps.length;de++)F.__webglFramebuffer[de]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Te)for(let de=0,_e=ee.length;de<_e;de++){const Ye=i.get(ee[de]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),a.memory.textures++)}if(x.samples>0&&K(x)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let de=0;de<ee.length;de++){const _e=ee[de];F.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[de]);const Ye=r.convert(_e.format,_e.colorSpace),ie=r.convert(_e.type),ve=w(_e.internalFormat,Ye,ie,_e.colorSpace,x.isXRRenderTarget===!0),Ie=G(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,ve,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,F.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(F.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Be(n.TEXTURE_CUBE_MAP,_);for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)Me(F.__webglFramebuffer[de][_e],x,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,_e);else Me(F.__webglFramebuffer[de],x,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(_)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let de=0,_e=ee.length;de<_e;de++){const Ye=ee[de],ie=i.get(Ye);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),Be(n.TEXTURE_2D,Ye),Me(F.__webglFramebuffer,x,Ye,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),m(Ye)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(de=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,q.__webglTexture),Be(de,_),_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)Me(F.__webglFramebuffer[_e],x,_,n.COLOR_ATTACHMENT0,de,_e);else Me(F.__webglFramebuffer,x,_,n.COLOR_ATTACHMENT0,de,0);m(_)&&d(de),t.unbindTexture()}x.depthBuffer&&Ue(x)}function We(x){const _=x.textures;for(let F=0,q=_.length;F<q;F++){const ee=_[F];if(m(ee)){const Z=S(x),Te=i.get(ee).__webglTexture;t.bindTexture(Z,Te),d(Z),t.unbindTexture()}}}const mt=[],N=[];function te(x){if(x.samples>0){if(K(x)===!1){const _=x.textures,F=x.width,q=x.height;let ee=n.COLOR_BUFFER_BIT;const Z=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(x),de=_.length>1;if(de)for(let _e=0;_e<_.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let _e=0;_e<_.length;_e++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[_e]);const Ye=i.get(_[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,F,q,0,0,F,q,ee,n.NEAREST),l===!0&&(mt.length=0,N.length=0,mt.push(n.COLOR_ATTACHMENT0+_e),x.depthBuffer&&x.resolveDepthBuffer===!1&&(mt.push(Z),N.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let _e=0;_e<_.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,Te.__webglColorRenderbuffer[_e]);const Ye=i.get(_[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const _=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function G(x){return Math.min(s.maxSamples,x.samples)}function K(x){const _=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function j(x){const _=a.render.frame;h.get(x)!==_&&(h.set(x,_),x.update())}function ae(x,_){const F=x.colorSpace,q=x.format,ee=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||F!==ns&&F!==ei&&(Ze.getTransfer(F)===rt?(q!==hn||ee!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function X(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=Q,this.setTexture2DArray=H,this.setTexture3D=ne,this.setTextureCube=W,this.rebindTextures=Ge,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=K}function Gm(n,e){function t(i,s=ei){let r;const a=Ze.getTransfer(s);if(i===zn)return n.UNSIGNED_BYTE;if(i===Ya)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ja)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ql)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$l)return n.BYTE;if(i===Xl)return n.SHORT;if(i===Ss)return n.UNSIGNED_SHORT;if(i===qa)return n.INT;if(i===yi)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===Si)return n.HALF_FLOAT;if(i===Yl)return n.ALPHA;if(i===jl)return n.RGB;if(i===hn)return n.RGBA;if(i===Zl)return n.LUMINANCE;if(i===Kl)return n.LUMINANCE_ALPHA;if(i===$i)return n.DEPTH_COMPONENT;if(i===Qi)return n.DEPTH_STENCIL;if(i===Za)return n.RED;if(i===Ka)return n.RED_INTEGER;if(i===Jl)return n.RG;if(i===Ja)return n.RG_INTEGER;if(i===Qa)return n.RGBA_INTEGER;if(i===sr||i===rr||i===ar||i===or)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ma||i===ga||i===_a||i===va)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xa||i===Ma||i===ya)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===xa||i===Ma)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ya)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sa||i===ba||i===Ea||i===wa||i===Ta||i===Aa||i===Ra||i===Ca||i===Pa||i===Ia||i===Da||i===La||i===Ua||i===Na)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Sa)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ba)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ea)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wa)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ta)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Aa)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ra)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ca)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pa)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ia)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Da)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===La)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ua)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Na)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lr||i===Fa||i===Oa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===lr)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ql||i===ka||i===Ba||i===za)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===lr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ji?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Vm extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fn extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wm={type:"move"};class Zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const $m=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xm=`
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

}`;class qm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Nt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new fn({vertexShader:$m,fragmentShader:Xm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new $t(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ym extends is{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,p=null,g=null;const v=new qm,m=t.getContextAttributes();let d=null,S=null;const w=[],M=[],C=new Ve;let T=null;const A=new ln;A.viewport=new xt;const R=new ln;R.viewport=new xt;const b=[A,R],y=new Vm;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let se=w[Y];return se===void 0&&(se=new Zr,w[Y]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Y){let se=w[Y];return se===void 0&&(se=new Zr,w[Y]=se),se.getGripSpace()},this.getHand=function(Y){let se=w[Y];return se===void 0&&(se=new Zr,w[Y]=se),se.getHandSpace()};function O(Y){const se=M.indexOf(Y.inputSource);if(se===-1)return;const Me=w[se];Me!==void 0&&(Me.update(Y.inputSource,Y.frame,c||a),Me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Q);for(let Y=0;Y<w.length;Y++){const se=M[Y];se!==null&&(M[Y]=null,w[Y].disconnect(se))}P=null,z=null,v.reset(),e.setRenderTarget(d),p=null,u=null,f=null,s=null,S=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Hn(p.framebufferWidth,p.framebufferHeight,{format:hn,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,Me=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?Qi:$i,Me=m.stencil?Ji:yi);const Ce={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};f=new XRWebGLBinding(s,t),u=f.createProjectionLayer(Ce),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new Hn(u.textureWidth,u.textureHeight,{format:hn,type:zn,depthTexture:new fc(u.textureWidth,u.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Je.setContext(s),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(Y){for(let se=0;se<Y.removed.length;se++){const Me=Y.removed[se],oe=M.indexOf(Me);oe>=0&&(M[oe]=null,w[oe].disconnect(Me))}for(let se=0;se<Y.added.length;se++){const Me=Y.added[se];let oe=M.indexOf(Me);if(oe===-1){for(let Ue=0;Ue<w.length;Ue++)if(Ue>=M.length){M.push(Me),oe=Ue;break}else if(M[Ue]===null){M[Ue]=Me,oe=Ue;break}if(oe===-1)break}const Ce=w[oe];Ce&&Ce.connect(Me)}}const H=new U,ne=new U;function W(Y,se,Me){H.setFromMatrixPosition(se.matrixWorld),ne.setFromMatrixPosition(Me.matrixWorld);const oe=H.distanceTo(ne),Ce=se.projectionMatrix.elements,Ue=Me.projectionMatrix.elements,Ge=Ce[14]/(Ce[10]-1),ot=Ce[14]/(Ce[10]+1),We=(Ce[9]+1)/Ce[5],mt=(Ce[9]-1)/Ce[5],N=(Ce[8]-1)/Ce[0],te=(Ue[8]+1)/Ue[0],G=Ge*N,K=Ge*te,j=oe/(-N+te),ae=j*-N;if(se.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ae),Y.translateZ(j),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ce[10]===-1)Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const X=Ge+j,x=ot+j,_=G-ae,F=K+(oe-ae),q=We*ot/x*X,ee=mt*ot/x*X;Y.projectionMatrix.makePerspective(_,F,q,ee,X,x),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function he(Y,se){se===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(se.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let se=Y.near,Me=Y.far;v.texture!==null&&(v.depthNear>0&&(se=v.depthNear),v.depthFar>0&&(Me=v.depthFar)),y.near=R.near=A.near=se,y.far=R.far=A.far=Me,(P!==y.near||z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,z=y.far),A.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,y.layers.mask=A.layers.mask|R.layers.mask;const oe=Y.parent,Ce=y.cameras;he(y,oe);for(let Ue=0;Ue<Ce.length;Ue++)he(Ce[Ue],oe);Ce.length===2?W(y,A,R):y.projectionMatrix.copy(A.projectionMatrix),ge(Y,y,oe)};function ge(Y,se,Me){Me===null?Y.matrix.copy(se.matrixWorld):(Y.matrix.copy(Me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(se.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=bs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let ye=null;function Be(Y,se){if(h=se.getViewerPose(c||a),g=se,h!==null){const Me=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let oe=!1;Me.length!==y.cameras.length&&(y.cameras.length=0,oe=!0);for(let Ue=0;Ue<Me.length;Ue++){const Ge=Me[Ue];let ot=null;if(p!==null)ot=p.getViewport(Ge);else{const mt=f.getViewSubImage(u,Ge);ot=mt.viewport,Ue===0&&(e.setRenderTargetTextures(S,mt.colorTexture,u.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(S))}let We=b[Ue];We===void 0&&(We=new ln,We.layers.enable(Ue),We.viewport=new xt,b[Ue]=We),We.matrix.fromArray(Ge.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ge.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ot.x,ot.y,ot.width,ot.height),Ue===0&&(y.matrix.copy(We.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),oe===!0&&y.cameras.push(We)}const Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Ue=f.getDepthInformation(Me[0]);Ue&&Ue.isValid&&Ue.texture&&v.init(e,Ue,s.renderState)}}for(let Me=0;Me<w.length;Me++){const oe=M[Me],Ce=w[Me];oe!==null&&Ce!==void 0&&Ce.update(oe,se,c||a)}ye&&ye(Y,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}const Je=new dc;Je.setAnimationLoop(Be),this.setAnimationLoop=function(Y){ye=Y},this.dispose=function(){}}}const fi=new yn,jm=new pt;function Zm(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,cc(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,S,w,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),u(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,S,w):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Xt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Xt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const S=e.get(d),w=S.envMap,M=S.envMapRotation;w&&(m.envMap.value=w,fi.copy(M),fi.x*=-1,fi.y*=-1,fi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),m.envMapRotation.value.setFromMatrix4(jm.makeRotationFromEuler(fi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,S,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=w*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Xt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const S=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Km(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){const M=w.program;i.uniformBlockBinding(S,M)}function c(S,w){let M=s[S.id];M===void 0&&(g(S),M=h(S),s[S.id]=M,S.addEventListener("dispose",m));const C=w.program;i.updateUBOMapping(S,C);const T=e.render.frame;r[S.id]!==T&&(u(S),r[S.id]=T)}function h(S){const w=f();S.__bindingPointIndex=w;const M=n.createBuffer(),C=S.__size,T=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,M),M}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const w=s[S.id],M=S.uniforms,C=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let T=0,A=M.length;T<A;T++){const R=Array.isArray(M[T])?M[T]:[M[T]];for(let b=0,y=R.length;b<y;b++){const P=R[b];if(p(P,T,b,C)===!0){const z=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let Q=0;Q<O.length;Q++){const H=O[Q],ne=v(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,z+V,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,V),V+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,w,M,C){const T=S.value,A=w+"_"+M;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const R=C[A];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return C[A]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(S){const w=S.uniforms;let M=0;const C=16;for(let A=0,R=w.length;A<R;A++){const b=Array.isArray(w[A])?w[A]:[w[A]];for(let y=0,P=b.length;y<P;y++){const z=b[y],O=Array.isArray(z.value)?z.value:[z.value];for(let V=0,Q=O.length;V<Q;V++){const H=O[V],ne=v(H),W=M%C,he=W%ne.boundary,ge=W+he;M+=he,ge!==0&&C-ge<ne.storage&&(M+=C-ge),z.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=ne.storage}}}const T=M%C;return T>0&&(M+=C-T),S.__size=M,S.__cache={},this}function v(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),w}function m(S){const w=S.target;w.removeEventListener("dispose",m);const M=a.indexOf(w.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function d(){for(const S in s)n.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Jm{constructor(e={}){const{canvas:t=Bh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const S=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this.toneMapping=ni,this.toneMappingExposure=1;const M=this;let C=!1,T=0,A=0,R=null,b=-1,y=null;const P=new xt,z=new xt;let O=null;const V=new qe(0);let Q=0,H=t.width,ne=t.height,W=1,he=null,ge=null;const ye=new xt(0,0,H,ne),Be=new xt(0,0,H,ne);let Je=!1;const Y=new io;let se=!1,Me=!1;const oe=new pt,Ce=new pt,Ue=new U,Ge=new xt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function mt(){return R===null?W:1}let N=i;function te(E,D){return t.getContext(E,D)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xa}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",fe,!1),N===null){const D="webgl2";if(N=te(D,E),N===null)throw te(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let G,K,j,ae,X,x,_,F,q,ee,Z,Te,de,_e,Ye,ie,ve,Ie,Le,xe,Xe,ze,lt,I;function ue(){G=new ip(N),G.init(),ze=new Gm(N,G),K=new Kf(N,G,e,ze),j=new Bm(N,G),K.reverseDepthBuffer&&u&&j.buffers.depth.setReversed(!0),ae=new ap(N),X=new Em,x=new Hm(N,G,j,X,K,ze,ae),_=new Qf(M),F=new np(M),q=new du(N),lt=new jf(N,q),ee=new sp(N,q,ae,lt),Z=new lp(N,ee,q,ae),Le=new op(N,K,x),ie=new Jf(X),Te=new bm(M,_,F,G,K,lt,ie),de=new Zm(M,X),_e=new Tm,Ye=new Dm(G),Ie=new Yf(M,_,F,j,Z,p,l),ve=new Om(M,Z,K),I=new Km(N,ae,K,j),xe=new Zf(N,G,ae),Xe=new rp(N,G,ae),ae.programs=Te.programs,M.capabilities=K,M.extensions=G,M.properties=X,M.renderLists=_e,M.shadowMap=ve,M.state=j,M.info=ae}ue();const $=new Ym(M,N);this.xr=$,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=G.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=G.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(H,ne,!1))},this.getSize=function(E){return E.set(H,ne)},this.setSize=function(E,D,k=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,ne=D,t.width=Math.floor(E*W),t.height=Math.floor(D*W),k===!0&&(t.style.width=E+"px",t.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(H*W,ne*W).floor()},this.setDrawingBufferSize=function(E,D,k){H=E,ne=D,W=k,t.width=Math.floor(E*k),t.height=Math.floor(D*k),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(ye)},this.setViewport=function(E,D,k,B){E.isVector4?ye.set(E.x,E.y,E.z,E.w):ye.set(E,D,k,B),j.viewport(P.copy(ye).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(Be)},this.setScissor=function(E,D,k,B){E.isVector4?Be.set(E.x,E.y,E.z,E.w):Be.set(E,D,k,B),j.scissor(z.copy(Be).multiplyScalar(W).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(E){j.setScissorTest(Je=E)},this.setOpaqueSort=function(E){he=E},this.setTransparentSort=function(E){ge=E},this.getClearColor=function(E){return E.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(E=!0,D=!0,k=!0){let B=0;if(E){let L=!1;if(R!==null){const re=R.texture.format;L=re===Qa||re===Ja||re===Ka}if(L){const re=R.texture.type,pe=re===zn||re===yi||re===Ss||re===Ji||re===Ya||re===ja,Se=Ie.getClearColor(),be=Ie.getClearAlpha(),Ne=Se.r,Oe=Se.g,Ee=Se.b;pe?(g[0]=Ne,g[1]=Oe,g[2]=Ee,g[3]=be,N.clearBufferuiv(N.COLOR,0,g)):(v[0]=Ne,v[1]=Oe,v[2]=Ee,v[3]=be,N.clearBufferiv(N.COLOR,0,v))}else B|=N.COLOR_BUFFER_BIT}D&&(B|=N.DEPTH_BUFFER_BIT),k&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),_e.dispose(),Ye.dispose(),X.dispose(),_.dispose(),F.dispose(),Z.dispose(),lt.dispose(),I.dispose(),Te.dispose(),$.dispose(),$.removeEventListener("sessionstart",_o),$.removeEventListener("sessionend",vo),oi.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=ae.autoReset,D=ve.enabled,k=ve.autoUpdate,B=ve.needsUpdate,L=ve.type;ue(),ae.autoReset=E,ve.enabled=D,ve.autoUpdate=k,ve.needsUpdate=B,ve.type=L}function fe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Fe(E){const D=E.target;D.removeEventListener("dispose",Fe),_t(D)}function _t(E){It(E),X.remove(E)}function It(E){const D=X.get(E).programs;D!==void 0&&(D.forEach(function(k){Te.releaseProgram(k)}),E.isShaderMaterial&&Te.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,k,B,L,re){D===null&&(D=ot);const pe=L.isMesh&&L.matrixWorld.determinant()<0,Se=Dc(E,D,k,B,L);j.setMaterial(B,pe);let be=k.index,Ne=1;if(B.wireframe===!0){if(be=ee.getWireframeAttribute(k),be===void 0)return;Ne=2}const Oe=k.drawRange,Ee=k.attributes.position;let Ke=Oe.start*Ne,ct=(Oe.start+Oe.count)*Ne;re!==null&&(Ke=Math.max(Ke,re.start*Ne),ct=Math.min(ct,(re.start+re.count)*Ne)),be!==null?(Ke=Math.max(Ke,0),ct=Math.min(ct,be.count)):Ee!=null&&(Ke=Math.max(Ke,0),ct=Math.min(ct,Ee.count));const ut=ct-Ke;if(ut<0||ut===1/0)return;lt.setup(L,B,Se,k,be);let Ht,Qe=xe;if(be!==null&&(Ht=q.get(be),Qe=Xe,Qe.setIndex(Ht)),L.isMesh)B.wireframe===!0?(j.setLineWidth(B.wireframeLinewidth*mt()),Qe.setMode(N.LINES)):Qe.setMode(N.TRIANGLES);else if(L.isLine){let Ae=B.linewidth;Ae===void 0&&(Ae=1),j.setLineWidth(Ae*mt()),L.isLineSegments?Qe.setMode(N.LINES):L.isLineLoop?Qe.setMode(N.LINE_LOOP):Qe.setMode(N.LINE_STRIP)}else L.isPoints?Qe.setMode(N.POINTS):L.isSprite&&Qe.setMode(N.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Qe.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(G.get("WEBGL_multi_draw"))Qe.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const Ae=L._multiDrawStarts,wn=L._multiDrawCounts,et=L._multiDrawCount,sn=be?q.get(be).bytesPerElement:1,Ei=X.get(B).currentProgram.getUniforms();for(let qt=0;qt<et;qt++)Ei.setValue(N,"_gl_DrawID",qt),Qe.render(Ae[qt]/sn,wn[qt])}else if(L.isInstancedMesh)Qe.renderInstances(Ke,ut,L.count);else if(k.isInstancedBufferGeometry){const Ae=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,wn=Math.min(k.instanceCount,Ae);Qe.renderInstances(Ke,ut,wn)}else Qe.render(Ke,ut)};function tt(E,D,k){E.transparent===!0&&E.side===Wt&&E.forceSinglePass===!1?(E.side=Xt,E.needsUpdate=!0,Us(E,D,k),E.side=ii,E.needsUpdate=!0,Us(E,D,k),E.side=Wt):Us(E,D,k)}this.compile=function(E,D,k=null){k===null&&(k=E),d=Ye.get(k),d.init(D),w.push(d),k.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),E!==k&&E.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),d.setupLights();const B=new Set;return E.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const re=L.material;if(re)if(Array.isArray(re))for(let pe=0;pe<re.length;pe++){const Se=re[pe];tt(Se,k,L),B.add(Se)}else tt(re,k,L),B.add(re)}),w.pop(),d=null,B},this.compileAsync=function(E,D,k=null){const B=this.compile(E,D,k);return new Promise(L=>{function re(){if(B.forEach(function(pe){X.get(pe).currentProgram.isReady()&&B.delete(pe)}),B.size===0){L(E);return}setTimeout(re,10)}G.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let nn=null;function En(E){nn&&nn(E)}function _o(){oi.stop()}function vo(){oi.start()}const oi=new dc;oi.setAnimationLoop(En),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(E){nn=E,$.setAnimationLoop(E),E===null?oi.stop():oi.start()},$.addEventListener("sessionstart",_o),$.addEventListener("sessionend",vo),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(D),D=$.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,D,R),d=Ye.get(E,w.length),d.init(D),w.push(d),Ce.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(Ce),Me=this.localClippingEnabled,se=ie.init(this.clippingPlanes,Me),m=_e.get(E,S.length),m.init(),S.push(m),$.enabled===!0&&$.isPresenting===!0){const re=M.xr.getDepthSensingMesh();re!==null&&Sr(re,D,-1/0,M.sortObjects)}Sr(E,D,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(he,ge),We=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,We&&Ie.addToRenderList(m,E),this.info.render.frame++,se===!0&&ie.beginShadows();const k=d.state.shadowsArray;ve.render(k,E,D),se===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,L=m.transmissive;if(d.setupLights(),D.isArrayCamera){const re=D.cameras;if(L.length>0)for(let pe=0,Se=re.length;pe<Se;pe++){const be=re[pe];Mo(B,L,E,be)}We&&Ie.render(E);for(let pe=0,Se=re.length;pe<Se;pe++){const be=re[pe];xo(m,E,be,be.viewport)}}else L.length>0&&Mo(B,L,E,D),We&&Ie.render(E),xo(m,E,D);R!==null&&(x.updateMultisampleRenderTarget(R),x.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(M,E,D),lt.resetDefaultState(),b=-1,y=null,w.pop(),w.length>0?(d=w[w.length-1],se===!0&&ie.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Sr(E,D,k,B){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Y.intersectsSprite(E)){B&&Ge.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ce);const pe=Z.update(E),Se=E.material;Se.visible&&m.push(E,pe,Se,k,Ge.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Y.intersectsObject(E))){const pe=Z.update(E),Se=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ge.copy(E.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ge.copy(pe.boundingSphere.center)),Ge.applyMatrix4(E.matrixWorld).applyMatrix4(Ce)),Array.isArray(Se)){const be=pe.groups;for(let Ne=0,Oe=be.length;Ne<Oe;Ne++){const Ee=be[Ne],Ke=Se[Ee.materialIndex];Ke&&Ke.visible&&m.push(E,pe,Ke,k,Ge.z,Ee)}}else Se.visible&&m.push(E,pe,Se,k,Ge.z,null)}}const re=E.children;for(let pe=0,Se=re.length;pe<Se;pe++)Sr(re[pe],D,k,B)}function xo(E,D,k,B){const L=E.opaque,re=E.transmissive,pe=E.transparent;d.setupLightsView(k),se===!0&&ie.setGlobalState(M.clippingPlanes,k),B&&j.viewport(P.copy(B)),L.length>0&&Ls(L,D,k),re.length>0&&Ls(re,D,k),pe.length>0&&Ls(pe,D,k),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Mo(E,D,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[B.id]===void 0&&(d.state.transmissionRenderTarget[B.id]=new Hn(1,1,{generateMipmaps:!0,type:G.has("EXT_color_buffer_half_float")||G.has("EXT_color_buffer_float")?Si:zn,minFilter:xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const re=d.state.transmissionRenderTarget[B.id],pe=B.viewport||P;re.setSize(pe.z,pe.w);const Se=M.getRenderTarget();M.setRenderTarget(re),M.getClearColor(V),Q=M.getClearAlpha(),Q<1&&M.setClearColor(16777215,.5),M.clear(),We&&Ie.render(k);const be=M.toneMapping;M.toneMapping=ni;const Ne=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),d.setupLightsView(B),se===!0&&ie.setGlobalState(M.clippingPlanes,B),Ls(E,k,B),x.updateMultisampleRenderTarget(re),x.updateRenderTargetMipmap(re),G.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Ee=0,Ke=D.length;Ee<Ke;Ee++){const ct=D[Ee],ut=ct.object,Ht=ct.geometry,Qe=ct.material,Ae=ct.group;if(Qe.side===Wt&&ut.layers.test(B.layers)){const wn=Qe.side;Qe.side=Xt,Qe.needsUpdate=!0,yo(ut,k,B,Ht,Qe,Ae),Qe.side=wn,Qe.needsUpdate=!0,Oe=!0}}Oe===!0&&(x.updateMultisampleRenderTarget(re),x.updateRenderTargetMipmap(re))}M.setRenderTarget(Se),M.setClearColor(V,Q),Ne!==void 0&&(B.viewport=Ne),M.toneMapping=be}function Ls(E,D,k){const B=D.isScene===!0?D.overrideMaterial:null;for(let L=0,re=E.length;L<re;L++){const pe=E[L],Se=pe.object,be=pe.geometry,Ne=B===null?pe.material:B,Oe=pe.group;Se.layers.test(k.layers)&&yo(Se,D,k,be,Ne,Oe)}}function yo(E,D,k,B,L,re){E.onBeforeRender(M,D,k,B,L,re),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),L.onBeforeRender(M,D,k,B,E,re),L.transparent===!0&&L.side===Wt&&L.forceSinglePass===!1?(L.side=Xt,L.needsUpdate=!0,M.renderBufferDirect(k,D,B,L,E,re),L.side=ii,L.needsUpdate=!0,M.renderBufferDirect(k,D,B,L,E,re),L.side=Wt):M.renderBufferDirect(k,D,B,L,E,re),E.onAfterRender(M,D,k,B,L,re)}function Us(E,D,k){D.isScene!==!0&&(D=ot);const B=X.get(E),L=d.state.lights,re=d.state.shadowsArray,pe=L.state.version,Se=Te.getParameters(E,L.state,re,D,k),be=Te.getProgramCacheKey(Se);let Ne=B.programs;B.environment=E.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(E.isMeshStandardMaterial?F:_).get(E.envMap||B.environment),B.envMapRotation=B.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",Fe),Ne=new Map,B.programs=Ne);let Oe=Ne.get(be);if(Oe!==void 0){if(B.currentProgram===Oe&&B.lightsStateVersion===pe)return bo(E,Se),Oe}else Se.uniforms=Te.getUniforms(E),E.onBeforeCompile(Se,M),Oe=Te.acquireProgram(Se,be),Ne.set(be,Oe),B.uniforms=Se.uniforms;const Ee=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ee.clippingPlanes=ie.uniform),bo(E,Se),B.needsLights=Uc(E),B.lightsStateVersion=pe,B.needsLights&&(Ee.ambientLightColor.value=L.state.ambient,Ee.lightProbe.value=L.state.probe,Ee.directionalLights.value=L.state.directional,Ee.directionalLightShadows.value=L.state.directionalShadow,Ee.spotLights.value=L.state.spot,Ee.spotLightShadows.value=L.state.spotShadow,Ee.rectAreaLights.value=L.state.rectArea,Ee.ltc_1.value=L.state.rectAreaLTC1,Ee.ltc_2.value=L.state.rectAreaLTC2,Ee.pointLights.value=L.state.point,Ee.pointLightShadows.value=L.state.pointShadow,Ee.hemisphereLights.value=L.state.hemi,Ee.directionalShadowMap.value=L.state.directionalShadowMap,Ee.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Ee.spotShadowMap.value=L.state.spotShadowMap,Ee.spotLightMatrix.value=L.state.spotLightMatrix,Ee.spotLightMap.value=L.state.spotLightMap,Ee.pointShadowMap.value=L.state.pointShadowMap,Ee.pointShadowMatrix.value=L.state.pointShadowMatrix),B.currentProgram=Oe,B.uniformsList=null,Oe}function So(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=cr.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function bo(E,D){const k=X.get(E);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.batchingColor=D.batchingColor,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function Dc(E,D,k,B,L){D.isScene!==!0&&(D=ot),x.resetTextureUnits();const re=D.fog,pe=B.isMeshStandardMaterial?D.environment:null,Se=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ns,be=(B.isMeshStandardMaterial?F:_).get(B.envMap||pe),Ne=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Oe=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ee=!!k.morphAttributes.position,Ke=!!k.morphAttributes.normal,ct=!!k.morphAttributes.color;let ut=ni;B.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ut=M.toneMapping);const Ht=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Qe=Ht!==void 0?Ht.length:0,Ae=X.get(B),wn=d.state.lights;if(se===!0&&(Me===!0||E!==y)){const Kt=E===y&&B.id===b;ie.setState(B,E,Kt)}let et=!1;B.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==wn.state.version||Ae.outputColorSpace!==Se||L.isBatchedMesh&&Ae.batching===!1||!L.isBatchedMesh&&Ae.batching===!0||L.isBatchedMesh&&Ae.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Ae.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Ae.instancing===!1||!L.isInstancedMesh&&Ae.instancing===!0||L.isSkinnedMesh&&Ae.skinning===!1||!L.isSkinnedMesh&&Ae.skinning===!0||L.isInstancedMesh&&Ae.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Ae.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Ae.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Ae.instancingMorph===!1&&L.morphTexture!==null||Ae.envMap!==be||B.fog===!0&&Ae.fog!==re||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ie.numPlanes||Ae.numIntersection!==ie.numIntersection)||Ae.vertexAlphas!==Ne||Ae.vertexTangents!==Oe||Ae.morphTargets!==Ee||Ae.morphNormals!==Ke||Ae.morphColors!==ct||Ae.toneMapping!==ut||Ae.morphTargetsCount!==Qe)&&(et=!0):(et=!0,Ae.__version=B.version);let sn=Ae.currentProgram;et===!0&&(sn=Us(B,D,L));let Ei=!1,qt=!1,as=!1;const dt=sn.getUniforms(),pn=Ae.uniforms;if(j.useProgram(sn.program)&&(Ei=!0,qt=!0,as=!0),B.id!==b&&(b=B.id,qt=!0),Ei||y!==E){j.buffers.depth.getReversed()?(oe.copy(E.projectionMatrix),Hh(oe),Gh(oe),dt.setValue(N,"projectionMatrix",oe)):dt.setValue(N,"projectionMatrix",E.projectionMatrix),dt.setValue(N,"viewMatrix",E.matrixWorldInverse);const Wn=dt.map.cameraPosition;Wn!==void 0&&Wn.setValue(N,Ue.setFromMatrixPosition(E.matrixWorld)),K.logarithmicDepthBuffer&&dt.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&dt.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,qt=!0,as=!0)}if(L.isSkinnedMesh){dt.setOptional(N,L,"bindMatrix"),dt.setOptional(N,L,"bindMatrixInverse");const Kt=L.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),dt.setValue(N,"boneTexture",Kt.boneTexture,x))}L.isBatchedMesh&&(dt.setOptional(N,L,"batchingTexture"),dt.setValue(N,"batchingTexture",L._matricesTexture,x),dt.setOptional(N,L,"batchingIdTexture"),dt.setValue(N,"batchingIdTexture",L._indirectTexture,x),dt.setOptional(N,L,"batchingColorTexture"),L._colorsTexture!==null&&dt.setValue(N,"batchingColorTexture",L._colorsTexture,x));const os=k.morphAttributes;if((os.position!==void 0||os.normal!==void 0||os.color!==void 0)&&Le.update(L,k,sn),(qt||Ae.receiveShadow!==L.receiveShadow)&&(Ae.receiveShadow=L.receiveShadow,dt.setValue(N,"receiveShadow",L.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(pn.envMap.value=be,pn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(pn.envMapIntensity.value=D.environmentIntensity),qt&&(dt.setValue(N,"toneMappingExposure",M.toneMappingExposure),Ae.needsLights&&Lc(pn,as),re&&B.fog===!0&&de.refreshFogUniforms(pn,re),de.refreshMaterialUniforms(pn,B,W,ne,d.state.transmissionRenderTarget[E.id]),cr.upload(N,So(Ae),pn,x)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(cr.upload(N,So(Ae),pn,x),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&dt.setValue(N,"center",L.center),dt.setValue(N,"modelViewMatrix",L.modelViewMatrix),dt.setValue(N,"normalMatrix",L.normalMatrix),dt.setValue(N,"modelMatrix",L.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Kt=B.uniformsGroups;for(let Wn=0,$n=Kt.length;Wn<$n;Wn++){const Eo=Kt[Wn];I.update(Eo,sn),I.bind(Eo,sn)}}return sn}function Lc(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function Uc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,D,k){X.get(E.texture).__webglTexture=D,X.get(E.depthTexture).__webglTexture=k;const B=X.get(E);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=k===void 0,B.__autoAllocateDepthBuffer||G.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,D){const k=X.get(E);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,k=0){R=E,T=D,A=k;let B=!0,L=null,re=!1,pe=!1;if(E){const be=X.get(E);if(be.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(N.FRAMEBUFFER,null),B=!1;else if(be.__webglFramebuffer===void 0)x.setupRenderTarget(E);else if(be.__hasExternalTextures)x.rebindTextures(E,X.get(E.texture).__webglTexture,X.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ee=E.depthTexture;if(be.__boundDepthTexture!==Ee){if(Ee!==null&&X.has(Ee)&&(E.width!==Ee.image.width||E.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(E)}}const Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(pe=!0);const Oe=X.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Oe[D])?L=Oe[D][k]:L=Oe[D],re=!0):E.samples>0&&x.useMultisampledRTT(E)===!1?L=X.get(E).__webglMultisampledFramebuffer:Array.isArray(Oe)?L=Oe[k]:L=Oe,P.copy(E.viewport),z.copy(E.scissor),O=E.scissorTest}else P.copy(ye).multiplyScalar(W).floor(),z.copy(Be).multiplyScalar(W).floor(),O=Je;if(j.bindFramebuffer(N.FRAMEBUFFER,L)&&B&&j.drawBuffers(E,L),j.viewport(P),j.scissor(z),j.setScissorTest(O),re){const be=X.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,be.__webglTexture,k)}else if(pe){const be=X.get(E.texture),Ne=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,be.__webglTexture,k||0,Ne)}b=-1},this.readRenderTargetPixels=function(E,D,k,B,L,re,pe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){j.bindFramebuffer(N.FRAMEBUFFER,Se);try{const be=E.texture,Ne=be.format,Oe=be.type;if(!K.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-B&&k>=0&&k<=E.height-L&&N.readPixels(D,k,B,L,ze.convert(Ne),ze.convert(Oe),re)}finally{const be=R!==null?X.get(R).__webglFramebuffer:null;j.bindFramebuffer(N.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(E,D,k,B,L,re,pe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){const be=E.texture,Ne=be.format,Oe=be.type;if(!K.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=E.width-B&&k>=0&&k<=E.height-L){j.bindFramebuffer(N.FRAMEBUFFER,Se);const Ee=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ee),N.bufferData(N.PIXEL_PACK_BUFFER,re.byteLength,N.STREAM_READ),N.readPixels(D,k,B,L,ze.convert(Ne),ze.convert(Oe),0);const Ke=R!==null?X.get(R).__webglFramebuffer:null;j.bindFramebuffer(N.FRAMEBUFFER,Ke);const ct=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await zh(N,ct,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ee),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,re),N.deleteBuffer(Ee),N.deleteSync(ct),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,D=null,k=0){E.isTexture!==!0&&(fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,E=arguments[1]);const B=Math.pow(2,-k),L=Math.floor(E.image.width*B),re=Math.floor(E.image.height*B),pe=D!==null?D.x:0,Se=D!==null?D.y:0;x.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,k,0,0,pe,Se,L,re),j.unbindTexture()},this.copyTextureToTexture=function(E,D,k=null,B=null,L=0){E.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1],D=arguments[2],L=arguments[3]||0,k=null);let re,pe,Se,be,Ne,Oe,Ee,Ke,ct;const ut=E.isCompressedTexture?E.mipmaps[L]:E.image;k!==null?(re=k.max.x-k.min.x,pe=k.max.y-k.min.y,Se=k.isBox3?k.max.z-k.min.z:1,be=k.min.x,Ne=k.min.y,Oe=k.isBox3?k.min.z:0):(re=ut.width,pe=ut.height,Se=ut.depth||1,be=0,Ne=0,Oe=0),B!==null?(Ee=B.x,Ke=B.y,ct=B.z):(Ee=0,Ke=0,ct=0);const Ht=ze.convert(D.format),Qe=ze.convert(D.type);let Ae;D.isData3DTexture?(x.setTexture3D(D,0),Ae=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(x.setTexture2DArray(D,0),Ae=N.TEXTURE_2D_ARRAY):(x.setTexture2D(D,0),Ae=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);const wn=N.getParameter(N.UNPACK_ROW_LENGTH),et=N.getParameter(N.UNPACK_IMAGE_HEIGHT),sn=N.getParameter(N.UNPACK_SKIP_PIXELS),Ei=N.getParameter(N.UNPACK_SKIP_ROWS),qt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ut.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ut.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,be),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ne),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Oe);const as=E.isDataArrayTexture||E.isData3DTexture,dt=D.isDataArrayTexture||D.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const pn=X.get(E),os=X.get(D),Kt=X.get(pn.__renderTarget),Wn=X.get(os.__renderTarget);j.bindFramebuffer(N.READ_FRAMEBUFFER,Kt.__webglFramebuffer),j.bindFramebuffer(N.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let $n=0;$n<Se;$n++)as&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(E).__webglTexture,L,Oe+$n),E.isDepthTexture?(dt&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(D).__webglTexture,L,ct+$n),N.blitFramebuffer(be,Ne,re,pe,Ee,Ke,re,pe,N.DEPTH_BUFFER_BIT,N.NEAREST)):dt?N.copyTexSubImage3D(Ae,L,Ee,Ke,ct+$n,be,Ne,re,pe):N.copyTexSubImage2D(Ae,L,Ee,Ke,ct+$n,be,Ne,re,pe);j.bindFramebuffer(N.READ_FRAMEBUFFER,null),j.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else dt?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Ae,L,Ee,Ke,ct,re,pe,Se,Ht,Qe,ut.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(Ae,L,Ee,Ke,ct,re,pe,Se,Ht,ut.data):N.texSubImage3D(Ae,L,Ee,Ke,ct,re,pe,Se,Ht,Qe,ut):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,L,Ee,Ke,re,pe,Ht,Qe,ut.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,L,Ee,Ke,ut.width,ut.height,Ht,ut.data):N.texSubImage2D(N.TEXTURE_2D,L,Ee,Ke,re,pe,Ht,Qe,ut);N.pixelStorei(N.UNPACK_ROW_LENGTH,wn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,et),N.pixelStorei(N.UNPACK_SKIP_PIXELS,sn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ei),N.pixelStorei(N.UNPACK_SKIP_IMAGES,qt),L===0&&D.generateMipmaps&&N.generateMipmap(Ae),j.unbindTexture()},this.copyTextureToTexture3D=function(E,D,k=null,B=null,L=0){return E.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,B=arguments[1]||null,E=arguments[2],D=arguments[3],L=arguments[4]||0),fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,D,k,B,L)},this.initRenderTarget=function(E){X.get(E).__webglFramebuffer===void 0&&x.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?x.setTextureCube(E,0):E.isData3DTexture?x.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?x.setTexture2DArray(E,0):x.setTexture2D(E,0),j.unbindTexture()},this.resetState=function(){T=0,A=0,R=null,j.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}class vc extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Qm extends Nt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Ut,h=Ut,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eg extends Nt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class si extends tn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],p=[];let g=0;const v=[],m=i/2;let d=0;S(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new bt(f,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(p,2));function S(){const M=new U,C=new U;let T=0;const A=(t-e)/i;for(let R=0;R<=r;R++){const b=[],y=R/r,P=y*(t-e)+e;for(let z=0;z<=s;z++){const O=z/s,V=O*l+o,Q=Math.sin(V),H=Math.cos(V);C.x=P*Q,C.y=-y*i+m,C.z=P*H,f.push(C.x,C.y,C.z),M.set(Q,A,H).normalize(),u.push(M.x,M.y,M.z),p.push(O,1-y),b.push(g++)}v.push(b)}for(let R=0;R<s;R++)for(let b=0;b<r;b++){const y=v[b][R],P=v[b+1][R],z=v[b+1][R+1],O=v[b][R+1];(e>0||b!==0)&&(h.push(y,P,O),T+=3),(t>0||b!==r-1)&&(h.push(P,z,O),T+=3)}c.addGroup(d,T,0),d+=T}function w(M){const C=g,T=new Ve,A=new U;let R=0;const b=M===!0?e:t,y=M===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,m*y,0),u.push(0,y,0),p.push(.5,.5),g++;const P=g;for(let z=0;z<=s;z++){const V=z/s*l+o,Q=Math.cos(V),H=Math.sin(V);A.x=b*H,A.y=m*y,A.z=b*Q,f.push(A.x,A.y,A.z),u.push(0,y,0),T.x=Q*.5+.5,T.y=H*.5*y+.5,p.push(T.x,T.y),g++}for(let z=0;z<s;z++){const O=C+z,V=P+z;M===!0?h.push(V,V+1,O):h.push(V+1,V,O),R+=3}c.addGroup(d,R,M===!0?1:2),d+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cs extends si{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Cs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ro extends tn{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new bt(r,3)),this.setAttribute("normal",new bt(r.slice(),3)),this.setAttribute("uv",new bt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const w=new U,M=new U,C=new U;for(let T=0;T<t.length;T+=3)p(t[T+0],w),p(t[T+1],M),p(t[T+2],C),l(w,M,C,S)}function l(S,w,M,C){const T=C+1,A=[];for(let R=0;R<=T;R++){A[R]=[];const b=S.clone().lerp(M,R/T),y=w.clone().lerp(M,R/T),P=T-R;for(let z=0;z<=P;z++)z===0&&R===T?A[R][z]=b:A[R][z]=b.clone().lerp(y,z/P)}for(let R=0;R<T;R++)for(let b=0;b<2*(T-R)-1;b++){const y=Math.floor(b/2);b%2===0?(u(A[R][y+1]),u(A[R+1][y]),u(A[R][y])):(u(A[R][y+1]),u(A[R+1][y+1]),u(A[R+1][y]))}}function c(S){const w=new U;for(let M=0;M<r.length;M+=3)w.x=r[M+0],w.y=r[M+1],w.z=r[M+2],w.normalize().multiplyScalar(S),r[M+0]=w.x,r[M+1]=w.y,r[M+2]=w.z}function h(){const S=new U;for(let w=0;w<r.length;w+=3){S.x=r[w+0],S.y=r[w+1],S.z=r[w+2];const M=m(S)/2/Math.PI+.5,C=d(S)/Math.PI+.5;a.push(M,1-C)}g(),f()}function f(){for(let S=0;S<a.length;S+=6){const w=a[S+0],M=a[S+2],C=a[S+4],T=Math.max(w,M,C),A=Math.min(w,M,C);T>.9&&A<.1&&(w<.2&&(a[S+0]+=1),M<.2&&(a[S+2]+=1),C<.2&&(a[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function p(S,w){const M=S*3;w.x=e[M+0],w.y=e[M+1],w.z=e[M+2]}function g(){const S=new U,w=new U,M=new U,C=new U,T=new Ve,A=new Ve,R=new Ve;for(let b=0,y=0;b<r.length;b+=9,y+=6){S.set(r[b+0],r[b+1],r[b+2]),w.set(r[b+3],r[b+4],r[b+5]),M.set(r[b+6],r[b+7],r[b+8]),T.set(a[y+0],a[y+1]),A.set(a[y+2],a[y+3]),R.set(a[y+4],a[y+5]),C.copy(S).add(w).add(M).divideScalar(3);const P=m(C);v(T,y+0,S,P),v(A,y+2,w,P),v(R,y+4,M,P)}}function v(S,w,M,C){C<0&&S.x===1&&(a[w]=S.x-1),M.x===0&&M.z===0&&(a[w]=C/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function d(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.vertices,e.indices,e.radius,e.details)}}class Ps extends tn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new U,u=new U,p=[],g=[],v=[],m=[];for(let d=0;d<=i;d++){const S=[],w=d/i;let M=0;d===0&&a===0?M=.5/t:d===i&&l===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){const T=C/t;f.x=-e*Math.cos(s+T*r)*Math.sin(a+w*o),f.y=e*Math.cos(a+w*o),f.z=e*Math.sin(s+T*r)*Math.sin(a+w*o),g.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),m.push(T+M,1-w),S.push(c++)}h.push(S)}for(let d=0;d<i;d++)for(let S=0;S<t;S++){const w=h[d][S+1],M=h[d][S],C=h[d+1][S],T=h[d+1][S+1];(d!==0||a>0)&&p.push(w,M,T),(d!==i-1||l<Math.PI)&&p.push(M,C,T)}this.setIndex(p),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(v,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ao extends ro{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ao(e.radius,e.detail)}}class oo extends tn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new U,f=new U,u=new U;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){const v=g/s*r,m=p/i*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){const v=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,S=(s+1)*p+g;a.push(v,m,S),a.push(m,d,S)}this.setIndex(a),this.setAttribute("position",new bt(o,3)),this.setAttribute("normal",new bt(l,3)),this.setAttribute("uv",new bt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class tg extends Rs{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new qe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ec,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class xc extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ng extends xc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Kr=new pt,El=new U,wl=new U;class ig{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new io,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;El.setFromMatrixPosition(e.matrixWorld),t.position.copy(El),wl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wl),t.updateMatrixWorld(),Kr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Kr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sg extends ig{constructor(){super(new vr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rg extends xc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new sg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Tl=new pt;class ag{constructor(e,t,i=0,s=1/0){this.ray=new rc(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new no,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Tl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tl),this}intersectObject(e,t=!0,i=[]){return Ga(e,this,i,t),i.sort(Al),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ga(e[s],this,i,t);return i.sort(Al),i}}function Al(n,e){return n.distance-e.distance}function Ga(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Ga(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xa);const Gn="#5b3520",en={grass:"#9dd190",grassLight:"#a9d99b",grassDark:"#93c886",grassTick:"#78b66f",grassEdge:"#5f9a5a",sand:"#ecd7a6",trunk:"#e2a574",leaf:"#83c47b",leafLight:"#b4de94",fir:"#8ccf87"};function ht(n){let e=(Math.imul(n|0,2654435761)^2654435769)>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>>17,e^=e<<5,e>>>=0,e/4294967296)}function Ct(n,e){const t=document.createElement("canvas");return t.width=Math.round(n),t.height=Math.round(e),[t,t.getContext("2d")]}function og(n,e,{amp:t=1.5,step:i=5,closed:s=!1}={}){const r=[],a=n.length,o=s?a:a-1,l=e()*6.28,c=e()*6.28;let h=0;for(let f=0;f<o;f++){const[u,p]=n[f],[g,v]=n[(f+1)%a],m=Math.hypot(g-u,v-p)||1,d=-(v-p)/m,S=(g-u)/m,w=Math.max(1,Math.ceil(m/i));for(let M=0;M<w;M++){const C=M/w,T=t*(Math.sin(h*.045+l)*.65+Math.sin(h*.17+c)*.35);r.push([u+(g-u)*C+d*T,p+(v-p)*C+S*T]),h+=m/w}}return s||r.push(n[a-1].slice()),r}function Pe(n,e,t,{w:i=3,color:s=Gn,closed:r=!1,amp:a=1.3}={}){const o=og(e,t,{amp:a,closed:r});r&&o.push(o[0]);const l=t()*6.28,c=.12+t()*.14;n.strokeStyle=s,n.lineCap="round",n.lineJoin="round";for(let h=0;h<o.length-1;h++)n.lineWidth=i*(.7+.55*(.5+.5*Math.sin(h*c+l))),n.beginPath(),n.moveTo(o[h][0],o[h][1]),n.lineTo(o[h+1][0],o[h+1][1]),n.stroke()}function Mc(n,e){n.beginPath(),n.moveTo(e[0][0],e[0][1]);for(const t of e)n.lineTo(t[0],t[1]);n.closePath()}function wt(n,e,t){n.fillStyle=t,Mc(n,e),n.fill()}function lg(n,e,t){n.save(),Mc(n,e),n.clip(),t(),n.restore()}function Sn(n,e,t,i,s,{n:r=40,lump:a=.08}={}){const o=2+Math.floor(s()*3),l=s()*6.28,c=5+Math.floor(s()*3),h=s()*6.28,f=[];for(let u=0;u<r;u++){const p=u/r*Math.PI*2,g=1+a*(Math.sin(p*o+l)*.6+Math.sin(p*c+h)*.4);f.push([n+Math.cos(p)*t*g,e+Math.sin(p)*i*g])}return f}function cg(n,e,t,i,s){const r=[];for(let a=0;a<s;a++){const o=Math.PI+a/s*Math.PI,l=Math.PI+(a+1)/s*Math.PI,c=n+Math.cos(o)*t,h=e+Math.sin(o)*i,f=n+Math.cos(l)*t,u=e+Math.sin(l)*i,p=(c+f)/2,g=(h+u)/2,v=Math.hypot(f-c,u-h)/2,m=Math.atan2(h-g,c-p),d=Math.atan2(g-e,p-n),S=Math.cos(m+Math.PI/2-d)>0?1:-1;for(let w=0;w<8;w++){const M=m+S*(w/8)*Math.PI;r.push([p+Math.cos(M)*v,g+Math.sin(M)*v*1.05])}}for(let a=0;a<=10;a++){const o=a/10*Math.PI;r.push([n+Math.cos(o)*t,e+Math.sin(o)*i*.45])}return r}function hg(n,e=10){const t=[];for(let i=0;i<n.length-1;i++){const s=n[Math.max(0,i-1)],r=n[i],a=n[i+1],o=n[Math.min(n.length-1,i+2)];for(let l=0;l<e;l++){const c=l/e,h=c*c,f=h*c,u=p=>.5*(2*r[p]+(-s[p]+a[p])*c+(2*s[p]-5*r[p]+4*a[p]-o[p])*h+(-s[p]+3*r[p]-3*a[p]+o[p])*f);t.push([u(0),u(1)])}}return t.push(n[n.length-1].slice()),t}function ug(n,e,t,i=.1){const s=[],r=[],a=t()*6.28;return n.forEach(([o,l],c)=>{const h=n[Math.max(0,c-1)],f=n[Math.min(n.length-1,c+1)],u=Math.hypot(f[0]-h[0],f[1]-h[1])||1,p=-(f[1]-h[1])/u,g=(f[0]-h[0])/u,v=e*(1+i*Math.sin(c*.31+a)),m=e*(1+i*Math.sin(c*.23+a*2));s.push([o+p*v,l+g*v]),r.push([o-p*m,l-g*m])}),[s,r]}function dg(){const[n,e]=Ct(128,64),t=e.createRadialGradient(64,32,4,64,32,62);return t.addColorStop(0,"rgba(50,95,55,.42)"),t.addColorStop(.7,"rgba(50,95,55,.3)"),t.addColorStop(1,"rgba(50,95,55,0)"),e.setTransform(1,0,0,.5,0,16),e.fillStyle=t,e.beginPath(),e.arc(64,32,62,0,Math.PI*2),e.fill(),n}function fg(n,e="#ffd24a"){const[t,i]=Ct(80,80),s=ht(20+n),r=[];for(let a=0;a<10;a++){const o=-Math.PI/2+a*Math.PI/5,l=a%2?14:32;r.push([40+Math.cos(o)*l,42+Math.sin(o)*l])}return wt(i,r,e),Pe(i,r,s,{w:3.4,closed:!0,amp:.6}),t}function pg(n=1024,e=640){const[t,i]=Ct(n,e),s=ht(61),r=ht(62),a=i.createLinearGradient(0,0,0,e);a.addColorStop(0,"#7f8fe0"),a.addColorStop(.6,"#a7a6ee"),a.addColorStop(1,"#c9b5ee"),i.fillStyle=a,i.fillRect(0,0,n,e);for(let o=0;o<7;o++){const l=r()*n,c=60+r()*(e-120),h=60+r()*90,f=h*.32,u=3+Math.floor(r()*3),p=cg(l,c,h,f,u);wt(i,p,"#e7c4ee"),lg(i,p,()=>wt(i,Sn(l,c+f*.55,h*1.1,f*.45,s),"#d7aee6")),Pe(i,p,s,{w:2.6,closed:!0,color:"#6d5aa8"})}return t}function mg(){const[n,e]=Ct(256,256),t=ht(71),i=ht(72);e.fillStyle="#c98f55",e.fillRect(0,0,256,256);for(let a=1;a<4;a++)Pe(e,[[20,a*64+(i()-.5)*4],[236,a*64+(i()-.5)*4]],t,{w:2.4,color:"#8a5a30"});for(const a of[0,1])wt(e,a?[[20,20],[52,20],[236,204],[236,236],[204,236],[20,52]]:[[204,20],[236,20],[236,52],[52,236],[20,236],[20,204]],"#dba46a");Pe(e,[[36,36],[220,220]],t,{w:2.6}),Pe(e,[[220,36],[36,220]],t,{w:2.6});const s=[[4,4],[252,4],[252,252],[4,252]],r=[[22,22],[234,22],[234,234],[22,234]];return e.strokeStyle="#dba46a",e.lineWidth=34,e.strokeRect(17,17,222,222),Pe(e,s,t,{w:4,closed:!0}),Pe(e,r,t,{w:3,closed:!0}),n}function gg(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new tn;let c=0;for(let h=0;h<n.length;++h){const f=n[h];let u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(f.morphAttributes[p])}if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0;const f=[];for(let u=0;u<n.length;++u){const p=n[u].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+h);h+=n[u].attributes.position.count}l.setIndex(f)}for(const h in r){const f=Rl(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in a){const f=a[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){const p=[];for(let v=0;v<a[h].length;++v)p.push(a[h][v][u]);const g=Rl(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Rl(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new dn(a,t,i);let l=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute){const f=l/t;for(let u=0,p=h.count;u<p;u++)for(let g=0;g<t;g++){const v=h.getComponent(u,g);o.setComponent(u+f,g,v)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function _g(n,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count;let a=0;const o=Object.keys(n.attributes),l={},c={},h=[],f=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let S=0,w=o.length;S<w;S++){const M=o[S],C=n.attributes[M];l[M]=new C.constructor(new C.array.constructor(C.count*C.itemSize),C.itemSize,C.normalized);const T=n.morphAttributes[M];T&&(c[M]||(c[M]=[]),T.forEach((A,R)=>{const b=new A.array.constructor(A.count*A.itemSize);c[M][R]=new A.constructor(b,A.itemSize,A.normalized)}))}const p=e*.5,g=Math.log10(1/e),v=Math.pow(10,g),m=p*v;for(let S=0;S<r;S++){const w=i?i.getX(S):S;let M="";for(let C=0,T=o.length;C<T;C++){const A=o[C],R=n.getAttribute(A),b=R.itemSize;for(let y=0;y<b;y++)M+=`${~~(R[f[y]](w)*v+m)},`}if(M in t)h.push(t[M]);else{for(let C=0,T=o.length;C<T;C++){const A=o[C],R=n.getAttribute(A),b=n.morphAttributes[A],y=R.itemSize,P=l[A],z=c[A];for(let O=0;O<y;O++){const V=f[O],Q=u[O];if(P[Q](a,R[V](w)),b)for(let H=0,ne=b.length;H<ne;H++)z[H][Q](a,b[H][V](w))}}t[M]=a,h.push(a),a++}}const d=n.clone();for(const S in n.attributes){const w=l[S];if(d.setAttribute(S,new w.constructor(w.array.slice(0,a*w.itemSize),w.itemSize,w.normalized)),S in c)for(let M=0;M<c[S].length;M++){const C=c[S][M];d.morphAttributes[S][M]=new C.constructor(C.array.slice(0,a*C.itemSize),C.itemSize,C.normalized)}}return d.setIndex(h),d}const vg=(()=>{const n=new Qm(new Uint8Array([120,255]),2,1,Za);return n.minFilter=n.magFilter=Ut,n.needsUpdate=!0,n})(),Jr=new Map;function Zt(n,e={}){const t=n+JSON.stringify(e,(i,s)=>s&&s.isTexture?s.uuid:s);return Jr.has(t)||Jr.set(t,new tg({color:n,gradientMap:vg,...e})),Jr.get(t)}function zt(n,e=!1){const t=new eg(n);return t.colorSpace=Vt,t.anisotropy=8,e&&(t.wrapS=t.wrapT=dr),t}const yc=new U(0,1,0),xg=new pt,lo=new ri,co=new U,Es=new U;function bn(n,e,t=lo.identity(),i=co.set(1,1,1)){return n.clone().applyMatrix4(xg.compose(e,t,i))}function Mg(n){return n.attributes.uv||n.setAttribute("uv",new bt(new Float32Array(n.attributes.position.count*2),2)),n}function Vn(n,e){return new at(gg(n.map(Mg)),e)}const yg=new Ps(1,12,8);function Cl(n,e,t,i){const s=3+Math.floor(t()*3);for(let r=0;r<s;r++){const a=r/s*Math.PI*2+t(),o=r===0?0:e*.55,l=e*(r===0?1:.62+t()*.2);i.push(bn(yg,Es.set(n.x+Math.cos(a)*o,n.y+(r===0?e*.12:0),n.z+Math.sin(a)*o),lo.identity(),co.set(l,l*.46,l)))}}function Sg(n){const e=ht(n),t=4+e()*.9,i=(e()-.5)*.5,s=new Fn,r=new si(.06,.2,t,8,12);r.translate(0,t/2,0);const a=r.attributes.position;for(let h=0;h<a.count;h++){const f=a.getY(h)/t,u=f<.1?1+(.1-f)*7:1;a.setXYZ(h,a.getX(h)*u+i*f*f,a.getY(h),a.getZ(h)*u)}r.computeVertexNormals();const o=[r],l=[],c=6+Math.floor(e()*3);for(let h=0;h<c;h++){const f=.3+h/(c-1)*.62,u=h*2.4+e()*.6,p=.35+(1-f)*.95,g=new U(i*f*f,f*t,0),v=new U(Math.cos(u)*.8,.6,Math.sin(u)*.8).normalize(),m=new si(.025,.05,p,5);o.push(bn(m,g.clone().addScaledVector(v,p/2),new ri().setFromUnitVectors(yc,v))),Cl(g.clone().addScaledVector(v,p),.28+(1-f)*.2,e,l)}return Cl(new U(i,t+.05,0),.26,e,l),s.add(Vn(o,Zt(en.trunk)),Vn(l,Zt(en.leaf))),s}function bg(n){const e=ht(n),t=new Fn,i=4+Math.floor(e()*2),s=new si(.1,.16,1.2,7);s.translate(0,.6,0);const r=[];for(let a=0;a<i;a++){const o=a/(i-1),l=1.05-.62*o,c=1.25-.3*o,h=.9+o*2.3,f=new Cs(l,c,10,1,!0),u=f.attributes.position;for(let p=0;p<u.count;p++){if(u.getY(p)>-c/2+.01)continue;const g=Math.atan2(u.getZ(p),u.getX(p)),v=Math.round(g/(Math.PI*2/10))%2===0,m=v?1.08:.8;u.setXYZ(p,u.getX(p)*m,u.getY(p)+(v?-.14:.06),u.getZ(p)*m)}f.computeVertexNormals(),r.push(bn(f,Es.set(0,h+c/2,0),lo.setFromAxisAngle(yc,e()*6)))}return t.add(new at(s,Zt(en.trunk)),Vn(r,Zt(en.fir,{side:Wt}))),t}function Eg(n,e){const t=ht(n);let i=new Ps(.6,14,10);i.deleteAttribute("uv"),i.deleteAttribute("normal"),i=_g(i);const s=i.attributes.position;for(let a=0;a<s.count;a++){let o=s.getY(a);o<0&&(o*=.35);const l=1+(t()-.5)*.14;s.setXYZ(a,s.getX(a)*1.15*l,(o+.2)*1.3*l,s.getZ(a)*l)}i.computeVertexNormals();const r=new at(i,Zt("#d8c6a2"));return r.scale.setScalar(e),r.rotation.y=t()*6.28,r}function wg(n){const e=ht(n),t=[],i=4+Math.floor(e()*2),s=new Cs(.11,.75,5);s.translate(0,.37,0);for(let r=0;r<i;r++){const a=r/i*Math.PI*2+e(),o=.25+e()*.35,l=new ri().setFromEuler(new yn(Math.sin(a)*o,0,-Math.cos(a)*o));t.push(bn(s,Es.set(Math.cos(a)*.08,0,Math.sin(a)*.08),l,co.set(1,.7+e()*.6,1)))}return Vn(t,Zt(en.leafLight))}let Pl;function Tg(n=1){Pl||=zt(mg());const e=new at(new ai(.9*n,.9*n,.9*n),Zt("#ffffff",{map:Pl}));return e.position.y=.45*n,e}function Ag(n,e,t,i){const s=new Fn,r=Math.hypot(t-n,i-e),a=Math.max(2,Math.round(r/.9)+1),o=new si(.06,.075,.85,6);o.translate(0,.42,0);const l=[];for(let f=0;f<a;f++)l.push(bn(o,Es.set(r*(f/(a-1))-r/2,0,0)));const c=new ai(r,.08,.05),h=[.35,.65].map(f=>bn(c,Es.set(0,f,.07)));return s.add(Vn(l.concat(h),Zt("#b77c45"))),s.position.set((n+t)/2,0,(e+i)/2),s.rotation.y=-Math.atan2(i-e,t-n),s}const Rg=new fn({side:Wt,vertexShader:`
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
    }`}),Cg=new fn({side:Wt,uniforms:{map:{value:null}},vertexShader:`
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
    }`}),Bi=new fn({uniforms:{tColor:{value:null},tND:{value:null},texel:{value:new Ve},seed:{value:0},lineW:{value:1.3},ink:{value:new qe(Gn)}},depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
    }`});function Pg(n){const e=new Hn(1,1,{samples:4,type:Si}),t=new Hn(1,1,{type:Si,minFilter:Ut,magFilter:Ut}),i=new at(new $t(2,2),Bi),s=new vc;s.add(i);const r=new vr(-1,1,1,-1,0,1),a=new Ve,o=[];function l(){n.getDrawingBufferSize(a),e.setSize(a.x,a.y),t.setSize(a.x,a.y),Bi.uniforms.texel.value.set(1/a.x,1/a.y),Bi.uniforms.lineW.value=1.25*n.getPixelRatio()}function c(h,f,u){n.getDrawingBufferSize(a),(a.x!==e.width||a.y!==e.height)&&l(),n.setRenderTarget(e),n.render(h,f);const p=h.background;h.background=null,h.traverse(v=>{if(!(!v.isMesh||!v.visible)){if(v.userData.noInk){v.visible=!1,o.push([v,null]);return}o.push([v,v.material]),v.userData.sprite?(v.material=Cg,v.onBeforeRender=Dg):v.material=Rg}});const g=n.getClearAlpha();n.getClearColor(Il),n.setClearColor(0,0),n.setRenderTarget(t),n.render(h,f),n.setClearColor(Il,g);for(const[v,m]of o)m?(v.material=m,v.onBeforeRender=Ig):v.visible=!0;o.length=0,h.background=p,Bi.uniforms.tColor.value=e.texture,Bi.uniforms.tND.value=t.texture,Bi.uniforms.seed.value=u,n.setRenderTarget(null),n.render(s,r)}return{render:c,setSize:l}}const Il=new qe,Ig=()=>{};function Dg(n,e,t,i,s){s.uniforms.map.value=this.userData.colorMap(),s.uniformsNeedUpdate=!0}const Sc="#4a2c1a";function Dl(n,e,t,i){const s=t*.2,r=e+t*.05,a=t*.1,o=[n-s+a,n+s*1.9+a].map(p=>`
    <ellipse cx="${p}" cy="${r}" rx="${t*.15}" ry="${t*.19}" fill="#fff" stroke-width="3"/>
    <ellipse cx="${p+2}" cy="${r+1}" rx="${t*.085}" ry="${t*.11}" fill="${Sc}" stroke="none"/>
    <circle cx="${p+4}" cy="${r-3}" r="${t*.035}" fill="#fff" stroke="none"/>`).join(""),l=`<ellipse cx="${n-s-t*.1+a}" cy="${e+t*.38}" rx="${t*.13}" ry="${t*.08}" fill="#ff8fa3" opacity=".6" stroke="none"/>
    <ellipse cx="${n+s*2.2+a+t*.1}" cy="${e+t*.38}" rx="${t*.13}" ry="${t*.08}" fill="#ff8fa3" opacity=".6" stroke="none"/>`,c=n+a+t*.18,h=e+t*.45,f=t*.2,u={happy:`<path d="M${c-f} ${h} Q${c} ${h+t*.2} ${c+f} ${h}" stroke-width="3.5"/>`,sad:`<path d="M${c-f} ${h+t*.1} Q${c} ${h-t*.06} ${c+f} ${h+t*.1}" stroke-width="3.5"/>
          <path d="M${n-s+a-t*.16} ${r-t*.3} L${n-s+a+t*.1} ${r-t*.36}" stroke-width="3"/>
          <path d="M${n+s*1.9+a+t*.16} ${r-t*.3} L${n+s*1.9+a-t*.1} ${r-t*.36}" stroke-width="3"/>`,worried:`<path d="M${c-f} ${h+4} Q${c-f/2} ${h} ${c} ${h+4} Q${c+f/2} ${h+8} ${c+f} ${h+3}" stroke-width="3.2"/>`}[i]||"";return o+l+u}function nr(n,e,t,i,s){const r=`M${t} ${i} l${(t-n)*.25} -8 M${t} ${i} l${(t-n)*.3} 2 M${t} ${i} l${(t-n)*.12} 9`;return`<path d="M${n} ${e} L${t} ${i}" stroke-width="15"/><path d="M${n} ${e} L${t} ${i}" stroke="${s}" stroke-width="7"/>
    <path d="${r}" stroke-width="3.5"/>`}function _n(n,{mood:e="happy",pose:t="A"}={}){const{kind:i,skin:s,top:r,cover:a,hair:o="#3a2416",prop:l}=n,c=i==="woman"||i==="man",h=i==="toddler",f=i==="girl"||i==="woman",u=100,p=c?36:h?46:43,g=c?52:h?104:80,v=g+p-4,m=226,d=f?218:c?176:h?196:182,S=c?30:h?26:28,w=f?c?50:44:c?36:h?32:34,M=i==="man"?"#6b6f8f":i==="boy"?"#5f7fb8":"#6f8fc8",C=t==="B";let T="";if(f){const R=C?-10:0,b=C?10:0;T+=`<ellipse cx="${u-18+R}" cy="${m}" rx="15" ry="7.5" fill="#f7efe0"/><ellipse cx="${u+22+b}" cy="${m}" rx="15" ry="7.5" fill="#f7efe0"/>`}else{const R=C?[[u-12,u-26],[u+12,u+26]]:[[u-13,u-14],[u+13,u+14]];for(const[b,y]of R)T+=`<path d="M${b} ${d-4} L${y} ${m-6}" stroke-width="19"/><path d="M${b} ${d-4} L${y} ${m-6}" stroke="${M}" stroke-width="11"/>`;for(const[,b]of R)T+=`<ellipse cx="${b+4}" cy="${m}" rx="14" ry="7" fill="#f7efe0"/>`}T+=`<path d="M${u-S} ${v+6} Q${u-S} ${v} ${u-S+8} ${v} L${u+S-8} ${v}
        Q${u+S} ${v} ${u+S} ${v+6} L${u+w} ${d-6} Q${u+w} ${d} ${u+w-8} ${d}
        L${u-w+8} ${d} Q${u-w} ${d} ${u-w} ${d-6} Z" fill="${r}"/>`,f?T+=`<path d="M${u-w+14} ${d-14} Q${u} ${d-8} ${u+w-14} ${d-14}" stroke-width="2.6" opacity=".6"/>`:T+=`<path d="M${u-8} ${v+2} L${u} ${v+14} L${u+8} ${v+2}" stroke-width="3"/>`;const A=v+14;if(l==="magnifier"){T+=nr(u-S+4,A,u-S-20,A+36,r),T+=nr(u+S-4,A,u+S+22,A+14,r);const R=u+S+26,b=A+8;T+=`<path d="M${R} ${b} L${R+14} ${b-22}" stroke-width="9"/><path d="M${R} ${b} L${R+14} ${b-22}" stroke="#c98a4d" stroke-width="4"/>
          <circle cx="${R+24}" cy="${b-40}" r="19" fill="#d9f1f8" stroke-width="6"/><circle cx="${R+24}" cy="${b-40}" r="19" fill="none" stroke="#f5cf5f" stroke-width="2.5"/>
          <path d="M${R+14} ${b-48} Q${R+18} ${b-54} ${R+26} ${b-54}" stroke="#fff" stroke-width="3.5"/>`}else T+=nr(u-S+4,A,u-S-18,A+40,r),T+=nr(u+S-4,A,u+S+18,A+40,r);if(f){const R=p+11;T+=`<path d="M${u-R} ${g+4} A${R} ${R} 0 0 1 ${u+R} ${g+4} L${u+R+6} ${g+p+22} Q${u} ${g+p+38} ${u-R-6} ${g+p+22} Z" fill="${a}"/>`,T+=`<ellipse cx="${u+5}" cy="${g+6}" rx="${p*.76}" ry="${p*.82}" fill="${s}"/>`,T+=`<path d="M${u-p*.55} ${g-p*.45} Q${u+5} ${g-p*.95} ${u+p*.7} ${g-p*.4}" stroke-width="2.4" opacity=".55"/>`,T+=Dl(u+3,g+4,p*.86,e)}else T+=`<ellipse cx="${u-p*.92}" cy="${g+6}" rx="${p*.16}" ry="${p*.22}" fill="${s}"/>`,T+=`<circle cx="${u}" cy="${g}" r="${p}" fill="${s}"/>`,i==="man"&&(T+=`<path d="M${u-p*.8} ${g+p*.2} Q${u-p*.7} ${g+p*1.15} ${u+8} ${g+p*1.08} Q${u+p*.95} ${g+p*.95} ${u+p*.9} ${g+p*.25} Q${u+p*.4} ${g+p*.72} ${u+4} ${g+p*.72} Q${u-p*.4} ${g+p*.72} ${u-p*.8} ${g+p*.2} Z" fill="${o}"/>`),T+=`<path d="M${u-p*.98} ${g-p*.05} Q${u-p} ${g-p*1.08} ${u+p*.1} ${g-p*1.02} Q${u+p*.95} ${g-p*.95} ${u+p*.98} ${g-p*.2} Q${u+p*.4} ${g-p*.62} ${u-p*.3} ${g-p*.5} Q${u-p*.7} ${g-p*.4} ${u-p*.98} ${g-p*.05} Z" fill="${o}"/>`,a&&(T+=`<path d="M${u-p*.84} ${g-p*.5} Q${u-p*.8} ${g-p*1.22} ${u} ${g-p*1.22} Q${u+p*.8} ${g-p*1.22} ${u+p*.84} ${g-p*.5} Z" fill="${a}"/>
      <path d="M${u-p*.82} ${g-p*.66} Q${u} ${g-p*.78} ${u+p*.82} ${g-p*.66}" stroke-width="2.6"/>
      <path d="M${u-p*.3} ${g-p*1.02} l6 6 l6 -6 l6 6" stroke-width="2.4"/>`),T+=Dl(u,g,p,e);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="200" height="240">
  <defs><filter id="boil" x="-5%" y="-5%" width="110%" height="110%">
    <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="1"/>
    <feDisplacementMap in="SourceGraphic" scale="3.5" xChannelSelector="R" yChannelSelector="G"/></filter></defs>
  <g filter="url(#boil)" fill="none" stroke="${Sc}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">${T}</g></svg>`}const ws=n=>"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n),gt=44;function Ll(n,e,{kind:t="planks",rug:i}={}){const[s,r]=Ct(n*gt,e*gt),a=ht(t==="planks"?5:9),o=ht(6);if(t==="planks"){r.fillStyle="#e8c08c",r.fillRect(0,0,s.width,s.height);const l=.6*gt;for(let c=0,h=0;c<s.height;c+=l,h++){for(let f=-(h%3)*60;f<s.width;f+=150+a()*90)wt(r,[[f+3,c+3],[f+150,c+3],[f+150,c+l-3],[f+3,c+l-3]],a()<.4?"#efc995":"#e4b983"),Pe(r,[[f,c+2],[f,c+l-2]],o,{w:2,color:"#b98a55",amp:.3});Pe(r,[[0,c],[s.width,c]],o,{w:2.2,color:"#b98a55",amp:.8});for(let f=0;f<5;f++){const u=a()*s.width,p=c+l*(.3+a()*.4);Pe(r,[[u,p],[u+18+a()*20,p+(a()-.5)*3]],o,{w:1.4,color:"#caa06b",amp:0})}}}else{r.fillStyle="#f1e2c6",r.fillRect(0,0,s.width,s.height);const l=1*gt;for(let c=0;c<s.height;c+=l)for(let h=0;h<s.width;h+=l)wt(r,[[h+3,c+3],[h+l-3,c+3],[h+l-3,c+l-3],[h+3,c+l-3]],a()<.5?"#f4e7cf":"#ecdab9");for(let c=0;c<=s.height;c+=l)Pe(r,[[0,c],[s.width,c]],o,{w:2,color:"#c9ad85",amp:.6});for(let c=0;c<=s.width;c+=l)Pe(r,[[c,0],[c,s.height]],o,{w:2,color:"#c9ad85",amp:.6})}if(i){const[l,c,h,f,u,p]=i,g=(M,C)=>[(M+n/2)*gt,(C+e/2)*gt],[v,m]=g(l,c),d=[[v-h*gt,m-f*gt],[v+h*gt,m-f*gt],[v+h*gt,m+f*gt],[v-h*gt,m+f*gt]];wt(r,d,u),Pe(r,d,o,{w:3,closed:!0});const S=d.map(([M,C])=>[v+(M-v)*.8,m+(C-m)*.74]);r.setLineDash([10,8]),Pe(r,S,o,{w:2.6,closed:!0,color:p,amp:.4}),r.setLineDash([]);const w=[];for(let M=0;M<16;M++){const C=M/16*Math.PI*2,T=(M%2?.36:.62)*Math.min(h,f)*gt*.8;w.push([v+Math.cos(C)*T,m+Math.sin(C)*T])}wt(r,w,p),Pe(r,w,o,{w:2,closed:!0,amp:.3});for(let M=0;M<26;M++){const C=d[0][0]+M/25*(d[1][0]-d[0][0]);Pe(r,[[C,d[0][1]],[C,d[0][1]-8]],o,{w:1.8,amp:0}),Pe(r,[[C,d[2][1]],[C,d[2][1]+8]],o,{w:1.8,amp:0})}}return s}function Lg(n,e){const[t,i]=Ct(n*gt,e*gt),s=ht(21),r=ht(22),a=(h,f)=>[(h+n/2)*gt,(f+e/2)*gt];i.fillStyle=en.grass,i.fillRect(0,0,t.width,t.height);for(let h=0;h<30;h++)wt(i,Sn(s()*t.width,s()*t.height,(1+s()*2)*gt,(.5+s())*gt,s,{lump:.2}),s()<.5?en.grassLight:en.grassDark);const o=hg([[-7,4],[-3,2.8],[0,3.2],[3,2.4],[7,3]].map(h=>a(...h)),14),[l,c]=ug(o,.9*gt,s,.08);wt(i,l.concat(c.slice().reverse()),en.sand),Pe(i,l,r,{w:3,color:en.grassEdge}),Pe(i,c,r,{w:3,color:en.grassEdge});for(let h=0;h<4;h++){const[f,u]=a(-1+h*.8,-.6),p=.7*gt;Pe(i,[[f,u],[f+p,u],[f+p,u+p],[f,u+p]],r,{w:2.6,closed:!0,color:"#fffaf0",amp:.6})}for(let h=0;h<700;h++){const f=s()*t.width,u=s()*t.height;u>a(0,1.9)[1]&&u<a(0,4.2)[1]||Pe(i,[[f,u],[f+3,u-6]],r,{w:2,color:en.grassTick,amp:0})}for(let h=0;h<14;h++){const f=s()*t.width,u=s()*t.height*.4;for(let p=0;p<5;p++){const g=p/5*6.28,v=Sn(f+Math.cos(g)*5,u+Math.sin(g)*4,4,3.4,r,{n:10});wt(i,v,"#fffdf6"),Pe(i,v,r,{w:1.2,color:"#9a7a58",closed:!0,amp:.2})}i.fillStyle="#f5c84c",i.beginPath(),i.arc(f,u,2.5,0,7),i.fill()}return t}function Ul(n,e,{plaster:t="#f4ead3",wains:i="#a8d0c4",band:s="#e8584e"}={}){const[r,a]=Ct(n*48,e*48),o=ht(31),l=ht(32),c=r.width,h=r.height;a.fillStyle=t,a.fillRect(0,0,c,h);for(let u=0;u<16;u++)wt(a,Sn(o()*c,o()*h*.6,40+o()*60,20+o()*30,o,{lump:.2}),"rgba(255,255,255,.35)");const f=h-.9*48;a.fillStyle=i,a.fillRect(0,f,c,h-f);for(let u=30;u<c;u+=58)Pe(a,[[u,f+8],[u,h-6]],l,{w:2,color:"rgba(60,90,80,.45)",amp:.4});Pe(a,[[0,f],[c,f]],l,{w:3.4}),a.fillStyle=s,a.fillRect(0,10,c,16),Pe(a,[[0,10],[c,10]],l,{w:2.2}),Pe(a,[[0,26],[c,26]],l,{w:2.2});for(let u=20;u<c;u+=40)a.fillStyle="#f5cf5f",a.beginPath(),a.arc(u,18,4,0,7),a.fill();return r}function Ug(n,e){const[t,i]=Ct(n*48,e*48),s=ht(41),r=ht(42);i.fillStyle="#e7b79a",i.fillRect(0,0,t.width,t.height);const a=22;for(let o=0,l=0;l<t.height;o++,l+=a)for(let c=o%2?-24:0;c<t.width;c+=50){const h=[[c+3,l+3],[c+47,l+3],[c+47,l+a-2],[c+3,l+a-2]];wt(i,h,s()<.3?"#efc4a8":"#e2ad8e"),Pe(i,h,r,{w:1.6,closed:!0,color:"#a86e52",amp:.4})}return t}function Ng(n){const[e,t]=Ct(512,256),i=ht(51);t.fillStyle="#4f7a64",t.fillRect(0,0,512,256);for(let s=0;s<8;s++)wt(t,Sn(i()*512,i()*256,60,30,i,{lump:.2}),"rgba(255,255,255,.05)");return t.fillStyle="#f5f1e3",t.font='600 34px Fredoka, "Comic Sans MS", sans-serif',t.textAlign="center",n.forEach((s,r)=>t.fillText(s,256,70+r*52)),Pe(t,[[4,4],[508,4],[508,252],[4,252]],i,{w:10,closed:!0,color:"#c98a4d"}),e}function Nl(n=!1){const[e,t]=Ct(200,240),i=ht(61),s=t.createLinearGradient(0,0,0,240);return s.addColorStop(0,n?"#3d4a8a":"#9fc9ef"),s.addColorStop(1,n?"#7a6fb0":"#d8ecf7"),t.fillStyle=s,t.fillRect(0,0,200,240),wt(t,Sn(70,90,40,14,i),"#fffaf0"),wt(t,Sn(140,150,30,10,i),"#fffaf0"),Pe(t,[[100,0],[100,240]],i,{w:12,color:"#fffaf0",amp:0}),Pe(t,[[0,120],[200,120]],i,{w:12,color:"#fffaf0",amp:0}),Pe(t,[[4,4],[196,4],[196,236],[4,236]],i,{w:12,closed:!0,color:"#fffaf0",amp:0}),Pe(t,[[10,10],[190,10],[190,230],[10,230]],i,{w:3,closed:!0,amp:.5}),e}function Qr(){const[n,e]=Ct(160,300),t=ht(71);e.fillStyle="#c98f55",e.fillRect(0,0,160,300);for(const[i,s]of[[24,130],[160,280]])Pe(e,[[22,i],[138,i],[138,s],[22,s]],t,{w:3,closed:!0,color:"#8a5a30"});return e.fillStyle="#f5cf5f",e.beginPath(),e.arc(130,150,8,0,7),e.fill(),Pe(e,[[3,3],[157,3],[157,297],[3,297]],t,{w:4,closed:!0}),n}function ea(n){const[e,t]=Ct(200,260),i=ht(81+n.length);if(t.fillStyle="#fffaf0",t.fillRect(0,0,200,260),t.fillStyle=Gn,t.textAlign="center",n==="abc"){const s=["#e8584e","#6fcfb7","#f5cf5f","#8a6cc8"];"ABCD".split("").forEach((r,a)=>{t.fillStyle=s[a],t.font="700 64px Fredoka, sans-serif",t.fillText(r,55+a%2*90,100+Math.floor(a/2)*110)})}else if(n==="times")t.font="700 30px Fredoka, sans-serif",t.fillText("TIMES",100,46),t.font="600 26px Fredoka, sans-serif",["8 × 6 = 48","8 × 7 = 56","8 × 8 = 64","8 × 9 = 72"].forEach((s,r)=>t.fillText(s,100,96+r*42));else if(n==="kind"){t.font="700 32px Fredoka, sans-serif",t.fillStyle="#e8584e",t.fillText("BE",100,80),t.fillText("KIND",100,124);const s=[];for(let r=0;r<40;r++){const a=r/40*Math.PI*2;s.push([100+16*Math.sin(a)**3*3,190-(13*Math.cos(a)-5*Math.cos(2*a)-2*Math.cos(3*a)-Math.cos(4*a))*3])}wt(t,s,"#f0b3d6"),Pe(t,s,i,{w:3,closed:!0})}else n==="frame"&&(t.fillStyle="#cfe6c4",t.fillRect(0,0,200,260),wt(t,[[20,220],[70,110],[110,180],[140,130],[185,220]],"#83c47b"),t.fillStyle="#f5cf5f",t.beginPath(),t.arc(150,60,24,0,7),t.fill());return Pe(t,[[4,4],[196,4],[196,256],[4,256]],i,{w:n==="frame"?14:5,closed:!0,color:n==="frame"?"#c98a4d":Gn}),e}function Fg(){const[n,e]=Ct(120,400),t=ht(91);e.fillStyle="#fff3c9",e.fillRect(0,0,120,400);const i=s=>390-s/170*380;for(let s=0;s<=170;s+=10)Pe(e,[[0,i(s)],[s%50?22:40,i(s)]],t,{w:2,amp:0});e.fillStyle=Gn,e.font="600 20px Fredoka, sans-serif";for(const s of[50,100,150])e.fillText(String(s),46,i(s)+7);return Pe(e,[[10,i(95)],[110,i(95)]],t,{w:5,color:"#e8584e",amp:.4}),e.fillStyle="#e8584e",e.font="700 22px Fredoka, sans-serif",e.fillText("Adam",58,i(95)-10),Pe(e,[[4,4],[116,4],[116,396],[4,396]],t,{w:4,closed:!0}),n}function Og(){const[n,e]=Ct(256,128),t=ht(101);for(let i=0;i<6;i++){const s=24+i*40,r=i%2?44:84,a=Sn(s,r,15,9,t,{n:18,lump:.08});wt(e,a,"rgba(120,80,45,.75)");for(let o=0;o<4;o++)e.fillStyle="rgba(80,50,25,.9)",e.beginPath(),e.arc(s-8+o*5.5,r+(o%2?-3:3),2.2,0,7),e.fill()}return n}function kg(){const[n,e]=Ct(256,180);return e.fillStyle="#2f3a78",e.fillRect(0,0,256,180),e.fillStyle="#fffaf0",e.fillRect(14,14,228,40),e.fillStyle=Gn,e.font="600 17px Fredoka, sans-serif",e.fillText("Mama: Imran, dinner is ready!",22,40),e.fillStyle="#f5cf5f",e.beginPath(),e.arc(128,116,38,0,7),e.fill(),e.fillStyle=Gn,e.font="700 30px Fredoka, sans-serif",e.textAlign="center",e.fillText("😆",128,128),n}function Bg(){const[n,e]=Ct(200,150),t=ht(121);e.fillStyle="#fffaf0",e.fillRect(0,0,200,150),Pe(e,Sn(60,70,34,34,t,{n:24}),t,{w:3,closed:!0}),Pe(e,[[46,62],[52,62]],t,{w:3,amp:0}),Pe(e,[[70,62],[76,62]],t,{w:3,amp:0}),Pe(e,Sn(62,86,10,7,t,{n:12}),t,{w:3,closed:!0});for(const[i,s]of[[98,60],[104,76],[96,90]])Pe(e,[[i,s],[i+14,s-2]],t,{w:2.5,color:"#3d86a6",amp:0});return e.fillStyle="#e8584e",e.font="700 22px Fredoka, sans-serif",e.textAlign="center",e.fillText("SNEEZY",150,60),e.fillText("NADIA",150,88),Pe(e,[[3,3],[197,3],[197,147],[3,147]],t,{w:3,closed:!0}),n}function zg(n=0){const[e,t]=Ct(160,200),i=ht(131+n);return t.fillStyle="#fffaf0",t.fillRect(0,0,160,200),t.fillStyle=Gn,t.font="600 19px Fredoka, sans-serif",["6 × 8 = 48","7 × 8 = 54","9 × 8 = 72"].forEach((s,r)=>t.fillText(s,18,42+r*40)),Pe(t,[[14,150],[120,150]],i,{w:3,color:"#e8584e",amp:.5}),t.fillText("4 × 8 = 30",18,158),Pe(t,[[3,3],[157,3],[157,197],[3,197]],i,{w:3,closed:!0}),e}function Hg(){const[n,e]=Ct(256,160),t=ht(141);return e.fillStyle="#fffaf0",e.fillRect(0,0,256,160),Pe(e,[[128,6],[128,154]],t,{w:3,amp:.3}),e.fillStyle=Gn,e.font="600 15px Fredoka, sans-serif",["Play new","game till","late!! 🎮"].forEach((i,s)=>e.fillText(i,14,42+s*26)),["Maths hw:","do it","TOMORROW","morning"].forEach((i,s)=>e.fillText(i,140,36+s*26)),Pe(e,[[3,3],[253,3],[253,157],[3,157]],t,{w:3.4,closed:!0}),n}const Va=kh.degToRad(56),ds=1/Math.cos(Va),pi=.42,Gg=7,ho=3,Vg=3.8,Mt={W:13,D:9},mn=Mt.W/2,Et=Mt.D/2,In=3;async function Wg(n,e,t){const i=new Image;i.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n),await i.decode();const s=document.createElement("canvas");return s.width=e,s.height=t,s.getContext("2d").drawImage(i,0,0,e,t),s}const ta=new Map;function ir(n){if(ta.has(n))return ta.get(n);const e=Promise.all(Array.from({length:ho},(t,i)=>Wg(n.replace(/seed="\d+"/,`seed="${i*17+3}"`),300,360).then(s=>zt(s))));return ta.set(n,e),e}const $g=n=>Array.from({length:ho},(e,t)=>zt(n(t))),we={box:(n,e,t)=>new ai(n,e,t),cyl:(n,e,t,i=12)=>new si(n,e,t,i),sph:(n,e=14,t=10)=>new Ps(n,e,t),cone:(n,e,t=8)=>new Cs(n,e,t)};function Re(n,e,[t,i,s]=[0,0,0],{r,s:a}={}){const o=new at(n,typeof e=="string"?Zt(e):e);return o.position.set(t,i,s),r&&o.rotation.set(...r),a&&o.scale.set(...a),o}function ft(...n){const e=new Fn;return n.forEach(t=>e.add(t)),e}const Xg=(n,e={})=>new kt({map:zt(n),...e});function xs(n="#f3c99b"){const e=[];for(const t of[-1,1])for(const i of[-1,1])e.push(bn(we.cyl(.04,.04,.72,6),new U(t*.48,.36,i*.28)));return ft(Re(we.box(1.1,.08,.7),n,[0,.74,0]),Vn(e,Zt("#b3aec6")))}function Fl(n="#6fcfb7"){const e=[];for(const t of[-1,1])for(const i of[-1,1])e.push(bn(we.cyl(.03,.03,.42,6),new U(t*.19,.21,i*.19)));return ft(Re(we.box(.46,.06,.46),n,[0,.44,0]),Re(we.box(.46,.42,.06),n,[0,.68,-.21]),Vn(e,Zt("#b3aec6")))}function Ol(n=1.6,e=1.5){const t=ft(Re(we.box(n,e,.4),"#c98f55",[0,e/2,0])),i=["#e8584e","#6f9fd8","#f5cf5f","#83c47b","#b9a7ea","#f5a25a"];for(let s=0;s<3;s++){const r=.14+s*(e/3);t.add(Re(we.box(n-.1,.05,.36),"#dba46a",[0,r-.04,.03]));for(let a=0,o=-n/2+.12;o<n/2-.15;a++){const l=.09+(a*7+s)%3*.03,c=.26+(a*5+s)%4*.03;t.add(Re(we.box(l,c,.26),i[(a+s*2)%i.length],[o+l/2,r+c/2,.06])),o+=l+.02}}return t}function na(n=1){const e=[];for(let i=0;i<5;i++){const s=i*1.26;e.push(bn(we.sph(.22),new U(Math.cos(s)*.14,.62+i%2*.1,Math.sin(s)*.14),void 0,new U(1,.6,1)))}const t=ft(Re(we.cyl(.2,.15,.4,10),"#e2a574",[0,.2,0]),Vn(e,Zt("#83c47b")));return t.scale.setScalar(n),t}function kl(n="#e8847a",e=2.2){return ft(Re(we.box(e,.42,.9),n,[0,.21,0]),Re(we.box(e,.6,.25),n,[0,.7,-.33]),Re(we.box(.24,.62,.9),n,[-e/2+.12,.31,0]),Re(we.box(.24,.62,.9),n,[e/2-.12,.31,0]),Re(we.box(e*.42,.14,.62),"#f3b0a6",[-e*.22,.49,.08]),Re(we.box(e*.42,.14,.62),"#f3b0a6",[e*.22,.49,.08]))}function qg(){const n=[-.8,.8].map(e=>bn(we.box(.1,.44,.44),new U(e,.22,0)));return ft(Re(we.box(2,.08,.5),"#dba46a",[0,.47,0]),Re(we.box(2,.34,.07),"#c98a4d",[0,.78,-.24]),Vn(n,Zt("#b3aec6")))}function Yg(){const n=ft();for(const t of[-.35,.35])n.add(Re(we.cyl(.05,.05,1.6,6),"#e8584e",[t,.8,-.6]));n.add(Re(we.box(.8,.08,.5),"#f5cf5f",[0,1.5,-.6]));const e=Re(we.box(.7,.07,2),"#6fcfb7",[0,.8,.3]);e.rotation.x=.8,n.add(e);for(let t=0;t<4;t++)n.add(Re(we.box(.7,.05,.08),"#b3aec6",[0,.35+t*.35,-.95]));return n}function jg(){const n=ft(Re(we.cyl(.42,.36,.2,14),"#c98a4d",[0,.1,0]),Re(we.cyl(.36,.36,.05,14),"#f0b3d6",[0,.2,0]));n.add(Re(we.sph(.24),"#f5a25a",[0,.3,0],{s:[1.2,.6,1]})),n.add(Re(we.sph(.14),"#f5a25a",[.2,.34,.08]));for(const t of[0,.14])n.add(Re(we.cone(.05,.1,5),"#f5a25a",[.24,.47,t]));const e=Re(we.cyl(.04,.04,.4,6),"#f5a25a",[-.18,.28,.2]);return e.rotation.set(Math.PI/2,0,.7),n.add(e),n}function Bl(n,e,t,{ink:i=!1}={}){const s=new at(new $t(e,t).rotateX(-Math.PI/2),new kt({map:zt(n),transparent:!0,depthWrite:!1}));return s.position.y=.02,s.renderOrder=1,i||(s.userData.noInk=!0),s}function Zg(n){switch(n.type){case"bag":return ft(Re(we.box(.5,.55,.26),n.color,[0,.28,0]),Re(we.box(.52,.22,.28),"#f5cf5f",[0,.48,.01]));case"bottle":return ft(Re(we.cyl(.11,.11,.42),n.color,[0,.21,0]),Re(we.cyl(.07,.07,.1),"#fffaf0",[0,.47,0]));case"envelope":return ft(Re(we.box(.5,.03,.32),"#78c4dc",[0,.02,0],{r:[0,.4,0]}));case"footprints":{const e=Bl(Og(),2.8,1.4);return e.rotation.y=n.rot||0,ft(e)}case"tablet":{const e=new at(new $t(.62,.44).rotateX(-Math.PI/2),new kt({map:zt(kg())}));e.position.y=.93;const t=Tg(1);return ft(t,Re(we.box(.68,.04,.5),"#3d4057",[0,.91,0]),e)}case"doodle":{const e=new at(new $t(.62,.46).rotateX(-Math.PI/2),new kt({map:zt(Bg())}));return e.position.y=.52,e.rotation.y=.15,ft(e)}case"ball":return ft(Re(we.sph(.22),"#fffaf0",[0,.22,0]),Re(we.sph(.08,6,4),"#5b3520",[.12,.34,.08]));case"softball":return ft(Re(we.sph(.17),"#f0b3d6",[0,.17,0]),Re(new oo(.17,.015,6,20),"#e8584e",[0,.17,0],{r:[.4,0,0]}));case"shards":{const e=ft();return[[0,0,.18],[.3,.12,.13],[-.28,.1,.12],[.1,-.22,.1],[-.1,.28,.09]].forEach(([t,i,s],r)=>e.add(Re(new ao(s),r%2?"#78c4dc":"#b5e0ee",[t,s*.4,i],{r:[r,r*2,.3]}))),e.add(Re(we.sph(.07,8,6),"#f0b3d6",[.42,.06,-.05]),Re(we.sph(.07,8,6),"#f5cf5f",[-.4,.06,-.1])),e.add(Bl(Kg(),1.4,.8)),e}case"blocks":{const e=ft(),t=["#e8584e","#6f9fd8","#f5cf5f","#83c47b","#b9a7ea","#f5a25a"];for(let i=0;i<6;i++)e.add(Re(we.box(.26,.24,.26),t[i],[Math.sin(i*1.7)*.04,.12+i*.245,Math.cos(i*1.3)*.03],{r:[0,i*.3,0]}));for(let i=0;i<3;i++)e.add(Re(we.box(.24,.22,.24),t[(i+3)%6],[.45+i*.1,.11,.2-i*.3],{r:[0,i,0]}));return e}case"chart":{const e=new at(we.box(.42,1.75,.04),Xg(Fg()));return e.position.set(0,.9,0),ft(e)}case"catbasket":return jg();case"sheets":{const e=ft(xs("#e2a574"));return[-.26,.26].forEach((t,i)=>{const s=new at(new $t(.4,.5).rotateX(-Math.PI/2),new kt({map:zt(zg(i))}));s.position.set(t,.79,0),s.rotation.y=i?-.12:.1,e.add(s)}),e}case"planner":{const e=new at(new $t(.62,.4).rotateX(-Math.PI/2),new kt({map:zt(Hg())}));return e.position.y=.82,ft(xs(),Re(we.box(.66,.04,.44),"#8a6cc8",[0,.8,0]),e)}}return ft()}function Kg(){const n=document.createElement("canvas");n.width=256,n.height=150;const e=n.getContext("2d");return e.fillStyle="rgba(120,196,220,.45)",e.beginPath(),e.ellipse(128,75,110,55,0,0,7),e.fill(),n}async function Jg(n){const e=new vc,t=new vr(-1,1,1,-1,.1,300),i=Pg(n),s=zt(pg());e.background=s;const r=1024/640;e.add(new ng(16777215,15985368,1.9));const a=new rg(16777215,1.3);a.position.set(-9,6,4),e.add(a);const o=new kt({map:zt(dg()),transparent:!0,depthWrite:!1}),l=new $t(1,1).rotateX(-Math.PI/2),c=$g(te=>fg(te)),h=new kt({map:c[0],alphaTest:.5,side:Wt});let f=null,u=[],p=[],g={},v=[],m=[];const d={x:0,z:3.2,facing:1,walkT:0,moving:!1,target:null,resolve:null},S={aspect:1.6,zoom:1,zoomT:1,focus:null,pan:new Ve,fit:null};function w(te,G,K,j,ae=j*.5){const X=new at(l,o);return X.position.set(G,.018,K),X.scale.set(j,1,ae),X.renderOrder=1,X.userData.noInk=!0,te.add(X),X}function M(te,G,K,j,ae){const X=new kt({map:te[0],alphaTest:.5,alphaToCoverage:!0,side:Wt});u.push({mat:X,frames:te});const x=new $t(G,K*ds);x.translate(0,K*ds/2,0);const _=new at(x,X);return _.position.set(j,0,ae),_.userData.sprite=!0,_.userData.colorMap=()=>X.map,f.add(_),p.push(_),_}const C=1.3,T=te=>(te==="woman"||te==="man"?[1.3,1.56]:te==="toddler"?[.92,1.1]:[1.2,1.44]).map(G=>G*C);function A(te,G,K,j){return new at(we.box(te,G,K),new kt({map:zt(j)}))}function R(te,G,K,j,ae,X){const x=new at(we.box(K,j,.1),new kt({map:zt(G)}));return x.position.set(ae,X,-Et+.05),te.add(x),x}function b(te,G,K,j,ae,X){const x=new at(we.box(K,j,.1),new kt({map:zt(G)}));return x.rotation.y=Math.PI/2,x.position.set(-mn+.05,X,ae),te.add(x),x}function y(te){const G=ft();G.add(Re(we.box(Mt.W+.4,.7,Mt.D+.4),te==="yard"?"#c28c5a":"#dba46a",[0,-.35,0]));const K=te==="yard"?Lg(Mt.W,Mt.D):te==="home"?Ll(Mt.W,Mt.D,{kind:"tiles",rug:[.8,1.5,3.2,1.9,"#b9a7ea","#f5cf5f"]}):Ll(Mt.W,Mt.D,{rug:[-4.6,-2.6,1.6,1.3,"#6fcfb7","#f5cf5f"]}),j=zt(K);j.anisotropy=n.capabilities.getMaxAnisotropy();const ae=new at(new $t(Mt.W,Mt.D).rotateX(-Math.PI/2),new kt({map:j}));if(ae.position.y=.001,ae.name="floor",G.add(ae),te==="yard"){const X=A(Mt.W,1.2,.35,Ug(Mt.W,1.2));X.position.set(0,.6,-Et-.17),G.add(X),G.add(Re(we.box(Mt.W+.1,.1,.45),"#e4e0f0",[0,1.25,-Et-.17])),G.add(Ag(-mn+.1,-Et+.3,-mn+.1,Et-.3))}else{const X=te==="home"?{plaster:"#f6e7d8",wains:"#e8b8a8",band:"#6f9fd8"}:{},x=A(Mt.W+.3,In,.3,Ul(Mt.W,In,X));x.position.set(.15,In/2,-Et-.15),G.add(x);const _=A(Mt.D,In,.3,Ul(Mt.D,In,X));_.rotation.y=Math.PI/2,_.position.set(-mn-.15,In/2,0),G.add(_),G.add(Re(we.box(Mt.W+.3,.14,.4),"#dba46a",[.15,In+.07,-Et-.15])),G.add(Re(we.box(.4,.14,Mt.D+.3),"#dba46a",[-mn-.15,In+.07,-.15]))}return G}function P(te,G,K){const j=(ae,X,x,_=0,F=0)=>(ae.position.x=X,ae.position.z=x,ae.rotation.y=_,G.add(ae),F&&w(G,X,x,F),ae);if(te==="classroom"){const ae=K?.id==="homework"?["Maths: 8 times table","7 × 8 = ?","Hand in homework!"]:["Class trip: TOMORROW!","Bring RM20","Recess 10:00"];R(G,Ng(ae),3.2,1.6,1.3,1.75),R(G,ea(K?.id==="homework"?"times":"abc"),.9,1.15,-1.3,1.9),R(G,Qr(),1,2.1,5.2,1.05),b(G,Nl(),1.3,1.5,-1.8,1.7),b(G,Qr(),1,2.1,1.2,1.05),b(G,ea("kind"),.8,1,3.3,1.8),j(Ol(1.7,1.5),-4.8,-Et+.25),j(xs("#e2a574"),K?.id==="homework"?99:-2,-3.4,0,1.4),[[.3,-1.6],[3.4,-1.8],[.3,1]].forEach(([X,x])=>{j(xs(),X,x,0,1.3),j(Fl(),X,x+.55,Math.PI,0)}),K?.id!=="homework"&&j(xs(),4.6,1.2,0,1.3),j(Fl("#f5a25a"),4.6,1.75,Math.PI),j(na(1),-5.9,3.6,0,.7),j(na(.8),-5.9,2.6,0,.6)}else if(te==="yard"){const ae=Sg(1201);ae.scale.set(1,1.55,1),j(ae,-5.2,-3.6,0,1.6);const X=bg(2207);X.scale.set(.9,1.4,.9),j(X,5.6,-3.4,0,1.8),j(qg(),.6,1.5,0,2.2),j(Yg(),-3,-3,.3,1.6),j(Eg(505,.8),5.6,.3,0,1.2);for(const[x,_,F]of[[-2,-4,1],[1.4,-4,1],[3.5,-3.9,.9],[-5.8,1.8,.8],[5.9,3.8,1]]){const q=wg(3e3+x*10);q.scale.setScalar(F),j(q,x,_)}}else if(te==="home"){R(G,Nl(!0),1.4,1.5,-3.4,1.8),R(G,ea("frame"),.9,.7,4.4,2),b(G,Qr(),1,2.1,2.2,1.05),G.add(Re(we.box(1.8,.08,.4),"#c98a4d",[-.9,1.55,-Et+.2]));for(const ae of[-1.6,-.2])G.add(Re(we.box(.06,.24,.3),"#a8754a",[ae,1.43,-Et+.18]));G.add(Re(we.box(.14,.34,.24),"#6f9fd8",[-1.45,1.76,-Et+.2]),Re(we.box(.14,.3,.24),"#e8584e",[-1.28,1.74,-Et+.2])),G.add(Re(we.cyl(.12,.12,.02,12),"#fffaf0",[-.7,1.6,-Et+.2])),j(kl(),-3.2,-3.7,0,2.6),j(kl("#8fc9a8",1.2),5,-2.9,-.5,1.6),j(ft(Re(we.box(1.3,.08,.8),"#c98f55",[0,.45,0]),...[[-1,-1],[1,-1],[-1,1],[1,1]].map(([ae,X])=>Re(we.cyl(.05,.05,.42,6),"#a8754a",[ae*.55,.21,X*.32]))),-1.8,.9,0,1.5),j(na(1.2),5.8,3.6,0,.8),j(Ol(1.2,1.1),1.2,-Et+.25)}}async function z(te,G,K){f&&e.remove(f),f=new Fn,e.add(f),u=[],p=[],g={},v=[],m=[],f.add(y(te)),P(te,f,G);for(const x of G?.props||[]){const _=Zg(x);_.position.set(x.x,0,x.z),f.add(_),["footprints","chart","shards"].includes(x.type)||w(f,x.x,x.z,x.type==="sheets"||x.type==="planner"?1.3:.8);const F=G.hotspots.find(q=>q.prop===x.type);F&&(_.traverse(q=>{q.userData.hot=F.id}),v.push({id:F.id,x:x.x,z:x.z,y:x.type==="chart"?1.9:x.type==="tablet"?1.2:x.type==="sheets"||x.type==="planner"?1.1:.7,obj:_}))}const j=G?.cast||[];await Promise.all(j.map(async x=>{const[_,F]=T(x.look.kind),q=await ir(_n(x.look,{mood:x.mood||"happy"})),ee=M(q,_,F,x.x,x.z);ee.userData.hot=x.id,g[x.id]={...x,m:ee,w:_,h:F,mood:x.mood||"happy",boil:u[u.length-1],sh:w(f,x.x,x.z,_*.8)},v.push({id:x.id,x:x.x,z:x.z,y:F*ds+.15,person:!0,obj:ee})}));const[ae,X]=await Promise.all([ir(_n(K,{pose:"A"})),ir(_n(K,{pose:"B"}))]);d.frames=[ae,X],Object.assign(d,{x:0,z:3.4,facing:1,moving:!1,target:null}),d.mat=null,d.m=M(ae,1.2*C,1.44*C,d.x,d.z),d.mat=d.m.material,u.pop(),d.sh=w(f,d.x,d.z,1.2),S.focus=null,S.zoomT=1,W()}async function O(te,G){const K=g[te];!K||K.mood===G||(K.mood=G,K.boil.frames=await ir(_n(K.look,{mood:G})))}function V(te,G="happy"){return _n(te,{mood:G})}const Q=[];for(const te of[-mn,mn])for(const G of[-Et,Et])for(const K of[-.7,In])Q.push(new U(te,K,G));const H=new U;function ne(te){const K=Math.cos(Va);t.position.set(te.x+Math.sin(pi)*K*60,te.y+Math.sin(Va)*60,te.z+Math.cos(pi)*K*60),t.lookAt(te),t.updateMatrixWorld()}function W(){ne(new U(0,0,0));let te=1/0,G=-1/0,K=1/0,j=-1/0;for(const F of Q)H.copy(F).applyMatrix4(t.matrixWorldInverse),te=Math.min(te,H.x),G=Math.max(G,H.x),K=Math.min(K,H.y),j=Math.max(j,H.y);const ae=G-te,X=j-K;let x=Math.max(X*.5*1.16,ae*.5*1.04/S.aspect),_=!1;S.aspect<.85&&(x=Math.max(X*.5*1.3,ae*.5*.84/S.aspect),_=!0),S.fit={cx:(te+G)/2,cy:(K+j)/2-X*.02,halfH:x,halfW:ae/2,portraitMode:_}}function he(te){const G=te?1-Math.exp(-te*4):1;S.zoom+=(S.zoomT-S.zoom)*G;const K=S.fit,j=K.halfH*S.zoom,ae=j*S.aspect;let X=0,x=0;const _=S.focus||(K.portraitMode?{x:d.x,z:d.z}:null);_&&(ne(new U(0,0,0)),H.set(_.x,.7,_.z).applyMatrix4(t.matrixWorldInverse),X=Math.max(-Math.max(0,K.halfW-ae*.9),Math.min(Math.max(0,K.halfW-ae*.9),H.x-K.cx)),x=S.focus?Math.max(-K.halfH*.4,Math.min(K.halfH*.4,H.y-K.cy))*(1-S.zoom)*2.2:0),S.pan.x+=(X-S.pan.x)*G,S.pan.y+=(x-S.pan.y)*G,ne(new U(0,0,0));const F=K.cx+S.pan.x,q=K.cy+S.pan.y;Object.assign(t,{left:F-ae,right:F+ae,top:q+j,bottom:q-j}),t.updateProjectionMatrix()}function ge(te,G){S.aspect=te/G,S.aspect<r?(s.repeat.set(S.aspect/r,1),s.offset.set((1-s.repeat.x)/2,0)):(s.repeat.set(1,r/S.aspect),s.offset.set(0,(1-s.repeat.y)/2)),f&&W()}let ye=0,Be=-1,Je=0;const Y=new U;function se(te){if(!f)return;ye+=te;const G=Math.max(0,Math.floor(ye*Gg))%ho;G!==Be&&(Be=G,Je=G*7.31);for(const X of u)X.mat.map=X.frames[G];if(d.target){const X=d.target[0]-d.x,x=d.target[1]-d.z,_=Math.hypot(X,x),F=Vg*te;if(_<=F){d.x=d.target[0],d.z=d.target[1],d.target=null,d.moving=!1;const q=d.resolve;d.resolve=null,q?.()}else{d.x+=X/_*F,d.z+=x/_*F,d.moving=!0,Y.set(Math.cos(pi),0,-Math.sin(pi));const q=X*Y.x+x*Y.z;Math.abs(q)>.05&&(d.facing=q>0?1:-1)}}d.walkT=d.moving?d.walkT+te:0;const K=d.moving&&Math.floor(d.walkT*8)%2===1;d.mat.map=d.frames[K?1:0][G];const j=d.moving?Math.abs(Math.sin(d.walkT*16))*.07:0,ae=d.moving?1:1+Math.sin(ye*3)*.018;d.m.position.set(d.x,j,d.z),d.m.scale.set(d.facing/ae,ae,1),d.sh.position.set(d.x,.018,d.z),Y.set(Math.cos(pi),0,-Math.sin(pi));for(const X of Object.values(g)){const x=Math.sign((d.x-X.x)*Y.x+(d.z-X.z)*Y.z)||1,_=1+Math.sin(ye*2.6+X.x)*.015;X.m.scale.set(x/_,_,1)}for(let X=m.length-1;X>=0;X--){const x=m[X];x.t+=te,x.vy-=9*te,x.m.position.x+=x.vx*te,x.m.position.z+=x.vz*te,x.m.position.y=Math.max(0,x.m.position.y+x.vy*te),x.m.scale.setScalar(Math.max(.001,1-x.t/.9)),x.t>.9&&(f.remove(x.m),p.splice(p.indexOf(x.m),1),m.splice(X,1))}h.map=c[G];for(const X of p)X.rotation.y=pi;he(te)}const Me=()=>{f&&i.render(e,t,Je)};function oe(te,G,K,j=8){for(let ae=0;ae<j;ae++){const X=ae/j*Math.PI*2+Math.random(),x=new $t(.36,.36*ds);x.translate(0,.18*ds,0);const _=new at(x,h);_.position.set(te,G,K),_.userData.sprite=!0,_.userData.colorMap=()=>h.map,f.add(_),p.push(_),m.push({m:_,vx:Math.cos(X)*2.2,vz:Math.sin(X)*1.2,vy:2.5+Math.random()*1.5,t:0})}}function Ce(te,G){return te=Math.max(-mn+.6,Math.min(mn-.6,te)),G=Math.max(-Et+.9,Math.min(Et-.4,G)),d.resolve&&d.resolve(),new Promise(K=>{d.target=[te,G],d.resolve=K})}function Ue(te){const G=v.find(_=>_.id===te);if(!G)return Promise.resolve();let K=d.x-G.x,j=d.z-G.z;const ae=Math.hypot(K,j)||1;if(ae<1.4)return Promise.resolve();K/=ae,j/=ae;const X=G.x+(K*.6+.8*Math.sign(K||1))*.9,x=G.z+Math.max(.5,j*1.2+.4);return Ce(X,x)}function Ge(){const te=[],G=n.domElement.clientWidth,K=n.domElement.clientHeight;for(const j of v)H.set(j.x,j.y,j.z).project(t),te.push({id:j.id,x:(H.x+1)/2*G,y:(1-H.y)/2*K,person:!!j.person});return te}const ot=new ag,We=new Ve,mt=new Jn(new U(0,1,0),0);function N(te,G){const K=n.domElement.getBoundingClientRect();We.set((te-K.left)/K.width*2-1,-((G-K.top)/K.height)*2+1),ot.setFromCamera(We,t);const j=ot.intersectObjects(v.map(X=>X.obj),!0);for(const X of j){if(X.object.userData.sprite&&X.uv){const x=X.object.material.map?.image;if(x?.getContext&&x.getContext("2d").getImageData(Math.floor(X.uv.x*(x.width-1)),Math.floor((1-X.uv.y)*(x.height-1)),1,1).data[3]<60)continue}if(X.object.userData.hot)return{hot:X.object.userData.hot}}const ae=new U;return ot.ray.intersectPlane(mt,ae)&&Math.abs(ae.x)<mn&&Math.abs(ae.z)<Et?{floor:[ae.x,ae.z]}:null}return{load:z,update:se,render:Me,resize:ge,walkTo:Ce,approach:Ue,tags:Ge,pick:N,setMood:O,portrait:V,det:d,people:g,focus:(te,G=.78)=>{const K=g[te]||v.find(j=>j.id===te);S.focus=K?{x:(K.x+d.x)/2,z:(K.z+d.z)/2}:null,S.zoomT=K?G:1},celebrate:()=>{oe(d.x,1.2,d.z,10);for(const te of Object.values(g))oe(te.x,1.2,te.z,5)},sparkle:te=>{const G=v.find(K=>K.id===te);G&&oe(G.x,Math.min(G.y,1.2),G.z,7)},get ready(){return!!f}}}const bc=[{id:"school",name:"School",icon:"🏫"},{id:"friends",name:"Friends",icon:"🤝"},{id:"family",name:"Family",icon:"🏠"},{id:"money",name:"Money",icon:"💰"},{id:"internet",name:"Internet",icon:"📱"},{id:"worship",name:"Worship",icon:"🕌"}],Qg=[{category:"school",title:"The Football Team Pick"},{category:"friends",title:"The Left-Out Friend"},{category:"friends",title:"The Broken Promise"},{category:"family",title:"The Last Samosa"},{category:"money",title:"The Extra Change"},{category:"internet",title:"The Borrowed Password"},{category:"worship",title:"The Noisy Masjid"},{category:"worship",title:"The Forgotten Dua"}],mr={detectiveGirl:{kind:"girl",skin:"#e0a878",top:"#e8584e",cover:"#f5cf5f",prop:"magnifier"},detectiveBoy:{kind:"boy",skin:"#c68a5e",top:"#e8584e",cover:"#ffffff",hair:"#3a2416",prop:"magnifier"}},ms=[{id:"rm20",num:1,category:"money",title:"The Missing RM20",scene:"classroom",theme:"Honesty & returning what is not yours (amanah)",badge:{name:"Amanah Keeper",icon:"🔐"},brief:{from:"teacher",lines:["Oh, {D}! I am glad you are here.","Aisyah's trip money has gone missing. It was a RM20 note in a blue envelope.","The class trip is tomorrow. Can you find out what happened? Be kind, and listen to everyone."]},cast:[{id:"teacher",name:"Teacher Aminah",look:{kind:"woman",skin:"#d79a6b",top:"#6f9fd8",cover:"#8a6cc8"},x:-.9,z:-2.9},{id:"aisyah",name:"Aisyah",look:{kind:"girl",skin:"#e0a878",top:"#7cc6a4",cover:"#f0b3d6"},x:2.3,z:-.4,mood:"sad"},{id:"hakim",name:"Hakim",look:{kind:"boy",skin:"#b07650",top:"#f5cf5f",cover:"#ffffff",hair:"#2a1a10"},x:3.9,z:2.4},{id:"farah",name:"Farah",look:{kind:"girl",skin:"#8d5a3b",top:"#b9a7ea",cover:"#6fcfb7"},x:-3.2,z:2.4}],props:[{type:"bag",x:2.9,z:-.8,color:"#6f9fd8"},{type:"bottle",x:-4.7,z:-2.9,color:"#e8584e"},{type:"footprints",x:-4.9,z:-.3,rot:1.16},{type:"envelope",x:-4.2,z:-1.7}],hotspots:[{id:"aisyah",kind:"person",who:"aisyah",label:"Aisyah",lines:["I put my RM20 in a blue envelope, inside my bag.","At recess I carried my bag to the reading corner to get my book.","After recess the envelope was still in my bag... but it was empty!"],clue:{id:"c_aisyah",type:"statement",icon:"💬",name:"Aisyah's story",text:"She took her bag to the reading corner at recess. After recess the envelope was empty."}},{id:"hakim",kind:"person",who:"hakim",label:"Hakim",lines:["Money? I don't know anything about money.","I played football outside the WHOLE recess. I never came inside. Not even once!"],clue:{id:"c_hakim",type:"statement",icon:"💬",name:"Hakim's story",text:'"I played football the whole recess. I never came inside, not even once."'}},{id:"farah",kind:"person",who:"farah",label:"Farah",lines:["I stayed inside at recess to water the class plants with Teacher Aminah.","I heard someone run in and out very fast. Squeak, squeak! Like football boots.","I didn't see who it was. I was behind the plant shelf."],clue:{id:"c_farah",type:"statement",icon:"💬",name:"Farah's story",text:"She heard someone run in and out very fast at recess, squeaking like football boots."}},{id:"teacher",kind:"person",who:"teacher",label:"Teacher Aminah",lines:["I was here all recess. I was busy with the plants, so I didn't watch the door.","Remember, {D}: we don't call anyone a thief. We look for the truth, gently."],clue:{id:"c_teacher",type:"statement",icon:"💬",name:"Teacher's note",text:"She was busy with the plants and did not watch the door."}},{id:"footprints",kind:"object",prop:"footprints",label:"Muddy prints",lines:["Muddy footprints! They go from the door to the reading corner... and back again.","The pattern has little round studs, like football boots."],clue:{id:"c_prints",type:"evidence",icon:"👣",name:"Muddy football prints",text:"Muddy prints with football-boot studs go from the door to the reading corner and back."}},{id:"bottle",kind:"object",prop:"bottle",label:"Water bottle",lines:["A red water bottle, left by the reading corner.","The name on it says... HAKIM."],clue:{id:"c_bottle",type:"evidence",icon:"🧴",name:"Hakim's water bottle",text:"Found by the reading corner, where Aisyah's bag was at recess. The label says HAKIM."}}],huddle:{after:3,child:"Detectives, huddle up! Tell your partner what you have found so far.",parent:{ask:["What do we know for sure, and what are we only guessing?","Is it fair to say someone is a thief before we know the facts?"],tip:"Praise careful thinking. Good detectives (and good Muslims) do not jump to blame. You might mention that Allah tells us to check news before acting on it (Al-Hujurat 49:6)."}},contradiction:{who:"hakim",clue:"c_hakim",answer:["c_bottle","c_prints"],statement:"I played football the WHOLE recess. I never came inside. Not even once!",press:["Really! I was outside. Ask anyone. My boots were on the field all the time!"],hint:{ask:["Hakim says he never came inside. Is there anything in our casebook that was found inside, and belongs to him?"],tip:"Let your child find it. If they are stuck, point at the reading corner together."},aha:"Your water bottle was by the reading corner, Hakim. So you did come inside...",confession:["...Okay. I came in to get my water bottle.","There was a RM20 note on the floor by the reading corner. Nobody was there.","I thought... finders keepers? I wanted to buy new football cards.","It's still in my pocket. I don't know what to do now."]},islamic:{title:"Amanah: giving things back",sources:[{kind:"quran",ref:"An-Nisa 4:58",text:"Indeed, Allah commands you to render trusts to whom they are due…"},{kind:"hadith",ref:"Sahih al-Bukhari 6094 & Sahih Muslim 2607",text:"Truthfulness leads to righteousness, and righteousness leads to Paradise."}],explain:'Things that belong to someone else are an amanah (a trust). "Finders keepers" is not the Muslim way: when we find something, we try to give it back to its owner. Being truthful about it, even when it is hard, leads to good.',open:"If you like, open the Qur'an to Surah An-Nisa, ayah 58, and read it together.",ask:["How would Aisyah feel if she never got her money back?","Why might it feel hard for Hakim to tell the truth now?"],note:"The detailed rules for found property (luqatah) have more steps. For those, ask your local imam or teacher."},discuss:{prompt:"Talk together: Hakim found the money on the floor. Does that make it his?",nudge:"Take turns. Grown-up, share a time you found something that wasn't yours."},decision:{who:"hakim",question:"What should Hakim do now?",best:"return",options:[{id:"keep",icon:"🤫",text:"Keep it. He found it, so finders keepers.",chain:[{icon:"🤫",text:"Hakim keeps the RM20."},{icon:"🚌",text:"Aisyah cannot pay for the trip."},{icon:"😢",text:"She stays behind, sad and worried."},{icon:"🎒",text:"Hakim feels heavy inside every time he sees her."},{icon:"💔",text:"When the class finds out, it is hard to trust him."}],tone:"sad"},{id:"return",icon:"🤲",text:"Give it back to Aisyah and tell the truth.",chain:[{icon:"🤲",text:"Hakim gives the RM20 back and says sorry."},{icon:"😮‍💨",text:"Aisyah is so relieved!"},{icon:"😊",text:"Hakim feels light and honest inside."},{icon:"🤝",text:"Everyone knows they can trust Hakim."},{icon:"🚌",text:"The whole class goes on the trip together."}],tone:"good"},{id:"sneak",icon:"🙈",text:"Sneak it back into her bag so nobody knows.",chain:[{icon:"🙈",text:"Hakim hides the money back in her bag."},{icon:"😮",text:"Aisyah finds it. She is glad, but confused."},{icon:"🤔",text:"Everyone still wonders who took it."},{icon:"😬",text:`Hakim's fib ("I never came inside") is still there.`},{icon:"🌧️",text:"He misses the chance to be known as honest."}],tone:"mixed"}]},principle:{title:"The principle: Amanah & Sidq (trust & truthfulness)",points:["What belongs to someone else is a trust. We give it back.","Owning up is brave. Truthfulness leads to good.","We can make things right: return it, and say sorry for the fib."]},resolution:["Hakim takes a deep breath and gives Aisyah the RM20.",`"I'm sorry I said I never came inside." Aisyah smiles. "Thank you for giving it back."`],apply:{title:"This week, family detectives…",ideas:[`Make a "found it" box at home for things we find that aren't ours.`,"Next time you find something, tell a grown-up straight away."]}},{id:"screenshot",num:2,category:"internet",title:"The Secret Screenshot",scene:"yard",theme:"Not mocking others, privacy & covering faults",badge:{name:"Honour Guard",icon:"🛡️"},brief:{from:"sara",lines:["{D}! Please help. Last night Nadia sent a silly sneezing photo to the class chat by mistake.",'She deleted it after ten seconds. But now someone has a screenshot, and they call her "Sneezy Nadia".',"Who took the screenshot? And what should happen now?"]},cast:[{id:"sara",name:"Sara",look:{kind:"girl",skin:"#c68a5e",top:"#78c4dc",cover:"#e8584e"},x:-3.6,z:1.8},{id:"nadia",name:"Nadia",look:{kind:"girl",skin:"#e0a878",top:"#f0b3d6",cover:"#8a6cc8"},x:-1.2,z:-2.6,mood:"sad"},{id:"imran",name:"Imran",look:{kind:"boy",skin:"#d79a6b",top:"#83c47b",cover:"#6f9fd8",hair:"#2a1a10"},x:3.6,z:-1.6},{id:"yusuf",name:"Yusuf",look:{kind:"boy",skin:"#8d5a3b",top:"#f5a25a",cover:null,hair:"#1f140c"},x:3.4,z:3.3}],props:[{type:"tablet",x:5.3,z:1.9},{type:"doodle",x:.9,z:1.7},{type:"ball",x:-4.9,z:-1.1}],hotspots:[{id:"nadia",kind:"person",who:"nadia",label:"Nadia",lines:["It was just a sneeze photo. I pressed the wrong button!","I deleted it really fast, at 7:42. Now people are laughing at me.","I don't want to come to school tomorrow."],clue:{id:"c_nadia",type:"statement",icon:"💬",name:"Nadia's story",text:"She sent the photo by mistake and deleted it at 7:42. She feels embarrassed and sad."}},{id:"sara",kind:"person",who:"sara",label:"Sara",lines:["At 7:42 only three people were online in the chat: me, Yusuf and Imran.","I didn't take a screenshot. I sent Nadia a hug emoji instead."],clue:{id:"c_sara",type:"statement",icon:"💬",name:"Sara's story",text:"Only Sara, Yusuf and Imran were online at 7:42."}},{id:"yusuf",kind:"person",who:"yusuf",label:"Yusuf",lines:["Haha, the sneeze photo? Someone sent it to me. I didn't take it!","I only sent laughing faces... Maybe that wasn't very kind.","It's on my tablet over there, if you want to see."],clue:{id:"c_yusuf",type:"statement",icon:"💬",name:"Yusuf's story",text:"Someone forwarded the screenshot to him. He did not take it."}},{id:"imran",kind:"person",who:"imran",label:"Imran",lines:["Screenshot? Not me! I didn't even see the chat last night.","I didn't take any screenshot. Nope."],clue:{id:"c_imran",type:"statement",icon:"💬",name:"Imran's story",text:`"I didn't even see the chat last night. I didn't take any screenshot."`}},{id:"tablet",kind:"object",prop:"tablet",label:"Yusuf's tablet",lines:["The forwarded screenshot is on Yusuf's tablet.","Look at the top! A message popped up on the phone while the screenshot was taken:",'"Mama: Imran, dinner is ready!"'],clue:{id:"c_shot",type:"evidence",icon:"📱",name:"The screenshot",text:'At the top it shows a pop-up message on the phone that took it: "Mama: Imran, dinner is ready!"'}},{id:"doodle",kind:"object",prop:"doodle",label:"Paper on bench",lines:["A paper on the bench with a drawing of a sneezing face.",'Someone wrote "SNEEZY NADIA" on it. Ouch.'],clue:{id:"c_doodle",type:"evidence",icon:"📝",name:"Mean nickname note",text:'A drawing on the bench that says "SNEEZY NADIA". The joke is spreading offline too.'}}],huddle:{after:3,child:"Detectives, huddle up! How do you think Nadia feels right now?",parent:{ask:["Have you ever felt laughed at? What did it feel like?","Is a joke still funny if one person is hurt by it?"],tip:"Let your child talk about feelings first. There is no rush to solve the case."}},contradiction:{who:"imran",clue:"c_imran",answer:["c_shot"],statement:"I didn't even see the chat last night. I didn't take any screenshot.",press:["I was busy! I had dinner and then I read a book. Honest!"],hint:{ask:["Look closely at what was on the screen when the screenshot was taken. Whose phone would get that message?"],tip:"The clue is the pop-up message in the screenshot."},aha:'The screenshot shows "Mama: Imran, dinner is ready!" So it was taken on your phone, Imran.',confession:["...Yes. I took it. It was so funny, I couldn't stop laughing.","I sent it to Yusuf. And now some kids in the other class want it too.","I was going to post it in the big group chat. Everyone would see it."]},islamic:{title:"Don't mock, and cover others' mistakes",sources:[{kind:"quran",ref:"Al-Hujurat 49:11",text:"O you who have believed, let not a people ridicule [another] people; perhaps they may be better than them… And do not insult one another and do not call each other by [offensive] nicknames."},{kind:"quran",ref:"Al-Hujurat 49:12",text:"…And do not spy or backbite each other."},{kind:"hadith",ref:"Sahih al-Bukhari 2442 & Sahih Muslim 2580",text:"Whoever covers (the faults of) a Muslim, Allah will cover him on the Day of Resurrection."}],explain:"Allah tells us not to make fun of people or call them hurtful nicknames. When someone makes an embarrassing mistake, a Muslim covers it instead of spreading it, and Allah promises to cover our mistakes too.",open:"If you like, open the Qur'an to Surah Al-Hujurat, ayat 11 and 12, and read them together.",ask:["Is sharing a screenshot like passing on a secret?",'How can we "cover" a friend who made a mistake?']},discuss:{prompt:"Talk together: once a picture is online, can we ever get it all back?",nudge:"Grown-up: share one simple family rule you have about photos of other people."},decision:{who:"imran",question:"What should Imran do now?",best:"delete",options:[{id:"post",icon:"📤",text:"Post it in the big group chat. It's just a joke!",chain:[{icon:"📤",text:"Imran posts the screenshot."},{icon:"👥",text:"More kids share it, again and again."},{icon:"📲",text:"Nadia sees it everywhere."},{icon:"😳",text:"She feels embarrassed and alone."},{icon:"💔",text:"Friendships break. Nobody feels safe in the chat."}],tone:"sad"},{id:"delete",icon:"🗑️",text:"Delete it, ask Yusuf to delete it, and say sorry to Nadia.",chain:[{icon:"🗑️",text:"Imran deletes it and asks Yusuf to delete it too."},{icon:"🛑",text:"The picture stops spreading."},{icon:"💌",text:"Imran says sorry to Nadia."},{icon:"😌",text:"Nadia feels protected, not laughed at."},{icon:"🤝",text:"The class learns to cover each other's mistakes."}],tone:"good"},{id:"hide",icon:"🔒",text:"Keep it saved on his phone, but don't share it.",chain:[{icon:"🔒",text:"Imran keeps the screenshot saved."},{icon:"📨",text:"Yusuf still has his copy too."},{icon:"😟",text:"Nadia worries it could come back any day."},{icon:"📱",text:"One day a friend scrolls his photos and finds it."},{icon:"🌧️",text:"The problem is hidden, not solved."}],tone:"mixed"}]},principle:{title:"The principle: guard your brother's and sister's honour",points:["We don't ridicule people or call them hurtful nicknames.","When someone slips up, we cover it instead of spreading it.",'Online, "just a joke" can travel far and hurt for a long time.']},resolution:["Imran deletes the screenshot. Yusuf deletes his copy too.",`"Sorry, Nadia. That wasn't fair." Nadia smiles a little. "Thanks for stopping it."`],apply:{title:"This week, family detectives…",ideas:['Before sharing any photo of a person, ask: "Would they be happy I shared this?"',"If you see someone being laughed at online, tell a grown-up."]}},{id:"vase",num:3,category:"family",title:"The Broken Vase",scene:"home",theme:"Owning up, and not blaming others",badge:{name:"Truth Teller",icon:"🏺"},brief:{from:"mama",lines:["Assalamu alaikum, {D}. Thank you for coming.","My favourite vase, the one from Nenek, is broken on the floor.","Maryam says little Adam did it. I don't want to blame anyone unfairly. Can you look into it?"]},cast:[{id:"mama",name:"Auntie Huda",look:{kind:"woman",skin:"#e0a878",top:"#83c47b",cover:"#6f9fd8"},x:-3.6,z:1.4},{id:"maryam",name:"Maryam",look:{kind:"girl",skin:"#e0a878",top:"#f5a25a",cover:"#b9a7ea"},x:3.8,z:1.4},{id:"adam",name:"Adam (age 4)",look:{kind:"toddler",skin:"#e0a878",top:"#78c4dc",hair:"#3a2416"},x:1.7,z:2.9,mood:"sad"}],props:[{type:"shards",x:-.9,z:-2.6},{type:"blocks",x:.1,z:1.3},{type:"chart",x:2.6,z:-3.9},{type:"catbasket",x:-5.4,z:-2.1},{type:"softball",x:4.3,z:-2.1}],hotspots:[{id:"mama",kind:"person",who:"mama",label:"Auntie Huda",lines:["I was in the kitchen making tea. Then I heard a CRASH!","When I came in, Maryam was standing by the sofa, and Adam was sitting on the rug.","The vase was on the high shelf, very high up."],clue:{id:"c_mama",type:"statement",icon:"💬",name:"Auntie Huda's story",text:"The vase was on the high shelf. After the crash, Maryam was by the sofa and Adam was on the rug."}},{id:"maryam",kind:"person",who:"maryam",label:"Maryam",lines:["It was Adam! I saw him climb up and grab the vase.","He's little, so he won't get in big trouble anyway."],clue:{id:"c_maryam",type:"statement",icon:"💬",name:"Maryam's story",text:'"Adam climbed up and grabbed the vase. I saw him."'}},{id:"adam",kind:"person",who:"adam",label:"Adam",lines:["I was making a tower! A big tower!","Then... CRASH! Not me. Not me!"],clue:{id:"c_adam",type:"statement",icon:"💬",name:"Adam's story",text:"He was building a block tower when the crash happened."}},{id:"blocks",kind:"object",prop:"blocks",label:"Block tower",lines:["Adam's block tower is still standing, tall and wobbly.","If he had jumped up and run to the shelf, it would surely have fallen over."],clue:{id:"c_blocks",type:"evidence",icon:"🧱",name:"Tower still standing",text:"Adam's wobbly tower is still standing. He did not rush off from it."}},{id:"chart",kind:"object",prop:"chart",label:"Height chart",lines:["A height chart on the wall. Adam's line says 95 cm.","The high shelf is at 150 cm. There is no chair near it.","Adam could never reach it!"],clue:{id:"c_chart",type:"evidence",icon:"📏",name:"Height chart",text:"Adam is 95 cm tall. The shelf is 150 cm high with no chair nearby. He cannot reach it."}},{id:"softball",kind:"object",prop:"softball",label:"Soft ball",lines:["A soft ball, rolled under the armchair.","There's a name written on it: MARYAM.","Hmm. Was someone throwing a ball indoors?"],clue:{id:"c_ball",type:"evidence",icon:"🥎",name:"Maryam's ball",text:"A soft ball with MARYAM written on it, rolled under the armchair."}},{id:"cat",kind:"object",prop:"catbasket",label:"Cat basket",lines:["Oyen the cat is fast asleep. Purr... purr...","The blanket is neat and his fur is dry. He hasn't moved for ages."],clue:{id:"c_cat",type:"evidence",icon:"🐈",name:"Sleepy cat",text:"Oyen the cat has been asleep the whole time."}}],huddle:{after:3,child:"Detectives, huddle up! Why might someone blame a little brother?",parent:{ask:["Why might it feel easier to blame someone else?","How would it feel to be told off for something you didn't do?"],tip:"Keep it gentle: everyone is tempted sometimes. The case is about what we do next."}},contradiction:{who:"maryam",clue:"c_maryam",answer:["c_chart","c_blocks"],statement:"Adam climbed up and grabbed the vase. I saw him!",press:["He's a really good climber! Um... I think."],hint:{ask:["How tall is Adam? How high is the shelf? Could he really reach it?"],tip:"The height chart or the standing block tower both show it."},aha:"Adam is only 95 cm, and the shelf is 150 cm high. He couldn't reach it!",confession:["...You're right. It wasn't Adam.","I was throwing my ball up to the ceiling. It hit the vase. CRASH.","I got scared. Adam is little, so I thought he wouldn't get in trouble..."]},islamic:{title:"Never put your mistake on someone else",sources:[{kind:"quran",ref:"An-Nisa 4:112",text:"But whoever earns an offense or a sin and then blames it on an innocent [person] has taken upon himself a slander and manifest sin."},{kind:"quran",ref:"Al-An'am 6:164",text:"…And every soul earns not [blame] except against itself, and no bearer of burdens will bear the burden of another."}],explain:"Breaking the vase was an accident, and accidents happen. But blaming little Adam would turn an accident into a real wrong. In Islam, each person carries their own actions. We own our mistakes, say sorry, and try to fix them.",open:"If you like, open the Qur'an to Surah An-Nisa, ayah 112, and read it together.",ask:["Which is worse: the broken vase, or blaming Adam?","What could Maryam do to help fix things?"]},discuss:{prompt:"Talk together: why is it scary to own up, and how can grown-ups make it easier?",nudge:"Grown-up: you might promise your child how you will react when they own up to a mistake."},decision:{who:"maryam",question:"What should Maryam do now?",best:"truth",options:[{id:"blame",icon:"👉",text:"Keep saying Adam did it.",chain:[{icon:"👉",text:"Maryam keeps blaming Adam."},{icon:"😭",text:"Adam is told off for something he didn't do."},{icon:"😔",text:"Maryam feels guilty inside."},{icon:"🔍",text:"Later, the truth comes out anyway."},{icon:"💔",text:"Now it is harder for Mama to trust Maryam."}],tone:"sad"},{id:"truth",icon:"🙋‍♀️",text:"Tell Mama the truth, say sorry, and help fix it.",chain:[{icon:"🙋‍♀️",text:"Maryam tells the truth and says sorry."},{icon:"🤗",text:"Mama is sad about the vase, but proud of her honesty."},{icon:"🧴",text:"Together they glue the pieces back."},{icon:"🌸",text:"The mended vase gets fresh flowers."},{icon:"💞",text:"Adam gives Maryam a hug. Trust grows."}],tone:"good"},{id:"dunno",icon:"🤷‍♀️",text:`Say "I don't know what happened."`,chain:[{icon:"🤷‍♀️",text:"Maryam says she doesn't know."},{icon:"🤔",text:"Everyone keeps wondering and guessing."},{icon:"👀",text:"Adam still gets funny looks."},{icon:"🎒",text:"Maryam carries a heavy secret."},{icon:"🌧️",text:"The house feels cloudy for days."}],tone:"mixed"}]},principle:{title:"The principle: own your actions",points:["Accidents happen. Owning up is brave.","Blaming an innocent person is a real wrong in Islam.","Say sorry, then help fix what you can."]},resolution:[`Maryam goes to her mama. "It was me. I'm sorry. I was throwing my ball."`,`Auntie Huda hugs her. "Thank you for telling me the truth. Let's fix it together."`],apply:{title:"This week, family detectives…",ideas:['Agree a family "owning-up promise": if you tell the truth, we stay calm and fix it together.',"Notice and praise each other when someone owns up."]}},{id:"homework",num:4,category:"school",title:"The Copied Homework",scene:"classroom",theme:"Honest work & learning for real",badge:{name:"Honest Learner",icon:"✏️"},brief:{from:"teacher",lines:["{D}, I have a little puzzle for you.","Two maths sheets have exactly the same mistakes: 7 × 8 = 54, and the same crossed-out sum.","One belongs to Bilal and one to Danish. Can you find out what happened, kindly?"]},cast:[{id:"teacher",name:"Teacher Aminah",look:{kind:"woman",skin:"#d79a6b",top:"#6f9fd8",cover:"#8a6cc8"},x:-4.4,z:-1.4},{id:"bilal",name:"Bilal",look:{kind:"boy",skin:"#c68a5e",top:"#b9a7ea",cover:"#f5cf5f",hair:"#2a1a10"},x:2.7,z:2.9},{id:"danish",name:"Danish",look:{kind:"boy",skin:"#e0a878",top:"#78c4dc",cover:null,hair:"#3a2416"},x:2.2,z:-.6},{id:"zara",name:"Zara",look:{kind:"girl",skin:"#b07650",top:"#f5cf5f",cover:"#83c47b"},x:-3.2,z:2.4}],props:[{type:"sheets",x:-2.2,z:-3.1},{type:"planner",x:4.5,z:1.6}],hotspots:[{id:"sheets",kind:"object",prop:"sheets",label:"Two maths sheets",lines:["Two homework sheets side by side.","Both say 7 × 8 = 54. Both have the same sum crossed out in the same place.","That's a big coincidence..."],clue:{id:"c_sheets",type:"evidence",icon:"📄",name:"Matching mistakes",text:"Both sheets have 7 × 8 = 54 and the same crossed-out sum."}},{id:"bilal",kind:"person",who:"bilal",label:"Bilal",lines:["I did it all by myself! Last night, straight after Isha.","I worked really hard on it. Every single sum."],clue:{id:"c_bilal",type:"statement",icon:"💬",name:"Bilal's story",text:'"I did it all by myself last night, straight after Isha."'}},{id:"danish",kind:"person",who:"danish",label:"Danish",lines:["I did mine on the weekend. I'm not great at the 8 times table.",'This morning at the gate, Bilal asked to "check" my sheet. I let him borrow it.'],clue:{id:"c_danish",type:"statement",icon:"💬",name:"Danish's story",text:'He did his sheet at the weekend. Bilal borrowed it at the gate this morning to "check" it.'}},{id:"zara",kind:"person",who:"zara",label:"Zara",lines:["This morning Bilal was writing super fast on the bench by the gate.",'He said, "Quick, quick, before the bell!"'],clue:{id:"c_zara",type:"statement",icon:"💬",name:"Zara's story",text:"This morning Bilal was writing super fast by the gate before the bell."}},{id:"planner",kind:"object",prop:"planner",label:"Bilal's planner",lines:["Bilal's planner is open on his desk.",'Yesterday it says: "Play new game till late!! Maths homework: do TOMORROW morning."'],clue:{id:"c_planner",type:"evidence",icon:"📒",name:"Bilal's planner",text:'"Play new game till late!! Maths homework: do TOMORROW morning."'}}],huddle:{after:3,child:"Detectives, huddle up! What do the two matching sheets tell us?",parent:{ask:["Is it ever okay to look at a friend's answers? When is it helping, and when is it copying?","Why do teachers give homework at all?"],tip:"Asking a friend to explain is great. Copying answers is different. Let your child find the line."}},contradiction:{who:"bilal",clue:"c_bilal",answer:["c_planner","c_zara","c_danish"],statement:"I did it all by myself last night, straight after Isha.",press:["Really! After Isha I sat at my desk and did every sum."],hint:{ask:["Bilal says he did it last night. Is there anything that says what he really did last night?"],tip:"His own planner is the strongest clue. Zara and Danish also saw him this morning."},aha:'Your planner says "Play new game till late" and "do homework TOMORROW morning", Bilal.',confession:["...Yeah. I played my new game until late.","This morning I borrowed Danish's sheet and copied it super fast.","I don't really get the 8 times table. I didn't want to look silly."]},islamic:{title:"Honest work, real learning",sources:[{kind:"hadith",ref:"Sahih Muslim (Book of Faith)",text:"Whoever cheats us is not one of us."},{kind:"quran",ref:"Ta-Ha 20:114",text:'…and say, "My Lord, increase me in knowledge."'}],explain:"The Prophet Muhammad ﷺ warned us strongly against cheating. Homework is our chance to learn, and learning is something we can even ask Allah for. Copying hides the problem instead of fixing it, and asking for help is nothing to be shy about.",open:'You might teach your child the short dua from Surah Ta-Ha 20:114: "Rabbi zidni ilma" (My Lord, increase me in knowledge).',ask:["Who loses the most when Bilal copies?","What could Bilal do instead when he gets stuck?"]},discuss:{prompt:"Talk together: what is the difference between getting help and copying?",nudge:"Grown-up: tell a story of something that was hard for you to learn as a child."},decision:{who:"bilal",question:"What should Bilal do now?",best:"tell",options:[{id:"quiet",icon:"🤐",text:"Hand it in and say nothing.",chain:[{icon:"🤐",text:"Bilal hands in the copied sheet."},{icon:"✔️",text:"He gets a tick, but still doesn't know 7 × 8."},{icon:"📝",text:"Next week there is a times-table test."},{icon:"😰",text:"He feels lost and wants to copy again."},{icon:"🔁",text:"The problem keeps growing."}],tone:"sad"},{id:"tell",icon:"🙋‍♂️",text:"Tell the teacher, ask for help, and redo it himself.",chain:[{icon:"🙋‍♂️",text:"Bilal tells Teacher Aminah the truth."},{icon:"🧑‍🏫",text:"She helps him practise the 8 times table."},{icon:"💡",text:"7 × 8 = 56! He really gets it now."},{icon:"😊",text:"He feels proud of his own work."},{icon:"🤝",text:"Danish and Bilal practise together, honestly."}],tone:"good"},{id:"blame",icon:"👉",text:"Say Danish copied HIM.",chain:[{icon:"👉",text:"Bilal says Danish copied him."},{icon:"😢",text:"Danish gets in trouble for nothing."},{icon:"💔",text:"Their friendship cracks."},{icon:"🕳️",text:"One fib needs another fib to hide it."},{icon:"🌧️",text:"Bilal still can't do his 8 times table."}],tone:"sad"}]},principle:{title:"The principle: honest effort",points:["Cheating is not the Muslim way, even in small things.","Learning is precious. We can ask Allah to increase our knowledge.","Getting stuck is normal. Asking for help is brave."]},resolution:[`Bilal walks up to Teacher Aminah. "I copied. I'm sorry. I don't get the 8 times table."`,`She smiles. "Thank you for being honest, Bilal. Let's learn it together."`],apply:{title:"This week, family detectives…",ideas:["Pick one thing that is hard for you and practise it together for 5 minutes a day.",'Learn "Rabbi zidni ilma" together and say it before homework.']}}];let Ln,qi,uo=!1;function Mr(){if(!Ln)try{Ln=new(window.AudioContext||window.webkitAudioContext),qi=Ln.createGain(),qi.gain.value=uo?0:.4,qi.connect(Ln.destination)}catch{Ln=null}}function Ec(n){uo=n,qi&&(qi.gain.value=n?0:.4)}function Qt(n,e,{type:t="triangle",vol:i=.5,slide:s=1,delay:r=0}={}){if(!Ln||uo)return;const a=Ln.currentTime+r,o=Ln.createOscillator(),l=Ln.createGain();o.type=t,o.frequency.setValueAtTime(n,a),o.frequency.exponentialRampToValueAtTime(n*s,a+e),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(i,a+.012),l.gain.exponentialRampToValueAtTime(1e-4,a+e),o.connect(l).connect(qi),o.start(a),o.stop(a+e+.02)}const On={tap:()=>Qt(620,.07,{vol:.25}),blip:()=>Qt(900+Math.random()*120,.03,{type:"square",vol:.04}),open:()=>{Qt(520,.1,{vol:.3}),Qt(780,.12,{delay:.06,vol:.3})},clue:()=>{Qt(660,.12,{slide:1.5}),Qt(1320,.12,{delay:.08,vol:.3})},soft:()=>Qt(330,.3,{type:"sine",slide:.8,vol:.3}),aha:()=>[392,523,659].forEach((n,e)=>Qt(n,.18,{delay:e*.08,vol:.4})),chain:n=>Qt(440+n*70,.12,{type:"sine",vol:.3}),talk:()=>{Qt(587,.14,{type:"sine",vol:.35}),Qt(880,.2,{type:"sine",delay:.1,vol:.3})},badge:()=>[523,659,784,1047].forEach((n,e)=>Qt(n,.24,{delay:e*.11,vol:.4}))},st=n=>document.getElementById(n),ce=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),wc="familyDeen.detective.v1",Wa=()=>({v:1,setup:null,convos:0,log:[],cases:{},current:null,muted:!1});let De=(()=>{try{return{...Wa(),...JSON.parse(localStorage.getItem(wc)||"{}")}}catch{return Wa()}})();const Mn=()=>{try{localStorage.setItem(wc,JSON.stringify(De))}catch{}},vt=()=>De.setup?.parent||"Baba",Bn=()=>De.setup?.name||"Noor",vn=n=>String(n).replaceAll("{P}",vt()).replaceAll("{D}",Bn()),Is=()=>De.setup?.detective==="boy"?mr.detectiveBoy:mr.detectiveGirl;let Mi=1,un=!1;const ts=st("layer"),e0=n=>new Promise(e=>setTimeout(e,n/Mi));function nt(n,{cls:e="",onRender:t}={}){ts.innerHTML=`<section class="screen ${e}">${n}</section>`;const i=ts.firstElementChild;return t?.(i),new Promise(s=>{i.addEventListener("click",r=>{const a=r.target.closest("[data-act]");!a||a.disabled||(Mr(),On.tap(),s(a.dataset.act))})})}const Gt=()=>{ts.innerHTML=""},je=(n,e,t="")=>`<button class="chunky ${t}" data-act="${n}">${e}</button>`;function Ms(n,e,t){return`<div class="card parent"><div class="phead"><span>👤 For ${ce(vt())}</span><small>only ${ce(vt())} reads this</small></div>
    <h2>${n}</h2>${e}<div class="btns">${t}</div></div>`}const hr=n=>`<ul class="asks">${n.map(e=>`<li>${ce(vn(e))}</li>`).join("")}</ul>`;async function Qn(n){n==="parent"?await nt(`<div class="cover"><div class="big">🙈</div><h2>Pass the device to ${ce(vt())}</h2>
      <p>Detective ${ce(Bn())}, no peeking! The next card is only for ${ce(vt())}.</p>${je("ok",`I'm ${ce(vt())}, show me`,"blue")}</div>`,{cls:"solid"}):await nt(`<div class="cover"><div class="big">🔄</div><h2>Pass back to Detective ${ce(Bn())}</h2>
      <p>${ce(vt())}, you can give the device back now.</p>${je("ok",`I'm Detective ${ce(Bn())}!`)}</div>`,{cls:"solid kid"})}function Ts(n){const e=st("toast");e.textContent=n,e.classList.remove("hidden"),e.style.animation="none",e.offsetWidth,e.style.animation="",clearTimeout(Ts.timer),Ts.timer=setTimeout(()=>e.classList.add("hidden"),2600)}function Gi(n){De.convos++;const e=De.current;e&&(e.convos=(e.convos||0)+1),De.log.push({kind:n,case:e?.id||null,at:Date.now()}),De.log.length>300&&De.log.shift(),Mn(),On.talk(),Ts(`💬 Conversation #${De.convos}. Lovely talking!`)}const it={lines:[],i:0,shown:0,open:!1,resolve:null,acc:0};function fo(n,e,t,i="happy"){return new Promise(s=>{Object.assign(it,{lines:t.map(vn),i:0,shown:0,open:!0,resolve:s,acc:0}),st("dlgName").textContent=n,st("dlgFace").src=ws(_n(e,{mood:i})),st("dialog").classList.remove("hidden"),On.open()})}function po(){if(!it.open)return;const n=it.lines[it.i];if(it.shown<n.length){it.shown=n.length,st("dlgText").textContent=n;return}if(++it.i<it.lines.length){it.shown=0,st("dlgText").textContent="";return}it.open=!1,st("dialog").classList.add("hidden");const e=it.resolve;it.resolve=null,e?.()}st("dialog").addEventListener("click",()=>{Mr(),po()});window.addEventListener("keydown",n=>{(n.key===" "||n.key==="Enter")&&it.open&&(n.preventDefault(),po())});const yr=new Jm({canvas:st("scene"),antialias:!0,alpha:!0});yr.setPixelRatio(Math.min(window.devicePixelRatio,2));yr.outputColorSpace=Vt;const yt=await Jg(yr);function Tc(){yr.setSize(window.innerWidth,window.innerHeight,!1),yt.resize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",Tc);Tc();let $e=null,zl=performance.now();function Ac(n){const e=Math.max(0,Math.min(.05,(n-zl)/1e3))*Mi;if(zl=n,yt.update(e),it.open){const t=it.lines[it.i];for(it.acc+=e*45;it.acc>=1&&it.shown<t.length;)it.shown++,it.acc--,it.shown%3===0&&On.blip();st("dlgText").textContent=t.slice(0,it.shown)}t0(),yt.render(),requestAnimationFrame(Ac)}const $a=new Map;function t0(){const n=st("tags"),e=$e?.investigating&&!it.open&&!ts.firstElementChild;if(n.classList.toggle("hidden",!e),!e)return;const t=[],i=yt.tags().sort((s,r)=>r.y-s.y);for(const s of i){const r=$e.c.hotspots.find(v=>v.id===s.id);if(!r)continue;let a=$a.get(s.id);a||(a=document.createElement("button"),a.className="tag",a.dataset.hot=s.id,a.addEventListener("click",v=>{v.stopPropagation(),Mr(),go(s.id)}),n.appendChild(a),$a.set(s.id,a));const o=$e.found.has(r.clue.id),l=`${o?"✓":r.kind==="person"?"💬":"🔍"} ${ce(r.label)}`;a.innerHTML!==l&&(a.innerHTML=l),a.classList.toggle("done",o),a.classList.toggle("obj",r.kind!=="person");const c=a.offsetWidth||120,h=a.offsetHeight||40,f=c/2+6,u=window.innerWidth,p=Math.max(f,Math.min(u-f,s.x));let g=s.y;for(let v=0;v<6;v++){const m=t.find(d=>Math.abs(d.x-p)<(d.w+c)/2+4&&Math.abs(d.y-g)<h+4);if(!m)break;g=m.y-h-6}g=Math.max(h+60,g),t.push({x:p,y:g,w:c}),a.style.transform=`translate(${p}px, ${g}px) translate(-50%, -100%)`}}function Ds(){st("tags").innerHTML="",$a.clear()}st("scene").addEventListener("pointerdown",n=>{if(Mr(),!$e?.investigating||it.open||un||ts.firstElementChild)return;const e=yt.pick(n.clientX,n.clientY);e?.hot&&$e.c.hotspots.some(t=>t.id===e.hot)?go(e.hot):e?.floor&&yt.walkTo(e.floor[0],e.floor[1]+.3)});function bi(n){if(st("hud").classList.toggle("hidden",!n),!n||!$e)return;const e=$e.c;st("casePill").innerHTML=`<b>Case ${e.num}</b> ${ce(e.title)}`,st("bookCount").textContent=$e.found.size}const ys=n=>{st("hint").textContent=n,st("hint").classList.toggle("hidden",!n)};st("muteBtn").addEventListener("click",()=>{De.muted=!De.muted,Ec(De.muted),st("muteBtn").textContent=De.muted?"🔇":"🔊",Mn()});st("homeBtn").addEventListener("click",async()=>{if(un||it.open)return;un=!0;const n=await nt(`<div class="card small"><h2>Back to the case board?</h2><p>Your case is saved. You can carry on later.</p>
    <div class="btns">${je("stay","Keep investigating","gold")}${je("go","Case board")}</div></div>`,{cls:"dim"});un=!1,Gt(),n==="go"&&($e=null,Ds(),bi(!1),Yi())});st("bookBtn").addEventListener("click",()=>{!un&&!it.open&&$e&&Rc()});function n0(n,e=!1){const t=e?"button":"div";return`<${t} class="clue ${n.type}" ${e?`data-act="clue:${n.id}"`:""}><span class="cico">${n.icon}</span>
    <span><b>${ce(n.name)}</b><small>${ce(vn(n.text))}</small></span></${t}>`}const i0=n=>n.hotspots.map(e=>e.clue).filter(e=>$e.found.has(e.id));async function Rc(n){un=!0;const e=$e.c,t=i0(e).filter(r=>!n||r.id!==n),i=$e.islamicSeen?`<h3>📖 Islamic evidence</h3>${e.islamic.sources.map(r=>`<div class="clue islamic"><span class="cico">${r.kind==="quran"?"📖":"📜"}</span><span><b>${ce(r.ref)}</b><small>${ce(r.text)}</small></span></div>`).join("")}`:"",s=await nt(`<div class="card book"><div class="ribbon">${n?"Present evidence":"Casebook"}</div>
    ${n?`<p class="lead">Which clue shows that the statement doesn't add up?</p>`:""}
    <div class="clues">${t.map(r=>n0(r,!!n)).join("")||"<p>No clues yet. Tap people and 🔍 things in the room!</p>"}</div>
    ${n?"":i}
    <div class="btns">${je("close",n?"Back":"Close","gold")}</div></div>`,{cls:"dim"});return un=!1,Gt(),s.startsWith("clue:")?s.slice(5):null}async function mo(){$e=null,bi(!1),Ds(),await yt.load("yard",{props:[],cast:[],hotspots:[]},Is());const n=!!De.setup;if(await nt(`<div class="card title">
      <div class="brand">Family Deen</div>
      <h1><span>Muslim</span> Detective</h1>
      <p class="tag-line">A detective team: one child, one grown-up.<br>Solve gentle mysteries, talk it through, learn from the Qur'an and Sunnah.</p>
      <div class="btns col">${je("play",n?"Continue":"Start a case")}${je("guide","👤 Grown-up guide","blue")}</div>
    </div>`,{cls:"clear"})==="guide")return await Cc(),mo();n||await Pc(),Yi()}async function Cc(){await nt(Ms("How Muslim Detective works",`
    <p>You are the detective's partner. <b>The game does not replace you as the teacher</b>; it gives you moments to teach.</p>
    <ol class="steps">
      <li><b>Case & investigation:</b> your child taps people and objects to collect clues.</li>
      <li><b>Huddles:</b> the screen stops. You get a private card with a question to ask.</li>
      <li><b>Islamic evidence:</b> you get an ayah or hadith first, then reveal and explain it.</li>
      <li><b>Decision & "Why?":</b> your child chooses, then explains out loud to you.</li>
      <li><b>Consequences:</b> you both watch what happens next, and what could have happened.</li>
    </ol>
    <p>Blue cards with <b>👤 For ${ce(vt())}</b> are for you. When you see "Pass the device", hand it over. There are no "wrong" screens: gentle nudges only.</p>
    <p class="small">One case takes about 10–20 minutes. Progress is counted in <b>conversations had</b>, not points. The Qur'an meanings are from Sahih International; please check any source you are unsure about with a trusted teacher.</p>`,je("ok","Got it")),{cls:"dim"})}async function Pc(){let n=De.setup?.detective||"girl",e=De.setup?.parent||"Baba",t=De.setup?.name||"";const i=()=>`<div class="card setup"><div class="ribbon">Your detective team</div>
    <h3>Who is the detective?</h3>
    <div class="pick">
      <button class="who ${n==="girl"?"on":""}" data-act="det:girl"><img src="${ws(_n(mr.detectiveGirl))}" alt=""><b>Girl detective</b></button>
      <button class="who ${n==="boy"?"on":""}" data-act="det:boy"><img src="${ws(_n(mr.detectiveBoy))}" alt=""><b>Boy detective</b></button>
    </div>
    <label class="field">Detective name <input id="nameIn" maxlength="14" placeholder="${n==="boy"?"Idris":"Noor"}" value="${ce(t)}"></label>
    <h3>Who is the grown-up partner?</h3>
    <div class="chips">${["Baba","Mama","Nenek","Atuk"].map(s=>`<button class="chip ${e===s?"on":""}" data-act="par:${s}">${s}</button>`).join("")}
      <input id="parIn" class="chip-in" maxlength="12" placeholder="Other…" value="${["Baba","Mama","Nenek","Atuk"].includes(e)?"":ce(e)}"></div>
    <div class="btns">${je("go","Open the case board")}</div></div>`;for(;;){const s=await nt(i(),{cls:"dim"});t=st("nameIn")?.value.trim()||t;const r=st("parIn")?.value.trim();if(r&&(e=r),s.startsWith("det:")){n=s.slice(4);continue}if(s.startsWith("par:")){e=s.slice(4),st("parIn")&&(st("parIn").value="");continue}if(s==="go")break}De.setup={detective:n,parent:e,name:t||(n==="boy"?"Idris":"Noor")},Mn()}async function Yi(){$e=null,bi(!1),Ds(),Gt(),await yt.load("yard",{props:[],cast:[],hotspots:[]},Is());const n=ms.filter(i=>De.cases[i.id]?.done).length,e=i=>{const s=ms.filter(a=>a.category===i.id).map(a=>{const o=De.cases[a.id],l=De.current?.id===a.id;return`<button class="casecard ${o?.done?"solved":""}" data-act="case:${a.id}">
        <span class="pin"></span><small>Case ${a.num}</small><b>${ce(a.title)}</b>
        <em>${l?"▶ Resume":""}${l&&o?.done?" · ":""}${o?.done?`${a.badge.icon} ${ce(a.badge.name)}`:l?"":"New case"}</em></button>`}),r=Qg.filter(a=>a.category===i.id).map(a=>`<div class="casecard locked"><small>🔒 Coming soon</small><b>${ce(a.title)}</b></div>`);return`<div class="catcol"><h3>${i.icon} ${i.name}</h3>${s.join("")}${r.join("")}</div>`},t=await nt(`<div class="card boardcard"><div class="ribbon">Case Board</div>
    <div class="stats"><span>💬 <b>${De.convos}</b> conversations had</span><span>🏅 <b>${n}</b> / ${ms.length} detective badges</span>
      <span class="team">🕵️ ${ce(Bn())} &amp; 👤 ${ce(vt())}</span></div>
    <div class="cats">${bc.map(e).join("")}</div>
    <div class="btns">${je("team","Change team","gold")}${je("guide","👤 Grown-up guide","blue")}${je("reset","Reset","ghost")}</div></div>`,{cls:"dim board"});if(t==="team")return await Pc(),Yi();if(t==="guide")return await Cc(),Yi();if(t==="reset")return await nt(`<div class="card small"><h2>Start over?</h2><p>This clears badges and conversations on this device.</p><div class="btns">${je("no","Keep my progress","gold")}${je("yes","Clear it")}</div></div>`,{cls:"dim"})==="yes"?(De=Wa(),Mn(),mo()):Yi();t.startsWith("case:")&&s0(ms.find(i=>i.id===t.slice(5)))}const zi=["brief","investigate","contradiction","islamic","discuss","decision","chain","resolution","apply"],Ic=n=>{De.current.step=n,De.current.found=[...$e.found],Mn()},ur=(n,e)=>n.cast.find(t=>t.id===e),gs=(n,e,t,i)=>{const s=ur(n,e);yt.focus(e);const r=i||yt.people[e]?.mood||"happy";return fo(s.name,s.look,t,r).then(()=>yt.focus(null))},Hl=n=>fo(`Detective ${Bn()}`,Is(),n);async function s0(n){Gt();const e=De.current?.id===n.id?De.current:null;De.current=e||{id:n.id,step:"brief",found:[],convos:0,huddled:!1},Mn(),$e={c:n,found:new Set(De.current.found),investigating:!1,islamicSeen:zi.indexOf(De.current.step)>zi.indexOf("islamic")},await yt.load(n.scene,n,Is()),Ds(),bi(!0);let t=zi.indexOf(De.current.step);for(e&&t>0&&Ts("Welcome back, detectives! Picking up where you left off.");t<zi.length;t++)if(!$e||$e.c!==n||(Ic(zi[t]),await r0[zi[t]](n)===!1))return}const r0={async brief(n){ys("");const e=bc.find(t=>t.id===n.category);return await nt(`<div class="card casefile"><div class="ribbon">Case ${n.num}</div>
      <div class="stamp">${e.icon} ${e.name}</div>
      <h1>${ce(n.title)}</h1><p class="lead">A new mystery for Detective ${ce(Bn())} and ${ce(vt())}.</p>
      <p class="theme">Today's big idea: <b>${ce(n.theme)}</b></p>
      <div class="btns">${je("go","Open the case")}</div></div>`,{cls:"dim"}),Gt(),await gs(n,n.brief.from,n.brief.lines),!0},async investigate(n){return $e.found.size>=n.hotspots.length||($e.investigating=!0,bi(!0),ys("Tap a 💬 person to interview them, or a 🔍 thing to inspect it."),await new Promise(e=>{$e.doneInvestigating=e}),$e.investigating=!1,ys(""),await nt(`<div class="card small"><div class="big">🗂️</div><h2>All clues found!</h2>
      <p>Look through your casebook. Does somebody's story <b>not add up</b>?</p>${je("go","Let's find out")}</div>`,{cls:"dim"}),Gt()),!0},async contradiction(n){const e=n.contradiction,t=ur(n,e.who);let i="";for(;;){const s=await nt(`<div class="card court">
        <div class="ribbon">Hmm, wait a moment…</div>
        <div class="suspect"><img src="${ws(_n(t.look,{mood:"happy"}))}" alt=""><div class="bubble"><b>${ce(t.name)} said:</b>“${ce(vn(e.statement))}”</div></div>
        ${i?`<p class="note">${i}</p>`:`<p class="lead">Can you find a clue that doesn't match this?</p>`}
        <div class="btns">${je("press","🗣️ Press: ask more","gold")}${je("present","📂 Present evidence")}${je("hint",`🙋 Ask ${ce(vt())} for a hint`,"blue")}</div></div>`,{cls:"dim"});if(Gt(),s==="press"){await gs(n,e.who,e.press),i="Still the same story. Maybe a clue can help?";continue}if(s==="hint"){await Qn("parent"),await nt(Ms("A gentle hint",`<p>Your detective is looking for the clue that contradicts ${ce(t.name)}.</p><h4>You could ask:</h4>${hr(e.hint.ask)}<p class="tip">💡 ${ce(vn(e.hint.tip))}</p>`,je("ok","Done, pass it back"))),await Qn("child"),Gt(),i=`What did ${ce(vt())} say? Take another look at your casebook.`;continue}const r=await Rc(e.clue);if(!r)continue;if(e.answer.includes(r))break;On.soft();const a=n.hotspots.find(o=>o.clue.id===r)?.clue;i=`Hmm, “${ce(a?.name||"")}” doesn't quite clash with what ${ce(t.name)} said. Try another clue, or ask ${ce(vt())} for a hint!`}return On.aha(),await nt(`<div class="aha" data-act="ok"><div class="stampbig">It doesn't add up!</div></div>`,{cls:"clear",onRender:()=>setTimeout(()=>ts.querySelector(".aha")?.click(),1400/Mi)}).catch(()=>{}),Gt(),await Hl([e.aha]),await yt.setMood(e.who,"worried"),await gs(n,e.who,e.confession,"worried"),!0},async islamic(n){const e=n.islamic;return await nt(`<div class="card stop"><div class="big">✋</div><h2>Stop! Look up at ${ce(vt())}.</h2>
      <p>${ce(vt())} has some <b>Islamic evidence</b> for this case. It's a secret until they're ready!</p>${je("go",`Pass to ${ce(vt())}`)}</div>`,{cls:"dim"}),await Qn("parent"),await nt(Ms(`📖 Islamic Evidence Card: ${ce(e.title)}`,`
      ${e.sources.map(i=>`<blockquote><cite>${i.kind==="quran"?"📖 Qur'an":"📜 Hadith"} · ${ce(i.ref)}</cite>“${ce(i.text)}”</blockquote>`).join("")}
      <h4>How you might explain it</h4><p>${ce(vn(e.explain))}</p>
      <p class="tip">📖 ${ce(e.open)}</p>
      <h4>Questions to ask</h4>${hr(e.ask)}
      ${e.note?`<p class="small">ℹ️ ${ce(e.note)}</p>`:""}`,je("ok","I'm ready: reveal it to my detective"))),await Qn("child"),$e.islamicSeen=!0,await nt(`<div class="card reveal"><div class="ribbon gold">Islamic evidence unlocked!</div>
      <p class="lead">${ce(vt())} will read this with you and explain it.</p>
      ${e.sources.map(i=>`<blockquote class="kid"><cite>${i.kind==="quran"?"📖 Qur'an":"📜 Hadith of the Prophet Muhammad ﷺ"} · ${ce(i.ref)}</cite>“${ce(i.text)}”</blockquote>`).join("")}
      <div class="btns">${je("talked","💬 We talked about it ✓")}</div></div>`,{cls:"dim"})==="talked"&&Gi("islamic"),Gt(),!0},async discuss(n){return await nt(`<div class="card talkcard"><div class="big">🗣️</div><div class="ribbon">Talk together</div>
      <h2>${ce(vn(n.discuss.prompt))}</h2><p class="small">${ce(vn(n.discuss.nudge))}</p>
      <div class="btns">${je("ok","💬 We talked ✓")}</div></div>`,{cls:"dim"}),Gi("discuss"),Gt(),!0},async decision(n){const e=n.decision,t=ur(n,e.who),s=(await nt(`<div class="card decide"><div class="ribbon">Your decision, Detective</div>
      <div class="suspect small"><img src="${ws(_n(t.look,{mood:"worried"}))}" alt=""><h2>${ce(e.question)}</h2></div>
      <div class="options">${e.options.map(l=>`<button class="opt" data-act="opt:${l.id}"><span>${l.icon}</span>${ce(l.text)}</button>`).join("")}</div></div>`,{cls:"dim"})).slice(4);De.current.decision=s,Mn();const r=e.options.find(l=>l.id===s);await nt(`<div class="card why"><div class="big">🤔</div><div class="ribbon">Why?</div>
      <p class="chosen">You chose: <b>${r.icon} ${ce(r.text)}</b></p>
      <h2>Tell ${ce(vt())} out loud: <em>why</em> is that the best thing to do?</h2>
      <p class="small">Look up from the screen and explain. Take your time!</p>
      <div class="btns">${je("ok","🗣️ I explained ✓")}</div></div>`,{cls:"dim"}),Gi("why"),await Qn("parent");const a=e.options.find(l=>l.id===e.best),o=s===e.best?'<p class="tip">🌟 Your detective chose the path the lesson points to. Ask them what might make it <b>hard</b> to do in real life.</p>':`<p class="tip">💛 Your detective chose a different path. Please don't say "wrong". Say "Let's see what happens next…" The consequence chain will show it, and then you can compare it with: <b>${ce(a.text)}</b></p>`;return await nt(Ms(ce(n.principle.title),`<p>Your detective chose: <b>${r.icon} ${ce(r.text)}</b></p>
      <h4>Share the principle in your own words</h4>${hr(n.principle.points)}${o}`,je("ok","Reveal the principle"))),await Qn("child"),await nt(`<div class="card reveal"><div class="ribbon gold">${ce(vt())} shares the principle</div>
      <ul class="principle">${n.principle.points.map(l=>`<li>${ce(l)}</li>`).join("")}</ul>
      <div class="btns">${je("ok","What happens next? ▸")}</div></div>`,{cls:"dim"}),Gt(),!0},async chain(n){const e=n.decision,t=ur(n,e.who),i=e.options.find(o=>o.id===De.current.decision)||e.options[0],s=i.id===e.best?e.options.find(o=>o.tone==="sad"):e.options.find(o=>o.id===e.best),r=(o,l)=>`<div class="card chaincard ${o.tone}"><div class="ribbon">${l}</div>
      <p class="lead">${o.icon} ${ce(o.text)}</p>
      <div class="chain">${o.chain.map((c,h)=>`<div class="node" style="animation-delay:${(.2+h*.7)/Mi}s"><span>${c.icon}</span><p>${ce(c.text)}</p></div>`).join('<i class="arrow"></i>')}</div>
      <div class="btns late" style="animation-delay:${(.4+o.chain.length*.7)/Mi}s">${je("next",o===i?`What if ${ce(t.name)} chose differently? ▸`:"Compare them")}</div></div>`,a=o=>o.chain.forEach((l,c)=>setTimeout(()=>On.chain(c),(.2+c*.7)*1e3/Mi));return a(i),await nt(r(i,`If ${t.name} chooses this…`),{cls:"dim"}),a(s),await nt(r(s,`What if… ${t.name} chose this instead?`),{cls:"dim"}),await nt(`<div class="card talkcard"><div class="big">⚖️</div><div class="ribbon">Talk together</div>
      <h2>Which ending would you want, if you were ${ce(t.name)}? Why?</h2>
      <div class="twin"><div class="mini ${i.tone}">${i.icon} ${ce(i.chain.at(-1).text)}</div><div class="mini ${s.tone}">${s.icon} ${ce(s.chain.at(-1).text)}</div></div>
      <div class="btns">${je("ok","💬 We talked ✓")}</div></div>`,{cls:"dim"}),Gi("compare"),Gt(),!0},async resolution(n){const e=n.decision;await yt.setMood(e.who,"happy");for(const t of n.cast)t.mood==="sad"&&await yt.setMood(t.id,"happy");return await Hl(["Here is how the case ended…"]),await gs(n,e.who,n.resolution,"happy"),yt.celebrate(),On.badge(),De.cases[n.id]={...De.cases[n.id]||{},done:!0,decision:De.current.decision,convos:(De.cases[n.id]?.convos||0)+(De.current.convos||0),at:Date.now()},Mn(),await nt(`<div class="card solved"><div class="ribbon gold">Case solved!</div>
      <div class="badge"><span>${n.badge.icon}</span></div>
      <h2>${ce(n.badge.name)} badge</h2>
      <p>Detective ${ce(Bn())} and ${ce(vt())} had <b>${De.current.convos||0} conversations</b> on this case.</p>
      <div class="btns">${je("ok","One last thing ▸")}</div></div>`,{cls:"dim"}),!0},async apply(n){return await nt(`<div class="card talkcard apply"><div class="big">🏡</div><div class="ribbon">${ce(n.apply.title)}</div>
      <p class="lead">Pick one idea together (or make your own):</p>
      <ul class="principle">${n.apply.ideas.map(e=>`<li>${ce(e)}</li>`).join("")}</ul>
      <div class="btns">${je("ok","🤝 We made a plan ✓")}</div></div>`,{cls:"dim"}),Gi("apply"),De.current=null,Mn(),$e=null,Ds(),bi(!1),Yi(),!1}};async function go(n){if(un||it.open||!$e?.investigating)return;const e=$e.c,t=e.hotspots.find(i=>i.id===n);if(t){if(un=!0,ys(""),await yt.approach(n),t.kind==="person"?await gs(e,t.who,t.lines):(yt.focus(n,.8),await fo(`Detective ${Bn()}`,Is(),t.lines),yt.focus(null)),!$e){un=!1;return}if(!$e.found.has(t.clue.id)){$e.found.add(t.clue.id),Ic("investigate"),yt.sparkle(n),On.clue(),bi(!0),Ts(`📒 Added to casebook: ${t.clue.name}`);const i=st("bookBtn");i.classList.remove("bump"),i.offsetWidth,i.classList.add("bump"),!De.current.huddled&&$e.found.size>=e.huddle.after&&await a0(e)}un=!1,$e.found.size>=e.hotspots.length?$e.doneInvestigating?.():ys("Tap a 💬 person to interview them, or a 🔍 thing to inspect it.")}}async function a0(n){await e0(500),await nt(`<div class="card stop"><div class="big">✋</div><div class="ribbon">Detective huddle!</div>
    <h2>${ce(vn(n.huddle.child))}</h2><p>Stop and look up at ${ce(vt())}.</p>${je("go",`Pass to ${ce(vt())}`)}</div>`,{cls:"dim"}),await Qn("parent"),await nt(Ms("Huddle guidance",`<p>Your detective has found ${$e.found.size} clues. Pause here and talk.</p>
    <h4>Try asking</h4>${hr(n.huddle.parent.ask)}<p class="tip">💡 ${ce(vn(n.huddle.parent.tip))}</p>`,je("ok","We talked ✓, pass it back"))),Gi("huddle"),await Qn("child"),Gt(),De.current.huddled=!0,Mn()}Ec(De.muted);st("muteBtn").textContent=De.muted?"🔇":"🔊";requestAnimationFrame(Ac);window.game={get save(){return De},get active(){return $e},world:yt,advance:po,setSpeed:n=>{Mi=n},get dialogOpen(){return it.open},interact:go,cases:ms,ready:!0};mo();
