(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ba="170",Mc=0,po=1,yc=2,Cl=1,Sc=2,Sn=3,Kn=0,Ot=1,kt=2,qn=0,Ni=1,mo=2,go=3,_o=4,bc=5,ci=100,Ec=101,wc=102,Tc=103,Ac=104,Rc=200,Cc=201,Pc=202,Lc=203,Ks=204,Qs=205,Ic=206,Dc=207,Uc=208,Nc=209,Fc=210,kc=211,Oc=212,Bc=213,zc=214,Zs=0,Js=1,ea=2,Bi=3,ta=4,na=5,ia=6,ra=7,Pl=0,Hc=1,Gc=2,Yn=0,Vc=1,Wc=2,Xc=3,$c=4,qc=5,Yc=6,jc=7,Ll=300,zi=301,Hi=302,sa=303,aa=304,us=306,ts=1e3,ui=1001,oa=1002,Et=1003,Kc=1004,Er=1005,dn=1006,vs=1007,di=1008,Pn=1009,Il=1010,Dl=1011,dr=1012,za=1013,pi=1014,Tn=1015,mi=1016,Ha=1017,Ga=1018,Gi=1020,Ul=35902,Nl=1021,Fl=1022,nn=1023,kl=1024,Ol=1025,Fi=1026,Vi=1027,ds=1028,Va=1029,Bl=1030,Wa=1031,Xa=1033,$r=33776,qr=33777,Yr=33778,jr=33779,la=35840,ca=35841,ha=35842,ua=35843,da=36196,fa=37492,pa=37496,ma=37808,ga=37809,_a=37810,va=37811,xa=37812,Ma=37813,ya=37814,Sa=37815,ba=37816,Ea=37817,wa=37818,Ta=37819,Aa=37820,Ra=37821,Kr=36492,Ca=36494,Pa=36495,zl=36283,La=36284,Ia=36285,Da=36286,Qc=3200,Zc=3201,Hl=0,Jc=1,Xn="",Ft="srgb",qi="srgb-linear",fs="linear",Je="srgb",vi=7680,vo=519,eh=512,th=513,nh=514,Gl=515,ih=516,rh=517,sh=518,ah=519,xo=35044,Mo="300 es",An=2e3,ns=2001;class Yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yo=1234567;const cr=Math.PI/180,fr=180/Math.PI;function ji(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function Ct(n,e,t){return Math.max(e,Math.min(t,n))}function $a(n,e){return(n%e+e)%e}function oh(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function lh(n,e,t){return n!==e?(t-n)/(e-n):0}function hr(n,e,t){return(1-t)*n+t*e}function ch(n,e,t,i){return hr(n,e,1-Math.exp(-t*i))}function hh(n,e=1){return e-Math.abs($a(n,e*2)-e)}function uh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function dh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function fh(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ph(n,e){return n+Math.random()*(e-n)}function mh(n){return n*(.5-Math.random())}function gh(n){n!==void 0&&(yo=n);let e=yo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _h(n){return n*cr}function vh(n){return n*fr}function xh(n){return(n&n-1)===0&&n!==0}function Mh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function yh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Sh(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),u=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*h,l*d,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*d,o*c);break;case"ZXZ":n.set(l*d,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Di(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const bh={DEG2RAD:cr,RAD2DEG:fr,generateUUID:ji,clamp:Ct,euclideanModulo:$a,mapLinear:oh,inverseLerp:lh,lerp:hr,damp:ch,pingpong:hh,smoothstep:uh,smootherstep:dh,randInt:fh,randFloat:ph,randFloatSpread:mh,seededRandom:gh,degToRad:_h,radToDeg:vh,isPowerOfTwo:xh,ceilPowerOfTwo:Mh,floorPowerOfTwo:yh,setQuaternionFromProperEuler:Sh,normalize:Lt,denormalize:Di};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,i,r,s,a,o,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],_=r[0],m=r[3],f=r[6],y=r[1],b=r[4],x=r[7],C=r[2],T=r[5],A=r[8];return s[0]=a*_+o*y+l*C,s[3]=a*m+o*b+l*T,s[6]=a*f+o*x+l*A,s[1]=c*_+h*y+d*C,s[4]=c*m+h*b+d*T,s[7]=c*f+h*x+d*A,s[2]=u*_+p*y+g*C,s[5]=u*m+p*b+g*T,s[8]=u*f+p*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,p=c*s-a*l,g=t*d+i*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-h*i)*_,e[2]=(o*i-r*a)*_,e[3]=u*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xs.makeScale(e,t)),this}rotate(e){return this.premultiply(xs.makeRotation(-e)),this}translate(e,t){return this.premultiply(xs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xs=new Oe;function Vl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function is(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Eh(){const n=is("canvas");return n.style.display="block",n}const So={};function sr(n){n in So||(So[n]=!0,console.warn(n))}function wh(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Th(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ah(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $e={enabled:!0,workingColorSpace:qi,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Je&&(n.r=Rn(n.r),n.g=Rn(n.g),n.b=Rn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Je&&(n.r=ki(n.r),n.g=ki(n.g),n.b=ki(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Xn?fs:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Rn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ki(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const bo=[.64,.33,.3,.6,.15,.06],Eo=[.2126,.7152,.0722],wo=[.3127,.329],To=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ao=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[qi]:{primaries:bo,whitePoint:wo,transfer:fs,toXYZ:To,fromXYZ:Ao,luminanceCoefficients:Eo,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:bo,whitePoint:wo,transfer:Je,toXYZ:To,fromXYZ:Ao,luminanceCoefficients:Eo,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}});let xi;class Rh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xi===void 0&&(xi=is("canvas")),xi.width=e.width,xi.height=e.height;const i=xi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=is("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Rn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Rn(t[i]/255)*255):t[i]=Rn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ch=0;class Wl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=ji(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ms(r[a].image)):s.push(Ms(r[a]))}else s=Ms(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ms(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Rh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ph=0;class Pt extends Yi{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,i=ui,r=ui,s=dn,a=di,o=nn,l=Pn,c=Pt.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=ji(),this.name="",this.source=new Wl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ll)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ts:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ts:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Ll;Pt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,x=(p+1)/2,C=(f+1)/2,T=(h+u)/4,A=(d+_)/4,P=(g+m)/4;return b>x&&b>C?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=T/i,s=A/i):x>C?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=T/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=P/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-_)/y,this.z=(u-h)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lh extends Yi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Pt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends Lh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Xl extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ih extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ki{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const u=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==u||c!==p||h!==g){let m=1-o;const f=l*u+c*p+h*g+d*_,y=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const C=Math.sqrt(b),T=Math.atan2(C,f*y);m=Math.sin(m*T)/C,o=Math.sin(o*T)/C}const x=o*y;if(l=l*m+u*x,c=c*m+p*x,h=h*m+g*x,d=d*m+_*x,m===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=s[a],u=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-o*p,e[t+2]=c*g+h*p+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),d=o(s/2),u=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=r*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ro.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ro.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-s*d,this.z=r+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ys.copy(this).projectOnVector(e),this.sub(ys)}reflect(e){return this.sub(ys.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ys=new F,Ro=new Ki;class _r{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qt):Qt.fromBufferAttribute(s,a),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wr.copy(i.boundingBox)),wr.applyMatrix4(e.matrixWorld),this.union(wr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),Tr.subVectors(this.max,er),Mi.subVectors(e.a,er),yi.subVectors(e.b,er),Si.subVectors(e.c,er),kn.subVectors(yi,Mi),On.subVectors(Si,yi),Jn.subVectors(Mi,Si);let t=[0,-kn.z,kn.y,0,-On.z,On.y,0,-Jn.z,Jn.y,kn.z,0,-kn.x,On.z,0,-On.x,Jn.z,0,-Jn.x,-kn.y,kn.x,0,-On.y,On.x,0,-Jn.y,Jn.x,0];return!Ss(t,Mi,yi,Si,Tr)||(t=[1,0,0,0,1,0,0,0,1],!Ss(t,Mi,yi,Si,Tr))?!1:(Ar.crossVectors(kn,On),t=[Ar.x,Ar.y,Ar.z],Ss(t,Mi,yi,Si,Tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _n=[new F,new F,new F,new F,new F,new F,new F,new F],Qt=new F,wr=new _r,Mi=new F,yi=new F,Si=new F,kn=new F,On=new F,Jn=new F,er=new F,Tr=new F,Ar=new F,ei=new F;function Ss(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ei.fromArray(n,s);const o=r.x*Math.abs(ei.x)+r.y*Math.abs(ei.y)+r.z*Math.abs(ei.z),l=e.dot(ei),c=t.dot(ei),h=i.dot(ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Dh=new _r,tr=new F,bs=new F;class qa{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Dh.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tr.subVectors(e,this.center);const t=tr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(tr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tr.copy(e.center).add(bs)),this.expandByPoint(tr.copy(e.center).sub(bs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vn=new F,Es=new F,Rr=new F,Bn=new F,ws=new F,Cr=new F,Ts=new F;class Uh{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Es.copy(e).add(t).multiplyScalar(.5),Rr.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(Es);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Rr),o=Bn.dot(this.direction),l=-Bn.dot(Rr),c=Bn.lengthSq(),h=Math.abs(1-a*a);let d,u,p,g;if(h>0)if(d=a*l-o,u=a*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Es).addScaledVector(Rr,u),p}intersectSphere(e,t){vn.subVectors(e.center,this.origin);const i=vn.dot(this.direction),r=vn.dot(vn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,i,r,s){ws.subVectors(t,e),Cr.subVectors(i,e),Ts.crossVectors(ws,Cr);let a=this.direction.dot(Ts),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bn.subVectors(this.origin,e);const l=o*this.direction.dot(Cr.crossVectors(Bn,Cr));if(l<0)return null;const c=o*this.direction.dot(ws.cross(Bn));if(c<0||l+c>a)return null;const h=-o*Bn.dot(Ts);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,r,s,a,o,l,c,h,d,u,p,g,_,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,d,u,p,g,_,m)}set(e,t,i,r,s,a,o,l,c,h,d,u,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/bi.setFromMatrixColumn(e,0).length(),s=1/bi.setFromMatrixColumn(e,1).length(),a=1/bi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*h,p=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,p=l*d,g=c*h,_=c*d;t[0]=u+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,p=l*d,g=c*h,_=c*d;t[0]=u-_*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,p=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nh,e,Fh)}lookAt(e,t,i){const r=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),zn.crossVectors(i,zt),zn.lengthSq()===0&&(Math.abs(i.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),zn.crossVectors(i,zt)),zn.normalize(),Pr.crossVectors(zt,zn),r[0]=zn.x,r[4]=Pr.x,r[8]=zt.x,r[1]=zn.y,r[5]=Pr.y,r[9]=zt.y,r[2]=zn.z,r[6]=Pr.z,r[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],y=i[3],b=i[7],x=i[11],C=i[15],T=r[0],A=r[4],P=r[8],E=r[12],S=r[1],R=r[5],V=r[9],B=r[13],Y=r[2],q=r[6],j=r[10],ee=r[14],W=r[3],ae=r[7],pe=r[11],Me=r[15];return s[0]=a*T+o*S+l*Y+c*W,s[4]=a*A+o*R+l*q+c*ae,s[8]=a*P+o*V+l*j+c*pe,s[12]=a*E+o*B+l*ee+c*Me,s[1]=h*T+d*S+u*Y+p*W,s[5]=h*A+d*R+u*q+p*ae,s[9]=h*P+d*V+u*j+p*pe,s[13]=h*E+d*B+u*ee+p*Me,s[2]=g*T+_*S+m*Y+f*W,s[6]=g*A+_*R+m*q+f*ae,s[10]=g*P+_*V+m*j+f*pe,s[14]=g*E+_*B+m*ee+f*Me,s[3]=y*T+b*S+x*Y+C*W,s[7]=y*A+b*R+x*q+C*ae,s[11]=y*P+b*V+x*j+C*pe,s[15]=y*E+b*B+x*ee+C*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*l*d-r*c*d-s*o*u+i*c*u+r*o*p-i*l*p)+_*(+t*l*p-t*c*u+s*a*u-r*a*p+r*c*h-s*l*h)+m*(+t*c*d-t*o*p-s*a*d+i*a*p+s*o*h-i*c*h)+f*(-r*o*h-t*l*d+t*o*u+r*a*d-i*a*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],y=d*m*c-_*u*c+_*l*p-o*m*p-d*l*f+o*u*f,b=g*u*c-h*m*c-g*l*p+a*m*p+h*l*f-a*u*f,x=h*_*c-g*d*c+g*o*p-a*_*p-h*o*f+a*d*f,C=g*d*l-h*_*l-g*o*u+a*_*u+h*o*m-a*d*m,T=t*y+i*b+r*x+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=y*A,e[1]=(_*u*s-d*m*s-_*r*p+i*m*p+d*r*f-i*u*f)*A,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*f+i*l*f)*A,e[3]=(d*l*s-o*u*s-d*r*c+i*u*c+o*r*p-i*l*p)*A,e[4]=b*A,e[5]=(h*m*s-g*u*s+g*r*p-t*m*p-h*r*f+t*u*f)*A,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*f-t*l*f)*A,e[7]=(a*u*s-h*l*s+h*r*c-t*u*c-a*r*p+t*l*p)*A,e[8]=x*A,e[9]=(g*d*s-h*_*s-g*i*p+t*_*p+h*i*f-t*d*f)*A,e[10]=(a*_*s-g*o*s+g*i*c-t*_*c-a*i*f+t*o*f)*A,e[11]=(h*o*s-a*d*s-h*i*c+t*d*c+a*i*p-t*o*p)*A,e[12]=C*A,e[13]=(h*_*r-g*d*r+g*i*u-t*_*u-h*i*m+t*d*m)*A,e[14]=(g*o*r-a*_*r-g*i*l+t*_*l+a*i*m-t*o*m)*A,e[15]=(a*d*r-h*o*r+h*i*l-t*d*l-a*i*u+t*o*u)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,p=s*h,g=s*d,_=a*h,m=a*d,f=o*d,y=l*c,b=l*h,x=l*d,C=i.x,T=i.y,A=i.z;return r[0]=(1-(_+f))*C,r[1]=(p+x)*C,r[2]=(g-b)*C,r[3]=0,r[4]=(p-x)*T,r[5]=(1-(u+f))*T,r[6]=(m+y)*T,r[7]=0,r[8]=(g+b)*A,r[9]=(m-y)*A,r[10]=(1-(u+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=bi.set(r[0],r[1],r[2]).length();const a=bi.set(r[4],r[5],r[6]).length(),o=bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zt.copy(this);const c=1/s,h=1/a,d=1/o;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=h,Zt.elements[5]*=h,Zt.elements[6]*=h,Zt.elements[8]*=d,Zt.elements[9]*=d,Zt.elements[10]*=d,t.setFromRotationMatrix(Zt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=An){const l=this.elements,c=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),u=(i+r)/(i-r);let p,g;if(o===An)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ns)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=An){const l=this.elements,c=1/(t-e),h=1/(i-r),d=1/(a-s),u=(t+e)*c,p=(i+r)*h;let g,_;if(o===An)g=(a+s)*d,_=-2*d;else if(o===ns)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const bi=new F,Zt=new ct,Nh=new F(0,0,0),Fh=new F(1,1,1),zn=new F,Pr=new F,zt=new F,Co=new ct,Po=new Ki;class In{constructor(e=0,t=0,i=0,r=In.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Co.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Co,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Po.setFromEuler(this),this.setFromQuaternion(Po,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class $l{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kh=0;const Lo=new F,Ei=new Ki,xn=new ct,Lr=new F,nr=new F,Oh=new F,Bh=new Ki,Io=new F(1,0,0),Do=new F(0,1,0),Uo=new F(0,0,1),No={type:"added"},zh={type:"removed"},wi={type:"childadded",child:null},As={type:"childremoved",child:null};class wt extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new F,t=new In,i=new Ki,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Oe}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.premultiply(Ei),this}rotateX(e){return this.rotateOnAxis(Io,e)}rotateY(e){return this.rotateOnAxis(Do,e)}rotateZ(e){return this.rotateOnAxis(Uo,e)}translateOnAxis(e,t){return Lo.copy(e).applyQuaternion(this.quaternion),this.position.add(Lo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Io,e)}translateY(e){return this.translateOnAxis(Do,e)}translateZ(e){return this.translateOnAxis(Uo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Lr.copy(e):Lr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(nr,Lr,this.up):xn.lookAt(Lr,nr,this.up),this.quaternion.setFromRotationMatrix(xn),r&&(xn.extractRotation(r.matrixWorld),Ei.setFromRotationMatrix(xn),this.quaternion.premultiply(Ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(No),wi.child=e,this.dispatchEvent(wi),wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zh),As.child=e,this.dispatchEvent(As),As.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(No),wi.child=e,this.dispatchEvent(wi),wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,Oh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,Bh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}wt.DEFAULT_UP=new F(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new F,Mn=new F,Rs=new F,yn=new F,Ti=new F,Ai=new F,Fo=new F,Cs=new F,Ps=new F,Ls=new F,Is=new ut,Ds=new ut,Us=new ut;class tn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Jt.subVectors(e,t),r.cross(Jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Jt.subVectors(r,t),Mn.subVectors(i,t),Rs.subVectors(e,t);const a=Jt.dot(Jt),o=Jt.dot(Mn),l=Jt.dot(Rs),c=Mn.dot(Mn),h=Mn.dot(Rs),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yn.x),l.addScaledVector(a,yn.y),l.addScaledVector(o,yn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Is.setScalar(0),Ds.setScalar(0),Us.setScalar(0),Is.fromBufferAttribute(e,t),Ds.fromBufferAttribute(e,i),Us.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Is,s.x),a.addScaledVector(Ds,s.y),a.addScaledVector(Us,s.z),a}static isFrontFacing(e,t,i,r){return Jt.subVectors(i,t),Mn.subVectors(e,t),Jt.cross(Mn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),Jt.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return tn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ti.subVectors(r,i),Ai.subVectors(s,i),Cs.subVectors(e,i);const l=Ti.dot(Cs),c=Ai.dot(Cs);if(l<=0&&c<=0)return t.copy(i);Ps.subVectors(e,r);const h=Ti.dot(Ps),d=Ai.dot(Ps);if(h>=0&&d<=h)return t.copy(r);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Ti,a);Ls.subVectors(e,s);const p=Ti.dot(Ls),g=Ai.dot(Ls);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ai,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Fo.subVectors(s,r),o=(d-h)/(d-h+(p-g)),t.copy(r).addScaledVector(Fo,o);const f=1/(m+_+u);return a=_*f,o=u*f,t.copy(i).addScaledVector(Ti,a).addScaledVector(Ai,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function Ns(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=$e.workingColorSpace){if(e=$a(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ns(a,s,e+1/3),this.g=Ns(a,s,e),this.b=Ns(a,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,t=Ft){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const i=ql[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rn(e.r),this.g=Rn(e.g),this.b=Rn(e.b),this}copyLinearToSRGB(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return $e.fromWorkingColorSpace(Rt.copy(this),e),Math.round(Ct(Rt.r*255,0,255))*65536+Math.round(Ct(Rt.g*255,0,255))*256+Math.round(Ct(Rt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Rt.copy(this),t);const i=Rt.r,r=Rt.g,s=Rt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Ft){$e.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,i=Rt.g,r=Rt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(Ir);const i=hr(Hn.h,Ir.h,t),r=hr(Hn.s,Ir.s,t),s=hr(Hn.l,Ir.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new Xe;Xe.NAMES=ql;let Hh=0;class vr extends Yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=ji(),this.name="",this.blending=Ni,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ks,this.blendDst=Qs,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vi,this.stencilZFail=vi,this.stencilZPass=vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(i.blending=this.blending),this.side!==Kn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ks&&(i.blendSrc=this.blendSrc),this.blendDst!==Qs&&(i.blendDst=this.blendDst),this.blendEquation!==ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class En extends vr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new F,Dr=new He;class rn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=xo,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix3(e),this.setXY(t,Dr.x,Dr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Di(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xo&&(e.usage=this.usage),e}}class Yl extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class jl extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mt extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Gh=0;const Xt=new ct,Fs=new wt,Ri=new F,Ht=new _r,ir=new _r,vt=new F;class Yt extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vl(e)?jl:Yl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,i){return Xt.makeTranslation(e,t,i),this.applyMatrix4(Xt),this}scale(e,t,i){return Xt.makeScale(e,t,i),this.applyMatrix4(Xt),this}lookAt(e){return Fs.lookAt(e),Fs.updateMatrix(),this.applyMatrix4(Fs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mt(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Ht.min,ir.min),Ht.expandByPoint(vt),vt.addVectors(Ht.max,ir.max),Ht.expandByPoint(vt)):(Ht.expandByPoint(ir.min),Ht.expandByPoint(ir.max))}Ht.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(vt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)vt.fromBufferAttribute(o,c),l&&(Ri.fromBufferAttribute(e,c),vt.add(Ri)),r=Math.max(r,i.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new F,l[P]=new F;const c=new F,h=new F,d=new F,u=new He,p=new He,g=new He,_=new F,m=new F;function f(P,E,S){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),u.fromBufferAttribute(s,P),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,S),h.sub(c),d.sub(c),p.sub(u),g.sub(u);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),o[P].add(_),o[E].add(_),o[S].add(_),l[P].add(m),l[E].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,E=y.length;P<E;++P){const S=y[P],R=S.start,V=S.count;for(let B=R,Y=R+V;B<Y;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const b=new F,x=new F,C=new F,T=new F;function A(P){C.fromBufferAttribute(r,P),T.copy(C);const E=o[P];b.copy(E),b.sub(C.multiplyScalar(C.dot(E))).normalize(),x.crossVectors(T,E);const R=x.dot(l[P])<0?-1:1;a.setXYZW(P,b.x,b.y,b.z,R)}for(let P=0,E=y.length;P<E;++P){const S=y[P],R=S.start,V=S.count;for(let B=R,Y=R+V;B<Y;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new F,s=new F,a=new F,o=new F,l=new F,c=new F,h=new F,d=new F;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new rn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=e(u,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ko=new ct,ti=new Uh,Ur=new qa,Oo=new F,Nr=new F,Fr=new F,kr=new F,ks=new F,Or=new F,Bo=new F,Br=new F;class ft extends wt{constructor(e=new Yt,t=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Or.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(ks.fromBufferAttribute(d,e),a?Or.addScaledVector(ks,h):Or.addScaledVector(ks.sub(t),h))}t.add(Or)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere),Ur.applyMatrix4(s),ti.copy(e.ray).recast(e.near),!(Ur.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Ur,Oo)===null||ti.origin.distanceToSquared(Oo)>(e.far-e.near)**2))&&(ko.copy(s).invert(),ti.copy(e.ray).applyMatrix4(ko),!(i.boundingBox!==null&&ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,C=b;x<C;x+=3){const T=o.getX(x),A=o.getX(x+1),P=o.getX(x+2);r=zr(this,f,e,i,c,h,d,T,A,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=o.getX(m),b=o.getX(m+1),x=o.getX(m+2);r=zr(this,a,e,i,c,h,d,y,b,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,C=b;x<C;x+=3){const T=x,A=x+1,P=x+2;r=zr(this,f,e,i,c,h,d,T,A,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=m,b=m+1,x=m+2;r=zr(this,a,e,i,c,h,d,y,b,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Vh(n,e,t,i,r,s,a,o){let l;if(e.side===Ot?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Kn,o),l===null)return null;Br.copy(o),Br.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Br);return c<t.near||c>t.far?null:{distance:c,point:Br.clone(),object:n}}function zr(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Nr),n.getVertexPosition(l,Fr),n.getVertexPosition(c,kr);const h=Vh(n,e,t,i,Nr,Fr,kr,Bo);if(h){const d=new F;tn.getBarycoord(Bo,Nr,Fr,kr,d),r&&(h.uv=tn.getInterpolatedAttribute(r,o,l,c,d,new He)),s&&(h.uv1=tn.getInterpolatedAttribute(s,o,l,c,d,new He)),a&&(h.normal=tn.getInterpolatedAttribute(a,o,l,c,d,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new F,materialIndex:0};tn.getNormal(Nr,Fr,kr,u.normal),h.face=u,h.barycoord=d}return h}class Cn extends Yt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(d,2));function g(_,m,f,y,b,x,C,T,A,P,E){const S=x/A,R=C/P,V=x/2,B=C/2,Y=T/2,q=A+1,j=P+1;let ee=0,W=0;const ae=new F;for(let pe=0;pe<j;pe++){const Me=pe*R-B;for(let ze=0;ze<q;ze++){const Le=ze*S-V;ae[_]=Le*y,ae[m]=Me*b,ae[f]=Y,c.push(ae.x,ae.y,ae.z),ae[_]=0,ae[m]=0,ae[f]=T>0?1:-1,h.push(ae.x,ae.y,ae.z),d.push(ze/A),d.push(1-pe/P),ee+=1}}for(let pe=0;pe<P;pe++)for(let Me=0;Me<A;Me++){const ze=u+Me+q*pe,Le=u+Me+q*(pe+1),K=u+(Me+1)+q*(pe+1),ne=u+(Me+1)+q*pe;l.push(ze,Le,ne),l.push(Le,K,ne),W+=6}o.addGroup(p,W,E),p+=W,u+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function It(n){const e={};for(let t=0;t<n.length;t++){const i=Wi(n[t]);for(const r in i)e[r]=i[r]}return e}function Wh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Kl(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const Xh={clone:Wi,merge:It};var $h=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends vr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$h,this.fragmentShader=qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.uniformsGroups=Wh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ql extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=An}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new F,zo=new He,Ho=new He;class en extends Ql{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,t){return this.getViewBounds(e,zo,Ho),t.subVectors(Ho,zo)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ci=-90,Pi=1;class Yh extends wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new en(Ci,Pi,e,t);r.layers=this.layers,this.add(r);const s=new en(Ci,Pi,e,t);s.layers=this.layers,this.add(s);const a=new en(Ci,Pi,e,t);a.layers=this.layers,this.add(a);const o=new en(Ci,Pi,e,t);o.layers=this.layers,this.add(o);const l=new en(Ci,Pi,e,t);l.layers=this.layers,this.add(l);const c=new en(Ci,Pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===An)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ns)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Zl extends Pt{constructor(e,t,i,r,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:zi,super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jh extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Zl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Cn(5,5,5),s=new sn({name:"CubemapFromEquirect",uniforms:Wi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:qn});s.uniforms.tEquirect.value=t;const a=new ft(r,s),o=t.minFilter;return t.minFilter===di&&(t.minFilter=dn),new Yh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Os=new F,Kh=new F,Qh=new Oe;class oi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Os.subVectors(i,t).cross(Kh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Os),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Qh.getNormalMatrix(e),r=this.coplanarPoint(Os).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new qa,Hr=new F;class Ya{constructor(e=new oi,t=new oi,i=new oi,r=new oi,s=new oi,a=new oi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=An){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],d=r[6],u=r[7],p=r[8],g=r[9],_=r[10],m=r[11],f=r[12],y=r[13],b=r[14],x=r[15];if(i[0].setComponents(l-s,u-c,m-p,x-f).normalize(),i[1].setComponents(l+s,u+c,m+p,x+f).normalize(),i[2].setComponents(l+a,u+h,m+g,x+y).normalize(),i[3].setComponents(l-a,u-h,m-g,x-y).normalize(),i[4].setComponents(l-o,u-d,m-_,x-b).normalize(),t===An)i[5].setComponents(l+o,u+d,m+_,x+b).normalize();else if(t===ns)i[5].setComponents(o,d,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Hr.x=r.normal.x>0?e.max.x:e.min.x,Hr.y=r.normal.y>0?e.max.y:e.min.y,Hr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jl(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Zh(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class un extends Yt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,d=e/o,u=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const y=f*u-a;for(let b=0;b<c;b++){const x=b*d-s;g.push(x,-y,0),_.push(0,0,1),m.push(b/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const b=y+c*f,x=y+c*(f+1),C=y+1+c*(f+1),T=y+1+c*f;p.push(b,x,T),p.push(x,C,T)}this.setIndex(p),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new un(e.width,e.height,e.widthSegments,e.heightSegments)}}var Jh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eu=`#ifdef USE_ALPHAHASH
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
#endif`,tu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ru=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,su=`#ifdef USE_AOMAP
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
#endif`,au=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ou=`#ifdef USE_BATCHING
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
#endif`,lu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,du=`#ifdef USE_IRIDESCENCE
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
#endif`,fu=`#ifdef USE_BUMPMAP
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
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Su=`#define PI 3.141592653589793
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
} // validated`,bu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Eu=`vec3 transformedNormal = objectNormal;
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
#endif`,wu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Au=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ru=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lu=`#ifdef USE_ENVMAP
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
#endif`,Iu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Du=`#ifdef USE_ENVMAP
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
#endif`,Uu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nu=`#ifdef USE_ENVMAP
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
#endif`,Fu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ku=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ou=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zu=`#ifdef USE_GRADIENTMAP
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
}`,Hu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wu=`uniform bool receiveShadow;
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
#endif`,Xu=`#ifdef USE_ENVMAP
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
#endif`,$u=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ju=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ku=`PhysicalMaterial material;
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
#endif`,Qu=`struct PhysicalMaterial {
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
}`,Zu=`
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
#endif`,Ju=`#if defined( RE_IndirectDiffuse )
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
#endif`,ed=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,td=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,id=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ad=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ld=`#if defined( USE_POINTS_UV )
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
#endif`,cd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ud=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pd=`#ifdef USE_MORPHTARGETS
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
#endif`,md=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_d=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Md=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yd=`#ifdef USE_NORMALMAP
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
#endif`,Sd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ed=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Td=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ad=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ld=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Id=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ud=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kd=`float getShadowMask() {
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
}`,Od=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bd=`#ifdef USE_SKINNING
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
#endif`,zd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hd=`#ifdef USE_SKINNING
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
#endif`,Gd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$d=`#ifdef USE_TRANSMISSION
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
#endif`,qd=`#ifdef USE_TRANSMISSION
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
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jd=`uniform sampler2D t2D;
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
}`,ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sf=`#include <common>
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
}`,af=`#if DEPTH_PACKING == 3200
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
}`,of=`#define DISTANCE
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
}`,lf=`#define DISTANCE
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
}`,cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uf=`uniform float scale;
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
}`,df=`uniform vec3 diffuse;
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
}`,ff=`#include <common>
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
}`,pf=`uniform vec3 diffuse;
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
}`,mf=`#define LAMBERT
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
}`,gf=`#define LAMBERT
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
}`,_f=`#define MATCAP
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
}`,vf=`#define MATCAP
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
}`,xf=`#define NORMAL
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
}`,Mf=`#define NORMAL
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
}`,yf=`#define PHONG
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
}`,Sf=`#define PHONG
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
}`,bf=`#define STANDARD
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
}`,Ef=`#define STANDARD
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
}`,wf=`#define TOON
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
}`,Tf=`#define TOON
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
}`,Af=`uniform float size;
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
}`,Rf=`uniform vec3 diffuse;
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
}`,Cf=`#include <common>
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
}`,Pf=`uniform vec3 color;
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
}`,Lf=`uniform float rotation;
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
}`,If=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Jh,alphahash_pars_fragment:eu,alphamap_fragment:tu,alphamap_pars_fragment:nu,alphatest_fragment:iu,alphatest_pars_fragment:ru,aomap_fragment:su,aomap_pars_fragment:au,batching_pars_vertex:ou,batching_vertex:lu,begin_vertex:cu,beginnormal_vertex:hu,bsdfs:uu,iridescence_fragment:du,bumpmap_pars_fragment:fu,clipping_planes_fragment:pu,clipping_planes_pars_fragment:mu,clipping_planes_pars_vertex:gu,clipping_planes_vertex:_u,color_fragment:vu,color_pars_fragment:xu,color_pars_vertex:Mu,color_vertex:yu,common:Su,cube_uv_reflection_fragment:bu,defaultnormal_vertex:Eu,displacementmap_pars_vertex:wu,displacementmap_vertex:Tu,emissivemap_fragment:Au,emissivemap_pars_fragment:Ru,colorspace_fragment:Cu,colorspace_pars_fragment:Pu,envmap_fragment:Lu,envmap_common_pars_fragment:Iu,envmap_pars_fragment:Du,envmap_pars_vertex:Uu,envmap_physical_pars_fragment:Xu,envmap_vertex:Nu,fog_vertex:Fu,fog_pars_vertex:ku,fog_fragment:Ou,fog_pars_fragment:Bu,gradientmap_pars_fragment:zu,lightmap_pars_fragment:Hu,lights_lambert_fragment:Gu,lights_lambert_pars_fragment:Vu,lights_pars_begin:Wu,lights_toon_fragment:$u,lights_toon_pars_fragment:qu,lights_phong_fragment:Yu,lights_phong_pars_fragment:ju,lights_physical_fragment:Ku,lights_physical_pars_fragment:Qu,lights_fragment_begin:Zu,lights_fragment_maps:Ju,lights_fragment_end:ed,logdepthbuf_fragment:td,logdepthbuf_pars_fragment:nd,logdepthbuf_pars_vertex:id,logdepthbuf_vertex:rd,map_fragment:sd,map_pars_fragment:ad,map_particle_fragment:od,map_particle_pars_fragment:ld,metalnessmap_fragment:cd,metalnessmap_pars_fragment:hd,morphinstance_vertex:ud,morphcolor_vertex:dd,morphnormal_vertex:fd,morphtarget_pars_vertex:pd,morphtarget_vertex:md,normal_fragment_begin:gd,normal_fragment_maps:_d,normal_pars_fragment:vd,normal_pars_vertex:xd,normal_vertex:Md,normalmap_pars_fragment:yd,clearcoat_normal_fragment_begin:Sd,clearcoat_normal_fragment_maps:bd,clearcoat_pars_fragment:Ed,iridescence_pars_fragment:wd,opaque_fragment:Td,packing:Ad,premultiplied_alpha_fragment:Rd,project_vertex:Cd,dithering_fragment:Pd,dithering_pars_fragment:Ld,roughnessmap_fragment:Id,roughnessmap_pars_fragment:Dd,shadowmap_pars_fragment:Ud,shadowmap_pars_vertex:Nd,shadowmap_vertex:Fd,shadowmask_pars_fragment:kd,skinbase_vertex:Od,skinning_pars_vertex:Bd,skinning_vertex:zd,skinnormal_vertex:Hd,specularmap_fragment:Gd,specularmap_pars_fragment:Vd,tonemapping_fragment:Wd,tonemapping_pars_fragment:Xd,transmission_fragment:$d,transmission_pars_fragment:qd,uv_pars_fragment:Yd,uv_pars_vertex:jd,uv_vertex:Kd,worldpos_vertex:Qd,background_vert:Zd,background_frag:Jd,backgroundCube_vert:ef,backgroundCube_frag:tf,cube_vert:nf,cube_frag:rf,depth_vert:sf,depth_frag:af,distanceRGBA_vert:of,distanceRGBA_frag:lf,equirect_vert:cf,equirect_frag:hf,linedashed_vert:uf,linedashed_frag:df,meshbasic_vert:ff,meshbasic_frag:pf,meshlambert_vert:mf,meshlambert_frag:gf,meshmatcap_vert:_f,meshmatcap_frag:vf,meshnormal_vert:xf,meshnormal_frag:Mf,meshphong_vert:yf,meshphong_frag:Sf,meshphysical_vert:bf,meshphysical_frag:Ef,meshtoon_vert:wf,meshtoon_frag:Tf,points_vert:Af,points_frag:Rf,shadow_vert:Cf,shadow_frag:Pf,sprite_vert:Lf,sprite_frag:If},se={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},hn={basic:{uniforms:It([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:It([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:It([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:It([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:It([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:It([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:It([se.points,se.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:It([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:It([se.common,se.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:It([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:It([se.sprite,se.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:It([se.common,se.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:It([se.lights,se.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};hn.physical={uniforms:It([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Gr={r:0,b:0,g:0},ii=new In,Df=new ct;function Uf(n,e,t,i,r,s,a){const o=new Xe(0);let l=s===!0?0:1,c,h,d=null,u=0,p=null;function g(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?t:e).get(b)),b}function _(y){let b=!1;const x=g(y);x===null?f(o,l):x&&x.isColor&&(f(x,1),b=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,b){const x=g(b);x&&(x.isCubeTexture||x.mapping===us)?(h===void 0&&(h=new ft(new Cn(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Wi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ii.copy(b.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Df.makeRotationFromEuler(ii)),h.material.toneMapped=$e.getTransfer(x.colorSpace)!==Je,(d!==x||u!==x.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,p=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ft(new un(2,2),new sn({name:"BackgroundMaterial",uniforms:Wi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=$e.getTransfer(x.colorSpace)!==Je,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,p=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,b){y.getRGB(Gr,Kl(n)),i.buffers.color.setClear(Gr.r,Gr.g,Gr.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),l=b,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:_,addToRenderList:m}}function Nf(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(S,R,V,B,Y){let q=!1;const j=d(B,V,R);s!==j&&(s=j,c(s.object)),q=p(S,B,V,Y),q&&g(S,B,V,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(S,R,V,B),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function d(S,R,V){const B=V.wireframe===!0;let Y=i[S.id];Y===void 0&&(Y={},i[S.id]=Y);let q=Y[R.id];q===void 0&&(q={},Y[R.id]=q);let j=q[B];return j===void 0&&(j=u(l()),q[B]=j),j}function u(S){const R=[],V=[],B=[];for(let Y=0;Y<t;Y++)R[Y]=0,V[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:V,attributeDivisors:B,object:S,attributes:{},index:null}}function p(S,R,V,B){const Y=s.attributes,q=R.attributes;let j=0;const ee=V.getAttributes();for(const W in ee)if(ee[W].location>=0){const pe=Y[W];let Me=q[W];if(Me===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(Me=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(Me=S.instanceColor)),pe===void 0||pe.attribute!==Me||Me&&pe.data!==Me.data)return!0;j++}return s.attributesNum!==j||s.index!==B}function g(S,R,V,B){const Y={},q=R.attributes;let j=0;const ee=V.getAttributes();for(const W in ee)if(ee[W].location>=0){let pe=q[W];pe===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(pe=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(pe=S.instanceColor));const Me={};Me.attribute=pe,pe&&pe.data&&(Me.data=pe.data),Y[W]=Me,j++}s.attributes=Y,s.attributesNum=j,s.index=B}function _(){const S=s.newAttributes;for(let R=0,V=S.length;R<V;R++)S[R]=0}function m(S){f(S,0)}function f(S,R){const V=s.newAttributes,B=s.enabledAttributes,Y=s.attributeDivisors;V[S]=1,B[S]===0&&(n.enableVertexAttribArray(S),B[S]=1),Y[S]!==R&&(n.vertexAttribDivisor(S,R),Y[S]=R)}function y(){const S=s.newAttributes,R=s.enabledAttributes;for(let V=0,B=R.length;V<B;V++)R[V]!==S[V]&&(n.disableVertexAttribArray(V),R[V]=0)}function b(S,R,V,B,Y,q,j){j===!0?n.vertexAttribIPointer(S,R,V,Y,q):n.vertexAttribPointer(S,R,V,B,Y,q)}function x(S,R,V,B){_();const Y=B.attributes,q=V.getAttributes(),j=R.defaultAttributeValues;for(const ee in q){const W=q[ee];if(W.location>=0){let ae=Y[ee];if(ae===void 0&&(ee==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),ee==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),ae!==void 0){const pe=ae.normalized,Me=ae.itemSize,ze=e.get(ae);if(ze===void 0)continue;const Le=ze.buffer,K=ze.type,ne=ze.bytesPerElement,ge=K===n.INT||K===n.UNSIGNED_INT||ae.gpuType===za;if(ae.isInterleavedBufferAttribute){const oe=ae.data,Te=oe.stride,Ce=ae.offset;if(oe.isInstancedInterleavedBuffer){for(let Re=0;Re<W.locationSize;Re++)f(W.location+Re,oe.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Re=0;Re<W.locationSize;Re++)m(W.location+Re);n.bindBuffer(n.ARRAY_BUFFER,Le);for(let Re=0;Re<W.locationSize;Re++)b(W.location+Re,Me/W.locationSize,K,pe,Te*ne,(Ce+Me/W.locationSize*Re)*ne,ge)}else{if(ae.isInstancedBufferAttribute){for(let oe=0;oe<W.locationSize;oe++)f(W.location+oe,ae.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let oe=0;oe<W.locationSize;oe++)m(W.location+oe);n.bindBuffer(n.ARRAY_BUFFER,Le);for(let oe=0;oe<W.locationSize;oe++)b(W.location+oe,Me/W.locationSize,K,pe,Me*ne,Me/W.locationSize*oe*ne,ge)}}else if(j!==void 0){const pe=j[ee];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(W.location,pe);break;case 3:n.vertexAttrib3fv(W.location,pe);break;case 4:n.vertexAttrib4fv(W.location,pe);break;default:n.vertexAttrib1fv(W.location,pe)}}}}y()}function C(){P();for(const S in i){const R=i[S];for(const V in R){const B=R[V];for(const Y in B)h(B[Y].object),delete B[Y];delete R[V]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;const R=i[S.id];for(const V in R){const B=R[V];for(const Y in B)h(B[Y].object),delete B[Y];delete R[V]}delete i[S.id]}function A(S){for(const R in i){const V=i[R];if(V[S.id]===void 0)continue;const B=V[S.id];for(const Y in B)h(B[Y].object),delete B[Y];delete V[S.id]}}function P(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Ff(n,e,t){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,i,1)}function l(c,h,d,u){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function kf(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==nn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Pn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Tn&&!P)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:C,maxSamples:T}}function Of(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new oi,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||r;return r=u,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const y=s?0:i,b=y*4;let x=f.clippingState||null;l.value=x,x=h(g,u,b,p);for(let C=0;C!==b;++C)x[C]=t[C];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,x=p;b!==_;++b,x+=4)a.copy(d[b]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Bf(n){let e=new WeakMap;function t(a,o){return o===sa?a.mapping=zi:o===aa&&(a.mapping=Hi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===sa||o===aa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new jh(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ps extends Ql{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ui=4,Go=[.125,.215,.35,.446,.526,.582],hi=20,Bs=new ps,Vo=new Xe;let zs=null,Hs=0,Gs=0,Vs=!1;const li=(1+Math.sqrt(5))/2,Li=1/li,Wo=[new F(-li,Li,0),new F(li,Li,0),new F(-Li,0,li),new F(Li,0,li),new F(0,li,-Li),new F(0,li,Li),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Xo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){zs=this._renderer.getRenderTarget(),Hs=this._renderer.getActiveCubeFace(),Gs=this._renderer.getActiveMipmapLevel(),Vs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zs,Hs,Gs),this._renderer.xr.enabled=Vs,e.scissorTest=!1,Vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zi||e.mapping===Hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zs=this._renderer.getRenderTarget(),Hs=this._renderer.getActiveCubeFace(),Gs=this._renderer.getActiveMipmapLevel(),Vs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:mi,format:nn,colorSpace:qi,depthBuffer:!1},r=$o(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$o(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zf(s)),this._blurMaterial=Hf(s,e,t)}return r}_compileMaterial(e){const t=new ft(this._lodPlanes[0],e);this._renderer.compile(t,Bs)}_sceneToCubeUV(e,t,i,r){const o=new en(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Vo),h.toneMapping=Yn,h.autoClear=!1;const p=new En({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),g=new ft(new Cn,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Vo),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const b=this._cubeSize;Vr(r,y*b,f>2?b:0,b,b),h.setRenderTarget(r),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===zi||e.mapping===Hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ft(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Vr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Bs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Wo[(r-s-1)%Wo.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ft(this._lodPlanes[r],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*hi-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):hi;m>hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hi}`);const f=[];let y=0;for(let A=0;A<hi;++A){const P=A/_,E=Math.exp(-P*P/2);f.push(E),A===0?y+=E:A<m&&(y+=2*E)}for(let A=0;A<f.length;A++)f[A]=f[A]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-i;const x=this._sizeLods[r],C=3*x*(r>b-Ui?r-b+Ui:0),T=4*(this._cubeSize-x);Vr(t,C,T,3*x,2*x),l.setRenderTarget(t),l.render(d,Bs)}}function zf(n){const e=[],t=[],i=[];let r=n;const s=n-Ui+1+Go.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Ui?l=Go[a-n+Ui-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*p),b=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,P=T>2?0:-1,E=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];y.set(E,_*g*T),b.set(u,m*g*T);const S=[T,T,T,T,T,T];x.set(S,f*g*T)}const C=new Yt;C.setAttribute("position",new rn(y,_)),C.setAttribute("uv",new rn(b,m)),C.setAttribute("faceIndex",new rn(x,f)),e.push(C),r>Ui&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function $o(n,e,t){const i=new Ln(n,e,t);return i.texture.mapping=us,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Hf(n,e,t){const i=new Float32Array(hi),r=new F(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ja(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function qo(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ja(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Yo(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ja(){return`

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
	`}function Gf(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===sa||l===aa,h=l===zi||l===Hi;if(c||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Xo(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new Xo(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Vf(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&sr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Wf(n,e,t,i){const r={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}u.removeEventListener("dispose",a),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(d){const u=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let b=0,x=y.length;b<x;b+=3){const C=y[b+0],T=y[b+1],A=y[b+2];u.push(C,T,T,A,A,C)}}else if(g!==void 0){const y=g.array;_=g.version;for(let b=0,x=y.length/3-1;b<x;b+=3){const C=b+0,T=b+1,A=b+2;u.push(C,T,T,A,A,C)}}else return;const m=new(Vl(u)?jl:Yl)(u,1);m.version=_;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Xf(n,e,t){let i;function r(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,p){n.drawElements(i,p,s,u*a),t.update(p,i,1)}function c(u,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,u*a,g),t.update(p,i,g))}function h(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function d(u,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,u,0,_,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y]*_[y];t.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function $f(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function qf(n,e,t){const i=new WeakMap,r=new ut;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let S=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var p=S;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let C=o.attributes.position.count*x,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*T*4*d),P=new Xl(A,C,T,d);P.type=Tn,P.needsUpdate=!0;const E=x*4;for(let R=0;R<d;R++){const V=f[R],B=y[R],Y=b[R],q=C*T*4*R;for(let j=0;j<V.count;j++){const ee=j*E;g===!0&&(r.fromBufferAttribute(V,j),A[q+ee+0]=r.x,A[q+ee+1]=r.y,A[q+ee+2]=r.z,A[q+ee+3]=0),_===!0&&(r.fromBufferAttribute(B,j),A[q+ee+4]=r.x,A[q+ee+5]=r.y,A[q+ee+6]=r.z,A[q+ee+7]=0),m===!0&&(r.fromBufferAttribute(Y,j),A[q+ee+8]=r.x,A[q+ee+9]=r.y,A[q+ee+10]=r.z,A[q+ee+11]=Y.itemSize===4?r.w:1)}}u={count:d,texture:P,size:new He(C,T)},i.set(o,u),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function Yf(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class ec extends Pt{constructor(e,t,i,r,s,a,o,l,c,h=Fi){if(h!==Fi&&h!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Fi&&(i=pi),i===void 0&&h===Vi&&(i=Gi),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Et,this.minFilter=l!==void 0?l:Et,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const tc=new Pt,jo=new ec(1,1),nc=new Xl,ic=new Ih,rc=new Zl,Ko=[],Qo=[],Zo=new Float32Array(16),Jo=new Float32Array(9),el=new Float32Array(4);function Qi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ko[r];if(s===void 0&&(s=new Float32Array(r),Ko[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ms(n,e){let t=Qo[e];t===void 0&&(t=new Int32Array(e),Qo[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function jf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Kf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2fv(this.addr,e),_t(t,e)}}function Qf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;n.uniform3fv(this.addr,e),_t(t,e)}}function Zf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4fv(this.addr,e),_t(t,e)}}function Jf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;el.set(i),n.uniformMatrix2fv(this.addr,!1,el),_t(t,i)}}function ep(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;Jo.set(i),n.uniformMatrix3fv(this.addr,!1,Jo),_t(t,i)}}function tp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;Zo.set(i),n.uniformMatrix4fv(this.addr,!1,Zo),_t(t,i)}}function np(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ip(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2iv(this.addr,e),_t(t,e)}}function rp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3iv(this.addr,e),_t(t,e)}}function sp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4iv(this.addr,e),_t(t,e)}}function ap(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function op(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2uiv(this.addr,e),_t(t,e)}}function lp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3uiv(this.addr,e),_t(t,e)}}function cp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4uiv(this.addr,e),_t(t,e)}}function hp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(jo.compareFunction=Gl,s=jo):s=tc,t.setTexture2D(e||s,r)}function up(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ic,r)}function dp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||rc,r)}function fp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||nc,r)}function pp(n){switch(n){case 5126:return jf;case 35664:return Kf;case 35665:return Qf;case 35666:return Zf;case 35674:return Jf;case 35675:return ep;case 35676:return tp;case 5124:case 35670:return np;case 35667:case 35671:return ip;case 35668:case 35672:return rp;case 35669:case 35673:return sp;case 5125:return ap;case 36294:return op;case 36295:return lp;case 36296:return cp;case 35678:case 36198:case 36298:case 36306:case 35682:return hp;case 35679:case 36299:case 36307:return up;case 35680:case 36300:case 36308:case 36293:return dp;case 36289:case 36303:case 36311:case 36292:return fp}}function mp(n,e){n.uniform1fv(this.addr,e)}function gp(n,e){const t=Qi(e,this.size,2);n.uniform2fv(this.addr,t)}function _p(n,e){const t=Qi(e,this.size,3);n.uniform3fv(this.addr,t)}function vp(n,e){const t=Qi(e,this.size,4);n.uniform4fv(this.addr,t)}function xp(n,e){const t=Qi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Mp(n,e){const t=Qi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function yp(n,e){const t=Qi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Sp(n,e){n.uniform1iv(this.addr,e)}function bp(n,e){n.uniform2iv(this.addr,e)}function Ep(n,e){n.uniform3iv(this.addr,e)}function wp(n,e){n.uniform4iv(this.addr,e)}function Tp(n,e){n.uniform1uiv(this.addr,e)}function Ap(n,e){n.uniform2uiv(this.addr,e)}function Rp(n,e){n.uniform3uiv(this.addr,e)}function Cp(n,e){n.uniform4uiv(this.addr,e)}function Pp(n,e,t){const i=this.cache,r=e.length,s=ms(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||tc,s[a])}function Lp(n,e,t){const i=this.cache,r=e.length,s=ms(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ic,s[a])}function Ip(n,e,t){const i=this.cache,r=e.length,s=ms(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||rc,s[a])}function Dp(n,e,t){const i=this.cache,r=e.length,s=ms(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||nc,s[a])}function Up(n){switch(n){case 5126:return mp;case 35664:return gp;case 35665:return _p;case 35666:return vp;case 35674:return xp;case 35675:return Mp;case 35676:return yp;case 5124:case 35670:return Sp;case 35667:case 35671:return bp;case 35668:case 35672:return Ep;case 35669:case 35673:return wp;case 5125:return Tp;case 36294:return Ap;case 36295:return Rp;case 36296:return Cp;case 35678:case 36198:case 36298:case 36306:case 35682:return Pp;case 35679:case 36299:case 36307:return Lp;case 35680:case 36300:case 36308:case 36293:return Ip;case 36289:case 36303:case 36311:case 36292:return Dp}}class Np{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=pp(t.type)}}class Fp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Up(t.type)}}class kp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ws=/(\w+)(\])?(\[|\.)?/g;function tl(n,e){n.seq.push(e),n.map[e.id]=e}function Op(n,e,t){const i=n.name,r=i.length;for(Ws.lastIndex=0;;){const s=Ws.exec(i),a=Ws.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){tl(t,c===void 0?new Np(o,n,e):new Fp(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new kp(o),tl(t,d)),t=d}}}class Qr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Op(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function nl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Bp=37297;let zp=0;function Hp(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const il=new Oe;function Gp(n){$e._getMatrix(il,$e.workingColorSpace,n);const e=`mat3( ${il.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case fs:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function rl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Hp(n.getShaderSource(e),a)}else return r}function Vp(n,e){const t=Gp(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Wp(n,e){let t;switch(e){case Vc:t="Linear";break;case Wc:t="Reinhard";break;case Xc:t="Cineon";break;case $c:t="ACESFilmic";break;case Yc:t="AgX";break;case jc:t="Neutral";break;case qc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wr=new F;function Xp(){$e.getLuminanceCoefficients(Wr);const n=Wr.x.toFixed(4),e=Wr.y.toFixed(4),t=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $p(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function qp(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Yp(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ar(n){return n!==""}function sl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function al(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ua(n){return n.replace(jp,Qp)}const Kp=new Map;function Qp(n,e){let t=Be[e];if(t===void 0){const i=Kp.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ua(t)}const Zp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ol(n){return n.replace(Zp,Jp)}function Jp(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ll(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function em(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Cl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Sc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Sn&&(e="SHADOWMAP_TYPE_VSM"),e}function tm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case zi:case Hi:e="ENVMAP_TYPE_CUBE";break;case us:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Hi:e="ENVMAP_MODE_REFRACTION";break}return e}function im(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Pl:e="ENVMAP_BLENDING_MULTIPLY";break;case Hc:e="ENVMAP_BLENDING_MIX";break;case Gc:e="ENVMAP_BLENDING_ADD";break}return e}function rm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function sm(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=em(t),c=tm(t),h=nm(t),d=im(t),u=rm(t),p=$p(t),g=qp(s),_=r.createProgram();let m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ar).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ar).join(`
`),f.length>0&&(f+=`
`)):(m=[ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),f=[ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?Be.tonemapping_pars_fragment:"",t.toneMapping!==Yn?Wp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Vp("linearToOutputTexel",t.outputColorSpace),Xp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ar).join(`
`)),a=Ua(a),a=sl(a,t),a=al(a,t),o=Ua(o),o=sl(o,t),o=al(o,t),a=ol(a),o=ol(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Mo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=y+m+a,x=y+f+o,C=nl(r,r.VERTEX_SHADER,b),T=nl(r,r.FRAGMENT_SHADER,x);r.attachShader(_,C),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(R){if(n.debug.checkShaderErrors){const V=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(C).trim(),Y=r.getShaderInfoLog(T).trim();let q=!0,j=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,T);else{const ee=rl(r,C,"vertex"),W=rl(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+ee+`
`+W)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||Y==="")&&(j=!1);j&&(R.diagnostics={runnable:q,programLog:V,vertexShader:{log:B,prefix:m},fragmentShader:{log:Y,prefix:f}})}r.deleteShader(C),r.deleteShader(T),P=new Qr(r,_),E=Yp(r,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,Bp)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=T,this}let am=0;class om{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new lm(e),t.set(e,i)),i}}class lm{constructor(e){this.id=am++,this.code=e,this.usedTimes=0}}function cm(n,e,t,i,r,s,a){const o=new $l,l=new om,c=new Set,h=[],d=r.logarithmicDepthBuffer,u=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,R,V,B){const Y=V.fog,q=B.geometry,j=E.isMeshStandardMaterial?V.environment:null,ee=(E.isMeshStandardMaterial?t:e).get(E.envMap||j),W=ee&&ee.mapping===us?ee.image.height:null,ae=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const pe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Me=pe!==void 0?pe.length:0;let ze=0;q.morphAttributes.position!==void 0&&(ze=1),q.morphAttributes.normal!==void 0&&(ze=2),q.morphAttributes.color!==void 0&&(ze=3);let Le,K,ne,ge;if(ae){const Ze=hn[ae];Le=Ze.vertexShader,K=Ze.fragmentShader}else Le=E.vertexShader,K=E.fragmentShader,l.update(E),ne=l.getVertexShaderID(E),ge=l.getFragmentShaderID(E);const oe=n.getRenderTarget(),Te=n.state.buffers.depth.getReversed(),Ce=B.isInstancedMesh===!0,Re=B.isBatchedMesh===!0,je=!!E.map,Ge=!!E.matcap,tt=!!ee,N=!!E.aoMap,Ut=!!E.lightMap,De=!!E.bumpMap,Ve=!!E.normalMap,be=!!E.displacementMap,et=!!E.emissiveMap,Ee=!!E.metalnessMap,w=!!E.roughnessMap,v=E.anisotropy>0,k=E.clearcoat>0,D=E.dispersion>0,O=E.iridescence>0,H=E.sheen>0,te=E.transmission>0,Q=v&&!!E.anisotropyMap,$=k&&!!E.clearcoatMap,we=k&&!!E.clearcoatNormalMap,J=k&&!!E.clearcoatRoughnessMap,ce=O&&!!E.iridescenceMap,Se=O&&!!E.iridescenceThicknessMap,Ae=H&&!!E.sheenColorMap,de=H&&!!E.sheenRoughnessMap,We=!!E.specularMap,Ne=!!E.specularColorMap,nt=!!E.specularIntensityMap,L=te&&!!E.transmissionMap,le=te&&!!E.thicknessMap,X=!!E.gradientMap,Z=!!E.alphaMap,fe=E.alphaTest>0,he=!!E.alphaHash,Fe=!!E.extensions;let ht=Yn;E.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ht=n.toneMapping);const Tt={shaderID:ae,shaderType:E.type,shaderName:E.name,vertexShader:Le,fragmentShader:K,defines:E.defines,customVertexShaderID:ne,customFragmentShaderID:ge,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Re,batchingColor:Re&&B._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&B.instanceColor!==null,instancingMorph:Ce&&B.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:qi,alphaToCoverage:!!E.alphaToCoverage,map:je,matcap:Ge,envMap:tt,envMapMode:tt&&ee.mapping,envMapCubeUVHeight:W,aoMap:N,lightMap:Ut,bumpMap:De,normalMap:Ve,displacementMap:u&&be,emissiveMap:et,normalMapObjectSpace:Ve&&E.normalMapType===Jc,normalMapTangentSpace:Ve&&E.normalMapType===Hl,metalnessMap:Ee,roughnessMap:w,anisotropy:v,anisotropyMap:Q,clearcoat:k,clearcoatMap:$,clearcoatNormalMap:we,clearcoatRoughnessMap:J,dispersion:D,iridescence:O,iridescenceMap:ce,iridescenceThicknessMap:Se,sheen:H,sheenColorMap:Ae,sheenRoughnessMap:de,specularMap:We,specularColorMap:Ne,specularIntensityMap:nt,transmission:te,transmissionMap:L,thicknessMap:le,gradientMap:X,opaque:E.transparent===!1&&E.blending===Ni&&E.alphaToCoverage===!1,alphaMap:Z,alphaTest:fe,alphaHash:he,combine:E.combine,mapUv:je&&_(E.map.channel),aoMapUv:N&&_(E.aoMap.channel),lightMapUv:Ut&&_(E.lightMap.channel),bumpMapUv:De&&_(E.bumpMap.channel),normalMapUv:Ve&&_(E.normalMap.channel),displacementMapUv:be&&_(E.displacementMap.channel),emissiveMapUv:et&&_(E.emissiveMap.channel),metalnessMapUv:Ee&&_(E.metalnessMap.channel),roughnessMapUv:w&&_(E.roughnessMap.channel),anisotropyMapUv:Q&&_(E.anisotropyMap.channel),clearcoatMapUv:$&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:we&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:de&&_(E.sheenRoughnessMap.channel),specularMapUv:We&&_(E.specularMap.channel),specularColorMapUv:Ne&&_(E.specularColorMap.channel),specularIntensityMapUv:nt&&_(E.specularIntensityMap.channel),transmissionMapUv:L&&_(E.transmissionMap.channel),thicknessMapUv:le&&_(E.thicknessMap.channel),alphaMapUv:Z&&_(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ve||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(je||Z),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Te,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:ze,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ht,decodeVideoTexture:je&&E.map.isVideoTexture===!0&&$e.getTransfer(E.map.colorSpace)===Je,decodeVideoTextureEmissive:et&&E.emissiveMap.isVideoTexture===!0&&$e.getTransfer(E.emissiveMap.colorSpace)===Je,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===kt,flipSided:E.side===Ot,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Fe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&E.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function f(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)S.push(R),S.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(y(S,E),b(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function y(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function b(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){const S=g[E.type];let R;if(S){const V=hn[S];R=Xh.clone(V.uniforms)}else R=E.uniforms;return R}function C(E,S){let R;for(let V=0,B=h.length;V<B;V++){const Y=h[V];if(Y.cacheKey===S){R=Y,++R.usedTimes;break}}return R===void 0&&(R=new sm(n,S,E,s),h.push(R)),R}function T(E){if(--E.usedTimes===0){const S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function A(E){l.remove(E)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:P}}function hm(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function um(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function cl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function hl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,u,p,g,_,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function o(d,u,p,g,_,m){const f=a(d,u,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,u,p,g,_,m){const f=a(d,u,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||um),i.length>1&&i.sort(u||cl),r.length>1&&r.sort(u||cl)}function h(){for(let d=e,u=n.length;d<u;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function dm(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new hl,n.set(i,[a])):r>=s.length?(a=new hl,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function fm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Xe};break;case"SpotLight":t={position:new F,direction:new F,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function pm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let mm=0;function gm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _m(n){const e=new fm,t=pm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,s=new ct,a=new ct;function o(c){let h=0,d=0,u=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,y=0,b=0,x=0,C=0,T=0,A=0;c.sort(gm);for(let E=0,S=c.length;E<S;E++){const R=c[E],V=R.color,B=R.intensity,Y=R.distance,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=V.r*B,d+=V.g*B,u+=V.b*B;else if(R.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(R.sh.coefficients[j],B);A++}else if(R.isDirectionalLight){const j=e.get(R);if(j.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const ee=R.shadow,W=t.get(R);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=R.shadow.matrix,y++}i.directional[p]=j,p++}else if(R.isSpotLight){const j=e.get(R);j.position.setFromMatrixPosition(R.matrixWorld),j.color.copy(V).multiplyScalar(B),j.distance=Y,j.coneCos=Math.cos(R.angle),j.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),j.decay=R.decay,i.spot[_]=j;const ee=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,ee.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[_]=ee.matrix,R.castShadow){const W=t.get(R);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=q,x++}_++}else if(R.isRectAreaLight){const j=e.get(R);j.color.copy(V).multiplyScalar(B),j.halfWidth.set(R.width*.5,0,0),j.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=j,m++}else if(R.isPointLight){const j=e.get(R);if(j.color.copy(R.color).multiplyScalar(R.intensity),j.distance=R.distance,j.decay=R.decay,R.castShadow){const ee=R.shadow,W=t.get(R);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,W.shadowCameraNear=ee.camera.near,W.shadowCameraFar=ee.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=R.shadow.matrix,b++}i.point[g]=j,g++}else if(R.isHemisphereLight){const j=e.get(R);j.skyColor.copy(R.color).multiplyScalar(B),j.groundColor.copy(R.groundColor).multiplyScalar(B),i.hemi[f]=j,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==y||P.numPointShadows!==b||P.numSpotShadows!==x||P.numSpotMaps!==C||P.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=x+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=y,P.numPointShadows=b,P.numSpotShadows=x,P.numSpotMaps=C,P.numLightProbes=A,i.version=mm++)}function l(c,h){let d=0,u=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const b=c[f];if(b.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(b.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const x=i.point[u];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function ul(n){const e=new _m(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function vm(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ul(n),e.set(r,[o])):s>=a.length?(o=new ul(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class xm extends vr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Qc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mm extends vr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ym=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sm=`uniform sampler2D shadow_pass;
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
}`;function bm(n,e,t){let i=new Ya;const r=new He,s=new He,a=new ut,o=new xm({depthPacking:Zc}),l=new Mm,c={},h=t.maxTextureSize,d={[Kn]:Ot,[Ot]:Kn,[kt]:kt},u=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:ym,fragmentShader:Sm}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Yt;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ft(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cl;let f=this.type;this.render=function(T,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),V=n.state;V.setBlending(qn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=f!==Sn&&this.type===Sn,Y=f===Sn&&this.type!==Sn;for(let q=0,j=T.length;q<j;q++){const ee=T[q],W=ee.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ae=W.getFrameExtents();if(r.multiply(ae),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ae.x),r.x=s.x*ae.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ae.y),r.y=s.y*ae.y,W.mapSize.y=s.y)),W.map===null||B===!0||Y===!0){const Me=this.type!==Sn?{minFilter:Et,magFilter:Et}:{};W.map!==null&&W.map.dispose(),W.map=new Ln(r.x,r.y,Me),W.map.texture.name=ee.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const pe=W.getViewportCount();for(let Me=0;Me<pe;Me++){const ze=W.getViewport(Me);a.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),V.viewport(a),W.updateMatrices(ee,Me),i=W.getFrustum(),x(A,P,W.camera,ee,this.type)}W.isPointLightShadow!==!0&&this.type===Sn&&y(W,P),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(E,S,R)};function y(T,A){const P=e.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ln(r.x,r.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,P,u,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,P,p,_,null)}function b(T,A,P,E){let S=null;const R=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)S=R;else if(S=P.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=S.uuid,B=A.uuid;let Y=c[V];Y===void 0&&(Y={},c[V]=Y);let q=Y[B];q===void 0&&(q=S.clone(),Y[B]=q,A.addEventListener("dispose",C)),S=q}if(S.visible=A.visible,S.wireframe=A.wireframe,E===Sn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:d[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const V=n.properties.get(S);V.light=P}return S}function x(T,A,P,E,S){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Sn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const B=e.update(T),Y=T.material;if(Array.isArray(Y)){const q=B.groups;for(let j=0,ee=q.length;j<ee;j++){const W=q[j],ae=Y[W.materialIndex];if(ae&&ae.visible){const pe=b(T,ae,E,S);T.onBeforeShadow(n,T,A,P,B,pe,W),n.renderBufferDirect(P,null,B,pe,T,W),T.onAfterShadow(n,T,A,P,B,pe,W)}}}else if(Y.visible){const q=b(T,Y,E,S);T.onBeforeShadow(n,T,A,P,B,q,null),n.renderBufferDirect(P,null,B,q,T,null),T.onAfterShadow(n,T,A,P,B,q,null)}}const V=T.children;for(let B=0,Y=V.length;B<Y;B++)x(V[B],A,P,E,S)}function C(T){T.target.removeEventListener("dispose",C);for(const P in c){const E=c[P],S=T.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const Em={[Zs]:Js,[ea]:ia,[ta]:ra,[Bi]:na,[Js]:Zs,[ia]:ea,[ra]:ta,[na]:Bi};function wm(n,e){function t(){let L=!1;const le=new ut;let X=null;const Z=new ut(0,0,0,0);return{setMask:function(fe){X!==fe&&!L&&(n.colorMask(fe,fe,fe,fe),X=fe)},setLocked:function(fe){L=fe},setClear:function(fe,he,Fe,ht,Tt){Tt===!0&&(fe*=ht,he*=ht,Fe*=ht),le.set(fe,he,Fe,ht),Z.equals(le)===!1&&(n.clearColor(fe,he,Fe,ht),Z.copy(le))},reset:function(){L=!1,X=null,Z.set(-1,0,0,0)}}}function i(){let L=!1,le=!1,X=null,Z=null,fe=null;return{setReversed:function(he){if(le!==he){const Fe=e.get("EXT_clip_control");le?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT);const ht=fe;fe=null,this.setClear(ht)}le=he},getReversed:function(){return le},setTest:function(he){he?oe(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(he){X!==he&&!L&&(n.depthMask(he),X=he)},setFunc:function(he){if(le&&(he=Em[he]),Z!==he){switch(he){case Zs:n.depthFunc(n.NEVER);break;case Js:n.depthFunc(n.ALWAYS);break;case ea:n.depthFunc(n.LESS);break;case Bi:n.depthFunc(n.LEQUAL);break;case ta:n.depthFunc(n.EQUAL);break;case na:n.depthFunc(n.GEQUAL);break;case ia:n.depthFunc(n.GREATER);break;case ra:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=he}},setLocked:function(he){L=he},setClear:function(he){fe!==he&&(le&&(he=1-he),n.clearDepth(he),fe=he)},reset:function(){L=!1,X=null,Z=null,fe=null,le=!1}}}function r(){let L=!1,le=null,X=null,Z=null,fe=null,he=null,Fe=null,ht=null,Tt=null;return{setTest:function(Ze){L||(Ze?oe(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(Ze){le!==Ze&&!L&&(n.stencilMask(Ze),le=Ze)},setFunc:function(Ze,jt,mn){(X!==Ze||Z!==jt||fe!==mn)&&(n.stencilFunc(Ze,jt,mn),X=Ze,Z=jt,fe=mn)},setOp:function(Ze,jt,mn){(he!==Ze||Fe!==jt||ht!==mn)&&(n.stencilOp(Ze,jt,mn),he=Ze,Fe=jt,ht=mn)},setLocked:function(Ze){L=Ze},setClear:function(Ze){Tt!==Ze&&(n.clearStencil(Ze),Tt=Ze)},reset:function(){L=!1,le=null,X=null,Z=null,fe=null,he=null,Fe=null,ht=null,Tt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,y=null,b=null,x=null,C=null,T=null,A=new Xe(0,0,0),P=0,E=!1,S=null,R=null,V=null,B=null,Y=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,ee=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(W)[1]),j=ee>=1):W.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),j=ee>=2);let ae=null,pe={};const Me=n.getParameter(n.SCISSOR_BOX),ze=n.getParameter(n.VIEWPORT),Le=new ut().fromArray(Me),K=new ut().fromArray(ze);function ne(L,le,X,Z){const fe=new Uint8Array(4),he=n.createTexture();n.bindTexture(L,he),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<X;Fe++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(le+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return he}const ge={};ge[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),ge[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ge[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(n.DEPTH_TEST),a.setFunc(Bi),De(!1),Ve(po),oe(n.CULL_FACE),N(qn);function oe(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function Te(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Ce(L,le){return d[L]!==le?(n.bindFramebuffer(L,le),d[L]=le,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=le),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=le),!0):!1}function Re(L,le){let X=p,Z=!1;if(L){X=u.get(le),X===void 0&&(X=[],u.set(le,X));const fe=L.textures;if(X.length!==fe.length||X[0]!==n.COLOR_ATTACHMENT0){for(let he=0,Fe=fe.length;he<Fe;he++)X[he]=n.COLOR_ATTACHMENT0+he;X.length=fe.length,Z=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,Z=!0);Z&&n.drawBuffers(X)}function je(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const Ge={[ci]:n.FUNC_ADD,[Ec]:n.FUNC_SUBTRACT,[wc]:n.FUNC_REVERSE_SUBTRACT};Ge[Tc]=n.MIN,Ge[Ac]=n.MAX;const tt={[Rc]:n.ZERO,[Cc]:n.ONE,[Pc]:n.SRC_COLOR,[Ks]:n.SRC_ALPHA,[Fc]:n.SRC_ALPHA_SATURATE,[Uc]:n.DST_COLOR,[Ic]:n.DST_ALPHA,[Lc]:n.ONE_MINUS_SRC_COLOR,[Qs]:n.ONE_MINUS_SRC_ALPHA,[Nc]:n.ONE_MINUS_DST_COLOR,[Dc]:n.ONE_MINUS_DST_ALPHA,[kc]:n.CONSTANT_COLOR,[Oc]:n.ONE_MINUS_CONSTANT_COLOR,[Bc]:n.CONSTANT_ALPHA,[zc]:n.ONE_MINUS_CONSTANT_ALPHA};function N(L,le,X,Z,fe,he,Fe,ht,Tt,Ze){if(L===qn){_===!0&&(Te(n.BLEND),_=!1);return}if(_===!1&&(oe(n.BLEND),_=!0),L!==bc){if(L!==m||Ze!==E){if((f!==ci||x!==ci)&&(n.blendEquation(n.FUNC_ADD),f=ci,x=ci),Ze)switch(L){case Ni:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mo:n.blendFunc(n.ONE,n.ONE);break;case go:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _o:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ni:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case go:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _o:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,b=null,C=null,T=null,A.set(0,0,0),P=0,m=L,E=Ze}return}fe=fe||le,he=he||X,Fe=Fe||Z,(le!==f||fe!==x)&&(n.blendEquationSeparate(Ge[le],Ge[fe]),f=le,x=fe),(X!==y||Z!==b||he!==C||Fe!==T)&&(n.blendFuncSeparate(tt[X],tt[Z],tt[he],tt[Fe]),y=X,b=Z,C=he,T=Fe),(ht.equals(A)===!1||Tt!==P)&&(n.blendColor(ht.r,ht.g,ht.b,Tt),A.copy(ht),P=Tt),m=L,E=!1}function Ut(L,le){L.side===kt?Te(n.CULL_FACE):oe(n.CULL_FACE);let X=L.side===Ot;le&&(X=!X),De(X),L.blending===Ni&&L.transparent===!1?N(qn):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const Z=L.stencilWrite;o.setTest(Z),Z&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),et(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function De(L){S!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),S=L)}function Ve(L){L!==Mc?(oe(n.CULL_FACE),L!==R&&(L===po?n.cullFace(n.BACK):L===yc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),R=L}function be(L){L!==V&&(j&&n.lineWidth(L),V=L)}function et(L,le,X){L?(oe(n.POLYGON_OFFSET_FILL),(B!==le||Y!==X)&&(n.polygonOffset(le,X),B=le,Y=X)):Te(n.POLYGON_OFFSET_FILL)}function Ee(L){L?oe(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function w(L){L===void 0&&(L=n.TEXTURE0+q-1),ae!==L&&(n.activeTexture(L),ae=L)}function v(L,le,X){X===void 0&&(ae===null?X=n.TEXTURE0+q-1:X=ae);let Z=pe[X];Z===void 0&&(Z={type:void 0,texture:void 0},pe[X]=Z),(Z.type!==L||Z.texture!==le)&&(ae!==X&&(n.activeTexture(X),ae=X),n.bindTexture(L,le||ge[L]),Z.type=L,Z.texture=le)}function k(){const L=pe[ae];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function D(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function H(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(L){Le.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Le.copy(L))}function de(L){K.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),K.copy(L))}function We(L,le){let X=c.get(le);X===void 0&&(X=new WeakMap,c.set(le,X));let Z=X.get(L);Z===void 0&&(Z=n.getUniformBlockIndex(le,L.name),X.set(L,Z))}function Ne(L,le){const Z=c.get(le).get(L);l.get(le)!==Z&&(n.uniformBlockBinding(le,Z,L.__bindingPointIndex),l.set(le,Z))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ae=null,pe={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,y=null,b=null,x=null,C=null,T=null,A=new Xe(0,0,0),P=0,E=!1,S=null,R=null,V=null,B=null,Y=null,Le.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:oe,disable:Te,bindFramebuffer:Ce,drawBuffers:Re,useProgram:je,setBlending:N,setMaterial:Ut,setFlipSided:De,setCullFace:Ve,setLineWidth:be,setPolygonOffset:et,setScissorTest:Ee,activeTexture:w,bindTexture:v,unbindTexture:k,compressedTexImage2D:D,compressedTexImage3D:O,texImage2D:ce,texImage3D:Se,updateUBOMapping:We,uniformBlockBinding:Ne,texStorage2D:we,texStorage3D:J,texSubImage2D:H,texSubImage3D:te,compressedTexSubImage2D:Q,compressedTexSubImage3D:$,scissor:Ae,viewport:de,reset:nt}}function dl(n,e,t,i){const r=Tm(i);switch(t){case Nl:return n*e;case kl:return n*e;case Ol:return n*e*2;case ds:return n*e/r.components*r.byteLength;case Va:return n*e/r.components*r.byteLength;case Bl:return n*e*2/r.components*r.byteLength;case Wa:return n*e*2/r.components*r.byteLength;case Fl:return n*e*3/r.components*r.byteLength;case nn:return n*e*4/r.components*r.byteLength;case Xa:return n*e*4/r.components*r.byteLength;case $r:case qr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Yr:case jr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ca:case ua:return Math.max(n,16)*Math.max(e,8)/4;case la:case ha:return Math.max(n,8)*Math.max(e,8)/2;case da:case fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ma:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ga:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case _a:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case va:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case xa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ya:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Sa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ba:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case wa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ta:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Aa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ra:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Kr:case Ca:case Pa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case zl:case La:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ia:case Da:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tm(n){switch(n){case Pn:case Il:return{byteLength:1,components:1};case dr:case Dl:case mi:return{byteLength:2,components:1};case Ha:case Ga:return{byteLength:2,components:4};case pi:case za:case Tn:return{byteLength:4,components:1};case Ul:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Am(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return p?new OffscreenCanvas(w,v):is("canvas")}function _(w,v,k){let D=1;const O=Ee(w);if((O.width>k||O.height>k)&&(D=k/Math.max(O.width,O.height)),D<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const H=Math.floor(D*O.width),te=Math.floor(D*O.height);d===void 0&&(d=g(H,te));const Q=v?g(H,te):d;return Q.width=H,Q.height=te,Q.getContext("2d").drawImage(w,0,0,H,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+H+"x"+te+")."),Q}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){n.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(w,v,k,D,O=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let H=v;if(v===n.RED&&(k===n.FLOAT&&(H=n.R32F),k===n.HALF_FLOAT&&(H=n.R16F),k===n.UNSIGNED_BYTE&&(H=n.R8)),v===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(H=n.R8UI),k===n.UNSIGNED_SHORT&&(H=n.R16UI),k===n.UNSIGNED_INT&&(H=n.R32UI),k===n.BYTE&&(H=n.R8I),k===n.SHORT&&(H=n.R16I),k===n.INT&&(H=n.R32I)),v===n.RG&&(k===n.FLOAT&&(H=n.RG32F),k===n.HALF_FLOAT&&(H=n.RG16F),k===n.UNSIGNED_BYTE&&(H=n.RG8)),v===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(H=n.RG8UI),k===n.UNSIGNED_SHORT&&(H=n.RG16UI),k===n.UNSIGNED_INT&&(H=n.RG32UI),k===n.BYTE&&(H=n.RG8I),k===n.SHORT&&(H=n.RG16I),k===n.INT&&(H=n.RG32I)),v===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(H=n.RGB8UI),k===n.UNSIGNED_SHORT&&(H=n.RGB16UI),k===n.UNSIGNED_INT&&(H=n.RGB32UI),k===n.BYTE&&(H=n.RGB8I),k===n.SHORT&&(H=n.RGB16I),k===n.INT&&(H=n.RGB32I)),v===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),k===n.UNSIGNED_INT&&(H=n.RGBA32UI),k===n.BYTE&&(H=n.RGBA8I),k===n.SHORT&&(H=n.RGBA16I),k===n.INT&&(H=n.RGBA32I)),v===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),v===n.RGBA){const te=O?fs:$e.getTransfer(D);k===n.FLOAT&&(H=n.RGBA32F),k===n.HALF_FLOAT&&(H=n.RGBA16F),k===n.UNSIGNED_BYTE&&(H=te===Je?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function x(w,v){let k;return w?v===null||v===pi||v===Gi?k=n.DEPTH24_STENCIL8:v===Tn?k=n.DEPTH32F_STENCIL8:v===dr&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===pi||v===Gi?k=n.DEPTH_COMPONENT24:v===Tn?k=n.DEPTH_COMPONENT32F:v===dr&&(k=n.DEPTH_COMPONENT16),k}function C(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Et&&w.minFilter!==dn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function T(w){const v=w.target;v.removeEventListener("dispose",T),P(v),v.isVideoTexture&&h.delete(v)}function A(w){const v=w.target;v.removeEventListener("dispose",A),S(v)}function P(w){const v=i.get(w);if(v.__webglInit===void 0)return;const k=w.source,D=u.get(k);if(D){const O=D[v.__cacheKey];O.usedTimes--,O.usedTimes===0&&E(w),Object.keys(D).length===0&&u.delete(k)}i.remove(w)}function E(w){const v=i.get(w);n.deleteTexture(v.__webglTexture);const k=w.source,D=u.get(k);delete D[v.__cacheKey],a.memory.textures--}function S(w){const v=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(v.__webglFramebuffer[D]))for(let O=0;O<v.__webglFramebuffer[D].length;O++)n.deleteFramebuffer(v.__webglFramebuffer[D][O]);else n.deleteFramebuffer(v.__webglFramebuffer[D]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[D])}else{if(Array.isArray(v.__webglFramebuffer))for(let D=0;D<v.__webglFramebuffer.length;D++)n.deleteFramebuffer(v.__webglFramebuffer[D]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let D=0;D<v.__webglColorRenderbuffer.length;D++)v.__webglColorRenderbuffer[D]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[D]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=w.textures;for(let D=0,O=k.length;D<O;D++){const H=i.get(k[D]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),a.memory.textures--),i.remove(k[D])}i.remove(w)}let R=0;function V(){R=0}function B(){const w=R;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),R+=1,w}function Y(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function q(w,v){const k=i.get(w);if(w.isVideoTexture&&be(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const D=w.image;if(D===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,w,v);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+v)}function j(w,v){const k=i.get(w);if(w.version>0&&k.__version!==w.version){K(k,w,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+v)}function ee(w,v){const k=i.get(w);if(w.version>0&&k.__version!==w.version){K(k,w,v);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+v)}function W(w,v){const k=i.get(w);if(w.version>0&&k.__version!==w.version){ne(k,w,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+v)}const ae={[ts]:n.REPEAT,[ui]:n.CLAMP_TO_EDGE,[oa]:n.MIRRORED_REPEAT},pe={[Et]:n.NEAREST,[Kc]:n.NEAREST_MIPMAP_NEAREST,[Er]:n.NEAREST_MIPMAP_LINEAR,[dn]:n.LINEAR,[vs]:n.LINEAR_MIPMAP_NEAREST,[di]:n.LINEAR_MIPMAP_LINEAR},Me={[eh]:n.NEVER,[ah]:n.ALWAYS,[th]:n.LESS,[Gl]:n.LEQUAL,[nh]:n.EQUAL,[sh]:n.GEQUAL,[ih]:n.GREATER,[rh]:n.NOTEQUAL};function ze(w,v){if(v.type===Tn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===dn||v.magFilter===vs||v.magFilter===Er||v.magFilter===di||v.minFilter===dn||v.minFilter===vs||v.minFilter===Er||v.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,ae[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ae[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ae[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,pe[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,pe[v.minFilter]),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Et||v.minFilter!==Er&&v.minFilter!==di||v.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Le(w,v){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",T));const D=v.source;let O=u.get(D);O===void 0&&(O={},u.set(D,O));const H=Y(v);if(H!==w.__cacheKey){O[H]===void 0&&(O[H]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),O[H].usedTimes++;const te=O[w.__cacheKey];te!==void 0&&(O[w.__cacheKey].usedTimes--,te.usedTimes===0&&E(v)),w.__cacheKey=H,w.__webglTexture=O[H].texture}return k}function K(w,v,k){let D=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(D=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(D=n.TEXTURE_3D);const O=Le(w,v),H=v.source;t.bindTexture(D,w.__webglTexture,n.TEXTURE0+k);const te=i.get(H);if(H.version!==te.__version||O===!0){t.activeTexture(n.TEXTURE0+k);const Q=$e.getPrimaries($e.workingColorSpace),$=v.colorSpace===Xn?null:$e.getPrimaries(v.colorSpace),we=v.colorSpace===Xn||Q===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let J=_(v.image,!1,r.maxTextureSize);J=et(v,J);const ce=s.convert(v.format,v.colorSpace),Se=s.convert(v.type);let Ae=b(v.internalFormat,ce,Se,v.colorSpace,v.isVideoTexture);ze(D,v);let de;const We=v.mipmaps,Ne=v.isVideoTexture!==!0,nt=te.__version===void 0||O===!0,L=H.dataReady,le=C(v,J);if(v.isDepthTexture)Ae=x(v.format===Vi,v.type),nt&&(Ne?t.texStorage2D(n.TEXTURE_2D,1,Ae,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,Ae,J.width,J.height,0,ce,Se,null));else if(v.isDataTexture)if(We.length>0){Ne&&nt&&t.texStorage2D(n.TEXTURE_2D,le,Ae,We[0].width,We[0].height);for(let X=0,Z=We.length;X<Z;X++)de=We[X],Ne?L&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,de.width,de.height,ce,Se,de.data):t.texImage2D(n.TEXTURE_2D,X,Ae,de.width,de.height,0,ce,Se,de.data);v.generateMipmaps=!1}else Ne?(nt&&t.texStorage2D(n.TEXTURE_2D,le,Ae,J.width,J.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,ce,Se,J.data)):t.texImage2D(n.TEXTURE_2D,0,Ae,J.width,J.height,0,ce,Se,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ne&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,Ae,We[0].width,We[0].height,J.depth);for(let X=0,Z=We.length;X<Z;X++)if(de=We[X],v.format!==nn)if(ce!==null)if(Ne){if(L)if(v.layerUpdates.size>0){const fe=dl(de.width,de.height,v.format,v.type);for(const he of v.layerUpdates){const Fe=de.data.subarray(he*fe/de.data.BYTES_PER_ELEMENT,(he+1)*fe/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,he,de.width,de.height,1,ce,Fe)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,de.width,de.height,J.depth,ce,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Ae,de.width,de.height,J.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,de.width,de.height,J.depth,ce,Se,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,Ae,de.width,de.height,J.depth,0,ce,Se,de.data)}else{Ne&&nt&&t.texStorage2D(n.TEXTURE_2D,le,Ae,We[0].width,We[0].height);for(let X=0,Z=We.length;X<Z;X++)de=We[X],v.format!==nn?ce!==null?Ne?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,de.width,de.height,ce,de.data):t.compressedTexImage2D(n.TEXTURE_2D,X,Ae,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?L&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,de.width,de.height,ce,Se,de.data):t.texImage2D(n.TEXTURE_2D,X,Ae,de.width,de.height,0,ce,Se,de.data)}else if(v.isDataArrayTexture)if(Ne){if(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,Ae,J.width,J.height,J.depth),L)if(v.layerUpdates.size>0){const X=dl(J.width,J.height,v.format,v.type);for(const Z of v.layerUpdates){const fe=J.data.subarray(Z*X/J.data.BYTES_PER_ELEMENT,(Z+1)*X/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,J.width,J.height,1,ce,Se,fe)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ce,Se,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,J.width,J.height,J.depth,0,ce,Se,J.data);else if(v.isData3DTexture)Ne?(nt&&t.texStorage3D(n.TEXTURE_3D,le,Ae,J.width,J.height,J.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ce,Se,J.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,J.width,J.height,J.depth,0,ce,Se,J.data);else if(v.isFramebufferTexture){if(nt)if(Ne)t.texStorage2D(n.TEXTURE_2D,le,Ae,J.width,J.height);else{let X=J.width,Z=J.height;for(let fe=0;fe<le;fe++)t.texImage2D(n.TEXTURE_2D,fe,Ae,X,Z,0,ce,Se,null),X>>=1,Z>>=1}}else if(We.length>0){if(Ne&&nt){const X=Ee(We[0]);t.texStorage2D(n.TEXTURE_2D,le,Ae,X.width,X.height)}for(let X=0,Z=We.length;X<Z;X++)de=We[X],Ne?L&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ce,Se,de):t.texImage2D(n.TEXTURE_2D,X,Ae,ce,Se,de);v.generateMipmaps=!1}else if(Ne){if(nt){const X=Ee(J);t.texStorage2D(n.TEXTURE_2D,le,Ae,X.width,X.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,Se,J)}else t.texImage2D(n.TEXTURE_2D,0,Ae,ce,Se,J);m(v)&&f(D),te.__version=H.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ne(w,v,k){if(v.image.length!==6)return;const D=Le(w,v),O=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+k);const H=i.get(O);if(O.version!==H.__version||D===!0){t.activeTexture(n.TEXTURE0+k);const te=$e.getPrimaries($e.workingColorSpace),Q=v.colorSpace===Xn?null:$e.getPrimaries(v.colorSpace),$=v.colorSpace===Xn||te===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const we=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,ce=[];for(let Z=0;Z<6;Z++)!we&&!J?ce[Z]=_(v.image[Z],!0,r.maxCubemapSize):ce[Z]=J?v.image[Z].image:v.image[Z],ce[Z]=et(v,ce[Z]);const Se=ce[0],Ae=s.convert(v.format,v.colorSpace),de=s.convert(v.type),We=b(v.internalFormat,Ae,de,v.colorSpace),Ne=v.isVideoTexture!==!0,nt=H.__version===void 0||D===!0,L=O.dataReady;let le=C(v,Se);ze(n.TEXTURE_CUBE_MAP,v);let X;if(we){Ne&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,le,We,Se.width,Se.height);for(let Z=0;Z<6;Z++){X=ce[Z].mipmaps;for(let fe=0;fe<X.length;fe++){const he=X[fe];v.format!==nn?Ae!==null?Ne?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,0,0,he.width,he.height,Ae,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,We,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,0,0,he.width,he.height,Ae,de,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,We,he.width,he.height,0,Ae,de,he.data)}}}else{if(X=v.mipmaps,Ne&&nt){X.length>0&&le++;const Z=Ee(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,le,We,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(J){Ne?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ce[Z].width,ce[Z].height,Ae,de,ce[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,We,ce[Z].width,ce[Z].height,0,Ae,de,ce[Z].data);for(let fe=0;fe<X.length;fe++){const Fe=X[fe].image[Z].image;Ne?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,0,0,Fe.width,Fe.height,Ae,de,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,We,Fe.width,Fe.height,0,Ae,de,Fe.data)}}else{Ne?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ae,de,ce[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,We,Ae,de,ce[Z]);for(let fe=0;fe<X.length;fe++){const he=X[fe];Ne?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,0,0,Ae,de,he.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,We,Ae,de,he.image[Z])}}}m(v)&&f(n.TEXTURE_CUBE_MAP),H.__version=O.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ge(w,v,k,D,O,H){const te=s.convert(k.format,k.colorSpace),Q=s.convert(k.type),$=b(k.internalFormat,te,Q,k.colorSpace),we=i.get(v),J=i.get(k);if(J.__renderTarget=v,!we.__hasExternalTextures){const ce=Math.max(1,v.width>>H),Se=Math.max(1,v.height>>H);O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?t.texImage3D(O,H,$,ce,Se,v.depth,0,te,Q,null):t.texImage2D(O,H,$,ce,Se,0,te,Q,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),Ve(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,D,O,J.__webglTexture,0,De(v)):(O===n.TEXTURE_2D||O>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,D,O,J.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(w,v,k){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer){const D=v.depthTexture,O=D&&D.isDepthTexture?D.type:null,H=x(v.stencilBuffer,O),te=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=De(v);Ve(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,H,v.width,v.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,H,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,H,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,w)}else{const D=v.textures;for(let O=0;O<D.length;O++){const H=D[O],te=s.convert(H.format,H.colorSpace),Q=s.convert(H.type),$=b(H.internalFormat,te,Q,H.colorSpace),we=De(v);k&&Ve(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,$,v.width,v.height):Ve(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,$,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,$,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const D=i.get(v.depthTexture);D.__renderTarget=v,(!D.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);const O=D.__webglTexture,H=De(v);if(v.depthTexture.format===Fi)Ve(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0);else if(v.depthTexture.format===Vi)Ve(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function Ce(w){const v=i.get(w),k=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const D=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),D){const O=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,D.removeEventListener("dispose",O)};D.addEventListener("dispose",O),v.__depthDisposeCallback=O}v.__boundDepthTexture=D}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Te(v.__webglFramebuffer,w)}else if(k){v.__webglDepthbuffer=[];for(let D=0;D<6;D++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[D]),v.__webglDepthbuffer[D]===void 0)v.__webglDepthbuffer[D]=n.createRenderbuffer(),oe(v.__webglDepthbuffer[D],w,!1);else{const O=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer[D];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,H)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),oe(v.__webglDepthbuffer,w,!1);else{const D=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,O=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,O),n.framebufferRenderbuffer(n.FRAMEBUFFER,D,n.RENDERBUFFER,O)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(w,v,k){const D=i.get(w);v!==void 0&&ge(D.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Ce(w)}function je(w){const v=w.texture,k=i.get(w),D=i.get(v);w.addEventListener("dispose",A);const O=w.textures,H=w.isWebGLCubeRenderTarget===!0,te=O.length>1;if(te||(D.__webglTexture===void 0&&(D.__webglTexture=n.createTexture()),D.__version=v.version,a.memory.textures++),H){k.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[Q]=[];for(let $=0;$<v.mipmaps.length;$++)k.__webglFramebuffer[Q][$]=n.createFramebuffer()}else k.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let Q=0;Q<v.mipmaps.length;Q++)k.__webglFramebuffer[Q]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(te)for(let Q=0,$=O.length;Q<$;Q++){const we=i.get(O[Q]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&Ve(w)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Q=0;Q<O.length;Q++){const $=O[Q];k.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[Q]);const we=s.convert($.format,$.colorSpace),J=s.convert($.type),ce=b($.internalFormat,we,J,$.colorSpace,w.isXRRenderTarget===!0),Se=De(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,ce,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,k.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(k.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture),ze(n.TEXTURE_CUBE_MAP,v);for(let Q=0;Q<6;Q++)if(v.mipmaps&&v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)ge(k.__webglFramebuffer[Q][$],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,$);else ge(k.__webglFramebuffer[Q],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(v)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){for(let Q=0,$=O.length;Q<$;Q++){const we=O[Q],J=i.get(we);t.bindTexture(n.TEXTURE_2D,J.__webglTexture),ze(n.TEXTURE_2D,we),ge(k.__webglFramebuffer,w,we,n.COLOR_ATTACHMENT0+Q,n.TEXTURE_2D,0),m(we)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let Q=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Q=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,D.__webglTexture),ze(Q,v),v.mipmaps&&v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)ge(k.__webglFramebuffer[$],w,v,n.COLOR_ATTACHMENT0,Q,$);else ge(k.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,Q,0);m(v)&&f(Q),t.unbindTexture()}w.depthBuffer&&Ce(w)}function Ge(w){const v=w.textures;for(let k=0,D=v.length;k<D;k++){const O=v[k];if(m(O)){const H=y(w),te=i.get(O).__webglTexture;t.bindTexture(H,te),f(H),t.unbindTexture()}}}const tt=[],N=[];function Ut(w){if(w.samples>0){if(Ve(w)===!1){const v=w.textures,k=w.width,D=w.height;let O=n.COLOR_BUFFER_BIT;const H=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=i.get(w),Q=v.length>1;if(Q)for(let $=0;$<v.length;$++)t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let $=0;$<v.length;$++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(O|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(O|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,te.__webglColorRenderbuffer[$]);const we=i.get(v[$]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,we,0)}n.blitFramebuffer(0,0,k,D,0,0,k,D,O,n.NEAREST),l===!0&&(tt.length=0,N.length=0,tt.push(n.COLOR_ATTACHMENT0+$),w.depthBuffer&&w.resolveDepthBuffer===!1&&(tt.push(H),N.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let $=0;$<v.length;$++){t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,te.__webglColorRenderbuffer[$]);const we=i.get(v[$]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.TEXTURE_2D,we,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function De(w){return Math.min(r.maxSamples,w.samples)}function Ve(w){const v=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function be(w){const v=a.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function et(w,v){const k=w.colorSpace,D=w.format,O=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==qi&&k!==Xn&&($e.getTransfer(k)===Je?(D!==nn||O!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function Ee(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=V,this.setTexture2D=q,this.setTexture2DArray=j,this.setTexture3D=ee,this.setTextureCube=W,this.rebindTextures=Re,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ve}function Rm(n,e){function t(i,r=Xn){let s;const a=$e.getTransfer(r);if(i===Pn)return n.UNSIGNED_BYTE;if(i===Ha)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ga)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ul)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Il)return n.BYTE;if(i===Dl)return n.SHORT;if(i===dr)return n.UNSIGNED_SHORT;if(i===za)return n.INT;if(i===pi)return n.UNSIGNED_INT;if(i===Tn)return n.FLOAT;if(i===mi)return n.HALF_FLOAT;if(i===Nl)return n.ALPHA;if(i===Fl)return n.RGB;if(i===nn)return n.RGBA;if(i===kl)return n.LUMINANCE;if(i===Ol)return n.LUMINANCE_ALPHA;if(i===Fi)return n.DEPTH_COMPONENT;if(i===Vi)return n.DEPTH_STENCIL;if(i===ds)return n.RED;if(i===Va)return n.RED_INTEGER;if(i===Bl)return n.RG;if(i===Wa)return n.RG_INTEGER;if(i===Xa)return n.RGBA_INTEGER;if(i===$r||i===qr||i===Yr||i===jr)if(a===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===$r)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===$r)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===la||i===ca||i===ha||i===ua)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===la)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ca)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ha)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ua)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===da||i===fa||i===pa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===da||i===fa)return a===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===pa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ma||i===ga||i===_a||i===va||i===xa||i===Ma||i===ya||i===Sa||i===ba||i===Ea||i===wa||i===Ta||i===Aa||i===Ra)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ma)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ga)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_a)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===va)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ma)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ya)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ba)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ea)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ta)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Aa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ra)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kr||i===Ca||i===Pa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Kr)return a===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ca)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zl||i===La||i===Ia||i===Da)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Kr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===La)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ia)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Da)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Cm extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class or extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pm={type:"move"};class Xs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new or;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Lm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Im=`
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

}`;class Dm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Pt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new sn({vertexShader:Lm,fragmentShader:Im,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new un(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Um extends Yi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const _=new Dm,m=t.getContextAttributes();let f=null,y=null;const b=[],x=[],C=new He;let T=null;const A=new en;A.viewport=new ut;const P=new en;P.viewport=new ut;const E=[A,P],S=new Cm;let R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=b[K];return ne===void 0&&(ne=new Xs,b[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=b[K];return ne===void 0&&(ne=new Xs,b[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=b[K];return ne===void 0&&(ne=new Xs,b[K]=ne),ne.getHandSpace()};function B(K){const ne=x.indexOf(K.inputSource);if(ne===-1)return;const ge=b[ne];ge!==void 0&&(ge.update(K.inputSource,K.frame,c||a),ge.dispatchEvent({type:K.type,data:K.inputSource}))}function Y(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",q);for(let K=0;K<b.length;K++){const ne=x[K];ne!==null&&(x[K]=null,b[K].disconnect(ne))}R=null,V=null,_.reset(),e.setRenderTarget(f),p=null,u=null,d=null,r=null,y=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ln(p.framebufferWidth,p.framebufferHeight,{format:nn,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,ge=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?Vi:Fi,ge=m.stencil?Gi:pi);const Te={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};d=new XRWebGLBinding(r,t),u=d.createProjectionLayer(Te),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Ln(u.textureWidth,u.textureHeight,{format:nn,type:Pn,depthTexture:new ec(u.textureWidth,u.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(K){for(let ne=0;ne<K.removed.length;ne++){const ge=K.removed[ne],oe=x.indexOf(ge);oe>=0&&(x[oe]=null,b[oe].disconnect(ge))}for(let ne=0;ne<K.added.length;ne++){const ge=K.added[ne];let oe=x.indexOf(ge);if(oe===-1){for(let Ce=0;Ce<b.length;Ce++)if(Ce>=x.length){x.push(ge),oe=Ce;break}else if(x[Ce]===null){x[Ce]=ge,oe=Ce;break}if(oe===-1)break}const Te=b[oe];Te&&Te.connect(ge)}}const j=new F,ee=new F;function W(K,ne,ge){j.setFromMatrixPosition(ne.matrixWorld),ee.setFromMatrixPosition(ge.matrixWorld);const oe=j.distanceTo(ee),Te=ne.projectionMatrix.elements,Ce=ge.projectionMatrix.elements,Re=Te[14]/(Te[10]-1),je=Te[14]/(Te[10]+1),Ge=(Te[9]+1)/Te[5],tt=(Te[9]-1)/Te[5],N=(Te[8]-1)/Te[0],Ut=(Ce[8]+1)/Ce[0],De=Re*N,Ve=Re*Ut,be=oe/(-N+Ut),et=be*-N;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(et),K.translateZ(be),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Te[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Ee=Re+be,w=je+be,v=De-et,k=Ve+(oe-et),D=Ge*je/w*Ee,O=tt*je/w*Ee;K.projectionMatrix.makePerspective(v,k,D,O,Ee,w),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ae(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ne=K.near,ge=K.far;_.texture!==null&&(_.depthNear>0&&(ne=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),S.near=P.near=A.near=ne,S.far=P.far=A.far=ge,(R!==S.near||V!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,V=S.far),A.layers.mask=K.layers.mask|2,P.layers.mask=K.layers.mask|4,S.layers.mask=A.layers.mask|P.layers.mask;const oe=K.parent,Te=S.cameras;ae(S,oe);for(let Ce=0;Ce<Te.length;Ce++)ae(Te[Ce],oe);Te.length===2?W(S,A,P):S.projectionMatrix.copy(A.projectionMatrix),pe(K,S,oe)};function pe(K,ne,ge){ge===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(ge.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=fr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Me=null;function ze(K,ne){if(h=ne.getViewerPose(c||a),g=ne,h!==null){const ge=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let oe=!1;ge.length!==S.cameras.length&&(S.cameras.length=0,oe=!0);for(let Ce=0;Ce<ge.length;Ce++){const Re=ge[Ce];let je=null;if(p!==null)je=p.getViewport(Re);else{const tt=d.getViewSubImage(u,Re);je=tt.viewport,Ce===0&&(e.setRenderTargetTextures(y,tt.colorTexture,u.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(y))}let Ge=E[Ce];Ge===void 0&&(Ge=new en,Ge.layers.enable(Ce),Ge.viewport=new ut,E[Ce]=Ge),Ge.matrix.fromArray(Re.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Re.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(je.x,je.y,je.width,je.height),Ce===0&&(S.matrix.copy(Ge.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),oe===!0&&S.cameras.push(Ge)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ce=d.getDepthInformation(ge[0]);Ce&&Ce.isValid&&Ce.texture&&_.init(e,Ce,r.renderState)}}for(let ge=0;ge<b.length;ge++){const oe=x[ge],Te=b[ge];oe!==null&&Te!==void 0&&Te.update(oe,ne,c||a)}Me&&Me(K,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Le=new Jl;Le.setAnimationLoop(ze),this.setAnimationLoop=function(K){Me=K},this.dispose=function(){}}}const ri=new In,Nm=new ct;function Fm(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Kl(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,y,b,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ot&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ot&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f),b=y.envMap,x=y.envMapRotation;b&&(m.envMap.value=b,ri.copy(x),ri.x*=-1,ri.y*=-1,ri.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),m.envMapRotation.value.setFromMatrix4(Nm.makeRotationFromEuler(ri)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ot&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function km(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const x=b.program;i.uniformBlockBinding(y,x)}function c(y,b){let x=r[y.id];x===void 0&&(g(y),x=h(y),r[y.id]=x,y.addEventListener("dispose",m));const C=b.program;i.updateUBOMapping(y,C);const T=e.render.frame;s[y.id]!==T&&(u(y),s[y.id]=T)}function h(y){const b=d();y.__bindingPointIndex=b;const x=n.createBuffer(),C=y.__size,T=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,x),x}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const b=r[y.id],x=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,A=x.length;T<A;T++){const P=Array.isArray(x[T])?x[T]:[x[T]];for(let E=0,S=P.length;E<S;E++){const R=P[E];if(p(R,T,E,C)===!0){const V=R.__offset,B=Array.isArray(R.value)?R.value:[R.value];let Y=0;for(let q=0;q<B.length;q++){const j=B[q],ee=_(j);typeof j=="number"||typeof j=="boolean"?(R.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,V+Y,R.__data)):j.isMatrix3?(R.__data[0]=j.elements[0],R.__data[1]=j.elements[1],R.__data[2]=j.elements[2],R.__data[3]=0,R.__data[4]=j.elements[3],R.__data[5]=j.elements[4],R.__data[6]=j.elements[5],R.__data[7]=0,R.__data[8]=j.elements[6],R.__data[9]=j.elements[7],R.__data[10]=j.elements[8],R.__data[11]=0):(j.toArray(R.__data,Y),Y+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,b,x,C){const T=y.value,A=b+"_"+x;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const P=C[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(y){const b=y.uniforms;let x=0;const C=16;for(let A=0,P=b.length;A<P;A++){const E=Array.isArray(b[A])?b[A]:[b[A]];for(let S=0,R=E.length;S<R;S++){const V=E[S],B=Array.isArray(V.value)?V.value:[V.value];for(let Y=0,q=B.length;Y<q;Y++){const j=B[Y],ee=_(j),W=x%C,ae=W%ee.boundary,pe=W+ae;x+=ae,pe!==0&&C-pe<ee.storage&&(x+=C-pe),V.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=ee.storage}}}const T=x%C;return T>0&&(x+=C-T),y.__size=x,y.__cache={},this}function _(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){const b=y.target;b.removeEventListener("dispose",m);const x=a.indexOf(b.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function f(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Om{constructor(e={}){const{canvas:t=Eh(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this.toneMapping=Yn,this.toneMappingExposure=1;const x=this;let C=!1,T=0,A=0,P=null,E=-1,S=null;const R=new ut,V=new ut;let B=null;const Y=new Xe(0);let q=0,j=t.width,ee=t.height,W=1,ae=null,pe=null;const Me=new ut(0,0,j,ee),ze=new ut(0,0,j,ee);let Le=!1;const K=new Ya;let ne=!1,ge=!1;const oe=new ct,Te=new ct,Ce=new F,Re=new ut,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function tt(){return P===null?W:1}let N=i;function Ut(M,I){return t.getContext(M,I)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ba}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",he,!1),N===null){const I="webgl2";if(N=Ut(I,M),N===null)throw Ut(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let De,Ve,be,et,Ee,w,v,k,D,O,H,te,Q,$,we,J,ce,Se,Ae,de,We,Ne,nt,L;function le(){De=new Vf(N),De.init(),Ne=new Rm(N,De),Ve=new kf(N,De,e,Ne),be=new wm(N,De),Ve.reverseDepthBuffer&&u&&be.buffers.depth.setReversed(!0),et=new $f(N),Ee=new hm,w=new Am(N,De,be,Ee,Ve,Ne,et),v=new Bf(x),k=new Gf(x),D=new Zh(N),nt=new Nf(N,D),O=new Wf(N,D,et,nt),H=new Yf(N,O,D,et),Ae=new qf(N,Ve,w),J=new Of(Ee),te=new cm(x,v,k,De,Ve,nt,J),Q=new Fm(x,Ee),$=new dm,we=new vm(De),Se=new Uf(x,v,k,be,H,p,l),ce=new bm(x,H,Ve),L=new km(N,et,Ve,be),de=new Ff(N,De,et),We=new Xf(N,De,et),et.programs=te.programs,x.capabilities=Ve,x.extensions=De,x.properties=Ee,x.renderLists=$,x.shadowMap=ce,x.state=be,x.info=et}le();const X=new Um(x,N);this.xr=X,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=De.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=De.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(M){M!==void 0&&(W=M,this.setSize(j,ee,!1))},this.getSize=function(M){return M.set(j,ee)},this.setSize=function(M,I,z=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,ee=I,t.width=Math.floor(M*W),t.height=Math.floor(I*W),z===!0&&(t.style.width=M+"px",t.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(j*W,ee*W).floor()},this.setDrawingBufferSize=function(M,I,z){j=M,ee=I,W=z,t.width=Math.floor(M*z),t.height=Math.floor(I*z),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(Me)},this.setViewport=function(M,I,z,G){M.isVector4?Me.set(M.x,M.y,M.z,M.w):Me.set(M,I,z,G),be.viewport(R.copy(Me).multiplyScalar(W).round())},this.getScissor=function(M){return M.copy(ze)},this.setScissor=function(M,I,z,G){M.isVector4?ze.set(M.x,M.y,M.z,M.w):ze.set(M,I,z,G),be.scissor(V.copy(ze).multiplyScalar(W).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(M){be.setScissorTest(Le=M)},this.setOpaqueSort=function(M){ae=M},this.setTransparentSort=function(M){pe=M},this.getClearColor=function(M){return M.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(M=!0,I=!0,z=!0){let G=0;if(M){let U=!1;if(P!==null){const ie=P.texture.format;U=ie===Xa||ie===Wa||ie===Va}if(U){const ie=P.texture.type,ue=ie===Pn||ie===pi||ie===dr||ie===Gi||ie===Ha||ie===Ga,_e=Se.getClearColor(),ve=Se.getClearAlpha(),Ie=_e.r,ke=_e.g,xe=_e.b;ue?(g[0]=Ie,g[1]=ke,g[2]=xe,g[3]=ve,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Ie,_[1]=ke,_[2]=xe,_[3]=ve,N.clearBufferiv(N.COLOR,0,_))}else G|=N.COLOR_BUFFER_BIT}I&&(G|=N.DEPTH_BUFFER_BIT),z&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",he,!1),$.dispose(),we.dispose(),Ee.dispose(),v.dispose(),k.dispose(),H.dispose(),nt.dispose(),L.dispose(),te.dispose(),X.dispose(),X.removeEventListener("sessionstart",so),X.removeEventListener("sessionend",ao),Zn.stop()};function Z(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const M=et.autoReset,I=ce.enabled,z=ce.autoUpdate,G=ce.needsUpdate,U=ce.type;le(),et.autoReset=M,ce.enabled=I,ce.autoUpdate=z,ce.needsUpdate=G,ce.type=U}function he(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Fe(M){const I=M.target;I.removeEventListener("dispose",Fe),ht(I)}function ht(M){Tt(M),Ee.remove(M)}function Tt(M){const I=Ee.get(M).programs;I!==void 0&&(I.forEach(function(z){te.releaseProgram(z)}),M.isShaderMaterial&&te.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,z,G,U,ie){I===null&&(I=je);const ue=U.isMesh&&U.matrixWorld.determinant()<0,_e=_c(M,I,z,G,U);be.setMaterial(G,ue);let ve=z.index,Ie=1;if(G.wireframe===!0){if(ve=O.getWireframeAttribute(z),ve===void 0)return;Ie=2}const ke=z.drawRange,xe=z.attributes.position;let Ye=ke.start*Ie,it=(ke.start+ke.count)*Ie;ie!==null&&(Ye=Math.max(Ye,ie.start*Ie),it=Math.min(it,(ie.start+ie.count)*Ie)),ve!==null?(Ye=Math.max(Ye,0),it=Math.min(it,ve.count)):xe!=null&&(Ye=Math.max(Ye,0),it=Math.min(it,xe.count));const at=it-Ye;if(at<0||at===1/0)return;nt.setup(U,G,_e,z,ve);let Nt,Ke=de;if(ve!==null&&(Nt=D.get(ve),Ke=We,Ke.setIndex(Nt)),U.isMesh)G.wireframe===!0?(be.setLineWidth(G.wireframeLinewidth*tt()),Ke.setMode(N.LINES)):Ke.setMode(N.TRIANGLES);else if(U.isLine){let ye=G.linewidth;ye===void 0&&(ye=1),be.setLineWidth(ye*tt()),U.isLineSegments?Ke.setMode(N.LINES):U.isLineLoop?Ke.setMode(N.LINE_LOOP):Ke.setMode(N.LINE_STRIP)}else U.isPoints?Ke.setMode(N.POINTS):U.isSprite&&Ke.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ke.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))Ke.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const ye=U._multiDrawStarts,gn=U._multiDrawCounts,Qe=U._multiDrawCount,Kt=ve?D.get(ve).bytesPerElement:1,_i=Ee.get(G).currentProgram.getUniforms();for(let Bt=0;Bt<Qe;Bt++)_i.setValue(N,"_gl_DrawID",Bt),Ke.render(ye[Bt]/Kt,gn[Bt])}else if(U.isInstancedMesh)Ke.renderInstances(Ye,at,U.count);else if(z.isInstancedBufferGeometry){const ye=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,gn=Math.min(z.instanceCount,ye);Ke.renderInstances(Ye,at,gn)}else Ke.render(Ye,at)};function Ze(M,I,z){M.transparent===!0&&M.side===kt&&M.forceSinglePass===!1?(M.side=Ot,M.needsUpdate=!0,br(M,I,z),M.side=Kn,M.needsUpdate=!0,br(M,I,z),M.side=kt):br(M,I,z)}this.compile=function(M,I,z=null){z===null&&(z=M),f=we.get(z),f.init(I),b.push(f),z.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),M!==z&&M.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const G=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ie=U.material;if(ie)if(Array.isArray(ie))for(let ue=0;ue<ie.length;ue++){const _e=ie[ue];Ze(_e,z,U),G.add(_e)}else Ze(ie,z,U),G.add(ie)}),b.pop(),f=null,G},this.compileAsync=function(M,I,z=null){const G=this.compile(M,I,z);return new Promise(U=>{function ie(){if(G.forEach(function(ue){Ee.get(ue).currentProgram.isReady()&&G.delete(ue)}),G.size===0){U(M);return}setTimeout(ie,10)}De.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let jt=null;function mn(M){jt&&jt(M)}function so(){Zn.stop()}function ao(){Zn.start()}const Zn=new Jl;Zn.setAnimationLoop(mn),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(M){jt=M,X.setAnimationLoop(M),M===null?Zn.stop():Zn.start()},X.addEventListener("sessionstart",so),X.addEventListener("sessionend",ao),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(I),I=X.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,I,P),f=we.get(M,b.length),f.init(I),b.push(f),Te.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),K.setFromProjectionMatrix(Te),ge=this.localClippingEnabled,ne=J.init(this.clippingPlanes,ge),m=$.get(M,y.length),m.init(),y.push(m),X.enabled===!0&&X.isPresenting===!0){const ie=x.xr.getDepthSensingMesh();ie!==null&&_s(ie,I,-1/0,x.sortObjects)}_s(M,I,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ae,pe),Ge=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Ge&&Se.addToRenderList(m,M),this.info.render.frame++,ne===!0&&J.beginShadows();const z=f.state.shadowsArray;ce.render(z,M,I),ne===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,U=m.transmissive;if(f.setupLights(),I.isArrayCamera){const ie=I.cameras;if(U.length>0)for(let ue=0,_e=ie.length;ue<_e;ue++){const ve=ie[ue];lo(G,U,M,ve)}Ge&&Se.render(M);for(let ue=0,_e=ie.length;ue<_e;ue++){const ve=ie[ue];oo(m,M,ve,ve.viewport)}}else U.length>0&&lo(G,U,M,I),Ge&&Se.render(M),oo(m,M,I);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(x,M,I),nt.resetDefaultState(),E=-1,S=null,b.pop(),b.length>0?(f=b[b.length-1],ne===!0&&J.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function _s(M,I,z,G){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||K.intersectsSprite(M)){G&&Re.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Te);const ue=H.update(M),_e=M.material;_e.visible&&m.push(M,ue,_e,z,Re.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||K.intersectsObject(M))){const ue=H.update(M),_e=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Re.copy(M.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Re.copy(ue.boundingSphere.center)),Re.applyMatrix4(M.matrixWorld).applyMatrix4(Te)),Array.isArray(_e)){const ve=ue.groups;for(let Ie=0,ke=ve.length;Ie<ke;Ie++){const xe=ve[Ie],Ye=_e[xe.materialIndex];Ye&&Ye.visible&&m.push(M,ue,Ye,z,Re.z,xe)}}else _e.visible&&m.push(M,ue,_e,z,Re.z,null)}}const ie=M.children;for(let ue=0,_e=ie.length;ue<_e;ue++)_s(ie[ue],I,z,G)}function oo(M,I,z,G){const U=M.opaque,ie=M.transmissive,ue=M.transparent;f.setupLightsView(z),ne===!0&&J.setGlobalState(x.clippingPlanes,z),G&&be.viewport(R.copy(G)),U.length>0&&Sr(U,I,z),ie.length>0&&Sr(ie,I,z),ue.length>0&&Sr(ue,I,z),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function lo(M,I,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new Ln(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?mi:Pn,minFilter:di,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const ie=f.state.transmissionRenderTarget[G.id],ue=G.viewport||R;ie.setSize(ue.z,ue.w);const _e=x.getRenderTarget();x.setRenderTarget(ie),x.getClearColor(Y),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),Ge&&Se.render(z);const ve=x.toneMapping;x.toneMapping=Yn;const Ie=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),ne===!0&&J.setGlobalState(x.clippingPlanes,G),Sr(M,z,G),w.updateMultisampleRenderTarget(ie),w.updateRenderTargetMipmap(ie),De.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let xe=0,Ye=I.length;xe<Ye;xe++){const it=I[xe],at=it.object,Nt=it.geometry,Ke=it.material,ye=it.group;if(Ke.side===kt&&at.layers.test(G.layers)){const gn=Ke.side;Ke.side=Ot,Ke.needsUpdate=!0,co(at,z,G,Nt,Ke,ye),Ke.side=gn,Ke.needsUpdate=!0,ke=!0}}ke===!0&&(w.updateMultisampleRenderTarget(ie),w.updateRenderTargetMipmap(ie))}x.setRenderTarget(_e),x.setClearColor(Y,q),Ie!==void 0&&(G.viewport=Ie),x.toneMapping=ve}function Sr(M,I,z){const G=I.isScene===!0?I.overrideMaterial:null;for(let U=0,ie=M.length;U<ie;U++){const ue=M[U],_e=ue.object,ve=ue.geometry,Ie=G===null?ue.material:G,ke=ue.group;_e.layers.test(z.layers)&&co(_e,I,z,ve,Ie,ke)}}function co(M,I,z,G,U,ie){M.onBeforeRender(x,I,z,G,U,ie),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(x,I,z,G,M,ie),U.transparent===!0&&U.side===kt&&U.forceSinglePass===!1?(U.side=Ot,U.needsUpdate=!0,x.renderBufferDirect(z,I,G,U,M,ie),U.side=Kn,U.needsUpdate=!0,x.renderBufferDirect(z,I,G,U,M,ie),U.side=kt):x.renderBufferDirect(z,I,G,U,M,ie),M.onAfterRender(x,I,z,G,U,ie)}function br(M,I,z){I.isScene!==!0&&(I=je);const G=Ee.get(M),U=f.state.lights,ie=f.state.shadowsArray,ue=U.state.version,_e=te.getParameters(M,U.state,ie,I,z),ve=te.getProgramCacheKey(_e);let Ie=G.programs;G.environment=M.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(M.isMeshStandardMaterial?k:v).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Ie===void 0&&(M.addEventListener("dispose",Fe),Ie=new Map,G.programs=Ie);let ke=Ie.get(ve);if(ke!==void 0){if(G.currentProgram===ke&&G.lightsStateVersion===ue)return uo(M,_e),ke}else _e.uniforms=te.getUniforms(M),M.onBeforeCompile(_e,x),ke=te.acquireProgram(_e,ve),Ie.set(ve,ke),G.uniforms=_e.uniforms;const xe=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(xe.clippingPlanes=J.uniform),uo(M,_e),G.needsLights=xc(M),G.lightsStateVersion=ue,G.needsLights&&(xe.ambientLightColor.value=U.state.ambient,xe.lightProbe.value=U.state.probe,xe.directionalLights.value=U.state.directional,xe.directionalLightShadows.value=U.state.directionalShadow,xe.spotLights.value=U.state.spot,xe.spotLightShadows.value=U.state.spotShadow,xe.rectAreaLights.value=U.state.rectArea,xe.ltc_1.value=U.state.rectAreaLTC1,xe.ltc_2.value=U.state.rectAreaLTC2,xe.pointLights.value=U.state.point,xe.pointLightShadows.value=U.state.pointShadow,xe.hemisphereLights.value=U.state.hemi,xe.directionalShadowMap.value=U.state.directionalShadowMap,xe.directionalShadowMatrix.value=U.state.directionalShadowMatrix,xe.spotShadowMap.value=U.state.spotShadowMap,xe.spotLightMatrix.value=U.state.spotLightMatrix,xe.spotLightMap.value=U.state.spotLightMap,xe.pointShadowMap.value=U.state.pointShadowMap,xe.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=ke,G.uniformsList=null,ke}function ho(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=Qr.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function uo(M,I){const z=Ee.get(M);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function _c(M,I,z,G,U){I.isScene!==!0&&(I=je),w.resetTextureUnits();const ie=I.fog,ue=G.isMeshStandardMaterial?I.environment:null,_e=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:qi,ve=(G.isMeshStandardMaterial?k:v).get(G.envMap||ue),Ie=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,ke=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),xe=!!z.morphAttributes.position,Ye=!!z.morphAttributes.normal,it=!!z.morphAttributes.color;let at=Yn;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(at=x.toneMapping);const Nt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ke=Nt!==void 0?Nt.length:0,ye=Ee.get(G),gn=f.state.lights;if(ne===!0&&(ge===!0||M!==S)){const Wt=M===S&&G.id===E;J.setState(G,M,Wt)}let Qe=!1;G.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==gn.state.version||ye.outputColorSpace!==_e||U.isBatchedMesh&&ye.batching===!1||!U.isBatchedMesh&&ye.batching===!0||U.isBatchedMesh&&ye.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ye.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ye.instancing===!1||!U.isInstancedMesh&&ye.instancing===!0||U.isSkinnedMesh&&ye.skinning===!1||!U.isSkinnedMesh&&ye.skinning===!0||U.isInstancedMesh&&ye.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ye.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ye.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ye.instancingMorph===!1&&U.morphTexture!==null||ye.envMap!==ve||G.fog===!0&&ye.fog!==ie||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==J.numPlanes||ye.numIntersection!==J.numIntersection)||ye.vertexAlphas!==Ie||ye.vertexTangents!==ke||ye.morphTargets!==xe||ye.morphNormals!==Ye||ye.morphColors!==it||ye.toneMapping!==at||ye.morphTargetsCount!==Ke)&&(Qe=!0):(Qe=!0,ye.__version=G.version);let Kt=ye.currentProgram;Qe===!0&&(Kt=br(G,I,U));let _i=!1,Bt=!1,Zi=!1;const ot=Kt.getUniforms(),an=ye.uniforms;if(be.useProgram(Kt.program)&&(_i=!0,Bt=!0,Zi=!0),G.id!==E&&(E=G.id,Bt=!0),_i||S!==M){be.buffers.depth.getReversed()?(oe.copy(M.projectionMatrix),Th(oe),Ah(oe),ot.setValue(N,"projectionMatrix",oe)):ot.setValue(N,"projectionMatrix",M.projectionMatrix),ot.setValue(N,"viewMatrix",M.matrixWorldInverse);const Nn=ot.map.cameraPosition;Nn!==void 0&&Nn.setValue(N,Ce.setFromMatrixPosition(M.matrixWorld)),Ve.logarithmicDepthBuffer&&ot.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ot.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Bt=!0,Zi=!0)}if(U.isSkinnedMesh){ot.setOptional(N,U,"bindMatrix"),ot.setOptional(N,U,"bindMatrixInverse");const Wt=U.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),ot.setValue(N,"boneTexture",Wt.boneTexture,w))}U.isBatchedMesh&&(ot.setOptional(N,U,"batchingTexture"),ot.setValue(N,"batchingTexture",U._matricesTexture,w),ot.setOptional(N,U,"batchingIdTexture"),ot.setValue(N,"batchingIdTexture",U._indirectTexture,w),ot.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&ot.setValue(N,"batchingColorTexture",U._colorsTexture,w));const Ji=z.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&Ae.update(U,z,Kt),(Bt||ye.receiveShadow!==U.receiveShadow)&&(ye.receiveShadow=U.receiveShadow,ot.setValue(N,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(an.envMap.value=ve,an.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&I.environment!==null&&(an.envMapIntensity.value=I.environmentIntensity),Bt&&(ot.setValue(N,"toneMappingExposure",x.toneMappingExposure),ye.needsLights&&vc(an,Zi),ie&&G.fog===!0&&Q.refreshFogUniforms(an,ie),Q.refreshMaterialUniforms(an,G,W,ee,f.state.transmissionRenderTarget[M.id]),Qr.upload(N,ho(ye),an,w)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Qr.upload(N,ho(ye),an,w),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ot.setValue(N,"center",U.center),ot.setValue(N,"modelViewMatrix",U.modelViewMatrix),ot.setValue(N,"normalMatrix",U.normalMatrix),ot.setValue(N,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Wt=G.uniformsGroups;for(let Nn=0,Fn=Wt.length;Nn<Fn;Nn++){const fo=Wt[Nn];L.update(fo,Kt),L.bind(fo,Kt)}}return Kt}function vc(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function xc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,I,z){Ee.get(M.texture).__webglTexture=I,Ee.get(M.depthTexture).__webglTexture=z;const G=Ee.get(M);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){const z=Ee.get(M);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,z=0){P=M,T=I,A=z;let G=!0,U=null,ie=!1,ue=!1;if(M){const ve=Ee.get(M);if(ve.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(N.FRAMEBUFFER,null),G=!1;else if(ve.__webglFramebuffer===void 0)w.setupRenderTarget(M);else if(ve.__hasExternalTextures)w.rebindTextures(M,Ee.get(M.texture).__webglTexture,Ee.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const xe=M.depthTexture;if(ve.__boundDepthTexture!==xe){if(xe!==null&&Ee.has(xe)&&(M.width!==xe.image.width||M.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(M)}}const Ie=M.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ue=!0);const ke=Ee.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ke[I])?U=ke[I][z]:U=ke[I],ie=!0):M.samples>0&&w.useMultisampledRTT(M)===!1?U=Ee.get(M).__webglMultisampledFramebuffer:Array.isArray(ke)?U=ke[z]:U=ke,R.copy(M.viewport),V.copy(M.scissor),B=M.scissorTest}else R.copy(Me).multiplyScalar(W).floor(),V.copy(ze).multiplyScalar(W).floor(),B=Le;if(be.bindFramebuffer(N.FRAMEBUFFER,U)&&G&&be.drawBuffers(M,U),be.viewport(R),be.scissor(V),be.setScissorTest(B),ie){const ve=Ee.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,ve.__webglTexture,z)}else if(ue){const ve=Ee.get(M.texture),Ie=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ve.__webglTexture,z||0,Ie)}E=-1},this.readRenderTargetPixels=function(M,I,z,G,U,ie,ue){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Ee.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ue!==void 0&&(_e=_e[ue]),_e){be.bindFramebuffer(N.FRAMEBUFFER,_e);try{const ve=M.texture,Ie=ve.format,ke=ve.type;if(!Ve.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-G&&z>=0&&z<=M.height-U&&N.readPixels(I,z,G,U,Ne.convert(Ie),Ne.convert(ke),ie)}finally{const ve=P!==null?Ee.get(P).__webglFramebuffer:null;be.bindFramebuffer(N.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(M,I,z,G,U,ie,ue){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Ee.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ue!==void 0&&(_e=_e[ue]),_e){const ve=M.texture,Ie=ve.format,ke=ve.type;if(!Ve.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=M.width-G&&z>=0&&z<=M.height-U){be.bindFramebuffer(N.FRAMEBUFFER,_e);const xe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,xe),N.bufferData(N.PIXEL_PACK_BUFFER,ie.byteLength,N.STREAM_READ),N.readPixels(I,z,G,U,Ne.convert(Ie),Ne.convert(ke),0);const Ye=P!==null?Ee.get(P).__webglFramebuffer:null;be.bindFramebuffer(N.FRAMEBUFFER,Ye);const it=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await wh(N,it,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,xe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ie),N.deleteBuffer(xe),N.deleteSync(it),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,I=null,z=0){M.isTexture!==!0&&(sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,M=arguments[1]);const G=Math.pow(2,-z),U=Math.floor(M.image.width*G),ie=Math.floor(M.image.height*G),ue=I!==null?I.x:0,_e=I!==null?I.y:0;w.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,ue,_e,U,ie),be.unbindTexture()},this.copyTextureToTexture=function(M,I,z=null,G=null,U=0){M.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,M=arguments[1],I=arguments[2],U=arguments[3]||0,z=null);let ie,ue,_e,ve,Ie,ke,xe,Ye,it;const at=M.isCompressedTexture?M.mipmaps[U]:M.image;z!==null?(ie=z.max.x-z.min.x,ue=z.max.y-z.min.y,_e=z.isBox3?z.max.z-z.min.z:1,ve=z.min.x,Ie=z.min.y,ke=z.isBox3?z.min.z:0):(ie=at.width,ue=at.height,_e=at.depth||1,ve=0,Ie=0,ke=0),G!==null?(xe=G.x,Ye=G.y,it=G.z):(xe=0,Ye=0,it=0);const Nt=Ne.convert(I.format),Ke=Ne.convert(I.type);let ye;I.isData3DTexture?(w.setTexture3D(I,0),ye=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(w.setTexture2DArray(I,0),ye=N.TEXTURE_2D_ARRAY):(w.setTexture2D(I,0),ye=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const gn=N.getParameter(N.UNPACK_ROW_LENGTH),Qe=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Kt=N.getParameter(N.UNPACK_SKIP_PIXELS),_i=N.getParameter(N.UNPACK_SKIP_ROWS),Bt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,at.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,at.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ve),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ie),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ke);const Zi=M.isDataArrayTexture||M.isData3DTexture,ot=I.isDataArrayTexture||I.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const an=Ee.get(M),Ji=Ee.get(I),Wt=Ee.get(an.__renderTarget),Nn=Ee.get(Ji.__renderTarget);be.bindFramebuffer(N.READ_FRAMEBUFFER,Wt.__webglFramebuffer),be.bindFramebuffer(N.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let Fn=0;Fn<_e;Fn++)Zi&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ee.get(M).__webglTexture,U,ke+Fn),M.isDepthTexture?(ot&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ee.get(I).__webglTexture,U,it+Fn),N.blitFramebuffer(ve,Ie,ie,ue,xe,Ye,ie,ue,N.DEPTH_BUFFER_BIT,N.NEAREST)):ot?N.copyTexSubImage3D(ye,U,xe,Ye,it+Fn,ve,Ie,ie,ue):N.copyTexSubImage2D(ye,U,xe,Ye,it+Fn,ve,Ie,ie,ue);be.bindFramebuffer(N.READ_FRAMEBUFFER,null),be.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ot?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(ye,U,xe,Ye,it,ie,ue,_e,Nt,Ke,at.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(ye,U,xe,Ye,it,ie,ue,_e,Nt,at.data):N.texSubImage3D(ye,U,xe,Ye,it,ie,ue,_e,Nt,Ke,at):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,xe,Ye,ie,ue,Nt,Ke,at.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,xe,Ye,at.width,at.height,Nt,at.data):N.texSubImage2D(N.TEXTURE_2D,U,xe,Ye,ie,ue,Nt,Ke,at);N.pixelStorei(N.UNPACK_ROW_LENGTH,gn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Qe),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Kt),N.pixelStorei(N.UNPACK_SKIP_ROWS,_i),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Bt),U===0&&I.generateMipmaps&&N.generateMipmap(ye),be.unbindTexture()},this.copyTextureToTexture3D=function(M,I,z=null,G=null,U=0){return M.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,G=arguments[1]||null,M=arguments[2],I=arguments[3],U=arguments[4]||0),sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,I,z,G,U)},this.initRenderTarget=function(M){Ee.get(M).__webglFramebuffer===void 0&&w.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?w.setTextureCube(M,0):M.isData3DTexture?w.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?w.setTexture2DArray(M,0):w.setTexture2D(M,0),be.unbindTexture()},this.resetState=function(){T=0,A=0,P=null,be.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}class sc extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ac extends Pt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Et,h=Et,d,u){super(null,a,o,l,c,h,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bm extends Pt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ka extends Yt{constructor(e=[new He(0,-.5),new He(.5,0),new He(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Ct(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/t,d=new F,u=new He,p=new F,g=new F,_=new F;let m=0,f=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let y=0;y<=t;y++){const b=i+y*h*r,x=Math.sin(b),C=Math.cos(b);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*x,d.y=e[T].y,d.z=e[T].x*C,a.push(d.x,d.y,d.z),u.x=y/t,u.y=T/(e.length-1),o.push(u.x,u.y);const A=l[3*T+0]*x,P=l[3*T+1],E=l[3*T+0]*C;c.push(A,P,E)}}for(let y=0;y<t;y++)for(let b=0;b<e.length-1;b++){const x=b+y*e.length,C=x,T=x+e.length,A=x+e.length+1,P=x+1;s.push(C,T,P),s.push(A,P,T)}this.setIndex(s),this.setAttribute("position",new mt(a,3)),this.setAttribute("uv",new mt(o,2)),this.setAttribute("normal",new mt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.points,e.segments,e.phiStart,e.phiLength)}}class xr extends Yt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],u=[],p=[];let g=0;const _=[],m=i/2;let f=0;y(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new mt(d,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(p,2));function y(){const x=new F,C=new F;let T=0;const A=(t-e)/i;for(let P=0;P<=s;P++){const E=[],S=P/s,R=S*(t-e)+e;for(let V=0;V<=r;V++){const B=V/r,Y=B*l+o,q=Math.sin(Y),j=Math.cos(Y);C.x=R*q,C.y=-S*i+m,C.z=R*j,d.push(C.x,C.y,C.z),x.set(q,A,j).normalize(),u.push(x.x,x.y,x.z),p.push(B,1-S),E.push(g++)}_.push(E)}for(let P=0;P<r;P++)for(let E=0;E<s;E++){const S=_[E][P],R=_[E+1][P],V=_[E+1][P+1],B=_[E][P+1];(e>0||E!==0)&&(h.push(S,R,B),T+=3),(t>0||E!==s-1)&&(h.push(R,V,B),T+=3)}c.addGroup(f,T,0),f+=T}function b(x){const C=g,T=new He,A=new F;let P=0;const E=x===!0?e:t,S=x===!0?1:-1;for(let V=1;V<=r;V++)d.push(0,m*S,0),u.push(0,S,0),p.push(.5,.5),g++;const R=g;for(let V=0;V<=r;V++){const Y=V/r*l+o,q=Math.cos(Y),j=Math.sin(Y);A.x=E*j,A.y=m*S,A.z=E*q,d.push(A.x,A.y,A.z),u.push(0,S,0),T.x=q*.5+.5,T.y=j*.5*S+.5,p.push(T.x,T.y),g++}for(let V=0;V<r;V++){const B=C+V,Y=R+V;x===!0?h.push(Y,Y+1,B):h.push(Y+1,Y,B),P+=3}c.addGroup(f,P,x===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class rs extends xr{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new rs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mr extends Yt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new F,u=new F,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){const y=[],b=f/i;let x=0;f===0&&a===0?x=.5/t:f===i&&l===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){const T=C/t;d.x=-e*Math.cos(r+T*s)*Math.sin(a+b*o),d.y=e*Math.cos(a+b*o),d.z=e*Math.sin(r+T*s)*Math.sin(a+b*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(T+x,1-b),y.push(c++)}h.push(y)}for(let f=0;f<i;f++)for(let y=0;y<t;y++){const b=h[f][y+1],x=h[f][y],C=h[f+1][y],T=h[f+1][y+1];(f!==0||a>0)&&p.push(b,x,T),(f!==i-1||l<Math.PI)&&p.push(x,C,T)}this.setIndex(p),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qa extends Yt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],h=new F,d=new F,u=new F;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,f=(r+1)*(p-1)+g,y=(r+1)*p+g;a.push(_,m,y),a.push(m,f,y)}this.setIndex(a),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class zm extends vr{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Xe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hl,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class oc extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Hm extends oc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const $s=new ct,fl=new F,pl=new F;class Gm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ya,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;fl.setFromMatrixPosition(e.matrixWorld),t.position.copy(fl),pl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pl),t.updateMatrixWorld(),$s.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($s),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($s)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Vm extends Gm{constructor(){super(new ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wm extends oc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new Vm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ba);const Za="#5b3520";function dt(n){let e=(Math.imul(n|0,2654435761)^2654435769)>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>>17,e^=e<<5,e>>>=0,e/4294967296)}function qt(n,e){const t=document.createElement("canvas");return t.width=Math.round(n),t.height=Math.round(e),[t,t.getContext("2d")]}function Xm(n,e,{amp:t=1.5,step:i=5,closed:r=!1}={}){const s=[],a=n.length,o=r?a:a-1,l=e()*6.28,c=e()*6.28;let h=0;for(let d=0;d<o;d++){const[u,p]=n[d],[g,_]=n[(d+1)%a],m=Math.hypot(g-u,_-p)||1,f=-(_-p)/m,y=(g-u)/m,b=Math.max(1,Math.ceil(m/i));for(let x=0;x<b;x++){const C=x/b,T=t*(Math.sin(h*.045+l)*.65+Math.sin(h*.17+c)*.35);s.push([u+(g-u)*C+f*T,p+(_-p)*C+y*T]),h+=m/b}}return r||s.push(n[a-1].slice()),s}function qe(n,e,t,{w:i=3,color:r=Za,closed:s=!1,amp:a=1.3}={}){const o=Xm(e,t,{amp:a,closed:s});s&&o.push(o[0]);const l=t()*6.28,c=.12+t()*.14;n.strokeStyle=r,n.lineCap="round",n.lineJoin="round";for(let h=0;h<o.length-1;h++)n.lineWidth=i*(.7+.55*(.5+.5*Math.sin(h*c+l))),n.beginPath(),n.moveTo(o[h][0],o[h][1]),n.lineTo(o[h+1][0],o[h+1][1]),n.stroke()}function lc(n,e){n.beginPath(),n.moveTo(e[0][0],e[0][1]);for(const t of e)n.lineTo(t[0],t[1]);n.closePath()}function st(n,e,t){n.fillStyle=t,lc(n,e),n.fill()}function cc(n,e,t){n.save(),lc(n,e),n.clip(),t(),n.restore()}function fn(n,e,t,i,r,{n:s=40,lump:a=.08}={}){const o=2+Math.floor(r()*3),l=r()*6.28,c=5+Math.floor(r()*3),h=r()*6.28,d=[];for(let u=0;u<s;u++){const p=u/s*Math.PI*2,g=1+a*(Math.sin(p*o+l)*.6+Math.sin(p*c+h)*.4);d.push([n+Math.cos(p)*t*g,e+Math.sin(p)*i*g])}return d}function $m(n,e,t,i,r){const s=[];for(let a=0;a<r;a++){const o=Math.PI+a/r*Math.PI,l=Math.PI+(a+1)/r*Math.PI,c=n+Math.cos(o)*t,h=e+Math.sin(o)*i,d=n+Math.cos(l)*t,u=e+Math.sin(l)*i,p=(c+d)/2,g=(h+u)/2,_=Math.hypot(d-c,u-h)/2,m=Math.atan2(h-g,c-p),f=Math.atan2(g-e,p-n),y=Math.cos(m+Math.PI/2-f)>0?1:-1;for(let b=0;b<8;b++){const x=m+y*(b/8)*Math.PI;s.push([p+Math.cos(x)*_,g+Math.sin(x)*_*1.05])}}for(let a=0;a<=10;a++){const o=a/10*Math.PI;s.push([n+Math.cos(o)*t,e+Math.sin(o)*i*.45])}return s}function qm(n){const[e,t]=qt(120,100),i=dt(90+n*7),r=fn(60,42,46,30,dt(5),{n:30,lump:.05}),s=[[42,64],[34,90],[62,68]];st(t,s,"#fff8ea"),qe(t,s,i,{w:3,closed:!1,amp:.4}),st(t,r,"#fff8ea"),qe(t,r,i,{w:3.4,closed:!0,amp:.6});for(const a of[-18,0,18])t.fillStyle=Za,t.beginPath(),t.arc(60+a,44,5,0,7),t.fill();return e}function Ym(n,e="#ffd24a"){const[t,i]=qt(80,80),r=dt(20+n),s=[];for(let a=0;a<10;a++){const o=-Math.PI/2+a*Math.PI/5,l=a%2?14:32;s.push([40+Math.cos(o)*l,42+Math.sin(o)*l])}return st(i,s,e),qe(i,s,r,{w:3.4,closed:!0,amp:.6}),t}const jn=Math.PI*2;function ss(n,e,t,i,r=8,s=0){const a=[];for(let o=0;o<r*2;o++){const l=s+o*Math.PI/r,c=o%2?i:t;a.push([n+Math.cos(l)*c,e+Math.sin(l)*c])}return a}function jm({W:n,H:e,ppu:t,rug:i}){const[r,s]=qt(n*t,e*t),a=dt(21),o=dt(22);s.fillStyle="#e9bf8a",s.fillRect(0,0,r.width,r.height);const l=.55*t;for(let c=0,h=0;c<r.height;c+=l,h++){for(let d=-a()*3*t;d<r.width;d+=(2+a()*2.5)*t){const u=2+a()*2.5;s.fillStyle=a()<.5?"#e3b47c":"#efc894",s.fillRect(d+3,c+3,u*t-6,l-6),qe(s,[[d,c+2],[d,c+l-2]],o,{w:2,color:"#b98655",amp:.3})}qe(s,[[0,c],[r.width,c]],o,{w:2.4,color:"#b98655",amp:.8});for(let d=0;d<6;d++){const u=a()*r.width,p=c+l*(.3+a()*.4);qe(s,[[u,p],[u+18+a()*30,p+(a()-.5)*3]],o,{w:1.4,color:"#cf9d68",amp:.4})}}if(i){const c=(b,x)=>[(b+n/2)*t,(x+e/2)*t],[h,d]=c(i.x,i.z),u=i.rx*t,p=i.rz*t,g=fn(h,d,u,p,dt(4),{n:80,lump:.02});st(s,g,"#e8584e");const _=fn(h,d,u*.9,p*.88,dt(4),{n:80,lump:.02});st(s,_,"#f6e3bf");const m=fn(h,d,u*.78,p*.74,dt(4),{n:80,lump:.02});st(s,m,"#7fb7c9");for(let b=0;b<28;b++){const x=b/28*jn,C=h+Math.cos(x)*u*.95,T=d+Math.sin(x)*p*.94;st(s,[[C,T-6],[C+6,T],[C,T+6],[C-6,T]],"#f5cf5f")}s.save(),s.translate(h,d),s.scale(1,p/u);const f=ss(0,0,u*.5,u*.36,8,Math.PI/8);st(s,f,"#f5cf5f"),qe(s,f,o,{w:3,closed:!0,amp:.5});const y=ss(0,0,u*.26,u*.19,8,0);st(s,y,"#e8584e"),qe(s,y,o,{w:2.6,closed:!0,amp:.4}),s.restore(),qe(s,g,o,{w:3.6,closed:!0,amp:.6}),qe(s,_,o,{w:2.2,closed:!0,amp:.4,color:"#a8453d"}),qe(s,m,o,{w:2.4,closed:!0,amp:.4,color:"#3f7f95"});for(let b=0;b<60;b++){const x=b/60*jn;if(Math.abs(Math.cos(x))<.9)continue;const C=h+Math.cos(x)*u,T=d+Math.sin(x)*p;qe(s,[[C,T],[C+Math.cos(x)*12,T+Math.sin(x)*4]],o,{w:1.6,amp:0})}}return r}function ml(n,e,t,i,r){const s=n*t,a=e*t,[o,l]=qt(s,a),c=dt(i),h=dt(i+1);l.fillStyle="#f6e9d2",l.fillRect(0,0,s,a);for(let u=20;u<a*.62;u+=44)for(let p=u/44%2?22:0;p<s;p+=44)st(l,[[p,u-5],[p+5,u],[p,u+5],[p-5,u]],c()<.5?"#e9cfe6":"#cfe3dc");const d=a*.66;l.fillStyle="#c99a6a",l.fillRect(0,d,s,a-d),l.fillStyle="#b8855a",l.fillRect(0,a-.22*t,s,.22*t);for(let u=.3*t;u<s-.4*t;u+=1.3*t){const p=[[u,d+.18*t],[u+1.05*t,d+.18*t],[u+1.05*t,a-.34*t],[u,a-.34*t]];st(l,p,"#d4a878"),qe(l,p,h,{w:2.2,closed:!0,color:"#8a5a30",amp:.5})}return l.fillStyle="#8fc3b3",l.fillRect(0,d-10,s,12),qe(l,[[0,d-10],[s,d-10]],h,{w:2.6,amp:.6}),qe(l,[[0,d+2],[s,d+2]],h,{w:2.6,amp:.6}),qe(l,[[0,a-.22*t],[s,a-.22*t]],h,{w:2.6,amp:.6}),r==null||r(l,h,(u,p)=>[u*t,p*t],t),o}function Km(n,e,t,i,r,s){const a=r/2,o=[];for(let d=0;d<=20;d++){const u=Math.PI+d/20*Math.PI;o.push([t+Math.cos(u)*a,i+a+Math.sin(u)*a])}const l=[...o,[t+a,i+s],[t-a,i+s]],c=n.createLinearGradient(0,i,0,i+s);c.addColorStop(0,"#34407e"),c.addColorStop(.7,"#6a64b4"),c.addColorStop(1,"#e79aa0"),n.fillStyle=c,n.beginPath(),l.forEach(([d,u],p)=>p?n.lineTo(d,u):n.moveTo(d,u)),n.closePath(),n.fill(),cc(n,l,()=>{const d=dt(5);for(let p=0;p<14;p++)n.fillStyle="#fff6d0",n.beginPath(),n.arc(t-a+d()*r,i+d()*s*.6,1.5+d()*2,0,jn),n.fill();n.fillStyle="#fff3b0",n.beginPath(),n.arc(t+a*.3,i+s*.3,a*.26,0,jn),n.fill(),n.fillStyle="#4a4c96",n.beginPath(),n.arc(t+a*.42,i+s*.27,a*.22,0,jn),n.fill();const u=[[t-a,i+s],[t-a,i+s*.82],[t-a*.3,i+s*.76],[t+a*.4,i+s*.84],[t+a,i+s*.8],[t+a,i+s]];st(n,u,"#5d5aa0")}),n.strokeStyle="#f6f0e3",n.lineWidth=12,n.beginPath(),l.forEach(([d,u],p)=>p?n.lineTo(d,u):n.moveTo(d,u)),n.closePath(),n.stroke(),qe(n,l,e,{w:3.4,closed:!0,amp:.6}),qe(n,[[t,i+4],[t,i+s]],e,{w:5,color:"#f6f0e3",amp:.3}),qe(n,[[t-a,i+s*.55],[t+a,i+s*.55]],e,{w:5,color:"#f6f0e3",amp:.3});const h=[[t-a-14,i+s],[t+a+14,i+s],[t+a+10,i+s+14],[t-a-10,i+s+14]];st(n,h,"#f6f0e3"),qe(n,h,e,{w:3,closed:!0,amp:.4})}function gl(n,e,t,i,r){const s=[[t-r,i-r],[t+r,i-r],[t+r,i+r],[t-r,i+r]];st(n,s,"#c98a4d"),qe(n,s,e,{w:3,closed:!0,amp:.4});const a=[[t-r*.8,i-r*.8],[t+r*.8,i-r*.8],[t+r*.8,i+r*.8],[t-r*.8,i+r*.8]];st(n,a,"#2f6f7a"),qe(n,a,e,{w:2.4,closed:!0,amp:.3});const o=ss(t,i,r*.66,r*.46,8,Math.PI/8);st(n,o,"#f5cf5f"),qe(n,o,e,{w:2.4,closed:!0,amp:.3});const l=ss(t,i,r*.3,r*.2,8,0);st(n,l,"#e8584e"),qe(n,l,e,{w:2,closed:!0,amp:.3})}function Qm(n=1024,e=640){const[t,i]=qt(n,e),r=dt(61),s=dt(62),a=i.createLinearGradient(0,0,0,e);a.addColorStop(0,"#5a64c4"),a.addColorStop(.55,"#8c86d8"),a.addColorStop(1,"#d6a8d8"),i.fillStyle=a,i.fillRect(0,0,n,e);for(let o=0;o<40;o++){const l=s()*n,c=s()*e*.6,h=2+s()*3;i.fillStyle="#fff4cc",i.beginPath(),i.arc(l,c,h*.5,0,jn),i.fill()}for(let o=0;o<6;o++){const l=s()*n,c=90+s()*(e-160),h=60+s()*90,d=h*.32,u=3+Math.floor(s()*3),p=$m(l,c,h,d,u);st(i,p,"#c9b3ea"),cc(i,p,()=>st(i,fn(l,c+d*.55,h*1.1,d*.45,r),"#b39fe0")),qe(i,p,r,{w:2.6,closed:!0,color:"#5a4a98"})}return t}function Zm(n="255,214,110"){const[e,t]=qt(128,128),i=t.createRadialGradient(64,64,4,64,64,62);return i.addColorStop(0,`rgba(${n},.75)`),i.addColorStop(.6,`rgba(${n},.35)`),i.addColorStop(1,`rgba(${n},0)`),t.fillStyle=i,t.beginPath(),t.arc(64,64,62,0,jn),t.fill(),e}function Jm(n){const[e,t]=qt(120,110),i=dt(70+n*5),r=fn(62,44,44,32,dt(8),{n:30,lump:.12});for(const[s,a,o]of[[34,86,9],[22,100,5]]){const l=fn(s,a,o,o,i,{n:12});st(t,l,"#fff8ea"),qe(t,l,i,{w:2.6,closed:!0,amp:.3})}return st(t,r,"#fff8ea"),qe(t,r,i,{w:3.2,closed:!0,amp:.5}),t.font="bold 44px sans-serif",t.fillStyle="#e8584e",t.textAlign="center",t.fillText("?",62,60),e}function eg(n){const[e,t]=qt(120,100),i=dt(90+n*7),r=fn(60,42,46,30,dt(6),{n:30,lump:.05}),s=[[70,64],[84,92],[54,68]];st(t,s,"#fff8ea"),qe(t,s,i,{w:3,amp:.4}),st(t,r,"#fff8ea"),qe(t,r,i,{w:3.4,closed:!0,amp:.6});const a=[];for(let o=0;o<=24;o++){const l=o/24*jn;a.push([60+13*Math.sin(l)**3*1.1,42-(13*Math.cos(l)-5*Math.cos(2*l)-2*Math.cos(3*l)-Math.cos(4*l))*.9])}return st(t,a,"#e8584e"),qe(t,a,i,{w:2.2,closed:!0,amp:.2}),e}function tg({icons:n,tint:e,drawing:t,seed:i=1}){const[r,s]=qt(360,240),a=dt(i),o=dt(i+9);s.fillStyle="#fbf5e6",s.fillRect(0,0,360,240),st(s,fn(180,120,150,95,o,{lump:.12}),e);for(let c=0;c<5;c++)st(s,fn(40+o()*280,30+o()*180,20+o()*30,12+o()*16,o,{lump:.2}),"rgba(255,255,255,.35)");if(t)s.save(),s.translate(180,118),s.rotate(-.04),s.fillStyle="#fff",s.fillRect(-118,-86,236,172),s.drawImage(t,-108,-76,216,146),s.restore(),qe(s,[[70,30],[120,36]],a,{w:9,color:"rgba(245,207,95,.8)",amp:0}),qe(s,[[250,206],[300,200]],a,{w:9,color:"rgba(245,207,95,.8)",amp:0});else{s.textAlign="center",s.textBaseline="middle",s.fillStyle="#000";const[c,...h]=n;s.font='96px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',s.fillText(c,180,118),s.font='46px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif';const d=[[70,70],[292,72],[84,186],[284,180]];h.slice(0,4).forEach((u,p)=>s.fillText(u,...d[p]))}return qe(s,[[8,8],[352,8],[352,232],[8,232]],a,{w:4,closed:!0,amp:1.2}),r}function ng(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,l=new Yt;let c=0;for(let h=0;h<n.length;++h){const d=n[h];let u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.attributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p])}if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0;const d=[];for(let u=0;u<n.length;++u){const p=n[u].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+h);h+=n[u].attributes.position.count}l.setIndex(d)}for(const h in s){const d=_l(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const p=[];for(let _=0;_<a[h].length;++_)p.push(a[h][_][u]);const g=_l(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function _l(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){const h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const a=new e(s),o=new rn(a,t,i);let l=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute){const d=l/t;for(let u=0,p=h.count;u<p;u++)for(let g=0;g<t;g++){const _=h.getComponent(u,g);o.setComponent(u+d,g,_)}}else a.set(h.array,l);l+=h.count*t}return r!==void 0&&(o.gpuType=r),o}const ig=(()=>{const n=new ac(new Uint8Array([120,255]),2,1,ds);return n.minFilter=n.magFilter=Et,n.needsUpdate=!0,n})(),rg=(()=>{const n=new ac(new Uint8Array([205,255]),2,1,ds);return n.minFilter=n.magFilter=Et,n.needsUpdate=!0,n})(),qs=new Map;function pr(n,e={}){const t=n+JSON.stringify(e,(i,r)=>r&&r.isTexture?r.uuid:r);if(!qs.has(t)){const{soft:i,...r}=e;qs.set(t,new zm({color:n,gradientMap:i?rg:ig,...r}))}return qs.get(t)}function bn(n,e=!1){const t=new Bm(n);return t.colorSpace=Ft,t.anisotropy=8,e&&(t.wrapS=t.wrapT=ts),t}const sg=new F(0,1,0),ag=new ct,Na=new Ki,Fa=new F,vl=new F;function xl(n,e,t=Na.identity(),i=Fa.set(1,1,1)){return n.clone().applyMatrix4(ag.compose(e,t,i))}function og(n){return n.attributes.uv||n.setAttribute("uv",new mt(new Float32Array(n.attributes.position.count*2),2)),n.index?n.toNonIndexed():n}function lg(n,e){return new ft(ng(n.map(og)),e)}function Ue(n,e,{p:t=[0,0,0],r:i=[0,0,0],s:r=1,soft:s,glow:a,basic:o,side:l}={}){const c={};s&&(c.soft=!0),l&&(c.side=l),a&&(c.emissive=a,c.emissiveIntensity=.6);const h=new ft(n,o?new En({color:e}):pr(e,c));return h.position.set(...t),h.rotation.set(...i),typeof r=="number"?h.scale.setScalar(r):h.scale.set(...r),h}const Dn=(...n)=>{const e=new or;return e.add(...n.flat()),e},St=(n,e,t)=>new Cn(n,e,t),Dt=(n,e,t,i=16)=>new xr(n,e,t,i),Oi=(n,e=14,t=10)=>new Mr(n,e,t);function cg(){const n="#8fb6d8",e="#a9cbe6";return Dn(Ue(St(3.2,.45,1.1),n,{p:[0,.35,0]}),Ue(St(3.2,.95,.3),n,{p:[0,.85,-.42]}),Ue(St(.3,.75,1.1),n,{p:[-1.6,.6,0]}),Ue(St(.3,.75,1.1),n,{p:[1.6,.6,0]}),Ue(St(1.42,.2,.85),e,{p:[-.73,.68,.08]}),Ue(St(1.42,.2,.85),e,{p:[.73,.68,.08]}),Ue(St(.55,.5,.18),"#f5cf5f",{p:[-1.1,.98,-.18],r:[-.2,.2,.1]}),Ue(St(.55,.5,.18),"#f0a3b8",{p:[1.1,.98,-.18],r:[-.2,-.2,-.1]}),...[-1.45,1.45].flatMap(t=>[-.4,.4].map(i=>Ue(Dt(.06,.05,.14,6),"#8a5a30",{p:[t,.07,i]}))))}function hg(){const n=Dn(Ue(Dt(.9,.9,.12,24),"#c98a4d",{p:[0,.5,0]}),Ue(Dt(.8,.8,.04,24),"#dba46a",{p:[0,.58,0]}),...[0,1,2,3].map(a=>{const o=a*Math.PI/2+Math.PI/4;return Ue(Dt(.07,.05,.45,6),"#a86a26",{p:[Math.cos(o)*.6,.22,Math.sin(o)*.6]})})),e=Dn(Ue(Oi(.22),"#f6f0e3",{p:[0,.2,0],s:[1,.85,1]}),Ue(Dt(.1,.12,.06,12),"#e8584e",{p:[0,.38,0]}),Ue(Oi(.04,8,6),"#e8584e",{p:[0,.43,0]}),Ue(Dt(.03,.05,.28,8),"#f6f0e3",{p:[.26,.24,0],r:[0,0,-.9]}),Ue(new Qa(.1,.025,6,12,Math.PI*1.3),"#f6f0e3",{p:[-.22,.22,0],r:[0,0,1.2]}));e.position.set(-.25,.6,-.15);const t=[[.35,-.3],[.2,.4],[-.45,.35]].map(([a,o])=>Ue(Dt(.08,.06,.12,10),"#8fc3b3",{p:[a,.66,o]})),i=[],r=dt(3);for(let a=0;a<6;a++)i.push(Ue(Oi(.06,8,6),"#8a4a2a",{p:[.35+(r()-.5)*.18,.72,.05+(r()-.5)*.18],s:[1,.7,1.6],r:[0,r()*3,0]}));const s=Ue(new Mr(.22,16,8,0,Math.PI*2,Math.PI/2,Math.PI/2),"#f5cf5f",{p:[.35,.78,.05],side:kt});return n.add(e,...t,s,...i),n}function ug(){const n="#b77c45",e=Dn(Ue(St(.1,2.2,.6),n,{p:[-.9,1.1,0]}),Ue(St(.1,2.2,.6),n,{p:[.9,1.1,0]}),Ue(St(1.9,2.2,.06),"#a86a3a",{p:[0,1.1,-.27]}),...[.05,.75,1.45,2.15].map(r=>Ue(St(1.9,.08,.6),n,{p:[0,r,0]}))),t=dt(11),i=["#e8584e","#7fb7c9","#f5cf5f","#9fd8c4","#b9a7ea","#f0a3b8","#8fb58a"];for(const r of[.09,.79,1.49]){let s=-.8;for(;s<.7;){const a=.1+t()*.08,o=.42+t()*.2;if(t()<.12){s+=.15;continue}e.add(Ue(St(a,o,.4),i[Math.floor(t()*i.length)],{p:[s+a/2,r+o/2,.02],r:[0,0,t()<.1?.2:0]})),s+=a+.015}}return e.add(Ue(Dt(.16,.12,.24,10),"#e2a574",{p:[.5,2.31,0]}),Ue(Oi(.22,10,8),"#83c47b",{p:[.5,2.52,0],s:[1,.8,1]})),e}function dg(){return Dn(Ue(Dt(.28,.32,.06,16),"#8a5a30",{p:[0,.03,0]}),Ue(Dt(.035,.035,2,8),"#8a5a30",{p:[0,1.03,0]}),Ue(new xr(.28,.45,.5,16,1,!0),"#fff1c4",{p:[0,2.1,0],side:kt,glow:"#ffd98a",soft:!0}))}function fg(){return Dn(Ue(St(.6,.06,.06),"#8a5a30",{p:[.3,0,0]}),Ue(Dt(.01,.01,.3,4),"#5b3520",{p:[.55,-.15,0]}),Ue(new rs(.2,.22,8),"#d9a936",{p:[.55,-.4,0]}),Ue(Dt(.16,.16,.36,8),"#ffd98a",{p:[.55,-.69,0],glow:"#ffb84a",soft:!0}),Ue(Dt(.2,.14,.08,8),"#d9a936",{p:[.55,-.91,0]}),Ue(new rs(.08,.12,8),"#d9a936",{p:[.55,-1.01,0],r:[Math.PI,0,0]}))}function Ml(n,e=1){const t=Dn(Ue(Dt(.45,.48,.2,18),n,{p:[0,.1,0]}),Ue(Oi(.44,18,8),n,{p:[0,.2,0],s:[1,.22,1]}),Ue(Oi(.07,8,6),"#f5cf5f",{p:[0,.3,0]}));return t.scale.setScalar(e),t}function yl(n=1){const e=dt(n),t=[],i=new Mr(1,10,8),r=new Ka([[.001,0],[.28,0],[.34,.5],[.38,.52],[.38,.58],[.001,.58]].map(([o,l])=>new He(o,l)),14);for(let o=0;o<7;o++){const l=o*2.4,c=o/7;t.push(xl(i,vl.set(Math.cos(l)*.25,.9+c*.6,Math.sin(l)*.25),Na.setFromAxisAngle(sg,l),Fa.set(.32,.12,.16)))}t.push(xl(i,vl.set(0,1.55,0),Na.identity(),Fa.set(.22,.2,.22)));const s=Ue(Dt(.03,.04,1,6),"#5c9d5f",{p:[0,1,0]}),a=Dn(new ft(r,pr("#e2a574")),s,lg(t,pr("#83c47b")));return a.rotation.y=e()*6,a}function pg(){return Dn(Ue(St(.9,.03,1.6),"#2f8a7a",{p:[0,.015,0]}),Ue(St(.72,.035,1.4),"#48a08e",{p:[0,.02,0]}),Ue(St(.3,.04,.3),"#f5cf5f",{p:[0,.025,-.45],r:[0,Math.PI/4,0]}))}const mg=new sn({side:kt,vertexShader:`
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
    }`}),gg=new sn({side:kt,uniforms:{map:{value:null}},vertexShader:`
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
    }`}),Ii=new sn({uniforms:{tColor:{value:null},tND:{value:null},texel:{value:new He},seed:{value:0},lineW:{value:1.3},ink:{value:new Xe(Za)}},depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
    }`});function _g(n){const e=new Ln(1,1,{samples:4,type:mi}),t=new Ln(1,1,{type:mi,minFilter:Et,magFilter:Et}),i=new ft(new un(2,2),Ii),r=new sc;r.add(i);const s=new ps(-1,1,1,-1,0,1),a=new He,o=[];function l(){n.getDrawingBufferSize(a),e.setSize(a.x,a.y),t.setSize(a.x,a.y),Ii.uniforms.texel.value.set(1/a.x,1/a.y),Ii.uniforms.lineW.value=1.25*n.getPixelRatio()}function c(h,d,u){n.getDrawingBufferSize(a),(a.x!==e.width||a.y!==e.height)&&l(),n.setRenderTarget(e),n.render(h,d);const p=h.background;h.background=null,h.traverse(_=>{if(!(!_.isMesh||!_.visible)){if(_.userData.noInk){_.visible=!1,o.push([_,null]);return}o.push([_,_.material]),_.userData.sprite?(_.material=gg,_.onBeforeRender=xg):_.material=mg}});const g=n.getClearAlpha();n.getClearColor(Sl),n.setClearColor(0,0),n.setRenderTarget(t),n.render(h,d),n.setClearColor(Sl,g);for(const[_,m]of o)m?(_.material=m,_.onBeforeRender=vg):_.visible=!0;o.length=0,h.background=p,Ii.uniforms.tColor.value=e.texture,Ii.uniforms.tND.value=t.texture,Ii.uniforms.seed.value=u,n.setRenderTarget(null),n.render(r,s)}return{render:c,setSize:l}}const Sl=new Xe,vg=()=>{};function xg(n,e,t,i,r){r.uniforms.map.value=this.userData.colorMap(),r.uniformsNeedUpdate=!0}const hc=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="200" height="240">
  <!-- Original girl in a hijab. SKIN is replaced at load; .poseA idle, .poseB explaining, .poseC hiding eyes. -->
  <defs><filter id="boil" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="1"/><feDisplacementMap in="SourceGraphic" scale="3.5" xChannelSelector="R" yChannelSelector="G"/></filter></defs>
  <g filter="url(#boil)" fill="none" stroke="#4a2c1a" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <ellipse cx="84" cy="227" rx="15" ry="8" fill="#8a5a3a"/><ellipse cx="116" cy="227" rx="15" ry="8" fill="#8a5a3a"/>
    <path d="M64 146 Q100 138 136 146 L152 219 Q100 229 48 219 Z" fill="#9fd8c4"/>
    <path d="M58 200 Q100 208 142 200" stroke="#5fa892" stroke-width="3"/>
    <path d="M100 30 C142 30 156 60 153 98 C151 122 158 140 166 156 Q100 172 34 156 C42 140 49 122 47 98 C44 60 58 30 100 30 Z" fill="#f2a7c0"/>
    <path d="M60 150 Q70 134 66 118" stroke-width="3"/><path d="M140 150 Q130 134 134 118" stroke-width="3"/>
    <ellipse cx="100" cy="96" rx="36" ry="38" fill="SKIN"/>
    <path d="M66 82 Q70 58 100 56 Q130 58 134 82" stroke="#f9cbd9" stroke-width="5"/>
    <circle cx="142" cy="142" r="5" fill="#f5cf5f" stroke-width="2.5"/>
    <circle cx="86" cy="96" r="11" fill="#fff"/><circle cx="114" cy="96" r="11" fill="#fff"/>
    <circle cx="88" cy="98" r="6" fill="#2a1a10" stroke="none"/><circle cx="116" cy="98" r="6" fill="#2a1a10" stroke="none"/>
    <circle cx="90" cy="95" r="2.2" fill="#fff" stroke="none"/><circle cx="118" cy="95" r="2.2" fill="#fff" stroke="none"/>
    <ellipse cx="74" cy="112" rx="8" ry="5" fill="#f4a6b8" stroke="none" opacity=".85"/><ellipse cx="126" cy="112" rx="8" ry="5" fill="#f4a6b8" stroke="none" opacity=".85"/>
    <path class="poseA poseC" d="M92 116 Q100 124 108 116"/>
    <path class="poseB" d="M91 114 Q100 130 109 114 Z" fill="#c9504f" stroke-width="3"/>
    <g class="poseA">
      <path d="M70 158 Q54 178 56 198" stroke-width="17"/><path d="M70 158 Q54 178 56 198" stroke="#9fd8c4" stroke-width="9"/>
      <path d="M130 158 Q146 178 144 198" stroke-width="17"/><path d="M130 158 Q146 178 144 198" stroke="#9fd8c4" stroke-width="9"/>
      <circle cx="56" cy="203" r="8" fill="SKIN"/><circle cx="144" cy="203" r="8" fill="SKIN"/>
    </g>
    <g class="poseB">
      <path d="M70 158 Q40 178 48 192" stroke-width="17"/><path d="M70 158 Q40 178 48 192" stroke="#9fd8c4" stroke-width="9"/>
      <circle cx="50" cy="198" r="8" fill="SKIN"/>
      <path d="M130 158 Q156 152 160 118" stroke-width="17"/><path d="M130 158 Q156 152 160 118" stroke="#9fd8c4" stroke-width="9"/>
      <path d="M161 108 L162 92" stroke-width="5"/>
      <circle cx="160" cy="112" r="8" fill="SKIN"/>
    </g>
    <g class="poseC">
      <path d="M70 158 Q44 138 85 102" stroke-width="17"/><path d="M70 158 Q44 138 85 102" stroke="#9fd8c4" stroke-width="9"/>
      <path d="M130 158 Q156 138 115 102" stroke-width="17"/><path d="M130 158 Q156 138 115 102" stroke="#9fd8c4" stroke-width="9"/>
      <ellipse cx="85" cy="94" rx="14" ry="12" fill="SKIN"/><ellipse cx="115" cy="94" rx="14" ry="12" fill="SKIN"/>
    </g>
  </g>
