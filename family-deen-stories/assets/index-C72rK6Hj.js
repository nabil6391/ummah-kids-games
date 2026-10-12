(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const go="170",Sh=0,Zo=1,bh=2,vc=1,wh=2,bn=3,qn=0,zt=1,At=2,Wn=0,Wi=1,Sa=2,Jo=3,jo=4,Eh=5,ri=100,Th=101,Ah=102,Rh=103,Ch=104,Ph=200,Lh=201,Ih=202,Dh=203,ba=204,wa=205,Uh=206,Nh=207,Fh=208,Oh=209,kh=210,Bh=211,zh=212,Hh=213,Gh=214,Ea=0,Ta=1,Aa=2,Yi=3,Ra=4,Ca=5,Pa=6,La=7,xc=0,Vh=1,Wh=2,Xn=0,Xh=1,$h=2,Yh=3,qh=4,Zh=5,Jh=6,jh=7,yc=300,qi=301,Zi=302,Ia=303,Da=304,wr=306,_r=1e3,oi=1001,Ua=1002,Rt=1003,Kh=1004,Ds=1005,fn=1006,Nr=1007,li=1008,Cn=1009,Mc=1010,Sc=1011,ws=1012,_o=1013,hi=1014,wn=1015,ui=1016,vo=1017,xo=1018,Ji=1020,bc=35902,wc=1021,Ec=1022,nn=1023,Tc=1024,Ac=1025,Xi=1026,ji=1027,Er=1028,yo=1029,Rc=1030,Mo=1031,So=1033,ur=33776,fr=33777,dr=33778,pr=33779,Na=35840,Fa=35841,Oa=35842,ka=35843,Ba=36196,za=37492,Ha=37496,Ga=37808,Va=37809,Wa=37810,Xa=37811,$a=37812,Ya=37813,qa=37814,Za=37815,Ja=37816,ja=37817,Ka=37818,Qa=37819,eo=37820,to=37821,mr=36492,no=36494,io=36495,Cc=36283,so=36284,ro=36285,ao=36286,Qh=3200,eu=3201,Pc=0,tu=1,Gn="",kt="srgb",es="srgb-linear",Tr="linear",ot="srgb",xi=7680,Ko=519,nu=512,iu=513,su=514,Lc=515,ru=516,au=517,ou=518,lu=519,Qo=35044,el="300 es",En=2e3,vr=2001;class ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tl=1234567;const xs=Math.PI/180,Es=180/Math.PI;function mi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function Tt(n,e,t){return Math.max(e,Math.min(t,n))}function bo(n,e){return(n%e+e)%e}function cu(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function hu(n,e,t){return n!==e?(t-n)/(e-n):0}function ys(n,e,t){return(1-t)*n+t*e}function uu(n,e,t,i){return ys(n,e,1-Math.exp(-t*i))}function fu(n,e=1){return e-Math.abs(bo(n,e*2)-e)}function du(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function pu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function mu(n,e){return n+Math.floor(Math.random()*(e-n+1))}function gu(n,e){return n+Math.random()*(e-n)}function _u(n){return n*(.5-Math.random())}function vu(n){n!==void 0&&(tl=n);let e=tl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xu(n){return n*xs}function yu(n){return n*Es}function Mu(n){return(n&n-1)===0&&n!==0}function Su(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function bu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function wu(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),f=a((e-i)/2),d=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*u,l*f,o*c);break;case"YZY":n.set(l*f,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*f,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*d,o*c);break;case"YXY":n.set(l*d,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Eu={DEG2RAD:xs,RAD2DEG:Es,generateUUID:mi,clamp:Tt,euclideanModulo:bo,mapLinear:cu,inverseLerp:hu,lerp:ys,damp:uu,pingpong:fu,smoothstep:du,smootherstep:pu,randInt:mu,randFloat:gu,randFloatSpread:_u,seededRandom:vu,degToRad:xu,radToDeg:yu,isPowerOfTwo:Mu,ceilPowerOfTwo:Su,floorPowerOfTwo:bu,setQuaternionFromProperEuler:wu,normalize:Nt,denormalize:zi};class ge{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,i,s,r,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],v=s[0],m=s[3],p=s[6],S=s[1],x=s[4],_=s[7],P=s[2],A=s[5],T=s[8];return r[0]=a*v+o*S+l*P,r[3]=a*m+o*x+l*A,r[6]=a*p+o*_+l*T,r[1]=c*v+h*S+u*P,r[4]=c*m+h*x+u*A,r[7]=c*p+h*_+u*T,r[2]=f*v+d*S+g*P,r[5]=f*m+d*x+g*A,r[8]=f*p+d*_+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=t*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Fr.makeScale(e,t)),this}rotate(e){return this.premultiply(Fr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fr=new Ye;function Ic(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Tu(){const n=xr("canvas");return n.style.display="block",n}const nl={};function ms(n){n in nl||(nl[n]=!0,console.warn(n))}function Au(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Ru(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Cu(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ke={enabled:!0,workingColorSpace:es,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ot&&(n.r=An(n.r),n.g=An(n.g),n.b=An(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ot&&(n.r=$i(n.r),n.g=$i(n.g),n.b=$i(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Gn?Tr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function An(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $i(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const il=[.64,.33,.3,.6,.15,.06],sl=[.2126,.7152,.0722],rl=[.3127,.329],al=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ol=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke.define({[es]:{primaries:il,whitePoint:rl,transfer:Tr,toXYZ:al,fromXYZ:ol,luminanceCoefficients:sl,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:il,whitePoint:rl,transfer:ot,toXYZ:al,fromXYZ:ol,luminanceCoefficients:sl,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}});let yi;class Pu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{yi===void 0&&(yi=xr("canvas")),yi.width=e.width,yi.height=e.height;const i=yi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=An(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(An(t[i]/255)*255):t[i]=An(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lu=0;class Dc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Or(s[a].image)):r.push(Or(s[a]))}else r=Or(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Or(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Iu=0;class Ut extends ts{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=oi,s=oi,r=fn,a=li,o=nn,l=Cn,c=Ut.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=mi(),this.name="",this.source=new Dc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _r:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _r:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=yc;Ut.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,i=0,s=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,_=(d+1)/2,P=(p+1)/2,A=(h+f)/4,T=(u+v)/4,C=(g+m)/4;return x>_&&x>P?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=A/i,r=T/i):_>P?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=A/s,r=C/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=T/r,s=C/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-v)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Du extends ts{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ut(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Dc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends Du{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Uc extends Ut{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uu extends Ut{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const f=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||c!==d||h!==g){let m=1-o;const p=l*f+c*d+h*g+u*v,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const P=Math.sqrt(x),A=Math.atan2(P,p*S);m=Math.sin(m*A)/P,o=Math.sin(o*A)/P}const _=o*S;if(l=l*m+f*_,c=c*m+d*_,h=h*m+g*_,u=u*m+v*_,m===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>u){const d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-i-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ll.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ll.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return kr.copy(this).projectOnVector(e),this.sub(kr)}reflect(e){return this.sub(kr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kr=new I,ll=new gi;class ns{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jt):jt.fromBufferAttribute(r,a),jt.applyMatrix4(e.matrixWorld),this.expandByPoint(jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Us.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Us.copy(i.boundingBox)),Us.applyMatrix4(e.matrixWorld),this.union(Us)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(as),Ns.subVectors(this.max,as),Mi.subVectors(e.a,as),Si.subVectors(e.b,as),bi.subVectors(e.c,as),Un.subVectors(Si,Mi),Nn.subVectors(bi,Si),Jn.subVectors(Mi,bi);let t=[0,-Un.z,Un.y,0,-Nn.z,Nn.y,0,-Jn.z,Jn.y,Un.z,0,-Un.x,Nn.z,0,-Nn.x,Jn.z,0,-Jn.x,-Un.y,Un.x,0,-Nn.y,Nn.x,0,-Jn.y,Jn.x,0];return!Br(t,Mi,Si,bi,Ns)||(t=[1,0,0,0,1,0,0,0,1],!Br(t,Mi,Si,bi,Ns))?!1:(Fs.crossVectors(Un,Nn),t=[Fs.x,Fs.y,Fs.z],Br(t,Mi,Si,bi,Ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gn=[new I,new I,new I,new I,new I,new I,new I,new I],jt=new I,Us=new ns,Mi=new I,Si=new I,bi=new I,Un=new I,Nn=new I,Jn=new I,as=new I,Ns=new I,Fs=new I,jn=new I;function Br(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){jn.fromArray(n,r);const o=s.x*Math.abs(jn.x)+s.y*Math.abs(jn.y)+s.z*Math.abs(jn.z),l=e.dot(jn),c=t.dot(jn),h=i.dot(jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Nu=new ns,os=new I,zr=new I;class wo{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Nu.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;os.subVectors(e,this.center);const t=os.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(os,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(os.copy(e.center).add(zr)),this.expandByPoint(os.copy(e.center).sub(zr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new I,Hr=new I,Os=new I,Fn=new I,Gr=new I,ks=new I,Vr=new I;class Fu{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Hr.copy(e).add(t).multiplyScalar(.5),Os.copy(t).sub(e).normalize(),Fn.copy(this.origin).sub(Hr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Os),o=Fn.dot(this.direction),l=-Fn.dot(Os),c=Fn.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Hr).addScaledVector(Os,f),d}intersectSphere(e,t){_n.subVectors(e.center,this.origin);const i=_n.dot(this.direction),s=_n.dot(_n)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,i,s,r){Gr.subVectors(t,e),ks.subVectors(i,e),Vr.crossVectors(Gr,ks);let a=this.direction.dot(Vr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fn.subVectors(this.origin,e);const l=o*this.direction.dot(ks.crossVectors(Fn,ks));if(l<0)return null;const c=o*this.direction.dot(Gr.cross(Fn));if(c<0||l+c>a)return null;const h=-o*Fn.dot(Vr);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,i,s,r,a,o,l,c,h,u,f,d,g,v,m){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,f,d,g,v,m)}set(e,t,i,s,r,a,o,l,c,h,u,f,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/wi.setFromMatrixColumn(e,0).length(),r=1/wi.setFromMatrixColumn(e,1).length(),a=1/wi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,d=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,g=c*h,v=c*u;t[0]=f+v*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,g=c*h,v=c*u;t[0]=f-v*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,d=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ou,e,ku)}lookAt(e,t,i){const s=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),On.crossVectors(i,Gt),On.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),On.crossVectors(i,Gt)),On.normalize(),Bs.crossVectors(Gt,On),s[0]=On.x,s[4]=Bs.x,s[8]=Gt.x,s[1]=On.y,s[5]=Bs.y,s[9]=Gt.y,s[2]=On.z,s[6]=Bs.z,s[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],S=i[3],x=i[7],_=i[11],P=i[15],A=s[0],T=s[4],C=s[8],w=s[12],y=s[1],L=s[5],X=s[9],z=s[13],j=s[2],Q=s[6],J=s[10],ne=s[14],H=s[3],xe=s[7],F=s[11],G=s[15];return r[0]=a*A+o*y+l*j+c*H,r[4]=a*T+o*L+l*Q+c*xe,r[8]=a*C+o*X+l*J+c*F,r[12]=a*w+o*z+l*ne+c*G,r[1]=h*A+u*y+f*j+d*H,r[5]=h*T+u*L+f*Q+d*xe,r[9]=h*C+u*X+f*J+d*F,r[13]=h*w+u*z+f*ne+d*G,r[2]=g*A+v*y+m*j+p*H,r[6]=g*T+v*L+m*Q+p*xe,r[10]=g*C+v*X+m*J+p*F,r[14]=g*w+v*z+m*ne+p*G,r[3]=S*A+x*y+_*j+P*H,r[7]=S*T+x*L+_*Q+P*xe,r[11]=S*C+x*X+_*J+P*F,r[15]=S*w+x*z+_*ne+P*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*f+i*c*f+s*o*d-i*l*d)+v*(+t*l*d-t*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+m*(+t*c*u-t*o*d-r*a*u+i*a*d+r*o*h-i*c*h)+p*(-s*o*h-t*l*u+t*o*f+s*a*u-i*a*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],S=u*m*c-v*f*c+v*l*d-o*m*d-u*l*p+o*f*p,x=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,_=h*v*c-g*u*c+g*o*d-a*v*d-h*o*p+a*u*p,P=g*u*l-h*v*l-g*o*f+a*v*f+h*o*m-a*u*m,A=t*S+i*x+s*_+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=S*T,e[1]=(v*f*r-u*m*r-v*s*d+i*m*d+u*s*p-i*f*p)*T,e[2]=(o*m*r-v*l*r+v*s*c-i*m*c-o*s*p+i*l*p)*T,e[3]=(u*l*r-o*f*r-u*s*c+i*f*c+o*s*d-i*l*d)*T,e[4]=x*T,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*T,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*T,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*d+t*l*d)*T,e[8]=_*T,e[9]=(g*u*r-h*v*r-g*i*d+t*v*d+h*i*p-t*u*p)*T,e[10]=(a*v*r-g*o*r+g*i*c-t*v*c-a*i*p+t*o*p)*T,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*d-t*o*d)*T,e[12]=P*T,e[13]=(h*v*s-g*u*s+g*i*f-t*v*f-h*i*m+t*u*m)*T,e[14]=(g*o*s-a*v*s-g*i*l+t*v*l+a*i*m-t*o*m)*T,e[15]=(a*u*s-h*o*s+h*i*l-t*u*l-a*i*f+t*o*f)*T,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,v=a*h,m=a*u,p=o*u,S=l*c,x=l*h,_=l*u,P=i.x,A=i.y,T=i.z;return s[0]=(1-(v+p))*P,s[1]=(d+_)*P,s[2]=(g-x)*P,s[3]=0,s[4]=(d-_)*A,s[5]=(1-(f+p))*A,s[6]=(m+S)*A,s[7]=0,s[8]=(g+x)*T,s[9]=(m-S)*T,s[10]=(1-(f+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=wi.set(s[0],s[1],s[2]).length();const a=wi.set(s[4],s[5],s[6]).length(),o=wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Kt.copy(this);const c=1/r,h=1/a,u=1/o;return Kt.elements[0]*=c,Kt.elements[1]*=c,Kt.elements[2]*=c,Kt.elements[4]*=h,Kt.elements[5]*=h,Kt.elements[6]*=h,Kt.elements[8]*=u,Kt.elements[9]*=u,Kt.elements[10]*=u,t.setFromRotationMatrix(Kt),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=En){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s);let d,g;if(o===En)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===vr)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=En){const l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(a-r),f=(t+e)*c,d=(i+s)*h;let g,v;if(o===En)g=(a+r)*u,v=-2*u;else if(o===vr)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const wi=new I,Kt=new dt,Ou=new I(0,0,0),ku=new I(1,1,1),On=new I,Bs=new I,Gt=new I,cl=new dt,hl=new gi;class Ln{constructor(e=0,t=0,i=0,s=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return cl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hl.setFromEuler(this),this.setFromQuaternion(hl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class Nc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bu=0;const ul=new I,Ei=new gi,vn=new dt,zs=new I,ls=new I,zu=new I,Hu=new gi,fl=new I(1,0,0),dl=new I(0,1,0),pl=new I(0,0,1),ml={type:"added"},Gu={type:"removed"},Ti={type:"childadded",child:null},Wr={type:"childremoved",child:null};class Ct extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new I,t=new Ln,i=new gi,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ye}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.premultiply(Ei),this}rotateX(e){return this.rotateOnAxis(fl,e)}rotateY(e){return this.rotateOnAxis(dl,e)}rotateZ(e){return this.rotateOnAxis(pl,e)}translateOnAxis(e,t){return ul.copy(e).applyQuaternion(this.quaternion),this.position.add(ul.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fl,e)}translateY(e){return this.translateOnAxis(dl,e)}translateZ(e){return this.translateOnAxis(pl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zs.copy(e):zs.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(ls,zs,this.up):vn.lookAt(zs,ls,this.up),this.quaternion.setFromRotationMatrix(vn),s&&(vn.extractRotation(s.matrixWorld),Ei.setFromRotationMatrix(vn),this.quaternion.premultiply(Ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ml),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gu),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ml),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,e,zu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,Hu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ct.DEFAULT_UP=new I(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new I,xn=new I,Xr=new I,yn=new I,Ai=new I,Ri=new I,gl=new I,$r=new I,Yr=new I,qr=new I,Zr=new ct,Jr=new ct,jr=new ct;class tn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Qt.subVectors(e,t),s.cross(Qt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Qt.subVectors(s,t),xn.subVectors(i,t),Xr.subVectors(e,t);const a=Qt.dot(Qt),o=Qt.dot(xn),l=Qt.dot(Xr),c=xn.dot(xn),h=xn.dot(Xr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yn.x),l.addScaledVector(a,yn.y),l.addScaledVector(o,yn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Zr.setScalar(0),Jr.setScalar(0),jr.setScalar(0),Zr.fromBufferAttribute(e,t),Jr.fromBufferAttribute(e,i),jr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Zr,r.x),a.addScaledVector(Jr,r.y),a.addScaledVector(jr,r.z),a}static isFrontFacing(e,t,i,s){return Qt.subVectors(i,t),xn.subVectors(e,t),Qt.cross(xn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),Qt.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return tn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Ai.subVectors(s,i),Ri.subVectors(r,i),$r.subVectors(e,i);const l=Ai.dot($r),c=Ri.dot($r);if(l<=0&&c<=0)return t.copy(i);Yr.subVectors(e,s);const h=Ai.dot(Yr),u=Ri.dot(Yr);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Ai,a);qr.subVectors(e,r);const d=Ai.dot(qr),g=Ri.dot(qr);if(g>=0&&d<=g)return t.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ri,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return gl.subVectors(r,s),o=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(gl,o);const p=1/(m+v+f);return a=v*p,o=f*p,t.copy(i).addScaledVector(Ai,a).addScaledVector(Ri,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function Kr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ke.workingColorSpace){if(e=bo(e,1),t=Tt(t,0,1),i=Tt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Kr(a,r,e+1/3),this.g=Kr(a,r,e),this.b=Kr(a,r,e-1/3)}return Ke.toWorkingColorSpace(this,s),this}setStyle(e,t=kt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const i=Fc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return Ke.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Tt(Dt.r*255,0,255))*65536+Math.round(Tt(Dt.g*255,0,255))*256+Math.round(Tt(Dt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Dt.copy(this),t);const i=Dt.r,s=Dt.g,r=Dt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=kt){Ke.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,s=Dt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(Hs);const i=ys(kn.h,Hs.h,t),s=ys(kn.s,Hs.s,t),r=ys(kn.l,Hs.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new je;je.NAMES=Fc;let Vu=0;class Ps extends ts{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=mi(),this.name="",this.blending=Wi,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ba,this.blendDst=wa,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ko,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(i.blending=this.blending),this.side!==qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ba&&(i.blendSrc=this.blendSrc),this.blendDst!==wa&&(i.blendDst=this.blendDst),this.blendEquation!==ri&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ko&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yt extends Ps{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new I,Gs=new ge;class sn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qo,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gs.fromBufferAttribute(this,t),Gs.applyMatrix3(e),this.setXY(t,Gs.x,Gs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=zi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qo&&(e.usage=this.usage),e}}class Oc extends sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class kc extends sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qe extends sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Wu=0;const $t=new dt,Qr=new Ct,Ci=new I,Vt=new ns,cs=new ns,bt=new I;class Pt extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ic(e)?kc:Oc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,i){return $t.makeTranslation(e,t,i),this.applyMatrix4($t),this}scale(e,t,i){return $t.makeScale(e,t,i),this.applyMatrix4($t),this}lookAt(e){return Qr.lookAt(e),Qr.updateMatrix(),this.applyMatrix4(Qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qe(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Vt.setFromBufferAttribute(r),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];cs.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Vt.min,cs.min),Vt.expandByPoint(bt),bt.addVectors(Vt.max,cs.max),Vt.expandByPoint(bt)):(Vt.expandByPoint(cs.min),Vt.expandByPoint(cs.max))}Vt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)bt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(bt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)bt.fromBufferAttribute(o,c),l&&(Ci.fromBufferAttribute(e,c),bt.add(Ci)),s=Math.max(s,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new I,l[C]=new I;const c=new I,h=new I,u=new I,f=new ge,d=new ge,g=new ge,v=new I,m=new I;function p(C,w,y){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,y),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,w),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),o[C].add(v),o[w].add(v),o[y].add(v),l[C].add(m),l[w].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let C=0,w=S.length;C<w;++C){const y=S[C],L=y.start,X=y.count;for(let z=L,j=L+X;z<j;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new I,_=new I,P=new I,A=new I;function T(C){P.fromBufferAttribute(s,C),A.copy(P);const w=o[C];x.copy(w),x.sub(P.multiplyScalar(P.dot(w))).normalize(),_.crossVectors(A,w);const L=_.dot(l[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,L)}for(let C=0,w=S.length;C<w;++C){const y=S[C],L=y.start,X=y.count;for(let z=L,j=L+X;z<j;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new sn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _l=new dt,Kn=new Fu,Vs=new wo,vl=new I,Ws=new I,Xs=new I,$s=new I,ea=new I,Ys=new I,xl=new I,qs=new I;class _t extends Ct{constructor(e=new Pt,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ys.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(ea.fromBufferAttribute(u,e),a?Ys.addScaledVector(ea,h):Ys.addScaledVector(ea.sub(t),h))}t.add(Ys)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vs.copy(i.boundingSphere),Vs.applyMatrix4(r),Kn.copy(e.ray).recast(e.near),!(Vs.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(Vs,vl)===null||Kn.origin.distanceToSquared(vl)>(e.far-e.near)**2))&&(_l.copy(r).invert(),Kn.copy(e.ray).applyMatrix4(_l),!(i.boundingBox!==null&&Kn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Kn)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=S,P=x;_<P;_+=3){const A=o.getX(_),T=o.getX(_+1),C=o.getX(_+2);s=Zs(this,p,e,i,c,h,u,A,T,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const S=o.getX(m),x=o.getX(m+1),_=o.getX(m+2);s=Zs(this,a,e,i,c,h,u,S,x,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=S,P=x;_<P;_+=3){const A=_,T=_+1,C=_+2;s=Zs(this,p,e,i,c,h,u,A,T,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const S=m,x=m+1,_=m+2;s=Zs(this,a,e,i,c,h,u,S,x,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Xu(n,e,t,i,s,r,a,o){let l;if(e.side===zt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===qn,o),l===null)return null;qs.copy(o),qs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(qs);return c<t.near||c>t.far?null:{distance:c,point:qs.clone(),object:n}}function Zs(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Ws),n.getVertexPosition(l,Xs),n.getVertexPosition(c,$s);const h=Xu(n,e,t,i,Ws,Xs,$s,xl);if(h){const u=new I;tn.getBarycoord(xl,Ws,Xs,$s,u),s&&(h.uv=tn.getInterpolatedAttribute(s,o,l,c,u,new ge)),r&&(h.uv1=tn.getInterpolatedAttribute(r,o,l,c,u,new ge)),a&&(h.normal=tn.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new I,materialIndex:0};tn.getNormal(Ws,Xs,$s,f.normal),h.face=f,h.barycoord=u}return h}class _i extends Pt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2));function g(v,m,p,S,x,_,P,A,T,C,w){const y=_/T,L=P/C,X=_/2,z=P/2,j=A/2,Q=T+1,J=C+1;let ne=0,H=0;const xe=new I;for(let F=0;F<J;F++){const G=F*L-z;for(let se=0;se<Q;se++){const ce=se*y-X;xe[v]=ce*S,xe[m]=G*x,xe[p]=j,c.push(xe.x,xe.y,xe.z),xe[v]=0,xe[m]=0,xe[p]=A>0?1:-1,h.push(xe.x,xe.y,xe.z),u.push(se/T),u.push(1-F/C),ne+=1}}for(let F=0;F<C;F++)for(let G=0;G<T;G++){const se=f+G+Q*F,ce=f+G+Q*(F+1),$=f+(G+1)+Q*(F+1),Y=f+(G+1)+Q*F;l.push(se,ce,Y),l.push(ce,$,Y),H+=6}o.addGroup(d,H,w),d+=H,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ki(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ft(n){const e={};for(let t=0;t<n.length;t++){const i=Ki(n[t]);for(const s in i)e[s]=i[s]}return e}function $u(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Bc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Yu={clone:Ki,merge:Ft};var qu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends Ps{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qu,this.fragmentShader=Zu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ki(e.uniforms),this.uniformsGroups=$u(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class zc extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=En}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new I,yl=new ge,Ml=new ge;class qt extends zc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z)}getViewSize(e,t){return this.getViewBounds(e,yl,Ml),t.subVectors(Ml,yl)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Pi=-90,Li=1;class Ju extends Ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qt(Pi,Li,e,t);s.layers=this.layers,this.add(s);const r=new qt(Pi,Li,e,t);r.layers=this.layers,this.add(r);const a=new qt(Pi,Li,e,t);a.layers=this.layers,this.add(a);const o=new qt(Pi,Li,e,t);o.layers=this.layers,this.add(o);const l=new qt(Pi,Li,e,t);l.layers=this.layers,this.add(l);const c=new qt(Pi,Li,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===En)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Hc extends Ut{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:qi,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ju extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Hc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _i(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:Ki(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:Wn});r.uniforms.tEquirect.value=t;const a=new _t(s,r),o=t.minFilter;return t.minFilter===li&&(t.minFilter=fn),new Ju(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const ta=new I,Ku=new I,Qu=new Ye;class ii{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ta.subVectors(i,t).cross(Ku.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ta),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Qu.getNormalMatrix(e),s=this.coplanarPoint(ta).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new wo,Js=new I;class Eo{constructor(e=new ii,t=new ii,i=new ii,s=new ii,r=new ii,a=new ii){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=En){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],v=s[10],m=s[11],p=s[12],S=s[13],x=s[14],_=s[15];if(i[0].setComponents(l-r,f-c,m-d,_-p).normalize(),i[1].setComponents(l+r,f+c,m+d,_+p).normalize(),i[2].setComponents(l+a,f+h,m+g,_+S).normalize(),i[3].setComponents(l-a,f-h,m-g,_-S).normalize(),i[4].setComponents(l-o,f-u,m-v,_-x).normalize(),t===En)i[5].setComponents(l+o,f+u,m+v,_+x).normalize();else if(t===vr)i[5].setComponents(o,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(e){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Js.x=s.normal.x>0?e.max.x:e.min.x,Js.y=s.normal.y>0?e.max.y:e.min.y,Js.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gc(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function ef(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Rn extends Pt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const S=p*f-a;for(let x=0;x<c;x++){const _=x*u-r;g.push(_,-S,0),v.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const x=S+c*p,_=S+c*(p+1),P=S+1+c*(p+1),A=S+1+c*p;d.push(x,_,A),d.push(_,P,A)}this.setIndex(d),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.width,e.height,e.widthSegments,e.heightSegments)}}var tf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nf=`#ifdef USE_ALPHAHASH
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
#endif`,sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,af=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lf=`#ifdef USE_AOMAP
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
#endif`,cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hf=`#ifdef USE_BATCHING
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
#endif`,uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mf=`#ifdef USE_IRIDESCENCE
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
#endif`,gf=`#ifdef USE_BUMPMAP
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
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ef=`#define PI 3.141592653589793
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
} // validated`,Tf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Af=`vec3 transformedNormal = objectNormal;
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
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,If="gl_FragColor = linearToOutputTexel( gl_FragColor );",Df=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ff=`#ifdef USE_ENVMAP
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
#endif`,Of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,Bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vf=`#ifdef USE_GRADIENTMAP
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
}`,Wf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yf=`uniform bool receiveShadow;
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
#endif`,qf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qf=`PhysicalMaterial material;
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
#endif`,ed=`struct PhysicalMaterial {
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
}`,td=`
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
#endif`,nd=`#if defined( RE_IndirectDiffuse )
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
#endif`,id=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ad=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,od=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ld=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ud=`#if defined( USE_POINTS_UV )
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
#endif`,fd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,md=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_d=`#ifdef USE_MORPHTARGETS
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
#endif`,vd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wd=`#ifdef USE_NORMALMAP
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
#endif`,Ed=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Td=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ad=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ld=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Id=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ud=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Od=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zd=`float getShadowMask() {
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
}`,Hd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gd=`#ifdef USE_SKINNING
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
#endif`,Vd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wd=`#ifdef USE_SKINNING
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
#endif`,Xd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$d=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zd=`#ifdef USE_TRANSMISSION
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
#endif`,Jd=`#ifdef USE_TRANSMISSION
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
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,np=`uniform sampler2D t2D;
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
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ap=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,op=`#include <common>
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
}`,lp=`#if DEPTH_PACKING == 3200
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
}`,cp=`#define DISTANCE
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
}`,hp=`#define DISTANCE
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
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`uniform float scale;
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
}`,pp=`uniform vec3 diffuse;
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
}`,mp=`#include <common>
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
}`,gp=`uniform vec3 diffuse;
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
}`,_p=`#define LAMBERT
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
}`,vp=`#define LAMBERT
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
}`,xp=`#define MATCAP
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
}`,yp=`#define MATCAP
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
}`,Mp=`#define NORMAL
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
}`,Sp=`#define NORMAL
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
}`,bp=`#define PHONG
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
}`,wp=`#define PHONG
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
}`,Ep=`#define STANDARD
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
}`,Tp=`#define STANDARD
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
}`,Ap=`#define TOON
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
}`,Rp=`#define TOON
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
}`,Cp=`uniform float size;
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
}`,Pp=`uniform vec3 diffuse;
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
}`,Lp=`#include <common>
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
}`,Ip=`uniform vec3 color;
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
}`,Dp=`uniform float rotation;
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
}`,Up=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:tf,alphahash_pars_fragment:nf,alphamap_fragment:sf,alphamap_pars_fragment:rf,alphatest_fragment:af,alphatest_pars_fragment:of,aomap_fragment:lf,aomap_pars_fragment:cf,batching_pars_vertex:hf,batching_vertex:uf,begin_vertex:ff,beginnormal_vertex:df,bsdfs:pf,iridescence_fragment:mf,bumpmap_pars_fragment:gf,clipping_planes_fragment:_f,clipping_planes_pars_fragment:vf,clipping_planes_pars_vertex:xf,clipping_planes_vertex:yf,color_fragment:Mf,color_pars_fragment:Sf,color_pars_vertex:bf,color_vertex:wf,common:Ef,cube_uv_reflection_fragment:Tf,defaultnormal_vertex:Af,displacementmap_pars_vertex:Rf,displacementmap_vertex:Cf,emissivemap_fragment:Pf,emissivemap_pars_fragment:Lf,colorspace_fragment:If,colorspace_pars_fragment:Df,envmap_fragment:Uf,envmap_common_pars_fragment:Nf,envmap_pars_fragment:Ff,envmap_pars_vertex:Of,envmap_physical_pars_fragment:qf,envmap_vertex:kf,fog_vertex:Bf,fog_pars_vertex:zf,fog_fragment:Hf,fog_pars_fragment:Gf,gradientmap_pars_fragment:Vf,lightmap_pars_fragment:Wf,lights_lambert_fragment:Xf,lights_lambert_pars_fragment:$f,lights_pars_begin:Yf,lights_toon_fragment:Zf,lights_toon_pars_fragment:Jf,lights_phong_fragment:jf,lights_phong_pars_fragment:Kf,lights_physical_fragment:Qf,lights_physical_pars_fragment:ed,lights_fragment_begin:td,lights_fragment_maps:nd,lights_fragment_end:id,logdepthbuf_fragment:sd,logdepthbuf_pars_fragment:rd,logdepthbuf_pars_vertex:ad,logdepthbuf_vertex:od,map_fragment:ld,map_pars_fragment:cd,map_particle_fragment:hd,map_particle_pars_fragment:ud,metalnessmap_fragment:fd,metalnessmap_pars_fragment:dd,morphinstance_vertex:pd,morphcolor_vertex:md,morphnormal_vertex:gd,morphtarget_pars_vertex:_d,morphtarget_vertex:vd,normal_fragment_begin:xd,normal_fragment_maps:yd,normal_pars_fragment:Md,normal_pars_vertex:Sd,normal_vertex:bd,normalmap_pars_fragment:wd,clearcoat_normal_fragment_begin:Ed,clearcoat_normal_fragment_maps:Td,clearcoat_pars_fragment:Ad,iridescence_pars_fragment:Rd,opaque_fragment:Cd,packing:Pd,premultiplied_alpha_fragment:Ld,project_vertex:Id,dithering_fragment:Dd,dithering_pars_fragment:Ud,roughnessmap_fragment:Nd,roughnessmap_pars_fragment:Fd,shadowmap_pars_fragment:Od,shadowmap_pars_vertex:kd,shadowmap_vertex:Bd,shadowmask_pars_fragment:zd,skinbase_vertex:Hd,skinning_pars_vertex:Gd,skinning_vertex:Vd,skinnormal_vertex:Wd,specularmap_fragment:Xd,specularmap_pars_fragment:$d,tonemapping_fragment:Yd,tonemapping_pars_fragment:qd,transmission_fragment:Zd,transmission_pars_fragment:Jd,uv_pars_fragment:jd,uv_pars_vertex:Kd,uv_vertex:Qd,worldpos_vertex:ep,background_vert:tp,background_frag:np,backgroundCube_vert:ip,backgroundCube_frag:sp,cube_vert:rp,cube_frag:ap,depth_vert:op,depth_frag:lp,distanceRGBA_vert:cp,distanceRGBA_frag:hp,equirect_vert:up,equirect_frag:fp,linedashed_vert:dp,linedashed_frag:pp,meshbasic_vert:mp,meshbasic_frag:gp,meshlambert_vert:_p,meshlambert_frag:vp,meshmatcap_vert:xp,meshmatcap_frag:yp,meshnormal_vert:Mp,meshnormal_frag:Sp,meshphong_vert:bp,meshphong_frag:wp,meshphysical_vert:Ep,meshphysical_frag:Tp,meshtoon_vert:Ap,meshtoon_frag:Rp,points_vert:Cp,points_frag:Pp,shadow_vert:Lp,shadow_frag:Ip,sprite_vert:Dp,sprite_frag:Up},Se={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},un={basic:{uniforms:Ft([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Ft([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new je(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Ft([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Ft([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Ft([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new je(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Ft([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Ft([Se.points,Se.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Ft([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Ft([Se.common,Se.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Ft([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Ft([Se.sprite,Se.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Ft([Se.common,Se.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Ft([Se.lights,Se.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};un.physical={uniforms:Ft([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const js={r:0,b:0,g:0},ei=new Ln,Np=new dt;function Fp(n,e,t,i,s,r,a){const o=new je(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function v(S){let x=!1;const _=g(S);_===null?p(o,l):_&&_.isColor&&(p(_,1),x=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,x){const _=g(x);_&&(_.isCubeTexture||_.mapping===wr)?(h===void 0&&(h=new _t(new _i(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Ki(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ei.copy(x.backgroundRotation),ei.x*=-1,ei.y*=-1,ei.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Np.makeRotationFromEuler(ei)),h.material.toneMapped=Ke.getTransfer(_.colorSpace)!==ot,(u!==_||f!==_.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new _t(new Rn(2,2),new rn({name:"BackgroundMaterial",uniforms:Ki(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(_.colorSpace)!==ot,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,d=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,x){S.getRGB(js,Bc(n)),i.buffers.color.setClear(js.r,js.g,js.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(S,x=1){o.set(S),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:v,addToRenderList:m}}function Op(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(y,L,X,z,j){let Q=!1;const J=u(z,X,L);r!==J&&(r=J,c(r.object)),Q=d(y,z,X,j),Q&&g(y,z,X,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,_(y,L,X,z),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,L,X){const z=X.wireframe===!0;let j=i[y.id];j===void 0&&(j={},i[y.id]=j);let Q=j[L.id];Q===void 0&&(Q={},j[L.id]=Q);let J=Q[z];return J===void 0&&(J=f(l()),Q[z]=J),J}function f(y){const L=[],X=[],z=[];for(let j=0;j<t;j++)L[j]=0,X[j]=0,z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:X,attributeDivisors:z,object:y,attributes:{},index:null}}function d(y,L,X,z){const j=r.attributes,Q=L.attributes;let J=0;const ne=X.getAttributes();for(const H in ne)if(ne[H].location>=0){const F=j[H];let G=Q[H];if(G===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(G=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(G=y.instanceColor)),F===void 0||F.attribute!==G||G&&F.data!==G.data)return!0;J++}return r.attributesNum!==J||r.index!==z}function g(y,L,X,z){const j={},Q=L.attributes;let J=0;const ne=X.getAttributes();for(const H in ne)if(ne[H].location>=0){let F=Q[H];F===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(F=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(F=y.instanceColor));const G={};G.attribute=F,F&&F.data&&(G.data=F.data),j[H]=G,J++}r.attributes=j,r.attributesNum=J,r.index=z}function v(){const y=r.newAttributes;for(let L=0,X=y.length;L<X;L++)y[L]=0}function m(y){p(y,0)}function p(y,L){const X=r.newAttributes,z=r.enabledAttributes,j=r.attributeDivisors;X[y]=1,z[y]===0&&(n.enableVertexAttribArray(y),z[y]=1),j[y]!==L&&(n.vertexAttribDivisor(y,L),j[y]=L)}function S(){const y=r.newAttributes,L=r.enabledAttributes;for(let X=0,z=L.length;X<z;X++)L[X]!==y[X]&&(n.disableVertexAttribArray(X),L[X]=0)}function x(y,L,X,z,j,Q,J){J===!0?n.vertexAttribIPointer(y,L,X,j,Q):n.vertexAttribPointer(y,L,X,z,j,Q)}function _(y,L,X,z){v();const j=z.attributes,Q=X.getAttributes(),J=L.defaultAttributeValues;for(const ne in Q){const H=Q[ne];if(H.location>=0){let xe=j[ne];if(xe===void 0&&(ne==="instanceMatrix"&&y.instanceMatrix&&(xe=y.instanceMatrix),ne==="instanceColor"&&y.instanceColor&&(xe=y.instanceColor)),xe!==void 0){const F=xe.normalized,G=xe.itemSize,se=e.get(xe);if(se===void 0)continue;const ce=se.buffer,$=se.type,Y=se.bytesPerElement,ie=$===n.INT||$===n.UNSIGNED_INT||xe.gpuType===_o;if(xe.isInterleavedBufferAttribute){const te=xe.data,_e=te.stride,Ue=xe.offset;if(te.isInstancedInterleavedBuffer){for(let Pe=0;Pe<H.locationSize;Pe++)p(H.location+Pe,te.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Pe=0;Pe<H.locationSize;Pe++)m(H.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let Pe=0;Pe<H.locationSize;Pe++)x(H.location+Pe,G/H.locationSize,$,F,_e*Y,(Ue+G/H.locationSize*Pe)*Y,ie)}else{if(xe.isInstancedBufferAttribute){for(let te=0;te<H.locationSize;te++)p(H.location+te,xe.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let te=0;te<H.locationSize;te++)m(H.location+te);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let te=0;te<H.locationSize;te++)x(H.location+te,G/H.locationSize,$,F,G*Y,G/H.locationSize*te*Y,ie)}}else if(J!==void 0){const F=J[ne];if(F!==void 0)switch(F.length){case 2:n.vertexAttrib2fv(H.location,F);break;case 3:n.vertexAttrib3fv(H.location,F);break;case 4:n.vertexAttrib4fv(H.location,F);break;default:n.vertexAttrib1fv(H.location,F)}}}}S()}function P(){C();for(const y in i){const L=i[y];for(const X in L){const z=L[X];for(const j in z)h(z[j].object),delete z[j];delete L[X]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const L=i[y.id];for(const X in L){const z=L[X];for(const j in z)h(z[j].object),delete z[j];delete L[X]}delete i[y.id]}function T(y){for(const L in i){const X=i[L];if(X[y.id]===void 0)continue;const z=X[y.id];for(const j in z)h(z[j].object),delete z[j];delete X[y.id]}}function C(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function kp(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,i,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Bp(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==nn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Cn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==wn&&!C)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:P,maxSamples:A}}function zp(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new ii,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:i,x=S*4;let _=p.clippingState||null;l.value=_,_=h(g,f,x,d);for(let P=0;P!==x;++P)_[P]=t[P];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,_=d;x!==v;++x,_+=4)a.copy(u[x]).applyMatrix4(S,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Hp(n){let e=new WeakMap;function t(a,o){return o===Ia?a.mapping=qi:o===Da&&(a.mapping=Zi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ia||o===Da)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ju(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Ar extends zc{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gi=4,Sl=[.125,.215,.35,.446,.526,.582],ai=20,na=new Ar,bl=new je;let ia=null,sa=0,ra=0,aa=!1;const si=(1+Math.sqrt(5))/2,Ii=1/si,wl=[new I(-si,Ii,0),new I(si,Ii,0),new I(-Ii,0,si),new I(Ii,0,si),new I(0,si,-Ii),new I(0,si,Ii),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class El{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){ia=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ia,sa,ra),this._renderer.xr.enabled=aa,e.scissorTest=!1,Ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ia=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:ui,format:nn,colorSpace:es,depthBuffer:!1},s=Tl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tl(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gp(r)),this._blurMaterial=Vp(r,e,t)}return s}_compileMaterial(e){const t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,na)}_sceneToCubeUV(e,t,i,s){const o=new qt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(bl),h.toneMapping=Xn,h.autoClear=!1;const d=new Yt({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),g=new _t(new _i,d);let v=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(bl),v=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;Ks(s,S*x,p>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===qi||e.mapping===Zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Al());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new _t(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ks(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,na)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=wl[(s-r-1)%wl.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new _t(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ai-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):ai;m>ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ai}`);const p=[];let S=0;for(let T=0;T<ai;++T){const C=T/v,w=Math.exp(-C*C/2);p.push(w),T===0?S+=w:T<m&&(S+=2*w)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const _=this._sizeLods[s],P=3*_*(s>x-Gi?s-x+Gi:0),A=4*(this._cubeSize-_);Ks(t,P,A,3*_,2*_),l.setRenderTarget(t),l.render(u,na)}}function Gp(n){const e=[],t=[],i=[];let s=n;const r=n-Gi+1+Sl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Gi?l=Sl[a-n+Gi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,S=new Float32Array(v*g*d),x=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let A=0;A<d;A++){const T=A%3*2/3-1,C=A>2?0:-1,w=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];S.set(w,v*g*A),x.set(f,m*g*A);const y=[A,A,A,A,A,A];_.set(y,p*g*A)}const P=new Pt;P.setAttribute("position",new sn(S,v)),P.setAttribute("uv",new sn(x,m)),P.setAttribute("faceIndex",new sn(_,p)),e.push(P),s>Gi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Tl(n,e,t){const i=new Pn(n,e,t);return i.texture.mapping=wr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ks(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Vp(n,e,t){const i=new Float32Array(ai),s=new I(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:To(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Al(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:To(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Rl(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function To(){return`

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
	`}function Wp(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ia||l===Da,h=l===qi||l===Zi;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new El(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new El(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Xp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ms("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function $p(n,e,t,i){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const S=d.array;v=d.version;for(let x=0,_=S.length;x<_;x+=3){const P=S[x+0],A=S[x+1],T=S[x+2];f.push(P,A,A,T,T,P)}}else if(g!==void 0){const S=g.array;v=g.version;for(let x=0,_=S.length/3-1;x<_;x+=3){const P=x+0,A=x+1,T=x+2;f.push(P,A,A,T,T,P)}}else return;const m=new(Ic(f)?kc:Oc)(f,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Yp(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*a),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*a,g),t.update(d,i,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function u(f,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,v,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*v[S];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function qp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Zp(n,e,t){const i=new WeakMap,s=new ct;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let y=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let P=o.attributes.position.count*_,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const T=new Float32Array(P*A*4*u),C=new Uc(T,P,A,u);C.type=wn,C.needsUpdate=!0;const w=_*4;for(let L=0;L<u;L++){const X=p[L],z=S[L],j=x[L],Q=P*A*4*L;for(let J=0;J<X.count;J++){const ne=J*w;g===!0&&(s.fromBufferAttribute(X,J),T[Q+ne+0]=s.x,T[Q+ne+1]=s.y,T[Q+ne+2]=s.z,T[Q+ne+3]=0),v===!0&&(s.fromBufferAttribute(z,J),T[Q+ne+4]=s.x,T[Q+ne+5]=s.y,T[Q+ne+6]=s.z,T[Q+ne+7]=0),m===!0&&(s.fromBufferAttribute(j,J),T[Q+ne+8]=s.x,T[Q+ne+9]=s.y,T[Q+ne+10]=s.z,T[Q+ne+11]=j.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new ge(P,A)},i.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Jp(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Vc extends Ut{constructor(e,t,i,s,r,a,o,l,c,h=Xi){if(h!==Xi&&h!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Xi&&(i=hi),i===void 0&&h===ji&&(i=Ji),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Wc=new Ut,Cl=new Vc(1,1),Xc=new Uc,$c=new Uu,Yc=new Hc,Pl=[],Ll=[],Il=new Float32Array(16),Dl=new Float32Array(9),Ul=new Float32Array(4);function is(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Pl[s];if(r===void 0&&(r=new Float32Array(s),Pl[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Rr(n,e){let t=Ll[e];t===void 0&&(t=new Int32Array(e),Ll[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function jp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Kp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function Qp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function em(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function tm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;Ul.set(i),n.uniformMatrix2fv(this.addr,!1,Ul),St(t,i)}}function nm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;Dl.set(i),n.uniformMatrix3fv(this.addr,!1,Dl),St(t,i)}}function im(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;Il.set(i),n.uniformMatrix4fv(this.addr,!1,Il),St(t,i)}}function sm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function rm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function am(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function om(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function lm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function cm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function hm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function um(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function fm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Cl.compareFunction=Lc,r=Cl):r=Wc,t.setTexture2D(e||r,s)}function dm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||$c,s)}function pm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Yc,s)}function mm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Xc,s)}function gm(n){switch(n){case 5126:return jp;case 35664:return Kp;case 35665:return Qp;case 35666:return em;case 35674:return tm;case 35675:return nm;case 35676:return im;case 5124:case 35670:return sm;case 35667:case 35671:return rm;case 35668:case 35672:return am;case 35669:case 35673:return om;case 5125:return lm;case 36294:return cm;case 36295:return hm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return dm;case 35680:case 36300:case 36308:case 36293:return pm;case 36289:case 36303:case 36311:case 36292:return mm}}function _m(n,e){n.uniform1fv(this.addr,e)}function vm(n,e){const t=is(e,this.size,2);n.uniform2fv(this.addr,t)}function xm(n,e){const t=is(e,this.size,3);n.uniform3fv(this.addr,t)}function ym(n,e){const t=is(e,this.size,4);n.uniform4fv(this.addr,t)}function Mm(n,e){const t=is(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Sm(n,e){const t=is(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function bm(n,e){const t=is(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function wm(n,e){n.uniform1iv(this.addr,e)}function Em(n,e){n.uniform2iv(this.addr,e)}function Tm(n,e){n.uniform3iv(this.addr,e)}function Am(n,e){n.uniform4iv(this.addr,e)}function Rm(n,e){n.uniform1uiv(this.addr,e)}function Cm(n,e){n.uniform2uiv(this.addr,e)}function Pm(n,e){n.uniform3uiv(this.addr,e)}function Lm(n,e){n.uniform4uiv(this.addr,e)}function Im(n,e,t){const i=this.cache,s=e.length,r=Rr(t,s);Mt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Wc,r[a])}function Dm(n,e,t){const i=this.cache,s=e.length,r=Rr(t,s);Mt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||$c,r[a])}function Um(n,e,t){const i=this.cache,s=e.length,r=Rr(t,s);Mt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Yc,r[a])}function Nm(n,e,t){const i=this.cache,s=e.length,r=Rr(t,s);Mt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Xc,r[a])}function Fm(n){switch(n){case 5126:return _m;case 35664:return vm;case 35665:return xm;case 35666:return ym;case 35674:return Mm;case 35675:return Sm;case 35676:return bm;case 5124:case 35670:return wm;case 35667:case 35671:return Em;case 35668:case 35672:return Tm;case 35669:case 35673:return Am;case 5125:return Rm;case 36294:return Cm;case 36295:return Pm;case 36296:return Lm;case 35678:case 36198:case 36298:case 36306:case 35682:return Im;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Um;case 36289:case 36303:case 36311:case 36292:return Nm}}class Om{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=gm(t.type)}}class km{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fm(t.type)}}class Bm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const oa=/(\w+)(\])?(\[|\.)?/g;function Nl(n,e){n.seq.push(e),n.map[e.id]=e}function zm(n,e,t){const i=n.name,s=i.length;for(oa.lastIndex=0;;){const r=oa.exec(i),a=oa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Nl(t,c===void 0?new Om(o,n,e):new km(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Bm(o),Nl(t,u)),t=u}}}class gr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);zm(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Fl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Hm=37297;let Gm=0;function Vm(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Ol=new Ye;function Wm(n){Ke._getMatrix(Ol,Ke.workingColorSpace,n);const e=`mat3( ${Ol.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case Tr:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function kl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Vm(n.getShaderSource(e),a)}else return s}function Xm(n,e){const t=Wm(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function $m(n,e){let t;switch(e){case Xh:t="Linear";break;case $h:t="Reinhard";break;case Yh:t="Cineon";break;case qh:t="ACESFilmic";break;case Jh:t="AgX";break;case jh:t="Neutral";break;case Zh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qs=new I;function Ym(){Ke.getLuminanceCoefficients(Qs);const n=Qs.x.toFixed(4),e=Qs.y.toFixed(4),t=Qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function Zm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Jm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function gs(n){return n!==""}function Bl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function oo(n){return n.replace(jm,Qm)}const Km=new Map;function Qm(n,e){let t=qe[e];if(t===void 0){const i=Km.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return oo(t)}const e0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hl(n){return n.replace(e0,t0)}function t0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gl(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function n0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===wh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function i0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qi:case Zi:e="ENVMAP_TYPE_CUBE";break;case wr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function s0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zi:e="ENVMAP_MODE_REFRACTION";break}return e}function r0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case xc:e="ENVMAP_BLENDING_MULTIPLY";break;case Vh:e="ENVMAP_BLENDING_MIX";break;case Wh:e="ENVMAP_BLENDING_ADD";break}return e}function a0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function o0(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=n0(t),c=i0(t),h=s0(t),u=r0(t),f=a0(t),d=qm(t),g=Zm(r),v=s.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gs).join(`
`),p.length>0&&(p+=`
`)):(m=[Gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),p=[Gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?qe.tonemapping_pars_fragment:"",t.toneMapping!==Xn?$m("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Xm("linearToOutputTexel",t.outputColorSpace),Ym(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gs).join(`
`)),a=oo(a),a=Bl(a,t),a=zl(a,t),o=oo(o),o=Bl(o,t),o=zl(o,t),a=Hl(a),o=Hl(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===el?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===el?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=S+m+a,_=S+p+o,P=Fl(s,s.VERTEX_SHADER,x),A=Fl(s,s.FRAGMENT_SHADER,_);s.attachShader(v,P),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(L){if(n.debug.checkShaderErrors){const X=s.getProgramInfoLog(v).trim(),z=s.getShaderInfoLog(P).trim(),j=s.getShaderInfoLog(A).trim();let Q=!0,J=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,P,A);else{const ne=kl(s,P,"vertex"),H=kl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+X+`
`+ne+`
`+H)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(z===""||j==="")&&(J=!1);J&&(L.diagnostics={runnable:Q,programLog:X,vertexShader:{log:z,prefix:m},fragmentShader:{log:j,prefix:p}})}s.deleteShader(P),s.deleteShader(A),C=new gr(s,v),w=Jm(s,v)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,Hm)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=A,this}let l0=0;class c0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new h0(e),t.set(e,i)),i}}class h0{constructor(e){this.id=l0++,this.code=e,this.usedTimes=0}}function u0(n,e,t,i,s,r,a){const o=new Nc,l=new c0,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,y,L,X,z){const j=X.fog,Q=z.geometry,J=w.isMeshStandardMaterial?X.environment:null,ne=(w.isMeshStandardMaterial?t:e).get(w.envMap||J),H=ne&&ne.mapping===wr?ne.image.height:null,xe=g[w.type];w.precision!==null&&(d=s.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const F=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,G=F!==void 0?F.length:0;let se=0;Q.morphAttributes.position!==void 0&&(se=1),Q.morphAttributes.normal!==void 0&&(se=2),Q.morphAttributes.color!==void 0&&(se=3);let ce,$,Y,ie;if(xe){const at=un[xe];ce=at.vertexShader,$=at.fragmentShader}else ce=w.vertexShader,$=w.fragmentShader,l.update(w),Y=l.getVertexShaderID(w),ie=l.getFragmentShaderID(w);const te=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),Ue=z.isInstancedMesh===!0,Pe=z.isBatchedMesh===!0,Ge=!!w.map,re=!!w.matcap,pe=!!ne,R=!!w.aoMap,De=!!w.lightMap,de=!!w.bumpMap,Ee=!!w.normalMap,ye=!!w.displacementMap,we=!!w.emissiveMap,Re=!!w.metalnessMap,E=!!w.roughnessMap,M=w.anisotropy>0,V=w.clearcoat>0,ee=w.dispersion>0,D=w.iridescence>0,N=w.sheen>0,W=w.transmission>0,O=M&&!!w.anisotropyMap,ae=V&&!!w.clearcoatMap,Le=V&&!!w.clearcoatNormalMap,oe=V&&!!w.clearcoatRoughnessMap,Me=D&&!!w.iridescenceMap,Ie=D&&!!w.iridescenceThicknessMap,ze=N&&!!w.sheenColorMap,me=N&&!!w.sheenRoughnessMap,Ze=!!w.specularMap,We=!!w.specularColorMap,rt=!!w.specularIntensityMap,U=W&&!!w.transmissionMap,be=W&&!!w.thicknessMap,K=!!w.gradientMap,le=!!w.alphaMap,Ce=w.alphaTest>0,Te=!!w.alphaHash,Xe=!!w.extensions;let mt=Xn;w.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(mt=n.toneMapping);const Lt={shaderID:xe,shaderType:w.type,shaderName:w.name,vertexShader:ce,fragmentShader:$,defines:w.defines,customVertexShaderID:Y,customFragmentShaderID:ie,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Pe,batchingColor:Pe&&z._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&z.instanceColor!==null,instancingMorph:Ue&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:es,alphaToCoverage:!!w.alphaToCoverage,map:Ge,matcap:re,envMap:pe,envMapMode:pe&&ne.mapping,envMapCubeUVHeight:H,aoMap:R,lightMap:De,bumpMap:de,normalMap:Ee,displacementMap:f&&ye,emissiveMap:we,normalMapObjectSpace:Ee&&w.normalMapType===tu,normalMapTangentSpace:Ee&&w.normalMapType===Pc,metalnessMap:Re,roughnessMap:E,anisotropy:M,anisotropyMap:O,clearcoat:V,clearcoatMap:ae,clearcoatNormalMap:Le,clearcoatRoughnessMap:oe,dispersion:ee,iridescence:D,iridescenceMap:Me,iridescenceThicknessMap:Ie,sheen:N,sheenColorMap:ze,sheenRoughnessMap:me,specularMap:Ze,specularColorMap:We,specularIntensityMap:rt,transmission:W,transmissionMap:U,thicknessMap:be,gradientMap:K,opaque:w.transparent===!1&&w.blending===Wi&&w.alphaToCoverage===!1,alphaMap:le,alphaTest:Ce,alphaHash:Te,combine:w.combine,mapUv:Ge&&v(w.map.channel),aoMapUv:R&&v(w.aoMap.channel),lightMapUv:De&&v(w.lightMap.channel),bumpMapUv:de&&v(w.bumpMap.channel),normalMapUv:Ee&&v(w.normalMap.channel),displacementMapUv:ye&&v(w.displacementMap.channel),emissiveMapUv:we&&v(w.emissiveMap.channel),metalnessMapUv:Re&&v(w.metalnessMap.channel),roughnessMapUv:E&&v(w.roughnessMap.channel),anisotropyMapUv:O&&v(w.anisotropyMap.channel),clearcoatMapUv:ae&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Le&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:me&&v(w.sheenRoughnessMap.channel),specularMapUv:Ze&&v(w.specularMap.channel),specularColorMapUv:We&&v(w.specularColorMap.channel),specularIntensityMapUv:rt&&v(w.specularIntensityMap.channel),transmissionMapUv:U&&v(w.transmissionMap.channel),thicknessMapUv:be&&v(w.thicknessMap.channel),alphaMapUv:le&&v(w.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ee||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Q.attributes.uv&&(Ge||le),fog:!!j,useFog:w.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:_e,skinning:z.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:se,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:mt,decodeVideoTexture:Ge&&w.map.isVideoTexture===!0&&Ke.getTransfer(w.map.colorSpace)===ot,decodeVideoTextureEmissive:we&&w.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(w.emissiveMap.colorSpace)===ot,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===At,flipSided:w.side===zt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Xe&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&w.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Lt.vertexUv1s=c.has(1),Lt.vertexUv2s=c.has(2),Lt.vertexUv3s=c.has(3),c.clear(),Lt}function p(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)y.push(L),y.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(S(y,w),x(y,w),y.push(n.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function S(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function x(w,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),w.push(o.mask)}function _(w){const y=g[w.type];let L;if(y){const X=un[y];L=Yu.clone(X.uniforms)}else L=w.uniforms;return L}function P(w,y){let L;for(let X=0,z=h.length;X<z;X++){const j=h[X];if(j.cacheKey===y){L=j,++L.usedTimes;break}}return L===void 0&&(L=new o0(n,y,w,r),h.push(L)),L}function A(w){if(--w.usedTimes===0){const y=h.indexOf(w);h[y]=h[h.length-1],h.pop(),w.destroy()}}function T(w){l.remove(w)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:P,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:C}}function f0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function d0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Vl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wl(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,f,d,g,v,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function o(u,f,d,g,v,m){const p=a(u,f,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,g,v,m){const p=a(u,f,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||d0),i.length>1&&i.sort(f||Vl),s.length>1&&s.sort(f||Vl)}function h(){for(let u=e,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function p0(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Wl,n.set(i,[a])):s>=r.length?(a=new Wl,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function m0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new je};break;case"SpotLight":t={position:new I,direction:new I,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function g0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let _0=0;function v0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function x0(n){const e=new m0,t=g0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const s=new I,r=new dt,a=new dt;function o(c){let h=0,u=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,S=0,x=0,_=0,P=0,A=0,T=0;c.sort(v0);for(let w=0,y=c.length;w<y;w++){const L=c[w],X=L.color,z=L.intensity,j=L.distance,Q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=X.r*z,u+=X.g*z,f+=X.b*z;else if(L.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(L.sh.coefficients[J],z);T++}else if(L.isDirectionalLight){const J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ne=L.shadow,H=t.get(L);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=Q,i.directionalShadowMatrix[d]=L.shadow.matrix,S++}i.directional[d]=J,d++}else if(L.isSpotLight){const J=e.get(L);J.position.setFromMatrixPosition(L.matrixWorld),J.color.copy(X).multiplyScalar(z),J.distance=j,J.coneCos=Math.cos(L.angle),J.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),J.decay=L.decay,i.spot[v]=J;const ne=L.shadow;if(L.map&&(i.spotLightMap[P]=L.map,P++,ne.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[v]=ne.matrix,L.castShadow){const H=t.get(L);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=Q,_++}v++}else if(L.isRectAreaLight){const J=e.get(L);J.color.copy(X).multiplyScalar(z),J.halfWidth.set(L.width*.5,0,0),J.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=J,m++}else if(L.isPointLight){const J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),J.distance=L.distance,J.decay=L.decay,L.castShadow){const ne=L.shadow,H=t.get(L);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,H.shadowCameraNear=ne.camera.near,H.shadowCameraFar=ne.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=L.shadow.matrix,x++}i.point[g]=J,g++}else if(L.isHemisphereLight){const J=e.get(L);J.skyColor.copy(L.color).multiplyScalar(z),J.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[p]=J,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==S||C.numPointShadows!==x||C.numSpotShadows!==_||C.numSpotMaps!==P||C.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=_+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,C.directionalLength=d,C.pointLength=g,C.spotLength=v,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=S,C.numPointShadows=x,C.numSpotShadows=_,C.numSpotMaps=P,C.numLightProbes=T,i.version=_0++)}function l(c,h){let u=0,f=0,d=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const x=c[p];if(x.isDirectionalLight){const _=i.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(x.isSpotLight){const _=i.spot[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const _=i.point[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Xl(n){const e=new x0(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function y0(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Xl(n),e.set(s,[o])):r>=a.length?(o=new Xl(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class M0 extends Ps{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Qh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class S0 extends Ps{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const b0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w0=`uniform sampler2D shadow_pass;
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
}`;function E0(n,e,t){let i=new Eo;const s=new ge,r=new ge,a=new ct,o=new M0({depthPacking:eu}),l=new S0,c={},h=t.maxTextureSize,u={[qn]:zt,[zt]:qn,[At]:At},f=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:b0,fragmentShader:w0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Pt;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new _t(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vc;let p=this.type;this.render=function(A,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=n.getRenderTarget(),y=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Wn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const z=p!==bn&&this.type===bn,j=p===bn&&this.type!==bn;for(let Q=0,J=A.length;Q<J;Q++){const ne=A[Q],H=ne.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const xe=H.getFrameExtents();if(s.multiply(xe),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/xe.x),s.x=r.x*xe.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/xe.y),s.y=r.y*xe.y,H.mapSize.y=r.y)),H.map===null||z===!0||j===!0){const G=this.type!==bn?{minFilter:Rt,magFilter:Rt}:{};H.map!==null&&H.map.dispose(),H.map=new Pn(s.x,s.y,G),H.map.texture.name=ne.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const F=H.getViewportCount();for(let G=0;G<F;G++){const se=H.getViewport(G);a.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),X.viewport(a),H.updateMatrices(ne,G),i=H.getFrustum(),_(T,C,H.camera,ne,this.type)}H.isPointLightShadow!==!0&&this.type===bn&&S(H,C),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,y,L)};function S(A,T){const C=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Pn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,C,f,v,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,C,d,v,null)}function x(A,T,C,w){let y=null;const L=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)y=L;else if(y=C.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const X=y.uuid,z=T.uuid;let j=c[X];j===void 0&&(j={},c[X]=j);let Q=j[z];Q===void 0&&(Q=y.clone(),j[z]=Q,T.addEventListener("dispose",P)),y=Q}if(y.visible=T.visible,y.wireframe=T.wireframe,w===bn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const X=n.properties.get(y);X.light=C}return y}function _(A,T,C,w,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===bn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const z=e.update(A),j=A.material;if(Array.isArray(j)){const Q=z.groups;for(let J=0,ne=Q.length;J<ne;J++){const H=Q[J],xe=j[H.materialIndex];if(xe&&xe.visible){const F=x(A,xe,w,y);A.onBeforeShadow(n,A,T,C,z,F,H),n.renderBufferDirect(C,null,z,F,A,H),A.onAfterShadow(n,A,T,C,z,F,H)}}}else if(j.visible){const Q=x(A,j,w,y);A.onBeforeShadow(n,A,T,C,z,Q,null),n.renderBufferDirect(C,null,z,Q,A,null),A.onAfterShadow(n,A,T,C,z,Q,null)}}const X=A.children;for(let z=0,j=X.length;z<j;z++)_(X[z],T,C,w,y)}function P(A){A.target.removeEventListener("dispose",P);for(const C in c){const w=c[C],y=A.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}const T0={[Ea]:Ta,[Aa]:Pa,[Ra]:La,[Yi]:Ca,[Ta]:Ea,[Pa]:Aa,[La]:Ra,[Ca]:Yi};function A0(n,e){function t(){let U=!1;const be=new ct;let K=null;const le=new ct(0,0,0,0);return{setMask:function(Ce){K!==Ce&&!U&&(n.colorMask(Ce,Ce,Ce,Ce),K=Ce)},setLocked:function(Ce){U=Ce},setClear:function(Ce,Te,Xe,mt,Lt){Lt===!0&&(Ce*=mt,Te*=mt,Xe*=mt),be.set(Ce,Te,Xe,mt),le.equals(be)===!1&&(n.clearColor(Ce,Te,Xe,mt),le.copy(be))},reset:function(){U=!1,K=null,le.set(-1,0,0,0)}}}function i(){let U=!1,be=!1,K=null,le=null,Ce=null;return{setReversed:function(Te){if(be!==Te){const Xe=e.get("EXT_clip_control");be?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT);const mt=Ce;Ce=null,this.setClear(mt)}be=Te},getReversed:function(){return be},setTest:function(Te){Te?te(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(Te){K!==Te&&!U&&(n.depthMask(Te),K=Te)},setFunc:function(Te){if(be&&(Te=T0[Te]),le!==Te){switch(Te){case Ea:n.depthFunc(n.NEVER);break;case Ta:n.depthFunc(n.ALWAYS);break;case Aa:n.depthFunc(n.LESS);break;case Yi:n.depthFunc(n.LEQUAL);break;case Ra:n.depthFunc(n.EQUAL);break;case Ca:n.depthFunc(n.GEQUAL);break;case Pa:n.depthFunc(n.GREATER);break;case La:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=Te}},setLocked:function(Te){U=Te},setClear:function(Te){Ce!==Te&&(be&&(Te=1-Te),n.clearDepth(Te),Ce=Te)},reset:function(){U=!1,K=null,le=null,Ce=null,be=!1}}}function s(){let U=!1,be=null,K=null,le=null,Ce=null,Te=null,Xe=null,mt=null,Lt=null;return{setTest:function(at){U||(at?te(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(at){be!==at&&!U&&(n.stencilMask(at),be=at)},setFunc:function(at,Zt,pn){(K!==at||le!==Zt||Ce!==pn)&&(n.stencilFunc(at,Zt,pn),K=at,le=Zt,Ce=pn)},setOp:function(at,Zt,pn){(Te!==at||Xe!==Zt||mt!==pn)&&(n.stencilOp(at,Zt,pn),Te=at,Xe=Zt,mt=pn)},setLocked:function(at){U=at},setClear:function(at){Lt!==at&&(n.clearStencil(at),Lt=at)},reset:function(){U=!1,be=null,K=null,le=null,Ce=null,Te=null,Xe=null,mt=null,Lt=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,S=null,x=null,_=null,P=null,A=null,T=new je(0,0,0),C=0,w=!1,y=null,L=null,X=null,z=null,j=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ne=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(H)[1]),J=ne>=1):H.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),J=ne>=2);let xe=null,F={};const G=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),ce=new ct().fromArray(G),$=new ct().fromArray(se);function Y(U,be,K,le){const Ce=new Uint8Array(4),Te=n.createTexture();n.bindTexture(U,Te),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<K;Xe++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(be+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return Te}const ie={};ie[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(n.DEPTH_TEST),a.setFunc(Yi),de(!1),Ee(Zo),te(n.CULL_FACE),R(Wn);function te(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function _e(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Ue(U,be){return u[U]!==be?(n.bindFramebuffer(U,be),u[U]=be,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=be),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=be),!0):!1}function Pe(U,be){let K=d,le=!1;if(U){K=f.get(be),K===void 0&&(K=[],f.set(be,K));const Ce=U.textures;if(K.length!==Ce.length||K[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,Xe=Ce.length;Te<Xe;Te++)K[Te]=n.COLOR_ATTACHMENT0+Te;K.length=Ce.length,le=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,le=!0);le&&n.drawBuffers(K)}function Ge(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const re={[ri]:n.FUNC_ADD,[Th]:n.FUNC_SUBTRACT,[Ah]:n.FUNC_REVERSE_SUBTRACT};re[Rh]=n.MIN,re[Ch]=n.MAX;const pe={[Ph]:n.ZERO,[Lh]:n.ONE,[Ih]:n.SRC_COLOR,[ba]:n.SRC_ALPHA,[kh]:n.SRC_ALPHA_SATURATE,[Fh]:n.DST_COLOR,[Uh]:n.DST_ALPHA,[Dh]:n.ONE_MINUS_SRC_COLOR,[wa]:n.ONE_MINUS_SRC_ALPHA,[Oh]:n.ONE_MINUS_DST_COLOR,[Nh]:n.ONE_MINUS_DST_ALPHA,[Bh]:n.CONSTANT_COLOR,[zh]:n.ONE_MINUS_CONSTANT_COLOR,[Hh]:n.CONSTANT_ALPHA,[Gh]:n.ONE_MINUS_CONSTANT_ALPHA};function R(U,be,K,le,Ce,Te,Xe,mt,Lt,at){if(U===Wn){v===!0&&(_e(n.BLEND),v=!1);return}if(v===!1&&(te(n.BLEND),v=!0),U!==Eh){if(U!==m||at!==w){if((p!==ri||_!==ri)&&(n.blendEquation(n.FUNC_ADD),p=ri,_=ri),at)switch(U){case Wi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sa:n.blendFunc(n.ONE,n.ONE);break;case Jo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Wi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sa:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Jo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,x=null,P=null,A=null,T.set(0,0,0),C=0,m=U,w=at}return}Ce=Ce||be,Te=Te||K,Xe=Xe||le,(be!==p||Ce!==_)&&(n.blendEquationSeparate(re[be],re[Ce]),p=be,_=Ce),(K!==S||le!==x||Te!==P||Xe!==A)&&(n.blendFuncSeparate(pe[K],pe[le],pe[Te],pe[Xe]),S=K,x=le,P=Te,A=Xe),(mt.equals(T)===!1||Lt!==C)&&(n.blendColor(mt.r,mt.g,mt.b,Lt),T.copy(mt),C=Lt),m=U,w=!1}function De(U,be){U.side===At?_e(n.CULL_FACE):te(n.CULL_FACE);let K=U.side===zt;be&&(K=!K),de(K),U.blending===Wi&&U.transparent===!1?R(Wn):R(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const le=U.stencilWrite;o.setTest(le),le&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),we(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function de(U){y!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),y=U)}function Ee(U){U!==Sh?(te(n.CULL_FACE),U!==L&&(U===Zo?n.cullFace(n.BACK):U===bh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),L=U}function ye(U){U!==X&&(J&&n.lineWidth(U),X=U)}function we(U,be,K){U?(te(n.POLYGON_OFFSET_FILL),(z!==be||j!==K)&&(n.polygonOffset(be,K),z=be,j=K)):_e(n.POLYGON_OFFSET_FILL)}function Re(U){U?te(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function E(U){U===void 0&&(U=n.TEXTURE0+Q-1),xe!==U&&(n.activeTexture(U),xe=U)}function M(U,be,K){K===void 0&&(xe===null?K=n.TEXTURE0+Q-1:K=xe);let le=F[K];le===void 0&&(le={type:void 0,texture:void 0},F[K]=le),(le.type!==U||le.texture!==be)&&(xe!==K&&(n.activeTexture(K),xe=K),n.bindTexture(U,be||ie[U]),le.type=U,le.texture=be)}function V(){const U=F[xe];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function D(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function N(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(U){ce.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ce.copy(U))}function me(U){$.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),$.copy(U))}function Ze(U,be){let K=c.get(be);K===void 0&&(K=new WeakMap,c.set(be,K));let le=K.get(U);le===void 0&&(le=n.getUniformBlockIndex(be,U.name),K.set(U,le))}function We(U,be){const le=c.get(be).get(U);l.get(be)!==le&&(n.uniformBlockBinding(be,le,U.__bindingPointIndex),l.set(be,le))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},xe=null,F={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,S=null,x=null,_=null,P=null,A=null,T=new je(0,0,0),C=0,w=!1,y=null,L=null,X=null,z=null,j=null,ce.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:_e,bindFramebuffer:Ue,drawBuffers:Pe,useProgram:Ge,setBlending:R,setMaterial:De,setFlipSided:de,setCullFace:Ee,setLineWidth:ye,setPolygonOffset:we,setScissorTest:Re,activeTexture:E,bindTexture:M,unbindTexture:V,compressedTexImage2D:ee,compressedTexImage3D:D,texImage2D:Me,texImage3D:Ie,updateUBOMapping:Ze,uniformBlockBinding:We,texStorage2D:Le,texStorage3D:oe,texSubImage2D:N,texSubImage3D:W,compressedTexSubImage2D:O,compressedTexSubImage3D:ae,scissor:ze,viewport:me,reset:rt}}function $l(n,e,t,i){const s=R0(i);switch(t){case wc:return n*e;case Tc:return n*e;case Ac:return n*e*2;case Er:return n*e/s.components*s.byteLength;case yo:return n*e/s.components*s.byteLength;case Rc:return n*e*2/s.components*s.byteLength;case Mo:return n*e*2/s.components*s.byteLength;case Ec:return n*e*3/s.components*s.byteLength;case nn:return n*e*4/s.components*s.byteLength;case So:return n*e*4/s.components*s.byteLength;case ur:case fr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case dr:case pr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fa:case ka:return Math.max(n,16)*Math.max(e,8)/4;case Na:case Oa:return Math.max(n,8)*Math.max(e,8)/2;case Ba:case za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Va:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case $a:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case qa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Za:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ja:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ja:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Qa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case eo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case to:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case mr:case no:case io:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Cc:case so:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ro:case ao:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function R0(n){switch(n){case Cn:case Mc:return{byteLength:1,components:1};case ws:case Sc:case ui:return{byteLength:2,components:1};case vo:case xo:return{byteLength:2,components:4};case hi:case _o:case wn:return{byteLength:4,components:1};case bc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function C0(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,M){return d?new OffscreenCanvas(E,M):xr("canvas")}function v(E,M,V){let ee=1;const D=Re(E);if((D.width>V||D.height>V)&&(ee=V/Math.max(D.width,D.height)),ee<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const N=Math.floor(ee*D.width),W=Math.floor(ee*D.height);u===void 0&&(u=g(N,W));const O=M?g(N,W):u;return O.width=N,O.height=W,O.getContext("2d").drawImage(E,0,0,N,W),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+N+"x"+W+")."),O}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(E,M,V,ee,D=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let N=M;if(M===n.RED&&(V===n.FLOAT&&(N=n.R32F),V===n.HALF_FLOAT&&(N=n.R16F),V===n.UNSIGNED_BYTE&&(N=n.R8)),M===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(N=n.R8UI),V===n.UNSIGNED_SHORT&&(N=n.R16UI),V===n.UNSIGNED_INT&&(N=n.R32UI),V===n.BYTE&&(N=n.R8I),V===n.SHORT&&(N=n.R16I),V===n.INT&&(N=n.R32I)),M===n.RG&&(V===n.FLOAT&&(N=n.RG32F),V===n.HALF_FLOAT&&(N=n.RG16F),V===n.UNSIGNED_BYTE&&(N=n.RG8)),M===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(N=n.RG8UI),V===n.UNSIGNED_SHORT&&(N=n.RG16UI),V===n.UNSIGNED_INT&&(N=n.RG32UI),V===n.BYTE&&(N=n.RG8I),V===n.SHORT&&(N=n.RG16I),V===n.INT&&(N=n.RG32I)),M===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(N=n.RGB8UI),V===n.UNSIGNED_SHORT&&(N=n.RGB16UI),V===n.UNSIGNED_INT&&(N=n.RGB32UI),V===n.BYTE&&(N=n.RGB8I),V===n.SHORT&&(N=n.RGB16I),V===n.INT&&(N=n.RGB32I)),M===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(N=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(N=n.RGBA16UI),V===n.UNSIGNED_INT&&(N=n.RGBA32UI),V===n.BYTE&&(N=n.RGBA8I),V===n.SHORT&&(N=n.RGBA16I),V===n.INT&&(N=n.RGBA32I)),M===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(N=n.RGB9_E5),M===n.RGBA){const W=D?Tr:Ke.getTransfer(ee);V===n.FLOAT&&(N=n.RGBA32F),V===n.HALF_FLOAT&&(N=n.RGBA16F),V===n.UNSIGNED_BYTE&&(N=W===ot?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(N=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(N=n.RGB5_A1)}return(N===n.R16F||N===n.R32F||N===n.RG16F||N===n.RG32F||N===n.RGBA16F||N===n.RGBA32F)&&e.get("EXT_color_buffer_float"),N}function _(E,M){let V;return E?M===null||M===hi||M===Ji?V=n.DEPTH24_STENCIL8:M===wn?V=n.DEPTH32F_STENCIL8:M===ws&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===hi||M===Ji?V=n.DEPTH_COMPONENT24:M===wn?V=n.DEPTH_COMPONENT32F:M===ws&&(V=n.DEPTH_COMPONENT16),V}function P(E,M){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Rt&&E.minFilter!==fn?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function A(E){const M=E.target;M.removeEventListener("dispose",A),C(M),M.isVideoTexture&&h.delete(M)}function T(E){const M=E.target;M.removeEventListener("dispose",T),y(M)}function C(E){const M=i.get(E);if(M.__webglInit===void 0)return;const V=E.source,ee=f.get(V);if(ee){const D=ee[M.__cacheKey];D.usedTimes--,D.usedTimes===0&&w(E),Object.keys(ee).length===0&&f.delete(V)}i.remove(E)}function w(E){const M=i.get(E);n.deleteTexture(M.__webglTexture);const V=E.source,ee=f.get(V);delete ee[M.__cacheKey],a.memory.textures--}function y(E){const M=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let D=0;D<M.__webglFramebuffer[ee].length;D++)n.deleteFramebuffer(M.__webglFramebuffer[ee][D]);else n.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)n.deleteFramebuffer(M.__webglFramebuffer[ee]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=E.textures;for(let ee=0,D=V.length;ee<D;ee++){const N=i.get(V[ee]);N.__webglTexture&&(n.deleteTexture(N.__webglTexture),a.memory.textures--),i.remove(V[ee])}i.remove(E)}let L=0;function X(){L=0}function z(){const E=L;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),L+=1,E}function j(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function Q(E,M){const V=i.get(E);if(E.isVideoTexture&&ye(E),E.isRenderTargetTexture===!1&&E.version>0&&V.__version!==E.version){const ee=E.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(V,E,M);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+M)}function J(E,M){const V=i.get(E);if(E.version>0&&V.__version!==E.version){$(V,E,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+M)}function ne(E,M){const V=i.get(E);if(E.version>0&&V.__version!==E.version){$(V,E,M);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+M)}function H(E,M){const V=i.get(E);if(E.version>0&&V.__version!==E.version){Y(V,E,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+M)}const xe={[_r]:n.REPEAT,[oi]:n.CLAMP_TO_EDGE,[Ua]:n.MIRRORED_REPEAT},F={[Rt]:n.NEAREST,[Kh]:n.NEAREST_MIPMAP_NEAREST,[Ds]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[Nr]:n.LINEAR_MIPMAP_NEAREST,[li]:n.LINEAR_MIPMAP_LINEAR},G={[nu]:n.NEVER,[lu]:n.ALWAYS,[iu]:n.LESS,[Lc]:n.LEQUAL,[su]:n.EQUAL,[ou]:n.GEQUAL,[ru]:n.GREATER,[au]:n.NOTEQUAL};function se(E,M){if(M.type===wn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===fn||M.magFilter===Nr||M.magFilter===Ds||M.magFilter===li||M.minFilter===fn||M.minFilter===Nr||M.minFilter===Ds||M.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,xe[M.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,xe[M.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,xe[M.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,F[M.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,F[M.minFilter]),M.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,G[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Rt||M.minFilter!==Ds&&M.minFilter!==li||M.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ce(E,M){let V=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",A));const ee=M.source;let D=f.get(ee);D===void 0&&(D={},f.set(ee,D));const N=j(M);if(N!==E.__cacheKey){D[N]===void 0&&(D[N]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),D[N].usedTimes++;const W=D[E.__cacheKey];W!==void 0&&(D[E.__cacheKey].usedTimes--,W.usedTimes===0&&w(M)),E.__cacheKey=N,E.__webglTexture=D[N].texture}return V}function $(E,M,V){let ee=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=n.TEXTURE_3D);const D=ce(E,M),N=M.source;t.bindTexture(ee,E.__webglTexture,n.TEXTURE0+V);const W=i.get(N);if(N.version!==W.__version||D===!0){t.activeTexture(n.TEXTURE0+V);const O=Ke.getPrimaries(Ke.workingColorSpace),ae=M.colorSpace===Gn?null:Ke.getPrimaries(M.colorSpace),Le=M.colorSpace===Gn||O===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let oe=v(M.image,!1,s.maxTextureSize);oe=we(M,oe);const Me=r.convert(M.format,M.colorSpace),Ie=r.convert(M.type);let ze=x(M.internalFormat,Me,Ie,M.colorSpace,M.isVideoTexture);se(ee,M);let me;const Ze=M.mipmaps,We=M.isVideoTexture!==!0,rt=W.__version===void 0||D===!0,U=N.dataReady,be=P(M,oe);if(M.isDepthTexture)ze=_(M.format===ji,M.type),rt&&(We?t.texStorage2D(n.TEXTURE_2D,1,ze,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,ze,oe.width,oe.height,0,Me,Ie,null));else if(M.isDataTexture)if(Ze.length>0){We&&rt&&t.texStorage2D(n.TEXTURE_2D,be,ze,Ze[0].width,Ze[0].height);for(let K=0,le=Ze.length;K<le;K++)me=Ze[K],We?U&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,me.width,me.height,Me,Ie,me.data):t.texImage2D(n.TEXTURE_2D,K,ze,me.width,me.height,0,Me,Ie,me.data);M.generateMipmaps=!1}else We?(rt&&t.texStorage2D(n.TEXTURE_2D,be,ze,oe.width,oe.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,Me,Ie,oe.data)):t.texImage2D(n.TEXTURE_2D,0,ze,oe.width,oe.height,0,Me,Ie,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,ze,Ze[0].width,Ze[0].height,oe.depth);for(let K=0,le=Ze.length;K<le;K++)if(me=Ze[K],M.format!==nn)if(Me!==null)if(We){if(U)if(M.layerUpdates.size>0){const Ce=$l(me.width,me.height,M.format,M.type);for(const Te of M.layerUpdates){const Xe=me.data.subarray(Te*Ce/me.data.BYTES_PER_ELEMENT,(Te+1)*Ce/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,Te,me.width,me.height,1,Me,Xe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,me.width,me.height,oe.depth,Me,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,ze,me.width,me.height,oe.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,me.width,me.height,oe.depth,Me,Ie,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,ze,me.width,me.height,oe.depth,0,Me,Ie,me.data)}else{We&&rt&&t.texStorage2D(n.TEXTURE_2D,be,ze,Ze[0].width,Ze[0].height);for(let K=0,le=Ze.length;K<le;K++)me=Ze[K],M.format!==nn?Me!==null?We?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,me.width,me.height,Me,me.data):t.compressedTexImage2D(n.TEXTURE_2D,K,ze,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?U&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,me.width,me.height,Me,Ie,me.data):t.texImage2D(n.TEXTURE_2D,K,ze,me.width,me.height,0,Me,Ie,me.data)}else if(M.isDataArrayTexture)if(We){if(rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,ze,oe.width,oe.height,oe.depth),U)if(M.layerUpdates.size>0){const K=$l(oe.width,oe.height,M.format,M.type);for(const le of M.layerUpdates){const Ce=oe.data.subarray(le*K/oe.data.BYTES_PER_ELEMENT,(le+1)*K/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,oe.width,oe.height,1,Me,Ie,Ce)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Me,Ie,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,oe.width,oe.height,oe.depth,0,Me,Ie,oe.data);else if(M.isData3DTexture)We?(rt&&t.texStorage3D(n.TEXTURE_3D,be,ze,oe.width,oe.height,oe.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Me,Ie,oe.data)):t.texImage3D(n.TEXTURE_3D,0,ze,oe.width,oe.height,oe.depth,0,Me,Ie,oe.data);else if(M.isFramebufferTexture){if(rt)if(We)t.texStorage2D(n.TEXTURE_2D,be,ze,oe.width,oe.height);else{let K=oe.width,le=oe.height;for(let Ce=0;Ce<be;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,ze,K,le,0,Me,Ie,null),K>>=1,le>>=1}}else if(Ze.length>0){if(We&&rt){const K=Re(Ze[0]);t.texStorage2D(n.TEXTURE_2D,be,ze,K.width,K.height)}for(let K=0,le=Ze.length;K<le;K++)me=Ze[K],We?U&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,Me,Ie,me):t.texImage2D(n.TEXTURE_2D,K,ze,Me,Ie,me);M.generateMipmaps=!1}else if(We){if(rt){const K=Re(oe);t.texStorage2D(n.TEXTURE_2D,be,ze,K.width,K.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Ie,oe)}else t.texImage2D(n.TEXTURE_2D,0,ze,Me,Ie,oe);m(M)&&p(ee),W.__version=N.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function Y(E,M,V){if(M.image.length!==6)return;const ee=ce(E,M),D=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+V);const N=i.get(D);if(D.version!==N.__version||ee===!0){t.activeTexture(n.TEXTURE0+V);const W=Ke.getPrimaries(Ke.workingColorSpace),O=M.colorSpace===Gn?null:Ke.getPrimaries(M.colorSpace),ae=M.colorSpace===Gn||W===O?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const Le=M.isCompressedTexture||M.image[0].isCompressedTexture,oe=M.image[0]&&M.image[0].isDataTexture,Me=[];for(let le=0;le<6;le++)!Le&&!oe?Me[le]=v(M.image[le],!0,s.maxCubemapSize):Me[le]=oe?M.image[le].image:M.image[le],Me[le]=we(M,Me[le]);const Ie=Me[0],ze=r.convert(M.format,M.colorSpace),me=r.convert(M.type),Ze=x(M.internalFormat,ze,me,M.colorSpace),We=M.isVideoTexture!==!0,rt=N.__version===void 0||ee===!0,U=D.dataReady;let be=P(M,Ie);se(n.TEXTURE_CUBE_MAP,M);let K;if(Le){We&&rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Ze,Ie.width,Ie.height);for(let le=0;le<6;le++){K=Me[le].mipmaps;for(let Ce=0;Ce<K.length;Ce++){const Te=K[Ce];M.format!==nn?ze!==null?We?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce,0,0,Te.width,Te.height,ze,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce,Ze,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce,0,0,Te.width,Te.height,ze,me,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce,Ze,Te.width,Te.height,0,ze,me,Te.data)}}}else{if(K=M.mipmaps,We&&rt){K.length>0&&be++;const le=Re(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Ze,le.width,le.height)}for(let le=0;le<6;le++)if(oe){We?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Me[le].width,Me[le].height,ze,me,Me[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ze,Me[le].width,Me[le].height,0,ze,me,Me[le].data);for(let Ce=0;Ce<K.length;Ce++){const Xe=K[Ce].image[le].image;We?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce+1,0,0,Xe.width,Xe.height,ze,me,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce+1,Ze,Xe.width,Xe.height,0,ze,me,Xe.data)}}else{We?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ze,me,Me[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ze,ze,me,Me[le]);for(let Ce=0;Ce<K.length;Ce++){const Te=K[Ce];We?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce+1,0,0,ze,me,Te.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce+1,Ze,ze,me,Te.image[le])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),N.__version=D.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function ie(E,M,V,ee,D,N){const W=r.convert(V.format,V.colorSpace),O=r.convert(V.type),ae=x(V.internalFormat,W,O,V.colorSpace),Le=i.get(M),oe=i.get(V);if(oe.__renderTarget=M,!Le.__hasExternalTextures){const Me=Math.max(1,M.width>>N),Ie=Math.max(1,M.height>>N);D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?t.texImage3D(D,N,ae,Me,Ie,M.depth,0,W,O,null):t.texImage2D(D,N,ae,Me,Ie,0,W,O,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Ee(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,D,oe.__webglTexture,0,de(M)):(D===n.TEXTURE_2D||D>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&D<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,D,oe.__webglTexture,N),t.bindFramebuffer(n.FRAMEBUFFER,null)}function te(E,M,V){if(n.bindRenderbuffer(n.RENDERBUFFER,E),M.depthBuffer){const ee=M.depthTexture,D=ee&&ee.isDepthTexture?ee.type:null,N=_(M.stencilBuffer,D),W=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,O=de(M);Ee(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,O,N,M.width,M.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,O,N,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,N,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,E)}else{const ee=M.textures;for(let D=0;D<ee.length;D++){const N=ee[D],W=r.convert(N.format,N.colorSpace),O=r.convert(N.type),ae=x(N.internalFormat,W,O,N.colorSpace),Le=de(M);V&&Ee(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,ae,M.width,M.height):Ee(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,ae,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ae,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _e(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(M.depthTexture);ee.__renderTarget=M,(!ee.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q(M.depthTexture,0);const D=ee.__webglTexture,N=de(M);if(M.depthTexture.format===Xi)Ee(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,D,0,N):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,D,0);else if(M.depthTexture.format===ji)Ee(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,D,0,N):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,D,0);else throw new Error("Unknown depthTexture format")}function Ue(E){const M=i.get(E),V=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){const ee=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ee){const D=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ee.removeEventListener("dispose",D)};ee.addEventListener("dispose",D),M.__depthDisposeCallback=D}M.__boundDepthTexture=ee}if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");_e(M.__webglFramebuffer,E)}else if(V){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]===void 0)M.__webglDepthbuffer[ee]=n.createRenderbuffer(),te(M.__webglDepthbuffer[ee],E,!1);else{const D=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,N=M.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,N),n.framebufferRenderbuffer(n.FRAMEBUFFER,D,n.RENDERBUFFER,N)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),te(M.__webglDepthbuffer,E,!1);else{const ee=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,D=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,D),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,D)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(E,M,V){const ee=i.get(E);M!==void 0&&ie(ee.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Ue(E)}function Ge(E){const M=E.texture,V=i.get(E),ee=i.get(M);E.addEventListener("dispose",T);const D=E.textures,N=E.isWebGLCubeRenderTarget===!0,W=D.length>1;if(W||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=M.version,a.memory.textures++),N){V.__webglFramebuffer=[];for(let O=0;O<6;O++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[O]=[];for(let ae=0;ae<M.mipmaps.length;ae++)V.__webglFramebuffer[O][ae]=n.createFramebuffer()}else V.__webglFramebuffer[O]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let O=0;O<M.mipmaps.length;O++)V.__webglFramebuffer[O]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(W)for(let O=0,ae=D.length;O<ae;O++){const Le=i.get(D[O]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Ee(E)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let O=0;O<D.length;O++){const ae=D[O];V.__webglColorRenderbuffer[O]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[O]);const Le=r.convert(ae.format,ae.colorSpace),oe=r.convert(ae.type),Me=x(ae.internalFormat,Le,oe,ae.colorSpace,E.isXRRenderTarget===!0),Ie=de(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,Me,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+O,n.RENDERBUFFER,V.__webglColorRenderbuffer[O])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),te(V.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(N){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),se(n.TEXTURE_CUBE_MAP,M);for(let O=0;O<6;O++)if(M.mipmaps&&M.mipmaps.length>0)for(let ae=0;ae<M.mipmaps.length;ae++)ie(V.__webglFramebuffer[O][ae],E,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+O,ae);else ie(V.__webglFramebuffer[O],E,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(W){for(let O=0,ae=D.length;O<ae;O++){const Le=D[O],oe=i.get(Le);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),se(n.TEXTURE_2D,Le),ie(V.__webglFramebuffer,E,Le,n.COLOR_ATTACHMENT0+O,n.TEXTURE_2D,0),m(Le)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let O=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(O=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(O,ee.__webglTexture),se(O,M),M.mipmaps&&M.mipmaps.length>0)for(let ae=0;ae<M.mipmaps.length;ae++)ie(V.__webglFramebuffer[ae],E,M,n.COLOR_ATTACHMENT0,O,ae);else ie(V.__webglFramebuffer,E,M,n.COLOR_ATTACHMENT0,O,0);m(M)&&p(O),t.unbindTexture()}E.depthBuffer&&Ue(E)}function re(E){const M=E.textures;for(let V=0,ee=M.length;V<ee;V++){const D=M[V];if(m(D)){const N=S(E),W=i.get(D).__webglTexture;t.bindTexture(N,W),p(N),t.unbindTexture()}}}const pe=[],R=[];function De(E){if(E.samples>0){if(Ee(E)===!1){const M=E.textures,V=E.width,ee=E.height;let D=n.COLOR_BUFFER_BIT;const N=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=i.get(E),O=M.length>1;if(O)for(let ae=0;ae<M.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,W.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,W.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,W.__webglFramebuffer);for(let ae=0;ae<M.length;ae++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(D|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(D|=n.STENCIL_BUFFER_BIT)),O){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,W.__webglColorRenderbuffer[ae]);const Le=i.get(M[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,V,ee,0,0,V,ee,D,n.NEAREST),l===!0&&(pe.length=0,R.length=0,pe.push(n.COLOR_ATTACHMENT0+ae),E.depthBuffer&&E.resolveDepthBuffer===!1&&(pe.push(N),R.push(N),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,R)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),O)for(let ae=0;ae<M.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,W.__webglColorRenderbuffer[ae]);const Le=i.get(M[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,W.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,W.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const M=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function de(E){return Math.min(s.maxSamples,E.samples)}function Ee(E){const M=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ye(E){const M=a.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function we(E,M){const V=E.colorSpace,ee=E.format,D=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||V!==es&&V!==Gn&&(Ke.getTransfer(V)===ot?(ee!==nn||D!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function Re(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=X,this.setTexture2D=Q,this.setTexture2DArray=J,this.setTexture3D=ne,this.setTextureCube=H,this.rebindTextures=Pe,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Ee}function P0(n,e){function t(i,s=Gn){let r;const a=Ke.getTransfer(s);if(i===Cn)return n.UNSIGNED_BYTE;if(i===vo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mc)return n.BYTE;if(i===Sc)return n.SHORT;if(i===ws)return n.UNSIGNED_SHORT;if(i===_o)return n.INT;if(i===hi)return n.UNSIGNED_INT;if(i===wn)return n.FLOAT;if(i===ui)return n.HALF_FLOAT;if(i===wc)return n.ALPHA;if(i===Ec)return n.RGB;if(i===nn)return n.RGBA;if(i===Tc)return n.LUMINANCE;if(i===Ac)return n.LUMINANCE_ALPHA;if(i===Xi)return n.DEPTH_COMPONENT;if(i===ji)return n.DEPTH_STENCIL;if(i===Er)return n.RED;if(i===yo)return n.RED_INTEGER;if(i===Rc)return n.RG;if(i===Mo)return n.RG_INTEGER;if(i===So)return n.RGBA_INTEGER;if(i===ur||i===fr||i===dr||i===pr)if(a===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Na||i===Fa||i===Oa||i===ka)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Na)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ba||i===za||i===Ha)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ba||i===za)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ha)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ga||i===Va||i===Wa||i===Xa||i===$a||i===Ya||i===qa||i===Za||i===Ja||i===ja||i===Ka||i===Qa||i===eo||i===to)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ga)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Va)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wa)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xa)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$a)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ya)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qa)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Za)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ja)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ja)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ka)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qa)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===eo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===to)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mr||i===no||i===io)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===mr)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===no)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cc||i===so||i===ro||i===ao)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===mr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===so)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ao)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ji?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class L0 extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bt extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const I0={type:"move"};class la{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(I0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Bt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const D0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U0=`
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

}`;class N0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Ut,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new rn({vertexShader:D0,fragmentShader:U0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _t(new Rn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F0 extends ts{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const v=new N0,m=t.getContextAttributes();let p=null,S=null;const x=[],_=[],P=new ge;let A=null;const T=new qt;T.viewport=new ct;const C=new qt;C.viewport=new ct;const w=[T,C],y=new L0;let L=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Y=x[$];return Y===void 0&&(Y=new la,x[$]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function($){let Y=x[$];return Y===void 0&&(Y=new la,x[$]=Y),Y.getGripSpace()},this.getHand=function($){let Y=x[$];return Y===void 0&&(Y=new la,x[$]=Y),Y.getHandSpace()};function z($){const Y=_.indexOf($.inputSource);if(Y===-1)return;const ie=x[Y];ie!==void 0&&(ie.update($.inputSource,$.frame,c||a),ie.dispatchEvent({type:$.type,data:$.inputSource}))}function j(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",Q);for(let $=0;$<x.length;$++){const Y=_[$];Y!==null&&(_[$]=null,x[$].disconnect(Y))}L=null,X=null,v.reset(),e.setRenderTarget(p),d=null,f=null,u=null,s=null,S=null,ce.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",j),s.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){const Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Y),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Pn(d.framebufferWidth,d.framebufferHeight,{format:nn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,ie=null,te=null;m.depth&&(te=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=m.stencil?ji:Xi,ie=m.stencil?Ji:hi);const _e={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(_e),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Pn(f.textureWidth,f.textureHeight,{format:nn,type:Cn,depthTexture:new Vc(f.textureWidth,f.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ce.setContext(s),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q($){for(let Y=0;Y<$.removed.length;Y++){const ie=$.removed[Y],te=_.indexOf(ie);te>=0&&(_[te]=null,x[te].disconnect(ie))}for(let Y=0;Y<$.added.length;Y++){const ie=$.added[Y];let te=_.indexOf(ie);if(te===-1){for(let Ue=0;Ue<x.length;Ue++)if(Ue>=_.length){_.push(ie),te=Ue;break}else if(_[Ue]===null){_[Ue]=ie,te=Ue;break}if(te===-1)break}const _e=x[te];_e&&_e.connect(ie)}}const J=new I,ne=new I;function H($,Y,ie){J.setFromMatrixPosition(Y.matrixWorld),ne.setFromMatrixPosition(ie.matrixWorld);const te=J.distanceTo(ne),_e=Y.projectionMatrix.elements,Ue=ie.projectionMatrix.elements,Pe=_e[14]/(_e[10]-1),Ge=_e[14]/(_e[10]+1),re=(_e[9]+1)/_e[5],pe=(_e[9]-1)/_e[5],R=(_e[8]-1)/_e[0],De=(Ue[8]+1)/Ue[0],de=Pe*R,Ee=Pe*De,ye=te/(-R+De),we=ye*-R;if(Y.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(we),$.translateZ(ye),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),_e[10]===-1)$.projectionMatrix.copy(Y.projectionMatrix),$.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const Re=Pe+ye,E=Ge+ye,M=de-we,V=Ee+(te-we),ee=re*Ge/E*Re,D=pe*Ge/E*Re;$.projectionMatrix.makePerspective(M,V,ee,D,Re,E),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function xe($,Y){Y===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Y.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let Y=$.near,ie=$.far;v.texture!==null&&(v.depthNear>0&&(Y=v.depthNear),v.depthFar>0&&(ie=v.depthFar)),y.near=C.near=T.near=Y,y.far=C.far=T.far=ie,(L!==y.near||X!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,X=y.far),T.layers.mask=$.layers.mask|2,C.layers.mask=$.layers.mask|4,y.layers.mask=T.layers.mask|C.layers.mask;const te=$.parent,_e=y.cameras;xe(y,te);for(let Ue=0;Ue<_e.length;Ue++)xe(_e[Ue],te);_e.length===2?H(y,T,C):y.projectionMatrix.copy(T.projectionMatrix),F($,y,te)};function F($,Y,ie){ie===null?$.matrix.copy(Y.matrixWorld):($.matrix.copy(ie.matrixWorld),$.matrix.invert(),$.matrix.multiply(Y.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Y.projectionMatrix),$.projectionMatrixInverse.copy(Y.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Es*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let G=null;function se($,Y){if(h=Y.getViewerPose(c||a),g=Y,h!==null){const ie=h.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let te=!1;ie.length!==y.cameras.length&&(y.cameras.length=0,te=!0);for(let Ue=0;Ue<ie.length;Ue++){const Pe=ie[Ue];let Ge=null;if(d!==null)Ge=d.getViewport(Pe);else{const pe=u.getViewSubImage(f,Pe);Ge=pe.viewport,Ue===0&&(e.setRenderTargetTextures(S,pe.colorTexture,f.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(S))}let re=w[Ue];re===void 0&&(re=new qt,re.layers.enable(Ue),re.viewport=new ct,w[Ue]=re),re.matrix.fromArray(Pe.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Pe.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Ue===0&&(y.matrix.copy(re.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),te===!0&&y.cameras.push(re)}const _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")){const Ue=u.getDepthInformation(ie[0]);Ue&&Ue.isValid&&Ue.texture&&v.init(e,Ue,s.renderState)}}for(let ie=0;ie<x.length;ie++){const te=_[ie],_e=x[ie];te!==null&&_e!==void 0&&_e.update(te,Y,c||a)}G&&G($,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}const ce=new Gc;ce.setAnimationLoop(se),this.setAnimationLoop=function($){G=$},this.dispose=function(){}}}const ti=new Ln,O0=new dt;function k0(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Bc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),x=S.envMap,_=S.envMapRotation;x&&(m.envMap.value=x,ti.copy(_),ti.x*=-1,ti.y*=-1,ti.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),m.envMapRotation.value.setFromMatrix4(O0.makeRotationFromEuler(ti)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function B0(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){const _=x.program;i.uniformBlockBinding(S,_)}function c(S,x){let _=s[S.id];_===void 0&&(g(S),_=h(S),s[S.id]=_,S.addEventListener("dispose",m));const P=x.program;i.updateUBOMapping(S,P);const A=e.render.frame;r[S.id]!==A&&(f(S),r[S.id]=A)}function h(S){const x=u();S.__bindingPointIndex=x;const _=n.createBuffer(),P=S.__size,A=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,P,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,_),_}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const x=s[S.id],_=S.uniforms,P=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,T=_.length;A<T;A++){const C=Array.isArray(_[A])?_[A]:[_[A]];for(let w=0,y=C.length;w<y;w++){const L=C[w];if(d(L,A,w,P)===!0){const X=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let j=0;for(let Q=0;Q<z.length;Q++){const J=z[Q],ne=v(J);typeof J=="number"||typeof J=="boolean"?(L.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,X+j,L.__data)):J.isMatrix3?(L.__data[0]=J.elements[0],L.__data[1]=J.elements[1],L.__data[2]=J.elements[2],L.__data[3]=0,L.__data[4]=J.elements[3],L.__data[5]=J.elements[4],L.__data[6]=J.elements[5],L.__data[7]=0,L.__data[8]=J.elements[6],L.__data[9]=J.elements[7],L.__data[10]=J.elements[8],L.__data[11]=0):(J.toArray(L.__data,j),j+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,x,_,P){const A=S.value,T=x+"_"+_;if(P[T]===void 0)return typeof A=="number"||typeof A=="boolean"?P[T]=A:P[T]=A.clone(),!0;{const C=P[T];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return P[T]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(S){const x=S.uniforms;let _=0;const P=16;for(let T=0,C=x.length;T<C;T++){const w=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,L=w.length;y<L;y++){const X=w[y],z=Array.isArray(X.value)?X.value:[X.value];for(let j=0,Q=z.length;j<Q;j++){const J=z[j],ne=v(J),H=_%P,xe=H%ne.boundary,F=H+xe;_+=xe,F!==0&&P-F<ne.storage&&(_+=P-F),X.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=_,_+=ne.storage}}}const A=_%P;return A>0&&(_+=P-A),S.__size=_,S.__cache={},this}function v(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const S in s)n.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class z0{constructor(e={}){const{canvas:t=Tu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const S=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this.toneMapping=Xn,this.toneMappingExposure=1;const _=this;let P=!1,A=0,T=0,C=null,w=-1,y=null;const L=new ct,X=new ct;let z=null;const j=new je(0);let Q=0,J=t.width,ne=t.height,H=1,xe=null,F=null;const G=new ct(0,0,J,ne),se=new ct(0,0,J,ne);let ce=!1;const $=new Eo;let Y=!1,ie=!1;const te=new dt,_e=new dt,Ue=new I,Pe=new ct,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function pe(){return C===null?H:1}let R=i;function De(b,k){return t.getContext(b,k)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${go}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",Te,!1),R===null){const k="webgl2";if(R=De(k,b),R===null)throw De(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let de,Ee,ye,we,Re,E,M,V,ee,D,N,W,O,ae,Le,oe,Me,Ie,ze,me,Ze,We,rt,U;function be(){de=new Xp(R),de.init(),We=new P0(R,de),Ee=new Bp(R,de,e,We),ye=new A0(R,de),Ee.reverseDepthBuffer&&f&&ye.buffers.depth.setReversed(!0),we=new qp(R),Re=new f0,E=new C0(R,de,ye,Re,Ee,We,we),M=new Hp(_),V=new Wp(_),ee=new ef(R),rt=new Op(R,ee),D=new $p(R,ee,we,rt),N=new Jp(R,D,ee,we),ze=new Zp(R,Ee,E),oe=new zp(Re),W=new u0(_,M,V,de,Ee,rt,oe),O=new k0(_,Re),ae=new p0,Le=new y0(de),Ie=new Fp(_,M,V,ye,N,d,l),Me=new E0(_,N,Ee),U=new B0(R,we,Ee,ye),me=new kp(R,de,we),Ze=new Yp(R,de,we),we.programs=W.programs,_.capabilities=Ee,_.extensions=de,_.properties=Re,_.renderLists=ae,_.shadowMap=Me,_.state=ye,_.info=we}be();const K=new F0(_,R);this.xr=K,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const b=de.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=de.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(J,ne,!1))},this.getSize=function(b){return b.set(J,ne)},this.setSize=function(b,k,q=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=b,ne=k,t.width=Math.floor(b*H),t.height=Math.floor(k*H),q===!0&&(t.style.width=b+"px",t.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(J*H,ne*H).floor()},this.setDrawingBufferSize=function(b,k,q){J=b,ne=k,H=q,t.width=Math.floor(b*q),t.height=Math.floor(k*q),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(G)},this.setViewport=function(b,k,q,Z){b.isVector4?G.set(b.x,b.y,b.z,b.w):G.set(b,k,q,Z),ye.viewport(L.copy(G).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(se)},this.setScissor=function(b,k,q,Z){b.isVector4?se.set(b.x,b.y,b.z,b.w):se.set(b,k,q,Z),ye.scissor(X.copy(se).multiplyScalar(H).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(b){ye.setScissorTest(ce=b)},this.setOpaqueSort=function(b){xe=b},this.setTransparentSort=function(b){F=b},this.getClearColor=function(b){return b.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(b=!0,k=!0,q=!0){let Z=0;if(b){let B=!1;if(C!==null){const ve=C.texture.format;B=ve===So||ve===Mo||ve===yo}if(B){const ve=C.texture.type,Ae=ve===Cn||ve===hi||ve===ws||ve===Ji||ve===vo||ve===xo,Ne=Ie.getClearColor(),Fe=Ie.getClearAlpha(),Ve=Ne.r,$e=Ne.g,Oe=Ne.b;Ae?(g[0]=Ve,g[1]=$e,g[2]=Oe,g[3]=Fe,R.clearBufferuiv(R.COLOR,0,g)):(v[0]=Ve,v[1]=$e,v[2]=Oe,v[3]=Fe,R.clearBufferiv(R.COLOR,0,v))}else Z|=R.COLOR_BUFFER_BIT}k&&(Z|=R.DEPTH_BUFFER_BIT),q&&(Z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),ae.dispose(),Le.dispose(),Re.dispose(),M.dispose(),V.dispose(),N.dispose(),rt.dispose(),U.dispose(),W.dispose(),K.dispose(),K.removeEventListener("sessionstart",Ho),K.removeEventListener("sessionend",Go),Zn.stop()};function le(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const b=we.autoReset,k=Me.enabled,q=Me.autoUpdate,Z=Me.needsUpdate,B=Me.type;be(),we.autoReset=b,Me.enabled=k,Me.autoUpdate=q,Me.needsUpdate=Z,Me.type=B}function Te(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Xe(b){const k=b.target;k.removeEventListener("dispose",Xe),mt(k)}function mt(b){Lt(b),Re.remove(b)}function Lt(b){const k=Re.get(b).programs;k!==void 0&&(k.forEach(function(q){W.releaseProgram(q)}),b.isShaderMaterial&&W.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,q,Z,B,ve){k===null&&(k=Ge);const Ae=B.isMesh&&B.matrixWorld.determinant()<0,Ne=xh(b,k,q,Z,B);ye.setMaterial(Z,Ae);let Fe=q.index,Ve=1;if(Z.wireframe===!0){if(Fe=D.getWireframeAttribute(q),Fe===void 0)return;Ve=2}const $e=q.drawRange,Oe=q.attributes.position;let tt=$e.start*Ve,ht=($e.start+$e.count)*Ve;ve!==null&&(tt=Math.max(tt,ve.start*Ve),ht=Math.min(ht,(ve.start+ve.count)*Ve)),Fe!==null?(tt=Math.max(tt,0),ht=Math.min(ht,Fe.count)):Oe!=null&&(tt=Math.max(tt,0),ht=Math.min(ht,Oe.count));const ut=ht-tt;if(ut<0||ut===1/0)return;rt.setup(B,Z,Ne,q,Fe);let Ot,nt=me;if(Fe!==null&&(Ot=ee.get(Fe),nt=Ze,nt.setIndex(Ot)),B.isMesh)Z.wireframe===!0?(ye.setLineWidth(Z.wireframeLinewidth*pe()),nt.setMode(R.LINES)):nt.setMode(R.TRIANGLES);else if(B.isLine){let ke=Z.linewidth;ke===void 0&&(ke=1),ye.setLineWidth(ke*pe()),B.isLineSegments?nt.setMode(R.LINES):B.isLineLoop?nt.setMode(R.LINE_LOOP):nt.setMode(R.LINE_STRIP)}else B.isPoints?nt.setMode(R.POINTS):B.isSprite&&nt.setMode(R.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)nt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(de.get("WEBGL_multi_draw"))nt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const ke=B._multiDrawStarts,mn=B._multiDrawCounts,it=B._multiDrawCount,Jt=Fe?ee.get(Fe).bytesPerElement:1,vi=Re.get(Z).currentProgram.getUniforms();for(let Ht=0;Ht<it;Ht++)vi.setValue(R,"_gl_DrawID",Ht),nt.render(ke[Ht]/Jt,mn[Ht])}else if(B.isInstancedMesh)nt.renderInstances(tt,ut,B.count);else if(q.isInstancedBufferGeometry){const ke=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,mn=Math.min(q.instanceCount,ke);nt.renderInstances(tt,ut,mn)}else nt.render(tt,ut)};function at(b,k,q){b.transparent===!0&&b.side===At&&b.forceSinglePass===!1?(b.side=zt,b.needsUpdate=!0,Is(b,k,q),b.side=qn,b.needsUpdate=!0,Is(b,k,q),b.side=At):Is(b,k,q)}this.compile=function(b,k,q=null){q===null&&(q=b),p=Le.get(q),p.init(k),x.push(p),q.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),b!==q&&b.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const Z=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ve=B.material;if(ve)if(Array.isArray(ve))for(let Ae=0;Ae<ve.length;Ae++){const Ne=ve[Ae];at(Ne,q,B),Z.add(Ne)}else at(ve,q,B),Z.add(ve)}),x.pop(),p=null,Z},this.compileAsync=function(b,k,q=null){const Z=this.compile(b,k,q);return new Promise(B=>{function ve(){if(Z.forEach(function(Ae){Re.get(Ae).currentProgram.isReady()&&Z.delete(Ae)}),Z.size===0){B(b);return}setTimeout(ve,10)}de.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Zt=null;function pn(b){Zt&&Zt(b)}function Ho(){Zn.stop()}function Go(){Zn.start()}const Zn=new Gc;Zn.setAnimationLoop(pn),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(b){Zt=b,K.setAnimationLoop(b),b===null?Zn.stop():Zn.start()},K.addEventListener("sessionstart",Ho),K.addEventListener("sessionend",Go),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(k),k=K.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,k,C),p=Le.get(b,x.length),p.init(k),x.push(p),_e.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),$.setFromProjectionMatrix(_e),ie=this.localClippingEnabled,Y=oe.init(this.clippingPlanes,ie),m=ae.get(b,S.length),m.init(),S.push(m),K.enabled===!0&&K.isPresenting===!0){const ve=_.xr.getDepthSensingMesh();ve!==null&&Ur(ve,k,-1/0,_.sortObjects)}Ur(b,k,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(xe,F),re=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,re&&Ie.addToRenderList(m,b),this.info.render.frame++,Y===!0&&oe.beginShadows();const q=p.state.shadowsArray;Me.render(q,b,k),Y===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,B=m.transmissive;if(p.setupLights(),k.isArrayCamera){const ve=k.cameras;if(B.length>0)for(let Ae=0,Ne=ve.length;Ae<Ne;Ae++){const Fe=ve[Ae];Wo(Z,B,b,Fe)}re&&Ie.render(b);for(let Ae=0,Ne=ve.length;Ae<Ne;Ae++){const Fe=ve[Ae];Vo(m,b,Fe,Fe.viewport)}}else B.length>0&&Wo(Z,B,b,k),re&&Ie.render(b),Vo(m,b,k);C!==null&&(E.updateMultisampleRenderTarget(C),E.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(_,b,k),rt.resetDefaultState(),w=-1,y=null,x.pop(),x.length>0?(p=x[x.length-1],Y===!0&&oe.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Ur(b,k,q,Z){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){Z&&Pe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_e);const Ae=N.update(b),Ne=b.material;Ne.visible&&m.push(b,Ae,Ne,q,Pe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$.intersectsObject(b))){const Ae=N.update(b),Ne=b.material;if(Z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Pe.copy(b.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Pe.copy(Ae.boundingSphere.center)),Pe.applyMatrix4(b.matrixWorld).applyMatrix4(_e)),Array.isArray(Ne)){const Fe=Ae.groups;for(let Ve=0,$e=Fe.length;Ve<$e;Ve++){const Oe=Fe[Ve],tt=Ne[Oe.materialIndex];tt&&tt.visible&&m.push(b,Ae,tt,q,Pe.z,Oe)}}else Ne.visible&&m.push(b,Ae,Ne,q,Pe.z,null)}}const ve=b.children;for(let Ae=0,Ne=ve.length;Ae<Ne;Ae++)Ur(ve[Ae],k,q,Z)}function Vo(b,k,q,Z){const B=b.opaque,ve=b.transmissive,Ae=b.transparent;p.setupLightsView(q),Y===!0&&oe.setGlobalState(_.clippingPlanes,q),Z&&ye.viewport(L.copy(Z)),B.length>0&&Ls(B,k,q),ve.length>0&&Ls(ve,k,q),Ae.length>0&&Ls(Ae,k,q),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Wo(b,k,q,Z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new Pn(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float")?ui:Cn,minFilter:li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ve=p.state.transmissionRenderTarget[Z.id],Ae=Z.viewport||L;ve.setSize(Ae.z,Ae.w);const Ne=_.getRenderTarget();_.setRenderTarget(ve),_.getClearColor(j),Q=_.getClearAlpha(),Q<1&&_.setClearColor(16777215,.5),_.clear(),re&&Ie.render(q);const Fe=_.toneMapping;_.toneMapping=Xn;const Ve=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),Y===!0&&oe.setGlobalState(_.clippingPlanes,Z),Ls(b,q,Z),E.updateMultisampleRenderTarget(ve),E.updateRenderTargetMipmap(ve),de.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Oe=0,tt=k.length;Oe<tt;Oe++){const ht=k[Oe],ut=ht.object,Ot=ht.geometry,nt=ht.material,ke=ht.group;if(nt.side===At&&ut.layers.test(Z.layers)){const mn=nt.side;nt.side=zt,nt.needsUpdate=!0,Xo(ut,q,Z,Ot,nt,ke),nt.side=mn,nt.needsUpdate=!0,$e=!0}}$e===!0&&(E.updateMultisampleRenderTarget(ve),E.updateRenderTargetMipmap(ve))}_.setRenderTarget(Ne),_.setClearColor(j,Q),Ve!==void 0&&(Z.viewport=Ve),_.toneMapping=Fe}function Ls(b,k,q){const Z=k.isScene===!0?k.overrideMaterial:null;for(let B=0,ve=b.length;B<ve;B++){const Ae=b[B],Ne=Ae.object,Fe=Ae.geometry,Ve=Z===null?Ae.material:Z,$e=Ae.group;Ne.layers.test(q.layers)&&Xo(Ne,k,q,Fe,Ve,$e)}}function Xo(b,k,q,Z,B,ve){b.onBeforeRender(_,k,q,Z,B,ve),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(_,k,q,Z,b,ve),B.transparent===!0&&B.side===At&&B.forceSinglePass===!1?(B.side=zt,B.needsUpdate=!0,_.renderBufferDirect(q,k,Z,B,b,ve),B.side=qn,B.needsUpdate=!0,_.renderBufferDirect(q,k,Z,B,b,ve),B.side=At):_.renderBufferDirect(q,k,Z,B,b,ve),b.onAfterRender(_,k,q,Z,B,ve)}function Is(b,k,q){k.isScene!==!0&&(k=Ge);const Z=Re.get(b),B=p.state.lights,ve=p.state.shadowsArray,Ae=B.state.version,Ne=W.getParameters(b,B.state,ve,k,q),Fe=W.getProgramCacheKey(Ne);let Ve=Z.programs;Z.environment=b.isMeshStandardMaterial?k.environment:null,Z.fog=k.fog,Z.envMap=(b.isMeshStandardMaterial?V:M).get(b.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Ve===void 0&&(b.addEventListener("dispose",Xe),Ve=new Map,Z.programs=Ve);let $e=Ve.get(Fe);if($e!==void 0){if(Z.currentProgram===$e&&Z.lightsStateVersion===Ae)return Yo(b,Ne),$e}else Ne.uniforms=W.getUniforms(b),b.onBeforeCompile(Ne,_),$e=W.acquireProgram(Ne,Fe),Ve.set(Fe,$e),Z.uniforms=Ne.uniforms;const Oe=Z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Oe.clippingPlanes=oe.uniform),Yo(b,Ne),Z.needsLights=Mh(b),Z.lightsStateVersion=Ae,Z.needsLights&&(Oe.ambientLightColor.value=B.state.ambient,Oe.lightProbe.value=B.state.probe,Oe.directionalLights.value=B.state.directional,Oe.directionalLightShadows.value=B.state.directionalShadow,Oe.spotLights.value=B.state.spot,Oe.spotLightShadows.value=B.state.spotShadow,Oe.rectAreaLights.value=B.state.rectArea,Oe.ltc_1.value=B.state.rectAreaLTC1,Oe.ltc_2.value=B.state.rectAreaLTC2,Oe.pointLights.value=B.state.point,Oe.pointLightShadows.value=B.state.pointShadow,Oe.hemisphereLights.value=B.state.hemi,Oe.directionalShadowMap.value=B.state.directionalShadowMap,Oe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Oe.spotShadowMap.value=B.state.spotShadowMap,Oe.spotLightMatrix.value=B.state.spotLightMatrix,Oe.spotLightMap.value=B.state.spotLightMap,Oe.pointShadowMap.value=B.state.pointShadowMap,Oe.pointShadowMatrix.value=B.state.pointShadowMatrix),Z.currentProgram=$e,Z.uniformsList=null,$e}function $o(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=gr.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function Yo(b,k){const q=Re.get(b);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function xh(b,k,q,Z,B){k.isScene!==!0&&(k=Ge),E.resetTextureUnits();const ve=k.fog,Ae=Z.isMeshStandardMaterial?k.environment:null,Ne=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:es,Fe=(Z.isMeshStandardMaterial?V:M).get(Z.envMap||Ae),Ve=Z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,$e=!!q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Oe=!!q.morphAttributes.position,tt=!!q.morphAttributes.normal,ht=!!q.morphAttributes.color;let ut=Xn;Z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ut=_.toneMapping);const Ot=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,nt=Ot!==void 0?Ot.length:0,ke=Re.get(Z),mn=p.state.lights;if(Y===!0&&(ie===!0||b!==y)){const Xt=b===y&&Z.id===w;oe.setState(Z,b,Xt)}let it=!1;Z.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==mn.state.version||ke.outputColorSpace!==Ne||B.isBatchedMesh&&ke.batching===!1||!B.isBatchedMesh&&ke.batching===!0||B.isBatchedMesh&&ke.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&ke.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&ke.instancing===!1||!B.isInstancedMesh&&ke.instancing===!0||B.isSkinnedMesh&&ke.skinning===!1||!B.isSkinnedMesh&&ke.skinning===!0||B.isInstancedMesh&&ke.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&ke.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&ke.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&ke.instancingMorph===!1&&B.morphTexture!==null||ke.envMap!==Fe||Z.fog===!0&&ke.fog!==ve||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==oe.numPlanes||ke.numIntersection!==oe.numIntersection)||ke.vertexAlphas!==Ve||ke.vertexTangents!==$e||ke.morphTargets!==Oe||ke.morphNormals!==tt||ke.morphColors!==ht||ke.toneMapping!==ut||ke.morphTargetsCount!==nt)&&(it=!0):(it=!0,ke.__version=Z.version);let Jt=ke.currentProgram;it===!0&&(Jt=Is(Z,k,B));let vi=!1,Ht=!1,ss=!1;const ft=Jt.getUniforms(),an=ke.uniforms;if(ye.useProgram(Jt.program)&&(vi=!0,Ht=!0,ss=!0),Z.id!==w&&(w=Z.id,Ht=!0),vi||y!==b){ye.buffers.depth.getReversed()?(te.copy(b.projectionMatrix),Ru(te),Cu(te),ft.setValue(R,"projectionMatrix",te)):ft.setValue(R,"projectionMatrix",b.projectionMatrix),ft.setValue(R,"viewMatrix",b.matrixWorldInverse);const In=ft.map.cameraPosition;In!==void 0&&In.setValue(R,Ue.setFromMatrixPosition(b.matrixWorld)),Ee.logarithmicDepthBuffer&&ft.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ft.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Ht=!0,ss=!0)}if(B.isSkinnedMesh){ft.setOptional(R,B,"bindMatrix"),ft.setOptional(R,B,"bindMatrixInverse");const Xt=B.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),ft.setValue(R,"boneTexture",Xt.boneTexture,E))}B.isBatchedMesh&&(ft.setOptional(R,B,"batchingTexture"),ft.setValue(R,"batchingTexture",B._matricesTexture,E),ft.setOptional(R,B,"batchingIdTexture"),ft.setValue(R,"batchingIdTexture",B._indirectTexture,E),ft.setOptional(R,B,"batchingColorTexture"),B._colorsTexture!==null&&ft.setValue(R,"batchingColorTexture",B._colorsTexture,E));const rs=q.morphAttributes;if((rs.position!==void 0||rs.normal!==void 0||rs.color!==void 0)&&ze.update(B,q,Jt),(Ht||ke.receiveShadow!==B.receiveShadow)&&(ke.receiveShadow=B.receiveShadow,ft.setValue(R,"receiveShadow",B.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(an.envMap.value=Fe,an.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&k.environment!==null&&(an.envMapIntensity.value=k.environmentIntensity),Ht&&(ft.setValue(R,"toneMappingExposure",_.toneMappingExposure),ke.needsLights&&yh(an,ss),ve&&Z.fog===!0&&O.refreshFogUniforms(an,ve),O.refreshMaterialUniforms(an,Z,H,ne,p.state.transmissionRenderTarget[b.id]),gr.upload(R,$o(ke),an,E)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(gr.upload(R,$o(ke),an,E),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ft.setValue(R,"center",B.center),ft.setValue(R,"modelViewMatrix",B.modelViewMatrix),ft.setValue(R,"normalMatrix",B.normalMatrix),ft.setValue(R,"modelMatrix",B.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Xt=Z.uniformsGroups;for(let In=0,Dn=Xt.length;In<Dn;In++){const qo=Xt[In];U.update(qo,Jt),U.bind(qo,Jt)}}return Jt}function yh(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function Mh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,k,q){Re.get(b.texture).__webglTexture=k,Re.get(b.depthTexture).__webglTexture=q;const Z=Re.get(b);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=q===void 0,Z.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,k){const q=Re.get(b);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,q=0){C=b,A=k,T=q;let Z=!0,B=null,ve=!1,Ae=!1;if(b){const Fe=Re.get(b);if(Fe.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(R.FRAMEBUFFER,null),Z=!1;else if(Fe.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(Fe.__hasExternalTextures)E.rebindTextures(b,Re.get(b.texture).__webglTexture,Re.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Oe=b.depthTexture;if(Fe.__boundDepthTexture!==Oe){if(Oe!==null&&Re.has(Oe)&&(b.width!==Oe.image.width||b.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}const Ve=b.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ae=!0);const $e=Re.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray($e[k])?B=$e[k][q]:B=$e[k],ve=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?B=Re.get(b).__webglMultisampledFramebuffer:Array.isArray($e)?B=$e[q]:B=$e,L.copy(b.viewport),X.copy(b.scissor),z=b.scissorTest}else L.copy(G).multiplyScalar(H).floor(),X.copy(se).multiplyScalar(H).floor(),z=ce;if(ye.bindFramebuffer(R.FRAMEBUFFER,B)&&Z&&ye.drawBuffers(b,B),ye.viewport(L),ye.scissor(X),ye.setScissorTest(z),ve){const Fe=Re.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+k,Fe.__webglTexture,q)}else if(Ae){const Fe=Re.get(b.texture),Ve=k||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Fe.__webglTexture,q||0,Ve)}w=-1},this.readRenderTargetPixels=function(b,k,q,Z,B,ve,Ae){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Re.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ne=Ne[Ae]),Ne){ye.bindFramebuffer(R.FRAMEBUFFER,Ne);try{const Fe=b.texture,Ve=Fe.format,$e=Fe.type;if(!Ee.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-Z&&q>=0&&q<=b.height-B&&R.readPixels(k,q,Z,B,We.convert(Ve),We.convert($e),ve)}finally{const Fe=C!==null?Re.get(C).__webglFramebuffer:null;ye.bindFramebuffer(R.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(b,k,q,Z,B,ve,Ae){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Re.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ne=Ne[Ae]),Ne){const Fe=b.texture,Ve=Fe.format,$e=Fe.type;if(!Ee.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ee.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=b.width-Z&&q>=0&&q<=b.height-B){ye.bindFramebuffer(R.FRAMEBUFFER,Ne);const Oe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Oe),R.bufferData(R.PIXEL_PACK_BUFFER,ve.byteLength,R.STREAM_READ),R.readPixels(k,q,Z,B,We.convert(Ve),We.convert($e),0);const tt=C!==null?Re.get(C).__webglFramebuffer:null;ye.bindFramebuffer(R.FRAMEBUFFER,tt);const ht=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Au(R,ht,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Oe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ve),R.deleteBuffer(Oe),R.deleteSync(ht),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,k=null,q=0){b.isTexture!==!0&&(ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1]);const Z=Math.pow(2,-q),B=Math.floor(b.image.width*Z),ve=Math.floor(b.image.height*Z),Ae=k!==null?k.x:0,Ne=k!==null?k.y:0;E.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,q,0,0,Ae,Ne,B,ve),ye.unbindTexture()},this.copyTextureToTexture=function(b,k,q=null,Z=null,B=0){b.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,b=arguments[1],k=arguments[2],B=arguments[3]||0,q=null);let ve,Ae,Ne,Fe,Ve,$e,Oe,tt,ht;const ut=b.isCompressedTexture?b.mipmaps[B]:b.image;q!==null?(ve=q.max.x-q.min.x,Ae=q.max.y-q.min.y,Ne=q.isBox3?q.max.z-q.min.z:1,Fe=q.min.x,Ve=q.min.y,$e=q.isBox3?q.min.z:0):(ve=ut.width,Ae=ut.height,Ne=ut.depth||1,Fe=0,Ve=0,$e=0),Z!==null?(Oe=Z.x,tt=Z.y,ht=Z.z):(Oe=0,tt=0,ht=0);const Ot=We.convert(k.format),nt=We.convert(k.type);let ke;k.isData3DTexture?(E.setTexture3D(k,0),ke=R.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(E.setTexture2DArray(k,0),ke=R.TEXTURE_2D_ARRAY):(E.setTexture2D(k,0),ke=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,k.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,k.unpackAlignment);const mn=R.getParameter(R.UNPACK_ROW_LENGTH),it=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Jt=R.getParameter(R.UNPACK_SKIP_PIXELS),vi=R.getParameter(R.UNPACK_SKIP_ROWS),Ht=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ut.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ut.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Fe),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ve),R.pixelStorei(R.UNPACK_SKIP_IMAGES,$e);const ss=b.isDataArrayTexture||b.isData3DTexture,ft=k.isDataArrayTexture||k.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const an=Re.get(b),rs=Re.get(k),Xt=Re.get(an.__renderTarget),In=Re.get(rs.__renderTarget);ye.bindFramebuffer(R.READ_FRAMEBUFFER,Xt.__webglFramebuffer),ye.bindFramebuffer(R.DRAW_FRAMEBUFFER,In.__webglFramebuffer);for(let Dn=0;Dn<Ne;Dn++)ss&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Re.get(b).__webglTexture,B,$e+Dn),b.isDepthTexture?(ft&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Re.get(k).__webglTexture,B,ht+Dn),R.blitFramebuffer(Fe,Ve,ve,Ae,Oe,tt,ve,Ae,R.DEPTH_BUFFER_BIT,R.NEAREST)):ft?R.copyTexSubImage3D(ke,B,Oe,tt,ht+Dn,Fe,Ve,ve,Ae):R.copyTexSubImage2D(ke,B,Oe,tt,ht+Dn,Fe,Ve,ve,Ae);ye.bindFramebuffer(R.READ_FRAMEBUFFER,null),ye.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else ft?b.isDataTexture||b.isData3DTexture?R.texSubImage3D(ke,B,Oe,tt,ht,ve,Ae,Ne,Ot,nt,ut.data):k.isCompressedArrayTexture?R.compressedTexSubImage3D(ke,B,Oe,tt,ht,ve,Ae,Ne,Ot,ut.data):R.texSubImage3D(ke,B,Oe,tt,ht,ve,Ae,Ne,Ot,nt,ut):b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,B,Oe,tt,ve,Ae,Ot,nt,ut.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,B,Oe,tt,ut.width,ut.height,Ot,ut.data):R.texSubImage2D(R.TEXTURE_2D,B,Oe,tt,ve,Ae,Ot,nt,ut);R.pixelStorei(R.UNPACK_ROW_LENGTH,mn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,it),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Jt),R.pixelStorei(R.UNPACK_SKIP_ROWS,vi),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ht),B===0&&k.generateMipmaps&&R.generateMipmap(ke),ye.unbindTexture()},this.copyTextureToTexture3D=function(b,k,q=null,Z=null,B=0){return b.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Z=arguments[1]||null,b=arguments[2],k=arguments[3],B=arguments[4]||0),ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,k,q,Z,B)},this.initRenderTarget=function(b){Re.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),ye.unbindTexture()},this.resetState=function(){A=0,T=0,C=null,ye.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}class qc extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Zc extends Ut{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Rt,h=Rt,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class H0 extends Ut{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const h=i[s],f=i[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ge:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new I,s=[],r=[],a=[],o=new I,l=new dt;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Tt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Tt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ao extends dn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ge){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class G0 extends Ao{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ro(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const er=new I,ca=new Ro,ha=new Ro,ua=new Ro;class Jc extends dn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(er.subVectors(s[0],s[1]).add(s[0]),c=er);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(er.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=er),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ca.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,m),ha.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,m),ua.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(ca.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ha.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),ua.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(ca.calc(l),ha.calc(l),ua.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Yl(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function V0(n,e){const t=1-n;return t*t*e}function W0(n,e){return 2*(1-n)*n*e}function X0(n,e){return n*n*e}function Ms(n,e,t,i){return V0(n,e)+W0(n,t)+X0(n,i)}function $0(n,e){const t=1-n;return t*t*t*e}function Y0(n,e){const t=1-n;return 3*t*t*n*e}function q0(n,e){return 3*(1-n)*n*n*e}function Z0(n,e){return n*n*n*e}function Ss(n,e,t,i,s){return $0(n,e)+Y0(n,t)+q0(n,i)+Z0(n,s)}class jc extends dn{constructor(e=new ge,t=new ge,i=new ge,s=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ge){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ss(e,s.x,r.x,a.x,o.x),Ss(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class J0 extends dn{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ss(e,s.x,r.x,a.x,o.x),Ss(e,s.y,r.y,a.y,o.y),Ss(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Kc extends dn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class j0 extends dn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qc extends dn{constructor(e=new ge,t=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ge){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Ms(e,s.x,r.x,a.x),Ms(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class eh extends dn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Ms(e,s.x,r.x,a.x),Ms(e,s.y,r.y,a.y),Ms(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class th extends dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Yl(o,l.x,c.x,h.x,u.x),Yl(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ge().fromArray(s))}return this}}var yr=Object.freeze({__proto__:null,ArcCurve:G0,CatmullRomCurve3:Jc,CubicBezierCurve:jc,CubicBezierCurve3:J0,EllipseCurve:Ao,LineCurve:Kc,LineCurve3:j0,QuadraticBezierCurve:Qc,QuadraticBezierCurve3:eh,SplineCurve:th});class K0 extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yr[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new yr[s.type]().fromJSON(s))}return this}}class ql extends K0{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Kc(this.currentPoint.clone(),new ge(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Qc(this.currentPoint.clone(),new ge(e,t),new ge(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){const o=new jc(this.currentPoint.clone(),new ge(e,t),new ge(i,s),new ge(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new th(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){const c=new Ao(e,t,i,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Co extends Pt{constructor(e=[new ge(0,-.5),new ge(.5,0),new ge(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Tt(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,u=new I,f=new ge,d=new I,g=new I,v=new I;let m=0,p=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(g)}for(let S=0;S<=t;S++){const x=i+S*h*s,_=Math.sin(x),P=Math.cos(x);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*_,u.y=e[A].y,u.z=e[A].x*P,a.push(u.x,u.y,u.z),f.x=S/t,f.y=A/(e.length-1),o.push(f.x,f.y);const T=l[3*A+0]*_,C=l[3*A+1],w=l[3*A+0]*P;c.push(T,C,w)}}for(let S=0;S<t;S++)for(let x=0;x<e.length-1;x++){const _=x+S*e.length,P=_,A=_+e.length,T=_+e.length+1,C=_+1;r.push(P,A,C),r.push(T,C,A)}this.setIndex(r),this.setAttribute("position",new Qe(a,3)),this.setAttribute("uv",new Qe(o,2)),this.setAttribute("normal",new Qe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.points,e.segments,e.phiStart,e.phiLength)}}class fi extends Pt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const v=[],m=i/2;let p=0;S(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(d,2));function S(){const _=new I,P=new I;let A=0;const T=(t-e)/i;for(let C=0;C<=r;C++){const w=[],y=C/r,L=y*(t-e)+e;for(let X=0;X<=s;X++){const z=X/s,j=z*l+o,Q=Math.sin(j),J=Math.cos(j);P.x=L*Q,P.y=-y*i+m,P.z=L*J,u.push(P.x,P.y,P.z),_.set(Q,T,J).normalize(),f.push(_.x,_.y,_.z),d.push(z,1-y),w.push(g++)}v.push(w)}for(let C=0;C<s;C++)for(let w=0;w<r;w++){const y=v[w][C],L=v[w+1][C],X=v[w+1][C+1],z=v[w][C+1];(e>0||w!==0)&&(h.push(y,L,z),A+=3),(t>0||w!==r-1)&&(h.push(L,X,z),A+=3)}c.addGroup(p,A,0),p+=A}function x(_){const P=g,A=new ge,T=new I;let C=0;const w=_===!0?e:t,y=_===!0?1:-1;for(let X=1;X<=s;X++)u.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const L=g;for(let X=0;X<=s;X++){const j=X/s*l+o,Q=Math.cos(j),J=Math.sin(j);T.x=w*J,T.y=m*y,T.z=w*Q,u.push(T.x,T.y,T.z),f.push(0,y,0),A.x=Q*.5+.5,A.y=J*.5*y+.5,d.push(A.x,A.y),g++}for(let X=0;X<s;X++){const z=P+X,j=L+X;_===!0?h.push(j,j+1,z):h.push(j+1,j,z),C+=3}c.addGroup(p,C,_===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cr extends fi{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Cr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pr extends Pt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(r.slice(),3)),this.setAttribute("uv",new Qe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const x=new I,_=new I,P=new I;for(let A=0;A<t.length;A+=3)d(t[A+0],x),d(t[A+1],_),d(t[A+2],P),l(x,_,P,S)}function l(S,x,_,P){const A=P+1,T=[];for(let C=0;C<=A;C++){T[C]=[];const w=S.clone().lerp(_,C/A),y=x.clone().lerp(_,C/A),L=A-C;for(let X=0;X<=L;X++)X===0&&C===A?T[C][X]=w:T[C][X]=w.clone().lerp(y,X/L)}for(let C=0;C<A;C++)for(let w=0;w<2*(A-C)-1;w++){const y=Math.floor(w/2);w%2===0?(f(T[C][y+1]),f(T[C+1][y]),f(T[C][y])):(f(T[C][y+1]),f(T[C+1][y+1]),f(T[C+1][y]))}}function c(S){const x=new I;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(S),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function h(){const S=new I;for(let x=0;x<r.length;x+=3){S.x=r[x+0],S.y=r[x+1],S.z=r[x+2];const _=m(S)/2/Math.PI+.5,P=p(S)/Math.PI+.5;a.push(_,1-P)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){const x=a[S+0],_=a[S+2],P=a[S+4],A=Math.max(x,_,P),T=Math.min(x,_,P);A>.9&&T<.1&&(x<.2&&(a[S+0]+=1),_<.2&&(a[S+2]+=1),P<.2&&(a[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,x){const _=S*3;x.x=e[_+0],x.y=e[_+1],x.z=e[_+2]}function g(){const S=new I,x=new I,_=new I,P=new I,A=new ge,T=new ge,C=new ge;for(let w=0,y=0;w<r.length;w+=9,y+=6){S.set(r[w+0],r[w+1],r[w+2]),x.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),A.set(a[y+0],a[y+1]),T.set(a[y+2],a[y+3]),C.set(a[y+4],a[y+5]),P.copy(S).add(x).add(_).divideScalar(3);const L=m(P);v(A,y+0,S,L),v(T,y+2,x,L),v(C,y+4,_,L)}}function v(S,x,_,P){P<0&&S.x===1&&(a[x]=S.x-1),_.x===0&&_.z===0&&(a[x]=P/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.vertices,e.indices,e.radius,e.details)}}class Lr extends ql{constructor(e){super(e),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new ql().fromJSON(s))}return this}}const Q0={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=nh(n,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,d;if(i&&(r=sg(n,e,r,t)),n.length>80*t){o=c=n[0],l=h=n[1];for(let g=t;g<s;g+=t)u=n[g],f=n[g+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Ts(r,a,t,o,l,d,0),a}};function nh(n,e,t,i,s){let r,a;if(s===mg(n,e,t,i)>0)for(r=e;r<t;r+=i)a=Zl(r,n[r],n[r+1],a);else for(r=t-i;r>=e;r-=i)a=Zl(r,n[r],n[r+1],a);return a&&Ir(a,a.next)&&(Rs(a),a=a.next),a}function di(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ir(t,t.next)||pt(t.prev,t,t.next)===0)){if(Rs(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ts(n,e,t,i,s,r,a){if(!n)return;!a&&r&&cg(n,i,s,r);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?tg(n,i,s,r):eg(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Rs(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=ng(di(n),e,t),Ts(n,e,t,i,s,r,2)):a===2&&ig(n,e,t,i,s,r):Ts(di(n),e,t,i,s,r,1);break}}}function eg(n){const e=n.prev,t=n,i=n.next;if(pt(e,t,i)>=0)return!1;const s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Vi(s,o,r,l,a,c,g.x,g.y)&&pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function tg(n,e,t,i){const s=n.prev,r=n,a=n.next;if(pt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,v=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=lo(d,g,e,t,i),S=lo(v,m,e,t,i);let x=n.prevZ,_=n.nextZ;for(;x&&x.z>=p&&_&&_.z<=S;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Vi(o,h,l,u,c,f,x.x,x.y)&&pt(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Vi(o,h,l,u,c,f,_.x,_.y)&&pt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Vi(o,h,l,u,c,f,x.x,x.y)&&pt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=S;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Vi(o,h,l,u,c,f,_.x,_.y)&&pt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function ng(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!Ir(s,r)&&ih(s,i,i.next,r)&&As(s,r)&&As(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Rs(i),Rs(i.next),i=n=r),i=i.next}while(i!==n);return di(i)}function ig(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&fg(a,o)){let l=sh(a,o);a=di(a,a.next),l=di(l,l.next),Ts(a,e,t,i,s,r,0),Ts(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function sg(n,e,t,i){const s=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=nh(n,o,l,i,!1),c===c.next&&(c.steiner=!0),s.push(ug(c));for(s.sort(rg),r=0;r<s.length;r++)t=ag(s[r],t);return t}function rg(n,e){return n.x-e.x}function ag(n,e){const t=og(n,e);if(!t)return e;const i=sh(t,n);return di(i,i.next),di(t,t.next)}function og(n,e){let t=e,i=-1/0,s;const r=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Vi(a<c?r:i,a,l,c,a<c?i:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),As(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&lg(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function lg(n,e){return pt(n.prev,n,e.prev)<0&&pt(e.next,n,n.next)<0}function cg(n,e,t,i){let s=n;do s.z===0&&(s.z=lo(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,hg(s)}function hg(n){let e,t,i,s,r,a,o,l,c=1;do{for(t=n,n=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(a>1);return n}function lo(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function ug(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Vi(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function fg(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!dg(n,e)&&(As(n,e)&&As(e,n)&&pg(n,e)&&(pt(n.prev,n,e.prev)||pt(n,e.prev,e))||Ir(n,e)&&pt(n.prev,n,n.next)>0&&pt(e.prev,e,e.next)>0)}function pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ir(n,e){return n.x===e.x&&n.y===e.y}function ih(n,e,t,i){const s=nr(pt(n,e,t)),r=nr(pt(n,e,i)),a=nr(pt(t,i,n)),o=nr(pt(t,i,e));return!!(s!==r&&a!==o||s===0&&tr(n,t,e)||r===0&&tr(n,i,e)||a===0&&tr(t,n,i)||o===0&&tr(t,e,i))}function tr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function nr(n){return n>0?1:n<0?-1:0}function dg(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&ih(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function As(n,e){return pt(n.prev,n,n.next)<0?pt(n,e,n.next)>=0&&pt(n,n.prev,e)>=0:pt(n,e,n.prev)<0||pt(n,n.next,e)<0}function pg(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function sh(n,e){const t=new co(n.i,n.x,n.y),i=new co(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Zl(n,e,t,i){const s=new co(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Rs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function co(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function mg(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class $n{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return $n.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Jl(e),jl(i,e);let a=e.length;t.forEach(Jl);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,jl(i,t[l]);const o=Q0.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Jl(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function jl(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Po extends Pt{constructor(e=new Lr([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Qe(s,3)),this.setAttribute("uv",new Qe(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:gg;let x,_=!1,P,A,T,C;p&&(x=p.getSpacedPoints(h),_=!0,f=!1,P=p.computeFrenetFrames(h,!1),A=new I,T=new I,C=new I),f||(m=0,d=0,g=0,v=0);const w=o.extractPoints(c);let y=w.shape;const L=w.holes;if(!$n.isClockWise(y)){y=y.reverse();for(let re=0,pe=L.length;re<pe;re++){const R=L[re];$n.isClockWise(R)&&(L[re]=R.reverse())}}const z=$n.triangulateShape(y,L),j=y;for(let re=0,pe=L.length;re<pe;re++){const R=L[re];y=y.concat(R)}function Q(re,pe,R){return pe||console.error("THREE.ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(pe,R)}const J=y.length,ne=z.length;function H(re,pe,R){let De,de,Ee;const ye=re.x-pe.x,we=re.y-pe.y,Re=R.x-re.x,E=R.y-re.y,M=ye*ye+we*we,V=ye*E-we*Re;if(Math.abs(V)>Number.EPSILON){const ee=Math.sqrt(M),D=Math.sqrt(Re*Re+E*E),N=pe.x-we/ee,W=pe.y+ye/ee,O=R.x-E/D,ae=R.y+Re/D,Le=((O-N)*E-(ae-W)*Re)/(ye*E-we*Re);De=N+ye*Le-re.x,de=W+we*Le-re.y;const oe=De*De+de*de;if(oe<=2)return new ge(De,de);Ee=Math.sqrt(oe/2)}else{let ee=!1;ye>Number.EPSILON?Re>Number.EPSILON&&(ee=!0):ye<-Number.EPSILON?Re<-Number.EPSILON&&(ee=!0):Math.sign(we)===Math.sign(E)&&(ee=!0),ee?(De=-we,de=ye,Ee=Math.sqrt(M)):(De=ye,de=we,Ee=Math.sqrt(M/2))}return new ge(De/Ee,de/Ee)}const xe=[];for(let re=0,pe=j.length,R=pe-1,De=re+1;re<pe;re++,R++,De++)R===pe&&(R=0),De===pe&&(De=0),xe[re]=H(j[re],j[R],j[De]);const F=[];let G,se=xe.concat();for(let re=0,pe=L.length;re<pe;re++){const R=L[re];G=[];for(let De=0,de=R.length,Ee=de-1,ye=De+1;De<de;De++,Ee++,ye++)Ee===de&&(Ee=0),ye===de&&(ye=0),G[De]=H(R[De],R[Ee],R[ye]);F.push(G),se=se.concat(G)}for(let re=0;re<m;re++){const pe=re/m,R=d*Math.cos(pe*Math.PI/2),De=g*Math.sin(pe*Math.PI/2)+v;for(let de=0,Ee=j.length;de<Ee;de++){const ye=Q(j[de],xe[de],De);te(ye.x,ye.y,-R)}for(let de=0,Ee=L.length;de<Ee;de++){const ye=L[de];G=F[de];for(let we=0,Re=ye.length;we<Re;we++){const E=Q(ye[we],G[we],De);te(E.x,E.y,-R)}}}const ce=g+v;for(let re=0;re<J;re++){const pe=f?Q(y[re],se[re],ce):y[re];_?(T.copy(P.normals[0]).multiplyScalar(pe.x),A.copy(P.binormals[0]).multiplyScalar(pe.y),C.copy(x[0]).add(T).add(A),te(C.x,C.y,C.z)):te(pe.x,pe.y,0)}for(let re=1;re<=h;re++)for(let pe=0;pe<J;pe++){const R=f?Q(y[pe],se[pe],ce):y[pe];_?(T.copy(P.normals[re]).multiplyScalar(R.x),A.copy(P.binormals[re]).multiplyScalar(R.y),C.copy(x[re]).add(T).add(A),te(C.x,C.y,C.z)):te(R.x,R.y,u/h*re)}for(let re=m-1;re>=0;re--){const pe=re/m,R=d*Math.cos(pe*Math.PI/2),De=g*Math.sin(pe*Math.PI/2)+v;for(let de=0,Ee=j.length;de<Ee;de++){const ye=Q(j[de],xe[de],De);te(ye.x,ye.y,u+R)}for(let de=0,Ee=L.length;de<Ee;de++){const ye=L[de];G=F[de];for(let we=0,Re=ye.length;we<Re;we++){const E=Q(ye[we],G[we],De);_?te(E.x,E.y+x[h-1].y,x[h-1].x+R):te(E.x,E.y,u+R)}}}$(),Y();function $(){const re=s.length/3;if(f){let pe=0,R=J*pe;for(let De=0;De<ne;De++){const de=z[De];_e(de[2]+R,de[1]+R,de[0]+R)}pe=h+m*2,R=J*pe;for(let De=0;De<ne;De++){const de=z[De];_e(de[0]+R,de[1]+R,de[2]+R)}}else{for(let pe=0;pe<ne;pe++){const R=z[pe];_e(R[2],R[1],R[0])}for(let pe=0;pe<ne;pe++){const R=z[pe];_e(R[0]+J*h,R[1]+J*h,R[2]+J*h)}}i.addGroup(re,s.length/3-re,0)}function Y(){const re=s.length/3;let pe=0;ie(j,pe),pe+=j.length;for(let R=0,De=L.length;R<De;R++){const de=L[R];ie(de,pe),pe+=de.length}i.addGroup(re,s.length/3-re,1)}function ie(re,pe){let R=re.length;for(;--R>=0;){const De=R;let de=R-1;de<0&&(de=re.length-1);for(let Ee=0,ye=h+m*2;Ee<ye;Ee++){const we=J*Ee,Re=J*(Ee+1),E=pe+De+we,M=pe+de+we,V=pe+de+Re,ee=pe+De+Re;Ue(E,M,V,ee)}}}function te(re,pe,R){l.push(re),l.push(pe),l.push(R)}function _e(re,pe,R){Pe(re),Pe(pe),Pe(R);const De=s.length/3,de=S.generateTopUV(i,s,De-3,De-2,De-1);Ge(de[0]),Ge(de[1]),Ge(de[2])}function Ue(re,pe,R,De){Pe(re),Pe(pe),Pe(De),Pe(pe),Pe(R),Pe(De);const de=s.length/3,Ee=S.generateSideWallUV(i,s,de-6,de-3,de-2,de-1);Ge(Ee[0]),Ge(Ee[1]),Ge(Ee[3]),Ge(Ee[1]),Ge(Ee[2]),Ge(Ee[3])}function Pe(re){s.push(l[re*3+0]),s.push(l[re*3+1]),s.push(l[re*3+2])}function Ge(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return _g(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];i.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new yr[s.type]().fromJSON(s)),new Po(i,e.options)}}const gg={generateTopUV:function(n,e,t,i,s){const r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ge(r,a),new ge(o,l),new ge(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ge(a,1-l),new ge(c,1-u),new ge(f,1-g),new ge(v,1-p)]:[new ge(o,1-l),new ge(h,1-u),new ge(d,1-g),new ge(m,1-p)]}};function _g(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Lo extends Pr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Lo(e.radius,e.detail)}}class Io extends Pr{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Io(e.radius,e.detail)}}class Do extends Pt{constructor(e=new Lr([new ge(0,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Qe(s,3)),this.setAttribute("normal",new Qe(r,3)),this.setAttribute("uv",new Qe(a,2));function c(h){const u=s.length/3,f=h.extractPoints(t);let d=f.shape;const g=f.holes;$n.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const S=g[m];$n.isClockWise(S)===!0&&(g[m]=S.reverse())}const v=$n.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const S=g[m];d=d.concat(S)}for(let m=0,p=d.length;m<p;m++){const S=d[m];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let m=0,p=v.length;m<p;m++){const S=v[m],x=S[0]+u,_=S[1]+u,P=S[2]+u;i.push(x,_,P),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return vg(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];i.push(a)}return new Do(i,e.curveSegments)}}function vg(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class pi extends Pt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new I,f=new I,d=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const S=[],x=p/i;let _=0;p===0&&a===0?_=.5/t:p===i&&l===Math.PI&&(_=-.5/t);for(let P=0;P<=t;P++){const A=P/t;u.x=-e*Math.cos(s+A*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(s+A*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(A+_,1-x),S.push(c++)}h.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){const x=h[p][S+1],_=h[p][S],P=h[p+1][S],A=h[p+1][S+1];(p!==0||a>0)&&d.push(x,_,A),(p!==i-1||l<Math.PI)&&d.push(_,P,A)}this.setIndex(d),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Uo extends Pt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new I,u=new I,f=new I;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const v=g/s*r,m=d/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const v=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,S=(s+1)*d+g;a.push(v,m,S),a.push(m,p,S)}this.setIndex(a),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class No extends Pt{constructor(e=new eh(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new I,l=new I,c=new ge;let h=new I;const u=[],f=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(d,2));function v(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),S(),p()}function m(x){h=e.getPointAt(x/t,h);const _=a.normals[x],P=a.binormals[x];for(let A=0;A<=s;A++){const T=A/s*Math.PI*2,C=Math.sin(T),w=-Math.cos(T);l.x=w*_.x+C*P.x,l.y=w*_.y+C*P.y,l.z=w*_.z+C*P.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=t;x++)for(let _=1;_<=s;_++){const P=(s+1)*(x-1)+(_-1),A=(s+1)*x+(_-1),T=(s+1)*x+_,C=(s+1)*(x-1)+_;g.push(P,A,C),g.push(A,T,C)}}function S(){for(let x=0;x<=t;x++)for(let _=0;_<=s;_++)c.x=x/t,c.y=_/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new No(new yr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class xg extends Ps{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new je(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Fo extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class yg extends Fo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const fa=new dt,Kl=new I,Ql=new I;class rh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Kl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kl),Ql.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ql),t.updateMatrixWorld(),fa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ec=new dt,hs=new I,da=new I;class Mg extends rh{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),hs.setFromMatrixPosition(e.matrixWorld),i.position.copy(hs),da.copy(i.position),da.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(da),i.updateMatrixWorld(),s.makeTranslation(-hs.x,-hs.y,-hs.z),ec.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec)}}class Sg extends Fo{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Mg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class bg extends rh{constructor(){super(new Ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wg extends Fo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new bg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=go);const hn="#5b3520",Mr={trunk:"#e2a574",leaf:"#83c47b",fir:"#8ccf87"};function lt(n){let e=(Math.imul(n|0,2654435761)^2654435769)>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>>17,e^=e<<5,e>>>=0,e/4294967296)}function wt(n,e){const t=document.createElement("canvas");return t.width=Math.round(n),t.height=Math.round(e),[t,t.getContext("2d")]}function Eg(n,e,{amp:t=1.5,step:i=5,closed:s=!1}={}){const r=[],a=n.length,o=s?a:a-1,l=e()*6.28,c=e()*6.28;let h=0;for(let u=0;u<o;u++){const[f,d]=n[u],[g,v]=n[(u+1)%a],m=Math.hypot(g-f,v-d)||1,p=-(v-d)/m,S=(g-f)/m,x=Math.max(1,Math.ceil(m/i));for(let _=0;_<x;_++){const P=_/x,A=t*(Math.sin(h*.045+l)*.65+Math.sin(h*.17+c)*.35);r.push([f+(g-f)*P+p*A,d+(v-d)*P+S*A]),h+=m/x}}return s||r.push(n[a-1].slice()),r}function st(n,e,t,{w:i=3,color:s=hn,closed:r=!1,amp:a=1.3}={}){const o=Eg(e,t,{amp:a,closed:r});r&&o.push(o[0]);const l=t()*6.28,c=.12+t()*.14;n.strokeStyle=s,n.lineCap="round",n.lineJoin="round";for(let h=0;h<o.length-1;h++)n.lineWidth=i*(.7+.55*(.5+.5*Math.sin(h*c+l))),n.beginPath(),n.moveTo(o[h][0],o[h][1]),n.lineTo(o[h+1][0],o[h+1][1]),n.stroke()}function ah(n,e){n.beginPath(),n.moveTo(e[0][0],e[0][1]);for(const t of e)n.lineTo(t[0],t[1]);n.closePath()}function yt(n,e,t){n.fillStyle=t,ah(n,e),n.fill()}function oh(n,e,t){n.save(),ah(n,e),n.clip(),t(),n.restore()}function gt(n,e,t,i,s,{n:r=40,lump:a=.08}={}){const o=2+Math.floor(s()*3),l=s()*6.28,c=5+Math.floor(s()*3),h=s()*6.28,u=[];for(let f=0;f<r;f++){const d=f/r*Math.PI*2,g=1+a*(Math.sin(d*o+l)*.6+Math.sin(d*c+h)*.4);u.push([n+Math.cos(d)*t*g,e+Math.sin(d)*i*g])}return u}function Tg(n,e,t,i,s){const r=[];for(let a=0;a<s;a++){const o=Math.PI+a/s*Math.PI,l=Math.PI+(a+1)/s*Math.PI,c=n+Math.cos(o)*t,h=e+Math.sin(o)*i,u=n+Math.cos(l)*t,f=e+Math.sin(l)*i,d=(c+u)/2,g=(h+f)/2,v=Math.hypot(u-c,f-h)/2,m=Math.atan2(h-g,c-d),p=Math.atan2(g-e,d-n),S=Math.cos(m+Math.PI/2-p)>0?1:-1;for(let x=0;x<8;x++){const _=m+S*(x/8)*Math.PI;r.push([d+Math.cos(_)*v,g+Math.sin(_)*v*1.05])}}for(let a=0;a<=10;a++){const o=a/10*Math.PI;r.push([n+Math.cos(o)*t,e+Math.sin(o)*i*.45])}return r}function Ag(){const[n,e]=wt(128,64),t=e.createRadialGradient(64,32,4,64,32,62);return t.addColorStop(0,"rgba(50,95,55,.42)"),t.addColorStop(.7,"rgba(50,95,55,.3)"),t.addColorStop(1,"rgba(50,95,55,0)"),e.setTransform(1,0,0,.5,0,16),e.fillStyle=t,e.beginPath(),e.arc(64,32,62,0,Math.PI*2),e.fill(),n}const Rg=new rn({side:At,vertexShader:`
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
    }`}),Cg=new rn({side:At,uniforms:{map:{value:null}},vertexShader:`
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
    }`}),Di=new rn({uniforms:{tColor:{value:null},tND:{value:null},texel:{value:new ge},seed:{value:0},lineW:{value:1.3},ink:{value:new je(hn)}},depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
    }`});function Pg(n){const e=new Pn(1,1,{samples:4,type:ui}),t=new Pn(1,1,{type:ui,minFilter:Rt,magFilter:Rt}),i=new _t(new Rn(2,2),Di),s=new qc;s.add(i);const r=new Ar(-1,1,1,-1,0,1),a=new ge,o=[];function l(){n.getDrawingBufferSize(a),e.setSize(a.x,a.y),t.setSize(a.x,a.y),Di.uniforms.texel.value.set(1/a.x,1/a.y),Di.uniforms.lineW.value=1.25*n.getPixelRatio()}function c(h,u,f){n.getDrawingBufferSize(a),(a.x!==e.width||a.y!==e.height)&&l(),n.setRenderTarget(e),n.render(h,u);const d=h.background;h.background=null,h.traverse(v=>{if(!(!v.isMesh||!v.visible)){if(v.userData.noInk){v.visible=!1,o.push([v,null]);return}o.push([v,v.material]),v.userData.sprite?(v.material=Cg,v.onBeforeRender=Ig):v.material=Rg}});const g=n.getClearAlpha();n.getClearColor(tc),n.setClearColor(0,0),n.setRenderTarget(t),n.render(h,u),n.setClearColor(tc,g);for(const[v,m]of o)m?(v.material=m,v.onBeforeRender=Lg):v.visible=!0;o.length=0,h.background=d,Di.uniforms.tColor.value=e.texture,Di.uniforms.tND.value=t.texture,Di.uniforms.seed.value=f,n.setRenderTarget(null),n.render(s,r)}return{render:c,setSize:l}}const tc=new je,Lg=()=>{};function Ig(n,e,t,i,s){s.uniforms.map.value=this.userData.colorMap(),s.uniformsNeedUpdate=!0}function Dg(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Pt;let c=0;for(let h=0;h<n.length;++h){const u=n[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0;const u=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=nc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let v=0;v<a[h].length;++v)d.push(a[h][v][f]);const g=nc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function nc(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new sn(a,t,i);let l=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){const v=h.getComponent(f,g);o.setComponent(f+u,g,v)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Ug(n,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count;let a=0;const o=Object.keys(n.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let S=0,x=o.length;S<x;S++){const _=o[S],P=n.attributes[_];l[_]=new P.constructor(new P.array.constructor(P.count*P.itemSize),P.itemSize,P.normalized);const A=n.morphAttributes[_];A&&(c[_]||(c[_]=[]),A.forEach((T,C)=>{const w=new T.array.constructor(T.count*T.itemSize);c[_][C]=new T.constructor(w,T.itemSize,T.normalized)}))}const d=e*.5,g=Math.log10(1/e),v=Math.pow(10,g),m=d*v;for(let S=0;S<r;S++){const x=i?i.getX(S):S;let _="";for(let P=0,A=o.length;P<A;P++){const T=o[P],C=n.getAttribute(T),w=C.itemSize;for(let y=0;y<w;y++)_+=`${~~(C[u[y]](x)*v+m)},`}if(_ in t)h.push(t[_]);else{for(let P=0,A=o.length;P<A;P++){const T=o[P],C=n.getAttribute(T),w=n.morphAttributes[T],y=C.itemSize,L=l[T],X=c[T];for(let z=0;z<y;z++){const j=u[z],Q=f[z];if(L[Q](a,C[j](x)),w)for(let J=0,ne=w.length;J<ne;J++)X[J][Q](a,w[J][j](x))}}t[_]=a,h.push(a),a++}}const p=n.clone();for(const S in n.attributes){const x=l[S];if(p.setAttribute(S,new x.constructor(x.array.slice(0,a*x.itemSize),x.itemSize,x.normalized)),S in c)for(let _=0;_<c[S].length;_++){const P=c[S][_];p.morphAttributes[S][_]=new P.constructor(P.array.slice(0,a*P.itemSize),P.itemSize,P.normalized)}}return p.setIndex(h),p}const Ng=(()=>{const n=new Zc(new Uint8Array([120,255]),2,1,Er);return n.minFilter=n.magFilter=Rt,n.needsUpdate=!0,n})(),pa=new Map;function Qi(n,e={}){const t=n+JSON.stringify(e,(i,s)=>s&&s.isTexture?s.uuid:s);return pa.has(t)||pa.set(t,new xg({color:n,gradientMap:Ng,...e})),pa.get(t)}function Tn(n,e=!1){const t=new H0(n);return t.colorSpace=kt,t.anisotropy=8,e&&(t.wrapS=t.wrapT=_r),t}const lh=new I(0,1,0),Fg=new dt,Oo=new gi,ch=new I,hh=new I;function ko(n,e,t=Oo.identity(),i=ch.set(1,1,1)){return n.clone().applyMatrix4(Fg.compose(e,t,i))}function Og(n){return n.attributes.uv||n.setAttribute("uv",new Qe(new Float32Array(n.attributes.position.count*2),2)),n}function ho(n,e){return new _t(Dg(n.map(Og)),e)}const kg=new pi(1,12,8);function ic(n,e,t,i){const s=3+Math.floor(t()*3);for(let r=0;r<s;r++){const a=r/s*Math.PI*2+t(),o=r===0?0:e*.55,l=e*(r===0?1:.62+t()*.2);i.push(ko(kg,hh.set(n.x+Math.cos(a)*o,n.y+(r===0?e*.12:0),n.z+Math.sin(a)*o),Oo.identity(),ch.set(l,l*.46,l)))}}function uo(n){const e=lt(n),t=4+e()*.9,i=(e()-.5)*.5,s=new Bt,r=new fi(.06,.2,t,8,12);r.translate(0,t/2,0);const a=r.attributes.position;for(let h=0;h<a.count;h++){const u=a.getY(h)/t,f=u<.1?1+(.1-u)*7:1;a.setXYZ(h,a.getX(h)*f+i*u*u,a.getY(h),a.getZ(h)*f)}r.computeVertexNormals();const o=[r],l=[],c=6+Math.floor(e()*3);for(let h=0;h<c;h++){const u=.3+h/(c-1)*.62,f=h*2.4+e()*.6,d=.35+(1-u)*.95,g=new I(i*u*u,u*t,0),v=new I(Math.cos(f)*.8,.6,Math.sin(f)*.8).normalize(),m=new fi(.025,.05,d,5);o.push(ko(m,g.clone().addScaledVector(v,d/2),new gi().setFromUnitVectors(lh,v))),ic(g.clone().addScaledVector(v,d),.28+(1-u)*.2,e,l)}return ic(new I(i,t+.05,0),.26,e,l),s.add(ho(o,Qi(Mr.trunk)),ho(l,Qi(Mr.leaf))),s}function fo(n){const e=lt(n),t=new Bt,i=4+Math.floor(e()*2),s=new fi(.1,.16,1.2,7);s.translate(0,.6,0);const r=[];for(let a=0;a<i;a++){const o=a/(i-1),l=1.05-.62*o,c=1.25-.3*o,h=.9+o*2.3,u=new Cr(l,c,10,1,!0),f=u.attributes.position;for(let d=0;d<f.count;d++){if(f.getY(d)>-c/2+.01)continue;const g=Math.atan2(f.getZ(d),f.getX(d)),v=Math.round(g/(Math.PI*2/10))%2===0,m=v?1.08:.8;f.setXYZ(d,f.getX(d)*m,f.getY(d)+(v?-.14:.06),f.getZ(d)*m)}u.computeVertexNormals(),r.push(ko(u,hh.set(0,h+c/2,0),Oo.setFromAxisAngle(lh,e()*6)))}return t.add(new _t(s,Qi(Mr.trunk)),ho(r,Qi(Mr.fir,{side:At}))),t}function Vn(n,e){const t=lt(n);let i=new pi(.6,14,10);i.deleteAttribute("uv"),i.deleteAttribute("normal"),i=Ug(i);const s=i.attributes.position;for(let a=0;a<s.count;a++){let o=s.getY(a);o<0&&(o*=.35);const l=1+(t()-.5)*.14;s.setXYZ(a,s.getX(a)*1.15*l,(o+.2)*1.3*l,s.getZ(a)*l)}i.computeVertexNormals();const r=new _t(i,Qi("#d8c6a2"));return r.scale.setScalar(e),r.rotation.y=t()*6.28,r}const sc={night:{g:["#1b2152","#2d3478","#51479a"],cloud:"#3d3f86",cloudShade:"#34367a",cloudInk:"#8d86d8",stars:90,moon:!0},deep:{g:["#0d1233","#152050","#1f2f68"],cloud:null,stars:30},dusk:{g:["#3a3c8c","#9a6fb6","#f2a88a"],cloud:"#c98bb8",cloudShade:"#b77aa8",cloudInk:"#6d5aa8",stars:18},day:{g:["#7fb2e8","#a9cdef","#f3dcb4"],cloud:"#f6eef8",cloudShade:"#e2d6ee",cloudInk:"#7a78b8",stars:0},storm:{g:["#3c3f5e","#5a5d80","#7c7f9a"],cloud:"#6b6d8c",cloudShade:"#585a78",cloudInk:"#2e3050",stars:0}};function Bg(n,e=1024,t=640){const i=sc[n]||sc.night,[s,r]=wt(e,t),a=lt(61),o=lt(62+n.length),l=r.createLinearGradient(0,0,0,t);l.addColorStop(0,i.g[0]),l.addColorStop(.55,i.g[1]),l.addColorStop(1,i.g[2]),r.fillStyle=l,r.fillRect(0,0,e,t);for(let c=0;c<i.stars;c++){const h=o()*e,u=o()*t*.8,f=o()<.15;if(r.fillStyle=f?"#fff6c8":"rgba(255,248,220,.8)",f){const d=[];for(let g=0;g<8;g++){const v=g*Math.PI/4,m=g%2?2:6.5;d.push([h+Math.cos(v)*m,u+Math.sin(v)*m])}yt(r,d,"#fff6c8")}else r.beginPath(),r.arc(h,u,1+o()*1.4,0,7),r.fill()}if(i.moon){const c=e*.82,h=t*.18,u=gt(c,h,38,38,a,{n:40,lump:.02});yt(r,u,"#fff3c4"),yt(r,gt(c+18,h-10,34,34,lt(3),{n:40,lump:.02}),i.g[0]),st(r,u.slice(8,34),a,{w:2.4,color:"#d9c88a"})}if(i.cloud)for(let c=0;c<6;c++){const h=o()*e,u=60+o()*(t-160),f=60+o()*90,d=f*.32,g=3+Math.floor(o()*3),v=Tg(h,u,f,d,g);yt(r,v,i.cloud),oh(r,v,()=>yt(r,gt(h,u+d*.55,f*1.1,d*.45,a),i.cloudShade)),st(r,v,a,{w:2.6,closed:!0,color:i.cloudInk})}return s}const uh={camp:{base:"#4f7a6e",light:"#5b8878",dark:"#45695f",tick:"#3d6056",wall:["#7a5a48","#5f4538"]},hill:{base:"#9dd190",light:"#a9d99b",dark:"#93c886",tick:"#78b66f",wall:["#c28c5a","#a8754a"]},hillNight:{base:"#4d7466",light:"#588274",dark:"#43675b",tick:"#3a5c51",wall:["#7a5a48","#5f4538"]},desert:{base:"#ecd7a6",light:"#f3e2b8",dark:"#e0c893",tick:"#cdb18a",wall:["#d6a76a","#b98a55"]},stone:{base:"#e4e0f0",light:"#ece8f6",dark:"#d6d0e8",tick:"#b0a8cc",wall:["#c9c3e0","#a79fc6"],slabs:!0},sea:{base:"#78c4dc",light:"#8ccfe4",dark:"#61b4d2",tick:"#e9f7fb",wall:["#4f9fc0","#3d86a6"],water:!0},storm:{base:"#5a8fa8",light:"#6a9db4",dark:"#4c7f98",tick:"#d8e8f0",wall:["#3f7390","#2f5c78"],water:!0},seabed:{base:"#27466e",light:"#2f5280",dark:"#213c60",tick:"#3f6a94",wall:["#1d3456","#162a48"]},beach:{base:"#ecd7a6",light:"#f3e2b8",dark:"#e0c893",tick:"#cdb18a",wall:["#d6a76a","#b98a55"],shore:!0}};function fh(n,e=16,t=40,i=1){const s=uh[n],[r,a]=wt(e*t,e*t),o=lt(11+i),l=lt(12+i),c=r.width;a.fillStyle=s.base,a.fillRect(0,0,c,c);for(let h=0;h<40;h++)yt(a,gt(o()*c,o()*c,(1+o()*2.4)*t,(.6+o()*1.2)*t,o,{lump:.22}),o()<.5?s.light:s.dark);if(s.slabs){for(let h=t*.5;h<c;h+=t*1.6)st(a,[[0,h],[c,h+(o()-.5)*8]],l,{w:2.6,color:"#8b80ad"});for(let h=t*.5,u=0;h<c;h+=t*1.6,u++)for(let f=u%2*t;f<c;f+=t*2.2)st(a,[[f,h],[f+(o()-.5)*6,h+t*1.6]],l,{w:2.2,color:"#8b80ad"})}else if(s.water)for(let h=0;h<70;h++){const u=o()*c,f=o()*c;st(a,[[u-12,f+3],[u-4,f-4],[u+4,f+2],[u+12,f-4]],l,{w:2.6,color:s.tick,amp:0})}else for(let h=0;h<700;h++){const u=o()*c,f=o()*c,d=.15*t,g=-1.15+(o()-.5)*.4;st(a,[[u,f],[u+Math.cos(g)*d,f+Math.sin(g)*d]],l,{w:2,color:s.tick,amp:0})}if(s.shore){const h=[];for(let f=0;f<=c;f+=12)h.push([f,c*.42+Math.sin(f*.02)*18+o()*4]);const u=[[0,0],[c,0],...h.slice().reverse()];yt(a,u,"#78c4dc"),oh(a,u,()=>{for(let f=0;f<40;f++){const d=o()*c,g=o()*c*.4;st(a,[[d-10,g+2],[d-3,g-3],[d+3,g+1],[d+10,g-3]],l,{w:2.4,color:"#e9f7fb",amp:0})}}),st(a,h.map(([f,d])=>[f,d+6]),l,{w:7,color:"#f3f6ea"}),st(a,h,l,{w:3,color:"#3d86a6"})}return r}function zg(n,e=80){const t=uh[n],i=8*e,s=256,[r,a]=wt(i,s),o=lt(41),l=lt(42);a.fillStyle=t.wall[0],a.fillRect(0,0,i,s),a.fillStyle=t.wall[1],a.fillRect(0,s*.7,i,s);for(let h=0;h<40;h++){const u=o()*i,f=30+o()*(s-48);st(a,[[u,f],[u+20+o()*40,f+(o()-.5)*6]],l,{w:2.2,color:t.wall[1],amp:1})}const c=[[0,0],[i,0]];for(let h=i;h>=0;h-=12)c.push([h,12+7*Math.abs(Math.sin(h*.13))+o()*3]);return yt(a,c,t.dark),st(a,c.slice(2),l,{w:3.4,amp:.6}),st(a,[[0,s-3],[i,s-3]],l,{w:5,amp:1}),r}function Hg(n="255,170,90"){const[e,t]=wt(128,128),i=t.createRadialGradient(64,64,2,64,64,62);return i.addColorStop(0,`rgba(${n},.75)`),i.addColorStop(.5,`rgba(${n},.3)`),i.addColorStop(1,`rgba(${n},0)`),t.fillStyle=i,t.fillRect(0,0,128,128),e}function rc(n,e="dots"){const[t,i]=wt(120,110),s=lt(90+n*7),r=gt(60,44,46,32,lt(5),{n:30,lump:.05});if(e==="think")for(const[a,o,l]of[[34,88,7],[22,100,4.5]]){const c=gt(a,o,l,l,s,{n:12});yt(i,c,"#fff8ea"),st(i,c,s,{w:2.4,closed:!0,amp:.3})}else{const a=[[42,66],[32,96],[64,70]];yt(i,a,"#fff8ea"),st(i,a,s,{w:3,amp:.4})}if(yt(i,r,"#fff8ea"),st(i,r,s,{w:3.4,closed:!0,amp:.6}),i.fillStyle=hn,e==="think")i.font="bold 44px sans-serif",i.textAlign="center",i.fillText("?",60,60);else for(const a of[-18,0,18])i.beginPath(),i.arc(60+a,46,5,0,7),i.fill();return t}function Gg(n,e="#ffd24a"){const[t,i]=wt(64,64),s=lt(20+n),r=[];for(let a=0;a<8;a++){const o=-Math.PI/2+a*Math.PI/4,l=a%2?9:26;r.push([32+Math.cos(o)*l,32+Math.sin(o)*l])}return yt(i,r,e),st(i,r,s,{w:2.6,closed:!0,amp:.4}),t}function Vg(n,e=!0){const[t,i]=wt(160,160),s=lt(n.length*13+5);lt(n.length*7);const r=gt(80,80,70,70,s,{n:50,lump:.03});yt(i,r,e?"#f6f0e3":"#9aa0c8");const a=(c,h,u=3.2)=>{yt(i,c,h),st(i,c,s,{w:u,closed:!0,amp:.5})},o=(c,h=hn,u=3)=>st(i,c,s,{w:u,color:h,amp:.4}),l=(c,h,u,f,d)=>{const g=[];for(let v=0;v<10;v++){const m=-Math.PI/2+v*Math.PI/5,p=v%2?f:u;g.push([c+Math.cos(m)*p,h+Math.sin(m)*p])}a(g,d)};switch(n){case"tree":o([[80,120],[80,80]],"#8a5d33",9),o([[80,120],[80,80]],hn,3),a(gt(80,66,34,26,s),"#83c47b"),a(gt(62,80,18,14,s),"#5c9d5f"),a(gt(98,80,18,14,s),"#5c9d5f"),a(gt(70,60,5,5,s,{n:10}),"#e2475d",2),a(gt(92,68,5,5,s,{n:10}),"#e2475d",2);break;case"ark":a([[30,92],[130,92],[114,118],[46,118]],"#c98a4d"),a([[56,70],[104,70],[104,92],[56,92]],"#e2a574"),a([[50,72],[80,54],[110,72]],"#b77c45"),o([[24,128],[40,122],[56,128],[72,122],[88,128],[104,122],[120,128],[136,122]],"#3d86a6",4);break;case"star":l(80,78,42,18,"#f5cf5f"),a(gt(116,42,9,9,s,{n:12}),"#fff3c4",2);break;case"well":a([[44,88],[116,88],[112,124],[48,124]],"#c9c3e0"),o([[46,104],[114,104]],"#7a6d98",2.4),o([[80,88],[80,124]],"#7a6d98",2.4),o([[50,88],[50,46]],hn,5),o([[110,88],[110,46]],hn,5),a([[40,50],[80,28],[120,50]],"#e8584e"),o([[80,50],[80,80]],hn,2),a([[72,78],[88,78],[86,90],[74,90]],"#c98a4d",2.4);break;case"waves":a([[20,120],[60,60],[66,120]],"#78c4dc"),a([[140,120],[100,60],[94,120]],"#78c4dc"),a([[66,120],[94,120],[90,128],[70,128]],"#ecd7a6",2.4),o([[40,90],[48,82]],"#e9f7fb"),o([[118,90],[110,82]],"#e9f7fb");break;case"whale":a(gt(76,90,48,28,s),"#6f9fd8"),a([[118,86],[140,66],[136,86],[146,100]],"#6f9fd8"),a(gt(76,100,36,12,s),"#c9ddf3",2.4),a(gt(56,84,4,4,s,{n:10}),hn,1),o([[70,60],[66,44]],"#78c4dc",3),o([[74,60],[82,44]],"#78c4dc",3),o([[20,128],[40,122],[60,128],[80,122],[100,128],[120,122],[140,128]],"#3d86a6",4);break;case"palm":o([[82,128],[76,96],[80,62]],"#c4814f",10),o([[82,128],[76,96],[80,62]],hn,3);for(const c of[-2.6,-2,-1.2,-.5])a([[80,60],[80+Math.cos(c)*44,60+Math.sin(c)*26+18],[80+Math.cos(c)*20,60+Math.sin(c)*10+10]],"#83c47b",2.6);a(gt(72,70,6,6,s,{n:10}),"#a8754a",2),a(gt(86,72,6,6,s,{n:10}),"#a8754a",2);break;case"book":a([[34,66],[80,76],[80,122],[34,112]],"#fff8ea"),a([[126,66],[80,76],[80,122],[126,112]],"#fff8ea"),a([[34,112],[80,122],[126,112],[126,118],[80,128],[34,118]],"#5c9d5f",2.4);for(let c=0;c<3;c++)o([[42,82+c*10],[72,88+c*10]],"#b58d5b",2),o([[88,88+c*10],[118,82+c*10]],"#b58d5b",2);l(80,44,12,5,"#f5cf5f");break;case"moon":a([[20,120],[60,92],[100,104],[140,84],[140,130],[20,130]],"#ecd7a6"),i.setLineDash([4,8]),o([[30,118],[60,104],[96,112],[130,96]],"#b58d5b",3),i.setLineDash([]);{const c=gt(96,50,24,24,s,{n:30,lump:.02});yt(i,c,"#fff3c4"),yt(i,gt(108,42,22,22,lt(4),{n:30,lump:.02}),e?"#f6f0e3":"#9aa0c8")}break}return st(i,r,s,{w:4.5,closed:!0,amp:.6}),t}const Yn=Math.PI*2,ue={box:(n,e,t)=>new _i(n,e,t),cyl:(n,e,t,i=10,s=!1)=>new fi(n,e,t,i,1,s),sph:(n,e=12,t=9)=>new pi(n,e,t),hemi:(n,e=14)=>new pi(n,e,8,0,Yn,0,Math.PI/2),cone:(n,e,t=8)=>new Cr(n,e,t),tor:(n,e,t=Yn,i=16)=>new Uo(n,e,8,i,t),oct:n=>new Io(n),ico:(n,e=0)=>new Lo(n,e),plane:(n,e)=>new Rn(n,e),lathe:(n,e=16)=>new Co(n.map(([t,i])=>new ge(t,i)),e),tube:(n,e,t=40)=>new No(new Jc(n.map(i=>new I(...i))),t,e,8),extrude:(n,e)=>{const t=new Po(new Lr(n.map(([i,s])=>new ge(i,s))),{depth:e,bevelEnabled:!1});return t.translate(0,0,-e/2),t}},Wg=n=>typeof n=="number"?[n,n,n]:n,Xg=(()=>{const n=new Zc(new Uint8Array([205,255]),2,1,Er);return n.minFilter=n.magFilter=Rt,n.needsUpdate=!0,n})();function he(n,e,{p:t=[0,0,0],r:i=[0,0,0],s=1,map:r,side:a,glow:o,basic:l,soft:c}={}){const h={};c&&(h.gradientMap=Xg),r&&(h.map=r),a&&(h.side=a),o&&(h.emissive=o,h.emissiveIntensity=.55);const u=l?new Yt({color:e,map:r,side:a}):Qi(e,h),f=new _t(n,u);return f.position.set(...t),f.rotation.set(...i),f.scale.set(...Wg(s)),f}function et(...n){const e=new Bt;return e.add(...n.flat().filter(Boolean)),e}const Wt=(n,e)=>Array.from({length:n},(t,i)=>e(i/n*Yn,i)),ma=new Map,on=(n,e)=>(ma.has(n)||ma.set(n,Tn(e(),!0)),ma.get(n)),dh={chevrons:()=>on("chev",()=>{const[n,e]=wt(256,256),t=lt(5);e.fillStyle="#c7c0e6",e.fillRect(0,0,256,256);for(let i=-40;i<300;i+=64){const s=[[30,i+40],[128,i],[226,i+40],[226,i+64],[128,i+24],[30,i+64]];yt(e,s,"#8f84c2"),st(e,s,t,{w:3,closed:!0,color:"#4b3f7a"})}return n}),stripes:(n="#5aa0e6",e="#ffd24a")=>on("str"+n+e,()=>{const[t,i]=wt(256,256),s=lt(6);for(let r=0;r<8;r++)i.fillStyle=r%2?n:e,i.fillRect(r*32,0,32,256);for(let r=1;r<8;r++)st(i,[[r*32,0],[r*32,256]],s,{w:2.5});return t}),swirl:()=>on("swirl",()=>{const[n,e]=wt(256,256),t=lt(7);e.fillStyle="#d24cf0",e.fillRect(0,0,256,256);const i=[];for(let s=0;s<22;s+=.25)i.push([128+Math.cos(s)*s*5.2,128+Math.sin(s)*s*5.2]);return st(e,i,t,{w:9,color:"#f3a6ff",amp:1}),n}),arrow:()=>on("arrow",()=>{const[n,e]=wt(256,128),t=lt(8);e.fillStyle="#e8c58f",e.fillRect(0,0,256,128);const i=[[40,52],[160,52],[160,30],[215,64],[160,98],[160,76],[40,76]];yt(e,i,"#e8584e"),st(e,i,t,{w:3.5,closed:!0});for(let s=0;s<3;s++)st(e,[[10,20+s*40],[60,22+s*40]],t,{w:1.6,color:"#b58d5b"});return n}),rings:()=>on("rings",()=>{const[n,e]=wt(128,128),t=lt(9);e.fillStyle="#f1c792",e.fillRect(0,0,128,128);for(const i of[14,28,42,56])st(e,gt(64,64,i,i,t,{n:28,lump:.05}),t,{w:2.2,closed:!0,color:"#b07a45"});return n}),bricks:(n,e,t)=>on("br"+n,()=>{const[i,s]=wt(512,256),r=lt(91),a=lt(92);s.fillStyle=e,s.fillRect(0,0,512,256);for(let o=0,l=0;l<256;o++,l+=42)for(let c=o%2?0:-40;c<512;c+=96+a()*10){const h=[[c+4,l+4],[c+90,l+4],[c+90,l+39],[c+4,l+39]];yt(s,h,a()<.35?n:e),st(s,h,r,{w:2,closed:!0,color:t,amp:.6})}return i}),strata:(n,e,t)=>on("strata"+n,()=>{const[i,s]=wt(256,256),r=lt(33),a=lt(34);for(let o=0;o<256;o+=32)s.fillStyle=o/32%2?n:e,s.fillRect(0,o,256,32);for(let o=32;o<256;o+=32)st(s,[[0,o+(a()-.5)*6],[256,o+(a()-.5)*6]],r,{w:2.4,color:t,amp:2});for(let o=0;o<14;o++){const l=a()*256,c=a()*256;st(s,[[l,c],[l+4,c+18]],r,{w:2,color:t,amp:0})}return i}),star:(n,e)=>on("star"+n+e,()=>{const[t,i]=wt(256,256),s=lt(10);i.fillStyle=n,i.fillRect(0,0,256,256);const r=[];for(let a=0;a<10;a++){const o=-Math.PI/2+a*Math.PI/5,l=a%2?40:90;r.push([128+Math.cos(o)*l,134+Math.sin(o)*l])}return yt(i,r,e),st(i,r,s,{w:5,closed:!0}),t}),corrugated:(n,e)=>on("corr"+n,()=>{const[t,i]=wt(256,128),s=lt(12);i.fillStyle=n,i.fillRect(0,0,256,128);for(let r=8;r<256;r+=16)st(i,[[r,0],[r,128]],s,{w:2,color:e,amp:.4});return t}),dots:(n,e)=>on("dots"+n,()=>{const[t,i]=wt(128,128),s=lt(13);i.fillStyle=n,i.fillRect(0,0,128,128);for(let r=0;r<9;r++)i.fillStyle=e,i.beginPath(),i.arc(s()*128,s()*128,6+s()*6,0,Yn),i.fill();return t})},$g=At;function us(n=.5,e=.22,t=.14,i="#f5cf5f",s=5){const r=[];for(let o=0;o<s*2;o++){const l=Math.PI/2+o*Math.PI/s,c=o%2?e:n;r.push([Math.cos(l)*c,Math.sin(l)*c])}const a=et(he(ue.extrude(r,t),i,{basic:!0}));return a.userData.spinY=.6,a}function ga(n=.9,e="#fff3c4"){const t=[],r=.8*n,a=.4*n;for(let o=0;o<=28;o++){const l=.863+o/28*(Yn-1.726);t.push([Math.cos(l)*n,Math.sin(l)*n])}for(let o=0;o<=24;o++){const l=Yn-1.25-o/24*(Yn-2.5);t.push([a+Math.cos(l)*r,Math.sin(l)*r])}return et(he(ue.extrude(t,.18),e,{basic:!0,r:[0,0,.5]}))}function fs(n=.8){return et(he(ue.sph(n,18,12),"#ffd24a",{basic:!0}),Wt(10,e=>he(ue.cone(.14,.42,4),"#ffb84a",{basic:!0,p:[Math.cos(e)*(n+.28),Math.sin(e)*(n+.28),0],r:[0,0,e-Math.PI/2]})))}function Ui(n=1,e="#f6eef8"){return et(he(ue.sph(.7),e,{soft:!0,s:[1.3*n,.7*n,.8*n]}),he(ue.sph(.55),e,{soft:!0,p:[-.8*n,-.1*n,0],s:[n,.65*n,.7*n]}),he(ue.sph(.5),e,{soft:!0,p:[.85*n,-.12*n,0],s:[n,.6*n,.7*n]}),he(ue.sph(.45),e,{soft:!0,p:[.2*n,.4*n,0],s:[n,.8*n,.7*n]}))}function Ni(n=3,e=2,t="#a9b98a",i=!1){const s=ue.cone(e,n,9);s.translate(0,n/2,0);const r=s.attributes.position;for(let a=0;a<r.count;a++)if(r.getY(a)>.05&&r.getY(a)<n-.05){const o=1+Math.sin(a*1.7)*.08;r.setXYZ(a,r.getX(a)*o,r.getY(a),r.getZ(a)*o)}return s.computeVertexNormals(),et(he(s,t),i?he(ue.cone(e*.3,n*.3,9),"#f6f0e3",{p:[0,n*.86,0]}):null)}function ds(n,e="#e8cf95"){return et(he(ue.sph(1,14,8),e,{s:[n,n*.28,n*.6]}))}function ps(n=0,e=2.6){const t=[];for(let a=0;a<6;a++)t.push(he(ue.cyl(.11,.13,e/6+.02,7),"#c4814f",{p:[Math.sin(a*.5+n)*.08*a,e/12+a*e/6,0]}));const i=[Math.sin(2.5+n)*.4,e],s=Wt(6,(a,o)=>{const l=new Bt;l.position.set(i[0],i[1],0),l.rotation.y=a+n;const c=he(ue.sph(1,10,6,0),"#83c47b",{s:[.95,.1,.26],p:[.8,-.18,0],r:[0,0,-.35-o%2*.15]});return l.add(c),l}),r=he(ue.sph(.14,8,6),"#a8754a",{p:[i[0],e-.2,.1]});return et(t,s,r)}function _a(n=0){return et(he(ue.cyl(.12,.18,1.1,7),"#c4814f",{p:[0,.55,0]}),he(ue.sph(.7),"#9fb27a",{p:[0,1.4,0],s:[1,.75,1]}),he(ue.sph(.5),"#8fa66a",{p:[-.5,1.2,.2],s:[1,.75,1]}),he(ue.sph(.5),"#8fa66a",{p:[.5,1.25,-.1+n*.01],s:[1,.75,1]}))}function ph(n="#f0b3d6"){return et(he(ue.cyl(.02,.02,.35,5),"#5c9d5f",{p:[0,.17,0]}),Wt(5,e=>he(ue.sph(.07,6,5),n,{p:[Math.cos(e)*.08,.36,Math.sin(e)*.08],s:[1,.5,1]})),he(ue.sph(.05,6,5),"#f5c84c",{p:[0,.38,0]}))}function Hi(n=1.4,e=1.2,t=1.1,i="#f4ead3",s=!1,r=!1){return et(he(ue.box(n,t,e),i,{p:[0,t/2,0]}),he(ue.box(n+.12,.1,e+.12),"#dcc9a3",{p:[0,t+.05,0]}),r?he(ue.hemi(Math.min(n,e)*.38),"#f6f0e3",{p:[0,t+.1,0]}):null,he(ue.box(.34,.6,.05),"#b77c45",{p:[-n*.2,.3,e/2+.01]}),he(ue.box(.3,.3,.05),s?"#ffd78a":"#9fc8e8",{basic:s,p:[n*.22,t*.6,e/2+.01]}))}function mh(){const n=ue.extrude([[-1.1,0],[1.1,0],[0,1.5]],2);return et(he(n,"#ffffff",{map:dh.stripes("#e8a07a","#f3dcb4"),p:[0,0,0]}),he(ue.box(.5,.9,.05),"#6b3e2a",{p:[0,.45,1.01]}))}function Cs(n=1.6,e=.18){return et(he(ue.cyl(e,e,n,9),"#b77c45",{r:[0,0,Math.PI/2],p:[0,e,0]}),he(ue.cyl(e*.8,e*.8,.02,9),"#f1c792",{r:[0,0,Math.PI/2],p:[n/2+.01,e,0]}))}function Sr(n="#e3cf9f"){return et(he(ue.sph(.32,10,8),n,{s:[1,1.1,.9],p:[0,.3,0]}),he(ue.cyl(.06,.12,.16,7),n,{p:[0,.68,0]}),he(ue.tor(.08,.025),"#b77c45",{r:[Math.PI/2,0,0],p:[0,.62,0]}))}function ac(n=.6){return et(he(ue.box(n,n,n),"#c98f55",{p:[0,n/2,0]}),he(ue.box(n*1.02,n*.18,n*1.02),"#dba46a",{p:[0,n*.8,0]}))}function oc(n=2.4,e="#e9c98a"){const t=ue.cone(n,n*.9,4);return t.translate(0,n*.45,0),et(he(t,e,{r:[0,Math.PI/4,0]}))}function Yg(n=2.4,e="#e4e0f0"){return et(he(ue.box(.6,.2,.6),e,{p:[0,.1,0]}),he(ue.cyl(.2,.22,n-.4,10),e,{p:[0,n/2,0]}),he(ue.box(.6,.2,.6),e,{p:[0,n-.1,0]}))}function lc(n=1.2,e="#b3aec6"){return et(he(ue.box(.6*n,.2*n,.5*n),"#8f89a8",{p:[0,.1*n,0]}),he(ue.cyl(.24*n,.3*n,.6*n,6),e,{p:[0,.5*n,0]}),he(ue.oct(.24*n),e,{p:[0,.98*n,0],s:[1,1.1,1]}))}function qg(n=0,e="#b3aec6"){return et(Wt(4,(t,i)=>he(i%2?ue.oct(.14):ue.box(.22,.14,.18),e,{p:[Math.cos(t+n)*.28,.08,Math.sin(t+n)*.22],r:[n+i,i*.7,.3*i]})))}function Zg(){return et(he(ue.cyl(.75,.8,.7,16,!0),"#ffffff",{map:dh.bricks("#d3cde9","#c2bbdc","#7a6d98"),side:$g,p:[0,.35,0]}),he(ue.tor(.77,.07,Yn,20),"#c9c3e0",{r:[Math.PI/2,0,0],p:[0,.7,0]}),he(ue.cyl(.72,.72,.02,16),"#1d2350",{basic:!0,p:[0,.4,0]}),he(ue.cyl(.06,.06,1.3,6),"#b77c45",{p:[-.72,1.05,0]}),he(ue.cyl(.06,.06,1.3,6),"#b77c45",{p:[.72,1.05,0]}),he(ue.cyl(.05,.05,1.6,6),"#c98a4d",{r:[0,0,Math.PI/2],p:[0,1.5,0]}),he(ue.extrude([[-1,0],[1,0],[0,.55]],.9),"#e8584e",{p:[0,1.66,0]}))}function Jg(){return et(he(ue.cyl(.14,.11,.22,10),"#c98a4d",{p:[0,.11,0]}),he(ue.tor(.12,.015,Math.PI),"#6b3e2a",{p:[0,.22,0]}))}function jg(n=1){return et(he(ue.cyl(.015,.015,n,4),"#f1c792",{p:[0,-n/2,0]}))}function ni(n="#d8a86a",e=!1){const t=s=>he(ue.cyl(.07,.06,.8,6),n,{p:[s,.4,0]}),i=et(he(ue.sph(.5,12,9),n,{s:[1.3,.7,.7],p:[0,1,0]}),he(ue.sph(.3,10,8),n,{p:[.05,1.38,0]}),he(ue.cyl(.12,.15,.7,7),n,{p:[.7,1.3,0],r:[0,0,-.6]}),he(ue.sph(.18,10,8),n,{s:[1.5,.9,.9],p:[.98,1.62,0]}),he(ue.sph(.035,6,5),"#2a1a10",{basic:!0,p:[1.02,1.7,.13]}),he(ue.sph(.035,6,5),"#2a1a10",{basic:!0,p:[1.02,1.7,-.13]}),[t(.4),t(-.4)].flatMap(s=>{const r=s.clone();return r.position.z=.18,s.position.z=-.18,[s,r]}),e?[he(ue.box(.36,.3,.8),"#e8584e",{p:[-.3,1.34,0]}),Sr("#e3cf9f")]:he(ue.box(.5,.06,.62),"#e8584e",{p:[-.25,1.36,0]}));if(e){const s=i.children[i.children.length-1];s.position.set(.25,1.1,0),s.scale.setScalar(.7)}return i}function ir(){return et(Wt(6,n=>he(ue.sph(.2,8,6),"#f6f0e3",{soft:!0,p:[Math.cos(n)*.18,.46+Math.sin(n*2)*.04,Math.sin(n)*.14]})),he(ue.sph(.26,10,8),"#f6f0e3",{soft:!0,p:[0,.48,0]}),he(ue.sph(.13,8,6),"#5b4a4a",{p:[.32,.56,0],s:[1.2,1,.9]}),Wt(4,(n,e)=>he(ue.cyl(.04,.04,.3,5),"#5b4a4a",{p:[e<2?.14:-.14,.15,e%2?.1:-.1]})))}function va(n="#f5cf5f"){return et(he(ue.sph(.16,10,8),n,{p:[0,.2,0],s:[1.2,1,1]}),he(ue.sph(.1,8,6),n,{p:[.16,.34,0]}),he(ue.cone(.04,.12,5),"#e8904a",{p:[.3,.33,0],r:[0,0,-Math.PI/2]}))}function cc(n="#6f9fd8",e="#c9ddf3"){const t=new Bt;t.add(he(ue.cone(.4,1.2,8),n,{r:[0,0,Math.PI/2],p:[-.5,0,0],s:[1,1,.5]})),t.add(he(ue.sph(.45,10,6),n,{s:[.4,.2,1.2],p:[-1.1,.15,0],r:[0,0,.5]})),t.position.set(-1.8,.1,0),t.name="tail";const i=et(he(ue.sph(1,20,14),n,{s:[2,1.05,1.1]}),he(ue.sph(.95,16,10),e,{s:[1.8,.5,.95],p:[.1,-.55,0]}),he(ue.sph(.12,8,6),"#2a1a10",{basic:!0,p:[1.35,.15,.62]}),he(ue.sph(.12,8,6),"#2a1a10",{basic:!0,p:[1.35,.15,-.62]}),he(ue.sph(.35,8,6),n,{s:[1,.2,.6],p:[.3,-.5,.95],r:[.6,0,0]}),t);return i.userData.tail=t,i}function po(n,e,t){const i=[[-n/2-.25,e],[-n/2+.35,0],[n/2-.35,0],[n/2+.3,e]];return ue.extrude(i,t)}function Kg(n=2.6,e="#f6f0e3"){return et(he(po(n,.55,.9),"#c98a4d"),he(ue.box(n*.95,.06,.92),"#8a5d33",{p:[0,.56,0]}),he(ue.cyl(.05,.05,2.1,6),"#8a5d33",{p:[0,1.6,0]}),he(ue.box(.06,1.3,1.2),e,{soft:!0,p:[.05,1.75,0],r:[0,Math.PI/2,0],s:[1,1,1]}),he(ue.box(.26,.26,.26),"#dba46a",{p:[-.8,.72,.15]}),he(ue.box(.26,.26,.26),"#dba46a",{p:[.75,.72,-.1]}),Sr("#e3cf9f").translateX(-.4).translateY(.5))}function sr(n=!0){return n?et(he(po(4.2,1.1,1.7),"#c98a4d"),he(ue.box(4.2,.08,1.72),"#8a5d33",{p:[0,.8,0]}),he(ue.box(2.2,.9,1.3),"#e2a574",{p:[0,1.55,0]}),he(ue.extrude([[-1.25,0],[1.25,0],[0,.6]],1.4),"#b77c45",{p:[0,2,0]}),Wt(3,(e,t)=>he(ue.box(.26,.26,.05),"#ffd78a",{basic:!0,p:[-.7+t*.7,1.6,.66]}))):et(he(po(4,.55,1.6),"#c98a4d"),Wt(7,(e,t)=>he(ue.box(.12,.9,.12),"#b77c45",{p:[-1.6+t*.53,.95,.78]})),Wt(7,(e,t)=>he(ue.box(.12,.9,.12),"#b77c45",{p:[-1.6+t*.53,.95,-.78]})),he(ue.box(3.4,.1,.1),"#b77c45",{p:[0,1.4,.78]}))}function rr(n=1,e="#61b4d2"){return et(he(ue.sph(.6,12,8),e,{s:[1.4*n,.55*n,.7*n],p:[0,.05*n,0]}),he(ue.sph(.22,8,6),"#f3f6ea",{soft:!0,s:[1.6*n,.5*n,.9*n],p:[.2*n,.34*n,0]}))}function Qg(){const n=Wt(9,(e,t)=>he(ue.sph(.5,10,6),t%2?"#5c9d5f":"#83c47b",{s:[1,.12,.8],p:[Math.cos(e)*(.5+t%3*.25),1.05+t%3*.12,Math.sin(e)*.5],r:[.2*Math.sin(e),e,.2]}));return et(he(ue.cyl(.05,.07,1.1,6),"#7a9c4a",{p:[-.6,.55,0]}),he(ue.cyl(.05,.07,1.1,6),"#7a9c4a",{p:[.6,.55,.2]}),he(ue.box(1.4,.05,.05),"#7a9c4a",{p:[0,1.05,.1]}),n,he(ue.sph(.16,8,6),"#d8e07a",{s:[1,1.4,1],p:[.3,.75,.3]}),he(ue.sph(.14,8,6),"#d8e07a",{s:[1,1.4,1],p:[-.3,.8,-.2]}))}function e_(n=2){return et(he(ue.tube([[0,0,0],[.15,n*.3,0],[-.12,n*.65,0],[.1,n,0]],.06,16),"#4f9a7a"))}function _s(n=1,e=!1){const t=e?["#bfe8f5","#e9f7fb","#9fd8c8"]:["#f07a3a","#ffb84a","#ffe38a"],i=et(Wt(5,(s,r)=>he(ue.cone(.28*n,.9*n,7),t[0],{basic:!0,p:[Math.cos(s)*.28*n,.45*n,Math.sin(s)*.28*n],s:[1,.8+r%3*.25,1]})),he(ue.cone(.4*n,1.4*n,8),t[1],{basic:!0,p:[0,.7*n,0]}),he(ue.cone(.2*n,.8*n,7),t[2],{basic:!0,p:[0,.5*n,.18*n]}));return i.userData.flicker=!0,i}function t_(){return et(Wt(8,(n,e)=>{const t=Vn(40+e,.32);return t.position.set(Math.cos(n)*.72,0,Math.sin(n)*.72),t}),Wt(3,n=>{const e=Cs(1.1,.1);return e.rotation.y=n,e}),_s(.75))}function hc(n=60,e=5,t=5){const i=new Bt,s=new Yt({color:"#cfe4f5",transparent:!0,opacity:.8}),r=new _i(.025,.35,.025);for(let a=0;a<n;a++){const o=new _t(r,s);o.userData.noInk=!0,o.position.set((Math.random()-.5)*e*2,Math.random()*t,(Math.random()-.5)*e*1.4),i.add(o)}return i.userData.rain=t,i}const n_={"nuh-build":{ground:"hill",mood:{before:"day",after:"storm"},build(n){n(Ni(2.6,2.2,"#a9c98a"),-3.6,-3.4),n(Ni(2,1.8,"#b7d49a"),3.8,-3.6),n(uo(11),-4.6,.8,{s:[.8,1.2,.8]}),n(fo(12),4.6,.2,{s:[.8,1.2,.8]}),n(sr(!1),0,-.6,{show:"before"});for(let t=0;t<4;t++)n(Cs(1.4,.09),2.6,2.2-t*.02,{y:t*.17,ry:.3,show:"before"});n(sr(!0),0,-.8,{show:"after"}),[[ir,-1.6,2.2],[ir,-1,2.5],[ni,1.4,2.6,.55],[ni,2.4,2.9,.55],[va,-2.6,1.6],[va,-2.2,1.9]].forEach(([t,i,s,r=1],a)=>n(t(),i,s,{s:r,ry:.3,show:"after",delay:.15*a})),n(Ui(1.4,"#8d8fa8"),-2,-3,{y:4.4,show:"after"}),n(Ui(1.1,"#8d8fa8"),2.4,-2.6,{y:4.8,show:"after"}),n(fs(.6),3.4,-3,{y:4.6,show:"before"})}},"nuh-flood":{ground:{before:"storm",after:"sea"},mood:{before:"storm",after:"day"},build(n){n(sr(!0),0,0,{y:.1,show:"before",rock:1});for(let e=0;e<9;e++)n(rr(1.6+e%3*.4,"#4c7f98"),-4.5+e%5*2.2,-2.5+Math.floor(e/5)*4.6,{bob:1,show:"before"});n(Ui(1.6,"#6b6d8c"),-2.4,-2.6,{y:4.6,show:"before"}),n(Ui(1.3,"#6b6d8c"),2.6,-2.2,{y:5,show:"before"}),n(hc(90,5,5),0,0,{show:"before"}),n(Ni(2.4,2.8,"#a9c98a"),0,-1.2,{show:"after"}),n(sr(!0),0,-1.3,{y:2.2,s:.7,show:"after",rz:.06}),n(fs(.7),3.6,-3,{y:5,show:"after"});for(let e=0;e<4;e++)n(rr(.8,"#61b4d2"),-4+e*2.7,3,{bob:1,show:"after"});n(va("#f6f0e3"),-2.8,1.5,{y:2.8,show:"after",bob:1})}},"ibrahim-sky":{ground:"hillNight",mood:{before:"night",after:"dusk"},build(n){n(Ni(2.2,1.8,"#6f9a86"),-3.4,-3.6),n(Ni(2.8,2.1,"#7aa892"),3,-3.8),n(Hi(1.3,1.1,1,"#d8cbb0",!0,!0),-1.6,-.6),n(Hi(1.1,1,.9,"#cbbfa6",!0),.2,-1.4),n(ps(1,2.2),2.2,.4),n(_a(2),-3.6,1.2),n(us(.5,.2),.6,-2.6,{y:4.2,show:"before",bob:1}),n(us(.4,.16),-2.6,-2.4,{y:2.2,show:"after"}),n(ga(.8),0,-2.8,{y:4.2,show:"after"}),n(fs(.75),2.8,-2.6,{y:2.6,show:"after"})}},"ibrahim-idols":{ground:"stone",mood:{before:"day",after:"day"},build(n){for(let e=0;e<5;e++)n(Yg(2.8),-4+e*2,-3.4);n(lc(2.1),0,-1.4),[[-2.6,-.8],[-1.4,.4],[1.4,.4],[2.6,-.8]].forEach(([e,t],i)=>{n(lc(1.1),e,t,{show:"before"}),n(qg(i),e,t,{show:"after"})}),n(ac(.5),3.8,2),n(Sr(),-3.8,2)}},"ibrahim-fire":{ground:"desert",mood:{before:"dusk",after:"night"},build(n){n(ds(1.7),-3.8,-3.6),n(ds(1.9),3.6,-3.8);for(let e=0;e<10;e++)n(Cs(1.8,.14),Math.cos(e)*.8,Math.sin(e)*.6,{y:e%3*.16,ry:e*.63});n(_s(2.2),0,0,{y:.3,show:"before"}),n(_s(1.1),-1.3,.8,{show:"before"}),n(_s(1.2),1.3,.6,{show:"before"}),n(_s(2,!0),0,0,{y:.3,show:"after"});for(let e=0;e<12;e++){const t=e/12*Math.PI*2;n(ph(e%2?"#f0b3d6":"#fffdf6"),Math.cos(t)*2.4,Math.sin(t)*1.8,{s:1.6,show:"after",delay:e*.05})}}},"yusuf-dream":{ground:"hillNight",mood:{before:"night",after:"night"},build(n){n(Ni(2.4,1.9,"#6f9a86"),-3.6,-3.8),n(Hi(1.8,1.4,1.2,"#e2d4b6",!0),-.6,-.8),n(mh(),2.6,-1.2,{s:.7,ry:-.4}),n(_a(1),-3.2,.8),n(_a(2),3.6,1.4,{s:.8}),n(ir(),1.2,2,{ry:.5}),n(ir(),2,2.4,{ry:-.3});for(let e=0;e<11;e++){const t=Math.PI*(.1+e/10*.8);n(us(.28,.12),-Math.cos(t)*4.2,-2.8,{y:3.2+Math.sin(t)*1.6,bow:1,bob:1})}n(fs(.6),-1.1,-3,{y:5.8,bow:1}),n(ga(.55),1.1,-3,{y:5.8,bow:1})}},"yusuf-well":{ground:"desert",mood:{before:"day",after:"day"},build(n){n(ds(1.9),-3.6,-3.8),n(ds(1.7),3.6,-3.6),n(ds(1.2),4.3,1.8),n(Zg(),0,-.4),n(Vn(3,.8),-2.8,1.4),n(Vn(4,.6),2.6,-1.6),n(ps(2,2.4),-3.8,-.6),n(Jg(),0,-.4,{y:1,show:"after"}),n(jg(.45),0,-.4,{y:1.5,show:"after"}),n(ni("#d8a86a",!0),2.4,1.4,{ry:Math.PI,s:.8,show:"after",delay:.1}),n(ni("#c99a5e",!0),3.9,.4,{ry:Math.PI,s:.8,show:"after",delay:.3}),n(ni("#e0b27a"),-2.2,2.4,{ry:.2,s:.8,show:"after",delay:.5}),n(ac(.45),1.2,2.6,{show:"after",delay:.6})}},"yusuf-egypt":{ground:"desert",mood:{before:"day",after:"dusk"},build(n){n(oc(2.2),-3.4,-3.6),n(oc(1.6),-1,-4.2),n(Hi(2.4,1.6,1.6,"#f4ead3",!1,!0),1.6,-1.8);for(let e=0;e<5;e++)n(Sr(),.2+e*.6,-.4+e%2*.3);n(ps(1,2.6),4,-.6),n(ps(3,2.2),-4,.8),n(ni("#d8a86a",!0),-1.8,1.8,{ry:.3,s:.8}),n(ni("#c99a5e",!0),-3,2.4,{ry:.3,s:.8,show:"after"});for(let e=0;e<11;e++){const t=Math.PI*(.1+e/10*.8);n(us(.24,.1),-Math.cos(t)*4,-3,{y:3.8+Math.sin(t)*1.2,show:"after",delay:e*.06,bob:1})}n(fs(.5),-.9,-3.2,{y:5.8,show:"after"}),n(ga(.5),.9,-3.2,{y:5.8,show:"after"})}},"yunus-ship":{ground:"storm",mood:{before:"storm",after:"storm"},build(n){n(Kg(2.6),0,0,{y:.1,rock:1});for(let e=0;e<9;e++)n(rr(1.5+e%3*.4,"#4c7f98"),-4.5+e%5*2.2,-2.5+Math.floor(e/5)*4.6,{bob:1});n(Ui(1.6,"#6b6d8c"),-2.4,-2.6,{y:4.6}),n(Ui(1.3,"#6b6d8c"),2.6,-2.2,{y:5}),n(hc(80,5,5),0,0),n(cc("#7fa8e0","#d3e3f6"),-2.2,2.2,{y:.1,ry:.4,show:"after",bob:1})}},"yunus-whale":{ground:"seabed",mood:{before:"deep",after:"night"},build(n){n(cc("#6f9fd8","#c9ddf3"),0,-.4,{y:1.6,ry:.15,bob:1,swim:1});for(let e=0;e<8;e++)n(e_(1.4+e%3*.6),-4.4+e*1.25,-2.8+e%2*5,{sway:1});n(Vn(7,.9),-3.4,1.2),n(Vn(8,.7),3.2,2);for(let e=0;e<9;e++)n(us(.18,.08,.06,"#fff3c4"),(e-4)*.5,-.4,{y:2.8+e*.35,show:"after",delay:e*.08,rise:1})}},"yunus-shore":{ground:"beach",mood:{before:"day",after:"dusk"},build(n){for(let e=0;e<4;e++)n(rr(.9,"#61b4d2"),-4+e*2.6,-3.4,{bob:1});n(Vn(5,.7),3.4,1.2),n(ps(4,2.2),4,-.4),n(Qg(),-.4,.8,{s:1.4,show:"after"}),[[-3.8,2.4],[-2.6,2.9],[-3.4,3.6]].forEach(([e,t],i)=>n(Hi(1,.9,.8,"#f4ead3",!0,i===1),e,t,{show:"after",delay:.3+i*.15}))}}},i_="#4a2c1a",s_=`<defs><filter id="boil" x="-5%" y="-5%" width="110%" height="110%">
  <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="1"/>
  <feDisplacementMap in="SourceGraphic" scale="3.5" xChannelSelector="R" yChannelSelector="G"/></filter></defs>`,ar=(n,e)=>`<path d="${n}" stroke-width="15"/><path d="${n}" stroke="${e}" stroke-width="8"/>`,or=(n,e,t)=>`<circle cx="${n}" cy="${e}" r="7.5" fill="${t}" stroke-width="3.5"/>`;function gh(n,e,t=1){const i=s=>`<circle cx="${n+s*t}" cy="${e}" r="${8.5*t}" fill="#fff"/>
    <circle cx="${n+(s+1.5)*t}" cy="${e+1}" r="${4.6*t}" fill="#2a1a10" stroke="none"/>
    <circle cx="${n+(s+3)*t}" cy="${e-1.5}" r="${1.7*t}" fill="#fff" stroke="none"/>`;return`${i(-13)}${i(13)}
    <ellipse cx="${n-23*t}" cy="${e+15*t}" rx="${7*t}" ry="${4*t}" fill="#f4a6b8" stroke="none" opacity=".85"/>
    <ellipse cx="${n+23*t}" cy="${e+15*t}" rx="${7*t}" ry="${4*t}" fill="#f4a6b8" stroke="none" opacity=".85"/>
    <path d="M${n-7*t} ${e+17*t} Q${n} ${e+24*t} ${n+7*t} ${e+17*t}" stroke-width="3"/>`}function lr({skin:n,top:e,legs:t,sleeve:i=e,feet:s="#f7efe0"}){return`
    <path d="M36 204 Q100 176 164 204 Q170 230 100 232 Q30 230 36 204 Z" fill="${t}"/>
    <ellipse cx="62" cy="224" rx="13" ry="7" fill="${s}"/>
    <ellipse cx="138" cy="224" rx="13" ry="7" fill="${s}"/>
    <path d="M60 136 Q100 120 140 136 L152 206 Q100 216 48 206 Z" fill="${e}"/>
    <g class="poseA">${ar("M64 144 Q56 176 86 194",i)}${ar("M136 144 Q144 176 114 194",i)}${or(90,195,n)}${or(110,195,n)}</g>
    <g class="poseB">${ar("M64 144 Q56 176 86 194",i)}${or(90,195,n)}${ar("M136 144 Q160 132 164 104",i)}
      <path d="M164 104 L162 88 M164 104 L172 92 M164 104 L154 94"/>${or(164,104,n)}</g>`}function uc({skin:n,scarf:e,scarfDark:t,cy:i=86}){return`
    <path d="M56 128 Q100 150 144 128 L150 150 Q100 170 50 150 Z" fill="${e}"/>
    <path d="M50 ${i+6} Q46 ${i-52} 100 ${i-54} Q154 ${i-52} 150 ${i+6} Q152 ${i+44} 124 ${i+54} L76 ${i+54} Q48 ${i+44} 50 ${i+6} Z" fill="${e}"/>
    <path d="M66 ${i-30} Q100 ${i-46} 134 ${i-30}" stroke="${t}" stroke-width="3"/>
    <ellipse cx="100" cy="${i+6}" rx="32" ry="36" fill="${n}"/>
    ${gh(100,i+2)}`}function fc({skin:n,kufi:e,band:t,hair:i,beard:s,cy:r=86}){return`
    <circle cx="61" cy="${r+4}" r="9" fill="${n}"/><circle cx="139" cy="${r+4}" r="9" fill="${n}"/>
    <path d="M60 ${r} Q58 ${r-44} 100 ${r-46} Q142 ${r-44} 140 ${r} Q142 ${r+44} 100 ${r+46} Q58 ${r+44} 60 ${r} Z" fill="${n}"/>
    <path d="M62 ${r-14} Q62 ${r-32} 70 ${r-30} L130 ${r-30} Q138 ${r-32} 138 ${r-14} Q134 ${r-22} 128 ${r-22} L72 ${r-22} Q66 ${r-22} 62 ${r-14} Z" fill="${i}"/>
    ${s?`<path d="M64 ${r+8} Q66 ${r+50} 100 ${r+54} Q134 ${r+50} 136 ${r+8} Q126 ${r+30} 100 ${r+30} Q74 ${r+30} 64 ${r+8} Z" fill="${s}"/>`:""}
    <path d="M62 ${r-26} Q60 ${r-58} 100 ${r-60} Q140 ${r-58} 138 ${r-26} Z" fill="${e}"/>
    <path d="M62 ${r-30} L138 ${r-30}" stroke="${t}" stroke-width="7"/>
    <path d="M62 ${r-26} L138 ${r-26}"/>
    ${gh(100,r+2)}`}function cr(n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="200" height="240">${s_}
  <g filter="url(#boil)" fill="none" stroke="${i_}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">${n}</g></svg>`}const zn={baba:cr(lr({skin:"#c68a5e",top:"#e9e2cf",legs:"#b9b2a0",feet:"#8a5d33"})+fc({skin:"#c68a5e",kufi:"#ffffff",band:"#7fb7c9",hair:"#3b2a1e",beard:"#3b2a1e"})),mama:cr(lr({skin:"#e0a878",top:"#8f7bd6",legs:"#6e5cb8",feet:"#f7efe0"})+uc({skin:"#e0a878",scarf:"#f0b3d6",scarfDark:"#d58ab5"})),girl:cr(lr({skin:"#b07650",top:"#f5cf5f",legs:"#7fb7c9",feet:"#f7efe0"})+uc({skin:"#b07650",scarf:"#78c4dc",scarfDark:"#4f9fbd"})),boy:cr(lr({skin:"#d79a6b",top:"#83c47b",legs:"#5d6e9e",feet:"#f7efe0"})+fc({skin:"#d79a6b",kufi:"#f3e3b5",band:"#e8584e",hair:"#4a2c1a"}))},r_=7,Bo=3,mo=Eu.degToRad(30),xa=1/Math.cos(mo),dc=100,pc={night:{sky:10134783,ground:3814998,hemi:1.55,sun:13160703,sunI:.8},camp:{sky:9411312,ground:3814998,hemi:1.35,sun:12109055,sunI:.55},deep:{sky:9083112,ground:3160168,hemi:1.5,sun:11583743,sunI:.6},dusk:{sky:16769232,ground:8018552,hemi:1.8,sun:16763040,sunI:1.1},day:{sky:16777215,ground:15985368,hemi:1.9,sun:16777215,sunI:1.3},storm:{sky:13159648,ground:5263466,hemi:1.6,sun:14212336,sunI:.6}};async function a_(n,e,t){const i=new Image;i.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n),await i.decode();const s=document.createElement("canvas");return s.width=e,s.height=t,s.getContext("2d").drawImage(i,0,0,e,t),s}function Hn(n,e,t,i){return Promise.all(Array.from({length:Bo},(s,r)=>{let a=n.replace(/seed="\d+"/,`seed="${r*17+3}"`);return a=a.replace("</svg>",`<style>.pose${i==="A"?"B":"A"}{display:none}</style></svg>`),a_(a,e,t).then(o=>Tn(o))}))}const ya=n=>Array.from({length:Bo},(e,t)=>Tn(n(t)));function mc(n,e=6.2,t=1.6){const i=new Bt,s=72,r=[];for(let _=0;_<s;_++){const P=_/s*Math.PI*2,A=1+.025*Math.sin(P*5+1)+.015*Math.sin(P*11);r.push([Math.cos(P)*e*A,Math.sin(P)*e*A*.82])}const a=Tn(fh(n,2*e+1,40,n.length)),o=new Lr(r.map(([_,P])=>new ge(_,-P))),l=new Do(o),c=l.attributes.position,h=l.attributes.uv,u=2*e+1;for(let _=0;_<c.count;_++)h.setXY(_,(c.getX(_)+u/2)/u,(c.getY(_)+u/2)/u);const f=new _t(l,new Yt({map:a}));f.rotation.x=-Math.PI/2;const d=[],g=[],v=[];let m=0;for(let _=0;_<=s;_++){const[P,A]=r[_%s];if(_){const[T,C]=r[_-1];m+=Math.hypot(P-T,A-C)}if(d.push(P,0,A,P,-t,A),g.push(m/8,1,m/8,0),_){const T=(_-1)*2;v.push(T,T+1,T+2,T+1,T+3,T+2)}}const p=new Pt;p.setAttribute("position",new Qe(d,3)),p.setAttribute("uv",new Qe(g,2)),p.setIndex(v),p.computeVertexNormals();const S=Tn(zg(n),!0),x=new _t(p,new Yt({map:S,side:At}));return i.add(f,x),i.userData={top:f,wall:x,R:e},i}async function o_(n){const e=new qc,t=new Ar(-1,1,1,-1,.1,400),i=Pg(n),s=[],r=[],a={},o=D=>a[D]||(a[D]=Tn(Bg(D))),l=new yg(16777215,15985368,1.9),c=new wg(16777215,1.3);c.position.set(-9,8,6),e.add(l,c,c.target);function h(D){const N=pc[D]||pc.night;l.color.set(N.sky),l.groundColor.set(N.ground),l.intensity=N.hemi,c.color.set(N.sun),c.intensity=N.sunI,e.background=o(D==="camp"?"night":D)}const u=new Yt({map:Tn(Ag()),transparent:!0,depthWrite:!1}),f=new Rn(1,1).rotateX(-Math.PI/2);function d(D,N,W,O,ae=O*.5){const Le=new _t(f,u);return Le.position.set(N,.02,W),Le.scale.set(O,1,ae),Le.renderOrder=1,Le.userData.noInk=!0,D.add(Le),Le}function g(D,N,W,O,ae,Le,oe,Me){const Ie=Me||new Yt({map:N[0],alphaTest:.5,alphaToCoverage:!0,side:At});Me||s.push({mat:Ie,frames:N});const ze=new Rn(W,O*xa);ze.translate(0,O*xa/2,0);const me=new _t(ze,Ie);return me.position.set(ae,Le,oe),me.userData.sprite=!0,me.userData.colorMap=()=>Ie.map,D.add(me),r.push(me),me}const v=new Bt;e.add(v),v.add(mc("camp",6.4,1.8));const m=t_();v.add(m);const p=new Sg(16754784,9,9,1.2);p.position.set(0,1.2,.2),v.add(p);const S=new _t(new Rn(5.5,4.4).rotateX(-Math.PI/2),new Yt({map:Tn(Hg()),transparent:!0,depthWrite:!1,blending:Sa}));S.position.y=.03,S.userData.noInk=!0,S.renderOrder=2,v.add(S);{const D=(W,O,ae,Le=0,oe=1)=>(W.position.set(O,0,ae),W.rotation.y=Le,typeof oe=="number"?W.scale.setScalar(oe):W.scale.set(...oe),v.add(W),W);D(mh(),-3.6,-2.6,.35,.8),d(v,-3.6,-2.4,3.2),D(uo(101),3.9,-2.8,0,[.9,1.3,.9]),d(v,3.9,-2.8,1.6),D(fo(102),5,-.6,0,[.8,1.1,.8]),d(v,5,-.6,1.8),D(fo(103),-5.1,-.2,0,[.75,1,.75]),d(v,-5.1,-.2,1.6),D(uo(104),1.2,-4,0,[.8,1.2,.8]),D(Vn(9,.7),-4.3,2.4),D(Vn(10,.5),4.2,2.6),D(Cs(2,.17),-1.7,-1.35,.5),D(Cs(2,.17),1.7,-1.35,-.5);const N=Hi(.3,.3,.4,"#f5cf5f",!0);D(N,2.9,1.6,.4,.8);for(let W=0;W<10;W++){const O=W*2.4;D(ph(W%2?"#fffdf6":"#c9b5ee"),Math.cos(O)*(3.2+W%3*.7),1.6+Math.sin(O)*1.4,0,1.2)}}const x=300,_=360,[P,A,T,C,w,y,L,X]=await Promise.all([Hn(zn.baba,x,_,"A"),Hn(zn.baba,x,_,"B"),Hn(zn.mama,x,_,"A"),Hn(zn.mama,x,_,"B"),Hn(zn.girl,x,_,"A"),Hn(zn.girl,x,_,"B"),Hn(zn.boy,x,_,"A"),Hn(zn.boy,x,_,"B")]),z={};function j(D,N,W,O,ae,Le,oe,Me){const Ie=new Yt({map:N[0],alphaTest:.5,alphaToCoverage:!0,side:At}),ze=g(v,null,O,ae,Le,0,oe,Ie);d(v,Le,oe+.05,O*.9),z[D]={m:ze,mat:Ie,A:N,B:W,talk:!1,face:Me,x:Le,z:oe,h:ae}}j("baba",P,A,1.35,1.62,-2.2,-1.2,1),j("mama",T,C,1.3,1.56,-.75,-1.75,1),j("girl",w,y,1.05,1.26,.8,-1.75,-1),j("boy",L,X,1.05,1.26,2.2,-1.2,-1),z.baba.m.position.y=z.mama.m.position.y=.12,z.girl.m.position.y=z.boy.m.position.y=.12;const Q=g(v,ya(D=>rc(D,"dots")),.8,.62,0,0,0),J=g(v,ya(D=>rc(D,"think")),.8,.62,0,0,0);Q.visible=J.visible=!1;const ne=new Bt;ne.position.x=dc,e.add(ne);let H=null;function xe(D){H&&(ne.remove(H.root),H=null);const N=n_[D],W=new Bt;ne.add(W);const O=typeof N.ground=="string"?{before:N.ground,after:N.ground}:N.ground,ae=mc(O.before);W.add(ae);const Le={[O.before]:ae.userData.top.material.map},oe=[];N.build((Me,Ie,ze,me={})=>{Me.position.set(Ie,me.y||0,ze),me.ry&&(Me.rotation.y=me.ry),me.rz&&(Me.rotation.z=me.rz);const Ze=me.s==null?[1,1,1]:typeof me.s=="number"?[me.s,me.s,me.s]:me.s;Me.scale.set(...Ze),W.add(Me);let We=null;if(!me.y&&!Me.userData.rain){const rt=new ns().setFromObject(Me),U=Math.max(.6,(rt.max.x-rt.min.x)*.9);U<5&&(We=d(W,Ie,ze+.05,U))}return oe.push({obj:Me,sh:We,show:me.show,base:Ze,y:me.y||0,x:Ie,z:ze,delay:me.delay||0,bob:me.bob,rock:me.rock,bow:me.bow,sway:me.sway,rise:me.rise,swim:me.swim,k:oe.length,t:1,vis:!0}),Me}),H={key:D,def:N,root:W,items:oe,isle:ae,grounds:O,tops:Le,state:null},F("before",!0)}function F(D,N=!1){var O;if(!H)return;H.state=D,H.stateT=0;const W=H.grounds[D];(O=H.tops)[W]||(O[W]=Tn(fh(W,2*6.2+1,40,W.length))),H.isle.userData.top.material.map=H.tops[W];for(const ae of H.items){const Le=!ae.show||ae.show===D;Le===ae.vis&&!N||(ae.vis=Le,ae.t=N?1:0)}se(0),Y==="stage"&&h(H.def.mood[D])}const G=D=>1+2.7*(D-1)**3+1.7*(D-1)**2;function se(D){for(const N of H.items){N.t=Math.min(1,N.t+D/(N.vis?.55:.3));let W;if(N.vis){const ae=Math.max(0,Math.min(1,(N.t*.55-N.delay)/.55+(N.t>=1?1:0)));W=N.t>=1?1:G(ae)}else W=1-N.t;const O=Math.max(1e-4,W);N.obj.visible=O>.001,N.obj.scale.set(N.base[0]*O,N.base[1]*O,N.base[2]*O),N.sh&&(N.sh.visible=N.obj.visible&&N.vis)}}const ce={aspect:1.6,W:1280,H:800,inset:{right:0,bottom:0},zoom:1},$={camp:{x:0,y:.7,z:-.6,needW:4.4,needH:2.7},stage:{x:dc,y:1.9,z:-.8,needW:6.6,needH:4.9}};let Y="camp";function ie(){const D=$[Y],N=Math.max(.3,(ce.W-ce.inset.right)/ce.W),W=Math.max(.3,(ce.H-ce.inset.bottom)/ce.H),O=Math.max(D.needH/W,D.needW/(ce.aspect*N))*ce.zoom,ae=O*ce.aspect,Le=(1-N)*ae,oe=-(1-W)*O;Object.assign(t,{left:-ae+Le,right:ae+Le,top:O+oe,bottom:-O+oe}),t.updateProjectionMatrix();const Me=80,Ie=new I(D.x,D.y,D.z);t.position.set(Ie.x,Ie.y+Math.sin(mo)*Me,Ie.z+Math.cos(mo)*Me),t.lookAt(Ie)}function te(D,N){ce.W=D,ce.H=N,ce.aspect=D/N,ie()}function _e(D){ce.inset=D,ie()}function Ue(D,N,W="before"){Y=D,v.visible=D==="camp",ne.visible=D==="stage",D==="stage"?((!H||H.key!==N)&&xe(N),H.state!==W&&F(W),h(H.def.mood[H.state])):h("camp"),ie()}let Pe=[];function Ge(D,N="baba"){for(const O of Object.values(z))O.talk=!1;Pe=D==="parent"?N==="both"?["baba","mama"]:[N]:D==="child"?["girl","boy"]:D==="all"?["baba","mama","girl","boy"]:[];for(const O of Pe)z[O].talk=!0;Q.visible=D==="parent"||D==="all",J.visible=D==="child";const W=D==="parent"?Pe[0]:D==="child"?"girl":D==="all"?"mama":null;if(W){const O=z[W],ae=D==="child"?J:Q;ae.userData.anchor=O}}const re=[],pe=ya(D=>Gg(D)),R=new Yt({map:pe[0],alphaTest:.5,side:At});s.push({mat:R,frames:pe});const De=new Yt({color:"#ffc46a"}),de=new pi(.04,5,4),Ee=[];function ye(D=10){const N=Y==="camp"?v:ne,W=Y==="camp"?1.2:2;for(let O=0;O<D;O++){const ae=O/D*Math.PI*2+Math.random(),Le=g(N,null,.36,.36,0,W,0,R);re.push({m:Le,parent:N,vx:Math.cos(ae)*2.6,vz:Math.sin(ae)*1.2,vy:3+Math.random()*1.6,t:0})}}let we=0,Re=-1,E=0,M=0;function V(D){D=Math.max(0,D),we+=D;const N=Math.max(0,Math.floor(we*r_))%Bo;if(N!==Re){Re=N,E=N*7.31;for(const W of s)W.mat.map=W.frames[N]}if(v.visible){m.children[m.children.length-1].scale.set(1+Math.sin(we*13)*.05,1+Math.sin(we*9.3)*.1+Math.sin(we*21)*.04,1),p.intensity=9+Math.sin(we*11)*1.2+Math.sin(we*17)*.8,S.material.opacity=.85+Math.sin(we*11)*.1;for(const O of Object.values(z)){const ae=O.talk&&Math.floor(we*2.2+O.x)%2===0;O.mat.map=(O.talk?O.B:O.A)[N];const Le=1+Math.sin(we*3+O.x)*.018+(ae?Math.abs(Math.sin(we*9))*.02:0);O.m.scale.set(O.face/Le,Le,1)}for(const O of[Q,J])if(O.visible&&O.userData.anchor){const ae=O.userData.anchor;O.position.set(ae.x+.55,ae.h*xa*.95+.2+Math.sin(we*4)*.05,ae.z+.1)}if(M-=D,M<=0){M=.18;const O=new _t(de,De);O.userData.noInk=!0,O.position.set((Math.random()-.5)*.5,.9,(Math.random()-.5)*.4),v.add(O),Ee.push({e:O,t:0,vx:(Math.random()-.5)*.4})}}for(let W=Ee.length-1;W>=0;W--){const O=Ee[W];O.t+=D,O.e.position.y+=D*1.1,O.e.position.x+=Math.sin(we*3+W)*D*.3+O.vx*D,O.e.scale.setScalar(Math.max(.01,1-O.t/2)),O.t>2&&(v.remove(O.e),Ee.splice(W,1))}if(ne.visible&&H){se(D);for(const W of H.items){const O=W.obj;if(O.userData.flicker&&(O.scale.y=W.base[1]*(W.vis?1:0)*(1+Math.sin(we*11+W.k)*.08)||O.scale.y),W.bob&&(O.position.y=W.y+Math.sin(we*1.6+W.k)*.12),W.rock&&(O.rotation.z=Math.sin(we*1.4)*.12,O.position.y=W.y+Math.sin(we*2)*.1),W.sway&&(O.rotation.z=Math.sin(we*1.2+W.k)*.12),W.swim&&O.userData.tail&&(O.userData.tail.rotation.y=Math.sin(we*2)*.3),W.rise&&W.vis&&(O.position.y=W.y+(we*.5+W.k*.13)%2),W.bow){const ae=H.state==="after"?1:0;W.bowK=(W.bowK||0)+(ae-(W.bowK||0))*Math.min(1,D*2),O.rotation.z=W.bowK*.35,O.position.y=W.y-W.bowK*.6+Math.sin(we*1.6+W.k)*.08}if(O.userData.spinY&&(O.rotation.y=Math.sin(we*O.userData.spinY+W.k)*.5),O.userData.rain)for(const ae of O.children)ae.position.y-=D*7,ae.position.y<0&&(ae.position.y+=O.userData.rain)}}for(let W=re.length-1;W>=0;W--){const O=re[W];O.t+=D,O.vy-=8*D,O.m.position.x+=O.vx*D,O.m.position.z+=O.vz*D,O.m.position.y=Math.max(0,O.m.position.y+O.vy*D),O.m.scale.setScalar(Math.max(.001,1-O.t/1)),O.t>1&&(O.parent.remove(O.m),r.splice(r.indexOf(O.m),1),re.splice(W,1))}}const ee=()=>i.render(e,t,E);return Ue("camp"),{scene:e,camera:t,resize:te,setInset:_e,go:Ue,update:V,render:ee,setStageState:F,setTalk:Ge,burst:ye,get place(){return Y},get stageKey(){return H==null?void 0:H.key},get stageState(){return H==null?void 0:H.state},familyIcon:D=>z[D].A[0].image}}const en="عليه السلام",l_="ﷺ",c_=[{e:"😨",t:"Scared"},{e:"😢",t:"Sad"},{e:"😌",t:"Calm"},{e:"🦁",t:"Brave"},{e:"🤲",t:"Trusting Allah"},{e:"😲",t:"Surprised"},{e:"😟",t:"Worried"},{e:"😊",t:"Hopeful"}],hr=[{id:"adam",name:"Adam",honor:en,label:"The First People",icon:"tree"},{id:"nuh",name:"Nuh",honor:en,label:"The Great Ship",icon:"ark",story:"nuh"},{id:"ibrahim",name:"Ibrahim",honor:en,label:"The Stars and the Fire",icon:"star",story:"ibrahim"},{id:"yusuf",name:"Yusuf",honor:en,label:"The Well",icon:"well",story:"yusuf"},{id:"musa",name:"Musa",honor:en,label:"The Parted Sea",icon:"waves"},{id:"yunus",name:"Yunus",honor:en,label:"The Whale",icon:"whale",story:"yunus"},{id:"isa",name:"Isa",honor:en,label:"The Palm Tree",icon:"palm"},{id:"muhammad",name:"Muhammad",honor:l_,label:"The First Revelation",icon:"book"},{id:"hijrah",name:"The Hijrah",honor:"",label:"The Journey to Madinah",icon:"moon"}],Fi={nuh:{id:"nuh",name:"Nuh",honor:en,title:"Nuh and the Great Ship",icon:"ark",blurb:"A huge ship built on dry land, and waves as big as mountains.",chapters:[{title:"A Ship on Dry Land",scene:"nuh-build",read:["Long, long ago lived the prophet Nuh {honor}. For a very, very long time (nine hundred and fifty years!) he called his people to worship Allah alone. He called them in the day and in the night, loudly and quietly. But only a few people believed.","Then Allah told Nuh to build a ship. A huge ship, right there on dry land, far away from the sea! Every time the chiefs of his people walked past, they laughed at him. But Nuh kept on building, plank by plank."],question:"Why would anyone build a ship on dry land? What do you think is coming?",parent:{ask:"What is a ship for? If Allah told Nuh to build one far from the sea, what might be about to happen?",hints:["Look at the sky in the picture. What could come from up there?","How do you keep going when people laugh at you?"],answer:"A great flood was coming. Allah told Nuh to load a pair of every kind of animal, and the believers, onto the ship."},predict:[{type:"order",prompt:"Put these in the order you think they will happen:",cards:[{e:"🔨",t:"Nuh finishes the ship"},{e:"🐑",t:"Animals come aboard in pairs"},{e:"🌧️",t:"Rain pours and the water rises"},{e:"⛰️",t:"The ship finds a place to rest"}]}],reveal:["Nuh finished the ship. Then Allah told him to bring on board a pair of every kind of animal, his family, and the people who believed.","Two by two, the animals came. Then the sky opened with pouring rain, and water burst up out of the ground. Slowly, the great ship began to float."],ayat:[{ref:"Hud 11:38",text:'And he constructed the ship, and whenever an assembly of the eminent of his people passed by him, they ridiculed him. He said, "If you ridicule us, then we will ridicule you just as you ridicule."'}],explain:"Nuh {honor} obeyed Allah even when it looked strange to everyone else, and even when people made fun of him. He trusted that Allah knew what was coming.",reflect:{q:"Nuh kept doing what was right even when people laughed. Is there something good you keep doing, even when it is hard?",tip:"Share one of your own: a good habit you keep even when nobody sees.",apply:"Pick one good habit together (like saying Bismillah before eating) and keep it up all week."}},{title:"Waves like Mountains",scene:"nuh-flood",read:['The rain poured and the water rose everywhere. The ship sailed on through waves as big as mountains. Nuh called out to his son, who had stayed behind: "O my son, come aboard with us!" But his son said, "I will climb a mountain. It will keep me safe from the water." Then a wave came between them.',"Inside the ship, the believers and the animals were safe, rocking on the huge waves. Days passed, and everyone waited. How would the flood end?"],question:"The ship is sailing on huge waves. What do you think happens next?",parent:{ask:"What do you do when you have to wait a long time for something? Who were the people on the ship trusting?",hints:["Could a mountain protect anyone from Allah's command?","Who can make the rain stop?"],answer:"Allah commanded the earth to swallow its water and the sky to stop. The water went down, and the ship came to rest on a mountain called Al-Judi.",note:"The part about Nuh's son is sad (he was among those who drowned). You can keep it simple: only Allah's mercy can save us, not a mountain."},predict:[{type:"emotion",prompt:"How do you think the people inside the ship felt?"},{type:"choose",prompt:"What do you think happens next?",options:[{e:"☀️",t:"The water goes down"},{e:"🚢",t:"They sail forever"},{e:"🏝️",t:"They find a new island"}]}],reveal:['Then Allah said: "O earth, swallow your water, and O sky, hold back your rain!" The rain stopped. The water went down, down, down.',"The ship came to rest on a mountain called Al-Judi. Nuh, the believers and all the animals stepped out onto dry land, safe and grateful, with peace and blessings from Allah."],ayat:[{ref:"Hud 11:44",text:'And it was said, "O earth, swallow your water, and O sky, withhold [your rain]." And the water subsided, and the matter was accomplished, and the ship came to rest on the [mountain of] Judiyy. And it was said, "Away with the wrongdoing people."'}],explain:"Everything obeys Allah: the sky, the earth and the water. The people on the ship were saved because they believed and obeyed.",reflect:{q:"Nuh and the believers were so grateful to reach dry land. What are three things you are grateful to Allah for today?",tip:"Take turns: one thing each, until you both have three.",apply:'Say "Alhamdulillah" out loud for three things before bed each night this week.'}}]},ibrahim:{id:"ibrahim",name:"Ibrahim",honor:en,title:"Ibrahim and the Stars",icon:"star",blurb:"A night of stars, a hall of stone statues, and a fire that obeyed Allah.",chapters:[{title:"Who Made the Sky?",scene:"ibrahim-sky",read:["Long ago lived a young man named Ibrahim {honor}. His people made statues out of stone and wood and bowed down to them. Some of them also worshipped the stars, the moon and the sun.",'Ibrahim wanted to show his people the truth. One night the sky grew dark and a bright star appeared. Ibrahim said to his people, "Is this my Lord?" The night went on... and slowly, the star began to sink behind the hills.'],question:"The star is disappearing! What do you think Ibrahim said?",parent:{ask:"What happens to the stars when morning comes? Could something that goes away be the One who looks after us all the time?",hints:["Does Allah ever go away or fall asleep?","Who made the stars in the first place?"],answer:'When the star set, he said, "I do not like things that disappear." The same happened with the moon and then the sun. Each one set, so none of them could be God.',note:'Many scholars explain that Ibrahim {honor} said "Is this my Lord?" to reason with his people step by step. He never really believed the star was God.'},predict:[{type:"choose",prompt:"What do you think Ibrahim said?",options:[{e:"⭐",t:'"Come back, star!"'},{e:"🤔",t:`"Something that goes away can't be my Lord."`},{e:"🌙",t:`"Let's wait for the moon."`}]}],reveal:['When the star set, Ibrahim said, "I do not like things that disappear." Then the moon rose, big and bright. But the moon set too. Then the sun rose, the biggest and brightest of all. But in the evening, the sun set as well.',"Ibrahim told his people: the stars, the moon and the sun all come and go. They are not God. Allah made them all, and Allah never disappears."],ayat:[{ref:"Al-An'am 6:76",text:'So when the night covered him [with darkness], he saw a star. He said, "This is my lord." But when it set, he said, "I like not those that disappear."'},{ref:"Al-An'am 6:79",text:"Indeed, I have turned my face toward He who created the heavens and the earth, inclining toward truth, and I am not of those who associate others with Allah."}],explain:"The things Allah created are beautiful, but they change, set and go away. Allah, who made them, is always there.",reflect:{q:"Allah never sleeps and never disappears. He is always with us. When do you like to talk to Allah?",tip:'In Ayat al-Kursi Allah tells us: "Neither drowsiness overtakes Him nor sleep" (Al-Baqarah 2:255).',apply:'Tonight, look out of the window at the sky together and say "SubhanAllah" for something you can see.'}},{title:"The Stone Statues",scene:"ibrahim-idols",read:['Ibrahim {honor} spoke to his people gently. "What are these statues you keep bowing to?" he asked. They said, "We found our fathers worshipping them." Ibrahim said, "Then you and your fathers have been clearly wrong."','One day, the people went out of town. Ibrahim went to the statues and broke them into pieces, all except the biggest one. When the people came back, they gasped! "Who did this to our gods?" They brought Ibrahim in front of everyone and asked, "Was it you who did this, O Ibrahim?"'],question:"Everyone is looking at Ibrahim. What do you think he answered?",parent:{ask:"If the statues were really gods, what should they be able to do? Could they protect themselves? Could they talk?",hints:["Can a stone hear you or answer you?","What would be a clever way to make the people think?"],answer:'He pointed at the biggest statue and said, "Rather, this biggest one did it. So ask them, if they can speak!" The people knew statues cannot speak.',note:"Good to add: Ibrahim {honor} was a prophet guided by Allah. We never break other people's things. We share the truth with kind, clever words, like Ibrahim did."},predict:[{type:"say",prompt:"If you were Ibrahim, what would you say to the people? Say it out loud to {parent}!"}],reveal:['Ibrahim said, "Rather, this biggest one did it! So ask them, if they can speak."',"The people went quiet. They looked at each other. They knew the statues could not speak, could not hear, and could not even protect themselves. For a moment they knew they had been wrong. But their pride was too big, and they turned against Ibrahim."],ayat:[{ref:"Al-Anbiya 21:63",text:'He said, "Rather, this - the largest of them - did it, so ask them, if they should [be able to] speak."'},{ref:"Al-Anbiya 21:66",text:'He said, "Then do you worship instead of Allah that which does not benefit you at all or harm you?"'}],explain:"Ibrahim {honor} helped his people use their minds: something that cannot speak, hear or help itself cannot help us. Only Allah can.",reflect:{q:"Ibrahim was brave enough to say the truth even when everyone else did something different. When is it hard to be different from your friends?",tip:"Tell a story from your own childhood when you had to be brave and different.",apply:`Practise a kind, brave sentence together for when friends do something wrong: "I don't think that's okay."`}},{title:"The Great Fire",scene:"ibrahim-fire",read:['The people were very angry. "Burn him, and help your gods!" they shouted. They gathered wood and built an enormous fire, so hot that nobody could go near it. Then they threw Ibrahim {honor} into the flames.',`But Ibrahim trusted Allah completely. He said: "Hasbunallahu wa ni'mal wakeel." Allah is enough for us, and He is the best One to trust.`],question:"Ibrahim is in the middle of the fire! What do you think happens next?",parent:{ask:"Who made fire hot? If Allah made fire hot, could Allah also tell it to be cool?",hints:["Everything in the world obeys Allah, even fire.","What did Ibrahim say just before?"],answer:'Allah commanded the fire: "Be coolness and safety for Ibrahim." The fire could not hurt him, and he came out safe.'},predict:[{type:"emotion",prompt:"How do you think Ibrahim felt in his heart?"},{type:"choose",prompt:"What do you think happens next?",options:[{e:"🌧️",t:"Rain puts the fire out"},{e:"❄️",t:"The fire turns cool"},{e:"🏃",t:"He runs away"}]}],reveal:['Allah said: "O fire, be coolness and safety for Ibrahim." And the fire obeyed!',"The flames could not hurt Ibrahim at all. He was safe in the middle of the fire, and the people could not believe their eyes. The ones who wanted to hurt him were the real losers that day."],ayat:[{ref:"Al-Anbiya 21:69",ar:"يَا نَارُ كُونِي بَرْدًا وَسَلَامًا عَلَىٰ إِبْرَاهِيمَ",text:'We [i.e., Allah] said, "O fire, be coolness and safety upon Ibrahim."'}],hadith:{text:`"Hasbunallahu wa ni'mal wakeel" (Allah is sufficient for us, and He is the best Disposer of affairs) was said by Ibrahim when he was thrown into the fire, and it was said by Muhammad ﷺ when people told him an army had gathered against him.`,src:"Ibn 'Abbas, Sahih al-Bukhari 4563"},explain:"Fire burns only because Allah lets it. When Allah commanded it to be cool, it became cool. Ibrahim {honor} knew Allah was enough for him.",reflect:{q:"When you feel scared, what can you say to remember that Allah is with you?",tip:`Teach the words slowly: "Hasbunallahu wa ni'mal wakeel". Say them together a few times.`,apply:`Say "Hasbunallahu wa ni'mal wakeel" together before sleeping tonight.`}}]},yusuf:{id:"yusuf",name:"Yusuf",honor:en,title:"Yusuf and the Well",icon:"well",blurb:"A special dream, a deep well, and the most beautiful forgiveness.",chapters:[{title:"The Special Dream",scene:"yusuf-dream",read:["Yusuf {honor} was a kind and gentle boy. He lived with his father, the prophet Ya'qub {honor}, and his eleven brothers. His father loved him very much, and his older brothers were jealous.",'One morning Yusuf woke up with wonderful news. "Father! In my dream I saw eleven stars, and the sun, and the moon, and they were all bowing down to me!" His father listened carefully. He knew this dream was special...'],question:"What do you think Yusuf's father told him?",parent:{ask:"If you had a special surprise, and you knew someone might feel jealous, what would you do?",hints:["How were the older brothers feeling about Yusuf?","Is it always wise to tell everybody everything?"],answer:"Ya'qub told Yusuf not to tell his brothers about the dream, in case they made a plan against him."},predict:[{type:"choose",prompt:"What do you think his father said?",options:[{e:"🤫",t:'"Keep it a secret."'},{e:"📣",t:'"Tell everyone!"'},{e:"🎁",t:'"Share it with your brothers."'}]}],reveal:[`Ya'qub said, "My son, don't tell your brothers about your dream, or they may make a plan against you."`,"He also told Yusuf that Allah had chosen him and would teach him how to understand dreams. So Yusuf kept the secret. But the brothers' jealousy kept growing..."],ayat:[{ref:"Yusuf 12:4",text:'When Yusuf said to his father, "O my father, indeed I have seen [in a dream] eleven stars and the sun and the moon; I saw them prostrating to me."'},{ref:"Yusuf 12:5",text:'He said, "O my son, do not relate your vision to your brothers or they will contrive against you a plan. Indeed Satan, to man, is a manifest enemy."'}],explain:"Ya'qub {honor} was a wise, loving father. He protected his son by teaching him that some good news is better kept private.",reflect:{q:"Jealousy is a feeling that grows if we feed it. Have you ever felt jealous? What helps it go away?",tip:'The Prophet ﷺ said: "None of you truly believes until he loves for his brother what he loves for himself." (Sahih al-Bukhari 13, Sahih Muslim 45)',apply:`When a brother, sister or friend gets something nice this week, practise saying "MashaAllah, I'm happy for you!"`}},{title:"Down in the Well",scene:"yusuf-well",read:[`The brothers made a plan. "Father, let Yusuf come out with us tomorrow to play. We will look after him." Ya'qub was worried, but he let him go.`,`Far from home, the brothers put Yusuf down into a deep, dark well and left him there. That night they came home crying, with Yusuf's shirt stained with fake blood. "A wolf ate him!" they said. Their father did not believe them. He said, "Patience is most fitting, and Allah is the One whose help I seek."`],question:"Yusuf is all alone at the bottom of the well. What do you think happens next?",parent:{ask:"Yusuf's father chose to be patient. What does patience look like when something is really, really hard?",hints:["Who could still see Yusuf, even at the bottom of the well?","Who might come to a well in the desert?"],answer:"A caravan of travellers came to the well for water. When they let down their bucket, they found Yusuf and took him with them to Egypt."},predict:[{type:"emotion",prompt:"How do you think Yusuf feels at the bottom of the well?"},{type:"choose",prompt:"What do you think happens next?",options:[{e:"🐫",t:"Someone finds him"},{e:"🧗",t:"He climbs out"},{e:"🤲",t:"He waits and makes dua"}]}],reveal:['A caravan of travellers came by on their camels. They were thirsty, so they sent a man to fetch water from the well. He let down his bucket... and he shouted, "Good news! Here is a boy!"',"The travellers took Yusuf with them, all the way to Egypt. There he grew up in the house of an important man. Allah was looking after Yusuf the whole time."],ayat:[{ref:"Yusuf 12:19",text:'And there came a company of travelers; then they sent their water drawer, and he let down his bucket. He said, "Good news! Here is a boy."'},{ref:"Yusuf 12:18",text:"...So patience is most fitting. And Allah is the one sought for help against that which you describe."}],explain:"Even at the bottom of a dark well, Yusuf {honor} was not forgotten. Allah was planning something good for him that no one could see yet.",reflect:{q:"When something really hard happens, like losing something or being left out, what can we do while we wait for it to get better?",tip:"Talk about sabr: staying calm, not giving up, and asking Allah for help.",apply:'Next time something goes wrong, say "Sabrun jameel" (beautiful patience) and take three slow breaths.'}},{title:"No Blame Today",scene:"yusuf-egypt",read:["Many years passed. Yusuf {honor} grew up in Egypt and went through many hard tests, but he always stayed honest and patient. In the end, the king put him in charge of all the food stores of the land. Yusuf saved grain during seven good years, so that when seven hungry years came, people would have food.",`The hungry years reached Yusuf's old home too, and his brothers came all the way to Egypt to ask for food. They did not recognise him, but Yusuf knew them straight away. Later, he told them: "I am Yusuf!" The brothers were shocked and ashamed. The boy they had thrown into the well was now in charge of all of Egypt's food.`],question:"Yusuf could do anything to the brothers who hurt him. What do you think he did?",parent:{ask:"Has someone ever hurt you? How did you want to answer them? What would make Allah happy?",hints:["Remember how patient Yusuf was all those years.","Is getting even the same as being strong?"],answer:'He forgave them completely: "No blame will there be upon you today. Allah will forgive you."',note:"At the end of the story the family bows to Yusuf, which is the meaning of his dream. In that time bowing was a sign of respect; in Islam we bow and prostrate only to Allah."},predict:[{type:"choose",prompt:"What do you think Yusuf did?",options:[{e:"😠",t:"Punished them"},{e:"🤗",t:"Forgave them"},{e:"🙅",t:"Sent them away with no food"}]}],reveal:['Yusuf said: "No blame will there be upon you today. Allah will forgive you, and He is the most merciful of the merciful." He did not shout. He did not take revenge. He forgave them.',"He even gave them his shirt to take home to their father. Then the whole family came to Egypt and they were together again. Yusuf's eleven brothers, his father and his mother bowed in respect, just like the eleven stars, the sun and the moon in his dream!"],ayat:[{ref:"Yusuf 12:92",ar:"لَا تَثْرِيبَ عَلَيْكُمُ الْيَوْمَ ۖ يَغْفِرُ اللَّهُ لَكُمْ ۖ وَهُوَ أَرْحَمُ الرَّاحِمِينَ",text:'He said, "No blame will there be upon you today. Allah will forgive you; and He is the most merciful of the merciful."'}],explain:"Yusuf {honor} had every reason to be angry, but he chose forgiveness. Forgiving is a sign of a strong, beautiful heart.",reflect:{q:"Is there someone we need to forgive, or say sorry to? How does it feel when someone forgives you?",tip:"Maybe start by saying sorry for something small yourself. Children learn it from watching us.",apply:'This week, when someone says sorry, answer like Yusuf: "No blame on you today!"'}}]},yunus:{id:"yunus",name:"Yunus",honor:en,title:"Yunus and the Whale",icon:"whale",blurb:"A stormy sea, a dua in the darkness, and a second chance.",chapters:[{title:"The Stormy Sea",scene:"yunus-ship",read:["Allah sent the prophet Yunus {honor} to a big city full of people. Yunus told them to worship Allah alone and to be good. But they would not listen. Yunus became upset and angry with them, and he left the city.","Yunus went down to the sea and got onto a ship that was full of people and heavy loads. The ship sailed out. Then the wind began to howl, and the waves grew as big as hills. The ship rocked and creaked. It was too heavy. It might sink!"],question:"The ship is too heavy and the sea is wild! What do you think happens next?",parent:{ask:"If a ship is too heavy, what could the people on it do? How do you think Yunus was feeling?",hints:["Look at the sea in the picture. Is anything under the water?","Yunus left in anger. Was that the best choice?"],answer:"The people drew lots to choose who would leave the ship. It fell on Yunus. He went into the sea, and by Allah's command a huge fish swallowed him."},predict:[{type:"choose",prompt:"What do you think happens next?",options:[{e:"🏊",t:"Everyone swims to shore"},{e:"🎲",t:"They pick someone to leave the ship"},{e:"🐋",t:"A giant sea creature comes"}]}],reveal:["The people on the ship drew lots, like picking a name out of a hat, to decide who must leave the ship. The lot fell on Yunus.","So Yunus went into the stormy sea... and a huge fish opened its mouth and swallowed him whole! But Yunus was still alive. Allah was looking after him, even there."],ayat:[{ref:"As-Saffat 37:139-142",text:"And indeed, Yunus was among the messengers. [Mention] when he ran away to the laden ship. And he drew lots and was among the losers. Then the fish swallowed him, while he was blameworthy."}],explain:"Yunus {honor} left his people in anger instead of waiting patiently. Even prophets are tested, and even then Allah looked after him.",reflect:{q:"Yunus felt angry and left. What do you do when you feel really, really angry? What could help?",tip:'A man asked the Prophet ﷺ for advice, and he said: "Do not become angry," repeating it several times. (Sahih al-Bukhari 6116)',apply:'Make an "angry plan" together: when I feel angry I will stop, breathe slowly, and ask for help.'}},{title:"In the Darkness",scene:"yunus-whale",read:["Inside the whale it was dark. Very, very dark. It was dark from the night, dark from the deep sea, and dark inside the whale. Yunus {honor} could not see anything at all. Nobody knew where he was... except Allah.","In the quiet dark, Yunus thought about everything that had happened. He realised he should not have left his people in anger. And he knew exactly what to do."],question:"Yunus is in the dark, deep under the sea. What do you think he did?",parent:{ask:"When you've made a mistake, what is the best thing to do? Who can hear us anywhere, even inside a whale?",hints:["Can Allah hear a whisper at the bottom of the sea?","What do we say when we know we were wrong?"],answer:'He called out to Allah: "There is no god except You. Glory be to You. Indeed, I have been of the wrongdoers." Allah answered him and saved him.'},predict:[{type:"say",prompt:"If you were in the dark like Yunus, what would you say to Allah? Whisper it to {parent}."}],reveal:['From the darkness, Yunus called out to Allah: "La ilaha illa anta, subhanaka, inni kuntu minaz-zalimeen." There is no god except You. You are perfect. I was wrong.',"He did not make excuses. He said sorry to Allah, and Allah heard him, even from inside a whale at the bottom of the sea. Allah answered his dua and saved him."],ayat:[{ref:"Al-Anbiya 21:87",ar:"لَا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",text:'And [mention] the man of the fish, when he went off in anger and thought that We would not decree [anything] upon him. And he called out within the darknesses, "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers."'},{ref:"Al-Anbiya 21:88",text:"So We responded to him and saved him from the distress. And thus do We save the believers."}],explain:"Allah hears us everywhere. When we are honest that we made a mistake and turn back to Him, He answers, just as He answered Yunus {honor}.",reflect:{q:`Saying "I was wrong" can be really hard! When was the last time you said sorry? Let's learn Yunus's dua together.`,tip:'Say the dua slowly, one part at a time: "La ilaha illa anta" · "subhanaka" · "inni kuntu minaz-zalimeen".',apply:"Learn the dua of Yunus together and say it three times before sleeping tonight."}},{title:"Home Again",scene:"yunus-shore",read:["By Allah's command, the whale swam to the shore and put Yunus {honor} out onto the open sand. Yunus was weak and ill after so long inside the whale.","The sun was hot. There was no shade and nobody around to help. Yunus lay on the beach, far from home..."],question:"Yunus is weak and alone on the beach. What do you think happens next?",parent:{ask:"How does Allah look after us when we are weak or poorly? What or who does He send to help us?",hints:["What gives shade on a hot day?","Do you think Yunus went back to his people?"],answer:"Allah made a gourd plant grow over him. Then Allah sent him back to his people, a hundred thousand or more, and this time they believed!"},predict:[{type:"order",prompt:"Put these in the order you think they will happen:",cards:[{e:"🌿",t:"A plant grows over him"},{e:"💪",t:"Yunus gets strong again"},{e:"🚶",t:"He goes back to his people"},{e:"🏘️",t:"The people believe"}]}],reveal:["Allah made a gourd plant grow over Yunus, with big green leaves to shade him from the hot sun. Slowly, Yunus grew strong again.","Then Allah sent him back to his people, a hundred thousand of them or more. And this time something wonderful happened: the people believed! They turned to Allah, and Allah let them enjoy their lives for a time."],ayat:[{ref:"As-Saffat 37:145-148",text:"But We threw him onto the open shore while he was ill. And We caused to grow over him a gourd vine. And We sent him to [his people of] a hundred thousand or more. And they believed, so We gave them enjoyment [of life] for a time."}],explain:"Allah gave Yunus {honor} a second chance, and his people a second chance too. Turning back to Allah always opens a door.",reflect:{q:"Yunus got a second chance. Has anyone ever given you a second chance? Who could we give one to?",tip:"Share a time someone gave you a second chance, and how it felt.",apply:"Give someone a second chance this week, and tell each other about it at dinner."}}]}},gc=["nuh","ibrahim","yusuf","yunus"],zo="family-deen-stories-v1",Ma=()=>({settings:{parent:"baba",child:"",narration:!1,muted:!1,setup:!1},progress:{},current:null,talks:0,journal:[],newlyFinished:null});function _h(){try{const n=JSON.parse(localStorage.getItem(zo)||"null");if(!n)return Ma();const e=Ma();return{...e,...n,settings:{...e.settings,...n.settings||{}}}}catch{return Ma()}}function h_(n){try{localStorage.setItem(zo,JSON.stringify(n))}catch{}}function u_(){try{localStorage.removeItem(zo)}catch{}}let Et,ci,Dr=!1;function Oi(){if(Et){Et.state==="suspended"&&Et.resume();return}const n=window.AudioContext||window.webkitAudioContext;n&&(Et=new n,ci=Et.createGain(),ci.gain.value=Dr?0:.4,ci.connect(Et.destination))}function vh(n){Dr=n,ci&&(ci.gain.value=n?0:.4)}function Mn(n,e,{type:t="triangle",vol:i=.5,slide:s=1,delay:r=0}={}){if(!Et||Dr)return;const a=Et.currentTime+r,o=Et.createOscillator(),l=Et.createGain();o.type=t,o.frequency.setValueAtTime(n,a),o.frequency.exponentialRampToValueAtTime(n*s,a+e),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(i,a+.012),l.gain.exponentialRampToValueAtTime(1e-4,a+e),o.connect(l).connect(ci),o.start(a),o.stop(a+e+.02)}function _c(n,{vol:e=.3,cutoff:t=2e3,type:i="lowpass",delay:s=0}={}){if(!Et||Dr)return;const r=Et.currentTime+s,a=Math.floor(Et.sampleRate*n),o=Et.createBuffer(1,a,Et.sampleRate),l=o.getChannelData(0);for(let f=0;f<a;f++)l[f]=(Math.random()*2-1)*(1-f/a)**2;const c=Et.createBufferSource(),h=Et.createBiquadFilter(),u=Et.createGain();c.buffer=o,h.type=i,h.frequency.value=t,u.gain.value=e,c.connect(h).connect(u).connect(ci),c.start(r)}const xt={tap:()=>Mn(700,.06,{vol:.2}),page:()=>_c(.22,{vol:.25,cutoff:3e3,type:"bandpass"}),pick:()=>{Mn(520,.1,{vol:.3}),Mn(780,.12,{delay:.06,vol:.3})},stop:()=>{Mn(440,.18,{type:"sine",vol:.35}),Mn(330,.26,{type:"sine",delay:.14,vol:.3})},talk:()=>{Mn(392,.16,{type:"sine",vol:.3}),Mn(523,.22,{type:"sine",delay:.1,vol:.3})},reveal:()=>[784,988,1175,1568].forEach((n,e)=>Mn(n,.5,{type:"sine",delay:e*.09,vol:.18})),done:()=>[523,659,784,1047].forEach((n,e)=>Mn(n,.24,{delay:e*.1,vol:.35})),crackle:()=>{for(let n=0;n<3;n++)_c(.03,{vol:.08+Math.random()*.06,cutoff:1500+Math.random()*2500,type:"highpass",delay:Math.random()*.4})}},br=typeof window<"u"?window.speechSynthesis:null,bs=!!(br&&window.SpeechSynthesisUtterance);function ki(n){if(!bs)return;vs();const e=n.replace(/عليه السلام/g,"alayhis salaam").replace(/ﷺ/g,"sallallahu alayhi wa sallam").replace(/[؀-ۿݐ-ݿﭐ-﷿ﹰ-﻿]+/g," ").replace(/<[^>]+>/g,""),t=new SpeechSynthesisUtterance(e);t.rate=.9,t.pitch=1.05;const i=br.getVoices().find(s=>/en[-_](GB|US)/i.test(s.lang));i&&(t.voice=i),br.speak(t)}function vs(){bs&&br.cancel()}const He=n=>document.getElementById(n),Je=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);let Be=_h();vh(Be.settings.muted);const ln=()=>({baba:"Baba",mama:"Mama",both:"Baba & Mama"})[Be.settings.parent]||"Baba",cn=()=>Be.settings.child.trim()||"Little star";function Bi(n,e){return Je(n).replace(/\{parent\}/g,ln()).replace(/\{child\}/g,Je(cn())).replace(/\{honor\}/g,e?`<span class="honor">${e.honor}</span>`:"").replace(/ﷺ/g,'<span class="honor">ﷺ</span>')}const Sn=n=>n.replace(/<[^>]+>/g,"");function f_(n){const e=n.read.map((t,i)=>`read:${i}`);return e.push("stop","cover","parent","handback"),n.predict.forEach((t,i)=>e.push(`predict:${i}`)),e.push("great","reveal","ayah","reflect","done"),e}function d_(n){const e=n.split(":")[0];return e==="read"||e==="stop"?{place:"stage",state:"before",talk:null}:e==="reveal"||e==="ayah"?{place:"stage",state:"after",talk:null}:e==="parent"||e==="cover"?{place:"camp",talk:"parent"}:e==="predict"||e==="handback"||e==="great"?{place:"camp",talk:"child"}:e==="reflect"||e==="done"?{place:"camp",talk:"all"}:{place:"camp",talk:null}}const fe={story:null,ch:0,steps:[],i:0,answers:[],orderPick:[]};async function p_(){const n=new z0({canvas:He("scene"),antialias:!0,alpha:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.outputColorSpace=kt;const e=await o_(n);function t(){const F=He("panel");if(!He("titleScreen").classList.contains("hidden")){const ce=document.querySelector(".title-card").getBoundingClientRect();return e.setInset({right:0,bottom:Math.max(0,innerHeight-ce.top-20)})}if(F.classList.contains("hidden"))return e.setInset({right:0,bottom:0});const G=F.getBoundingClientRect(),se=innerWidth/innerHeight<1;e.setInset(se?{right:0,bottom:innerHeight-G.top+6}:{right:innerWidth-G.left+6,bottom:0})}function i(){n.setSize(innerWidth,innerHeight,!1),e.resize(innerWidth,innerHeight),document.body.classList.toggle("portrait",innerWidth/innerHeight<1),t()}addEventListener("resize",i),i(),new ResizeObserver(t).observe(He("panel"));const s=()=>h_(Be),r=(F,G=!0)=>He(F).classList.toggle("hidden",!G);function a(){He("talkCount").textContent=Be.talks,He("voiceBtn").classList.toggle("off",!Be.settings.narration),He("voiceBtn").style.display=bs?"":"none",He("muteBtn").textContent=Be.settings.muted?"🔇":"🔈"}function o(F){F.classList.remove("bump"),F.offsetWidth,F.classList.add("bump")}function l(F,G){var se;Be.talks++,Be.journal.push({t:Date.now(),story:(se=fe.story)==null?void 0:se.id,ch:fe.ch,kind:F,text:G}),s(),a(),o(He("talkPill")),xt.talk()}let c=!1;function h(F){return c?(F(),Promise.resolve()):(c=!0,He("fade").classList.add("on"),new Promise(G=>setTimeout(()=>{F(),He("fade").classList.remove("on"),c=!1,G()},260)))}const u={},f=(F,G)=>{var se;return u[se=F+G]||(u[se]=Vg(F,G).toDataURL())};function d(){for(const F of["titleScreen","setupScreen","trailScreen","journalScreen","cover"])r(F,!1)}function g(){vs(),d(),r("panel",!1),r("hud",!1),r("titleScreen"),e.go("camp"),e.setTalk(null),t();const F=Be.current&&Fi[Be.current.story];He("continueBtn").classList.toggle("hidden",!F),F&&(He("continueBtn").innerHTML=`Continue: ${F.name} <span class="honor">${F.honor}</span> · Chapter ${Be.current.ch+1}`),t()}function v(){d(),r("setupScreen"),document.querySelectorAll("#parentSeg button").forEach(F=>F.classList.toggle("on",F.dataset.v===Be.settings.parent)),He("childName").value=Be.settings.child,He("voiceChk").checked=Be.settings.narration,He("voiceChk").parentElement.style.display=bs?"":"none"}He("parentSeg").addEventListener("click",F=>{const G=F.target.closest("button");G&&(Be.settings.parent=G.dataset.v,xt.tap(),document.querySelectorAll("#parentSeg button").forEach(se=>se.classList.toggle("on",se===G)))}),He("setupDone").addEventListener("click",()=>{Be.settings.child=He("childName").value.trim(),Be.settings.narration=He("voiceChk").checked,Be.settings.setup=!0,s(),a(),xt.pick(),fe.story?(d(),r("hud"),L()):m()});function m(){vs(),d(),r("panel",!1),r("hud"),r("trailScreen"),r("storyPop",!1),e.go("camp"),e.setTalk(null),t();const F=gc.filter(te=>{var _e;return(_e=Be.progress[te])==null?void 0:_e.finished}).length;He("trailStats").innerHTML=`💬 <b>${Be.talks}</b> conversations had · 📜 <b>${F}</b> of ${gc.length} stories told`;const G=hr.length,se=innerWidth/innerHeight<1,[ce,$]=se?[420,1e3]:[1e3,420],Y=hr.map((te,_e)=>se?[_e%2?300:120,95+_e*790/(G-1)]:[70+_e*860/(G-1),_e%2?290:130]);let ie=`M${Y[0][0]} ${Y[0][1]}`;for(let te=1;te<G;te++){const[_e,Ue]=Y[te-1],[Pe,Ge]=Y[te];ie+=se?` C ${_e} ${Ue+45}, ${Pe} ${Ge-45}, ${Pe} ${Ge}`:` C ${_e+55} ${Ue}, ${Pe-55} ${Ge}, ${Pe} ${Ge}`}He("trailSvg").setAttribute("viewBox",`0 0 ${ce} ${$}`),He("trailPath").setAttribute("d",ie),He("trailNodes").innerHTML=hr.map((te,_e)=>{var pe;const Ue=te.story&&Fi[te.story],Pe=Ue&&((pe=Be.progress[te.story])==null?void 0:pe.finished),Ge=Be.newlyFinished===te.story;return`<button class="tnode ${Ue?Pe?"done":"open":"locked"} ${Ge?"fresh":""}" data-id="${te.id}" style="left:${Y[_e][0]/ce*100}%;top:${Y[_e][1]/$*100}%">
        <img src="${f(te.icon,!!Ue)}" alt="" />
        <b>${Je(te.name)} ${te.honor?`<span class="honor">${te.honor}</span>`:""}</b>
        <small>${Ue?Pe?"★ told":Je(te.label):"coming soon"}</small></button>`}).join(""),Be.newlyFinished=null,s()}He("trailNodes").addEventListener("click",F=>{const G=F.target.closest(".tnode");if(!G)return;xt.tap();const se=hr.find(Y=>Y.id===G.dataset.id),ce=se.story&&Fi[se.story],$=He("storyPop");if(!ce)$.innerHTML=`<h3>${Je(se.name)} ${se.honor?`<span class="honor">${se.honor}</span>`:""}</h3><p>${Je(se.label)}.<br>This story is coming soon, in sha Allah.</p><button class="chunky" data-act="close">OK</button>`;else{const Y=Be.progress[ce.id]||{done:[]},ie=ce.chapters.findIndex((te,_e)=>!Y.done[_e]);$.innerHTML=`<img src="${f(ce.icon,!0)}" alt="" class="pop-badge"/><h3>${Bi(ce.title.replace(ce.name,ce.name+" {honor}"),ce)}</h3><p>${Je(ce.blurb)}</p>
        <ol class="chlist">${ce.chapters.map((te,_e)=>`<li class="${Y.done[_e]?"ticked":""}"><button data-act="ch" data-ch="${_e}">${Y.done[_e]?"✓":_e+1}. ${Je(te.title)}</button></li>`).join("")}</ol>
        <button class="chunky gold" data-act="ch" data-ch="${ie<0?0:ie}">${ie<0?"Tell it again":ie===0?"Start the story":`Continue: Chapter ${ie+1}`}</button>
        <button class="link" data-act="close">Not tonight</button>`}$.dataset.story=(ce==null?void 0:ce.id)||"",r("storyPop")}),He("storyPop").addEventListener("click",F=>{const G=F.target.closest("button");if(G){if(G.dataset.act==="close"){r("storyPop",!1);return}G.dataset.act==="ch"&&S(He("storyPop").dataset.story,+G.dataset.ch)}});function p(){d(),r("journalScreen");const F=Be.journal.filter(se=>se.kind==="predict").length;He("journalStats").innerHTML=`💬 <b>${Be.talks}</b> conversations · 🔮 <b>${F}</b> predictions`;const G=Be.journal.slice(-40).reverse();He("journalList").innerHTML=G.length?G.map(se=>{var ie;const ce=Fi[se.story],$=new Date(se.t).toLocaleDateString(void 0,{day:"numeric",month:"short"});return`<div class="jrow"><span class="jic">${{predict:"🔮",talk:"💬",reflect:"🌱"}[se.kind]||"•"}</span><div><b>${ce?Je(ce.name)+" · "+Je(((ie=ce.chapters[se.ch])==null?void 0:ie.title)||""):""}</b><p>${Je(se.text)}</p></div><small>${$}</small></div>`}).join(""):'<p class="hint">Your conversations and predictions will appear here.</p>'}He("journalBtn").addEventListener("click",()=>{xt.tap(),p()}),He("journalClose").addEventListener("click",()=>{xt.tap(),m()}),He("trailClose").addEventListener("click",()=>{xt.tap(),g()}),He("trailBtn").addEventListener("click",()=>{xt.tap(),m()}),He("startBtn").addEventListener("click",()=>{Oi(),xt.tap(),Be.settings.setup?m():v()}),He("continueBtn").addEventListener("click",()=>{Oi(),xt.tap(),x()}),He("setupBtn").addEventListener("click",()=>{Oi(),xt.tap(),v()}),He("voiceBtn").addEventListener("click",()=>{Be.settings.narration=!Be.settings.narration,Be.settings.narration||vs(),s(),a(),fe.story&&!He("panel").classList.contains("hidden")&&L()}),He("muteBtn").addEventListener("click",()=>{Be.settings.muted=!Be.settings.muted,vh(Be.settings.muted),s(),a()}),addEventListener("pointerdown",Oi,{once:!0});function S(F,G,se=0){fe.story=Fi[F],fe.ch=G,fe.steps=f_(fe.story.chapters[G]),fe.i=Math.min(se,fe.steps.length-1),fe.answers=[],fe.orderPick=[],d(),r("hud"),_(fe.i,!0)}function x(){const F=Be.current;F&&Fi[F.story]?S(F.story,F.ch,F.step):m()}function _(F,G=!1){fe.i=F,fe.lock=!1;const se=fe.steps[F];Be.current=se==="done"?null:{story:fe.story.id,ch:fe.ch,step:F},s(),vs();const ce=d_(se),$=G||e.place!==ce.place||ce.place==="stage"&&e.stageKey!==fe.story.chapters[fe.ch].scene,Y=()=>{ce.place==="stage"?e.go("stage",fe.story.chapters[fe.ch].scene,ce.state):e.go("camp"),e.setTalk(ce.talk,Be.settings.parent),L(),se==="reveal"&&(xt.reveal(),e.burst(12))};$?h(Y):(ce.place==="stage"&&e.stageState!==ce.state&&e.setStageState(ce.state),Y())}const P=()=>{xt.page(),_(Math.min(fe.i+1,fe.steps.length-1))},A=()=>{xt.tap();let F=fe.i-1;for(;F>0&&["cover","handback","great"].includes(fe.steps[F]);)F--;_(Math.max(0,F))};function T(F=""){const G=fe.story,se=G.chapters.length,ce=fe.steps.map(($,Y)=>`<i class="${Y<fe.i?"past":Y===fe.i?"now":""}"></i>`).join("");return`<div class="phead"><span><b>${Je(G.name)} <span class="honor">${G.honor}</span></b> · Chapter ${fe.ch+1} of ${se}: ${Je(G.chapters[fe.ch].title)}</span>${F}</div><div class="pdots">${ce}</div>`}const C=()=>fe.i>0?'<button class="link back" data-act="back">‹ Back</button>':'<button class="link back" data-act="trail">‹ Story Trail</button>',w=F=>Be.settings.narration&&bs?`<button class="speak" data-act="speak" data-text="${Je(Sn(F))}">🔊 Read it to us</button>`:"";function y(F){const G=He("panel");G.innerHTML=F,r("panel"),G.scrollTop=0,requestAnimationFrame(t)}function L(){const F=fe.story,G=F.chapters[fe.ch],se=fe.steps[fe.i],[ce,$]=se.split(":"),Y=ie=>Bi(ie,F);if(r("cover",!1),ce==="read"){const ie=+$,te=ie===G.read.length-1,_e=Y(G.read[ie]);y(`${T()}<div class="card read"><div class="ribbon">📖 ${ln()}, read this aloud</div>
        ${ie===0?`<h2 class="chtitle">${Je(G.title)}</h2>`:""}
        <p class="story">${_e}</p>${w(_e)}
        <div class="pages">Page ${ie+1} of ${G.read.length}</div></div>
        <div class="actions">${C()}<button class="chunky" data-act="next">${te?"Stop the story here ✋":"Turn the page →"}</button></div>`),Be.settings.narration&&ki(Sn(_e))}else if(ce==="stop")xt.stop(),y(`${T()}<div class="card child"><div class="ribbon gold">✋ The story stops here!</div>
        <p class="big">${Y(G.question)}</p>
        <p class="look">👀 ${Je(cn())}, look at ${ln()}. What do <i>you</i> think?</p></div>
        <div class="actions">${C()}<button class="chunky" data-act="next">👤 ${ln()}'s turn</button></div>`),Be.settings.narration&&ki(Sn(Y(G.question)));else if(ce==="cover")X("🙈","Grown-ups only for a moment!",`${Je(cn())}, cover your eyes. ${ln()} has a secret card to read.`,"I'm the grown-up, show me");else if(ce==="parent"){const ie=G.parent;y(`${T()}<div class="card parent"><div class="ptag">👤 For ${ln()} only</div>
        <p class="warn">Don't tell the answer yet! Ask:</p>
        <p class="ask">"${Y(ie.ask)}"</p>
        <p class="sub">If they're stuck, try:</p><ul>${ie.hints.map(te=>`<li>${Y(te)}</li>`).join("")}</ul>
        ${ie.note?`<p class="note">💡 ${Y(ie.note)}</p>`:""}
        <details><summary>🔑 What really happens (just for you)</summary><p>${Y(ie.answer)}</p></details></div>
        <div class="actions">${C()}<button class="link" data-act="next">Skip the talk</button><button class="chunky mint" data-act="talked">✅ We talked about it</button></div>`)}else if(ce==="handback")X("👉",`Pass it back to ${Je(cn())}!`,`Now it's ${Je(cn())}'s turn to guess what happens next.`,"I'm ready! 🙋");else if(ce==="predict")z(G.predict[+$],+$);else if(ce==="great"){xt.pick();const ie=fe.answers.filter(Boolean);y(`${T()}<div class="card child"><div class="ribbon gold">🌟 Great thinking, ${Je(cn())}!</div>
        ${ie.length?`<p class="sub">You thought:</p><ul class="said">${ie.map(te=>`<li>${Je(te)}</li>`).join("")}</ul>`:""}
        <p class="big">Let's find out what really happened…</p></div>
        <div class="actions">${C()}<button class="chunky gold" data-act="next">✨ Let's find out!</button></div>`)}else if(ce==="reveal"){const ie=G.reveal.map(Y).join('</p><p class="story">');y(`${T()}<div class="card read reveal"><div class="ribbon gold">✨ What happened</div>
        <p class="story">${ie}</p>${w(ie)}<p class="pages">📖 ${ln()}, read this aloud</p></div>
        <div class="actions">${C()}<button class="chunky" data-act="next">What does Allah tell us? →</button></div>`),Be.settings.narration&&ki(Sn(ie))}else if(ce==="ayah")y(`${T()}<div class="card ayah"><div class="ribbon dusk">🌙 What Allah tells us</div>
        ${G.ayat.map(ie=>`<blockquote>${ie.ar?`<p class="ar" lang="ar" dir="rtl">${ie.ar}</p>`:""}<p>${Je(ie.text)}</p><cite>Qur'an · ${Je(ie.ref)}</cite></blockquote>`).join("")}
        ${G.hadith?`<div class="hadith"><b>From the Prophet <span class="honor">ﷺ</span>'s time</b><p>${Y(G.hadith.text)}</p><cite>${Je(G.hadith.src)}</cite></div>`:""}
        <div class="explain"><span>👤 For ${ln()}: how to explain it</span><p>${Y(G.explain)}</p></div></div>
        <div class="actions">${C()}<button class="chunky" data-act="next">Let's talk about it →</button></div>`);else if(ce==="reflect"){const ie=G.reflect;y(`${T()}<div class="card parent talk"><div class="ptag">💬 Talk together: ${ln()} &amp; ${Je(cn())}</div>
        <p class="ask">${Y(ie.q)}</p>
        <p class="note">👤 For ${ln()}: ${Y(ie.tip)}</p>
        <div class="apply"><b>🌱 Try it this week</b><p>${Y(ie.apply)}</p></div></div>
        <div class="actions">${C()}<button class="link" data-act="next">Save it for tomorrow</button><button class="chunky mint" data-act="reflected">✅ We talked about it</button></div>`),Be.settings.narration&&ki(Sn(Y(ie.q)))}else ce==="done"&&J()}function X(F,G,se,ce){r("panel",!1),t(),He("coverEmoji").textContent=F,He("coverTitle").innerHTML=G,He("coverText").innerHTML=se,He("coverBtn").innerHTML=ce,r("cover")}He("coverBtn").addEventListener("click",()=>{r("cover",!1),P()});function z(F,G){const se=fe.story,ce=Y=>Bi(Y,se);let $="";F.type==="choose"?$=`<div class="opts">${F.options.map((Y,ie)=>`<button class="opt" data-act="opt" data-v="${Je(Y.t)}"><span>${Y.e}</span>${Je(Y.t)}</button>`).join("")}
        <button class="opt other" data-act="opt" data-v="Something else (said out loud)"><span>💭</span>Something else! (say it out loud)</button></div>`:F.type==="say"?$='<div class="mic">🗣️</div><button class="chunky gold wide" data-act="said">I said it!</button>':F.type==="emotion"?$=`<div class="feels">${c_.map(Y=>`<button class="feel" data-act="feel" data-v="${Je(Y.t)}"><span>${Y.e}</span>${Je(Y.t)}</button>`).join("")}</div><p class="tiny">There are no wrong feelings.</p>`:F.type==="order"&&($=`<div class="order">${j(F.cards.length).map(ie=>{const te=F.cards[ie],_e=fe.orderPick.indexOf(ie);return`<button class="ocard ${_e>=0?"picked":""}" data-act="ord" data-i="${ie}"><em>${_e>=0?_e+1:""}</em><span>${te.e}</span>${Je(te.t)}</button>`}).join("")}</div>
        <p class="tiny">Tap the cards in the order you think. ${fe.orderPick.length?'<button class="link inline" data-act="ordreset">Start again</button>':""}</p>
        ${fe.orderPick.length===F.cards.length?`<button class="chunky gold wide" data-act="orddone">That's my order!</button>`:""}`),y(`${T()}<div class="card child"><div class="ribbon gold">🔮 ${Je(cn())}'s guess</div>
      <p class="big">${ce(F.prompt)}</p>${$}</div>
      <div class="actions">${C()}</div>`),Be.settings.narration&&G===0&&ki(Sn(ce(F.prompt)))}function j(F){const G=(fe.story.id.length*7+fe.ch*3)%5,se=[...Array(F).keys()];return F===4?[[2,0,3,1],[1,3,0,2],[3,1,2,0],[2,3,1,0],[1,0,3,2]][G]:se.reverse()}function Q(F){const G=fe.story.chapters[fe.ch].predict[+fe.steps[fe.i].split(":")[1]];fe.answers[+fe.steps[fe.i].split(":")[1]]=F,Be.journal.push({t:Date.now(),story:fe.story.id,ch:fe.ch,kind:"predict",text:`${Sn(Bi(G.prompt,fe.story))} → ${F}`}),s(),xt.pick(),fe.lock=!0;const se=document.querySelector("#panel .card");se==null||se.classList.add("yay"),setTimeout(P,450)}function J(){var _e,Ue;const F=fe.story,G=(_e=Be.progress)[Ue=F.id]||(_e[Ue]={done:[],finished:!1}),se=!G.done[fe.ch];G.done[fe.ch]=!0;const ce=F.chapters.every((Pe,Ge)=>G.done[Ge]),$=ce&&!G.finished;$&&(G.finished=!0,Be.newlyFinished=F.id),Be.current=fe.ch+1<F.chapters.length?{story:F.id,ch:fe.ch+1,step:0}:null,s(),xt.done(),e.burst(16);const Y=F.chapters.map((Pe,Ge)=>`<span class="lantern ${G.done[Ge]?"lit":""}" title="${Je(Pe.title)}">🏮</span>`).join(""),ie=fe.ch+1<F.chapters.length,te=Be.journal.filter(Pe=>Pe.story===F.id&&Pe.kind==="predict").slice(-6);y(`${T()}<div class="card read done"><div class="ribbon gold">🌙 Chapter ${fe.ch+1} complete!</div>
      <div class="lanterns">${Y}</div>
      ${ce?`<div class="added"><img src="${f(F.icon,!0)}" alt=""/><p><b>${Je(F.name)} <span class="honor">${F.honor}</span>'s story ${$?"is added to":"is on"} your Story Trail!</b></p></div>
        ${te.length?`<p class="sub">${Je(cn())}'s guesses in this story:</p><ul class="said">${te.map(Pe=>`<li>${Je(Pe.text)}</li>`).join("")}</ul>`:""}
        <p class="note">🌱 Tomorrow, ask ${Je(cn())} to tell <i>you</i> the story, or tell it to someone else in the family.</p>`:`<p>You've had <b>${Be.talks}</b> conversations by the fire so far. ${se?"MashaAllah!":""}</p>
        <p class="note">This is a good place to stop for tonight. Your place is saved 🔖</p>`}</div>
      <div class="actions">${ie?`<button class="link" data-act="home">Stop for tonight</button><button class="chunky" data-act="nextch">Next: ${Je(F.chapters[fe.ch+1].title)} →</button>`:'<button class="chunky gold" data-act="trail">📜 See the Story Trail</button>'}</div>`)}He("panel").addEventListener("click",F=>{const G=F.target.closest("[data-act]");if(!G||fe.lock)return;Oi();const se=G.dataset.act;if(se==="next")P();else if(se==="back")A();else if(se==="trail")m();else if(se==="home")g();else if(se==="speak")ki(G.dataset.text);else if(se==="talked")l("talk",Sn(Bi(fe.story.chapters[fe.ch].parent.ask,fe.story))),P();else if(se==="reflected")l("reflect",Sn(Bi(fe.story.chapters[fe.ch].reflect.q,fe.story))),P();else if(se==="opt")G.classList.add("chosen"),Q(G.dataset.v);else if(se==="feel")G.classList.add("chosen"),Q(`Feeling: ${G.dataset.v}`);else if(se==="said")Q("said it out loud");else if(se==="ord"){const ce=+G.dataset.i;fe.orderPick.includes(ce)||(fe.orderPick.push(ce),xt.tap()),z(fe.story.chapters[fe.ch].predict[+fe.steps[fe.i].split(":")[1]])}else if(se==="ordreset")fe.orderPick=[],z(fe.story.chapters[fe.ch].predict[+fe.steps[fe.i].split(":")[1]]);else if(se==="orddone"){const ce=fe.story.chapters[fe.ch].predict[+fe.steps[fe.i].split(":")[1]],$=fe.orderPick.map(Y=>ce.cards[Y].t).join(" → ");fe.orderPick=[],Q($)}else se==="nextch"&&S(fe.story.id,fe.ch+1)}),addEventListener("keydown",F=>{if(F.key==="ArrowRight"&&fe.story&&!He("panel").classList.contains("hidden")){const G=He("panel").querySelector('.actions .chunky[data-act="next"]');G&&G.click()}});let ne=performance.now(),H=2;function xe(F){const G=Math.max(0,Math.min(.05,(F-ne)/1e3));ne=F,e.update(G),e.place==="camp"&&(H-=G,H<0&&(H=1.5+Math.random()*2.5,xt.crackle())),e.render(),requestAnimationFrame(xe)}requestAnimationFrame(xe),a(),g(),Be.settings.setup||(He("startBtn").textContent="Begin by the fire"),window.game={ready:!0,world:e,get state(){var F;return{i:fe.story?fe.story.id+fe.ch+":"+fe.i:null,step:fe.steps[fe.i],story:(F=fe.story)==null?void 0:F.id,ch:fe.ch,talks:Be.talks,save:Be}},start:(F,G=0)=>{Oi(),Be.settings.setup=!0,S(F,G)},next:P,openTrail:m,openJournal:p,toTitle:g,reset:()=>{u_(),Be=_h(),a(),g()}}}p_();