</svg>
`,uc=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="200" height="240">
  <!-- Original boy in a kufi. SKIN is replaced at load; .poseA idle, .poseB explaining, .poseC hiding eyes. -->
  <defs><filter id="boil" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="1"/><feDisplacementMap in="SourceGraphic" scale="3.5" xChannelSelector="R" yChannelSelector="G"/></filter></defs>
  <g filter="url(#boil)" fill="none" stroke="#4a2c1a" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M84 196 L84 220" stroke-width="20"/><path d="M84 196 L84 220" stroke="#8a7aa8" stroke-width="12"/>
    <path d="M116 196 L116 220" stroke-width="20"/><path d="M116 196 L116 220" stroke="#8a7aa8" stroke-width="12"/>
    <ellipse cx="82" cy="227" rx="15" ry="8" fill="#8a5a3a"/><ellipse cx="118" cy="227" rx="15" ry="8" fill="#8a5a3a"/>
    <path d="M62 146 Q100 136 138 146 L148 204 Q100 212 52 204 Z" fill="#a8c8f0"/>
    <path d="M100 142 L100 170" stroke-width="3"/><circle cx="100" cy="154" r="2.5" fill="#4a2c1a"/><circle cx="100" cy="164" r="2.5" fill="#4a2c1a"/>
    <circle cx="60" cy="100" r="10" fill="SKIN"/><circle cx="140" cy="100" r="10" fill="SKIN"/>
    <ellipse cx="100" cy="98" rx="40" ry="41" fill="SKIN"/>
    <path d="M61 88 Q58 60 100 56 Q142 60 139 88 Q128 72 100 71 Q72 72 61 88 Z" fill="#4a3024"/>
    <path d="M62 72 Q62 40 100 38 Q138 40 138 72 Q100 64 62 72 Z" fill="#fbf6ea"/>
    <path d="M68 60 L76 54 L84 60 L92 54 L100 60 L108 54 L116 60 L124 54 L132 60" stroke="#7fb7c9" stroke-width="3"/>
    <circle cx="85" cy="98" r="11" fill="#fff"/><circle cx="115" cy="98" r="11" fill="#fff"/>
    <circle cx="87" cy="100" r="6" fill="#2a1a10" stroke="none"/><circle cx="117" cy="100" r="6" fill="#2a1a10" stroke="none"/>
    <circle cx="89" cy="97" r="2.2" fill="#fff" stroke="none"/><circle cx="119" cy="97" r="2.2" fill="#fff" stroke="none"/>
    <ellipse cx="73" cy="114" rx="8" ry="5" fill="#f4a6b8" stroke="none" opacity=".85"/><ellipse cx="127" cy="114" rx="8" ry="5" fill="#f4a6b8" stroke="none" opacity=".85"/>
    <path class="poseA poseC" d="M92 118 Q100 126 108 118"/>
    <path class="poseB" d="M91 116 Q100 132 109 116 Z" fill="#c9504f" stroke-width="3"/>
    <g class="poseA">
      <path d="M68 158 Q52 177 54 196" stroke-width="17"/><path d="M68 158 Q52 177 54 196" stroke="#a8c8f0" stroke-width="9"/>
      <path d="M132 158 Q148 177 146 196" stroke-width="17"/><path d="M132 158 Q148 177 146 196" stroke="#a8c8f0" stroke-width="9"/>
      <circle cx="54" cy="201" r="8" fill="SKIN"/><circle cx="146" cy="201" r="8" fill="SKIN"/>
    </g>
    <g class="poseB">
      <path d="M68 158 Q38 178 46 192" stroke-width="17"/><path d="M68 158 Q38 178 46 192" stroke="#a8c8f0" stroke-width="9"/>
      <circle cx="48" cy="198" r="8" fill="SKIN"/>
      <path d="M132 158 Q158 152 162 118" stroke-width="17"/><path d="M132 158 Q158 152 162 118" stroke="#a8c8f0" stroke-width="9"/>
      <path d="M163 108 L164 92" stroke-width="5"/>
      <circle cx="162" cy="112" r="8" fill="SKIN"/>
    </g>
    <g class="poseC">
      <path d="M68 158 Q42 138 85 104" stroke-width="17"/><path d="M68 158 Q42 138 85 104" stroke="#a8c8f0" stroke-width="9"/>
      <path d="M132 158 Q158 138 115 104" stroke-width="17"/><path d="M132 158 Q158 138 115 104" stroke="#a8c8f0" stroke-width="9"/>
      <ellipse cx="85" cy="96" rx="14" ry="12" fill="SKIN"/><ellipse cx="115" cy="96" rx="14" ry="12" fill="SKIN"/>
    </g>
  </g>
</svg>
`,dc=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" width="200" height="300">
  <!-- Original mum in a hijab and long dress. SKIN is replaced at load. -->
  <defs><filter id="boil" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="1"/><feDisplacementMap in="SourceGraphic" scale="3.5" xChannelSelector="R" yChannelSelector="G"/></filter></defs>
  <g filter="url(#boil)" fill="none" stroke="#4a2c1a" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <ellipse cx="84" cy="288" rx="16" ry="8" fill="#6b4a3a"/><ellipse cx="116" cy="288" rx="16" ry="8" fill="#6b4a3a"/>
    <path d="M62 140 Q100 132 138 140 L160 280 Q100 292 40 280 Z" fill="#7fc4c9"/>
    <path d="M100 150 L100 280" stroke="#5aa3a8" stroke-width="3"/>
    <path d="M52 250 Q100 260 148 250" stroke="#5aa3a8" stroke-width="3"/>
    <path d="M100 24 C144 24 156 56 152 92 C150 118 160 138 168 160 Q100 178 32 160 C40 138 50 118 48 92 C44 56 56 24 100 24 Z" fill="#b9a7ea"/>
    <path d="M56 154 Q66 136 62 116" stroke-width="3"/><path d="M144 154 Q134 136 138 116" stroke-width="3"/>
    <ellipse cx="100" cy="88" rx="34" ry="37" fill="SKIN"/>
    <path d="M67 76 Q72 52 100 50 Q128 52 133 76" stroke="#d3c6f4" stroke-width="5"/>
    <circle cx="144" cy="144" r="5" fill="#f5cf5f" stroke-width="2.5"/>
    <circle cx="87" cy="88" r="11" fill="#fff"/><circle cx="113" cy="88" r="11" fill="#fff"/>
    <circle cx="89" cy="90" r="6" fill="#2a1a10" stroke="none"/><circle cx="115" cy="90" r="6" fill="#2a1a10" stroke="none"/>
    <circle cx="91" cy="87" r="2.2" fill="#fff" stroke="none"/><circle cx="117" cy="87" r="2.2" fill="#fff" stroke="none"/>
    <ellipse cx="75" cy="104" rx="8" ry="5" fill="#f4a6b8" stroke="none" opacity=".85"/><ellipse cx="125" cy="104" rx="8" ry="5" fill="#f4a6b8" stroke="none" opacity=".85"/>
    <path class="poseA poseC" d="M92 108 Q100 116 108 108"/>
    <path class="poseB" d="M91 106 Q100 122 109 106 Z" fill="#c9504f" stroke-width="3"/>
    <g class="poseA">
      <path d="M68 162 Q52 192 54 222" stroke-width="17"/><path d="M68 162 Q52 192 54 222" stroke="#7fc4c9" stroke-width="9"/>
      <path d="M132 162 Q148 192 146 222" stroke-width="17"/><path d="M132 162 Q148 192 146 222" stroke="#7fc4c9" stroke-width="9"/>
      <circle cx="54" cy="227" r="8" fill="SKIN"/><circle cx="146" cy="227" r="8" fill="SKIN"/>
    </g>
    <g class="poseB">
      <path d="M68 162 Q38 182 46 196" stroke-width="17"/><path d="M68 162 Q38 182 46 196" stroke="#7fc4c9" stroke-width="9"/>
      <circle cx="48" cy="202" r="8" fill="SKIN"/>
      <path d="M132 162 Q158 156 162 122" stroke-width="17"/><path d="M132 162 Q158 156 162 122" stroke="#7fc4c9" stroke-width="9"/>
      <path d="M163 112 L164 96" stroke-width="5"/>
      <circle cx="162" cy="116" r="8" fill="SKIN"/>
    </g>
    <g class="poseC">
      <path d="M68 162 Q42 142 86 94" stroke-width="17"/><path d="M68 162 Q42 142 86 94" stroke="#7fc4c9" stroke-width="9"/>
      <path d="M132 162 Q158 142 114 94" stroke-width="17"/><path d="M132 162 Q158 142 114 94" stroke="#7fc4c9" stroke-width="9"/>
      <ellipse cx="86" cy="86" rx="14" ry="12" fill="SKIN"/><ellipse cx="114" cy="86" rx="14" ry="12" fill="SKIN"/>
    </g>
  </g>
</svg>
`,fc=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" width="200" height="300">
  <!-- Original dad in a kufi and thobe with a short beard. SKIN is replaced at load. -->
  <defs><filter id="boil" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="1"/><feDisplacementMap in="SourceGraphic" scale="3.5" xChannelSelector="R" yChannelSelector="G"/></filter></defs>
  <g filter="url(#boil)" fill="none" stroke="#4a2c1a" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <ellipse cx="84" cy="288" rx="16" ry="8" fill="#6b4a3a"/><ellipse cx="116" cy="288" rx="16" ry="8" fill="#6b4a3a"/>
    <path d="M60 140 Q100 130 140 140 L150 280 Q100 290 50 280 Z" fill="#f1e4c8"/>
    <path d="M66 142 Q100 134 134 142 L138 220 Q100 226 62 220 Z" fill="#8fb58a"/>
    <path d="M100 138 L100 222" stroke-width="3"/>
    <circle cx="58" cy="92" r="10" fill="SKIN"/><circle cx="142" cy="92" r="10" fill="SKIN"/>
    <ellipse cx="100" cy="90" rx="38" ry="40" fill="SKIN"/>
    <path d="M62 92 Q62 142 100 146 Q138 142 138 92 Q134 118 118 120 Q100 110 82 120 Q66 118 62 92 Z" fill="#5a3a2a"/>
    <path d="M62 66 Q62 34 100 32 Q138 34 138 66 Q100 58 62 66 Z" fill="#fbf6ea"/>
    <path d="M68 56 L76 50 L84 56 L92 50 L100 56 L108 50 L116 56 L124 50 L132 56" stroke="#8fb58a" stroke-width="3"/>
    <path d="M62 70 Q64 80 64 88" stroke="#5a3a2a" stroke-width="6"/><path d="M138 70 Q136 80 136 88" stroke="#5a3a2a" stroke-width="6"/>
    <circle cx="86" cy="86" r="11" fill="#fff"/><circle cx="114" cy="86" r="11" fill="#fff"/>
    <circle cx="88" cy="88" r="6" fill="#2a1a10" stroke="none"/><circle cx="116" cy="88" r="6" fill="#2a1a10" stroke="none"/>
    <circle cx="90" cy="85" r="2.2" fill="#fff" stroke="none"/><circle cx="118" cy="85" r="2.2" fill="#fff" stroke="none"/>
    <ellipse cx="74" cy="102" rx="8" ry="5" fill="#f4a6b8" stroke="none" opacity=".85"/><ellipse cx="126" cy="102" rx="8" ry="5" fill="#f4a6b8" stroke="none" opacity=".85"/>
    <path class="poseA poseC" d="M92 106 Q100 114 108 106"/>
    <path class="poseB" d="M91 104 Q100 120 109 104 Z" fill="#c9504f" stroke-width="3"/>
    <g class="poseA">
      <path d="M66 160 Q50 191 52 222" stroke-width="17"/><path d="M66 160 Q50 191 52 222" stroke="#f1e4c8" stroke-width="9"/>
      <path d="M134 160 Q150 191 148 222" stroke-width="17"/><path d="M134 160 Q150 191 148 222" stroke="#f1e4c8" stroke-width="9"/>
      <circle cx="52" cy="227" r="8" fill="SKIN"/><circle cx="148" cy="227" r="8" fill="SKIN"/>
    </g>
    <g class="poseB">
      <path d="M66 160 Q36 180 44 194" stroke-width="17"/><path d="M66 160 Q36 180 44 194" stroke="#f1e4c8" stroke-width="9"/>
      <circle cx="46" cy="200" r="8" fill="SKIN"/>
      <path d="M134 160 Q160 154 164 120" stroke-width="17"/><path d="M134 160 Q160 154 164 120" stroke="#f1e4c8" stroke-width="9"/>
      <path d="M165 110 L166 94" stroke-width="5"/>
      <circle cx="164" cy="114" r="8" fill="SKIN"/>
    </g>
    <g class="poseC">
      <path d="M66 160 Q40 140 86 92" stroke-width="17"/><path d="M66 160 Q40 140 86 92" stroke="#f1e4c8" stroke-width="9"/>
      <path d="M134 160 Q160 140 114 92" stroke-width="17"/><path d="M134 160 Q160 140 114 92" stroke="#f1e4c8" stroke-width="9"/>
      <ellipse cx="86" cy="84" rx="14" ry="12" fill="SKIN"/><ellipse cx="114" cy="84" rx="14" ry="12" fill="SKIN"/>
    </g>
  </g>
</svg>
`,Zr=bh.degToRad(48),rr=Math.PI/4,bl=1/Math.cos(Zr),Mg=7,Ja=3,Vn=12,Wn=8,on=3.4,yg={x:.4,z:1,rx:3.3,rz:2.2},Sg={parent:[-1.25,1.7],child:[1.75,.55]},mr=["#f3c9a3","#d9a275","#a8704a"],El={girl:hc,boy:uc,mama:dc,baba:fc};async function bg(n,e,t){const i=new Image;i.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n),await i.decode();const[r,s]=qt(e,t);return s.drawImage(i,0,0,e,t),r}function Eg(n,e,t,i,r){let s=n.replaceAll("SKIN",r);return s=s.replace("</svg>",`<style>.poseA,.poseB,.poseC{display:none}.pose${i}{display:inline}</style></svg>`),Promise.all(Array.from({length:Ja},(a,o)=>bg(s.replace(/seed="\d+"/,`seed="${o*17+3}"`),e,t).then(l=>bn(l))))}const Xr=n=>Array.from({length:Ja},(e,t)=>bn(n(t)));async function wg(n){const e=new sc,t=new ps(-1,1,1,-1,.1,300),i=_g(n),r=[],s=[];e.background=bn(Qm()),e.add(new Hm(16777215,15985368,1.9));const a=new Wm(16777215,1.3);a.position.set(-6,8,7),e.add(a);const o=64,l=bn(jm({W:Vn,H:Wn,ppu:o,rug:yg}));l.anisotropy=n.capabilities.getMaxAnisotropy();const c=new ft(new un(Vn,Wn),new En({map:l}));c.rotation.x=-Math.PI/2,e.add(c);const h=new ft(new Cn(Vn+.3,.5,Wn+.3),pr("#b98655"));h.position.set(-.15,-.26,-.15),e.add(h);const d=bn(ml(Vn,on,o,31,(D,O,H,te)=>{const[Q,$]=H(7.9,.35);Km(D,O,Q,$,1.7*te,1.55*te);const[we,J]=H(3.8,.95);gl(D,O,we,J,.42*te)})),u=bn(ml(Wn,on,o,41,(D,O,H,te)=>{const[Q,$]=H(6.3,.9);gl(D,O,Q,$,.34*te)})),p=pr("#e9d6b6"),g=new ft(new Cn(Vn+.3,on,.3),p);g.position.set(-.15,on/2,-Wn/2-.15),e.add(g);const _=new ft(new Cn(.3,on,Wn),p);_.position.set(-Vn/2-.15,on/2,0),e.add(_);const m=new ft(new un(Vn,on),new En({map:d}));m.position.set(0,on/2,-Wn/2+.003),e.add(m);const f=new ft(new un(Wn,on),new En({map:u}));f.rotation.y=Math.PI/2,f.position.set(-Vn/2+.003,on/2,0),e.add(f);const y=(D,O,H,te=0)=>(D.position.set(O,D.position.y,H),D.rotation.y=te,e.add(D),D);y(cg(),-2,-3.25),y(hg(),-.9,-.9),y(ug(),-5.62,-1.7,Math.PI/2),y(dg(),-5.3,-3.5);const b=y(fg(),-5.95,1.6,0);b.position.y=3,y(Ml("#f0a3b8"),1.1,-2.3),y(Ml("#f5cf5f",.85),2.2,-1.7),y(yl(4),5.3,-3.4),y(yl(9),-5.3,3.3),y(pg(),4.2,-2.4,.1);const[x,C]=qt(128,64),T=C.createRadialGradient(64,32,4,64,32,62);T.addColorStop(0,"rgba(110,65,30,.4)"),T.addColorStop(.7,"rgba(110,65,30,.25)"),T.addColorStop(1,"rgba(110,65,30,0)"),C.setTransform(1,0,0,.5,0,16),C.fillStyle=T,C.beginPath(),C.arc(64,32,62,0,Math.PI*2),C.fill();const A=new En({map:bn(x),transparent:!0,depthWrite:!1}),P=new un(1,1).rotateX(-Math.PI/2);function E(D,O,H,te,Q=te*.5){const $=new ft(P,D);return $.position.set(O,.012,H),$.scale.set(te,1,Q),$.renderOrder=1,$.userData.noInk=!0,e.add($),$}E(A,-.9,-.85,2.4,2.2),E(A,-2,-3,3.6,1.4);function S(D,O,H,te,Q,$){const we=new un(D,O*bl);we.translate(0,O*bl/2,0);const J=new ft(we,$);return J.position.set(H,te,Q),J.rotation.y=rr,J.userData.sprite=!0,J.userData.colorMap=()=>$.map,e.add(J),s.push(J),J}const R=D=>new En({map:D,alphaTest:.5,alphaToCoverage:!0,side:kt,transparent:!1}),V=bn(qt(4,4)[0]),B=new En({map:bn(Zm()),transparent:!0,depthWrite:!1,opacity:0}),Y=E(B,0,0,2.6,2),q={};for(const D of["child","parent"]){const[O,H]=Sg[D],te=D==="child"?[1.45,1.74]:[1.6,2.4],Q={role:D,x:O,z:H,pose:"A",frames:null,mat:R(V),hop:0,facing:1};Q.mesh=S(te[0],te[1],O,0,H,Q.mat),Q.shadow=E(A,O,H,te[0]*.9),q[D]=Q}q.child.facing=-1;const j={think:Xr(Jm),speak:Xr(qm),heart:Xr(eg)},ee={};for(const D of["child","parent"]){const O=R(j.speak[0]),H=S(.8,.66,0,0,0,O);H.visible=!1,ee[D]={mesh:H,mat:O,kind:"speak"}}const W=[],ae=Xr(D=>Ym(D)),pe=R(ae[0]);r.push({mat:pe,frames:ae});function Me(D,O,H,te=8){for(let Q=0;Q<te;Q++){const $=Q/te*Math.PI*2+Math.random(),we=S(.34,.34,D,O,H,pe);W.push({m:we,vx:Math.cos($)*2.2,vz:Math.sin($)*1.4,vy:2.8+Math.random()*1.6,t:0})}}async function ze({childLook:D="girl",parentRole:O="baba",skin:H=0}={}){const te=mr[H]||mr[0],Q=async(J,ce,Se)=>{const[Ae,de,We]=await Promise.all(["A","B","C"].map(Ne=>Eg(J,ce,Se,Ne,te)));return{A:Ae,B:de,C:We}},[$,we]=await Promise.all([Q(El[D],300,360),Q(El[O],300,450)]);return q.child.frames=$,q.parent.frames=we,{child:$.A[0].image,parent:we.A[0].image}}const Le={aspect:1.6,area:{x:0,y:0,w:1,h:1},cur:null,tgt:null},K=new F(-.2,.9,0);function ne(D){const te=Math.max(4.2/D.h,7.4/(D.w*Le.aspect))*1,Q=te*Le.aspect,$=(D.x+D.w/2)*2-1,we=1-(D.y+D.h/2)*2;return{l:-Q-$*Q,r:Q-$*Q,t:te-we*te,b:-te-we*te}}function ge(D=1){if(Le.tgt=ne(Le.area),!Le.cur||D>=1)Le.cur={...Le.tgt};else for(const O of["l","r","t","b"])Le.cur[O]+=(Le.tgt[O]-Le.cur[O])*D;Object.assign(t,{left:Le.cur.l,right:Le.cur.r,top:Le.cur.t,bottom:Le.cur.b}),t.updateProjectionMatrix()}function oe(D,O){Le.aspect=D/O,ge(1)}function Te(D,O=!1){Le.area=D,O&&ge(1)}const Ce=60;t.position.set(K.x+Math.sin(rr)*Math.cos(Zr)*Ce,K.y+Math.sin(Zr)*Ce,K.z+Math.cos(rr)*Math.cos(Zr)*Ce),t.lookAt(K);let Re="home",je="child",Ge=0,tt=0;function N(D,O=je){Re=D,je=O,Ge=0,tt=0}function Ut(D){q[D].hop=.45}let De=0,Ve=0,be=0;function et(D){const O=D===je,H=Math.floor(De*2.2)%2;switch(Re){case"lookaway":case"study":return O?"A":"C";case"teach":return O&&H?"B":"A";case"listen":return O?"A":H?"B":"A";case"talk":return Math.floor(De*.8)%2===(D==="child"?0:1)&&H?"B":"A";case"celebrate":return"B";default:return"A"}}function Ee(D){const O=D===je;switch(Re){case"study":return O?"think":null;case"teach":return O?"speak":null;case"listen":return O?null:"think";case"talk":return Math.floor(De*.8)%2===(D==="child"?0:1)?"heart":null;default:return null}}const w=new F(Math.cos(rr),0,-Math.sin(rr));function v(D){De+=D,Ge+=D;const O=Math.max(0,Math.floor(De*Mg))%Ja;if(O!==Ve){Ve=O,be=O*7.31;for(const Q of r)Q.mat.map=Q.frames[O]}for(const Q of["child","parent"]){const $=q[Q];if(!$.frames){$.mesh.visible=!1;continue}$.mesh.visible=!0,$.mat.map=$.frames[et(Q)][O],Re==="celebrate"&&$.hop<=0&&Math.random()<D*.9&&($.hop=.45);let we=0;$.hop>0&&($.hop=Math.max(0,$.hop-D),we=Math.sin((1-$.hop/.45)*Math.PI)*.5);const J=1+Math.sin(De*3+(Q==="child"?1:0))*.018;$.mesh.position.set($.x,we,$.z),$.mesh.scale.set($.facing/J,J,1),$.shadow.scale.set(.95*(1-we*.5),1,.45*(1-we*.5));const ce=ee[Q],Se=Ee(Q);if(ce.mesh.visible=!!Se,Se){ce.mat.map=j[Se][O];const Ae=Q==="child"?1.85:2.5,de=Q==="child"?-1:1;ce.mesh.position.set($.x+w.x*de*.55,Ae+Math.sin(De*4)*.05,$.z+w.z*de*.55),ce.mesh.scale.set(-de,1,1)}}const H=["teach","study"].includes(Re)?1:Re==="celebrate"?.6:0;B.opacity+=(H-B.opacity)*Math.min(1,D*4);const te=q[Re==="listen"?je==="child"?"parent":"child":je];if(Y.position.x+=(te.x-Y.position.x)*Math.min(1,D*6),Y.position.z+=(te.z-Y.position.z)*Math.min(1,D*6),Re==="celebrate"&&(tt-=D,tt<=0&&Ge<6)){tt=1.2;const Q=Math.random()<.5?"child":"parent";Me(q[Q].x,1.9,q[Q].z,7)}for(let Q=W.length-1;Q>=0;Q--){const $=W[Q];$.t+=D,$.vy-=9*D,$.m.position.x+=$.vx*D,$.m.position.z+=$.vz*D,$.m.position.y=Math.max(0,$.m.position.y+$.vy*D),$.m.scale.setScalar(Math.max(.001,1-$.t/.9)),$.t>.9&&(e.remove($.m),s.splice(s.indexOf($.m),1),W.splice(Q,1))}b.rotation.z=Math.sin(De*1.1)*.015,ge(Math.min(1,D*5))}const k=()=>i.render(e,t,be);return oe(window.innerWidth,window.innerHeight),{scene:e,camera:t,update:v,render:k,resize:oe,setArea:Te,setMood:N,setFamily:ze,burst:()=>{Me(q.child.x,1.7,q.child.z,10),Me(q.parent.x,2.3,q.parent.z,10)},hop:Ut,chars:q,get mood(){return Re}}}const as={quran:{name:"Qur'an",icon:"📖",tint:"#cfe3f5",colour:"#3f7fb5"},seerah:{name:"Seerah",icon:"🐪",tint:"#f6e0bf",colour:"#c9803a"},akhlaq:{name:"Akhlaq",icon:"💛",tint:"#f8d6df",colour:"#d0597a"},worship:{name:"Worship",icon:"🤲",tint:"#d6eedd",colour:"#3f9a6a"}},os={explain:{name:"Explain It",icon:"🎤",blurb:"Teach it in your own words"},draw:{name:"Draw It",icon:"🎨",blurb:"Draw it, they guess"},act:{name:"Act It",icon:"🎭",blurb:"Act it out, no words"},arrange:{name:"Arrange It",icon:"🧩",blurb:"Put the steps in order"},ask:{name:"Ask Me",icon:"❓",blurb:"{C} asks, {P} teaches"},dontsay:{name:"Don't Say It",icon:"🚫",blurb:"Explain without the banned words"}},Xi=[{id:"sadaqah",title:"Sadaqah",sub:"Giving for Allah",chapter:"akhlaq",mode:"explain",icons:["🤲","😊","🍞","🪨","💛"],points:[["🤲","Sadaqah means giving something good to others, to please Allah."],["🍞","It can be money or food…"],["😊","…but it can also be a smile, a kind word or helping someone!"],["🪨","Moving something harmful (like a stone or broken glass) out of the path is sadaqah too."],["💛","Even small things count when we do them for Allah."]],checklist:[["Sadaqah is giving good to others, for Allah","Why do we give sadaqah? Who are we doing it for?"],["Helping someone can be sadaqah","If I help Grandma carry her bags, could that be sadaqah?"],["It is not only money","Does sadaqah always need money?"],["Even a smile counts","What's the easiest sadaqah your face can do?"],["Moving harm out of the way counts","What if you see a banana peel on the path?"]],source:{kind:"hadith",text:"Your smile in the face of your brother is charity.",ref:"Jami' at-Tirmidhi 1956",review:!0},extra:{kind:"hadith",text:"Every act of goodness is charity.",ref:"Sahih al-Bukhari 6021; Sahih Muslim 1005"},deeper:["Zakah is the obligatory charity (one of the five pillars); sadaqah is voluntary and can be any good deed.",'Ask: "What sadaqah did you see someone do today?" Children learn a lot from spotting it in others.'],talk:"What is one sadaqah each of us could do tomorrow without spending any money?",apply:'Everyone does one "no-money sadaqah" tomorrow and shares it at dinner.'},{id:"fatiha",title:"Al-Fatiha",sub:"The Opening",chapter:"quran",mode:"explain",icons:["📖","7️⃣","🙏","🛤️","💛"],points:[["📖",`Al-Fatiha is the first surah of the Qur'an. Its name means "The Opening".`],["7️⃣","It has 7 ayat (verses)."],["🙏","We recite it in every rak'ah of every salah."],["💛",'It praises Allah: "All praise is for Allah, Lord of all the worlds."'],["🛤️",'It asks Allah: "Guide us to the straight path."']],checklist:[["It's the first surah of the Qur'an","Where in the Qur'an do we find Al-Fatiha?"],["It has 7 ayat","Shall we count its ayat together on our fingers?"],["We say it in every rak'ah of salah","When do we say Al-Fatiha every single day?"],["It praises Allah","What is the very first thing Al-Fatiha says about Allah?"],["It asks Allah to guide us","What do we ask Allah for near the end of Al-Fatiha?"]],source:{kind:"quran",text:"All praise is for Allah, Lord of all the worlds… Guide us to the straight path.",ref:"Qur'an 1:2, 1:6"},extra:{kind:"hadith",text:"There is no prayer for the one who does not recite the Opening of the Book.",ref:"Sahih al-Bukhari 756; Sahih Muslim 394"},deeper:['Ayah 5, "You alone we worship and You alone we ask for help", is the heart of the surah: worship and asking help go to Allah only.',"Try saying one ayah slowly together and pausing to think about its meaning."],talk:"What is one thing you would like Allah to guide you to this week?",apply:"Pick one ayah of Al-Fatiha and learn its meaning together before bed."},{id:"amin",title:"Al-Amin",sub:"The Trustworthy",chapter:"seerah",mode:"explain",icons:["🤝","💎","🗣️","🌱","🕋"],points:[["🕋",'Before he became a prophet, the people of Makkah called Prophet Muhammad ﷺ "Al-Amin", the trustworthy one.'],["💎","People trusted him to look after their precious things."],["🗣️","He always told the truth, even when it was hard."],["🌱","Telling the truth leads to good deeds, and good deeds lead to Jannah."],["🤝","When we keep our promises, people can trust us too."]],checklist:[["People called him Al-Amin","What special name did the people of Makkah give the Prophet ﷺ?"],["Al-Amin means trustworthy",'What does "trustworthy" mean? Can you think of someone like that?'],["People left their precious things with him","If you had treasure, who would you give it to, to keep safe?"],["He always told the truth","Did he tell the truth only when it was easy?"],["Truth leads to good and to Jannah","Where does telling the truth lead us in the end?"]],source:{kind:"hadith",text:"Truthfulness leads to righteousness, and righteousness leads to Paradise.",ref:"Sahih al-Bukhari 6094; Sahih Muslim 2607"},deeper:["The Seerah tells us that on the night of the Hijrah he arranged for people's trusts to be returned to them, even to people who were against him.","Share a time you found honesty hard and what helped you. Children love hearing that grown-ups find things hard too."],talk:"When is it hard to tell the truth? What could help us be brave?",apply:'Notice someone being honest this week and tell them "JazakAllahu khayran".'},{id:"parents",title:"Kindness to Parents",sub:'Not even "uff"',chapter:"akhlaq",mode:"explain",icons:["👪","🙊","🤲","💐","🏡"],points:[["👪","Allah tells us to be very kind to our parents."],["🙊",'We should not even say "uff" (a grumpy sound) to them.'],["💬","We speak to them with gentle, respectful words."],["🤲",`We make du'a for them: "My Lord, have mercy on them as they cared for me when I was small."`],["💐","Helping and listening to them is a way to please Allah."]],checklist:[["Allah tells us to be kind to parents","Who tells us to be kind to our parents?"],['Not even saying "uff"','Is it okay to make a grumpy "uff" sound at Mama or Baba?'],["Gentle, respectful words","How should our voice sound when we talk to parents?"],["Make du'a for them","What can we ask Allah for, for our parents?"],["Helping them pleases Allah","How could helping at home be an act of worship?"]],source:{kind:"quran",text:'Do not say to them "uff" and do not scold them, but speak to them a noble word… and say, "My Lord, have mercy upon them as they brought me up when I was small."',ref:"Qur'an 17:23–24"},deeper:["This is a humbling topic to be taught by your child. Thank them for teaching you and share how you try to be kind to your own parents."],talk:"What's one kind thing we could do for Grandma or Grandad this week?",apply:"Say the du'a for parents together every night this week."},{id:"hijrah",title:"The Hijrah",sub:"Makkah to Madinah",chapter:"seerah",mode:"draw",icons:["🐪","🏜️","⛰️","✨","🏘️"],word:"HIJRAH",drawIdeas:[["🐪","camels"],["🏜️","desert"],["⛰️","a cave in a mountain"],["✨","stars at night"],["🏘️","two towns with a long path between"]],guessHints:["It's a long journey 🐪","It happened long ago in Arabia 🏜️","Our Islamic calendar counts from it 📅"],points:[["🐪","The Hijrah was the journey of the Prophet ﷺ and the Muslims from Makkah to Madinah."],["⛰️","On the way, the Prophet ﷺ and his friend Abu Bakr hid in a cave, and Allah protected them."],["🏘️","The people of Madinah welcomed them and shared their homes."],["📅","The Islamic calendar counts its years from the Hijrah."]],checklist:[["Muslims moved from Makkah to Madinah","Which city did they leave, and where did they go?"],["They hid in a cave on the way","Where did they hide from the people chasing them?"],["Allah protected them","Who kept them safe in the cave?"],["Madinah welcomed them","How did the people of Madinah treat the Muslims who arrived?"],["Our calendar starts from the Hijrah","Why is the Hijrah important for our calendar?"]],source:{kind:"quran",text:'When they were in the cave, he said to his companion, "Do not grieve; indeed Allah is with us."',ref:"Qur'an 9:40"},deeper:["The Muslims of Madinah are called the Ansar (the Helpers) and those who moved are the Muhajirun. Their brotherhood is a beautiful story to tell at bedtime."],talk:"The people of Madinah shared their homes. How can we welcome someone new?",apply:"Welcome someone new this week, like a new classmate or neighbour, with salam and a smile."},{id:"ramadan",title:"Ramadan",sub:"The month of fasting",chapter:"worship",mode:"draw",icons:["🌙","🌴","🍽️","🌅","📖"],word:"RAMADAN",drawIdeas:[["🌙","a crescent moon"],["🌴","dates"],["🍽️","a table ready for iftar"],["🌅","the sun setting"],["🏮","lanterns"]],guessHints:["It's a special month 📅","We look for the new moon 🌙","We eat before dawn and after sunset 🍽️"],points:[["🌙","Ramadan is the month when Muslims fast."],["🌅","Grown-ups fast from dawn (Fajr) until sunset (Maghrib). Children practise little by little."],["🍽️","We eat suhoor before dawn and break the fast at iftar, often with dates."],["📖","The Qur'an was first sent down in Ramadan."],["🎉","At the end of Ramadan we celebrate Eid al-Fitr."]],checklist:[["Ramadan is the month of fasting","What do Muslims do during the day in Ramadan?"],["Fasting is from dawn to sunset","When does the fast start, and when does it end?"],["Suhoor and iftar","What are the two special meals called?"],["The Qur'an came down in Ramadan","What special book was first sent down in Ramadan?"],["Eid comes at the end","What happens when Ramadan finishes?"]],source:{kind:"quran",text:"The month of Ramadan is the one in which the Qur'an was sent down, a guidance for people.",ref:"Qur'an 2:185"},deeper:["Fasting becomes obligatory at puberty; people who are ill or travelling have allowances (2:184–185). Keep it simple and positive for young children."],talk:"What is your favourite thing about Ramadan, and why?",apply:"Plan one good deed for next Ramadan, and try it this week for practice."},{id:"creation",title:"Allah's Signs",sub:"In the sky and the earth",chapter:"quran",mode:"draw",icons:["☀️","🌙","🌳","🐝","🌊"],word:"ALLAH'S CREATION",drawIdeas:[["☀️","the sun"],["🌙","the moon and stars"],["🌳","trees and flowers"],["🐝","animals"],["🌊","the sea"]],guessHints:["Look outside the window 🪟","Allah made all of it ✨","Day and night are part of it 🌗"],points:[["✨","Allah created everything: the sky, the earth and everything in them."],["🌗",'The sun, the moon, and day turning into night are "signs" that help us think about Allah.'],["🤔","When we look at Allah's creation, it reminds us how great Allah is."],["😮",'When something amazes us, we can say "SubhanAllah!"'],["🌱","We look after Allah's creation: animals, plants and the earth."]],checklist:[["Allah created everything","Who made the sun, the sea and the bees?"],["Day and night are signs","What happens every evening that is a sign from Allah?"],["Creation reminds us of Allah","What can looking at the stars make us think about?"],["We say SubhanAllah","What do we say when something amazes us?"],["We look after creation","How can we take care of Allah's creation?"]],source:{kind:"quran",text:"In the creation of the heavens and the earth, and the alternation of the night and the day, are signs for people of understanding.",ref:"Qur'an 3:190"},deeper:["After Maghrib is a lovely time for this one: step outside and look at the sky together."],talk:"What is the most amazing thing Allah made that you saw today?",apply:'Go outside together, find three "signs" and say SubhanAllah for each one.'},{id:"neighbour",title:"Helping a Neighbour",sub:"Respecting our elders",chapter:"akhlaq",mode:"act",icons:["👵","🛍️","🏠","🤝","😊"],act:"Act out: helping an elderly neighbour carry heavy shopping bags to her door, and giving salam.",actTips:["No talking about what you are doing, only actions!","Show heavy bags, slow steps, opening a door…","…and a big kind smile at the end."],guessHints:["Someone needs help 🤝","They live near us 🏠","They are older, like a grandparent 👵"],points:[["🏠","Islam teaches us to be good to our neighbours."],["👵","We show extra respect and care to older people."],["🛍️","We can help without being asked: carrying bags, opening doors, checking they are okay."],["😊","Kind words and salam make their day brighter, and helping is sadaqah too."]],checklist:[["Be good to neighbours","Who are our neighbours? How should we treat them?"],["Respect our elders","How should we treat people who are older than us?"],["Help without being asked","Do we have to wait to be asked before we help?"],["Kind words and salam","What could we say to our neighbour when we see them?"],["Helping is sadaqah too","Do we get reward from Allah for helping?"]],source:{kind:"hadith",text:"He is not one of us who does not show mercy to our young and respect to our elders.",ref:"Jami' at-Tirmidhi 1919",review:!0},extra:{kind:"hadith",text:"Whoever believes in Allah and the Last Day, let him be good to his neighbour.",ref:"Sahih Muslim 47",review:!0},deeper:["If you have an elderly neighbour, plan a real visit together. Doing it makes the lesson stick far better than talking about it."],talk:"Which neighbour could we check on this week? What could we do for them?",apply:"Take something small to a neighbour, or offer to help them."},{id:"homehelp",title:"Helping at Home",sub:"A beautiful Sunnah",chapter:"seerah",mode:"act",icons:["🧹","🍽️","👕","🏠","😊"],act:"Act out: helping at home, like tidying toys, setting the table and folding clothes.",actTips:["No words, just actions!","Do two or three different jobs.","Finish with a happy stretch: job done!"],guessHints:["It happens at home 🏠","It makes the whole family smile 😊","The Prophet ﷺ did it too 💛"],points:[["🏠","The Prophet ﷺ helped his family with jobs at home."],["🕌","When it was time to pray, he stopped and went to pray."],["💛","So helping at home is following his Sunnah!"],["🧹","Everyone in the family can help, even with small jobs."],["🤲","When we help for Allah, we get reward."]],checklist:[["The Prophet ﷺ helped his family","What did the Prophet ﷺ do when he was at home?"],["He stopped to pray on time","What did he do when it was time for salah?"],["Helping at home is a Sunnah","So when we tidy up, whose example are we following?"],["Everyone can help","Is helping only a job for grown-ups?"],["We get reward for helping","Does Allah reward us for folding the washing?"]],source:{kind:"hadith",text:"'A'ishah was asked what the Prophet ﷺ used to do at home. She said: he used to help his family, and when the time for prayer came he would go out to pray.",ref:"Sahih al-Bukhari 676"},deeper:['Give your child a real "Sunnah job" that is theirs for the week, and thank them each time.'],talk:'Which job at home could be your "Sunnah job" this week?',apply:"Everyone picks one helping job for the whole week."},{id:"wudu",title:"Wudu Steps",sub:"Getting ready for salah",chapter:"worship",mode:"arrange",icons:["💧","✋","🙂","💪","🦶"],before:'Before we start: make the intention (niyyah) in your heart and say "Bismillah".',steps:[["✋","Hands","Wash both hands"],["👄","Mouth","Rinse the mouth"],["👃","Nose","Rinse the nose"],["🙂","Face","Wash the whole face"],["💪","Arms","Wash arms up to the elbows, right then left"],["💆","Head","Wipe over the head with wet hands"],["👂","Ears","Wipe the ears"],["🦶","Feet","Wash feet up to the ankles, right then left"]],points:[["💧","Wudu is how we get clean and ready for salah."],["🤲",'We start with the intention and "Bismillah".'],["3️⃣","Most parts are washed three times (washing once is the minimum; three is the Sunnah)."],["➡️","We start with the right side, then the left."],["🚰","We use water carefully and don't waste it."]],checklist:[["Start with intention and Bismillah","What do we do and say before the first splash?"],["Usually three times each","How many times do we wash each part?"],["Right side first","Which side do we start with, right or left?"],["Arms up to the elbows","How far up do we wash our arms?"],["Wipe the head (not wash)","Do we pour water over our head, or wipe it?"],["Don't waste water","Should we leave the tap running the whole time?"]],source:{kind:"quran",text:"O you who believe, when you rise to pray, wash your faces and your hands up to the elbows, wipe over your heads, and wash your feet up to the ankles.",ref:"Qur'an 5:6"},extra:{kind:"hadith",text:"'Uthman showed people the Prophet's ﷺ wudu: washing the hands, mouth, nose, face, arms, wiping the head, and washing the feet, each washed part three times.",ref:"Sahih al-Bukhari 159; Sahih Muslim 226",review:!0},deeper:["This is the standard order agreed on by the main schools. Details (e.g. how to wipe the ears) differ slightly; follow what your family and local masjid teach."],talk:"Which step of wudu do you always remember? Which one is easy to forget?",apply:"Make wudu side by side before one salah and check each other gently."},{id:"prayers",title:"The Five Prayers",sub:"Through the day",chapter:"worship",mode:"arrange",icons:["🌅","☀️","🌤️","🌇","🌙"],before:"Every day starts with Fajr. Put the five daily prayers in order through the day.",steps:[["🌅","Fajr","At dawn, before sunrise"],["☀️","Dhuhr","Just after midday"],["🌤️","Asr","In the afternoon"],["🌇","Maghrib","Just after sunset"],["🌙","Isha","At night"]],points:[["5️⃣","Muslims pray five times every day."],["🌅","The day starts with Fajr at dawn."],["☀️","Then Dhuhr after midday and Asr in the afternoon."],["🌇","Maghrib is just after sunset, and Isha is at night."],["⏰","Each prayer has its own time, and praying on time is loved by Allah."]],checklist:[["Five prayers every day","How many times do we pray each day?"],["The day starts with Fajr","Which prayer do we pray first, at dawn?"],["Maghrib is right after sunset","Which prayer comes when the sun goes down?"],["Isha is at night","What is the last prayer before bed?"],["Each prayer has its own time","Can we pray Asr whenever we like?"]],source:{kind:"quran",text:"Indeed, prayer has been decreed upon the believers at fixed times.",ref:"Qur'an 4:103"},extra:{kind:"hadith",text:'The Prophet ﷺ was asked which deed is most beloved to Allah. He said: "Prayer at its proper time."',ref:"Sahih al-Bukhari 527; Sahih Muslim 85"},deeper:['Let your child be the family "prayer-time announcer" for a week, checking the timetable and calling everyone.'],talk:"Which prayer is easiest for our family to pray together? Which is hardest?",apply:"Pray one salah together as a family every day this week."},{id:"bismillah",title:"Saying Bismillah",sub:"Before eating, and more",chapter:"worship",mode:"ask",icons:["🍽️","✋","🚪","🎒","💛"],points:[["🍽️",'Say "Bismillah" (in the name of Allah) before eating and drinking.'],["✋","Eat with the right hand, and from what is in front of you."],["🤭",'If you forget at the start, say "Bismillahi awwalahu wa akhirahu" (in the name of Allah, at its beginning and its end) when you remember.'],["🚪",`Before going into the bathroom, say the du'a outside: "Allahumma inni a'udhu bika minal-khubuthi wal-khaba'ith" (O Allah, I seek refuge in You from all evil and evil ones). We say it before going in, not inside.`],["🎒","We can say Bismillah before lots of good things: leaving home, starting homework, getting into the car."]],questions:[["🍽️","What do we say before we eat?"],["✋","Which hand do we eat with?"],["🤭","What if I forget to say Bismillah?"],["🚪","What about going into the bathroom?"],["🎒","What else can I say Bismillah before?"]],checklist:[["🍽️ Bismillah before eating","Ask again: what do we say before food?"],["✋ Eat with the right hand","Ask: which hand, and why?"],["🤭 Forgot? Say it when you remember","Ask: what are the words if I forget?"],["🚪 Bathroom du'a before going in","Ask: do we say it inside or before we go in?"],["🎒 Bismillah before good things","Ask for one more example!"]],source:{kind:"hadith",text:"O young boy, say Bismillah, eat with your right hand, and eat from what is in front of you.",ref:"Sahih al-Bukhari 5376; Sahih Muslim 2022"},extra:{kind:"hadith",text:`When entering the toilet the Prophet ﷺ would say: "Allahumma inni a'udhu bika minal-khubuthi wal-khaba'ith."`,ref:"Sahih al-Bukhari 142; Sahih Muslim 375"},deeper:['The "if you forget" wording is reported by Abu Dawud (3767) and at-Tirmidhi (1858). It is well known, but please check it with your teacher.'],talk:"Game time: {P} names something we do, {C} says if we say Bismillah first!",apply:'At every meal this week, the youngest reminds everyone: "Bismillah!"'},{id:"ikhlas",title:"Surah Al-Ikhlas",sub:"Allah is One",chapter:"quran",mode:"ask",icons:["☝️","📖","⭐","🤲","💛"],points:[["☝️",'"Say: He is Allah, the One." Allah is One, with no partners.'],["🤲",'"Allah, the Eternal Refuge (As-Samad)": everyone needs Allah, and Allah needs no one.'],["🚫",'"He neither begets nor is born": Allah has no children and no parents.'],["🔍",'"Nor is there to Him any equivalent": nothing is like Allah.'],["⭐","The Prophet ﷺ said this surah is equal to a third of the Qur'an."]],questions:[["☝️","What does Surah Al-Ikhlas tell us about Allah?"],["🤲","Does Allah need anything?"],["👪","Does Allah have a family like we do?"],["🔍","Is anything like Allah?"],["⭐","Why is this surah so special?"]],checklist:[["☝️ Allah is One","Ask: how many gods are there?"],["🤲 Everyone needs Allah","Ask: who do we need, and who needs nothing?"],["👪 No children, no parents","Ask: does Allah have a mum or dad?"],["🔍 Nothing is like Allah","Ask: can we imagine what Allah is like?"],["⭐ Equal to a third of the Qur'an","Ask: what did the Prophet ﷺ say about this surah?"]],source:{kind:"quran",text:'Say, "He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent."',ref:"Qur'an 112:1–4"},extra:{kind:"hadith",text:`"Say: He is Allah, the One" is equal to a third of the Qur'an.`,ref:"Sahih al-Bukhari 5013",review:!0},deeper:['Children often ask "Where is Allah?" or "What does Allah look like?". Ayah 4 gives a calm, honest answer: nothing is like Him, so we cannot picture Him.'],talk:"Allah needs nothing, but we need Allah for everything. What are three things we need Allah for today?",apply:"Recite Al-Ikhlas together before sleeping tonight."},{id:"sneeze",title:"When We Sneeze",sub:"A du'a for a sneeze",chapter:"akhlaq",mode:"ask",icons:["🤧","💬","🤲","👂","🧻"],points:[["🤧",'When you sneeze, say "Alhamdulillah" (all praise is for Allah).'],["👂",'Whoever hears it replies "Yarhamuk-Allah" (may Allah have mercy on you).'],["💬",'The one who sneezed answers "Yahdikumullahu wa yuslihu balakum" (may Allah guide you and set your affairs right).'],["🧻","Good manners: cover your mouth and nose with a tissue or your elbow."]],questions:[["🤧","What do we say when we sneeze?"],["👂","What do I say when someone else sneezes?"],["💬","And what do they say back?"],["🤲","Why do we say Alhamdulillah?"],["🧻","What else is good manners when we sneeze?"]],checklist:[["🤧 Say Alhamdulillah","Ask: what are the first words after a sneeze?"],["👂 Reply Yarhamuk-Allah","Ask: what do I say to someone who sneezed?"],["💬 Answer Yahdikumullah…","Ask: what is the answer back?"],["🤲 We thank Allah for our health","Ask: why say Alhamdulillah after a sneeze?"],["🧻 Cover your sneeze","Ask: what should my hands or elbow do?"]],source:{kind:"hadith",text:'When one of you sneezes, let him say "Alhamdulillah", and let his brother say "Yarhamuk-Allah". When he says that, let him reply "Yahdikumullahu wa yuslihu balakum".',ref:"Sahih al-Bukhari 6224"},deeper:["Practising with pretend sneezes is silly, fun and very effective. Expect giggles!"],talk:"Practice time! Do a pretend sneeze and everyone replies with the du'a.",apply:"Catch each other's sneezes all week and reply with the du'a."},{id:"salah",title:"Salah",sub:"Our daily prayer",chapter:"worship",mode:"dontsay",icons:["🕌","🧎","🧭","💧","🤲"],word:"SALAH",banned:["prayer","five","masjid"],points:[["5️⃣","Muslims pray salah five times a day."],["🏛️","Salah is the second pillar of Islam."],["🧭","We face the Qiblah, towards the Ka'bah in Makkah."],["💧","We make wudu before salah."],["🤲","Salah is our special time with Allah: we praise Him and ask Him for help."]],checklist:[["We pray five times a day","How many times a day do we pray?"],["Salah is a pillar of Islam","Which pillar of Islam is salah?"],["We face the Qiblah","Which direction do we face, and why?"],["Wudu comes first","What do we do before we start?"],["It is our time with Allah","Who are we talking to in salah?"]],source:{kind:"quran",text:"Establish prayer for My remembrance.",ref:"Qur'an 20:14"},extra:{kind:"hadith",text:"Islam is built on five: the testimony that there is no god but Allah and that Muhammad is the Messenger of Allah, establishing prayer, giving zakah, Hajj, and fasting Ramadan.",ref:"Sahih al-Bukhari 8; Sahih Muslim 16"},deeper:["Ask your child which part of salah they like best. Many children love sujood when they hear it is when we are closest to Allah."],talk:"What do you like to ask Allah for in your salah?",apply:"Choose a special prayer spot at home together and keep it tidy."},{id:"salam",title:"Salam",sub:"The Muslim greeting",chapter:"akhlaq",mode:"dontsay",icons:["👋","🕊️","💬","💛","🤝"],word:"SALAM",banned:["hello","peace","hi"],points:[["💬",'Muslims greet each other with "Assalamu alaikum", which means "Peace be upon you".'],["↩️",'We reply "Wa alaikum assalam", or with something even better.'],["💛","Spreading salam makes people love each other."],["🤝","We give salam to people we know and people we don't know."]],checklist:[["Assalamu alaikum is our greeting","What words do Muslims use to greet each other?"],['It means "Peace be upon you"',"What does Assalamu alaikum mean?"],["Reply with the same or better","What do we say back?"],["Salam spreads love","What happens when we spread salam?"],["To people we know and don't know","Is salam only for our friends?"]],source:{kind:"hadith",text:"Shall I not tell you of something which, if you do it, you will love one another? Spread salam among yourselves.",ref:"Sahih Muslim 54"},extra:{kind:"quran",text:"When you are greeted with a greeting, greet in return with one better than it, or at least return it.",ref:"Qur'an 4:86"},deeper:['The fuller reply, "Wa alaikum assalam wa rahmatullahi wa barakatuh", is a nice "better greeting" to teach next.'],talk:"Who could we give salam to tomorrow that we don't usually greet?",apply:"Salam race: who can be first to give salam at home all week?"},{id:"quran",title:"The Qur'an",sub:"Allah's words",chapter:"quran",mode:"dontsay",icons:["📖","🌙","✨","🤲","💛"],word:"QUR'AN",banned:["book","read","surah"],points:[["✨","The Qur'an is the words of Allah."],["🕋","Allah sent it down to Prophet Muhammad ﷺ."],["🌙","It was first sent down in the month of Ramadan."],["📣",'The very first word sent down was "Iqra!", which means "Read!"'],["🔢","It has 114 surahs, and we treat it with love and respect."]],checklist:[["It is Allah's words","Whose words are in the Qur'an?"],["Sent to Prophet Muhammad ﷺ","Which prophet received the Qur'an?"],["First sent down in Ramadan","In which month did it first come down?"],['The first word was "Iqra"',"What was the very first word, and what does it mean?"],["114 surahs","How many surahs are in the Qur'an?"]],source:{kind:"quran",text:"Read in the name of your Lord who created.",ref:"Qur'an 96:1"},extra:{kind:"quran",text:"The month of Ramadan is the one in which the Qur'an was sent down.",ref:"Qur'an 2:185"},deeper:["Show your child how you keep the mushaf in a clean, high place, and let them choose a surah to learn with you."],talk:"Which surah do you know best? What is it about?",apply:"Read or listen to a few ayat together every night this week."}],pn=Object.fromEntries(Xi.map(n=>[n.id,n])),eo="family-deen-teach-me-v1",Jr=()=>({family:null,pages:{},conversations:0,rounds:0,nextTeacher:"child",session:{day:"",rounds:0},round:null,muted:!1});function Tg(){try{const n=JSON.parse(localStorage.getItem(eo)||"null");return n?{...Jr(),...n}:Jr()}catch{return Jr()}}function pc(n){try{localStorage.setItem(eo,JSON.stringify(n))}catch{const t=Object.values(n.pages).filter(i=>i.drawing);t.length&&(delete t[0].drawing,pc(n))}}function Ag(){localStorage.removeItem(eo)}let xt,fi,gs=!1;function ls(){if(xt){xt.state==="suspended"&&xt.resume();return}const n=window.AudioContext||window.webkitAudioContext;n&&(xt=new n,fi=xt.createGain(),fi.gain.value=gs?0:.4,fi.connect(xt.destination))}function wl(n){gs=n,fi&&(fi.gain.value=n?0:.4)}function $t(n,e,{type:t="triangle",vol:i=.5,slide:r=1,delay:s=0}={}){if(!xt||gs)return;const a=xt.currentTime+s,o=xt.createOscillator(),l=xt.createGain();o.type=t,o.frequency.setValueAtTime(n,a),o.frequency.exponentialRampToValueAtTime(n*r,a+e),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(i,a+.012),l.gain.exponentialRampToValueAtTime(1e-4,a+e),o.connect(l).connect(fi),o.start(a),o.stop(a+e+.02)}function Ys(n,{vol:e=.2,cutoff:t=2e3,delay:i=0}={}){if(!xt||gs)return;const r=xt.currentTime+i,s=Math.floor(xt.sampleRate*n),a=xt.createBuffer(1,s,xt.sampleRate),o=a.getChannelData(0);for(let d=0;d<s;d++)o[d]=(Math.random()*2-1)*(1-d/s);const l=xt.createBufferSource(),c=xt.createBiquadFilter(),h=xt.createGain();l.buffer=a,c.type="bandpass",c.frequency.value=t,h.gain.value=e,l.connect(c).connect(h).connect(fi),l.start(r)}const rt={tap:()=>$t(700,.06,{vol:.2}),tick:()=>{$t(880,.1,{vol:.3,slide:1.3}),$t(1320,.12,{delay:.05,vol:.2})},nudge:()=>{$t(520,.14,{type:"sine",vol:.3}),$t(660,.16,{type:"sine",delay:.1,vol:.25})},whoosh:()=>Ys(.35,{vol:.35,cutoff:900}),page:()=>{Ys(.25,{vol:.3,cutoff:2600}),Ys(.15,{vol:.2,cutoff:1400,delay:.12})},teach:()=>[392,523,659].forEach((n,e)=>$t(n,.25,{delay:e*.09,vol:.35})),done:()=>[523,659,784,1047].forEach((n,e)=>$t(n,.26,{delay:e*.1,vol:.38})),soft:()=>$t(330,.3,{type:"sine",slide:.8,vol:.25}),oops:()=>{$t(500,.18,{type:"sine",slide:.6,vol:.3}),$t(380,.22,{type:"sine",slide:.7,delay:.14,vol:.25})},chime:()=>{$t(988,.5,{type:"sine",vol:.3}),$t(1319,.6,{type:"sine",delay:.15,vol:.25})}},Tl=["#5b3520","#e8584e","#3f7fb5","#3f9a6a","#f2b632","#9b6ad6"];function Rg(n,{initial:e,onStroke:t}={}){n.innerHTML=`
    <div class="drawpad">
      <canvas></canvas>
      <div class="drawtools">
        ${Tl.map((m,f)=>`<button class="pen${f?"":" on"}" data-c="${m}" style="--c:${m}" aria-label="colour"></button>`).join("")}
        <button class="size" data-s="4" aria-label="thin">•</button><button class="size on" data-s="9" aria-label="thick">⬤</button>
        <button class="tool" data-act="undo" aria-label="undo">↶</button><button class="tool" data-act="clear" aria-label="clear">🗑</button>
      </div>
    </div>`;const i=n.querySelector("canvas"),r=i.getContext("2d"),s=[];let a=Tl[0],o=9,l=null,c=null,h=1;e&&(c=new Image,c.src=e,c.onload=p);function d(){const m=i.getBoundingClientRect();h=Math.min(2,window.devicePixelRatio||1),i.width=Math.max(10,m.width*h),i.height=Math.max(10,m.height*h),p()}function u(m){const f=i.width,y=i.height;r.strokeStyle=m.c,r.lineWidth=m.s*h*(f/(i.getBoundingClientRect().width*h||1)),r.lineCap="round",r.lineJoin="round",r.beginPath(),m.p.forEach(([b,x],C)=>C?r.lineTo(b*f,x*y):r.moveTo(b*f,x*y)),m.p.length===1&&r.lineTo(m.p[0][0]*f+.1,m.p[0][1]*y),r.stroke()}function p(){r.fillStyle="#fffaf0",r.fillRect(0,0,i.width,i.height),c!=null&&c.complete&&c.naturalWidth&&r.drawImage(c,0,0,i.width,i.height),s.forEach(u)}const g=m=>{const f=i.getBoundingClientRect();return[(m.clientX-f.left)/f.width,(m.clientY-f.top)/f.height]};i.addEventListener("pointerdown",m=>{i.setPointerCapture(m.pointerId),l={c:a,s:o,p:[g(m)]},s.push(l),p()}),i.addEventListener("pointermove",m=>{l&&(l.p.push(g(m)),p())});const _=()=>{l&&(l=null,t==null||t())};return i.addEventListener("pointerup",_),i.addEventListener("pointercancel",_),n.querySelector(".drawtools").addEventListener("click",m=>{const f=m.target.closest("button");f&&(f.dataset.c&&(a=f.dataset.c,n.querySelectorAll(".pen").forEach(y=>y.classList.toggle("on",y===f))),f.dataset.s&&(o=+f.dataset.s,n.querySelectorAll(".size").forEach(y=>y.classList.toggle("on",y===f))),f.dataset.act==="undo"&&(s.pop(),p(),t==null||t()),f.dataset.act==="clear"&&(s.length=0,c=null,p(),t==null||t()))}),requestAnimationFrame(d),window.addEventListener("resize",d),{get strokes(){return s.length+(c?1:0)},snapshot(m=420){const f=Math.min(1,m/i.width),[y,b]=(()=>{const x=document.createElement("canvas");return x.width=i.width*f,x.height=i.height*f,[x,x.getContext("2d")]})();return b.drawImage(i,0,0,y.width,y.height),y.toDataURL("image/jpeg",.72)},dispose(){window.removeEventListener("resize",d)},scribble(m,f=a,y=o){s.push({c:f,s:y,p:m}),p(),t==null||t()}}}function Cg(n,e,t,{onChange:i}={}){n.innerHTML=`<div class="arrboard">${t.map(d=>s(d)).join("")}</div>`;const r=n.querySelector(".arrboard");function s(d){const[u,p,g]=e[d];return`<div class="acard" data-i="${d}"><span class="num"></span><span class="aic">${u}</span><b>${p}</b><small>${g}</small></div>`}const a=()=>[...r.querySelectorAll(".acard:not(.ghost)")];function o(){r.querySelectorAll(".acard").forEach((d,u)=>{d.querySelector(".num").textContent=u+1})}o();const l=()=>[...r.querySelectorAll(".acard")].map(d=>+d.dataset.i);let c=null;r.addEventListener("pointerdown",d=>{const u=d.target.closest(".acard");if(!u||u.classList.contains("locked"))return;d.preventDefault();const p=u.getBoundingClientRect();c={c:u,id:d.pointerId,dx:d.clientX-p.left,dy:d.clientY-p.top,w:p.width,h:p.height,moved:!1,sx:d.clientX,sy:d.clientY},r.setPointerCapture(d.pointerId)}),r.addEventListener("pointermove",d=>{if(!c||d.pointerId!==c.id)return;if(!c.moved){if(Math.hypot(d.clientX-c.sx,d.clientY-c.sy)<6)return;c.moved=!0,c.ph=document.createElement("div"),c.ph.className="acard ph",c.ph.innerHTML='<span class="num"></span>',c.ph.style.width=c.w+"px",c.ph.style.height=c.h+"px",c.c.after(c.ph),Object.assign(c.c.style,{position:"fixed",width:c.w+"px",height:c.h+"px",zIndex:100,pointerEvents:"none"}),c.c.classList.add("dragging"),r.querySelectorAll(".acard").forEach(g=>g.classList.remove("ok","think"))}c.c.style.left=d.clientX-c.dx+"px",c.c.style.top=d.clientY-c.dy+"px";let u=null,p=1/0;for(const g of a()){if(g===c.c||g===c.ph)continue;const _=g.getBoundingClientRect(),m=_.left+_.width/2,f=_.top+_.height/2,y=Math.hypot(d.clientX-m,(d.clientY-f)*1.4);y<p&&(p=y,u={k:g,cx:m,cy:f,r:_})}u&&((Math.abs(d.clientY-u.cy)<u.r.height/2?d.clientX>u.cx:d.clientY>u.cy)?u.k.nextElementSibling!==c.ph&&u.k.after(c.ph):u.k.previousElementSibling!==c.ph&&u.k.before(c.ph)),o()});const h=d=>{!c||d.pointerId!==c.id||(c.moved&&(c.ph.replaceWith(c.c),c.c.removeAttribute("style"),c.c.classList.remove("dragging"),o(),i==null||i(l())),c=null)};return r.addEventListener("pointerup",h),r.addEventListener("pointercancel",h),{order:l,check(){let d=0;return r.querySelectorAll(".acard").forEach((u,p)=>{const g=+u.dataset.i===p;d+=g,u.classList.toggle("ok",g),u.classList.toggle("think",!g)}),d},solve(){[...r.querySelectorAll(".acard")].sort((u,p)=>u.dataset.i-p.dataset.i).forEach(u=>r.appendChild(u)),o(),i==null||i(l()),this.check()}}}const ln=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),js=new Map;function mc(n,e){const t=n.id+(e?e.length:"");if(js.has(t))return Promise.resolve(js.get(t));const i=r=>{const s=tg({icons:n.icons,tint:as[n.chapter].tint,drawing:r,seed:n.id.length*7}).toDataURL();return js.set(t,s),s};return e?new Promise(r=>{const s=new Image;s.onload=()=>r(i(s)),s.onerror=()=>r(i(null)),s.src=e}):Promise.resolve(i(null))}function Pg(n,e,t){const i=n.querySelector(".book"),r=i.querySelector(".page.left"),s=i.querySelector(".page.right");let a=[],o=0,l=!1;const c=()=>window.innerWidth<window.innerHeight*1.05;function h(){const m=e(),f=m.family||{child:"Our child",parentRole:"baba"},y=f.parentRole==="mama"?"Mama":"Baba",b=Object.keys(m.pages).length;a=[{kind:"cover",html:`
      <div class="cover">
        <div class="cover-star">✦</div>
        <h2>Family Book<br>of Knowledge</h2>
        <p>by ${ln(f.child)} &amp; ${y}</p>
        <div class="cover-count">${b} / ${Xi.length} pages written</div>
        <p class="small">"If you can teach it, you understand it."</p>
      </div>`}];for(const[x,C]of Object.entries(as)){const T=Xi.filter(P=>P.chapter===x),A=T.filter(P=>m.pages[P.id]).length;a.push({kind:"chapter",chapter:x,html:`
        <div class="chapter-page" style="--cc:${C.colour};--ct:${C.tint}">
          <div class="big">${C.icon}</div><h2>${C.name}</h2>
          <ul>${T.map(P=>`<li class="${m.pages[P.id]?"done":""}">${m.pages[P.id]?"⭐":"○"} ${ln(P.title)}</li>`).join("")}</ul>
          <p class="small">${A} of ${T.length} pages written</p>
        </div>`});for(const P of T)a.push({kind:"topic",topic:P,chapter:x})}a.length%2&&a.push({kind:"end",html:'<div class="chapter-page end"><div class="big">🌙</div><h2>To be continued…</h2><p class="small">Every conversation adds to this book.</p></div>'})}function d(m,f){const y=e(),b=m.topic,x=y.pages[b.id],C=as[b.chapter],T=y.family||{child:"Our child",parentRole:"baba"},A=T.parentRole==="mama"?"Mama":"Baba";if(!x)return`<div class="tpage empty" style="--cc:${C.colour}">
      <span class="chip" style="background:${C.colour}">${C.icon} ${C.name}</span>
      <h3>${ln(b.title)}</h3><div class="waiting">${b.icons[0]}</div>
      <p>This page is waiting to be written.</p><p class="small">Teach <b>${ln(b.title)}</b> with ${os[b.mode].icon} ${os[b.mode].name} to fill it in.</p></div>`;const P=[x.by.child&&`${ln(T.child)} taught it ⭐`,x.by.parent&&`${A} taught it ⭐`].filter(Boolean).join(" · ");return`<div class="tpage" style="--cc:${C.colour}">
      <span class="chip" style="background:${C.colour}">${C.icon} ${C.name}</span>
      <h3>${ln(b.title)} <small>${ln(b.sub)}</small></h3>
      <img class="art" alt="" src="${f||""}">
      <p class="by">${P}</p>
      <blockquote>“${ln(b.source.text)}”<cite>${ln(b.source.ref)}</cite></blockquote>
      <p class="small">🌱 Our family mission: ${ln(b.apply)}</p>
      <p class="small muted">💬 ${x.heard||0} points taught · ${x.nudged||0} found with a nudge · taught ${x.times||1}×</p>
    </div>`}async function u(m,f){const y=a[f];if(m.dataset.i=f,!y){m.innerHTML="",m.classList.add("blank");return}if(m.classList.remove("blank"),y.kind!=="topic"){m.innerHTML=y.html;return}const b=e().pages[y.topic.id];if(m.innerHTML=d(y,null),b){const x=await mc(y.topic,b.drawing);+m.dataset.i===f&&(m.innerHTML=d(y,x))}}function p(){i.classList.toggle("single",c()),c()?(u(s,o),r.innerHTML=""):(o-=o%2,u(r,o),u(s,o+1)),n.querySelector(".bookcount").textContent=c()?`${o+1} / ${a.length}`:`${o+1}–${o+2} / ${a.length}`,n.querySelectorAll(".btab").forEach(m=>{var y,b;const f=a.findIndex(x=>x.kind==="chapter"&&x.chapter===m.dataset.ch);m.classList.toggle("on",((y=a[o])==null?void 0:y.chapter)===m.dataset.ch||((b=a[o+1])==null?void 0:b.chapter)===m.dataset.ch&&!c()),m.dataset.at=f})}function g(m){if(m=Math.max(0,Math.min(a.length-1,m)),c()||(m-=m%2),m===o||l)return;const f=m>o;l=!0,t==null||t.page();const y=document.createElement("div");y.className="leaf "+(c()?"single ":"")+(f?"fwd":"back"),y.innerHTML='<div class="face front page"></div><div class="face backface page"></div>';const b=y.querySelector(".front"),x=y.querySelector(".backface");c()?(u(b,o),u(x,m),u(s,m)):f?(u(b,o+1),u(x,m),u(s,m+1)):(u(b,o),u(x,m+1),u(r,m)),i.appendChild(y),requestAnimationFrame(()=>requestAnimationFrame(()=>y.classList.add("go")));const C=()=>{o=m,y.remove(),l=!1,p()};y.addEventListener("transitionend",C,{once:!0}),setTimeout(()=>{l&&C()},900)}n.querySelector(".bprev").addEventListener("click",()=>g(o-(c()?1:2))),n.querySelector(".bnext").addEventListener("click",()=>g(o+(c()?1:2))),n.querySelector(".btabs").addEventListener("click",m=>{const f=m.target.closest(".btab");f&&g(+f.dataset.at)});let _=null;return i.addEventListener("pointerdown",m=>{_=m.clientX}),i.addEventListener("pointerup",m=>{if(_==null)return;const f=m.clientX-_;_=null,Math.abs(f)>50&&g(o+(f<0?1:-1)*(c()?1:2))}),window.addEventListener("resize",()=>{n.classList.contains("hidden")||p()}),{open(m){h(),o=m?Math.max(0,a.findIndex(f=>{var y;return((y=f.topic)==null?void 0:y.id)===m})):0,n.classList.remove("hidden"),p()},close(){n.classList.add("hidden")},flipTo:g,get index(){return o},get count(){return a.length}}}const Pe=n=>document.getElementById(n),re=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Lg=n=>{const e=n.slice();for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e},Ig={girl:hc,boy:uc,mama:dc,baba:fc},$i=(n,e,t="A")=>"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(Ig[n].replaceAll("SKIN",mr[e]||mr[0]).replace("</svg>",`<style>.poseA,.poseB,.poseC{display:none}.pose${t}{display:inline}</style></svg>`)),to={explain:["handoff","mission","teachtime","checklist","talk","done"],ask:["handoff","mission","teachtime","questions","talk","done"],draw:["handoff","mission","teachtime","draw","reveal","checklist","talk","done"],act:["handoff","mission","teachtime","act","reveal","checklist","talk","done"],dontsay:["handoff","mission","teachtime","dontsay","reveal","checklist","talk","done"],arrange:["handoff","mission","teachtime","arrange","reveal","checklist","talk","done"]},no=new Set(["handoff","teachtime","reveal","talk"]),Dg=new Set(["mission","checklist","questions","dontsay"]),Ug={handoff:"lookaway",mission:"study",teachtime:"teach",checklist:"teach",questions:"teach",draw:"listen",act:"teach",dontsay:"teach",arrange:"teach",reveal:"home",talk:"talk",done:"celebrate"},gc=120;let me=Tg(),Mt,es,Gt=null,wn=null,cs=null;const ur=()=>new Date().toDateString(),lt=()=>pc(me),bt=()=>{var n;return((n=me.family)==null?void 0:n.parentRole)==="mama"?"Mama":"Baba"},Vt=()=>{var n;return((n=me.family)==null?void 0:n.child)||"Little one"},Un=n=>n==="child"?Vt():bt(),gi=n=>n==="child"?"parent":"child";function yt(n,e=me.round){const t=e?Un(e.teacher):Vt(),i=e?Un(gi(e.teacher)):bt();return re(n).replaceAll("{C}",re(Vt())).replaceAll("{P}",bt()).replaceAll("{T}",re(t)).replaceAll("{L}",re(i))}function io(){const n=window.innerWidth,e=window.innerHeight,t=n>e*1.1,i=Pe("panel");let r={x:0,y:.08,w:1,h:.86};if(!i.classList.contains("hidden")){const s=i.getBoundingClientRect();r=t?{x:.01,y:.1,w:Math.max(.3,s.left/n-.02),h:.86}:{x:0,y:.07,w:1,h:Math.max(.18,s.top/e-.08)}}Mt==null||Mt.setArea(r)}window.addEventListener("resize",()=>{io()});const Ng=["title","setup","panel","inter"];function yr(n){for(const e of Ng)Pe(e).classList.toggle("hidden",e!==n);Pe("hud").classList.toggle("hidden",n==="title"||n==="setup"),document.body.dataset.screen=n,requestAnimationFrame(io)}function hs(){Pe("convCount").textContent=me.conversations,Pe("pageCount").textContent=`${Object.keys(me.pages).length}/${Xi.length}`,Pe("muteBtn").textContent=me.muted?"🔇":"🔊"}function lr(){const n=me.family;Pe("logoParent").textContent=n?bt():"Baba/Mama";const e=me.round&&pn[me.round.topic];Pe("titleButtons").innerHTML=`
    ${e?`<button class="chunky gold" data-act="resume">▶ Resume: ${re(e.title)}</button>`:""}
    ${n?`<button class="chunky" data-act="hub">${e?"Choose a new round":"▶ Play"}</button>`:'<button class="chunky" data-act="setup">▶ Start</button>'}
    ${n?'<button class="chunky blue" data-act="book">📚 Family Book</button><button class="linky" data-act="setup">✏️ Change family</button>':""}`,Pe("titleFamily").innerHTML=n?`<img src="${$i(n.childLook,n.skin)}" alt=""><img src="${$i(n.parentRole,n.skin)}" alt=""><span>${re(Vt())} &amp; ${bt()} · 💬 ${me.conversations} conversations had</span>`:"",Mt==null||Mt.setMood("home"),yr("title")}function ro(){const e={...me.family||{child:"",childLook:"girl",parentRole:"baba",skin:0}},t=()=>{Pe("setupBody").innerHTML=`
      <label class="field"><span>Child's name</span><input id="childName" maxlength="16" placeholder="e.g. Aisha" value="${re(e.child)}" autocomplete="off"></label>
      <div class="field"><span>Choose ${re(e.child||"the child")}'s picture</span>
        <div class="choices">
          ${["girl","boy"].map(i=>`<button class="choice ${e.childLook===i?"on":""}" data-look="${i}"><img src="${$i(i,e.skin)}" alt="${i}"><b>${i==="girl"?"Girl":"Boy"}</b></button>`).join("")}
        </div></div>
      <div class="field"><span>Who is playing tonight?</span>
        <div class="choices">
          ${["baba","mama"].map(i=>`<button class="choice ${e.parentRole===i?"on":""}" data-parent="${i}"><img src="${$i(i,e.skin)}" alt="${i}"><b>${i==="baba"?"Baba":"Mama"}</b></button>`).join("")}
        </div></div>
      <div class="field"><span>Skin tone</span><div class="swatches">${mr.map((i,r)=>`<button class="swatch ${e.skin===r?"on":""}" data-skin="${r}" style="background:${i}" aria-label="skin ${r+1}"></button>`).join("")}</div></div>`,Pe("childName").addEventListener("input",i=>{e.child=i.target.value})};t(),Pe("setupBody").onclick=i=>{const r=i.target.closest("button");r&&(rt.tap(),r.dataset.look&&(e.childLook=r.dataset.look),r.dataset.parent&&(e.parentRole=r.dataset.parent),r.dataset.skin&&(e.skin=+r.dataset.skin),e.child=Pe("childName").value,t())},Pe("setupGo").onclick=async()=>{e.child=(Pe("childName").value||"").trim().slice(0,16)||(e.childLook==="girl"?"Aisha":"Yusuf"),me.family=e,lt(),await Mt.setFamily(me.family),rt.done(),Qn()},yr("setup")}let si="all";function Qn(){if(!me.family)return ro();me.session.day!==ur()&&(me.session={day:ur(),rounds:0});const n=me.nextTeacher||"child",e=Xi.filter(s=>n==="parent"||s.mode!=="ask").filter(s=>si==="all"||s.mode===si),t=s=>{var a,o;return(o=(a=me.pages[s.id])==null?void 0:a.by)==null?void 0:o[n]};e.sort((s,a)=>(t(s)?1:0)-(t(a)?1:0));const i=Object.entries(os).filter(([s])=>n==="parent"||s!=="ask"),r=me.session.rounds;Pe("panel").className="panel",Pe("panel").dataset.phase="hub",Pe("panel").innerHTML=`
    <div class="card hub">
      <div class="ribbon">Round ${r+1} tonight</div>
      ${r>=3?`<div class="gentle">🌙 ${r} rounds tonight, MashaAllah! This is a lovely place to stop with a du'a together, or play one more.</div>`:""}
      <h3>Who is the teacher?</h3>
      <div class="who">
        ${["child","parent"].map(s=>`<button class="whob ${n===s?"on":""}" data-teacher="${s}"><img src="${$i(s==="child"?me.family.childLook:me.family.parentRole,me.family.skin,n===s?"B":"A")}" alt=""><b>${re(Un(s))} teaches</b></button>`).join("")}
      </div>
      <div class="modes">
        <button class="mchip ${si==="all"?"on":""}" data-mode="all">All</button>
        ${i.map(([s,a])=>`<button class="mchip ${si===s?"on":""}" data-mode="${s}" title="${a.name}">${a.icon} ${a.name}</button>`).join("")}
      </div>
      <p class="hint">${n==="child"?`${re(Vt())} picks a topic to teach ${bt()}. 🤫`:`${bt()} teaches, ${re(Vt())} asks and checks!`}</p>
      <div class="topics">
        ${e.map(s=>{const a=as[s.chapter],o=os[s.mode];return`<button class="topic ${t(s)?"done":""}" data-topic="${s.id}" style="--cc:${a.colour};--ct:${a.tint}">
            <span class="ticon">${s.icons[0]}</span><b>${re(s.title)}</b><small>${o.icon} ${o.name}</small>
            <em>${a.icon} ${a.name}</em>${t(s)?'<i class="stamp">⭐</i>':""}</button>`}).join("")||'<p class="hint">No topics for this mode yet.</p>'}
      </div>
      <button class="chunky gold" data-act="surprise">🎲 Surprise us!</button>
    </div>`,Pe("panel").onclick=s=>{const a=s.target.closest("button");if(a){if(rt.tap(),a.dataset.teacher)me.nextTeacher=a.dataset.teacher,a.dataset.teacher==="child"&&si==="ask"&&(si="all"),lt(),Qn();else if(a.dataset.mode)si=a.dataset.mode,Qn();else if(a.dataset.topic)ka(a.dataset.topic,n);else if(a.dataset.act==="surprise"){const o=e.filter(c=>!t(c)),l=(o.length?o:e)[Math.floor(Math.random()*(o.length||e.length))];l&&ka(l.id,n)}}},Mt.setMood("home",n),hs(),yr("panel"),Pe("panel").scrollTop=0}function ka(n,e){if(!me.family)return ro();const t=pn[n];t.mode==="ask"&&(e="parent"),me.round={topic:n,teacher:e,phase:"handoff",ticks:{},nudges:{},hints:0,q:0,oops:0,drawing:null,order:t.steps?Fg(t.steps.length):null,checks:0,solved:!1,studyLeft:gc,delta:null},lt(),gr("handoff")}function Fg(n){let e;do e=Lg([...Array(n).keys()]);while(e.every((t,i)=>t===i));return e}function gr(n){var t;const e=me.round;if(!e)return Qn();clearInterval(cs),cs=null,(t=Gt==null?void 0:Gt.dispose)==null||t.call(Gt),Gt=null,wn=null,e.phase=n,lt(),Mt.setMood(Ug[n]||"home",e.teacher),no.has(n)?Bg(n):cn(n),hs()}function $n(){const n=me.round,e=to[pn[n.topic].mode];gr(e[e.indexOf(n.phase)+1]||"done")}function kg(n){return`<button class="hold" id="holdBtn"><span class="fillbar"></span><span class="lbl">${n}</span></button>`}function Og(n){const e=Pe("holdBtn");if(!e)return;let t=0,i=0,r=0,s=!1;const a=()=>{s||(s=!0,c(),rt.whoosh(),n())},o=()=>{e.style.setProperty("--p",Math.min(1,(performance.now()-t)/700)),i=requestAnimationFrame(o)},l=d=>{d.preventDefault(),ls(),t=performance.now(),e.classList.add("holding"),i=requestAnimationFrame(o),r=setTimeout(a,700)},c=()=>{cancelAnimationFrame(i),clearTimeout(r),e.classList.remove("holding"),e.style.setProperty("--p",0)},h=()=>{t&&performance.now()-t>=700?a():c(),t=0};e.addEventListener("pointerdown",l),e.addEventListener("pointerup",h),e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("keydown",d=>{(d.key==="Enter"||d.key===" ")&&!d.repeat&&l(d)}),e.addEventListener("keyup",h)}function Bg(n){const e=me.round,t=pn[e.topic],i=t.mode,r=Un(e.teacher),s=Un(gi(e.teacher)),a=(h,d)=>`<img class="iav" src="${$i(h==="child"?me.family.childLook:me.family.parentRole,me.family.skin,d)}" alt="">`;let o="",l=null,c=null;if(n==="handoff")o=`<div class="ibig">🙈</div><h1>${re(s)}, look away!</h1>
      <p>Hand the device to <b>${re(r)}</b>. ${re(r)} has a <b>secret mission</b>: to teach ${re(s)} about <b>${re(t.title)}</b>!</p>
      <div class="iavs">${a(e.teacher,"A")}<span class="arrow">📱</span>${a(gi(e.teacher),"C")}</div>`,l=`Hold: I'm ${re(r)} 👀`;else if(n==="teachtime"){const h={explain:["🎓","TEACHING TIME!",`Turn the screen around and give the device to <b>${re(s)}</b>.<br>${re(r)}, start teaching! ${re(s)} has a secret checklist.`,`Hold: I'm ${re(s)} 👂`],ask:["🎓","TEACHING TIME!",`${bt()} is the teacher tonight! Give the device to <b>${re(Vt())}</b>. You've got question cards: ask ${bt()} everything!`,`Hold: I'm ${re(Vt())} ❓`],draw:["🎨","DRAWING TIME!",`Sit side by side. <b>${re(r)}</b> draws and <b>${re(s)}</b> guesses out loud.<br>No letters or words in the drawing!`,null],act:["🎭","ACTING TIME!",`Stand the device up where ${re(s)} can see it. <b>${re(r)}</b> acts it out with no words. <b>${re(s)}</b> guesses!`,null],dontsay:["🚫","DON'T SAY IT!",`<b>${re(r)}</b> keeps the screen hidden and explains the secret word, without saying the banned words. <b>${re(s)}</b>, guess!`,null],arrange:["🧩","ARRANGE TIME!",`Sit together. <b>${re(r)}</b> drags the steps into order and <b>explains each one</b> to ${re(s)}.`,null]}[i];o=`<div class="ibig spin">${h[0]}</div><h1 class="teach">${h[1]}</h1><p>${h[2]}</p><div class="turn">🔄</div>`,l=h[3],l||(c=i==="dontsay"?`I'm ${re(r)}, let's go!`:"Let's go!"),rt.teach()}else if(n==="reveal"){const h=i==="arrange"?"🧩 All in order!":i==="act"?`🎉 It was: ${re(t.title)}!`:`🎉 It was <span class="word">${re(t.word)}</span>!`;o=`<div class="ibig">${t.icons[0]}</div><h1>${h}</h1>
      <p>Now <b>${re(r)}</b>, tell ${re(s)} everything you know about <b>${re(t.title)}</b>.<br>Give the device to <b>${re(s)}</b> for the secret checklist.</p>`,l=`Hold: I'm ${re(s)} 👂`,rt.done()}else n==="talk"&&(o=`<div class="ibig">🗣️</div><h1>Screen break!</h1><p>Put the device down. Look at each other and talk:</p>
      <div class="talkq">${yt(t.talk)}</div>
      <div class="ptip">👤 <b>For ${bt()}:</b> ask first, listen fully, then share your own answer too.</div>`,c="We talked about it ✓",rt.chime());Pe("inter").className="screen inter "+n,Pe("inter").innerHTML=`<div class="icard">${o}${l?kg(l):""}${c?`<button class="chunky gold" id="interGo">${c}</button>`:""}</div>`,yr("inter"),l&&Og($n),c&&(Pe("interGo").onclick=()=>{rt.tap(),$n()})}function ai(n,e,t,{holder:i}={}){const r=i==="parent",s=r?`<div class="phead">👤 For ${bt()}</div>`:i==="child"?`<div class="khead">🌟 For ${re(Vt())}</div>`:"",a=me.round,o=to[pn[a.topic].mode],c=`<div class="dots">${o.filter(h=>!no.has(h)||h==="talk").map(h=>`<i class="${h===a.phase?"on":o.indexOf(h)<o.indexOf(a.phase)?"past":""}"></i>`).join("")}</div>`;return`<div class="card ${n} ${r?"parent":""}">${s}<div class="ribbon">${e}</div>${c}${t}</div>`}function Al(n){return`<ul class="points">${n.points.map(([e,t])=>`<li><span>${e}</span>${yt(t)}</li>`).join("")}</ul>`}function cn(n){const e=me.round,t=pn[e.topic],i=t.mode,r=Un(e.teacher),s=Un(gi(e.teacher)),a=e.teacher,o=gi(e.teacher);let l="";if(n==="mission"){let u="";const p={explain:`Teach <b>${re(s)}</b> about <b>${re(t.title)}</b>`,ask:`Teach <b>${re(Vt())}</b> about <b>${re(t.title)}</b>`,draw:`Draw <b>${re(t.word)}</b> for ${re(s)} to guess`,act:`Act out <b>${re(t.title)}</b> for ${re(s)} to guess`,dontsay:`Explain <b>${re(t.word)}</b> without the banned words`,arrange:`Put <b>${re(t.title)}</b> in order and explain each step`}[i];u+=`<div class="goal"><span class="gicons">${t.icons.slice(0,3).join("")}</span><h2>${p}</h2></div>`,i==="draw"&&(u+=`<div class="ideas">${t.drawIdeas.map(([g,_])=>`<span>${g}<small>${_}</small></span>`).join("")}</div>
      <div class="rule">🚫 We never draw prophets or companions, or any person from the story. Draw <b>places and things</b> only.</div>`),i==="act"&&(u+=`<div class="actcard">🎭 ${yt(t.act)}</div><ul class="tips">${t.actTips.map(g=>`<li>${yt(g)}</li>`).join("")}</ul>`),i==="dontsay"&&(u+=`<div class="secret">${re(t.word)}</div><div class="banned">${t.banned.map(g=>`<s>${re(g)}</s>`).join("")}</div><p class="hint">Don't say these words! Use the ideas below instead.</p>`),i==="arrange"&&(u+=`<p class="hint">${yt(t.before)}</p><ol class="study">${t.steps.map(([g,_,m])=>`<li><span>${g}</span><b>${_}</b> ${re(m)}</li>`).join("")}</ol><p class="hint">Remember this order, it gets shuffled next! 🔀</p>`),u+=`<h4>${i==="draw"||i==="act"||i==="dontsay"?"After the guess, explain:":"What to teach:"}</h4>`+Al(t),a==="parent"?(i==="ask"&&(u+=`<div class="howto">❓ <b>How it works:</b> ${re(Vt())} gets question cards and will ask you. Answer simply, with a story or an example from family life. Let ${re(Vt())} tick what they learned.</div>`),u+=`<div class="deeper"><b>Going deeper</b>${t.deeper.map(g=>`<p>${yt(g)}</p>`).join("")}</div>`):u+='<p class="tip">💡 Use your own words and give an example from our family!</p>',u+=`<div class="timerrow"><div class="ring" id="ring"><span id="timeLeft"></span></div><span id="timerMsg">Study time. Read it, then teach it!</span></div>
      <button class="chunky" data-act="ready">I'm ready to teach! 🎓</button>`,l=ai("mission",a==="child"?"🤫 Secret mission":"🤫 Teacher notes",u,{holder:a})}if(n==="checklist"){const u=o==="parent",p=u?`Tick each point as <b>${re(Vt())}</b> teaches it. <b>Don't give answers!</b> If a point is missing, tap 💡 for a nudge question to ask.`:`Tick each one when <b>${bt()}</b> says it! Missing one? Tap 💡 and ask the question.`,g=t.checklist.map(([m,f],y)=>{const b=e.ticks[y],x=e.nudges[y];return`<li class="${b?"ticked "+b:""}"><button class="tick" data-tick="${y}" aria-label="tick">${b?"✓":""}</button>
        <div class="itxt"><span>${yt(m)}</span>${x?`<div class="nudge">${u?"Ask":`Ask ${bt()}`}: “${yt(f)}”</div>`:""}</div>
        ${b?"":`<button class="bulb ${x?"used":""}" data-nudge="${y}" aria-label="nudge">💡</button>`}</li>`}).join(""),_=Object.keys(e.ticks).length;l=ai("check",u?"📝 Secret checklist":"📝 Listening list",`<p class="intro">${p}</p><ul class="checklist">${g}</ul>
      <p class="count">${_} of ${t.checklist.length} heard${_===t.checklist.length?" 🌟 Every single one!":""}</p>
      <button class="chunky" data-act="checkdone">${_===t.checklist.length?"All taught! →":"We've finished talking →"}</button>`,{holder:o})}if(n==="questions"){const u=t.questions[e.q],p=e.q>=t.questions.length-1,g=e.ticks[e.q],_=e.nudges[e.q],[m,f]=t.checklist[Math.min(e.q,t.checklist.length-1)];l=ai("questions",`❓ Ask ${bt()}!`,`
      <div class="qdots">${t.questions.map((y,b)=>`<i class="${e.ticks[b]?"ticked":""} ${b===e.q?"on":""}"></i>`).join("")}</div>
      <div class="qcard"><span class="qic">${u[0]}</span><p>“${yt(u[1])}”</p><small>Question ${e.q+1} of ${t.questions.length}</small></div>
      <p class="hint">Read it out loud to ${bt()}, then listen carefully!</p>
      <div class="qlearn ${g?"on":""}">I learned: <b>${yt(m)}</b></div>
      ${_?`<div class="nudge">Follow-up: “${yt(f.replace(/^Ask( again)?:\s*/,""))}”</div>`:""}
      <div class="qbtns">
        <button class="chunky ${g?"done":""}" data-act="answered">${g?"✓ Got it!":`✓ ${bt()} answered it`}</button>
        ${g||_?"":'<button class="chunky gold small" data-act="qnudge">💡 Ask more</button>'}
      </div>
      <button class="chunky blue" data-act="qnext">${p?"All questions done →":"Next question →"}</button>`,{holder:"child"})}n==="draw"&&(l=ai("draw",`🎨 ${re(r)} draws`,`
      <div id="padHost" class="padhost"></div>
      <div class="rule small">Places and things only, never prophets or companions.</div>
      <div class="guessrow"><span>${re(s)}, what is it? Guess out loud!</span>
        <div class="hints">${t.guessHints.slice(0,e.hints).map(u=>`<span class="hintchip">${yt(u)}</span>`).join("")}</div>
        ${e.hints<t.guessHints.length?`<button class="chunky gold small" data-act="hint">💡 Hint ${e.hints+1}/${t.guessHints.length}</button>`:""}</div>
      <button class="chunky" data-act="guessed">🎉 ${re(s)} guessed it!</button>
      <button class="linky" data-act="guessed">Tell us the answer</button>`)),n==="act"&&(l=ai("act",`🎭 ${re(r)} is acting…`,`
      <div class="stage"><span>🎭</span><p>${re(s)}, what is ${re(r)} doing?</p></div>
      <div class="guessrow"><div class="hints">${t.guessHints.slice(0,e.hints).map(u=>`<span class="hintchip">${yt(u)}</span>`).join("")}</div>
        ${e.hints<t.guessHints.length?`<button class="chunky gold small" data-act="hint">💡 Hint ${e.hints+1}/${t.guessHints.length}</button>`:""}</div>
      <button class="chunky" data-act="guessed">🎉 ${re(s)} guessed it!</button>
      <button class="linky" data-act="guessed">Tell us the answer</button>`)),n==="dontsay"&&(l=ai("dontsay","🚫 Don't say it!",`
      <p class="hint">Keep the screen facing <b>you</b>, ${re(r)}!</p>
      <div class="secret">${re(t.word)}</div>
      <div class="banned">${t.banned.map(u=>`<s>${re(u)}</s>`).join("")}</div>
      <h4>Ideas you can use:</h4>${Al(t)}
      <div class="oopsrow"><button class="chunky gold small" data-act="oops">🙊 Oops, I said one!</button><span id="oopsMsg">${e.oops?`Oops × ${e.oops}. No problem, try another way! 😄`:""}</span></div>
      <button class="chunky" data-act="guessed">🎉 ${re(s)} guessed it!</button>
      <button class="linky" data-act="guessed">Reveal the word</button>`,{holder:a})),n==="arrange"&&(l=ai("arrange",`🧩 ${re(t.title)}`,`
      <p class="hint">${yt(t.before)}</p>
      <p class="hint"><b>${re(r)}</b>: drag the cards into order, and explain each step to ${re(s)} as you go.</p>
      <div id="arrHost"></div>
      <div id="arrMsg" class="arrmsg"></div>
      <div class="qbtns"><button class="chunky gold" data-act="checkorder">📖 Check the order</button>
      ${e.checks>=2&&!e.solved?'<button class="chunky blue small" data-act="showorder">Show us the order</button>':""}</div>
      <button class="chunky ${e.solved?"":"faded"}" data-act="arrdone">${e.solved?"Next →":"Skip to the checklist →"}</button>`)),n==="done"&&(l=Vg());const c=Pe("panel"),h=c.dataset.phase===n&&!c.classList.contains("hidden"),d=c.scrollTop;c.className="panel ph-"+n,c.dataset.phase=n,c.innerHTML=l,c.scrollTop=h?d:0,c.onclick=Hg,yr("panel"),n==="mission"&&zg(),n==="draw"&&(Gt=Rg(Pe("padHost"),{initial:e.drawing,onStroke:()=>{e.drawing=Gt.snapshot(),lt()}})),n==="arrange"&&(wn=Cg(Pe("arrHost"),t.steps,e.order,{onChange:u=>{e.order=u,lt(),Pe("arrMsg").textContent=""}}))}function zg(){const n=me.round,e=()=>{const t=Math.max(0,n.studyLeft),i=Pe("timeLeft");if(!i)return clearInterval(cs);i.textContent=`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`,Pe("ring").style.setProperty("--k",1-t/gc),t===0&&(Pe("timerMsg").textContent="Time's up! Teach when you're ready. 🎓",Pe("ring").classList.add("done"))};e(),cs=setInterval(()=>{n.studyLeft>0&&(n.studyLeft--,n.studyLeft===0&&rt.chime(),n.studyLeft%10===0&&lt()),e()},1e3)}function Hg(n){const e=n.target.closest("button");if(!e)return;const t=me.round,i=t&&pn[t.topic];if(ls(),e.dataset.tick!=null){const r=+e.dataset.tick;return t.ticks[r]?delete t.ticks[r]:(t.ticks[r]=t.nudges[r]?"nudge":"self",rt.tick()),lt(),cn("checklist")}if(e.dataset.nudge!=null)return t.nudges[+e.dataset.nudge]=!0,rt.nudge(),lt(),cn("checklist");switch(e.dataset.act){case"ready":return rt.tap(),$n();case"checkdone":return $n();case"answered":return t.ticks[t.q]||(t.ticks[t.q]=t.nudges[t.q]?"nudge":"self",rt.tick(),lt()),cn("questions");case"qnudge":return t.nudges[t.q]=!0,rt.nudge(),lt(),cn("questions");case"qnext":return rt.tap(),t.q>=i.questions.length-1?$n():(t.q++,lt(),cn("questions"));case"hint":return t.hints++,rt.nudge(),lt(),cn(t.phase);case"guessed":return t.phase==="draw"&&(Gt!=null&&Gt.strokes)&&(t.drawing=Gt.snapshot()),lt(),$n();case"oops":t.oops++,rt.oops(),lt(),Pe("oopsMsg").textContent=`Oops × ${t.oops}. No problem, try another way! 😄`,e.classList.remove("wiggle"),e.offsetWidth,e.classList.add("wiggle");return;case"checkorder":{t.checks++;const r=wn.check(),s=i.steps.length;r===s?(t.solved=!0,rt.done(),Mt.burst(),lt(),cn("arrange"),wn.check(),Pe("arrMsg").innerHTML="🌟 MashaAllah, perfect order!"):(rt.soft(),lt(),cn("arrange"),wn.check(),Pe("arrMsg").innerHTML=`🤔 ${r} of ${s} are in the right place. Think again about the orange ones: what comes just before, and just after?`);return}case"showorder":wn.solve(),t.order=wn.order(),t.solved=!0,rt.page(),lt(),cn("arrange"),wn.check(),Pe("arrMsg").innerHTML="📖 Here's the order. Let's go through it together!";return;case"arrdone":return $n();case"book":return Oa((t==null?void 0:t.topic)||null);case"nextround":return me.round=null,lt(),Qn();case"finish":return me.round=null,lt(),lr()}}function Gg(){const n=me.round,e=pn[n.topic];if(n.delta)return n.delta;const t=Object.values(n.ticks),i=t.length,r=t.filter(l=>l==="nudge").length,a=1+Object.keys(n.nudges).length+1+(e.mode==="ask",0),o=me.pages[e.id]||(me.pages[e.id]={by:{},heard:0,nudged:0,times:0});return o.by[n.teacher]=ur(),o.times++,o.heard=Math.max(o.heard,i),o.nudged=r,n.drawing&&(o.drawing=n.drawing),me.conversations+=a,me.rounds++,me.session.day!==ur()&&(me.session={day:ur(),rounds:0}),me.session.rounds++,me.nextTeacher=gi(n.teacher),n.delta={delta:a,heard:i,nudged:r,total:e.checklist.length},lt(),n.delta}function Vg(){const n=me.round,e=pn[n.topic],t=Gg(),i=Un(n.teacher),r=t.heard-t.nudged,s=a=>a?`<blockquote class="${a.kind}"><span class="qk">${a.kind==="quran"?"📖 Qur'an":"📜 Hadith"}</span>“${yt(a.text)}”<cite>${re(a.ref)}</cite></blockquote>`:"";return setTimeout(async()=>{var o;const a=Pe("donePage");a&&(a.src=await mc(e,(o=me.pages[e.id])==null?void 0:o.drawing),a.classList.add("in"))},60),rt.done(),Mt.burst(),`<div class="card done">
    <div class="ribbon">🎉 MashaAllah!</div>
    <h2>${re(i)} taught <b>${re(e.title)}</b>!</h2>
    <p class="stats">${t.heard?`${re(i)} taught <b>${r}</b> point${r===1?"":"s"}${n.teacher==="child"?" all on their own":""}${t.nudged?`, and you found <b>${t.nudged}</b> more together with a nudge`:""}.`:"What a conversation!"} <span class="conv">💬 +${t.delta} conversations</span></p>
    <h4>From our Islamic sources</h4>${s(e.source)}${s(e.extra)}
    <div class="deeper parentcard"><div class="phead">👤 For ${bt()}</div>${e.deeper.map(a=>`<p>${yt(a)}</p>`).join("")}
      <p class="apply">🌱 <b>This week's family mission:</b> ${yt(e.apply)}</p></div>
    <div class="newpage"><img id="donePage" alt=""><span>📚 A new page for your Family Book!</span></div>
    <button class="chunky blue" data-act="book">📚 Open the Family Book</button>
    <button class="chunky" data-act="nextround">Next round: ${re(Un(gi(n.teacher)))} teaches →</button>
    <button class="linky" data-act="finish">Finish for tonight 🌙</button>
  </div>`}function Oa(n){rt.page(),es.open(n)}function Rl(){const n=me.round;if(!n)return Qn();const e=to[pn[n.topic].mode];let t=n.phase;if(Dg.has(t)||t==="done"){if(t==="done")return gr("done");for(let i=e.indexOf(t);i>=0;i--)if(no.has(e[i])){t=e[i];break}}gr(t)}async function Wg(){const n=new Om({canvas:Pe("scene"),antialias:!0,alpha:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.outputColorSpace=Ft,Mt=await wg(n),await Mt.setFamily(me.family||{childLook:"girl",parentRole:"baba",skin:0}),wl(me.muted);function e(){n.setSize(window.innerWidth,window.innerHeight,!1),Mt.resize(window.innerWidth,window.innerHeight),io()}window.addEventListener("resize",e),e(),es=Pg(Pe("book"),()=>me,rt),Pe("bookClose").onclick=()=>{rt.tap(),es.close()},Pe("titleButtons").addEventListener("click",r=>{var a,o;const s=r.target.closest("button");s&&(ls(),rt.tap(),(o=(a={resume:Rl,hub:()=>{me.round&&(me.round=null,lt()),Qn()},setup:ro,book:()=>Oa(null)})[s.dataset.act])==null||o.call(a))}),Pe("homeBtn").onclick=()=>{rt.tap(),lr()},Pe("bookBtn").onclick=()=>Oa(null),Pe("muteBtn").onclick=()=>{me.muted=!me.muted,wl(me.muted),lt(),hs()},Pe("setupBack").onclick=()=>lr(),window.addEventListener("pointerdown",ls,{once:!0}),document.addEventListener("visibilitychange",()=>{document.hidden&&lt()});let t=performance.now();function i(r){const s=Math.max(0,Math.min(.05,(r-t)/1e3));t=r,Mt.update(s),Mt.render(),requestAnimationFrame(i)}requestAnimationFrame(i),hs(),lr(),window.game={get state(){return me},room:Mt,book:es,TOPICS:Xi,get phase(){var r;return((r=me.round)==null?void 0:r.phase)||document.body.dataset.screen},get drawPad(){return Gt},get arrangePad(){return wn},startRound:ka,go:gr,next:$n,showHub:Qn,showTitle:lr,resume:Rl,setFamily:async r=>{me.family=r,lt(),await Mt.setFamily(r)},reset:()=>{Ag(),me=Jr()},ready:!0}}Wg();
